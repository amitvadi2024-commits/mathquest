/* ==========================================================================
   MathQuest content — Grades 4-6 (Common Core aligned)
   Section = { title, teach(html: paragraphs + reallife + watchout + keybox),
     iv(key|null), examples:[ {title, steps:[...]} x3 ], quiz:[{q,o,a,why}] }
   Interactive visuals (iv keys) defined in app.js -> IV{}.
========================================================================== */
const GRADES = {

/* =========================== GRADE 4 =========================== */
g4:{ name:"Grade 4", short:"G4", emoji:"🌱", accent:"#22c55e",
 color:"#0ea5a4",
 blurb:"Place value, multiplication, fractions, decimals & geometry.",
 placement:[
  {q:"What is the value of the 7 in 4,782?",o:["7","70","700","7,000"],a:2,u:0,why:"The 7 sits in the hundreds place, so its value is 7 × 100 = 700."},
  {q:"Which shows 3,205 in expanded form?",o:["3,000 + 200 + 5","3,000 + 20 + 5","300 + 20 + 5","3,000 + 205"],a:0,u:0,why:"3 thousands + 2 hundreds + 0 tens + 5 ones = 3,000 + 200 + 5."},
  {q:"Estimate 512 + 289 by rounding each to the nearest hundred:",o:["800","700","900","801"],a:0,u:1,why:"512 → 500 and 289 → 300; 500 + 300 = 800."},
  {q:"3,456 + 2,178 =",o:["5,634","5,624","5,534","6,634"],a:0,u:1,why:"Line up by place value and add, regrouping: 3,456 + 2,178 = 5,634."},
  {q:"6 × 8 =",o:["42","48","54","56"],a:1,u:2,why:"6 groups of 8 make 48."},
  {q:"24 × 30 =",vis:{type:'area',a:24,b:30},o:["720","72","540","270"],a:0,u:3,why:"24 × 3 tens = 72 tens = 720."},
  {q:"27 ÷ 4 =",o:["6 r3","7 r1","5 r7","6 r1"],a:0,u:4,why:"4 × 6 = 24, and 27 − 24 = 3 left over, so 6 remainder 3."},
  {q:"Which number is a factor of 12?",o:["4","5","7","8"],a:0,u:5,why:"12 ÷ 4 = 3, so 4 is a factor of 12."},
  {q:"Which fraction equals 1/2?",o:["2/4","1/3","3/4","2/5"],a:0,u:6,why:"Multiply the top and bottom of 1/2 by 2 to get 2/4."},
  {q:"2/6 + 3/6 =",vis:{type:'fbar',n:2,d:6,n2:3,d2:6},o:["5/6","5/12","6/6","1/6"],a:0,u:6,why:"Same bottom, so add the tops: 2 + 3 = 5, keep the 6 → 5/6."},
  {q:"3/8 + 2/8 =",vis:{type:'fbar',n:3,d:8,n2:2,d2:8},o:["5/8","5/16","1/8","6/8"],a:0,u:7,why:"Same denominator, so add the tops: 3 + 2 = 5 → 5/8."},
  {q:"4 × 2/3 =",o:["8/3","8/12","6/3","2/12"],a:0,u:8,why:"Multiply the numerator by 4 and keep the denominator: 4 × 2 = 8 → 8/3."},
  {q:"Write 0.3 as a fraction:",o:["3/10","3/100","1/3","30"],a:0,u:9,why:"0.3 is three tenths, which is 3/10."},
  {q:"Which is bigger, 0.5 or 0.45?",o:["0.5","0.45","equal","can't tell"],a:0,u:9,why:"Rewrite 0.5 as 0.50; then 50 hundredths is more than 45 hundredths."},
  {q:"1 foot = ___ inches",o:["12","10","3","16"],a:0,u:10,why:"1 foot = 12 inches."},
  {q:"Perimeter of a 5 by 3 rectangle:",vis:{type:'arect',l:5,w:3},o:["15","16","8","30"],a:1,u:11,why:"Add all four sides: 5 + 3 + 5 + 3 = 16."},
  {q:"A right angle measures:",vis:{type:'angle',deg:90},o:["45°","90°","180°","360°"],a:1,u:12,why:"A right angle is exactly 90° — a square corner."},
  {q:"How many lines of symmetry does a square have?",vis:{type:'sym',shape:'square',showLines:false},o:["4","2","1","0"],a:0,u:13,why:"A square folds into matching halves 4 ways: vertical, horizontal, and both diagonals."}
 ],
 units:[
  {id:"g4u1",name:"Place Value & Big Numbers",icon:"🔢",code:"4.NBT",accent:"#22c55e",
   sections:[
    {title:"Place Value to Thousands",iv:["placevalue","blocks"],
     teach:`<p>Numbers are built out of digits — the symbols 0, 1, 2, 3, 4, 5, 6, 7, 8, and 9. But a digit by itself doesn't tell the whole story. The digit <b>4</b> can mean four, or forty, or four hundred, or four thousand. What decides its meaning? Its <b>place</b>. In this lesson we'll learn how the position of a digit gives it its value, and why that idea is the foundation of every number you'll ever write.</p>

       <h4 class="ls-sub">Every digit has a place</h4>
       <p>Reading a number from right to left, the places have names: <b>ones</b>, then <b>tens</b>, then <b>hundreds</b>, then <b>thousands</b>. Let's break apart the number <b>3,482</b> and look at what each digit is really worth:</p>
       <div class="pv-chart">
         <div class="pv-col"><span class="pv-place">thousands</span><span class="pv-digit">3</span><span class="pv-val">3,000</span></div>
         <div class="pv-col"><span class="pv-place">hundreds</span><span class="pv-digit">4</span><span class="pv-val">400</span></div>
         <div class="pv-col"><span class="pv-place">tens</span><span class="pv-digit">8</span><span class="pv-val">80</span></div>
         <div class="pv-col"><span class="pv-place">ones</span><span class="pv-digit">2</span><span class="pv-val">2</span></div>
       </div>
       <p>The 2 really means 2, but the 8 doesn't mean eight — it means eight <i>tens</i>, or 80. The 4 means four <i>hundreds</i>, 400, and the 3 means three <i>thousands</i>, 3,000. So a digit's value is always the digit <b>times</b> the value of its place. A chart that lays this out is called a <b>place value chart</b>.</p>

       <h4 class="ls-sub">Modeling with base-ten blocks</h4>
       <p>Another great way to <i>see</i> place value is with <b>base-ten blocks</b>. A small square is a <b>one</b>, a rod of ten small squares is a <b>ten</b> (10), a flat 10×10 square is a <b>hundred</b> (100), and a big cube is a <b>thousand</b> (1,000). To build <b>1,275</b> you grab 1 big cube, 2 flats, 7 rods, and 5 small squares. Count the blocks in each group and you get the digits: 1 · 2 · 7 · 5. Try the block builder below to model any number!</p>

       <h4 class="ls-sub">Big numbers come in "periods"</h4>
       <p>Once numbers get large, we group the places into chunks of three called <b>periods</b>, and separate the periods with <b>commas</b>. Reading right to left, the first period is the <b>ones period</b> (ones, tens, hundreds) and the next is the <b>thousands period</b> (thousands, ten-thousands, hundred-thousands). Look at <b>428,562</b> split into its two periods:</p>
       <div class="pv-chart">
         <div class="pv-col" style="min-width:150px"><span class="pv-place">thousands period</span><span class="pv-digit">428</span><span class="pv-val">hundred-, ten-, one-thousands</span></div>
         <div class="pv-col" style="min-width:150px"><span class="pv-place">ones period</span><span class="pv-digit">562</span><span class="pv-val">hundreds, tens, ones</span></div>
       </div>
       <p>The comma is your friend: it lets you read a giant number by reading each period, then saying its name. So 428,562 reads as "four hundred twenty-eight <i>thousand</i>, five hundred sixty-two."</p>

       <h4 class="ls-sub">Expanded form: taking a number apart</h4>
       <p>When we write a number as the sum of what each digit is worth, we call it <b>expanded form</b>. For 3,482 that looks like:</p>
       <p style="text-align:center;font-size:1.1rem"><b>3,482 = 3,000 + 400 + 80 + 2</b></p>
       <p>Expanded form is powerful because it lets you <i>see</i> the value hiding inside each digit. Let's try one more together. Take <b>2,905</b>. The 2 is in the thousands place (2,000), the 9 is in the hundreds place (900), the tens place has a 0 (so, nothing there — 0), and the 5 is in the ones place (5). Put it together: 2,905 = 2,000 + 900 + 0 + 5, or simply 2,000 + 900 + 5. That 0 is important — it's a <b>placeholder</b> that keeps the 2 and the 9 in their correct, larger places.</p>

       <h4 class="ls-sub">The times-ten pattern</h4>
       <p>Here's the beautiful pattern that makes the whole system work: each place is worth <b>10 times</b> the place to its right. Ones → tens is ×10 (1 becomes 10). Tens → hundreds is ×10 again (10 becomes 100). Hundreds → thousands is ×10 once more (100 becomes 1,000). That's why our number system is called "base ten" — you can build any number, no matter how giant, just by grouping in tens.</p>
       <p>This leads to a neat fact you'll be asked about a lot: <b>the same digit is worth 10 times as much each place you move it left.</b> In <b>44</b>, the left 4 (4 tens = 40) is worth 10 times the right 4 (4 ones = 4). In <b>770</b>, the 7 in the hundreds place (700) is worth 10 times the 7 in the tens place (70).</p>
       <div class="reallife"><b>Real life:</b> place value is how we read prices, populations, sports scores, and distances. The 7 in a $7,000 car means something very different from the 7 in a $7 sandwich — same digit, totally different place, totally different value.</div>
       <div class="watchout"><b>Common mistake:</b> reading a digit as just itself. In 3,482 the 4 is <i>not</i> worth 4 — it sits in the hundreds place, so it's worth 400. Always ask "which place is it in?" before you say the value.</div>
       <div class="watchout"><b>Another common mistake:</b> dropping a zero. In 2,905 you can't just write 2,95 — the 0 holds the tens place open so the 9 stays in the hundreds. Every place needs a digit, even if that digit is 0.</div>

       <h4 class="ls-sub">Recap</h4>
       <p>A digit's value depends on its <b>place</b>. Reading right to left the places are ones, tens, hundreds, thousands — and each is 10 times bigger than the one before. <b>Expanded form</b> shows the value of each digit added together, and <b>0</b> is a placeholder that keeps the other digits in their proper places.</p>
       <div class="keybox">A digit's value = the digit <b>×</b> its place. So the 4 in 3,<b>4</b>82 is worth 4 × 100 = <b>400</b>.</div>`,
     examples:[
      {title:"Find the value of a digit",steps:["Look at 5,297. What is the 2 worth?","Count the places from the right: ones, tens, hundreds — the 2 is in the hundreds place.","Value = 2 × 100 = 200."]},
      {title:"Build a number from words",steps:["'Three thousand, sixty' — start with the thousands: 3,000.","Sixty is 6 tens = 60. There are no hundreds, so put a 0 in that place.","Put it together: 3,060."]},
      {title:"Write 2,905 in expanded form",steps:["2 thousands = 2,000; 9 hundreds = 900.","0 tens = 0 (nothing there); 5 ones = 5.","So 2,905 = 2,000 + 900 + 5."]},
      {title:"Read 152,847 using its periods",steps:["Split at the comma into two periods: 152 and 847.","Read the thousands period, then add its name: 'one hundred fifty-two thousand'.","Read the ones period: 'eight hundred forty-seven'. Together: one hundred fifty-two thousand, eight hundred forty-seven."]},
      {title:"Model 1,275 with base-ten blocks",steps:["1,275 = 1 thousand, 2 hundreds, 7 tens, 5 ones.","Grab 1 big cube (1,000), 2 flats (200), 7 rods (70), and 5 small squares (5).","Count each group: 1 · 2 · 7 · 5 → that's 1,275."]}
     ],
     quiz:[
      {q:"What number do these base-ten blocks show?",vis:1243,o:["1,243","1,234","1,423","1,244"],a:0,why:"1 big cube = 1,000, 2 flats = 200, 4 rods = 40, 3 ones = 3 → 1,243."},
      {q:"What number do these base-ten blocks show?",vis:1305,o:["1,305","1,350","1,035","135"],a:0,why:"1 thousand, 3 hundreds, 0 tens, 5 ones → 1,305 (the tens place is empty)."},
      {q:"What is the value of the 5 in 359,842?",o:["50,000","5,000","500,000","5"],a:0,why:"The 5 is in the ten-thousands place, so it's worth 5 × 10,000 = 50,000."},
      {q:"Which number has 8 in the tens place?",o:["8,000","480","818","208"],a:1,why:"In 480 the 8 is in the tens place (worth 80)."},
      {q:"In 93,825, how many periods does the number have?",o:["2","1","3","5"],a:0,why:"825 is the ones period and 93 is the thousands period — two periods, split by the comma."},
      {q:"The value of a 7 in the hundreds place is ___ the value of a 7 in the tens place.",o:["10 times as much","the same as","1/10 as much as","7 times as much"],a:0,why:"Each place to the left is worth 10 times the place to its right (700 is 10 × 70)."},
      {q:"In 2,905, why does the 0 matter?",o:["It holds the tens place so the 9 stays in the hundreds","It makes the number bigger","It can be removed","It means the number is ten"],a:0,why:"0 is a placeholder — without it the 9 and 2 would slide into the wrong (smaller) places."},
      {q:"What is the value of the 4 in 748,612?",o:["40,000","4,000","400,000","4"],a:0,why:"The 4 is in the ten-thousands place → 4 × 10,000 = 40,000."},
      {q:"In 550, the 5 in the hundreds place is worth how many times the 5 in the tens place?",o:["10","5","100","2"],a:0,why:"500 is 10 times 50 — each place left is worth 10 times the one on its right."},
      {q:"Which number has a 3 worth 30,000?",o:["638,000","3,842","300,000","93,000"],a:0,why:"In 638,000 the 3 sits in the ten-thousands place, so it's worth 30,000."},
      {q:"Using the digits 6, 1, 3, 8, 9, 5 once each, the GREATEST six-digit number is:",o:["986,531","135,689","968,531","986,513"],a:0,why:"Put the biggest digits in the biggest places: 9, 8, 6, 5, 3, 1 → 986,531."},
      {q:"In 93,825, is the ten-thousands 9 worth exactly 10 times the thousands 3?",o:["No — 90,000 is 30 times 3,000","Yes, always exactly 10 times","No, it is 100 times","Yes, 10 times because of the places"],a:0,why:"The '10 times' rule compares the SAME digit. Here the digits differ (9 vs 3): 90,000 is 30 times 3,000."},
      {q:"What number do these base-ten blocks show?",vis:2106,o:["2,106","2,160","2,016","216"],a:0,why:"2 thousands, 1 hundred, 0 tens, 6 ones → 2,106 (the tens place is empty)."},
      {q:"In the place value chart, what is the value of the 8?",vis:{type:"chart",n:381045},o:["80,000","8,000","800,000","8"],a:0,why:"The 8 sits in the ten-thousands column → 8 × 10,000 = 80,000."},
      {q:"What number do these base-ten blocks show?",vis:3204,o:["3,204","3,240","3,024","324"],a:0,why:"3 thousands, 2 hundreds, 0 tens, 4 ones → 3,204."},
      {q:"In the place value chart, what is the value of the 6?",vis:{type:"chart",n:462803},o:["60,000","6,000","600,000","6"],a:0,why:"The 6 is in the ten-thousands column → 60,000."},
      {q:"What number do these base-ten blocks show?",vis:1052,o:["1,052","1,520","1,502","152"],a:0,why:"1 thousand, 0 hundreds, 5 tens, 2 ones → 1,052."}
     ]},
    {title:"Read & Write Numbers",iv:["forms","placevalue"],
     teach:`<p>There are three ways to write the same number, and knowing all three makes you a fluent "reader" of numbers. They're called <b>standard form</b>, <b>word form</b>, and <b>expanded form</b> — different outfits for the exact same number.</p>

       <h4 class="ls-sub">Standard form</h4>
       <p><b>Standard form</b> is the normal way you write a number with digits: <b>564,087</b>. This is what you see on price tags, scoreboards, and license plates.</p>

       <h4 class="ls-sub">Word form</h4>
       <p><b>Word form</b> is the number written out in words, exactly how you'd say it out loud. The trick is to read one <b>period</b> at a time and add the period's name. So 564,087 is "<b>five hundred sixty-four thousand, eighty-seven</b>." Notice the word "thousand" after the first period, and a comma in the same spot as the number's comma.</p>
       <p>One writing rule: two-word numbers from twenty-one to ninety-nine get a <b>hyphen</b> — "sixty-four," "eighty-seven."</p>

       <h4 class="ls-sub">Expanded form</h4>
       <p><b>Expanded form</b> breaks the number into the value of each digit added together: <b>564,087 = 500,000 + 60,000 + 4,000 + 80 + 7</b>. Notice there's no term for the hundreds place — because that digit is 0, it contributes nothing, so we just skip it.</p>
       <div class="reallife"><b>Real life:</b> checks use two forms at once — you write the amount in standard form in the box ($1,250) and in word form on the line ("one thousand two hundred fifty").</div>
       <div class="watchout"><b>Common mistake:</b> forgetting the period name in word form. "564,087" is not "five hundred sixty-four, eighty-seven" — you must say "…sixty-four <b>thousand</b>, eighty-seven."</div>
       <div class="watchout"><b>Another common mistake:</b> writing a 0 place in expanded form. A 0 digit is worth nothing, so it's left out of the sum — you don't write "+ 0".</div>

       <h4 class="ls-sub">Recap</h4>
       <p>Every number has three outfits: <b>standard form</b> (digits), <b>word form</b> (words, read period by period), and <b>expanded form</b> (the value of each digit added up). Being able to switch between them means you truly understand the number.</p>
       <div class="keybox">Standard: 564,087 · Word: five hundred sixty-four thousand, eighty-seven · Expanded: 500,000 + 60,000 + 4,000 + 80 + 7.</div>`,
     examples:[
      {title:"Write 38,650 in expanded form",steps:["Name each nonzero digit's value: 3 ten-thousands = 30,000; 8 thousands = 8,000; 6 hundreds = 600; 5 tens = 50.","The ones place is 0, so skip it.","Expanded form: 30,000 + 8,000 + 600 + 50."]},
      {title:"Write the word form of 40,030",steps:["Split into periods: 40 | 030.","Thousands period: 'forty thousand'. Ones period: 'thirty'.","Together: forty thousand, thirty."]},
      {title:"Turn expanded form into standard form",steps:["600,000 + 40,000 + 2,000 + 50.","Fill each place; the hundreds and ones places are missing, so they're 0.","Standard form: 642,050."]},
      {title:"Fill out a check for $1,250",steps:["Standard form goes in the box: $1,250.","Word form goes on the line: 'one thousand two hundred fifty'.","Both show the same amount — that's why a check uses both forms."]}
     ],
     quiz:[
      {q:"Which shows 6,038 in expanded form?",o:["6,000 + 30 + 8","6,000 + 300 + 8","600 + 30 + 8","6,000 + 38"],a:0,why:"6 thousands + 0 hundreds + 3 tens + 8 ones = 6,000 + 30 + 8."},
      {q:"Write 'four thousand sixty' in standard form:",o:["4,060","4,600","460","4,006"],a:0,why:"4 thousands, 0 hundreds, 6 tens, 0 ones → 4,060."},
      {q:"Word form of 40,030 is:",o:["forty thousand, thirty","four thousand, thirty","forty thousand, three hundred","forty-three thousand"],a:0,why:"40 in the thousands period, 030 in the ones period → forty thousand, thirty."},
      {q:"500,000 + 40,000 + 3,000 + 200 + 90 + 8 in standard form:",o:["543,298","54,398","543,908","530,298"],a:0,why:"Fill each place: 5,4,3,2,9,8 → 543,298."},
      {q:"Newton reads 6,500 as 'six thousand five hundred.' Descartes reads it as 'sixty-five hundred.' Who is correct?",o:["Both are correct","Only Newton","Only Descartes","Neither"],a:0,why:"Both name the same value — 6,500 can be read either way."},
      {q:"Which is 305,072 in word form?",o:["three hundred five thousand, seventy-two","three hundred fifty thousand, seventy-two","thirty-five thousand, seventy-two","three hundred five thousand, seven hundred two"],a:0,why:"305 in the thousands period, 072 in the ones period → three hundred five thousand, seventy-two."},
      {q:"Standard form of 'one hundred five thousand, ninety-eight':",o:["105,098","150,098","105,980","100,598"],a:0,why:"105 thousands, then 098 → 105,098 (the 0 holds the hundreds place)."},
      {q:"Expanded form of 93,517:",o:["90,000 + 3,000 + 500 + 10 + 7","9,000 + 3,000 + 500 + 10 + 7","90,000 + 3,000 + 517","93,000 + 500 + 17"],a:0,why:"9 ten-thousands + 3 thousands + 5 hundreds + 1 ten + 7 ones."},
      {q:"Round 348,562 to the nearest ten-thousand, then write it in word form:",o:["three hundred fifty thousand","three hundred forty thousand","thirty-five thousand","three hundred fifty thousand, five hundred"],a:0,why:"Thousands digit 8 ≥ 5, so round up → 350,000 = three hundred fifty thousand."},
      {q:"Which is 610,010 in expanded form?",o:["600,000 + 10,000 + 10","600,000 + 1,000 + 10","61,000 + 10","600,000 + 10,000 + 100"],a:0,why:"6 hundred-thousands + 1 ten-thousand + 1 ten = 600,000 + 10,000 + 10."},
      {q:"Write the number shown by these base-ten blocks in expanded form:",vis:1432,o:["1,000 + 400 + 30 + 2","1,000 + 40 + 30 + 2","1,000 + 400 + 3 + 2","100 + 400 + 30 + 2"],a:0,why:"1 thousand, 4 hundreds, 3 tens, 2 ones → 1,000 + 400 + 30 + 2."},
      {q:"What number (standard form) do these base-ten blocks show?",vis:2530,o:["2,530","2,503","2,350","253"],a:0,why:"2 thousands, 5 hundreds, 3 tens, 0 ones → 2,530."},
      {q:"Which expanded form matches the blocks shown?",vis:3061,o:["3,000 + 60 + 1","3,000 + 600 + 1","300 + 60 + 1","3,000 + 6 + 1"],a:0,why:"3 thousands, 0 hundreds, 6 tens, 1 one → 3,000 + 60 + 1."}
     ]},
    {title:"Compare Numbers",iv:["comparetool","digitbuilder"],
     teach:`<p>Which number is bigger, 27,890 or 27,951? To compare multi-digit numbers you don't guess — you use place value, and you always start from the <b>left</b>.</p>

       <h4 class="ls-sub">Line them up and compare left to right</h4>
       <p>Write the numbers in a place value chart, lined up by place. Then compare digits <b>one place at a time, starting with the biggest place</b>. Keep going until you find the <b>first place where the digits differ</b> — that place decides the winner, and you can stop.</p>
       <p>For 27,890 vs 27,951: ten-thousands match (2 = 2), thousands match (7 = 7), then hundreds differ — 8 vs 9. Since 9 &gt; 8, <b>27,951 is greater</b>. You don't even need to look at the tens or ones.</p>

       <h4 class="ls-sub">A shortcut: count the digits</h4>
       <p>If two numbers have a different number of digits, the one with <b>more digits</b> is automatically bigger (as long as there are no leading zeros). 38,675 has five digits and 9,100 has four, so 38,675 is greater — even though it starts with a smaller digit.</p>

       <h4 class="ls-sub">Comparison symbols</h4>
       <p>We write comparisons with <b>&gt;</b> (greater than), <b>&lt;</b> (less than), and <b>=</b> (equal). A handy memory trick: the symbol is a little mouth that always opens toward the <b>bigger</b> number. So 6,052 &lt; 6,520.</p>
       <div class="reallife"><b>Real life:</b> comparing numbers is how you find the cheaper price, the taller mountain, the bigger city population, or the higher score.</div>
       <div class="watchout"><b>Common mistake:</b> comparing from the right. Always start at the <b>left</b> (the biggest place) — the first place that differs decides everything.</div>
       <div class="watchout"><b>Another common mistake:</b> thinking a number that "looks longer" or starts with a big digit is bigger. Line up the places first; 4 hundreds beats 9 tens.</div>

       <h4 class="ls-sub">Recap</h4>
       <p>To compare, line the numbers up by place and scan from the <b>left</b>. The <b>first place where the digits differ</b> decides which is greater. More digits usually means bigger, and the &gt;/&lt; symbol opens toward the larger number.</p>
       <div class="keybox">Compare left to right; the first differing place wins. 27,890 &lt; 27,951 (8 hundreds &lt; 9 hundreds).</div>`,
     examples:[
      {title:"Compare 8,465 and 8,439",steps:["Thousands match (8 = 8) and hundreds match (4 = 4).","Move to the tens: 6 vs 3. They differ.","6 tens > 3 tens, so 8,465 > 8,439."]},
      {title:"Which is greater, 5,049 or 5,082?",steps:["Thousands match (5), hundreds match (0).","Tens: 4 vs 8 — they differ. 8 > 4.","So 5,082 is greater."]},
      {title:"Order 245,190; 245,140; 254,020 from least to greatest",steps:["254,020 has 5 ten-thousands vs 4 — it's the biggest.","Between 245,190 and 245,140, everything matches until the tens: 9 vs 4, so 245,140 is smaller.","Least to greatest: 245,140; 245,190; 254,020."]},
      {title:"Pick the symbol for 6,052 and 6,520",steps:["Thousands match (6). Hundreds: 0 vs 5 — they differ.","0 hundreds < 5 hundreds, so 6,052 is the smaller number.","Write 6,052 < 6,520 — the < opens toward the bigger number."]}
     ],
     quiz:[
      {q:"Which is greater, 27,890 or 27,951?",o:["27,951","27,890","they are equal","can't tell"],a:0,why:"First differing place is the hundreds: 9 > 8, so 27,951 is greater."},
      {q:"Comparing 8,465 and 8,439, which place decides the answer?",o:["the tens place","the ones place","the hundreds place","the thousands place"],a:0,why:"Thousands and hundreds match; the tens (6 vs 3) are the first to differ."},
      {q:"Which symbol makes it true: 6,052 __ 6,520 ?",o:["<",">","=","+"],a:0,why:"6,052 is less than 6,520 (0 hundreds < 5 hundreds), so use <."},
      {q:"Order least to greatest: 245,190; 245,140; 254,020",o:["245,140; 245,190; 254,020","245,190; 245,140; 254,020","254,020; 245,190; 245,140","245,140; 254,020; 245,190"],a:0,why:"245,140 < 245,190 < 254,020."},
      {q:"Two TVs cost $1,598 and $1,998. Which is the lesser price?",o:["$1,598","$1,998","they cost the same","can't tell"],a:0,why:"Hundreds place: 5 < 9, so $1,598 is less."},
      {q:"Which symbol makes it true: 509,733 __ 500,973 ?",o:[">","<","=","+"],a:0,why:"Thousands place: 9 > 0, so 509,733 is greater. The symbol opens toward the bigger number."},
      {q:"Which number is between 23,489 and 26,472?",o:["25,000","23,000","27,000","26,900"],a:0,why:"25,000 is greater than 23,489 and less than 26,472."},
      {q:"Order from greatest to least: 245,190; 254,020; 245,140",o:["254,020; 245,190; 245,140","245,190; 254,020; 245,140","254,020; 245,140; 245,190","245,140; 245,190; 254,020"],a:0,why:"254,020 is biggest; then 245,190 > 245,140 (9 tens > 4 tens)."},
      {q:"Mount Everest is 29,035 ft and K2 is 28,251 ft. How much TALLER is Everest?",o:["784 ft","1,784 ft","284 ft","874 ft"],a:0,why:"Everest is taller (29 > 28 thousands). Then 29,035 − 28,251 = 784 ft."},
      {q:"Which number rounds to 300,000 at the nearest hundred-thousand?",o:["302,586","368,000","249,600","449,000"],a:0,why:"302,586: the ten-thousands digit 0 is less than 5, so it rounds to 300,000. The others round to 400,000 or 200,000."},
      {q:"Which model shows the greater number, A or B?",vis:{type:"cmp",a:243,b:216},o:["A","B","they are equal","can't tell"],a:0,why:"A shows 243 and B shows 216. 243 > 216 (4 tens beats 1 ten)."},
      {q:"Which model shows the greater number, A or B?",vis:{type:"cmp",a:329,b:352},o:["B","A","they are equal","can't tell"],a:0,why:"A shows 329 and B shows 352. 352 > 329 (5 tens beats 2 tens)."},
      {q:"Which model shows the SMALLER number, A or B?",vis:{type:"cmp",a:418,b:481},o:["A","B","they are equal","can't tell"],a:0,why:"A shows 418 and B shows 481. 418 < 481, so A is smaller."}
     ]},
    {title:"Round Multi-Digit Numbers",iv:"roundline",
     teach:`<p>Rounding replaces a number with a nearby, "rounder" number that's easier to work with — like saying a stadium holds "about 50,000 people" instead of 49,142. You round to a chosen place: the nearest ten, hundred, thousand, ten-thousand, and so on.</p>

       <h4 class="ls-sub">The place-value rule</h4>
       <p>To round, follow three steps. <b>1)</b> Find the <b>rounding place</b> (the place you're rounding to). <b>2)</b> Look at the <b>digit just to its right</b>. If that digit is <b>5 or more</b>, round the rounding digit <b>up</b> by one; if it's <b>less than 5</b>, the rounding digit <b>stays the same</b>. <b>3)</b> Change every digit to the right of the rounding place to <b>0</b>.</p>
       <p>Round <b>214,573</b> to the nearest hundred-thousand. The hundred-thousands digit is 2, and the digit to its right (ten-thousands) is 1. Since 1 &lt; 5, the 2 stays, and everything to the right becomes 0: <b>200,000</b>.</p>

       <h4 class="ls-sub">Why the number line helps</h4>
       <p>Every number sits between two "round" numbers. 4,276 is between 4,000 and 5,000; the halfway point is 4,500. Since 4,276 is to the <i>left</i> of halfway, it's closer to 4,000, so it rounds <b>down</b> to 4,000. That halfway idea is exactly what the "5 or more" rule checks — 5 is the halfway digit.</p>

       <h4 class="ls-sub">Rounding up can cause a chain</h4>
       <p>Sometimes rounding up bumps a 9 to 10 and the carry ripples left. Round <b>5,953</b> to the nearest hundred: the hundreds digit is 9, and the tens digit (5) says round up. 9 becomes 10, which carries — so 5,953 rounds to <b>6,000</b>, not 5,900. Watch for this!</p>
       <div class="reallife"><b>Real life:</b> a car battery might be due at "about 50,000 miles," a furnace reaches "about 2,000°F," and populations are reported rounded. But some things — like an exact census count or a bank balance — need the exact number, not a rounded one.</div>
       <div class="watchout"><b>Common mistake:</b> looking at the wrong digit. You only check the <b>one</b> digit immediately to the right of the rounding place — not the whole number, and not several digits.</div>
       <div class="watchout"><b>Another common mistake:</b> forgetting to zero out. After you decide up or down, every digit to the right of the rounding place must become 0.</div>

       <h4 class="ls-sub">Recap</h4>
       <p>Find the rounding place, peek at the digit just to its right (5+ rounds up, less than 5 stays), then zero out everything to the right. A number line shows the same thing: numbers past the halfway point round up.</p>
       <div class="keybox">Look one digit to the right of the rounding place: 5 or more rounds up, less than 5 stays. Then zero out the rest.</div>`,
     examples:[
      {title:"Round 4,276 to the nearest thousand",steps:["Rounding place = thousands (the 4). Look one right: the hundreds digit is 2.","2 is less than 5, so the 4 stays.","Zero out the rest → 4,000."]},
      {title:"Round 385,617 to the nearest ten-thousand",steps:["Rounding place = ten-thousands (the 8). Look one right: the thousands digit is 5.","5 means round up: 8 becomes 9.","Zero out the rest → 390,000."]},
      {title:"Round 5,953 to the nearest hundred (a carry!)",steps:["Rounding place = hundreds (the 9). Look one right: the tens digit is 5 → round up.","9 + 1 = 10, so it carries: the thousands 5 becomes 6.","Zero out the rest → 6,000."]},
      {title:"Which car needs a battery (~50,000 mi)?",steps:["Round each odometer reading to the nearest ten-thousand.","53,798 → 50,000 (the thousands digit, 3, is less than 5, so round down).","So a car showing 53,798 miles is 'about 50,000' — time for a new battery."]}
     ],
     quiz:[
      {q:"Round 6,251 to the nearest thousand:",o:["6,000","7,000","6,300","6,200"],a:0,why:"Look at the hundreds digit (2). It's less than 5, so the 6 stays → 6,000."},
      {q:"Round 43,976 to the nearest hundred:",o:["44,000","43,900","43,980","44,100"],a:0,why:"Look at the tens digit (7): round up. 9 hundreds → carries → 44,000."},
      {q:"Round 70,628 to the nearest ten thousand:",o:["70,000","80,000","71,000","70,600"],a:0,why:"Look at the thousands digit (0): less than 5, so 7 stays → 70,000."},
      {q:"Round 214,573 to the nearest hundred thousand:",o:["200,000","300,000","210,000","214,000"],a:0,why:"Look at the ten-thousands digit (1): less than 5, so 2 stays → 200,000."},
      {q:"Round 57,496 to the nearest thousand:",o:["57,000","58,000","57,500","60,000"],a:0,why:"Look at the hundreds digit (4): less than 5, so 7 stays → 57,000."},
      {q:"To round 3,641 to the nearest hundred, which digit do you look at?",o:["the tens digit","the ones digit","the hundreds digit","the thousands digit"],a:0,why:"You check the digit just to the RIGHT of the hundreds place — that's the tens digit."},
      {q:"Your friend says 5,953 rounds to 5,053 at the nearest hundred. Correct?",o:["No — it rounds to 6,000","Yes","It rounds to 5,900","It rounds to 5,000"],a:0,why:"Tens digit is 5, so round up. The 9 carries → 6,000."},
      {q:"A battery is due at about 50,000 miles. Which odometer rounds to 50,000 (nearest ten-thousand)?",o:["53,798","44,534","35,961","5,617"],a:0,why:"53,798: thousands digit 3 < 5, so it rounds down to 50,000. The others don't."},
      {q:"Which number, made from the digits 6, 0, 4, 2, 8, rounds to 70,000 at the nearest ten-thousand?",o:["68,420","64,820","62,840","60,248"],a:0,why:"68,420: ten-thousands 6, thousands 8 ≥ 5 → rounds up to 70,000. The others have a thousands digit under 5 → 60,000."},
      {q:"Round Everest (29,035 ft) and K2 (28,251 ft) to the nearest thousand. Which is taller after rounding?",o:["Everest (29,000)","K2 (28,000)","they tie","can't tell"],a:0,why:"29,035 → 29,000 and 28,251 → 28,000, so Everest is still taller."},
      {q:"The number line shows a number. What does it round to at the nearest hundred?",vis:{type:"rl",n:347},o:["300","400","350","340"],a:0,why:"347 is to the left of the halfway point (350), so it rounds down to 300."},
      {q:"The number line shows a number. What does it round to at the nearest hundred?",vis:{type:"rl",n:682},o:["700","600","680","650"],a:0,why:"682 is to the right of the halfway point (650), so it rounds up to 700."},
      {q:"The number line shows a number. What does it round to at the nearest hundred?",vis:{type:"rl",n:550},o:["600","500","550","560"],a:0,why:"550 is exactly at the halfway point, so it rounds up to 600."}
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
      {q:"When a column adds to 10 or more you:",o:["borrow","carry","stop","subtract"],a:1,why:"Carry to the next place."},
      {q:"A team scored 1,240 points, then 985 more. Total?",o:["2,225","2,125","2,235","255"],a:0,why:"1,240 + 985 = 2,225."},
      {q:"Estimate 682 − 419 by rounding to the nearest hundred:",o:["about 300","about 100","about 1,100","about 250"],a:0,why:"700 − 400 = 300, so the answer is close to 300 (exact is 263)."},
      {q:"6,000 − 2,375 =",o:["3,625","3,725","4,375","3,635"],a:0,why:"Borrow across the zeros: 6,000 − 2,375 = 3,625."},
      {q:"A store sold 2,450 tickets Friday and 1,875 Saturday. How many MORE on Friday?",o:["575","4,325","675","525"],a:0,why:"'How many more' means subtract: 2,450 − 1,875 = 575."},
      {q:"A jar had 5,000 beads. You used 1,240, then 985 more. How many are left?",o:["2,775","2,875","3,775","2,225"],a:0,why:"Two steps: 5,000 − 1,240 = 3,760, then 3,760 − 985 = 2,775."},
      {q:"What number do these base-ten blocks show?",vis:1408,o:["1,408","1,480","1,048","148"],a:0,why:"1 thousand, 4 hundreds, 0 tens, 8 ones → 1,408."}
     ]}
   ],
   test:[
    {q:"What is the value of the 5 in 685,726?",o:["5,000","500","50,000","5"],a:0,why:"The 5 is in the thousands place, so it's worth 5 × 1,000 = 5,000."},
    {q:"Write 'four thousand sixty' in digits:",o:["4,060","4,600","460","4,006"],a:0,why:"4 thousands, 0 hundreds, 6 tens, 0 ones → 4,060. The 0 in the hundreds place holds it open."},
    {q:"Which shows 6,038 in expanded form?",o:["6,000 + 30 + 8","6,000 + 300 + 8","600 + 30 + 8","6,000 + 38"],a:0,why:"6 thousands + 0 hundreds + 3 tens + 8 ones = 6,000 + 30 + 8."},
    {q:"Word form of 40,030 is:",o:["forty thousand, thirty","four thousand, thirty","forty thousand, three hundred","forty-three thousand"],a:0,why:"40 in the thousands period and 030 in the ones period → forty thousand, thirty."},
    {q:"Which is greater, 324,581 or 342,581?",o:["342,581","324,581","they are equal","can't tell"],a:0,why:"First differing place is the ten-thousands: 4 > 2, so 342,581 is greater."},
    {q:"The value of the 4 in the hundreds place is ___ the value of the 4 in the tens place.",o:["10 times as much","the same as","1/10 as much as","100 times as much"],a:0,why:"Each place to the left is worth 10 times the place to its right (400 is 10 × 40)."},
    {q:"Saturn is 365,882 km around; Jupiter is 439,264 km around. Which distance is greater?",o:["439,264 km","365,882 km","they are equal","can't tell"],a:0,why:"Hundred-thousands: 4 > 3, so 439,264 is greater."},
    {q:"Newton says 38,675 is less than 9,100 because 3 is less than 9. Is he right?",o:["No — 38,675 is greater (it has more digits)","Yes, he's right","They are equal","Can't tell"],a:0,why:"38,675 has 5 digits and 9,100 has 4, so 38,675 is much greater — you compare place value, not just the first digit."},
    {q:"A stadium had 3,450 fans and 1,275 more arrived. How many now?",o:["4,725","4,625","2,175","4,715"],a:0,why:"3,450 + 1,275 = 4,725."},
    {q:"A shop had 803 apples and sold 259. How many are left?",o:["544","644","554","546"],a:0,why:"803 − 259 = 544 (borrow across the zero: 13−9=4, 9−5=4, 7−2=5)."},
    {q:"Using the digits 6, 1, 3, 8, 9, 5 once each, the greatest number is:",o:["986,531","135,689","968,531","986,513"],a:0,why:"Put the biggest digits in the biggest places → 986,531."},
    {q:"Everest is 29,035 ft and K2 is 28,251 ft. How much taller is Everest?",o:["784 ft","1,784 ft","284 ft","874 ft"],a:0,why:"Compare (Everest is taller), then subtract: 29,035 − 28,251 = 784 ft."},
    {q:"Which number rounds to 5,000 at the nearest thousand?",o:["4,612","4,399","5,501","4,120"],a:0,why:"4,612: hundreds digit 6 ≥ 5 → rounds up to 5,000. The others round to 4,000 or 6,000."},
    {q:"A jar had 5,000 beads. You used 1,240, then 985 more. How many are left?",o:["2,775","2,875","3,775","2,225"],a:0,why:"5,000 − 1,240 − 985 = 2,775 (two steps)."},
    {q:"What number do these base-ten blocks show?",vis:1275,o:["1,275","1,257","1,725","1,270"],a:0,why:"1 thousand, 2 hundreds, 7 tens, 5 ones → 1,275."},
    {q:"Which model shows the greater number, A or B?",vis:{type:"cmp",a:315,b:351},o:["B","A","they are equal","can't tell"],a:0,why:"A shows 315 and B shows 351. 351 > 315."},
    {q:"What number do these base-ten blocks show?",vis:2637,o:["2,637","2,673","2,367","263"],a:0,why:"2 thousands, 6 hundreds, 3 tens, 7 ones → 2,637."},
    {q:"In the place value chart, what is the value of the 9?",vis:{type:"chart",n:293150},o:["90,000","9,000","900,000","9"],a:0,why:"The 9 is in the ten-thousands column → 90,000."}
   ]},

  {id:"g4u2as",name:"Add and Subtract Multi-Digit Numbers",icon:"➕",code:"4.NBT",accent:"#fb923c",
   sections:[
    {title:"Estimate Sums & Differences",iv:"roundline",
     teach:`<p>Sometimes you don't need the <i>exact</i> answer — you just need to know <b>about how much</b>. When a store owner glances at a cart and thinks "that's around $40," or a coach guesses "roughly 1,800 fans came to both games," they're <b>estimating</b>. An <b>estimate</b> is a number that is <b>close to</b> an exact answer, and the fastest way to make one is by <b>rounding</b> first and then adding or subtracting.</p>

       <h4 class="ls-sub">What an estimate is (and isn't)</h4>
       <p>An estimate is <i>not</i> a wrong answer — it's a smart, quick answer that's good enough for the job. If you round both numbers, do the easy math in your head, and land near the true total, you've estimated well. The trade-off is simple: an estimate is faster but a little less precise than the exact calculation.</p>

       <h4 class="ls-sub">Estimating a sum</h4>
       <p>To estimate <b>476 + 318</b>, round each addend to the <b>same place</b> — here, the nearest hundred. 476 rounds up to <b>500</b>, and 318 rounds down to <b>300</b>. Now add the friendly numbers: 500 + 300 = <b>800</b>. So 476 + 318 is <i>about</i> 800. (The exact answer is 794 — nice and close!)</p>

       <h4 class="ls-sub">Estimating a difference</h4>
       <p>Estimating a difference works the same way. For <b>8,127 − 2,890</b>, round to the nearest thousand: 8,127 → <b>8,000</b> and 2,890 → <b>3,000</b>. Then subtract: 8,000 − 3,000 = <b>5,000</b>. So the difference is about 5,000. Rounding turned a messy subtraction into one you can do in your head.</p>

       <h4 class="ls-sub">Which place should you round to?</h4>
       <p>You get to choose! Rounding to a <b>bigger</b> place (like thousands) is quicker but rougher. Rounding to a <b>smaller</b> place (like tens) takes a little more thought but gives a <b>closer</b> estimate. For 476 + 318, rounding to the nearest ten (480 + 320 = 800) lands even closer to the true 794 than rounding to hundreds would in some problems. Pick the place that gives you the accuracy you need for the situation.</p>

       <h4 class="ls-sub">The best reason to estimate: checking your work</h4>
       <p>Here's where estimation becomes a superpower. After you add or subtract the exact way, make a quick estimate and ask: <b>"Is my answer reasonable?"</b> If you add 2,980 + 4,015 and get <b>15,995</b>, but your estimate is about 3,000 + 4,000 = <b>7,000</b>, something is wrong — 15,995 is nowhere near 7,000, so you should recheck. A good exact answer always lands <i>close</i> to a good estimate.</p>
       <div class="reallife"><b>Real life:</b> shoppers estimate to make sure they have enough money before checkout, and budgets use estimates to see if spending "fits" — like a $1,800 picnic budget checked against about $900 + $900 in costs.</div>
       <div class="watchout"><b>Common mistake:</b> rounding the two numbers to <i>different</i> places. To estimate a sum or difference, round both numbers to the <b>same</b> place value first.</div>
       <div class="watchout"><b>Another common mistake:</b> thinking an estimate must be exactly right. It just needs to be <b>close</b>. Its real job is to tell you the true answer is in the right ballpark.</div>

       <h4 class="ls-sub">Recap</h4>
       <p>To estimate a sum or difference, <b>round each number to the same place</b>, then add or subtract the friendly numbers. Bigger places are quicker; smaller places are closer. Best of all, an estimate lets you check whether an exact answer is <b>reasonable</b>.</p>
       <div class="keybox">Estimate 476 + 318: round to 500 + 300 = <b>800</b>. The exact answer (794) should land close to the estimate.</div>`,
     examples:[
      {title:"Estimate a sum (nearest hundred)",steps:["Estimate 383 + 214.","Round each to the nearest hundred: 383 → 400, 214 → 200.","Add the friendly numbers: 400 + 200 = 600. So 383 + 214 is about 600."]},
      {title:"Estimate a difference (nearest thousand)",steps:["Estimate 6,142 − 2,880.","Round to the nearest thousand: 6,142 → 6,000, 2,880 → 3,000.","Subtract: 6,000 − 3,000 = 3,000. The difference is about 3,000."]},
      {title:"Check if an answer is reasonable",steps:["A student adds 4,120 + 3,890 and writes 80,010.","Estimate: 4,000 + 4,000 = 8,000.","80,010 is far from 8,000, so the answer is unreasonable — recheck. (The true sum is 8,010.)"]},
      {title:"Two-step estimate",steps:["A team scored 917 points, then 872 more. About how many total (nearest hundred)?","Round: 917 → 900, 872 → 900.","900 + 900 = 1,800. They scored about 1,800 points."]}
     ],
     quiz:[
      {q:"An estimate is a number that is...",o:["close to the exact answer","exactly the answer","always larger than the answer","always smaller than the answer"],a:0,why:"An estimate is close to — not exactly — the real value; we make one by rounding."},
      {q:"To estimate a sum by rounding, you should round both numbers to...",o:["the same place value","different places","the nearest ten only","the ones place"],a:0,why:"Round both addends to the same place, then add the friendly numbers."},
      {q:"Estimate 476 + 318 by rounding each to the nearest hundred.",vis:{type:"rl",n:476},o:["800","700","790","900"],a:0,why:"476 → 500, 318 → 300; 500 + 300 = 800."},
      {q:"Estimate 812 − 289 by rounding to the nearest hundred.",vis:{type:"rl",n:289},o:["500","600","520","400"],a:0,why:"812 → 800, 289 → 300; 800 − 300 = 500."},
      {q:"A team had 917 fans at game 1 and 872 at game 2. About how many in all (nearest hundred)?",o:["1,800","1,700","1,900","1,789"],a:0,why:"917 → 900 and 872 → 900; 900 + 900 = 1,800."},
      {q:"You estimate a sum as about 900, but your exact answer is 1,540. What should you do?",o:["Recheck — 1,540 is far from the estimate","Keep it, estimates don't matter","Round again to fix it","Nothing, they must match"],a:0,why:"A reasonable answer lands close to the estimate. 1,540 is far from 900, so recheck the work."},
      {q:"Rounding to the nearest ten instead of the nearest hundred usually gives a ___ estimate.",o:["closer","rougher","larger","smaller"],a:0,why:"A smaller place changes the numbers less, so the estimate is closer to the exact answer."},
      {q:"Estimate 3,214 + 4,879 by rounding to the nearest thousand.",o:["8,000","7,000","9,000","8,093"],a:0,why:"3,214 → 3,000 and 4,879 → 5,000; 3,000 + 5,000 = 8,000."},
      {q:"To the nearest hundred, what does 550 round to?",vis:{type:"rl",n:550},o:["600","500","550","560"],a:0,why:"550 is exactly halfway, so by the rounding rule it rounds up to 600."},
      {q:"A company budgets $1,800 for a picnic and spends $917 and $872. Using estimation, is that within budget?",o:["Yes — about $1,800, and the exact cost ($1,789) is just under","No, it's about $3,000","No, it's about $900","There's no way to tell"],a:0,why:"917 → 900, 872 → 900; about $1,800, right at budget. The exact $1,789 is just under."},
      {q:"If you round BOTH addends UP before adding, your estimate will be...",o:["an overestimate (a bit high)","an underestimate (a bit low)","exactly correct","equal to zero"],a:0,why:"Rounding both numbers up makes the estimate larger than the true sum — an overestimate."},
      {q:"Estimate 4,120 + 3,890 and 5,050 + 2,980 to the nearest thousand. How do the estimates compare?",o:["They are the same (about 8,000)","The first is greater","The second is greater","You can't compare estimates"],a:0,why:"4,000 + 4,000 = 8,000 and 5,000 + 3,000 = 8,000 — both estimate to about 8,000."},
      {q:"About how much is 5,867 − 2,140 (nearest thousand)?",o:["4,000","3,000","5,000","3,727"],a:0,why:"5,867 → 6,000 and 2,140 → 2,000; 6,000 − 2,000 = 4,000."},
      {q:"Ben added 2,980 + 4,015 and got 15,995. His estimate was about 7,000. What should he conclude?",o:["His answer is unreasonable — recheck it","His answer is correct","His estimate is wrong","He should add again the same way"],a:0,why:"The true sum is about 7,000, but 15,995 is far off — the exact answer is unreasonable, so recheck."}
     ]},
    {title:"Add Multi-Digit Numbers",iv:["placevalue","blocks"],
     teach:`<p>Adding big numbers looks harder than adding small ones, but the secret is that it's <b>exactly the same job</b> — you just do it one column at a time. As long as you keep each digit in its correct place, you can add numbers of any size.</p>

       <h4 class="ls-sub">Step 1: Line up by place value</h4>
       <p>The most important move happens before you add anything: <b>stack the numbers so ones sit under ones, tens under tens, hundreds under hundreds</b>, and so on. This is why we say "line up by place value." When the numbers have different lengths, line them up from the <b>right</b> — don't left-align them. To add 403 + 1,248, the 3 and the 8 (the ones) must be in the same column.</p>

       <h4 class="ls-sub">Step 2: Add right to left, and regroup</h4>
       <p>Start at the <b>ones</b> column and work left. Whenever a column adds up to <b>10 or more</b>, you <b>regroup</b> (also called "carrying"): write the ones digit of that total and carry the tens digit to the next column. For example, if the ones add to 13, you write <b>3</b> and carry <b>1</b> ten into the tens column.</p>
       <p>Let's add <b>307,478 + 95,061</b>. Line them up from the right, then add column by column: ones 8+1 = 9; tens 7+6 = 13, write 3 carry 1; hundreds 4+0+1 = 5; thousands 7+5 = 12, write 2 carry 1; ten-thousands 0+9+1 = 10, write 0 carry 1; hundred-thousands 3+1 = 4. The sum is <b>402,539</b>.</p>

       <h4 class="ls-sub">Step 3: Check that the sum is reasonable</h4>
       <p>Before you trust your answer, <b>estimate</b> and compare. For 307,478 + 95,061, round to 307,000 + 95,000 = about <b>402,000</b>. Our exact answer 402,539 is right next to that estimate, so it's reasonable. If the exact answer had come out as, say, 40,253, the estimate would instantly warn you that something went wrong.</p>
       <div class="reallife"><b>Real life:</b> adding multi-digit numbers is how you total prices, add up distances on a road trip, or combine crowd counts from two events.</div>
       <div class="watchout"><b>Common mistake:</b> lining numbers up on the left. Always line up on the <b>right</b> so ones sit under ones — otherwise every column is wrong.</div>
       <div class="watchout"><b>Another common mistake:</b> forgetting to carry. If a column totals 10 or more, the extra ten <b>must</b> move to the next column on the left.</div>

       <h4 class="ls-sub">Recap</h4>
       <p>Line up by place value (from the right), add each column from ones to the left, and regroup whenever a column reaches 10. Then estimate to check that your sum is reasonable.</p>
       <div class="keybox">307,478 + 95,061 = <b>402,539</b>. Check: about 307,000 + 95,000 = 402,000 — close, so it's reasonable.</div>`,
     examples:[
      {title:"Add with regrouping",steps:["Add 3,456 + 2,178.","Ones 6+8 = 14 (write 4, carry 1); tens 5+7+1 = 13 (write 3, carry 1); hundreds 4+1+1 = 6; thousands 3+2 = 5.","The sum is 5,634."]},
      {title:"Add numbers of different lengths",steps:["Add 403 + 1,248. Line up from the right: the 3 and 8 are the ones.","Ones 3+8 = 11 (write 1, carry 1); tens 0+4+1 = 5; hundreds 4+2 = 6; thousands 0+1 = 1.","The sum is 1,651."]},
      {title:"Add and check with an estimate",steps:["Add 12,450 + 9,875.","Add the columns with regrouping → 22,325.","Estimate: 12,000 + 10,000 = 22,000. Since 22,325 is close, the answer is reasonable."]},
      {title:"Add three numbers",steps:["Add 240 + 517 + 133.","Ones 0+7+3 = 10 (write 0, carry 1); tens 4+1+3+1 = 9; hundreds 2+5+1 = 8.","The sum is 890."]}
     ],
     quiz:[
      {q:"To add 403 + 1,248, which digits must line up in the ones column?",o:["3 and 8","4 and 2","0 and 1","3 and 1"],a:0,why:"Line up from the right — the ones are 3 (from 403) and 8 (from 1,248)."},
      {q:"3,456 + 2,178 =",o:["5,634","5,624","5,534","6,634"],a:0,why:"Ones 14 (carry 1), tens 13 (carry 1), hundreds 6, thousands 5 → 5,634."},
      {q:"When a column adds up to 13, you should...",o:["write 3 and carry 1 to the next column","write 13 in that column","carry 3 and write 1","write 4"],a:0,why:"13 is 1 ten and 3 ones: write the 3, carry the 1 ten left."},
      {q:"307,478 + 95,061 =",o:["402,539","402,439","412,539","401,539"],a:0,why:"Add column by column with regrouping → 402,539."},
      {q:"Estimate to check: 12,450 + 9,875 should be about...",o:["22,000","2,200","220,000","12,000"],a:0,why:"12,000 + 10,000 = 22,000, so a reasonable sum is near 22,000 (exactly 22,325)."},
      {q:"A stadium had 34,860 fans on Friday and 28,145 on Saturday. How many in all?",o:["63,005","62,005","63,015","53,005"],a:0,why:"34,860 + 28,145 = 63,005."},
      {q:"240 + 517 + 133 =",o:["890","880","990","870"],a:0,why:"Add all three: ones 10 (carry 1), tens 9, hundreds 8 → 890."},
      {q:"Which is the BEST reason to line numbers up on the right before adding?",o:["So each digit lands in its correct place value","So the numbers look neat","So the answer is smaller","So you can skip regrouping"],a:0,why:"Right-alignment puts ones under ones, tens under tens — every column must match place value."},
      {q:"A library added 4,090 new books to its 15,970. It then added 2,500 more. How many books now?",o:["22,560","20,060","22,660","21,560"],a:0,why:"15,970 + 4,090 + 2,500 = 22,560 (a two-step addition)."},
      {q:"A student adds 5,280 + 3,140 and writes 84,200. What went wrong?",o:["The answer is far from the estimate (about 8,000) — recheck","Nothing, it's correct","The estimate is wrong","They should subtract instead"],a:0,why:"5,000 + 3,000 = 8,000, so a correct sum is near 8,000 (exactly 8,420). 84,200 is unreasonable."},
      {q:"What number do these base-ten blocks show?",vis:2408,o:["2,408","2,480","2,048","248"],a:0,why:"2 thousands, 4 hundreds, 0 tens, 8 ones → 2,408."},
      {q:"46,300 + 27,890 =",o:["74,190","74,090","73,190","74,290"],a:0,why:"Add with regrouping across the thousands and ten-thousands → 74,190."}
     ]},
    {title:"Subtract Multi-Digit Numbers",iv:["placevalue","blocks"],
     teach:`<p>Subtracting big numbers uses the same place-value idea as adding — line the numbers up, then work column by column. The new twist is <b>regrouping the other direction</b>: when the top digit is too small to subtract from, you borrow from the place to its left.</p>

       <h4 class="ls-sub">Step 1: Line up, then subtract from the right</h4>
       <p>Stack the numbers so ones sit under ones. Start at the ones column and move left, just like addition. In each column, subtract the bottom digit from the top digit.</p>

       <h4 class="ls-sub">Step 2: Regroup when the top is too small</h4>
       <p>If a top digit is <b>smaller</b> than the digit below it, you can't subtract yet — so you <b>regroup</b>: take 1 from the next place to the left (making it 10 ones bigger in this column). To find <b>60,751 − 8,419</b>: ones 1 is less than 9, so regroup — 11 − 9 = 2; tens 4 (after regrouping) − 1 = 3; hundreds 7 − 4 = 3; thousands 0 is less than 8, so regroup across the zero from the ten-thousands: 10 − 8 = 2, and the 6 becomes 5. The difference is <b>52,332</b>.</p>

       <h4 class="ls-sub">Regrouping across zeros</h4>
       <p>Zeros make borrowing trickier because there's nothing to borrow directly. To do <b>5,000 − 1,240</b>, the ones, tens, and hundreds are all 0, so you regroup all the way across: think of 5,000 as 4 thousands, 9 hundreds, 9 tens, and 10 ones, then subtract. The answer is <b>3,760</b>.</p>

       <h4 class="ls-sub">Step 3: Check by adding back</h4>
       <p>Addition and subtraction are <b>inverse operations</b> — they undo each other. So the fastest way to check a subtraction is to <b>add the difference back</b>: if 60,751 − 8,419 = 52,332, then 52,332 + 8,419 should equal 60,751. It does, so the answer is correct. You can also estimate: 61,000 − 8,000 = about 53,000, close to 52,332.</p>
       <div class="reallife"><b>Real life:</b> subtraction tells you how much change you get, how much farther you have to drive, or how many tickets are still unsold.</div>
       <div class="watchout"><b>Common mistake:</b> subtracting the smaller digit from the larger out of habit. If the top digit is smaller, you must regroup — you can't just flip them.</div>
       <div class="watchout"><b>Another common mistake:</b> getting lost regrouping across zeros. Borrowing turns each 0 into a 9 (except the final column), with 10 in the column you started from.</div>

       <h4 class="ls-sub">Recap</h4>
       <p>Line up by place value, subtract from the ones leftward, and regroup whenever the top digit is too small — including across zeros. Check by adding the difference back, or by estimating.</p>
       <div class="keybox">60,751 − 8,419 = <b>52,332</b>. Check: 52,332 + 8,419 = 60,751. ✓</div>`,
     examples:[
      {title:"Subtract with regrouping",steps:["Subtract 3,710 − 251.","Ones 0 < 1, regroup: 10 − 1 = 9; tens 0 (after regrouping) < 5, regroup: 10 − 5 = 5; hundreds 6 − 2 = 4; thousands 3.","The difference is 3,459."]},
      {title:"Borrow across a zero",steps:["Subtract 803 − 259.","Ones 3 < 9, but the tens are 0 — regroup across: 803 becomes 7 hundreds, 9 tens, 13 ones.","13 − 9 = 4; 9 − 5 = 4; 7 − 2 = 5 → 544."]},
      {title:"Subtract from a round number",steps:["Subtract 5,000 − 1,240.","Regroup across the zeros: 5,000 = 4 thousands, 9 hundreds, 9 tens, 10 ones.","10 − 0 = 0; 9 − 4 = 5; 9 − 2 = 7; 4 − 1 = 3 → 3,760."]},
      {title:"Check by adding back",steps:["You found 60,751 − 8,419 = 52,332.","Add the difference back to what you subtracted: 52,332 + 8,419.","That equals 60,751 — the original number — so the answer checks out."]}
     ],
     quiz:[
      {q:"3,710 − 251 =",o:["3,459","3,461","3,559","3,469"],a:0,why:"Regroup twice: ones 10−1=9, tens 10−5=5, hundreds 4, thousands 3 → 3,459."},
      {q:"When the top digit is smaller than the digit below it, you should...",o:["regroup (borrow) from the next place left","just flip the two digits","write 0","carry to the right"],a:0,why:"Borrow 1 from the place to the left, which adds 10 to the current column."},
      {q:"803 − 259 =",o:["544","554","644","546"],a:0,why:"Borrow across the zero: 13−9=4, 9−5=4, 7−2=5 → 544."},
      {q:"60,751 − 8,419 =",o:["52,332","52,232","51,332","52,342"],a:0,why:"Subtract column by column, regrouping across the zero in the thousands place → 52,332."},
      {q:"The best way to CHECK a subtraction answer is to...",o:["add the difference back to the number you subtracted","subtract again the same way","multiply the two numbers","round both numbers"],a:0,why:"Addition undoes subtraction, so adding the difference back should return the original number."},
      {q:"5,000 − 1,240 =",o:["3,760","3,860","3,660","4,760"],a:0,why:"Regroup across the zeros: 5,000 − 1,240 = 3,760."},
      {q:"Everest is 29,035 ft and K2 is 28,251 ft. How much taller is Everest?",o:["784 ft","874 ft","1,784 ft","684 ft"],a:0,why:"29,035 − 28,251 = 784 ft."},
      {q:"Addition and subtraction are called ___ because they undo each other.",o:["inverse operations","the same operation","estimates","place values"],a:0,why:"Inverse operations reverse one another, which is why adding back checks a subtraction."},
      {q:"A jar had 5,000 beads. You used 1,240, then 985 more. How many are left?",o:["2,775","2,875","3,775","2,225"],a:0,why:"5,000 − 1,240 − 985 = 2,775 (a two-step subtraction)."},
      {q:"Estimate to check: 82,140 − 19,880 should be about...",o:["62,000","60,000 exactly","6,200","82,000"],a:0,why:"82,000 − 20,000 = 62,000, so a reasonable difference is near 62,000 (exactly 62,260)."},
      {q:"What number do these base-ten blocks show?",vis:1706,o:["1,706","1,760","1,076","176"],a:0,why:"1 thousand, 7 hundreds, 0 tens, 6 ones → 1,706."},
      {q:"A theater has 4,200 seats. If 2,865 are sold, how many are still empty?",o:["1,335","1,435","1,345","2,335"],a:0,why:"4,200 − 2,865 = 1,335 empty seats."}
     ]},
    {title:"Use Strategies to Add & Subtract",iv:"numline",
     teach:`<p>Lining numbers up in a column and regrouping always works — but it isn't always the <b>fastest</b> way. Good mathematicians keep a toolbox of <b>mental strategies</b> and pick whichever one makes a particular problem easy. Here are the three most useful ones.</p>

       <h4 class="ls-sub">Partial sums</h4>
       <p>With <b>partial sums</b>, you break each number into its place values, add each place separately, then combine. To add <b>3,025 + 2,160</b>: add the thousands (3,000 + 2,000 = 5,000), the hundreds (0 + 100 = 100), the tens (20 + 60 = 80), and the ones (5 + 0 = 5). Combine the partial sums: 5,000 + 100 + 80 + 5 = <b>5,185</b>. No carrying to keep track of — you just add the pieces.</p>

       <h4 class="ls-sub">Compensation</h4>
       <p><b>Compensation</b> means changing a number to a friendlier one, then adjusting at the end to make up for it. To add 3,025 + 2,160, notice 3,025 is close to 3,000. Take away 25 to get the friendly 3,000, add: 3,000 + 2,160 = 5,160, then <b>give the 25 back</b>: 5,160 + 25 = <b>5,185</b>. You "compensated" for the change you made.</p>
       <p>Compensation is great for subtraction too. For <b>16,000 − 5,984</b>, bump 5,984 up to the friendly 6,000 by adding 16. Now 16,000 − 6,000 = 10,000. Because you subtracted 16 too much, add it back: 10,000 + 16 = <b>10,016</b>.</p>

       <h4 class="ls-sub">Counting on</h4>
       <p><b>Counting on</b> turns a subtraction into an addition. Instead of taking away, you start at the smaller number and count <b>up</b> to the bigger one, keeping track of the jumps. For 16,000 − 5,984: start at 5,984, jump +16 to reach 6,000, then +10,000 to reach 16,000. Add your jumps: 16 + 10,000 = <b>10,016</b>. The number line below is perfect for seeing these jumps.</p>

       <h4 class="ls-sub">Choosing a strategy</h4>
       <p>There's no single "right" strategy — the smart move is to look at the numbers first. If a number is close to a round number, <b>compensation</b> shines. If you'd rather avoid carrying, <b>partial sums</b> is clean. If you're subtracting numbers that are close together, <b>counting on</b> is quickest.</p>
       <div class="reallife"><b>Real life:</b> people use these strategies constantly for mental math — figuring out change, adding up a bill, or checking a total without a calculator.</div>
       <div class="watchout"><b>Common mistake:</b> in compensation, forgetting to adjust at the end. If you took 25 away to make a friendly number, you must give the 25 back before you're done.</div>
       <div class="watchout"><b>Another common mistake:</b> adjusting the wrong direction. If you rounded a number <i>up</i> in a subtraction, you subtracted too much, so you add the difference back.</div>

       <h4 class="ls-sub">Recap</h4>
       <p><b>Partial sums</b> add place by place; <b>compensation</b> uses a friendly number then adjusts; <b>counting on</b> counts up from the smaller number. Look at the numbers, then pick the strategy that makes the math easiest.</p>
       <div class="keybox">16,000 − 5,984 by compensation: 16,000 − 6,000 = 10,000, then add back 16 → <b>10,016</b>.</div>`,
     examples:[
      {title:"Add with partial sums",steps:["Add 4,300 + 2,540.","Thousands 4,000 + 2,000 = 6,000; hundreds 300 + 500 = 800; tens 0 + 40 = 40.","Combine: 6,000 + 800 + 40 = 6,840."]},
      {title:"Add with compensation",steps:["Add 5,098 + 3,400.","5,098 is close to 5,100 — add 2 to make it friendly: 5,100 + 3,400 = 8,500.","You added 2 extra, so take it back: 8,500 − 2 = 8,498."]},
      {title:"Subtract with compensation",steps:["Subtract 16,000 − 5,984.","Round 5,984 up to 6,000 (that's +16): 16,000 − 6,000 = 10,000.","You subtracted 16 too much, so add it back: 10,000 + 16 = 10,016."]},
      {title:"Subtract by counting on",steps:["Find 6,000 − 5,984 by counting up from 5,984.","Jump +16 to reach 6,000.","The jumps total 16, so 6,000 − 5,984 = 16."]}
     ],
     quiz:[
      {q:"Which strategy adds each place value separately, then combines the parts?",o:["Partial sums","Compensation","Counting on","Rounding"],a:0,why:"Partial sums breaks numbers into place values, adds each, and combines."},
      {q:"Using partial sums, 4,300 + 2,540 =",o:["6,840","6,740","6,850","7,840"],a:0,why:"6,000 + 800 + 40 = 6,840."},
      {q:"To add 5,098 + 3,400 by compensation, a good friendly number for 5,098 is...",o:["5,100 (then subtract 2 at the end)","5,000 (then subtract 98)","6,000 (then add 902)","5,098 stays the same"],a:0,why:"5,098 is just 2 below 5,100; use 5,100, then take the extra 2 back."},
      {q:"16,000 − 5,984 using compensation =",o:["10,016","9,984","10,016 − 32","11,016"],a:0,why:"16,000 − 6,000 = 10,000, then add back the 16 → 10,016."},
      {q:"Counting on turns a subtraction into...",o:["an addition (you count up)","a multiplication","a rounding problem","a division"],a:0,why:"You start at the smaller number and add jumps up to the larger one."},
      {q:"To find 8,000 − 7,985 quickly, the best strategy is...",o:["counting on (the numbers are very close)","long regrouping across zeros","partial sums","estimating to the thousand"],a:0,why:"7,985 is only 15 below 8,000 — counting up is fastest: the difference is 15."},
      {q:"In compensation, if you added 3 to a number to make it friendly, at the end you must...",o:["subtract 3 to make up for it","add 3 more","multiply by 3","do nothing"],a:0,why:"You must adjust back the opposite way — undo the extra 3 you added."},
      {q:"3,025 + 2,160 using partial sums =",o:["5,185","5,175","5,285","4,185"],a:0,why:"5,000 + 100 + 80 + 5 = 5,185."},
      {q:"You round 4,990 up to 5,000 to subtract, then subtract. You rounded UP by 10, so you should...",o:["add 10 back to your answer","subtract another 10","leave it alone","round again"],a:0,why:"Rounding the subtracted number up by 10 removes 10 too much, so add 10 back."},
      {q:"Which problem is BEST suited to compensation?",o:["7,003 − 2,998 (both near round numbers)","4,271 − 1,635 (no friendly numbers)","5,000 − 5,000","12 + 13"],a:0,why:"Both 7,003 and 2,998 are very close to round numbers, so adjusting is quick and easy."},
      {q:"A runner logged 2,995 m, then 4,010 m. Using compensation, about the cleanest total is...",o:["7,005 m","6,005 m","7,000 m exactly","8,005 m"],a:0,why:"3,000 + 4,010 = 7,010, then take back the 5 you added → 7,005 m."}
     ]},
    {title:"Problem Solving: Add & Subtract",iv:null,
     teach:`<p>Word problems can feel scary, but a good <b>plan</b> turns any of them into a few clear steps. Mathematicians use the same four-step routine every time: <b>Understand, Plan, Solve, Check.</b></p>

       <h4 class="ls-sub">The four-step plan</h4>
       <p><b>Understand</b> — read carefully and ask: what do I <i>know</i>, and what do I need to <i>find</i>? <b>Plan</b> — decide which operations to use and in what order; use a <b>letter</b> to stand for each unknown. <b>Solve</b> — do the math one step at a time. <b>Check</b> — make sure the answer is reasonable (estimate!) and actually answers the question.</p>

       <h4 class="ls-sub">Two-step problems</h4>
       <p>Many real problems take <b>two steps</b>, because the answer to the first step is needed for the second. Example: <i>You have 3,914 songs. You download 1,326 more, then delete 587. How many songs now?</i></p>
       <p><b>Step 1</b> — find how many after downloading: 3,914 + 1,326 = <b>k</b>, so k = 5,240. <b>Step 2</b> — take away the deleted songs: 5,240 − 587 = <b>n</b>, so n = <b>4,653</b>. Using the letters k and n keeps the two unknowns straight.</p>

       <h4 class="ls-sub">Deciding add or subtract</h4>
       <p>Watch what's happening in the story. Words like <i>in all, altogether, combined, total, more arrived</i> usually mean <b>add</b>. Words like <i>left, remaining, how many more, difference, fewer, sold</i> usually mean <b>subtract</b>. But don't just hunt for keywords — picture the situation and ask whether the amount is <b>growing</b> or <b>shrinking</b>.</p>

       <h4 class="ls-sub">Drawing conclusions from a table</h4>
       <p>Some problems give you a <b>table</b> of numbers and ask you to compare or combine them. For a table of state land areas, "how much bigger is California than Utah?" is a subtraction, while "what is the total area of two states?" is an addition. The plan is the same: understand what's asked, choose the operation, solve, and check.</p>
       <div class="reallife"><b>Real life:</b> planning a budget, tracking a savings goal, or figuring out how far is left on a trip are all multi-step add/subtract problems.</div>
       <div class="watchout"><b>Common mistake:</b> answering only the first step of a two-step problem. Always re-read the question to make sure you found what it actually asked for.</div>
       <div class="watchout"><b>Another common mistake:</b> grabbing a keyword without thinking. "How many more" means subtract, but only after you understand the situation — picture it first.</div>

       <h4 class="ls-sub">Recap</h4>
       <p>Use the plan: <b>Understand, Plan, Solve, Check.</b> Name unknowns with letters, take two-step problems one step at a time, and finish by checking that your answer is reasonable and answers the question.</p>
       <div class="keybox">3,914 + 1,326 = k (5,240); then 5,240 − 587 = n = <b>4,653</b> songs.</div>`,
     examples:[
      {title:"Two-step: gain then lose",steps:["A store had 3,914 items, got 1,326 more, then sold 587. How many now?","Step 1: 3,914 + 1,326 = 5,240 (after the delivery).","Step 2: 5,240 − 587 = 4,653 items remain."]},
      {title:"Compare two table values",steps:["California is 155,779 sq mi; Utah is 82,170 sq mi. How much bigger is California?","'How much bigger' means subtract: 155,779 − 82,170.","The difference is 73,609 square miles."]},
      {title:"Combine, then compare",steps:["Arizona is 113,594 sq mi and Nevada is 109,781 sq mi. Together, how much more than Utah's 82,170?","Step 1: 113,594 + 109,781 = 223,375.","Step 2: 223,375 − 82,170 = 141,205 more square miles."]},
      {title:"Check for reasonableness",steps:["Your two-step answer is 4,653 songs.","Estimate: 3,900 + 1,300 − 600 = 4,600.","4,653 is close to 4,600, so the answer is reasonable."]}
     ],
     quiz:[
      {q:"The four steps of the problem-solving plan are:",o:["Understand, Plan, Solve, Check","Guess, Add, Subtract, Stop","Read, Skip, Answer, Move on","Round, Add, Round, Done"],a:0,why:"Understand the problem, plan your steps, solve, and check that it's reasonable."},
      {q:"You have 3,914 songs, download 1,326 more, then delete 587. How many now?",o:["4,653","5,240","4,753","4,643"],a:0,why:"Step 1: 3,914 + 1,326 = 5,240. Step 2: 5,240 − 587 = 4,653."},
      {q:"In a two-step problem, using a letter (like k) for the unknown helps you...",o:["keep track of each step's answer","make the numbers smaller","skip the checking step","avoid subtraction"],a:0,why:"Letters name the unknowns so you don't lose track between steps."},
      {q:"Which phrase usually signals SUBTRACTION?",o:["how many more","in all","combined","altogether"],a:0,why:"'How many more' asks for a difference — that's subtraction."},
      {q:"California is 155,779 sq mi and Utah is 82,170 sq mi. How much larger is California?",o:["73,609 sq mi","72,609 sq mi","237,949 sq mi","73,509 sq mi"],a:0,why:"155,779 − 82,170 = 73,609 square miles."},
      {q:"A team scored 1,240 points in fall and 1,985 in spring, then lost 300 in a penalty. Final total?",o:["2,925","3,525","2,825","3,225"],a:0,why:"1,240 + 1,985 = 3,225, then − 300 = 2,925 (two steps)."},
      {q:"After solving a two-step problem, the LAST thing you should do is...",o:["check that the answer is reasonable and answers the question","erase your work","add all the numbers again","round the answer"],a:0,why:"Checking makes sure your answer makes sense and actually answers what was asked."},
      {q:"Arizona is 113,594 sq mi and Nevada is 109,781 sq mi. Combined, that's how much more than Utah's 82,170?",o:["141,205 sq mi","141,105 sq mi","223,375 sq mi","140,205 sq mi"],a:0,why:"113,594 + 109,781 = 223,375; then 223,375 − 82,170 = 141,205."},
      {q:"A savings account had $2,450. You added $1,200, then spent $875. How much is left?",o:["$2,775","$2,675","$4,525","$2,875"],a:0,why:"2,450 + 1,200 = 3,650, then − 875 = 2,775."},
      {q:"Estimate to check: 4,120 + 2,980 − 990 should be about...",o:["6,000","7,000","5,000","10,000"],a:0,why:"4,000 + 3,000 − 1,000 = 6,000, so a reasonable answer is near 6,000 (exactly 6,110)."},
      {q:"A library had 18,600 books, removed 2,450 old ones, then added 3,900 new ones. How many now?",o:["20,050","19,050","24,950","20,150"],a:0,why:"18,600 − 2,450 = 16,150, then + 3,900 = 20,050."}
     ]}
   ],
   test:[
    {q:"Estimate 383 + 214 by rounding each to the nearest hundred.",o:["600","500","700","597"],a:0,why:"383 → 400, 214 → 200; 400 + 200 = 600."},
    {q:"Estimate 6,142 − 2,880 by rounding to the nearest thousand.",o:["3,000","4,000","2,000","3,262"],a:0,why:"6,142 → 6,000 and 2,880 → 3,000; 6,000 − 3,000 = 3,000."},
    {q:"To the nearest hundred, 470 rounds to:",vis:{type:"rl",n:470},o:["500","400","470","450"],a:0,why:"470 is past the halfway mark (450), so it rounds up to 500."},
    {q:"To estimate a difference, you round both numbers to...",o:["the same place value","the nearest ten only","different places","the ones place"],a:0,why:"Round both numbers to the same place, then subtract."},
    {q:"A store had 4,880 pencils and sold 2,105. Estimate how many are left (nearest thousand).",o:["3,000","2,000","4,000","2,775"],a:0,why:"4,880 → 5,000 and 2,105 → 2,000; 5,000 − 2,000 = 3,000."},
    {q:"Rounding to the nearest ten instead of the nearest hundred gives an estimate that is...",o:["closer to the exact answer","further from the exact answer","always larger","always smaller"],a:0,why:"A smaller place value changes the numbers less, so the estimate is closer."},
    {q:"Mia estimates a sum as about 5,000 but her exact answer is 5,120. Is her answer reasonable?",o:["Yes — it is close to the estimate","No — recheck it","No, it must equal 5,000","There's no way to tell"],a:0,why:"5,120 is close to the 5,000 estimate, so the exact answer is reasonable."},
    {q:"Estimate 917 + 872 + 640 to the nearest hundred.",o:["2,400","2,300","2,500","2,429"],a:0,why:"900 + 900 + 600 = 2,400."},
    {q:"To the nearest hundred, 350 rounds to:",vis:{type:"rl",n:350},o:["400","300","350","360"],a:0,why:"350 is exactly halfway, so it rounds up to 400."},
    {q:"A jet flew 3,180 miles, then 4,950 more. Estimate the total distance (nearest thousand).",o:["8,000","7,000","9,000","8,130"],a:0,why:"3,180 → 3,000 and 4,950 → 5,000; 3,000 + 5,000 = 8,000."},
    {q:"To add 507 + 2,349, which digits line up in the ones column?",o:["7 and 9","5 and 2","0 and 3","7 and 3"],a:0,why:"Line up from the right — the ones are 7 and 9."},
    {q:"3,456 + 2,178 =",o:["5,634","5,624","5,534","6,634"],a:0,why:"Add the columns with regrouping → 5,634."},
    {q:"307,478 + 95,061 =",o:["402,539","402,439","412,539","401,539"],a:0,why:"Add column by column, regrouping → 402,539."},
    {q:"When a column adds up to 15, you write ___ and carry ___.",o:["5, and carry 1","1, and carry 5","15, carry 0","0, carry 15"],a:0,why:"15 is 1 ten and 5 ones: write the 5, carry the 1 ten."},
    {q:"803 − 259 =",o:["544","554","644","546"],a:0,why:"Borrow across the zero: 13−9=4, 9−5=4, 7−2=5 → 544."},
    {q:"60,751 − 8,419 =",o:["52,332","52,232","51,332","52,342"],a:0,why:"Subtract with regrouping across the zero → 52,332."},
    {q:"The best way to check 60,751 − 8,419 = 52,332 is to...",o:["add 52,332 + 8,419 and see if you get 60,751","subtract again the same way","multiply 52,332 × 8,419","round both numbers"],a:0,why:"Addition undoes subtraction, so adding the difference back should give the original number."},
    {q:"16,000 − 5,984 using compensation =",o:["10,016","9,984","11,016","10,006"],a:0,why:"16,000 − 6,000 = 10,000, then add back the 16 → 10,016."},
    {q:"Which strategy adds each place value separately, then combines the parts?",o:["Partial sums","Compensation","Counting on","Rounding"],a:0,why:"Partial sums breaks the numbers into place values, adds each, and combines."},
    {q:"You have 3,914 songs, download 1,326 more, then delete 587. How many now?",o:["4,653","5,240","4,753","4,643"],a:0,why:"Step 1: 3,914 + 1,326 = 5,240. Step 2: 5,240 − 587 = 4,653."},
    {q:"A savings account had $2,450. You added $1,200, then spent $875. How much is left?",o:["$2,775","$2,675","$4,525","$2,875"],a:0,why:"2,450 + 1,200 = 3,650, then − 875 = 2,775."},
    {q:"Everest is 29,035 ft and K2 is 28,251 ft. How much taller is Everest?",o:["784 ft","874 ft","1,784 ft","684 ft"],a:0,why:"29,035 − 28,251 = 784 ft."},
    {q:"What number do these base-ten blocks show?",vis:2408,o:["2,408","2,480","2,048","248"],a:0,why:"2 thousands, 4 hundreds, 0 tens, 8 ones → 2,408."},
    {q:"A student adds 5,280 + 3,140 and writes 84,200. What went wrong?",o:["The answer is far from the estimate (about 8,000) — recheck","Nothing, it's correct","The estimate is wrong","They should subtract instead"],a:0,why:"5,000 + 3,000 = 8,000, so a correct sum is near 8,000 (exactly 8,420). 84,200 is unreasonable."},
    {q:"A library had 18,600 books, removed 2,450, then added 3,900. How many now?",o:["20,050","19,050","24,950","20,150"],a:0,why:"18,600 − 2,450 = 16,150, then + 3,900 = 20,050."}
   ]},

  {id:"g4u3mul",name:"Multiply by One-Digit Numbers",icon:"✖️",code:"4.NBT/OA",accent:"#0ea5e9",
   sections:[
    {title:"Understand Comparisons",iv:"array",
     teach:`<p>When you compare two numbers, you can ask two very different questions. You can ask <b>"how many more?"</b> — which is an <b>addition</b> comparison. Or you can ask <b>"how many times as many?"</b> — which is a <b>multiplication</b> comparison. Knowing which one a problem is asking for is the first step to answering it.</p>

       <h4 class="ls-sub">Two ways to compare</h4>
       <p>Suppose there are 15 red counters and 5 yellow counters. Using <b>addition</b>, you can say "there are <b>10 more</b> red than yellow," because 15 − 5 = 10. Using <b>multiplication</b>, you can say "there are <b>3 times as many</b> red as yellow," because 15 = 3 × 5. Same two numbers — two different comparisons.</p>

       <h4 class="ls-sub">"Times as many"</h4>
       <p>A multiplication equation is packed with comparison meaning. Take <b>24 = 4 × 6</b>. It tells you that 24 is <b>4 times as many as 6</b>, and also that 24 is <b>6 times as many as 4</b>. (Because multiplication can be done in any order — the Commutative Property — both readings are true.)</p>

       <h4 class="ls-sub">Writing comparison equations</h4>
       <p>Turn the words into an equation. "12 is 8 <b>more than</b> 4" uses addition: <b>12 = 8 + 4</b>. "12 is 3 <b>times as many as</b> 4" uses multiplication: <b>12 = 3 × 4</b>. The phrase "times as many" is your signal to multiply.</p>

       <h4 class="ls-sub">Comparison word problems</h4>
       <p>These ideas power real questions. If a library has 6 shelves of picture books and 4 times as many chapter books, then the chapter books number 4 × 6 = <b>24 shelves</b>. Read carefully to decide whether the problem wants "how many more" (subtract) or "how many times as many" (multiply or divide).</p>
       <div class="reallife"><b>Real life:</b> "our team scored 3 times as many points as last year" or "she has twice as many stickers as her brother" are multiplicative comparisons you hear all the time.</div>
       <div class="watchout"><b>Common mistake:</b> mixing up "more than" with "times as many." "5 more than 3" is 8 (addition); "5 times as many as 3" is 15 (multiplication).</div>

       <h4 class="ls-sub">Recap</h4>
       <p>Compare with <b>addition</b> for "how many more/fewer," and with <b>multiplication</b> for "how many times as many." A multiplication equation like 24 = 4 × 6 can be read as a "times as many" comparison in either order.</p>
       <div class="keybox">24 = 4 × 6 means "24 is 4 times as many as 6" (and 6 times as many as 4).</div>`,
     examples:[
      {title:"Read a multiplication comparison",steps:["Look at 24 = 4 × 6.","'Times as many' comparison: 24 is 4 times as many as 6.","Because order doesn't change a product, 24 is also 6 times as many as 4."]},
      {title:"Write an equation from words",steps:["'40 is 8 times as many as 5.'","'Times as many' means multiply: 40 = 8 × 5.","Check: 8 × 5 = 40. ✓"]},
      {title:"Addition vs. multiplication comparison",steps:["There are 15 red and 5 yellow counters.","How many MORE red? Subtract: 15 − 5 = 10 more.","How many TIMES as many red? Divide: 15 ÷ 5 = 3 times as many."]},
      {title:"Comparison word problem",steps:["A store has 7 boxes of pens and 3 times as many boxes of pencils.","'Times as many' means multiply: 3 × 7.","There are 21 boxes of pencils."]}
     ],
     quiz:[
      {q:"Which comparison uses MULTIPLICATION?",o:["how many times as many","how many more","how many fewer","what is the total after adding"],a:0,why:"'Times as many' is a multiplicative comparison; 'more' and 'fewer' are additive."},
      {q:"24 = 4 × 6. Which sentence is true?",o:["24 is 4 times as many as 6","24 is 4 more than 6","24 is 6 more than 4","6 is 4 times as many as 24"],a:0,why:"A product equation reads as 'times as many': 24 is 4 times as many as 6."},
      {q:"Write '40 is 8 times as many as 5' as an equation.",o:["40 = 8 × 5","40 = 8 + 5","40 = 8 − 5","40 = 5 ÷ 8"],a:0,why:"'Times as many' means multiply: 40 = 8 × 5."},
      {q:"'12 is 8 more than 4' is which kind of comparison?",o:["addition (12 = 8 + 4)","multiplication (12 = 8 × 4)","division","subtraction only"],a:0,why:"'More than' signals addition: 12 = 8 + 4."},
      {q:"There are 15 red and 5 yellow counters. How many MORE red than yellow?",o:["10","3","20","75"],a:0,why:"'How many more' means subtract: 15 − 5 = 10."},
      {q:"There are 15 red and 5 yellow counters. How many TIMES as many red as yellow?",o:["3 times","10 times","5 times","75 times"],a:0,why:"'Times as many' means divide: 15 ÷ 5 = 3."},
      {q:"A store has 7 boxes of pens and 3 times as many boxes of pencils. How many pencil boxes?",o:["21","10","4","3"],a:0,why:"3 times as many means 3 × 7 = 21."},
      {q:"Which reading of 30 = 5 × 6 is also correct?",o:["30 is 6 times as many as 5","30 is 6 more than 5","5 is 6 times as many as 30","30 is 5 more than 6"],a:0,why:"Order doesn't change a product, so 30 is 5 times as many as 6 AND 6 times as many as 5."},
      {q:"Maya read 4 books. Liam read 5 times as many. How many did Liam read?",o:["20","9","1","45"],a:0,why:"5 times as many as 4 is 5 × 4 = 20."},
      {q:"A team scored 8 points. Another scored 24. The 24 is how many times as many as 8?",o:["3 times","16 times","32 times","2 times"],a:0,why:"24 ÷ 8 = 3, so 24 is 3 times as many as 8."}
     ]},
    {title:"Multiply Tens, Hundreds & Thousands",iv:"array",
     teach:`<p>Once you know your basic multiplication facts, you can multiply by <b>tens, hundreds, and thousands</b> instantly — no long work needed. The secret is <b>place value</b>.</p>

       <h4 class="ls-sub">Use a fact, then look at the zeros</h4>
       <p>Start from a fact you know and grow it: 8 × 5 = 40, 8 × 50 = 400, 8 × 500 = 4,000, 8 × 5,000 = 40,000. Notice the pattern — the product is the <b>basic fact</b> (8 × 5 = 40) with the <b>same number of zeros</b> that are in the larger factor. Multiply by 50 (one zero) → one extra zero; by 500 (two zeros) → two extra zeros.</p>

       <h4 class="ls-sub">Why it works: place value</h4>
       <p>7 × 200 really means 7 × 2 <b>hundreds</b>. Since 7 × 2 = 14, that's 14 hundreds, which is <b>1,400</b>. In the same way, 3 × 4,000 = 3 × 4 <b>thousands</b> = 12 thousands = <b>12,000</b>. You're just multiplying the front numbers and keeping track of the place value with zeros.</p>

       <h4 class="ls-sub">A tip about extra zeros</h4>
       <p>Be careful when the basic fact <i>itself</i> ends in a zero. For 5 × 4,000: the fact 5 × 4 = 20 already has a zero, and 4,000 has three zeros, so the product is 20 followed by three zeros = <b>20,000</b>. Always start from the fact's full value, then append the factor's zeros.</p>
       <div class="reallife"><b>Real life:</b> this is how you quickly figure out totals like "300 tickets at $6 each" (6 × 300 = 1,800) without a calculator.</div>
       <div class="watchout"><b>Common mistake:</b> adding the wrong number of zeros. Count the zeros in the bigger factor and attach exactly that many to the basic fact.</div>

       <h4 class="ls-sub">Recap</h4>
       <p>To multiply by tens, hundreds, or thousands, multiply the basic fact, then attach the same number of zeros as the larger factor has. It works because you're really multiplying groups of tens, hundreds, or thousands.</p>
       <div class="keybox">8 × 5 = 40, so 8 × 500 = <b>4,000</b> (the fact 40, plus the two zeros from 500).</div>`,
     examples:[
      {title:"Grow a fact",steps:["6 × 9 = 54.","6 × 90 = 540 (one extra zero); 6 × 900 = 5,400 (two zeros).","6 × 9,000 = 54,000 (three zeros)."]},
      {title:"Multiply with place value",steps:["Find 7 × 200.","7 × 2 = 14, and 200 is 2 hundreds, so this is 14 hundreds.","14 hundreds = 1,400."]},
      {title:"Watch the fact's own zero",steps:["Find 5 × 4,000.","5 × 4 = 20 (already has a zero).","Attach the three zeros from 4,000: 20,000."]}
     ],
     quiz:[
      {q:"8 × 500 =",o:["4,000","400","40,000","450"],a:0,why:"8 × 5 = 40, plus the two zeros from 500 → 4,000."},
      {q:"6 × 9,000 =",o:["54,000","5,400","540,000","63,000"],a:0,why:"6 × 9 = 54, plus three zeros → 54,000."},
      {q:"7 × 200 =",o:["1,400","140","14,000","900"],a:0,why:"7 × 2 = 14 hundreds = 1,400."},
      {q:"To multiply by a number with zeros, you multiply the basic fact and then...",o:["attach the same number of zeros as the larger factor","remove all the zeros","add the zeros together","subtract the zeros"],a:0,why:"The product is the fact with the same number of zeros the big factor has."},
      {q:"5 × 4,000 =",o:["20,000","2,000","200,000","9,000"],a:0,why:"5 × 4 = 20; attach the three zeros → 20,000."},
      {q:"3 × 4,000 =",o:["12,000","1,200","120,000","7,000"],a:0,why:"3 × 4 = 12 thousands = 12,000."},
      {q:"Which shows the correct pattern?",o:["2 × 3 = 6, 2 × 30 = 60, 2 × 300 = 600","2 × 3 = 6, 2 × 30 = 600, 2 × 300 = 6","2 × 30 = 32","2 × 300 = 302"],a:0,why:"Each extra zero in the factor adds one zero to the product."},
      {q:"A theater sells 400 tickets at $8 each. Total sales?",o:["$3,200","$320","$32,000","$408"],a:0,why:"8 × 400 = 3,200 (8 × 4 = 32, plus two zeros)."},
      {q:"9 × 6,000 =",o:["54,000","5,400","540,000","15,000"],a:0,why:"9 × 6 = 54, plus three zeros → 54,000."},
      {q:"How does 3 × 7 help you find 3 × 7,000?",o:["3 × 7 = 21, then attach three zeros → 21,000","3 × 7,000 = 21","it doesn't help","3 × 7,000 = 210"],a:0,why:"Use the fact 21 and attach the three zeros from 7,000 → 21,000."}
     ]},
    {title:"Estimate Products by Rounding",iv:"roundline",
     teach:`<p>Just like with sums and differences, you can <b>estimate a product</b> to get a quick, close answer — and to check whether an exact answer is reasonable. The trick is to <b>round a factor to a friendly number</b>, then multiply.</p>

       <h4 class="ls-sub">Round, then multiply</h4>
       <p>To estimate <b>7 × 491</b>, round 491 to the nearest hundred: 491 → <b>500</b>. Now multiply the easy numbers: 7 × 500 = <b>3,500</b>. So 7 × 491 is about 3,500. (The exact answer is 3,437 — very close!) You usually round the <b>bigger</b> factor and leave the one-digit factor alone.</p>

       <h4 class="ls-sub">Two estimates: what the product is "between"</h4>
       <p>Sometimes it helps to trap the product <b>between two estimates</b>. For <b>4 × 76</b>, notice 76 is between 70 and 80. So the product is between 4 × 70 = <b>280</b> and 4 × 80 = <b>320</b>. That tells you a correct answer must land somewhere from 280 to 320 (it's exactly 304).</p>

       <h4 class="ls-sub">Is the product reasonable?</h4>
       <p>Estimating is your safety check. If you work out 6 × 88 and get 528, you can check: 6 × 90 = 540, so an answer near 540 is reasonable — 528 fits. But if you had gotten 5,280, the estimate would warn you that your answer is 10 times too big.</p>
       <div class="reallife"><b>Real life:</b> estimating products helps you judge "will 8 packs of 24 be enough?" or "about how much will 6 tickets at $19 cost?" on the spot.</div>
       <div class="watchout"><b>Common mistake:</b> rounding the one-digit factor. Keep the small factor as is and round the larger number — that keeps the estimate close.</div>

       <h4 class="ls-sub">Recap</h4>
       <p>To estimate a product, round the larger factor to a friendly number and multiply. You can also trap the product between two estimates, and use the estimate to check that an exact answer is reasonable.</p>
       <div class="keybox">Estimate 7 × 491: round 491 → 500, then 7 × 500 = <b>3,500</b>.</div>`,
     examples:[
      {title:"Estimate a product",steps:["Estimate 3 × 89.","Round 89 to 90.","3 × 90 = 270. So 3 × 89 is about 270."]},
      {title:"Estimate with a bigger number",steps:["Estimate 8 × 721.","Round 721 to 700.","8 × 700 = 5,600. So 8 × 721 is about 5,600."]},
      {title:"Find two estimates it's between",steps:["4 × 76: think 76 is between 70 and 80.","4 × 70 = 280 and 4 × 80 = 320.","So 4 × 76 is between 280 and 320."]}
     ],
     quiz:[
      {q:"Estimate 7 × 491 by rounding.",o:["3,500","3,400","350","4,900"],a:0,why:"491 rounds to 500; 7 × 500 = 3,500."},
      {q:"Estimate 3 × 89 by rounding.",o:["270","240","27","300"],a:0,why:"89 rounds to 90; 3 × 90 = 270."},
      {q:"Estimate 8 × 721 by rounding.",o:["5,600","5,700","560","4,900"],a:0,why:"721 rounds to 700; 8 × 700 = 5,600."},
      {q:"The product 4 × 76 is between which two estimates?",o:["280 and 320","70 and 80","240 and 280","300 and 400"],a:0,why:"4 × 70 = 280 and 4 × 80 = 320."},
      {q:"When estimating 6 × 583, which factor should you round?",o:["583 (round to 600)","6 (round to 10)","both to zero","neither"],a:0,why:"Round the larger factor; keep the one-digit factor. 6 × 600 = 3,600."},
      {q:"A student found 6 × 88 = 5,280. Using an estimate, what's true?",o:["It's unreasonable — 6 × 90 = 540, so it should be near 540","It's correct","The estimate is wrong","6 × 88 rounds to 5,000"],a:0,why:"6 × 90 = 540, so a reasonable product is near 540 (exactly 528). 5,280 is ten times too big."},
      {q:"Estimate 9 × 44.",o:["360","450","36","400"],a:0,why:"44 rounds to 40; 9 × 40 = 360."},
      {q:"About how much will 6 tickets at $19 each cost (estimate)?",o:["about $120","about $60","about $1,200","about $25"],a:0,why:"Round $19 to $20; 6 × 20 = $120."},
      {q:"5 × 7,938 is closest to which estimate?",o:["40,000","4,000","400,000","35,000"],a:0,why:"7,938 rounds to 8,000; 5 × 8,000 = 40,000."},
      {q:"2 × 657 is between which two estimates?",o:["1,200 and 1,400","600 and 700","1,000 and 1,200","1,300 and 1,500"],a:0,why:"657 is between 600 and 700; 2 × 600 = 1,200 and 2 × 700 = 1,400."}
     ]},
    {title:"Use the Distributive Property",iv:"arearect",
     teach:`<p>Big multiplications get easy when you <b>break a number apart</b>. The <b>Distributive Property</b> says you can split one factor into friendlier pieces, multiply each piece separately, and add the results — the answer stays the same.</p>

       <h4 class="ls-sub">Break apart, multiply, add</h4>
       <p>To find <b>3 × 12</b>, break 12 into 10 + 2. Then 3 × 12 = 3 × (10 + 2) = (3 × 10) + (3 × 2) = 30 + 6 = <b>36</b>. You turned one harder fact into two easy ones.</p>

       <h4 class="ls-sub">Seeing it with an area model</h4>
       <p>Picture a rectangle that is 3 units tall and 18 units wide. Slice it into a 3 × 10 piece and a 3 × 8 piece. The two areas are 30 and 24, and together they make the whole rectangle: 30 + 24 = <b>54</b>. That's exactly 3 × 18. The area model is a picture of the Distributive Property — try the rectangle tool to see areas add up.</p>
       <p>Another example: <b>6 × 18 = 6 × (10 + 8) = (6 × 10) + (6 × 8) = 60 + 48 = 108</b>.</p>
       <div class="reallife"><b>Real life:</b> mental math tricks like "7 × 21 = 7 × 20 + 7 × 1 = 147" use the Distributive Property without you even noticing.</div>
       <div class="watchout"><b>Common mistake:</b> forgetting to multiply BOTH parts. In 3 × (10 + 2) you must do 3 × 10 <i>and</i> 3 × 2 — not just one of them.</div>

       <h4 class="ls-sub">Recap</h4>
       <p>The Distributive Property lets you break a factor into parts (like tens and ones), multiply each part, then add. An area model shows why the pieces add back to the whole.</p>
       <div class="keybox">6 × 18 = (6 × 10) + (6 × 8) = 60 + 48 = <b>108</b>.</div>`,
     examples:[
      {title:"Break apart the tens and ones",steps:["Find 7 × 11.","7 × 11 = 7 × (10 + 1) = (7 × 10) + (7 × 1).","70 + 7 = 77."]},
      {title:"Use an area model",steps:["Find 2 × 15. Break 15 into 10 + 5.","(2 × 10) + (2 × 5) = 20 + 10.","The two areas add to 30."]},
      {title:"A bigger split",steps:["Find 6 × 18. Break 18 into 10 + 8.","(6 × 10) + (6 × 8) = 60 + 48.","60 + 48 = 108."]}
     ],
     quiz:[
      {q:"3 × 12 = 3 × (10 + 2) =",o:["36","32","30","23"],a:0,why:"(3 × 10) + (3 × 2) = 30 + 6 = 36."},
      {q:"Which correctly uses the Distributive Property for 6 × 18?",o:["(6 × 10) + (6 × 8)","(6 × 10) × (6 × 8)","6 × 10 × 8","(6 + 10) × (6 + 8)"],a:0,why:"Break 18 into 10 + 8, multiply each by 6, then add."},
      {q:"7 × 11 =",o:["77","70","78","71"],a:0,why:"(7 × 10) + (7 × 1) = 70 + 7 = 77."},
      {q:"2 × 15 =",o:["30","25","20","35"],a:0,why:"(2 × 10) + (2 × 5) = 20 + 10 = 30."},
      {q:"6 × 18 =",o:["108","98","68","148"],a:0,why:"(6 × 10) + (6 × 8) = 60 + 48 = 108."},
      {q:"In 4 × (20 + 3), you must multiply...",o:["both 4 × 20 and 4 × 3, then add","only 4 × 20","only 4 × 3","4 × 20 × 3"],a:0,why:"The Distributive Property multiplies each part, then adds: 80 + 12 = 92."},
      {q:"An area model splits a 5 × 14 rectangle into 5 × 10 and 5 × 4. The total area is...",o:["70","54","90","50"],a:0,why:"50 + 20 = 70, which is 5 × 14."},
      {q:"7 × 21 broken apart is...",o:["(7 × 20) + (7 × 1) = 147","(7 × 20) × (7 × 1)","7 × 20 × 1","(7 + 20) + (7 + 1)"],a:0,why:"(7 × 20) + (7 × 1) = 140 + 7 = 147."},
      {q:"8 × 13 =",o:["104","94","84","114"],a:0,why:"(8 × 10) + (8 × 3) = 80 + 24 = 104."},
      {q:"Why does breaking a factor apart still give the right answer?",o:["The parts' products add back to the whole","Because you make the numbers smaller","It only works for even numbers","It changes the answer slightly"],a:0,why:"The Distributive Property guarantees the partial products add up to the full product."}
     ]},
    {title:"Use Expanded Form to Multiply",iv:"arearect",
     teach:`<p>The Distributive Property really shines when you write the bigger factor in <b>expanded form</b> — as the sum of its place values. Then you multiply each place separately and add the pieces.</p>

       <h4 class="ls-sub">Expand, multiply each place, add</h4>
       <p>To find <b>8 × 74</b>, write 74 as 70 + 4. Then 8 × 74 = (8 × 70) + (8 × 4) = 560 + 32 = <b>592</b>. Every place gets multiplied by 8, and the partial answers add to the total.</p>

       <h4 class="ls-sub">It works for big numbers too</h4>
       <p>For <b>2 × 5,607</b>, expand 5,607 into 5,000 + 600 + 7 (there are no tens). Multiply each: (2 × 5,000) + (2 × 600) + (2 × 7) = 10,000 + 1,200 + 14 = <b>11,214</b>. Breaking the giant number into place-value chunks kept every step easy.</p>
       <div class="reallife"><b>Real life:</b> this is the thinking behind quick mental math, like 3 × 214 = 600 + 30 + 12 = 642.</div>
       <div class="watchout"><b>Common mistake:</b> skipping a place value. Even a 0 place matters — for 5,607 you still line up thousands, hundreds, and ones so nothing shifts.</div>

       <h4 class="ls-sub">Recap</h4>
       <p>Write the larger factor in expanded form, multiply each place value by the other factor, then add all the partial products together.</p>
       <div class="keybox">8 × 74 = (8 × 70) + (8 × 4) = 560 + 32 = <b>592</b>.</div>`,
     examples:[
      {title:"Expand a two-digit factor",steps:["Find 8 × 74. Expand: 74 = 70 + 4.","(8 × 70) + (8 × 4) = 560 + 32.","560 + 32 = 592."]},
      {title:"Expand a three-digit factor",steps:["Find 4 × 306. Expand: 306 = 300 + 6.","(4 × 300) + (4 × 6) = 1,200 + 24.","1,200 + 24 = 1,224."]},
      {title:"Expand a four-digit factor",steps:["Find 2 × 5,607. Expand: 5,000 + 600 + 7.","(2 × 5,000) + (2 × 600) + (2 × 7) = 10,000 + 1,200 + 14.","Add: 11,214."]}
     ],
     quiz:[
      {q:"8 × 74 = (8 × 70) + (8 × 4) =",o:["592","582","632","560"],a:0,why:"560 + 32 = 592."},
      {q:"4 × 306 =",o:["1,224","1,206","1,242","1,024"],a:0,why:"(4 × 300) + (4 × 6) = 1,200 + 24 = 1,224."},
      {q:"2 × 5,607 =",o:["11,214","11,204","10,214","11,224"],a:0,why:"(2 × 5,000) + (2 × 600) + (2 × 7) = 10,000 + 1,200 + 14 = 11,214."},
      {q:"7 × 549 =",o:["3,843","3,743","3,853","3,483"],a:0,why:"(7 × 500) + (7 × 40) + (7 × 9) = 3,500 + 280 + 63 = 3,843."},
      {q:"Expanded form of 74 for multiplying is...",o:["70 + 4","7 + 4","700 + 4","74 + 0"],a:0,why:"74 = 70 + 4 (7 tens and 4 ones)."},
      {q:"3 × 214 =",o:["642","632","624","648"],a:0,why:"(3 × 200) + (3 × 10) + (3 × 4) = 600 + 30 + 12 = 642."},
      {q:"Why write the bigger factor in expanded form before multiplying?",o:["So you can multiply each place value separately, then add","To make the number larger","So you can skip the ones place","So you don't have to add"],a:0,why:"Expanded form breaks the factor into place values you can multiply one at a time."},
      {q:"5 × 128 =",o:["640","620","630","540"],a:0,why:"(5 × 100) + (5 × 20) + (5 × 8) = 500 + 100 + 40 = 640."},
      {q:"6 × 803 =",o:["4,818","4,808","4,918","4,218"],a:0,why:"(6 × 800) + (6 × 3) = 4,800 + 18 = 4,818 (the tens place is 0)."},
      {q:"9 × 412 =",o:["3,708","3,608","3,718","3,618"],a:0,why:"(9 × 400) + (9 × 10) + (9 × 2) = 3,600 + 90 + 18 = 3,708."}
     ]},
    {title:"Use Partial Products",iv:"arearect",
     teach:`<p><b>Partial products</b> is a neat way to organize the Distributive Property. You break a factor into its place-value parts (ones, tens, hundreds, …), multiply each part by the other factor to get "partial products," then add them all up.</p>

       <h4 class="ls-sub">Break into place values</h4>
       <p>To find <b>194 × 3</b>, break 194 into 100 + 90 + 4. Multiply each part by 3: 100 × 3 = 300, 90 × 3 = 270, 4 × 3 = 12. Those three results are the <b>partial products</b>. Add them: 300 + 270 + 12 = <b>582</b>.</p>

       <h4 class="ls-sub">Seeing it in an area model</h4>
       <p>An area model for 194 × 3 is a rectangle 3 tall split into three pieces — 100, 90, and 4 wide. Each piece's area is one partial product (300, 270, 12), and together they fill the whole rectangle. The picture shows why the parts add to the total.</p>

       <h4 class="ls-sub">It works for any size</h4>
       <p>For <b>3,190 × 2</b>: 3,000 × 2 = 6,000; 100 × 2 = 200; 90 × 2 = 180; 0 × 2 = 0. Add the partial products: 6,000 + 200 + 180 = <b>6,380</b>. You can multiply the parts in any order — just be sure to include every place.</p>
       <div class="reallife"><b>Real life:</b> partial products is the bridge to the standard algorithm — it shows exactly where every digit comes from.</div>
       <div class="watchout"><b>Common mistake:</b> forgetting a place value. Every part — including a 0 place — needs its own partial product so nothing gets lost.</div>

       <h4 class="ls-sub">Recap</h4>
       <p>Split a factor into place-value parts, multiply each by the other factor to get partial products, and add them for the total.</p>
       <div class="keybox">194 × 3 = 300 + 270 + 12 = <b>582</b>.</div>`,
     examples:[
      {title:"Partial products of a two-digit number",steps:["Find 86 × 5. Break 86 into 80 + 6.","80 × 5 = 400 and 6 × 5 = 30.","Add the partial products: 400 + 30 = 430."]},
      {title:"Partial products of a three-digit number",steps:["Find 502 × 7. Break 502 into 500 + 0 + 2.","500 × 7 = 3,500; 2 × 7 = 14.","Add: 3,500 + 14 = 3,514."]},
      {title:"Partial products of a four-digit number",steps:["Find 5,367 × 4.","5,000 × 4 = 20,000; 300 × 4 = 1,200; 60 × 4 = 240; 7 × 4 = 28.","Add: 20,000 + 1,200 + 240 + 28 = 21,468."]}
     ],
     quiz:[
      {q:"194 × 3 using partial products =",o:["582","572","558","682"],a:0,why:"300 + 270 + 12 = 582."},
      {q:"The partial products for 86 × 5 are...",o:["400 and 30","80 and 6","400 and 6","86 and 5"],a:0,why:"80 × 5 = 400 and 6 × 5 = 30; add them for 430."},
      {q:"86 × 5 =",vis:{type:'area',a:86,b:5},o:["430","410","480","400"],a:0,why:"400 + 30 = 430."},
      {q:"502 × 7 =",vis:{type:'area',a:502,b:7},o:["3,514","3,504","3,524","3,510"],a:0,why:"(500 × 7) + (2 × 7) = 3,500 + 14 = 3,514."},
      {q:"3,190 × 2 =",o:["6,380","6,280","6,180","5,380"],a:0,why:"6,000 + 200 + 180 = 6,380."},
      {q:"5,367 × 4 =",o:["21,468","21,368","21,448","20,468"],a:0,why:"20,000 + 1,200 + 240 + 28 = 21,468."},
      {q:"What do you do with the partial products after multiplying each place?",o:["add them together","multiply them together","subtract the smallest","keep only the biggest"],a:0,why:"The partial products are added to get the total product."},
      {q:"263 × 4 =",vis:{type:'area',a:263,b:4},o:["1,052","1,042","1,062","952"],a:0,why:"(200 × 4) + (60 × 4) + (3 × 4) = 800 + 240 + 12 = 1,052."},
      {q:"Which is a partial product of 417 × 3?",o:["1,200 (from 400 × 3)","12 (from 4 × 3)","417","1,251 all at once"],a:0,why:"400 × 3 = 1,200 is one of the partial products; add 30 and 21 for 1,251."},
      {q:"Why can you multiply the parts in any order?",o:["Adding the partial products gives the same total either way","Because order changes the answer","It only works for small numbers","You can't — order matters"],a:0,why:"The partial products always add to the same total, whatever order you compute them."}
     ]},
    {title:"Multiply Two-Digit Numbers by One-Digit Numbers",iv:"array",
     teach:`<p>The <b>standard algorithm</b> is the quick, compact way to multiply — it's partial products folded into a few tidy steps. The key skill is <b>regrouping</b> (carrying), just like in addition.</p>

       <h4 class="ls-sub">Multiply the ones, then regroup</h4>
       <p>To find <b>32 × 6</b>: start with the ones. 6 × 2 = 12 ones. That's more than 9, so <b>regroup</b>: write the 2 and carry the 1 ten. Next, multiply the tens: 6 × 3 = 18 tens, plus the 1 ten you carried = 19 tens. Write 19 to the left of the 2. The product is <b>192</b>.</p>

       <h4 class="ls-sub">Line up and work right to left</h4>
       <p>Always multiply the ones digit first, then the tens, carrying any regrouped tens into the next column. For <b>24 × 3</b>: 3 × 4 = 12 (write 2, carry 1); 3 × 2 = 6 tens, + 1 = 7 tens → <b>72</b>.</p>

       <h4 class="ls-sub">Estimate to check</h4>
       <p>Before trusting a product, estimate: for 32 × 6, round to 30 × 6 = 180. Our answer 192 is close, so it's reasonable. The estimate is a quick guard against a slipped digit.</p>
       <div class="reallife"><b>Real life:</b> multiplying a two-digit number by a one-digit number covers tons of everyday math — 8 rows of 24 chairs, 6 boxes of 15, and so on.</div>
       <div class="watchout"><b>Common mistake:</b> forgetting to add the carried ten. After multiplying the tens, add any ten you regrouped from the ones.</div>

       <h4 class="ls-sub">Recap</h4>
       <p>Multiply the ones and regroup if needed, then multiply the tens and add the regrouped ten. Estimate to check that the product is reasonable.</p>
       <div class="keybox">32 × 6: 6 × 2 = 12 (write 2, carry 1); 6 × 3 = 18, + 1 = 19 → <b>192</b>.</div>`,
     examples:[
      {title:"Multiply with regrouping",steps:["Find 24 × 3.","Ones: 3 × 4 = 12 (write 2, carry 1).","Tens: 3 × 2 = 6, + 1 carried = 7 → 72."]},
      {title:"Bigger regrouping",steps:["Find 32 × 6.","Ones: 6 × 2 = 12 (write 2, carry 1).","Tens: 6 × 3 = 18, + 1 = 19 → 192."]},
      {title:"Estimate to check",steps:["Find 47 × 5.","Ones: 5 × 7 = 35 (write 5, carry 3); tens: 5 × 4 = 20, + 3 = 23 → 235.","Check: 50 × 5 = 250, close to 235, so it's reasonable."]}
     ],
     quiz:[
      {q:"32 × 6 =",vis:{type:'area',a:32,b:6},o:["192","182","198","212"],a:0,why:"6 × 2 = 12 (write 2, carry 1); 6 × 3 = 18, + 1 = 19 → 192."},
      {q:"24 × 3 =",vis:{type:'area',a:24,b:3},o:["72","62","74","78"],a:0,why:"3 × 4 = 12 (write 2, carry 1); 3 × 2 = 6, + 1 = 7 → 72."},
      {q:"After multiplying the ones and regrouping, what do you do next?",o:["multiply the tens and add the carried ten","stop","subtract the carried ten","multiply the ones again"],a:0,why:"Move left: multiply the tens, then add any regrouped ten."},
      {q:"47 × 5 =",vis:{type:'area',a:47,b:5},o:["235","205","245","355"],a:0,why:"5 × 7 = 35 (write 5, carry 3); 5 × 4 = 20, + 3 = 23 → 235."},
      {q:"Estimate to check 32 × 6. A reasonable estimate is...",o:["180 (30 × 6)","300","60","192 exactly"],a:0,why:"Round 32 to 30: 30 × 6 = 180, close to the exact 192."},
      {q:"A classroom has 8 rows of 24 chairs. How many chairs?",o:["192","32","182","216"],a:0,why:"24 × 8 = 192 chairs."},
      {q:"68 × 4 =",vis:{type:'area',a:68,b:4},o:["272","242","262","282"],a:0,why:"4 × 8 = 32 (write 2, carry 3); 4 × 6 = 24, + 3 = 27 → 272."},
      {q:"In 56 × 7, the ones step 7 × 6 = 42 means you...",o:["write 2 and carry 4","write 42","write 4 and carry 2","carry 42"],a:0,why:"42 is 4 tens and 2 ones: write 2, carry the 4 tens."},
      {q:"56 × 7 =",vis:{type:'area',a:56,b:7},o:["392","382","362","422"],a:0,why:"7 × 6 = 42 (write 2, carry 4); 7 × 5 = 35, + 4 = 39 → 392."},
      {q:"A store sells 6 boxes with 15 markers each. How many markers?",o:["90","21","80","96"],a:0,why:"15 × 6 = 90 markers."}
     ]},
    {title:"Multiply Three- and Four-Digit Numbers",iv:null,
     teach:`<p>The standard algorithm keeps working no matter how many digits the bigger number has — you just keep multiplying place by place, carrying as you go, all the way to the left.</p>

       <h4 class="ls-sub">Multiply each place, regroup, move left</h4>
       <p>To find <b>795 × 4</b>: ones 4 × 5 = 20 (write 0, carry 2); tens 4 × 9 = 36, + 2 = 38 tens (write 8, carry 3); hundreds 4 × 7 = 28, + 3 = 31 hundreds (write 31). The product is <b>3,180</b>. You can regroup more than one ten or hundred at a time — just add the carry into the next place.</p>

       <h4 class="ls-sub">Four-digit factors</h4>
       <p>Same steps, one more place. For <b>6,084 × 2</b>: ones 2 × 4 = 8; tens 2 × 8 = 16 (write 6, carry 1); hundreds 2 × 0 = 0, + 1 = 1; thousands 2 × 6 = 12. The product is <b>12,168</b>.</p>

       <h4 class="ls-sub">Estimate to check</h4>
       <p>For 795 × 4, estimate with 800 × 4 = 3,200 — close to 3,180, so the answer is reasonable. For big products, the estimate is your best defense against a misplaced digit.</p>
       <div class="reallife"><b>Real life:</b> multi-digit multiplication shows up in money (1,250 tickets × $4), distances, and populations.</div>
       <div class="watchout"><b>Common mistake:</b> dropping a carry across a middle place. Even when a digit is 0 (like the hundreds in 6,084), you still add any carried amount to it.</div>

       <h4 class="ls-sub">Recap</h4>
       <p>Multiply the ones, then tens, hundreds, and thousands, regrouping into the next place each time. Estimate to confirm the product is reasonable.</p>
       <div class="keybox">795 × 4 = <b>3,180</b> (check: 800 × 4 = 3,200, close by).</div>`,
     examples:[
      {title:"Three-digit factor",steps:["Find 123 × 5.","5 × 3 = 15 (write 5, carry 1); 5 × 2 = 10, + 1 = 11 (write 1, carry 1); 5 × 1 = 5, + 1 = 6.","The product is 615."]},
      {title:"Regrouping through a zero",steps:["Find 907 × 3.","3 × 7 = 21 (write 1, carry 2); 3 × 0 = 0, + 2 = 2; 3 × 9 = 27.","The product is 2,721."]},
      {title:"Four-digit factor",steps:["Find 6,084 × 2.","2 × 4 = 8; 2 × 8 = 16 (write 6, carry 1); 2 × 0 = 0, + 1 = 1; 2 × 6 = 12.","The product is 12,168."]}
     ],
     quiz:[
      {q:"795 × 4 =",vis:{type:'area',a:795,b:4},o:["3,180","3,160","3,280","2,180"],a:0,why:"Multiply each place with regrouping → 3,180."},
      {q:"123 × 5 =",vis:{type:'area',a:123,b:5},o:["615","515","605","625"],a:0,why:"5 × 3 = 15 (carry 1); 5 × 2 = 10, + 1 = 11 (carry 1); 5 × 1 = 5, + 1 = 6 → 615."},
      {q:"907 × 3 =",vis:{type:'area',a:907,b:3},o:["2,721","2,701","2,731","2,621"],a:0,why:"3 × 7 = 21 (carry 2); 3 × 0 = 0, + 2 = 2; 3 × 9 = 27 → 2,721."},
      {q:"6,084 × 2 =",o:["12,168","12,068","12,268","11,168"],a:0,why:"Carry through: 2 × 8 = 16 (carry 1); the 0 hundreds becomes 1 → 12,168."},
      {q:"Estimate to check 795 × 4. A reasonable estimate is...",o:["3,200 (800 × 4)","400","3,180 exactly","32,000"],a:0,why:"Round 795 to 800: 800 × 4 = 3,200, close to 3,180."},
      {q:"When the hundreds digit is 0 (as in 6,084), you should...",o:["still add any carried amount to it","skip that place","write 9 there","stop multiplying"],a:0,why:"A 0 place still receives any carry from the place to its right."},
      {q:"A stadium sells 1,250 tickets at $4 each. Total sales?",o:["$5,000","$500","$50,000","$1,254"],a:0,why:"1,250 × 4 = 5,000."},
      {q:"438 × 6 =",vis:{type:'area',a:438,b:6},o:["2,628","2,618","2,528","2,648"],a:0,why:"6 × 8 = 48 (carry 4); 6 × 3 = 18, + 4 = 22 (carry 2); 6 × 4 = 24, + 2 = 26 → 2,628."},
      {q:"2,506 × 3 =",o:["7,518","7,508","7,618","7,528"],a:0,why:"3 × 6 = 18 (carry 1); 3 × 0 = 0, + 1 = 1; 3 × 5 = 15 (carry 1); 3 × 2 = 6, + 1 = 7 → 7,518."},
      {q:"A factory makes 375 toys a day. How many in 8 days?",o:["3,000","2,900","3,075","24"],a:0,why:"375 × 8 = 3,000 toys."}
     ]},
    {title:"Use Properties to Multiply",iv:"array",
     teach:`<p>Three <b>properties of multiplication</b> let you rearrange and regroup factors to make a problem easier. Good mathematicians look at the numbers first, then pick the property that turns a hard product into an easy one.</p>

       <h4 class="ls-sub">Commutative Property (order)</h4>
       <p>You can multiply in <b>any order</b> and get the same product: 4 × 25 = 25 × 4. This is handy when one order is easier — 4 × 9 × 25 is simpler as 9 × (4 × 25) = 9 × 100 = <b>900</b>.</p>

       <h4 class="ls-sub">Associative Property (grouping)</h4>
       <p>You can <b>group</b> factors however you like: (a × b) × c = a × (b × c). To find 8 × 250, think of 8 as 4 × 2: 8 × 250 = (4 × 2) × 250 = 4 × (2 × 250) = 4 × 500 = <b>2,000</b>. Regrouping made a friendly 500 appear.</p>

       <h4 class="ls-sub">Distributive Property (break apart)</h4>
       <p>You can break a factor into a <b>difference</b>, not just a sum. Since 698 = 700 − 2, 5 × 698 = 5 × (700 − 2) = (5 × 700) − (5 × 2) = 3,500 − 10 = <b>3,490</b>. Multiplying by the friendly 700 and adjusting is far easier than the long way.</p>
       <div class="reallife"><b>Real life:</b> mental-math shortcuts like buying 4 items at $25 (just think $100) come straight from these properties.</div>
       <div class="watchout"><b>Common mistake:</b> with the Distributive Property over subtraction, forgetting to subtract the second part. 5 × (700 − 2) is 3,500 − 10, not 3,500 − 2.</div>

       <h4 class="ls-sub">Recap</h4>
       <p>Use the <b>Commutative</b> (order), <b>Associative</b> (grouping), and <b>Distributive</b> (break apart) properties to reshape a product into something you can do in your head.</p>
       <div class="keybox">8 × 250 = (4 × 2) × 250 = 4 × 500 = <b>2,000</b>.</div>`,
     examples:[
      {title:"Use the Associative Property",steps:["Find 8 × 250. Think of 8 as 4 × 2.","(4 × 2) × 250 = 4 × (2 × 250) = 4 × 500.","4 × 500 = 2,000."]},
      {title:"Use the Distributive Property with subtraction",steps:["Find 5 × 698. Think of 698 as 700 − 2.","(5 × 700) − (5 × 2) = 3,500 − 10.","3,500 − 10 = 3,490."]},
      {title:"Use the Commutative Property",steps:["Find 4 × 9 × 25. Reorder to pair friendly factors.","9 × (4 × 25) = 9 × 100.","9 × 100 = 900."]}
     ],
     quiz:[
      {q:"8 × 250 =",o:["2,000","2,050","200","1,600"],a:0,why:"(4 × 2) × 250 = 4 × 500 = 2,000 (Associative Property)."},
      {q:"5 × 698 using 5 × (700 − 2) =",o:["3,490","3,500","3,480","3,510"],a:0,why:"(5 × 700) − (5 × 2) = 3,500 − 10 = 3,490."},
      {q:"4 × 9 × 25 (reordered) =",o:["900","225","100","36"],a:0,why:"9 × (4 × 25) = 9 × 100 = 900 (Commutative + Associative)."},
      {q:"Which property lets you multiply factors in any order?",o:["Commutative","Associative","Distributive","Identity"],a:0,why:"The Commutative Property means order doesn't change the product."},
      {q:"Which property lets you regroup which factors you multiply first?",o:["Associative","Commutative","Distributive","Rounding"],a:0,why:"The Associative Property changes the grouping: (a × b) × c = a × (b × c)."},
      {q:"6 × 150 (using properties) =",o:["900","800","950","750"],a:0,why:"6 × 150 = 6 × (100 + 50) = 600 + 300 = 900."},
      {q:"9 × 5,001 using 9 × (5,000 + 1) =",o:["45,009","45,000","45,010","54,009"],a:0,why:"(9 × 5,000) + (9 × 1) = 45,000 + 9 = 45,009."},
      {q:"25 × 7 × 4 is easiest if you first multiply...",o:["25 × 4 = 100","25 × 7 = 175","7 × 4 = 28","none of these"],a:0,why:"Pairing 25 × 4 = 100 makes it 100 × 7 = 700 in one easy step."},
      {q:"3 × 494 using 3 × (500 − 6) =",o:["1,482","1,500","1,488","1,470"],a:0,why:"(3 × 500) − (3 × 6) = 1,500 − 18 = 1,482."},
      {q:"9 × 4,999 using 9 × (5,000 − 1) =",o:["44,991","45,000","44,891","45,009"],a:0,why:"(9 × 5,000) − (9 × 1) = 45,000 − 9 = 44,991."}
     ]},
    {title:"Problem Solving: Multiplication",iv:null,
     teach:`<p>Word problems that involve multiplication use the same four-step plan you already know: <b>Understand, Plan, Solve, Check.</b> Many are <b>multi-step</b>, and some include extra information you don't need.</p>

       <h4 class="ls-sub">Make a plan with letters</h4>
       <p>Read carefully, then name each unknown with a letter. Example: <i>A coach buys 6 cases of sports drinks. Each case has 28 bottles. The team drinks 85 bottles. How many are left?</i> <b>Step 1</b>: how many bottles in all? 28 × 6 = <b>k</b>, so k = 168. <b>Step 2</b>: how many left? 168 − 85 = <b>n</b>, so n = <b>83</b>. The dollar amount the coach spent is <b>extra information</b> — you don't need it.</p>

       <h4 class="ls-sub">Watch for multi-step problems</h4>
       <p>Some problems chain a multiplication into another operation. <i>A stable has 28 horses. Each eats about 18 pounds of hay a day. About how much hay do they need for a week?</i> First find one day: 28 × 18 = 504 lb. Then a week (7 days): 504 × 7 = <b>3,528 lb</b>. Take it one step at a time.</p>

       <h4 class="ls-sub">Check for reasonableness</h4>
       <p>Finish by estimating. For 28 × 6, round to 30 × 6 = 180, close to 168 — reasonable. Always re-read the question to be sure you answered what was actually asked (here, bottles <i>left</i>, not bottles in all).</p>
       <div class="reallife"><b>Real life:</b> planning supplies for an event, figuring out earnings, or scaling a recipe are all multi-step multiplication problems.</div>
       <div class="watchout"><b>Common mistake:</b> using extra numbers. A problem may include facts you don't need — decide what the question asks before you multiply.</div>

       <h4 class="ls-sub">Recap</h4>
       <p>Understand the problem, plan with letters for the unknowns, solve step by step (ignoring extra info), and check that your answer is reasonable and answers the question.</p>
       <div class="keybox">6 cases × 28 = 168 bottles; 168 − 85 = <b>83</b> bottles left.</div>`,
     examples:[
      {title:"Two-step: multiply, then subtract",steps:["A coach buys 6 cases of 28 bottles; the team drinks 85. How many left?","Step 1: 28 × 6 = 168 bottles in all.","Step 2: 168 − 85 = 83 bottles left."]},
      {title:"Two-step: multiply, then multiply",steps:["28 horses each eat 18 lb of hay a day. How much in 1 week?","Step 1 (one day): 28 × 18 = 504 lb.","Step 2 (7 days): 504 × 7 = 3,528 lb."]},
      {title:"Ignore extra information",steps:["A store has 8 shelves of 45 cans and a $200 budget. How many cans?","The budget is extra — the question asks for cans.","8 × 45 = 360 cans."]}
     ],
     quiz:[
      {q:"A coach buys 6 cases of 28 bottles. The team drinks 85. How many are left?",o:["83","168","253","93"],a:0,why:"6 × 28 = 168; 168 − 85 = 83."},
      {q:"28 horses each eat 18 lb of hay a day. About how much in 1 week (7 days)?",o:["3,528 lb","504 lb","224 lb","3,428 lb"],a:0,why:"28 × 18 = 504 lb/day; 504 × 7 = 3,528 lb."},
      {q:"In the bottle problem, the money the coach spent is...",o:["extra information you don't need","the answer","needed for step 1","needed for step 2"],a:0,why:"The question asks for bottles left, so the dollar amount is unnecessary."},
      {q:"A store has 8 shelves of 45 cans. How many cans in all?",o:["360","53","320","405"],a:0,why:"45 × 8 = 360 cans."},
      {q:"A bakery makes 125 muffins a day. How many in a 6-day week?",o:["750","650","720","131"],a:0,why:"125 × 6 = 750 muffins."},
      {q:"A theater has 24 rows of 18 seats. If 300 seats are sold, how many are empty?",o:["132","432","432 sold","150"],a:0,why:"24 × 18 = 432 seats; 432 − 300 = 132 empty."},
      {q:"After solving a multi-step problem, you should always...",o:["re-read the question and check reasonableness","use every number given","stop after step 1","round the final answer"],a:0,why:"Make sure your answer is reasonable and actually answers what was asked."},
      {q:"A class of 28 students each brings 15 cans for a food drive. How many cans total?",o:["420","43","410","280"],a:0,why:"28 × 15 = 420 cans."},
      {q:"A farmer has 9 crates of 144 apples, then sells 500. How many are left?",o:["796","1,296","1,796","644"],a:0,why:"9 × 144 = 1,296; 1,296 − 500 = 796."},
      {q:"Which is the correct plan for 'how many wheels on 34 cars (4 wheels each)?'",o:["multiply 34 × 4","add 34 + 4","subtract 34 − 4","divide 34 ÷ 4"],a:0,why:"Equal groups of 4 wheels means multiply: 34 × 4 = 136 wheels."}
     ]}
   ],
   test:[
    {q:"42 = 6 × 7. Which comparison is true?",o:["42 is 6 times as many as 7","42 is 6 more than 7","42 is 7 more than 6","7 is 6 times as many as 42"],a:0,why:"A product equation reads as 'times as many': 42 is 6 times as many as 7."},
    {q:"Write '15 is 3 times as many as 5' as an equation.",o:["15 = 3 × 5","15 = 3 + 5","15 = 5 − 3","15 = 5 ÷ 3"],a:0,why:"'Times as many' means multiply: 15 = 3 × 5."},
    {q:"8 × 500 =",o:["4,000","400","40,000","450"],a:0,why:"8 × 5 = 40, plus two zeros → 4,000."},
    {q:"6 × 9,000 =",o:["54,000","5,400","63,000","540,000"],a:0,why:"6 × 9 = 54, plus three zeros → 54,000."},
    {q:"Estimate 7 × 491 by rounding.",o:["3,500","3,400","350","4,900"],a:0,why:"491 rounds to 500; 7 × 500 = 3,500."},
    {q:"The product 4 × 76 is between which two estimates?",o:["280 and 320","70 and 80","300 and 400","240 and 280"],a:0,why:"4 × 70 = 280 and 4 × 80 = 320, so the product is between 280 and 320."},
    {q:"3 × 12 = 3 × (10 + 2) =",o:["36","32","30","23"],a:0,why:"(3 × 10) + (3 × 2) = 30 + 6 = 36."},
    {q:"6 × 18 using (6 × 10) + (6 × 8) =",o:["108","98","68","148"],a:0,why:"60 + 48 = 108."},
    {q:"8 × 74 =",o:["592","582","632","560"],a:0,why:"(8 × 70) + (8 × 4) = 560 + 32 = 592."},
    {q:"2 × 5,607 =",o:["11,214","11,204","10,214","11,224"],a:0,why:"(2 × 5,000) + (2 × 600) + (2 × 7) = 10,000 + 1,200 + 14 = 11,214."},
    {q:"194 × 3 using partial products =",o:["582","572","558","682"],a:0,why:"(100 × 3) + (90 × 3) + (4 × 3) = 300 + 270 + 12 = 582."},
    {q:"3,190 × 2 =",o:["6,380","6,280","6,180","5,380"],a:0,why:"(3,000 × 2) + (100 × 2) + (90 × 2) = 6,000 + 200 + 180 = 6,380."},
    {q:"32 × 6 =",vis:{type:'area',a:32,b:6},o:["192","182","198","212"],a:0,why:"6 × 2 = 12 (write 2, carry 1); 6 × 3 = 18, + 1 = 19 tens → 192."},
    {q:"47 × 5 =",vis:{type:'area',a:47,b:5},o:["235","205","245","355"],a:0,why:"5 × 7 = 35 (write 5, carry 3); 5 × 4 = 20, + 3 = 23 tens → 235."},
    {q:"795 × 4 =",vis:{type:'area',a:795,b:4},o:["3,180","3,160","3,280","2,180"],a:0,why:"Multiply each place and regroup: 795 × 4 = 3,180."},
    {q:"6,084 × 2 =",o:["12,168","12,068","12,268","11,168"],a:0,why:"6,084 × 2 = 12,168."},
    {q:"8 × 250 (using properties) =",o:["2,000","2,050","200","1,600"],a:0,why:"8 × 250 = (4 × 2) × 250 = 4 × 500 = 2,000."},
    {q:"5 × 698 using 5 × (700 − 2) =",o:["3,490","3,500","3,480","3,510"],a:0,why:"(5 × 700) − (5 × 2) = 3,500 − 10 = 3,490."},
    {q:"A farm packs 7 boxes of 24 eggs. 39 eggs break. How many good eggs remain?",o:["129","168","207","119"],a:0,why:"7 × 24 = 168 eggs; 168 − 39 = 129 good eggs."},
    {q:"A juice stand fills 38 cups from each of 6 jugs. About how many cups in all (estimate)?",o:["about 240","about 44","about 200","about 2,400"],a:0,why:"Round 38 to 40: 40 × 6 = 240 cups."},
    {q:"Performance Task: An aquarium tank refills at 1,150 liters per hour. How much water fills in 6 hours?",o:["6,900 L","6,800 L","1,156 L","7,900 L"],a:0,why:"Distance filled = rate × time = 1,150 × 6 = 6,900 L."},
    {q:"Performance Task: The big tank holds 3,875 L more than the reef tank's 9,260 L. ESTIMATE the big tank's volume.",o:["about 13,000 L","about 5,000 L","about 40,000 L","about 90,000 L"],a:0,why:"Round and add: 9,000 + 4,000 ≈ 13,000 L."},
    {q:"Performance Task: Exactly how much does the big tank hold (9,260 + 3,875)?",o:["13,135 L","13,035 L","12,135 L","14,135 L"],a:0,why:"9,260 + 3,875 = 13,135 L — close to the 13,000 estimate, so it's reasonable."},
    {q:"Performance Task: A shark eats about 4 times as much as a turtle that eats 1,250 lb a month. How much does the shark eat?",o:["5,000 lb","1,254 lb","2,500 lb","500 lb"],a:0,why:"4 times as much: 4 × 1,250 = 5,000 lb."},
    {q:"Performance Task: The show pool has 8 rows of 125 seats. How many seats in all?",o:["1,000","1,025","133","900"],a:0,why:"8 × 125 = 1,000 seats."},
    {q:"Performance Task: The aquarium expects about 1,480 visitors a day. ESTIMATE the total for a 7-day week.",o:["about 10,500","about 7,000","about 1,500","about 105,000"],a:0,why:"Round 1,480 to 1,500: 1,500 × 7 = 10,500 visitors."}
   ]},

  {id:"g4u4mul",name:"Multiply by Two-Digit Numbers",icon:"✖️",code:"4.NBT",accent:"#8b5cf6",
   sections:[
    {title:"Multiply by Multiples of Ten",iv:"array",
     teach:`<p>Before multiplying two full two-digit numbers, it helps to master an easier case: multiplying by <b>multiples of ten</b> like 20, 30, or 90. Just like before, <b>place value</b> makes it quick.</p>

       <h4 class="ls-sub">Use place value</h4>
       <p>To find <b>40 × 20</b>, think of 20 as <b>2 tens</b>. Then 40 × 20 = 40 × 2 tens = 80 tens = <b>800</b>. In the same way, 12 × 30 = 12 × 3 tens = 36 tens = <b>360</b>. You multiply the non-zero parts, then count the tens.</p>

       <h4 class="ls-sub">Use the Associative Property</h4>
       <p>Another clean way is to <b>regroup</b> the factors. Rewrite 20 as 2 × 10: 40 × 20 = 40 × (2 × 10) = (40 × 2) × 10 = 80 × 10 = <b>800</b>. And 12 × 30 = 12 × (3 × 10) = (12 × 3) × 10 = 36 × 10 = <b>360</b>. Grouping the 10 last makes the final step a simple "attach a zero."</p>

       <h4 class="ls-sub">The zeros pattern</h4>
       <p>Notice the shortcut: multiply the front numbers, then attach the total number of zeros from both factors. 40 × 20 → 4 × 2 = 8, plus two zeros → 800. 50 × 80 → 5 × 8 = 40, plus two zeros → 4,000 (the fact's own zero counts too!).</p>
       <div class="reallife"><b>Real life:</b> "30 crates of 40 cans" or "20 rows of 15 seats" are exactly this kind of multiply-by-a-multiple-of-ten problem.</div>
       <div class="watchout"><b>Common mistake:</b> losing a zero. Count every zero — in 50 × 80 the answer is 4,000, not 400, because 5 × 8 = 40 already has a zero, plus two more from the tens.</div>

       <h4 class="ls-sub">Recap</h4>
       <p>To multiply by a multiple of ten, use place value (count the tens) or the Associative Property (group the 10 last). Multiply the front numbers and attach all the zeros.</p>
       <div class="keybox">40 × 20 = (40 × 2) × 10 = 80 × 10 = <b>800</b>.</div>`,
     examples:[
      {title:"Multiply using place value",steps:["Find 12 × 30.","12 × 3 tens = 36 tens.","36 tens = 360."]},
      {title:"Use the Associative Property",steps:["Find 40 × 20. Rewrite 20 as 2 × 10.","(40 × 2) × 10 = 80 × 10.","80 × 10 = 800."]},
      {title:"Watch the zeros",steps:["Find 50 × 80.","5 × 8 = 40 (already one zero).","Attach two more zeros from the tens → 4,000."]}
     ],
     quiz:[
      {q:"40 × 20 =",vis:{type:'area',a:40,b:20},o:["800","80","8,000","600"],a:0,why:"40 × 2 tens = 80 tens = 800."},
      {q:"12 × 30 =",vis:{type:'area',a:12,b:30},o:["360","36","3,600","330"],a:0,why:"12 × 3 tens = 36 tens = 360."},
      {q:"Using the Associative Property, 40 × 20 = (40 × 2) × 10 =",o:["800","420","80","8,000"],a:0,why:"(40 × 2) × 10 = 80 × 10 = 800."},
      {q:"70 × 40 =",vis:{type:'area',a:70,b:40},o:["2,800","280","28,000","740"],a:0,why:"7 × 4 = 28, plus two zeros → 2,800."},
      {q:"50 × 80 =",vis:{type:'area',a:50,b:80},o:["4,000","400","40,000","4,400"],a:0,why:"5 × 8 = 40 (one zero), plus two more → 4,000."},
      {q:"24 × 90 =",vis:{type:'area',a:24,b:90},o:["2,160","216","21,600","2,140"],a:0,why:"24 × 9 = 216, plus one zero → 2,160."},
      {q:"45 × 60 =",vis:{type:'area',a:45,b:60},o:["2,700","270","27,000","2,400"],a:0,why:"45 × 6 = 270, plus one zero → 2,700."},
      {q:"How can 2 × 3 help you find 20 × 30?",o:["2 × 3 = 6, then attach two zeros → 600","20 × 30 = 6","it doesn't help","20 × 30 = 60"],a:0,why:"Use the fact 6 and attach the two zeros from 20 and 30 → 600."},
      {q:"A warehouse has 30 crates of 40 cans each. How many cans?",o:["1,200","120","12,000","70"],a:0,why:"30 × 40 = 1,200 (3 × 4 = 12, plus two zeros)."},
      {q:"60 × 50 =",vis:{type:'area',a:60,b:50},o:["3,000","300","30,000","3,300"],a:0,why:"6 × 5 = 30 (one zero), plus two more → 3,000."}
     ]},
    {title:"Estimate Products",iv:"roundline",
     teach:`<p>You can estimate the product of two two-digit numbers two handy ways: by <b>rounding</b>, or by using <b>compatible numbers</b>. Both give a quick answer that's close to the real one — perfect for checking reasonableness.</p>

       <h4 class="ls-sub">Estimate by rounding</h4>
       <p>Round each factor to the nearest ten, then multiply. To estimate <b>57 × 38</b>, round to 60 × 40 = <b>2,400</b>. The exact product is 2,166 — so 2,400 is a solid estimate.</p>

       <h4 class="ls-sub">Estimate with compatible numbers</h4>
       <p><b>Compatible numbers</b> are numbers that are <b>easy to multiply</b> and close to the real ones. Sometimes they estimate better than rounding. For <b>24 × 31</b>, think "24 is close to 25 and 31 is close to 30," and 25 × 30 is easy: <b>750</b>. (The exact answer is 744 — very close!)</p>

       <h4 class="ls-sub">Which estimate is closer?</h4>
       <p>Different choices give different estimates, and that's fine — an estimate just needs to be close. If you round 29 × 37 to 30 × 40 you get 1,200, but the compatible pair 30 × 37 → wait, 25 × 40 gives 1,000. Choosing numbers nearest to the originals usually lands you closest to the true product (1,073 here).</p>
       <div class="reallife"><b>Real life:</b> estimating products helps you judge "will 18 boxes of 22 be about 400?" before doing the exact math.</div>
       <div class="watchout"><b>Common mistake:</b> rounding one factor but forgetting the other. Estimate <i>both</i> factors, then multiply the friendly numbers.</div>

       <h4 class="ls-sub">Recap</h4>
       <p>Estimate a product by rounding both factors to the nearest ten, or by choosing compatible numbers that are easy to multiply and close to the originals. Use the estimate to check that an exact answer is reasonable.</p>
       <div class="keybox">Estimate 57 × 38 ≈ 60 × 40 = <b>2,400</b>. Or 24 × 31 ≈ 25 × 30 = <b>750</b>.</div>`,
     examples:[
      {title:"Estimate by rounding",steps:["Estimate 27 × 50.","Round: 27 → 30, 50 stays 50.","30 × 50 = 1,500."]},
      {title:"Estimate by rounding again",steps:["Estimate 61 × 73.","Round: 61 → 60, 73 → 70.","60 × 70 = 4,200."]},
      {title:"Estimate with compatible numbers",steps:["Estimate 24 × 31.","24 is close to 25 and 31 is close to 30.","25 × 30 = 750."]}
     ],
     quiz:[
      {q:"Estimate 57 × 38 by rounding to the nearest ten.",o:["2,400","2,000","240","1,500"],a:0,why:"57 → 60 and 38 → 40; 60 × 40 = 2,400."},
      {q:"Compatible numbers are numbers that are...",o:["easy to multiply and close to the real ones","always exactly right","the largest possible","only even numbers"],a:0,why:"Compatible numbers are easy to compute with and near the actual factors."},
      {q:"Estimate 24 × 31 using compatible numbers.",o:["750","600","900","744"],a:0,why:"24 ≈ 25 and 31 ≈ 30; 25 × 30 = 750."},
      {q:"Estimate 27 × 50 by rounding.",o:["1,500","1,350","150","2,000"],a:0,why:"27 → 30; 30 × 50 = 1,500."},
      {q:"Estimate 61 × 73 by rounding.",o:["4,200","4,900","420","3,600"],a:0,why:"61 → 60 and 73 → 70; 60 × 70 = 4,200."},
      {q:"Estimate 42 × 14 by rounding to the nearest ten.",o:["400","600","800","560"],a:0,why:"42 → 40 and 14 → 10; 40 × 10 = 400."},
      {q:"Which compatible pair best estimates 19 × 26?",o:["20 × 25 = 500","10 × 20 = 200","20 × 30 = 600","19 × 26 = 494"],a:0,why:"19 ≈ 20 and 26 ≈ 25; 20 × 25 = 500 (close to the exact 494)."},
      {q:"When you estimate a product, you should round...",o:["both factors","only the bigger factor","only the smaller factor","neither factor"],a:0,why:"Estimate both factors, then multiply the friendly numbers."},
      {q:"Estimate 74 × 20.",o:["1,400","1,600","140","2,100"],a:0,why:"74 → 70; 70 × 20 = 1,400."},
      {q:"A store orders 23 boxes of 78 pens. About how many pens (compatible numbers)?",o:["about 1,600 (20 × 80)","about 160","about 100","about 200"],a:0,why:"23 ≈ 20 and 78 ≈ 80; 20 × 80 = 1,600."}
     ]},
    {title:"Use Area Models to Multiply",iv:"arearect",
     teach:`<p>When both factors have two digits, an <b>area model</b> keeps everything organized. You break <b>each</b> factor into tens and ones, which splits a big rectangle into <b>four smaller ones</b>. Find each small area (a partial product), then add them all.</p>

       <h4 class="ls-sub">Break both factors apart</h4>
       <p>To find <b>12 × 14</b>, break 12 into 10 + 2 and 14 into 10 + 4. Picture a rectangle 12 tall and 14 wide, sliced into four pieces:</p>
       <p style="text-align:center">10 × 10 = 100 · 10 × 4 = 40 · 2 × 10 = 20 · 2 × 4 = 8</p>
       <p>Add the four partial products: 100 + 40 + 20 + 8 = <b>252</b>. That's 12 × 14. The four rectangles together make the whole area — that's why the parts add to the answer.</p>

       <h4 class="ls-sub">Bigger numbers, same idea</h4>
       <p>For <b>17 × 15</b>: break into 10 + 7 and 10 + 5. The four areas are 10 × 10 = 100, 10 × 5 = 50, 7 × 10 = 70, and 7 × 5 = 35. Add: 100 + 50 + 70 + 35 = <b>255</b>. Use the rectangle tool to watch the areas build up.</p>
       <div class="reallife"><b>Real life:</b> area models literally show area — like tiling a 17-by-15 patio and counting the tiles by sections.</div>
       <div class="watchout"><b>Common mistake:</b> finding only two of the four pieces. Both factors split in two, so there are always <b>four</b> partial products to add.</div>

       <h4 class="ls-sub">Recap</h4>
       <p>Break each two-digit factor into tens and ones, making four rectangles. Find each area (partial product) and add all four for the total product.</p>
       <div class="keybox">12 × 14 = 100 + 40 + 20 + 8 = <b>252</b>.</div>`,
     examples:[
      {title:"Four partial products",steps:["Find 12 × 14. Break: 10 + 2 and 10 + 4.","Areas: 100, 40, 20, 8.","Add: 100 + 40 + 20 + 8 = 252."]},
      {title:"Another area model",steps:["Find 17 × 15. Break: 10 + 7 and 10 + 5.","Areas: 100, 50, 70, 35.","Add: 100 + 50 + 70 + 35 = 255."]},
      {title:"A larger one",steps:["Find 34 × 22. Break: 30 + 4 and 20 + 2.","Areas: 600, 60, 80, 8.","Add: 600 + 60 + 80 + 8 = 748."]}
     ],
     quiz:[
      {q:"An area model for a two-digit × two-digit product has how many small rectangles?",o:["4","2","3","1"],a:0,why:"Each factor splits into tens and ones, making 4 pieces."},
      {q:"12 × 14 =",vis:{type:'area',a:12,b:14},o:["252","242","258","262"],a:0,why:"100 + 40 + 20 + 8 = 252."},
      {q:"For 12 × 14, which is NOT one of the four partial products?",o:["10 × 14","10 × 10","10 × 4","2 × 4"],a:0,why:"You break BOTH factors: the pieces are 10×10, 10×4, 2×10, 2×4 — not 10×14."},
      {q:"17 × 15 =",vis:{type:'area',a:17,b:15},o:["255","245","265","250"],a:0,why:"100 + 50 + 70 + 35 = 255."},
      {q:"34 × 22 =",vis:{type:'area',a:34,b:22},o:["748","738","848","658"],a:0,why:"600 + 60 + 80 + 8 = 748."},
      {q:"The four areas for 13 × 12 are 100, 30, 20, and 6. The product is...",o:["156","150","126","136"],a:0,why:"100 + 30 + 20 + 6 = 156."},
      {q:"Why do the four rectangle areas add up to the product?",o:["Together they cover the whole rectangle","Because the numbers are small","It only works for squares","They don't — you multiply them"],a:0,why:"The four pieces tile the entire rectangle, so their areas add to the total area (the product)."},
      {q:"23 × 21 =",vis:{type:'area',a:23,b:21},o:["483","463","493","443"],a:0,why:"(20×20)+(20×1)+(3×20)+(3×1) = 400+20+60+3 = 483."},
      {q:"15 × 16 =",vis:{type:'area',a:15,b:16},o:["240","230","250","220"],a:0,why:"(10×10)+(10×6)+(5×10)+(5×6) = 100+60+50+30 = 240."},
      {q:"A patio is 17 tiles by 15 tiles. Using an area model, how many tiles?",o:["255","245","265","32"],a:0,why:"17 × 15 = 255 tiles (100 + 50 + 70 + 35)."}
     ]},
    {title:"Use the Distributive Property",iv:"arearect",
     teach:`<p>The area model is a picture of the <b>Distributive Property</b>. When you write it out with symbols, you break each factor into tens and ones and multiply every part by every part.</p>

       <h4 class="ls-sub">Break one factor, or both</h4>
       <p>For <b>17 × 25</b>, you can break just one factor: 17 × 25 = (10 + 7) × 25 = (10 × 25) + (7 × 25) = 250 + 175 = <b>425</b>. Or break <b>both</b>: (10 + 7) × (20 + 5) = (10 × 20) + (7 × 20) + (10 × 5) + (7 × 5) = 200 + 140 + 50 + 35 = <b>425</b>. Same answer either way.</p>

       <h4 class="ls-sub">Every part times every part</h4>
       <p>When you break both factors, make sure each piece of one factor multiplies each piece of the other. For <b>32 × 19</b>, break 19 into 10 + 9: 32 × 19 = (32 × 10) + (32 × 9) = 320 + 288 = <b>608</b>. Breaking the smaller factor into 10 + 9 kept it to two easy products.</p>
       <div class="reallife"><b>Real life:</b> the Distributive Property is the reason the standard algorithm works — it's the math behind "multiply, then add the pieces."</div>
       <div class="watchout"><b>Common mistake:</b> missing a product when both factors are split. Four pieces means four products — don't stop at two.</div>

       <h4 class="ls-sub">Recap</h4>
       <p>Use the Distributive Property to break a factor (or both) into tens and ones, multiply each part by each part, and add all the products.</p>
       <div class="keybox">17 × 25 = (10 × 25) + (7 × 25) = 250 + 175 = <b>425</b>.</div>`,
     examples:[
      {title:"Break one factor",steps:["Find 17 × 25. Break 17 into 10 + 7.","(10 × 25) + (7 × 25) = 250 + 175.","250 + 175 = 425."]},
      {title:"Break both factors",steps:["Find 17 × 25 again. Break into (10 + 7) × (20 + 5).","200 + 140 + 50 + 35.","The four products add to 425."]},
      {title:"Break the smaller factor",steps:["Find 32 × 19. Break 19 into 10 + 9.","(32 × 10) + (32 × 9) = 320 + 288.","320 + 288 = 608."]}
     ],
     quiz:[
      {q:"17 × 25 = (10 × 25) + (7 × 25) =",o:["425","415","435","525"],a:0,why:"250 + 175 = 425."},
      {q:"Breaking BOTH factors, 17 × 25 = (10 + 7) × (20 + 5). How many products do you add?",o:["4","2","3","1"],a:0,why:"Every part times every part gives 4 products: 200 + 140 + 50 + 35."},
      {q:"32 × 19 = (32 × 10) + (32 × 9) =",o:["608","598","618","708"],a:0,why:"320 + 288 = 608."},
      {q:"Which correctly uses the Distributive Property for 24 × 13?",o:["(24 × 10) + (24 × 3)","(24 × 10) × (24 × 3)","24 × 10 × 3","(24 + 10) × (24 + 3)"],a:0,why:"Break 13 into 10 + 3, multiply each by 24, then add."},
      {q:"24 × 13 =",vis:{type:'area',a:24,b:13},o:["312","302","322","412"],a:0,why:"(24 × 10) + (24 × 3) = 240 + 72 = 312."},
      {q:"For 15 × 23 broken both ways, the four products are 200, 30, 60, and 9. Wait — recompute (10+5)(20+3):",o:["200 + 30 + 100 + 15 = 345","200 + 30 + 60 + 9","100 + 15 + 200 + 30 = 345 differently","250"],a:0,why:"(10×20)+(10×3)+(5×20)+(5×3) = 200+30+100+15 = 345."},
      {q:"45 × 12 =",vis:{type:'area',a:45,b:12},o:["540","520","560","440"],a:0,why:"(45 × 10) + (45 × 2) = 450 + 90 = 540."},
      {q:"Why does breaking both factors still give the right product?",o:["Every part multiplies every part, and the pieces add to the whole","Because the numbers get smaller","It only works for even numbers","It gives a close estimate, not the exact answer"],a:0,why:"The Distributive Property guarantees all part-by-part products add to the full product."},
      {q:"53 × 11 =",vis:{type:'area',a:53,b:11},o:["583","573","593","483"],a:0,why:"(53 × 10) + (53 × 1) = 530 + 53 = 583."},
      {q:"28 × 14 =",vis:{type:'area',a:28,b:14},o:["392","382","402","292"],a:0,why:"(28 × 10) + (28 × 4) = 280 + 112 = 392."}
     ]},
    {title:"Use Partial Products",iv:"arearect",
     teach:`<p><b>Partial products</b> is the area model written as a neat list. You multiply each place of one factor by each place of the other, write down every "partial product," then add them all.</p>

       <h4 class="ls-sub">Four partial products</h4>
       <p>To find <b>24 × 53</b>, think of 24 as 20 + 4 and 53 as 50 + 3. The four partial products are: 20 × 50 = 1,000; 20 × 3 = 60; 4 × 50 = 200; 4 × 3 = 12. Add them: 1,000 + 60 + 200 + 12 = <b>1,272</b>.</p>

       <h4 class="ls-sub">You can multiply in any order</h4>
       <p>For <b>27 × 48</b>: 20 × 40 = 800; 7 × 40 = 280; 20 × 8 = 160; 7 × 8 = 56. Add: 800 + 280 + 160 + 56 = <b>1,296</b>. It doesn't matter which partial product you compute first — as long as you get all four and add them.</p>

       <h4 class="ls-sub">Check with an estimate</h4>
       <p>Estimate 27 × 48 as 30 × 50 = 1,500. Our 1,296 is in the right ballpark, so it's reasonable. Partial products is the direct bridge to the standard algorithm — it shows exactly where each digit comes from.</p>
       <div class="reallife"><b>Real life:</b> partial products makes big multiplications trustworthy because you can see and check every piece.</div>
       <div class="watchout"><b>Common mistake:</b> forgetting the place value. 20 × 50 is 1,000, not 100 — keep track of the tens in each factor.</div>

       <h4 class="ls-sub">Recap</h4>
       <p>Split both factors into tens and ones, multiply to get four partial products, then add them. Estimate to check that the product is reasonable.</p>
       <div class="keybox">24 × 53 = 1,000 + 60 + 200 + 12 = <b>1,272</b>.</div>`,
     examples:[
      {title:"Four partial products",steps:["Find 24 × 53. Split: 20 + 4 and 50 + 3.","20×50 = 1,000; 20×3 = 60; 4×50 = 200; 4×3 = 12.","Add: 1,000 + 60 + 200 + 12 = 1,272."]},
      {title:"Multiply in any order",steps:["Find 27 × 48. Split: 20 + 7 and 40 + 8.","20×40 = 800; 7×40 = 280; 20×8 = 160; 7×8 = 56.","Add: 800 + 280 + 160 + 56 = 1,296."]},
      {title:"Check with an estimate",steps:["Find 39 × 15.","30×10=300 (est ~600). Partial products: 30×10=300, 30×5=150, 9×10=90, 9×5=45.","Add: 300 + 150 + 90 + 45 = 585."]}
     ],
     quiz:[
      {q:"24 × 53 using partial products =",o:["1,272","1,262","1,372","1,152"],a:0,why:"1,000 + 60 + 200 + 12 = 1,272."},
      {q:"Which is a partial product of 24 × 53?",o:["20 × 50 = 1,000","24 × 53 = 1,272 at once","2 × 5 = 10","20 × 5 = 100"],a:0,why:"20 × 50 = 1,000 is one of the four partial products."},
      {q:"27 × 48 =",vis:{type:'area',a:27,b:48},o:["1,296","1,286","1,396","1,206"],a:0,why:"800 + 280 + 160 + 56 = 1,296."},
      {q:"How many partial products when you multiply two two-digit numbers?",o:["4","2","3","1"],a:0,why:"Each factor splits into tens and ones → 4 partial products."},
      {q:"39 × 15 =",vis:{type:'area',a:39,b:15},o:["585","575","595","485"],a:0,why:"300 + 150 + 90 + 45 = 585."},
      {q:"In 20 × 50, the partial product is...",o:["1,000","100","10","500"],a:0,why:"2 tens × 5 tens = 10 hundreds = 1,000."},
      {q:"After finding all the partial products, you...",o:["add them together","multiply them together","keep the largest","subtract the smallest"],a:0,why:"Partial products are added to get the total."},
      {q:"46 × 32 =",vis:{type:'area',a:46,b:32},o:["1,472","1,462","1,572","1,372"],a:0,why:"(40×30)+(40×2)+(6×30)+(6×2) = 1,200+80+180+12 = 1,472."},
      {q:"Estimate to check 27 × 48. A reasonable estimate is...",o:["1,500 (30 × 50)","150","1,296 exactly","500"],a:0,why:"Round to 30 × 50 = 1,500, close to the exact 1,296."},
      {q:"52 × 24 =",vis:{type:'area',a:52,b:24},o:["1,248","1,238","1,348","1,148"],a:0,why:"(50×20)+(50×4)+(2×20)+(2×4) = 1,000+200+40+8 = 1,248."}
     ]},
    {title:"Multiply Two-Digit Numbers",iv:"array",
     teach:`<p>The <b>standard algorithm</b> for two-digit multiplication is partial products folded into two tidy rows: multiply by the ones, multiply by the tens, then add. <b>Regrouping</b> (carrying) keeps the digits in place.</p>

       <h4 class="ls-sub">Step 1: Multiply by the ones</h4>
       <p>To find <b>87 × 64</b>, first multiply 87 by the <b>4 ones</b>. 4 × 7 = 28 (write 8, carry 2); 4 × 8 = 32, + 2 = 34. So 4 × 87 = <b>348</b>.</p>

       <h4 class="ls-sub">Step 2: Multiply by the tens</h4>
       <p>Now multiply 87 by the <b>6 tens</b> (that's 60). Because you're multiplying by tens, the result ends in a zero: 60 × 87 = <b>5,220</b>. Line this second row up under the first, shifted one place left.</p>

       <h4 class="ls-sub">Step 3: Add the partial products</h4>
       <p>Add the two rows: 348 + 5,220 = <b>5,568</b>. Check with an estimate: 90 × 60 = 5,400, close to 5,568, so it's reasonable.</p>
       <div class="reallife"><b>Real life:</b> this is the go-to method for products like 24 seats × 36 rows, or 48 boxes × 25 items.</div>
       <div class="watchout"><b>Common mistake:</b> forgetting the zero in the tens row. Multiplying by the tens digit means the row is really tens, so it ends in 0 (or shift it one place left).</div>

       <h4 class="ls-sub">Recap</h4>
       <p>Multiply by the ones, then by the tens (which gives a row ending in zero), and add the two partial products. Estimate to check the result is reasonable.</p>
       <div class="keybox">87 × 64 = 348 + 5,220 = <b>5,568</b>.</div>`,
     examples:[
      {title:"Multiply by ones then tens",steps:["Find 41 × 32.","2 × 41 = 82; 30 × 41 = 1,230.","Add: 82 + 1,230 = 1,312."]},
      {title:"With more regrouping",steps:["Find 52 × 46.","6 × 52 = 312; 40 × 52 = 2,080.","Add: 312 + 2,080 = 2,392."]},
      {title:"Check with an estimate",steps:["Find 87 × 64. 4 × 87 = 348; 60 × 87 = 5,220 → 5,568.","Estimate: 90 × 60 = 5,400.","5,568 is close to 5,400, so it's reasonable."]}
     ],
     quiz:[
      {q:"87 × 64 =",vis:{type:'area',a:87,b:64},o:["5,568","5,558","5,668","5,468"],a:0,why:"(4 × 87) + (60 × 87) = 348 + 5,220 = 5,568."},
      {q:"41 × 32 =",vis:{type:'area',a:41,b:32},o:["1,312","1,302","1,412","1,212"],a:0,why:"82 + 1,230 = 1,312."},
      {q:"When you multiply 87 by the 6 in 64, you are really multiplying by...",o:["60 (so the row ends in 0)","6","600","64"],a:0,why:"The 6 is in the tens place, so it means 60; that row ends in a zero."},
      {q:"52 × 46 =",vis:{type:'area',a:52,b:46},o:["2,392","2,382","2,492","2,292"],a:0,why:"312 + 2,080 = 2,392."},
      {q:"78 × 35 =",vis:{type:'area',a:78,b:35},o:["2,730","2,720","2,830","2,630"],a:0,why:"(5 × 78) + (30 × 78) = 390 + 2,340 = 2,730."},
      {q:"Estimate to check 87 × 64. A reasonable estimate is...",o:["5,400 (90 × 60)","540","5,568 exactly","54,000"],a:0,why:"Round to 90 × 60 = 5,400, close to the exact 5,568."},
      {q:"A theater has 24 rows of 36 seats. How many seats?",o:["864","854","964","764"],a:0,why:"24 × 36 = 864 seats."},
      {q:"63 × 24 =",vis:{type:'area',a:63,b:24},o:["1,512","1,502","1,612","1,412"],a:0,why:"(4 × 63) + (20 × 63) = 252 + 1,260 = 1,512."},
      {q:"In the standard algorithm, the second partial product row is under the first and shifted...",o:["one place to the left","one place to the right","not shifted","two places left"],a:0,why:"The tens row is shifted one place left because it represents tens."},
      {q:"45 × 38 =",vis:{type:'area',a:45,b:38},o:["1,710","1,700","1,810","1,610"],a:0,why:"(8 × 45) + (30 × 45) = 360 + 1,350 = 1,710."}
     ]},
    {title:"Practice Multiplication Strategies",iv:"array",
     teach:`<p>You now have a whole toolbox for multiplying: <b>place value</b>, the <b>Associative Property</b>, <b>area models</b>, the <b>Distributive Property</b>, <b>partial products</b>, and the <b>standard algorithm (regrouping)</b>. The skill now is <b>choosing</b> the one that fits the numbers.</p>

       <h4 class="ls-sub">Look at the numbers first</h4>
       <p>If a factor is a multiple of ten, <b>place value</b> is instant: 62 × 40 = 62 × 4 tens = 2,480. If the numbers are close to friendly ones, the <b>Distributive Property</b> or <b>compatible numbers</b> shine. For a straightforward product like 56 × 83, <b>partial products</b> or the <b>standard algorithm</b> is reliable: 56 × 83 = <b>4,648</b>.</p>

       <h4 class="ls-sub">All roads lead to the same answer</h4>
       <p>The beautiful thing is that every correct strategy gives the <b>same product</b>. You can pick whichever is easiest for you and check with a different one. Try 72 × 13: partial products (720 + 216) or standard algorithm both give <b>936</b>.</p>
       <div class="reallife"><b>Real life:</b> flexible thinkers pick the quickest path — round for a rough check, then use an exact method when it counts.</div>
       <div class="watchout"><b>Common mistake:</b> forcing one method for every problem. Glance at the numbers and choose the strategy that makes the math easiest.</div>

       <h4 class="ls-sub">Recap</h4>
       <p>Choose a strategy that fits: place value for multiples of ten, distributive/partial products or the standard algorithm for general products. Every valid method gives the same answer.</p>
       <div class="keybox">56 × 83 = <b>4,648</b>, whether you use partial products or the standard algorithm.</div>`,
     examples:[
      {title:"Place value for a multiple of ten",steps:["Find 62 × 40.","62 × 4 tens = 248 tens.","248 tens = 2,480."]},
      {title:"Partial products",steps:["Find 56 × 83.","50×80=4,000; 50×3=150; 6×80=480; 6×3=18.","Add: 4,000 + 150 + 480 + 18 = 4,648."]},
      {title:"Standard algorithm",steps:["Find 72 × 13.","3 × 72 = 216; 10 × 72 = 720.","Add: 216 + 720 = 936."]}
     ],
     quiz:[
      {q:"Which strategy is fastest for 62 × 40?",o:["place value (multiply by 4 tens)","long area model","compatible numbers","counting on"],a:0,why:"A multiple of ten makes place value instant: 62 × 4 tens = 2,480."},
      {q:"62 × 40 =",vis:{type:'area',a:62,b:40},o:["2,480","2,460","2,580","248"],a:0,why:"62 × 4 tens = 248 tens = 2,480."},
      {q:"56 × 83 =",vis:{type:'area',a:56,b:83},o:["4,648","4,638","4,748","4,548"],a:0,why:"4,000 + 150 + 480 + 18 = 4,648."},
      {q:"60 × 80 =",vis:{type:'area',a:60,b:80},o:["4,800","480","48,000","4,080"],a:0,why:"6 × 8 = 48, plus two zeros → 4,800."},
      {q:"72 × 13 =",vis:{type:'area',a:72,b:13},o:["936","926","1,036","836"],a:0,why:"216 + 720 = 936."},
      {q:"If two students use different (correct) strategies on the same product, they will get...",o:["the same answer","different answers","only estimates","answers that are off by ten"],a:0,why:"Every valid multiplication strategy gives the same exact product."},
      {q:"90 × 37 =",vis:{type:'area',a:90,b:37},o:["3,330","3,320","3,430","333"],a:0,why:"37 × 9 tens = 333 tens = 3,330."},
      {q:"78 × 21 =",vis:{type:'area',a:78,b:21},o:["1,638","1,628","1,738","1,538"],a:0,why:"(78 × 20) + (78 × 1) = 1,560 + 78 = 1,638."},
      {q:"Which strategy works well for 14 × 49 (since 49 is close to 50)?",o:["Distributive: 14 × (50 − 1) = 700 − 14 = 686","place value only","counting on","there is no good strategy"],a:0,why:"49 = 50 − 1, so 14 × 49 = 700 − 14 = 686."},
      {q:"14 × 49 =",vis:{type:'area',a:14,b:49},o:["686","676","786","586"],a:0,why:"14 × 50 = 700; 700 − 14 = 686."}
     ]},
    {title:"Problem Solving: Two-Digit Multiplication",iv:null,
     teach:`<p>Word problems with two-digit multiplication use the same plan you already know — <b>Understand, Plan, Solve, Check</b> — and many are <b>multi-step</b> or include <b>extra information</b> you don't need.</p>

       <h4 class="ls-sub">Plan with letters</h4>
       <p>Example: <i>A tour bus carries 52 passengers each trip and makes 18 trips in a day. How many passengers in one day?</i> This is a single multiplication: 52 × 18 = <b>936</b> passengers. Name the unknown with a letter if it helps: 52 × 18 = p.</p>

       <h4 class="ls-sub">Multi-step problems</h4>
       <p>Some problems chain two operations. <i>A store gets 6 boxes. Each box has 16 packs of pencils, and each pack has 24 pencils. How many pencils in all?</i> <b>Step 1</b>: pencils per box, 16 × 24 = 384. <b>Step 2</b>: all the boxes, 384 × 6 = <b>2,304 pencils</b>. (The weight of each box is <b>extra information</b> — ignore it.)</p>

       <h4 class="ls-sub">Check for reasonableness</h4>
       <p>Estimate to check: for 52 × 18, round to 50 × 20 = 1,000, close to 936. And always re-read the question — make sure you answered what it actually asked.</p>
       <div class="reallife"><b>Real life:</b> planning seating, shipments, and supplies all use multi-step two-digit multiplication.</div>
       <div class="watchout"><b>Common mistake:</b> using extra numbers. Decide what the question asks before you multiply, and leave out facts you don't need.</div>

       <h4 class="ls-sub">Recap</h4>
       <p>Understand the problem, plan with letters, solve step by step (ignoring extra info), and check with an estimate that your answer is reasonable and answers the question.</p>
       <div class="keybox">52 passengers × 18 trips = <b>936</b> passengers in one day.</div>`,
     examples:[
      {title:"One-step multiplication",steps:["A tour bus carries 52 passengers per trip, 18 trips a day. Passengers in a day?","Multiply: 52 × 18.","52 × 18 = 936 passengers."]},
      {title:"Two-step, with extra info",steps:["6 boxes; each has 16 packs; each pack has 24 pencils (box weight is extra).","Step 1: 16 × 24 = 384 pencils per box.","Step 2: 384 × 6 = 2,304 pencils."]},
      {title:"Multiply, then compare",steps:["A hall has 24 rows of 30 seats; 650 tickets are sold. Empty seats?","Step 1: 24 × 30 = 720 seats.","Step 2: 720 − 650 = 70 empty seats."]}
     ],
     quiz:[
      {q:"A tour bus carries 52 passengers each trip and makes 18 trips in a day. How many passengers in one day?",o:["936","886","70","1,036"],a:0,why:"52 × 18 = 936 passengers."},
      {q:"A store gets 6 boxes of 16 packs; each pack has 24 pencils. How many pencils in all?",o:["2,304","384","2,204","144"],a:0,why:"16 × 24 = 384 per box; 384 × 6 = 2,304 pencils."},
      {q:"In that pencil problem, the weight of each box is...",o:["extra information you don't need","needed for step 1","the final answer","needed for step 2"],a:0,why:"The question asks for pencils, so the box weight is unnecessary."},
      {q:"A hall has 24 rows of 30 seats. If 650 tickets sell, how many seats are empty?",o:["70","720","150","680"],a:0,why:"24 × 30 = 720 seats; 720 − 650 = 70 empty."},
      {q:"A tour bus carries 936 passengers a day. About how many in a 6-day week?",o:["5,616","5,516","942","6,616"],a:0,why:"936 × 6 = 5,616 passengers."},
      {q:"A bakery bakes 45 trays of 24 muffins. How many muffins?",o:["1,080","1,070","69","1,180"],a:0,why:"45 × 24 = 1,080 muffins."},
      {q:"After solving a multi-step problem, you should always...",o:["re-read the question and check reasonableness","use every number given","stop after step 1","round the answer"],a:0,why:"Make sure your answer is reasonable and actually answers what was asked."},
      {q:"A store has 36 shelves with 25 cans each. If 400 cans are sold, how many remain?",o:["500","900","300","450"],a:0,why:"36 × 25 = 900 cans; 900 − 400 = 500 remain."},
      {q:"A school has 28 classes of 32 students. How many students in all?",o:["896","886","996","796"],a:0,why:"28 × 32 = 896 students."},
      {q:"Which plan finds 'total legs on 54 chairs with 4 legs each'?",o:["multiply 54 × 4","add 54 + 4","subtract 54 − 4","divide 54 ÷ 4"],a:0,why:"Equal groups of 4 legs means multiply: 54 × 4 = 216 legs."}
     ]}
   ],
   test:[
    {q:"40 × 20 =",vis:{type:'area',a:40,b:20},o:["800","80","8,000","600"],a:0,why:"40 × 2 tens = 80 tens = 800."},
    {q:"12 × 30 =",vis:{type:'area',a:12,b:30},o:["360","36","3,600","330"],a:0,why:"12 × 3 tens = 36 tens = 360."},
    {q:"Estimate 57 × 38 by rounding.",o:["2,400","2,000","240","1,500"],a:0,why:"60 × 40 = 2,400."},
    {q:"Estimate 24 × 31 using compatible numbers.",o:["750","600","744","900"],a:0,why:"25 × 30 = 750."},
    {q:"Use an area model: 12 × 14 =",o:["252","242","258","262"],a:0,why:"(10×10)+(10×4)+(2×10)+(2×4) = 100+40+20+8 = 252."},
    {q:"17 × 25 (Distributive Property) =",o:["425","415","435","525"],a:0,why:"(10×25)+(7×25) = 250 + 175 = 425."},
    {q:"24 × 53 using partial products =",o:["1,272","1,262","1,372","1,152"],a:0,why:"1,000 + 60 + 200 + 12 = 1,272."},
    {q:"27 × 48 =",vis:{type:'area',a:27,b:48},o:["1,296","1,286","1,396","1,206"],a:0,why:"800 + 280 + 160 + 56 = 1,296."},
    {q:"87 × 64 =",vis:{type:'area',a:87,b:64},o:["5,568","5,558","5,668","5,468"],a:0,why:"(4 × 87) + (60 × 87) = 348 + 5,220 = 5,568."},
    {q:"56 × 83 =",vis:{type:'area',a:56,b:83},o:["4,648","4,638","4,748","4,548"],a:0,why:"(3 × 56) + (80 × 56) = 168 + 4,480 = 4,648."},
    {q:"62 × 40 =",vis:{type:'area',a:62,b:40},o:["2,480","2,460","2,580","248"],a:0,why:"62 × 4 tens = 248 tens = 2,480."},
    {q:"72 × 13 =",vis:{type:'area',a:72,b:13},o:["936","926","1,036","836"],a:0,why:"(72 × 10) + (72 × 3) = 720 + 216 = 936."},
    {q:"41 × 32 =",vis:{type:'area',a:41,b:32},o:["1,312","1,302","1,412","1,212"],a:0,why:"(41 × 30) + (41 × 2) = 1,230 + 82 = 1,312."},
    {q:"Estimate 61 × 73 by rounding.",o:["4,200","4,900","420","3,600"],a:0,why:"60 × 70 = 4,200."},
    {q:"34 × 22 =",vis:{type:'area',a:34,b:22},o:["748","738","848","648"],a:0,why:"(34 × 20) + (34 × 2) = 680 + 68 = 748."},
    {q:"A tour bus carries 52 passengers each trip and makes 18 trips in a day. How many passengers in one day?",o:["936","886","70","1,036"],a:0,why:"52 × 18 = 936 passengers."},
    {q:"A store gets 6 boxes, each with 16 packs of pencils. Each pack has 24 pencils. How many pencils in all?",o:["2,304","384","2,204","144"],a:0,why:"16 × 24 = 384 per box; 384 × 6 = 2,304 pencils."},
    {q:"Performance Task: A greenhouse has 32 shelves, each holding 45 pots. How many pots in all?",o:["1,440","1,340","77","1,450"],a:0,why:"32 × 45 = 1,440 pots."},
    {q:"Performance Task: Trays come in boxes of 24. The greenhouse orders 18 boxes. How many trays?",o:["432","422","42","532"],a:0,why:"24 × 18 = 432 trays."},
    {q:"Performance Task: A hose fills 15 gallons each minute. How many gallons in 40 minutes?",o:["600","550","55","6,000"],a:0,why:"15 × 40 = 600 gallons."},
    {q:"Performance Task: A 10-ft row yields 55 lb of vegetables; a 20-ft row yields 220 lb. Doubling the row length gives how many TIMES the yield?",o:["4 times","2 times","3 times","10 times"],a:0,why:"220 ÷ 55 = 4, so doubling the length gives 4 times the yield."},
    {q:"Performance Task: Using that pattern, about how many pounds would a 40-ft row (double of 20 ft) yield?",o:["880","440","110","220"],a:0,why:"Doubling again multiplies by 4: 220 × 4 = 880 lb."},
    {q:"Performance Task: Estimate 32 × 45 to check the pot total is reasonable.",o:["about 1,500 (30 × 50)","about 150","1,440 exactly","about 800"],a:0,why:"Round to 30 × 50 = 1,500, close to the exact 1,440."}
   ]},

  {id:"g4u2",name:"Divide Multi-Digit Numbers by One-Digit Numbers",icon:"➗",code:"4.NBT/OA",accent:"#38bdf8",
   sections:[
    {title:"Divide Tens, Hundreds & Thousands",iv:"array",
     teach:`<p>Just as place value made multiplying by tens and hundreds quick, it makes <b>dividing</b> them quick too. If you know a basic division fact, you can divide much bigger numbers in your head.</p>

       <h4 class="ls-sub">Use a fact, then the zeros</h4>
       <p>To find <b>270 ÷ 9</b>, think of 270 as <b>27 tens</b>. Since 27 ÷ 9 = 3, that's 27 tens ÷ 9 = 3 tens = <b>30</b>. In the same way, 5,600 ÷ 8: think 56 hundreds ÷ 8 = 7 hundreds = <b>700</b> (because 56 ÷ 8 = 7).</p>

       <h4 class="ls-sub">Why it works: place value</h4>
       <p>Dividing tens gives tens; dividing hundreds gives hundreds. 2,400 ÷ 6 = 24 hundreds ÷ 6 = 4 hundreds = <b>400</b>. You divide the basic fact, then keep the place value — the zeros come along for the ride.</p>

       <h4 class="ls-sub">Multiplication checks division</h4>
       <p>Because division undoes multiplication, you can check: 270 ÷ 9 = 30, and 30 × 9 = 270. ✓ Notice how 12 ÷ 4 = 3 instantly tells you 1,200 ÷ 4 = 300 — same fact, just more zeros.</p>
       <div class="reallife"><b>Real life:</b> splitting 2,400 stickers evenly among 6 classes, or 5,600 dollars among 8 people, is exactly this kind of quick division.</div>
       <div class="watchout"><b>Common mistake:</b> losing or adding a zero. Divide the fact first, then attach the correct place value: 270 ÷ 9 = 30, not 3 and not 300.</div>

       <h4 class="ls-sub">Recap</h4>
       <p>To divide tens, hundreds, or thousands, use the basic division fact and keep the place value. Check by multiplying the quotient back.</p>
       <div class="keybox">270 ÷ 9 = 27 tens ÷ 9 = 3 tens = <b>30</b>.</div>`,
     examples:[
      {title:"Divide hundreds",steps:["Find 2,400 ÷ 6.","24 hundreds ÷ 6 = 4 hundreds.","4 hundreds = 400."]},
      {title:"Divide tens",steps:["Find 490 ÷ 7.","49 tens ÷ 7 = 7 tens.","7 tens = 70."]},
      {title:"Grow the fact",steps:["49 ÷ 7 = 7.","490 ÷ 7 = 70; 4,900 ÷ 7 = 700.","Same fact, more zeros."]}
     ],
     quiz:[
      {q:"270 ÷ 9 =",o:["30","3","300","27"],a:0,why:"27 tens ÷ 9 = 3 tens = 30."},
      {q:"5,600 ÷ 8 =",o:["700","70","7,000","560"],a:0,why:"56 hundreds ÷ 8 = 7 hundreds = 700."},
      {q:"2,400 ÷ 6 =",o:["400","40","4,000","240"],a:0,why:"24 hundreds ÷ 6 = 4 hundreds = 400."},
      {q:"490 ÷ 7 =",o:["70","7","700","49"],a:0,why:"49 tens ÷ 7 = 7 tens = 70."},
      {q:"4,900 ÷ 7 =",o:["700","70","7,000","490"],a:0,why:"49 hundreds ÷ 7 = 7 hundreds = 700."},
      {q:"How does 12 ÷ 4 = 3 help you find 1,200 ÷ 4?",o:["1,200 ÷ 4 = 300 (same fact, two more zeros)","1,200 ÷ 4 = 3","it doesn't help","1,200 ÷ 4 = 30"],a:0,why:"Use the fact 3 and keep the hundreds place → 300."},
      {q:"3,600 ÷ 4 =",o:["900","90","9,000","360"],a:0,why:"36 hundreds ÷ 4 = 9 hundreds = 900."},
      {q:"810 ÷ 9 =",o:["90","9","900","81"],a:0,why:"81 tens ÷ 9 = 9 tens = 90."},
      {q:"A school shares 2,400 stickers equally among 6 classes. Each class gets:",o:["400","40","4,000","240"],a:0,why:"2,400 ÷ 6 = 400 stickers."},
      {q:"To check that 5,600 ÷ 8 = 700, you can...",o:["multiply 700 × 8 and see if you get 5,600","divide again","add 700 + 8","subtract 700 − 8"],a:0,why:"Multiplication undoes division: 700 × 8 = 5,600. ✓"}
     ]},
    {title:"Estimate Quotients",iv:"roundline",
     teach:`<p>You can <b>estimate a quotient</b> to get a quick answer or to check whether an exact answer is reasonable. The key tool is <b>compatible numbers</b> — numbers that are easy to divide and close to the real ones.</p>

       <h4 class="ls-sub">Use compatible numbers</h4>
       <p>To estimate <b>154 ÷ 4</b>, look for a number near 154 that 4 divides evenly. 160 works nicely: 160 ÷ 4 = <b>40</b>. So 154 ÷ 4 is about 40. Compatible numbers often beat plain rounding for division, because you want a dividend your divisor goes into cleanly.</p>

       <h4 class="ls-sub">Find two estimates it's between</h4>
       <p>Sometimes it helps to trap a quotient <b>between two estimates</b>. For <b>6,427 ÷ 7</b>, notice 6,300 ÷ 7 = 900 and 7,000 ÷ 7 = 1,000, and 6,427 is between 6,300 and 7,000. So the quotient is between <b>900 and 1,000</b>. That tells you a correct answer must land in that range.</p>

       <h4 class="ls-sub">Check for reasonableness</h4>
       <p>Estimating guards your exact work. If you divide 465 ÷ 9 and get 517, an estimate (450 ÷ 9 = 50) instantly shows that's way off — the real answer should be near 50, not 500.</p>
       <div class="reallife"><b>Real life:</b> estimating quotients helps you judge "about how many buses for 154 kids, 4 to a seat?" before doing the exact math.</div>
       <div class="watchout"><b>Common mistake:</b> picking a compatible number the divisor doesn't divide evenly. For ÷ 4, choose 160 (not 150), because 4 goes into 160 cleanly.</div>

       <h4 class="ls-sub">Recap</h4>
       <p>Estimate a quotient with compatible numbers — a nearby dividend your divisor divides evenly. You can also trap the quotient between two estimates, and use the estimate to check reasonableness.</p>
       <div class="keybox">Estimate 154 ÷ 4 ≈ 160 ÷ 4 = <b>40</b>.</div>`,
     examples:[
      {title:"Estimate with compatible numbers",steps:["Estimate 61 ÷ 3.","60 is close to 61 and divides by 3: 60 ÷ 3 = 20.","So 61 ÷ 3 is about 20."]},
      {title:"Another compatible estimate",steps:["Estimate 465 ÷ 9.","450 is close to 465 and divides by 9: 450 ÷ 9 = 50.","So 465 ÷ 9 is about 50."]},
      {title:"Find two estimates it's between",steps:["6,427 ÷ 7: use 6,300 and 7,000.","6,300 ÷ 7 = 900 and 7,000 ÷ 7 = 1,000.","So the quotient is between 900 and 1,000."]}
     ],
     quiz:[
      {q:"Compatible numbers are numbers that are...",o:["easy to divide and close to the real ones","always exactly right","the largest possible","only even numbers"],a:0,why:"Compatible numbers are easy to compute with and near the actual numbers."},
      {q:"Estimate 154 ÷ 4 using compatible numbers.",o:["40","30","400","20"],a:0,why:"160 ÷ 4 = 40 (160 is close to 154 and divides evenly by 4)."},
      {q:"Estimate 61 ÷ 3 using compatible numbers.",o:["20","30","2","200"],a:0,why:"60 ÷ 3 = 20."},
      {q:"Estimate 465 ÷ 9 using compatible numbers.",o:["50","40","5","500"],a:0,why:"450 ÷ 9 = 50."},
      {q:"The quotient 6,427 ÷ 7 is between which two estimates?",o:["900 and 1,000","90 and 100","800 and 900","1,000 and 1,100"],a:0,why:"6,300 ÷ 7 = 900 and 7,000 ÷ 7 = 1,000."},
      {q:"For ÷ 4, which is the best compatible number near 154?",o:["160","150","155","140"],a:0,why:"4 divides 160 evenly (÷4 = 40); it doesn't divide 150 or 155 evenly."},
      {q:"The quotient 477 ÷ 8 is between which two estimates?",o:["50 and 60","5 and 6","60 and 70","40 and 50"],a:0,why:"400 ÷ 8 = 50 and 480 ÷ 8 = 60, and 477 is between 400 and 480."},
      {q:"A student found 465 ÷ 9 = 517. Using an estimate, what's true?",o:["It's unreasonable — 450 ÷ 9 = 50, so it should be near 50","It's correct","The estimate is wrong","465 ÷ 9 rounds to 500"],a:0,why:"450 ÷ 9 = 50, so a reasonable quotient is near 50 (exactly 51 r6). 517 is far too big."},
      {q:"The quotient 5,194 ÷ 6 is between which two estimates?",o:["800 and 900","80 and 90","700 and 800","900 and 1,000"],a:0,why:"4,800 ÷ 6 = 800 and 5,400 ÷ 6 = 900, and 5,194 is between them."},
      {q:"About how many 4-seat benches for 154 people (estimate)?",o:["about 40","about 400","about 15","about 4"],a:0,why:"160 ÷ 4 = 40, so about 40 benches."}
     ]},
    {title:"Understand Division & Remainders",iv:"array",
     teach:`<p>Numbers don't always divide evenly. When they don't, there's an amount left over — and learning to handle that leftover is what this lesson is all about.</p>

       <h4 class="ls-sub">What a remainder is</h4>
       <p>Sometimes you cannot divide a number into equal groups perfectly, and there is an amount <b>left over</b>. That leftover is called the <b>remainder</b>. We mark it with an <b>R</b>. For example, 14 ÷ 3 = 4 with 2 left over, written <b>4 R2</b>.</p>

       <h4 class="ls-sub">Finding a quotient and remainder</h4>
       <p>To find <b>27 ÷ 4</b>, ask how many 4s fit into 27 without going over. 4 × 6 = 24, which is as close as we can get. Then 27 − 24 = <b>3</b> left over. So 27 ÷ 4 = <b>6 R3</b>. There are 6 in each group, with 3 units left that can't make a full group.</p>

       <h4 class="ls-sub">The remainder is always smaller than the divisor</h4>
       <p>A correct remainder is <b>less than the number you divided by</b>. If your remainder is as big as (or bigger than) the divisor, you can still fit another group — go back and add one to the quotient. Check your work by multiplying back and adding the remainder: for 27 ÷ 4 = 6 R3, check 4 × 6 + 3 = 27. ✓</p>
       <div class="reallife"><b>Real life:</b> the remainder often changes your answer. If 30 kids ride in cars that hold 4, 30 ÷ 4 = 7 R2 — but you still need an 8th car for the last 2 kids.</div>
       <div class="watchout"><b>Common mistake:</b> writing a remainder that's too big. In 27 ÷ 4, the remainder must be less than 4 — a remainder of 3 is correct, but 7 would mean you missed a group.</div>

       <h4 class="ls-sub">Recap</h4>
       <p>When a number doesn't divide evenly, the leftover is the <b>remainder</b> (written with R), and it's always smaller than the divisor. Check with divisor × quotient + remainder = the original number.</p>
       <div class="keybox">27 ÷ 4 = <b>6 R3</b>. Check: 4 × 6 + 3 = 27. ✓</div>`,
     examples:[
      {title:"19 ÷ 6",steps:["How many 6s fit in 19? 6 × 3 = 18.","19 − 18 = 1 left over.","So 19 ÷ 6 = 3 R1."]},
      {title:"34 ÷ 5",steps:["How many 5s fit in 34? 5 × 6 = 30.","34 − 30 = 4 left over.","So 34 ÷ 5 = 6 R4."]},
      {title:"Check a remainder: 27 ÷ 4",steps:["27 ÷ 4 = 6 R3.","Check: 4 × 6 + 3.","24 + 3 = 27 ✓ — correct!"]}
     ],
     quiz:[
      {q:"14 ÷ 3 =",o:["4 R2","4 R1","3 R2","5 R1"],a:0,why:"3 × 4 = 12, and 14 − 12 = 2 → 4 R2."},
      {q:"27 ÷ 4 =",o:["6 R3","6 R1","5 R3","7 R1"],a:0,why:"4 × 6 = 24, and 27 − 24 = 3 → 6 R3."},
      {q:"A correct remainder is always...",o:["smaller than the divisor","bigger than the divisor","equal to the divisor","equal to the quotient"],a:0,why:"If the remainder were as big as the divisor, another group would fit."},
      {q:"19 ÷ 6 =",o:["3 R1","3 R2","2 R7","4 R1"],a:0,why:"6 × 3 = 18, and 19 − 18 = 1 → 3 R1."},
      {q:"34 ÷ 5 =",o:["6 R4","6 R3","7 R1","5 R9"],a:0,why:"5 × 6 = 30, and 34 − 30 = 4 → 6 R4."},
      {q:"To check that 27 ÷ 4 = 6 R3, you compute...",o:["4 × 6 + 3 = 27","4 × 6 = 24","27 − 3 = 24","6 + 3 = 9"],a:0,why:"divisor × quotient + remainder should equal the original number."},
      {q:"Which remainder is IMPOSSIBLE for a division by 5?",o:["5","4","2","0"],a:0,why:"A remainder must be less than the divisor, so it can never be 5 (that's another whole group)."},
      {q:"20 ÷ 7 =",o:["2 R6","2 R5","3 R1","2 R4"],a:0,why:"7 × 2 = 14, and 20 − 14 = 6 → 2 R6."},
      {q:"30 kids ride in cars that hold 4 each. How many cars are needed?",o:["8","7","7 R2","6"],a:0,why:"30 ÷ 4 = 7 R2, but the extra 2 kids still need a car, so 8 cars."},
      {q:"26 ÷ 3 =",o:["8 R2","8 R1","9 R1","7 R5"],a:0,why:"3 × 8 = 24, and 26 − 24 = 2 → 8 R2."}
     ]},
    {title:"Use Partial Quotients",iv:"arearect",
     teach:`<p><b>Partial quotients</b> is a friendly way to divide big numbers. Instead of guessing the whole answer at once, you subtract easy multiples of the divisor a chunk at a time, then add up how many you took out.</p>

       <h4 class="ls-sub">Subtract easy chunks</h4>
       <p>To find <b>235 ÷ 5</b>, ask "how many 5s can I pull out easily?" A friendly chunk is 40 fives: 5 × 40 = 200. Subtract: 235 − 200 = 35. Now pull out 7 more fives: 5 × 7 = 35, and 35 − 35 = 0. Add the partial quotients: 40 + 7 = <b>47</b>. So 235 ÷ 5 = 47.</p>

       <h4 class="ls-sub">There's no single "right" chunk</h4>
       <p>You can take out any easy multiple. For 235 ÷ 5 you might pull out 5 × 20 = 100 twice (that's 40 fives total), then 5 × 7 = 35. Different chunks, same final quotient of 47 — whichever multiples are easiest for you.</p>

       <h4 class="ls-sub">See it as area</h4>
       <p>An area model shows partial quotients as pieces of a rectangle: a 5-by-40 piece (area 200) plus a 5-by-7 piece (area 35) make a total area of 235. The widths 40 and 7 are the partial quotients — add them for 47.</p>
       <div class="reallife"><b>Real life:</b> partial quotients matches how people actually split things — "take out a hundred, then another, then the rest."</div>
       <div class="watchout"><b>Common mistake:</b> forgetting to add the partial quotients. The answer is the <b>sum</b> of all the chunks you pulled out, not the last one.</div>

       <h4 class="ls-sub">Recap</h4>
       <p>Subtract easy multiples of the divisor until nothing is left, then add up how many groups you removed — that sum is the quotient.</p>
       <div class="keybox">235 ÷ 5: pull out 40 fives (200) then 7 fives (35); 40 + 7 = <b>47</b>.</div>`,
     examples:[
      {title:"Partial quotients",steps:["Find 60 ÷ 4.","Pull out 10 fours: 4 × 10 = 40; 60 − 40 = 20. Pull out 5 fours: 4 × 5 = 20; 20 − 20 = 0.","Add: 10 + 5 = 15."]},
      {title:"Bigger dividend",steps:["Find 192 ÷ 3.","3 × 60 = 180; 192 − 180 = 12. Then 3 × 4 = 12; 12 − 12 = 0.","Add: 60 + 4 = 64."]},
      {title:"Different chunks, same answer",steps:["Find 235 ÷ 5.","5 × 40 = 200 (leaves 35); 5 × 7 = 35 (leaves 0).","Add: 40 + 7 = 47."]}
     ],
     quiz:[
      {q:"235 ÷ 5 using partial quotients =",o:["47","45","57","43"],a:0,why:"Pull out 40 fives (200), then 7 fives (35): 40 + 7 = 47."},
      {q:"In partial quotients, what do you do with the chunks you pull out?",o:["add them to get the quotient","multiply them","keep only the biggest","subtract them from each other"],a:0,why:"The quotient is the sum of all the partial quotients."},
      {q:"60 ÷ 4 =",o:["15","14","16","12"],a:0,why:"10 fours (40) + 5 fours (20): 10 + 5 = 15."},
      {q:"192 ÷ 3 =",o:["64","62","66","54"],a:0,why:"3 × 60 = 180, then 3 × 4 = 12: 60 + 4 = 64."},
      {q:"For 235 ÷ 5, which is a valid first chunk to subtract?",o:["5 × 40 = 200","5 × 50 = 250","5 × 100 = 500","5 × 60 = 300"],a:0,why:"A chunk must be less than 235; 200 works (250, 500, 300 are all too big)."},
      {q:"426 ÷ 6 =",o:["71","61","72","69"],a:0,why:"6 × 70 = 420, then 6 × 1 = 6: 70 + 1 = 71."},
      {q:"An area model for 235 ÷ 5 has widths 40 and 7. The quotient is...",o:["47","35","200","5"],a:0,why:"Add the widths (partial quotients): 40 + 7 = 47."},
      {q:"128 ÷ 4 =",o:["32","31","34","28"],a:0,why:"4 × 30 = 120, then 4 × 2 = 8: 30 + 2 = 32."},
      {q:"survey: 344 ÷ 8 =",o:["43","42","44","38"],a:0,why:"8 × 40 = 320, then 8 × 3 = 24: 40 + 3 = 43."},
      {q:"Why can two students use different chunks and still agree?",o:["The chunks always add to the same total quotient","Because division has many answers","It only works for small numbers","They can't — chunks must match"],a:0,why:"However you break it up, the partial quotients add to the same quotient."}
     ]},
    {title:"Use Partial Quotients with a Remainder",iv:"arearect",
     teach:`<p>Partial quotients works even when a number <b>doesn't</b> divide evenly. You subtract easy chunks until what's left is <b>smaller than the divisor</b> — and that leftover is the remainder.</p>

       <h4 class="ls-sub">Keep going until you can't</h4>
       <p>To find <b>2,918 ÷ 4</b>, pull out big chunks: 4 × 700 = 2,800, leaving 118. Then 4 × 25 = 100, leaving 18. Then 4 × 4 = 16, leaving 2. Now 2 is smaller than 4, so you stop. Add the partial quotients: 700 + 25 + 4 = 729, with <b>2 left over</b>. So 2,918 ÷ 4 = <b>729 R2</b>.</p>

       <h4 class="ls-sub">Know when to stop</h4>
       <p>You're done when the amount left is <b>less than the divisor</b>. That leftover can't make another group, so it becomes the remainder. Check by multiplying back and adding the remainder: 4 × 729 + 2 = 2,918. ✓</p>
       <div class="reallife"><b>Real life:</b> "how many 4-person tables for 2,918 guests, and how many are left without a full table?" — the remainder answers the leftover part.</div>
       <div class="watchout"><b>Common mistake:</b> stopping too early or too late. Keep subtracting chunks while the leftover is still 4 or more; stop only when it drops below the divisor.</div>

       <h4 class="ls-sub">Recap</h4>
       <p>Subtract easy multiples until the leftover is smaller than the divisor. Add the partial quotients for the answer, and the final leftover is the remainder.</p>
       <div class="keybox">2,918 ÷ 4 = 700 + 25 + 4 = 729, remainder 2 → <b>729 R2</b>.</div>`,
     examples:[
      {title:"Partial quotients with a remainder",steps:["Find 82 ÷ 3.","3 × 20 = 60 (leaves 22); 3 × 7 = 21 (leaves 1).","1 is less than 3, so stop: 20 + 7 = 27 R1."]},
      {title:"Bigger dividend",steps:["Find 754 ÷ 9.","9 × 80 = 720 (leaves 34); 9 × 3 = 27 (leaves 7).","7 < 9, so stop: 80 + 3 = 83 R7."]},
      {title:"Check the remainder",steps:["2,918 ÷ 4 = 729 R2.","Check: 4 × 729 + 2.","2,916 + 2 = 2,918 ✓."]}
     ],
     quiz:[
      {q:"2,918 ÷ 4 =",o:["729 R2","729 R1","728 R2","739 R2"],a:0,why:"700 + 25 + 4 = 729, remainder 2 → 729 R2."},
      {q:"In partial quotients, you stop subtracting chunks when the leftover is...",o:["less than the divisor","zero only","less than the quotient","more than the divisor"],a:0,why:"When the leftover is smaller than the divisor, it becomes the remainder."},
      {q:"82 ÷ 3 =",o:["27 R1","27 R2","26 R1","28 R1"],a:0,why:"3 × 27 = 81, and 82 − 81 = 1 → 27 R1."},
      {q:"754 ÷ 9 =",o:["83 R7","83 R6","82 R7","84 R7"],a:0,why:"9 × 83 = 747, and 754 − 747 = 7 → 83 R7."},
      {q:"To check 2,918 ÷ 4 = 729 R2, compute...",o:["4 × 729 + 2 = 2,918","4 × 729 = 2,916","2,918 − 2 = 2,916","729 + 2 = 731"],a:0,why:"divisor × quotient + remainder should equal the dividend."},
      {q:"460 ÷ 8 =",o:["57 R4","57 R2","58 R4","56 R4"],a:0,why:"8 × 57 = 456, and 460 − 456 = 4 → 57 R4."},
      {q:"3,242 ÷ 5 =",o:["648 R2","648 R1","649 R2","638 R2"],a:0,why:"5 × 648 = 3,240, and 3,242 − 3,240 = 2 → 648 R2."},
      {q:"5,850 ÷ 6 =",o:["975","975 R1","965","974 R2"],a:0,why:"6 × 975 = 5,850 exactly, so there's no remainder."},
      {q:"When the leftover after subtracting chunks is 6 and the divisor is 4, you should...",o:["keep going — 6 is still bigger than 4","stop, the remainder is 6","stop, the remainder is 4","start over"],a:0,why:"6 ≥ 4, so another group of 4 fits — subtract again before stopping."},
      {q:"367 ÷ 4 =",o:["91 R3","91 R1","92 R3","90 R3"],a:0,why:"4 × 91 = 364, and 367 − 364 = 3 → 91 R3."}
     ]},
    {title:"Divide Two-Digit Numbers",iv:"blocks",
     teach:`<p>The <b>standard long-division algorithm</b> handles division place by place: divide, multiply, subtract, and (when needed) regroup to the next place. Let's build it with two-digit numbers.</p>

       <h4 class="ls-sub">Divide the tens, then the ones</h4>
       <p>To find <b>79 ÷ 3</b>, start with the <b>tens</b>. 7 tens ÷ 3 = 2 tens (since 3 × 2 = 6), with 1 ten left over. <b>Regroup</b> that 1 leftover ten as 10 ones and combine with the 9 ones → 19 ones. Now divide the ones: 19 ÷ 3 = 6 (since 3 × 6 = 18), with 1 left over. So 79 ÷ 3 = <b>26 R1</b>.</p>

       <h4 class="ls-sub">The four steps, repeated</h4>
       <p>Each place uses the same loop: <b>divide</b> (how many fit?), <b>multiply</b> (divisor × that digit), <b>subtract</b> (find what's left), and <b>bring down / regroup</b> the next place. Keep going until you run out of places.</p>

       <h4 class="ls-sub">Check by multiplying back</h4>
       <p>For 79 ÷ 3 = 26 R1, check 3 × 26 + 1 = 79. ✓ An even division like 96 ÷ 6 = 16 checks with 6 × 16 = 96.</p>
       <div class="reallife"><b>Real life:</b> long division is how you split a bill, share supplies, or convert totals into per-person amounts exactly.</div>
       <div class="watchout"><b>Common mistake:</b> forgetting to regroup the leftover tens. After dividing the tens, carry any remainder into the ones before dividing again.</div>

       <h4 class="ls-sub">Recap</h4>
       <p>Divide the tens, regroup any leftover into the ones, then divide the ones. Repeat divide–multiply–subtract–regroup, and check by multiplying back.</p>
       <div class="keybox">79 ÷ 3 = <b>26 R1</b>. Check: 3 × 26 + 1 = 79. ✓</div>`,
     examples:[
      {title:"Divide with regrouping",steps:["Find 79 ÷ 3.","7 tens ÷ 3 = 2 tens, remainder 1 ten → regroup to 19 ones.","19 ÷ 3 = 6 R1 → 26 R1."]},
      {title:"Even division",steps:["Find 96 ÷ 6.","9 tens ÷ 6 = 1 ten, remainder 3 tens → regroup to 36 ones.","36 ÷ 6 = 6 → 16."]},
      {title:"Check your answer",steps:["74 ÷ 5 = 14 R4.","Check: 5 × 14 + 4.","70 + 4 = 74 ✓."]}
     ],
     quiz:[
      {q:"79 ÷ 3 =",o:["26 R1","26 R2","25 R1","27 R1"],a:0,why:"7 tens ÷ 3 = 2 tens R1; regroup to 19 ones; 19 ÷ 3 = 6 R1 → 26 R1."},
      {q:"96 ÷ 6 =",o:["16","14","18","15"],a:0,why:"9 tens ÷ 6 = 1 ten R3; regroup to 36; 36 ÷ 6 = 6 → 16."},
      {q:"After dividing the tens and having a leftover ten, you should...",o:["regroup it as 10 ones and combine with the ones","ignore it","add it to the quotient","stop"],a:0,why:"Carry the leftover ten into the ones place before dividing again."},
      {q:"88 ÷ 4 =",o:["22","21","24","20"],a:0,why:"8 tens ÷ 4 = 2 tens; 8 ones ÷ 4 = 2 → 22."},
      {q:"74 ÷ 5 =",o:["14 R4","14 R3","15 R4","13 R4"],a:0,why:"5 × 14 = 70, and 74 − 70 = 4 → 14 R4."},
      {q:"The four repeated steps of long division are:",o:["divide, multiply, subtract, regroup","add, subtract, multiply, divide","guess, check, add, stop","round, divide, round, add"],a:0,why:"Each place value uses divide–multiply–subtract–regroup."},
      {q:"85 ÷ 5 =",o:["17","15","18","16"],a:0,why:"8 tens ÷ 5 = 1 ten R3; regroup to 35; 35 ÷ 5 = 7 → 17."},
      {q:"To check 79 ÷ 3 = 26 R1, compute...",o:["3 × 26 + 1 = 79","3 × 26 = 78","79 − 1 = 78","26 + 1 = 27"],a:0,why:"divisor × quotient + remainder should equal the dividend."},
      {q:"92 ÷ 7 =",o:["13 R1","13 R2","12 R1","14 R1"],a:0,why:"7 × 13 = 91, and 92 − 91 = 1 → 13 R1."},
      {q:"A teacher shares 84 markers equally among 4 tables. Each table gets:",o:["21","20","22","24"],a:0,why:"84 ÷ 4 = 21 markers."}
     ]},
    {title:"Divide Multi-Digit Numbers",iv:"blocks",
     teach:`<p>The long-division algorithm scales up to <b>three- and four-digit</b> dividends with no new rules — you just do more places. Start at the biggest place and work right, regrouping as you go.</p>

       <h4 class="ls-sub">Divide hundreds, tens, then ones</h4>
       <p>To find <b>907 ÷ 5</b>: 9 hundreds ÷ 5 = 1 hundred (write 1), with 4 hundreds left. Regroup 4 hundreds as 40 tens; with 0 tens that's 40 tens ÷ 5 = 8 tens (write 8), with 0 left. Bring down 7 ones: 7 ÷ 5 = 1 (write 1), with 2 left. So 907 ÷ 5 = <b>181 R2</b>.</p>

       <h4 class="ls-sub">Use place value to place each digit</h4>
       <p>Each digit of the quotient sits above the place you're dividing. For <b>348 ÷ 3</b>: 3 hundreds ÷ 3 = 1 hundred; 4 tens ÷ 3 = 1 ten R1 (regroup to 18 ones); 18 ÷ 3 = 6. So 348 ÷ 3 = <b>116</b>.</p>
       <div class="reallife"><b>Real life:</b> dividing multi-digit numbers splits big totals — like 7,180 tickets among 5 shows, or 8,385 miles across 7 days.</div>
       <div class="watchout"><b>Common mistake:</b> misplacing a quotient digit. Keep each digit lined up over the place value you're currently dividing so the answer's size is right.</div>

       <h4 class="ls-sub">Recap</h4>
       <p>Divide from the largest place to the smallest, regrouping each leftover into the next place. Line up each quotient digit over its place, and check by multiplying back.</p>
       <div class="keybox">907 ÷ 5 = <b>181 R2</b>. Check: 5 × 181 + 2 = 907. ✓</div>`,
     examples:[
      {title:"Three-digit dividend",steps:["Find 348 ÷ 3.","3 hundreds ÷ 3 = 1; 4 tens ÷ 3 = 1 R1 → 18 ones; 18 ÷ 3 = 6.","So 348 ÷ 3 = 116."]},
      {title:"With a remainder",steps:["Find 531 ÷ 4.","5 hundreds ÷ 4 = 1 R1 → 13 tens; 13 ÷ 4 = 3 R1 → 11 ones; 11 ÷ 4 = 2 R3.","So 531 ÷ 4 = 132 R3."]},
      {title:"Four-digit dividend",steps:["Find 7,180 ÷ 5.","7 thousands ÷ 5 = 1 R2 → 21 hundreds; 21 ÷ 5 = 4 R1 → 18 tens; 18 ÷ 5 = 3 R3 → 30 ones; 30 ÷ 5 = 6.","So 7,180 ÷ 5 = 1,436."]}
     ],
     quiz:[
      {q:"907 ÷ 5 =",o:["181 R2","181 R1","180 R2","182 R1"],a:0,why:"5 × 181 = 905, and 907 − 905 = 2 → 181 R2."},
      {q:"348 ÷ 3 =",o:["116","106","126","115"],a:0,why:"3 × 116 = 348, no remainder."},
      {q:"531 ÷ 4 =",o:["132 R3","132 R1","131 R3","133 R3"],a:0,why:"4 × 132 = 528, and 531 − 528 = 3 → 132 R3."},
      {q:"7,180 ÷ 5 =",o:["1,436","1,426","1,446","1,336"],a:0,why:"5 × 1,436 = 7,180, no remainder."},
      {q:"8,385 ÷ 7 =",o:["1,197 R6","1,197 R5","1,187 R6","1,198 R6"],a:0,why:"7 × 1,197 = 8,379, and 8,385 − 8,379 = 6 → 1,197 R6."},
      {q:"In long division, each quotient digit should be placed...",o:["above the place value you are dividing","at the far right","below the dividend","anywhere"],a:0,why:"Lining digits up by place value keeps the quotient the right size."},
      {q:"655 ÷ 5 =",o:["131","121","141","130"],a:0,why:"5 × 131 = 655, no remainder."},
      {q:"872 ÷ 4 =",o:["218","208","228","216"],a:0,why:"4 × 218 = 872, no remainder."},
      {q:"A theater sells 7,180 tickets evenly across 5 shows. Tickets per show?",o:["1,436","1,426","1,336","1,446"],a:0,why:"7,180 ÷ 5 = 1,436 tickets per show."},
      {q:"2,946 ÷ 6 =",o:["491","481","501","490"],a:0,why:"6 × 491 = 2,946, no remainder."}
     ]},
    {title:"Divide by One-Digit Numbers",iv:null,
     teach:`<p>Sometimes a place value in the dividend is <b>too small</b> to divide by the divisor. When that happens, you write a <b>0</b> in that place of the quotient and regroup to the next place. Missing this is the most common long-division slip.</p>

       <h4 class="ls-sub">When a place can't be divided, write 0</h4>
       <p>Find <b>4,829 ÷ 8</b>. The 4 thousands can't be shared among 8, so regroup as 48 hundreds: 48 ÷ 8 = 6 hundreds (write 6), 0 left. Now the 2 tens can't be divided by 8, so write <b>0</b> in the tens place and regroup: 2 tens + 9 ones = 29 ones; 29 ÷ 8 = 3 R5. So 4,829 ÷ 8 = <b>603 R5</b>.</p>

       <h4 class="ls-sub">Why the 0 matters</h4>
       <p>That 0 holds the tens place so the other digits stay in their correct spots. Without it you'd get a wrong, too-small answer. For <b>312 ÷ 3</b>: 3 hundreds ÷ 3 = 1; 1 ten ÷ 3 = 0 (write 0, regroup to 12 ones); 12 ÷ 3 = 4. So 312 ÷ 3 = <b>104</b> — the 0 keeps the 1 in the hundreds place.</p>
       <div class="reallife"><b>Real life:</b> a zero in the quotient shows up whenever a middle amount happens to divide out evenly or is too small — it's a normal part of the answer.</div>
       <div class="watchout"><b>Common mistake:</b> skipping the 0 and writing 64 for 603, or 14 for 104. If a place can't be divided, that place gets a 0 in the quotient.</div>

       <h4 class="ls-sub">Recap</h4>
       <p>When a place value is smaller than the divisor, write a 0 in the quotient for that place and regroup to the next place. The 0 keeps every other digit in its correct place.</p>
       <div class="keybox">4,829 ÷ 8 = <b>603 R5</b> — the 0 holds the tens place.</div>`,
     examples:[
      {title:"Zero in the tens place",steps:["Find 4,829 ÷ 8.","48 hundreds ÷ 8 = 6; 2 tens ÷ 8 = 0 (write 0) → 29 ones; 29 ÷ 8 = 3 R5.","So 4,829 ÷ 8 = 603 R5."]},
      {title:"Zero from an even split",steps:["Find 312 ÷ 3.","3 hundreds ÷ 3 = 1; 1 ten ÷ 3 = 0 (write 0) → 12 ones; 12 ÷ 3 = 4.","So 312 ÷ 3 = 104."]},
      {title:"Larger dividend",steps:["Find 6,045 ÷ 3.","6 thousands ÷ 3 = 2; 0 hundreds ÷ 3 = 0; 4 tens ÷ 3 = 1 R1 → 15 ones; 15 ÷ 3 = 5.","So 6,045 ÷ 3 = 2,015."]}
     ],
     quiz:[
      {q:"4,829 ÷ 8 =",o:["603 R5","603 R3","630 R5","613 R5"],a:0,why:"8 × 603 = 4,824, and 4,829 − 4,824 = 5 → 603 R5."},
      {q:"312 ÷ 3 =",o:["104","114","140","102"],a:0,why:"3 × 104 = 312; the 0 holds the tens place."},
      {q:"When a place value is too small to divide by the divisor, you...",o:["write 0 in the quotient and regroup","skip that place","stop dividing","write the divisor"],a:0,why:"A 0 in the quotient keeps the other digits in their correct places."},
      {q:"756 ÷ 7 =",o:["108","118","180","106"],a:0,why:"7 × 108 = 756; the 0 holds the tens place (5 tens ÷ 7 = 0)."},
      {q:"364 ÷ 6 =",o:["60 R4","60 R2","61 R4","6 R4"],a:0,why:"6 × 60 = 360, and 364 − 360 = 4 → 60 R4 (0 in the ones place)."},
      {q:"Why write a 0 in the quotient instead of skipping the place?",o:["It keeps the other digits in their correct place values","To make the number bigger","It's optional","To show a remainder"],a:0,why:"Skipping it would slide the other digits into wrong places, giving a too-small answer."},
      {q:"618 ÷ 6 =",o:["103","113","130","106"],a:0,why:"6 × 103 = 618; 1 ten ÷ 6 = 0, so a 0 sits in the tens place."},
      {q:"4,024 ÷ 4 =",o:["1,006","1,060","1,600","106"],a:0,why:"4 × 1,006 = 4,024; zeros hold the hundreds and tens places."},
      {q:"832 ÷ 4 =",o:["208","28","218","280"],a:0,why:"4 × 208 = 832; 3 tens ÷ 4 = 0, so a 0 sits in the tens place."},
      {q:"A student writes 64 for 4,829 ÷ 8. What went wrong?",o:["They skipped the 0 in the tens place (answer is 603 R5)","Nothing, it's right","They should add instead","The remainder is missing only"],a:0,why:"Forgetting the 0 makes the answer far too small; the correct quotient is 603 R5."}
     ]},
    {title:"Problem Solving: Division",iv:null,
     teach:`<p>Division word problems use the same four-step plan — <b>Understand, Plan, Solve, Check</b> — and often take <b>two steps</b> or ask you to <b>interpret a remainder</b>.</p>

       <h4 class="ls-sub">Plan with letters</h4>
       <p>Example: <i>A library has 348 fiction and 372 nonfiction books and puts 9 books on each shelf. How many shelves?</i> <b>Step 1</b>: total books, 348 + 372 = 720. <b>Step 2</b>: shelves, 720 ÷ 9 = <b>80</b>. Naming the totals (or using a letter) keeps the two steps clear.</p>

       <h4 class="ls-sub">Work backward when needed</h4>
       <p>Some problems give you a result and ask for a starting value. <i>A robot's top speed is 1,940 mm/s, which is 140 more than 3 times its cruising speed. Find the cruising speed.</i> Undo the steps: 1,940 − 140 = 1,800, then 1,800 ÷ 3 = <b>600 mm/s</b>.</p>

       <h4 class="ls-sub">Interpret the remainder</h4>
       <p>What the remainder <i>means</i> depends on the question. For "how many buses for 100 kids, 8 per bus?" 100 ÷ 8 = 12 R4 — but the extra 4 kids still need a ride, so you <b>round up to 13 buses</b>. For "how many full crates?" you'd ignore the leftover. Always ask what the leftover means in the story.</p>
       <div class="reallife"><b>Real life:</b> deciding how many buses, tables, or boxes you need almost always involves interpreting a remainder.</div>
       <div class="watchout"><b>Common mistake:</b> ignoring the remainder when it matters (or counting it when it doesn't). Re-read the question to decide.</div>

       <h4 class="ls-sub">Recap</h4>
       <p>Understand the problem, plan with letters, solve step by step, and interpret the remainder to fit the question. Check that your answer is reasonable.</p>
       <div class="keybox">720 books ÷ 9 per shelf = <b>80</b> shelves.</div>`,
     examples:[
      {title:"Two-step: add, then divide",steps:["348 fiction + 372 nonfiction books, 9 per shelf. Shelves?","Step 1: 348 + 372 = 720 books.","Step 2: 720 ÷ 9 = 80 shelves."]},
      {title:"Work backward",steps:["Robot top speed 1,940 = 140 more than 3× the cruising speed. Cruising speed?","Undo +140: 1,940 − 140 = 1,800.","Undo ×3: 1,800 ÷ 3 = 600 mm/s."]},
      {title:"Interpret a remainder",steps:["100 kids, 8 per bus. Buses needed?","100 ÷ 8 = 12 R4.","The extra 4 kids still need a bus → round up to 13 buses."]}
     ],
     quiz:[
      {q:"A library has 348 fiction and 372 nonfiction books, 9 per shelf. How many shelves?",o:["80","79","81","720"],a:0,why:"348 + 372 = 720; 720 ÷ 9 = 80 shelves."},
      {q:"A robot's top speed (1,940 mm/s) is 140 more than 3 times its cruising speed. Find the cruising speed.",o:["600 mm/s","620 mm/s","660 mm/s","540 mm/s"],a:0,why:"1,940 − 140 = 1,800; 1,800 ÷ 3 = 600 mm/s."},
      {q:"100 kids ride buses that hold 8 each. How many buses are needed?",o:["13","12","12 R4","8"],a:0,why:"100 ÷ 8 = 12 R4, but the extra 4 kids need a bus, so 13."},
      {q:"156 markers are shared equally by 4 classes. How many does each class get?",o:["39","38","40","36"],a:0,why:"156 ÷ 4 = 39 markers."},
      {q:"A baker packs 245 muffins into boxes of 6. How many FULL boxes?",o:["40","41","40 R5","6"],a:0,why:"245 ÷ 6 = 40 R5; there are 40 full boxes (with 5 left over)."},
      {q:"To decide whether a remainder matters, you should...",o:["re-read the question to see what the leftover means","always round up","always drop it","multiply it by the divisor"],a:0,why:"Whether you round up, drop it, or report it depends on the situation."},
      {q:"A school raises $828 equally over 4 weeks. How much per week?",o:["$207","$217","$202","$27"],a:0,why:"828 ÷ 4 = $207 per week."},
      {q:"918 stickers are split among 3 grades, then each grade splits its share among 6 classes. Stickers per class?",o:["51","61","306","49"],a:0,why:"918 ÷ 3 = 306 per grade; 306 ÷ 6 = 51 per class."},
      {q:"A remainder of 5 when packing boxes of 6 means...",o:["there are 5 items left that don't fill a box","5 full boxes","you made a mistake","5 extra boxes"],a:0,why:"The remainder is the leftover that can't complete another full group."},
      {q:"375 books go on shelves that hold 9 each. How many shelves are completely full?",o:["41","42","41 R6","9"],a:0,why:"375 ÷ 9 = 41 R6, so 41 shelves are full (6 books left over)."}
     ]}
   ],
   test:[
    {q:"270 ÷ 9 =",o:["30","3","300","27"],a:0,why:"27 tens ÷ 9 = 3 tens = 30."},
    {q:"5,600 ÷ 8 =",o:["700","70","7,000","560"],a:0,why:"56 hundreds ÷ 8 = 7 hundreds = 700."},
    {q:"Estimate 154 ÷ 4 using compatible numbers.",o:["40","30","400","20"],a:0,why:"160 ÷ 4 = 40."},
    {q:"The quotient 6,427 ÷ 7 is between which two estimates?",o:["900 and 1,000","90 and 100","800 and 900","1,000 and 1,100"],a:0,why:"6,300 ÷ 7 = 900 and 7,000 ÷ 7 = 1,000."},
    {q:"27 ÷ 4 =",o:["6 R3","6 R1","5 R3","7 R1"],a:0,why:"4 × 6 = 24, and 27 − 24 = 3 → 6 R3."},
    {q:"A correct remainder is always...",o:["smaller than the divisor","bigger than the divisor","equal to the divisor","equal to the quotient"],a:0,why:"Otherwise another whole group would fit."},
    {q:"235 ÷ 5 (partial quotients) =",o:["47","45","57","43"],a:0,why:"5 × 40 = 200, then 5 × 7 = 35; 40 + 7 = 47."},
    {q:"2,918 ÷ 4 =",o:["729 R2","729 R1","728 R2","739 R2"],a:0,why:"4 × 729 = 2,916, and 2,918 − 2,916 = 2 → 729 R2."},
    {q:"79 ÷ 3 =",o:["26 R1","26 R2","25 R1","27 R1"],a:0,why:"3 × 26 = 78, and 79 − 78 = 1 → 26 R1."},
    {q:"96 ÷ 6 =",o:["16","14","18","15"],a:0,why:"6 × 16 = 96, no remainder."},
    {q:"907 ÷ 5 =",o:["181 R2","181 R1","180 R2","182 R1"],a:0,why:"5 × 181 = 905, and 907 − 905 = 2 → 181 R2."},
    {q:"348 ÷ 3 =",o:["116","106","126","115"],a:0,why:"3 × 116 = 348, no remainder."},
    {q:"4,829 ÷ 8 =",o:["603 R5","603 R3","630 R5","613 R5"],a:0,why:"8 × 603 = 4,824, and 4,829 − 4,824 = 5 → 603 R5."},
    {q:"312 ÷ 3 =",o:["104","114","140","102"],a:0,why:"3 × 104 = 312. There's a 0 in the tens place because 1 ten can't be divided by 3 without regrouping."},
    {q:"Why does 4,829 ÷ 8 have a 0 in the tens place of the quotient?",o:["2 tens can't be divided by 8 without regrouping, so you write 0","because 8 is even","because there is a remainder","it's a mistake"],a:0,why:"When a place value is smaller than the divisor, you write 0 in that place of the quotient."},
    {q:"A library has 348 fiction and 372 nonfiction books, shelved 9 per shelf. How many shelves are needed?",o:["80","79","81","720"],a:0,why:"348 + 372 = 720; 720 ÷ 9 = 80 shelves."},
    {q:"A robot's top speed is 1,940 mm/s, which is 140 more than 3 times its cruising speed. Find the cruising speed.",o:["600 mm/s","620 mm/s","660 mm/s","540 mm/s"],a:0,why:"1,940 − 140 = 1,800; 1,800 ÷ 3 = 600 mm/s."},
    {q:"To check that 235 ÷ 5 = 47, you can...",o:["multiply 47 × 5 and see if you get 235","divide again","add 47 + 5","subtract 47 − 5"],a:0,why:"Multiplication undoes division: 47 × 5 = 235. ✓"},
    {q:"Performance Task: A class has $434 for zoo tickets that cost $6 each, with less than $6 in change. How many tickets can they buy?",o:["72","71","73","70"],a:0,why:"434 ÷ 6 = 72 R2, so they buy 72 tickets."},
    {q:"Performance Task: Exactly how much money is left over?",o:["$2","$6","$4","$0"],a:0,why:"6 × 72 = 432, and 434 − 432 = $2."},
    {q:"Performance Task: There are 4 groups, each with 1 teacher and an equal number of students. If 72 people go, how many students are in each group?",o:["17","18","20","72"],a:0,why:"72 − 4 teachers = 68 students; 68 ÷ 4 = 17 per group."},
    {q:"Performance Task: Two groups (of 18 people each) attend each tour. The room has 6 rows of 9 seats. How many seats are empty per tour?",o:["18","16","36","54"],a:0,why:"6 × 9 = 54 seats; 2 × 18 = 36 people; 54 − 36 = 18 empty."},
    {q:"Performance Task: From 9:00 to 12:00 (180 min) there are a 30-min show, four 25-min activities, and 5 min between the 6 events. How long is lunch?",o:["25 min","30 min","20 min","45 min"],a:0,why:"30 + (4 × 25) + (5 × 5) = 30 + 100 + 25 = 155; 180 − 155 = 25 min."},
    {q:"Performance Task: The zoo trail (8,460 m) is about 3 times the length of the main path. Which is the best approach for the main path's length?",o:["an estimate — about 2,800 m","an exact answer of 25,380 m","an estimate of about 25,000 m","it cannot be found"],a:0,why:"'About 3 times' calls for an estimate: 8,460 ÷ 3 ≈ 2,800 m."}
   ]},

  {id:"g4u6",name:"Factors, Multiples, and Patterns",icon:"🧩",code:"4.OA",accent:"#14b8a6",
   sections:[
    {title:"Understand Factors",iv:"array",
     teach:`<p>When two whole numbers are multiplied to make a product, those two numbers are called <b>factors</b> of the product. For example, in 3 × 6 = 18, both 3 and 6 are factors of 18. Learning to find <i>all</i> the factors of a number is a skill you'll use for fractions, patterns, and beyond.</p>

       <h4 class="ls-sub">Factor pairs</h4>
       <p>A <b>factor pair</b> is two numbers that multiply to give a product. The number 18 has three factor pairs: 1 × 18, 2 × 9, and 3 × 6. Listing every factor pair gives you every factor: for 18 that's <b>1, 2, 3, 6, 9, and 18</b>.</p>

       <h4 class="ls-sub">Find factor pairs with area models</h4>
       <p>Every factor pair is the side lengths of a rectangle with that area. A rectangle with an area of 18 squares could be 1 by 18, 2 by 9, or 3 by 6 — each rectangle's sides are a factor pair. If you can build a whole-number rectangle with that area, you've found a factor pair.</p>

       <h4 class="ls-sub">A tidy way to list them all</h4>
       <p>Check the numbers 1, 2, 3, … in order and see which ones divide evenly. Each time you find one, you also get its partner. For 36: 1 × 36, 2 × 18, 3 × 12, 4 × 9, and 6 × 6. Once the pairs start to repeat (after 6 × 6), you know you've found them all. So the factors of 36 are 1, 2, 3, 4, 6, 9, 12, 18, and 36.</p>
       <div class="reallife"><b>Real life:</b> factors tell you the equal ways to arrange things — 18 chairs could be set up as 2 rows of 9, 3 rows of 6, and so on.</div>
       <div class="watchout"><b>Common mistake:</b> forgetting 1 and the number itself. Every number has 1 and itself as factors, so don't leave them off the list.</div>

       <h4 class="ls-sub">Recap</h4>
       <p>Factors are the whole numbers that multiply to make a product. Find every factor pair (each is a rectangle's side lengths), and list all factors from 1 up to the number itself.</p>
       <div class="keybox">The factor pairs of 18 are 1 × 18, 2 × 9, and 3 × 6 → factors: 1, 2, 3, 6, 9, 18.</div>`,
     examples:[
      {title:"Find the factor pairs of 20",steps:["Check 1, 2, 3, …: 1 × 20, 2 × 10, 4 × 5.","3 doesn't divide 20 evenly, so skip it.","Factors of 20: 1, 2, 4, 5, 10, 20."]},
      {title:"Use rectangles for 12",steps:["Rectangles with area 12: 1 × 12, 2 × 6, 3 × 4.","Each rectangle's sides are a factor pair.","Factors of 12: 1, 2, 3, 4, 6, 12."]},
      {title:"Know when to stop: 36",steps:["1 × 36, 2 × 18, 3 × 12, 4 × 9, 6 × 6.","After 6 × 6 the pairs repeat, so stop.","Factors of 36: 1, 2, 3, 4, 6, 9, 12, 18, 36."]}
     ],
     quiz:[
      {q:"Which number is a factor of 18?",o:["6","4","5","7"],a:0,why:"18 ÷ 6 = 3, so 6 is a factor of 18."},
      {q:"Which is a factor pair of 24?",o:["3 × 8","5 × 5","2 × 11","4 × 5"],a:0,why:"3 × 8 = 24, so 3 and 8 are a factor pair of 24."},
      {q:"Which is NOT a factor of 20?",o:["3","4","5","10"],a:0,why:"20 ÷ 3 is not a whole number, so 3 is not a factor."},
      {q:"How many factor pairs does 12 have?",o:["3","2","4","6"],a:0,why:"1 × 12, 2 × 6, 3 × 4 — three factor pairs."},
      {q:"A rectangle has an area of 15 squares. Which could be its side lengths?",o:["3 × 5","2 × 7","4 × 4","2 × 8"],a:0,why:"3 × 5 = 15, so 3 by 5 is a valid rectangle (factor pair)."},
      {q:"Every number has which two factors for sure?",o:["1 and itself","2 and 5","0 and 1","itself twice"],a:0,why:"1 and the number itself are always factors."},
      {q:"Which lists ALL the factors of 16?",o:["1, 2, 4, 8, 16","1, 2, 4, 16","2, 4, 8","1, 16"],a:0,why:"1 × 16, 2 × 8, 4 × 4 → factors 1, 2, 4, 8, 16."},
      {q:"Why can you stop checking factors of 36 after 6 × 6?",o:["The factor pairs start to repeat","36 is even","6 is the biggest factor","you can't stop"],a:0,why:"Past the middle pair (6 × 6), you just get the same pairs in reverse."},
      {q:"Which number is a factor of both 12 and 18?",o:["6","5","8","4"],a:0,why:"6 divides 12 (×2) and 18 (×3), so it's a factor of both."},
      {q:"A factor of a number divides it with a remainder of...",o:["0","1","2","any number"],a:0,why:"A factor divides evenly, leaving no remainder."}
     ]},
    {title:"Factors and Divisibility",iv:null,
     teach:`<p>A number is <b>divisible</b> by another number when it divides evenly — the remainder is 0. There are quick <b>divisibility rules</b> that tell you whether a number is a factor without doing the full division.</p>

       <h4 class="ls-sub">The most useful rules</h4>
       <p>A number is divisible by <b>2</b> if its ones digit is 0, 2, 4, 6, or 8 (it's even). By <b>5</b> if the ones digit is 0 or 5. By <b>10</b> if the ones digit is 0. By <b>3</b> if the <i>sum of its digits</i> is divisible by 3. By <b>9</b> if the sum of its digits is divisible by 9. And by <b>6</b> if it's divisible by <i>both</i> 2 and 3.</p>

       <h4 class="ls-sub">Using the digit-sum rules</h4>
       <p>Is 3 a factor of 72? Add the digits: 7 + 2 = 9, and 9 is divisible by 3 — so yes, 3 is a factor of 72. Is 9 a factor of 72? The digit sum 9 is divisible by 9, so yes again. The digit-sum trick saves you from long division.</p>

       <h4 class="ls-sub">Combining rules for 6</h4>
       <p>To test divisibility by 6, check 2 and 3 together. Is 84 divisible by 6? It's even (rule for 2 ✓) and 8 + 4 = 12 is divisible by 3 (rule for 3 ✓), so yes — 6 is a factor of 84.</p>
       <div class="reallife"><b>Real life:</b> divisibility rules help you quickly decide if a group can be split evenly — like whether 84 students can form equal teams of 6.</div>
       <div class="watchout"><b>Common mistake:</b> testing 6 with only one rule. A number must pass <b>both</b> the 2-rule and the 3-rule to be divisible by 6.</div>

       <h4 class="ls-sub">Recap</h4>
       <p>Divisibility rules quickly reveal factors: 2 (even), 5 (ends 0/5), 10 (ends 0), 3 and 9 (digit sums), and 6 (divisible by 2 and 3).</p>
       <div class="keybox">72: digits 7 + 2 = 9 → divisible by both 3 and 9. Even → divisible by 2 and 6.</div>`,
     examples:[
      {title:"Test divisibility by 3",steps:["Is 3 a factor of 51?","Digit sum: 5 + 1 = 6, which is divisible by 3.","Yes — 51 ÷ 3 = 17."]},
      {title:"Test divisibility by 6",steps:["Is 6 a factor of 90?","Even (÷2 ✓) and 9 + 0 = 9 is divisible by 3 (÷3 ✓).","Yes — 90 ÷ 6 = 15."]},
      {title:"Test divisibility by 9",steps:["Is 9 a factor of 135?","Digit sum: 1 + 3 + 5 = 9, divisible by 9.","Yes — 135 ÷ 9 = 15."]}
     ],
     quiz:[
      {q:"Which number is divisible by 3?",o:["72","74","76","80"],a:0,why:"7 + 2 = 9 is divisible by 3, so 72 is."},
      {q:"A number is divisible by 5 if its ones digit is...",o:["0 or 5","even","0 only","3 or 6"],a:0,why:"Divisible by 5 means the ones digit is 0 or 5."},
      {q:"Which number is divisible by 6?",o:["54","52","58","64"],a:0,why:"54 is even and 5 + 4 = 9 is divisible by 3, so it's divisible by 6."},
      {q:"Which number is divisible by 9?",o:["63","64","65","68"],a:0,why:"6 + 3 = 9 is divisible by 9, so 63 is."},
      {q:"To test divisibility by 3, you...",o:["add the digits and check if the sum is divisible by 3","check the ones digit","divide by 9","see if it's even"],a:0,why:"If the digit sum is divisible by 3, the number is too."},
      {q:"Is 6 a factor of 84?",o:["Yes — it's even and its digits sum to 12 (÷3)","No, 84 is odd","No, 8 + 4 = 11","Only if you divide by 5"],a:0,why:"84 is even and 8 + 4 = 12 is divisible by 3, so 6 is a factor."},
      {q:"Which number is divisible by 10?",o:["90","95","94","99"],a:0,why:"A number divisible by 10 ends in 0."},
      {q:"Which number is divisible by BOTH 2 and 3?",o:["48","45","50","52"],a:0,why:"48 is even and 4 + 8 = 12 is divisible by 3, so it's divisible by both (and by 6)."},
      {q:"Is 3 a factor of 128?",o:["No — 1 + 2 + 8 = 11 is not divisible by 3","Yes, 128 is even","Yes, it ends in 8","Only if it ends in 0"],a:0,why:"The digit sum 11 is not divisible by 3, so 3 is not a factor of 128."},
      {q:"Which rule tells you a number is divisible by 9?",o:["the sum of its digits is divisible by 9","it's even","it ends in 9","it ends in 0 or 5"],a:0,why:"Divisibility by 9 uses the digit-sum rule."}
     ]},
    {title:"Relate Factors and Multiples",iv:"numline",
     teach:`<p>Factors and multiples are two sides of the same coin. A <b>multiple</b> of a number is the product of that number and any whole number. The multiples of 5 are 5, 10, 15, 20, 25, … — you get them by skip-counting.</p>

       <h4 class="ls-sub">The factor–multiple connection</h4>
       <p>Here's the key idea: <b>if a number is a factor of another, then that other number is a multiple of it.</b> Since 6 is a factor of 30 (because 6 × 5 = 30), 30 is a multiple of 6. Factor and multiple always come as a pair, just described from opposite directions.</p>

       <h4 class="ls-sub">Is one number a multiple of another?</h4>
       <p>To check whether 45 is a multiple of 9, divide: 45 ÷ 9 = 5 with no remainder, so yes — 45 is a multiple of 9 (and 9 is a factor of 45). If the division left a remainder, it wouldn't be a multiple.</p>

       <h4 class="ls-sub">A number is a multiple of all its factors</h4>
       <p>Because 12 = 1 × 12 = 2 × 6 = 3 × 4, the number 12 is a multiple of 1, 2, 3, 4, 6, and 12 — every one of its factors. So a number always shows up in the skip-counting lists of each of its factors.</p>
       <div class="reallife"><b>Real life:</b> multiples show up as repeating events — every 4th day, every 6th customer — and factors tell you how they line up.</div>
       <div class="watchout"><b>Common mistake:</b> mixing up the words. A factor is a number you multiply <i>by</i>; a multiple is the <i>result</i>. 3 is a factor of 12; 12 is a multiple of 3.</div>

       <h4 class="ls-sub">Recap</h4>
       <p>Multiples come from skip-counting; a number is a multiple of each of its factors. If a is a factor of b, then b is a multiple of a — check by dividing for a remainder of 0.</p>
       <div class="keybox">6 is a factor of 30, so 30 is a multiple of 6 (6 × 5 = 30).</div>`,
     examples:[
      {title:"List multiples of 7",steps:["Skip-count by 7: 7, 14, 21, 28, 35, …","Each is 7 times a whole number.","So 28 is a multiple of 7 (7 × 4)."]},
      {title:"Is 45 a multiple of 9?",steps:["Divide: 45 ÷ 9 = 5, remainder 0.","No remainder means yes.","45 is a multiple of 9, and 9 is a factor of 45."]},
      {title:"Factors are multiples' partners",steps:["12 = 3 × 4.","So 3 and 4 are factors of 12.","And 12 is a multiple of both 3 and 4."]}
     ],
     quiz:[
      {q:"Which number is a multiple of 8?",o:["32","36","28","44"],a:0,why:"8 × 4 = 32, so 32 is a multiple of 8."},
      {q:"If 4 is a factor of 20, then 20 is a ___ of 4.",o:["multiple","factor","half","divisor"],a:0,why:"Factor and multiple are opposite directions: 20 is a multiple of 4."},
      {q:"Is 56 a multiple of 7?",o:["Yes — 56 ÷ 7 = 8 with no remainder","No, 7 is odd","Only if 56 is even","No, 56 is too big"],a:0,why:"56 ÷ 7 = 8 exactly, so 56 is a multiple of 7."},
      {q:"The first four multiples of 6 are...",o:["6, 12, 18, 24","1, 2, 3, 6","6, 7, 8, 9","6, 16, 26, 36"],a:0,why:"Skip-count by 6: 6, 12, 18, 24."},
      {q:"A number is a multiple of all of its...",o:["factors","multiples","digits","remainders"],a:0,why:"12 is a multiple of 1, 2, 3, 4, 6, and 12 — each of its factors."},
      {q:"Which number is a multiple of BOTH 3 and 4?",o:["12","10","9","14"],a:0,why:"12 = 3 × 4, so it's a multiple of both."},
      {q:"Which statement is TRUE?",o:["5 is a factor of 35 and 35 is a multiple of 5","35 is a factor of 5","5 is a multiple of 35","5 and 35 are both prime"],a:0,why:"5 × 7 = 35, so 5 is a factor and 35 is the multiple."},
      {q:"Is 50 a multiple of 8?",o:["No — 50 ÷ 8 = 6 R2","Yes, 8 × 6 = 50","Yes, 50 is even","Only if you round"],a:0,why:"50 ÷ 8 leaves a remainder of 2, so 50 is not a multiple of 8."},
      {q:"A factor is a number you multiply BY; a multiple is the...",o:["result","remainder","digit sum","half"],a:0,why:"3 is a factor of 12 (you multiply by 3); 12 is the multiple (the result)."},
      {q:"Which is the 6th multiple of 5?",o:["30","25","35","11"],a:0,why:"5 × 6 = 30."}
     ]},
    {title:"Identify Prime and Composite Numbers",iv:"array",
     teach:`<p>Every whole number greater than 1 is either <b>prime</b> or <b>composite</b>, depending on how many factors it has.</p>

       <h4 class="ls-sub">Prime numbers</h4>
       <p>A <b>prime number</b> is a whole number greater than 1 with <b>exactly two factors</b>: 1 and itself. For example, 7 is prime because its only factors are 1 and 7. You can't build a rectangle out of 7 squares except a 1 × 7 line — that's the visual sign of a prime.</p>

       <h4 class="ls-sub">Composite numbers</h4>
       <p>A <b>composite number</b> is a whole number greater than 1 with <b>more than two factors</b>. For example, 12 is composite because it has factors 1, 2, 3, 4, 6, and 12 — you can build several rectangles (2 × 6, 3 × 4) from 12 squares.</p>

       <h4 class="ls-sub">Using divisibility to decide</h4>
       <p>To test a number, try the divisibility rules. Is 51 prime or composite? Its digits sum to 5 + 1 = 6, which is divisible by 3, so 3 is a factor — that makes 51 <b>composite</b> (51 = 3 × 17). Is 29 prime? Nothing but 1 and 29 divides it, so 29 is <b>prime</b>.</p>
       <div class="reallife"><b>Real life:</b> prime numbers are the "building blocks" of all whole numbers and are used in computer security and codes.</div>
       <div class="watchout"><b>Common mistake:</b> calling 1 prime. The number 1 has only one factor (itself), so it is <b>neither</b> prime nor composite. Also, 2 is the only even prime.</div>

       <h4 class="ls-sub">Recap</h4>
       <p>A prime has exactly two factors (1 and itself); a composite has more than two. The number 1 is neither. Use divisibility rules to find a factor and decide.</p>
       <div class="keybox">7 is prime (factors 1, 7); 12 is composite (1, 2, 3, 4, 6, 12).</div>`,
     examples:[
      {title:"Is 29 prime or composite?",steps:["Try dividing by 2, 3, 5 — none work evenly.","Its only factors are 1 and 29.","So 29 is prime."]},
      {title:"Is 45 prime or composite?",steps:["Digit sum 4 + 5 = 9 is divisible by 3, so 3 is a factor.","45 = 3 × 15, more than two factors.","So 45 is composite."]},
      {title:"Classify 2",steps:["Factors of 2 are just 1 and 2.","Exactly two factors.","So 2 is prime — the only even prime."]}
     ],
     quiz:[
      {q:"Which number is PRIME?",o:["29","33","39","51"],a:0,why:"29 has exactly two factors: 1 and 29."},
      {q:"Which number is COMPOSITE?",o:["21","23","29","31"],a:0,why:"21 = 3 × 7, so it has more than two factors."},
      {q:"A prime number has exactly...",o:["two factors","one factor","three factors","no factors"],a:0,why:"A prime's only factors are 1 and itself."},
      {q:"Is the number 1 prime or composite?",o:["neither","prime","composite","both"],a:0,why:"1 has only one factor, so it is neither."},
      {q:"Which number is prime?",o:["31","27","35","49"],a:0,why:"31 has only 1 and 31 as factors; 27 = 3×9, 35 = 5×7, 49 = 7×7."},
      {q:"Why is 51 composite?",o:["3 is a factor (5 + 1 = 6 is divisible by 3)","it is odd","it ends in 1","it is greater than 50"],a:0,why:"51 = 3 × 17, so it has more than two factors."},
      {q:"The only EVEN prime number is...",o:["2","4","6","0"],a:0,why:"2's only factors are 1 and 2; every other even number has 2 as an extra factor."},
      {q:"A composite number has...",o:["more than two factors","exactly two factors","one factor","no factors"],a:0,why:"Composite means more than two factors."},
      {q:"Which number is composite?",o:["57","53","59","61"],a:0,why:"57 = 3 × 19 (5 + 7 = 12 is divisible by 3); the others are prime."},
      {q:"If you can build only a 1-by-n rectangle from n squares, then n is...",o:["prime","composite","neither","always even"],a:0,why:"Only one rectangle means only factors 1 and n — that's prime."}
     ]},
    {title:"Number Patterns",iv:"numline",
     teach:`<p>A <b>pattern</b> is a sequence of numbers that follows a <b>rule</b>. The rule tells you how to get from one number to the next — and once you know the rule, you can extend the pattern as far as you like and describe what it does.</p>

       <h4 class="ls-sub">Rules that build a pattern</h4>
       <p>A rule can add, subtract, multiply, or divide. Using the rule <b>"add 3"</b> starting at 3 gives 3, 6, 9, 12, 15, … Using <b>"multiply by 2"</b> starting at 10 gives 10, 20, 40, 80, … To continue a pattern, just apply the rule to the last number you have.</p>

       <h4 class="ls-sub">Describing features</h4>
       <p>Good pattern-watchers notice extra <b>features</b> beyond the rule. In 3, 6, 9, 12, … every number is a <b>multiple of 3</b>. In the "add 4" pattern 1, 5, 9, 13, … every number is <b>odd</b>. In a "multiply by 2" pattern, the numbers are all <b>even</b> after the start, and you can watch the ones digits. Spotting features helps you predict numbers far down the line.</p>

       <h4 class="ls-sub">Finding the rule</h4>
       <p>If you're given a pattern like 40, 35, 30, 25, …, look at how each number changes: it goes <i>down by 5</i> each time, so the rule is <b>"subtract 5."</b> Always check your rule against two or three steps to be sure it fits the whole pattern.</p>
       <div class="reallife"><b>Real life:</b> patterns predict things — savings that grow by a fixed amount, or seats that increase row by row.</div>
       <div class="watchout"><b>Common mistake:</b> assuming a pattern always adds. Check whether it's adding, subtracting, multiplying, or dividing before you extend it.</div>

       <h4 class="ls-sub">Recap</h4>
       <p>A rule builds a number pattern; apply it to extend the pattern. Describe features like even/odd or multiples, and find a rule by seeing how each term changes.</p>
       <div class="keybox">Rule "add 3" from 3 → 3, 6, 9, 12, … (all multiples of 3).</div>`,
     examples:[
      {title:"Extend an 'add 4' pattern",steps:["Start at 1, rule add 4: 1, 5, 9, 13, …","Next: 13 + 4 = 17.","Feature: every number is odd."]},
      {title:"Extend a 'multiply by 3' pattern",steps:["Start at 2, rule multiply by 3: 2, 6, 18, 54, …","Next: 54 × 3 = 162.","Feature: the numbers grow quickly."]},
      {title:"Find the rule",steps:["Pattern: 40, 35, 30, 25, …","Each number is 5 less than the one before.","The rule is subtract 5; next is 20."]}
     ],
     quiz:[
      {q:"Rule 'add 4' starting at 1: 1, 5, 9, 13, ___. What comes next?",o:["17","16","18","14"],a:0,why:"13 + 4 = 17."},
      {q:"In the pattern 3, 6, 9, 12, …, every number is...",o:["a multiple of 3","odd","prime","a multiple of 4"],a:0,why:"Each term is 3 times a whole number."},
      {q:"Rule 'multiply by 2' starting at 5: 5, 10, 20, ___. What comes next?",o:["40","30","25","22"],a:0,why:"20 × 2 = 40."},
      {q:"What is the rule for 40, 35, 30, 25, …?",o:["subtract 5","add 5","multiply by 5","divide by 5"],a:0,why:"Each number is 5 less than the previous one."},
      {q:"In the 'add 4' pattern 1, 5, 9, 13, …, the numbers are all...",o:["odd","even","multiples of 4","prime"],a:0,why:"Adding 4 to an odd number keeps it odd."},
      {q:"Rule 'multiply by 3' starting at 2: 2, 6, 18, ___. What comes next?",o:["54","24","21","20"],a:0,why:"18 × 3 = 54."},
      {q:"The next number in 2, 4, 8, 16, … is...",o:["32","24","20","18"],a:0,why:"The rule is multiply by 2: 16 × 2 = 32."},
      {q:"Rule 'divide by 2' starting at 80: 80, 40, 20, ___. What comes next?",o:["10","15","5","22"],a:0,why:"20 ÷ 2 = 10."},
      {q:"Before extending a pattern, you should first...",o:["find the rule (add, subtract, multiply, or divide)","assume it adds","multiply the first two terms","reverse the numbers"],a:0,why:"Identify how each term changes so you use the right rule."},
      {q:"In 5, 10, 15, 20, …, the ones digits form the pattern...",o:["5, 0, 5, 0","5, 5, 5, 5","1, 2, 3, 4","all 0"],a:0,why:"The ones digits alternate 5, 0, 5, 0."}
     ]},
    {title:"Shape Patterns",iv:null,
     teach:`<p>Patterns aren't only numbers — <b>shapes</b> can repeat or grow too. The same skills (rules, division, and remainders) let you predict a shape far down the line.</p>

       <h4 class="ls-sub">Repeating patterns</h4>
       <p>A <b>repeating pattern</b> has a group of shapes that repeats over and over, like triangle, square, circle, triangle, square, circle, … The group here has <b>3 shapes</b>. To find the 14th shape, divide by the group size: 14 ÷ 3 = 4 R2. The remainder 2 means the 14th shape is the <b>2nd</b> shape in the group — a square.</p>

       <h4 class="ls-sub">Using the remainder</h4>
       <p>The remainder tells you the position <i>inside</i> the group. A remainder of 1 means the 1st shape, 2 means the 2nd, and a remainder of <b>0</b> means the <b>last</b> shape of the group (you landed exactly at the end). This trick works for patterns of any length.</p>

       <h4 class="ls-sub">Growing patterns</h4>
       <p>A <b>growing pattern</b> gets bigger by a rule. If Figure 1 has 3 dots, Figure 2 has 6, Figure 3 has 9, … then each figure adds 3 dots — Figure <i>n</i> has <b>3 × n</b> dots. So Figure 10 has 3 × 10 = 30 dots. Finding the rule lets you jump straight to any figure without drawing them all.</p>
       <div class="reallife"><b>Real life:</b> repeating patterns appear in tiles, beads, and music; growing patterns appear in seating charts and stacking displays.</div>
       <div class="watchout"><b>Common mistake:</b> counting shapes one by one for a big position. Use division and the remainder instead — it's much faster and less error-prone.</div>

       <h4 class="ls-sub">Recap</h4>
       <p>For a repeating pattern, divide the position by the group size; the remainder gives the shape's spot in the group (0 = the last one). For a growing pattern, find the rule and multiply.</p>
       <div class="keybox">Group triangle, square, circle (size 3): 14 ÷ 3 = 4 R2 → the 14th shape is the 2nd, a square.</div>`,
     examples:[
      {title:"Find a shape in a repeating pattern",steps:["Pattern triangle, square, circle, star (group of 4).","27 ÷ 4 = 6 R3.","Remainder 3 → the 27th shape is the 3rd: a circle."]},
      {title:"Land exactly at the end",steps:["Same group of 4 shapes.","24 ÷ 4 = 6 R0.","Remainder 0 → the 24th shape is the last one: a star."]},
      {title:"Growing dot pattern",steps:["Figure 1 has 3 dots, Figure 2 has 6, Figure 3 has 9.","Rule: Figure n has 3 × n dots.","Figure 10 has 3 × 10 = 30 dots."]}
     ],
     quiz:[
      {q:"A pattern repeats triangle, square, circle. What is the 14th shape?",o:["square","triangle","circle","cannot tell"],a:0,why:"14 ÷ 3 = 4 R2, so the 14th is the 2nd in the group — a square."},
      {q:"For a repeating group of 4 shapes, a remainder of 0 means the shape is...",o:["the 4th (last) in the group","the 1st","skipped","impossible"],a:0,why:"Remainder 0 lands exactly at the end of the group — the last shape."},
      {q:"Pattern triangle, square, circle, star (group of 4). What is the 27th shape?",o:["circle","star","square","triangle"],a:0,why:"27 ÷ 4 = 6 R3, so the 27th is the 3rd — a circle."},
      {q:"Figure 1 has 3 dots, Figure 2 has 6, Figure 3 has 9. How many dots in Figure 10?",o:["30","13","27","33"],a:0,why:"Figure n has 3 × n dots; 3 × 10 = 30."},
      {q:"To find the shape at a big position in a repeating pattern, you should...",o:["divide the position by the group size and use the remainder","count every shape one by one","multiply the position by the group size","add the shapes"],a:0,why:"Division with a remainder gives the spot inside the group quickly."},
      {q:"Pattern of a group of 5 shapes. What position IN the group is the 23rd shape?",o:["3rd","2nd","5th","1st"],a:0,why:"23 ÷ 5 = 4 R3, so it's the 3rd shape in the group."},
      {q:"A growing pattern has 4, 8, 12, 16 tiles in Figures 1–4. Figure n has...",o:["4 × n tiles","n + 4 tiles","4 tiles","n tiles"],a:0,why:"Each figure adds 4 tiles: Figure n has 4 × n."},
      {q:"Using 'Figure n has 4 × n tiles', how many tiles in Figure 7?",o:["28","11","24","32"],a:0,why:"4 × 7 = 28 tiles."},
      {q:"Pattern repeats A, B, B (group of 3). What is the 20th letter?",o:["B","A","C","cannot tell"],a:0,why:"20 ÷ 3 = 6 R2, so the 20th is the 2nd in the group — B."},
      {q:"In that A, B, B pattern, how many A's are in the first 20 letters?",o:["7","6","8","10"],a:0,why:"A appears at positions 1, 4, 7, 10, 13, 16, 19 → 7 A's."}
     ]}
   ],
   test:[
    {q:"Which number is a factor of 18?",o:["6","4","5","7"],a:0,why:"18 ÷ 6 = 3, so 6 is a factor."},
    {q:"Which is a factor pair of 24?",o:["3 × 8","5 × 5","2 × 11","4 × 5"],a:0,why:"3 × 8 = 24."},
    {q:"A factor divides a number with a remainder of...",o:["0","1","2","any number"],a:0,why:"A factor divides evenly, leaving no remainder."},
    {q:"Which number is divisible by 3?",o:["72","74","76","80"],a:0,why:"7 + 2 = 9 is divisible by 3."},
    {q:"Which number is divisible by 6?",o:["54","52","58","64"],a:0,why:"54 is even and its digits sum to 9 (÷3)."},
    {q:"Which number is divisible by 9?",o:["63","64","65","68"],a:0,why:"6 + 3 = 9 is divisible by 9."},
    {q:"Which number is a multiple of 7?",o:["42","44","48","50"],a:0,why:"7 × 6 = 42."},
    {q:"If 6 is a factor of 42, then 42 is a ___ of 6.",o:["multiple","factor","divisor","half"],a:0,why:"If a is a factor of b, then b is a multiple of a."},
    {q:"Which number is PRIME?",o:["29","33","39","51"],a:0,why:"29 has exactly two factors: 1 and 29."},
    {q:"Which number is COMPOSITE?",o:["21","23","29","31"],a:0,why:"21 = 3 × 7, so it has more than two factors."},
    {q:"How many factors does a prime number have?",o:["exactly two","exactly one","three","more than three"],a:0,why:"A prime has exactly two factors: 1 and itself."},
    {q:"Is the number 1 prime or composite?",o:["neither","prime","composite","both"],a:0,why:"1 has only one factor, so it is neither prime nor composite."},
    {q:"Rule 'add 5' starting at 3: 3, 8, 13, 18, ___. What comes next?",o:["23","22","24","20"],a:0,why:"18 + 5 = 23."},
    {q:"The numbers 4, 8, 12, 16 are all...",o:["multiples of 4","factors of 4","prime","odd"],a:0,why:"Each is 4 times a whole number."},
    {q:"Rule 'multiply by 2' starting at 5: 5, 10, 20, ___. What comes next?",o:["40","30","25","22"],a:0,why:"20 × 2 = 40."},
    {q:"A pattern repeats triangle, square, circle. What is the 14th shape?",o:["square","triangle","circle","cannot tell"],a:0,why:"14 ÷ 3 = 4 R2, so the 14th shape is the 2nd in the group — a square."},
    {q:"Performance Task: 48 volunteers split into equal booths with at least 4 per booth. Which is a valid way?",o:["6 booths of 8","5 booths of 9","7 booths of 7","10 booths of 5"],a:0,why:"6 × 8 = 48, with 8 (≥4) per booth. The others don't multiply to 48."},
    {q:"Performance Task: A banner is 9 ft by 15 ft. You run string around its border twice. How much string?",o:["96 ft","48 ft","24 ft","108 ft"],a:0,why:"Perimeter = 2 × (9 + 15) = 48 ft; twice around = 96 ft."},
    {q:"Performance Task: Your class sold 6 more tickets than the other class. Together they sold 74. How many did your class sell?",o:["40","34","37","44"],a:0,why:"(74 + 6) ÷ 2 = 40 for your class (the other sold 34)."},
    {q:"Performance Task: You score only in 4s and your friend scores only in 6s. Which total could BOTH of you reach?",o:["12","14","10","9"],a:0,why:"12 is a common multiple of 4 and 6 (4 × 3 and 6 × 2)."},
    {q:"Performance Task: Prizes repeat gold, silver, silver. What is the 20th prize?",o:["silver","gold","bronze","cannot tell"],a:0,why:"20 ÷ 3 = 6 R2, so the 20th prize is the 2nd in the group — silver."},
    {q:"Performance Task: With that gold, silver, silver pattern, how many GOLD prizes are in the first 20?",o:["7","6","8","10"],a:0,why:"Gold is every 3rd starting at 1: positions 1, 4, 7, 10, 13, 16, 19 → 7 golds."}
   ]},

  {id:"g4u3",name:"Understand Fractions",icon:"🍕",code:"4.NF",accent:"#fb7185",
   sections:[
    {title:"Model Equivalent Fractions",iv:"fracbar",
     teach:`<p>A fraction describes part of a whole. The bottom number, the <b>denominator</b>, tells how many equal pieces the whole is cut into; the top number, the <b>numerator</b>, tells how many pieces you have. So in 3/4 the whole is cut into 4 equal parts and you have 3 of them.</p>

       <h4 class="ls-sub">Two names for the same amount</h4>
       <p>Two fractions can look different but name the <i>exact same amount</i>. Picture a chocolate bar split into 2 equal pieces — take 1 and you have half. Split an identical bar into 4 pieces and take 2 — still half! So <b>1/2 = 2/4</b>. Fractions that name the same amount are called <b>equivalent fractions</b>.</p>

       <h4 class="ls-sub">See it with an area model</h4>
       <p>Draw the same whole cut into different numbers of equal parts and shade the same amount. Shade 2/3 of one bar; then cut each of those thirds into 2, and the same shaded region now shows 4/6. Because the shaded region didn't change, <b>2/3 = 4/6</b>. Cutting each piece into more, smaller pieces gives more pieces of a smaller size — and those two changes cancel out.</p>

       <h4 class="ls-sub">See it on a number line</h4>
       <p>Equivalent fractions also land on the <b>same point</b> on a number line. Mark 2/3 on a line split into thirds. Now split the same line into sixths — the very same point is labeled 4/6. Two fractions at the same point are equivalent.</p>
       <div class="reallife"><b>Real life:</b> equivalent fractions show up in measuring — 2/4 cup and 1/2 cup fill the exact same line on a measuring cup.</div>
       <div class="watchout"><b>Common mistake:</b> thinking a bigger denominator means a bigger fraction. 1/2 is larger than 1/8 — more pieces means each piece is smaller.</div>

       <h4 class="ls-sub">Recap</h4>
       <p>Equivalent fractions name the same amount and sit at the same point on a number line. An area model shows why: cutting each piece into more parts keeps the shaded amount the same.</p>
       <div class="keybox">Same shaded region, different names: 2/3 = 4/6.</div>`,
     examples:[
      {title:"Model 1/2 = 2/4",steps:["Shade 1 of 2 equal parts of a bar.","Cut each part in two — now 2 of 4 parts are shaded.","Same shaded amount, so 1/2 = 2/4."]},
      {title:"Number line: 1/3 = 2/6",steps:["Mark 1/3 on a line split into thirds.","Split the same line into sixths.","The same point reads 2/6, so 1/3 = 2/6."]},
      {title:"Model 3/4 = 6/8",steps:["Shade 3 of 4 equal parts.","Cut each part in two → 6 of 8 parts shaded.","Same region, so 3/4 = 6/8."]}
     ],
     quiz:[
      {q:"Two fractions that name the same amount are called...",o:["equivalent fractions","unlike fractions","mixed numbers","benchmarks"],a:0,why:"Equivalent fractions name the same amount."},
      {q:"A model shows 1/2 shaded, then each half is cut in two. What equivalent fraction is now shaded?",o:["2/4","2/2","1/4","3/4"],a:0,why:"1 of 2 parts becomes 2 of 4 parts: 1/2 = 2/4."},
      {q:"On a number line, equivalent fractions are...",o:["at the same point","at different points","always at 1","never marked"],a:0,why:"Equivalent fractions land on the exact same point."},
      {q:"Which fraction is equivalent to 2/3 (shown by cutting each third in two)?",o:["4/6","3/4","2/6","4/3"],a:0,why:"Cutting each third in two: 2/3 = 4/6."},
      {q:"Which fraction names the same amount as 1/4?",o:["2/8","3/5","1/2","3/4"],a:0,why:"Cut each fourth in two: 1/4 = 2/8."},
      {q:"1/3 = ___ on a line split into sixths.",o:["2/6","1/6","3/6","2/3"],a:0,why:"1/3 and 2/6 mark the same point."},
      {q:"Why does cutting each piece into smaller pieces keep the value the same?",o:["You get more pieces, but each is smaller — the changes cancel","The shaded amount grows","The whole gets bigger","It doesn't stay the same"],a:0,why:"More, smaller pieces of the same shaded region — the amount is unchanged."},
      {q:"Which pair is equivalent?",o:["3/6 and 1/2","3/6 and 1/3","2/3 and 3/4","1/4 and 1/3"],a:0,why:"3/6 is half of the whole, the same as 1/2."},
      {q:"A bar shows 4/8 shaded. Which is an equivalent fraction?",o:["1/2","1/4","3/4","2/3"],a:0,why:"4 of 8 parts is half: 4/8 = 1/2."},
      {q:"Which fraction is equivalent to 3/6?",o:["1/2","2/3","1/4","3/4"],a:0,why:"3/6 is half of the whole, the same as 1/2."}
     ]},
    {title:"Generate Equivalent Fractions by Multiplying",iv:"fracbar",
     teach:`<p>You don't need to draw a model every time — you can <b>build</b> an equivalent fraction with multiplication. The rule: multiply the numerator <b>and</b> the denominator by the same number.</p>

       <h4 class="ls-sub">Multiply top and bottom by the same number</h4>
       <p>Start with 3/5. Multiply top and bottom by 2: (3 × 2)/(5 × 2) = <b>6/10</b>. So 3/5 = 6/10. Multiply 3/5 by 3 instead and you get 9/15 — also equal. Any number you choose works, as long as you use the <i>same</i> number on top and bottom.</p>

       <h4 class="ls-sub">Why it works</h4>
       <p>Multiplying top and bottom by 2 is the same as cutting every piece into 2. You end up with twice as many pieces (numerator ×2) out of twice as many total (denominator ×2) — the amount is unchanged. Multiplying by the same number is really multiplying by a form of 1 (like 2/2), and multiplying by 1 never changes a value.</p>

       <h4 class="ls-sub">Filling in a missing number</h4>
       <p>To solve 3/4 = ?/12, look at the denominators: 4 became 12, which is × 3. Do the same to the top: 3 × 3 = <b>9</b>. So 3/4 = 9/12. Always find what the bottom was multiplied by, then do the same to the top.</p>
       <div class="reallife"><b>Real life:</b> scaling a recipe up — doubling 2/3 cup to 4/6 cup — uses exactly this idea.</div>
       <div class="watchout"><b>Common mistake:</b> multiplying only the top (or only the bottom). Change <b>both</b> by the same number, or you've made a different fraction.</div>

       <h4 class="ls-sub">Recap</h4>
       <p>Multiply the numerator and denominator by the same number to generate an equivalent fraction. To fill a blank, find the factor used on one part and apply it to the other.</p>
       <div class="keybox">3/5 = (3 × 2)/(5 × 2) = <b>6/10</b>.</div>`,
     examples:[
      {title:"Find an equivalent fraction for 2/3",steps:["Multiply top and bottom by 4.","2 × 4 = 8 and 3 × 4 = 12.","So 2/3 = 8/12."]},
      {title:"Multiply by 2",steps:["Take 3/5 and multiply top and bottom by 2.","3 × 2 = 6 and 5 × 2 = 10.","So 3/5 = 6/10."]},
      {title:"Fill the blank: 3/4 = ?/12",steps:["The bottom 4 became 12, so × 3.","Do the same to the top: 3 × 3 = 9.","So 3/4 = 9/12."]}
     ],
     quiz:[
      {q:"To build an equivalent fraction, multiply the top and bottom by...",o:["the same number","different numbers","only the top","zero"],a:0,why:"Use the same number on numerator and denominator."},
      {q:"3/5 = ___ /10. What numerator makes it equal?",o:["6","5","8","3"],a:0,why:"5 × 2 = 10, so 3 × 2 = 6 → 6/10."},
      {q:"2/3 = ___ /12. What is the missing numerator?",o:["8","6","9","4"],a:0,why:"3 × 4 = 12, so 2 × 4 = 8 → 8/12."},
      {q:"Which is equivalent to 1/4?",o:["3/12","3/4","1/12","4/12"],a:0,why:"Multiply top and bottom by 3: 1/4 = 3/12."},
      {q:"3/4 = ___ /12. What is the missing numerator?",o:["9","6","7","12"],a:0,why:"4 × 3 = 12, so 3 × 3 = 9 → 9/12."},
      {q:"Why does multiplying top and bottom by 2 keep the value the same?",o:["It is the same as multiplying by 1 (2/2)","It makes the fraction bigger","It only changes the top","It halves the fraction"],a:0,why:"2/2 = 1, and multiplying by 1 doesn't change the value."},
      {q:"Multiply 2/5 by 3 (top and bottom):",o:["6/15","6/5","2/15","5/15"],a:0,why:"2 × 3 = 6 and 5 × 3 = 15 → 6/15."},
      {q:"5/6 = 10/___. What is the missing denominator?",o:["12","11","16","6"],a:0,why:"5 × 2 = 10, so 6 × 2 = 12 → 10/12."},
      {q:"What went wrong: a student writes 2/3 = 4/3?",o:["They multiplied only the top, not the bottom","Nothing, it's correct","They divided instead","They added"],a:0,why:"Both parts must be multiplied by the same number: 2/3 = 4/6, not 4/3."},
      {q:"Which fraction is equivalent to 3/8?",o:["6/16","6/8","3/16","9/16"],a:0,why:"Multiply top and bottom by 2: 3/8 = 6/16."}
     ]},
    {title:"Generate Equivalent Fractions by Dividing",iv:"fracbar",
     teach:`<p>Multiplying builds equivalent fractions with <i>bigger</i> numbers. Going the other way, <b>dividing</b> the numerator and denominator by the same number builds an equivalent fraction with <i>smaller</i> numbers — this is how you <b>simplify</b>.</p>

       <h4 class="ls-sub">Divide top and bottom by a common factor</h4>
       <p>A <b>common factor</b> is a number that divides two numbers evenly. To simplify 8/12, find a common factor of 8 and 12. Both divide by 4: 8 ÷ 4 = 2 and 12 ÷ 4 = 3. So 8/12 = <b>2/3</b>. You divided top and bottom by the same number, so the value didn't change.</p>

       <h4 class="ls-sub">Simplest form</h4>
       <p>A fraction is in <b>simplest form</b> when the numerator and denominator share no common factor except 1. Check 2/3: the only common factor of 2 and 3 is 1, so 2/3 is already simplest. If you'd only divided 8/12 by 2 (getting 4/6), you could keep going — 4/6 ÷ 2 = 2/3 — so dividing by the <i>greatest</i> common factor gets you there in one step.</p>

       <h4 class="ls-sub">Finding a common factor</h4>
       <p>List the factors and look for a shared one. For 6/9: factors of 6 are 1, 2, 3, 6; factors of 9 are 1, 3, 9. They share 3, so divide by 3: 6 ÷ 3 = 2 and 9 ÷ 3 = 3, giving <b>2/3</b>.</p>
       <div class="reallife"><b>Real life:</b> simplest form gives the "cleanest" name — telling someone you ran 1/2 a lap is easier than 4/8 of a lap.</div>
       <div class="watchout"><b>Common mistake:</b> dividing top and bottom by <i>different</i> numbers. Use the same common factor on both, just like with multiplying.</div>

       <h4 class="ls-sub">Recap</h4>
       <p>Divide the numerator and denominator by a common factor to simplify. A fraction is in simplest form when 1 is the only common factor left; dividing by the greatest common factor finishes in one step.</p>
       <div class="keybox">8/12 ÷ (4/4) = <b>2/3</b> — simplest form.</div>`,
     examples:[
      {title:"Simplify 8/12",steps:["A common factor of 8 and 12 is 4.","8 ÷ 4 = 2 and 12 ÷ 4 = 3.","So 8/12 = 2/3."]},
      {title:"Simplify 6/9",steps:["Factors of 6 and 9 share 3.","6 ÷ 3 = 2 and 9 ÷ 3 = 3.","So 6/9 = 2/3."]},
      {title:"Simplify 10/20",steps:["The greatest common factor of 10 and 20 is 10.","10 ÷ 10 = 1 and 20 ÷ 10 = 2.","So 10/20 = 1/2."]}
     ],
     quiz:[
      {q:"To simplify a fraction, divide the top and bottom by a...",o:["common factor","different number","numerator","denominator only"],a:0,why:"Divide both by a number that divides them evenly."},
      {q:"Simplify 8/12.",o:["2/3","3/5","3/4","1/4"],a:0,why:"Divide top and bottom by 4: 8/12 = 2/3."},
      {q:"Simplify 6/9.",o:["2/3","3/4","1/2","2/6"],a:0,why:"Divide by 3: 6/9 = 2/3."},
      {q:"A fraction is in simplest form when the top and bottom share...",o:["no common factor except 1","the factor 2","an even factor","the factor 3"],a:0,why:"Simplest form means 1 is the only common factor."},
      {q:"Simplify 10/20.",o:["1/2","2/5","3/5","1/4"],a:0,why:"Divide by 10: 10/20 = 1/2."},
      {q:"Which fraction is already in simplest form?",o:["3/5","4/6","6/8","2/10"],a:0,why:"3 and 5 share only the factor 1; the others can be reduced."},
      {q:"Simplify 9/12.",o:["3/4","2/3","3/6","5/8"],a:0,why:"Divide by 3: 9/12 = 3/4."},
      {q:"You simplify 8/12 by dividing by 2 and get 4/6. What should you do next?",o:["Keep going — 4/6 ÷ 2 = 2/3","Stop, it's done","Multiply back","Add 1 to each part"],a:0,why:"4 and 6 still share a factor of 2, so 4/6 simplifies to 2/3."},
      {q:"Simplify 4/8.",o:["1/2","2/3","1/4","3/5"],a:0,why:"Divide by 4: 4/8 = 1/2."},
      {q:"A common factor of 6 and 9 is...",o:["3","2","6","9"],a:0,why:"3 divides both 6 and 9 evenly."}
     ]},
    {title:"Compare Fractions Using Benchmarks",iv:"fracbar",
     teach:`<p>A <b>benchmark</b> is a familiar number you use as a reference point. For fractions, the most useful benchmarks are <b>1/2</b> and <b>1</b>. Comparing each fraction to a benchmark lets you compare two fractions without drawing them.</p>

       <h4 class="ls-sub">Compare to 1/2</h4>
       <p>A fraction is more than 1/2 when its numerator is more than <b>half</b> the denominator. For 7/10, half of 10 is 5, and 7 is more than 5 — so 7/10 > 1/2. For 3/8, half of 8 is 4, and 3 is less than 4 — so 3/8 < 1/2. Now you can compare the two: 7/10 is above 1/2 and 3/8 is below it, so <b>7/10 > 3/8</b>.</p>

       <h4 class="ls-sub">Compare to 1</h4>
       <p>The benchmark 1 helps too. A fraction less than 1 has a numerator smaller than its denominator (like 5/6), while a fraction equal to 1 has them equal (like 6/6). To compare 5/6 and 4/3: 5/6 is less than 1, but 4/3 is more than 1 (4 > 3), so <b>4/3 > 5/6</b>.</p>

       <h4 class="ls-sub">Why benchmarks help</h4>
       <p>When two fractions sit on opposite sides of a benchmark, you instantly know which is bigger — no common denominators needed. Benchmarks turn a hard comparison into a quick check.</p>
       <div class="reallife"><b>Real life:</b> "is it more than half full?" is a benchmark comparison you make all the time with cups, tanks, and progress bars.</div>
       <div class="watchout"><b>Common mistake:</b> comparing numerators or denominators directly. 3/8 is not bigger than 7/10 just because 8 > 10 is false — always compare each fraction to a benchmark instead.</div>

       <h4 class="ls-sub">Recap</h4>
       <p>Compare each fraction to 1/2 or 1. If they fall on opposite sides of the benchmark, the one above it is greater. A fraction is more than 1/2 when its numerator is more than half the denominator.</p>
       <div class="keybox">7/10 > 1/2 and 3/8 < 1/2, so 7/10 > 3/8.</div>`,
     examples:[
      {title:"Compare 5/8 to 1/2",steps:["Half of 8 is 4.","5 is more than 4.","So 5/8 is greater than 1/2."]},
      {title:"Compare 3/8 to 1/2",steps:["Half of 8 is 4.","3 is less than 4.","So 3/8 is less than 1/2."]},
      {title:"Use the benchmark to compare 7/10 and 3/8",steps:["7/10 > 1/2 (7 > 5).","3/8 < 1/2 (3 < 4).","On opposite sides of 1/2, so 7/10 > 3/8."]}
     ],
     quiz:[
      {q:"The most useful benchmarks for comparing fractions are...",o:["1/2 and 1","2 and 3","0 and 10","1/4 and 1/8"],a:0,why:"1/2 and 1 are the common reference points."},
      {q:"Is 7/10 greater than or less than 1/2?",o:["greater than 1/2","less than 1/2","equal to 1/2","cannot tell"],a:0,why:"Half of 10 is 5, and 7 > 5, so 7/10 > 1/2."},
      {q:"Is 3/8 greater than or less than 1/2?",o:["less than 1/2","greater than 1/2","equal to 1/2","cannot tell"],a:0,why:"Half of 8 is 4, and 3 < 4, so 3/8 < 1/2."},
      {q:"Using 1/2 as a benchmark, which is greater: 7/10 or 3/8?",o:["7/10","3/8","they are equal","cannot tell"],a:0,why:"7/10 is above 1/2 and 3/8 is below it, so 7/10 is greater."},
      {q:"A fraction is more than 1/2 when its numerator is...",o:["more than half the denominator","equal to the denominator","less than half the denominator","equal to 1"],a:0,why:"If the top is more than half the bottom, the fraction is above 1/2."},
      {q:"Which fraction is greater than 1?",o:["5/4","3/4","4/4","1/4"],a:0,why:"5/4 has a numerator bigger than its denominator, so it's more than 1."},
      {q:"Compare 5/6 and 4/3 using the benchmark 1.",o:["4/3 is greater","5/6 is greater","they are equal","cannot tell"],a:0,why:"5/6 < 1 but 4/3 > 1, so 4/3 is greater."},
      {q:"Is 4/9 greater than or less than 1/2?",o:["less than 1/2","greater than 1/2","equal to 1/2","cannot tell"],a:0,why:"Half of 9 is 4.5, and 4 < 4.5, so 4/9 < 1/2."},
      {q:"Which fraction is closest to 1?",o:["7/8","1/8","1/2","3/8"],a:0,why:"7/8 is only 1/8 away from 1 — the closest."},
      {q:"Two fractions on opposite sides of 1/2: the greater one is...",o:["the one above 1/2","the one below 1/2","always the first","impossible to tell"],a:0,why:"The fraction above the benchmark is the larger of the two."}
     ]},
    {title:"Compare Fractions",iv:"fracbar",
     teach:`<p>To compare any two fractions exactly, make one part of them <b>match</b> — either the denominators or the numerators — and then compare.</p>

       <h4 class="ls-sub">Same denominator: bigger top wins</h4>
       <p>When two fractions have the <b>same denominator</b>, the pieces are the same size, so the one with more pieces is greater. 5/8 > 3/8 because 5 pieces beat 3 pieces of the same size.</p>

       <h4 class="ls-sub">Same numerator: bigger bottom loses</h4>
       <p>When two fractions have the <b>same numerator</b>, you have the same number of pieces, but a bigger denominator means <i>smaller</i> pieces. So 2/3 > 2/5 — thirds are bigger than fifths, and you have 2 of each. With like numerators, the smaller denominator is the greater fraction.</p>

       <h4 class="ls-sub">Unlike fractions: make a common denominator</h4>
       <p>When nothing matches, rewrite one or both fractions so the denominators are the same. To compare 3/5 and 9/10, rewrite 3/5 as 6/10 (multiply top and bottom by 2). Now compare 6/10 and 9/10: same denominator, so 9/10 is greater. Thus <b>3/5 < 9/10</b>.</p>
       <div class="reallife"><b>Real life:</b> comparing fractions decides which deal gives you more — 2/3 of a pizza or 3/5 of the same pizza.</div>
       <div class="watchout"><b>Common mistake:</b> thinking a bigger denominator always means a bigger fraction. With like numerators it's the opposite — bigger bottom, smaller fraction.</div>

       <h4 class="ls-sub">Recap</h4>
       <p>Like denominators → the bigger numerator wins. Like numerators → the smaller denominator wins. Otherwise, rewrite to a common denominator and compare.</p>
       <div class="keybox">Compare 3/5 and 9/10: 3/5 = 6/10, and 6/10 < 9/10, so 3/5 < 9/10.</div>`,
     examples:[
      {title:"Same denominator",steps:["Compare 5/8 and 3/8.","Same size pieces, so more pieces wins.","5/8 > 3/8."]},
      {title:"Same numerator",steps:["Compare 2/3 and 2/5.","Same number of pieces; thirds are bigger than fifths.","2/3 > 2/5."]},
      {title:"Make a common denominator",steps:["Compare 3/5 and 9/10.","Rewrite 3/5 as 6/10.","6/10 < 9/10, so 3/5 < 9/10."]}
     ],
     quiz:[
      {q:"Compare 5/8 and 3/8.",o:["5/8","3/8","they are equal","can't tell"],a:0,why:"Same denominator, so the greater numerator wins: 5/8 > 3/8."},
      {q:"With the same denominator, the greater fraction has the...",o:["greater numerator","smaller numerator","greater denominator","smaller denominator"],a:0,why:"Same-size pieces, so more pieces is greater."},
      {q:"Compare 2/3 and 2/5.",o:["2/3","2/5","they are equal","can't tell"],a:0,why:"Same numerator; thirds are bigger than fifths, so 2/3 > 2/5."},
      {q:"With the same numerator, the greater fraction has the...",o:["smaller denominator","greater denominator","greater numerator","smaller numerator"],a:0,why:"A smaller denominator means bigger pieces, so the fraction is greater."},
      {q:"To compare 3/5 and 9/10, rewrite 3/5 as...",o:["6/10","3/10","5/10","9/5"],a:0,why:"Multiply top and bottom by 2: 3/5 = 6/10."},
      {q:"Compare 3/5 and 9/10.",o:["9/10","3/5","they are equal","can't tell"],a:0,why:"3/5 = 6/10, and 6/10 < 9/10, so 9/10 is greater."},
      {q:"Compare 1/4 and 1/6.",o:["1/4","1/6","they are equal","can't tell"],a:0,why:"Same numerator; fourths are bigger than sixths, so 1/4 > 1/6."},
      {q:"Compare 7/12 and 5/12.",o:["7/12","5/12","they are equal","can't tell"],a:0,why:"Same denominator, so 7/12 > 5/12."},
      {q:"To compare 1/2 and 3/8, a common denominator is...",o:["8 (1/2 = 4/8)","2","5","16 only"],a:0,why:"Rewrite 1/2 as 4/8; then 4/8 > 3/8."},
      {q:"Which is greater, 1/2 or 3/8?",o:["1/2","3/8","they are equal","can't tell"],a:0,why:"1/2 = 4/8, and 4/8 > 3/8, so 1/2 is greater."}
     ]}
   ],
   test:[
    {q:"Two fractions that name the same amount are called...",o:["equivalent fractions","benchmarks","unlike fractions","factors"],a:0,why:"Equivalent fractions name the same amount."},
    {q:"Which fraction equals 1/2?",o:["3/6","2/3","1/4","3/5"],a:0,why:"3/6 is half of the whole."},
    {q:"2/3 = ___ /12. What is the missing numerator?",o:["8","6","9","4"],a:0,why:"3 × 4 = 12, so 2 × 4 = 8 → 8/12."},
    {q:"Which fraction is equivalent to 3/4?",o:["6/8","3/5","3/8","2/3"],a:0,why:"Multiply top and bottom by 2: 3/4 = 6/8."},
    {q:"Simplify 8/12.",o:["2/3","3/5","3/4","1/4"],a:0,why:"Divide by 4: 8/12 = 2/3."},
    {q:"Simplify 10/20.",o:["1/2","2/5","3/5","1/4"],a:0,why:"Divide by 10: 10/20 = 1/2."},
    {q:"Which fraction is already in simplest form?",o:["3/5","4/6","6/8","2/10"],a:0,why:"3 and 5 share only the factor 1."},
    {q:"Is 7/10 greater than or less than 1/2?",o:["greater than 1/2","less than 1/2","equal to 1/2","cannot tell"],a:0,why:"Half of 10 is 5, and 7 > 5."},
    {q:"Compare 3/8 and 5/8.",o:["5/8","3/8","they are equal","can't tell"],a:0,why:"Same denominator, so 5/8 > 3/8."},
    {q:"Compare 3/5 and 9/10.",o:["9/10","3/5","they are equal","can't tell"],a:0,why:"3/5 = 6/10 < 9/10."},
    {q:"Compare 2/3 and 2/5.",o:["2/3","2/5","they are equal","can't tell"],a:0,why:"Same numerator; thirds beat fifths, so 2/3 > 2/5."},
    {q:"1/3 = ___ /6. What is the missing numerator?",o:["2","1","3","4"],a:0,why:"3 × 2 = 6, so 1 × 2 = 2 → 2/6."},
    {q:"Which fraction is greater than 1/2?",o:["4/6","1/3","2/5","3/8"],a:0,why:"4/6 is more than half (4 > 3); the others are less than 1/2."},
    {q:"A fraction whose numerator is more than half its denominator is...",o:["greater than 1/2","less than 1/2","equal to 1/2","equal to 1"],a:0,why:"More than half the pieces means more than 1/2."},
    {q:"Performance Task: A class banner has 24 squares. Half are blue. How many squares are blue?",o:["12","10","6","24"],a:0,why:"Half of 24 is 12."},
    {q:"Performance Task: 4 of the 24 squares are red. What fraction is red, in simplest form?",o:["1/6","1/12","1/4","1/8"],a:0,why:"4/24 simplifies to 1/6 (divide by 4)."},
    {q:"Performance Task: Red is 4 squares and orange is 4 squares. Which two colors cover the same portion?",o:["red and orange","blue and red","green and yellow","blue and orange"],a:0,why:"Both red and orange are 4/24 = 1/6 of the banner."},
    {q:"Performance Task: 3 of the 24 squares are green. What fraction is green, in simplest form?",o:["1/8","1/12","1/6","1/3"],a:0,why:"3/24 simplifies to 1/8 (divide by 3)."},
    {q:"Performance Task: Is the red portion (1/6) more or less than the blue portion (1/2)?",o:["less","more","equal","cannot tell"],a:0,why:"1/6 is less than 1/2."},
    {q:"Performance Task: A teacher arranges 30 banners in a rectangular array. Which is a valid arrangement?",o:["5 × 6","4 × 7","5 × 7","3 × 8"],a:0,why:"5 × 6 = 30; the others don't equal 30."}
   ]},

  {id:"g4u8",name:"Add and Subtract Fractions",icon:"➕",code:"4.NF",accent:"#ec4899",
   sections:[
    {title:"Use Models to Add Fractions",iv:"fracbar",
     teach:`<p>Adding fractions means <b>joining parts</b> of the same whole. As long as both fractions describe pieces of the <i>same</i> whole and the pieces are the <i>same size</i> (same denominator), adding is just counting how many pieces you have altogether.</p>

       <h4 class="ls-sub">Join same-size pieces</h4>
       <p>To find 1/5 + 3/5, picture a bar split into 5 equal parts. Shade 1 part, then join 3 more parts. Now 4 parts are shaded: <b>4/5</b>. The pieces were all fifths, so you just counted 1 + 3 = 4 fifths.</p>

       <h4 class="ls-sub">See it on a number line</h4>
       <p>You can also add by joining <b>lengths</b> on a number line. To find 5/4 + 2/4, start at 0 and hop 5 fourths to land on 5/4, then hop 2 more fourths. You end at <b>7/4</b>. Each hop is one fourth, so you took 5 + 2 = 7 hops.</p>

       <h4 class="ls-sub">The pieces stay the same size</h4>
       <p>The most important idea: when the denominators match, the <i>size</i> of the pieces never changes when you add — only <i>how many</i> you have. That's why 3/10 + 4/10 = 7/10, not 7/20.</p>
       <div class="reallife"><b>Real life:</b> you add same-size fractions when you combine parts of a recipe or measure two lengths of the same ruler.</div>
       <div class="watchout"><b>Common mistake:</b> adding the denominators. 1/5 + 3/5 is 4/5, not 4/10 — the bottom tells you the piece size, and that doesn't change.</div>

       <h4 class="ls-sub">Recap</h4>
       <p>Adding fractions with the same denominator means joining same-size pieces — count how many you have in all and keep the denominator the same.</p>
       <div class="keybox">1/5 + 3/5 = <b>4/5</b> (join 1 fifth and 3 fifths).</div>`,
     examples:[
      {title:"Model 1/5 + 3/5",steps:["Shade 1 of 5 parts, then join 3 more parts.","Now 4 parts are shaded.","1/5 + 3/5 = 4/5."]},
      {title:"Number line: 5/4 + 2/4",steps:["Hop 5 fourths, then hop 2 more.","You land on 7/4.","5/4 + 2/4 = 7/4."]},
      {title:"Add 3/10 + 4/10",steps:["Both are tenths, so keep tenths.","Count the pieces: 3 + 4 = 7.","3/10 + 4/10 = 7/10."]}
     ],
     quiz:[
      {q:"Adding fractions means joining parts of...",o:["the same whole","different wholes","two number lines","unequal pieces"],a:0,why:"You join same-size pieces of one whole."},
      {q:"1/5 + 3/5 =",vis:{type:'fbar',n:1,d:5,n2:3,d2:5},o:["4/5","4/10","3/5","5/5"],a:0,why:"Join 1 fifth and 3 fifths → 4/5 (keep the denominator)."},
      {q:"On a number line, 5/4 + 2/4 =",o:["7/4","7/8","3/4","5/4"],a:0,why:"5 fourths and 2 more fourths land on 7/4."},
      {q:"3/10 + 4/10 =",vis:{type:'fbar',n:3,d:10,n2:4,d2:10},o:["7/10","7/20","1/10","12/10"],a:0,why:"Add the numerators, keep the denominator → 7/10."},
      {q:"When adding fractions with the same denominator, the denominator...",o:["stays the same","adds too","doubles","becomes 1"],a:0,why:"The piece size doesn't change, so the denominator stays the same."},
      {q:"2/6 + 3/6 =",vis:{type:'fbar',n:2,d:6,n2:3,d2:6},o:["5/6","5/12","1/6","6/6"],a:0,why:"2 sixths and 3 sixths → 5/6."},
      {q:"Why is 1/8 + 2/8 equal to 3/8 and not 3/16?",o:["The pieces are still eighths — only the count changes","The bottoms add","Eighths become sixteenths","It is 3/16"],a:0,why:"Joining pieces doesn't change their size, so the denominator stays 8."},
      {q:"A model shows 4 of 9 parts shaded, then 2 more parts joined. What fraction is shaded?",o:["6/9","6/18","2/9","4/9"],a:0,why:"4/9 + 2/9 = 6/9."},
      {q:"1/4 + 1/4 + 1/4 =",o:["3/4","1/2","1/4","3/8"],a:0,why:"Three fourths joined → 3/4."}
     ]},
    {title:"Decompose Fractions",iv:"fracbar",
     teach:`<p>To <b>decompose</b> a fraction means to break it apart into a sum of smaller fractions that add back to it. This is the reverse of adding, and it shows exactly what a fraction is made of.</p>

       <h4 class="ls-sub">Unit fractions are the building blocks</h4>
       <p>A <b>unit fraction</b> has a numerator of 1 — like 1/4 or 1/12. Every fraction is a sum of unit fractions. For example, 3/4 = <b>1/4 + 1/4 + 1/4</b>, because 3/4 means 3 one-fourth pieces. The numerator tells you how many unit-fraction pieces to add.</p>

       <h4 class="ls-sub">Decompose in more than one way</h4>
       <p>You don't have to break a fraction into all unit fractions — you can group them. Take 5/12. As unit fractions it's 1/12 + 1/12 + 1/12 + 1/12 + 1/12. But you could also group them as <b>2/12 + 3/12</b>, or <b>1/12 + 4/12</b>. All of these add back to 5/12, so there's more than one correct way to decompose a fraction.</p>
       <div class="reallife"><b>Real life:</b> decomposing helps you plan portions — 5/8 of a pizza could be served as 3/8 now and 2/8 later.</div>
       <div class="watchout"><b>Common mistake:</b> letting the parts add to the wrong total. Every decomposition must add back to the original fraction — check by adding the pieces.</div>

       <h4 class="ls-sub">Recap</h4>
       <p>Decomposing breaks a fraction into a sum of smaller fractions (often unit fractions) that add back to it. There is usually more than one correct way.</p>
       <div class="keybox">3/4 = 1/4 + 1/4 + 1/4; and 5/12 = 2/12 + 3/12.</div>`,
     examples:[
      {title:"Decompose 3/4 into unit fractions",steps:["3/4 means 3 one-fourth pieces.","So 3/4 = 1/4 + 1/4 + 1/4.","Check: the three fourths add to 3/4."]},
      {title:"Decompose 5/12 two ways",steps:["As unit fractions: 1/12 five times.","Grouped: 2/12 + 3/12.","Both add back to 5/12."]},
      {title:"Decompose 5/8",steps:["Pick a split, like 4/8 + 1/8.","Or 2/8 + 3/8.","Each adds back to 5/8."]}
     ],
     quiz:[
      {q:"A unit fraction has a numerator of...",o:["1","2","the denominator","0"],a:0,why:"A unit fraction is one equal part, like 1/4."},
      {q:"Which shows 3/4 as a sum of unit fractions?",o:["1/4 + 1/4 + 1/4","1/4 + 1/4","3/4 + 1/4","1/2 + 1/4"],a:0,why:"3/4 is three one-fourth pieces."},
      {q:"To decompose a fraction means to...",o:["break it into a sum of smaller fractions","multiply it","round it","flip it"],a:0,why:"Decomposing writes it as parts that add back to it."},
      {q:"Which is a correct decomposition of 5/12?",o:["2/12 + 3/12","2/12 + 2/12","3/12 + 3/12","5/12 + 1/12"],a:0,why:"2/12 + 3/12 = 5/12."},
      {q:"5/8 = 2/8 + ___",o:["3/8","2/8","4/8","5/8"],a:0,why:"2/8 + 3/8 = 5/8."},
      {q:"How many ways can most fractions be decomposed?",o:["more than one","exactly one","zero","only into halves"],a:0,why:"There is usually more than one correct decomposition."},
      {q:"Which is 4/6 written as a sum of unit fractions?",o:["1/6 + 1/6 + 1/6 + 1/6","1/6 + 1/6","4/6 + 1/6","2/6 + 2/6 + 2/6"],a:0,why:"4/6 is four one-sixth pieces."},
      {q:"A student writes 3/5 = 1/5 + 1/5. What is wrong?",o:["The parts add to 2/5, not 3/5","Nothing, it's correct","3/5 can't be decomposed","It should use sixths"],a:0,why:"3/5 needs three fifths: 1/5 + 1/5 + 1/5."},
      {q:"Which decomposition adds back to 7/10?",o:["4/10 + 3/10","4/10 + 2/10","5/10 + 3/10","6/10 + 2/10"],a:0,why:"4/10 + 3/10 = 7/10."}
     ]},
    {title:"Add Fractions with Like Denominators",iv:"fracbar",
     teach:`<p>Once you've seen adding fractions with models, you can do it with a quick <b>rule</b>: when the denominators are the same, <b>add the numerators and keep the denominator</b>.</p>

       <h4 class="ls-sub">The rule</h4>
       <p>To find 3/10 + 4/10, the denominators match (both tenths), so keep 10 and add the tops: 3 + 4 = 7. The answer is <b>7/10</b>. It works because you're counting same-size pieces — the size (the denominator) never changes.</p>

       <h4 class="ls-sub">Why the denominator stays</h4>
       <p>Think of the denominator as the <i>name</i> of the piece — "tenths." Adding 3 tenths and 4 tenths gives 7 tenths, just like adding 3 apples and 4 apples gives 7 apples. The name of the thing doesn't change; only the count does.</p>

       <h4 class="ls-sub">Simplify when you can</h4>
       <p>Sometimes the sum can be written more simply. For 1/6 + 3/6 = 4/6, both 4 and 6 divide by 2, so 4/6 = <b>2/3</b>. Always check whether your answer reduces to simplest form.</p>
       <div class="reallife"><b>Real life:</b> adding same-denominator fractions totals up parts — like 2/8 cup plus 3/8 cup of ingredients.</div>
       <div class="watchout"><b>Common mistake:</b> adding the denominators. 3/10 + 4/10 is 7/10, not 7/20. Keep the bottom the same.</div>

       <h4 class="ls-sub">Recap</h4>
       <p>With like denominators, add the numerators and keep the denominator. Then simplify the result if possible.</p>
       <div class="keybox">3/10 + 4/10 = <b>7/10</b>; and 1/6 + 3/6 = 4/6 = 2/3.</div>`,
     examples:[
      {title:"Add 3/10 + 4/10",steps:["Same denominator (10), so keep 10.","Add the tops: 3 + 4 = 7.","Answer: 7/10."]},
      {title:"Add 2/8 + 3/8",steps:["Keep the 8.","2 + 3 = 5.","Answer: 5/8."]},
      {title:"Add then simplify: 1/6 + 3/6",steps:["1 + 3 = 4, keep 6 → 4/6.","4 and 6 divide by 2.","4/6 = 2/3."]}
     ],
     quiz:[
      {q:"To add fractions with like denominators, you...",o:["add the numerators, keep the denominator","add both parts","multiply the denominators","subtract the tops"],a:0,why:"Add the tops and keep the bottom the same."},
      {q:"3/10 + 4/10 =",vis:{type:'fbar',n:3,d:10,n2:4,d2:10},o:["7/10","7/20","1/10","12/10"],a:0,why:"3 + 4 = 7, keep 10 → 7/10."},
      {q:"2/8 + 3/8 =",vis:{type:'fbar',n:2,d:8,n2:3,d2:8},o:["5/8","5/16","6/8","1/8"],a:0,why:"2 + 3 = 5, keep 8 → 5/8."},
      {q:"1/6 + 3/6 = 4/6. In simplest form that is...",o:["2/3","3/5","1/2","3/4"],a:0,why:"Divide by 2: 4/6 = 2/3."},
      {q:"Why does the denominator stay the same when adding?",o:["The piece size (the 'name') doesn't change","The bottoms cancel","It becomes 1","You always simplify"],a:0,why:"You're counting same-size pieces, so their size stays fixed."},
      {q:"4/9 + 2/9 =",vis:{type:'fbar',n:4,d:9,n2:2,d2:9},o:["6/9","6/18","2/9","8/9"],a:0,why:"4 + 2 = 6, keep 9 → 6/9."},
      {q:"5/12 + 4/12 =",vis:{type:'fbar',n:5,d:12,n2:4,d2:12},o:["9/12","9/24","1/12","20/12"],a:0,why:"5 + 4 = 9, keep 12 → 9/12."},
      {q:"A student writes 3/10 + 4/10 = 7/20. What went wrong?",o:["They added the denominators too","Nothing, it's correct","They forgot to simplify","They subtracted"],a:0,why:"Keep the denominator: the answer is 7/10."},
      {q:"2/6 + 2/6 = 4/6. Simplified, that is...",o:["2/3","3/5","1/3","3/4"],a:0,why:"Divide by 2: 4/6 = 2/3."}
     ]},
    {title:"Use Models to Subtract Fractions",iv:"fracbar",
     teach:`<p>Subtracting fractions means <b>taking away</b> parts from a whole — the mirror image of adding. When the pieces are the same size (same denominator), you just take some away and count what's left.</p>

       <h4 class="ls-sub">Take away same-size pieces</h4>
       <p>To find 5/6 − 2/6, shade 5 of 6 equal parts, then take away 2 of those parts. You're left with <b>3/6</b> (which simplifies to 1/2). The pieces were sixths, so you counted 5 − 2 = 3 sixths.</p>

       <h4 class="ls-sub">Subtract on a number line</h4>
       <p>You can also subtract by hopping <i>backward</i>. For 7/3 − 5/3, start at 7/3 and hop back 5 thirds. You land on <b>2/3</b>. Each hop is one third, so you moved back 5 of them.</p>
       <div class="reallife"><b>Real life:</b> subtracting fractions tells you how much is left — like the batter remaining after you pour some out.</div>
       <div class="watchout"><b>Common mistake:</b> subtracting the denominators. 5/6 − 2/6 is 3/6, not 3/0 or 3/anything-else — the denominator stays the same.</div>

       <h4 class="ls-sub">Recap</h4>
       <p>Subtracting same-denominator fractions means taking away same-size pieces — count what remains and keep the denominator.</p>
       <div class="keybox">5/6 − 2/6 = <b>3/6</b> = 1/2.</div>`,
     examples:[
      {title:"Model 5/6 − 2/6",steps:["Shade 5 of 6 parts.","Take away 2 parts.","3 parts remain: 3/6 = 1/2."]},
      {title:"Number line: 7/3 − 5/3",steps:["Start at 7/3.","Hop back 5 thirds.","You land on 2/3."]},
      {title:"Subtract 9/10 − 4/10",steps:["Take away 4 tenths from 9 tenths.","9 − 4 = 5.","9/10 − 4/10 = 5/10 = 1/2."]}
     ],
     quiz:[
      {q:"Subtracting fractions means...",o:["taking away same-size pieces","joining pieces","doubling pieces","changing the whole"],a:0,why:"You take some pieces away and count what's left."},
      {q:"5/6 − 2/6 =",vis:{type:'fbar',n:5,d:6},o:["1/2","3/12","2/6","5/6"],a:0,why:"5 − 2 = 3 sixths = 3/6 = 1/2."},
      {q:"On a number line, 7/3 − 5/3 =",o:["2/3","2/6","12/3","5/3"],a:0,why:"Hop back 5 thirds from 7/3 → 2/3."},
      {q:"9/10 − 4/10 =",vis:{type:'fbar',n:9,d:10},o:["1/2","5/20","4/10","13/10"],a:0,why:"9 − 4 = 5 tenths = 5/10 = 1/2."},
      {q:"When subtracting same-denominator fractions, the denominator...",o:["stays the same","subtracts too","becomes 0","doubles"],a:0,why:"Only the count changes; the piece size stays."},
      {q:"6/8 − 1/8 =",vis:{type:'fbar',n:6,d:8},o:["5/8","5/0","7/8","5/16"],a:0,why:"6 − 1 = 5, keep 8 → 5/8."},
      {q:"A bar shows 7/9 shaded; you erase 3/9. What is left?",o:["4/9","4/18","10/9","3/9"],a:0,why:"7/9 − 3/9 = 4/9."},
      {q:"3/4 − 1/4 =",vis:{type:'fbar',n:3,d:4},o:["1/2","3/8","1/4","4/4"],a:0,why:"3 − 1 = 2 fourths = 2/4 = 1/2."},
      {q:"Why is 5/6 − 2/6 not 3/0?",o:["The denominator stays 6 — only the top changes","Zero is impossible","You add the bottoms","It equals 3/12"],a:0,why:"Taking away pieces keeps their size, so the denominator stays 6."}
     ]},
    {title:"Subtract Fractions with Like Denominators",iv:"fracbar",
     teach:`<p>Just like adding, subtracting fractions with the <b>same denominator</b> follows a quick rule: <b>subtract the numerators and keep the denominator</b>.</p>

       <h4 class="ls-sub">The rule</h4>
       <p>To find 7/8 − 3/8, keep the 8 and subtract the tops: 7 − 3 = 4. The answer is <b>4/8</b>, which simplifies to <b>1/2</b>. The pieces are eighths before and after, so only the count changes.</p>

       <h4 class="ls-sub">Check by adding back</h4>
       <p>Addition and subtraction undo each other, so you can check a subtraction by <b>adding back</b>. Since 7/8 − 3/8 = 4/8, then 4/8 + 3/8 should equal 7/8 — and it does. This is a great way to catch mistakes.</p>
       <div class="reallife"><b>Real life:</b> "how much farther?" and "how much is left?" questions with same-size parts are subtraction.</div>
       <div class="watchout"><b>Common mistake:</b> forgetting to simplify. 6/10 − 2/10 = 4/10, and the cleanest answer is 2/5.</div>

       <h4 class="ls-sub">Recap</h4>
       <p>With like denominators, subtract the numerators and keep the denominator. Simplify the result, and check by adding back.</p>
       <div class="keybox">7/8 − 3/8 = 4/8 = <b>1/2</b>. Check: 4/8 + 3/8 = 7/8.</div>`,
     examples:[
      {title:"Subtract 7/8 − 3/8",steps:["Keep the 8.","7 − 3 = 4.","4/8 = 1/2."]},
      {title:"Check by adding back",steps:["7/8 − 3/8 = 4/8.","Add back: 4/8 + 3/8 = 7/8.","It matches, so the answer is correct."]},
      {title:"Subtract then simplify: 6/10 − 2/10",steps:["6 − 2 = 4, keep 10 → 4/10.","4 and 10 divide by 2.","4/10 = 2/5."]}
     ],
     quiz:[
      {q:"To subtract fractions with like denominators, you...",o:["subtract the numerators, keep the denominator","subtract both parts","subtract the denominators","add the tops"],a:0,why:"Subtract the tops and keep the bottom."},
      {q:"7/8 − 3/8 =",vis:{type:'fbar',n:7,d:8},o:["1/2","3/8","5/8","1/4"],a:0,why:"7 − 3 = 4 → 4/8 = 1/2."},
      {q:"To check that 7/8 − 3/8 = 4/8, you...",o:["add 4/8 + 3/8 and see if you get 7/8","subtract again","multiply","flip the fractions"],a:0,why:"Addition undoes subtraction."},
      {q:"6/10 − 2/10 = 4/10. Simplified, that is...",o:["2/5","1/2","1/4","3/5"],a:0,why:"Divide by 2: 4/10 = 2/5."},
      {q:"9/12 − 5/12 =",vis:{type:'fbar',n:9,d:12},o:["4/12","4/0","14/12","4/24"],a:0,why:"9 − 5 = 4, keep 12 → 4/12."},
      {q:"5/6 − 1/6 =",vis:{type:'fbar',n:5,d:6},o:["2/3","4/12","6/6","1/6"],a:0,why:"5 − 1 = 4 → 4/6 = 2/3."},
      {q:"Which subtraction equals 3/8?",o:["7/8 − 4/8","6/8 − 2/8","5/8 − 1/8","7/8 − 2/8"],a:0,why:"7/8 − 4/8 = 3/8."},
      {q:"A student writes 9/12 − 5/12 = 4/0. What went wrong?",o:["The denominator stays 12, not 0","Nothing","They should add","4/0 simplifies"],a:0,why:"Keep the denominator: the answer is 4/12."},
      {q:"8/9 − 2/9 =",vis:{type:'fbar',n:8,d:9},o:["6/9","6/0","10/9","6/18"],a:0,why:"8 − 2 = 6, keep 9 → 6/9."}
     ]},
    {title:"Model Fractions and Mixed Numbers",iv:"fracbar",
     teach:`<p>A <b>mixed number</b> is a whole number together with a fraction that is <i>less than 1</i>, like <b>1 5/6</b> (one and five-sixths). A fraction whose numerator is bigger than its denominator, like 11/6, is <b>greater than 1</b>. These are two ways to write the same amount.</p>

       <h4 class="ls-sub">From mixed number to fraction</h4>
       <p>To write 1 5/6 as a fraction, remember 1 whole = 6/6. Add the fraction part: 6/6 + 5/6 = <b>11/6</b>. A shortcut: multiply the whole number by the denominator and add the numerator (1 × 6 + 5 = 11), then keep the denominator.</p>

       <h4 class="ls-sub">From fraction to mixed number</h4>
       <p>To write 5/2 as a mixed number, ask how many wholes fit. 5 ÷ 2 = 2 with 1 left over, so 5/2 = <b>2 1/2</b> — 2 wholes and 1 half. The remainder becomes the new numerator.</p>
       <div class="reallife"><b>Real life:</b> measurements are often mixed numbers — a board 2 3/4 feet long, or 1 1/2 cups of flour.</div>
       <div class="watchout"><b>Common mistake:</b> forgetting the whole in the conversion. 1 5/6 is 11/6, not 5/6 — the whole adds 6/6.</div>

       <h4 class="ls-sub">Recap</h4>
       <p>A mixed number is a whole plus a fraction under 1. Convert to a fraction by multiplying the whole by the denominator and adding the numerator; convert back by dividing.</p>
       <div class="keybox">1 5/6 = 11/6, and 5/2 = 2 1/2.</div>`,
     examples:[
      {title:"Write 1 5/6 as a fraction",steps:["1 whole = 6/6.","6/6 + 5/6 = 11/6.","So 1 5/6 = 11/6."]},
      {title:"Write 5/2 as a mixed number",steps:["5 ÷ 2 = 2 remainder 1.","2 wholes and 1 half.","So 5/2 = 2 1/2."]},
      {title:"Write 3 1/4 as a fraction",steps:["3 × 4 = 12, plus 1 = 13.","Keep the denominator 4.","So 3 1/4 = 13/4."]}
     ],
     quiz:[
      {q:"A mixed number is a whole number plus a fraction that is...",o:["less than 1","greater than 1","equal to 1","zero"],a:0,why:"The fraction part of a mixed number is less than 1."},
      {q:"Write 1 5/6 as a fraction.",o:["11/6","6/6","7/6","10/6"],a:0,why:"1 = 6/6, plus 5/6 = 11/6."},
      {q:"Write 5/2 as a mixed number.",o:["2 1/2","1 1/2","2 1/4","5 1/2"],a:0,why:"5 ÷ 2 = 2 R1 → 2 1/2."},
      {q:"Write 3 1/4 as a fraction.",o:["13/4","7/4","12/4","4/4"],a:0,why:"3 × 4 + 1 = 13 → 13/4."},
      {q:"Write 7/3 as a mixed number.",o:["2 1/3","1 1/3","3 1/3","2 2/3"],a:0,why:"7 ÷ 3 = 2 R1 → 2 1/3."},
      {q:"To convert a mixed number to a fraction, you...",o:["multiply the whole by the denominator, then add the numerator","add the whole and the numerator","multiply the whole and the numerator","subtract the numerator"],a:0,why:"whole × denominator + numerator, over the same denominator."},
      {q:"Write 2 3/5 as a fraction.",o:["13/5","6/5","10/5","11/5"],a:0,why:"2 × 5 + 3 = 13 → 13/5."},
      {q:"Which of these is a mixed number?",o:["3 1/2","7/2","3/2","1/2"],a:0,why:"3 1/2 is a whole number and a fraction together."},
      {q:"Write 9/4 as a mixed number.",o:["2 1/4","1 1/4","2 3/4","9 1/4"],a:0,why:"9 ÷ 4 = 2 R1 → 2 1/4."}
     ]},
    {title:"Add Mixed Numbers",iv:null,
     teach:`<p>To add mixed numbers with the <b>same denominator</b>, add the <b>whole-number parts</b> and add the <b>fraction parts</b> — then combine. Sometimes the fraction parts add up to more than 1, and you <b>regroup</b>.</p>

       <h4 class="ls-sub">Add the parts</h4>
       <p>For 1 1/5 + 2 2/5: add the wholes (1 + 2 = 3) and the fractions (1/5 + 2/5 = 3/5). Put them together: <b>3 3/5</b>.</p>

       <h4 class="ls-sub">Regroup when the fractions make a whole</h4>
       <p>For 4 2/8 + 2 7/8: the fractions add to 2/8 + 7/8 = 9/8, which is more than 1. Rewrite 9/8 as <b>1 1/8</b> and carry the 1 into the wholes: 4 + 2 + 1 = 7, leaving 1/8. So the sum is <b>7 1/8</b>.</p>

       <h4 class="ls-sub">Another way: use fractions greater than 1</h4>
       <p>You can also rewrite each mixed number as a fraction, add, then convert back. 4 2/8 = 34/8 and 2 7/8 = 23/8; 34/8 + 23/8 = 57/8 = 7 1/8. Same answer — use whichever way you like.</p>
       <div class="reallife"><b>Real life:</b> adding mixed numbers combines measurements — 1 3/4 cups plus 2 1/4 cups of ingredients.</div>
       <div class="watchout"><b>Common mistake:</b> leaving an improper fraction in the answer. If the fraction part is 1 or more, regroup it into the whole-number part.</div>

       <h4 class="ls-sub">Recap</h4>
       <p>Add whole parts and fraction parts separately. If the fraction part reaches 1 or more, regroup a whole into the whole-number part.</p>
       <div class="keybox">4 2/8 + 2 7/8: fractions 9/8 = 1 1/8, so 4 + 2 + 1 = <b>7 1/8</b>.</div>`,
     examples:[
      {title:"Add without regrouping",steps:["1 1/5 + 2 2/5.","Wholes: 1 + 2 = 3. Fractions: 1/5 + 2/5 = 3/5.","Sum: 3 3/5."]},
      {title:"Add with regrouping",steps:["4 2/8 + 2 7/8.","Fractions: 2/8 + 7/8 = 9/8 = 1 1/8.","Wholes: 4 + 2 + 1 = 7 → 7 1/8."]},
      {title:"Use fractions greater than 1",steps:["1 5/8 + 2 6/8 → 13/8 + 22/8.","13/8 + 22/8 = 35/8.","35/8 = 4 3/8."]}
     ],
     quiz:[
      {q:"To add mixed numbers, add the...",o:["whole parts and the fraction parts","only the whole parts","only the fraction parts","denominators"],a:0,why:"Add wholes with wholes and fractions with fractions."},
      {q:"1 1/5 + 2 2/5 =",o:["3 3/5","3 1/5","4 3/5","3 3/10"],a:0,why:"Wholes 3, fractions 3/5 → 3 3/5."},
      {q:"2 1/4 + 1 2/4 =",o:["3 3/4","3 1/4","4 3/4","3 3/8"],a:0,why:"Wholes 3, fractions 3/4 → 3 3/4."},
      {q:"4 2/8 + 2 7/8 =",o:["7 1/8","6 9/8","7 9/8","6 1/8"],a:0,why:"Fractions 9/8 = 1 1/8; wholes 4 + 2 + 1 = 7 → 7 1/8."},
      {q:"When the fraction parts add to more than 1, you...",o:["regroup 1 whole into the whole-number part","drop the extra","subtract instead","leave it improper"],a:0,why:"Carry the extra whole into the whole-number total."},
      {q:"3 2/6 + 1 3/6 =",o:["4 5/6","4 1/6","5 5/6","4 5/12"],a:0,why:"Wholes 4, fractions 5/6 → 4 5/6."},
      {q:"1 5/8 + 2 6/8 =",o:["4 3/8","3 11/8","4 11/8","3 3/8"],a:0,why:"Fractions 11/8 = 1 3/8; wholes 1 + 2 + 1 = 4 → 4 3/8."},
      {q:"2 3/10 + 3 4/10 =",o:["5 7/10","5 3/10","6 7/10","5 7/20"],a:0,why:"Wholes 5, fractions 7/10 → 5 7/10."},
      {q:"One way to add mixed numbers is to first...",o:["write each as a fraction greater than 1, then add","round them off","subtract the wholes","ignore the fractions"],a:0,why:"Convert to fractions, add, then convert back."}
     ]},
    {title:"Subtract Mixed Numbers",iv:null,
     teach:`<p>To subtract mixed numbers with the <b>same denominator</b>, subtract the whole parts and the fraction parts. Sometimes the top fraction is too small to subtract from, and you <b>regroup</b> (rename) one whole as a fraction first.</p>

       <h4 class="ls-sub">Subtract the parts</h4>
       <p>For 5 2/3 − 2 1/3: subtract the wholes (5 − 2 = 3) and the fractions (2/3 − 1/3 = 1/3). The answer is <b>3 1/3</b>.</p>

       <h4 class="ls-sub">Regroup when you can't subtract the fractions</h4>
       <p>For 5 3/6 − 4 5/6, you can't take 5/6 from 3/6. So <b>rename</b> 5 3/6: borrow 1 whole (6/6) to get 4 9/6. Now subtract: 4 9/6 − 4 5/6 = <b>4/6 = 2/3</b>.</p>

       <h4 class="ls-sub">Check by adding back</h4>
       <p>Because subtraction and addition are opposites, check by adding: 2/3 + 4 5/6 should return 5 3/6. Checking catches regrouping slips.</p>
       <div class="reallife"><b>Real life:</b> "how much is left?" with measurements — 3 1/4 cups minus 1 3/4 cups.</div>
       <div class="watchout"><b>Common mistake:</b> subtracting the smaller fraction from the larger out of order. If the top fraction is too small, regroup first — don't flip them.</div>

       <h4 class="ls-sub">Recap</h4>
       <p>Subtract whole parts and fraction parts. If the top fraction is too small, rename one whole as a fraction, then subtract. Check by adding back.</p>
       <div class="keybox">5 3/6 − 4 5/6: rename to 4 9/6, then 4 9/6 − 4 5/6 = <b>2/3</b>.</div>`,
     examples:[
      {title:"Subtract without regrouping",steps:["5 2/3 − 2 1/3.","Wholes: 5 − 2 = 3. Fractions: 2/3 − 1/3 = 1/3.","Answer: 3 1/3."]},
      {title:"Subtract with regrouping",steps:["5 3/6 − 4 5/6.","Rename 5 3/6 as 4 9/6.","4 9/6 − 4 5/6 = 4/6 = 2/3."]},
      {title:"Regroup once more",steps:["6 1/4 − 2 3/4.","Rename 6 1/4 as 5 5/4.","5 5/4 − 2 3/4 = 3 2/4 = 3 1/2."]}
     ],
     quiz:[
      {q:"To subtract mixed numbers, subtract the...",o:["whole parts and the fraction parts","only the whole parts","denominators","numerators only"],a:0,why:"Subtract wholes from wholes and fractions from fractions."},
      {q:"5 2/3 − 2 1/3 =",o:["3 1/3","3 2/3","7 1/3","2 1/3"],a:0,why:"Wholes 3, fractions 1/3 → 3 1/3."},
      {q:"4 3/5 − 1 2/5 =",o:["3 1/5","5 1/5","3 4/5","3 1/10"],a:0,why:"Wholes 3, fractions 1/5 → 3 1/5."},
      {q:"5 3/6 − 4 5/6 =",o:["2/3","1/6","5/6","1 1/6"],a:0,why:"Rename 5 3/6 as 4 9/6; 4 9/6 − 4 5/6 = 4/6 = 2/3."},
      {q:"When the top fraction is too small to subtract, you...",o:["rename one whole as a fraction","flip the fractions","subtract the wholes only","stop"],a:0,why:"Regroup (borrow) a whole as a fraction, then subtract."},
      {q:"6 1/4 − 2 3/4 =",o:["3 1/2","4 1/2","2 3/4","3 1/4"],a:0,why:"Rename 6 1/4 as 5 5/4; 5 5/4 − 2 3/4 = 3 2/4 = 3 1/2."},
      {q:"7 5/8 − 3 2/8 =",o:["4 3/8","4 7/8","10 3/8","4 3/16"],a:0,why:"Wholes 4, fractions 3/8 → 4 3/8."},
      {q:"To check a mixed-number subtraction, you...",o:["add the answer to the number you subtracted","subtract again","multiply the parts","round the answer"],a:0,why:"Adding back should return the original number."},
      {q:"5 1/6 − 2 4/6 =",o:["2 1/2","3 1/2","1 1/2","2 5/6"],a:0,why:"Rename 5 1/6 as 4 7/6; 4 7/6 − 2 4/6 = 2 3/6 = 2 1/2."}
     ]},
    {title:"Problem Solving: Fractions",iv:null,
     teach:`<p>Fraction word problems use the same plan as before — <b>Understand, Plan, Solve, Check</b> — and often take more than one step or involve mixed numbers.</p>

       <h4 class="ls-sub">Plan the steps</h4>
       <p>Example: <i>A trail has two sections. You hike 5/8 mile, rest, then hike 2/8 mile more. How far in all?</i> This is one addition: 5/8 + 2/8 = <b>7/8 mile</b>. Naming the total (or using a letter) keeps things clear.</p>

       <h4 class="ls-sub">Two-step problems</h4>
       <p>Some problems chain two operations. <i>A baker has 3 5/8 cups of sugar and uses 1 6/8 cups. Then adds 1 2/8 cups more. How much now?</i> Step 1: 3 5/8 − 1 6/8 = 1 7/8 (regroup). Step 2: 1 7/8 + 1 2/8 = 3 1/8 cups.</p>

       <h4 class="ls-sub">Compare with a table</h4>
       <p>Some problems give a table and ask you to compare. To find how much longer one ribbon is than another, subtract the two fraction lengths. The plan is the same: understand what's asked, choose add or subtract, solve, and check that the answer is reasonable.</p>
       <div class="reallife"><b>Real life:</b> combining or comparing measurements in cooking, sewing, and building are fraction word problems.</div>
       <div class="watchout"><b>Common mistake:</b> answering only the first step. Re-read the question to be sure you found what it asked.</div>

       <h4 class="ls-sub">Recap</h4>
       <p>Understand the problem, plan which operations to use, solve step by step (regrouping mixed numbers when needed), and check that your answer makes sense.</p>
       <div class="keybox">5/8 mile + 2/8 mile = <b>7/8 mile</b> hiked in all.</div>`,
     examples:[
      {title:"One-step addition",steps:["Hike 5/8 mi, then 2/8 mi more.","5/8 + 2/8 = 7/8.","You hiked 7/8 mile."]},
      {title:"Two-step with regrouping",steps:["3 5/8 cups − 1 6/8 cups = 1 7/8 (regroup).","Then 1 7/8 + 1 2/8 = 3 1/8.","3 1/8 cups now."]},
      {title:"Compare two lengths",steps:["Ribbon A is 5/6 m, ribbon B is 4/6 m.","5/6 − 4/6 = 1/6.","A is 1/6 m longer."]}
     ],
     quiz:[
      {q:"The four-step problem-solving plan is...",o:["Understand, Plan, Solve, Check","Guess, Add, Stop, Move on","Read, Skip, Answer, Done","Round, Add, Round, Stop"],a:0,why:"Understand, Plan, Solve, then Check."},
      {q:"You hike 5/8 mile, then 2/8 mile more. How far in all?",o:["7/8 mile","7/16 mile","3/8 mile","1 mile"],a:0,why:"5/8 + 2/8 = 7/8 mile."},
      {q:"A ribbon is 7/8 m. You cut off 3/8 m. How much is left?",o:["1/2 m","4/16 m","5/8 m","1/4 m"],a:0,why:"7/8 − 3/8 = 4/8 = 1/2 m."},
      {q:"Path A is 5/6 mi and Path B is 4/6 mi. How much longer is A?",o:["1/6 mi","9/6 mi","1/2 mi","2/6 mi"],a:0,why:"5/6 − 4/6 = 1/6 mi."},
      {q:"You walk 1 3/4 mi, then 2 3/4 mi. How far in all?",o:["4 1/2 mi","3 1/2 mi","5 1/2 mi","4 1/4 mi"],a:0,why:"3/4 + 3/4 = 6/4 = 1 2/4; wholes 1 + 2 + 1 = 4 → 4 2/4 = 4 1/2 mi."},
      {q:"A recipe needs 2 1/3 cups. You have 3 2/3 cups. How much extra do you have?",o:["1 1/3 cups","1 2/3 cups","6 cups","1 cups"],a:0,why:"3 2/3 − 2 1/3 = 1 1/3 cups extra."},
      {q:"After solving a two-step problem, you should...",o:["re-read the question and check reasonableness","use every number given","stop after step 1","round the answer"],a:0,why:"Make sure the answer is reasonable and answers what was asked."},
      {q:"A jug has 3 5/8 cups. You use 1 6/8 cups. How much is left?",o:["1 7/8 cups","2 1/8 cups","1 1/8 cups","2 7/8 cups"],a:0,why:"Regroup 3 5/8 as 2 13/8; 2 13/8 − 1 6/8 = 1 7/8 cups."},
      {q:"Which plan finds 'total ribbon from a 2/5 m and a 1/5 m piece'?",o:["add 2/5 + 1/5","subtract 2/5 − 1/5","multiply","divide"],a:0,why:"Combining lengths means add: 2/5 + 1/5 = 3/5 m."}
     ]}
   ],
   test:[
    {q:"1/5 + 3/5 =",vis:{type:'fbar',n:1,d:5,n2:3,d2:5},o:["4/5","4/10","3/5","5/5"],a:0,why:"Join same-size pieces: 1 + 3 = 4 fifths → 4/5."},
    {q:"Which shows 3/4 as a sum of unit fractions?",o:["1/4 + 1/4 + 1/4","1/4 + 1/4","1/2 + 1/4","3/4 + 1/4"],a:0,why:"3/4 is three one-fourth pieces."},
    {q:"3/10 + 4/10 =",vis:{type:'fbar',n:3,d:10,n2:4,d2:10},o:["7/10","7/20","1/10","12/10"],a:0,why:"Add numerators, keep the denominator → 7/10."},
    {q:"When adding fractions with like denominators, the denominator...",o:["stays the same","adds too","doubles","becomes 1"],a:0,why:"The piece size is unchanged."},
    {q:"5/6 − 2/6 =",vis:{type:'fbar',n:5,d:6},o:["1/2","2/6","4/6","5/6"],a:0,why:"5/6 − 2/6 = 3/6, which simplifies to 1/2."},
    {q:"7/8 − 3/8 =",vis:{type:'fbar',n:7,d:8},o:["1/2","3/8","5/8","1/4"],a:0,why:"7/8 − 3/8 = 4/8 = 1/2."},
    {q:"The best way to check 7/8 − 3/8 = 4/8 is to...",o:["add 4/8 + 3/8 and see if you get 7/8","subtract again","multiply","flip the fractions"],a:0,why:"Addition undoes subtraction: 4/8 + 3/8 = 7/8."},
    {q:"Write 1 5/6 as a fraction.",o:["11/6","6/6","7/6","10/6"],a:0,why:"1 = 6/6, plus 5/6 = 11/6."},
    {q:"Write 5/2 as a mixed number.",o:["2 1/2","1 1/2","2 1/4","5 1/2"],a:0,why:"5/2 = 2 wholes and 1 half = 2 1/2."},
    {q:"1 1/5 + 2 2/5 =",o:["3 3/5","3 1/5","4 3/5","3 3/10"],a:0,why:"Add wholes (1 + 2 = 3) and fractions (1/5 + 2/5 = 3/5) → 3 3/5."},
    {q:"4 2/8 + 2 7/8 =",o:["7 1/8","6 9/8","7 9/8","6 1/8"],a:0,why:"Fractions: 2/8 + 7/8 = 9/8 = 1 1/8; wholes: 4 + 2 + 1 = 7 → 7 1/8."},
    {q:"5 2/3 − 2 1/3 =",o:["3 1/3","3 2/3","7 1/3","2 1/3"],a:0,why:"Subtract wholes (5 − 2 = 3) and fractions (2/3 − 1/3 = 1/3) → 3 1/3."},
    {q:"5 3/6 − 4 5/6 =",o:["2/3","1/6","5/6","1 1/6"],a:0,why:"Regroup 5 3/6 as 4 9/6; 4 9/6 − 4 5/6 = 4/6 = 2/3."},
    {q:"Which decomposition adds back to 5/12?",o:["2/12 + 3/12","2/12 + 2/12","3/12 + 3/12","1/12 + 3/12"],a:0,why:"2/12 + 3/12 = 5/12."},
    {q:"A ribbon is 7/8 m. You cut off 3/8 m. How much is left?",o:["1/2 m","4/8 m and 3/8 m","5/8 m","1/4 m"],a:0,why:"7/8 − 3/8 = 4/8 = 1/2 m."},
    {q:"Performance Task: A recipe uses 3/8 cup of oats and 2/8 cup of nuts. How much dry mix in all?",o:["5/8 cup","5/16 cup","1/8 cup","6/8 cup"],a:0,why:"3/8 + 2/8 = 5/8 cup (keep the denominator)."},
    {q:"Performance Task: Which shows that 5/8 cup as a sum of unit fractions?",o:["1/8 + 1/8 + 1/8 + 1/8 + 1/8","1/8 + 1/8","5/8 + 1/8","2/8 + 2/8"],a:0,why:"5/8 is five one-eighth pieces."},
    {q:"Performance Task: A bowl holds 7/8 cup of batter. You pour out 3/8 cup. How much remains?",o:["1/2 cup","4/16 cup","5/8 cup","1/4 cup"],a:0,why:"7/8 − 3/8 = 4/8 = 1/2 cup."},
    {q:"Performance Task: A recipe needs 1 5/8 cups of flour. Written as a fraction, that is...",o:["13/8","8/8","6/8","10/8"],a:0,why:"1 = 8/8, plus 5/8 = 13/8."},
    {q:"Performance Task: You mix 1 3/8 cups of flour with 2 2/8 cups. How much in all?",o:["3 5/8 cups","3 1/8 cups","3 5/16 cups","4 5/8 cups"],a:0,why:"Wholes 1 + 2 = 3; fractions 3/8 + 2/8 = 5/8 → 3 5/8 cups."},
    {q:"Performance Task: A jar has 3 5/8 cups of sugar. A recipe uses 1 6/8 cups. How much is left?",o:["1 7/8 cups","2 1/8 cups","1 1/8 cups","2 7/8 cups"],a:0,why:"Regroup 3 5/8 as 2 13/8; 2 13/8 − 1 6/8 = 1 7/8 cups."}
   ]},

  {id:"g4u9",name:"Multiply Whole Numbers and Fractions",icon:"✖️",code:"4.NF",accent:"#a855f7",
   sections:[
    {title:"Understand Multiples of Unit Fractions",iv:"fracbar",
     teach:`<p>Every fraction is really a <b>multiple of a unit fraction</b> — that is, a whole number of equal unit-fraction pieces. Seeing fractions this way is the key that unlocks multiplying them.</p>

       <h4 class="ls-sub">Count the unit pieces</h4>
       <p>Remember a unit fraction has a numerator of 1, like 1/8. The fraction 5/8 is just <b>5 of those one-eighth pieces</b>: 5/8 = 1/8 + 1/8 + 1/8 + 1/8 + 1/8. Since adding the same thing over and over is multiplication, that's the same as <b>5 × 1/8</b>.</p>

       <h4 class="ls-sub">The numerator is the multiplier</h4>
       <p>Here's the pattern: for any fraction, the <b>numerator</b> tells you how many unit-fraction pieces you have. So 2/3 = <b>2 × 1/3</b>, 7/10 = <b>7 × 1/10</b>, and 3/4 = <b>3 × 1/4</b>. The denominator stays the same because it names the size of each piece.</p>
       <div class="reallife"><b>Real life:</b> 3/4 cup of flour is really 3 scoops of a 1/4-cup measure — a fraction as a multiple of a unit fraction.</div>
       <div class="watchout"><b>Common mistake:</b> multiplying the denominator too. 5/8 = 5 × 1/8, not 5 × 5/8 — only the count (numerator) is the multiplier.</div>

       <h4 class="ls-sub">Recap</h4>
       <p>Any fraction equals its numerator times the unit fraction with the same denominator: a/b = a × 1/b.</p>
       <div class="keybox">5/8 = 1/8 + 1/8 + 1/8 + 1/8 + 1/8 = <b>5 × 1/8</b>.</div>`,
     examples:[
      {title:"Write 2/3 as a multiple of a unit fraction",steps:["2/3 is 2 one-third pieces.","2/3 = 1/3 + 1/3.","So 2/3 = 2 × 1/3."]},
      {title:"Write 4/8 as a multiple of a unit fraction",steps:["4/8 is 4 one-eighth pieces.","4/8 = 1/8 + 1/8 + 1/8 + 1/8.","So 4/8 = 4 × 1/8."]},
      {title:"Write 7/10 as a multiple of a unit fraction",steps:["The numerator 7 is the multiplier.","The unit fraction is 1/10.","So 7/10 = 7 × 1/10."]}
     ],
     quiz:[
      {q:"Any fraction can be written as a multiple of a ___ fraction.",o:["unit","mixed","whole","improper"],a:0,why:"A unit fraction (numerator 1) is the building block."},
      {q:"Write 5/8 as a multiple of a unit fraction.",o:["5 × 1/8","8 × 1/5","5 × 5/8","1/5 × 1/8"],a:0,why:"5/8 is 5 one-eighth pieces → 5 × 1/8."},
      {q:"2/3 =",o:["2 × 1/3","3 × 1/2","2 × 2/3","1/3 × 1/3"],a:0,why:"2/3 is 2 one-third pieces → 2 × 1/3."},
      {q:"In 7/10 = 7 × 1/10, the number of unit-fraction pieces is...",o:["7","10","70","1"],a:0,why:"The numerator 7 counts the pieces."},
      {q:"Which is 4/8 written as a sum of unit fractions?",o:["1/8 + 1/8 + 1/8 + 1/8","1/8 + 1/8","4/8 + 1/8","1/4 + 1/4"],a:0,why:"4/8 is four one-eighth pieces."},
      {q:"Which equals 3 × 1/5?",o:["3/5","1/15","1/5","5/3"],a:0,why:"3 one-fifth pieces = 3/5."},
      {q:"The numerator of a fraction tells you...",o:["how many unit-fraction pieces","the size of each piece","the whole","the denominator"],a:0,why:"The numerator counts the unit-fraction pieces."},
      {q:"6/6 = 6 × ___",o:["1/6","1/3","1/2","1/12"],a:0,why:"6/6 is six one-sixth pieces → 6 × 1/6."},
      {q:"Write 3/4 as a multiple of a unit fraction.",o:["3 × 1/4","4 × 1/3","3 × 3/4","1/4 × 1/4"],a:0,why:"3/4 is 3 one-fourth pieces → 3 × 1/4."}
     ]},
    {title:"Understand Multiples of Fractions",iv:"fracbar",
     teach:`<p>Now that a fraction is a multiple of a unit fraction, you can find a <b>multiple of any fraction</b> — like 2 × 3/5 — by thinking in groups.</p>

       <h4 class="ls-sub">Groups of a fraction</h4>
       <p>2 × 3/5 means <b>2 groups of 3/5</b>. Each group is 3 fifths, so two groups are 3 + 3 = 6 fifths: <b>6/5</b>. You joined the fifths from both groups.</p>

       <h4 class="ls-sub">As a multiple of a unit fraction</h4>
       <p>You can also break it all the way down to unit fractions. Since 3/5 = 3 × 1/5, then 2 × 3/5 = 2 × (3 × 1/5) = (2 × 3) × 1/5 = <b>6 × 1/5 = 6/5</b>. Regrouping the multiplication (the Associative Property) shows that you just multiply the whole number by the numerator.</p>
       <div class="reallife"><b>Real life:</b> 3 servings of 2/3 cup is 3 × 2/3 = 6/3 = 2 cups — a multiple of a fraction.</div>
       <div class="watchout"><b>Common mistake:</b> multiplying the denominator by the whole number. 2 × 3/5 is 6/5, not 6/10 — the piece size (fifths) doesn't change.</div>

       <h4 class="ls-sub">Recap</h4>
       <p>A multiple of a fraction is that many groups of it. Multiply the whole number by the numerator and keep the denominator: n × a/b = (n × a)/b.</p>
       <div class="keybox">2 × 3/5 = 6 × 1/5 = <b>6/5</b>.</div>`,
     examples:[
      {title:"Find 2 × 3/5",steps:["2 groups of 3 fifths.","3 + 3 = 6 fifths.","2 × 3/5 = 6/5."]},
      {title:"Find 3 × 2/10",steps:["3 groups of 2 tenths.","2 + 2 + 2 = 6 tenths.","3 × 2/10 = 6/10."]},
      {title:"Find 4 × 3/2",steps:["Multiply the whole number by the numerator: 4 × 3 = 12.","Keep the denominator 2.","4 × 3/2 = 12/2 = 6."]}
     ],
     quiz:[
      {q:"A multiple of a fraction like 2 × 3/5 means...",o:["2 groups of 3/5","3 groups of 2/5","2/5 plus 3","half of 3/5"],a:0,why:"2 × 3/5 is 2 groups of three-fifths."},
      {q:"2 × 3/5 =",o:["6/5","5/6","6/10","2/5"],a:0,why:"2 groups of 3 fifths = 6 fifths → 6/5."},
      {q:"2 × 3/5 written as a multiple of a unit fraction is...",o:["6 × 1/5","5 × 1/6","2 × 1/5","3 × 1/5"],a:0,why:"2 × (3 × 1/5) = 6 × 1/5."},
      {q:"3 × 2/10 =",o:["6/10","5/10","6/13","2/10"],a:0,why:"3 groups of 2 tenths = 6 tenths → 6/10."},
      {q:"4 × 3/2 =",o:["12/2","12/8","7/2","3/8"],a:0,why:"4 × 3 = 12, keep the 2 → 12/2 (= 6)."},
      {q:"To find a multiple of a fraction, multiply the whole number by the...",o:["numerator","denominator","whole again","denominator twice"],a:0,why:"Multiply the numerator; keep the denominator."},
      {q:"3 × 2/7 =",o:["6/7","6/21","5/7","2/21"],a:0,why:"3 × 2 = 6, keep the 7 → 6/7."},
      {q:"5 × 2/3 =",o:["10/3","10/15","7/3","2/15"],a:0,why:"5 × 2 = 10, keep the 3 → 10/3."},
      {q:"2 × 4/9 =",o:["8/9","8/18","6/9","4/18"],a:0,why:"2 × 4 = 8, keep the 9 → 8/9."}
     ]},
    {title:"Multiply Whole Numbers and Fractions",iv:"fracbar",
     teach:`<p>Putting it together, you can multiply a whole number by a fraction with one quick <b>rule</b>: multiply the <b>numerator</b> by the whole number and keep the <b>denominator</b> the same.</p>

       <h4 class="ls-sub">The rule</h4>
       <p>To find 4 × 2/3, multiply the numerator by 4 (4 × 2 = 8) and keep the denominator 3. The product is <b>8/3</b>. That's it — the denominator never changes because the piece size (thirds) stays the same.</p>

       <h4 class="ls-sub">Why it works</h4>
       <p>You already know 2/3 = 2 × 1/3, so 4 × 2/3 = 4 × (2 × 1/3) = (4 × 2) × 1/3 = 8 × 1/3 = <b>8/3</b>. Regrouping the multiplication shows the rule is just "multiply the numerators." Sometimes the product is greater than 1, like 8/3 = 2 2/3 — that's fine.</p>
       <div class="reallife"><b>Real life:</b> 4 servings of 2/3 cup is 4 × 2/3 = 8/3 = 2 2/3 cups.</div>
       <div class="watchout"><b>Common mistake:</b> multiplying the denominator too. 4 × 2/3 is 8/3, not 8/12. Keep the bottom the same.</div>

       <h4 class="ls-sub">Recap</h4>
       <p>To multiply a whole number by a fraction, multiply the numerator by the whole number and keep the denominator: n × a/b = (n × a)/b.</p>
       <div class="keybox">4 × 2/3 = (4 × 2)/3 = <b>8/3</b> = 2 2/3.</div>`,
     examples:[
      {title:"Find 4 × 2/3",steps:["Multiply the numerator: 4 × 2 = 8.","Keep the denominator 3.","4 × 2/3 = 8/3."]},
      {title:"Find 3 × 3/4",steps:["3 × 3 = 9.","Keep the 4.","3 × 3/4 = 9/4 = 2 1/4."]},
      {title:"Find 5 × 2/8",steps:["5 × 2 = 10.","Keep the 8.","5 × 2/8 = 10/8 = 1 1/4."]}
     ],
     quiz:[
      {q:"To multiply a whole number by a fraction, you...",o:["multiply the numerator by the whole number, keep the denominator","multiply the denominator, keep the numerator","multiply both parts","add the numerators"],a:0,why:"n × a/b = (n × a)/b."},
      {q:"4 × 2/3 =",o:["8/3","8/12","6/3","2/12"],a:0,why:"4 × 2 = 8, keep the 3 → 8/3."},
      {q:"3 × 3/4 =",o:["9/4","9/12","6/4","3/12"],a:0,why:"3 × 3 = 9, keep the 4 → 9/4."},
      {q:"6 × 1/5 =",o:["6/5","6/30","7/5","1/30"],a:0,why:"6 × 1 = 6, keep the 5 → 6/5."},
      {q:"5 × 2/8 =",o:["10/8","10/40","7/8","2/40"],a:0,why:"5 × 2 = 10, keep the 8 → 10/8."},
      {q:"Why does the denominator stay the same when you multiply?",o:["The piece size doesn't change","The bottoms cancel","It becomes 1","You always simplify"],a:0,why:"You're taking more of the same-size pieces."},
      {q:"7 × 3/10 =",o:["21/10","21/70","10/10","3/70"],a:0,why:"7 × 3 = 21, keep the 10 → 21/10."},
      {q:"2 × 5/6 =",o:["10/6","10/12","7/6","5/12"],a:0,why:"2 × 5 = 10, keep the 6 → 10/6."},
      {q:"A craft needs 4 pieces of ribbon, each 3/8 m. How much ribbon in all?",o:["12/8 m","12/32 m","7/8 m","3/32 m"],a:0,why:"4 × 3/8 = 12/8 m (1 1/2 m)."}
     ]},
    {title:"Multiply Whole Numbers and Mixed Numbers",iv:null,
     teach:`<p>To multiply a whole number by a <b>mixed number</b>, the easiest path is to first rewrite the mixed number as a fraction greater than 1, then use the rule you already know.</p>

       <h4 class="ls-sub">Rewrite, then multiply</h4>
       <p>Find 3 × 1 1/2. First write 1 1/2 as a fraction: 1 1/2 = <b>3/2</b>. Now multiply: 3 × 3/2 = 9/2 = <b>4 1/2</b>. Writing the mixed number as a fraction turns the problem into a simple whole-times-fraction.</p>

       <h4 class="ls-sub">Another way: the Distributive Property</h4>
       <p>You can also split the mixed number into its whole and fraction parts. 3 × 1 1/2 = 3 × (1 + 1/2) = (3 × 1) + (3 × 1/2) = 3 + 3/2 = 3 + 1 1/2 = <b>4 1/2</b>. Both methods give the same answer — pick whichever feels easier.</p>
       <div class="reallife"><b>Real life:</b> 3 boards each 1 1/2 feet long make 3 × 1 1/2 = 4 1/2 feet.</div>
       <div class="watchout"><b>Common mistake:</b> multiplying only the whole-number part. 3 × 1 1/2 is not 3 — you must include the 1/2, giving 4 1/2.</div>

       <h4 class="ls-sub">Recap</h4>
       <p>Write the mixed number as a fraction greater than 1, then multiply the numerator by the whole number. Or split it into whole and fraction parts with the Distributive Property.</p>
       <div class="keybox">3 × 1 1/2 = 3 × 3/2 = 9/2 = <b>4 1/2</b>.</div>`,
     examples:[
      {title:"Rewrite and multiply",steps:["3 × 1 1/2. Write 1 1/2 = 3/2.","3 × 3/2 = 9/2.","9/2 = 4 1/2."]},
      {title:"Use the Distributive Property",steps:["2 × 2 1/3 = 2 × (2 + 1/3).","(2 × 2) + (2 × 1/3) = 4 + 2/3.","= 4 2/3."]},
      {title:"A product that is a whole number",steps:["4 × 1 1/2. Write 1 1/2 = 3/2.","4 × 3/2 = 12/2.","12/2 = 6."]}
     ],
     quiz:[
      {q:"To multiply a whole number by a mixed number, first...",o:["write the mixed number as a fraction","drop the fraction part","round the mixed number","add the whole numbers"],a:0,why:"Rewrite as a fraction greater than 1, then multiply."},
      {q:"3 × 1 1/2 =",o:["4 1/2","3 1/2","4 1/4","5 1/2"],a:0,why:"3 × 3/2 = 9/2 = 4 1/2."},
      {q:"Write 1 1/2 as a fraction to multiply.",o:["3/2","2/3","1/2","4/2"],a:0,why:"1 1/2 = 3/2."},
      {q:"2 × 2 1/3 =",o:["4 2/3","4 1/3","2 2/3","5 1/3"],a:0,why:"2 × 7/3 = 14/3 = 4 2/3."},
      {q:"3 × 1 1/4 =",o:["3 3/4","3 1/4","4 3/4","3 3/12"],a:0,why:"3 × 5/4 = 15/4 = 3 3/4."},
      {q:"Using the Distributive Property, 3 × 1 1/2 = (3 × 1) + (3 × 1/2) =",o:["4 1/2","3 1/2","4 1/4","6"],a:0,why:"3 + 3/2 = 3 + 1 1/2 = 4 1/2."},
      {q:"4 × 1 1/2 =",o:["6","5","4 1/2","6 1/2"],a:0,why:"4 × 3/2 = 12/2 = 6."},
      {q:"2 × 3 1/4 =",o:["6 1/2","6 1/4","5 1/2","7 1/2"],a:0,why:"2 × 13/4 = 26/4 = 6 1/2."},
      {q:"A board is 2 1/2 ft long. How long are 3 boards end to end?",o:["7 1/2 ft","6 1/2 ft","7 1/4 ft","8 1/2 ft"],a:0,why:"3 × 5/2 = 15/2 = 7 1/2 ft."}
     ]},
    {title:"Problem Solving: Fraction Operations",iv:null,
     teach:`<p>Fraction word problems that involve multiplying use the same plan — <b>Understand, Plan, Solve, Check</b> — and many are <b>multi-step</b>, combining a multiplication with an addition or subtraction.</p>

       <h4 class="ls-sub">Plan the operations</h4>
       <p>Example: <i>A dolphin swims after prey that is 1/4 mile away. It covers that distance 3 times while circling. How far does it swim?</i> This is a multiplication: 3 × 1/4 = <b>3/4 mile</b>.</p>

       <h4 class="ls-sub">Two-step problems</h4>
       <p>Some problems chain steps. <i>A recipe uses 3/4 cup of sugar per batch. You make 5 batches, then add 1/4 cup extra for topping. How much sugar in all?</i> Step 1: 5 × 3/4 = 15/4 = 3 3/4 cups. Step 2: 3 3/4 + 1/4 = <b>4 cups</b>.</p>

       <h4 class="ls-sub">Check without calculating</h4>
       <p>Estimating keeps you honest. Since 2/3 is less than 1, you know 4 × 2/3 must be <b>less than 4</b> — so an answer like 8/3 (about 2 2/3) is reasonable, but an answer bigger than 4 would be wrong.</p>
       <div class="reallife"><b>Real life:</b> scaling recipes, measuring materials, and planning distances all combine multiplying and adding fractions.</div>
       <div class="watchout"><b>Common mistake:</b> answering only the first step. Re-read the question to be sure you found what it asked.</div>

       <h4 class="ls-sub">Recap</h4>
       <p>Understand the problem, plan the operations, solve step by step, and check that your answer is reasonable (a whole number times a fraction less than 1 is smaller than the whole number).</p>
       <div class="keybox">3 × 1/4 mile = <b>3/4 mile</b>.</div>`,
     examples:[
      {title:"One-step multiplication",steps:["Prey is 1/4 mile away; covered 3 times.","3 × 1/4 = 3/4.","The dolphin swims 3/4 mile."]},
      {title:"Two-step: multiply, then add",steps:["5 batches × 3/4 cup = 15/4 = 3 3/4 cups.","Add 1/4 cup extra.","3 3/4 + 1/4 = 4 cups."]},
      {title:"Multiply, then subtract",steps:["You have 3 cups of flour.","Use 2/3 cup three times: 3 × 2/3 = 2 cups.","3 − 2 = 1 cup left."]}
     ],
     quiz:[
      {q:"The four-step problem-solving plan is...",o:["Understand, Plan, Solve, Check","Guess, Add, Stop","Read, Skip, Answer","Round, Add, Round"],a:0,why:"Understand, Plan, Solve, then Check."},
      {q:"A dog runs 3/4 mile, 4 times a day. How far each day?",o:["3 miles","12/8 miles","3/4 mile","4 miles"],a:0,why:"4 × 3/4 = 12/4 = 3 miles."},
      {q:"A recipe uses 3/4 cup sugar per batch. 5 batches plus 1/4 cup extra is...",o:["4 cups","3 1/2 cups","5 cups","3 3/4 cups"],a:0,why:"5 × 3/4 = 3 3/4; + 1/4 = 4 cups."},
      {q:"A plank is 1 1/2 m. You need 4 planks. Total length?",o:["6 m","5 1/2 m","4 1/2 m","6 1/2 m"],a:0,why:"4 × 3/2 = 12/2 = 6 m."},
      {q:"You have 3 cups of flour and use 2/3 cup three times. How much is left?",o:["1 cup","2 cups","1/3 cup","2/3 cup"],a:0,why:"3 × 2/3 = 2 cups used; 3 − 2 = 1 cup left."},
      {q:"Without calculating, 4 × 2/3 is...",o:["less than 4","more than 4","exactly 4","exactly 8"],a:0,why:"2/3 is less than 1, so 4 groups of it is less than 4."},
      {q:"A car uses 3/4 gallon per trip. How much for 8 trips?",o:["6 gallons","5 gallons","6 3/4 gallons","4 gallons"],a:0,why:"8 × 3/4 = 24/4 = 6 gallons."},
      {q:"After solving a two-step problem, you should...",o:["re-read the question and check reasonableness","use every number given","stop after step 1","round the answer"],a:0,why:"Make sure the answer is reasonable and answers the question."},
      {q:"Which plan finds 'total water in 6 cups of 2/3 cup each'?",o:["multiply 6 × 2/3","add 6 + 2/3","subtract 6 − 2/3","divide 6 ÷ 2/3"],a:0,why:"Equal groups means multiply: 6 × 2/3 = 4 cups."}
     ]}
   ],
   test:[
    {q:"Write 5/8 as a multiple of a unit fraction.",o:["5 × 1/8","8 × 1/5","1/8 × 1/8","5 × 5/8"],a:0,why:"5/8 is 5 one-eighth pieces → 5 × 1/8."},
    {q:"4/6 =",o:["4 × 1/6","6 × 1/4","4 × 4/6","1/6 × 4/6"],a:0,why:"4/6 is 4 one-sixth pieces → 4 × 1/6."},
    {q:"2 × 3/5 =",o:["6/5","5/6","6/10","2/5"],a:0,why:"2 groups of 3 fifths = 6/5."},
    {q:"2 × 3/5 written as a multiple of a unit fraction is...",o:["6 × 1/5","5 × 1/6","2 × 1/5","3 × 1/5"],a:0,why:"2 × (3 × 1/5) = 6 × 1/5."},
    {q:"To multiply a whole number by a fraction, you...",o:["multiply the numerator by the whole number and keep the denominator","multiply the denominator and keep the numerator","multiply both parts","add the numerators"],a:0,why:"n × a/b = (n × a)/b."},
    {q:"4 × 2/3 =",o:["8/3","8/12","6/3","2/12"],a:0,why:"4 × 2 = 8, keep the 3 → 8/3."},
    {q:"5 × 2/6 =",o:["10/6","10/12","7/6","2/30"],a:0,why:"5 × 2 = 10, keep the 6 → 10/6."},
    {q:"5 × 1/6 =",o:["5/6","5/30","6/6","1/30"],a:0,why:"5 one-sixth pieces → 5/6."},
    {q:"3 × 1 1/2 =",o:["4 1/2","3 1/2","4 1/6","3 3/2"],a:0,why:"3 × 3/2 = 9/2 = 4 1/2."},
    {q:"To multiply 3 × 1 1/2, first write 1 1/2 as...",o:["3/2","2/3","1/2","4/2"],a:0,why:"1 1/2 = 3/2, then 3 × 3/2 = 9/2."},
    {q:"2 × 2 1/3 =",o:["4 2/3","4 1/3","2 2/3","5 2/3"],a:0,why:"2 × 7/3 = 14/3 = 4 2/3."},
    {q:"3 × 1 3/10 =",o:["3 9/10","3 3/10","4 9/10","3 9/30"],a:0,why:"3 × 13/10 = 39/10 = 3 9/10."},
    {q:"A dolphin's prey is 1/4 mile away. It swims 3 times that far while hunting. How far?",o:["3/4 mile","1/12 mile","1/4 mile","1 mile"],a:0,why:"3 × 1/4 = 3/4 mile."},
    {q:"A recipe uses 2/3 cup of oats per batch. How many cups for 4 batches?",o:["8/3 cups","8/12 cups","6/3 cups","2/12 cups"],a:0,why:"4 × 2/3 = 8/3 cups (2 2/3)."},
    {q:"A jar gets 2 pours of 3/4 cup, then 1/4 cup more. How much in all?",o:["1 3/4 cups","1 1/4 cups","2 cups","7/8 cups"],a:0,why:"2 × 3/4 = 6/4; 6/4 + 1/4 = 7/4 = 1 3/4 cups."},
    {q:"Performance Task: Beaker C is filled with 3 pours of a 2/3-cup measure. How much water is in it?",o:["2 cups","2/3 cup","3/2 cups","6 cups"],a:0,why:"3 × 2/3 = 6/3 = 2 cups."},
    {q:"Performance Task: Beaker D holds 4 pours and beaker A holds 1 pour (each 2/3 cup). How much MORE is in D?",o:["2 cups","6 cups","1 1/3 cups","10/3 cups"],a:0,why:"8/3 − 2/3 = 6/3 = 2 cups."},
    {q:"Performance Task: Beakers A, B, C, D hold 1, 2, 3, and 4 pours of 2/3 cup. How much water in all?",o:["6 2/3 cups","10 cups","5 1/3 cups","3 1/3 cups"],a:0,why:"(1+2+3+4) × 2/3 = 10 × 2/3 = 20/3 = 6 2/3 cups."},
    {q:"Performance Task: Each beaker holds 3 cups. Beaker D has 2 2/3 cups. Can you add another 2/3-cup pour?",o:["No — it would be 3 1/3 cups, over the limit","Yes, it fits exactly","Yes, with room to spare","No — it is already full"],a:0,why:"2 2/3 + 2/3 = 3 1/3 cups, which is more than the 3-cup limit."},
    {q:"Performance Task: A beaker is more than half full when it has more than 1 1/2 cups. Which beakers qualify?",o:["C and D","A and B","all of them","only D"],a:0,why:"C has 2 cups and D has 2 2/3 cups (both over 1 1/2); A and B do not."}
   ]},

  {id:"g4u4",name:"Relate Fractions and Decimals",icon:"🔟",code:"4.NF",accent:"#f59e0b",
   sections:[
    {title:"Understand Tenths",iv:"decimalgrid",
     teach:`<p>A <b>decimal</b> is a number with one or more digits to the right of the <b>decimal point</b> — the dot that separates whole numbers from parts of a whole. The <b>first</b> place to the right of the point is the <b>tenths</b> place.</p>

       <h4 class="ls-sub">Tenths as a fraction and a decimal</h4>
       <p>One tenth is 1/10, written as the decimal <b>0.1</b>. So the fraction 3/10 is the same as the decimal <b>0.3</b>, and both are read the same way: "three tenths." A fraction with a denominator of 10 always becomes a one-place decimal.</p>

       <h4 class="ls-sub">Use a place-value chart</h4>
       <p>Extend the place-value chart one spot past the ones to make room for tenths: tens, ones, <b>.</b> , tenths. To write 3/10, put a 0 in the ones place and a 3 in the tenths place: <b>0.3</b>. The 0 shows there are no whole ones.</p>

       <h4 class="ls-sub">Mixed numbers with tenths</h4>
       <p>When you have wholes and tenths together, you get a decimal greater than 1. The mixed number 2 8/10 means 2 ones and 8 tenths, written <b>2.8</b> and read "two and eight tenths." The whole-number part goes left of the dot, the tenths go right.</p>
       <div class="reallife"><b>Real life:</b> one dime is 1/10 of a dollar, written $0.10 — money is full of tenths and hundredths.</div>
       <div class="watchout"><b>Common mistake:</b> reading 0.3 as "three hundredths." The first place after the dot is tenths, so 0.3 is three <b>tenths</b>.</div>

       <h4 class="ls-sub">Recap</h4>
       <p>The first place after the decimal point is tenths. A fraction over 10 becomes a one-place decimal (3/10 = 0.3), and a mixed number like 2 8/10 becomes 2.8.</p>
       <div class="keybox">3/10 = <b>0.3</b> (three tenths); 2 8/10 = <b>2.8</b>.</div>`,
     examples:[
      {title:"Write 3/10 as a decimal",steps:["3/10 is three tenths.","Put 3 in the tenths place, 0 in the ones.","3/10 = 0.3."]},
      {title:"Write 1 7/10 as a decimal",steps:["1 whole and 7 tenths.","1 goes left of the dot, 7 in the tenths place.","1 7/10 = 1.7."]},
      {title:"Write 0.5 as a fraction",steps:["0.5 has one place after the dot, so it's tenths.","Five tenths = 5/10.","0.5 = 5/10."]}
     ],
     quiz:[
      {q:"The first place to the right of the decimal point is the...",o:["tenths place","hundredths place","ones place","tens place"],a:0,why:"The first place after the dot is tenths."},
      {q:"Write 3/10 as a decimal.",vis:{type:'tenths',n:3},o:["0.3","0.03","3.0","30"],a:0,why:"Three tenths = 0.3."},
      {q:"Write 0.7 as a fraction.",o:["7/10","7/100","1/7","70"],a:0,why:"Seven tenths = 7/10."},
      {q:"Write 2 8/10 as a decimal.",vis:{type:'tenths',n:8},o:["2.8","2.08","28","0.28"],a:0,why:"2 ones and 8 tenths = 2.8."},
      {q:"How is 0.6 read aloud?",o:["six tenths","six hundredths","sixty","six ones"],a:0,why:"The 6 is in the tenths place → six tenths."},
      {q:"One dime is what fraction of a dollar?",o:["1/10","1/100","1/5","1/2"],a:0,why:"A dime is one tenth of a dollar, $0.10."},
      {q:"Write 1.4 as a mixed number.",o:["1 4/10","1 4/100","14/10","1 1/4"],a:0,why:"1 whole and 4 tenths = 1 4/10."},
      {q:"Which decimal equals 9/10?",o:["0.9","0.09","9.0","90"],a:0,why:"Nine tenths = 0.9."},
      {q:"In the number 3.2, the digit in the tenths place is...",o:["2","3","0","32"],a:0,why:"The digit just right of the dot (2) is in the tenths place."}
     ]},
    {title:"Understand Hundredths",iv:"decimalgrid",
     teach:`<p>The <b>second</b> place to the right of the decimal point is the <b>hundredths</b> place. A fraction with a denominator of 100 — a <b>decimal fraction</b> — becomes a two-place decimal.</p>

       <h4 class="ls-sub">Hundredths as a fraction and a decimal</h4>
       <p>One hundredth is 1/100, written <b>0.01</b>. So 75/100 is the decimal <b>0.75</b>, and both are read "seventy-five hundredths." Picture a grid of 100 tiny squares: shading 75 of them shows 75/100 = 0.75.</p>

       <h4 class="ls-sub">Use a place-value chart</h4>
       <p>Extend the chart one more place: ones, <b>.</b> , tenths, hundredths. To write 75/100, put 0 in the ones, 7 in the tenths, and 5 in the hundredths: <b>0.75</b>.</p>

       <h4 class="ls-sub">Mixed numbers with hundredths</h4>
       <p>The mixed number 1 25/100 means 1 one and 25 hundredths, written <b>1.25</b> and read "one and twenty-five hundredths." A quarter is 25/100 of a dollar, $0.25.</p>
       <div class="reallife"><b>Real life:</b> one penny is 1/100 of a dollar, written $0.01. Cents are hundredths of a dollar.</div>
       <div class="watchout"><b>Common mistake:</b> writing 8/100 as 0.8. Hundredths need two places: 8/100 = 0.08 (the 0 holds the tenths place).</div>

       <h4 class="ls-sub">Recap</h4>
       <p>The second place after the decimal point is hundredths. A fraction over 100 becomes a two-place decimal (75/100 = 0.75), and 1 25/100 = 1.25.</p>
       <div class="keybox">75/100 = <b>0.75</b>; 1 25/100 = <b>1.25</b>.</div>`,
     examples:[
      {title:"Write 45/100 as a decimal",steps:["45/100 is forty-five hundredths.","Fill two places: tenths 4, hundredths 5.","45/100 = 0.45."]},
      {title:"Write 8/100 as a decimal",steps:["Eight hundredths needs two places.","Put 0 in the tenths, 8 in the hundredths.","8/100 = 0.08."]},
      {title:"Write 1 90/100 as a decimal",steps:["1 one and 90 hundredths.","1 left of the dot, 9 tenths, 0 hundredths.","1 90/100 = 1.90."]}
     ],
     quiz:[
      {q:"The second place to the right of the decimal point is the...",o:["hundredths place","tenths place","ones place","thousandths place"],a:0,why:"The second place after the dot is hundredths."},
      {q:"Write 75/100 as a decimal.",vis:{type:'dgrid',n:75},o:["0.75","7.5","0.075","75"],a:0,why:"Seventy-five hundredths = 0.75."},
      {q:"Write 8/100 as a decimal.",vis:{type:'dgrid',n:8},o:["0.08","0.8","8.0","0.008"],a:0,why:"Eight hundredths needs two places → 0.08."},
      {q:"Write 1 25/100 as a decimal.",vis:{type:'dgrid',n:25},o:["1.25","1.025","125","0.125"],a:0,why:"1 one and 25 hundredths = 1.25."},
      {q:"One penny is what fraction of a dollar?",o:["1/100","1/10","1/5","1/50"],a:0,why:"A penny is one hundredth of a dollar, $0.01."},
      {q:"How is 0.45 read aloud?",o:["forty-five hundredths","forty-five tenths","four and five","forty-five"],a:0,why:"Two places after the dot → hundredths."},
      {q:"Write 0.3 as hundredths.",o:["30/100","3/100","13/100","300/100"],a:0,why:"Three tenths equals thirty hundredths, 30/100."},
      {q:"Which decimal equals 60/100?",o:["0.60","0.06","6.0","600"],a:0,why:"Sixty hundredths = 0.60."},
      {q:"In 4.29, the digit in the hundredths place is...",o:["9","2","4","29"],a:0,why:"The second digit after the dot (9) is in the hundredths place."}
     ]},
    {title:"Fractions and Decimals",iv:"decimalgrid",
     teach:`<p>Tenths and hundredths are deeply connected: 1 tenth equals 10 hundredths. That means you can rewrite a tenths fraction as hundredths, and write the same number in both fraction and decimal form.</p>

       <h4 class="ls-sub">Tenths as hundredths</h4>
       <p>To write 6/10 as hundredths, multiply top and bottom by 10: 6/10 = <b>60/100</b>. As decimals, 0.6 and 0.60 are the same value — they're called <b>equivalent decimals</b>. So 6/10 = 60/100 = 0.6 = 0.60.</p>

       <h4 class="ls-sub">Hundredths as tenths</h4>
       <p>When a hundredths fraction has a 0 in the hundredths place, you can simplify it to tenths. 40/100 = 40 ÷ 10 over 100 ÷ 10 = <b>4/10</b>, and 0.40 = 0.4. Dropping a trailing zero doesn't change the value.</p>

       <h4 class="ls-sub">Same point on a number line</h4>
       <p>On a number line, 3/10 and 30/100 land on the exact same point, and so do 0.3 and 0.30. Equivalent forms always mark the same spot.</p>
       <div class="reallife"><b>Real life:</b> $0.60 and $0.6 name the same amount of money — six dimes.</div>
       <div class="watchout"><b>Common mistake:</b> thinking 0.6 and 0.60 are different. They're equivalent — a trailing zero doesn't change the value.</div>

       <h4 class="ls-sub">Recap</h4>
       <p>Multiply by 10 to write tenths as hundredths (6/10 = 60/100), and simplify to go back. In decimal form, adding or dropping a trailing zero gives an equivalent decimal.</p>
       <div class="keybox">6/10 = 60/100 = 0.6 = 0.60.</div>`,
     examples:[
      {title:"Write 6/10 as hundredths",steps:["Multiply top and bottom by 10.","6/10 = 60/100.","As a decimal, that's 0.60."]},
      {title:"Write 0.40 in simplest fraction form",steps:["0.40 is 40/100.","Divide top and bottom by 10.","40/100 = 4/10, or 0.4."]},
      {title:"Show 3/10 = 30/100",steps:["3/10 × 10/10 = 30/100.","Both are three tenths of the whole.","0.3 = 0.30."]}
     ],
     quiz:[
      {q:"Write 6/10 as hundredths.",o:["60/100","6/100","600/100","16/100"],a:0,why:"Multiply top and bottom by 10: 6/10 = 60/100."},
      {q:"Which decimal is equivalent to 0.4?",o:["0.40","0.04","4.0","0.004"],a:0,why:"A trailing zero doesn't change the value: 0.4 = 0.40."},
      {q:"Write 40/100 as tenths.",o:["4/10","4/100","40/10","14/10"],a:0,why:"Divide top and bottom by 10: 40/100 = 4/10."},
      {q:"Two decimals with the same value, like 0.5 and 0.50, are called...",o:["equivalent decimals","mixed decimals","unlike decimals","rounded decimals"],a:0,why:"Equivalent decimals name the same value."},
      {q:"9/10 written as hundredths is...",o:["90/100","9/100","19/100","900/100"],a:0,why:"9/10 × 10/10 = 90/100."},
      {q:"Which fraction equals 0.7?",o:["70/100","7/100","0.7/100","7/1000"],a:0,why:"0.7 = 7/10 = 70/100."},
      {q:"On a number line, 3/10 and 30/100 are...",o:["at the same point","at different points","never marked","always apart"],a:0,why:"Equivalent forms land on the same point."},
      {q:"Write 0.20 as tenths.",o:["2/10","20/10","2/100","2/1000"],a:0,why:"0.20 = 20/100 = 2/10."},
      {q:"Which shows equivalent forms of the same number?",o:["5/10 = 50/100 = 0.5","5/10 = 5/100","0.5 = 0.05","5/10 = 0.05"],a:0,why:"5/10, 50/100, and 0.5 all name five tenths."}
     ]},
    {title:"Compare Decimals",iv:"decimalnumberline",
     teach:`<p>To compare two decimals, line up their decimal points and compare the digits <b>place by place, starting from the left</b>. The first place where the digits differ decides which number is greater — the same idea you use for whole numbers.</p>

       <h4 class="ls-sub">Compare place by place</h4>
       <p>Compare 0.7 and 0.07. The ones are both 0, so move to the tenths: 7 versus 0. Since 7 tenths is greater than 0 tenths, <b>0.7 > 0.07</b>. Don't be fooled by length — 0.07 is much smaller even though it has more digits.</p>

       <h4 class="ls-sub">Give them the same number of places</h4>
       <p>When two decimals have different lengths, add a zero so they match, then compare like whole numbers. To compare 0.25 and 0.3, rewrite 0.3 as <b>0.30</b> (thirty hundredths). Now compare 25 hundredths and 30 hundredths: since 25 < 30, <b>0.25 < 0.3</b>.</p>

       <h4 class="ls-sub">Use a number line</h4>
       <p>On a number line, numbers to the <b>right</b> are greater. Marking 0.25 and 0.30, the point 0.30 sits to the right, so it's the larger number. Number lines make "which is bigger" easy to see.</p>
       <div class="reallife"><b>Real life:</b> comparing decimals tells you which price is lower or whose race time is faster (the smaller time wins!).</div>
       <div class="watchout"><b>Common mistake:</b> thinking more digits means bigger. 0.5 is greater than 0.45 — line them up as 0.50 vs 0.45 to see it.</div>

       <h4 class="ls-sub">Recap</h4>
       <p>Line up the decimal points and compare left to right; add a zero so both have the same number of places. On a number line, the number farther right is greater.</p>
       <div class="keybox">0.25 vs 0.3 → compare 25 and 30 hundredths → <b>0.25 &lt; 0.3</b>.</div>`,
     examples:[
      {title:"Compare 0.7 and 0.07",steps:["Ones are equal (0).","Tenths: 7 vs 0.","7 > 0, so 0.7 > 0.07."]},
      {title:"Compare 0.25 and 0.3",steps:["Rewrite 0.3 as 0.30.","Compare 25 and 30 hundredths.","25 < 30, so 0.25 < 0.3."]},
      {title:"Compare 0.46 and 0.44",steps:["Tenths are equal (4).","Hundredths: 6 vs 4.","6 > 4, so 0.46 > 0.44."]}
     ],
     quiz:[
      {q:"To compare decimals, you compare digits...",o:["place by place, starting from the left","from the right","by counting digits","by length only"],a:0,why:"The first place (from the left) that differs decides the larger number."},
      {q:"Which is greater, 0.7 or 0.07?",o:["0.7","0.07","they are equal","can't tell"],a:0,why:"7 tenths is greater than 7 hundredths."},
      {q:"Which is greater, 0.25 or 0.3?",o:["0.3","0.25","they are equal","can't tell"],a:0,why:"0.3 = 0.30 = 30 hundredths, which is more than 25 hundredths."},
      {q:"Which is greater, 0.46 or 0.44?",o:["0.46","0.44","they are equal","can't tell"],a:0,why:"Tenths equal; 6 hundredths > 4 hundredths."},
      {q:"To compare 0.3 and 0.30, you find they are...",o:["equal","0.3 is greater","0.30 is greater","impossible to compare"],a:0,why:"A trailing zero doesn't change the value, so they are equal."},
      {q:"Which is greater, 0.5 or 0.45?",o:["0.5","0.45","they are equal","can't tell"],a:0,why:"0.5 = 0.50 = 50 hundredths, more than 45 hundredths."},
      {q:"On a number line, the greater decimal is...",o:["farther to the right","farther to the left","always longer","always shorter"],a:0,why:"Numbers increase to the right on a number line."},
      {q:"Which is greater, 0.09 or 0.2?",o:["0.2","0.09","they are equal","can't tell"],a:0,why:"0.2 = 0.20 = 20 hundredths, more than 9 hundredths."},
      {q:"Order from least to greatest: 0.4, 0.04, 0.44.",o:["0.04, 0.4, 0.44","0.4, 0.04, 0.44","0.44, 0.4, 0.04","0.04, 0.44, 0.4"],a:0,why:"As hundredths: 4 < 40 < 44 → 0.04, 0.4, 0.44."}
     ]},
    {title:"Add Decimal Fractions and Decimals",iv:null,
     teach:`<p>You can add fractions with denominators of 10 and 100 by first rewriting them with the <b>same denominator</b> — just like adding any fractions. The same idea lets you add decimals in tenths and hundredths.</p>

       <h4 class="ls-sub">Add tenths and hundredths (as fractions)</h4>
       <p>To find 3/10 + 47/100, rewrite 3/10 as hundredths: 3/10 = 30/100. Now the denominators match, so add the numerators: 30/100 + 47/100 = <b>77/100</b>.</p>

       <h4 class="ls-sub">Add decimals</h4>
       <p>The same works with decimals. To find 0.75 + 0.2, think of 0.2 as 0.20 (twenty hundredths). Then 0.75 + 0.20 = <b>0.95</b>. Giving both numbers the same number of places lets you add them place by place.</p>

       <h4 class="ls-sub">Check with a model</h4>
       <p>A hundredths grid confirms it: shade 75 squares, then 20 more, and 95 are shaded — 0.95. Lining up the decimal points (and filling in a zero) keeps every digit in its correct place.</p>
       <div class="reallife"><b>Real life:</b> adding money is adding decimals — $0.75 + $0.20 = $0.95.</div>
       <div class="watchout"><b>Common mistake:</b> adding 3/10 + 47/100 as 50/110. Rewrite to the same denominator first: 30/100 + 47/100 = 77/100.</div>

       <h4 class="ls-sub">Recap</h4>
       <p>Rewrite tenths as hundredths so the denominators match, then add. With decimals, give both the same number of places and add place by place.</p>
       <div class="keybox">3/10 + 47/100 = 30/100 + 47/100 = <b>77/100</b>; 0.75 + 0.2 = <b>0.95</b>.</div>`,
     examples:[
      {title:"Add 3/10 + 47/100",steps:["Rewrite 3/10 as 30/100.","30/100 + 47/100.","= 77/100."]},
      {title:"Add 0.75 + 0.2",steps:["Write 0.2 as 0.20.","0.75 + 0.20.","= 0.95."]},
      {title:"Add 1/10 + 36/100",steps:["Rewrite 1/10 as 10/100.","10/100 + 36/100.","= 46/100."]}
     ],
     quiz:[
      {q:"To add 3/10 + 47/100, first rewrite 3/10 as...",o:["30/100","3/100","300/100","47/10"],a:0,why:"Multiply top and bottom by 10: 3/10 = 30/100."},
      {q:"3/10 + 47/100 =",o:["77/100","50/110","77/10","410/100"],a:0,why:"30/100 + 47/100 = 77/100."},
      {q:"0.75 + 0.2 =",o:["0.95","0.77","0.95 becomes 9.5","0.15"],a:0,why:"0.75 + 0.20 = 0.95."},
      {q:"1/10 + 36/100 =",o:["46/100","37/100","36/110","46/10"],a:0,why:"10/100 + 36/100 = 46/100."},
      {q:"0.5 + 0.25 =",o:["0.75","0.30","0.7","0.255"],a:0,why:"0.50 + 0.25 = 0.75."},
      {q:"Why rewrite tenths as hundredths before adding?",o:["so both fractions have the same denominator","to make them bigger","to round them","so you can subtract"],a:0,why:"You can only add fractions with the same denominator."},
      {q:"2/10 + 5/100 =",o:["25/100","7/100","7/110","25/10"],a:0,why:"20/100 + 5/100 = 25/100."},
      {q:"0.3 + 0.45 =",o:["0.75","0.48","0.7","0.4515"],a:0,why:"0.30 + 0.45 = 0.75."},
      {q:"A student writes 3/10 + 47/100 = 50/110. What went wrong?",o:["They added without a common denominator","Nothing, it's right","They multiplied","They forgot to simplify"],a:0,why:"Rewrite 3/10 as 30/100 first: 30/100 + 47/100 = 77/100."}
     ]},
    {title:"Fractions, Decimals, and Money",iv:null,
     teach:`<p>Money is written with a <b>dollar sign</b> and a <b>decimal point</b>. Just as the decimal point separates ones from tenths and hundredths, it separates whole <b>dollars</b> from <b>cents</b>. Think of whole dollars as ones, dimes as tenths, and pennies as hundredths.</p>

       <h4 class="ls-sub">Money as a decimal</h4>
       <p>A quarter is 25 cents, or 25/100 of a dollar, written <b>$0.25</b>. One dollar and 24 cents is 1 24/100 dollars, written <b>$1.24</b> and read "one dollar and twenty-four cents." The two digits after the point are the cents (hundredths of a dollar).</p>

       <h4 class="ls-sub">From coins to a decimal</h4>
       <p>To total coins, add their values and write the amount with a decimal point. 1 quarter + 2 dimes + 2 pennies = 25 + 20 + 2 = 47 cents = 47/100 dollar = <b>$0.47</b>. A $1 bill plus 2 quarters, 1 nickel, and 3 pennies = 100 + 50 + 5 + 3 = 158 cents = <b>$1.58</b>.</p>
       <div class="reallife"><b>Real life:</b> every price tag is a decimal — $3.99 is 3 99/100 dollars.</div>
       <div class="watchout"><b>Common mistake:</b> writing 5 cents as $0.5. Cents are hundredths, so 5 cents is $0.05 (the 0 holds the tenths place).</div>

       <h4 class="ls-sub">Recap</h4>
       <p>Write money with a dollar sign and decimal point: dollars are ones, dimes are tenths, pennies are hundredths. $1.24 = 1 24/100 dollars.</p>
       <div class="keybox">1 quarter + 2 dimes + 2 pennies = 47¢ = 47/100 dollar = <b>$0.47</b>.</div>`,
     examples:[
      {title:"Total coins as a decimal",steps:["1 quarter + 2 dimes + 2 pennies = 25 + 20 + 2.","That is 47 cents.","47/100 dollar = $0.47."]},
      {title:"Write $1.58 from coins",steps:["$1 bill + 2 quarters + 1 nickel + 3 pennies.","100 + 50 + 5 + 3 = 158 cents.","= $1.58."]},
      {title:"Write 3 dimes as a decimal",steps:["3 dimes = 30 cents.","30/100 of a dollar.","= $0.30."]}
     ],
     quiz:[
      {q:"In a money amount, the two digits after the decimal point are the...",o:["cents (hundredths of a dollar)","dollars","dimes only","tenths only"],a:0,why:"Cents are hundredths of a dollar."},
      {q:"A quarter is what fraction of a dollar?",o:["25/100","1/4 of a cent","25/10","1/25"],a:0,why:"A quarter is 25 cents = 25/100 of a dollar."},
      {q:"Write 1 quarter + 2 dimes + 2 pennies as a decimal.",o:["$0.47","$0.29","$0.47 becomes $4.70","$0.45"],a:0,why:"25 + 20 + 2 = 47 cents = $0.47."},
      {q:"Write $1 bill + 2 quarters + 1 nickel + 3 pennies.",o:["$1.58","$1.53","$1.68","$0.58"],a:0,why:"100 + 50 + 5 + 3 = 158 cents = $1.58."},
      {q:"Write 5 cents as a decimal.",o:["$0.05","$0.5","$5.00","$0.15"],a:0,why:"Cents are hundredths: 5 cents = $0.05."},
      {q:"$1.24 written as a mixed number of dollars is...",o:["1 24/100","1 24/10","1 2/4","124/10"],a:0,why:"$1.24 is 1 and 24 hundredths of a dollar."},
      {q:"Write 3 dimes as a decimal amount.",o:["$0.30","$0.03","$3.00","$0.13"],a:0,why:"3 dimes = 30 cents = $0.30."},
      {q:"How is $2.09 read aloud?",o:["two dollars and nine cents","two dollars and ninety cents","twenty-nine cents","two point nine dollars"],a:0,why:"The 09 is nine cents (hundredths)."},
      {q:"Which coins total $0.75?",o:["3 quarters","7 dimes","1 half-dollar and 1 dime","75 dollars"],a:0,why:"3 × 25 cents = 75 cents = $0.75."}
     ]},
    {title:"Operations with Money",iv:null,
     teach:`<p>Because money amounts are decimals, you add, subtract, multiply, and divide them the same way you do other numbers — just keep the decimal points lined up and remember the dollar sign.</p>

       <h4 class="ls-sub">Add and subtract</h4>
       <p>To add $5.50 + $1.25, line up the decimal points and add: <b>$6.75</b>. To subtract $10.00 − $3.75, line up and subtract: <b>$6.25</b>. This is how you find a total cost or make change.</p>

       <h4 class="ls-sub">Multiply and divide</h4>
       <p>Buying several of the same item is multiplication: 3 toys at $3.75 each is 3 × $3.75 = <b>$11.25</b>. Sharing money equally is division: splitting $4.50 between 2 people is $4.50 ÷ 2 = <b>$2.25</b> each.</p>

       <h4 class="ls-sub">Pick the right operation</h4>
       <p>Decide what the problem is asking: a <i>total</i> means add, <i>change</i> means subtract, <i>several of the same</i> means multiply, and <i>share equally</i> means divide. Then keep the decimal points lined up.</p>
       <div class="reallife"><b>Real life:</b> totaling a bill, making change, and splitting a cost with friends are all money operations.</div>
       <div class="watchout"><b>Common mistake:</b> not lining up the decimal points. Always align the dollars, dimes, and pennies before you add or subtract.</div>

       <h4 class="ls-sub">Recap</h4>
       <p>Add, subtract, multiply, or divide money like decimals, keeping the decimal points lined up. Total → add; change → subtract; many of one → multiply; share → divide.</p>
       <div class="keybox">$5.50 + $1.25 = <b>$6.75</b>; $10.00 − $3.75 = <b>$6.25</b>.</div>`,
     examples:[
      {title:"Add money",steps:["$5.50 + $1.25.","Line up the decimal points and add.","= $6.75."]},
      {title:"Make change",steps:["Pay with $10.00 for a $3.75 item.","$10.00 − $3.75.","Change = $6.25."]},
      {title:"Multiply and divide money",steps:["3 items at $3.75 each: 3 × $3.75 = $11.25.","Split $4.50 between 2 people: $4.50 ÷ 2.","= $2.25 each."]}
     ],
     quiz:[
      {q:"$5.50 + $1.25 =",o:["$6.75","$6.65","$7.75","$6.25"],a:0,why:"Line up and add: $5.50 + $1.25 = $6.75."},
      {q:"You pay with $10.00 for a $3.75 item. Your change is...",o:["$6.25","$6.75","$7.25","$5.25"],a:0,why:"$10.00 − $3.75 = $6.25."},
      {q:"3 toys cost $3.75 each. Total?",o:["$11.25","$10.25","$11.75","$9.25"],a:0,why:"3 × $3.75 = $11.25."},
      {q:"Split $4.50 equally between 2 people. Each gets...",o:["$2.25","$2.50","$2.05","$9.00"],a:0,why:"$4.50 ÷ 2 = $2.25."},
      {q:"Which operation finds the total cost of several items?",o:["addition (or multiplication for same items)","subtraction","division only","none"],a:0,why:"A total is found by adding (or multiplying for identical items)."},
      {q:"$1.35 + $1.25 =",o:["$2.60","$2.50","$2.70","$1.60"],a:0,why:"$1.35 + $1.25 = $2.60."},
      {q:"$2.45 − $1.10 =",o:["$1.35","$1.45","$1.25","$3.55"],a:0,why:"$2.45 − $1.10 = $1.35."},
      {q:"3 friends each have $0.60. How much in all?",o:["$1.80","$1.20","$0.90","$1.60"],a:0,why:"3 × $0.60 = $1.80."},
      {q:"You and a friend share $1.48 equally. Each gets...",o:["$0.74","$0.84","$0.64","$2.96"],a:0,why:"$1.48 ÷ 2 = $0.74."}
     ]}
   ],
   test:[
    {q:"The first place to the right of the decimal point is the...",o:["tenths place","hundredths place","ones place","thousandths place"],a:0,why:"The first place after the dot is tenths."},
    {q:"Write 3/10 as a decimal.",vis:{type:'tenths',n:3},o:["0.3","0.03","3.0","30"],a:0,why:"Three tenths = 0.3."},
    {q:"Write 75/100 as a decimal.",vis:{type:'dgrid',n:75},o:["0.75","7.5","0.075","75"],a:0,why:"Seventy-five hundredths = 0.75."},
    {q:"Write 8/100 as a decimal.",vis:{type:'dgrid',n:8},o:["0.08","0.8","8.0","0.008"],a:0,why:"Eight hundredths → 0.08."},
    {q:"Write 2 8/10 as a decimal.",vis:{type:'tenths',n:8},o:["2.8","2.08","28","0.28"],a:0,why:"2 ones and 8 tenths = 2.8."},
    {q:"Write 6/10 as hundredths.",o:["60/100","6/100","600/100","16/100"],a:0,why:"Multiply top and bottom by 10 → 60/100."},
    {q:"Which decimal is equivalent to 0.4?",o:["0.40","0.04","4.0","0.004"],a:0,why:"A trailing zero doesn't change the value."},
    {q:"Which is greater, 0.7 or 0.07?",o:["0.7","0.07","they are equal","can't tell"],a:0,why:"7 tenths > 7 hundredths."},
    {q:"Which is greater, 0.25 or 0.3?",o:["0.3","0.25","they are equal","can't tell"],a:0,why:"0.3 = 30 hundredths > 25 hundredths."},
    {q:"Order from least to greatest: 0.4, 0.04, 0.44.",o:["0.04, 0.4, 0.44","0.4, 0.04, 0.44","0.44, 0.4, 0.04","0.04, 0.44, 0.4"],a:0,why:"As hundredths: 4 < 40 < 44."},
    {q:"3/10 + 47/100 =",o:["77/100","50/110","77/10","410/100"],a:0,why:"30/100 + 47/100 = 77/100."},
    {q:"0.75 + 0.2 =",o:["0.95","0.77","0.15","0.955"],a:0,why:"0.75 + 0.20 = 0.95."},
    {q:"$1.24 written as a mixed number of dollars is...",o:["1 24/100","1 24/10","1 2/4","124/10"],a:0,why:"$1.24 is 1 and 24 hundredths of a dollar."},
    {q:"Write 3 dimes as a decimal amount.",o:["$0.30","$0.03","$3.00","$0.13"],a:0,why:"3 dimes = 30 cents = $0.30."},
    {q:"$5.50 + $1.25 =",o:["$6.75","$6.65","$7.75","$6.25"],a:0,why:"$5.50 + $1.25 = $6.75."},
    {q:"$10.00 − $3.75 =",o:["$6.25","$6.75","$7.25","$5.25"],a:0,why:"$10.00 − $3.75 = $6.25."},
    {q:"3 items at $3.75 each cost...",o:["$11.25","$10.25","$11.75","$9.25"],a:0,why:"3 × $3.75 = $11.25."},
    {q:"Split $4.50 equally between 2 people. Each gets...",o:["$2.25","$2.50","$2.05","$9.00"],a:0,why:"$4.50 ÷ 2 = $2.25."},
    {q:"Performance Task: A juice jug holds 6 tenths of a liter. Write that as a decimal.",o:["0.6 L","0.06 L","6.0 L","0.16 L"],a:0,why:"Six tenths = 0.6."},
    {q:"Performance Task: A cup holds 0.45 L. Write that as a fraction of a liter.",o:["45/100","45/10","4/5","45/1000"],a:0,why:"0.45 = 45 hundredths = 45/100."},
    {q:"Performance Task: Which cup has more juice, 0.7 L or 0.65 L?",o:["0.7 L","0.65 L","they are equal","can't tell"],a:0,why:"0.70 > 0.65."},
    {q:"Performance Task: You pour 0.3 L, then 0.25 L, into a pitcher. How much in all?",o:["0.55 L","0.28 L","0.5 L","0.575 L"],a:0,why:"0.30 + 0.25 = 0.55 L."},
    {q:"Performance Task: You sell 4 cups of juice at $1.25 each. How much money in all?",o:["$5.00","$4.25","$5.25","$4.00"],a:0,why:"4 × $1.25 = $5.00."},
    {q:"Performance Task: A customer pays with a $10 bill for $6.75 of juice. What is the change?",o:["$3.25","$3.75","$4.25","$2.25"],a:0,why:"$10.00 − $6.75 = $3.25."}
   ]},

  {id:"g4u11",name:"Understand Measurement",icon:"📏",code:"4.MD",accent:"#0891b2",
   sections:[
    {title:"Length in Metric Units",iv:"numline",
     teach:`<p>The <b>metric system</b> measures length with millimeters (mm), centimeters (cm), meters (m), and kilometers (km). These units are connected by simple powers of ten, which makes converting between them easy.</p>

       <h4 class="ls-sub">The metric length relationships</h4>
       <p>The key facts to know: <b>1 cm = 10 mm</b>, <b>1 m = 100 cm</b>, and <b>1 km = 1,000 m</b>. Each bigger unit is made of many copies of a smaller one. A meter is 100 centimeters long; a kilometer is a thousand meters.</p>

       <h4 class="ls-sub">Convert a larger unit to a smaller unit</h4>
       <p>To change a larger unit into a smaller one, <b>multiply</b> by how many small units fit in one big unit. To find the number of meters in 3 kilometers: 3 × 1,000 = <b>3,000 m</b>. To find centimeters in 9 meters: 9 × 100 = <b>900 cm</b>.</p>

       <h4 class="ls-sub">Make a table</h4>
       <p>A table of equivalent lengths helps you see the pattern. For meters to centimeters: 1 m = 100 cm, 2 m = 200 cm, 3 m = 300 cm, and so on — each row multiplies by 100.</p>
       <div class="reallife"><b>Real life:</b> a doorway is measured in centimeters, a running track in meters, and the distance between towns in kilometers.</div>
       <div class="watchout"><b>Common mistake:</b> dividing when you should multiply. Going from a bigger unit (km) to a smaller unit (m) makes <i>more</i> units, so you multiply.</div>

       <h4 class="ls-sub">Recap</h4>
       <p>1 cm = 10 mm, 1 m = 100 cm, 1 km = 1,000 m. To convert a larger unit to a smaller one, multiply by the number of small units in one big unit.</p>
       <div class="keybox">3 km = 3 × 1,000 = <b>3,000 m</b>.</div>`,
     examples:[
      {title:"Meters in 8 kilometers",steps:["1 km = 1,000 m.","8 × 1,000 = 8,000.","8 km = 8,000 m."]},
      {title:"Centimeters in 7 meters",steps:["1 m = 100 cm.","7 × 100 = 700.","7 m = 700 cm."]},
      {title:"Millimeters in 5 centimeters",steps:["1 cm = 10 mm.","5 × 10 = 50.","5 cm = 50 mm."]}
     ],
     quiz:[
      {q:"1 meter = ___ centimeters.",o:["100","10","1,000","12"],a:0,why:"1 m = 100 cm."},
      {q:"3 km = ___ m",o:["3,000","300","30,000","30"],a:0,why:"3 × 1,000 = 3,000 m."},
      {q:"1 centimeter = ___ millimeters.",o:["10","100","1","1,000"],a:0,why:"1 cm = 10 mm."},
      {q:"7 m = ___ cm",o:["700","70","7,000","17"],a:0,why:"7 × 100 = 700 cm."},
      {q:"5 cm = ___ mm",o:["50","5","500","15"],a:0,why:"5 × 10 = 50 mm."},
      {q:"To convert a larger unit to a smaller unit, you...",o:["multiply","divide","add","subtract"],a:0,why:"A larger unit makes more small units, so multiply."},
      {q:"8 km = ___ m",o:["8,000","800","80,000","80"],a:0,why:"8 × 1,000 = 8,000 m."},
      {q:"Which is the longest?",o:["1 km","1 m","1 cm","1 mm"],a:0,why:"A kilometer is 1,000 meters — the longest here."},
      {q:"6 m = ___ cm",o:["600","60","6,000","16"],a:0,why:"6 × 100 = 600 cm."}
     ]},
    {title:"Mass and Capacity in Metric Units",iv:null,
     teach:`<p>The metric system also measures <b>mass</b> (how heavy something is) and <b>capacity</b> (how much a container holds), again using powers of ten.</p>

       <h4 class="ls-sub">Mass: grams and kilograms</h4>
       <p>Mass is measured in grams (g) and kilograms (kg), where <b>1 kg = 1,000 g</b>. To find grams in 3 kilograms, multiply: 3 × 1,000 = <b>3,000 g</b>.</p>

       <h4 class="ls-sub">Capacity: milliliters and liters</h4>
       <p>Capacity is measured in milliliters (mL) and liters (L), where <b>1 L = 1,000 mL</b>. A container that holds 5 liters holds 5 × 1,000 = <b>5,000 mL</b>.</p>

       <h4 class="ls-sub">Same idea, larger to smaller</h4>
       <p>Just like with length, converting a larger unit to a smaller one means multiplying. Kilograms to grams and liters to milliliters both multiply by 1,000.</p>
       <div class="reallife"><b>Real life:</b> a paperclip's mass is grams, a person's is kilograms; a spoonful is milliliters, a bottle is liters.</div>
       <div class="watchout"><b>Common mistake:</b> mixing up mass and capacity units. Grams and kilograms measure mass; milliliters and liters measure capacity.</div>

       <h4 class="ls-sub">Recap</h4>
       <p>1 kg = 1,000 g and 1 L = 1,000 mL. To convert a larger unit to a smaller one, multiply by 1,000.</p>
       <div class="keybox">3 kg = 3,000 g; 5 L = 5,000 mL.</div>`,
     examples:[
      {title:"Grams in 6 kilograms",steps:["1 kg = 1,000 g.","6 × 1,000 = 6,000.","6 kg = 6,000 g."]},
      {title:"Milliliters in 7 liters",steps:["1 L = 1,000 mL.","7 × 1,000 = 7,000.","7 L = 7,000 mL."]},
      {title:"Grams in 9 kilograms",steps:["9 × 1,000 = 9,000.","So 9 kg = 9,000 g.","Multiplying by 1,000 attaches three zeros."]}
     ],
     quiz:[
      {q:"1 kilogram = ___ grams.",o:["1,000","100","10","1"],a:0,why:"1 kg = 1,000 g."},
      {q:"3 kg = ___ g",o:["3,000","300","30,000","30"],a:0,why:"3 × 1,000 = 3,000 g."},
      {q:"1 liter = ___ milliliters.",o:["1,000","100","10","500"],a:0,why:"1 L = 1,000 mL."},
      {q:"5 L = ___ mL",o:["5,000","500","50,000","50"],a:0,why:"5 × 1,000 = 5,000 mL."},
      {q:"6 kg = ___ g",o:["6,000","600","60,000","60"],a:0,why:"6 × 1,000 = 6,000 g."},
      {q:"Which units measure capacity?",o:["milliliters and liters","grams and kilograms","meters and centimeters","hours and minutes"],a:0,why:"Milliliters and liters measure how much a container holds."},
      {q:"9 L = ___ mL",o:["9,000","900","90,000","90"],a:0,why:"9 × 1,000 = 9,000 mL."},
      {q:"Which units measure mass?",o:["grams and kilograms","liters and milliliters","meters and kilometers","seconds and minutes"],a:0,why:"Grams and kilograms measure mass."},
      {q:"4 kg = ___ g",o:["4,000","400","40,000","40"],a:0,why:"4 × 1,000 = 4,000 g."}
     ]},
    {title:"Length in Customary Units",iv:"numline",
     teach:`<p>The <b>customary system</b> (used in the United States) measures length with inches (in), feet (ft), yards (yd), and miles (mi). Unlike the metric system, these units aren't tens — you have to remember their relationships.</p>

       <h4 class="ls-sub">The customary length relationships</h4>
       <p>The facts to know: <b>1 ft = 12 in</b>, <b>1 yd = 3 ft</b>, and <b>1 mi = 1,760 yd</b>. A foot is a dozen inches, a yard is 3 feet, and a mile is 1,760 yards.</p>

       <h4 class="ls-sub">Convert a larger unit to a smaller unit</h4>
       <p>Just like before, changing a larger unit to a smaller one means you <b>multiply</b>. To find inches in 4 feet: 4 × 12 = <b>48 in</b>. To find feet in 2 yards: 2 × 3 = <b>6 ft</b>.</p>

       <h4 class="ls-sub">Two-step conversions</h4>
       <p>Sometimes you convert twice. To find inches in 7 yards: first yards to feet (7 × 3 = 21 ft), then feet to inches (21 × 12 = <b>252 in</b>). Take it one step at a time.</p>
       <div class="reallife"><b>Real life:</b> your height is measured in feet and inches, a football field in yards, and a road trip in miles.</div>
       <div class="watchout"><b>Common mistake:</b> using 10 for customary conversions. There are 12 inches in a foot, not 10 — customary units aren't based on tens.</div>

       <h4 class="ls-sub">Recap</h4>
       <p>1 ft = 12 in, 1 yd = 3 ft, 1 mi = 1,760 yd. To convert a larger unit to a smaller one, multiply.</p>
       <div class="keybox">4 ft = 4 × 12 = <b>48 in</b>; 2 yd = 2 × 3 = <b>6 ft</b>.</div>`,
     examples:[
      {title:"Inches in 6 feet",steps:["1 ft = 12 in.","6 × 12 = 72.","6 ft = 72 in."]},
      {title:"Feet in 3 yards",steps:["1 yd = 3 ft.","3 × 3 = 9.","3 yd = 9 ft."]},
      {title:"Yards in 2 miles",steps:["1 mi = 1,760 yd.","2 × 1,760 = 3,520.","2 mi = 3,520 yd."]}
     ],
     quiz:[
      {q:"1 foot = ___ inches.",o:["12","10","3","16"],a:0,why:"1 ft = 12 in."},
      {q:"1 yard = ___ feet.",o:["3","12","2","36"],a:0,why:"1 yd = 3 ft."},
      {q:"4 ft = ___ in",o:["48","40","16","44"],a:0,why:"4 × 12 = 48 in."},
      {q:"2 yd = ___ ft",o:["6","5","24","9"],a:0,why:"2 × 3 = 6 ft."},
      {q:"1 mile = ___ yards.",o:["1,760","1,000","5,280","100"],a:0,why:"1 mi = 1,760 yd."},
      {q:"To convert a larger unit to a smaller unit, you...",o:["multiply","divide","add","subtract"],a:0,why:"A larger unit makes more small units, so multiply."},
      {q:"3 yd = ___ ft",o:["9","6","12","30"],a:0,why:"3 × 3 = 9 ft."},
      {q:"7 ft = ___ in",o:["84","70","19","72"],a:0,why:"7 × 12 = 84 in."},
      {q:"Which is the longest?",o:["1 mile","1 yard","1 foot","1 inch"],a:0,why:"A mile is by far the longest customary unit here."}
     ]},
    {title:"Weight in Customary Units",iv:null,
     teach:`<p>The customary system measures <b>weight</b> with ounces (oz), pounds (lb), and tons (T). These are the units you see on scales, food packages, and trucks.</p>

       <h4 class="ls-sub">The customary weight relationships</h4>
       <p>The facts to know: <b>1 lb = 16 oz</b> and <b>1 T = 2,000 lb</b>. A pound is 16 ounces; a ton is 2,000 pounds.</p>

       <h4 class="ls-sub">Convert a larger unit to a smaller unit</h4>
       <p>Multiply to go from a larger unit to a smaller one. To find ounces in 6 pounds: 6 × 16 = <b>96 oz</b>. To find pounds in 5 tons: 5 × 2,000 = <b>10,000 lb</b>.</p>
       <div class="reallife"><b>Real life:</b> a letter weighs ounces, a person weighs pounds, and a truck or whale weighs tons.</div>
       <div class="watchout"><b>Common mistake:</b> using 10 or 12 for pounds-to-ounces. There are 16 ounces in a pound.</div>

       <h4 class="ls-sub">Recap</h4>
       <p>1 lb = 16 oz and 1 T = 2,000 lb. To convert a larger unit to a smaller one, multiply.</p>
       <div class="keybox">6 lb = 6 × 16 = <b>96 oz</b>; 5 T = 5 × 2,000 = <b>10,000 lb</b>.</div>`,
     examples:[
      {title:"Ounces in 3 pounds",steps:["1 lb = 16 oz.","3 × 16 = 48.","3 lb = 48 oz."]},
      {title:"Pounds in 2 tons",steps:["1 T = 2,000 lb.","2 × 2,000 = 4,000.","2 T = 4,000 lb."]},
      {title:"Ounces in 9 pounds",steps:["9 × 16 = 144.","So 9 lb = 144 oz.","Multiply the pounds by 16."]}
     ],
     quiz:[
      {q:"1 pound = ___ ounces.",o:["16","12","10","100"],a:0,why:"1 lb = 16 oz."},
      {q:"1 ton = ___ pounds.",o:["2,000","1,000","200","16"],a:0,why:"1 T = 2,000 lb."},
      {q:"6 lb = ___ oz",o:["96","60","16","72"],a:0,why:"6 × 16 = 96 oz."},
      {q:"5 T = ___ lb",o:["10,000","5,000","1,000","2,500"],a:0,why:"5 × 2,000 = 10,000 lb."},
      {q:"3 lb = ___ oz",o:["48","30","19","36"],a:0,why:"3 × 16 = 48 oz."},
      {q:"Which units measure weight?",o:["ounces, pounds, tons","inches, feet, yards","liters, milliliters","hours, minutes"],a:0,why:"Ounces, pounds, and tons measure weight."},
      {q:"9 lb = ___ oz",o:["144","90","25","160"],a:0,why:"9 × 16 = 144 oz."},
      {q:"2 T = ___ lb",o:["4,000","2,000","400","32"],a:0,why:"2 × 2,000 = 4,000 lb."},
      {q:"Which is the heaviest?",o:["1 ton","1 pound","1 ounce","10 ounces"],a:0,why:"A ton (2,000 lb) is by far the heaviest."}
     ]},
    {title:"Capacity in Customary Units",iv:null,
     teach:`<p>The customary system measures <b>capacity</b> — how much a container holds — with cups (c), pints (pt), quarts (qt), and gallons (gal).</p>

       <h4 class="ls-sub">The customary capacity relationships</h4>
       <p>The facts to know: <b>1 pt = 2 c</b>, <b>1 qt = 2 pt</b>, and <b>1 gal = 4 qt</b>. Each step up doubles (cups to pints to quarts), and a gallon is 4 quarts.</p>

       <h4 class="ls-sub">Convert a larger unit to a smaller unit</h4>
       <p>Multiply to go from a larger unit to a smaller one. To find quarts in 15 gallons: 15 × 4 = <b>60 qt</b>. To find cups in 7 pints: 7 × 2 = <b>14 c</b>.</p>

       <h4 class="ls-sub">Two-step conversions</h4>
       <p>To find cups in 7 quarts: first quarts to pints (7 × 2 = 14 pt), then pints to cups (14 × 2 = <b>28 c</b>). Chain the conversions one step at a time.</p>
       <div class="reallife"><b>Real life:</b> a recipe uses cups and pints, milk comes in quarts and gallons.</div>
       <div class="watchout"><b>Common mistake:</b> forgetting a step in a two-step conversion. Quarts to cups goes through pints — don't skip it.</div>

       <h4 class="ls-sub">Recap</h4>
       <p>1 pt = 2 c, 1 qt = 2 pt, 1 gal = 4 qt. To convert a larger unit to a smaller one, multiply.</p>
       <div class="keybox">15 gal = 15 × 4 = <b>60 qt</b>; 7 pt = 7 × 2 = <b>14 c</b>.</div>`,
     examples:[
      {title:"Cups in 4 pints",steps:["1 pt = 2 c.","4 × 2 = 8.","4 pt = 8 c."]},
      {title:"Pints in 6 quarts",steps:["1 qt = 2 pt.","6 × 2 = 12.","6 qt = 12 pt."]},
      {title:"Quarts in 9 gallons",steps:["1 gal = 4 qt.","9 × 4 = 36.","9 gal = 36 qt."]}
     ],
     quiz:[
      {q:"1 pint = ___ cups.",o:["2","4","8","16"],a:0,why:"1 pt = 2 c."},
      {q:"1 quart = ___ pints.",o:["2","4","1","8"],a:0,why:"1 qt = 2 pt."},
      {q:"1 gallon = ___ quarts.",o:["4","2","8","16"],a:0,why:"1 gal = 4 qt."},
      {q:"4 pt = ___ c",o:["8","6","2","16"],a:0,why:"4 × 2 = 8 cups."},
      {q:"6 qt = ___ pt",o:["12","8","3","24"],a:0,why:"6 × 2 = 12 pints."},
      {q:"9 gal = ___ qt",o:["36","13","18","45"],a:0,why:"9 × 4 = 36 quarts."},
      {q:"1 gallon = ___ cups.",o:["16","8","4","32"],a:0,why:"1 gal = 4 qt = 8 pt = 16 c."},
      {q:"7 qt = ___ c",o:["28","14","21","9"],a:0,why:"7 qt = 14 pt = 28 c."},
      {q:"Which holds the most?",o:["1 gallon","1 quart","1 pint","1 cup"],a:0,why:"A gallon is the largest customary capacity unit here."}
     ]},
    {title:"Make and Interpret Line Plots",iv:"dotplot",
     teach:`<p>A <b>line plot</b> shows data as marks (X's) above a number line. Each X stands for one data value, so the height of a stack tells you how often that value happened. Line plots can even use a <b>fraction scale</b>.</p>

       <h4 class="ls-sub">Making a line plot</h4>
       <p>To make one: draw a number line with a scale that covers all your data values, give the plot a <b>title</b>, <b>label</b> the scale, and put one <b>X</b> for each data value above its spot. If you measured hand lengths to the nearest half inch, your scale might be 4, 4 1/2, 5, 5 1/2, … and you'd stack an X for each measurement.</p>

       <h4 class="ls-sub">Reading a line plot</h4>
       <p>The value with the <b>tallest stack</b> is the most common. The <b>range</b> is the largest value minus the smallest. You can also add up marks to answer "how many in all." A line plot turns a pile of measurements into a picture you can read at a glance.</p>
       <div class="reallife"><b>Real life:</b> scientists and coaches use line plots to spot the most common measurement and see how spread out the data is.</div>
       <div class="watchout"><b>Common mistake:</b> forgetting to label the scale or count every X. Each X is one data value — miss one and your totals are off.</div>

       <h4 class="ls-sub">Recap</h4>
       <p>A line plot stacks an X for each data value over a labeled number line. The tallest stack is the most common value, and the range is the largest minus the smallest.</p>
       <div class="keybox">Tallest stack = most common value; range = greatest − least.</div>`,
     examples:[
      {title:"Find the most common value",steps:["A line plot has 4 X's at 5 in, 2 at 6 in, 1 at 7 in.","The tallest stack is at 5 in (4 X's).","5 in is the most common length."]},
      {title:"Find the range",steps:["Values run from 4 in (smallest) to 7 in (largest).","Range = 7 − 4.","The range is 3 inches."]},
      {title:"Count the data",steps:["Add all the X's: 4 + 2 + 1.","That's 7 X's.","So 7 measurements were taken."]}
     ],
     quiz:[
      {q:"On a line plot, each X stands for...",o:["one data value","ten values","the title","the range"],a:0,why:"Each X represents a single data value."},
      {q:"A line plot has 3 X's at 1/2, 2 at 1, and 4 at 3/2. Which value is most common?",o:["3/2","1/2","1","2"],a:0,why:"3/2 has the tallest stack (4 X's)."},
      {q:"The most common value on a line plot is the one with the...",o:["tallest stack of X's","shortest stack","smallest number","largest number"],a:0,why:"The tallest stack occurs most often."},
      {q:"A line plot's values run from 4 to 7. The range is...",o:["3","4","7","11"],a:0,why:"Range = greatest − least = 7 − 4 = 3."},
      {q:"When you make a line plot, you should always...",o:["give it a title and label the scale","use only whole numbers","draw a bar for each value","skip the number line"],a:0,why:"A clear line plot has a title and a labeled scale."},
      {q:"A line plot has 2 X's at 3 in, 5 at 4 in, 3 at 5 in. How many measurements in all?",o:["10","5","3","2"],a:0,why:"2 + 5 + 3 = 10 X's."},
      {q:"If a line plot's smallest value is 1/4 and largest is 3/4, the range is...",o:["1/2","1","1/4","3/4"],a:0,why:"3/4 − 1/4 = 2/4 = 1/2."},
      {q:"A line plot is best for showing...",o:["how often each value occurs","the area of a shape","a single total","the time of day"],a:0,why:"Line plots show the frequency of each data value."},
      {q:"A line plot shows 1 X at 2 and 6 X's at 5. Which value is most common?",o:["5","2","6","3"],a:0,why:"5 has 6 X's — the tallest stack."}
     ]},
    {title:"Units of Time",iv:null,
     teach:`<p>Time has its own set of units: seconds, minutes, hours, days, weeks, months, and years. Knowing how they relate lets you convert between them.</p>

       <h4 class="ls-sub">The time relationships</h4>
       <p>The facts to know: <b>1 min = 60 sec</b>, <b>1 h = 60 min</b>, <b>1 d = 24 h</b>, <b>1 wk = 7 d</b>, and <b>1 yr = 12 mo = 52 wk</b>.</p>

       <h4 class="ls-sub">Convert a larger unit to a smaller unit</h4>
       <p>As always, multiply to go from a larger unit to a smaller one. To find minutes in 6 hours: 6 × 60 = <b>360 min</b>. To find days in 3 weeks: 3 × 7 = <b>21 d</b>.</p>

       <h4 class="ls-sub">Two-step conversions</h4>
       <p>To find hours in 4 weeks: first weeks to days (4 × 7 = 28 d), then days to hours (28 × 24 = <b>672 h</b>). Take it one step at a time.</p>
       <div class="reallife"><b>Real life:</b> figuring out how many minutes until a show, or how many days until a trip, uses time conversions.</div>
       <div class="watchout"><b>Common mistake:</b> using 100 for time. There are 60 seconds in a minute and 60 minutes in an hour, not 100.</div>

       <h4 class="ls-sub">Recap</h4>
       <p>1 min = 60 sec, 1 h = 60 min, 1 d = 24 h, 1 wk = 7 d. To convert a larger unit to a smaller one, multiply.</p>
       <div class="keybox">6 h = 6 × 60 = <b>360 min</b>; 3 wk = 3 × 7 = <b>21 d</b>.</div>`,
     examples:[
      {title:"Minutes in 6 hours",steps:["1 h = 60 min.","6 × 60 = 360.","6 h = 360 min."]},
      {title:"Days in 8 weeks",steps:["1 wk = 7 d.","8 × 7 = 56.","8 wk = 56 d."]},
      {title:"Seconds in 10 minutes",steps:["1 min = 60 sec.","10 × 60 = 600.","10 min = 600 sec."]}
     ],
     quiz:[
      {q:"1 minute = ___ seconds.",o:["60","100","30","24"],a:0,why:"1 min = 60 sec."},
      {q:"1 hour = ___ minutes.",o:["60","100","24","30"],a:0,why:"1 h = 60 min."},
      {q:"6 h = ___ min",o:["360","300","66","120"],a:0,why:"6 × 60 = 360 min."},
      {q:"1 day = ___ hours.",o:["24","12","60","10"],a:0,why:"1 d = 24 h."},
      {q:"3 wk = ___ d",o:["21","10","28","24"],a:0,why:"3 × 7 = 21 days."},
      {q:"10 min = ___ sec",o:["600","60","100","360"],a:0,why:"10 × 60 = 600 sec."},
      {q:"1 week = ___ days.",o:["7","5","12","24"],a:0,why:"1 wk = 7 d."},
      {q:"8 wk = ___ d",o:["56","48","64","15"],a:0,why:"8 × 7 = 56 days."},
      {q:"To convert hours to minutes, you...",o:["multiply by 60","divide by 60","multiply by 100","add 60"],a:0,why:"Hours to minutes multiplies by 60."}
     ]},
    {title:"Problem Solving: Elapsed Time",iv:null,
     teach:`<p><b>Elapsed time</b> is the amount of time that passes between a start and an end. Many real problems ask you to find it or to check whether there's <b>enough time</b>, often in more than one step.</p>

       <h4 class="ls-sub">Find elapsed time</h4>
       <p>To find elapsed time, count from the start to the end — a number line helps. From 2:15 to 3:00 is 45 minutes; from 3:00 to 3:30 is 30 more; so 2:15 to 3:30 is <b>1 hour 15 minutes</b>.</p>

       <h4 class="ls-sub">"Is there enough time?" problems</h4>
       <p>These are multi-step. Example: <i>A museum closes in 1 1/2 hours. Do you have time to spend 20 minutes at each of 4 exhibits?</i> Step 1: minutes until closing = 1 1/2 × 60 = <b>90 min</b>. Step 2: time needed = 4 × 20 = <b>80 min</b>. Since 80 < 90, <b>yes</b>, there's enough time.</p>
       <div class="reallife"><b>Real life:</b> planning whether you can finish errands before an appointment is an elapsed-time problem.</div>
       <div class="watchout"><b>Common mistake:</b> comparing different units. Convert everything to the same unit (like minutes) before you compare.</div>

       <h4 class="ls-sub">Recap</h4>
       <p>Find elapsed time by counting from start to end. For "enough time" problems, convert to one unit, find the time needed, and compare.</p>
       <div class="keybox">1 1/2 h = 90 min; 4 × 20 min = 80 min; 80 &lt; 90, so there's enough time.</div>`,
     examples:[
      {title:"Elapsed time from 2:15 to 3:30",steps:["2:15 to 3:00 is 45 min.","3:00 to 3:30 is 30 min.","45 + 30 = 1 h 15 min."]},
      {title:"Enough time? (museum)",steps:["1 1/2 h = 90 min until closing.","4 exhibits × 20 min = 80 min needed.","80 < 90, so yes."]},
      {title:"Convert to compare",steps:["A task needs 150 seconds.","150 sec = 2 min 30 sec.","Compare that to the time you have."]}
     ],
     quiz:[
      {q:"Elapsed time is...",o:["the time between a start and an end","the time on the clock now","always one hour","the number of clocks"],a:0,why:"Elapsed time is how much time passes from start to end."},
      {q:"How much time from 2:15 to 3:30?",o:["1 h 15 min","1 h 45 min","45 min","2 h 15 min"],a:0,why:"2:15 → 3:00 is 45 min, then 30 more = 1 h 15 min."},
      {q:"1 1/2 hours is how many minutes?",o:["90","60","120","75"],a:0,why:"1 1/2 × 60 = 90 minutes."},
      {q:"A museum closes in 90 min. You want 20 min at each of 4 exhibits. Is there time?",o:["Yes — 80 min needed is less than 90","No, you need 100 min","No, exactly 90 min","Cannot tell"],a:0,why:"4 × 20 = 80 min, which is less than 90 min."},
      {q:"Before comparing times, you should...",o:["convert them to the same unit","use the larger unit only","round to the nearest hour","ignore the seconds"],a:0,why:"Compare only after converting to one unit."},
      {q:"How much time from 9:40 to 10:10?",o:["30 min","20 min","1 h 10 min","40 min"],a:0,why:"9:40 → 10:00 is 20 min, then 10 more = 30 min."},
      {q:"You have 9 1/2 minutes to do 4 tasks of 150 seconds each. Is there time?",o:["No — you need 10 min, more than 9 1/2","Yes, exactly enough","Yes, with time to spare","Cannot tell"],a:0,why:"150 sec = 2.5 min; 4 × 2.5 = 10 min, which is more than 9 1/2 min."},
      {q:"A movie starts at 4:20 and lasts 1 h 30 min. When does it end?",o:["5:50","5:30","6:20","4:50"],a:0,why:"4:20 + 1 h = 5:20, + 30 min = 5:50."},
      {q:"To find how long until an event, you find the...",o:["elapsed time from now until then","current time","start time only","number of hours in a day"],a:0,why:"The time between now and the event is the elapsed time."}
     ]},
    {title:"Mixed Measures",iv:null,
     teach:`<p>A <b>mixed measure</b> uses two units together, like 3 feet 4 inches or 7 hours 10 minutes. You can add and subtract them by working with each unit — and <b>regrouping</b> when a unit fills up.</p>

       <h4 class="ls-sub">Adding mixed measures</h4>
       <p>Add the small units, then the big units. For 3 ft 4 in + 2 ft 5 in: inches 4 + 5 = 9 in; feet 3 + 2 = 5 ft. The sum is <b>5 ft 9 in</b>. If the inches had added to 12 or more, you'd regroup 12 inches into 1 foot.</p>

       <h4 class="ls-sub">Subtracting with regrouping</h4>
       <p>Sometimes the small unit is too small to subtract. For 7 h 10 min − 4 h 22 min: you can't take 22 min from 10 min, so <b>regroup</b> 1 hour into 60 minutes: 7 h 10 min becomes 6 h 70 min. Now subtract: 70 − 22 = 48 min, and 6 − 4 = 2 h. The difference is <b>2 h 48 min</b>.</p>
       <div class="reallife"><b>Real life:</b> adding travel times (hours and minutes) or heights (feet and inches) uses mixed measures.</div>
       <div class="watchout"><b>Common mistake:</b> forgetting the regroup value. 1 foot is 12 inches and 1 hour is 60 minutes — use the right one when you regroup.</div>

       <h4 class="ls-sub">Recap</h4>
       <p>Add or subtract each unit separately. Regroup when the small unit reaches its limit (12 in = 1 ft, 60 min = 1 h).</p>
       <div class="keybox">7 h 10 min − 4 h 22 min → 6 h 70 min − 4 h 22 min = <b>2 h 48 min</b>.</div>`,
     examples:[
      {title:"Add 3 ft 4 in + 2 ft 5 in",steps:["Inches: 4 + 5 = 9.","Feet: 3 + 2 = 5.","Sum: 5 ft 9 in."]},
      {title:"Add with regrouping",steps:["2 ft 8 in + 1 ft 7 in: inches 8 + 7 = 15.","15 in = 1 ft 3 in; carry 1 ft.","Feet 2 + 1 + 1 = 4 → 4 ft 3 in."]},
      {title:"Subtract with regrouping",steps:["7 h 10 min − 4 h 22 min.","Regroup: 6 h 70 min − 4 h 22 min.","70 − 22 = 48; 6 − 4 = 2 → 2 h 48 min."]}
     ],
     quiz:[
      {q:"A mixed measure uses...",o:["two units together","only one unit","only fractions","only decimals"],a:0,why:"Like 3 ft 4 in — two units together."},
      {q:"3 ft 4 in + 2 ft 5 in =",o:["5 ft 9 in","5 ft 1 in","6 ft 9 in","5 ft 90 in"],a:0,why:"Inches 9, feet 5 → 5 ft 9 in."},
      {q:"2 ft 8 in + 1 ft 7 in =",o:["4 ft 3 in","3 ft 15 in","4 ft 15 in","3 ft 3 in"],a:0,why:"15 in = 1 ft 3 in; 2 + 1 + 1 = 4 → 4 ft 3 in."},
      {q:"To subtract 7 h 10 min − 4 h 22 min, you first...",o:["regroup 1 hour as 60 minutes","subtract the hours only","add the minutes","round to the nearest hour"],a:0,why:"You can't take 22 from 10, so regroup 1 hour into 60 minutes."},
      {q:"7 h 10 min − 4 h 22 min =",o:["2 h 48 min","3 h 12 min","2 h 12 min","2 h 32 min"],a:0,why:"6 h 70 min − 4 h 22 min = 2 h 48 min."},
      {q:"When adding inches that total 12 or more, you regroup 12 inches as...",o:["1 foot","1 yard","1 inch","10 inches"],a:0,why:"12 inches makes 1 foot."},
      {q:"5 lb 6 oz + 2 lb 4 oz =",o:["7 lb 10 oz","7 lb 2 oz","8 lb 10 oz","7 lb 100 oz"],a:0,why:"Ounces 6 + 4 = 10; pounds 5 + 2 = 7 → 7 lb 10 oz."},
      {q:"6 ft 2 in − 2 ft 5 in =",o:["3 ft 9 in","4 ft 3 in","3 ft 3 in","4 ft 9 in"],a:0,why:"Regroup: 5 ft 14 in − 2 ft 5 in = 3 ft 9 in."},
      {q:"When you regroup 1 hour while subtracting time, you add ___ minutes.",o:["60","100","12","10"],a:0,why:"1 hour = 60 minutes."}
     ]}
   ],
   test:[
    {q:"1 m = ___ cm",o:["100","10","1,000","12"],a:0,why:"1 m = 100 cm."},
    {q:"3 km = ___ m",o:["3,000","300","30,000","30"],a:0,why:"3 × 1,000 = 3,000 m."},
    {q:"1 kg = ___ g",o:["1,000","100","10","1"],a:0,why:"1 kg = 1,000 g."},
    {q:"5 L = ___ mL",o:["5,000","500","50,000","50"],a:0,why:"5 × 1,000 = 5,000 mL."},
    {q:"1 ft = ___ in",o:["12","10","16","3"],a:0,why:"1 foot = 12 inches."},
    {q:"4 ft = ___ in",o:["48","40","16","36"],a:0,why:"4 × 12 = 48 inches."},
    {q:"1 mi = ___ yd",o:["1,760","1,000","5,280","100"],a:0,why:"1 mile = 1,760 yards."},
    {q:"1 lb = ___ oz",o:["16","12","10","100"],a:0,why:"1 pound = 16 ounces."},
    {q:"6 lb = ___ oz",o:["96","60","16","72"],a:0,why:"6 × 16 = 96 ounces."},
    {q:"1 T = ___ lb",o:["2,000","1,000","200","16"],a:0,why:"1 ton = 2,000 pounds."},
    {q:"1 gal = ___ qt",o:["4","2","8","16"],a:0,why:"1 gallon = 4 quarts."},
    {q:"15 gal = ___ qt",o:["60","45","30","19"],a:0,why:"15 × 4 = 60 quarts."},
    {q:"7 qt = ___ pt",o:["14","7","28","9"],a:0,why:"1 qt = 2 pt, so 7 × 2 = 14 pints."},
    {q:"1 h = ___ min",o:["60","30","100","24"],a:0,why:"1 hour = 60 minutes."},
    {q:"6 h = ___ min",o:["360","300","66","120"],a:0,why:"6 × 60 = 360 minutes."},
    {q:"8 wk = ___ d",o:["56","48","64","15"],a:0,why:"1 week = 7 days, so 8 × 7 = 56 days."},
    {q:"A line plot shows hand lengths: 4 marks at 5 in, 2 at 6 in, 1 at 7 in. Which length is most common?",o:["5 in","6 in","7 in","4 in"],a:0,why:"5 in has the most marks (4)."},
    {q:"3 ft 4 in + 2 ft 5 in =",o:["5 ft 9 in","5 ft 1 in","6 ft 9 in","5 ft 90 in"],a:0,why:"Inches 4 + 5 = 9; feet 3 + 2 = 5 → 5 ft 9 in."},
    {q:"7 h 10 min − 4 h 22 min =",o:["2 h 48 min","3 h 12 min","2 h 12 min","2 h 32 min"],a:0,why:"Regroup 1 hour: 6 h 70 min − 4 h 22 min = 2 h 48 min."},
    {q:"A museum closes in 1 1/2 hours (90 min). You want 20 minutes at each of 4 exhibits (80 min). Is there enough time?",o:["Yes — 80 min is less than 90 min","No, you need 100 min","No, exactly 90 min","Cannot tell"],a:0,why:"4 × 20 = 80 minutes, which is less than the 90 minutes until closing."},
    {q:"Performance Task: A rover is 2 feet wide. How many inches is that?",o:["24 in","12 in","20 in","26 in"],a:0,why:"2 × 12 = 24 inches."},
    {q:"Performance Task: The rule says a rover must be less than 30 inches wide. Does a 24-inch rover meet it?",o:["Yes — 24 is less than 30","No, it's too wide","No, exactly 30","Cannot tell"],a:0,why:"24 in is less than the 30-in limit."},
    {q:"Performance Task: A rover weighs 22 pounds plus a 48-ounce battery. What is the total weight?",o:["25 lb","24 lb","26 lb","22 lb"],a:0,why:"48 oz = 3 lb; 22 + 3 = 25 lb."},
    {q:"Performance Task: The weight limit is less than 25 pounds. Does a 25-pound rover meet it?",o:["No — 25 is not less than 25","Yes, exactly at the limit","Yes, with room to spare","Cannot tell"],a:0,why:"25 lb is not less than 25 lb, so it fails the limit."},
    {q:"Performance Task: The test track is 1/4 mile long. How many feet is that (1 mile = 5,280 ft)?",o:["1,320 ft","2,640 ft","5,280 ft","1,000 ft"],a:0,why:"1/4 × 5,280 = 1,320 ft."},
    {q:"Performance Task: You drink 5 cups of water; your friend drinks 3 pints. Who drinks more, and by how much?",o:["Your friend, by 1 cup","You, by 2 cups","They are equal","Your friend, by 3 cups"],a:0,why:"3 pints = 6 cups, which is 1 cup more than 5 cups."}
   ]},

  {id:"g4u12",name:"Use Perimeter and Area Formulas",icon:"📐",code:"4.MD",accent:"#7c3aed",
   sections:[
    {title:"Perimeter Formula for a Rectangle",iv:"arearect",
     teach:`<p><b>Perimeter</b> is the distance all the way around a figure. For a rectangle, there's a quick <b>formula</b> — an equation using letters — that relates the length, width, and perimeter.</p>

       <h4 class="ls-sub">The perimeter formula</h4>
       <p>A rectangle has two lengths and two widths. So its perimeter is <b>P = (2 × ℓ) + (2 × w)</b>, where ℓ is the length and w is the width. You double the length, double the width, and add — that covers all four sides.</p>

       <h4 class="ls-sub">Using the formula</h4>
       <p>Find the perimeter of a rectangle that is 24 ft long and 9 ft wide. P = (2 × 24) + (2 × 9) = 48 + 18 = <b>66 ft</b>. You can also add all four sides directly: 24 + 9 + 24 + 9 = 66 ft. Both give the same answer.</p>
       <div class="reallife"><b>Real life:</b> perimeter tells you how much fence to buy for a yard or how much trim to put around a picture.</div>
       <div class="watchout"><b>Common mistake:</b> adding only the length and width once. A rectangle has two of each, so double both before adding.</div>

       <h4 class="ls-sub">Recap</h4>
       <p>Perimeter is the distance around a figure. For a rectangle, P = (2 × ℓ) + (2 × w) — double the length, double the width, and add.</p>
       <div class="keybox">P = (2 × ℓ) + (2 × w). For 24 by 9: (2 × 24) + (2 × 9) = <b>66</b>.</div>`,
     examples:[
      {title:"Perimeter of a 16 by 13 rectangle",steps:["P = (2 × 16) + (2 × 13).","= 32 + 26.","P = 58 units."]},
      {title:"Perimeter of an 8 by 5 rectangle",steps:["P = (2 × 8) + (2 × 5).","= 16 + 10.","P = 26 units."]},
      {title:"Add all four sides",steps:["A 24 by 9 rectangle.","24 + 9 + 24 + 9.","= 66 units."]}
     ],
     quiz:[
      {q:"Perimeter is...",o:["the distance around a figure","the space inside a figure","the length only","half the width"],a:0,why:"Perimeter is the total distance around the outside."},
      {q:"The perimeter formula for a rectangle is...",o:["P = (2 × ℓ) + (2 × w)","P = ℓ × w","P = ℓ + w","P = 4 × ℓ"],a:0,why:"Double the length and width, then add."},
      {q:"Perimeter of a 9 by 4 rectangle?",vis:{type:'arect',l:9,w:4},o:["26","13","36","18"],a:0,why:"(2 × 9) + (2 × 4) = 18 + 8 = 26."},
      {q:"Perimeter of a 16 by 13 rectangle?",vis:{type:'arect',l:16,w:13},o:["58","29","208","42"],a:0,why:"(2 × 16) + (2 × 13) = 32 + 26 = 58."},
      {q:"A rectangle has sides 8, 5, 8, 5. Its perimeter is...",vis:{type:'tri',by:'sides',kind:'isosceles'},o:["26","13","40","18"],a:0,why:"8 + 5 + 8 + 5 = 26."},
      {q:"Why do you double both the length and width?",o:["A rectangle has two lengths and two widths","There are three sides","The width is unused","Perimeter is length times width"],a:0,why:"Opposite sides are equal, so there are two of each."},
      {q:"Perimeter of a 12 by 7 rectangle?",vis:{type:'arect',l:12,w:7},o:["38","19","84","26"],a:0,why:"(2 × 12) + (2 × 7) = 24 + 14 = 38."},
      {q:"A square has all sides 6. Its perimeter is...",o:["24","12","36","18"],a:0,why:"6 + 6 + 6 + 6 = 24 (or 4 × 6)."},
      {q:"Perimeter of a 20 by 15 rectangle?",vis:{type:'arect',l:20,w:15},o:["70","35","300","50"],a:0,why:"(2 × 20) + (2 × 15) = 40 + 30 = 70."}
     ]},
    {title:"Area Formula for a Rectangle",iv:"arearect",
     teach:`<p><b>Area</b> is the amount of surface a figure covers, measured in <b>square units</b>. For a rectangle, the area formula is beautifully simple.</p>

       <h4 class="ls-sub">The area formula</h4>
       <p>The area of a rectangle is <b>A = ℓ × w</b> — length times width. This works because a rectangle can be split into rows of unit squares: the length tells how many squares are in each row, and the width tells how many rows.</p>

       <h4 class="ls-sub">Using the formula</h4>
       <p>Find the area of a rectangle 14 in long and 19 in wide. A = 14 × 19 = <b>266 square inches</b>. Always label area in <b>square</b> units, because you're counting squares.</p>
       <div class="reallife"><b>Real life:</b> area tells you how much carpet covers a floor or how much paint covers a wall.</div>
       <div class="watchout"><b>Common mistake:</b> confusing area and perimeter. Perimeter adds the sides (a distance); area multiplies length by width (a surface, in square units).</div>

       <h4 class="ls-sub">Recap</h4>
       <p>Area is the surface a figure covers, in square units. For a rectangle, A = ℓ × w.</p>
       <div class="keybox">A = ℓ × w. For 14 by 19: 14 × 19 = <b>266</b> square inches.</div>`,
     examples:[
      {title:"Area of a 4 by 6 rectangle",steps:["A = ℓ × w = 4 × 6.","= 24.","Area = 24 square units."]},
      {title:"Area of a 20 by 12 rectangle",steps:["A = 20 × 12.","= 240.","Area = 240 square units."]},
      {title:"Area of an 11 by 7 rectangle",steps:["A = 11 × 7.","= 77.","Area = 77 square units."]}
     ],
     quiz:[
      {q:"Area is...",o:["the surface a figure covers (square units)","the distance around","the length only","twice the width"],a:0,why:"Area is the amount of surface, measured in square units."},
      {q:"The area formula for a rectangle is...",o:["A = ℓ × w","A = 2ℓ + 2w","A = ℓ + w","A = 4 × w"],a:0,why:"Area = length × width."},
      {q:"Area of a 6 by 4 rectangle?",vis:{type:'arect',l:6,w:4},o:["24","20","10","2"],a:0,why:"6 × 4 = 24 square units."},
      {q:"Area of a 14 by 19 rectangle?",vis:{type:'arect',l:14,w:19},o:["266","66","33","256"],a:0,why:"14 × 19 = 266 square units."},
      {q:"Area of an 11 by 7 rectangle?",o:["77","36","18","70"],a:0,why:"11 × 7 = 77 square units."},
      {q:"Area is measured in...",o:["square units","units","half units","cubic units"],a:0,why:"Area counts squares, so it uses square units."},
      {q:"Area of a 20 by 12 rectangle?",vis:{type:'arect',l:20,w:12},o:["240","64","32","220"],a:0,why:"20 × 12 = 240 square units."},
      {q:"How is area different from perimeter?",o:["Area multiplies length × width; perimeter adds the sides","They are the same","Area adds the sides","Perimeter multiplies the sides"],a:0,why:"Area is a surface (multiply); perimeter is a distance (add)."},
      {q:"Area of a 9 by 5 rectangle?",vis:{type:'arect',l:9,w:5},o:["45","28","14","40"],a:0,why:"9 × 5 = 45 square units."}
     ]},
    {title:"Find Unknown Measures",iv:"arearect",
     teach:`<p>The area and perimeter formulas can be used <b>in reverse</b>. If you know the area (or perimeter) and one side of a rectangle, you can find the missing side.</p>

       <h4 class="ls-sub">Find a side from the area</h4>
       <p>Since A = ℓ × w, you can undo the multiplication with division. If the area is 36 sq ft and the length is 12 ft, then 36 = 12 × w, so w = 36 ÷ 12 = <b>3 ft</b>. Divide the area by the known side to get the other side.</p>

       <h4 class="ls-sub">Find a side from the perimeter</h4>
       <p>Since P = (2 × ℓ) + (2 × w), first cut the perimeter in half to get ℓ + w, then subtract the known side. If the perimeter is 30 cm and the length is 8 cm: half of 30 is 15, so ℓ + w = 15, and w = 15 − 8 = <b>7 cm</b>.</p>
       <div class="reallife"><b>Real life:</b> if you know how much fencing you have and one side of a yard, you can figure out the other side.</div>
       <div class="watchout"><b>Common mistake:</b> forgetting to halve the perimeter first. P is the whole way around, so ℓ + w is only half of it.</div>

       <h4 class="ls-sub">Recap</h4>
       <p>From area: divide by the known side (w = A ÷ ℓ). From perimeter: halve it, then subtract the known side (w = P ÷ 2 − ℓ).</p>
       <div class="keybox">Area 36, length 12 → w = 36 ÷ 12 = 3. Perimeter 30, length 8 → w = 15 − 8 = 7.</div>`,
     examples:[
      {title:"Find the width from area",steps:["Area = 24, length = 6.","24 = 6 × w, so w = 24 ÷ 6.","Width = 4."]},
      {title:"Find the length from area",steps:["Area = 75, width = 5.","75 ÷ 5 = 15.","Length = 15."]},
      {title:"Find the width from perimeter",steps:["Perimeter = 30, length = 8.","Half of 30 is 15; 15 − 8 = 7.","Width = 7."]}
     ],
     quiz:[
      {q:"To find a missing side from the area, you...",o:["divide the area by the known side","multiply the sides","add the sides","halve the area"],a:0,why:"A = ℓ × w, so the missing side = A ÷ known side."},
      {q:"Area = 24, length = 6. The width is...",o:["4","18","30","12"],a:0,why:"24 ÷ 6 = 4."},
      {q:"Area = 45, width = 5. The length is...",o:["9","40","50","8"],a:0,why:"45 ÷ 5 = 9."},
      {q:"To find a missing side from the perimeter, you first...",o:["divide the perimeter by 2","multiply by 2","divide by 4","subtract the area"],a:0,why:"Half the perimeter equals length + width."},
      {q:"Perimeter = 20, length = 6. The width is...",o:["4","14","10","8"],a:0,why:"Half of 20 is 10; 10 − 6 = 4."},
      {q:"Perimeter = 30, width = 4. The length is...",o:["11","26","15","7"],a:0,why:"Half of 30 is 15; 15 − 4 = 11."},
      {q:"Area = 63, length = 9. The width is...",o:["7","54","72","8"],a:0,why:"63 ÷ 9 = 7."},
      {q:"Area = 100, one side = 10. The other side is...",o:["10","90","110","20"],a:0,why:"100 ÷ 10 = 10 (it's a square)."},
      {q:"Perimeter = 24, length = 9. The width is...",o:["3","15","12","6"],a:0,why:"Half of 24 is 12; 12 − 9 = 3."}
     ]},
    {title:"Problem Solving: Perimeter and Area",iv:null,
     teach:`<p>Perimeter and area word problems use the same plan — <b>Understand, Plan, Solve, Check</b> — and are often <b>multi-step</b>. The first job is always to decide whether the problem is about <i>distance around</i> (perimeter) or <i>surface covered</i> (area).</p>

       <h4 class="ls-sub">Choose perimeter or area</h4>
       <p>Fencing a yard, framing a picture, or trimming a poster is <b>perimeter</b> (a distance around). Carpeting a floor, painting a wall, or covering a table is <b>area</b> (a surface). Reading carefully tells you which formula to use.</p>

       <h4 class="ls-sub">Two-step problems</h4>
       <p>Some problems combine steps. Example: <i>A board has an area of 1,700 sq in. You cut out a rectangular piece 10 in by 9 in. What area is left?</i> Step 1: the piece's area is 10 × 9 = 90 sq in. Step 2: subtract from the board: 1,700 − 90 = <b>1,610 sq in</b>.</p>
       <div class="reallife"><b>Real life:</b> figuring out how much border to buy and how much space is left after a cut-out are everyday perimeter/area problems.</div>
       <div class="watchout"><b>Common mistake:</b> using area when the problem wants perimeter (or the reverse). Ask: distance around, or surface covered?</div>

       <h4 class="ls-sub">Recap</h4>
       <p>Decide perimeter (distance around) or area (surface covered), then solve step by step and check that the answer is reasonable.</p>
       <div class="keybox">Board 1,700 sq in − cut-out (10 × 9 = 90) = <b>1,610 sq in</b> left.</div>`,
     examples:[
      {title:"Perimeter problem",steps:["A garden is 8 ft by 5 ft. How much fence?","Perimeter = (2 × 8) + (2 × 5) = 26.","26 feet of fence."]},
      {title:"Area problem",steps:["A room is 12 ft by 10 ft. How much carpet?","Area = 12 × 10 = 120.","120 square feet of carpet."]},
      {title:"Two-step: area left after a cut-out",steps:["Board area 1,700 sq in; cut out 10 × 9 = 90.","1,700 − 90 = 1,610.","1,610 sq in left."]}
     ],
     quiz:[
      {q:"The four-step plan is...",o:["Understand, Plan, Solve, Check","Guess, Add, Stop","Read, Skip, Answer","Round, Add, Round"],a:0,why:"Understand, Plan, Solve, then Check."},
      {q:"How much fence to go around an 8 ft by 5 ft garden?",o:["26 ft","40 ft","13 ft","18 ft"],a:0,why:"Perimeter = (2 × 8) + (2 × 5) = 26 ft."},
      {q:"How much carpet to cover a 12 ft by 10 ft room?",o:["120 sq ft","44 sq ft","22 sq ft","120 ft"],a:0,why:"Area = 12 × 10 = 120 sq ft."},
      {q:"'How much ribbon to go around a poster' is a question about...",o:["perimeter","area","volume","weight"],a:0,why:"Distance around means perimeter."},
      {q:"A 20 in by 15 in board has a 5 in by 4 in piece cut out. What area is left?",o:["280 sq in","300 sq in","20 sq in","320 sq in"],a:0,why:"300 − 20 = 280 sq in."},
      {q:"'How much paint to cover a wall' is a question about...",o:["area","perimeter","length","time"],a:0,why:"Surface covered means area."},
      {q:"A rug has an area of 48 sq ft and a length of 8 ft. Its width is...",o:["6 ft","40 ft","56 ft","4 ft"],a:0,why:"48 ÷ 8 = 6 ft."},
      {q:"A frame goes around a 10 in by 7 in photo. How long is the frame (perimeter)?",o:["34 in","70 in","17 in","24 in"],a:0,why:"(2 × 10) + (2 × 7) = 34 in."},
      {q:"A garden is 9 m by 6 m. You want both its fence and its planting area. Perimeter and area are...",o:["30 m and 54 sq m","54 m and 30 sq m","15 m and 15 sq m","30 m and 30 sq m"],a:0,why:"Perimeter = 2(9+6) = 30 m; area = 9 × 6 = 54 sq m."}
     ]}
   ],
   test:[
    {q:"Perimeter is...",o:["the distance around a figure","the surface it covers","the length only","half the width"],a:0,why:"Perimeter is the total distance around."},
    {q:"The perimeter formula for a rectangle is...",o:["P = (2 × ℓ) + (2 × w)","P = ℓ × w","P = ℓ + w","P = 4 × w"],a:0,why:"Double the length and width, then add."},
    {q:"Perimeter of a 9 by 4 rectangle?",vis:{type:'arect',l:9,w:4},o:["26","13","36","18"],a:0,why:"(2 × 9) + (2 × 4) = 26."},
    {q:"Perimeter of a 12 by 7 rectangle?",vis:{type:'arect',l:12,w:7},o:["38","19","84","26"],a:0,why:"(2 × 12) + (2 × 7) = 38."},
    {q:"Area is...",o:["the surface a figure covers","the distance around","the length only","twice the width"],a:0,why:"Area is the surface, in square units."},
    {q:"The area formula for a rectangle is...",o:["A = ℓ × w","A = 2ℓ + 2w","A = ℓ + w","A = 4 × ℓ"],a:0,why:"Area = length × width."},
    {q:"Area of a 6 by 4 rectangle?",vis:{type:'arect',l:6,w:4},o:["24","20","10","2"],a:0,why:"6 × 4 = 24 square units."},
    {q:"Area of an 11 by 7 rectangle?",o:["77","36","18","70"],a:0,why:"11 × 7 = 77 square units."},
    {q:"Area is measured in...",o:["square units","units","half units","cubic units"],a:0,why:"Area counts squares."},
    {q:"The area of a rectangle is 36 sq ft and its length is 12 ft. What is the width?",o:["3 ft","4 ft","24 ft","6 ft"],a:0,why:"36 ÷ 12 = 3 ft, since ℓ × w = 36."},
    {q:"The perimeter of a rectangle is 30 cm and its length is 8 cm. What is the width?",o:["7 cm","15 cm","22 cm","11 cm"],a:0,why:"P/2 = 15; 15 − 8 = 7 cm."},
    {q:"The area of a rectangle is 75 sq m and its width is 5 m. What is the length?",o:["15 m","70 m","80 m","25 m"],a:0,why:"75 ÷ 5 = 15 m."},
    {q:"The perimeter of a rectangle is 42 in and its length is 12 in. What is the width?",o:["9 in","30 in","21 in","18 in"],a:0,why:"P/2 = 21; 21 − 12 = 9 in."},
    {q:"A board has an area of 1,700 sq in. You cut out a 10 in by 9 in piece. What area is left?",o:["1,610 sq in","90 sq in","1,690 sq in","1,700 sq in"],a:0,why:"Piece = 10 × 9 = 90; 1,700 − 90 = 1,610 sq in."},
    {q:"Performance Task: A mural panel has an area of 12 sq ft and a perimeter of 14 ft. What are its dimensions?",o:["3 ft by 4 ft","2 ft by 6 ft","1 ft by 12 ft","3 ft by 5 ft"],a:0,why:"3 × 4 = 12 (area) and 3 + 4 + 3 + 4 = 14 (perimeter)."},
    {q:"Performance Task: A printed tile is 40 in long and 20 in wide. What is its perimeter?",o:["120 in","800 in","60 in","140 in"],a:0,why:"(2 × 40) + (2 × 20) = 80 + 40 = 120 in."},
    {q:"Performance Task: What is the area of that 40 in by 20 in tile?",o:["800 sq in","120 sq in","60 sq in","400 sq in"],a:0,why:"40 × 20 = 800 square inches."},
    {q:"Performance Task: A printer makes 12 tiles per minute. How many tiles in 15 minutes?",o:["180","27","150","120"],a:0,why:"12 × 15 = 180 tiles."},
    {q:"Performance Task: A rectangular frame has an area of 48 sq ft and a length of 8 ft. What is its width?",o:["6 ft","40 ft","56 ft","4 ft"],a:0,why:"48 ÷ 8 = 6 ft."},
    {q:"Performance Task: You work from 3:00 to 5:15 (135 min) split equally among 3 tasks. How long per task?",o:["45 min","40 min","50 min","135 min"],a:0,why:"135 ÷ 3 = 45 minutes each."}
   ]},

  {id:"g4u5",name:"Identify and Draw Lines and Angles",icon:"📐",code:"4.G",accent:"#0ea5e9",
   sections:[
    {title:"Points, Lines, Line Segments, and Rays",iv:null,
     teach:`<p>Geometry starts with a few simple building blocks: <b>points, lines, line segments, and rays</b>. Learning what each one is — and how to name it — is the foundation for everything else.</p>

       <h4 class="ls-sub">Point</h4>
       <p>A <b>point</b> is an exact location in space. It has no size — it's just a spot. We name a point with a single capital letter, like <b>point A</b>.</p>

       <h4 class="ls-sub">Line</h4>
       <p>A <b>line</b> is a straight path of points that goes on forever in <b>both</b> directions (shown with arrows on each end). We name a line using any two points on it, like <b>line CD</b> (or line DC — the order doesn't matter).</p>

       <h4 class="ls-sub">Line segment</h4>
       <p>A <b>line segment</b> is a part of a line with <b>two endpoints</b> and all the points between them. It has a definite length. We name it by its two endpoints, like <b>segment FG</b>.</p>

       <h4 class="ls-sub">Ray</h4>
       <p>A <b>ray</b> is a part of a line with <b>one endpoint</b> that goes on forever in one direction. When you name a ray, you say the <b>endpoint first</b>: <b>ray PQ</b> starts at P and passes through Q.</p>
       <div class="reallife"><b>Real life:</b> a laser beam is like a ray (one start, going straight on), and the edge of a ruler is like a segment (two ends).</div>
       <div class="watchout"><b>Common mistake:</b> naming a ray in the wrong order. A ray's endpoint comes first — ray PQ is different from ray QP.</div>

       <h4 class="ls-sub">Recap</h4>
       <p>A point is a location; a line goes forever both ways; a segment has two endpoints; a ray has one endpoint and goes one way. Name a ray with its endpoint first.</p>
       <div class="keybox">Line = both directions forever. Segment = two endpoints. Ray = one endpoint, one direction.</div>`,
     examples:[
      {title:"Name a figure with two endpoints",steps:["It has two endpoints, F and G.","A part of a line with two endpoints is a segment.","It is segment FG."]},
      {title:"Name a ray",steps:["It starts at P and goes through Q forever.","A ray has one endpoint, named first.","It is ray PQ."]},
      {title:"Another name for line CD",steps:["A line can be named by any two points on it.","Order doesn't matter for a line.","Line CD is also line DC."]}
     ],
     quiz:[
      {q:"A point is...",o:["an exact location in space","a straight path","a part of a line with two endpoints","a turn"],a:0,why:"A point marks an exact location."},
      {q:"A figure that goes on forever in both directions is a...",o:["line","line segment","ray","point"],a:0,why:"A line extends forever both ways."},
      {q:"A part of a line with two endpoints is a...",o:["line segment","line","ray","point"],a:0,why:"A segment has two endpoints."},
      {q:"A part of a line with exactly one endpoint is a...",o:["ray","line","line segment","point"],a:0,why:"A ray has one endpoint and goes one direction."},
      {q:"When naming a ray, which point comes first?",o:["the endpoint","either point","the middle point","the last point"],a:0,why:"A ray is named with its endpoint first."},
      {q:"Another name for line CD is...",o:["line DC","ray CD","segment CD","point C"],a:0,why:"A line can be named by its two points in any order."},
      {q:"Which figure has a definite length?",o:["a line segment","a line","a ray","a point"],a:0,why:"A segment has two endpoints, so it has a length."},
      {q:"A laser beam (one start, going straight forever) is most like a...",o:["ray","line segment","point","line"],a:0,why:"One endpoint going one direction is a ray."},
      {q:"How do you name a point?",o:["with a single capital letter","with two letters","with an arrow","with a number"],a:0,why:"A point is named with one capital letter, like point A."}
     ]},
    {title:"Identify and Draw Angles",iv:"angle",
     teach:`<p>An <b>angle</b> is formed by two rays (or line segments) that share a common endpoint called the <b>vertex</b>. The two rays are the <b>sides</b> of the angle. We name an angle with the symbol ∠, using three letters with the vertex in the middle (like ∠ABC) or just the vertex letter (∠B).</p>

       <h4 class="ls-sub">The four kinds of angles</h4>
       <p>Angles are classified by how far open they are, compared to a square corner (90°):</p>
       <p>• A <b>right angle</b> is exactly 90° — an L-shaped, square corner (often marked with a small square).<br>
          • A <b>straight angle</b> is exactly 180° — it forms a straight line.<br>
          • An <b>acute angle</b> is open <i>less</i> than a right angle (less than 90°).<br>
          • An <b>obtuse angle</b> is open <i>more</i> than a right angle but less than a straight angle (between 90° and 180°).</p>

       <h4 class="ls-sub">Classifying an angle</h4>
       <p>Just compare to 90° and 180°. A 40° angle is less than 90°, so it's <b>acute</b>. A 130° angle is more than 90° but less than 180°, so it's <b>obtuse</b>. A corner that forms a perfect square corner is <b>right</b>.</p>
       <div class="reallife"><b>Real life:</b> the hands of a clock, an open laptop, and a slice of pizza all form angles you can classify.</div>
       <div class="watchout"><b>Common mistake:</b> thinking longer sides make a bigger angle. The angle depends only on how wide the sides <i>open</i>, not their length.</div>

       <h4 class="ls-sub">Recap</h4>
       <p>An angle is two rays meeting at a vertex. Right = 90°, straight = 180°, acute = less than 90°, obtuse = between 90° and 180°.</p>
       <div class="keybox">Right = 90°, straight = 180°, acute &lt; 90°, obtuse between 90° and 180°.</div>`,
     examples:[
      {title:"Classify a 40° angle",steps:["Compare to 90°.","40° is less than 90°.","So it is an acute angle."]},
      {title:"Classify a 130° angle",steps:["Compare to 90° and 180°.","130° is between them.","So it is an obtuse angle."]},
      {title:"Name an angle three ways",steps:["The vertex is B, with sides to A and C.","Use three letters (vertex in the middle): ∠ABC or ∠CBA.","Or just the vertex: ∠B."]}
     ],
     quiz:[
      {q:"An angle is formed by two rays that share a...",o:["vertex","length","curve","circle"],a:0,why:"The common endpoint is the vertex."},
      {q:"A right angle measures...",vis:{type:'angle',deg:90},o:["90°","45°","180°","60°"],a:0,why:"A right angle is exactly 90°."},
      {q:"An angle of 40° is...",vis:{type:'angle',deg:40},o:["acute","right","obtuse","straight"],a:0,why:"Less than 90° → acute."},
      {q:"An angle of 130° is...",vis:{type:'angle',deg:130},o:["obtuse","acute","right","straight"],a:0,why:"Between 90° and 180° → obtuse."},
      {q:"A straight angle measures...",o:["180°","90°","360°","45°"],a:0,why:"A straight angle forms a straight line, 180°."},
      {q:"An angle open more than a right angle but less than a straight angle is...",o:["obtuse","acute","right","straight"],a:0,why:"That's the definition of obtuse."},
      {q:"An angle of 90° is a...",vis:{type:'angle',deg:90},o:["right angle","acute angle","obtuse angle","straight angle"],a:0,why:"Exactly 90° is a right angle."},
      {q:"The size of an angle depends on...",o:["how wide the sides open","the length of the sides","the color of the sides","the number of sides"],a:0,why:"Only the opening matters, not side length."},
      {q:"How do you name the angle with vertex B?",o:["∠B (or ∠ABC)","∠A","∠C","∠AC"],a:0,why:"Use the vertex letter, or three letters with the vertex in the middle."}
     ]},
    {title:"Identify Parallel and Perpendicular Lines",iv:null,
     teach:`<p>Two lines can be described by how they relate to each other: <b>intersecting</b>, <b>parallel</b>, or <b>perpendicular</b>.</p>

       <h4 class="ls-sub">Intersecting lines</h4>
       <p><b>Intersecting lines</b> cross at exactly one point. Wherever two straight lines meet, they intersect.</p>

       <h4 class="ls-sub">Parallel lines</h4>
       <p><b>Parallel lines</b> never intersect — they stay the same distance apart forever, like the two rails of a train track. The symbol ∥ means "is parallel to," so line PQ ∥ line RS reads "line PQ is parallel to line RS."</p>

       <h4 class="ls-sub">Perpendicular lines</h4>
       <p><b>Perpendicular lines</b> intersect to form four <b>right angles</b> — they cross like a perfect plus sign. The symbol ⊥ means "is perpendicular to," so line WX ⊥ line YZ reads "line WX is perpendicular to line YZ." Perpendicular lines are a special kind of intersecting lines.</p>
       <div class="reallife"><b>Real life:</b> the lines on notebook paper are parallel; the corner where two streets meet at a square corner is perpendicular.</div>
       <div class="watchout"><b>Common mistake:</b> calling any crossing lines perpendicular. Only lines that cross at right angles (square corners) are perpendicular.</div>

       <h4 class="ls-sub">Recap</h4>
       <p>Intersecting lines cross at one point; parallel lines never cross; perpendicular lines cross to form right angles.</p>
       <div class="keybox">Parallel = never cross (∥). Perpendicular = cross at right angles (⊥).</div>`,
     examples:[
      {title:"Two lines that never cross",steps:["They stay the same distance apart.","Lines that never intersect are parallel.","Use the symbol ∥."]},
      {title:"Two lines that form square corners",steps:["They cross and make four right angles.","Lines that cross at right angles are perpendicular.","Use the symbol ⊥."]},
      {title:"Two lines that cross once (not at a right angle)",steps:["They meet at exactly one point.","They are intersecting.","But not perpendicular, since no right angle forms."]}
     ],
     quiz:[
      {q:"Lines that never cross are...",o:["parallel","perpendicular","intersecting","curved"],a:0,why:"Parallel lines never intersect."},
      {q:"Lines that cross to form right angles are...",o:["perpendicular","parallel","curved","points"],a:0,why:"Perpendicular lines meet at right angles."},
      {q:"Lines that cross at exactly one point are...",o:["intersecting","parallel","never touching","the same line"],a:0,why:"Intersecting lines cross at one point."},
      {q:"The symbol ∥ means...",o:["is parallel to","is perpendicular to","is equal to","is greater than"],a:0,why:"∥ means 'is parallel to.'"},
      {q:"The symbol ⊥ means...",o:["is perpendicular to","is parallel to","is a ray","is a point"],a:0,why:"⊥ means 'is perpendicular to.'"},
      {q:"The rails of a train track are...",o:["parallel","perpendicular","intersecting at a point","rays"],a:0,why:"They stay the same distance apart and never cross."},
      {q:"Perpendicular lines are a special kind of...",o:["intersecting lines","parallel lines","points","rays"],a:0,why:"They intersect — at right angles."},
      {q:"How many right angles do perpendicular lines form?",o:["4","1","2","0"],a:0,why:"Two perpendicular lines make four right angles."},
      {q:"Two crossing lines that do NOT form right angles are...",o:["intersecting but not perpendicular","parallel","perpendicular","the same line"],a:0,why:"They intersect, but perpendicular requires right angles."}
     ]},
    {title:"Understand Degrees",iv:"angle",
     teach:`<p>Angles are measured in units called <b>degrees</b>, shown with the symbol °. Understanding degrees means connecting angles to <b>parts of a circle</b>.</p>

       <h4 class="ls-sub">A circle has 360 degrees</h4>
       <p>Think of a full turn all the way around a point as a circle divided into <b>360 equal parts</b>. An angle that turns through <b>1/360 of a circle</b> measures <b>1°</b> — a "one-degree angle." A full circle is 360°.</p>

       <h4 class="ls-sub">From a fraction of a circle to degrees</h4>
       <p>To find the measure of an angle that turns through a fraction of a circle, <b>multiply the fraction by 360</b>. An angle that turns 1/4 of a circle measures 1/4 × 360 = <b>90°</b>. An angle that turns 20/360 of a circle measures <b>20°</b>.</p>

       <h4 class="ls-sub">Special turns</h4>
       <p>A quarter turn (1/4 of a circle) is a right angle, <b>90°</b>. A half turn (1/2 of a circle) is a straight angle, <b>180°</b>. A full turn is <b>360°</b>. These come straight from the fractions.</p>
       <div class="reallife"><b>Real life:</b> a clock face is a circle of 360°, so the minute hand sweeps through degrees as time passes.</div>
       <div class="watchout"><b>Common mistake:</b> forgetting there are 360° in a circle. That's the whole; every angle is a fraction of it.</div>

       <h4 class="ls-sub">Recap</h4>
       <p>A circle is 360°; a 1° angle turns through 1/360 of it. To find an angle's measure, multiply its fraction of a circle by 360.</p>
       <div class="keybox">1/4 of a circle = 1/4 × 360 = <b>90°</b>; a full circle = 360°.</div>`,
     examples:[
      {title:"Angle that turns 1/6 of a circle",steps:["Multiply the fraction by 360.","1/6 × 360 = 60.","The angle measures 60°."]},
      {title:"Angle that turns 20/360 of a circle",steps:["20/360 of the full 360°.","20/360 × 360 = 20.","The angle measures 20°."]},
      {title:"A right angle as a fraction",steps:["A right angle is a quarter turn.","1/4 of a circle = 1/4 × 360.","= 90°."]}
     ],
     quiz:[
      {q:"Angles are measured in...",o:["degrees","inches","grams","seconds"],a:0,why:"Angles are measured in degrees (°)."},
      {q:"A full circle measures...",o:["360°","180°","90°","100°"],a:0,why:"A full turn is 360°."},
      {q:"An angle that turns 1/360 of a circle measures...",o:["1°","10°","360°","100°"],a:0,why:"That's the definition of a one-degree angle."},
      {q:"To find an angle's measure from its fraction of a circle, you...",o:["multiply the fraction by 360","add 360","divide 360 by the fraction","subtract from 360"],a:0,why:"Multiply the fraction of a circle by 360."},
      {q:"An angle that turns 1/4 of a circle measures...",o:["90°","45°","360°","180°"],a:0,why:"1/4 × 360 = 90°."},
      {q:"1/6 of a circle is how many degrees?",o:["60°","6°","30°","66°"],a:0,why:"1/6 × 360 = 60°."},
      {q:"An angle turns 20/360 of a circle. Its measure is...",o:["20°","36°","340°","200°"],a:0,why:"20/360 × 360 = 20°."},
      {q:"A right angle is what fraction of a circle?",o:["1/4","1/2","1/3","1/90"],a:0,why:"A right angle is a quarter turn of the circle."},
      {q:"An angle that turns 1/2 of a circle measures...",o:["180°","90°","360°","120°"],a:0,why:"1/2 × 360 = 180° (a straight angle)."}
     ]},
    {title:"Find Angle Measures",iv:"angle",
     teach:`<p>You can find the measure of an unknown angle by <b>combining angles you already know</b> — a trick that works beautifully with pattern blocks.</p>

       <h4 class="ls-sub">Start from a known angle</h4>
       <p>Each angle of a triangle pattern block measures <b>60°</b>. If you fit two of those angles together at a point, the larger angle they form is 60° + 60° = <b>120°</b>. Fit three together and you get 60° × 3 = <b>180°</b> — a straight angle.</p>

       <h4 class="ls-sub">Use blocks to measure other angles</h4>
       <p>Because a square's corner is 90° and a triangle block's angle is 60°, you can build and measure many angles by combining them. An angle equal to two triangle-block angles measures 120°; an angle equal to a square corner plus a triangle angle measures 90° + 60° = 150°.</p>

       <h4 class="ls-sub">Angles around a point</h4>
       <p>All the angles that fit around a single point add up to a full circle, <b>360°</b>. So six 60° angles fit around a point (6 × 60 = 360), and four 90° angles fit around a point (4 × 90 = 360).</p>
       <div class="reallife"><b>Real life:</b> tiles and pattern blocks fit together because their angles add up neatly around each point.</div>
       <div class="watchout"><b>Common mistake:</b> forgetting the pieces must add to the whole. Angles around a point always total 360°.</div>

       <h4 class="ls-sub">Recap</h4>
       <p>Combine known angle measures to find unknown ones. A triangle-block angle is 60°; angles around a point total 360°.</p>
       <div class="keybox">Two 60° angles = 120°; six 60° angles fill a full circle (360°).</div>`,
     examples:[
      {title:"Two triangle-block angles",steps:["Each triangle angle is 60°.","60° + 60° = 120°.","The combined angle is 120°."]},
      {title:"How many 60° angles make a straight angle?",steps:["A straight angle is 180°.","180 ÷ 60 = 3.","Three 60° angles make a straight angle."]},
      {title:"Angles around a point",steps:["A full turn around a point is 360°.","Six 60° angles: 6 × 60 = 360.","So six of them fit around the point."]}
     ],
     quiz:[
      {q:"Each angle of a triangle pattern block measures...",o:["60°","90°","45°","30°"],a:0,why:"A triangle pattern block has three 60° angles."},
      {q:"Two 60° angles together make...",o:["120°","66°","30°","6°"],a:0,why:"60° + 60° = 120°."},
      {q:"Three 60° angles together make...",o:["180°","120°","90°","360°"],a:0,why:"60° × 3 = 180° (a straight angle)."},
      {q:"A square pattern block's corner measures...",o:["90°","60°","45°","180°"],a:0,why:"A square corner is a right angle, 90°."},
      {q:"How many 60° angles fit in a straight angle (180°)?",o:["3","2","4","6"],a:0,why:"180 ÷ 60 = 3."},
      {q:"An angle equal to two triangle-block angles measures...",o:["120°","60°","90°","180°"],a:0,why:"2 × 60° = 120°."},
      {q:"Angles all the way around a point add up to...",o:["360°","180°","90°","100°"],a:0,why:"A full turn is 360°."},
      {q:"How many 90° angles fit around a point?",o:["4","2","3","6"],a:0,why:"360 ÷ 90 = 4."},
      {q:"A 90° angle plus a 60° angle measures...",o:["150°","30°","180°","96°"],a:0,why:"90° + 60° = 150°."}
     ]},
    {title:"Measure and Draw Angles",iv:"angle",
     teach:`<p>A <b>protractor</b> is the tool for measuring and drawing angles. It's a half-circle marked from 0° to 180°.</p>

       <h4 class="ls-sub">Measuring an angle</h4>
       <p>To measure an angle: place the protractor's <b>center on the vertex</b>, line up one side of the angle with the <b>0°</b> mark, then read the number where the <b>other side</b> crosses the scale. A protractor has two scales (an inner and outer one) — be sure to read the one that starts at 0° on your first side.</p>

       <h4 class="ls-sub">Drawing an angle</h4>
       <p>To draw an angle of a given size, say 65°: draw one ray, place the protractor's center on its endpoint with the ray at 0°, make a mark at 65°, then draw a new ray from the endpoint through that mark. The result is a 65° angle.</p>

       <h4 class="ls-sub">Classify after measuring</h4>
       <p>Once you have the measure, classify it: less than 90° is acute, exactly 90° is right, between 90° and 180° is obtuse. Measuring and classifying go hand in hand.</p>
       <div class="reallife"><b>Real life:</b> carpenters, artists, and engineers use protractors to measure and draw precise angles.</div>
       <div class="watchout"><b>Common mistake:</b> reading the wrong scale. Start counting from the 0° that lines up with your first side.</div>

       <h4 class="ls-sub">Recap</h4>
       <p>Put the protractor's center on the vertex, align one side with 0°, and read where the other side crosses. To draw, mark the degree and draw a ray. Then classify the angle.</p>
       <div class="keybox">Center on vertex, one side on 0°, read the other side's mark.</div>`,
     examples:[
      {title:"Measure an angle",steps:["Place the center on the vertex.","Line up one side with 0°.","Read where the other side crosses: say 50°."]},
      {title:"Draw a 65° angle",steps:["Draw one ray and put the center on its endpoint.","Mark a point at 65°.","Draw a ray through the mark."]},
      {title:"Measure then classify",steps:["You measure an angle as 110°.","110° is between 90° and 180°.","So it is an obtuse angle."]}
     ],
     quiz:[
      {q:"A protractor is used to...",o:["measure and draw angles","measure length","weigh objects","tell time"],a:0,why:"A protractor measures and draws angles."},
      {q:"When measuring, you place the protractor's center on the...",o:["vertex","longest side","0° mark only","midpoint of a side"],a:0,why:"The center goes on the angle's vertex."},
      {q:"One side of the angle should line up with the...",o:["0° mark","90° mark","180° mark","center"],a:0,why:"Align one side with 0°, then read the other side."},
      {q:"You measure an angle as 50°. It is...",o:["acute","right","obtuse","straight"],a:0,why:"Less than 90° → acute."},
      {q:"You measure an angle as 110°. It is...",o:["obtuse","acute","right","straight"],a:0,why:"Between 90° and 180° → obtuse."},
      {q:"To draw a 65° angle, you first...",o:["draw one ray and align it with 0°","draw a full circle","measure a length","mark 90°"],a:0,why:"Draw a starting ray at 0°, then mark 65°."},
      {q:"A protractor is marked from...",o:["0° to 180°","0° to 90°","0° to 360°","1 to 100"],a:0,why:"A standard protractor is a half circle, 0° to 180°."},
      {q:"You measure an angle as exactly 90°. It is a...",o:["right angle","acute angle","obtuse angle","straight angle"],a:0,why:"Exactly 90° is a right angle."},
      {q:"Why does a protractor have two scales?",o:["so you can start from 0° on either side","to measure length too","to draw circles","for decoration"],a:0,why:"Read the scale that starts at 0° on your first side."}
     ]},
    {title:"Add Angle Measures",iv:"angle",
     teach:`<p>When a larger angle is split into smaller angles that don't overlap, the measure of the whole equals the <b>sum</b> of the parts. This lets you add angle measures.</p>

       <h4 class="ls-sub">Adjacent angles</h4>
       <p>Two angles are <b>adjacent</b> when they share a common vertex and a common side, but don't overlap. When two adjacent angles form a larger angle, the larger angle's measure is the sum of the two smaller ones.</p>

       <h4 class="ls-sub">The whole equals the sum of the parts</h4>
       <p>If ray BD splits angle ABC into ∠ABD and ∠DBC, then <b>∠ABD + ∠DBC = ∠ABC</b>. For example, if ∠ABD = 32° and ∠DBC = 41°, then ∠ABC = 32° + 41° = <b>73°</b>.</p>

       <h4 class="ls-sub">Write an equation</h4>
       <p>You can write an equation to find a missing part. If the whole angle ∠WXY = 90° and one part ∠WXZ = 32°, then 32° + ∠ZXY = 90°, so the other part is 90° − 32° = <b>58°</b>.</p>
       <div class="reallife"><b>Real life:</b> a folding ramp or a pair of scissors forms angles that add up as they open.</div>
       <div class="watchout"><b>Common mistake:</b> the parts must not overlap. Adjacent angles share only a side, and together they make the whole.</div>

       <h4 class="ls-sub">Recap</h4>
       <p>Adjacent angles share a vertex and a side. The measure of the whole angle is the sum of its non-overlapping parts.</p>
       <div class="keybox">∠ABD + ∠DBC = ∠ABC. If 32° + 41°, then ∠ABC = <b>73°</b>.</div>`,
     examples:[
      {title:"Add two adjacent angles",steps:["∠ABD = 32° and ∠DBC = 41°.","∠ABC = 32° + 41°.","∠ABC = 73°."]},
      {title:"Find a missing part",steps:["Whole ∠WXY = 90°, part ∠WXZ = 32°.","32° + ∠ZXY = 90°.","∠ZXY = 90° − 32° = 58°."]},
      {title:"Three parts of a straight angle",steps:["A straight angle is 180°.","Two parts are 60° and 70°.","The third is 180° − 60° − 70° = 50°."]}
     ],
     quiz:[
      {q:"Two angles that share a vertex and a side (without overlapping) are...",o:["adjacent","parallel","perpendicular","equal"],a:0,why:"Adjacent angles share a vertex and a common side."},
      {q:"When an angle is split into non-overlapping parts, the whole equals...",o:["the sum of the parts","the difference of the parts","the largest part","half the parts"],a:0,why:"The whole is the sum of its parts."},
      {q:"∠ABD = 32° and ∠DBC = 41°. What is ∠ABC?",o:["73°","9°","32°","41°"],a:0,why:"32° + 41° = 73°."},
      {q:"The whole angle is 90° and one part is 32°. The other part is...",o:["58°","122°","32°","68°"],a:0,why:"90° − 32° = 58°."},
      {q:"∠WXZ = 45° and ∠ZXY = 30°. What is ∠WXY?",o:["75°","15°","45°","30°"],a:0,why:"45° + 30° = 75°."},
      {q:"A straight angle (180°) is split into 60° and one other angle. The other is...",o:["120°","240°","60°","90°"],a:0,why:"180° − 60° = 120°."},
      {q:"To find a missing part of an angle, you...",o:["subtract the known part from the whole","add the whole to the part","multiply the parts","divide by 2"],a:0,why:"whole − known part = missing part."},
      {q:"∠PQS = 43° and ∠SQR = 77°. What is ∠PQR?",o:["120°","34°","43°","77°"],a:0,why:"43° + 77° = 120°."},
      {q:"Adjacent angles must NOT...",o:["overlap","share a vertex","share a side","be angles"],a:0,why:"Adjacent angles share a side but do not overlap."}
     ]},
    {title:"Find Unknown Angle Measures",iv:"angle",
     teach:`<p>Some pairs of angles have special names based on how they add up, and you can use those relationships to find an unknown angle by writing and solving an equation.</p>

       <h4 class="ls-sub">Complementary angles</h4>
       <p>When a right angle (90°) is split into two adjacent angles, the two angles are <b>complementary</b> — their measures add to <b>90°</b>. If ∠DEG and ∠GEF are complementary and ∠GEF = 35°, then ∠DEG = 90° − 35° = <b>55°</b>.</p>

       <h4 class="ls-sub">Supplementary angles</h4>
       <p>When a straight angle (180°) is split into two adjacent angles, the two angles are <b>supplementary</b> — their measures add to <b>180°</b>. If two supplementary angles include one that measures 62°, the other is 180° − 62° = <b>118°</b>.</p>

       <h4 class="ls-sub">Write and solve an equation</h4>
       <p>Set up an equation from the relationship. For complementary angles: x + 35 = 90, so x = 55. For supplementary: x + 62 = 180, so x = 118. Then check by adding to make sure you get 90° or 180°.</p>
       <div class="reallife"><b>Real life:</b> the angles a ramp makes with the floor and the wall can be complementary; a folding table's angles can be supplementary.</div>
       <div class="watchout"><b>Common mistake:</b> mixing up the two. Complementary adds to 90°, supplementary adds to 180°.</div>

       <h4 class="ls-sub">Recap</h4>
       <p>Complementary angles add to 90°; supplementary angles add to 180°. Write an equation and subtract to find the unknown.</p>
       <div class="keybox">Complementary → sum 90°; supplementary → sum 180°. If x + 35 = 90, x = <b>55°</b>.</div>`,
     examples:[
      {title:"Complementary angles",steps:["∠DEG + ∠GEF = 90°, and ∠GEF = 35°.","x + 35 = 90.","x = 55°."]},
      {title:"Supplementary angles",steps:["Two supplementary angles; one is 62°.","x + 62 = 180.","x = 118°."]},
      {title:"Find an unknown along a straight line",steps:["∠NLM and 62° form a straight angle.","x + 62 = 180.","x = 118°."]}
     ],
     quiz:[
      {q:"Two angles that add to 90° are...",o:["complementary","supplementary","adjacent only","equal"],a:0,why:"Complementary angles sum to 90°."},
      {q:"Two angles that add to 180° are...",o:["supplementary","complementary","acute","right"],a:0,why:"Supplementary angles sum to 180°."},
      {q:"∠DEG and ∠GEF are complementary. If ∠GEF = 35°, then ∠DEG =",o:["55°","65°","145°","35°"],a:0,why:"90° − 35° = 55°."},
      {q:"Two supplementary angles include one of 62°. The other is...",o:["118°","28°","62°","98°"],a:0,why:"180° − 62° = 118°."},
      {q:"Complementary angles add to...",o:["90°","180°","360°","45°"],a:0,why:"Complementary means a sum of 90°."},
      {q:"Supplementary angles add to...",o:["180°","90°","360°","100°"],a:0,why:"Supplementary means a sum of 180°."},
      {q:"If x + 40 = 90 (complementary), then x =",o:["50°","130°","40°","60°"],a:0,why:"90° − 40° = 50°."},
      {q:"If x + 110 = 180 (supplementary), then x =",o:["70°","90°","110°","290°"],a:0,why:"180° − 110° = 70°."},
      {q:"∠NLM and 62° form a straight angle. ∠NLM =",o:["118°","28°","62°","128°"],a:0,why:"A straight angle is 180°: 180° − 62° = 118°."}
     ]}
   ],
   test:[
    {q:"A point is...",o:["an exact location in space","a straight path","a turn","a square corner"],a:0,why:"A point marks an exact location."},
    {q:"A line extends forever in...",o:["both directions","one direction","no direction","a circle"],a:0,why:"A line goes on forever both ways."},
    {q:"A ray has how many endpoints?",o:["one","two","zero","three"],a:0,why:"A ray has one endpoint and goes one direction."},
    {q:"Another name for line CD is...",o:["line DC","ray CD","segment CD","point D"],a:0,why:"A line can be named by its two points in any order."},
    {q:"The shared endpoint of an angle's two rays is the...",o:["vertex","side","degree","arc"],a:0,why:"The common endpoint is the vertex."},
    {q:"An angle of 90° is a...",vis:{type:'angle',deg:90},o:["right angle","acute angle","obtuse angle","straight angle"],a:0,why:"Exactly 90° is a right angle."},
    {q:"An angle of 140° is...",vis:{type:'angle',deg:140},o:["obtuse","acute","right","straight"],a:0,why:"Between 90° and 180° → obtuse."},
    {q:"An angle of 40° is...",vis:{type:'angle',deg:40},o:["acute","right","obtuse","straight"],a:0,why:"Less than 90° → acute."},
    {q:"Lines that never cross are...",o:["parallel","perpendicular","intersecting","rays"],a:0,why:"Parallel lines never intersect."},
    {q:"Lines that cross to form right angles are...",o:["perpendicular","parallel","curved","points"],a:0,why:"Perpendicular lines meet at right angles."},
    {q:"A full circle measures...",o:["360°","180°","90°","100°"],a:0,why:"A full turn is 360°."},
    {q:"An angle that turns 1/4 of a circle measures...",o:["90°","45°","180°","360°"],a:0,why:"1/4 × 360 = 90°."},
    {q:"1/6 of 360° is...",o:["60°","6°","30°","66°"],a:0,why:"1/6 × 360 = 60°."},
    {q:"Each angle of a triangle pattern block measures...",o:["60°","90°","45°","30°"],a:0,why:"A triangle pattern block has 60° angles."},
    {q:"Two 60° angles together make...",o:["120°","66°","30°","6°"],a:0,why:"60° + 60° = 120°."},
    {q:"A protractor is used to...",o:["measure and draw angles","measure length","weigh objects","tell time"],a:0,why:"A protractor measures and draws angles."},
    {q:"To draw a 65° angle, you first line up one ray with the...",o:["0° mark","90° mark","180° mark","center only"],a:0,why:"Align a starting ray with 0°, then mark 65°."},
    {q:"∠ABD = 32° and ∠DBC = 41°. What is ∠ABC?",o:["73°","9°","32°","41°"],a:0,why:"32° + 41° = 73°."},
    {q:"Two angles that share a vertex and a side without overlapping are...",o:["adjacent","parallel","perpendicular","equal"],a:0,why:"That's the definition of adjacent angles."},
    {q:"Complementary angles add to...",o:["90°","180°","360°","45°"],a:0,why:"Complementary means a sum of 90°."},
    {q:"Supplementary angles add to...",o:["180°","90°","360°","100°"],a:0,why:"Supplementary means a sum of 180°."},
    {q:"∠DEG and ∠GEF are complementary. If ∠GEF = 35°, then ∠DEG =",o:["55°","65°","145°","35°"],a:0,why:"90° − 35° = 55°."},
    {q:"Performance Task: A path drawn straight through points R and S, with no endpoints, is a...",o:["line","ray","line segment","point"],a:0,why:"No endpoints and straight forever both ways is a line."},
    {q:"Performance Task: Two paths cross to form square corners. They are...",o:["perpendicular","parallel","never crossing","rays"],a:0,why:"Crossing at right angles means perpendicular."},
    {q:"Performance Task: ∠ABD turns through 1/6 of a circle. What is its measure?",o:["60°","6°","36°","66°"],a:0,why:"1/6 × 360 = 60°."},
    {q:"Performance Task: ∠DBC measures 90°. Classify it.",o:["right angle","acute angle","obtuse angle","straight angle"],a:0,why:"Exactly 90° is a right angle."},
    {q:"Performance Task: A new path splits the 90° angle ∠DBC exactly in half. Each part measures...",o:["45°","30°","90°","60°"],a:0,why:"90° ÷ 2 = 45°."},
    {q:"Performance Task: ∠XYZ is split into ∠XYW (28°) and ∠WYZ (35°). What is ∠XYZ?",o:["63°","7°","28°","35°"],a:0,why:"28° + 35° = 63°."}
   ]},
  {id:"g4u14",name:"Identify Symmetry and Two-Dimensional Shapes",icon:"🔷",code:"4.G",accent:"#d946ef",
   sections:[
    {title:"Line Symmetry",iv:null,
     teach:`<p>Some shapes have a special kind of balance: you could fold them in half and the two halves would land right on top of each other. That balance is called <b>line symmetry</b>, and the fold line is a <b>line of symmetry</b>.</p>

       <h4 class="ls-sub">What line symmetry means</h4>
       <p>A figure has <b>line symmetry</b> when it can be folded along a straight line so that the two parts match <b>exactly</b>. The fold line is called the <b>line of symmetry</b>. The two halves on either side of that line are <b>mirror images</b> of each other.</p>

       <h4 class="ls-sub">Shapes can have 0, 1, or many lines</h4>
       <p>A shape can have no lines of symmetry, one, or many. A <b>square</b> has <b>4</b> lines of symmetry. A (non-square) <b>rectangle</b> has <b>2</b>. An <b>equilateral triangle</b> has <b>3</b>. A <b>circle</b> has countless (infinitely many) lines of symmetry. A shape like a scalene triangle has <b>0</b>.</p>

       <h4 class="ls-sub">Letters have symmetry too</h4>
       <p>The letter <b>A</b> has one line of symmetry (a vertical fold down the middle). The letter <b>X</b> has two. But a letter like <b>R</b> has none — no fold makes the two halves match.</p>
       <div class="reallife"><b>Real life:</b> butterflies, human faces, snowflakes, and many logos are built on line symmetry.</div>
       <div class="watchout"><b>Common mistake:</b> thinking any line that cuts a shape into two equal-area pieces is a line of symmetry. It only counts if the two halves are <i>mirror images</i>. A diagonal of a long rectangle splits it into equal areas but is <b>not</b> a line of symmetry.</div>

       <h4 class="ls-sub">Recap</h4>
       <p>A figure has line symmetry if a fold makes the two halves match exactly. That fold is the line of symmetry, and the halves are mirror images.</p>
       <div class="keybox">Square = 4 lines, rectangle = 2, equilateral triangle = 3, scalene triangle = 0.</div>`,
     examples:[
      {title:"Does a rectangle have line symmetry?",steps:["Fold it top-to-bottom — the halves match.","Fold it left-to-right — the halves match.","Yes: a rectangle has 2 lines of symmetry."]},
      {title:"How many lines does a square have?",steps:["Fold vertically and horizontally: 2 lines.","Fold along each diagonal: 2 more.","A square has 4 lines of symmetry."]},
      {title:"Does the letter R have line symmetry?",steps:["Try folding it any way.","No fold makes the two halves match.","So R has 0 lines of symmetry."]}
     ],
     quiz:[
      {q:"A shape has line symmetry when it can be folded so the two halves...",o:["match exactly","have equal area only","are different colors","overlap partly"],a:0,why:"The two parts must match exactly."},
      {q:"The fold line is called the...",o:["line of symmetry","vertex","diagonal","perimeter"],a:0,why:"That fold line is the line of symmetry."},
      {q:"How many lines of symmetry does a square have?",vis:{type:'sym',shape:'square',showLines:false},o:["4","2","1","3"],a:0,why:"Vertical, horizontal, and 2 diagonals → 4."},
      {q:"How many lines of symmetry does a (non-square) rectangle have?",vis:{type:'sym',shape:'rectangle',showLines:false},o:["2","4","1","0"],a:0,why:"One horizontal and one vertical → 2."},
      {q:"An equilateral triangle has how many lines of symmetry?",o:["3","1","2","0"],a:0,why:"One through each vertex → 3."},
      {q:"Which letter has a line of symmetry?",o:["A","R","P","F"],a:0,why:"A folds down the middle into matching halves."},
      {q:"A scalene triangle has how many lines of symmetry?",o:["0","1","2","3"],a:0,why:"No sides match, so no fold works → 0."},
      {q:"A circle has how many lines of symmetry?",o:["countless (infinitely many)","4","2","1"],a:0,why:"Any line through the center works."},
      {q:"The two halves on either side of a line of symmetry are...",o:["mirror images","different shapes","always squares","never equal"],a:0,why:"They are mirror images of each other."}
     ]},
    {title:"Draw Symmetric Shapes",iv:null,
     teach:`<p>If you know <b>one half</b> of a symmetric figure and where the <b>line of symmetry</b> is, you can draw the other half. Every point simply reflects across the line.</p>

       <h4 class="ls-sub">Reflect each point across the line</h4>
       <p>To complete a symmetric figure, take each corner (vertex) and find its <b>mirror point</b>: the same <b>distance</b> from the line, but on the opposite side. Then connect the mirror points the same way the original half was connected.</p>

       <h4 class="ls-sub">Counting on a grid</h4>
       <p>On grid paper this is easy. If a vertex is <b>3 squares to the left</b> of a vertical line of symmetry, its mirror point is <b>3 squares to the right</b>. If a point is <b>4 squares above</b> a horizontal line, its mirror is <b>4 squares below</b>. Count the same number of squares on the other side.</p>

       <h4 class="ls-sub">Flip, don't slide</h4>
       <p>Reflecting is like <b>flipping</b> the shape over the line — like a mirror. If a shape has line symmetry, then it is <b>symmetric</b>. A point that sits exactly <b>on</b> the line reflects to itself.</p>
       <div class="reallife"><b>Real life:</b> artists and designers draw one half of a mask, logo, or letter, then mirror it to keep it perfectly balanced.</div>
       <div class="watchout"><b>Common mistake:</b> sliding the half to the other side instead of flipping it. You must mirror each point, so the finished figure is a true reflection.</div>

       <h4 class="ls-sub">Recap</h4>
       <p>Mirror each vertex to the same distance on the opposite side of the line, then connect. Flip the shape — don't slide it.</p>
       <div class="keybox">A vertex 5 squares from the line reflects to 5 squares on the other side.</div>`,
     examples:[
      {title:"Mirror a single point",steps:["A vertex is 3 units left of a vertical line.","Its mirror point is the same distance across.","So it lands 3 units to the right of the line."]},
      {title:"Complete a half-figure",steps:["Reflect each vertex across the line of symmetry.","Keep each point the same distance from the line.","Connect the mirrored points to finish the shape."]},
      {title:"A point on the line",steps:["A vertex sits exactly on the line of symmetry.","Its distance from the line is 0.","So it reflects to itself — same spot."]}
     ],
     quiz:[
      {q:"To draw the other half of a symmetric figure, you reflect each point across the...",o:["line of symmetry","nearest vertex","diagonal","perimeter"],a:0,why:"Every point mirrors across the line of symmetry."},
      {q:"A point 4 units above a horizontal line of symmetry has a mirror point how far below?",o:["4 units","2 units","8 units","0 units"],a:0,why:"The mirror point is the same distance on the other side."},
      {q:"Each mirrored point must be the same ___ from the line.",o:["distance","color","length of side","angle"],a:0,why:"Reflection keeps the distance to the line the same."},
      {q:"If a shape has line symmetry, then it is...",o:["symmetric","a circle","a triangle","larger"],a:0,why:"Having a line of symmetry means the shape is symmetric."},
      {q:"When you complete a symmetric figure, the two halves are...",o:["mirror images","different shapes","both slid over","unrelated"],a:0,why:"The halves are mirror images."},
      {q:"A vertex 5 squares right of the line reflects to how many squares left?",o:["5","10","1","0"],a:0,why:"Same distance on the opposite side → 5."},
      {q:"Reflecting a shape across a line is like...",o:["flipping it (a mirror image)","sliding it over","spinning it around","shrinking it"],a:0,why:"A reflection is a flip, like a mirror."},
      {q:"To mirror a figure you should ___ the shape, not slide it.",o:["flip","stretch","shrink","rotate"],a:0,why:"Reflection is a flip over the line."},
      {q:"A point that lies exactly ON the line of symmetry reflects to...",o:["itself (the same spot)","the far corner","a new line","the center only"],a:0,why:"Its distance from the line is 0, so it stays put."}
     ]},
    {title:"Classify Triangles by Sides",iv:null,
     teach:`<p>Every triangle has three sides, and one way to sort triangles is by comparing those <b>side lengths</b>. This gives three groups.</p>

       <h4 class="ls-sub">Equilateral triangle</h4>
       <p>An <b>equilateral triangle</b> has <b>three sides the same length</b>. Every side matches the others.</p>

       <h4 class="ls-sub">Isosceles triangle</h4>
       <p>An <b>isosceles triangle</b> has <b>two sides the same length</b>. The two matching sides are often marked with tick marks.</p>

       <h4 class="ls-sub">Scalene triangle</h4>
       <p>A <b>scalene triangle</b> has <b>no sides the same length</b> — all three sides are different.</p>
       <div class="reallife"><b>Real life:</b> a yield road sign is an equilateral triangle; many roof trusses use isosceles triangles.</div>
       <div class="watchout"><b>Common mistake:</b> forgetting what the <b>tick marks</b> mean. Small matching tick marks on two sides show that those sides have the <i>same length</i>.</div>

       <h4 class="ls-sub">Recap</h4>
       <p>Classify a triangle by its sides: all three equal is equilateral, exactly two equal is isosceles, none equal is scalene.</p>
       <div class="keybox">Equilateral = 3 equal sides, isosceles = 2 equal sides, scalene = 0 equal sides.</div>`,
     examples:[
      {title:"Sides 5, 5, 5",steps:["All three sides are the same length.","A triangle with three equal sides is equilateral.","So it is an equilateral triangle."]},
      {title:"Sides 6, 6, 4",steps:["Two sides (6 and 6) match; one is different.","A triangle with two equal sides is isosceles.","So it is an isosceles triangle."]},
      {title:"Sides 3, 4, 5",steps:["All three sides are different.","A triangle with no equal sides is scalene.","So it is a scalene triangle."]}
     ],
     quiz:[
      {q:"A triangle with all three sides equal is...",vis:{type:'tri',by:'sides',kind:'equilateral'},o:["equilateral","isosceles","scalene","right"],a:0,why:"Three equal sides → equilateral."},
      {q:"A triangle with exactly two sides equal is...",vis:{type:'tri',by:'sides',kind:'isosceles'},o:["isosceles","equilateral","scalene","acute"],a:0,why:"Two equal sides → isosceles."},
      {q:"A triangle with no sides equal is...",vis:{type:'tri',by:'sides',kind:'scalene'},o:["scalene","isosceles","equilateral","right"],a:0,why:"No equal sides → scalene."},
      {q:"A triangle with sides 7, 7, 7 is...",vis:{type:'tri',by:'sides',kind:'equilateral'},o:["equilateral","isosceles","scalene","obtuse"],a:0,why:"All three sides match → equilateral."},
      {q:"A triangle with sides 8, 8, 5 is...",vis:{type:'tri',by:'sides',kind:'isosceles'},o:["isosceles","equilateral","scalene","right"],a:0,why:"Two sides match → isosceles."},
      {q:"A triangle with sides 4, 6, 9 is...",vis:{type:'tri',by:'sides',kind:'scalene'},o:["scalene","isosceles","equilateral","acute"],a:0,why:"All sides different → scalene."},
      {q:"Triangles classified this way are grouped by their...",o:["side lengths","colors","angle measures only","names"],a:0,why:"Here we sort triangles by side lengths."},
      {q:"Tick marks on two sides show that those sides are...",o:["the same length","perpendicular","curved","parallel"],a:0,why:"Matching tick marks mean equal lengths."},
      {q:"A yield road sign has all sides equal, so it is...",o:["equilateral","isosceles","scalene","obtuse"],a:0,why:"Three equal sides → equilateral."}
     ]},
    {title:"Classify Triangles by Angles",iv:null,
     teach:`<p>Another way to sort triangles is by their <b>angles</b>. Comparing each angle to a right angle (90°) puts every triangle into a group.</p>

       <h4 class="ls-sub">Acute triangle</h4>
       <p>An <b>acute triangle</b> has <b>three acute angles</b> — every angle is less than 90°.</p>

       <h4 class="ls-sub">Right triangle</h4>
       <p>A <b>right triangle</b> has exactly <b>one right angle</b> (90°). A triangle can have at most one right angle.</p>

       <h4 class="ls-sub">Obtuse triangle</h4>
       <p>An <b>obtuse triangle</b> has exactly <b>one obtuse angle</b> — one angle greater than 90°.</p>

       <h4 class="ls-sub">Equiangular triangle</h4>
       <p>An <b>equiangular triangle</b> has <b>three equal angles</b>, each measuring <b>60°</b>. Since 60° is less than 90°, an equiangular triangle is also acute — and it is always equilateral.</p>
       <div class="reallife"><b>Real life:</b> a drafting set square is a right triangle; roof trusses come in acute and obtuse shapes.</div>
       <div class="watchout"><b>Common mistake:</b> calling a triangle acute because it has <i>one</i> acute angle. Every triangle has at least two acute angles — a triangle is acute only when <b>all three</b> angles are acute.</div>

       <h4 class="ls-sub">Recap</h4>
       <p>Acute = all three angles less than 90°, right = one 90° angle, obtuse = one angle over 90°. Equiangular means three 60° angles.</p>
       <div class="keybox">Acute = all angles &lt; 90°, right = one 90°, obtuse = one &gt; 90°.</div>`,
     examples:[
      {title:"Angles 60°, 60°, 60°",steps:["Every angle is less than 90°.","All three acute → acute triangle.","It is also equiangular (three equal angles)."]},
      {title:"Angles 90°, 45°, 45°",steps:["One angle is exactly 90°.","A triangle with a 90° angle is a right triangle.","So it is a right triangle."]},
      {title:"Angles 120°, 30°, 30°",steps:["One angle (120°) is greater than 90°.","A triangle with an angle over 90° is obtuse.","So it is an obtuse triangle."]}
     ],
     quiz:[
      {q:"A triangle with all three angles less than 90° is...",vis:{type:'tri',by:'angles',kind:'acute'},o:["acute","right","obtuse","scalene"],a:0,why:"All angles under 90° → acute."},
      {q:"A triangle with one 90° angle is...",vis:{type:'tri',by:'angles',kind:'right'},o:["right","acute","obtuse","equiangular"],a:0,why:"One right angle → right triangle."},
      {q:"A triangle with one angle greater than 90° is...",vis:{type:'tri',by:'angles',kind:'obtuse'},o:["obtuse","acute","right","equilateral"],a:0,why:"One angle over 90° → obtuse."},
      {q:"An equiangular triangle has three angles each measuring...",o:["60°","90°","45°","30°"],a:0,why:"Three equal angles that sum to 180° → 60° each."},
      {q:"A triangle with angles 40°, 60°, 80° is...",vis:{type:'tri',by:'angles',kind:'acute'},o:["acute","right","obtuse","straight"],a:0,why:"All three angles are under 90° → acute."},
      {q:"A triangle with angles 90°, 45°, 45° is...",vis:{type:'tri',by:'angles',kind:'right'},o:["right","acute","obtuse","equiangular"],a:0,why:"It has a 90° angle → right."},
      {q:"A triangle with angles 100°, 40°, 40° is...",vis:{type:'tri',by:'angles',kind:'obtuse'},o:["obtuse","acute","right","equilateral"],a:0,why:"100° is greater than 90° → obtuse."},
      {q:"How many right angles can a triangle have?",o:["one","two","three","zero always"],a:0,why:"A triangle can have at most one right angle."},
      {q:"An equiangular triangle is also...",o:["acute","obtuse","right","scalene"],a:0,why:"Its 60° angles are all under 90°, so it is acute."}
     ]},
    {title:"Classify Quadrilaterals",iv:null,
     teach:`<p>A <b>quadrilateral</b> is any polygon with <b>four sides</b>. We sort quadrilaterals by their <b>parallel sides</b> and their <b>angles</b>, and the special ones have their own names.</p>

       <h4 class="ls-sub">Trapezoid</h4>
       <p>A <b>trapezoid</b> is a quadrilateral with <b>exactly one pair of parallel sides</b>.</p>

       <h4 class="ls-sub">Parallelogram</h4>
       <p>A <b>parallelogram</b> has <b>two pairs of parallel sides</b>. Its opposite sides are also equal in length.</p>

       <h4 class="ls-sub">Rectangle and rhombus</h4>
       <p>A <b>rectangle</b> is a parallelogram with <b>four right angles</b>. A <b>rhombus</b> is a parallelogram with <b>four sides the same length</b>.</p>

       <h4 class="ls-sub">Square</h4>
       <p>A <b>square</b> is a parallelogram with <b>four right angles AND four equal sides</b>. That makes a square a special kind of rectangle <i>and</i> a special kind of rhombus.</p>
       <div class="reallife"><b>Real life:</b> windows and doors are rectangles; many floor tiles are squares; some kites and signs are rhombuses.</div>
       <div class="watchout"><b>Common mistake:</b> giving a shape only one name. A square is also a rectangle, a rhombus, and a parallelogram — name a shape as specifically as you can, but remember it can belong to several groups.</div>

       <h4 class="ls-sub">Recap</h4>
       <p>Trapezoid = one pair of parallel sides; parallelogram = two pairs; rectangle = 4 right angles; rhombus = 4 equal sides; square = both.</p>
       <div class="keybox">A square is a rectangle AND a rhombus AND a parallelogram.</div>`,
     examples:[
      {title:"Exactly one pair of parallel sides",steps:["Only one pair of sides is parallel.","A quadrilateral with one pair of parallel sides is a trapezoid.","So it is a trapezoid."]},
      {title:"Four right angles, sides not all equal",steps:["Two pairs of parallel sides and four right angles.","A parallelogram with four right angles is a rectangle.","So it is a rectangle."]},
      {title:"Four right angles and four equal sides",steps:["Four right angles and four equal sides.","That is a square.","A square is also a rectangle and a rhombus."]}
     ],
     quiz:[
      {q:"A polygon with four sides is a...",o:["quadrilateral","triangle","pentagon","hexagon"],a:0,why:"Four sides → quadrilateral."},
      {q:"A quadrilateral with exactly one pair of parallel sides is a...",vis:{type:'quad',kind:'trapezoid'},o:["trapezoid","parallelogram","rhombus","square"],a:0,why:"One pair of parallel sides → trapezoid."},
      {q:"A quadrilateral with two pairs of parallel sides is a...",vis:{type:'quad',kind:'parallelogram'},o:["parallelogram","trapezoid","triangle","pentagon"],a:0,why:"Two pairs of parallel sides → parallelogram."},
      {q:"A parallelogram with four right angles is a...",vis:{type:'quad',kind:'rectangle'},o:["rectangle","trapezoid","rhombus","pentagon"],a:0,why:"Four right angles → rectangle."},
      {q:"A parallelogram with four equal sides is a...",vis:{type:'quad',kind:'rhombus'},o:["rhombus","rectangle","trapezoid","square only"],a:0,why:"Four equal sides → rhombus."},
      {q:"A parallelogram with four right angles AND four equal sides is a...",vis:{type:'quad',kind:'square'},o:["square","trapezoid","rhombus only","rectangle only"],a:0,why:"Both conditions → square."},
      {q:"A square is also a...",o:["rectangle and rhombus","trapezoid","triangle","pentagon"],a:0,why:"A square meets the rules for rectangle, rhombus, and parallelogram."},
      {q:"Opposite sides of a parallelogram are...",o:["equal and parallel","perpendicular","unequal","curved"],a:0,why:"A parallelogram's opposite sides are equal and parallel."},
      {q:"Which is NOT always a parallelogram?",o:["trapezoid","square","rectangle","rhombus"],a:0,why:"A trapezoid has only one pair of parallel sides, so it is not a parallelogram."}
     ]}
   ],
   test:[
    {q:"A shape has line symmetry when a fold makes the two halves...",o:["match exactly","have equal area only","look different","overlap partly"],a:0,why:"The halves must match exactly."},
    {q:"The fold line of a symmetric figure is the...",o:["line of symmetry","diagonal","vertex","base"],a:0,why:"That fold is the line of symmetry."},
    {q:"How many lines of symmetry does a square have?",vis:{type:'sym',shape:'square',showLines:false},o:["4","2","1","3"],a:0,why:"Vertical, horizontal, and two diagonals → 4."},
    {q:"A (non-square) rectangle has how many lines of symmetry?",o:["2","4","1","0"],a:0,why:"One horizontal and one vertical → 2."},
    {q:"An equilateral triangle has how many lines of symmetry?",o:["3","1","2","0"],a:0,why:"One through each vertex → 3."},
    {q:"A scalene triangle has how many lines of symmetry?",o:["0","1","2","3"],a:0,why:"No matching sides → 0."},
    {q:"The two halves of a symmetric figure are...",o:["mirror images","different shapes","both squares","unrelated"],a:0,why:"They are mirror images."},
    {q:"To draw the other half of a symmetric figure, reflect each point across the...",o:["line of symmetry","nearest side","diagonal","center point"],a:0,why:"Each point mirrors across the line of symmetry."},
    {q:"A vertex 5 squares from the line of symmetry reflects to how many squares on the other side?",o:["5","10","1","0"],a:0,why:"Same distance on the opposite side → 5."},
    {q:"Reflecting a shape across a line is like...",o:["flipping it","sliding it","spinning it","shrinking it"],a:0,why:"A reflection is a flip, like a mirror."},
    {q:"A triangle with all three sides equal is...",vis:{type:'tri',by:'sides',kind:'equilateral'},o:["equilateral","isosceles","scalene","right"],a:0,why:"Three equal sides → equilateral."},
    {q:"A triangle with exactly two sides equal is...",vis:{type:'tri',by:'sides',kind:'isosceles'},o:["isosceles","equilateral","scalene","obtuse"],a:0,why:"Two equal sides → isosceles."},
    {q:"A triangle with no equal sides is...",vis:{type:'tri',by:'sides',kind:'scalene'},o:["scalene","isosceles","equilateral","acute"],a:0,why:"No equal sides → scalene."},
    {q:"A triangle with sides 8, 8, 5 is...",vis:{type:'tri',by:'sides',kind:'isosceles'},o:["isosceles","equilateral","scalene","right"],a:0,why:"Two matching sides → isosceles."},
    {q:"A triangle with all three angles less than 90° is...",vis:{type:'tri',by:'angles',kind:'acute'},o:["acute","right","obtuse","scalene"],a:0,why:"All angles under 90° → acute."},
    {q:"A triangle with one 90° angle is...",vis:{type:'tri',by:'angles',kind:'right'},o:["right","acute","obtuse","equiangular"],a:0,why:"One right angle → right triangle."},
    {q:"A triangle with one angle greater than 90° is...",vis:{type:'tri',by:'angles',kind:'obtuse'},o:["obtuse","acute","right","equilateral"],a:0,why:"One angle over 90° → obtuse."},
    {q:"A triangle with angles 100°, 40°, 40° is...",vis:{type:'tri',by:'angles',kind:'obtuse'},o:["obtuse","acute","right","equilateral"],a:0,why:"100° is greater than 90° → obtuse."},
    {q:"An equiangular triangle has three angles each measuring...",o:["60°","90°","45°","30°"],a:0,why:"Three equal angles summing to 180° → 60° each."},
    {q:"A polygon with four sides is a...",o:["quadrilateral","triangle","pentagon","hexagon"],a:0,why:"Four sides → quadrilateral."},
    {q:"A quadrilateral with exactly one pair of parallel sides is a...",vis:{type:'quad',kind:'trapezoid'},o:["trapezoid","parallelogram","rhombus","square"],a:0,why:"One pair of parallel sides → trapezoid."},
    {q:"A parallelogram with four right angles is a...",vis:{type:'quad',kind:'rectangle'},o:["rectangle","trapezoid","rhombus","triangle"],a:0,why:"Four right angles → rectangle."},
    {q:"A square is also a...",o:["rectangle and rhombus","trapezoid","triangle","pentagon"],a:0,why:"A square meets the rules for rectangle, rhombus, and parallelogram."},
    {q:"Performance Task: Maya designs a symmetric banner shaped like a rectangle. How many lines of symmetry does the rectangle outline have?",vis:{type:'sym',shape:'rectangle',showLines:false},o:["2","4","1","0"],a:0,why:"A non-square rectangle has 2 lines of symmetry."},
    {q:"Performance Task: Maya folds the banner in half and the two sides land exactly on top of each other. The banner has...",o:["line symmetry","no symmetry","four sides only","a right angle only"],a:0,why:"Folding to a matching overlap shows line symmetry."},
    {q:"Performance Task: One patch is a triangle with sides 8 cm, 8 cm, 8 cm. Classify it by its sides.",o:["equilateral","isosceles","scalene","right"],a:0,why:"Three equal sides → equilateral."},
    {q:"Performance Task: That same triangle has three equal angles. Each angle measures...",o:["60°","90°","45°","120°"],a:0,why:"Three equal angles summing to 180° → 60° each."},
    {q:"Performance Task: A patch is a parallelogram with four right angles and four equal sides. It is a...",vis:{type:'quad',kind:'square'},o:["square","rectangle only","rhombus only","trapezoid"],a:0,why:"Four right angles AND four equal sides → square."},
    {q:"Performance Task: A trim patch has exactly one pair of parallel sides. It is a...",vis:{type:'quad',kind:'trapezoid'},o:["trapezoid","parallelogram","rectangle","rhombus"],a:0,why:"Exactly one pair of parallel sides → trapezoid."}
   ]},
 ],
 finalTest:[
  {q:"What is the value of the 4 in 3,481?",o:["400","4","40","4,000"],a:0,why:"The 4 is in the hundreds place → 400."},
  {q:"Word form of 20,030 is:",o:["twenty thousand, thirty","two thousand, thirty","twenty thousand, three hundred","twenty-three thousand"],a:0,why:"20 in the thousands period, 030 in the ones period → twenty thousand, thirty."},
  {q:"Which is 305,072 in expanded form?",o:["300,000 + 5,000 + 70 + 2","300,000 + 50,000 + 70 + 2","30,000 + 5,000 + 70 + 2","300,000 + 5,000 + 700 + 2"],a:0,why:"3 hundred-thousands + 5 thousands + 7 tens + 2 ones."},
  {q:"Which is greater, 618,457 or 619,457?",o:["619,457","618,457","they are equal","can't tell"],a:0,why:"First differing place is the thousands: 9 > 8, so 619,457 is greater."},
  {q:"Round 57,496 to the nearest thousand:",o:["57,000","58,000","57,500","60,000"],a:0,why:"Hundreds digit 4 < 5, so round down → 57,000."},
  {q:"Round 214,573 to the nearest hundred thousand:",o:["200,000","300,000","210,000","214,000"],a:0,why:"Ten-thousands digit 1 < 5, so round down → 200,000."},
  {q:"A carton holds 6 eggs. How many eggs in 7 cartons?",o:["42","48","36","49"],a:0,why:"7 × 6 = 42."},
  {q:"45 marbles shared equally by 9 kids — each gets:",o:["5","4","6","7"],a:0,why:"45 ÷ 9 = 5."},
  {q:"Which equals 1/2?",o:["3/6","2/3","1/3","3/4"],a:0,why:"3/6 = 1/2."},
  {q:"2/7 + 4/7 =",vis:{type:'fbar',n:2,d:7,n2:4,d2:7},o:["6/7","6/14","8/7","6/49"],a:0,why:"Same bottom → add tops → 6/7."},
  {q:"0.7 as a fraction:",o:["7/10","7/100","1/7","70"],a:0,why:"0.7 is seven tenths = 7/10."},
  {q:"Which is bigger, 0.8 or 0.75?",o:["0.8","0.75","they are equal","can't tell"],a:0,why:"0.80 > 0.75."},
  {q:"A 90° angle is a:",vis:{type:'angle',deg:90},o:["right angle","acute angle","obtuse angle","straight angle"],a:0,why:"Exactly 90° is a right angle."},
  {q:"Area of a 5 by 4 rectangle:",vis:{type:'arect',l:5,w:4},o:["20","18","9","40"],a:0,why:"5 × 4 = 20 square units."}
 ]
},

/* =========================== GRADE 5 =========================== */
g5:{ name:"Grade 5", short:"G5", emoji:"⭐", accent:"#38bdf8",
 color:"#2f54eb",
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
 color:"#5b52e0",
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

