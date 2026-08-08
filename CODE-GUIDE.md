# MathQuest — Code Guide

A plain-English walkthrough of **how the code actually works**, written so you can read the files and understand (and explain) them. Read this next to the real files.

---

## 1. The big picture: 3 files

The whole website is three files that load together:

| File | What it holds | Think of it as… |
|------|---------------|-----------------|
| `index.html` | The page skeleton + all the styling (CSS) | The **stage and the paint** |
| `content.js` | All the lessons and questions (just data) | The **script/textbook** |
| `app.js` | All the logic (navigation, quizzes, games, generator) | The **brain** |

`index.html` loads the other two at the bottom:
```html
<script src="content.js"></script>   <!-- data first -->
<script src="app.js"></script>       <!-- then the brain that uses it -->
```
Order matters: `content.js` must load first because `app.js` uses the data inside it.

---

## 2. A few coding ideas you'll see everywhere

You only need a handful of concepts to read this whole codebase:

- **Variable** — a named box that holds a value: `let xp = 0;` (xp starts at 0).
- **Function** — a reusable set of instructions: `function addXP(n){ ... }`. You "call" it with `addXP(10)`.
- **Object** — a bundle of named values: `{name:"Grade 4", units:[...]}`. You read a value with a dot: `grade.name`.
- **Array** — an ordered list: `["a","b","c"]`. Item numbering starts at **0**, so `list[0]` is the first item.
- **The DOM** — the live page. `document.getElementById('xp')` grabs the on-screen element with `id="xp"`. In this code it's shortened to `$('xp')`.
- **Template literal** — text with values slotted in, using backticks and `${...}`:
  ```js
  `Score: ${score}`   // becomes "Score: 42" if score is 42
  ```
  This is how the code builds HTML on the fly.
- **Event handler** — "when clicked, do this": `onclick="startQuiz('g4',0,0)"`.
- **localStorage** — the browser's tiny built-in memory, used to save progress between visits.

---

## 3. `index.html` — structure + style

Two parts:

### The `<style>` block (CSS)
At the top there's a `:root` section defining **color variables**:
```css
:root{ --brand:#0ea5e9; --teal:#14b8a6; --coral:#fb7185; ... }
```
Everywhere else uses `var(--brand)` instead of the raw color. **Change one line here and the whole site recolors.** That's the single most useful thing to know for restyling.

Below that are **CSS classes** — reusable style recipes like `.card`, `.opt` (a quiz option), `.balloon`, `.hero`. An element gets a look by naming a class: `<div class="card">`.

### The `<body>` — the skeleton
It's mostly empty containers that `app.js` fills in later:
```html
<section id="home" class="page active"></section>
<section id="grade" class="page"></section>
<section id="unit" class="page"></section>
...
```
Only one `.page` has the class `active` at a time — that's the one you see. Navigation = "remove `active` from all pages, add it to the one I want."

The **nav bar** at the top has the tabs, the XP/streak pills, the avatar, and the ⚙️ settings button.

---

## 4. `content.js` — the data

This file is one giant object called `GRADES`. Its shape:
```js
const GRADES = {
  g4: {
    name:"Grade 4", emoji:"🌱", accent:"#22c55e",
    placement:[ {q, o, a, why, u} , ... ],   // the placement check
    units:[
      { id:"g4u1", name:"Place Value...", icon:"🔢", accent:"#...",
        sections:[
          { title:"...", teach:`<p>lesson HTML...</p>`, iv:"placevalue",
            examples:[ {title, steps:[...]} ],
            quiz:[ {q, o, a, why} , ... ] }
        ],
        test:[ {q, o, a, why} , ... ]   // the unit test
      }, ...
    ],
    finalTest:[ {q, o, a, why} , ... ]
  },
  g5:{...}, g6:{...}
};
```

**The most important shape is a question:**
```js
{ q:"6 × 8 =", o:["42","48","54","56"], a:1, why:"6 groups of 8 = 48." }
```
- `q` = the question text
- `o` = the four options (an array)
- `a` = the **index** of the correct answer. `a:1` means option **#1**, which is `"48"` (remember: counting starts at 0, so 42 is #0, 48 is #1).
- `why` = the explanation shown after you answer.

That's it — every quiz, test, and placement question is just that little object. **To add a question, copy one and change the words.** To fix a wrong answer, change the `a` number.

`teach` holds the lesson as HTML text (paragraphs, the "watch out" boxes, etc.). `iv` names which interactive widget to show.

---

## 5. `app.js` — the brain (the important file)

It's organized top-to-bottom into labeled sections. Here's each one.

### 5a. State + Save/Load
```js
let xp=0, streak=0, muted=false;
let progress = { sections:{}, tests:{}, grades:{}, best:{...}, avatar:"🦆", settings:{...} };
```
These variables remember everything. `save()` writes them into `localStorage` as text; `load()` reads them back when the page opens. That's why your XP survives a refresh.

### 5b. Sound
`beep(freq,dur,...)` makes a tone using the browser's Web Audio (no sound files). `sfx.correct()`, `sfx.wrong()`, etc. are named little jingles built from beeps.

### 5c. Level + XP
```js
function level(){ return Math.floor(xp/100)+1; }   // every 100 XP = 1 level
function addXP(n){ xp+=n; ...; if(level()>before){ celebrate } }
```
`addXP` also updates the ring in the nav and fires a level-up popup + confetti when you cross a 100 mark.

### 5d. Navigation
The functions that switch screens:
- `showHome()` — the grade picker
- `openGrade(gid)` — one grade's units (also shows the placement recommendation)
- `openUnit(gid, ui)` — a unit's lessons + test buttons
- `openLesson(gid, ui, si)` — builds a lesson page from `content.js`
- `showPage(id)` — top-tab pages (Practice, Arcade, Progress)

They all do the same core move: hide every `.page`, show the one you want, then fill it with HTML built from the data.

### 5e. The Quiz Engine (used by quizzes, tests, placement, final)
One engine runs them all:
- `runQuiz(cfg)` — starts a quiz with a list of questions and a config
- `renderQ()` — draws the current question and its option buttons
- `pick(k)` — you clicked option `k`: it checks `k === q.a`, colors the buttons green/red, shows the **"How to solve it"** explanation, awards XP, and records misses for "Review my mistakes"
- `finish()` — tallies your score, marks the lesson/test passed, gives badges

### 5f. The Question Generator — the "AI" part
This is what makes endless Practice possible. It's **not** real AI — it's rules.
```js
const GEN = {
  g4u2(L){ const a=rint(2,9), b=rint(2,9);
    return {q:`${a} × ${b} =`, ...answer & options... }; },
  ...
};
```
- `rint(2,9)` picks a **random integer** between 2 and 9.
- Each generator makes a fresh problem, computes the real answer, and builds believable wrong options.
- `mc(correct, wrongs)` is a helper: it takes the correct answer + some wrong ones, shuffles them, and returns `{o, a}` (the options and the correct index) — guaranteeing the answer is always right.
- `L` is the difficulty level (1–4); bigger numbers at higher levels.
- The `ms...` generators (`msChange`, `msTwoStep`, …) are the multi-step **word problems** for Challenge mode.

Because the answer is *computed*, the generator can never give a wrong answer to a kid — a big advantage over a real AI.

A generator can also **branch into several question types** so Practice doesn't repeat itself. For example `GEN.g4u1` rolls a random number and, depending on the result, asks about the *value of a digit*, the *"10 times" relationship*, *expanded form*, *standard form*, *comparing two numbers*, or *rounding*. Several of those branches also attach a **`vis`** (base-ten blocks, a place-value chart, or a block comparison), so Practice mode shows a picture on roughly half the Unit 1 questions. The arcade games call `genQ`, which **re-rolls any visual question** — games stay text-only since they can't draw the picture.

Some lessons also have their own **interactive widgets** in the `IV` object — for Unit 1 that includes `placevalue` (a place-value builder), `blocks` (base-ten blocks — cubes, flats, rods, units), `forms` (shows a number in standard/word/expanded form at once), `comparetool` (highlights the first differing place), and `roundline` (a rounding number line). A lesson names them with its `iv` field, which can be **one key or an array of keys** — an array shows several interactives in the same lesson.

There's also a play-with builder, `digitbuilder` — it rolls six digit cards and, with the *Make Greatest* / *Make Least* buttons, arranges them into a number (great for place-value practice).

Several helpers draw visuals: `blocksSVG(n)` (base-ten blocks), `chartSVG(n)` (a place-value chart), `rlSVG(n)` (a rounding number line), and `numWords(n)` (word form). A **quiz question can carry a `vis` field** and the engine (`qVisual`) draws a picture above the question. `vis` can be a plain number (base-ten blocks) or an object naming the type: `{type:'chart',n:381045}`, `{type:'rl',n:347}`, or `{type:'cmp',a:243,b:216}` (two block models to compare). That's how questions like "What number do these blocks show?" and "Which model is greater, A or B?" work.

### 5g. Practice mode
`practiceRun(topics, label)` runs endless questions from the generator, adapting the level up/down based on your streak. `prPick()` handles answers (just like `pick()` but for practice).

### 5h. The Games (Arcade)
Each game (`startSpeed`, `startDrop`, `startMatch`, `startBalloon`, `startTF`) sets up its own screen, a **timer** (`setInterval`), and a scoring loop with combos.

**The key safety trick** (this fixed the "games are buggy" problem):
```js
let gameToken = 0;
function stopGame(){ gameToken++; ... }   // called whenever you navigate away
```
When a game starts it remembers the current token (`const tok = gameToken`). Every timer tick and click checks `if (tok !== gameToken) return;`. So the moment you leave, the token changes and all the old game's leftover timers quietly stop instead of causing errors.

### 5i. Settings, Dashboard, Confetti
- `applySettings()` toggles body classes for text size / colorblind mode; `speak()` reads text aloud via the browser's speech feature.
- `renderDash()` builds the Progress page.
- `confetti()` animates little squares on a `<canvas>` for celebrations.

### 5j. Init (the very bottom)
```js
load(); drawDuck(); refreshHUD(); applySettings(); updateNavAvatar(); renderHome();
```
This runs once when the page opens: load saved progress, draw the mascot, update the nav numbers, apply settings, and show the home page.

---

## 6. Quick "how do I change X?" recipes

- **Change a unit's card label** → `app.js`, the `UNITLABEL` map. Each unit still has an official Common Core `code` (like `4.NBT`) in `content.js`, but the friendly label shown on the cards ("Place Value," "Fractions," …) comes from `UNITLABEL`; `ulabel(u)` returns it.
- **Change the colors** → `index.html`, edit the `--brand`, `--teal`, etc. lines in `:root`.
- **Fix/add a quiz question** → `content.js`, find the unit, copy a `{q, o, a, why}` line, edit the words. Double-check `a` points to the right option (counting from 0).
- **Add a new lesson** → `content.js`, add another `{title, teach, iv, examples, quiz}` object to a unit's `sections` array.
- **Change how much XP an answer gives** → `app.js`, in `pick()` look for `addXP(10)`.
- **Add a new generator question type** → `app.js`, add a function to the `GEN` object following the pattern.
- **Add a whole new unit** → do all four of these so nothing breaks: (1) in `content.js`, add a `{id, name, icon, code, accent, sections:[...], test:[...]}` object to the grade's `units` array in the position you want it to appear (units display in array order); give it a **unique `id`** (e.g. `g4u2as`). (2) In `app.js`, add a matching `GEN.<id>(L)` generator — this is **required** because Practice and the arcade games call `GEN[id]`, and a missing one would crash the games. (3) In `app.js`, add the friendly card label to `UNITLABEL` (`g4u2as:"Add & Subtract"`). (4) In `content.js`, the placement check's `u:` tags are **unit index numbers** (0 = first unit) used to recommend a starting unit — if you insert a unit in the middle, bump the `u:` values of the units after it so they still point to the right place, and ideally add one placement question tagged to the new unit. Grade 4's Unit 2 "Add & Subtract Big Numbers" (`g4u2as`) and Unit 3 "Multiply by One-Digit Numbers" (`g4u3mul`, 10 lessons) were both added exactly this way. When Unit 3 went in, the old broad "Multiplication & Division" unit was **renamed to "Division"** — that only meant changing its `name` in `content.js` and its `UNITLABEL` entry in `app.js` (its `id` stayed `g4u2`, so saved progress and its `GEN.g4u2` generator kept working). Renaming a unit is safe; changing an `id` is not, because progress and generators are keyed to it. Unit 4 "Multiply by Two-Digit Numbers" (`g4u4mul`, 8 lessons) was added the same way, inserted right after the one-digit multiply unit. Each time a unit is inserted in the middle, the placement `u:` tags for the units after it get bumped up by one so the recommendation still points to the right unit.

Later, the "Division" placeholder unit (`g4u2`) was **filled out into the real 9-lesson Chapter 5** (Divide Multi-Digit Numbers). This was done by replacing its `sections` and `test` in `content.js` and rewriting its `GEN.g4u2` generator in `app.js` to produce division questions instead of the old multiplication ones. Because the `id` (`g4u2`) never changed, no placement tags or progress keys needed touching — only the unit's contents were swapped. This is the tidy way to "grow" an existing unit: keep the `id`, replace the content.

Unit 6 "Factors, Multiples, and Patterns" (`g4u6`, 6 lessons) was added after the Divide unit. Its lessons, examples, and its capstone "performance task" are **original** — inspired by the curriculum's topics but written with our own wording, scenarios, and numbers (Common Core standards are free to align to; a specific textbook's exact problems are copyrighted). During this step we also went back and rewrote the earlier borrowed performance tasks and word problems (things like the sound-waves, wind-turbine, and planetarium tasks, and the ferry/dog-treats/fruit-vendor problems) into original scenarios with fresh numbers, so the whole site is original rather than copied.

The Fractions unit (`g4u3`) was then filled out into the real Chapter 7 "Understand Fractions" (5 original lessons: model, generate-by-multiplying, generate-by-dividing, compare-with-benchmarks, compare-fractions), with an original banner performance task, and `GEN.g4u3` was rewritten to make equivalent-fraction and comparison questions. A note on the contradiction checker for fractions: it compares options by their **reduced value**, so `2/4`, `3/6`, and `1/2` all count as the same answer. That caught several fraction questions where a distractor secretly equaled the correct answer (e.g., listing both `4/6` and `2/3` as choices for "simplify 8/12") — those were fixed so every option is a genuinely different value.

Chapter 8 was then added as a separate new unit, "Add and Subtract Fractions" (`g4u8`, 9 original lessons: use models to add, decompose, add with like denominators, use models to subtract, subtract with like denominators, model mixed numbers, add mixed numbers, subtract mixed numbers, problem solving), with an original baking performance task and a new `GEN.g4u8` generator (add/subtract like-denominator fractions, decompose, mixed-to-fraction). It sits right after the Understand Fractions unit. As usual the fraction contradiction checker caught a handful of options that reduced to the same value and they were fixed.

Chapter 9 followed as another new unit, "Multiply Whole Numbers and Fractions" (`g4u9`, 5 original lessons: multiples of unit fractions, multiples of fractions, multiply whole × fraction, multiply whole × mixed number, problem solving), with an original beaker/water performance task and a `GEN.g4u9` generator (fraction as a multiple of a unit fraction, whole × fraction, whole × mixed number). Grade 4 now has 11 units running Place Value through Geometry.

Chapter 10 then filled out the existing **Decimals** unit (`g4u4`) into 7 original lessons (understand tenths, understand hundredths, fractions and decimals, compare decimals, add decimal fractions, fractions/decimals/money, operations with money), with an original juice-stand performance task and a rewritten `GEN.g4u4` (fraction→decimal, compare decimals, add money). Note for the contradiction checker: it now parses `$` amounts and decimals to numbers, so `0.03` and `3/100` count as the same answer, and `$0.5` and `$0.50` collide — a few options were adjusted so every choice is a distinct value.

Chapter 11 added another new unit, "Understand Measurement" (`g4u11`, 9 original lessons: metric length; metric mass & capacity; customary length; customary weight; customary capacity; make and interpret line plots; units of time; problem solving elapsed time; mixed measures). It uses the `dotplot` interactive for the line-plot lesson, has an original rover performance task, and a `GEN.g4u11` generator that produces unit-conversion questions (metric/customary length, weight, capacity, time). It sits between the Decimals and Geometry units, bringing Grade 4 to 12 units.

Chapter 12 added the "Use Perimeter and Area Formulas" unit (`g4u12`, 4 original lessons: perimeter formula, area formula, find unknown measures, problem solving), with an original mural performance task and a `GEN.g4u12` generator (perimeter, area, and find-a-missing-side questions). It sits just before the Geometry unit — Grade 4 now has 13 units. A handy fact used throughout these generators: when every option is a plain integer, the `mc()` helper's string-dedup already guarantees distinct values, so integer-only questions can't produce a contradiction (only fraction/decimal options need the extra care).

Chapter 13 filled out the existing **Geometry** unit (`g4u5`) into 8 original lessons (points/lines/segments/rays, identify and draw angles, parallel and perpendicular lines, understand degrees, find angle measures, measure and draw angles, add angle measures, find unknown angle measures) and **renamed it to "Identify and Draw Lines and Angles"** (label "Lines & Angles"). `GEN.g4u5` was rewritten from area/perimeter to angle questions (classify an angle, fraction-of-a-circle to degrees, add adjacent angles, complementary/supplementary). Options like "45°" carry the degree symbol, so they count as text ("raw") in the checker — `mc()`'s string dedup keeps them distinct. Grade 4 is up to 13 units; only Chapter 14 (Symmetry) remains.

Chapter 14 added the final Grade 4 unit, "Identify Symmetry and Two-Dimensional Shapes" (`g4u14`, label "Symmetry & Shapes", accent `#d946ef`), with 5 original lessons: line symmetry, draw symmetric shapes, classify triangles by sides, classify triangles by angles, classify quadrilaterals. It has a 29-item test that ends with an original **symmetric-banner performance task** (rectangle lines of symmetry, fold-test for line symmetry, classify an equilateral triangle patch by sides and its 60° angles, identify a square and a trapezoid patch). The `GEN.g4u14` generator produces four question types: lines of symmetry of a named regular shape, classify a triangle by three given side lengths, classify a triangle by three given angle measures, and classify a quadrilateral from a description. All lessons use `iv:null` (no matching interactive widget exists for symmetry/shape-classification). It was inserted at the end of the units array (index 13), a placement question tagged `u:13` was added, and `UNITLABEL` got a `g4u14` entry. **Grade 4 is now complete at 14 units** (Place Value through Symmetry & Shapes).

**Grade-4 question visuals.** Questions can carry a `vis` field that renders a little SVG picture above the choices. The engine already showed `vis` in quizzes, unit tests, and Practice; the dispatcher is `qVisual(v)` in `app.js`. The library was expanded from 4 types to a full set so the visual-heavy lessons aren't abstract: `area` (partial-products area model, `{a,b}`), `array` (dot array `{r,c}`), `arect` (rectangle on a unit grid `{l,w}`), `fbar` (one or two fraction bars `{n,d[,n2,d2]}`), `fcircle` (`{n,d}`), `fracline`/`numline` (number lines), `dgrid` (hundredths grid `{n}`), `tenths` (tenths strip `{n}`), `angle` (`{deg,lab}` — set `lab:false` to hide the degree when the task is to classify by sight), `tri` (`{by:'sides'|'angles',kind}` — tick marks for equal sides, arc/square for the named angle), `quad` (`{kind}` — trapezoid/parallelogram/rectangle/rhombus/square with parallel-arrows, right-angle squares, and equal-side ticks), `sym` (`{shape,showLines}` — polygon with dashed lines of symmetry; `showLines:false` when asking how many), `clock` (`{h,m}`), and `dotplot` (`{data:[]}`). All colors are inline hex chosen to match the site palette. Visuals were added two ways: (1) the Grade-4 practice **generators** (`GEN.g4u*`) now attach a `vis` on the branches where a picture teaches (area models on multiplication, fraction bars on fraction ops, tenths/hundredths grids on decimals, angle diagrams, and tri/quad/sym on shapes) — about 38% of generated Grade-4 questions now render a picture; and (2) a one-off patch injected `vis` into ~160 **static** quiz/test/placement questions in `content.js`, restricted to the Grade-4 region only (Grades 5–6 are untouched), by pattern-matching the question text. When adding new Grade-4 questions, add a `vis` where a model helps; when adding a brand-new visual, add a `qVisual` dispatch case and a render function next to the others, then headless-render one of each type (valid SVG, no `NaN`/`undefined`) before wiring it in.

**Accounts (optional Supabase backend).** The site is still a static site that works with no server (guest mode). Sign-in is layered on top and off by default. Three new files: `supabase-config.js` holds the two keys you paste from a Supabase project (the "anon public" key is meant to be public — it's protected by row-level security); `auth.js` (loaded after `app.js`) does the login/signup modal, session handling, and cloud sync; `SETUP-ACCOUNTS.md` has the click-by-click setup plus the one SQL block that creates the `progress` table and its RLS policies. The design keeps the existing state model untouched: progress is still the single blob `{xp,streak,progress,stats}`. `auth.js` **wraps** the app's `save()` so every save also upserts that blob (debounced) to a `progress` row keyed by the user's id; on login it pulls the row back down and refreshes the HUD/home, and a brand-new account inherits whatever guest progress was on the device. If the keys are left as placeholders (or the Supabase library fails to load), `auth.js` detects it and stays in guest mode — `save()`/`load()` fall back to localStorage exactly as before, so nothing breaks when the file is opened locally. Accounts require the site to be **hosted** (Netlify/Vercel/Supabase static), because auth needs http(s), not a `file://` page. Editing `save`/`load`'s blob shape later means also updating what `cloudPull`/`cloudPush` read and write in `auth.js`.

---

## 7. Glossary (say these confidently)

- **Front-end** — the part of a website that runs in the browser (this whole project is front-end).
- **DOM** — the live page the browser shows; the code edits it to change screens.
- **Event-driven** — the code mostly waits for clicks, then reacts.
- **State** — the data the app remembers right now (XP, progress, settings).
- **localStorage** — browser storage that keeps state between visits.
- **Data-driven** — the lessons/questions live as data in `content.js`, separate from the logic in `app.js`, so you can add content without touching the engine.
- **Procedural generation** — making content from rules (the question generator).

---

## 8. The design system (how the styling works)

All the "look" lives in the `<style>` block of `index.html`. It's built to be changed from a few central places instead of hunting through the whole file.

### Fonts
At the top of `<head>` we load one web font from Google Fonts with a `<link>`:
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap">
```
- **Inter** is used for *everything* — body and headings — because a single, simple typeface reads cleaner than mixing two. Hierarchy comes from **weight and size**, not different fonts.
- There's still a `--heading` variable (set to Inter) so headings can be re-pointed to a different font later from one line:
```css
--heading:'Inter',system-ui,-apple-system,sans-serif;
h1,h2,h3,h4,.logo,.result .score{ font-family:var(--heading); }
```
Web fonts only load when the page is online (hosted) — opened straight off your disk it falls back to a system font, which is fine.

### Color variables (the palette)
Inside `:root` every color is a **CSS variable**:
```css
:root{ --brand:#2f54eb; --text:#101828; --muted:#667085; --line:#e7ebf1; --bg:#f7f9fc; ... }
```
Everywhere else uses `var(--brand)` instead of a raw color. **Change one line here → the whole site recolors.** There are also "legacy aliases" (`--purple`, `--pink`, …) set to the new colors so older code that still says `var(--purple)` keeps matching the new scheme — that's how we re-skinned without rewriting everything.

### The "clean & modern" recipe
The modern look comes from consistent, restrained choices repeated on every component:
- **No gradients.** Backgrounds are **solid colors** (the hero, grade cards, and unit headers all use one flat color). Gradients read as "generated," so they were removed everywhere.
- **Thin 1px borders** (`border:1px solid var(--line)`) instead of thick colored ones.
- **Soft, subtle shadows** (`box-shadow:0 1px 2px rgba(16,24,40,.05)`) instead of big chunky ones.
- **Gentle rounded corners** (radius ~10–16px), not super-bubbly.
- **Lots of whitespace** (padding) and a light slate background.
- **Flat buttons** that lift slightly on hover, instead of the old "3D press" look.
- **Fewer emojis, real icons.** Grades, units, and the learning flow use clean text (e.g. a small `G4` tag instead of a 🌱). The **Arcade cards** and the **streak/XP pills** in the nav now use small inline **SVG icons** (a bolt, target, checkmark, flame, star — drawn in code with `stroke="currentColor"` so they take the surrounding color) instead of emoji. The **nav avatar** and the floating **duck mascot** were removed. Emojis now only appear inside the running games.

### The click sound
UI clicks call `sfx.click()` in `app.js`. It's a short, soft two-note sine "tick" (built from `beep(...)` calls) — quieter and crisper than the old buzzy square-wave click. All sound is generated in code with the Web Audio API; there are no sound files.

### The logo
The `.logo` is an inline **SVG** (a rounded square with a plus) plus the wordmark text — vector art drawn right in the HTML, so it stays crisp at any size and needs no image file.

**To retheme the whole site:** edit the palette variables and the two font names in `:root`. That's the fastest high-impact change you can make.

---

## 9. Follow one click, start to finish

To really "get" the code, trace what happens when a kid answers a quiz question. It touches most of the important pieces:

1. **The button exists because** `renderQ()` built it: for each option it wrote
   `<button class="opt" onclick="pick(2)">48</button>` into the page.
2. **The kid clicks it** → the browser runs `pick(2)` (the number is which option was clicked).
3. **Inside `pick(k)`** (`app.js`): it looks up the current question `q`, compares `k` to `q.a` (the correct index), and:
   - colors the option buttons green/red by adding the `.correct` / `.wrong` CSS classes,
   - builds the feedback HTML — including the **"How to solve it"** box from `q.why`,
   - calls `addXP(10)` if right (which may trigger a level-up + confetti),
   - if wrong, pushes `q` into `Q.wrong` so "Review my mistakes" can find it later,
   - calls `save()` to write progress to `localStorage`.
4. **The kid clicks "Next"** → `advance()` either shows the next question (`renderQ()` again) or, on the last one, calls `finish()`.
5. **`finish()`** tallies the score, and if they passed, marks the section done, maybe awards a badge, and shows the results screen.

Notice the pattern the whole app follows: **data** (`content.js`) + **a function that builds HTML from it** + **an `onclick` that calls another function** → repeat. Once you see that loop, every screen in the app reads the same way.

---

*This guide is kept up to date as the site changes, so it always matches the current code.*
