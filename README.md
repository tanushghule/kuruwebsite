# FLAME Kurukshetra 2027 — The Conclave of Champions 🔥

[![Live Production](https://img.shields.io/badge/Live%20Website-kuruwebsite.vercel.app-FE5A00?style=for-the-badge&logo=vercel&logoColor=white)](https://kuruwebsite.vercel.app)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

The official unified digital platform for **FLAME Kurukshetra 2027** — Western India's premier inter-collegiate sports championship and festival held at FLAME University, Pune (February 18–21, 2027).

---

## 🌐 Live Production Deployment

Experience the live deployed platform at:  
👉 **[https://kuruwebsite.vercel.app](https://kuruwebsite.vercel.app)**

---

## ⚡ Features & Modules

### 1. Home Arena (`/`)
- **Live Scoreboard Ticker**: Auto-scrolling carousel highlighting in-progress matches, or switching to an official countdown timer if matches conclude.
- **Phoenix Emblem Hero**: Bold Horizon display typography, dynamic call-to-actions, and live tournament telemetry counters (60+ colleges, 3,500+ athletes, 20 disciplines).
- **Affiliated Championships**: Integrated bento features for *Maidaan* (FLAME sports festival), *50 Days to Kuru*, and *Decibel* (cultural flagship).
- **20-Discipline Matrix**: Instant category filtering (Ball Sports, Racket Sports, Athletics & Indoor, E-Sports & Mind) with medal event details and venue badges.
- **Manifesto & University Telemetry**: FLAME University accreditation, partner universities, and tournament values.

### 2. Live Battleground & Match Center (`/live-events`)
- **Real-Time Scoring Hub**: Live match status, quarter/half/set telemetry, and medal tally standings.
- **Interactive Match Center (`/live-events/:eventId`)**: Detailed timelines, lineups, commentary, and stadium conditions.
- **Scoring Desk (`/admin`)**: Built-in score administration mode for tournament marshals and referees.

### 3. Tournament Fixtures & Schedule (`/schedule`)
- **4-Day Interactive Timeline**: Switch between Day 1 (Feb 18) through Day 4 (Feb 21).
- **Sport Category Filters**: Real-time filtering across Cricket, Football, Basketball, Badminton, Tennis, and E-Sports.
- **Detailed Match Modal**: Venue specifications, rules, timings, and referee assignments.

### 4. Organizing Committee (`/committee`)
- **17 Committee Heads Across 13 Wings**: Secretariat, Operations, Logistics, Hospitality, Marketing, Design, Sponsorship, Tech, Public Relations, and Finance.
- **Interactive Dossier Modal**: Comprehensive bios, core responsibilities, and direct social connection channels.

### 5. Photo Vault & Media Archive (`/album`)
- **Multi-Layout Switcher**: Toggle between dynamic Bento Grid and Detailed List views.
- **Tournament Video Reel**: Embedded player with high-framerate tournament highlight clips (`album2.mp4`).
- **Fullscreen Lightbox**: High-resolution image zoom and modal inspector.

### 6. Chronicles & Dispatches (`/blog`)
- **Editorial Stories**: Feature articles covering championship previews, tactical breakdowns, and player profiles.
- **Dedicated Modal Reader**: Full-article view with estimated reading times and topic tags without losing page context.

### 7. Intel & FAQ Hub (`/faq`)
- **Categorized Accordions**: Clear answers spanning General Logistics, Accommodations, Registration, Rules, and Travel.
- **Instant Search**: Keyword filter across all questions and answers.
- **War Room Bridge**: Direct route to the [`/contact`](file:///c:/Users/tanus/OneDrive/Desktop/kuruwebsite/src/pages/ContactPage.jsx) page for urgent queries.

### 8. Contingent Registration (`/register`) & War Room (`/contact`)
- **Contingent Registration Portal**: Multi-step registration wizard for participating university delegations.
- **War Room**: Interactive emergency contact directory, campus map, and query submission form.

---

## 🎨 Design System

- **Typography**: Horizon Display font family (`font-horizon`, `font-horizon-outlined`) paired with clean modern sans-serif body type.
- **Brand Palette**:
  - Primary Flame: `#FE5A00`
  - Accent Gold / Trophy: `#FAAD36`
  - Dark Blueprint: `#09090B` / `#121217`
  - Crisp Light Theme: `#FAF9F6` / `#F4F4F5`
- **Responsive Navigation**: Adaptive desktop navigation with categorized mega/dropdown menus (`Live Arena`, `Festival Hub`) and a full-featured mobile drawer menu.

---

## 🛠️ Tech Stack

- **Core**: [React 18](https://react.dev/), [Vite 6](https://vitejs.dev/)
- **Routing**: [React Router DOM v6](https://reactrouter.com/)
- **Styling**: [Tailwind CSS 3.4](https://tailwindcss.com/), CSS variables for dynamic dark/light themes
- **Icons**: [Lucide React](https://lucide.dev/)
- **State Management**: React Context (`LiveEventsContext`, `ThemeContext`)
- **Hosting**: [Vercel](https://vercel.com/) with SPA rewrite rules (`vercel.json`)

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18.0.0 or later)
- npm or yarn

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/tanushghule/kuruwebsite.git

# 2. Navigate to project directory
cd kuruwebsite

# 3. Install dependencies
npm install

# 4. Start local development server
npm run dev
```

### Production Build

```bash
# Build production bundle to dist/
npm run build

# Preview production build locally
npm run preview
```

---

## 📁 Repository Architecture

```text
kuruwebsite/
├── public/                 # Static assets, fonts, icons, tournament media
│   └── assets/             # Heads portraits, bentos, albums, video highlights
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── Navbar.jsx      # Adaptive navbar with dropdowns & mobile drawer
│   │   ├── Footer.jsx      # Telemetry footer with quick links & socials
│   │   ├── ScrollToTop.jsx # Route change scroll reset handler
│   │   └── ui/             # Design system atomic components
│   ├── context/            # Global state (Theme, Live Events)
│   ├── data/               # Centralized data (websiteContent.js, mockEvents.js)
│   ├── pages/              # Application views
│   │   ├── HomePage.jsx
│   │   ├── SchedulePage.jsx
│   │   ├── CommitteePage.jsx
│   │   ├── AlbumPage.jsx
│   │   ├── BlogPage.jsx
│   │   ├── FaqPage.jsx
│   │   ├── LiveEventsPage.jsx
│   │   ├── MatchCenterPage.jsx
│   │   ├── AdminPage.jsx
│   │   ├── RegisterPage.jsx
│   │   └── ContactPage.jsx
│   ├── App.jsx             # Route definitions & layout wrappers
│   └── main.jsx            # Application entry point
├── alt/                    # Source archives and original assets
├── vercel.json             # Vercel deployment configuration
├── tailwind.config.js      # Tailwind styling configuration
└── vite.config.js          # Vite build tool configuration
```

---

## 📄 License

This repository is maintained for FLAME University's annual sports festival, **Kurukshetra 2027**. All brand assets and rights belong to FLAME University.
