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
  if(!sb){ enterApp(); return; }         // accounts not configured → open access (guest)
  try{
    const { data:{ session } } = await sb.auth.getSession();
    if(session && session.user){ currentUser=session.user; await cloudPull(); enterApp(); }
    else { showLanding(); }               // no session → keep the gate up
    sb.auth.onAuthStateChange((event,s)=>{
      const u=(s&&s.user)||null, was=currentUser;
      currentUser=u; updateAcctBtn();
      if(u){ if(!was||was.id!==u.id) cloudPull(); enterApp(); }
      else { showLanding(); }             // signed out → back to the front page, locked out
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
    $('modal-box').innerHTML=`${_x}<h3 style="margin-top:2px">Accounts not set up yet</h3>
      <p style="font-size:.9rem;color:var(--muted);line-height:1.5">This site is running in <b>guest mode</b> — progress is saved on this device only. To turn on sign-in and sync across devices, add your Supabase keys in <b>supabase-config.js</b> (steps in SETUP-ACCOUNTS.md).</p>
      <button id="modal-ok" onclick="closeModal()">Got it</button>`;
    $('modal').style.display='flex'; return;
  }
  if(currentUser){
    $('modal-box').innerHTML=`${_x}<h3 style="margin-top:2px">You're signed in</h3>
      <p style="font-size:.95rem;font-weight:700;margin:2px 0">${currentUser.email||'Your account'}</p>
      <p style="font-size:.82rem;color:var(--muted);line-height:1.5">Your XP, streak, badges, and progress sync automatically and follow you to any device.</p>
      <button class="set-btn" onclick="doLogout()">Sign out</button>
      <button id="modal-ok" onclick="closeModal()">Done</button>`;
    $('modal').style.display='flex'; return;
  }
  authForm();
}
let _authEmail='';
const _ist='width:100%;padding:11px 12px;margin:6px 0;border:1.5px solid var(--line);border-radius:12px;font-size:1rem;box-sizing:border-box';
const _x='<button onclick="closeModal()" aria-label="Close" style="position:absolute;top:12px;right:14px;width:30px;height:30px;padding:0;margin:0;border-radius:50%;background:#eef2f7;color:#64748b;border:none;font-size:15px;font-weight:700;line-height:1;cursor:pointer;display:grid;place-items:center">✕</button>';
const _sub=t=>`<p style="font-size:.86rem;color:var(--muted);line-height:1.5;margin:2px 0 12px">${t}</p>`;
function _pw(id,ph,ac,onkey){ return `<div style="position:relative;margin:6px 0"><input id="${id}" type="password" placeholder="${ph}" autocomplete="${ac}" style="width:100%;padding:11px 64px 11px 12px;border:1.5px solid var(--line);border-radius:12px;font-size:1rem;box-sizing:border-box"${onkey?` onkeydown="if(event.key==='Enter')${onkey}()"`:''}><button type="button" tabindex="-1" onclick="pwToggle('${id}',this)" style="position:absolute;top:50%;right:8px;transform:translateY(-50%);background:none;border:none;color:var(--brand);font-weight:700;font-size:.8rem;cursor:pointer;padding:4px 7px;margin:0;text-decoration:underline">Show</button></div>`; }
function pwToggle(id,btn){ const i=document.getElementById(id); if(!i) return; const show=i.type==='password'; i.type=show?'text':'password'; if(btn) btn.textContent=show?'Hide':'Show'; }
function _msg(msg,good){return `<div id="acc-msg" style="font-size:.82rem;color:${good?'var(--teal)':'var(--coral)'};min-height:18px;margin:4px 0;line-height:1.4">${msg||''}</div>`;}
function authForm(mode,msg,good){
  mode=mode||'login';
  if(mode==='signup'){
    $('modal-box').innerHTML=`${_x}<h3 style="margin-top:2px">Create your account</h3>${_sub('Free — your XP, streak and progress sync to every device.')}
      <input id="acc-email" type="email" placeholder="Email" autocomplete="email" style="${_ist}">
      ${_pw('acc-pass','Password (6+ characters)','new-password','doSignup')}
      ${_msg(msg,good)}
      <button id="modal-ok" onclick="doSignup()">Create account</button>
      <button class="back-link" style="margin-top:12px;background:none;border:none;color:var(--brand);text-decoration:underline" onclick="authForm('login')">Already have an account? <b>Log in</b></button>`;
  }else if(mode==='reset'){
    $('modal-box').innerHTML=`${_x}<h3 style="margin-top:2px">Reset password</h3>${_sub("Enter your email and we'll send you a reset code.")}
      <input id="acc-email" type="email" placeholder="Email" autocomplete="email" style="${_ist}" onkeydown="if(event.key==='Enter')doReset()">
      ${_msg(msg,good)}
      <button id="modal-ok" onclick="doReset()">Send reset code</button>
      <button class="back-link" style="margin-top:12px;background:none;border:none;color:var(--brand);text-decoration:underline" onclick="authForm('login')">← Back to log in</button>`;
  }else{
    $('modal-box').innerHTML=`${_x}<h3 style="margin-top:2px">Welcome back</h3>${_sub('Log in to pick up right where you left off.')}
      <input id="acc-email" type="email" placeholder="Email" autocomplete="email" style="${_ist}">
      ${_pw('acc-pass','Password','current-password','doLogin')}
      ${_msg(msg,good)}
      <button id="modal-ok" onclick="doLogin()">Log in</button>
      <button class="back-link" style="margin-top:12px;background:none;border:none;color:var(--brand);text-decoration:underline" onclick="authForm('reset')">Forgot your password?</button>
      <button class="back-link" style="margin-top:4px;background:none;border:none;color:var(--brand);text-decoration:underline" onclick="authForm('signup')">New here? <b>Create an account</b></button>`;
  }
  $('modal').style.display='flex';
  setTimeout(()=>{ const e=$('acc-email'); if(e){e.value=_authEmail; e.focus();} },50);
}
function codeForm(purpose,msg,good){
  const recovery=purpose==='recovery';
  $('modal-box').innerHTML=`${_x}<h3 style="margin-top:2px">${recovery?'Reset your password':'Check your email'}</h3>
    ${_sub(`We emailed a code to <b>${_authEmail}</b>. Enter it${recovery?' and pick a new password':' to verify your account'}. Check spam if you don't see it.`)}
    <input id="acc-code" inputmode="numeric" maxlength="8" placeholder="Code" style="${_ist};letter-spacing:5px;text-align:center;font-size:1.3rem" onkeydown="if(event.key==='Enter')${recovery?'doResetVerify':'verifyCode'}()">
    ${recovery?_pw('acc-newpass','New password (6+ characters)','new-password','doResetVerify'):''}
    ${_msg(msg,good)}
    <button id="modal-ok" onclick="${recovery?'doResetVerify':'verifyCode'}()">${recovery?'Set new password':'Verify & sign in'}</button>
    <button class="back-link" style="margin-top:8px;background:none;border:none;color:var(--brand);text-decoration:underline" onclick="${recovery?'doReset(true)':'resendCode()'}">Resend code</button>
    <button class="back-link" style="margin-top:2px;background:none;border:none;color:var(--brand);text-decoration:underline" onclick="authForm('login')">← Back</button>`;
  $('modal').style.display='flex';
  setTimeout(()=>{ const e=$('acc-code'); if(e) e.focus(); },50);
}
async function doSignup(){
  const email=(($('acc-email')||{}).value||'').trim(), pass=(($('acc-pass')||{}).value||'');
  if(!email || !/.+@.+\..+/.test(email) || pass.length<6) return authForm('signup','Enter a valid email and a password of at least 6 characters.');
  _authEmail=email; const m=$('acc-msg'); if(m) m.textContent='Creating account…';
  try{
    const { data, error } = await sb.auth.signUp({ email, password:pass });
    if(error){
      if(/already|registered|exists|taken/i.test(error.message||'')) return authForm('signup','That email already has an account — log in instead.');
      throw error;
    }
    // Supabase hides existing emails for privacy: a re-signup returns a user with no identities
    if(data.user && Array.isArray(data.user.identities) && data.user.identities.length===0){
      return authForm('signup','That email already has an account — log in instead.');
    }
    if(data.session && data.user){ currentUser=data.user; updateAcctBtn(); await cloudPull(); closeModal(); enterApp(); }
    else codeForm('signup','We sent you a code.',true);
  }catch(e){ authForm('signup', e.message||'Could not sign up.'); }
}
async function doLogin(){
  const email=(($('acc-email')||{}).value||'').trim(), pass=(($('acc-pass')||{}).value||'');
  if(!email || !pass) return authForm('login','Enter your email and password.');
  _authEmail=email; const m=$('acc-msg'); if(m) m.textContent='Signing in…';
  try{
    const { data, error } = await sb.auth.signInWithPassword({ email, password:pass });
    if(error) throw error;
    currentUser=data.user; updateAcctBtn(); await cloudPull(); closeModal(); enterApp();
  }catch(e){
    if(/confirm/i.test(e.message||'')) codeForm('signup','Confirm your email first — enter the code we emailed you.');
    else authForm('login', e.message||'Could not log in.');
  }
}
async function verifyCode(){
  const token=(($('acc-code')||{}).value||'').trim();
  if(token.length<6) return codeForm('signup','Enter the code from your email.');
  const m=$('acc-msg'); if(m) m.textContent='Verifying…';
  try{
    let res=await sb.auth.verifyOtp({ email:_authEmail, token, type:'signup' });
    if(res.error){ const r2=await sb.auth.verifyOtp({ email:_authEmail, token, type:'email' }); if(!r2.error) res=r2; }
    if(res.error) throw res.error;
    currentUser=res.data.user; updateAcctBtn(); await cloudPull(); closeModal(); enterApp();
  }catch(e){ codeForm('signup', e.message||'That code was wrong or expired. Try again.'); }
}
async function resendCode(){
  const m=$('acc-msg'); if(m) m.textContent='Resending…';
  try{ const { error } = await sb.auth.resend({ type:'signup', email:_authEmail }); if(error) throw error; codeForm('signup','✓ New code sent.',true); }
  catch(e){ codeForm('signup', e.message||'Could not resend.'); }
}
async function doReset(resend){
  const email=resend? _authEmail : (($('acc-email')||{}).value||'').trim();
  if(!email || !/.+@.+\..+/.test(email)) return authForm('reset','Enter a valid email address.');
  _authEmail=email; const m=$('acc-msg'); if(m) m.textContent='Sending reset code…';
  try{
    const { error } = await sb.auth.resetPasswordForEmail(email);
    if(error) throw error;
    codeForm('recovery', resend?'✓ New code sent.':'', true);
  }catch(e){ authForm('reset', e.message||'Could not send a reset code.'); }
}
async function doResetVerify(){
  const token=(($('acc-code')||{}).value||'').trim(), np=(($('acc-newpass')||{}).value||'');
  if(token.length<6) return codeForm('recovery','Enter the code from your email.');
  if(np.length<6) return codeForm('recovery','Choose a new password of at least 6 characters.');
  const m=$('acc-msg'); if(m) m.textContent='Resetting…';
  try{
    const { error } = await sb.auth.verifyOtp({ email:_authEmail, token, type:'recovery' });
    if(error) throw error;
    const { error:e2 } = await sb.auth.updateUser({ password:np });
    if(e2) throw e2;
    const u=await sb.auth.getUser(); currentUser=u.data.user; updateAcctBtn(); await cloudPull(); closeModal(); enterApp();
  }catch(e){ codeForm('recovery', e.message||'That code was wrong or expired. Try again.'); }
}
async function doLogout(){
  try{ await sb.auth.signOut(); }catch(e){}
  currentUser=null; updateAcctBtn(); closeModal(); showLanding();   // locked back out to the front page
}

/* ---------------- landing / welcome gate ---------------- */
function landingLogin(){ if(!sb) return openAccount(); authForm('login'); }
function landingSignup(){ if(!sb) return openAccount(); authForm('signup'); }
function enterApp(){ const l=document.getElementById('landing'); if(l) l.style.display='none'; }
function showLanding(){ const l=document.getElementById('landing'); if(l){ l.style.display='flex'; try{window.scrollTo(0,0);}catch(e){} } fillLandingArt(); }
function fillLandingArt(){
  const a=document.getElementById('lp-art'); if(!a || typeof qVisual!=='function') return;
  const cards=[
    ['Fractions',{type:'fcircle',n:3,d:4},'-3deg'],
    ['Area model',{type:'area',a:24,b:13},'2.5deg'],
    ['Angles',{type:'angle',deg:130},'2deg'],
    ['Shapes',{type:'quad',kind:'trapezoid'},'-2.5deg']
  ];
  a.innerHTML=cards.map(([cap,v,r])=>`<div class="lp-card" style="--r:${r}"><div class="lp-cap">${cap}</div>${qVisual(v)}</div>`).join('');
}
/* boot */
function _boot(){ showLanding(); authBoot(); }   // gate up first; authBoot opens it only if logged in
if(document.readyState!=='loading') _boot();
else document.addEventListener('DOMContentLoaded', _boot);
