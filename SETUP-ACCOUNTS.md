# Turning on accounts (Supabase)

The site works right now with **no setup** — it runs in *guest mode* and saves
progress on the device. Follow these steps only when you want real sign-in and
progress that syncs across devices.

## 1. Create a Supabase project
1. Go to https://supabase.com and sign up (free).
2. Click **New project**, give it a name and a database password, pick a region, create it.

## 2. Create the progress table
In your project, open **SQL Editor → New query**, paste this, and click **Run**:

```sql
create table public.progress (
  user_id uuid primary key references auth.users(id) on delete cascade,
  data jsonb,
  updated_at timestamptz default now()
);

-- Each user can only see and change their own row:
alter table public.progress enable row level security;

create policy "read own progress"  on public.progress
  for select using (auth.uid() = user_id);
create policy "insert own progress" on public.progress
  for insert with check (auth.uid() = user_id);
create policy "update own progress" on public.progress
  for update using (auth.uid() = user_id);
```

Row-level security (RLS) is what makes it safe to ship the public "anon" key in
the browser — the database refuses to hand one user another user's row.

## 3. Paste your keys
1. Open **Settings → API** in Supabase.
2. Copy the **Project URL** and the **anon public** key.
3. Put them in `supabase-config.js`:

```js
window.SUPA_URL = "https://xxxxxxxx.supabase.co";
window.SUPA_KEY = "eyJhbGciOi...your anon public key...";
```

## 4. Point the sign-in link back to your site
Sign-in is passwordless and uses Supabase's built-in email (no email service or
domain needed): you enter your email, tap the link in it, and land back on the
site signed in. The link must point to your site's real address, not `localhost`.

After you host the site (step 5) and know its URL, go to
**Authentication → URL Configuration** and set:
- **Site URL**: your hosted address, e.g. `https://your-site.netlify.app`
- **Redirect URLs**: add the same address (e.g. `https://your-site.netlify.app/**`)

That's the whole fix for the earlier "localhost refused to connect" error — the
app already asks Supabase to send you back to wherever the site is served.

## 5. Host the files
Accounts need the site served over http(s), not opened as a local file. Any
static host works and all have free tiers:
- **Netlify** or **Vercel** — drag-and-drop the folder, or connect a Git repo.
- Or Supabase's own static hosting.

That's it. The 👤 button in the header now offers **Log in / Create account**,
and each signed-in user's XP, streak, badges, and lesson progress are stored in
their `progress` row and restored on any device.

## How it works (for reference)
- `supabase-config.js` — your two keys (safe to commit; protected by RLS).
- `auth.js` — sign-up/log-in modal, session handling, and cloud sync. It wraps
  the app's existing `save()` so every progress change is also pushed to your
  Supabase `progress` table (debounced). On login it pulls your saved blob back
  down; a brand-new account inherits whatever guest progress was on the device.
- If the keys are left as placeholders, `auth.js` stays in guest mode and the
  site behaves exactly as before (localStorage only).

## A note on privacy
Collecting logins from children under 13 triggers real rules (COPPA in the US).
Fine for personal/family use; if you make it public, prefer parent-created
accounts or keep it accountless.
