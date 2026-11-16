# FLAME Kurukshetra 2027 — GitHub Version Log & Revert Guide

This file records the exact Git commits and tags on `https://github.com/tanushghule/kuruwebsite` so you can revert to any previous state at any time.

---

## 1. Snapshot Before "FK27 Website Review.pdf" Changes
- **Git Tag**: `v1.0-pre-review`
- **Commit Hash**: `7d1c399` (`"Add public/bgvid.mp4 and fix root-only ignore pattern"`)
- **How to Revert to This Version Anytime**:
  ```bash
  git checkout v1.0-pre-review
  # Or to reset main branch back to this exact commit:
  git reset --hard 7d1c399
  git push --force origin main
  npx vercel deploy --prod --yes
  ```

---

## 2. Changes Applied from `FK27 Website Review.pdf` (Pages 1 to 11+)

| PDF Page | Section / Page | Issue Described | Change Implemented |
| :--- | :--- | :--- | :--- |
| **Page 2** | Homepage / Navbar | Kuru logo and name getting cut off | Added official `kurukshetralogo_official.png` (`public/kurukshetralogo_official.png`) and removed text truncation so `FLAME KURUKSHETRA` always appears in full. |
| **Page 3** | Navbar & Events Page | No "events" subtab | Added `Events` dropdown subtab in Navbar (`Sport Events`, `Cultural Events`, `Management Events`) and created `/events` (`src/pages/EventsPage.jsx`) matching `events1.png` & `events2.png`. |
| **Page 4** | Homepage Countdown | Incorrect title/date and time | Changed title to **"Official countdown to FLAME Kurukshetra 2027"**, changed dates to **22nd–26th January**, removed **"Lavale, Pune"**, and set countdown target to `Jan 22, 2027`. |
| **Page 5** | Homepage Disciplines & Events | Incorrect titles and categories | Removed `Esports` category and renamed `Management` to **Management Events**. |
| **Page 6** | Schedule Page | Very localised to the left of the screen | Redesigned `src/pages/SchedulePage.jsx` into a full-screen horizontal layout displaying Event Name, Category, Timings, Venue, Prize Pool, and a direct **Register** button on every row. |
| **Page 7** | Homepage About Section | Photo + content change | Updated right-hand photo to `public/flamecampusphoto.jpg` (`flamecampusphoto.jpg`) and updated the main body copy. |
| **Page 8** | Contact Page Brochures | Keeping only one brochure | Replaced duplicate general brochure button with 3 buttons for **Sports**, **Cultural**, & **ME** event brochures + 1 button for the **Overall Kurukshetra Code of Conduct**. |
| **Page 9** | Contact Page Social Dock | Incorrect linking | Linked LinkedIn to `https://www.linkedin.com/in/flamekurukshetra2027/` and YouTube to `https://www.youtube.com/@KurukshetraFLAME`. |
| **Page 10** | Contact Page POCs | Names & Details of people | Kept only the 5 specified contacts (**Parth**, **Khushi**, **Ayush**, **Janhavi**, and **Participants HOD**), removed the time/office-hours from each card, and removed the categorization filter bar above. |
| **Page 11** | Festival Hub — Meet the OC | Photos + search bar | Removed the search bar and department categorization bar on `/committee`. Ordered rows as: **Row 1**: 3 Advisors (*Farrokh Sir, Razmi Ma'am & Tamosi Ma'am*), **Row 2**: Executive Council (*EC*), **Row 3+**: All Core Committee (*CC*) Heads. |
| **Page 12+** | Contact Emails & Homepage Collage | Email strip & Homepage Committee/Vault | Removed `events.kurukshetra@flame.edu.in` (kept main Kuru ID & Registrations ID), displayed all 17 OC members on Homepage, and made the Last Edition photo collage redirect to `/album` when clicked anywhere. |
