/* ==========================================================================
   MathQuest engine — grades 4-6
========================================================================== */
const $=id=>document.getElementById(id);
const gorder=['g4','g5','g6'];
const UNITLABEL={g4u1:"Place Value",g4u2:"Multiply",g4u3:"Fractions",g4u4:"Decimals",g4u5:"Geometry",
 g5u1:"Place Value",g5u2:"Decimals",g5u3:"Fractions",g5u4:"Volume",g5u5:"Coordinates",
 g6u1:"Ratios",g6u2:"Numbers",g6u3:"Equations",g6u4:"Geometry",g6u5:"Statistics"};
function ulabel(u){return UNITLABEL[u.id]||u.code;}

/* ---------------- STATE + SAVE ---------------- */
let xp=0, streak=0, muted=false;
let progress={ sections:{}, tests:{}, grades:{}, rec:{}, best:{speed:0,drop:0,match:0,balloon:0,tf:0}, name:"", avatar:"🦆", settings:{text:"normal",cb:false,read:false} };
let stats={answered:0,correct:0};

function save(){ try{localStorage.setItem('mathquest_g46',JSON.stringify({xp,streak,progress,stats}));}catch(e){} }
function load(){ try{const d=JSON.parse(localStorage.getItem('mathquest_g46'));
  if(d){xp=d.xp||0;streak=d.streak||0;progress=Object.assign(progress,d.progress||{});stats=Object.assign(stats,d.stats||{});}}catch(e){}
  if(!streak)streak=1;
  progress.best=Object.assign({speed:0,drop:0,match:0,balloon:0,tf:0},progress.best||{});
  progress.settings=Object.assign({text:"normal",cb:false,read:false},progress.settings||{});
  if(!progress.avatar)progress.avatar="🦆";
}
const skey=(g,u,s)=>g+'|'+u+'|'+s;

/* ---------------- SOUND ---------------- */
let actx=null;
function audio(){if(!actx){try{actx=new(window.AudioContext||window.webkitAudioContext)();}catch(e){}}return actx;}
function beep(f,d,t,v,w){if(muted)return;const a=audio();if(!a)return;const s=a.currentTime+(w||0);
  const o=a.createOscillator(),g=a.createGain();o.type=t||'sine';o.frequency.value=f;
  g.gain.setValueAtTime(0,s);g.gain.linearRampToValueAtTime(v||.18,s+.02);g.gain.exponentialRampToValueAtTime(.0001,s+d);
  o.connect(g);g.connect(a.destination);o.start(s);o.stop(s+d+.02);}
const sfx={click(){beep(880,.025,'sine',.05);beep(1320,.03,'sine',.03,.015);},correct(){beep(660,.12,'sine',.18);beep(880,.16,'sine',.18,.1);},
  wrong(){beep(200,.22,'sawtooth',.12);},win(){[523,659,784,1047,1319].forEach((f,i)=>beep(f,.2,'triangle',.2,i*.09));},
  level(){[523,659,784,1047].forEach((f,i)=>beep(f,.22,'triangle',.2,i*.11));},tick(){beep(300,.04,'square',.05);}};
function toggleMute(){muted=!muted;$('muteBtn').textContent=muted?'🔇':'🔊';if(!muted)sfx.click();save();}

/* ---------------- LEVEL / XP ---------------- */
function level(){return Math.floor(xp/100)+1;}
function refreshHUD(){
  $('xp').textContent=xp;$('streak').textContent=streak;$('lvl').textContent=level();
  const C=2*Math.PI*15;$('xpring').setAttribute('stroke-dashoffset',C*(1-(xp%100)/100));
}
function addXP(n){const b=level();xp+=n;refreshHUD();
  if(level()>b){sfx.level();confetti();modal('🎉','Level Up!','You reached level '+level()+'!');}
  save();}

/* ---------------- MASCOT DUCK ---------------- */
function drawDuck(){
  $('duck').innerHTML=`
   <ellipse cx="52" cy="70" rx="30" ry="24" fill="#ffd43b"/>
   <ellipse cx="50" cy="70" rx="30" ry="24" fill="#ffe066"/>
   <circle cx="34" cy="40" r="21" fill="#ffe066"/>
   <path d="M20 40 q-14 2 -16 8 q10 4 16 -1 z" fill="#f59e0b"/>
   <circle cx="30" cy="36" r="4.5" fill="#fff"/><circle cx="31" cy="37" r="2.6" fill="#2b2640"/>
   <path d="M60 60 q22 -4 26 8 q-14 6 -26 -2 z" fill="#ffd43b"/>
   <path d="M46 92 l-6 8 M56 92 l6 8" stroke="#f59e0b" stroke-width="4" stroke-linecap="round"/>`;
}
let duckTimer=null;
function duckSay(msg,cheer){
  const b=$('duck-bubble');b.textContent=msg;b.classList.add('show');
  const d=$('duck');if(cheer){d.classList.add('cheer');setTimeout(()=>d.classList.remove('cheer'),1400);}
  clearTimeout(duckTimer);duckTimer=setTimeout(()=>b.classList.remove('show'),3200);
}
const cheers=["Quack-tastic! 🎉","You nailed it!","Way to go!","Splash-ing work!","So smart! 🦆"];
const encour=["Almost! Try again 🦆","Don't give up!","You've got this!","Learning is winning!","Give it another shot!"];

/* ---------------- MODAL ---------------- */
function modal(big,title,body,btn,cb){
  $('modal-box').innerHTML=`<div class="big">${big}</div><h3>${title}</h3><p>${body}</p><button id="modal-ok">${btn||'Awesome!'}</button>`;
  $('modal').style.display='flex';
  $('modal-ok').onclick=()=>{$('modal').style.display='none';sfx.click();if(cb)cb();};
}

/* ==========================================================================
   INTERACTIVE VISUALS LIBRARY
========================================================================== */
const IV={
 placevalue:{html:`<div class="playground"><h4>🔢 Place Value Builder</h4>
   <label class="fld">Number: <span id="pv-lbl">3482</span></label>
   <input type="range" id="pv" min="0" max="99999" value="3482" oninput="ivPlace()">
   <div id="pv-out"></div></div>`,
  init(){ivPlace();}},
 comparetool:{html:`<div class="playground"><h4>Compare Two Numbers</h4>
   <label class="fld">Number A: <span id="cmp-a-lbl">2748</span></label><input type="range" id="cmp-a" min="0" max="9999" value="2748" oninput="ivCompare()">
   <label class="fld">Number B: <span id="cmp-b-lbl">2751</span></label><input type="range" id="cmp-b" min="0" max="9999" value="2751" oninput="ivCompare()">
   <div id="cmp-out"></div><div class="readout"><div class="chip"><b id="cmp-res">2,748 &lt; 2,751</b><span>comparison</span></div></div></div>`,
  init(){ivCompare();}},
 roundline:{html:`<div class="playground"><h4>Rounding Number Line</h4>
   <label class="fld">Number: <span id="rl-n-lbl">347</span></label><input type="range" id="rl-n" min="0" max="1000" value="347" oninput="ivRound()">
   <div id="rl-out"></div><div class="readout"><div class="chip"><b id="rl-t">350</b><span>nearest ten</span></div><div class="chip"><b id="rl-h">300</b><span>nearest hundred</span></div></div></div>`,
  init(){ivRound();}},
 blocks:{html:`<div class="playground"><h4>Base-Ten Blocks</h4>
   <label class="fld">Number: <span id="bk-n-lbl">1275</span></label><input type="range" id="bk-n" min="0" max="1999" value="1275" oninput="ivBlocks()">
   <div id="bk-out" style="text-align:center;overflow:auto"></div>
   <div class="readout"><div class="chip"><b id="bk-cnt">1 · 2 · 7 · 5</b><span>thousands · hundreds · tens · ones</span></div></div></div>`,
  init(){ivBlocks();}},
 forms:{html:`<div class="playground"><h4>Three Forms of a Number</h4>
   <label class="fld">Number: <span id="fo-n-lbl">5213</span></label><input type="range" id="fo-n" min="0" max="9999" value="5213" oninput="ivForms()">
   <div id="fo-out"></div></div>`,
  init(){ivForms();}},
 array:{html:`<div class="playground"><h4>✖️ Multiplication Array</h4>
   <label class="fld">Rows: <span id="ar-r-lbl">4</span></label><input type="range" id="ar-r" min="1" max="10" value="4" oninput="ivArray()">
   <label class="fld">Columns: <span id="ar-c-lbl">6</span></label><input type="range" id="ar-c" min="1" max="10" value="6" oninput="ivArray()">
   <div id="ar-out"></div><div class="readout"><div class="chip"><b id="ar-prod">24</b><span>product</span></div></div></div>`,
  init(){ivArray();}},
 fracbar:{html:`<div class="playground"><h4>🍕 Fraction Bar</h4>
   <label class="fld">Numerator: <span id="fb-n-lbl">1</span></label><input type="range" id="fb-n" min="0" max="12" value="1" oninput="ivFrac()">
   <label class="fld">Denominator: <span id="fb-d-lbl">2</span></label><input type="range" id="fb-d" min="1" max="12" value="2" oninput="ivFrac()">
   <div id="fb-out"></div><div class="readout"><div class="chip"><b id="fb-dec">0.50</b><span>as a decimal</span></div></div></div>`,
  init(){ivFrac();}},
 fracmultgrid:{html:`<div class="playground"><h4>🔲 Fraction Multiply Grid</h4>
   <label class="fld">First: 1/<span id="fm-a-lbl">2</span></label><input type="range" id="fm-a" min="1" max="6" value="2" oninput="ivFmg()">
   <label class="fld">Second: 1/<span id="fm-b-lbl">3</span></label><input type="range" id="fm-b" min="1" max="6" value="3" oninput="ivFmg()">
   <div id="fm-out"></div><div class="readout"><div class="chip"><b id="fm-res">1/6</b><span>product</span></div></div></div>`,
  init(){ivFmg();}},
 fracdiv:{html:`<div class="playground"><h4>➗ Divide Fractions (keep-change-flip)</h4>
   <label class="fld">Whole: <span id="fd-w-lbl">3</span></label><input type="range" id="fd-w" min="1" max="8" value="3" oninput="ivFdiv()">
   <label class="fld">Divide by 1/<span id="fd-d-lbl">2</span></label><input type="range" id="fd-d" min="2" max="8" value="2" oninput="ivFdiv()">
   <div id="fd-out"></div><div class="readout"><div class="chip"><b id="fd-res">6</b><span>answer</span></div></div></div>`,
  init(){ivFdiv();}},
 decimalgrid:{html:`<div class="playground"><h4>🔟 Decimal Grid (out of 100)</h4>
   <label class="fld">Shaded: <span id="dg-n-lbl">37</span> / 100</label><input type="range" id="dg-n" min="0" max="100" value="37" oninput="ivDgrid()">
   <div id="dg-out"></div><div class="readout"><div class="chip"><b id="dg-dec">0.37</b><span>decimal</span></div><div class="chip"><b id="dg-fr">37/100</b><span>fraction</span></div></div></div>`,
  init(){ivDgrid();}},
 decimalnumberline:{html:`<div class="playground"><h4>📏 Decimal Number Line & Rounding</h4>
   <label class="fld">Value: <span id="dn-v-lbl">3.4</span></label><input type="range" id="dn-v" min="0" max="100" value="34" oninput="ivDline()">
   <div id="dn-out"></div><div class="readout"><div class="chip"><b id="dn-round">3</b><span>nearest whole</span></div></div></div>`,
  init(){ivDline();}},
 angle:{html:`<div class="playground"><h4>📐 Angle Explorer</h4>
   <label class="fld">Angle: <span id="ag-a-lbl">60</span>°</label><input type="range" id="ag-a" min="0" max="180" value="60" oninput="ivAngle()">
   <div id="ag-out"></div><div class="readout"><div class="chip"><b id="ag-type">acute</b><span>type</span></div></div></div>`,
  init(){ivAngle();}},
 arearect:{html:`<div class="playground"><h4>▭ Area & Perimeter</h4>
   <label class="fld">Length: <span id="rc-l-lbl">5</span></label><input type="range" id="rc-l" min="1" max="10" value="5" oninput="ivRect()">
   <label class="fld">Width: <span id="rc-w-lbl">3</span></label><input type="range" id="rc-w" min="1" max="10" value="3" oninput="ivRect()">
   <div id="rc-out"></div><div class="readout"><div class="chip"><b id="rc-area">15</b><span>area</span></div><div class="chip"><b id="rc-per">16</b><span>perimeter</span></div></div></div>`,
  init(){ivRect();}},
 box:{html:`<div class="playground"><h4>📦 Box Builder</h4>
   <label class="fld">Length <span id="bx-l-lbl">3</span></label><input type="range" id="bx-l" min="1" max="8" value="3" oninput="ivBox()">
   <label class="fld">Width <span id="bx-w-lbl">2</span></label><input type="range" id="bx-w" min="1" max="8" value="2" oninput="ivBox()">
   <label class="fld">Height <span id="bx-h-lbl">4</span></label><input type="range" id="bx-h" min="1" max="8" value="4" oninput="ivBox()">
   <div id="bx-out"></div><div class="readout"><div class="chip"><b id="bx-vol">24</b><span>volume</span></div><div class="chip"><b id="bx-sa">52</b><span>surface area</span></div></div></div>`,
  init(){ivBox();}},
 coord:{html:`<div class="playground"><h4>📍 Coordinate Plotter</h4>
   <label class="fld">x (across): <span id="co-x-lbl">3</span></label><input type="range" id="co-x" min="0" max="10" value="3" oninput="ivCoord()">
   <label class="fld">y (up): <span id="co-y-lbl">2</span></label><input type="range" id="co-y" min="0" max="10" value="2" oninput="ivCoord()">
   <div id="co-out"></div><div class="readout"><div class="chip"><b id="co-pt">(3, 2)</b><span>point</span></div></div></div>`,
  init(){ivCoord();}},
 ratio:{html:`<div class="playground"><h4>⚖️ Ratio Machine</h4>
   <label class="fld">A: <span id="rt-a-lbl">6</span></label><input type="range" id="rt-a" min="1" max="12" value="6" oninput="ivRatio()">
   <label class="fld">B: <span id="rt-b-lbl">4</span></label><input type="range" id="rt-b" min="1" max="12" value="4" oninput="ivRatio()">
   <div id="rt-out"></div><div class="readout"><div class="chip"><b id="rt-simp">3 : 2</b><span>simplest form</span></div></div></div>`,
  init(){ivRatio();}},
 numline:{html:`<div class="playground"><h4>🔢 Number Line: a + b</h4>
   <label class="fld">a = <span id="nl-a-lbl">-3</span></label><input type="range" id="nl-a" min="-10" max="10" value="-3" oninput="ivNum()">
   <label class="fld">b = <span id="nl-b-lbl">8</span></label><input type="range" id="nl-b" min="-10" max="10" value="8" oninput="ivNum()">
   <div id="nl-out"></div><div class="readout"><div class="chip"><b id="nl-sum">5</b><span>result</span></div></div></div>`,
  init(){ivNum();}},
 balance:{html:`<div class="playground"><h4>⚖️ Equation Solver: x + q = r</h4>
   <label class="fld">q = <span id="bl-q-lbl">5</span></label><input type="range" id="bl-q" min="-10" max="10" value="5" oninput="ivBal()">
   <label class="fld">r = <span id="bl-r-lbl">12</span></label><input type="range" id="bl-r" min="-5" max="30" value="12" oninput="ivBal()">
   <div id="bl-out"></div><div class="readout"><div class="chip"><b id="bl-x">x = 7</b><span>solution</span></div></div></div>`,
  init(){ivBal();}},
 triangle:{html:`<div class="playground"><h4>🔺 Triangle Area</h4>
   <label class="fld">Base: <span id="tr-b-lbl">8</span></label><input type="range" id="tr-b" min="1" max="12" value="8" oninput="ivTri()">
   <label class="fld">Height: <span id="tr-h-lbl">4</span></label><input type="range" id="tr-h" min="1" max="12" value="4" oninput="ivTri()">
   <div id="tr-out"></div><div class="readout"><div class="chip"><b id="tr-area">16</b><span>½ × b × h</span></div></div></div>`,
  init(){ivTri();}},
 dotplot:{html:`<div class="playground"><h4>📊 Data Explorer (mean, median, range)</h4>
   <p style="text-align:center;font-size:.85rem">Click the buttons to add data points!</p>
   <div id="dp-out"></div>
   <div style="text-align:center;margin-top:10px">
     <button class="go-btn" style="background:var(--blue)" onclick="ivDotAdd()">+ Add value</button>
     <button class="go-btn" style="background:var(--muted)" onclick="ivDotReset()">Reset</button></div>
   <div class="readout"><div class="chip"><b id="dp-mean">0</b><span>mean</span></div><div class="chip"><b id="dp-med">0</b><span>median</span></div><div class="chip"><b id="dp-range">0</b><span>range</span></div></div></div>`,
  init(){ivDotReset();}}
};

/* ---- IV implementations ---- */
function ivPlace(){const n=+$('pv').value;$('pv-lbl').textContent=n;
  const names=['ones','tens','hundreds','thousands','ten-thousands'];const s=(''+n).padStart(5,'0');
  let rows='';for(let i=0;i<5;i++){const d=+s[i],place=4-i;if(place>4)continue;
    rows+=`<div style="display:flex;justify-content:space-between;padding:4px 10px;border-radius:8px;background:${d?'#fff':'#f0edfb'};margin:3px 0">
      <span><b style="color:var(--purple);font-size:1.1rem">${d}</b> ${names[place]}</span><span style="color:var(--muted)">= ${d*Math.pow(10,place)}</span></div>`;}
  $('pv-out').innerHTML=rows;}
function ivCompare(){const a=+$('cmp-a').value,b=+$('cmp-b').value;$('cmp-a-lbl').textContent=a;$('cmp-b-lbl').textContent=b;
  const sa=(''+a).padStart(4,'0'),sb=(''+b).padStart(4,'0'),names=['thousands','hundreds','tens','ones'];
  let diff=-1;for(let i=0;i<4;i++){if(sa[i]!==sb[i]){diff=i;break;}}
  const sym=a>b?'>':a<b?'<':'=';
  let rows='';for(let i=0;i<4;i++){const hl=(i===diff);const bg=hl?'#fff3cd':'transparent',fg=hl?'#946200':'var(--text)';
    rows+=`<div style="display:flex;gap:8px;justify-content:center;align-items:center;margin:2px 0">
      <span style="width:84px;font-size:.7rem;color:var(--muted);text-align:right">${names[i]}</span>
      <span style="width:32px;text-align:center;font-weight:800;border-radius:6px;background:${bg};color:${fg}">${sa[i]}</span>
      <span style="width:32px;text-align:center;font-weight:800;border-radius:6px;background:${bg};color:${fg}">${sb[i]}</span></div>`;}
  const note=diff>=0?`First place that differs is the <b>${names[diff]}</b> — that decides it.`:`Every place matches — the numbers are equal.`;
  $('cmp-out').innerHTML=`<div style="background:#fff;border-radius:10px;padding:10px 6px">${rows}</div><p style="text-align:center;font-size:.8rem;color:var(--muted);margin-top:6px">${note}</p>`;
  $('cmp-res').textContent=a.toLocaleString()+' '+sym+' '+b.toLocaleString();}
function ivRound(){const n=+$('rl-n').value;$('rl-n-lbl').textContent=n;
  const t=Math.round(n/10)*10,h=Math.round(n/100)*100;$('rl-t').textContent=t;$('rl-h').textContent=h;
  const lo=Math.floor(n/100)*100,hi=lo+100,mid=lo+50,W=300,pad=30,X=v=>pad+((v-lo)/100)*(W-2*pad);
  $('rl-out').innerHTML=`<svg viewBox="0 0 ${W} 70" style="background:#fff;border-radius:10px">
    <line x1="${pad}" y1="40" x2="${W-pad}" y2="40" stroke="#999" stroke-width="2"/>
    <line x1="${X(mid)}" y1="34" x2="${X(mid)}" y2="46" stroke="#f2a33c" stroke-dasharray="3"/>
    <text x="${X(mid)}" y="60" font-size="9" fill="#f2a33c" text-anchor="middle">halfway ${mid}</text>
    <circle cx="${X(lo)}" cy="40" r="4" fill="#2f54eb"/><text x="${X(lo)}" y="24" font-size="10" fill="#2f54eb" text-anchor="middle">${lo}</text>
    <circle cx="${X(hi)}" cy="40" r="4" fill="#2f54eb"/><text x="${X(hi)}" y="24" font-size="10" fill="#2f54eb" text-anchor="middle">${hi}</text>
    <circle cx="${X(n)}" cy="40" r="6" fill="#e14b4b"/><text x="${X(n)}" y="24" font-size="10" font-weight="bold" fill="#e14b4b" text-anchor="middle">${n}</text></svg>
    <p style="text-align:center;font-size:.8rem;color:var(--muted)">${n} rounds to <b>${h}</b> at the nearest hundred.</p>`;}
function blocksSVG(n){const th=Math.floor(n/1000),h=Math.floor(n%1000/100),te=Math.floor(n%100/10),o=n%10;
  let x=4,g='';function grp(count,w,draw){for(let i=0;i<count;i++){g+=draw(x);x+=w;}if(count)x+=8;}
  grp(th,30,X=>`<rect x="${X}" y="4" width="26" height="26" rx="2" fill="#2f54eb"/><rect x="${X+3}" y="1" width="26" height="26" rx="2" fill="none" stroke="#2f54eb"/>`);
  grp(h,26,X=>`<rect x="${X}" y="7" width="22" height="22" fill="#4c8dff" stroke="#fff"/>`);
  grp(te,9,X=>`<rect x="${X}" y="7" width="6" height="22" fill="#0ea5a4" stroke="#fff"/>`);
  grp(o,8,X=>`<rect x="${X}" y="23" width="6" height="6" fill="#f2a33c" stroke="#fff"/>`);
  return `<svg viewBox="0 0 ${Math.max(x,40)} 34" style="max-height:56px;width:auto">${g}</svg>`;}
function numWords(n){if(n===0)return 'zero';
  const on=['','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
  const tn=['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
  function u1000(x){let s='';if(x>=100){s+=on[Math.floor(x/100)]+' hundred';x%=100;if(x)s+=' ';}
    if(x>=20){s+=tn[Math.floor(x/10)];x%=10;if(x)s+='-'+on[x];}else if(x>0)s+=on[x];return s;}
  let res='',th=Math.floor(n/1000),r=n%1000;
  if(th){res+=u1000(th)+' thousand';if(r)res+=', ';}
  if(r)res+=u1000(r);return res;}
function ivBlocks(){const n=+$('bk-n').value;$('bk-n-lbl').textContent=n;
  $('bk-cnt').textContent=Math.floor(n/1000)+' · '+Math.floor(n%1000/100)+' · '+Math.floor(n%100/10)+' · '+(n%10);
  $('bk-out').innerHTML=blocksSVG(n)+`<p style="font-size:.78rem;color:var(--muted);margin-top:4px">These blocks show <b>${n.toLocaleString()}</b>.</p>`;}
function ivForms(){const n=+$('fo-n').value;$('fo-n-lbl').textContent=n;
  const s=(''+n).padStart(4,'0');const parts=[];for(let i=0;i<4;i++){const d=+s[i],pl=3-i;if(d)parts.push(d*Math.pow(10,pl));}
  $('fo-out').innerHTML=`<div style="background:#fff;border-radius:10px;padding:12px 14px;line-height:1.9">
    <div><b style="color:var(--brand)">Standard:</b> ${n.toLocaleString()}</div>
    <div><b style="color:var(--brand)">Word:</b> ${numWords(n)||'zero'}</div>
    <div><b style="color:var(--brand)">Expanded:</b> ${parts.length?parts.join(' + '):'0'}</div></div>`;}
function ivArray(){const r=+$('ar-r').value,c=+$('ar-c').value;$('ar-r-lbl').textContent=r;$('ar-c-lbl').textContent=c;$('ar-prod').textContent=r*c;
  const cell=18;let dots='';for(let y=0;y<r;y++)for(let x=0;x<c;x++)dots+=`<circle cx="${12+x*cell}" cy="${12+y*cell}" r="6" fill="#0ea5e9"/>`;
  $('ar-out').innerHTML=`<svg viewBox="0 0 ${24+c*cell} ${24+r*cell}" style="background:#fff;border-radius:12px;max-height:200px">${dots}</svg>`;}
function ivFrac(){let n=+$('fb-n').value,d=+$('fb-d').value;if(n>d){n=d;$('fb-n').value=d;}$('fb-n-lbl').textContent=n;$('fb-d-lbl').textContent=d;
  $('fb-dec').textContent=(n/d).toFixed(2);const W=280,seg=W/d;let bars='';
  for(let i=0;i<d;i++)bars+=`<rect x="${i*seg}" y="0" width="${seg-2}" height="46" rx="4" fill="${i<n?'#fb7185':'#fff'}" stroke="#fb7185" stroke-width="2"/>`;
  $('fb-out').innerHTML=`<svg viewBox="0 0 ${W} 50" style="background:#fff;border-radius:12px">${bars}</svg>`;}
function ivFmg(){const a=+$('fm-a').value,b=+$('fm-b').value;$('fm-a-lbl').textContent=a;$('fm-b-lbl').textContent=b;
  $('fm-res').textContent='1/'+(a*b);const W=180,cw=W/b,ch=W/a;let cells='';
  for(let y=0;y<a;y++)for(let x=0;x<b;x++){const on=(x===0&&y===0);cells+=`<rect x="${x*cw}" y="${y*ch}" width="${cw-1}" height="${ch-1}" fill="${on?'#0ea5e9':'#eee'}" stroke="#fff"/>`;}
  $('fm-out').innerHTML=`<svg viewBox="0 0 ${W} ${W}" style="background:#fff;border-radius:12px;max-height:180px">${cells}</svg>`;}
function ivFdiv(){const w=+$('fd-w').value,d=+$('fd-d').value;$('fd-w-lbl').textContent=w;$('fd-d-lbl').textContent=d;
  $('fd-res').textContent=w*d;const W=280;let bars='';const seg=W/w;
  for(let i=0;i<w;i++){for(let j=0;j<d;j++)bars+=`<rect x="${i*seg+j*(seg/d)}" y="0" width="${seg/d-1}" height="40" fill="${(i*d+j)%2?'#74c0fc':'#38bdf8'}" stroke="#fff"/>`;}
  $('fd-out').innerHTML=`<svg viewBox="0 0 ${W} 44" style="background:#fff;border-radius:12px">${bars}</svg><p style="text-align:center;font-size:.8rem;color:var(--muted)">${w} wholes split into ${d}ths = ${w*d} pieces</p>`;}
function ivDgrid(){const n=+$('dg-n').value;$('dg-n-lbl').textContent=n;$('dg-dec').textContent=(n/100).toFixed(2);$('dg-fr').textContent=n+'/100';
  let cells='';for(let i=0;i<100;i++){const x=i%10,y=Math.floor(i/10);cells+=`<rect x="${x*16}" y="${y*16}" width="15" height="15" fill="${i<n?'#f59e0b':'#fff'}" stroke="#ffd8a8"/>`;}
  $('dg-out').innerHTML=`<svg viewBox="0 0 160 160" style="background:#fff;border-radius:12px;max-height:200px">${cells}</svg>`;}
function ivDline(){const v=+$('dn-v').value/10;$('dn-v-lbl').textContent=v.toFixed(1);$('dn-round').textContent=Math.round(v);
  const W=300,pad=20,X=t=>pad+(t/10)*(W-2*pad);let ticks='';for(let t=0;t<=10;t++)ticks+=`<line x1="${X(t)}" y1="30" x2="${X(t)}" y2="38" stroke="#999"/><text x="${X(t)}" y="52" font-size="9" fill="#777" text-anchor="middle">${t}</text>`;
  $('dn-out').innerHTML=`<svg viewBox="0 0 ${W} 60" style="background:#fff;border-radius:12px"><line x1="${pad}" y1="34" x2="${W-pad}" y2="34" stroke="#999" stroke-width="2"/>${ticks}<circle cx="${X(v)}" cy="34" r="7" fill="#38bdf8"/><text x="${X(v)}" y="20" font-size="10" fill="#38bdf8" text-anchor="middle">${v.toFixed(1)}</text></svg>`;}
function ivAngle(){const a=+$('ag-a').value;$('ag-a-lbl').textContent=a;
  const t=a<90?'acute':a===90?'right':a<180?'obtuse':'straight';$('ag-type').textContent=t;
  const rad=a*Math.PI/180,x=100+70*Math.cos(-rad),y=100-70*Math.sin(rad);
  $('ag-out').innerHTML=`<svg viewBox="0 0 200 130" style="background:#fff;border-radius:12px"><line x1="30" y1="100" x2="170" y2="100" stroke="#0ea5e9" stroke-width="3"/><line x1="30" y1="100" x2="${30+ (x-100)+70}" y2="${y}" stroke="#fb7185" stroke-width="3"/><path d="M30 100 L${x} ${y}" stroke="#fb7185" stroke-width="3"/><circle cx="30" cy="100" r="4" fill="#2b2640"/><text x="60" y="90" font-size="12" fill="#0ea5e9">${a}°</text></svg>`;}
function ivRect(){const l=+$('rc-l').value,w=+$('rc-w').value;$('rc-l-lbl').textContent=l;$('rc-w-lbl').textContent=w;
  $('rc-area').textContent=l*w;$('rc-per').textContent=2*(l+w);
  $('rc-out').innerHTML=`<svg viewBox="0 0 200 140" style="background:#fff;border-radius:12px"><rect x="30" y="20" width="${l*14}" height="${w*10}" fill="#0ea5e933" stroke="#0ea5e9" stroke-width="2"/><text x="${30+l*7}" y="15" font-size="11" fill="#0ea5e9" text-anchor="middle">${l}</text><text x="24" y="${20+w*5}" font-size="11" fill="#0ea5e9" text-anchor="end">${w}</text></svg>`;}
function ivBox(){const l=+$('bx-l').value,w=+$('bx-w').value,h=+$('bx-h').value;$('bx-l-lbl').textContent=l;$('bx-w-lbl').textContent=w;$('bx-h-lbl').textContent=h;
  $('bx-vol').textContent=l*w*h;$('bx-sa').textContent=2*(l*w+l*h+w*h);
  const bw=l*12,bh=h*12,dp=w*6;
  $('bx-out').innerHTML=`<svg viewBox="0 0 200 160" style="background:#fff;border-radius:12px"><rect x="40" y="${120-bh}" width="${bw}" height="${bh}" fill="#f59e0b55" stroke="#f59e0b" stroke-width="2"/><polygon points="40,${120-bh} ${40+dp},${120-bh-dp} ${40+dp+bw},${120-bh-dp} ${40+bw},${120-bh}" fill="#ffd43b88" stroke="#f59e0b" stroke-width="2"/><polygon points="${40+bw},${120-bh} ${40+dp+bw},${120-bh-dp} ${40+dp+bw},${120-dp} ${40+bw},120" fill="#ffc04388" stroke="#f59e0b" stroke-width="2"/></svg>`;}
function ivCoord(){const x=+$('co-x').value,y=+$('co-y').value;$('co-x-lbl').textContent=x;$('co-y-lbl').textContent=y;$('co-pt').textContent='('+x+', '+y+')';
  const W=200,pad=20,sc=(W-2*pad)/10,PX=v=>pad+v*sc,PY=v=>W-pad-v*sc;let grid='';
  for(let i=0;i<=10;i+=2){grid+=`<line x1="${PX(i)}" y1="${pad}" x2="${PX(i)}" y2="${W-pad}" stroke="#eee"/><line x1="${pad}" y1="${PY(i)}" x2="${W-pad}" y2="${PY(i)}" stroke="#eee"/>`;}
  $('co-out').innerHTML=`<svg viewBox="0 0 ${W} ${W}" style="background:#fff;border-radius:12px;max-height:220px">${grid}<line x1="${pad}" y1="${W-pad}" x2="${W-pad}" y2="${W-pad}" stroke="#999" stroke-width="2"/><line x1="${pad}" y1="${pad}" x2="${pad}" y2="${W-pad}" stroke="#999" stroke-width="2"/><line x1="${PX(0)}" y1="${PY(0)}" x2="${PX(x)}" y2="${PY(0)}" stroke="#fb718588" stroke-width="2"/><line x1="${PX(x)}" y1="${PY(0)}" x2="${PX(x)}" y2="${PY(y)}" stroke="#fb718588" stroke-width="2"/><circle cx="${PX(x)}" cy="${PY(y)}" r="6" fill="#fb7185"/></svg>`;}
function ivRatio(){let a=+$('rt-a').value,b=+$('rt-b').value;$('rt-a-lbl').textContent=a;$('rt-b-lbl').textContent=b;
  const g=gcd(a,b);$('rt-simp').textContent=(a/g)+' : '+(b/g);
  let dots='';for(let i=0;i<a;i++)dots+=`<circle cx="${16+i*20}" cy="20" r="8" fill="#0ea5e9"/>`;for(let i=0;i<b;i++)dots+=`<circle cx="${16+i*20}" cy="48" r="8" fill="#fb7185"/>`;
  $('rt-out').innerHTML=`<svg viewBox="0 0 ${Math.max(a,b)*20+20} 68" style="background:#fff;border-radius:12px">${dots}</svg>`;}
function ivNum(){const a=+$('nl-a').value,b=+$('nl-b').value;$('nl-a-lbl').textContent=a;$('nl-b-lbl').textContent=b;const sum=a+b;$('nl-sum').textContent=sum;
  const W=320,pad=18,min=-12,max=12,X=v=>pad+((v-min)/(max-min))*(W-2*pad);let ticks='';
  for(let v=min;v<=max;v+=3)ticks+=`<line x1="${X(v)}" y1="45" x2="${X(v)}" y2="52" stroke="#999"/><text x="${X(v)}" y="66" font-size="9" fill="#777" text-anchor="middle">${v}</text>`;
  const col=b<0?'#ef4444':'#22c55e';
  $('nl-out').innerHTML=`<svg viewBox="0 0 ${W} 80" style="background:#fff;border-radius:12px"><line x1="${pad}" y1="45" x2="${W-pad}" y2="45" stroke="#999" stroke-width="2"/>${ticks}<path d="M${X(a)} 30 Q ${(X(a)+X(sum))/2} 8 ${X(sum)} 30" fill="none" stroke="${col}" stroke-width="2.5"/><circle cx="${X(a)}" cy="45" r="5" fill="#0ea5e9"/><circle cx="${X(sum)}" cy="45" r="6" fill="#f59e0b"/><text x="${X(sum)}" y="78" font-size="11" font-weight="bold" fill="#f59e0b" text-anchor="middle">${sum}</text></svg>`;}
function ivBal(){const q=+$('bl-q').value,r=+$('bl-r').value;$('bl-q-lbl').textContent=q;$('bl-r-lbl').textContent=r;const x=r-q;$('bl-x').textContent='x = '+x;
  const qs=q<0?'− '+Math.abs(q):'+ '+q;
  $('bl-out').innerHTML=`<div class="keybox" style="margin:8px 0"><b>x ${qs} = ${r}</b><br>Do the opposite of ${q<0?'−'+Math.abs(q):'+'+q}: <b style="color:#0ea5e9">x = ${x}</b></div>`;}
function ivTri(){const b=+$('tr-b').value,h=+$('tr-h').value;$('tr-b-lbl').textContent=b;$('tr-h-lbl').textContent=h;$('tr-area').textContent=(b*h/2);
  $('tr-out').innerHTML=`<svg viewBox="0 0 200 140" style="background:#fff;border-radius:12px"><polygon points="30,120 ${30+b*12},120 30,${120-h*9}" fill="#14b8a633" stroke="#14b8a6" stroke-width="2"/><text x="${30+b*6}" y="135" font-size="11" fill="#14b8a6" text-anchor="middle">b=${b}</text><text x="20" y="${120-h*4.5}" font-size="11" fill="#14b8a6" text-anchor="end">h=${h}</text></svg>`;}
let dpData=[];
function ivDotReset(){dpData=[5,7,7,9];ivDotDraw();}
function ivDotAdd(){if(dpData.length<12){dpData.push(1+Math.floor(Math.random()*10));sfx.tick();ivDotDraw();}}
function ivDotDraw(){const n=dpData.length;const mean=n?(dpData.reduce((a,b)=>a+b,0)/n):0;
  const sorted=[...dpData].sort((a,b)=>a-b);const med=n?(n%2?sorted[(n-1)/2]:(sorted[n/2-1]+sorted[n/2])/2):0;
  const range=n?sorted[n-1]-sorted[0]:0;
  $('dp-mean').textContent=mean.toFixed(1);$('dp-med').textContent=med;$('dp-range').textContent=range;
  const counts={};dpData.forEach(v=>counts[v]=(counts[v]||0)+1);let dots='';
  for(let v=1;v<=10;v++){const x=20+v*26;dots+=`<text x="${x}" y="118" font-size="9" fill="#777" text-anchor="middle">${v}</text>`;
    for(let k=0;k<(counts[v]||0);k++)dots+=`<circle cx="${x}" cy="${105-k*16}" r="6" fill="#38bdf8"/>`;}
  $('dp-out').innerHTML=`<svg viewBox="0 0 300 130" style="background:#fff;border-radius:12px"><line x1="20" y1="112" x2="290" y2="112" stroke="#999"/>${dots}</svg>`;}
function gcd(a,b){a=Math.abs(a);b=Math.abs(b);while(b){[a,b]=[b,a%b];}return a||1;}

/* ==========================================================================
   ROUTING
========================================================================== */
function showPage(id){sfx.click();stopGame();document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));$(id).classList.add('active');
  document.querySelectorAll('.tab-btn').forEach(b=>b.classList.toggle('active',b.dataset.tab===id));window.scrollTo(0,0);
  if(id==='dash')renderDash();if(id==='arcade')resetArcade();if(id==='practice')renderPractice();}
function setTab(t){document.querySelectorAll('.tab-btn').forEach(b=>b.classList.toggle('active',b.dataset.tab===t));}

function showHome(){sfx.click();stopGame();document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));$('home').classList.add('active');setTab('home');window.scrollTo(0,0);renderHome();}
function renderHome(){
  const gcards=gorder.map(gid=>{const G=GRADES[gid];const p=gradeProgress(gid);
    return `<div class="grade-card" style="background:${G.color}" onclick="openGrade('${gid}')">
      <span class="gc-tag">${G.short}</span><h3>${G.name}</h3><p>${G.blurb}</p>
      <div class="gc-prog"><span style="width:${p}%"></span></div>
      <div style="font-size:.75rem;margin-top:6px;opacity:.9">${p}% complete</div></div>`;}).join('');
  const acc=stats.answered?Math.round(stats.correct/stats.answered*100):'—';
  $('home').innerHTML=`
    <div class="hero"><div class="htext"><span class="grade-badge">Grades 4–6</span>
      <h1>Learn math, level up.</h1><p>Pick your grade, take a quick placement check, then climb the learning path — with games, visuals, and rewards.</p>
      <button class="big-btn" onclick="openGrade('g4')">Start with Grade 4 →</button></div></div>
    <div class="stats">
      <div class="stat"><div class="num">${streak}</div><div class="label">Day streak</div></div>
      <div class="stat"><div class="num">${xp}</div><div class="label">XP earned</div></div>
      <div class="stat"><div class="num">${level()}</div><div class="label">Level</div></div>
      <div class="stat"><div class="num">${acc}${acc==='—'?'':'%'}</div><div class="label">Accuracy</div></div>
      <div class="stat"><div class="num">${badgeCount()}</div><div class="label">Badges</div></div>
    </div>
    <h2 class="section-title">Choose your grade</h2><p class="sub">Each grade has a placement check, 5 units, mini-lessons, quizzes and a final test.</p>
    <div class="grade-cards">${gcards}</div>`;
}

function gradeProgress(gid){const G=GRADES[gid];let tot=0,done=0;
  G.units.forEach((u,ui)=>u.sections.forEach((s,si)=>{tot++;if(progress.sections[skey(gid,ui,si)])done++;}));
  return tot?Math.round(done/tot*100):0;}
function unitProgress(gid,ui){const u=GRADES[gid].units[ui];let done=0;u.sections.forEach((s,si)=>{if(progress.sections[skey(gid,ui,si)])done++;});return Math.round(done/u.sections.length*100);}
function badgeCount(){return Object.keys(progress.tests).length+Object.keys(progress.grades).length;}

/* ---- GRADE PAGE ---- */
let curGrade=null;
function openGrade(gid){sfx.click();curGrade=gid;const G=GRADES[gid];
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));$('grade').classList.add('active');setTab('home');window.scrollTo(0,0);
  const rec=progress.rec[gid];
  const recMsg = rec===undefined
    ? `<div class="lesson-box" style="border-left:5px solid var(--teal)"><b>New here?</b> Take the quick <b>placement check</b> to get a recommended starting point. It never locks anything — explore freely!<br><button class="go-btn" style="background:var(--teal);margin-top:10px" onclick="startPlacement('${gid}')">Take placement check</button></div>`
    : `<div class="lesson-box" style="border-left:5px solid var(--green)">Placement done. Recommended start: <b>${G.units[rec].name}</b>. Units before it are marked as "you likely know this" — but you can do any of them. <button class="go-btn ghost" style="margin-top:8px" onclick="startPlacement('${gid}')">Retake</button></div>`;
  const cards=G.units.map((u,ui)=>{const p=unitProgress(gid,ui);const isRec=rec===ui;const known=rec!==undefined&&ui<rec;
    return `<div class="card" style="border-color:${isRec?'var(--green)':'var(--line)'}" onclick="openUnit('${gid}',${ui})">
      ${isRec?'<span class="start-here">START HERE</span>':''}
      <span class="tag" style="background:${u.accent}">${ulabel(u)}</span>
      <h3 style="margin-top:8px">${u.name}</h3>
      <p>${known?'<span style="color:var(--green)">✓ You likely know this</span>':u.sections.length+' lessons + unit test'}</p>
      <div class="bar"><span style="width:${known&&p===0?100:p}%"></span></div></div>`;}).join('');
  const gp=gradeProgress(gid),gt=progress.grades[gid];
  $('grade').innerHTML=`<button class="back-link" onclick="showHome()">← All grades</button>
    <div class="unit-head" style="background:${G.color}"><div class="code">${G.name} · Common Core</div><h2>${G.name} Math</h2><p>${G.blurb}</p>
      <div class="bar" style="background:rgba(255,255,255,.3);margin-top:10px"><span style="width:${gp}%;background:#fff"></span></div></div>
    ${recMsg}
    <h2 class="section-title">Units</h2>
    <div class="cards">${cards}</div>
    <div style="margin-top:18px" class="path-step">
      <div class="step-num" style="background:var(--brand)">★</div>
      <div class="step-body"><h4>Final Grade Test ${gt?'<span class="done-check">✓ Passed</span>':''}</h4><p>Pass to earn your ${G.name} trophy + certificate!</p></div>
      <button class="go-btn" style="background:var(--orange)" onclick="startFinal('${gid}')">Take final</button></div>`;
}

/* ---- UNIT PAGE ---- */
function openUnit(gid,ui){sfx.click();const G=GRADES[gid],u=G.units[ui];
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));$('unit').classList.add('active');window.scrollTo(0,0);
  const steps=u.sections.map((s,si)=>{const done=progress.sections[skey(gid,ui,si)];
    return `<div class="path-step"><div class="step-num" style="background:${u.accent}">${si+1}</div>
      <div class="step-body"><h4>${s.title} ${done?'<span class="done-check">✓</span>':''}</h4><p>Mini-lesson + interactive + quiz</p>
        <div class="mini-bar"><span style="width:${done?100:0}%"></span></div></div>
      <button class="go-btn" style="background:${u.accent}" onclick="openLesson('${gid}',${ui},${si})">Learn</button>
      <button class="go-btn" style="background:var(--green)" onclick="startQuiz('${gid}',${ui},${si})">Quiz</button></div>`;}).join('');
  const tp=progress.tests[u.id];
  $('unit').innerHTML=`<button class="back-link" onclick="openGrade('${gid}')">← ${G.name} units</button>
    <div class="unit-head" style="background:${u.accent}"><div class="code">${ulabel(u)}</div><h2>${u.name}</h2></div>
    ${steps}
    <div class="path-step"><div class="step-num" style="background:var(--amber)">★</div>
      <div class="step-body"><h4>Unit Test ${tp?'<span class="done-check">✓ Passed</span>':''}</h4><p>${u.test.length} questions · earn the ${ulabel(u)} badge</p></div>
      <button class="go-btn" style="background:var(--amber)" onclick="startTest('${gid}',${ui})">Take test</button></div>
    <div class="path-step"><div class="step-num" style="background:var(--teal)">∞</div>
      <div class="step-body"><h4>Endless Practice</h4><p>Unlimited auto-generated questions that adapt to you</p></div>
      <button class="go-btn" style="background:var(--teal)" onclick="practiceRun(['${u.id}'],'${u.name}')">Practice</button></div>`;
}

/* ---- LESSON PAGE ---- */
function openLesson(gid,ui,si){sfx.click();const s=GRADES[gid].units[ui].sections[si];
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));$('lesson').classList.add('active');window.scrollTo(0,0);
  const exs=s.examples||(s.example?[s.example]:[]);
  const exHtml=exs.length?`<h4 class="ls-sub">✏️ Worked examples</h4>`+exs.map((ex,k)=>`<div class="example"><h4>Example ${exs.length>1?(k+1):''}: ${ex.title}</h4>
    <div id="ex-steps-${k}">${ex.steps.map(st=>`<div class="step">${st}</div>`).join('')}</div>
    <button class="hintbtn" id="ex-btn-${k}" onclick="revealStep(${k})">Show me step 1 →</button></div>`).join(''):'';
  const ivKeys=s.iv?(Array.isArray(s.iv)?s.iv:[s.iv]):[];
  const ivHtml=ivKeys.length?`<h4 class="ls-sub">Try it yourself</h4>`+ivKeys.map(k=>IV[k]?IV[k].html:'').join(''):'';
  $('lesson').innerHTML=`<div class="lesson-box"><button class="back-link" onclick="openUnit('${gid}',${ui})">← Back to unit</button>
    <h3>${s.title}</h3>${speakCtl()}<div class="teach">${s.teach}</div>${exHtml}${ivHtml}
    <div style="text-align:center;margin-top:18px"><button class="go-btn" style="background:var(--green)" onclick="startQuiz('${gid}',${ui},${si})">I'm ready — take the quiz →</button></div></div>`;
  ivKeys.forEach(k=>{if(IV[k])IV[k].init();});
  window._read=s.title+'. '+stripTags(s.teach);
  window._exCounters={};
}
function revealStep(k){window._exCounters=window._exCounters||{};let c=window._exCounters[k]||0;
  const steps=document.querySelectorAll('#ex-steps-'+k+' .step');const btn=document.getElementById('ex-btn-'+k);
  if(c<steps.length){steps[c].classList.add('show');c++;window._exCounters[k]=c;sfx.click();}
  if(c>=steps.length){if(btn)btn.style.display='none';}else if(btn)btn.textContent='Show me step '+(c+1)+' →';}

/* ==========================================================================
   QUIZ / TEST / PLACEMENT ENGINE
========================================================================== */
let Q={};
function runQuiz(cfg){ // cfg={questions, title, onPass(score,total), passMark, ctx}
  Q={list:cfg.questions.slice(),i:0,score:0,answered:false,wrong:[],cfg};
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));$('quiz').classList.add('active');window.scrollTo(0,0);
  renderQ();
}
function renderQ(){const q=Q.list[Q.i];Q.answered=false;
  const dots=Q.list.map((_,k)=>`<div class="dot ${k<Q.i?'done':k===Q.i?'current':''}"></div>`).join('');
  $('quiz').innerHTML=`<button class="back-link" onclick="quitQuiz()">← Quit</button>
    <div style="font-weight:800;color:var(--muted);margin-bottom:6px">${Q.cfg.title}</div>
    <div class="dots">${dots}</div>
    <div class="q-text">${Q.i+1}. ${q.q}</div>
    ${q.vis!==undefined?`<div class="q-visual" style="text-align:center;margin:8px 0">${blocksSVG(q.vis)}</div>`:''}
    ${speakCtl()}
    <div class="options" id="q-opts">${q.o.map((o,k)=>`<button class="opt" onclick="pick(${k})">${o}</button>`).join('')}</div>
    <div class="feedback" id="q-fb"></div>
    <button class="next-btn" id="q-next" disabled onclick="advance()">${Q.i===Q.list.length-1?'See results →':'Next →'}</button>`;
  autoRead((Q.i+1)+'. '+q.q);
}
function pick(k){if(Q.answered)return;Q.answered=true;const q=Q.list[Q.i];
  stats.answered++;const opts=document.querySelectorAll('#q-opts .opt');
  opts.forEach((b,idx)=>{if(idx===q.a)b.classList.add('correct');if(idx===k&&k!==q.a)b.classList.add('wrong');b.style.pointerEvents='none';});
  const fb=$('q-fb');
  if(k===q.a){Q.score++;stats.correct++;addXP(10);sfx.correct();
    fb.innerHTML='<span class="feedback good">✅ Correct!</span>'+(explainHTML(q)?'<div class="explain">'+explainHTML(q)+'</div>':'');fb.className='';}
  else{Q.wrong.push(q);sfx.wrong();
    fb.innerHTML='<span class="feedback bad">❌ Not quite — the correct answer is <b>'+q.o[q.a]+'</b>.</span>'+(explainHTML(q)?'<div class="explain"><b>How to solve it:</b> '+explainHTML(q)+'</div>':'');fb.className='';}
  $('q-next').disabled=false;save();
}
function explainHTML(q){return q.explain||q.why||'';}
function advance(){if(Q.i<Q.list.length-1){Q.i++;renderQ();}else finish();}
function finish(){const n=Q.list.length,pass=Q.score>=Q.cfg.passMark;
  Q.cfg.onPass(Q.score,n,pass);
}
function quitQuiz(){if(Q.cfg&&Q.cfg.back)Q.cfg.back();else showHome();}
function reviewWrong(){if(!Q.wrong.length)return;runQuiz({questions:Q.wrong,title:'🔁 Review your mistakes',passMark:Q.wrong.length,back:Q.cfg.back,
  onPass:(s,t)=>{resultScreen('🔁 Review complete!',s,t,s===t,Q.cfg.back,null);}});}

function resultScreen(title,score,total,good,back,extraBtn){
  const canReview=Q.wrong&&Q.wrong.length;
  $('quiz').innerHTML=`<div class="result"><div class="score">${score} / ${total}</div><p style="font-weight:700">${title}</p>
    ${good?'<p>🌟 Great job!</p>':'<p>Keep practicing — you are getting there!</p>'}
    ${canReview?`<button class="next-btn" style="background:var(--blue)" onclick="reviewWrong()">🔁 Review my mistakes (${Q.wrong.length})</button>`:''}
    ${extraBtn||''}
    <button class="next-btn" onclick="quizContinue()">Continue</button></div>`;
}
function quizContinue(){sfx.click();if(Q.cfg&&typeof Q.cfg.back==='function')Q.cfg.back();else showHome();}

/* ---- launchers ---- */
function startQuiz(gid,ui,si){const s=GRADES[gid].units[ui].sections[si];const back=()=>openUnit(gid,ui);
  runQuiz({questions:s.quiz,title:GRADES[gid].units[ui].name+' — '+s.title,passMark:Math.ceil(s.quiz.length*0.6),back,
    onPass:(score,total,pass)=>{if(pass){progress.sections[skey(gid,ui,si)]=true;sfx.win();confetti();}save();
      resultScreen(pass?'Quiz passed!':'Almost there!',score,total,pass,back);}});}
function startTest(gid,ui){const u=GRADES[gid].units[ui];const back=()=>openUnit(gid,ui);
  runQuiz({questions:u.test,title:u.name+' — Unit Test',passMark:Math.ceil(u.test.length*0.6),back,
    onPass:(score,total,pass)=>{let extra='';if(pass&&!progress.tests[u.id]){progress.tests[u.id]=true;sfx.win();confetti();
        modal('🏅','Badge Earned!','You earned the '+ulabel(u)+' badge!');}
      save();resultScreen(pass?'Unit Test passed! 🏅':'Not quite — review and retry!',score,total,pass,back);}});}
function startPlacement(gid){const G=GRADES[gid];const back=()=>openGrade(gid);
  runQuiz({questions:G.placement,title:G.name+' — Placement Check',passMark:0,back,
    onPass:(score,total)=>{ // recommend the earliest unit the student missed (by q.u tag)
      let recUnit=G.units.length;
      G.placement.forEach((q,k)=>{if(Q.wrong.includes(q)){const uu=(q.u!==undefined?q.u:Math.min(k,G.units.length-1));if(uu<recUnit)recUnit=uu;}});
      let firstMiss=recUnit<G.units.length?recUnit:-1;
      let rec=firstMiss<0?0:Math.min(firstMiss,G.units.length-1);
      progress.rec[gid]=rec;save();
      const msg=firstMiss<0?"Wow, you aced it! You can jump in anywhere — we suggest Unit 1 to warm up.":"Great — we recommend starting at <b>"+G.units[rec].name+"</b>. Earlier units are marked as review.";
      $('quiz').innerHTML=`<div class="result"><div class="big" style="font-size:2.5rem">🦆</div><div class="score">${score}/${total}</div>
        <p style="font-weight:700">Placement complete!</p><p>${msg}</p>
        <button class="next-btn" onclick="openGrade('${gid}')">Go to my path →</button></div>`;
      confetti();}});}
function startFinal(gid){const G=GRADES[gid];const back=()=>openGrade(gid);
  runQuiz({questions:G.finalTest,title:G.name+' — Final Test',passMark:Math.ceil(G.finalTest.length*0.7),back,
    onPass:(score,total,pass)=>{let extra='';
      if(pass&&!progress.grades[gid]){progress.grades[gid]=true;sfx.win();confetti();}
      save();
      if(pass){extra=`<button class="next-btn" style="background:var(--orange)" onclick="showCert('${gid}')">🎓 Get certificate</button>`;}
      resultScreen(pass?'🏆 Grade complete!':'So close! Review and try again.',score,total,pass,back,extra);}});}

function showCert(gid){const G=GRADES[gid];sfx.win();confetti();
  const nm=progress.name||'';
  $('quiz').innerHTML=`<div class="cert"><h2>🎓 Certificate of Achievement</h2><p>This certifies that</p>
    <input class="num" id="cert-name" placeholder="type your name" value="${nm}" style="max-width:300px;margin:10px auto;text-align:center;font-size:1.2rem" oninput="saveName()">
    <p>has successfully completed</p><div class="who">${G.name} Math 🦆</div>
    <p style="margin-top:10px">with flying colors on MathQuest!</p>
    <p style="color:var(--muted);font-size:.8rem;margin-top:8px">${new Date().toLocaleDateString()}</p></div>
    <div style="text-align:center;margin-top:14px"><button class="next-btn" onclick="window.print()">🖨️ Print</button>
    <button class="next-btn" style="background:var(--green)" onclick="openGrade('${gid}')">Back</button></div>`;
}
function saveName(){progress.name=$('cert-name').value;save();}

/* ==========================================================================
   ARCADE
========================================================================== */
function allQ(){const list=[];gorder.forEach(g=>GRADES[g].units.forEach(u=>{u.sections.forEach(s=>s.quiz.forEach(q=>list.push(q)));u.test.forEach(q=>list.push(q));}));return list;}
let gameTimer=null, gameToken=0, gameRAF=null;
function stopGame(){gameToken++;if(gameTimer){clearInterval(gameTimer);gameTimer=null;}if(gameRAF){cancelAnimationFrame(gameRAF);gameRAF=null;}}
function openGame(){$('arcade-menu').classList.add('hidden');$('arcade-game').classList.remove('hidden');}
function shuffle(a){for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
function comboTag(c){return c>=6?'🔥🔥 x'+c:c>=2?'🔥 x'+c:'';}
function flash(id,txt,cls){const e=$(id);if(!e)return;e.textContent=txt;e.className='combo-tag '+(cls||'');e.style.animation='none';e.offsetHeight;e.style.animation='pop .3s';}
function resetArcade(){stopGame();
  const ic={speed:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z"/></svg>',
    drop:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="1.2" fill="currentColor"/></svg>',
    match:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="7" y1="18" x2="17" y2="6"/><circle cx="8" cy="8" r="2"/><circle cx="16" cy="16" r="2"/></svg>',
    balloon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 3c3.3 0 6 2.5 6 6 0 4-4 7-6 8-2-1-6-4-6-8 0-3.5 2.7-6 6-6z"/><path d="M12 17v4"/></svg>',
    tf:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>'};
  $('arcade-menu').innerHTML=`
   <div class="card" onclick="startSpeed()" style="border-color:var(--brand)"><div class="icon" style="color:var(--brand)">${ic.speed}</div><h3>Speed Round</h3><p>Beat the clock. Chain combos for big points.</p><small style="color:var(--muted);font-weight:600">Best: ${progress.best.speed}</small></div>
   <div class="card" onclick="startDrop()" style="border-color:var(--green)"><div class="icon" style="color:var(--green)">${ic.drop}</div><h3>Number-Line Drop</h3><p>Tap where the answer lands. 10 rounds.</p><small style="color:var(--muted);font-weight:600">Best: ${progress.best.drop}</small></div>
   <div class="card" onclick="startMatch()" style="border-color:var(--coral)"><div class="icon" style="color:var(--coral)">${ic.match}</div><h3>Fraction Match</h3><p>Pick the equal fraction fast.</p><small style="color:var(--muted);font-weight:600">Best: ${progress.best.match}</small></div>
   <div class="card" onclick="startBalloon()" style="border-color:var(--sky)"><div class="icon" style="color:var(--sky)">${ic.balloon}</div><h3>Balloon Pop</h3><p>Pop the right balloon before it floats away.</p><small style="color:var(--muted);font-weight:600">Best: ${progress.best.balloon}</small></div>
   <div class="card" onclick="startTF()" style="border-color:var(--amber)"><div class="icon" style="color:var(--amber)">${ic.tf}</div><h3>True or False</h3><p>Right or wrong? Tap fast, chain combos, 60s.</p><small style="color:var(--muted);font-weight:600">Best: ${progress.best.tf}</small></div>`;
  $('arcade-menu').classList.remove('hidden');$('arcade-game').classList.add('hidden');$('arcade-game').innerHTML='';}

function startSpeed(){sfx.click();openGame();stopGame();const tok=gameToken;let time=60,sc=0,combo=0,best=0,cor=0,ans=0,lvl=1;
  $('arcade-game').innerHTML=`<div class="game-card"><div class="game-hud"><span>⚡ Speed Round</span><span>⏱ <span id="sp-t">60</span>s</span><span>Score <span id="sp-s">0</span></span></div>
    <div class="timer-bar"><span id="sp-bar"></span></div><div class="combo-tag" id="sp-combo"></div><div class="q-text" id="sp-q"></div><div class="options" id="sp-o"></div><button class="back-link" onclick="resetArcade()">← Quit</button></div>`;
  function nx(){if(tok!==gameToken)return;const q=genQ(lvl);$('sp-q').textContent=q.q;
    $('sp-o').innerHTML=q.o.map(o=>`<button class="opt">${o}</button>`).join('');
    document.querySelectorAll('#sp-o .opt').forEach((b,k)=>b.onclick=()=>{if(tok!==gameToken)return;ans++;
      if(k===q.a){cor++;combo++;best=Math.max(best,combo);const pts=5+Math.min(combo,10);sc+=pts;lvl=Math.min(3,1+Math.floor(combo/4));sfx.correct();addXP(2);flash('sp-combo','+'+pts+' '+comboTag(combo),'good');}
      else{combo=0;lvl=1;sfx.wrong();flash('sp-combo','miss — combo reset','bad');}
      $('sp-s').textContent=sc;nx();});}
  nx();gameTimer=setInterval(()=>{if(tok!==gameToken){clearInterval(gameTimer);return;}time--;$('sp-t').textContent=time;$('sp-bar').style.width=(time/60*100)+'%';if(time<=0){endGame('speed',sc,'⚡ Speed Round',cor,ans,best);}},1000);}

function startDrop(){sfx.click();openGame();stopGame();const tok=gameToken;
  window._dr={sc:0,rounds:0,min:-10,max:10,combo:0,best:0,cor:0,answered:false,tok};
  $('arcade-game').innerHTML=`<div class="game-card"><div class="game-hud"><span>🎯 Number-Line Drop</span><span>Round <span id="dr-r">1</span>/10</span><span>Score <span id="dr-s">0</span></span></div>
    <div class="combo-tag" id="dr-combo"></div><div class="q-text" id="dr-q"></div><div class="nl-track" id="dr-tk" onclick="dropClick(event)"></div><p id="dr-fb" class="feedback"></p><button class="back-link" onclick="resetArcade()">← Quit</button></div>`;
  newDrop();}
function newDrop(){const d=window._dr;if(!d||d.tok!==gameToken)return;if(d.rounds>=10){endGame('drop',d.sc,'🎯 Number-Line Drop',d.cor,d.rounds,d.best);return;}d.rounds++;$('dr-r').textContent=d.rounds;d.answered=false;
  const a=rint(-8,8),b=rint(-8,8);d.target=a+b;d.expr=a+' + '+(b<0?'('+b+')':b);$('dr-q').textContent='Tap where '+d.expr+' lands:';
  const W=300;let ticks='';for(let v=d.min;v<=d.max;v+=2){const x=20+((v-d.min)/(d.max-d.min))*(W-40);ticks+=`<line x1="${x}" y1="30" x2="${x}" y2="40" stroke="#999"/><text x="${x}" y="56" font-size="10" fill="#777" text-anchor="middle">${v}</text>`;}
  $('dr-tk').innerHTML=`<svg viewBox="0 0 ${W} 70" width="100%" height="70"><line x1="20" y1="35" x2="${W-20}" y2="35" stroke="#999" stroke-width="2"/>${ticks}</svg>`;$('dr-fb').textContent='';}
function dropClick(e){const d=window._dr;if(!d||d.tok!==gameToken||d.answered)return;d.answered=true;const r=$('dr-tk').getBoundingClientRect();const val=d.min+((e.clientX-r.left)/r.width)*(d.max-d.min);const guess=Math.round(val);
  if(guess===d.target){d.cor++;d.combo++;d.best=Math.max(d.best,d.combo);const pts=5+d.combo;d.sc+=pts;sfx.correct();addXP(3);$('dr-fb').innerHTML='✅ '+d.expr+' = '+d.target+'  '+comboTag(d.combo);$('dr-fb').className='feedback good';}
  else{d.combo=0;sfx.wrong();$('dr-fb').textContent='❌ '+d.expr+' = '+d.target+' (you tapped ~'+guess+')';$('dr-fb').className='feedback bad';}
  $('dr-s').textContent=d.sc;setTimeout(()=>{if(d.tok===gameToken)newDrop();},900);}

function startMatch(){sfx.click();openGame();stopGame();const tok=gameToken;let time=30,sc=0,combo=0,best=0,cor=0,ans=0;const base=[[1,2],[1,3],[2,3],[1,4],[3,4],[1,5],[2,5]];
  $('arcade-game').innerHTML=`<div class="game-card"><div class="game-hud"><span>🍕 Fraction Match</span><span>⏱ <span id="fm-t">30</span>s</span><span>Score <span id="fm-s">0</span></span></div>
    <div class="timer-bar"><span id="fm-bar"></span></div><div class="combo-tag" id="fm-combo"></div><div class="q-text" id="fm-q" style="text-align:center;font-size:1.5rem"></div><div class="options" id="fm-o"></div><button class="back-link" onclick="resetArcade()">← Quit</button></div>`;
  function nf(){if(tok!==gameToken)return;const f=base[Math.floor(Math.random()*base.length)],m=2+Math.floor(Math.random()*4),eq=[f[0]*m,f[1]*m];
    $('fm-q').innerHTML='Which equals <b>'+f[0]+'/'+f[1]+'</b>?';const opts=[eq];
    while(opts.length<4){const wn=eq[0]+(Math.floor(Math.random()*5)-2),wd=eq[1]+(Math.floor(Math.random()*5)-2);if(wd>0&&wn>0&&Math.abs(wn/wd-f[0]/f[1])>.01&&!opts.some(o=>o[0]===wn&&o[1]===wd))opts.push([wn,wd]);}
    shuffle(opts);$('fm-o').innerHTML=opts.map(o=>`<button class="opt" style="text-align:center">${o[0]}/${o[1]}</button>`).join('');
    document.querySelectorAll('#fm-o .opt').forEach((b,k)=>b.onclick=()=>{if(tok!==gameToken)return;ans++;const o=opts[k];if(Math.abs(o[0]/o[1]-f[0]/f[1])<.01){cor++;combo++;best=Math.max(best,combo);const pts=5+Math.min(combo,10);sc+=pts;sfx.correct();addXP(2);flash('fm-combo','+'+pts+' '+comboTag(combo),'good');}else{combo=0;sfx.wrong();flash('fm-combo','nope!','bad');}$('fm-s').textContent=sc;nf();});}
  nf();gameTimer=setInterval(()=>{if(tok!==gameToken){clearInterval(gameTimer);return;}time--;$('fm-t').textContent=time;$('fm-bar').style.width=(time/30*100)+'%';if(time<=0){endGame('match',sc,'🍕 Fraction Match',cor,ans,best);}},1000);}

function endGame(key,score,name,cor,ans,bestC){stopGame();const best=score>(progress.best[key]||0);if(best)progress.best[key]=score;save();sfx.win();confetti();
  const acc=ans?Math.round(cor/ans*100):0;
  $('arcade-game').innerHTML=`<div class="game-card result"><div class="big" style="font-size:2.5rem">${best?'🏆':'🎮'}</div>
    <div class="score">${score}</div><p style="font-weight:800">${name}${best?' — NEW HIGH SCORE! 🎉':''}</p>
    <div class="readout" style="justify-content:center"><div class="chip"><b>${acc}%</b><span>accuracy</span></div><div class="chip"><b>🔥 ${bestC||0}</b><span>best combo</span></div><div class="chip"><b>${progress.best[key]}</b><span>high score</span></div></div>
    <button class="next-btn" onclick="resetArcade()" style="margin-top:14px">Back to Arcade</button></div>`;}

/* ==========================================================================
   DASHBOARD
========================================================================== */
function renderDash(){const acc=stats.answered?Math.round(stats.correct/stats.answered*100):0;
  $('dash').innerHTML=`<h2 class="section-title">Your Progress</h2><p class="sub">Everything you've earned. Progress saves automatically.</p>
   <div class="dash-grid">
     <div class="dash-tile"><div class="big">${xp}</div><div class="lbl">Total XP</div></div>
     <div class="dash-tile"><div class="big">${level()}</div><div class="lbl">Level</div></div>
     <div class="dash-tile"><div class="big">${streak}</div><div class="lbl">Day streak</div></div>
     <div class="dash-tile"><div class="big">${badgeCount()}</div><div class="lbl">Badges</div></div>
     <div class="dash-tile"><div class="big">${acc}%</div><div class="lbl">Accuracy</div></div>
     <div class="dash-tile"><div class="big">${stats.answered}</div><div class="lbl">Answered</div></div>
     <div class="dash-tile"><div class="big">${progress.best.speed}</div><div class="lbl">Best Speed</div></div>
   </div>
   <h2 class="section-title">Grade progress</h2>
   <div class="dash-grid">${gorder.map(g=>`<div class="dash-tile"><div class="big" style="color:${GRADES[g].accent}">${gradeProgress(g)}%</div><div class="lbl">${GRADES[g].name}${progress.grades[g]?' ✓':''}</div></div>`).join('')}</div>
   <h2 class="section-title">Badges & Trophies</h2>
   <div class="badge-shelf">${badgeShelf()}</div>`;
}
function badgeShelf(){let html='';gorder.forEach(g=>{GRADES[g].units.forEach(u=>{const got=progress.tests[u.id];
    html+=`<span class="badge ${got?'':'locked'}" style="${got?'background:'+u.accent:''}">${got?'🏅':'🔒'} ${ulabel(u)}</span>`;});
    html+=`<span class="badge ${progress.grades[g]?'':'locked'}" style="${progress.grades[g]?'background:var(--orange)':''}">${progress.grades[g]?'🏆':'🔒'} ${GRADES[g].short}</span>`;});
  return html;}

/* ==========================================================================
   CONFETTI
========================================================================== */
let cCv,cCtx,cP=[],cRun=false;
function confetti(){cCv=$('confetti');cCtx=cCv.getContext('2d');cCv.width=innerWidth;cCv.height=innerHeight;
  const cols=['#0ea5e9','#38bdf8','#fb7185','#ffd43b','#22c55e','#f59e0b'];
  for(let i=0;i<110;i++)cP.push({x:innerWidth/2,y:innerHeight/3,vx:(Math.random()-.5)*12,vy:Math.random()*-12-4,g:.4,c:cols[Math.floor(Math.random()*cols.length)],s:Math.random()*7+4,r:Math.random()*6,vr:(Math.random()-.5)*.4,life:90});
  if(!cRun)cLoop();}
function cLoop(){cRun=true;cCtx.clearRect(0,0,cCv.width,cCv.height);cP=cP.filter(p=>p.life>0);
  cP.forEach(p=>{p.vy+=p.g;p.x+=p.vx;p.y+=p.vy;p.r+=p.vr;p.life--;cCtx.save();cCtx.translate(p.x,p.y);cCtx.rotate(p.r);cCtx.fillStyle=p.c;cCtx.fillRect(-p.s/2,-p.s/2,p.s,p.s);cCtx.restore();});
  if(cP.length)requestAnimationFrame(cLoop);else{cRun=false;cCtx.clearRect(0,0,cCv.width,cCv.height);}}

/* ==========================================================================
   INIT
========================================================================== */
/* ==========================================================================
   ACCESSIBILITY: settings, text size, colorblind, read-aloud
========================================================================== */
function applySettings(){const s=progress.settings;if(!document.body)return;
  document.body.classList.toggle('ts-large',s.text==='large');
  document.body.classList.toggle('ts-small',s.text==='small');
  document.body.classList.toggle('cb',!!s.cb);}
function openSettings(){sfx.click();const s=progress.settings;
  $('modal-box').innerHTML=`<div class="big">⚙️</div><h3>Settings</h3>
   <div class="set-row"><h4>Text size</h4>
     <button class="set-btn ${s.text==='small'?'on':''}" onclick="setText('small')">Small</button>
     <button class="set-btn ${s.text==='normal'?'on':''}" onclick="setText('normal')">Normal</button>
     <button class="set-btn ${s.text==='large'?'on':''}" onclick="setText('large')">Large</button></div>
   <div class="set-row"><h4>Colorblind-friendly mode</h4>
     <button class="set-btn ${s.cb?'on':''}" onclick="toggleCB()">${s.cb?'On ✓':'Off'}</button>
     <p style="font-size:.78rem;color:var(--muted);margin-top:4px">Colorblind-safe colors + ✓/✗ marks on answers.</p></div>
   <div class="set-row"><h4>Read questions aloud automatically</h4>
     <button class="set-btn ${s.read?'on':''}" onclick="toggleRead()">${s.read?'On ✓':'Off'}</button>
     <button class="set-btn" onclick="readCurrent()">🔊 Test voice</button></div>
   <button id="modal-ok" onclick="closeModal()">Done</button>`;
  $('modal').style.display='flex';}
function closeModal(){$('modal').style.display='none';sfx.click();}
function setText(v){progress.settings.text=v;applySettings();save();openSettings();}
function toggleCB(){progress.settings.cb=!progress.settings.cb;applySettings();save();openSettings();}
function toggleRead(){progress.settings.read=!progress.settings.read;save();openSettings();}
function speak(t){if(!t)return;try{if(typeof window!=='undefined'&&window.speechSynthesis){window.speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(String(t));u.rate=.95;window.speechSynthesis.speak(u);}}catch(e){}}
function readCurrent(){speak(window._read);}
function autoRead(t){window._read=t;if(progress.settings.read)speak(t);}
function stripTags(h){return String(h).replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim();}
function speakCtl(){return `<button class="speak-btn" onclick="readCurrent()">🔊 Read aloud</button>`;}

/* (Avatar / unlockables feature removed for a cleaner, emoji-free look.) */
function updateNavAvatar(){/* no-op: nav avatar removed */}

/* ==========================================================================
   NEW MINIGAMES  (generator-fed) + combos
========================================================================== */
function genQ(L){return GEN[pickOne(allUnitIds())](Math.min(L,3));}
const MSTOPICS=['msChange','msTwoStep','msReverseRect','msReverseTri','msCompare','msFractionOf','msPercent'];
function startBalloon(){sfx.click();openGame();stopGame();const tok=gameToken;
  let time=60,sc=0,combo=0,best=0,cor=0,ans=0,lvl=1,balloons=[];
  $('arcade-game').innerHTML=`<div class="game-card"><div class="game-hud"><span>🎈 Balloon Pop</span><span>⏱ <span id="bl-t">60</span>s</span><span>Score <span id="bl-s">0</span></span></div>
    <div class="timer-bar"><span id="bl-bar"></span></div><div class="combo-tag" id="bl-combo"></div>
    <div class="q-text" id="bl-q" style="text-align:center"></div>
    <div class="balloon-field" id="bl-field"></div>
    <button class="back-link" onclick="resetArcade()">← Quit</button></div>`;
  const cols=['#ef4444','#0ea5e9','#22c55e','#f59e0b','#fb7185','#14b8a6'];
  function round(){if(tok!==gameToken)return;const q=genQ(lvl);$('bl-q').textContent=q.q;
    const field=$('bl-field');if(!field)return;field.innerHTML='';balloons=[];
    const idx=q.o.map((_,i)=>i);shuffle(idx);
    idx.forEach((oi,pos)=>{const el=document.createElement('div');el.className='balloon';
      el.style.background=cols[pos%cols.length];el.style.left=(6+pos*23)+'%';el.style.bottom='-16%';el.textContent=q.o[oi];
      el.onclick=()=>{if(tok!==gameToken)return;ans++;
        if(oi===q.a){cor++;combo++;best=Math.max(best,combo);const pts=10+Math.min(combo,6)*2;sc+=pts;lvl=Math.min(4,1+Math.floor(combo/3));sfx.correct();addXP(2);flash('bl-combo','Pop! +'+pts+' '+comboTag(combo),'good');$('bl-s').textContent=sc;round();}
        else{combo=0;lvl=Math.max(1,lvl-1);sfx.wrong();flash('bl-combo','wrong balloon!','bad');el.style.opacity='.3';el.style.pointerEvents='none';}};
      field.appendChild(el);balloons.push({el,y:-16,speed:0.28+lvl*0.09+Math.random()*0.12});});}
  function tick(){if(tok!==gameToken)return;let escaped=false;
    for(const b of balloons){if(!b.el.parentNode)continue;b.y+=b.speed;b.el.style.bottom=b.y+'%';if(b.y>92){escaped=true;break;}}
    if(escaped){combo=0;sfx.wrong();flash('bl-combo','it floated away! 🎈','bad');round();}
    gameRAF=requestAnimationFrame(tick);}
  round();gameRAF=requestAnimationFrame(tick);
  gameTimer=setInterval(()=>{if(tok!==gameToken){clearInterval(gameTimer);return;}time--;$('bl-t').textContent=time;$('bl-bar').style.width=(time/60*100)+'%';if(time<=0){endGame('balloon',sc,'🎈 Balloon Pop',cor,ans,best);}},1000);}
function tfItem(L){let q,tries=0;do{q=genQ(L);tries++;}while(!q.q.trim().endsWith('=')&&tries<30);
  if(!q.q.trim().endsWith('=')){const a=rint(2,9),b=rint(2,9);q={q:a+' × '+b+' =',o:[String(a*b)],a:0};}
  const correct=q.o[q.a];let shown=correct,isTrue=true;
  if(Math.random()<.5){const w=q.o.filter((o,i)=>i!==q.a);if(w.length){shown=pickOne(w);isTrue=false;}}
  return {statement:q.q+' '+shown,isTrue};}
function startTF(){sfx.click();openGame();stopGame();const tok=gameToken;
  window._tf={time:60,sc:0,combo:0,best:0,cor:0,ans:0,lvl:1,cur:null,tok};
  $('arcade-game').innerHTML=`<div class="game-card"><div class="game-hud"><span>✅ True or False</span><span>⏱ <span id="tf-t">60</span>s</span><span>Score <span id="tf-s">0</span></span></div>
    <div class="timer-bar"><span id="tf-bar"></span></div><div class="combo-tag" id="tf-combo"></div>
    <div class="q-text" id="tf-q" style="text-align:center;font-size:1.7rem;padding:14px 0"></div>
    <div class="tf-btns"><button class="tf-btn tf-true" onclick="tfAns(true)">✓ True</button><button class="tf-btn tf-false" onclick="tfAns(false)">✗ False</button></div>
    <button class="back-link" onclick="resetArcade()">← Quit</button></div>`;
  tfRound();
  gameTimer=setInterval(()=>{const st=window._tf;if(!st||st.tok!==gameToken){clearInterval(gameTimer);return;}st.time--;$('tf-t').textContent=st.time;$('tf-bar').style.width=(st.time/60*100)+'%';if(st.time<=0){endGame('tf',st.sc,'✅ True or False',st.cor,st.ans,st.best);}},1000);}
function tfRound(){const st=window._tf;if(!st||st.tok!==gameToken)return;st.cur=tfItem(st.lvl);$('tf-q').textContent=st.cur.statement;}
function tfAns(v){const st=window._tf;if(!st||st.tok!==gameToken||!st.cur)return;st.ans++;
  if(v===st.cur.isTrue){st.cor++;st.combo++;st.best=Math.max(st.best,st.combo);const pts=10+Math.min(st.combo,6)*2;st.sc+=pts;st.lvl=Math.min(3,1+Math.floor(st.combo/4));sfx.correct();addXP(2);flash('tf-combo','+'+pts+' '+comboTag(st.combo),'good');}
  else{st.combo=0;st.lvl=1;sfx.wrong();flash('tf-combo',(st.cur.isTrue?'It was TRUE':'It was FALSE'),'bad');}
  $('tf-s').textContent=st.sc;tfRound();}

load();drawDuck();refreshHUD();applySettings();updateNavAvatar();renderHome();

/* ==========================================================================
   QUESTION GENERATOR  (rule-based "AI" — infinite valid questions)
   Each GEN[unitId](level) -> {q, o:[...], a:index, why}
========================================================================== */
function rint(a,b){return a+Math.floor(Math.random()*(b-a+1));}
function pickOne(a){return a[Math.floor(Math.random()*a.length)];}
function mc(correct,wrongs){correct=String(correct);let o=[correct];
  for(const w of wrongs){const s=String(w);if(!o.includes(s)&&o.length<4)o.push(s);}
  let guard=0;while(o.length<4&&guard<60){guard++;const base=parseFloat(correct);
    let v=!isNaN(base)?String(base+(rint(-4,4)||5)):correct+' ';if(!o.includes(v))o.push(v);}
  for(let i=o.length-1;i>0;i--){const j=rint(0,i);[o[i],o[j]]=[o[j],o[i]];}
  return {o,a:o.indexOf(correct)};}
function frac(n,d){return n+'/'+d;}

const GEN={
 g4u1(L){const r=Math.random();
   /* (a) value of a unique digit in a big number */
   if(r<.22){const dig=[3,4,5][L-1]||4;let s='',pos=-1;
     for(let t=0;t<50;t++){s='';for(let i=0;i<dig;i++)s+=rint(i===0?1:0,9);
       const uniq=[];for(let i=0;i<dig;i++){if(s[i]!=='0'&&s.split('').filter(c=>c===s[i]).length===1)uniq.push(i);}
       if(uniq.length){pos=pickOne(uniq);break;}}
     if(pos<0)pos=0;const n=parseInt(s),d=+s[pos],place=dig-1-pos,val=d*Math.pow(10,place);
     const wrongs=[d*Math.pow(10,place+1)];if(place>=1)wrongs.push(d);if(place>=2)wrongs.push(d*Math.pow(10,place-1));
     let kk=place+2;while(wrongs.length<3&&kk<=7){const c=d*Math.pow(10,kk);if(c!==val&&!wrongs.includes(c))wrongs.push(c);kk++;}
     return Object.assign({q:`What is the value of the ${d} in ${n.toLocaleString()}?`,why:`The ${d} is in the ${['ones','tens','hundreds','thousands','ten-thousands'][place]} place, so it's worth ${val.toLocaleString()}.`},mc(val,wrongs));}
   /* (b) the "10 times" place-value relationship */
   if(r<.38){const pl=['ones','tens','hundreds','thousands'],i=rint(1,3);
     return Object.assign({q:`A digit in the ${pl[i]} place is worth ___ a digit in the ${pl[i-1]} place.`,why:`Each place to the left is worth 10 times the place on its right.`},mc('10 times',['the same as','1/10 of','100 times']));}
   /* (c) expanded form of a number */
   if(r<.54){let n,parts;do{const dig=rint(3,4);let s='';for(let i=0;i<dig;i++)s+=rint(i===0?1:0,9);n=parseInt(s);
       parts=[];for(let i=0;i<dig;i++){const d=+s[i],pl=(''+n).length-1-i;if(d)parts.push(d*Math.pow(10,pl));}}while(parts.length<2);
     const correct=parts.join(' + ');
     const w1=parts.map((p,i)=>i===0?p*10:p).join(' + ');
     const w2=(''+n).split('').join(' + ');
     const w3=parts.slice(0,-1).join(' + ');
     return Object.assign({q:`Which is ${n.toLocaleString()} in expanded form?`,why:`Add the value of each non-zero digit: ${correct}.`},mc(correct,[w1,w2,w3]));}
   /* (d) standard form from expanded form */
   if(r<.70){let n,parts;do{const dig=rint(3,4);let s='';for(let i=0;i<dig;i++)s+=rint(i===0?1:0,9);n=parseInt(s);
       parts=[];for(let i=0;i<dig;i++){const d=+s[i],pl=(''+n).length-1-i;if(d)parts.push(d*Math.pow(10,pl));}}while(parts.length<2);
     return Object.assign({q:`${parts.join(' + ')} in standard form is:`,why:`Fill each place → ${n.toLocaleString()}.`},mc(n.toLocaleString(),[(n*10).toLocaleString(),(n+rint(1,9)*10).toLocaleString(),(n-1).toLocaleString()]));}
   /* (e) compare two numbers */
   if(r<.85){const dig=rint(3,4),lo=Math.pow(10,dig-1),hi=Math.pow(10,dig)-1;let a,b;
     do{a=rint(lo,hi);b=a+(rint(1,80)-40);}while(a===b||b<lo||b>hi);
     return {q:`Which is greater, ${a.toLocaleString()} or ${b.toLocaleString()}?`,o:[a.toLocaleString(),b.toLocaleString(),"they are equal","can't tell"],a:(a>b?0:1),why:`Compare left to right; ${(a>b?a:b).toLocaleString()} is greater.`};}
   /* (f) rounding */
   const rdig=rint(4,5);let rs='';for(let i=0;i<rdig;i++)rs+=rint(i===0?1:0,9);const rn=parseInt(rs);
   const rpl=rdig===4?pickOne([100,1000]):pickOne([1000,10000]),rr=Math.round(rn/rpl)*rpl,rname={100:'hundred',1000:'thousand',10000:'ten thousand'}[rpl];
   return Object.assign({q:`Round ${rn.toLocaleString()} to the nearest ${rname}.`,why:`Look at the digit just right of the ${rname} place: ${rn.toLocaleString()} rounds to ${rr.toLocaleString()}.`},mc(rr.toLocaleString(),[(rr+rpl).toLocaleString(),Math.max(0,rr-rpl).toLocaleString(),rn.toLocaleString(),(rr+2*rpl).toLocaleString()]));},
 g4u2(L){const hi=[9,12,25][L-1]||12;const r=Math.random();
   if(r<.33){const a=rint(2,hi),b=rint(2,9),nm=pickOne(['boxes','baskets','bags','shelves','rows']),it=pickOne(['apples','books','marbles','pencils','cookies']);
     return Object.assign({q:`There are ${a} ${nm} with ${b} ${it} in each. How many ${it} in all?`,why:`${a} × ${b} = ${a*b}.`},mc(a*b,[a*b+a,a*b-b,(a+1)*b]));}
   if(r<.66){const a=rint(2,hi),b=rint(2,9);
     return Object.assign({q:`${a} × ${b} =`,why:`${a} groups of ${b} = ${a*b}.`},mc(a*b,[a*b+a,a*b-b,(a+1)*b]));}
   const d=rint(2,9),q=rint(2,hi),n=d*q;return Object.assign({q:`${n} ${pickOne(['cookies','stickers','marbles'])} shared equally among ${d} kids — each gets:`,why:`${n} ÷ ${d} = ${q}.`},mc(q,[q+1,q-1,q+2]));},
 g4u3(L){const d=rint(2,[5,8,10][L-1]||8);const n=rint(1,d-1),k=rint(1,d-n);
   return Object.assign({q:`${frac(n,d)} + ${frac(k,d)} =`,why:`Same bottom, so add tops: ${n}+${k}=${n+k}, keep ${d}.`},
     mc(frac(n+k,d),[frac(n+k,d+1),frac(n+k+1,d),frac(n+k-1,d)]));},
 g4u4(L){const t=rint(1,9);if(L>=2&&Math.random()<.5){const h=rint(10,99);
     return Object.assign({q:`Write ${(h/100).toFixed(2)} as a fraction:`,why:`${h} hundredths = ${h}/100.`},mc(frac(h,100),[frac(h,10),frac(h,1000),h]));}
   return Object.assign({q:`Write 0.${t} as a fraction:`,why:`${t} tenths = ${t}/10.`},mc(frac(t,10),[frac(t,100),frac(1,t),t*10]));},
 g4u5(L){const l=rint(2,[6,9,12][L-1]||9),w=rint(2,9);if(Math.random()<.5)
     return Object.assign({q:`Area of a ${l} by ${w} rectangle?`,why:`Area = length × width = ${l}×${w} = ${l*w}.`},mc(l*w,[2*(l+w),l+w,l*w+l]));
   return Object.assign({q:`Perimeter of a ${l} by ${w} rectangle?`,why:`Perimeter = ${l}+${w}+${l}+${w} = ${2*(l+w)}.`},mc(2*(l+w),[l*w,l+w,2*l+w]));},
 g5u1(L){const whole=rint(1,9),a=rint(1,9),b=rint(1,9);const H=whole*100+a*10+b;// hundredths, integer
   const numStr=(H/100).toFixed(2);const tenths=Math.floor(H/10)+(b>=5?1:0);const rt=(tenths/10).toFixed(1);
   return Object.assign({q:`Round ${numStr} to the nearest tenth:`,
     why:`Look at the hundredths (${b}). ${b>=5?'5 or more → round up':'less than 5 → round down'} → ${rt}.`},
     mc(rt,[((tenths+1)/10).toFixed(1),whole+'.0',numStr]));},
 g5u2(L){const a=rint(1,9),b=rint(1,9);const prod=(a*b)/100;
   if(Math.random()<.4){const cents=rint(15,95),price=cents/100,qty=rint(2,[4,6,9][L-1]||6),tot=price*qty,it=pickOne(['pencils','stickers','erasers','stamps']);
     return Object.assign({q:`One item costs $${price.toFixed(2)}. How much for ${qty} ${it}?`,why:`${qty} × $${price.toFixed(2)} = $${tot.toFixed(2)}.`},mc('$'+tot.toFixed(2),['$'+(tot*10).toFixed(2),'$'+(tot/10).toFixed(2),'$'+(price+qty).toFixed(2)]));}
   return Object.assign({q:`0.${a} × 0.${b} =`,why:`${a}×${b}=${a*b}, and 2 decimal places → ${prod.toFixed(2)}.`},
     mc(prod.toFixed(2),[(a*b/10).toFixed(1),(a*b).toString(),(a*b/1000).toFixed(3)]));},
 g5u3(L){if(Math.random()<.5){const a=rint(2,6),b=rint(2,6);
     return Object.assign({q:`${frac(1,a)} × ${frac(1,b)} =`,why:`Multiply tops and bottoms: 1/${a*b}.`},mc(frac(1,a*b),[frac(1,a*b+1),frac(1,a*b-1),frac(1,a*b+2)]));}
   const n=rint(2,9),u=rint(2,6);return Object.assign({q:`${n} ÷ ${frac(1,u)} =`,why:`How many ${frac(1,u)}s in ${n}? ${n}×${u} = ${n*u}.`},mc(n*u,[n+u,n,n*u-u]));},
 g5u4(L){const hi=[4,6,8][L-1]||6;const l=rint(1,hi),w=rint(1,hi),h=rint(1,hi);
   return Object.assign({q:`Volume of a ${l}×${w}×${h} box?`,why:`Volume = ${l}×${w}×${h} = ${l*w*h}.`},mc(l*w*h,[l+w+h,2*(l*w+l*h+w*h),l*w]));},
 g5u5(L){const k=rint(1,[5,9,12][L-1]||9),x=rint(1,9);
   return Object.assign({q:`For y = x + ${k}, when x = ${x}, y = ?`,why:`${x} + ${k} = ${x+k}.`},mc(x+k,[x*k,k-x,x+k+1]));},
 g6u1(L){if(Math.random()<.5){let g,a,b;do{g=rint(2,5);a=g*rint(1,4);b=g*rint(1,4);}while(a===b);const gg=gcd(a,b);
     const cs=(a/gg)+' : '+(b/gg);
     return Object.assign({q:`Simplify the ratio ${a} : ${b}`,why:`Divide both by ${gg}: ${cs}.`},
       mc(cs,[(b/gg)+' : '+(a/gg),(a/gg+1)+' : '+(b/gg),(a/gg)+' : '+(b/gg+1)]));}
   const n=rint(2,8),per=rint(2,9),tot=n*per;return Object.assign({q:`$${tot} for ${n} items = per item:`,why:`${tot} ÷ ${n} = $${per}.`},mc('$'+per,['$'+(per+1),'$'+(per-1),'$'+tot]));},
 g6u2(L){if(Math.random()<.5){let a,b;do{a=rint(-9,9);b=rint(-9,9);}while(a===0||b===0);
     return Object.assign({q:`${a} + ${b<0?'('+b+')':b} =`,why:`Move ${b<0?'left':'right'} ${Math.abs(b)} from ${a} → ${a+b}.`},mc(a+b,[a-b,a+b+1,a+b-1]));}
   const n=rint(2,6),u=rint(2,6);return Object.assign({q:`${n} ÷ ${frac(1,u)} =`,why:`Keep-change-flip: ${n} × ${u} = ${n*u}.`},mc(n*u,[n+u,n,n*u-u]));},
 g6u3(L){const r=Math.random();
   if(r<.25){const q=rint(2,[9,15,20][L-1]||15),x=rint(1,15),rr=x+q,nm=pickOne(['Maya','Leo','Ava','Sam']);
     return Object.assign({q:`${nm} had some stickers, got ${q} more, and now has ${rr}. How many at the start?  (x + ${q} = ${rr})`,why:`${rr} − ${q} = ${x}.`},mc('x = '+x,['x = '+(rr+q),'x = '+rr,'x = '+(x+1)]));}
   if(r<.45){const q=rint(2,[9,15,20][L-1]||15),x=rint(1,15),rr=x+q;
     return Object.assign({q:`Solve x + ${q} = ${rr}`,why:`Subtract ${q} from both sides: x = ${x}.`},mc('x = '+x,['x = '+(rr+q),'x = '+rr,'x = '+(x+1)]));}
   if(r<.7){const p=rint(2,6),x=rint(2,9),rr=p*x;return Object.assign({q:`Solve ${p}x = ${rr}`,why:`Divide both sides by ${p}: x = ${x}.`},mc('x = '+x,['x = '+rr,'x = '+(x+1),'x = '+(x>1?x-1:x+2)]));}
   const a=rint(2,6),b=rint(2,9),x=rint(2,9);return Object.assign({q:`Evaluate ${a}x + ${b} when x = ${x}`,why:`${a}×${x} + ${b} = ${a*x+b}.`},mc(a*x+b,[a*x,a*x+b+1,a*x+2*b]));},
 g6u4(L){if(Math.random()<.5){const b=rint(2,12),h=rint(2,12);const ar=b*h/2;
     return Object.assign({q:`Area of a triangle with base ${b} and height ${h}?`,why:`½ × ${b} × ${h} = ${ar}.`},mc(ar,[b*h,b+h,ar+b]));}
   const l=rint(1,6),w=rint(1,6),h=rint(1,6);return Object.assign({q:`Volume of a ${l}×${w}×${h} box?`,why:`${l}×${w}×${h} = ${l*w*h}.`},mc(l*w*h,[2*(l*w+l*h+w*h),l+w+h,l*w]));},
 g6u5(L){const n=[3,4,5][L-1]||4;const arr=[];for(let i=0;i<n;i++)arr.push(rint(1,12));const sum=arr.reduce((a,b)=>a+b,0);
   if(Math.random()<.5&&sum%n===0){const ctx=pickOne(['test scores','ages','points scored','temperatures']);
     return Object.assign({q:`Find the mean of these ${ctx}: ${arr.join(', ')}`,why:`Sum ${sum} ÷ ${n} = ${sum/n}.`},mc(sum/n,[sum,Math.max(...arr),Math.round(sum/n)+1]));}
   const rng=Math.max(...arr)-Math.min(...arr);return Object.assign({q:`Range of ${arr.join(', ')}?`,why:`Biggest ${Math.max(...arr)} − smallest ${Math.min(...arr)} = ${rng}.`},mc(rng,[Math.max(...arr),Math.min(...arr),rng+1]));},

 /* ---------- multi-step / word-problem "challenge" generators ---------- */
 msChange(L){const cents=rint(20,90),price=cents/100,qty=rint(2,[3,4,5,6][L-1]||5),tot=price*qty;
   const bill=[5,10,20].find(b=>b>=tot)||Math.ceil(tot),change=bill-tot,it=pickOne(['pencils','stickers','apples','markers']);
   return Object.assign({q:`${it[0].toUpperCase()+it.slice(1)} cost $${price.toFixed(2)} each. You buy ${qty} and pay with a $${bill} bill. How much change do you get?`,
     why:`Step 1 — the cost: ${qty} × $${price.toFixed(2)} = $${tot.toFixed(2)}. Step 2 — the change: $${bill} − $${tot.toFixed(2)} = $${change.toFixed(2)}.`},
     mc('$'+change.toFixed(2),['$'+tot.toFixed(2),'$'+bill.toFixed(2),'$'+(tot+price).toFixed(2),'$'+(change+1).toFixed(2)]));},
 msTwoStep(L){const b=rint(3,[6,8,10,12][L-1]||8),c=rint(4,9),made=b*c,sold=rint(2,made-1),left=made-sold;
   return Object.assign({q:`A baker makes ${b} trays of ${c} muffins each, then sells ${sold}. How many muffins are left?`,
     why:`Step 1 — muffins made: ${b} × ${c} = ${made}. Step 2 — subtract what sold: ${made} − ${sold} = ${left}.`},
     mc(left,[made,made+sold,b+c+sold,sold]));},
 msReverseRect(L){const w=rint(2,9),len=rint(2,[8,10,12,15][L-1]||10),area=w*len;
   return Object.assign({q:`A rectangle has an area of ${area} and a width of ${w}. What is its length?`,
     why:`Area = length × width, so length = area ÷ width = ${area} ÷ ${w} = ${len}.`},
     mc(len,[area-w,w,len+1,(len>1?len-1:len+2)]));},
 msReverseTri(L){const h=2*rint(1,[4,5,6,7][L-1]||5),base=rint(2,12),area=base*h/2;
   return Object.assign({q:`A triangle has an area of ${area} and a base of ${base}. What is its height?`,
     why:`Area = ½ × base × height, so height = 2 × area ÷ base = 2 × ${area} ÷ ${base} = ${h}.`},
     mc(h,[area,h/2,h+1,base]));},
 msCompare(L){let ua,ub;do{ua=rint(2,5);ub=rint(2,5);}while(ua===ub);const qa=rint(2,6),qb=rint(2,6),pa=ua*qa,pb=ub*qb,it=pickOne(['pens','apples','erasers','cookies']);
   return {q:`Which is the better deal on ${it}: ${qa} for $${pa}, or ${qb} for $${pb}?`,
     o:[`${qa} for $${pa}`,`${qb} for $${pb}`,'They cost the same','Not enough info'],a:(ua<ub?0:1),
     why:`Find the price for ONE: $${pa} ÷ ${qa} = $${ua} each, and $${pb} ÷ ${qb} = $${ub} each. $${Math.min(ua,ub)} each is the better deal.`};},
 msFractionOf(L){const den=rint(2,5),num=rint(1,den-1),k=rint(2,[5,7,9,12][L-1]||7),N=den*k,ans=N*num/den,it=pickOne(['students','marbles','cookies','stickers']);
   return Object.assign({q:`There are ${N} ${it}, and ${num}/${den} of them are red. How many are red?`,
     why:`${num}/${den} of ${N}: first ${N} ÷ ${den} = ${N/den}, then × ${num} = ${ans}.`},
     mc(ans,[N-ans,N,ans+den,N/den,ans+1]));},
 msPercent(L){const price=pickOne([20,40,60,80,100]),pct=pickOne([10,25,50,20]),off=price*pct/100,sale=price-off;
   return Object.assign({q:`A $${price} jacket is ${pct}% off. What is the sale price?`,
     why:`Discount = ${pct}% of $${price} = $${off}. Sale price = $${price} − $${off} = $${sale}.`},
     mc('$'+sale,['$'+off,'$'+price,'$'+(price+off),'$'+(sale-off)]));}
};

/* ==========================================================================
   PRACTICE MODE  (adaptive, endless)
========================================================================== */
function renderPractice(){
  const grades=gorder.map(g=>{const G=GRADES[g];
    const btns=G.units.map(u=>`<button class="go-btn ghost" style="margin:4px" onclick="practiceRun(['${u.id}'],'${u.name}')">${u.icon} ${u.name}</button>`).join('');
    return `<div class="lesson-box"><h3 style="color:${G.accent}">${G.name}</h3>
      <div>${btns}</div>
      <button class="go-btn" style="background:${G.accent};margin-top:10px" onclick="practiceRun([${G.units.map(u=>"'"+u.id+"'").join(',')}],'${G.name} — Mixed')">Mixed ${G.name}</button></div>`;}).join('');
  $('practice').innerHTML=`<h2 class="section-title">Practice</h2>
    <p class="sub">Unlimited fresh questions that adapt to how you're doing — pick a topic or go mixed. Every answer comes with an explanation.</p>
    <div style="text-align:center;margin-bottom:16px;display:flex;gap:10px;justify-content:center;flex-wrap:wrap">
      <button class="big-btn" style="background:var(--brand);color:#fff" onclick="practiceRun([${allUnitIds().map(id=>"'"+id+"'").join(',')}],'All Grades — Mixed')">Mixed practice (all grades)</button>
      <button class="big-btn" style="background:var(--coral);color:#fff" onclick="practiceRun([${MSTOPICS.map(t=>"'"+t+"'").join(',')}],'Challenge — multi-step')">Challenge (multi-step)</button></div>
    ${grades}`;
}
function allUnitIds(){const a=[];gorder.forEach(g=>GRADES[g].units.forEach(u=>a.push(u.id)));return a;}
let PR=null;
function practiceRun(topics,label){sfx.click();PR={topics,label,level:1,streak:0,answered:0,correct:0,answered_now:false};
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));$('practice').classList.add('active');setTab('practice');window.scrollTo(0,0);
  nextPractice();}
function nextPractice(){const topic=pickOne(PR.topics);const isMs=topic.indexOf('ms')===0;const lv=isMs?PR.level:Math.min(PR.level,3);const item=GEN[topic]?GEN[topic](lv):null;
  if(!item){$('practice').innerHTML='<p>No generator for this topic.</p>';return;}
  PR.cur=item;PR.answered_now=false;
  const acc=PR.answered?Math.round(PR.correct/PR.answered*100):0;
  $('practice').innerHTML=`<button class="back-link" onclick="renderPractice()">← Practice menu</button>
    <div class="quiz-box"><div class="practice-hud"><span>${PR.label}</span>
      <span><span class="level-chip">Level ${PR.level}</span> &nbsp; ✅ ${PR.correct}/${PR.answered} (${acc}%)</span></div>
    <div class="q-text">${item.q}</div>
    ${speakCtl()}
    <div class="options" id="pr-opts">${item.o.map((o,k)=>`<button class="opt" onclick="prPick(${k})">${o}</button>`).join('')}</div>
    <div class="feedback" id="pr-fb"></div>
    <button class="next-btn" id="pr-next" disabled onclick="nextPractice()">Next question →</button></div>`;
  autoRead(item.q);
}
function prPick(k){if(PR.answered_now)return;PR.answered_now=true;const item=PR.cur;PR.answered++;stats.answered++;
  document.querySelectorAll('#pr-opts .opt').forEach((b,idx)=>{if(idx===item.a)b.classList.add('correct');if(idx===k&&k!==item.a)b.classList.add('wrong');b.style.pointerEvents='none';});
  const fb=$('pr-fb');
  if(k===item.a){PR.correct++;stats.correct++;PR.streak++;addXP(5);sfx.correct();
    fb.innerHTML='<span class="feedback good">✅ Correct!</span>'+(explainHTML(item)?'<div class="explain">'+explainHTML(item)+'</div>':'');fb.className='';
    if(PR.streak>=3&&PR.level<4){PR.level++;PR.streak=0;setTimeout(()=>duckSay('Level up — harder questions! 💪'),200);}}
  else{PR.streak=0;if(PR.level>1)PR.level--;sfx.wrong();fb.innerHTML='<span class="feedback bad">❌ Not quite — the answer is <b>'+item.o[item.a]+'</b>.</span>'+(explainHTML(item)?'<div class="explain"><b>How to solve it:</b> '+explainHTML(item)+'</div>':'');fb.className='';}
  save();$('pr-next').disabled=false;
}
