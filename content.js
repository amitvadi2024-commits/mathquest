/* ==========================================================================
   MathQuest content — Grades 4-6 (Common Core aligned)
   Structure:
   GRADES[gid] = { name, short, emoji, color, accent, blurb,
     placement:[ {q,o,a} ],            // recommends where to start
     units:[ { id, name, icon, code, accent,
                sections:[ { title, teach(html), iv(key|null),
                             example:{title, steps:[...]}, quiz:[{q,o,a,why}] } ],
                test:[ {q,o,a,why} ] } ],
     finalTest:[ {q,o,a,why} ] }
   Interactive visuals (iv keys) are defined in app.js -> IV{}.
========================================================================== */
const GRADES = {

/* =========================== GRADE 4 =========================== */
g4:{ name:"Grade 4", short:"G4", emoji:"🌱", accent:"#22c55e",
 color:"linear-gradient(120deg,#22c55e,#86efac)",
 blurb:"Place value, multiplication, fractions, decimals & geometry.",
 placement:[
  {q:"What is the value of the 7 in 4,782?",o:["7","70","700","7,000"],a:2},
  {q:"6 × 8 =",o:["42","48","54","56"],a:1},
  {q:"Which fraction equals 1/2?",o:["2/4","1/3","3/4","2/5"],a:0},
  {q:"Write 0.3 as a fraction:",o:["3/10","3/100","1/3","30"],a:0},
  {q:"A right angle measures:",o:["45°","90°","180°","360°"],a:1},
  {q:"Perimeter of a 5 by 3 rectangle:",o:["15","16","8","30"],a:1}
 ],
 units:[
  {id:"g4u1",name:"Place Value & Big Numbers",icon:"🔢",code:"4.NBT",accent:"#22c55e",
   sections:[
    {title:"Place Value to Millions",iv:"placevalue",
     teach:`<p>Each digit in a number has a <b>place</b> that tells its value. Moving one place left makes it <b>10 times</b> bigger.</p>
       <div class="keybox">In <b>3,482</b>: the 3 is 3 <b>thousands</b> (3,000), the 4 is 4 <b>hundreds</b> (400), the 8 is 8 <b>tens</b> (80), the 2 is 2 <b>ones</b>.</div>`,
     example:{title:"Value of a digit",steps:["Look at 5,297. Find the value of the 2.","The 2 is in the hundreds place.","So its value is 2 × 100 = 200."]},
     quiz:[
      {q:"Value of the 6 in 6,204?",o:["6","600","6,000","60"],a:2,why:"6 is in the thousands place → 6,000."},
      {q:"Which number has 8 in the tens place?",o:["8,000","480","818","208"],a:1,why:"480 → the 8 is tens (80)."},
      {q:"Moving a digit one place LEFT makes it:",o:["10× bigger","10× smaller","the same","100× bigger"],a:0,why:"Each place left is ×10."}
     ]},
    {title:"Adding & Subtracting Big Numbers",iv:null,
     teach:`<p>Line up numbers by place value, then add or subtract each column. <b>Carry</b> when a column is 10 or more; <b>borrow</b> when the top digit is too small.</p>
       <div class="keybox">Always line up the <b>ones under ones</b>, tens under tens, and so on.</div>`,
     example:{title:"327 + 145",steps:["Add ones: 7 + 5 = 12. Write 2, carry 1.","Add tens: 2 + 4 + 1(carried) = 7.","Add hundreds: 3 + 1 = 4. Answer: 472."]},
     quiz:[
      {q:"463 + 218 =",o:["681","671","581","691"],a:0,why:"3+8=11 carry, 6+1+1=8, 4+2=6 → 681."},
      {q:"500 − 236 =",o:["264","364","274","236"],a:0,why:"500−236 = 264."},
      {q:"When a column adds to 10 or more you:",o:["borrow","carry","stop","subtract"],a:1,why:"Carry to the next place."}
     ]}
   ],
   test:[
    {q:"Value of the 9 in 9,152?",o:["9","900","9,000","90"],a:2,why:"Thousands place → 9,000."},
    {q:"Write 'four thousand sixty' in digits:",o:["4,600","4,060","460","4,006"],a:1,why:"4 thousands, 0 hundreds, 6 tens, 0 ones."},
    {q:"238 + 476 =",o:["714","704","614","724"],a:0,why:"238+476 = 714."},
    {q:"803 − 259 =",o:["544","644","554","546"],a:0,why:"803−259 = 544."}
   ]},

  {id:"g4u2",name:"Multiplication & Division",icon:"✖️",code:"4.OA/NBT",accent:"#38bdf8",
   sections:[
    {title:"Multiplication as Arrays",iv:"array",
     teach:`<p>Multiplication is <b>repeated addition</b>, and you can picture it as an <b>array</b> — rows and columns of dots.</p>
       <div class="keybox"><b>4 × 6</b> means 4 rows of 6 = 24. The area of the rectangle equals the product!</div>`,
     example:{title:"7 × 8",steps:["Think 7 rows of 8.","Break it up: 7 × 8 = 7 × 4 + 7 × 4 = 28 + 28.","28 + 28 = 56."]},
     quiz:[
      {q:"6 × 7 =",o:["42","36","48","49"],a:0,why:"6 rows of 7 = 42."},
      {q:"An array with 5 rows of 9 dots shows:",o:["5+9","5×9=45","9−5","14"],a:1,why:"5×9 = 45."},
      {q:"9 × 8 =",o:["63","72","81","64"],a:1,why:"9×8 = 72."}
     ]},
    {title:"Division & Remainders",iv:null,
     teach:`<p>Division splits a total into <b>equal groups</b>. Sometimes there's a <b>remainder</b> left over.</p>
       <div class="keybox"><b>23 ÷ 5</b>: 5 fits into 23 four times (20), with <b>3 left over</b> → 4 remainder 3.</div>`,
     example:{title:"29 ÷ 4",steps:["How many 4s fit in 29?","4 × 7 = 28, which is ≤ 29.","29 − 28 = 1 left over → 7 remainder 1."]},
     quiz:[
      {q:"56 ÷ 8 =",o:["6","7","8","9"],a:1,why:"8×7 = 56."},
      {q:"17 ÷ 5 =",o:["3 r2","2 r7","4 r1","3 r1"],a:0,why:"5×3=15, remainder 2."},
      {q:"A remainder is:",o:["the answer","what's left over","the divisor","zero always"],a:1,why:"It's the leftover amount."}
     ]}
   ],
   test:[
    {q:"8 × 6 =",o:["42","48","54","46"],a:1,why:"48."},
    {q:"7 × 9 =",o:["56","63","72","64"],a:1,why:"63."},
    {q:"45 ÷ 9 =",o:["4","5","6","7"],a:1,why:"9×5 = 45."},
    {q:"25 ÷ 4 =",o:["6 r1","5 r5","6 r2","4 r9"],a:0,why:"4×6=24, remainder 1."}
   ]},

  {id:"g4u3",name:"Fractions",icon:"🍕",code:"4.NF",accent:"#fb7185",
   sections:[
    {title:"Equivalent Fractions",iv:"fracbar",
     teach:`<p>Two fractions are <b>equivalent</b> if they show the same amount, even with different numbers.</p>
       <div class="keybox">Multiply (or divide) the top and bottom by the <b>same number</b>: 1/2 = 2/4 = 3/6.</div>`,
     example:{title:"Is 2/3 = 4/6?",steps:["Multiply 2/3 top and bottom by 2.","2×2 = 4 and 3×2 = 6.","So 2/3 = 4/6. Yes!"]},
     quiz:[
      {q:"Which equals 1/2?",o:["2/4","2/3","1/4","3/5"],a:0,why:"1/2 = 2/4."},
      {q:"3/4 is the same as:",o:["6/8","4/6","3/5","3/8"],a:0,why:"×2 top and bottom → 6/8."},
      {q:"Simplify 4/8:",o:["1/2","2/3","1/4","1/3"],a:0,why:"Divide by 4 → 1/2."}
     ]},
    {title:"Adding Fractions (Same Bottom)",iv:"fracbar",
     teach:`<p>When fractions have the <b>same denominator</b> (bottom), just add the <b>numerators</b> (tops). The bottom stays the same.</p>
       <div class="keybox"><b>2/5 + 1/5 = 3/5.</b> The pieces are the same size, so you just count them.</div>`,
     example:{title:"3/8 + 4/8",steps:["Bottoms are the same (8).","Add tops: 3 + 4 = 7.","Answer: 7/8."]},
     quiz:[
      {q:"1/4 + 2/4 =",o:["3/4","3/8","2/8","3/16"],a:0,why:"Add tops → 3/4."},
      {q:"2/6 + 3/6 =",o:["5/6","5/12","6/6","5/36"],a:0,why:"→ 5/6."},
      {q:"When adding same-bottom fractions, the bottom:",o:["adds too","stays the same","doubles","goes to 1"],a:1,why:"Denominator stays the same."}
     ]}
   ],
   test:[
    {q:"Which equals 2/4?",o:["1/2","2/3","1/3","3/4"],a:0,why:"2/4 = 1/2."},
    {q:"3/5 = ?/10",o:["6","5","8","3"],a:0,why:"×2 → 6/10."},
    {q:"2/7 + 4/7 =",o:["6/7","6/14","8/7","6/49"],a:0,why:"→ 6/7."},
    {q:"Simplify 6/9:",o:["2/3","3/4","1/2","3/5"],a:0,why:"Divide by 3 → 2/3."}
   ]},

  {id:"g4u4",name:"Decimals",icon:"🔟",code:"4.NF",accent:"#f59e0b",
   sections:[
    {title:"Tenths & Hundredths",iv:"decimalgrid",
     teach:`<p>Decimals are another way to write fractions with bottoms of 10 or 100. The first place after the dot is <b>tenths</b>, the next is <b>hundredths</b>.</p>
       <div class="keybox"><b>0.7 = 7/10</b> and <b>0.25 = 25/100</b>. A 100-square grid makes it easy to see.</div>`,
     example:{title:"Write 0.4 as a fraction",steps:["0.4 is 4 tenths.","Tenths means out of 10.","So 0.4 = 4/10 (= 2/5)."]},
     quiz:[
      {q:"0.3 as a fraction:",o:["3/10","3/100","1/3","30"],a:0,why:"3 tenths = 3/10."},
      {q:"37/100 as a decimal:",o:["0.37","3.7","0.037","37"],a:0,why:"37 hundredths = 0.37."},
      {q:"The 2nd place after the dot is:",o:["tenths","hundredths","ones","thousandths"],a:1,why:"Hundredths."}
     ]},
    {title:"Comparing Decimals",iv:"decimalgrid",
     teach:`<p>To compare decimals, line up the dots and compare place by place, left to right.</p>
       <div class="keybox"><b>0.7 vs 0.65:</b> 0.7 = 0.70, and 70 hundredths &gt; 65 hundredths, so 0.7 is bigger.</div>`,
     example:{title:"Which is bigger, 0.5 or 0.45?",steps:["Write 0.5 as 0.50.","Compare 50 hundredths and 45 hundredths.","50 > 45, so 0.5 is bigger."]},
     quiz:[
      {q:"Which is bigger?",o:["0.6","0.59","0.55","0.5"],a:0,why:"0.60 > 0.59."},
      {q:"0.2 ___ 0.20",o:["greater","less","equal","none"],a:2,why:"They're equal."},
      {q:"Order smallest first: 0.3, 0.03, 0.33",o:["0.03, 0.3, 0.33","0.3, 0.03, 0.33","0.33, 0.3, 0.03","0.03, 0.33, 0.3"],a:0,why:"0.03 < 0.3 < 0.33."}
     ]}
   ],
   test:[
    {q:"0.9 as a fraction:",o:["9/10","9/100","1/9","90"],a:0,why:"9 tenths."},
    {q:"51/100 as a decimal:",o:["0.51","5.1","0.051","51"],a:0,why:"0.51."},
    {q:"Which is bigger, 0.8 or 0.75?",o:["0.8","0.75","equal","can't tell"],a:0,why:"0.80 > 0.75."},
    {q:"0.6 equals:",o:["6/10","6/100","60","1/6"],a:0,why:"6/10."}
   ]},

  {id:"g4u5",name:"Geometry & Angles",icon:"📐",code:"4.MD/G",accent:"#0ea5e9",
   sections:[
    {title:"Angles",iv:"angle",
     teach:`<p>An <b>angle</b> is the amount of turn between two rays. We measure angles in <b>degrees (°)</b>.</p>
       <div class="keybox"><b>Right angle = 90°</b>, straight line = 180°, full circle = 360°. Less than 90° is <b>acute</b>, more than 90° is <b>obtuse</b>.</div>`,
     example:{title:"Classify a 120° angle",steps:["Is it less than 90°? No.","Is it exactly 90°? No.","It's more than 90° → obtuse."]},
     quiz:[
      {q:"A right angle is:",o:["45°","90°","180°","60°"],a:1,why:"90°."},
      {q:"An angle of 50° is:",o:["acute","right","obtuse","straight"],a:0,why:"Less than 90° → acute."},
      {q:"Two right angles make:",o:["90°","180°","270°","45°"],a:1,why:"90+90 = 180°."}
     ]},
    {title:"Area & Perimeter",iv:"arearect",
     teach:`<p><b>Perimeter</b> is the distance around a shape (add all sides). <b>Area</b> is the space inside (length × width for a rectangle).</p>
       <div class="keybox">A 5 by 3 rectangle: perimeter = 5+3+5+3 = <b>16</b>, area = 5 × 3 = <b>15</b>.</div>`,
     example:{title:"Area of a 6 by 4 rectangle",steps:["Area = length × width.","= 6 × 4.","= 24 square units."]},
     quiz:[
      {q:"Area of a 7 by 2 rectangle:",o:["14","18","9","28"],a:0,why:"7×2 = 14."},
      {q:"Perimeter of a 5 by 5 square:",o:["10","20","25","15"],a:1,why:"4 sides of 5 = 20."},
      {q:"Perimeter of a 8 by 3 rectangle:",o:["22","24","11","16"],a:0,why:"8+3+8+3 = 22."}
     ]}
   ],
   test:[
    {q:"An angle of 90° is a:",o:["acute angle","right angle","obtuse angle","straight angle"],a:1,why:"Right angle."},
    {q:"An angle of 150° is:",o:["acute","right","obtuse","straight"],a:2,why:"More than 90° → obtuse."},
    {q:"Area of a 9 by 3 rectangle:",o:["27","24","12","30"],a:0,why:"9×3 = 27."},
    {q:"Perimeter of a 6 by 2 rectangle:",o:["16","12","8","20"],a:0,why:"6+2+6+2 = 16."}
   ]},
 ],
 finalTest:[
  {q:"Value of the 4 in 3,481?",o:["4","40","400","4,000"],a:2,why:"Hundreds → 400."},
  {q:"7 × 6 =",o:["42","48","36","49"],a:0,why:"42."},
  {q:"Which equals 1/2?",o:["3/6","2/3","1/3","3/4"],a:0,why:"3/6 = 1/2."},
  {q:"0.7 as a fraction:",o:["7/10","7/100","1/7","70"],a:0,why:"7 tenths."},
  {q:"A 90° angle is a:",o:["acute","right","obtuse","straight"],a:1,why:"Right angle."},
  {q:"Area of a 5 by 4 rectangle:",o:["20","18","9","40"],a:0,why:"5×4 = 20."}
 ]
},

/* =========================== GRADE 5 =========================== */
g5:{ name:"Grade 5", short:"G5", emoji:"⭐", accent:"#38bdf8",
 color:"linear-gradient(120deg,#38bdf8,#0ea5e9)",
 blurb:"Decimals, operations, multiplying & dividing fractions, volume & graphing.",
 placement:[
  {q:"In 4.36, the 6 is in the:",o:["tenths","hundredths","ones","thousandths"],a:1},
  {q:"0.4 × 0.2 =",o:["0.08","0.8","0.6","0.008"],a:0},
  {q:"1/2 × 1/3 =",o:["1/6","2/5","1/5","2/3"],a:0},
  {q:"Volume of a 2×3×4 box:",o:["9","24","14","12"],a:1},
  {q:"The point (3, 2) means:",o:["right 3, up 2","up 3, right 2","3+2","left 3"],a:0}
 ],
 units:[
  {id:"g5u1",name:"Decimals & Place Value",icon:"🔢",code:"5.NBT",accent:"#38bdf8",
   sections:[
    {title:"Decimal Place Value",iv:"placevalue",
     teach:`<p>Place value keeps going past the decimal point: tenths, hundredths, thousandths. Each place is <b>10 times smaller</b> than the one to its left.</p>
       <div class="keybox">In <b>2.573</b>: 5 is tenths (0.5), 7 is hundredths (0.07), 3 is thousandths (0.003).</div>`,
     example:{title:"Value of the 8 in 3.482",steps:["Find the 8's place: hundredths.","Hundredths = 1/100 = 0.01.","So the 8 is worth 8 × 0.01 = 0.08."]},
     quiz:[
      {q:"In 6.29, the 9 is in the:",o:["tenths","hundredths","ones","thousandths"],a:1,why:"Second place → hundredths."},
      {q:"Value of the 5 in 0.57?",o:["0.5","0.05","5","0.005"],a:0,why:"Tenths → 0.5."},
      {q:"Each place to the right is:",o:["10× bigger","10× smaller","the same","100× bigger"],a:1,why:"×1/10 each step right."}
     ]},
    {title:"Rounding Decimals",iv:"decimalnumberline",
     teach:`<p>To round, look at the digit just to the <b>right</b> of the place you're rounding to. 5 or more rounds up; less than 5 rounds down.</p>
       <div class="keybox">Round <b>3.47</b> to the nearest tenth: the hundredths digit is 7 (≥5), so round up → <b>3.5</b>.</div>`,
     example:{title:"Round 6.83 to the nearest tenth",steps:["Rounding to tenths: look at the hundredths digit (3).","3 is less than 5, so round down.","Answer: 6.8."]},
     quiz:[
      {q:"Round 4.62 to the nearest tenth:",o:["4.6","4.7","5.0","4.5"],a:0,why:"2 < 5 → 4.6."},
      {q:"Round 2.85 to the nearest tenth:",o:["2.8","2.9","3.0","2.85"],a:1,why:"5 → round up → 2.9."},
      {q:"Round 7.49 to the nearest whole:",o:["7","8","7.5","7.4"],a:0,why:"0.49 < 0.5 → 7."}
     ]}
   ],
   test:[
    {q:"In 5.316, the 1 is in the:",o:["tenths","hundredths","thousandths","ones"],a:1,why:"Hundredths."},
    {q:"Value of the 4 in 0.94?",o:["0.4","0.04","4","0.004"],a:1,why:"Hundredths → 0.04."},
    {q:"Round 3.27 to the nearest tenth:",o:["3.3","3.2","3.0","3.27"],a:0,why:"Hundredths digit is 7 (5 or more) so round up to 3.3."},
    {q:"Round 8.5 to the nearest whole:",o:["8","9","8.5","10"],a:1,why:"5 → round up → 9."}
   ]},

  {id:"g5u2",name:"Decimal Operations",icon:"✖️",code:"5.NBT",accent:"#14b8a6",
   sections:[
    {title:"Multiplying Decimals",iv:"decimalgrid",
     teach:`<p>Multiply as if there were no dots, then count the total decimal places and put the dot back.</p>
       <div class="keybox"><b>0.4 × 0.2:</b> 4 × 2 = 8, and there are 2 decimal places total, so the answer is <b>0.08</b>.</div>`,
     example:{title:"0.3 × 0.6",steps:["Ignore dots: 3 × 6 = 18.","Count decimal places: 1 + 1 = 2.","Place the dot 2 from the right → 0.18."]},
     quiz:[
      {q:"0.5 × 0.5 =",o:["0.25","2.5","0.025","25"],a:0,why:"5×5=25, 2 places → 0.25."},
      {q:"0.2 × 0.3 =",o:["0.6","0.06","0.006","6"],a:1,why:"6, 2 places → 0.06."},
      {q:"3 × 0.4 =",o:["1.2","0.12","12","0.012"],a:0,why:"12, 1 place → 1.2."}
     ]},
    {title:"Dividing Decimals",iv:null,
     teach:`<p>To divide by a decimal, move both dots the same number of places to make the divisor a whole number.</p>
       <div class="keybox"><b>6 ÷ 0.5:</b> move both dots one place → 60 ÷ 5 = <b>12</b>.</div>`,
     example:{title:"4.8 ÷ 0.6",steps:["Make the divisor whole: 0.6 → 6 (move 1 place).","Move the other dot too: 4.8 → 48.","48 ÷ 6 = 8."]},
     quiz:[
      {q:"8 ÷ 0.4 =",o:["20","2","0.2","32"],a:0,why:"80 ÷ 4 = 20."},
      {q:"2.4 ÷ 0.6 =",o:["4","0.4","40","2"],a:0,why:"24 ÷ 6 = 4."},
      {q:"To divide by 0.2, first make it:",o:["a whole number","smaller","a fraction","zero"],a:0,why:"Move dots to make divisor whole."}
     ]}
   ],
   test:[
    {q:"0.6 × 0.4 =",o:["0.24","2.4","0.024","24"],a:0,why:"24, 2 places → 0.24."},
    {q:"5 × 0.7 =",o:["3.5","0.35","35","0.035"],a:0,why:"35, 1 place → 3.5."},
    {q:"9 ÷ 0.3 =",o:["30","3","0.3","27"],a:0,why:"90 ÷ 3 = 30."},
    {q:"3.6 ÷ 0.9 =",o:["4","0.4","40","3"],a:0,why:"36 ÷ 9 = 4."}
   ]},

  {id:"g5u3",name:"Multiply & Divide Fractions",icon:"🍕",code:"5.NF",accent:"#fb7185",
   sections:[
    {title:"Multiplying Fractions",iv:"fracmultgrid",
     teach:`<p>To multiply fractions, multiply the <b>tops</b> together and the <b>bottoms</b> together. No common denominator needed!</p>
       <div class="keybox"><b>1/2 × 1/3 = (1×1)/(2×3) = 1/6.</b> "Of" means multiply: 1/2 of 1/3.</div>`,
     example:{title:"2/3 × 3/4",steps:["Multiply tops: 2 × 3 = 6.","Multiply bottoms: 3 × 4 = 12.","6/12 = 1/2."]},
     quiz:[
      {q:"1/2 × 1/4 =",o:["1/8","2/6","1/6","2/8"],a:0,why:"(1×1)/(2×4) = 1/8."},
      {q:"2/3 × 1/2 =",o:["2/6 = 1/3","3/5","2/5","1/6"],a:0,why:"2/6 = 1/3."},
      {q:"'1/2 of 10' means:",o:["1/2 × 10 = 5","10 − 2","12","1/2 + 10"],a:0,why:"'Of' = multiply → 5."}
     ]},
    {title:"Dividing with Unit Fractions",iv:"fracbar",
     teach:`<p>Dividing by a fraction asks "how many of these fit?" To divide, <b>multiply by the flipped fraction</b> (its reciprocal).</p>
       <div class="keybox"><b>3 ÷ 1/2</b> = how many halves in 3 = 3 × 2 = <b>6</b>.</div>`,
     example:{title:"4 ÷ 1/3",steps:["How many thirds fit in 4?","Flip 1/3 to 3 and multiply: 4 × 3.","= 12."]},
     quiz:[
      {q:"2 ÷ 1/4 =",o:["8","1/2","6","2"],a:0,why:"2 × 4 = 8."},
      {q:"How many 1/2s are in 5?",o:["10","2.5","5","7"],a:0,why:"5 × 2 = 10."},
      {q:"6 ÷ 1/3 =",o:["18","2","9","3"],a:0,why:"6 × 3 = 18."}
     ]}
   ],
   test:[
    {q:"1/3 × 1/2 =",o:["1/6","2/5","1/5","2/6"],a:0,why:"1/6."},
    {q:"3/4 × 2/3 =",o:["1/2","6/7","5/7","1/4"],a:0,why:"6/12 = 1/2."},
    {q:"3 ÷ 1/2 =",o:["6","1.5","5","3"],a:0,why:"3 × 2 = 6."},
    {q:"How many 1/4s in 2?",o:["8","6","4","2"],a:0,why:"2 × 4 = 8."}
   ]},

  {id:"g5u4",name:"Volume",icon:"📦",code:"5.MD",accent:"#f59e0b",
   sections:[
    {title:"Volume of Boxes",iv:"box",
     teach:`<p><b>Volume</b> is how much space is inside a 3-D shape, measured in <b>cubic units</b>. For a box, multiply the three dimensions.</p>
       <div class="keybox"><b>Volume = length × width × height.</b> A 2×3×4 box holds 24 unit cubes.</div>`,
     example:{title:"Volume of a 5×2×3 box",steps:["Multiply length × width: 5 × 2 = 10.","Multiply by height: 10 × 3.","= 30 cubic units."]},
     quiz:[
      {q:"Volume of a 3×3×3 cube:",o:["9","27","18","6"],a:1,why:"3×3×3 = 27."},
      {q:"Volume of a 4×2×5 box:",o:["40","11","20","30"],a:0,why:"4×2×5 = 40."},
      {q:"Volume is measured in:",o:["square units","cubic units","degrees","inches only"],a:1,why:"Cubic units."}
     ]},
    {title:"Adding Volumes",iv:null,
     teach:`<p>For an L-shaped solid, split it into <b>two boxes</b>, find each volume, then add them together.</p>
       <div class="keybox">A shape = box A (2×2×2 = 8) + box B (3×1×2 = 6) → total volume <b>14</b>.</div>`,
     example:{title:"Two boxes: 2×2×2 and 4×1×1",steps:["Box A: 2×2×2 = 8.","Box B: 4×1×1 = 4.","Add: 8 + 4 = 12."]},
     quiz:[
      {q:"Box A = 10, Box B = 6. Total volume:",o:["16","4","60","10"],a:0,why:"10 + 6 = 16."},
      {q:"A 2×2×2 plus a 2×2×1:",o:["12","10","8","16"],a:0,why:"8 + 4 = 12."},
      {q:"To find the volume of an L-shape:",o:["split into boxes","measure sides","use π","add the edges"],a:0,why:"Split, then add volumes."}
     ]}
   ],
   test:[
    {q:"Volume of a 2×5×2 box:",o:["20","9","14","10"],a:0,why:"2×5×2 = 20."},
    {q:"Volume of a 4×4×2 box:",o:["32","10","16","24"],a:0,why:"32."},
    {q:"Volume of a 1×1×1 cube:",o:["1","3","0","2"],a:0,why:"1."},
    {q:"Box A=12, Box B=8. Total:",o:["20","4","96","12"],a:0,why:"20."}
   ]},

  {id:"g5u5",name:"Coordinate Plane",icon:"📍",code:"5.G",accent:"#0ea5e9",
   sections:[
    {title:"Plotting Points",iv:"coord",
     teach:`<p>The coordinate plane has an <b>x-axis</b> (across) and a <b>y-axis</b> (up). A point (x, y) tells you how far right, then how far up.</p>
       <div class="keybox"><b>(3, 2):</b> start at 0, go <b>right 3</b>, then <b>up 2</b>. Always x first!</div>`,
     example:{title:"Plot (4, 1)",steps:["Start at the origin (0,0).","Move right 4 along the x-axis.","Move up 1. That's the point (4,1)."]},
     quiz:[
      {q:"In (5, 3), the 5 tells you to go:",o:["right 5","up 5","left 5","down 5"],a:0,why:"x = right 5."},
      {q:"Which comes first in (x, y)?",o:["x (across)","y (up)","either","the bigger one"],a:0,why:"x always first."},
      {q:"The point (0, 0) is called the:",o:["origin","center of mass","peak","axis"],a:0,why:"The origin."}
     ]},
    {title:"Graphing Patterns",iv:"coord",
     teach:`<p>If a rule connects two numbers, you can graph the pairs as points. A steady rule makes a <b>straight line</b>.</p>
       <div class="keybox">Rule "y = x + 1" gives points (0,1), (1,2), (2,3)... a straight diagonal line.</div>`,
     example:{title:"Points for y = 2x",steps:["x=0 → y=0, point (0,0).","x=1 → y=2, point (1,2).","x=2 → y=4, point (2,4). A straight line!"]},
     quiz:[
      {q:"For y = x + 2, when x = 3, y =",o:["5","6","1","23"],a:0,why:"3 + 2 = 5."},
      {q:"For y = 2x, when x = 4, y =",o:["8","6","2","24"],a:0,why:"2 × 4 = 8."},
      {q:"Points following a steady rule form a:",o:["circle","straight line","zigzag","dot"],a:1,why:"A straight line."}
     ]}
   ],
   test:[
    {q:"In (2, 7), the 7 means:",o:["up 7","right 7","left 7","down 7"],a:0,why:"y = up 7."},
    {q:"The origin is at:",o:["(0,0)","(1,1)","(2,0)","(0,1)"],a:0,why:"(0,0)."},
    {q:"For y = x + 4, when x = 2, y =",o:["6","8","2","24"],a:0,why:"2 + 4 = 6."},
    {q:"To plot (5,1) you go:",o:["right 5, up 1","up 5, right 1","right 1, up 5","left 5"],a:0,why:"x first: right 5, up 1."}
   ]},
 ],
 finalTest:[
  {q:"In 3.14, the 4 is in the:",o:["tenths","hundredths","ones","thousandths"],a:1,why:"Hundredths."},
  {q:"0.3 × 0.5 =",o:["0.15","1.5","0.015","15"],a:0,why:"15, 2 places → 0.15."},
  {q:"1/2 × 2/3 =",o:["1/3","2/5","3/5","1/5"],a:0,why:"(1×2)/(2×3) = 2/6 = 1/3."},
  {q:"4 ÷ 1/2 =",o:["8","2","6","4"],a:0,why:"4 × 2 = 8."},
  {q:"Volume of a 2×2×3 box:",o:["12","7","10","24"],a:0,why:"12."},
  {q:"To plot (3, 4), go:",o:["right 3, up 4","up 3, right 4","right 4, up 3","left 3"],a:0,why:"x first."}
 ]
},

/* =========================== GRADE 6 =========================== */
g6:{ name:"Grade 6", short:"G6", emoji:"🚀", accent:"#0ea5e9",
 color:"linear-gradient(120deg,#0ea5e9,#fb7185)",
 blurb:"Ratios, dividing fractions, negatives, equations, geometry & data.",
 placement:[
  {q:"The ratio of 6 dogs to 3 cats simplifies to:",o:["2:1","3:1","6:3 only","1:2"],a:0},
  {q:"1/2 ÷ 1/4 =",o:["2","1/8","8","1/2"],a:0},
  {q:"What is −3 + 8?",o:["5","−5","11","−11"],a:0},
  {q:"Solve x + 5 = 12:",o:["x=7","x=17","x=5","x=60"],a:0},
  {q:"Area of a triangle, base 8 height 4:",o:["16","32","12","24"],a:0},
  {q:"The mean of 2, 4, 6:",o:["4","6","12","3"],a:0}
 ],
 units:[
  {id:"g6u1",name:"Ratios & Rates",icon:"⚖️",code:"6.RP",accent:"#0ea5e9",
   sections:[
    {title:"Understanding Ratios",iv:"ratio",
     teach:`<p>A <b>ratio</b> compares two quantities, like 3 cups of flour to 2 cups of sugar (3:2). Ratios can be <b>scaled up or down</b> by multiplying or dividing both parts.</p>
       <div class="keybox"><b>6:4</b> simplifies to <b>3:2</b> (divide both by 2). Equivalent ratios show the same relationship.</div>`,
     example:{title:"Simplify 10:15",steps:["Find a number that divides both: 5.","10 ÷ 5 = 2, and 15 ÷ 5 = 3.","So 10:15 = 2:3."]},
     quiz:[
      {q:"Simplify the ratio 8:12:",o:["2:3","3:4","3:2","4:5"],a:0,why:"Divide both by 4 → 2:3."},
      {q:"3 red to 6 blue as a simple ratio:",o:["1:2","2:1","3:6 only","1:3"],a:0,why:"Divide by 3 → 1:2."},
      {q:"An equivalent ratio to 2:3 is:",o:["4:6","2:6","6:2","3:2"],a:0,why:"×2 both → 4:6."}
     ]},
    {title:"Unit Rates & Percent",iv:"ratio",
     teach:`<p>A <b>unit rate</b> is the amount for <b>1</b> (like miles per hour). A <b>percent</b> is a ratio out of 100.</p>
       <div class="keybox">$12 for 3 lbs → <b>$4 per lb</b> (divide). 25% means <b>25 out of 100</b> = 1/4.</div>`,
     example:{title:"Unit rate: 150 miles in 3 hours",steps:["Rate = miles ÷ hours.","150 ÷ 3 = 50.","So 50 miles per hour."]},
     quiz:[
      {q:"$20 for 4 books = per book:",o:["$5","$4","$16","$80"],a:0,why:"20 ÷ 4 = $5."},
      {q:"50% as a fraction:",o:["1/2","1/4","1/5","5"],a:0,why:"50/100 = 1/2."},
      {q:"120 miles in 2 hours = ",o:["60 mph","240 mph","2 mph","122 mph"],a:0,why:"120 ÷ 2 = 60."}
     ]}
   ],
   test:[
    {q:"Simplify 9:6:",o:["3:2","2:3","9:6 only","1:2"],a:0,why:"÷3 → 3:2."},
    {q:"$18 for 6 pens = per pen:",o:["$3","$4","$12","$24"],a:0,why:"18 ÷ 6 = $3."},
    {q:"25% as a fraction:",o:["1/4","1/2","1/5","25"],a:0,why:"25/100 = 1/4."},
    {q:"An equivalent ratio to 1:3:",o:["2:6","3:1","1:6","6:1"],a:0,why:"×2 → 2:6."}
   ]},

  {id:"g6u2",name:"Fractions & Negatives",icon:"➗",code:"6.NS",accent:"#14b8a6",
   sections:[
    {title:"Dividing Fractions",iv:"fracdiv",
     teach:`<p>To divide fractions, <b>keep, change, flip</b>: keep the first, change ÷ to ×, and flip the second fraction.</p>
       <div class="keybox"><b>1/2 ÷ 1/4</b> = 1/2 × 4/1 = 4/2 = <b>2</b>. (How many quarters fit in a half? Two!)</div>`,
     example:{title:"2/3 ÷ 1/6",steps:["Keep 2/3, change to ×, flip 1/6 → 6/1.","2/3 × 6/1 = 12/3.","= 4."]},
     quiz:[
      {q:"1/2 ÷ 1/4 =",o:["2","1/8","8","1/2"],a:0,why:"1/2 × 4 = 2."},
      {q:"3/4 ÷ 1/2 =",o:["3/2","3/8","1/2","2/3"],a:0,why:"3/4 × 2 = 6/4 = 3/2."},
      {q:"'Keep, change, flip' flips the:",o:["first fraction","second fraction","answer","numerator"],a:1,why:"Flip the divisor (second)."}
     ]},
    {title:"Negative Numbers",iv:"numline",
     teach:`<p>Negative numbers are less than zero — like temperatures below freezing or money owed. On a number line they sit to the <b>left of 0</b>.</p>
       <div class="keybox">To add, move right for positive, left for negative. <b>−3 + 8 = 5.</b> The opposite of a number is the same distance from 0.</div>`,
     example:{title:"−5 + 3",steps:["Start at −5 on the number line.","Add 3 → move right 3 steps.","You land on −2."]},
     quiz:[
      {q:"−4 + 9 =",o:["5","−5","13","−13"],a:0,why:"Move right 9 from −4 → 5."},
      {q:"Which is smaller?",o:["−6","−2","0","3"],a:0,why:"−6 is furthest left."},
      {q:"The opposite of −7 is:",o:["7","−7","0","1/7"],a:0,why:"Opposite of −7 is 7."}
     ]}
   ],
   test:[
    {q:"1/3 ÷ 1/6 =",o:["2","1/18","1/2","6"],a:0,why:"1/3 × 6 = 2."},
    {q:"2/5 ÷ 1/5 =",o:["2","1/25","10","2/25"],a:0,why:"2/5 × 5 = 2."},
    {q:"−2 + 7 =",o:["5","−5","9","−9"],a:0,why:"5."},
    {q:"Order smallest first: −3, 1, −5",o:["−5, −3, 1","−3, −5, 1","1, −3, −5","−5, 1, −3"],a:0,why:"−5 < −3 < 1."}
   ]},

  {id:"g6u3",name:"Expressions & Equations",icon:"🟰",code:"6.EE",accent:"#fb7185",
   sections:[
    {title:"Expressions & Variables",iv:null,
     teach:`<p>A <b>variable</b> is a letter that stands for a number. An <b>expression</b> combines numbers and variables, like <b>3x + 2</b>.</p>
       <div class="keybox">To <b>evaluate</b> 3x + 2 when x = 4: replace x with 4 → 3(4) + 2 = 14.</div>`,
     example:{title:"Evaluate 2n + 5 when n = 3",steps:["Replace n with 3: 2(3) + 5.","Multiply first: 6 + 5.","= 11."]},
     quiz:[
      {q:"Evaluate 4x when x = 5:",o:["20","9","45","1"],a:0,why:"4 × 5 = 20."},
      {q:"Evaluate x + 7 when x = 6:",o:["13","1","42","76"],a:0,why:"6 + 7 = 13."},
      {q:"In 5y, the y is a:",o:["variable","constant","operation","answer"],a:0,why:"A variable."}
     ]},
    {title:"Solving One-Step Equations",iv:"balance",
     teach:`<p>An equation is a <b>balance</b>. To solve, do the <b>same thing to both sides</b> to get the variable alone.</p>
       <div class="keybox"><b>x + 5 = 12</b> → subtract 5 from both sides → x = 7. Use the opposite operation!</div>`,
     example:{title:"Solve 3x = 18",steps:["x is multiplied by 3.","Do the opposite: divide both sides by 3.","x = 6."]},
     quiz:[
      {q:"Solve x + 4 = 10:",o:["x=6","x=14","x=4","x=40"],a:0,why:"Subtract 4 → 6."},
      {q:"Solve 5x = 20:",o:["x=4","x=15","x=25","x=100"],a:0,why:"Divide by 5 → 4."},
      {q:"Solve x − 3 = 8:",o:["x=11","x=5","x=24","x=3"],a:0,why:"Add 3 → 11."}
     ]}
   ],
   test:[
    {q:"Evaluate 3x + 1 when x = 4:",o:["13","12","7","31"],a:0,why:"12 + 1 = 13."},
    {q:"Solve x + 9 = 15:",o:["x=6","x=24","x=9","x=6.5"],a:0,why:"15 − 9 = 6."},
    {q:"Solve 6x = 30:",o:["x=5","x=24","x=36","x=180"],a:0,why:"30 ÷ 6 = 5."},
    {q:"Solve x − 7 = 2:",o:["x=9","x=5","x=14","x=−5"],a:0,why:"2 + 7 = 9."}
   ]},

  {id:"g6u4",name:"Area, Surface Area & Volume",icon:"📐",code:"6.G",accent:"#f59e0b",
   sections:[
    {title:"Area of Triangles",iv:"triangle",
     teach:`<p>A triangle is <b>half</b> of a rectangle with the same base and height.</p>
       <div class="keybox"><b>Area = ½ × base × height.</b> Base 8, height 4 → ½ × 8 × 4 = 16.</div>`,
     example:{title:"Area, base 10 height 6",steps:["Area = ½ × base × height.","= ½ × 10 × 6 = ½ × 60.","= 30 square units."]},
     quiz:[
      {q:"Triangle area, base 6 height 4:",o:["12","24","10","20"],a:0,why:"½ × 6 × 4 = 12."},
      {q:"Triangle area, base 10 height 2:",o:["10","20","12","5"],a:0,why:"½ × 10 × 2 = 10."},
      {q:"A triangle is what fraction of a rectangle?",o:["1/2","1/4","1/3","whole"],a:0,why:"Half."}
     ]},
    {title:"Volume & Nets",iv:"box",
     teach:`<p><b>Volume = length × width × height.</b> A <b>net</b> is a flattened shape you fold into a 3-D solid — its faces show the surface area.</p>
       <div class="keybox">Surface area of a box = add the areas of all 6 faces = 2(lw + lh + wh).</div>`,
     example:{title:"Volume of a 3×2×5 box",steps:["Multiply length × width: 3 × 2 = 6.","Times height: 6 × 5.","= 30 cubic units."]},
     quiz:[
      {q:"Volume of a 2×3×3 box:",o:["18","8","12","27"],a:0,why:"2×3×3 = 18."},
      {q:"Surface area of a 2×2×2 cube:",o:["24","8","12","16"],a:0,why:"6 faces × 4 = 24."},
      {q:"A net folds up into a:",o:["3-D solid","circle","line","point"],a:0,why:"A 3-D shape."}
     ]}
   ],
   test:[
    {q:"Triangle area, base 8 height 5:",o:["20","40","13","16"],a:0,why:"½ × 8 × 5 = 20."},
    {q:"Triangle area, base 12 height 4:",o:["24","48","16","6"],a:0,why:"½ × 12 × 4 = 24."},
    {q:"Volume of a 4×2×2 box:",o:["16","8","10","32"],a:0,why:"16."},
    {q:"Surface area of a 1×1×1 cube:",o:["6","1","3","4"],a:0,why:"6 faces × 1 = 6."}
   ]},

  {id:"g6u5",name:"Data & Statistics",icon:"📊",code:"6.SP",accent:"#38bdf8",
   sections:[
    {title:"Mean & Median",iv:"dotplot",
     teach:`<p>The <b>mean</b> (average) = add all values ÷ how many. The <b>median</b> is the <b>middle</b> value when sorted.</p>
       <div class="keybox">Data 2, 4, 6: mean = (2+4+6)/3 = <b>4</b>; median = middle = <b>4</b>.</div>`,
     example:{title:"Mean of 3, 5, 7, 5",steps:["Add them: 3+5+7+5 = 20.","Divide by how many (4).","20 ÷ 4 = 5."]},
     quiz:[
      {q:"Mean of 4, 6, 8:",o:["6","18","4","8"],a:0,why:"18 ÷ 3 = 6."},
      {q:"Median of 1, 3, 9:",o:["3","4.3","9","1"],a:0,why:"Middle value = 3."},
      {q:"The mean is the:",o:["average","biggest","middle","smallest"],a:0,why:"Average."}
     ]},
    {title:"Spread of Data",iv:"dotplot",
     teach:`<p>The <b>range</b> shows how spread out data is: biggest − smallest. A <b>dot plot</b> shows how often each value appears.</p>
       <div class="keybox">Data 3, 5, 9: range = 9 − 3 = <b>6</b>. Clusters and gaps tell you about the shape of the data.</div>`,
     example:{title:"Range of 4, 10, 6, 2",steps:["Find the biggest: 10.","Find the smallest: 2.","Range = 10 − 2 = 8."]},
     quiz:[
      {q:"Range of 2, 7, 5:",o:["5","7","2","12"],a:0,why:"7 − 2 = 5."},
      {q:"Range of 10, 4, 8:",o:["6","10","4","14"],a:0,why:"10 − 4 = 6."},
      {q:"A dot plot shows:",o:["how often values appear","only the mean","angles","area"],a:0,why:"Frequency of each value."}
     ]}
   ],
   test:[
    {q:"Mean of 2, 4, 6, 8:",o:["5","20","4","6"],a:0,why:"20 ÷ 4 = 5."},
    {q:"Median of 2, 5, 11:",o:["5","6","11","2"],a:0,why:"Middle = 5."},
    {q:"Range of 3, 12, 7:",o:["9","12","3","15"],a:0,why:"12 − 3 = 9."},
    {q:"Mean of 10 and 20:",o:["15","30","10","200"],a:0,why:"30 ÷ 2 = 15."}
   ]},
 ],
 finalTest:[
  {q:"Simplify the ratio 12:8:",o:["3:2","2:3","12:8 only","4:2"],a:0,why:"÷4 → 3:2."},
  {q:"1/2 ÷ 1/8 =",o:["4","1/16","1/4","16"],a:0,why:"1/2 × 8 = 4."},
  {q:"−6 + 10 =",o:["4","−4","16","−16"],a:0,why:"4."},
  {q:"Solve 4x = 24:",o:["x=6","x=20","x=28","x=96"],a:0,why:"24 ÷ 4 = 6."},
  {q:"Triangle area, base 6 height 6:",o:["18","36","12","24"],a:0,why:"½ × 6 × 6 = 18."},
  {q:"Mean of 5, 10, 15:",o:["10","30","5","15"],a:0,why:"30 ÷ 3 = 10."}
 ]
}

};

