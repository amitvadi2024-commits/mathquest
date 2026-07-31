/* ==========================================================================
   MathQuest content — Grades 4-6 (Common Core aligned)
   Section = { title, teach(html: paragraphs + reallife + watchout + keybox),
     iv(key|null), examples:[ {title, steps:[...]} x3 ], quiz:[{q,o,a,why}] }
   Interactive visuals (iv keys) defined in app.js -> IV{}.
========================================================================== */
const GRADES = {

/* =========================== GRADE 4 =========================== */
g4:{ name:"Grade 4", short:"G4", emoji:"🌱", accent:"#22c55e",
 color:"linear-gradient(120deg,#22c55e,#86efac)",
 blurb:"Place value, multiplication, fractions, decimals & geometry.",
 placement:[
  {q:"What is the value of the 7 in 4,782?",o:["7","70","700","7,000"],a:2,u:0,why:"The 7 sits in the hundreds place, so its value is 7 × 100 = 700."},
  {q:"Which shows 3,205 in expanded form?",o:["3,000 + 200 + 5","3,000 + 20 + 5","300 + 20 + 5","3,000 + 205"],a:0,u:0,why:"3 thousands + 2 hundreds + 0 tens + 5 ones = 3,000 + 200 + 5."},
  {q:"6 × 8 =",o:["42","48","54","56"],a:1,u:1,why:"6 groups of 8 make 48."},
  {q:"27 ÷ 4 =",o:["6 r3","7 r1","5 r7","6 r1"],a:0,u:1,why:"4 × 6 = 24, and 27 − 24 = 3 left over, so 6 remainder 3."},
  {q:"Which fraction equals 1/2?",o:["2/4","1/3","3/4","2/5"],a:0,u:2,why:"Multiply the top and bottom of 1/2 by 2 to get 2/4."},
  {q:"2/6 + 3/6 =",o:["5/6","5/12","6/6","1/6"],a:0,u:2,why:"Same bottom, so add the tops: 2 + 3 = 5, keep the 6 → 5/6."},
  {q:"Write 0.3 as a fraction:",o:["3/10","3/100","1/3","30"],a:0,u:3,why:"0.3 is three tenths, which is 3/10."},
  {q:"Which is bigger, 0.5 or 0.45?",o:["0.5","0.45","equal","can't tell"],a:0,u:3,why:"Rewrite 0.5 as 0.50; then 50 hundredths is more than 45 hundredths."},
  {q:"A right angle measures:",o:["45°","90°","180°","360°"],a:1,u:4,why:"A right angle is exactly 90° — a square corner."},
  {q:"Perimeter of a 5 by 3 rectangle:",o:["15","16","8","30"],a:1,u:4,why:"Add all four sides: 5 + 3 + 5 + 3 = 16."}
 ],
 units:[
  {id:"g4u1",name:"Place Value & Big Numbers",icon:"🔢",code:"4.NBT",accent:"#22c55e",
   sections:[
    {title:"Place Value to Thousands",iv:"placevalue",
     teach:`<p>Numbers are built out of digits — the symbols 0, 1, 2, 3, 4, 5, 6, 7, 8, and 9. But a digit by itself doesn't tell the whole story. The digit <b>4</b> can mean four, or forty, or four hundred, or four thousand. What decides its meaning? Its <b>place</b>. In this lesson we'll learn how the position of a digit gives it its value, and why that idea is the foundation of every number you'll ever write.</p>

       <h4 class="ls-sub">Every digit has a place</h4>
       <p>Reading a number from right to left, the places have names: <b>ones</b>, then <b>tens</b>, then <b>hundreds</b>, then <b>thousands</b>. Let's break apart the number <b>3,482</b> and look at what each digit is really worth:</p>
       <div class="pv-chart">
         <div class="pv-col"><span class="pv-place">thousands</span><span class="pv-digit">3</span><span class="pv-val">3,000</span></div>
         <div class="pv-col"><span class="pv-place">hundreds</span><span class="pv-digit">4</span><span class="pv-val">400</span></div>
         <div class="pv-col"><span class="pv-place">tens</span><span class="pv-digit">8</span><span class="pv-val">80</span></div>
         <div class="pv-col"><span class="pv-place">ones</span><span class="pv-digit">2</span><span class="pv-val">2</span></div>
       </div>
       <p>The 2 really means 2, but the 8 doesn't mean eight — it means eight <i>tens</i>, or 80. The 4 means four <i>hundreds</i>, 400, and the 3 means three <i>thousands</i>, 3,000. So a digit's value is always the digit <b>times</b> the value of its place.</p>

       <h4 class="ls-sub">Expanded form: taking a number apart</h4>
       <p>When we write a number as the sum of what each digit is worth, we call it <b>expanded form</b>. For 3,482 that looks like:</p>
       <p style="text-align:center;font-size:1.1rem"><b>3,482 = 3,000 + 400 + 80 + 2</b></p>
       <p>Expanded form is powerful because it lets you <i>see</i> the value hiding inside each digit. Let's try one more together. Take <b>2,905</b>. The 2 is in the thousands place (2,000), the 9 is in the hundreds place (900), the tens place has a 0 (so, nothing there — 0), and the 5 is in the ones place (5). Put it together: 2,905 = 2,000 + 900 + 0 + 5, or simply 2,000 + 900 + 5. That 0 is important — it's a <b>placeholder</b> that keeps the 2 and the 9 in their correct, larger places.</p>

       <h4 class="ls-sub">The times-ten pattern</h4>
       <p>Here's the beautiful pattern that makes the whole system work: each place is worth <b>10 times</b> the place to its right. Ones → tens is ×10 (1 becomes 10). Tens → hundreds is ×10 again (10 becomes 100). Hundreds → thousands is ×10 once more (100 becomes 1,000). That's why our number system is called "base ten" — you can build any number, no matter how giant, just by grouping in tens.</p>
       <div class="reallife"><b>Real life:</b> place value is how we read prices, populations, sports scores, and distances. The 7 in a $7,000 car means something very different from the 7 in a $7 sandwich — same digit, totally different place, totally different value.</div>
       <div class="watchout"><b>Common mistake:</b> reading a digit as just itself. In 3,482 the 4 is <i>not</i> worth 4 — it sits in the hundreds place, so it's worth 400. Always ask "which place is it in?" before you say the value.</div>
       <div class="watchout"><b>Another common mistake:</b> dropping a zero. In 2,905 you can't just write 2,95 — the 0 holds the tens place open so the 9 stays in the hundreds. Every place needs a digit, even if that digit is 0.</div>

       <h4 class="ls-sub">Recap</h4>
       <p>A digit's value depends on its <b>place</b>. Reading right to left the places are ones, tens, hundreds, thousands — and each is 10 times bigger than the one before. <b>Expanded form</b> shows the value of each digit added together, and <b>0</b> is a placeholder that keeps the other digits in their proper places.</p>
       <div class="keybox">A digit's value = the digit <b>×</b> its place. So the 4 in 3,<b>4</b>82 is worth 4 × 100 = <b>400</b>.</div>`,
     examples:[
      {title:"Find the value of a digit",steps:["Look at 5,297. What is the 2 worth?","Count the places from the right: ones, tens, hundreds — the 2 is in the hundreds place.","Value = 2 × 100 = 200."]},
      {title:"Build a number from words",steps:["'Three thousand, sixty' — start with the thousands: 3,000.","Sixty is 6 tens = 60. There are no hundreds, so put a 0 in that place.","Put it together: 3,060."]},
      {title:"Write 2,905 in expanded form",steps:["2 thousands = 2,000; 9 hundreds = 900.","0 tens = 0 (nothing there); 5 ones = 5.","So 2,905 = 2,000 + 900 + 5."]}
     ],
     quiz:[
      {q:"Value of the 6 in 6,204?",o:["6","600","6,000","60"],a:2,why:"6 is in the thousands place → 6,000."},
      {q:"Which number has 8 in the tens place?",o:["8,000","480","818","208"],a:1,why:"480 → the 8 is tens (80)."},
      {q:"Moving a digit one place LEFT makes it:",o:["10× bigger","10× smaller","the same","100× bigger"],a:0,why:"Each place left is ×10."}
     ]},
    {title:"Adding & Subtracting Big Numbers",iv:null,
     teach:`<p>Once you understand place value, adding and subtracting big numbers becomes surprisingly simple — you just handle one place at a time. The whole trick is keeping your columns lined up so that ones sit under ones, tens under tens, and hundreds under hundreds. Get the line-up right and the rest is easy.</p>

       <h4 class="ls-sub">Adding, column by column</h4>
       <p>To add, you work from <b>right to left</b>, starting with the ones. Let's add <b>327 + 145</b> step by step.</p>
       <p>First the <b>ones</b>: 7 + 5 = 12. But 12 is too big to fit in one place! So we write the <b>2</b> in the ones column and <b>carry</b> the extra ten — the little 1 — over to the tens column. Carrying just means "I have a full group of ten, so I'll pass it up to the tens place where it belongs."</p>
       <p>Next the <b>tens</b>: 2 + 4, plus the 1 we carried = 7. That fits, so we write 7. Finally the <b>hundreds</b>: 3 + 1 = 4. Put it all together and 327 + 145 = <b>472</b>.</p>
       <div class="numbig">327 + 145 = 472</div>

       <h4 class="ls-sub">Subtracting, and when you need to borrow</h4>
       <p>Subtraction works the same way, right to left — but sometimes the top digit is too small to subtract from. When that happens, we <b>borrow</b> ten from the next place to the left. Let's do <b>500 − 236</b>.</p>
       <p>Ones: we need 0 − 6, but 0 is smaller than 6. So we borrow. Because the tens and hundreds are also 0, we borrow across them: the 500 becomes 4 hundreds, 9 tens, and 10 ones. Now 10 − 6 = 4. Then tens: 9 − 3 = 6. Then hundreds: 4 − 2 = 2. So 500 − 236 = <b>264</b>. Borrowing is just carrying in reverse — you're breaking one bigger group into ten smaller ones so you have enough to subtract.</p>

       <h4 class="ls-sub">Estimate first to catch mistakes</h4>
       <p>Before (or after) you do the exact math, it's smart to <b>estimate</b>. Round the numbers to something easy and add those. For 327 + 145, think 300 + 150 = about 450. So an answer of 472 makes sense — it's close to 450. If you had gotten 4,720, the estimate would instantly warn you that something went wrong. Estimating is like a built-in safety check.</p>
       <div class="reallife"><b>Real life:</b> you add and subtract big numbers to track money saved up, points scored across a whole season, steps walked in a week, or miles driven on a road trip.</div>
       <div class="watchout"><b>Common mistake:</b> lining up the left edges instead of the places. To add 45 + 300, the 5 goes under the last 0 of 300 (ones under ones) — not under the 3. Always line up the right-hand side.</div>
       <div class="watchout"><b>Another common mistake:</b> forgetting to add the carried digit. After you carry a 1 into the tens column, you must include it when you add that column.</div>

       <h4 class="ls-sub">Recap</h4>
       <p>Line up the places and work right to left. <b>Carry</b> a ten forward whenever a column reaches 10 or more; <b>borrow</b> a ten backward whenever the top digit is too small. And always <b>estimate</b> to make sure your answer is reasonable.</p>
       <div class="keybox">Line up the places. <b>Carry</b> when a column ≥ 10. <b>Borrow</b> when the top digit is too small. Estimate to check.</div>`,
     examples:[
      {title:"327 + 145 (with carrying)",steps:["Ones: 7 + 5 = 12. Write the 2, carry the 1.","Tens: 2 + 4 + 1 (carried) = 7.","Hundreds: 3 + 1 = 4. Answer: 472."]},
      {title:"500 − 236 (with borrowing)",steps:["Ones: 0 − 6 can't be done, so borrow across. 10 − 6 = 4.","Work the tens and hundreds after borrowing through the zeros.","Answer: 264."]},
      {title:"Estimate to check 682 − 419",steps:["Round: 682 ≈ 700 and 419 ≈ 400.","700 − 400 = 300, so the answer should be near 300.","The exact answer is 263 — close to 300, so it's reasonable."]}
     ],
     quiz:[
      {q:"463 + 218 =",o:["681","671","581","691"],a:0,why:"3+8=11 carry, 6+1+1=8, 4+2=6 → 681."},
      {q:"500 − 236 =",o:["264","364","274","236"],a:0,why:"500−236 = 264."},
      {q:"When a column adds to 10 or more you:",o:["borrow","carry","stop","subtract"],a:1,why:"Carry to the next place."}
     ]}
   ],
   test:[
    {q:"Value of the 9 in 9,152?",o:["9","900","9,000","90"],a:2,why:"The 9 is in the thousands place, so it's worth 9 × 1,000 = 9,000."},
    {q:"Write 'four thousand sixty' in digits:",o:["4,600","4,060","460","4,006"],a:1,why:"4 thousands, 0 hundreds, 6 tens, 0 ones → 4,060. The 0 in the hundreds place holds it open."},
    {q:"Which shows 6,038 in expanded form?",o:["6,000 + 30 + 8","6,000 + 300 + 8","600 + 30 + 8","6,000 + 38"],a:0,why:"6 thousands + 0 hundreds + 3 tens + 8 ones = 6,000 + 30 + 8."},
    {q:"A stadium had 3,450 fans and 1,275 more arrived. How many now?",o:["4,725","4,625","2,175","4,715"],a:0,why:"Add 3,450 + 1,275: 0+5=5, 5+7=12 (write 2, carry 1), 4+2+1=7, 3+1=4 → 4,725."},
    {q:"A shop had 803 apples and sold 259. How many left?",o:["544","644","554","546"],a:0,why:"Subtract 803 − 259, borrowing: 13−9=4, 9−5=4, 7−2=5 → 544."},
    {q:"Sara saved $1,250, then spent $675. How much is left?",o:["$575","$675","$1,925","$585"],a:0,why:"1,250 − 675 = 575. Quick check: 1,250 − 700 ≈ 550, and 575 is close."}
   ]},

  {id:"g4u2",name:"Multiplication & Division",icon:"✖️",code:"4.OA/NBT",accent:"#38bdf8",
   sections:[
    {title:"Multiplication as Arrays",iv:"array",
     teach:`<p>Multiplication is one of the biggest time-savers in all of math. At its heart, it's just a fast way to add the same number over and over. Instead of writing 6 + 6 + 6 + 6, you can write <b>4 × 6</b> — read as "four groups of six." Both give 24, but the multiplication version is quicker and easier to think about.</p>

       <h4 class="ls-sub">Seeing multiplication as an array</h4>
       <p>The clearest way to picture multiplication is with an <b>array</b> — dots (or squares) arranged in equal <b>rows</b> and <b>columns</b>. If you make 4 rows with 6 dots in each row and count them all, you get 24. That's exactly 4 × 6. The array turns an abstract idea into something you can literally see and count.</p>
       <p>Even better, the number of dots is the same as the <b>area</b> of the rectangle they form. That connection — multiplication as area — is something you'll use for years, all the way up to algebra and geometry.</p>

       <h4 class="ls-sub">Order doesn't matter (the commutative property)</h4>
       <p>Here's a handy fact: 4 × 6 and 6 × 4 give the <i>same</i> answer, 24. This is called the <b>commutative property</b> of multiplication. You can see why with the array — turn "4 rows of 6" on its side and it becomes "6 rows of 4," but the dots didn't go anywhere, so the total is unchanged. This means if one order is easier for you to compute, just use that one!</p>

       <h4 class="ls-sub">Breaking hard facts into easy pieces</h4>
       <p>Some multiplication facts feel tricky, like 7 × 8. When that happens, you can split the problem into friendlier chunks. For example, 7 × 8 = 7 × 4 + 7 × 4 = 28 + 28 = 56. Or use a "near fact" you know: 8 × 9 is the same as 8 × 10 minus 8 × 1 = 80 − 8 = 72. Breaking apart works because multiplication spreads across addition and subtraction — a rule called the <b>distributive property</b>.</p>
       <div class="reallife"><b>Real life:</b> arrays are everywhere — the eggs in a carton, squares in a chocolate bar, seats in a theater, tiles on a floor, or windows on a building. Any time things come in equal rows, multiplication counts them fast.</div>
       <div class="watchout"><b>Common mistake:</b> mixing up multiplication with addition. "4 groups of 6" is 4 × 6 = 24, not 4 + 6 = 10. The word "groups of" (or "rows of," or "each") is your signal to multiply.</div>
       <div class="watchout"><b>Another common mistake:</b> when breaking a fact apart, forgetting to add the pieces back together. 7 × 8 = 28 + 28, and you must add those to get 56.</div>

       <h4 class="ls-sub">Recap</h4>
       <p>Multiplication is repeated addition of equal groups, and an <b>array</b> lets you see it as rows × columns. The order doesn't change the answer, and you can always split a hard fact into easier ones.</p>
       <div class="keybox"><b>rows × columns</b> = the total. The array's shape is the same as the answer's area, and 4 × 6 = 6 × 4.</div>`,
     examples:[
      {title:"6 × 7 with an array",steps:["Picture 6 rows with 7 dots each.","Count by 7s: 7, 14, 21, 28, 35, 42.","6 × 7 = 42."]},
      {title:"Break apart 8 × 9",steps:["8 × 9 is the same as 8 × 10 minus 8 × 1.","8 × 10 = 80, and 8 × 1 = 8.","80 − 8 = 72, so 8 × 9 = 72."]},
      {title:"Order doesn't matter: 3 × 5 vs 5 × 3",steps:["3 rows of 5 dots = 15.","Turn the array sideways: 5 rows of 3 dots = 15.","Same total, so 3 × 5 = 5 × 3."]}
     ],
     quiz:[
      {q:"6 × 7 =",o:["42","36","48","49"],a:0,why:"6 rows of 7 = 42."},
      {q:"An array with 5 rows of 9 dots shows:",o:["5+9","5×9=45","9−5","14"],a:1,why:"5×9 = 45."},
      {q:"9 × 8 =",o:["63","72","81","64"],a:1,why:"9×8 = 72."}
     ]},
    {title:"Division & Remainders",iv:null,
     teach:`<p>Division is the opposite of multiplication. Where multiplication puts equal groups together, division breaks a total apart. There are actually two ways to think about it, and both are useful.</p>

       <h4 class="ls-sub">Two ways to picture division</h4>
       <p>The first is <b>sharing equally</b>: "12 cookies split among 3 friends — how many does each get?" That's 12 ÷ 3 = 4 cookies each. The second is <b>grouping</b>: "I have 12 cookies and want to put 3 in each bag — how many bags?" That's also 12 ÷ 3 = 4 bags. Same equation, two different real-world pictures. Whichever way the problem is worded, the math is identical.</p>

       <h4 class="ls-sub">When it doesn't divide evenly: remainders</h4>
       <p>Numbers don't always split perfectly. Suppose you have <b>13 cookies</b> and 3 friends. Each friend can get 4 cookies (that uses up 12), and there is <b>1 cookie left over</b>. That leftover is called the <b>remainder</b>. We write the answer as "4 remainder 1," or "4 r1" for short.</p>
       <p>Let's work through <b>29 ÷ 4</b>. Ask yourself: how many 4s fit into 29 without going over? 4 × 7 = 28, which is as close as we can get. Then 29 − 28 = 1 is left over. So 29 ÷ 4 = 7 r1.</p>

       <h4 class="ls-sub">Checking your answer</h4>
       <p>Because division and multiplication are opposites, you can always <b>check by multiplying back</b>. If 45 ÷ 9 = 5, then 9 × 5 should give you 45 — and it does, so you know you're right. When there's a remainder, multiply and then add the remainder: for 29 ÷ 4 = 7 r1, check with 4 × 7 + 1 = 29. ✓</p>
       <div class="reallife"><b>Real life:</b> remainders often change your real answer! If 30 kids need cars that hold 4 each, 30 ÷ 4 = 7 r2 — but you can't leave 2 kids behind, so you actually need <b>8</b> cars. Always think about what the leftover means.</div>
       <div class="watchout"><b>Common mistake:</b> a remainder should always be <i>smaller</i> than the number you're dividing by. If your remainder is as big as the divisor, you can still fit one more group — go back and check.</div>
       <div class="watchout"><b>Another common mistake:</b> writing the remainder as part of the quotient like "71" for 29 ÷ 4. Keep them separate: the answer is 7 with a remainder of 1.</div>

       <h4 class="ls-sub">Recap</h4>
       <p>Division splits a total into equal groups — either by sharing or by grouping. When it doesn't come out even, the leftover is the <b>remainder</b> (always smaller than the divisor). Check any division by multiplying back.</p>
       <div class="keybox">Fit the divisor in as many times as you can; whatever's left over is the remainder. Check: divisor × quotient + remainder = the original number.</div>`,
     examples:[
      {title:"56 ÷ 8",steps:["How many 8s fit in 56?","8 × 7 = 56 exactly.","So 56 ÷ 8 = 7, no remainder."]},
      {title:"29 ÷ 4 (with a remainder)",steps:["4 × 7 = 28, as close to 29 as we can get without going over.","29 − 28 = 1 left over.","Answer: 7 remainder 1."]},
      {title:"Check your answer: 45 ÷ 9",steps:["45 ÷ 9 = 5.","Check by multiplying back: 9 × 5.","9 × 5 = 45 ✓ — correct!"]}
     ],
     quiz:[
      {q:"56 ÷ 8 =",o:["6","7","8","9"],a:1,why:"8×7 = 56."},
      {q:"17 ÷ 5 =",o:["3 r2","2 r7","4 r1","3 r1"],a:0,why:"5×3=15, remainder 2."},
      {q:"A remainder is:",o:["the answer","what's left over","the divisor","zero always"],a:1,why:"It's the leftover amount."}
     ]}
   ],
   test:[
    {q:"8 × 6 =",o:["42","48","54","46"],a:1,why:"8 groups of 6 = 48. Or break it up: 8×5 + 8×1 = 40 + 8 = 48."},
    {q:"A box holds 9 crayons. How many crayons in 7 boxes?",o:["56","63","72","64"],a:1,why:"7 boxes of 9 crayons = 7 × 9 = 63."},
    {q:"A theater has 6 rows with 8 seats each. How many seats?",o:["48","14","64","42"],a:0,why:"Rows × seats in each = 6 × 8 = 48."},
    {q:"45 marbles shared equally by 9 kids — each gets:",o:["4","5","6","7"],a:1,why:"45 ÷ 9 = 5. Check by multiplying back: 9 × 5 = 45. ✓"},
    {q:"25 ÷ 4 =",o:["6 r1","5 r5","6 r2","4 r9"],a:0,why:"4 × 6 = 24, and 25 − 24 = 1 left over → 6 remainder 1."},
    {q:"38 cookies are packed 5 to a bag. How many FULL bags, with how many left over?",o:["7 bags, 3 left","6 bags, 8 left","8 bags, 2 left","7 bags, 5 left"],a:0,why:"38 ÷ 5 = 7 r3. That's 5 × 7 = 35 cookies bagged, with 3 cookies left over."}
   ]},

  {id:"g4u3",name:"Fractions",icon:"🍕",code:"4.NF",accent:"#fb7185",
   sections:[
    {title:"Equivalent Fractions",iv:"fracbar",
     teach:`<p>A fraction is a way to describe part of a whole. It's built from two numbers stacked over a line. The bottom number, the <b>denominator</b>, tells you how many equal pieces the whole was cut into. The top number, the <b>numerator</b>, tells you how many of those pieces you have. So in 3/4, the whole is cut into 4 equal parts and you have 3 of them.</p>

       <h4 class="ls-sub">The same amount, different names</h4>
       <p>Here's something that surprises a lot of people: two fractions that <i>look</i> different can be the <i>exact same amount</i>. Imagine a pizza. Cut it into 2 pieces and take 1 — you have half. Now cut an identical pizza into 4 pieces and take 2 — you still have half! So <b>1/2 = 2/4</b>. Keep going and 1/2 = 2/4 = 3/6 = 4/8. Fractions that name the same amount are called <b>equivalent fractions</b>.</p>
       <p>Why does this happen? When you cut each piece into more, smaller pieces, you have more pieces but each is smaller — and the two changes cancel out, leaving the same total amount.</p>

       <h4 class="ls-sub">Building an equivalent fraction</h4>
       <p>To make an equivalent fraction, multiply the top <b>and</b> the bottom by the same number. Watch: 2/3, multiply top and bottom by 2, gives (2×2)/(3×2) = 4/6. Multiply by 3 instead and you get 6/9. All of these — 2/3, 4/6, 6/9 — are equal. The key is doing the <i>same</i> thing to both numbers, because that's like cutting every piece the same way.</p>

       <h4 class="ls-sub">Simplifying to lowest terms</h4>
       <p>Going the other direction, you can <b>simplify</b> a fraction by <i>dividing</i> the top and bottom by the same number. Take 6/8. Both 6 and 8 divide by 2, giving 3/4. Can we go further? 3 and 4 share no common factor besides 1, so 3/4 is in <b>simplest form</b> (also called lowest terms). Simplest form is the "cleanest" name for a fraction — the one with the smallest possible numbers.</p>
       <div class="reallife"><b>Real life:</b> equivalent fractions let you compare measurements and deals. A recipe calling for 2/4 cup is just asking for 1/2 cup — same thing, easier to measure.</div>
       <div class="watchout"><b>Common mistake:</b> changing only the top or only the bottom. If you double the top but not the bottom, you've made a <i>different, bigger</i> fraction — 2/3 is not the same as 4/3. Always do the same to both.</div>
       <div class="watchout"><b>Another common mistake:</b> thinking a bigger denominator means a bigger fraction. 1/2 is bigger than 1/8, even though 8 is bigger than 2 — more pieces means each piece is smaller.</div>

       <h4 class="ls-sub">Recap</h4>
       <p>The numerator counts pieces; the denominator counts how many pieces make a whole. Multiply top and bottom by the same number to build an equivalent fraction, or divide by the same number to simplify. Same amount, just a different name.</p>
       <div class="keybox">Multiply or divide top <b>and</b> bottom by the same number and the value stays the same: 2/3 = 4/6 = 6/9.</div>`,
     examples:[
      {title:"Is 2/3 the same as 4/6?",steps:["Multiply 2/3's top and bottom by 2.","2 × 2 = 4 and 3 × 2 = 6.","So 2/3 = 4/6. Yes, they're equivalent!"]},
      {title:"Simplify 6/8",steps:["Find a number that divides both 6 and 8 — that's 2.","6 ÷ 2 = 3 and 8 ÷ 2 = 4.","So 6/8 = 3/4, which is simplest form."]},
      {title:"Fill in the blank: 3/4 = ?/8",steps:["The bottom went from 4 to 8, so it was multiplied by 2.","Do the same to the top: 3 × 2 = 6.","So 3/4 = 6/8."]}
     ],
     quiz:[
      {q:"Which equals 1/2?",o:["2/4","2/3","1/4","3/5"],a:0,why:"1/2 = 2/4."},
      {q:"3/4 is the same as:",o:["6/8","4/6","3/5","3/8"],a:0,why:"×2 top and bottom → 6/8."},
      {q:"Simplify 4/8:",o:["1/2","2/3","1/4","1/3"],a:0,why:"Divide by 4 → 1/2."}
     ]},
    {title:"Adding Fractions (Same Bottom)",iv:"fracbar",
     teach:`<p>Now that you know what fractions are, let's add them. Adding fractions is easiest — and makes the most sense — when they have the <b>same denominator</b>, meaning the same bottom number. When the bottoms match, all the pieces are the same size, so adding is just counting.</p>

       <h4 class="ls-sub">Add the tops, keep the bottom</h4>
       <p>Think about 2/5 + 1/5. You have 2 fifth-sized pieces, and you're adding 1 more fifth-sized piece. Count them: that's 3 fifths, or <b>3/5</b>. Notice the bottom stayed 5 — because the <i>size</i> of the pieces never changed, only how many you have. So the rule is simple: add the <b>numerators</b> (tops) and keep the <b>denominator</b> (bottom) the same.</p>
       <p>Let's try 3/8 + 4/8. The bottoms match (both 8), so keep 8. Add the tops: 3 + 4 = 7. The answer is <b>7/8</b>. Easy!</p>
       <div class="numbig">3/8 + 4/8 = 7/8</div>

       <h4 class="ls-sub">Subtraction works the same way</h4>
       <p>Subtracting same-bottom fractions follows the exact same idea — subtract the tops, keep the bottom. For 5/6 − 2/6, keep the 6 and do 5 − 2 = 3, giving 3/6. You have 3 sixth-sized pieces.</p>

       <h4 class="ls-sub">Don't forget to simplify</h4>
       <p>Sometimes your answer can be written more simply. In the example above, 3/6 can be simplified: both 3 and 6 divide by 3, so 3/6 = <b>1/2</b>. Always take a quick look at your answer to see if it can be reduced to lowest terms — teachers love a simplified answer.</p>
       <div class="reallife"><b>Real life:</b> you add same-size fractions when you combine parts of a recipe (1/4 cup + 1/4 cup = 1/2 cup) or figure out how much pizza the whole family ate together.</div>
       <div class="watchout"><b>Common mistake — the big one:</b> adding the bottoms too. 2/5 + 1/5 is <b>3/5</b>, NOT 3/10! The denominator tells you the size of the pieces, and that size doesn't change when you add. Keep the bottom the same.</div>
       <div class="watchout"><b>Another common mistake:</b> forgetting to simplify. 2/6 + 2/6 = 4/6, but the cleanest answer is 2/3.</div>

       <h4 class="ls-sub">Recap</h4>
       <p>When fractions share a denominator, add (or subtract) the numerators and keep the denominator the same — you're just counting same-size pieces. Then simplify the result if you can.</p>
       <div class="keybox">Same bottom? Add the tops, keep the bottom: 3/8 + 4/8 = 7/8. Then simplify if possible.</div>`,
     examples:[
      {title:"3/8 + 4/8",steps:["The bottoms match (both 8), so keep 8.","Add the tops: 3 + 4 = 7.","Answer: 7/8."]},
      {title:"Subtract: 5/6 − 2/6",steps:["Same bottom (6), so keep it.","Subtract the tops: 5 − 2 = 3.","Answer: 3/6, which simplifies to 1/2."]},
      {title:"Add then simplify: 1/6 + 3/6",steps:["Add the tops: 1 + 3 = 4, keep the 6 → 4/6.","Both 4 and 6 divide by 2.","4/6 = 2/3."]}
     ],
     quiz:[
      {q:"1/4 + 2/4 =",o:["3/4","3/8","2/8","3/16"],a:0,why:"Add tops → 3/4."},
      {q:"2/6 + 3/6 =",o:["5/6","5/12","6/6","5/36"],a:0,why:"→ 5/6."},
      {q:"When adding same-bottom fractions, the bottom:",o:["adds too","stays the same","doubles","goes to 1"],a:1,why:"Denominator stays the same."}
     ]}
   ],
   test:[
    {q:"Which equals 2/4?",o:["1/2","2/3","1/3","3/4"],a:0,why:"Divide the top and bottom of 2/4 by 2 → 1/2."},
    {q:"3/5 = ?/10",o:["6","5","8","3"],a:0,why:"The bottom went from 5 to 10 (×2), so the top must ×2 as well: 3 × 2 = 6 → 6/10."},
    {q:"You ate 2/7 of a pizza, then 4/7 more. How much total?",o:["6/7","6/14","8/7","6/49"],a:0,why:"Same bottom, so add the tops: 2 + 4 = 6, keep the 7 → 6/7. (Never add the bottoms!)"},
    {q:"Simplify 6/9:",o:["2/3","3/4","1/2","3/5"],a:0,why:"Both 6 and 9 divide by 3: 6÷3 = 2 and 9÷3 = 3 → 2/3."},
    {q:"5/8 − 2/8 =",o:["3/8","3/16","7/8","5/8"],a:0,why:"Same bottom, subtract the tops: 5 − 2 = 3, keep the 8 → 3/8."},
    {q:"Which fraction is the LARGEST?",o:["3/4","1/4","2/4","1/8"],a:0,why:"Compare their sizes: 3/4 = 0.75, 2/4 = 0.5, 1/4 = 0.25, 1/8 = 0.125. So 3/4 is the largest."}
   ]},

  {id:"g4u4",name:"Decimals",icon:"🔟",code:"4.NF",accent:"#f59e0b",
   sections:[
    {title:"Tenths & Hundredths",iv:"decimalgrid",
     teach:`<p>You already know fractions like 7/10 and 25/100. <b>Decimals</b> are simply another way to write those same "out of 10" and "out of 100" fractions — a way that fits neatly into our place-value system. The little dot in a decimal, called the <b>decimal point</b>, marks the boundary between whole numbers (on the left) and parts of a whole (on the right).</p>

       <h4 class="ls-sub">The places after the dot</h4>
       <p>Just like ones, tens, and hundreds have their places, so do the parts. The <b>first</b> spot after the dot is the <b>tenths</b> place, and the <b>second</b> spot is the <b>hundredths</b> place. So:</p>
       <div class="pv-chart">
         <div class="pv-col"><span class="pv-place">tenths</span><span class="pv-digit">7</span><span class="pv-val">7/10 = 0.7</span></div>
         <div class="pv-col"><span class="pv-place">hundredths</span><span class="pv-digit">25</span><span class="pv-val">25/100 = 0.25</span></div>
       </div>
       <p>So <b>0.7</b> reads as "seven tenths" and equals 7/10. And <b>0.25</b> reads as "twenty-five hundredths" and equals 25/100. Reading the decimal out loud tells you the fraction!</p>

       <h4 class="ls-sub">Seeing decimals on a grid</h4>
       <p>Picture a big square split into 100 tiny squares. Shading 25 of those little squares shows 25/100 = 0.25. Now picture the same big square split into just 10 tall columns; shading 7 columns shows 7/10 = 0.7. The grid makes it obvious that tenths are bigger chunks and hundredths are smaller chunks of the same whole.</p>

       <h4 class="ls-sub">Tenths and hundredths are connected</h4>
       <p>Because 1 tenth equals 10 hundredths, you can rewrite any tenths decimal as hundredths by adding a zero: 0.7 is the same as <b>0.70</b>, or 70 hundredths. That trick is going to be very useful next lesson when we compare decimals.</p>
       <div class="reallife"><b>Real life:</b> money is decimals in disguise. $0.25 is 25 hundredths of a dollar — a quarter. $0.70 is seven dimes. Race times, temperatures, and measurements all use decimals too.</div>
       <div class="watchout"><b>Common mistake:</b> reading 0.5 as "five hundredths." The <i>first</i> place after the dot is tenths, so 0.5 is five <b>tenths</b> (one half). Five hundredths would be 0.05.</div>
       <div class="watchout"><b>Another common mistake:</b> thinking 0.7 and 0.07 are the same. 0.7 is seven tenths (a lot), while 0.07 is seven hundredths (a little). The place matters!</div>

       <h4 class="ls-sub">Recap</h4>
       <p>Decimals are fractions of 10 and 100 written with a decimal point. The first place after the dot is tenths, the second is hundredths, and reading a decimal aloud gives you its fraction. Adding a zero on the end (0.7 = 0.70) doesn't change the value.</p>
       <div class="keybox">First place after the dot = tenths (out of 10). Second place = hundredths (out of 100).</div>`,
     examples:[
      {title:"Write 0.4 as a fraction",steps:["0.4 has one digit after the dot, so it's tenths.","Tenths means 'out of 10'.","0.4 = 4/10."]},
      {title:"Write 37/100 as a decimal",steps:["37/100 means 37 hundredths.","Hundredths fill two places after the dot.","37/100 = 0.37."]},
      {title:"Show 0.6 on a tenths grid",steps:["Split the whole into 10 equal columns.","Shade 6 of them.","6 out of 10 shaded = 0.6 = 6/10."]}
     ],
     quiz:[
      {q:"0.3 as a fraction:",o:["3/10","3/100","1/3","30"],a:0,why:"3 tenths = 3/10."},
      {q:"37/100 as a decimal:",o:["0.37","3.7","0.037","37"],a:0,why:"37 hundredths = 0.37."},
      {q:"The 2nd place after the dot is:",o:["tenths","hundredths","ones","thousandths"],a:1,why:"Hundredths."}
     ]},
    {title:"Comparing Decimals",iv:"decimalgrid",
     teach:`<p>Comparing decimals trips up a lot of students, because our instinct from whole numbers ("more digits means bigger") suddenly stops working. With decimals you have to compare carefully, place by place. Let's learn the reliable way to do it.</p>

       <h4 class="ls-sub">Line up and compare left to right</h4>
       <p>To compare two decimals, first line up their decimal points. Then compare the digits one place at a time, starting from the <b>left</b> (the biggest place). The first place where they differ decides which number is larger.</p>
       <p>Compare 0.83 and 0.85. The tenths are equal (both 8). Move to the hundredths: 3 versus 5. Since 5 is bigger, 0.85 is the larger number.</p>

       <h4 class="ls-sub">The add-a-zero trick</h4>
       <p>When two decimals have different lengths, it's easy to get confused. The fix is to give them the <b>same number of decimal places</b> by adding zeros to the end — which, remember, doesn't change the value. Compare <b>0.7</b> and <b>0.65</b>. Rewrite 0.7 as <b>0.70</b>. Now both are hundredths, and you can just compare "70 hundredths versus 65 hundredths." Since 70 > 65, <b>0.7 is bigger</b>. Once the lengths match, comparing decimals is exactly like comparing whole numbers.</p>

       <h4 class="ls-sub">Ordering several decimals</h4>
       <p>To put a list in order, give them all the same length first. Order 0.3, 0.03, 0.33 from smallest to largest: rewrite as 0.30, 0.03, 0.33. Now compare 30, 3, 33 (hundredths): smallest to largest is 3, 30, 33 — so <b>0.03, 0.3, 0.33</b>.</p>
       <div class="reallife"><b>Real life:</b> comparing decimals decides who ran the faster race (the smaller time wins!), which product is cheaper per unit, or whose science measurement is larger.</div>
       <div class="watchout"><b>Common mistake — the classic one:</b> thinking more digits means a bigger number. 0.5 is <i>greater</i> than 0.45, even though 0.45 looks longer. Line them up as 0.50 vs 0.45 and you can see 0.50 wins.</div>
       <div class="watchout"><b>Another common mistake:</b> comparing before lining up the decimal points. Always align the dots (and the places) first, or you'll compare the wrong digits.</div>

       <h4 class="ls-sub">Recap</h4>
       <p>Line up the decimal points, add zeros so both numbers are the same length, then compare left to right just like whole numbers. Remember: length doesn't decide size — place value does.</p>
       <div class="keybox">Add zeros so both have the same length, then compare like whole numbers: 0.70 vs 0.65 → 0.7 is bigger.</div>`,
     examples:[
      {title:"Which is bigger, 0.5 or 0.45?",steps:["Rewrite 0.5 as 0.50 so both have two places.","Compare 50 hundredths and 45 hundredths.","50 > 45, so 0.5 is bigger."]},
      {title:"Order 0.3, 0.03, 0.33",steps:["Write them as 0.30, 0.03, 0.33.","Compare: 3 < 30 < 33 hundredths.","Smallest to biggest: 0.03, 0.3, 0.33."]},
      {title:"Compare race times 9.8 s and 9.75 s",steps:["Match places: 9.80 vs 9.75.","80 hundredths > 75 hundredths, so 9.8 is the larger number.","But the faster runner has the SMALLER time — 9.75 s wins the race!"]}
     ],
     quiz:[
      {q:"Which is bigger?",o:["0.6","0.59","0.55","0.5"],a:0,why:"0.60 > 0.59."},
      {q:"0.2 ___ 0.20",o:["greater","less","equal","none"],a:2,why:"They're equal."},
      {q:"Order smallest first: 0.3, 0.03, 0.33",o:["0.03, 0.3, 0.33","0.3, 0.03, 0.33","0.33, 0.3, 0.03","0.03, 0.33, 0.3"],a:0,why:"0.03 < 0.3 < 0.33."}
     ]}
   ],
   test:[
    {q:"0.9 as a fraction:",o:["9/10","9/100","1/9","90"],a:0,why:"0.9 is nine tenths, which is 9/10."},
    {q:"51/100 as a decimal:",o:["0.51","5.1","0.051","51"],a:0,why:"51 hundredths fills two places after the dot: 0.51."},
    {q:"Two ribbons are 0.8 m and 0.75 m. Which is longer?",o:["0.8 m","0.75 m","equal","can't tell"],a:0,why:"Write 0.8 as 0.80; then 80 hundredths > 75 hundredths, so 0.8 m is longer."},
    {q:"0.6 equals:",o:["6/10","6/100","60","1/6"],a:0,why:"0.6 is six tenths = 6/10 (which also simplifies to 3/5)."},
    {q:"Order from smallest to largest: 0.4, 0.04, 0.44",o:["0.04, 0.4, 0.44","0.4, 0.04, 0.44","0.44, 0.4, 0.04","0.04, 0.44, 0.4"],a:0,why:"As hundredths they are 0.04, 0.40, 0.44 → 4 < 40 < 44, so 0.04, 0.4, 0.44."},
    {q:"Which is closest to one whole (1.0)?",o:["0.9","0.5","0.09","0.19"],a:0,why:"0.9 is nine tenths — only 0.1 away from 1. The others are much further away."}
   ]},

  {id:"g4u5",name:"Geometry & Angles",icon:"📐",code:"4.MD/G",accent:"#0ea5e9",
   sections:[
    {title:"Angles",iv:"angle",
     teach:`<p>An <b>angle</b> is a measure of turning. Picture two lines (called rays) joined at a point. The amount you'd have to rotate one ray to line it up with the other is the angle between them. Angles are all around you — the corner of a page, the hands of a clock, a slice of pizza, a door swinging open.</p>

       <h4 class="ls-sub">Measuring in degrees</h4>
       <p>We measure angles in <b>degrees</b>, shown with a little circle symbol: °. A full turn all the way around a point is <b>360°</b>. Half of that turn — a straight line — is <b>180°</b>. And a quarter turn, the square corner you see everywhere, is <b>90°</b>. We use a tool called a <b>protractor</b> to measure the exact number of degrees.</p>

       <h4 class="ls-sub">The special angles and their names</h4>
       <p>Certain angles are so common they have names:</p>
       <p>• A <b>right angle</b> is exactly 90° — the perfect square corner of a book, a window, or a wall. It's often marked with a tiny square.<br>
          • An <b>acute angle</b> is <i>less</i> than 90° — a narrow, sharp opening. (Remember it as "a cute little angle.")<br>
          • An <b>obtuse angle</b> is <i>more</i> than 90° but less than 180° — a wide, open corner.<br>
          • A <b>straight angle</b> is exactly 180° — a flat, straight line.</p>
       <p>To classify any angle, just compare it to 90°: less than 90° is acute, exactly 90° is right, more than 90° is obtuse. For example, a 120° angle is more than 90°, so it's obtuse. A 35° angle is less than 90°, so it's acute.</p>

       <h4 class="ls-sub">Size is about the opening, not the lines</h4>
       <p>Here's an idea that confuses many students: the size of an angle depends only on how wide the two rays open, <b>not</b> on how long the rays are. A tiny little "V" and a giant "V" can be the very same angle if they open by the same amount. Longer lines do not make a bigger angle.</p>
       <div class="reallife"><b>Real life:</b> angles matter in ramps (too steep is dangerous), clock hands, opening doors, camera tripods, and the tilt of a roof.</div>
       <div class="watchout"><b>Common mistake:</b> thinking longer lines make a bigger angle. The angle is the amount of <i>turn</i> between the lines — the line length doesn't change it at all.</div>
       <div class="watchout"><b>Another common mistake:</b> mixing up acute and obtuse. Acute is the small, sharp one (under 90°); obtuse is the big, wide one (over 90°).</div>

       <h4 class="ls-sub">Recap</h4>
       <p>An angle measures turning, in degrees. Compare any angle to 90° to name it: acute (less), right (exactly 90°), or obtuse (more). And remember — it's the opening that counts, not the length of the lines.</p>
       <div class="keybox">Right = 90°. Acute = less than 90°. Obtuse = more than 90° (up to 180°). Straight line = 180°.</div>`,
     examples:[
      {title:"Classify a 120° angle",steps:["Is it less than 90°? No.","Is it exactly 90°? No.","It's between 90° and 180°, so it's obtuse."]},
      {title:"Two right angles together",steps:["One right angle is 90°.","Put two together: 90° + 90°.","That makes 180° — a straight line!"]},
      {title:"Classify a 35° angle",steps:["Compare it to 90°.","35° is less than 90°.","So it's an acute angle."]}
     ],
     quiz:[
      {q:"A right angle is:",o:["45°","90°","180°","60°"],a:1,why:"90°."},
      {q:"An angle of 50° is:",o:["acute","right","obtuse","straight"],a:0,why:"Less than 90° → acute."},
      {q:"Two right angles make:",o:["90°","180°","270°","45°"],a:1,why:"90+90 = 180°."}
     ]},
    {title:"Area & Perimeter",iv:"arearect",
     teach:`<p>Two of the most useful measurements in geometry are <b>perimeter</b> and <b>area</b>. They sound similar, but they answer completely different questions — one is about the <i>edge</i> of a shape, and the other is about the <i>inside</i>. Let's make sure you never mix them up.</p>

       <h4 class="ls-sub">Perimeter: the distance around</h4>
       <p><b>Perimeter</b> is the total distance all the way around the outside of a shape — like walking around the edge of a yard, or measuring how much fence you'd need. To find it, you simply <b>add up all the side lengths</b>. For a rectangle that is 5 long and 3 wide, the perimeter is 5 + 3 + 5 + 3 = <b>16</b>. (A rectangle has two lengths and two widths, so you could also do 2 × 5 + 2 × 3 = 16.)</p>

       <h4 class="ls-sub">Area: the space inside</h4>
       <p><b>Area</b> is how much flat space fits <i>inside</i> the shape — like how much carpet covers a floor or how much paint covers a wall. For a rectangle, area = <b>length × width</b>. Our 5-by-3 rectangle has area 5 × 3 = <b>15</b>. Why multiply? Because you can fill the rectangle with unit squares: 3 rows of 5 squares each is 15 squares total — an array again!</p>
       <p>Because area counts squares, it is always measured in <b>square units</b> (like square feet or square centimeters), while perimeter is measured in plain units (feet, centimeters).</p>

       <h4 class="ls-sub">Same shape, two different numbers</h4>
       <p>It's worth pausing on this: for our 5-by-3 rectangle, the perimeter is 16 and the area is 15 — two different numbers describing two different things. Perimeter is about the border you'd walk along; area is about the surface you'd cover. A square with side 5 has perimeter 5 + 5 + 5 + 5 = 20 and area 5 × 5 = 25.</p>
       <div class="reallife"><b>Real life:</b> you use perimeter to buy fencing, ribbon, or trim around a picture; you use area to buy paint, carpet, grass seed, or tiles to cover a surface.</div>
       <div class="watchout"><b>Common mistake:</b> using the wrong units. Perimeter is in plain units (16 feet); area is in <i>square</i> units (15 square feet). Getting the units right shows you understand what you measured.</div>
       <div class="watchout"><b>Another common mistake:</b> adding for area or multiplying for perimeter. Remember: perimeter <i>adds</i> the sides (the border), area <i>multiplies</i> length × width (the inside).</div>

       <h4 class="ls-sub">Recap</h4>
       <p>Perimeter is the distance around a shape — add all the sides. Area is the space inside — for a rectangle, multiply length × width, and measure it in square units. Same rectangle, two different measurements.</p>
       <div class="keybox">Rectangle: perimeter = add all 4 sides. Area = length × width (in square units).</div>`,
     examples:[
      {title:"Area of a 6 by 4 rectangle",steps:["Area = length × width.","= 6 × 4.","= 24 square units."]},
      {title:"Perimeter of a 6 by 4 rectangle",steps:["Add all four sides: 6 + 4 + 6 + 4.","= 20.","So the perimeter is 20 units."]},
      {title:"A square garden with side 5",steps:["All four sides are 5. Perimeter = 5 + 5 + 5 + 5 = 20.","Area = side × side = 5 × 5.","Area = 25 square units."]}
     ],
     quiz:[
      {q:"Area of a 7 by 2 rectangle:",o:["14","18","9","28"],a:0,why:"7×2 = 14."},
      {q:"Perimeter of a 5 by 5 square:",o:["10","20","25","15"],a:1,why:"4 sides of 5 = 20."},
      {q:"Perimeter of a 8 by 3 rectangle:",o:["22","24","11","16"],a:0,why:"8+3+8+3 = 22."}
     ]}
   ],
   test:[
    {q:"An angle of 90° is a:",o:["acute angle","right angle","obtuse angle","straight angle"],a:1,why:"Exactly 90° is a right angle — a square corner."},
    {q:"An angle of 150° is:",o:["acute","right","obtuse","straight"],a:2,why:"150° is more than 90° (but less than 180°), so it's obtuse."},
    {q:"A rug is 9 ft by 3 ft. What is its area?",o:["27 sq ft","24 sq ft","12 sq ft","30 sq ft"],a:0,why:"Area = length × width = 9 × 3 = 27 square feet."},
    {q:"A garden is 6 m by 2 m. How much fence goes around it?",o:["16 m","12 m","8 m","20 m"],a:0,why:"Fence = perimeter = add all sides = 6 + 2 + 6 + 2 = 16 m."},
    {q:"A square has a perimeter of 20 cm. How long is one side?",o:["5 cm","4 cm","10 cm","20 cm"],a:0,why:"A square has 4 equal sides, so each side is 20 ÷ 4 = 5 cm."},
    {q:"A room is 8 ft by 5 ft. How many square feet of carpet cover it?",o:["40 sq ft","26 sq ft","13 sq ft","45 sq ft"],a:0,why:"Carpet covers the area: 8 × 5 = 40 square feet."}
   ]},
 ],
 finalTest:[
  {q:"Value of the 4 in 3,481?",o:["4","40","400","4,000"],a:2,why:"Hundreds → 400."},
  {q:"A carton holds 6 eggs. How many eggs in 7 cartons?",o:["42","48","36","49"],a:0,why:"7 × 6 = 42."},
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
  {q:"In 4.36, the 6 is in the:",o:["tenths","hundredths","ones","thousandths"],a:1,u:0,why:"The 6 is the second digit after the dot — the hundredths place."},
  {q:"Round 5.27 to the nearest tenth:",o:["5.3","5.2","5.0","5.27"],a:0,u:0,why:"The hundredths digit is 7 (5 or more), so round the tenths up: 5.3."},
  {q:"0.4 × 0.2 =",o:["0.08","0.8","0.6","0.008"],a:0,u:1,why:"4 × 2 = 8, and there are 2 decimal places total → 0.08."},
  {q:"6 ÷ 0.5 =",o:["12","3","1.2","0.12"],a:0,u:1,why:"Slide both dots: 60 ÷ 5 = 12. (How many halves fit in 6? Twelve.)"},
  {q:"1/2 × 1/3 =",o:["1/6","2/5","1/5","2/3"],a:0,u:2,why:"Multiply across: (1×1)/(2×3) = 1/6."},
  {q:"3 ÷ 1/4 =",o:["12","3/4","7","1/12"],a:0,u:2,why:"How many quarters fit in 3? 3 × 4 = 12."},
  {q:"Volume of a 2×3×4 box:",o:["9","24","14","12"],a:1,u:3,why:"Volume = length × width × height = 2 × 3 × 4 = 24 cubic units."},
  {q:"Volume of a cube with side 3:",o:["27","9","18","6"],a:0,u:3,why:"All sides equal: 3 × 3 × 3 = 27 cubic units."},
  {q:"The point (3, 2) means:",o:["right 3, up 2","up 3, right 2","3+2","left 3"],a:0,u:4,why:"In (x, y) you go right x then up y: right 3, up 2."},
  {q:"For y = x + 5, when x = 4, y =",o:["9","20","1","45"],a:0,u:4,why:"Replace x with 4: 4 + 5 = 9."}
 ],
 units:[
  {id:"g5u1",name:"Decimals & Place Value",icon:"🔢",code:"5.NBT",accent:"#38bdf8",
   sections:[
    {title:"Decimal Place Value",iv:"placevalue",
     teach:`<p>In Grade 4 you learned tenths and hundredths. Place value keeps right on going past the decimal point: after hundredths comes <b>thousandths</b>, and it continues from there.</p>
       <p>Just like with whole numbers, each place is <b>10 times smaller</b> than the one to its left. In <b>2.573</b>, the 5 is 5 tenths (0.5), the 7 is 7 hundredths (0.07), and the 3 is 3 thousandths (0.003). Add the parts and you rebuild the number.</p>
       <p>You can also multiply and divide by powers of 10 by sliding the decimal point: × 10 moves it one place right, ÷ 10 moves it one place left.</p>
       <div class="reallife"><b>Real life:</b> scientists, doctors, and athletes use thousandths for tiny, precise measurements — like a 0.001-second difference in a race.</div>
       <div class="watchout"><b>Watch out:</b> 0.5 is one half (fifty cents), but 0.05 is one twentieth (five cents). The zero right after the dot makes a huge difference.</div>
       <div class="keybox">Places after the dot: tenths, hundredths, thousandths. Each step right is ÷10 (10× smaller).</div>`,
     examples:[
      {title:"Value of the 8 in 3.482",steps:["Find the 8's place — second after the dot: hundredths.","Hundredths means 1/100 = 0.01.","So the 8 is worth 8 × 0.01 = 0.08."]},
      {title:"Read 6.29 out loud",steps:["6 is the whole number.","2 is 2 tenths, 9 is 9 hundredths.","So it's 'six and twenty-nine hundredths'."]},
      {title:"Multiply 0.4 by 10",steps:["× 10 slides the decimal point one place to the right.","0.4 becomes 4.0.","So 0.4 × 10 = 4."]}
     ],
     quiz:[
      {q:"In 6.29, the 9 is in the:",o:["tenths","hundredths","ones","thousandths"],a:1,why:"Second place → hundredths."},
      {q:"Value of the 5 in 0.57?",o:["0.5","0.05","5","0.005"],a:0,why:"Tenths → 0.5."},
      {q:"Each place to the right is:",o:["10× bigger","10× smaller","the same","100× bigger"],a:1,why:"×1/10 each step right."}
     ]},
    {title:"Rounding Decimals",iv:"decimalnumberline",
     teach:`<p>Rounding makes a number simpler by bumping it to the nearest tenth, whole number, and so on. It's perfect for estimating.</p>
       <p>The rule: look at the digit <b>just to the right</b> of the place you're rounding to. If it's <b>5 or more</b>, round up. If it's <b>less than 5</b>, round down (leave the digit as it is). To round <b>3.47</b> to the nearest tenth, look at the hundredths digit (7). Since 7 ≥ 5, round the tenths up: 3.4 becomes <b>3.5</b>.</p>
       <p>A number line helps: 3.47 sits closer to 3.5 than to 3.4, which is exactly why it rounds up.</p>
       <div class="reallife"><b>Real life:</b> stores round prices, and we round measurements all the time — "about 3.5 kg" is easier to say than 3.472 kg.</div>
       <div class="watchout"><b>Watch out:</b> only look at ONE digit — the one right after your rounding place. Don't chain-round several digits.</div>
       <div class="keybox">Look one place to the right: 5 or more rounds up, less than 5 rounds down.</div>`,
     examples:[
      {title:"Round 6.83 to the nearest tenth",steps:["Rounding to tenths, so look at the hundredths digit: 3.","3 is less than 5, so round down (keep the tenth).","Answer: 6.8."]},
      {title:"Round 2.85 to the nearest tenth",steps:["Look at the hundredths digit: 5.","5 or more means round up.","2.8 becomes 2.9."]},
      {title:"Round 7.42 to the nearest whole",steps:["Rounding to a whole number, look at the tenths digit: 4.","4 is less than 5, so round down.","Answer: 7."]}
     ],
     quiz:[
      {q:"Round 4.62 to the nearest tenth:",o:["4.6","4.7","5.0","4.5"],a:0,why:"2 < 5 → 4.6."},
      {q:"Round 2.85 to the nearest tenth:",o:["2.8","2.9","3.0","2.85"],a:1,why:"5 → round up → 2.9."},
      {q:"Round 7.49 to the nearest whole:",o:["7","8","7.5","7.4"],a:0,why:"0.49 < 0.5 → 7."}
     ]}
   ],
   test:[
    {q:"In 5.316, the 1 is in the:",o:["tenths","hundredths","thousandths","ones"],a:1,why:"After the dot: 3 is tenths, 1 is hundredths, 6 is thousandths."},
    {q:"Value of the 4 in 0.94?",o:["0.4","0.04","4","0.004"],a:1,why:"The 4 is in the hundredths place, so it's worth 4 × 0.01 = 0.04."},
    {q:"Round 3.27 to the nearest tenth:",o:["3.3","3.2","3.0","3.27"],a:0,why:"Look at the hundredths digit (7). It's 5 or more, so round the tenths up → 3.3."},
    {q:"A runner's time was 8.5 s. Rounded to the nearest whole second?",o:["8 s","9 s","8.5 s","10 s"],a:1,why:"The tenths digit is 5, so round up to 9 s."},
    {q:"Which is largest?",o:["0.6","0.59","0.061","0.5"],a:0,why:"Line them up: 0.600, 0.590, 0.061, 0.500 — the biggest is 0.6."},
    {q:"Multiply 0.35 × 10:",o:["3.5","35","0.035","0.35"],a:0,why:"×10 slides the decimal point one place to the right: 0.35 → 3.5."}
   ]},

  {id:"g5u2",name:"Decimal Operations",icon:"✖️",code:"5.NBT",accent:"#14b8a6",
   sections:[
    {title:"Multiplying Decimals",iv:"decimalgrid",
     teach:`<p>Multiplying decimals is almost the same as multiplying whole numbers — with one extra step at the end for the decimal point.</p>
       <p>First, ignore the dots and multiply the numbers normally. Then <b>count how many digits are after the decimal point</b> in the numbers you multiplied, and put that many decimal places in your answer. For <b>0.4 × 0.2</b>: multiply 4 × 2 = 8, and since there are 2 decimal digits total, the answer has 2 decimal places → <b>0.08</b>.</p>
       <p>The answer is smaller than both numbers — that's normal when you multiply by something less than 1, because you're taking a part of a part.</p>
       <div class="reallife"><b>Real life:</b> you multiply decimals to find the cost of several items, or to scale a recipe up or down.</div>
       <div class="watchout"><b>Watch out:</b> count the decimal places from BOTH numbers. 0.4 × 0.2 has two decimal places total → 0.08, not 0.8.</div>
       <div class="keybox">Multiply as whole numbers, then add up the decimal places and place the dot that many spots from the right.</div>`,
     examples:[
      {title:"0.3 × 0.6",steps:["Ignore dots: 3 × 6 = 18.","Count decimal places: 1 + 1 = 2.","Put the dot 2 places from the right → 0.18."]},
      {title:"3 × 0.4",steps:["Ignore the dot: 3 × 4 = 12.","There is 1 decimal place total.","Place the dot 1 spot from the right → 1.2."]},
      {title:"Cost of 4 items at $1.25",steps:["Multiply as whole numbers: 125 × 4 = 500.","There are 2 decimal places in 1.25.","Answer: $5.00."]}
     ],
     quiz:[
      {q:"0.5 × 0.5 =",o:["0.25","2.5","0.025","25"],a:0,why:"5×5=25, 2 places → 0.25."},
      {q:"0.2 × 0.3 =",o:["0.6","0.06","0.006","6"],a:1,why:"6, 2 places → 0.06."},
      {q:"3 × 0.4 =",o:["1.2","0.12","12","0.012"],a:0,why:"12, 1 place → 1.2."}
     ]},
    {title:"Dividing Decimals",iv:null,
     teach:`<p>Dividing by a decimal is easier if you first turn the divisor (the number you're dividing by) into a <b>whole number</b>.</p>
       <p>The trick: move the decimal point in <b>both</b> numbers the same number of places to the right until the divisor is whole. For <b>6 ÷ 0.5</b>, move both dots one place: 6 becomes 60 and 0.5 becomes 5. Now do 60 ÷ 5 = <b>12</b>. Moving both points the same amount keeps the answer correct.</p>
       <p>It can feel surprising that 6 ÷ 0.5 = 12 (bigger than 6!), but it makes sense: you're asking "how many halves are in 6?" — and there are twelve.</p>
       <div class="reallife"><b>Real life:</b> dividing decimals answers questions like "how many $0.50 candies can I buy with $6?"</div>
       <div class="watchout"><b>Watch out:</b> move the point the SAME number of places in both numbers. If you only move one, the answer will be off by a factor of 10.</div>
       <div class="keybox">Slide both decimal points right until the divisor is a whole number, then divide normally.</div>`,
     examples:[
      {title:"4.8 ÷ 0.6",steps:["Make the divisor whole: 0.6 → 6 (move 1 place).","Move the other number too: 4.8 → 48.","48 ÷ 6 = 8."]},
      {title:"8 ÷ 0.4",steps:["Move both dots one place: 8 → 80, 0.4 → 4.","80 ÷ 4 = 20.","So 8 ÷ 0.4 = 20."]},
      {title:"How many $0.25 stickers for $3?",steps:["This is 3 ÷ 0.25. Move both dots two places: 300 ÷ 25.","300 ÷ 25 = 12.","You can buy 12 stickers."]}
     ],
     quiz:[
      {q:"8 ÷ 0.4 =",o:["20","2","0.2","32"],a:0,why:"80 ÷ 4 = 20."},
      {q:"2.4 ÷ 0.6 =",o:["4","0.4","40","2"],a:0,why:"24 ÷ 6 = 4."},
      {q:"To divide by 0.2, first make it:",o:["a whole number","smaller","a fraction","zero"],a:0,why:"Move dots to make divisor whole."}
     ]}
   ],
   test:[
    {q:"0.6 × 0.4 =",o:["0.24","2.4","0.024","24"],a:0,why:"6 × 4 = 24, and there are 2 decimal places total → 0.24."},
    {q:"A candy bar costs $0.70. How much for 5 bars?",o:["$3.50","$0.35","$35","$0.75"],a:0,why:"5 × 0.70: think 5 × 70 = 350, then place 2 decimals → $3.50."},
    {q:"9 ÷ 0.3 =",o:["30","3","0.3","27"],a:0,why:"Slide both decimal points right: 90 ÷ 3 = 30."},
    {q:"A 3.6 m rope is cut into 0.9 m pieces. How many pieces?",o:["4","0.4","40","3"],a:0,why:"3.6 ÷ 0.9 → 36 ÷ 9 = 4 pieces."},
    {q:"Ribbon costs $1.20 per meter. What does 3 meters cost?",o:["$3.60","$4.20","$0.40","$3.20"],a:0,why:"3 × $1.20 = $3.60."},
    {q:"How many $0.25 erasers can you buy with $2?",o:["8","4","6","10"],a:0,why:"2 ÷ 0.25 → 200 ÷ 25 = 8 erasers."}
   ]},

  {id:"g5u3",name:"Multiply & Divide Fractions",icon:"🍕",code:"5.NF",accent:"#fb7185",
   sections:[
    {title:"Multiplying Fractions",iv:"fracmultgrid",
     teach:`<p>Multiplying fractions is actually easier than adding them — you don't need a common denominator at all!</p>
       <p>Just multiply straight across: the <b>tops together</b> and the <b>bottoms together</b>. So 1/2 × 1/3 = (1×1)/(2×3) = <b>1/6</b>. The word "<b>of</b>" is a big hint to multiply — "1/2 of 1/3" means 1/2 × 1/3.</p>
       <p>When you multiply two fractions that are each less than 1, the answer gets <i>smaller</i>, because you're taking a part of a part. Sometimes the answer can be simplified, like 2/4 = 1/2.</p>
       <div class="reallife"><b>Real life:</b> "half of a half a pizza" is 1/2 × 1/2 = 1/4 of the whole pizza.</div>
       <div class="watchout"><b>Watch out:</b> for multiplying you do NOT need a common denominator (that's only for adding and subtracting). Just multiply across.</div>
       <div class="keybox">Tops × tops, bottoms × bottoms. "Of" means multiply.</div>`,
     examples:[
      {title:"2/3 × 3/4",steps:["Multiply the tops: 2 × 3 = 6.","Multiply the bottoms: 3 × 4 = 12.","6/12 simplifies to 1/2."]},
      {title:"1/2 of 10",steps:["'Of' means multiply: 1/2 × 10.","Half of 10 is 5.","So 1/2 of 10 = 5."]},
      {title:"1/4 × 1/2",steps:["Tops: 1 × 1 = 1.","Bottoms: 4 × 2 = 8.","Answer: 1/8."]}
     ],
     quiz:[
      {q:"1/2 × 1/4 =",o:["1/8","2/6","1/6","2/8"],a:0,why:"(1×1)/(2×4) = 1/8."},
      {q:"2/3 × 1/2 =",o:["2/6 = 1/3","3/5","2/5","1/6"],a:0,why:"2/6 = 1/3."},
      {q:"'1/2 of 10' means:",o:["1/2 × 10 = 5","10 − 2","12","1/2 + 10"],a:0,why:"'Of' = multiply → 5."}
     ]},
    {title:"Dividing with Unit Fractions",iv:"fracbar",
     teach:`<p>Dividing by a fraction sounds scary, but there's an easy way to think about it: dividing by a fraction asks <b>"how many of these fit?"</b></p>
       <p>For example, 3 ÷ 1/2 is asking "how many halves fit in 3?" Since each whole has 2 halves, and there are 3 wholes, that's 3 × 2 = <b>6</b> halves. The shortcut is to <b>multiply by the flipped fraction</b>: 3 ÷ 1/2 = 3 × 2 = 6.</p>
       <p>That's why dividing by a small fraction gives a big answer — lots of tiny pieces fit inside!</p>
       <div class="reallife"><b>Real life:</b> "how many 1/4-cup scoops are in 2 cups of flour?" is 2 ÷ 1/4 = 8 scoops.</div>
       <div class="watchout"><b>Watch out:</b> dividing by 1/2 is NOT the same as dividing by 2. 6 ÷ 1/2 = 12, but 6 ÷ 2 = 3.</div>
       <div class="keybox">Dividing by 1/n is the same as multiplying by n: 4 ÷ 1/3 = 4 × 3 = 12.</div>`,
     examples:[
      {title:"4 ÷ 1/3",steps:["Ask: how many thirds fit in 4?","Each whole has 3 thirds, so multiply: 4 × 3.","= 12."]},
      {title:"How many 1/2s are in 5?",steps:["This is 5 ÷ 1/2.","Flip and multiply: 5 × 2.","= 10 halves."]},
      {title:"2 ÷ 1/4",steps:["How many quarters fit in 2 wholes?","Each whole has 4 quarters: 2 × 4.","= 8."]}
     ],
     quiz:[
      {q:"2 ÷ 1/4 =",o:["8","1/2","6","2"],a:0,why:"2 × 4 = 8."},
      {q:"How many 1/2s are in 5?",o:["10","2.5","5","7"],a:0,why:"5 × 2 = 10."},
      {q:"6 ÷ 1/3 =",o:["18","2","9","3"],a:0,why:"6 × 3 = 18."}
     ]}
   ],
   test:[
    {q:"1/3 × 1/2 =",o:["1/6","2/5","1/5","2/6"],a:0,why:"Multiply across: (1×1)/(3×2) = 1/6."},
    {q:"3/4 × 2/3 =",o:["1/2","6/7","5/7","1/4"],a:0,why:"(3×2)/(4×3) = 6/12, which simplifies to 1/2."},
    {q:"A 3 ft ribbon is cut into 1/2 ft pieces. How many pieces?",o:["6","1.5","5","3"],a:0,why:"3 ÷ 1/2 = 3 × 2 = 6 pieces."},
    {q:"How many 1/4s are in 2?",o:["8","6","4","2"],a:0,why:"2 ÷ 1/4 = 2 × 4 = 8."},
    {q:"What is 1/2 of 12?",o:["6","24","10","14"],a:0,why:"'Of' means multiply: 1/2 × 12 = 6."},
    {q:"A recipe needs 3/4 cup of sugar. For HALF the recipe, how much?",o:["3/8 cup","1 1/2 cup","3/4 cup","1/4 cup"],a:0,why:"Half of 3/4 is 1/2 × 3/4 = 3/8 cup."}
   ]},

  {id:"g5u4",name:"Volume",icon:"📦",code:"5.MD",accent:"#f59e0b",
   sections:[
    {title:"Volume of Boxes",iv:"box",
     teach:`<p><b>Volume</b> measures how much space is <i>inside</i> a 3-D shape — like how much water fills a fish tank. We measure it in <b>cubic units</b> (unit cubes that fit inside).</p>
       <p>For a box (a rectangular prism), multiply the three dimensions: <b>length × width × height</b>. Imagine filling the bottom layer with unit cubes (that's length × width), then stacking up as many layers as the height. A 2 × 3 × 4 box holds 2 × 3 × 4 = 24 cubes.</p>
       <p>Because you multiply three numbers, the order doesn't matter: 2 × 3 × 4 is the same as 4 × 3 × 2.</p>
       <div class="reallife"><b>Real life:</b> volume tells you how much a moving box, aquarium, or storage bin can hold.</div>
       <div class="watchout"><b>Watch out:</b> volume uses CUBIC units (like cubic cm), not square units. Area is flat; volume is 3-D.</div>
       <div class="keybox">Box volume = length × width × height, measured in cubic units.</div>`,
     examples:[
      {title:"Volume of a 5 × 2 × 3 box",steps:["Multiply length × width: 5 × 2 = 10 (bottom layer).","Multiply by the height: 10 × 3.","= 30 cubic units."]},
      {title:"Volume of a cube with side 3",steps:["A cube has all sides equal: 3 × 3 × 3.","3 × 3 = 9, then 9 × 3 = 27.","Volume = 27 cubic units."]},
      {title:"How many unit cubes fill a 4 × 2 × 2 box?",steps:["Bottom layer: 4 × 2 = 8 cubes.","There are 2 layers (height 2): 8 × 2.","= 16 cubes."]}
     ],
     quiz:[
      {q:"Volume of a 3×3×3 cube:",o:["9","27","18","6"],a:1,why:"3×3×3 = 27."},
      {q:"Volume of a 4×2×5 box:",o:["40","11","20","30"],a:0,why:"4×2×5 = 40."},
      {q:"Volume is measured in:",o:["square units","cubic units","degrees","inches only"],a:1,why:"Cubic units."}
     ]},
    {title:"Adding Volumes",iv:null,
     teach:`<p>Some solid shapes aren't simple boxes — they look like an L or a T. To find the volume of a shape like that, <b>break it into two boxes</b>, find each box's volume, and add them together.</p>
       <p>For example, if one part is 2 × 2 × 2 = 8 cubic units and the other part is 3 × 1 × 2 = 6 cubic units, the whole shape has 8 + 6 = <b>14</b> cubic units.</p>
       <p>There's often more than one way to slice the shape — any way that makes clean boxes works, and you'll get the same total.</p>
       <div class="reallife"><b>Real life:</b> builders and packagers split odd shapes into boxes to figure out material and space.</div>
       <div class="watchout"><b>Watch out:</b> don't count the same cubes twice. Slice the shape so the two boxes don't overlap.</div>
       <div class="keybox">Split a tricky solid into boxes, find each volume, then add them up.</div>`,
     examples:[
      {title:"Two boxes: 2×2×2 and 4×1×1",steps:["First box: 2 × 2 × 2 = 8.","Second box: 4 × 1 × 1 = 4.","Add them: 8 + 4 = 12 cubic units."]},
      {title:"An L-shaped solid",steps:["Split the L into two rectangular boxes.","Find the volume of each box separately.","Add the two volumes for the total."]},
      {title:"Box A (10) plus Box B (6)",steps:["Find each part's volume: 10 and 6.","Add them together.","Total volume = 16 cubic units."]}
     ],
     quiz:[
      {q:"Box A = 10, Box B = 6. Total volume:",o:["16","4","60","10"],a:0,why:"10 + 6 = 16."},
      {q:"A 2×2×2 plus a 2×2×1:",o:["12","10","8","16"],a:0,why:"8 + 4 = 12."},
      {q:"To find the volume of an L-shape:",o:["split into boxes","measure sides","use π","add the edges"],a:0,why:"Split, then add volumes."}
     ]}
   ],
   test:[
    {q:"A fish tank is 2 ft × 5 ft × 2 ft. What is its volume?",o:["20 cu ft","9 cu ft","14 cu ft","10 cu ft"],a:0,why:"Volume = 2 × 5 × 2 = 20 cubic feet."},
    {q:"Volume of a 4×4×2 box:",o:["32","10","16","24"],a:0,why:"4 × 4 = 16 for the bottom layer, × 2 layers = 32 cubic units."},
    {q:"Volume of a 1×1×1 cube:",o:["1","3","0","2"],a:0,why:"1 × 1 × 1 = 1 cubic unit."},
    {q:"An L-shaped solid = Box A (12) + Box B (8). Total volume:",o:["20","4","96","12"],a:0,why:"Add the two box volumes: 12 + 8 = 20 cubic units."},
    {q:"How many 1-inch cubes fill a 3×2×4 box?",o:["24","9","14","20"],a:0,why:"Volume = 3 × 2 × 4 = 24, so 24 unit cubes fit inside."},
    {q:"A box holds 36 cubic units. It is 3 long and 3 wide. How tall is it?",o:["4","6","12","9"],a:0,why:"Bottom layer = 3 × 3 = 9; then 36 ÷ 9 = 4, so the height is 4."}
   ]},

  {id:"g5u5",name:"Coordinate Plane",icon:"📍",code:"5.G",accent:"#0ea5e9",
   sections:[
    {title:"Plotting Points",iv:"coord",
     teach:`<p>The <b>coordinate plane</b> is like a map made of two number lines that cross. The line going <b>across</b> is the <b>x-axis</b>, and the line going <b>up</b> is the <b>y-axis</b>. They cross at a point called the <b>origin</b>, which is (0, 0).</p>
       <p>Every point has an address written as (x, y). The first number tells you how far to go <b>right</b> along the x-axis, and the second tells you how far to go <b>up</b>. So <b>(3, 2)</b> means: start at the origin, go right 3, then up 2.</p>
       <p>The two numbers in a point are called its <b>coordinates</b>, and the order matters — x always comes first!</p>
       <div class="reallife"><b>Real life:</b> coordinates power maps, video games, and seat numbers ("row, seat"). GPS is basically coordinates on Earth.</div>
       <div class="watchout"><b>Watch out:</b> (3, 2) and (2, 3) are different points. Always read x (across) first, then y (up).</div>
       <div class="keybox">A point (x, y): go right x, then up y. Start at the origin (0, 0). x first, always.</div>`,
     examples:[
      {title:"Plot (4, 1)",steps:["Start at the origin (0, 0).","Move right 4 along the x-axis.","Then move up 1. That's the point (4, 1)."]},
      {title:"Why order matters",steps:["(3, 2) means right 3, up 2.","(2, 3) means right 2, up 3 — a different spot!","Always read x first, then y."]},
      {title:"Where is (0, 5)?",steps:["x is 0, so don't move right at all.","y is 5, so go straight up 5.","The point sits on the y-axis, 5 above the origin."]}
     ],
     quiz:[
      {q:"In (5, 3), the 5 tells you to go:",o:["right 5","up 5","left 5","down 5"],a:0,why:"x = right 5."},
      {q:"Which comes first in (x, y)?",o:["x (across)","y (up)","either","the bigger one"],a:0,why:"x always first."},
      {q:"The point (0, 0) is called the:",o:["origin","center of mass","peak","axis"],a:0,why:"The origin."}
     ]},
    {title:"Graphing Patterns",iv:"coord",
     teach:`<p>When a rule connects two numbers, you can turn each pair into a point and graph it. Graphing shows the pattern as a picture!</p>
       <p>Take the rule "y = x + 1". Plug in x-values to get y-values: x = 0 → y = 1; x = 1 → y = 2; x = 2 → y = 3. That gives the points (0,1), (1,2), (2,3). Plot them and they line up in a perfectly <b>straight line</b>.</p>
       <p>A steady rule always makes a straight line, and you can use the graph to predict values you didn't calculate.</p>
       <div class="reallife"><b>Real life:</b> graphs show how savings grow over time, or how distance builds up as you drive at a steady speed.</div>
       <div class="watchout"><b>Watch out:</b> plug the x-value into the rule to FIND y — don't just copy the x-value up.</div>
       <div class="keybox">Make a table of (x, y) pairs from the rule, plot the points, and a steady rule gives a straight line.</div>`,
     examples:[
      {title:"Points for y = 2x",steps:["x = 0 → y = 0, so (0, 0).","x = 1 → y = 2, so (1, 2).","x = 2 → y = 4, so (2, 4). These line up straight!"]},
      {title:"Use y = x + 2 when x = 3",steps:["Replace x with 3: y = 3 + 2.","y = 5.","So the point is (3, 5)."]},
      {title:"Make a table for y = x + 1",steps:["x = 0 → y = 1; x = 1 → y = 2.","x = 2 → y = 3; x = 3 → y = 4.","Points (0,1), (1,2), (2,3), (3,4) form a straight line."]}
     ],
     quiz:[
      {q:"For y = x + 2, when x = 3, y =",o:["5","6","1","23"],a:0,why:"3 + 2 = 5."},
      {q:"For y = 2x, when x = 4, y =",o:["8","6","2","24"],a:0,why:"2 × 4 = 8."},
      {q:"Points following a steady rule form a:",o:["circle","straight line","zigzag","dot"],a:1,why:"A straight line."}
     ]}
   ],
   test:[
    {q:"In (2, 7), the 7 means:",o:["up 7","right 7","left 7","down 7"],a:0,why:"The second number is y, which tells you to go up 7."},
    {q:"The origin is at:",o:["(0,0)","(1,1)","(2,0)","(0,1)"],a:0,why:"The origin is where the two axes cross: (0, 0)."},
    {q:"For y = x + 4, when x = 2, y =",o:["6","8","2","24"],a:0,why:"Replace x with 2: 2 + 4 = 6."},
    {q:"To plot (5, 1) you go:",o:["right 5, up 1","up 5, right 1","right 1, up 5","left 5"],a:0,why:"x comes first: right 5, then up 1."},
    {q:"For y = 2x, when x = 5, y =",o:["10","7","25","52"],a:0,why:"2x means 2 × x = 2 × 5 = 10."},
    {q:"Point A is at (4, 0). Where does it sit?",o:["on the x-axis","on the y-axis","at the origin","above the grid"],a:0,why:"y = 0 means no up-movement, so the point sits right on the x-axis."}
   ]},
 ],
 finalTest:[
  {q:"In 3.14, the 4 is in the:",o:["tenths","hundredths","ones","thousandths"],a:1,why:"Hundredths."},
  {q:"0.3 × 0.5 =",o:["0.15","1.5","0.015","15"],a:0,why:"15, 2 places → 0.15."},
  {q:"1/2 × 2/3 =",o:["1/3","2/5","3/5","1/5"],a:0,why:"(1×2)/(2×3) = 2/6 = 1/3."},
  {q:"A 4 m rope cut into 1/2 m pieces makes how many?",o:["8","2","6","4"],a:0,why:"4 ÷ 1/2 = 8."},
  {q:"Volume of a 2×2×3 box:",o:["12","7","10","24"],a:0,why:"12."},
  {q:"To plot (3, 4), go:",o:["right 3, up 4","up 3, right 4","right 4, up 3","left 3"],a:0,why:"x first."}
 ]
},

/* =========================== GRADE 6 =========================== */
g6:{ name:"Grade 6", short:"G6", emoji:"🚀", accent:"#0ea5e9",
 color:"linear-gradient(120deg,#0ea5e9,#fb7185)",
 blurb:"Ratios, dividing fractions, negatives, equations, geometry & data.",
 placement:[
  {q:"The ratio of 6 dogs to 3 cats simplifies to:",o:["2:1","3:1","6:3 only","1:2"],a:0,u:0,why:"Divide both parts by 3: 6:3 = 2:1."},
  {q:"$12 for 4 notebooks is how much each?",o:["$3","$4","$8","$48"],a:0,u:0,why:"Unit rate = total ÷ number = 12 ÷ 4 = $3 each."},
  {q:"1/2 ÷ 1/4 =",o:["2","1/8","8","1/2"],a:0,u:1,why:"Keep-change-flip: 1/2 × 4/1 = 4/2 = 2."},
  {q:"What is −3 + 8?",o:["5","−5","11","−11"],a:0,u:1,why:"Start at −3 on the number line, move right 8 → 5."},
  {q:"Solve x + 5 = 12:",o:["x=7","x=17","x=5","x=60"],a:0,u:2,why:"Subtract 5 from both sides: x = 12 − 5 = 7."},
  {q:"Evaluate 3x + 2 when x = 4:",o:["14","18","9","24"],a:0,u:2,why:"Multiply first: 3 × 4 = 12, then add 2 = 14."},
  {q:"Area of a triangle, base 8 height 4:",o:["16","32","12","24"],a:0,u:3,why:"½ × base × height = ½ × 8 × 4 = 16."},
  {q:"Volume of a 2×3×3 box:",o:["18","8","12","27"],a:0,u:3,why:"2 × 3 × 3 = 18 cubic units."},
  {q:"The mean of 2, 4, 6:",o:["4","6","12","3"],a:0,u:4,why:"Add them (2+4+6 = 12), then divide by 3 → mean 4."},
  {q:"The range of 3, 9, 5:",o:["6","9","3","14"],a:0,u:4,why:"Biggest − smallest = 9 − 3 = 6."}
 ],
 units:[
  {id:"g6u1",name:"Ratios & Rates",icon:"⚖️",code:"6.RP",accent:"#0ea5e9",
   sections:[
    {title:"Understanding Ratios",iv:"ratio",
     teach:`<p>A <b>ratio</b> compares two amounts. If a recipe uses 3 cups of flour for every 2 cups of sugar, the ratio of flour to sugar is 3 to 2, written <b>3:2</b>.</p>
       <p>Ratios can be <b>scaled</b> up or down by multiplying or dividing both parts by the same number — a lot like equivalent fractions. So 6:4 <b>simplifies</b> to 3:2 (divide both by 2), and 2:3 can grow to 4:6 (multiply both by 2). These are called <b>equivalent ratios</b> because they describe the same relationship.</p>
       <p>To write a ratio in <b>simplest form</b>, divide both numbers by their greatest common factor. Order matters, too: 3:2 (flour to sugar) is not the same as 2:3 (sugar to flour).</p>
       <div class="reallife"><b>Real life:</b> ratios describe recipes, mixing paint colors, team win-loss records, and map scales.</div>
       <div class="watchout"><b>Watch out:</b> scale BOTH parts by the same number. Doubling only one part changes the ratio.</div>
       <div class="keybox">Scale both parts of a ratio by the same number to get equivalent ratios. Simplest form = divide both by the GCF.</div>`,
     examples:[
      {title:"Simplify 10:15",steps:["Find a number that divides both 10 and 15: that's 5.","10 ÷ 5 = 2, and 15 ÷ 5 = 3.","So 10:15 = 2:3."]},
      {title:"Find an equivalent ratio to 2:3",steps:["Multiply both parts by the same number, say 2.","2 × 2 = 4, and 3 × 2 = 6.","So 2:3 = 4:6."]},
      {title:"Scale a recipe: 3:2 for a triple batch",steps:["The ratio of flour to sugar is 3:2.","Multiply both by 3 for a triple batch.","9 cups flour to 6 cups sugar (9:6)."]}
     ],
     quiz:[
      {q:"Simplify the ratio 8:12:",o:["2:3","3:4","3:2","4:5"],a:0,why:"Divide both by 4 → 2:3."},
      {q:"3 red to 6 blue as a simple ratio:",o:["1:2","2:1","3:6 only","1:3"],a:0,why:"Divide by 3 → 1:2."},
      {q:"An equivalent ratio to 2:3 is:",o:["4:6","2:6","6:2","3:2"],a:0,why:"×2 both → 4:6."}
     ]},
    {title:"Unit Rates & Percent",iv:"ratio",
     teach:`<p>A <b>unit rate</b> tells you the amount for exactly <b>one</b> of something — like miles per hour, or dollars per pound. You find it by dividing. If 3 pounds of apples cost $12, then one pound costs 12 ÷ 3 = <b>$4 per pound</b>.</p>
       <p>A <b>percent</b> is a special ratio that compares to <b>100</b>. "Percent" literally means "per hundred", so 25% means 25 out of 100, the same as the fraction 25/100 = 1/4.</p>
       <p>Unit rates make it easy to compare deals ("which is the better buy?"), and percents describe sales, tips, and scores.</p>
       <div class="reallife"><b>Real life:</b> unit rates help you compare prices at the store; percents show up in sales, tax, tips, and test grades.</div>
       <div class="watchout"><b>Watch out:</b> a unit rate is the amount for ONE unit. Divide the total by the number of units, don't just subtract.</div>
       <div class="keybox">Unit rate = total ÷ number of units (amount for 1). Percent = a ratio out of 100.</div>`,
     examples:[
      {title:"Unit rate: 150 miles in 3 hours",steps:["Rate = miles ÷ hours.","150 ÷ 3 = 50.","So the speed is 50 miles per hour."]},
      {title:"What is 50% as a fraction?",steps:["Percent means 'out of 100', so 50% = 50/100.","Simplify by dividing both by 50.","50/100 = 1/2."]},
      {title:"Better buy: $6 for 3 lbs or $10 for 5 lbs?",steps:["First: 6 ÷ 3 = $2 per lb.","Second: 10 ÷ 5 = $2 per lb.","Same unit rate — they cost the same per pound!"]}
     ],
     quiz:[
      {q:"$20 for 4 books = per book:",o:["$5","$4","$16","$80"],a:0,why:"20 ÷ 4 = $5."},
      {q:"50% as a fraction:",o:["1/2","1/4","1/5","5"],a:0,why:"50/100 = 1/2."},
      {q:"120 miles in 2 hours = ",o:["60 mph","240 mph","2 mph","122 mph"],a:0,why:"120 ÷ 2 = 60."}
     ]}
   ],
   test:[
    {q:"Simplify 9:6:",o:["3:2","2:3","9:6 only","1:2"],a:0,why:"Divide both parts by the GCF, 3: 9÷3 = 3 and 6÷3 = 2 → 3:2."},
    {q:"A store sells 6 pens for $18. What is the price per pen?",o:["$3","$4","$12","$24"],a:0,why:"Unit rate = total ÷ number = 18 ÷ 6 = $3 per pen."},
    {q:"25% as a fraction (simplest form):",o:["1/4","1/2","1/5","25"],a:0,why:"25% = 25/100, and 25/100 simplifies to 1/4."},
    {q:"A car goes 180 miles in 3 hours. Its speed is:",o:["60 mph","540 mph","3 mph","183 mph"],a:0,why:"Speed = miles ÷ hours = 180 ÷ 3 = 60 mph."},
    {q:"Flour to sugar is a 3:1 ratio. For 9 cups of flour, how much sugar?",o:["3 cups","1 cup","9 cups","27 cups"],a:0,why:"Scale 3:1 by 3 → 9:3, so you need 3 cups of sugar."},
    {q:"What is 10% of 50?",o:["5","10","500","0.5"],a:0,why:"10% = 1/10, and 1/10 of 50 is 50 ÷ 10 = 5."}
   ]},

  {id:"g6u2",name:"Fractions & Negatives",icon:"➗",code:"6.NS",accent:"#14b8a6",
   sections:[
    {title:"Dividing Fractions",iv:"fracdiv",
     teach:`<p>To divide by a fraction, use the famous trick: <b>Keep, Change, Flip</b>. Keep the first fraction, change the ÷ sign to ×, and flip the second fraction upside down (that flipped fraction is called the <b>reciprocal</b>).</p>
       <p>For example, 1/2 ÷ 1/4 becomes 1/2 × 4/1 = 4/2 = <b>2</b>. It helps to ask the meaning: "how many quarters fit inside a half?" There are two, which matches!</p>
       <p>Flipping works because multiplying by the reciprocal undoes the division — the same idea as multiplying by 2 to undo dividing by 1/2.</p>
       <div class="reallife"><b>Real life:</b> dividing fractions answers "how many 1/3-cup servings are in 2 cups?" and similar sharing questions.</div>
       <div class="watchout"><b>Watch out:</b> flip the SECOND fraction (the divisor), not the first. Keep the first one exactly as it is.</div>
       <div class="keybox">Keep, Change, Flip: a ÷ b/c = a × c/b.</div>`,
     examples:[
      {title:"2/3 ÷ 1/6",steps:["Keep 2/3, change ÷ to ×, flip 1/6 to 6/1.","2/3 × 6/1 = 12/3.","12/3 = 4."]},
      {title:"3/4 ÷ 1/2",steps:["Keep 3/4, change to ×, flip 1/2 to 2/1.","3/4 × 2/1 = 6/4.","6/4 simplifies to 3/2."]},
      {title:"1/2 ÷ 1/4 with meaning",steps:["Keep-change-flip: 1/2 × 4/1 = 4/2 = 2.","Check the meaning: how many quarters in a half?","Exactly 2 — it matches!"]}
     ],
     quiz:[
      {q:"1/2 ÷ 1/4 =",o:["2","1/8","8","1/2"],a:0,why:"1/2 × 4 = 2."},
      {q:"3/4 ÷ 1/2 =",o:["3/2","3/8","1/2","2/3"],a:0,why:"3/4 × 2 = 6/4 = 3/2."},
      {q:"'Keep, change, flip' flips the:",o:["first fraction","second fraction","answer","numerator"],a:1,why:"Flip the divisor (second)."}
     ]},
    {title:"Negative Numbers",iv:"numline",
     teach:`<p><b>Negative numbers</b> are numbers less than zero. You already meet them in real life: temperatures below freezing, money you owe, or floors below ground level. On a number line, negatives sit to the <b>left of zero</b>.</p>
       <p>To add on a number line, start at the first number and move: <b>right</b> for a positive, <b>left</b> for a negative. So −3 + 8 means start at −3 and move right 8, landing on <b>5</b>. Every number has an <b>opposite</b> the same distance from zero — the opposite of −7 is 7 — and a number plus its opposite equals 0.</p>
       <p>The farther <b>left</b> a number is, the smaller it is. That's why −6 is less than −2, even though 6 is bigger than 2.</p>
       <div class="reallife"><b>Real life:</b> negatives describe temperatures below zero, elevations below sea level, and money owed (debt).</div>
       <div class="watchout"><b>Watch out:</b> −6 is SMALLER than −2. With negatives, the bigger the digit, the smaller the number.</div>
       <div class="keybox">On a number line: add a positive → move right, add a negative → move left. Farther left = smaller.</div>`,
     examples:[
      {title:"−5 + 3",steps:["Start at −5 on the number line.","Add 3 means move right 3 steps.","You land on −2."]},
      {title:"Compare −6 and −2",steps:["Both are to the left of 0.","−6 is farther left than −2.","So −6 is the smaller number."]},
      {title:"−4 + 9",steps:["Start at −4.","Move right 9 (adding a positive).","You pass 0 and land on 5."]}
     ],
     quiz:[
      {q:"−4 + 9 =",o:["5","−5","13","−13"],a:0,why:"Move right 9 from −4 → 5."},
      {q:"Which is smaller?",o:["−6","−2","0","3"],a:0,why:"−6 is furthest left."},
      {q:"The opposite of −7 is:",o:["7","−7","0","1/7"],a:0,why:"Opposite of −7 is 7."}
     ]}
   ],
   test:[
    {q:"1/3 ÷ 1/6 =",o:["2","1/18","1/2","6"],a:0,why:"Keep-change-flip: 1/3 × 6/1 = 6/3 = 2."},
    {q:"A 2/5 kg bag is split into 1/5 kg scoops. How many scoops?",o:["2","1/25","10","2/25"],a:0,why:"2/5 ÷ 1/5 = 2/5 × 5/1 = 10/5 = 2 scoops."},
    {q:"The temperature was −2°C and rose 7°C. What is it now?",o:["5°C","−5°C","9°C","−9°C"],a:0,why:"Start at −2 and move up 7: −2 + 7 = 5°C."},
    {q:"Order smallest first: −3, 1, −5",o:["−5, −3, 1","−3, −5, 1","1, −3, −5","−5, 1, −3"],a:0,why:"On a number line the farther left is smaller: −5 < −3 < 1."},
    {q:"You owe $8, then pay back $3. How much do you still owe?  (−8 + 3)",o:["−5 (owe $5)","−11 (owe $11)","5 (have $5)","−24"],a:0,why:"−8 + 3 = −5, so you still owe $5."},
    {q:"What is the opposite of 12?",o:["−12","12","1/12","0"],a:0,why:"The opposite is the same distance from 0 on the other side: −12."}
   ]},

  {id:"g6u3",name:"Expressions & Equations",icon:"🟰",code:"6.EE",accent:"#fb7185",
   sections:[
    {title:"Expressions & Variables",iv:null,
     teach:`<p>A <b>variable</b> is a letter that stands in for a number we don't know yet — often x or n. An <b>expression</b> mixes numbers, variables, and operations, like <b>3x + 2</b>. An expression has no equals sign; it's a value waiting to be figured out.</p>
       <p>To <b>evaluate</b> an expression, replace the variable with a number and do the math, following the order of operations. If x = 4, then 3x + 2 = 3(4) + 2 = 12 + 2 = <b>14</b>. Notice 3x means "3 times x".</p>
       <p>Variables let us describe patterns and rules that work for <i>any</i> number — a huge idea that powers all of algebra.</p>
       <div class="reallife"><b>Real life:</b> expressions describe rules like "total cost = 3 × (number of tickets) + 2 booking fee".</div>
       <div class="watchout"><b>Watch out:</b> multiply before you add. In 3x + 2 with x = 4, do 3 × 4 first (12), THEN add 2 → 14, not 3 × 6.</div>
       <div class="keybox">To evaluate: substitute the number for the variable, then follow the order of operations.</div>`,
     examples:[
      {title:"Evaluate 2n + 5 when n = 3",steps:["Replace n with 3: 2(3) + 5.","Multiply first: 6 + 5.","= 11."]},
      {title:"Evaluate 4x when x = 5",steps:["4x means 4 times x.","Replace x with 5: 4 × 5.","= 20."]},
      {title:"Evaluate 3x + 1 when x = 4",steps:["Replace x with 4: 3(4) + 1.","Multiply first: 12 + 1.","= 13."]}
     ],
     quiz:[
      {q:"Evaluate 4x when x = 5:",o:["20","9","45","1"],a:0,why:"4 × 5 = 20."},
      {q:"Evaluate x + 7 when x = 6:",o:["13","1","42","76"],a:0,why:"6 + 7 = 13."},
      {q:"In 5y, the y is a:",o:["variable","constant","operation","answer"],a:0,why:"A variable."}
     ]},
    {title:"Solving One-Step Equations",iv:"balance",
     teach:`<p>An <b>equation</b> says two things are equal, and it has an equals sign — like x + 5 = 12. Think of it as a <b>balance scale</b>: whatever you do to one side, you must do to the other to keep it balanced.</p>
       <p>To solve, get the variable alone by doing the <b>opposite operation</b>. In x + 5 = 12, the 5 is added, so subtract 5 from <b>both</b> sides: x = 7. In 3x = 18, the x is multiplied by 3, so divide both sides by 3: x = 6.</p>
       <p>Always <b>check</b> your answer by putting it back into the original equation — it's the easiest way to catch a mistake.</p>
       <div class="reallife"><b>Real life:</b> equations solve "I spent $5 and have $7 left — how much did I start with?" (x − 5 = 7).</div>
       <div class="watchout"><b>Watch out:</b> do the SAME thing to both sides. Subtracting from just one side breaks the balance.</div>
       <div class="keybox">Undo with the opposite operation, and do it to both sides. Add ↔ subtract, multiply ↔ divide.</div>`,
     examples:[
      {title:"Solve x + 4 = 10",steps:["4 is added to x, so subtract 4 from both sides.","x = 10 − 4.","x = 6. Check: 6 + 4 = 10 ✓"]},
      {title:"Solve 3x = 18",steps:["x is multiplied by 3, so divide both sides by 3.","x = 18 ÷ 3.","x = 6. Check: 3 × 6 = 18 ✓"]},
      {title:"Solve x − 3 = 8",steps:["3 is subtracted from x, so add 3 to both sides.","x = 8 + 3.","x = 11. Check: 11 − 3 = 8 ✓"]}
     ],
     quiz:[
      {q:"Solve x + 4 = 10:",o:["x=6","x=14","x=4","x=40"],a:0,why:"Subtract 4 → 6."},
      {q:"Solve 5x = 20:",o:["x=4","x=15","x=25","x=100"],a:0,why:"Divide by 5 → 4."},
      {q:"Solve x − 3 = 8:",o:["x=11","x=5","x=24","x=3"],a:0,why:"Add 3 → 11."}
     ]}
   ],
   test:[
    {q:"Evaluate 3x + 1 when x = 4:",o:["13","12","7","31"],a:0,why:"Multiply first: 3 × 4 = 12, then add 1 = 13."},
    {q:"Maya had some stickers and got 9 more, giving 15. Solve x + 9 = 15:",o:["x=6","x=24","x=9","x=6.5"],a:0,why:"Subtract 9 from both sides: x = 15 − 9 = 6."},
    {q:"6 equal boxes weigh 30 kg total. Solve 6x = 30 for one box:",o:["x=5","x=24","x=36","x=180"],a:0,why:"Divide both sides by 6: x = 30 ÷ 6 = 5 kg."},
    {q:"Solve x − 7 = 2:",o:["x=9","x=5","x=14","x=−5"],a:0,why:"Add 7 to both sides: x = 2 + 7 = 9."},
    {q:"Evaluate 2n − 3 when n = 5:",o:["7","13","10","25"],a:0,why:"Multiply first: 2 × 5 = 10, then subtract 3 = 7."},
    {q:"A taxi costs 3m + 2 dollars for m miles. What does a 4-mile ride cost?",o:["$14","$20","$9","$24"],a:0,why:"3 × 4 = 12, then + 2 = $14."}
   ]},

  {id:"g6u4",name:"Area, Surface Area & Volume",icon:"📐",code:"6.G",accent:"#f59e0b",
   sections:[
    {title:"Area of Triangles",iv:"triangle",
     teach:`<p>A triangle is exactly <b>half</b> of a rectangle that has the same base and height. If you draw a rectangle and cut it corner to corner, you get two equal triangles.</p>
       <p>That's why the area of a triangle is <b>½ × base × height</b>. For a triangle with base 8 and height 4: ½ × 8 × 4 = ½ × 32 = <b>16</b> square units. The height must be the straight-up distance from the base to the top point (not a slanted side).</p>
       <p>A neat shortcut: multiply base × height first, then take half — or halve one of them first, whichever is easier.</p>
       <div class="reallife"><b>Real life:</b> triangle area shows up in ramps, roofs, sails, and slices of pie.</div>
       <div class="watchout"><b>Watch out:</b> don't forget the ½! base × height alone gives the whole rectangle, which is double the triangle.</div>
       <div class="keybox">Triangle area = ½ × base × height. (Half of the matching rectangle.)</div>`,
     examples:[
      {title:"Area, base 10, height 6",steps:["Use ½ × base × height.","= ½ × 10 × 6 = ½ × 60.","= 30 square units."]},
      {title:"Area, base 6, height 4",steps:["½ × 6 × 4.","6 × 4 = 24, then half of 24.","= 12 square units."]},
      {title:"Area, base 8, height 5",steps:["½ × 8 × 5.","8 × 5 = 40, then half of 40.","= 20 square units."]}
     ],
     quiz:[
      {q:"Triangle area, base 6 height 4:",o:["12","24","10","20"],a:0,why:"½ × 6 × 4 = 12."},
      {q:"Triangle area, base 10 height 2:",o:["10","20","12","5"],a:0,why:"½ × 10 × 2 = 10."},
      {q:"A triangle is what fraction of a rectangle?",o:["1/2","1/4","1/3","whole"],a:0,why:"Half."}
     ]},
    {title:"Volume & Nets",iv:"box",
     teach:`<p>Just like in Grade 5, the <b>volume</b> of a box is <b>length × width × height</b> — the space inside, in cubic units.</p>
       <p>A <b>net</b> is what you get if you unfold a 3-D shape flat, like flattening a cardboard box. The net shows every face, so adding up the areas of all the faces gives the <b>surface area</b> (the total outside covering). For a box, surface area = 2(lw + lh + wh) — front/back, top/bottom, and two sides.</p>
       <p>Volume and surface area answer different questions: volume is how much fits <i>inside</i>, surface area is how much wrapping paper covers the <i>outside</i>.</p>
       <div class="reallife"><b>Real life:</b> volume tells you how much a box holds; surface area tells you how much cardboard or paint the outside needs.</div>
       <div class="watchout"><b>Watch out:</b> volume is cubic units, surface area is square units. Don't mix them up.</div>
       <div class="keybox">Volume = l × w × h (inside space). Surface area = add up all the faces (the outside).</div>`,
     examples:[
      {title:"Volume of a 3 × 2 × 5 box",steps:["Multiply length × width: 3 × 2 = 6.","Multiply by height: 6 × 5.","= 30 cubic units."]},
      {title:"Surface area of a 2 × 2 × 2 cube",steps:["A cube has 6 equal faces.","Each face is 2 × 2 = 4 square units.","6 × 4 = 24 square units."]},
      {title:"Volume of a 2 × 3 × 3 box",steps:["2 × 3 = 6 for the bottom layer.","× 3 for the height: 6 × 3.","= 18 cubic units."]}
     ],
     quiz:[
      {q:"Volume of a 2×3×3 box:",o:["18","8","12","27"],a:0,why:"2×3×3 = 18."},
      {q:"Surface area of a 2×2×2 cube:",o:["24","8","12","16"],a:0,why:"6 faces × 4 = 24."},
      {q:"A net folds up into a:",o:["3-D solid","circle","line","point"],a:0,why:"A 3-D shape."}
     ]}
   ],
   test:[
    {q:"A triangular flag has base 8 and height 5. Its area is:",o:["20","40","13","16"],a:0,why:"Area = ½ × base × height = ½ × 8 × 5 = 20."},
    {q:"Triangle area, base 12 height 4:",o:["24","48","16","6"],a:0,why:"½ × 12 × 4 = ½ × 48 = 24."},
    {q:"Volume of a 4×2×2 box:",o:["16","8","10","32"],a:0,why:"Volume = 4 × 2 × 2 = 16 cubic units."},
    {q:"Surface area of a 1×1×1 cube:",o:["6","1","3","4"],a:0,why:"A cube has 6 faces, each 1 × 1 = 1, so 6 × 1 = 6."},
    {q:"A triangle has area 30 and base 10. What is its height?",o:["6","3","20","300"],a:0,why:"Area = ½ × b × h → 30 = ½ × 10 × h = 5h, so h = 6."},
    {q:"Surface area of a 2×3×1 box:",o:["22","6","11","12"],a:0,why:"2(lw + lh + wh) = 2(6 + 2 + 3) = 2 × 11 = 22."}
   ]},

  {id:"g6u5",name:"Data & Statistics",icon:"📊",code:"6.SP",accent:"#38bdf8",
   sections:[
    {title:"Mean & Median",iv:"dotplot",
     teach:`<p>When you have a bunch of numbers (a data set), two useful ways to describe the "middle" are the mean and the median.</p>
       <p>The <b>mean</b> is the average: add all the values, then divide by how many there are. For 2, 4, 6: the sum is 12, and there are 3 numbers, so the mean is 12 ÷ 3 = <b>4</b>. The <b>median</b> is the <b>middle value</b> when you line the numbers up in order. For 2, 4, 6 the middle one is <b>4</b>.</p>
       <p>Mean and median can be different! One very large value can pull the mean up, while the median stays put — that's why both are useful.</p>
       <div class="reallife"><b>Real life:</b> report cards use the mean of your scores; home prices are often reported as a median.</div>
       <div class="watchout"><b>Watch out:</b> for the median, put the numbers in order FIRST. The middle of an unsorted list isn't the median.</div>
       <div class="keybox">Mean = (add them all) ÷ (how many). Median = the middle value when sorted.</div>`,
     examples:[
      {title:"Mean of 3, 5, 7, 5",steps:["Add them up: 3 + 5 + 7 + 5 = 20.","Count how many: 4 numbers.","20 ÷ 4 = 5. The mean is 5."]},
      {title:"Median of 1, 3, 9",steps:["Put them in order: 1, 3, 9 (already sorted).","Find the middle one.","The median is 3."]},
      {title:"Median of 8, 2, 5",steps:["Sort them first: 2, 5, 8.","The middle value is 5.","So the median is 5 (not 8, which was first before sorting)."]}
     ],
     quiz:[
      {q:"Mean of 4, 6, 8:",o:["6","18","4","8"],a:0,why:"18 ÷ 3 = 6."},
      {q:"Median of 1, 3, 9:",o:["3","4.3","9","1"],a:0,why:"Middle value = 3."},
      {q:"The mean is the:",o:["average","biggest","middle","smallest"],a:0,why:"Average."}
     ]},
    {title:"Spread of Data",iv:"dotplot",
     teach:`<p>Besides the middle, it's helpful to know how <b>spread out</b> the data is. The <b>range</b> measures this: it's the biggest value minus the smallest value.</p>
       <p>For the data 3, 5, 9: the range is 9 − 3 = <b>6</b>. A big range means the data is very spread out; a small range means the values are close together. A <b>dot plot</b> stacks a dot for each value, so you can spot clusters and gaps at a glance.</p>
       <p>Range and center work as a team: the center tells you the "typical" value, and the range tells you how much the values vary around it.</p>
       <div class="reallife"><b>Real life:</b> range shows the spread of daily temperatures, test scores, or prices.</div>
       <div class="watchout"><b>Watch out:</b> range is a single number (biggest − smallest), not the two end values written together.</div>
       <div class="keybox">Range = biggest − smallest. A dot plot stacks a dot for each value so you can see the shape of the data.</div>`,
     examples:[
      {title:"Range of 4, 10, 6, 2",steps:["Find the biggest value: 10.","Find the smallest value: 2.","Range = 10 − 2 = 8."]},
      {title:"Range of 2, 7, 5",steps:["Biggest is 7, smallest is 2.","Subtract: 7 − 2.","Range = 5."]},
      {title:"Range of 10, 4, 8",steps:["Biggest is 10, smallest is 4.","10 − 4.","Range = 6."]}
     ],
     quiz:[
      {q:"Range of 2, 7, 5:",o:["5","7","2","12"],a:0,why:"7 − 2 = 5."},
      {q:"Range of 10, 4, 8:",o:["6","10","4","14"],a:0,why:"10 − 4 = 6."},
      {q:"A dot plot shows:",o:["how often values appear","only the mean","angles","area"],a:0,why:"Frequency of each value."}
     ]}
   ],
   test:[
    {q:"Test scores were 2, 4, 6, 8. What is the mean?",o:["5","20","4","6"],a:0,why:"Add them: 2+4+6+8 = 20; divide by 4 → mean 5."},
    {q:"Median of 2, 5, 11:",o:["5","6","11","2"],a:0,why:"Already in order; the middle value is 5."},
    {q:"Temperatures ranged from 3° to 12°. What is the range?",o:["9","12","3","15"],a:0,why:"Range = biggest − smallest = 12 − 3 = 9."},
    {q:"Mean of 10 and 20:",o:["15","30","10","200"],a:0,why:"Add: 10 + 20 = 30; divide by 2 → mean 15."},
    {q:"Median of 7, 2, 9, 4 (sort first!):",o:["5.5","4","9","7"],a:0,why:"Sorted: 2, 4, 7, 9. With 4 numbers, average the middle two: (4+7)/2 = 5.5."},
    {q:"5 kids scored a mean of 8 points. What was their TOTAL?",o:["40","13","8","1.6"],a:0,why:"Total = mean × how many = 8 × 5 = 40."}
   ]},
 ],
 finalTest:[
  {q:"Simplify the ratio 12:8:",o:["3:2","2:3","12:8 only","4:2"],a:0,why:"÷4 → 3:2."},
  {q:"1/2 ÷ 1/8 =",o:["4","1/16","1/4","16"],a:0,why:"1/2 × 8 = 4."},
  {q:"The temperature was −6° and rose 10°. Now it is:",o:["4°","−4°","16°","−16°"],a:0,why:"−6 + 10 = 4."},
  {q:"Solve 4x = 24:",o:["x=6","x=20","x=28","x=96"],a:0,why:"24 ÷ 4 = 6."},
  {q:"Triangle area, base 6 height 6:",o:["18","36","12","24"],a:0,why:"½ × 6 × 6 = 18."},
  {q:"Mean of 5, 10, 15:",o:["10","30","5","15"],a:0,why:"30 ÷ 3 = 10."}
 ]
}

};

