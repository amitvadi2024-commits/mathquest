# Ideas

## 🎯 Current direction (grades 4–6, in progress)
Same website design/features, retargeted to **grades 4–6** as separate tracks (G4, G5, G6). Content from standard Common Core. Grades 1–3 maybe later.

### Confirmed for this build
- **Grade tracks:** Grade 4, Grade 5, Grade 6 — each with 5 topic units.
- **Subsections:** each unit is a chain of real subsection lessons on actual topics (proper teaching, not just a quick visual), each with its own interactive and its own quiz.
- **Unit tests:** a bigger test at the end of each unit.
- **End-of-grade test:** final checkpoint per grade → special trophy badge.
- **Placement test per grade:** recommends where to start & pre-fills progress, but **never locks anyone out**.
- **More interactive visuals** and **more quizzes** throughout.
- **Progress everywhere:** per subsection, per unit, per grade (rings/bars) + dashboard.
- **Save progress between visits** (so XP, streaks, placement, unlocks persist).
- **"Review my mistakes"** — retry just the questions you missed.
- **Worked examples with step-by-step hints** ("show me how", revealed one step at a time).
- **"Recommended: start here"** marker set by the placement test.
- **Mascot: a cartoonish duck** 🦆 that reacts — cheers on correct, encourages after a miss.
- **Printable certificate** when a grade test is passed.
- Nicer UI polish overall.

### 🤖 "AI-style" question generator (next build)
Mimics an AI tutor using plain JavaScript (no real ML) — free, offline, instant, always mathematically correct.
- **Endless question generator:** each topic has a rule-based generator that builds fresh, valid problems on the fly with the correct answer + believable wrong options (based on common mistakes).
- **Endless Practice mode:** "give me another" forever, per topic or mixed.
- **Adaptive difficulty:** tracks performance and quietly scales numbers/steps up or down.
- **Step-by-step explanations:** the generator also outputs the worked solution, so it can explain *why*.
- **Smart review:** serves more of the topics you miss most.

### 🎨 Restyle (next build)
- New color palette / visual style (moving away from the current purple-pink playful look).
- **Mascot toned way down** — remove the "Quackers" name & constant pop-ups; keep it subtle (or minimal).

### Grade topic outline (Common Core)
- **Grade 4:** Place Value & Multi-Digit Arithmetic · Multiplication & Division · Fractions (equivalence & adding) · Decimals (tenths & hundredths) · Geometry & Angles
- **Grade 5:** Decimals & Place Value · Multi-Digit & Decimal Operations · Fractions (× and ÷) · Volume · Coordinate Plane
- **Grade 6:** Ratios & Rates · Dividing Fractions & Negative Numbers · Expressions & Equations · Area, Surface Area & Volume · Data & Statistics

## ✅ Already built (kept & carried forward)
- Single site: `index.html` + `app.js`
- Top-tab navigation, gamification (XP, levels, streaks, badges)
- Interactive visuals per lesson; Arcade with 3 minigames
- Sound effects + mute, confetti, level-up popup, animated hero
- Progress dashboard with per-unit mastery chart

## 💡 Future ideas (later)
- Grades 1–3 tracks
- Adaptive difficulty
- Leaderboard
- Avatars / unlockables
- Read-aloud, colorblind-friendly mode, text-size settings
- More minigames
- Parent/teacher view

## 🚀 Sharing
- Files: zip `index.html` + `app.js` and send, or drag the folder to app.netlify.com/drop for a public link
- Note: the Cowork chat itself can't be shared (runs locally)
