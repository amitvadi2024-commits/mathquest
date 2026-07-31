# MathQuest — To-Do

_Status snapshot. ✅ = done, 🔨 = in progress, ⬜ = not started._

## 🔨 In progress
- **Khan-length lessons** — full-article depth for every lesson.
  - ✅ Grade 4 (10 lessons done)
  - ⬜ Grade 5 (10 lessons)
  - ⬜ Grade 6 (10 lessons)

## ⬜ Not built yet (future ideas)
- **User accounts + cloud save** — sign up / log in so progress follows you across devices (needs a backend service like Firebase/Supabase — see notes below).
- Grades 1–3 tracks
- Leaderboard
- Avatars / unlockables
- Accessibility: read-aloud questions, colorblind-friendly mode, text-size settings
- More minigames in the Arcade
- Parent/teacher view (see a child's progress)

## 💡 Offered but not yet requested
- "Type your own problem" solver (the duck explains a problem you enter)
- Make the Arcade Speed Round pull from the generator (truly endless)
- "Report a question" button
- Boss / mixed-grade challenge
- README for the GitHub repo

## ✅ Already done
- Grade tracks (4/5/6), subsection lessons, unit tests, grade final tests + printable certificate
- Placement test (recommends a start, never locks)
- AI-style question generator + Practice mode + adaptive difficulty + explanations
- Progress saved per device (localStorage); dashboard; review-mistakes; worked examples
- Restyle (sky-blue/teal), toned-down duck mascot, all buttons fixed
- Harder questions + word problems; contradiction-checker (0 contradictions)
- Deeper lessons with real-life + common-mistake notes and 3 examples each

## Notes: accounts & cloud save
A plain static site (our current setup) can only save to one browser on one device (localStorage).
Real accounts need a small cloud backend. Easiest path: **Firebase** or **Supabase** —
they provide login (email/password or Google) + a database, free tier, no server to run.
This is a real feature addition (moderate effort) and requires hosting the site online.
