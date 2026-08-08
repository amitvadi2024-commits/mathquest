/* ==========================================================================
   MathQuest accounts — Supabase auth + cloud progress sync
   Loads AFTER app.js so it can read/wrap its state (xp, streak, progress,
   stats, save, refreshHUD, ...). Degrades to guest mode if not configured.
========================================================================== */
let sb=null, currentUser=null, _cloudTimer=null;

function initSupabase(){
  try{
    if(window.supabase && window.SUPA_URL && window.SUPA_KEY
       && !/YOUR_SUPABASE/.test(window.SUPA_URL) && !/YOUR_SUPABASE/.test(window.SUPA_KEY)){
      sb = window.supabase.createClient(window.SUPA_URL, window.SUPA_KEY);
    }
  }catch(e){ sb=null; }
}

function updateAcctBtn(){
  const b=$('acctBtn'); if(!b)return;
  b.textContent = currentUser ? '👤✓' : '👤';
  b.title = currentUser ? ('Account: '+(currentUser.email||'signed in')) : 'Sign in / create account';
}

async function authBoot(){
  initSupabase();
  updateAcctBtn();
  if(!sb) return;                       // guest mode — nothing else to do
  try{
    const { data:{ session } } = await sb.auth.getSession();
    if(session && session.user){ currentUser=session.user; await cloudPull(); }
    sb.auth.onAuthStateChange((event,s)=>{
      const u=(s&&s.user)||null, was=currentUser;
      currentUser=u; updateAcctBtn();
      if(u && (!was||was.id!==u.id)) cloudPull();   // fresh sign-in from the magic link
    });
  }catch(e){}
  updateAcctBtn();
}

/* ---- cloud read/write of the same blob save() stores locally ---- */
async function cloudPull(){
  if(!sb || !currentUser) return;
  try{
    const { data, error } = await sb.from('progress').select('data').eq('user_id',currentUser.id).maybeSingle();
    if(error) throw error;
    if(data && data.data){
      const d=data.data;
      if(typeof d.xp==='number') xp=d.xp;
      if(typeof d.streak==='number') streak=d.streak;
      if(d.progress) progress=Object.assign(progress, d.progress);
      if(d.stats) stats=Object.assign(stats, d.stats);
      progress.best=Object.assign({speed:0,drop:0,match:0,balloon:0,tf:0}, progress.best||{});
      progress.settings=Object.assign({text:"normal",cb:false,read:false}, progress.settings||{});
      if(!progress.avatar) progress.avatar="🦆";
      try{ localStorage.setItem('mathquest_g46',JSON.stringify({xp,streak,progress,stats})); }catch(e){}
      refreshAfterSync();
    }else{
      // first time this account is used — carry current (guest) progress up
      await cloudPush();
    }
  }catch(e){ console.warn('cloudPull:', e.message); }
}
function cloudPushDebounced(){ if(!sb||!currentUser)return; clearTimeout(_cloudTimer); _cloudTimer=setTimeout(cloudPush,1200); }
async function cloudPush(){
  if(!sb || !currentUser) return;
  try{
    await sb.from('progress').upsert(
      { user_id:currentUser.id, data:{xp,streak,progress,stats}, updated_at:new Date().toISOString() },
      { onConflict:'user_id' });
  }catch(e){ console.warn('cloudPush:', e.message); }
}
function refreshAfterSync(){
  try{ applySettings(); refreshHUD(); updateNavAvatar(); drawDuck();
    if($('home') && $('home').classList.contains('active')) renderHome(); }catch(e){}
}

/* ---- make every existing save() also sync to the cloud ---- */
if(typeof window.save==='function'){
  const _save=window.save;
  window.save=function(){ _save.apply(this,arguments); cloudPushDebounced(); };
}

/* ---------------- account modal (reuses the app's modal) ---------------- */
function openAccount(){
  if(typeof sfx!=='undefined') sfx.click();
  if(!sb){
    $('modal-box').innerHTML=`<div class="big">👤</div><h3>Accounts not set up yet</h3>
      <p style="font-size:.9rem;color:var(--muted);line-height:1.5">This site is running in <b>guest mode</b> — progress is saved on this device only. To turn on sign-in and sync across devices, add your Supabase keys in <b>supabase-config.js</b> (steps in SETUP-ACCOUNTS.md).</p>
      <button id="modal-ok" onclick="closeModal()">Got it</button>`;
    $('modal').style.display='flex'; return;
  }
  if(currentUser){
    $('modal-box').innerHTML=`<div class="big">👤</div><h3>Signed in</h3>
      <p style="font-size:.92rem;font-weight:700">${currentUser.email||'Your account'}</p>
      <p style="font-size:.82rem;color:var(--muted);line-height:1.5">Your XP, streak, badges, and progress sync to your account automatically and follow you to any device.</p>
      <button class="set-btn" onclick="doLogout()">Sign out</button>
      <button id="modal-ok" onclick="closeModal()">Done</button>`;
    $('modal').style.display='flex'; return;
  }
  authForm();
}
let _authEmail='';
const _ist='width:100%;padding:10px;margin:6px 0;border:1px solid var(--line);border-radius:10px;font-size:1rem;box-sizing:border-box';
function authForm(msg,good){
  $('modal-box').innerHTML=`<div class="big">👤</div><h3>Log in or sign up</h3>
    <input id="acc-email" type="email" placeholder="Email" autocomplete="email" style="${_ist}">
    <input id="acc-pass" type="password" placeholder="Password (6+ characters)" autocomplete="current-password" style="${_ist}" onkeydown="if(event.key==='Enter')doLogin()">
    <div id="acc-msg" style="font-size:.82rem;color:${good?'var(--teal)':'var(--coral)'};min-height:18px;margin:4px 0;line-height:1.4">${msg||''}</div>
    <button id="modal-ok" onclick="doLogin()">Log in</button>
    <button class="set-btn" style="margin-top:8px" onclick="doSignup()">Create account</button>
    <button class="back-link" style="margin-top:8px;background:none;border:none" onclick="closeModal()">Cancel</button>`;
  $('modal').style.display='flex';
  setTimeout(()=>{ const e=$('acc-email'); if(e){e.value=_authEmail; e.focus();} },50);
}
function codeForm(msg,good){
  $('modal-box').innerHTML=`<div class="big">✉️</div><h3>Enter your code</h3>
    <p style="font-size:.84rem;color:var(--muted);line-height:1.5">We emailed a 6-digit code to <b>${_authEmail}</b>. Enter it to verify your account. (Check spam if it's not there.)</p>
    <input id="acc-code" inputmode="numeric" maxlength="6" placeholder="123456" style="${_ist};letter-spacing:6px;text-align:center;font-size:1.4rem" onkeydown="if(event.key==='Enter')verifyCode()">
    <div id="acc-msg" style="font-size:.82rem;color:${good?'var(--teal)':'var(--coral)'};min-height:18px;margin:4px 0;line-height:1.4">${msg||''}</div>
    <button id="modal-ok" onclick="verifyCode()">Verify & sign in</button>
    <button class="set-btn" style="margin-top:8px" onclick="resendCode()">Resend code</button>
    <button class="back-link" style="margin-top:8px;background:none;border:none" onclick="authForm()">← Back</button>`;
  $('modal').style.display='flex';
  setTimeout(()=>{ const e=$('acc-code'); if(e) e.focus(); },50);
}
async function doSignup(){
  const email=(($('acc-email')||{}).value||'').trim(), pass=(($('acc-pass')||{}).value||'');
  if(!email || !/.+@.+\..+/.test(email) || pass.length<6) return authForm('Enter a valid email and a password of at least 6 characters.');
  _authEmail=email; const m=$('acc-msg'); if(m) m.textContent='Creating account…';
  try{
    const { data, error } = await sb.auth.signUp({ email, password:pass });
    if(error) throw error;
    if(data.session && data.user){ currentUser=data.user; updateAcctBtn(); await cloudPull(); closeModal(); }
    else codeForm('We sent you a 6-digit code.',true);
  }catch(e){ authForm(e.message||'Could not sign up.'); }
}
async function doLogin(){
  const email=(($('acc-email')||{}).value||'').trim(), pass=(($('acc-pass')||{}).value||'');
  if(!email || !pass) return authForm('Enter your email and password.');
  _authEmail=email; const m=$('acc-msg'); if(m) m.textContent='Signing in…';
  try{
    const { data, error } = await sb.auth.signInWithPassword({ email, password:pass });
    if(error) throw error;
    currentUser=data.user; updateAcctBtn(); await cloudPull(); closeModal();
  }catch(e){
    if(/confirm/i.test(e.message||'')) codeForm('Confirm your email first — enter the 6-digit code we emailed you.');
    else authForm(e.message||'Could not log in.');
  }
}
async function verifyCode(){
  const token=(($('acc-code')||{}).value||'').trim();
  if(token.length<6) return codeForm('Enter the 6-digit code from your email.');
  const m=$('acc-msg'); if(m) m.textContent='Verifying…';
  try{
    let res=await sb.auth.verifyOtp({ email:_authEmail, token, type:'signup' });
    if(res.error){ const r2=await sb.auth.verifyOtp({ email:_authEmail, token, type:'email' }); if(!r2.error) res=r2; }
    if(res.error) throw res.error;
    currentUser=res.data.user; updateAcctBtn(); await cloudPull(); closeModal();
  }catch(e){ codeForm(e.message||'That code was wrong or expired. Try again.'); }
}
async function resendCode(){
  const m=$('acc-msg'); if(m) m.textContent='Resending…';
  try{ const { error } = await sb.auth.resend({ type:'signup', email:_authEmail }); if(error) throw error; codeForm('✓ New code sent.',true); }
  catch(e){ codeForm(e.message||'Could not resend.'); }
}
async function doLogout(){
  try{ await sb.auth.signOut(); }catch(e){}
  currentUser=null; updateAcctBtn(); closeModal();
}

/* boot */
if(document.readyState!=='loading') authBoot();
else document.addEventListener('DOMContentLoaded', authBoot);
