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
  linkForm('email');
}
let _otpEmail='';
function linkForm(step,msg){
  const good=/✓/.test(msg||'');
  const ist='width:100%;padding:10px;margin:6px 0;border:1px solid var(--line);border-radius:10px;font-size:1rem;box-sizing:border-box';
  if(step==='email'){
    $('modal-box').innerHTML=`<div class="big">👤</div><h3>Sign in</h3>
      <p style="font-size:.84rem;color:var(--muted);line-height:1.5;margin:0 0 4px">Enter your email and we'll send a one-tap sign-in link. No password — new here or returning, it's the same step.</p>
      <input id="acc-email" type="email" placeholder="you@example.com" autocomplete="email" style="${ist}"
        onkeydown="if(event.key==='Enter')sendLink()">
      <div id="acc-msg" style="font-size:.82rem;color:${good?'var(--teal)':'var(--coral)'};min-height:18px;margin:4px 0;line-height:1.4">${msg||''}</div>
      <button id="modal-ok" onclick="sendLink()">Email me a sign-in link</button>
      <button class="back-link" style="margin-top:8px;background:none;border:none" onclick="closeModal()">Cancel</button>`;
    $('modal').style.display='flex';
    setTimeout(()=>{ const e=$('acc-email'); if(e){e.value=_otpEmail; e.focus();} },50);
  }else{
    $('modal-box').innerHTML=`<div class="big">✉️</div><h3>Check your email</h3>
      <p style="font-size:.86rem;color:var(--muted);line-height:1.5">We sent a sign-in link to <b>${_otpEmail}</b>. Open that email <b>on this device</b> and tap the link — it brings you right back here, signed in.</p>
      <p style="font-size:.78rem;color:var(--muted);line-height:1.4">${msg||'No email after a minute? Check spam, or resend.'}</p>
      <button id="modal-ok" onclick="sendLink(true)">Resend link</button>
      <button class="back-link" style="margin-top:8px;background:none;border:none" onclick="linkForm('email')">← Use a different email</button>`;
    $('modal').style.display='flex';
  }
}
async function sendLink(resend){
  const email=resend? _otpEmail : (($('acc-email')||{}).value||'').trim();
  if(!email || !/.+@.+\..+/.test(email)) return linkForm('email','Enter a valid email address.');
  _otpEmail=email;
  const msg=$('acc-msg'); if(msg) msg.textContent='Sending link…';
  try{
    const redirect=window.location.origin+window.location.pathname;   // come back to wherever the site is hosted
    const { error } = await sb.auth.signInWithOtp({ email, options:{ emailRedirectTo: redirect } });
    if(error) throw error;
    linkForm('sent', resend?'✓ New link sent.':'');
  }catch(e){ linkForm('email', e.message||'Could not send the link.'); }
}
async function doLogout(){
  try{ await sb.auth.signOut(); }catch(e){}
  currentUser=null; updateAcctBtn(); closeModal();
}

/* boot */
if(document.readyState!=='loading') authBoot();
else document.addEventListener('DOMContentLoaded', authBoot);
