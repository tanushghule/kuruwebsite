import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Trophy,
  Calendar,
  MapPin,
  ArrowUpRight,
  Search,
  Users,
  Sparkles,
  Camera,
  ShieldCheck,
  UserPlus,
  Flame,
  Clock,
  ChevronRight,
  Award,
  Zap,
} from 'lucide-react';
import {
  SCHEDULE_EVENTS,
  COMMITTEE_HEADS,
  ALBUM_MEDIA,
} from '../data/websiteContent';
import { cn } from '../utils/cn';

// Target Kickoff: Feb 18, 2027 09:00:00 IST
const TARGET_DATE = new Date('2027-02-18T09:00:00+05:30').getTime();

function useCountdown(targetTime) {
  const calculate = () => {
    const now = Date.now();
    const diff = Math.max(0, targetTime - now);
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculate);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculate());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetTime]);

  return timeLeft;
}

/**
 * Route du Rhum Inspired Wave Section Separator
 */
function SectionWaveDivider({ topColor = '#1A1D27', bottomColor = '#F4F1E8', flip = false }) {
  return (
    <div
      className="relative w-full overflow-hidden leading-none select-none pointer-events-none"
      style={{ backgroundColor: topColor, height: '46px' }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className={cn('w-full h-full block', flip ? 'scale-x-[-1]' : '')}
      >
        <path
          d="M0,32 C320,88 640,-12 960,36 C1200,72 1360,24 1440,12 L1440,80 L0,80 Z"
          fill={bottomColor}
        />
        <path
          d="M0,46 C360,92 720,4 1080,48 C1280,72 1390,38 1440,28"
          fill="none"
          stroke="#FE5A00"
          strokeWidth="2.5"
          strokeOpacity="0.45"
        />
      </svg>
    </div>
  );
}

export default function HomePage() {
  // Default to 'cultural' as requested ("Show the least, which is Cultural. Show one of each category.")
  const [selectedCategory, setSelectedCategory] = useState('cultural');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEventModal, setSelectedEventModal] = useState(null);
  const countdown = useCountdown(TARGET_DATE);

  // Filter events and strictly return top 3 for a single clean 3-card row
  const displayedEvents = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    if (query) {
      return SCHEDULE_EVENTS.filter(
        (ev) =>
          ev.name.toLowerCase().includes(query) ||
          ev.desc.toLowerCase().includes(query) ||
          ev.venue.toLowerCase().includes(query) ||
          ev.categoryLabel.toLowerCase().includes(query)
      ).slice(0, 3);
    }

    if (selectedCategory === 'mix') {
      // 1 representative from Cultural, Sports, and Management/Esports
      const oneCultural = SCHEDULE_EVENTS.find((e) => e.category === 'cultural');
      const oneSports = SCHEDULE_EVENTS.find((e) => e.category === 'sports');
      const oneManagement = SCHEDULE_EVENTS.find((e) => e.category === 'management');
      return [oneCultural, oneSports, oneManagement].filter(Boolean);
    }

    return SCHEDULE_EVENTS.filter((ev) => ev.category === selectedCategory).slice(0, 3);
  }, [selectedCategory, searchQuery]);

  // Top 6 committee heads for the Route du Rhum ".skippers" portrait showcase
  const featuredHeads = useMemo(() => COMMITTEE_HEADS.slice(0, 6), []);

  // Top 3 photo highlights for the Route du Rhum ".actus" 7fr + 5fr bento showcase
  const featuredPhotos = useMemo(() => ALBUM_MEDIA.slice(0, 3), []);

  return (
    <div className="min-h-screen w-full bg-[#09090B] text-white">
      {/* =====================================================================
          SECTION 1: FULL-BLEED BACKGROUND VIDEO HERO (bgvid.mp4)
          - Slight black overlay on top of bgvid.mp4
          - Removed top date/location orange beeping dot pill
          - Wide Bold Poppins Hero Typography + Ultra-Prominent Register CTA
      ===================================================================== */}
      <section className="relative min-h-[86vh] sm:min-h-[90vh] w-full flex items-center justify-center overflow-hidden border-b border-white/10">
        {/* Background Video */}
        <video
          src="/bgvid.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover object-center scale-[1.01]"
        />

        {/* Slight Black Overlay + Readability Vignette */}
        <div className="absolute inset-0 bg-black/60" />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 50% 42%, rgba(9,9,11,0.25) 0%, rgba(9,9,11,0.78) 75%, rgba(9,9,11,0.95) 100%)',
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#12141C] to-transparent" />

        {/* Hero Center Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 text-center flex flex-col items-center">
          {/* Skewed Route du Rhum Accent Bar */}
          <span className="rdr-trait mb-4 sm:mb-5" />

          {/* Main Wide Bold Poppins Headline */}
          <h1 className="font-horizon-wide text-[2rem] xs:text-[2.35rem] sm:text-6xl lg:text-7xl xl:text-[5.25rem] font-black uppercase tracking-[0.03em] sm:tracking-[0.06em] text-white leading-[1.06] drop-shadow-[0_8px_30px_rgba(0,0,0,0.7)]">
            FLAME{' '}
            <span className="block sm:inline text-[var(--color-primary-flame)]">
              KURUKSHETRA
            </span>
          </h1>

          <p className="mt-3 sm:mt-4 text-xs xs:text-sm sm:text-lg lg:text-xl font-bold uppercase tracking-[0.18em] sm:tracking-[0.26em] text-white/90">
            The Conclave of Champions • 2027 Edition
          </p>

          <p className="mt-4 sm:mt-5 max-w-2xl text-xs xs:text-sm sm:text-base lg:text-lg text-white/80 font-normal leading-relaxed px-1">
            Where Western India&apos;s finest collegiate athletes, artists, strategists, and esports squads converge across four electrifying days of championship glory.
          </p>

          {/* Most Prominent Element: Register Now CTA */}
          <div className="mt-8 sm:mt-11 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto">
            <Link
              to="/register"
              className="rdr-btn group relative inline-flex items-center justify-center gap-2.5 sm:gap-3 bg-[var(--color-primary-flame)] hover:bg-[#ff6a1a] text-white font-black uppercase tracking-[0.08em] sm:tracking-[0.12em] text-sm xs:text-base sm:text-lg px-6 sm:px-12 py-4 sm:py-5 shadow-[0_14px_45px_rgba(254,90,0,0.6)] hover:shadow-[0_18px_55px_rgba(254,90,0,0.8)] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 w-full sm:w-auto"
            >
              <UserPlus className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
              <span>Register Contingent Now</span>
              <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
            </Link>

            <Link
              to="/schedule"
              className="rdr-btn inline-flex items-center justify-center gap-2.5 border border-white/25 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold uppercase tracking-[0.1em] text-xs sm:text-sm px-6 sm:px-7 py-3.5 sm:py-5 transition w-full sm:w-auto"
            >
              <Calendar className="w-4 h-4 text-[var(--color-primary-flame)]" />
              <span>Explore Events</span>
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 2: COUNTDOWN TO KICKOFF (Replaces "Current Live Arenas")
          - Background: Elevated Dark Slate (#12141C)
          - Route du Rhum ".hv-faits" skewed glassmorphic telemetry blocks
      ===================================================================== */}
      <section className="relative bg-[#12141C] border-b border-white/10 py-10 sm:py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Header */}
          <div className="text-center lg:text-left max-w-md">
            <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.2em] text-[var(--color-primary-flame)] mb-2">
              <Clock className="w-4 h-4" />
              <span>OFFICIAL COUNTDOWN TO TORCH LIGHTING</span>
            </div>
            <h2 className="font-horizon text-2xl sm:text-3xl font-black uppercase tracking-wide text-white">
              THE ARENA IGNITES IN
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-white/65 font-normal">
              February 18 – 21, 2027 • FLAME University Campus, Lavale, Pune
            </p>
          </div>

          {/* Center: Route du Rhum Skewed Countdown Blocks */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-5 w-full lg:w-auto">
            {[
              { value: String(countdown.days).padStart(2, '0'), label: 'DAYS', accent: '#FE5A00' },
              { value: String(countdown.hours).padStart(2, '0'), label: 'HOURS', accent: '#FAAD36' },
              { value: String(countdown.minutes).padStart(2, '0'), label: 'MINUTES', accent: '#FFFFFF' },
              { value: String(countdown.seconds).padStart(2, '0'), label: 'SECONDS', accent: '#FE5A00' },
            ].map((unit) => (
              <div
                key={unit.label}
                className="rdr-skew-stat bg-[#1B1E2B]/90 border border-white/10 px-6 py-4 sm:px-7 sm:py-5 shadow-lg flex flex-col items-center justify-center min-w-[115px] sm:min-w-[130px]"
                style={{ borderLeft: `4px solid ${unit.accent}` }}
              >
                <span className="font-horizon text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-wider tabular-nums leading-none">
                  {unit.value}
                </span>
                <span
                  className="mt-2 text-[10px] sm:text-xs font-extrabold uppercase tracking-[0.22em]"
                  style={{ color: unit.accent }}
                >
                  {unit.label}
                </span>
              </div>
            ))}
          </div>

          {/* Right Quick Action */}
          <div className="shrink-0">
            <Link
              to="/register"
              className="rdr-btn inline-flex items-center gap-2 bg-white text-[#09090B] hover:bg-[var(--color-primary-flame)] hover:text-white px-6 py-3.5 text-xs sm:text-sm font-extrabold uppercase tracking-wider transition shadow-md"
            >
              <span>Lock Contingent Slot</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 3: CREDIBILITY COUNTERS SECTION
          - Background: Slightly Gray / Charcoal Slate (#1A1D27) with subtle grid
          - Dedicated section for 50+ Universities, 2.5K+ Athletes, 20+ Disciplines, ₹10L+ Prize Pool
      ===================================================================== */}
      <section className="relative bg-[#1A1D27] bg-blueprint-grid py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="rdr-trait mb-3" />
              <div className="text-xs font-extrabold uppercase tracking-[0.2em] text-[var(--color-primary-flame)]">
                SCALE OF THE BATTLEGROUND
              </div>
              <h2 className="font-horizon text-2xl sm:text-4xl font-black uppercase tracking-wide text-white mt-1">
                INDIA&apos;S PREMIER COLLEGIATE CONCLAVE
              </h2>
            </div>
            <p className="text-sm text-white/70 max-w-md font-normal">
              Four days of high-stakes inter-university rivalries across Olympic-grade turfs, indoor hardwood courts, amphitheater stages, and LAN arenas.
            </p>
          </div>

          {/* 4 Credibility Counter Cards (2x2 on Mobile, 4 cols on Desktop) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5">
            {[
              {
                number: '50+',
                label: 'PARTNER UNIVERSITIES',
                sub: 'National contingents competing for the General Championship',
                accent: '#FE5A00',
              },
              {
                number: '2.5K+',
                label: 'COLLEGIATE ATHLETES',
                sub: 'Players, performers, founders, and esports rosters on campus',
                accent: '#FAAD36',
              },
              {
                number: '20+',
                label: 'FLAGSHIP DISCIPLINES',
                sub: 'Spanning Sports, Cultural, Management, and Esports arenas',
                accent: '#FFFFFF',
              },
              {
                number: '₹10L+',
                label: 'CHAMPIONSHIP PRIZE POOL',
                sub: 'Cash awards, Phoenix trophies, and seed grants up for grabs',
                accent: '#FE5A00',
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rdr-card-sm bg-[#11131B] border border-white/10 p-4 sm:p-7 flex flex-col justify-between hover:border-[var(--color-primary-flame)]/50 transition-all duration-300 shadow-xl"
                style={{ borderTop: `4px solid ${stat.accent}` }}
              >
                <div>
                  <div
                    className="font-horizon text-2xl xs:text-3xl sm:text-5xl font-black tracking-wide leading-none"
                    style={{ color: stat.accent }}
                  >
                    {stat.number}
                  </div>
                  <div className="mt-2 sm:mt-3 text-[11px] sm:text-sm font-extrabold uppercase tracking-[0.08em] sm:tracking-[0.14em] text-white leading-snug">
                    {stat.label}
                  </div>
                </div>
                <p className="mt-2 sm:mt-3 text-[11px] sm:text-sm text-white/65 font-normal leading-relaxed hidden xs:block">
                  {stat.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wave Separator from Dark Gray (#1A1D27) to Warm Off-White (#F4F1E8) */}
      <SectionWaveDivider topColor="#1A1D27" bottomColor="#F4F1E8" />

      {/* =====================================================================
          SECTION 4: DISCIPLINES & EVENTS (Route du Rhum Light Contrast Section)
          - Background: Warm Off-White / Light Gray (#F4F1E8) with dark ink text (#0E111D)
          - Shows ONLY TOP 3 IN ONE LINE (grid-cols-1 md:grid-cols-3)
          - Category buttons: Cultural, Sports, Management, Esports + 1 of Each + Search bar
      ===================================================================== */}
      <section
        id="event-search"
        className="relative bg-[#F4F1E8] text-[#0E111D] py-16 sm:py-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header Row */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div>
              <span className="rdr-trait mb-3" />
              <div className="text-xs font-extrabold uppercase tracking-[0.2em] text-[var(--color-primary-flame)]">
                CHOOSE YOUR ARENA
              </div>
              <h2 className="font-horizon text-3xl sm:text-5xl font-black uppercase tracking-wide text-[#0E111D] mt-1">
                DISCIPLINES &amp; <span className="text-[var(--color-primary-flame)]">EVENTS</span>
              </h2>
              <p className="mt-2 text-sm sm:text-base text-[#0E111D]/70 max-w-xl font-normal">
                Switch between categories or search below to inspect the top featured events. All disciplines are curated with official rulebooks and cash prizes.
              </p>
            </div>

            {/* Search Bar */}
            <div className="w-full lg:w-80">
              <div className="relative">
                <Search className="w-4 h-4 text-[#0E111D]/50 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search football, dance, valorant..."
                  className="w-full rounded-xl bg-white border border-[#0E111D]/15 pl-11 pr-4 py-3 text-sm text-[#0E111D] placeholder:text-[#0E111D]/45 font-medium focus:outline-none focus:border-[var(--color-primary-flame)] shadow-sm"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-[var(--color-primary-flame)] hover:underline"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Category Filter Buttons: Cultural, Sports, Management, Esports, plus 1-of-Each */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 sm:mb-10 pb-5 sm:pb-6 border-b border-[#0E111D]/10">
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 sm:pb-0 sm:flex-wrap">
              {[
                { id: 'cultural', label: 'Cultural' },
                { id: 'sports', label: 'Sports' },
                { id: 'management', label: 'Management' },
                { id: 'esports', label: 'Esports' },
                { id: 'mix', label: '1 of Each Category' },
              ].map((cat) => {
                const isActive = !searchQuery && selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory(cat.id);
                    }}
                    className={cn(
                      'rdr-btn shrink-0 px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all duration-200',
                      isActive
                        ? 'bg-[var(--color-primary-flame)] text-white shadow-[0_8px_20px_rgba(254,90,0,0.35)]'
                        : 'bg-white text-[#0E111D] border border-[#0E111D]/15 hover:border-[var(--color-primary-flame)] hover:text-[var(--color-primary-flame)]'
                    )}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>

            <Link
              to="/schedule"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[var(--color-primary-flame)] hover:underline shrink-0"
            >
              <span>View Full Schedule &amp; All Events</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Strictly Top 3 Cards in One Row */}
          {displayedEvents.length === 0 ? (
            <div className="rounded-2xl bg-white border border-[#0E111D]/10 p-12 text-center">
              <p className="text-lg font-bold text-[#0E111D]">
                No events matched &ldquo;{searchQuery}&rdquo;
              </p>
              <p className="text-sm text-[#0E111D]/60 mt-1">
                Try searching for Football, Basketball, Band, Dance, Shark Arena, or Valorant.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('cultural');
                }}
                className="rdr-btn mt-4 bg-[var(--color-primary-flame)] text-white px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider"
              >
                Reset Filter
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {displayedEvents.map((event) => (
                <article
                  key={event.id}
                  className="rdr-card group bg-white border border-[#0E111D]/10 overflow-hidden shadow-[0_14px_34px_rgba(14,17,29,0.08)] hover:shadow-[0_20px_45px_rgba(254,90,0,0.18)] transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
                >
                  <div>
                    {/* Dummy Event Image */}
                    <div className="relative h-56 w-full overflow-hidden bg-[#12141C]">
                      <img
                        src={event.image}
                        alt={event.name}
                        loading="lazy"
                        className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                      <span className="absolute top-3.5 left-3.5 rounded-md bg-[var(--color-primary-flame)] px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-white shadow">
                        {event.categoryLabel}
                      </span>
                      <span className="absolute bottom-3 left-3.5 text-xs font-bold text-white/90 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[var(--color-accent-yellow)]" />
                        {event.datesText}
                      </span>
                    </div>

                    {/* Card Body */}
                    <div className="p-6">
                      <h3 className="font-horizon text-xl font-black uppercase tracking-wide text-[#0E111D] group-hover:text-[var(--color-primary-flame)] transition-colors">
                        {event.name}
                      </h3>
                      <p className="mt-2 text-sm text-[#0E111D]/70 font-normal line-clamp-2 leading-relaxed">
                        {event.desc}
                      </p>

                      <div className="mt-4 pt-4 border-t border-[#0E111D]/10 flex items-center justify-between text-xs font-semibold text-[#0E111D]/75">
                        <span className="flex items-center gap-1.5 truncate">
                          <MapPin className="w-3.5 h-3.5 text-[var(--color-primary-flame)] shrink-0" />
                          <span className="truncate">{event.venue}</span>
                        </span>
                        <span className="font-extrabold text-[var(--color-primary-flame)] shrink-0 ml-2">
                          {event.prize.split('+')[0]}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Card Footer CTAs */}
                  <div className="px-6 pb-6 flex items-center gap-2.5">
                    <button
                      type="button"
                      onClick={() => setSelectedEventModal(event)}
                      className="flex-1 rounded-lg border border-[#0E111D]/15 bg-[#F4F1E8] hover:bg-[#0E111D] hover:text-white py-2.5 text-xs font-extrabold uppercase tracking-wider text-[#0E111D] transition"
                    >
                      Event Details
                    </button>
                    <Link
                      to="/register"
                      className="rdr-btn bg-[var(--color-primary-flame)] hover:bg-[#ea5401] px-4 py-2.5 text-xs font-extrabold uppercase tracking-wider text-white transition flex items-center gap-1"
                    >
                      <span>Register</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Wave Separator from Warm Off-White (#F4F1E8) to Charcoal Slate (#141722) */}
      <SectionWaveDivider topColor="#F4F1E8" bottomColor="#141722" flip />

      {/* =====================================================================
          SECTION 5: ABOUT SECTION ("Where Legends Rise & Rivalries Are Forged")
          - Divided into 2 parts: Left = Text & Pillars, Right = Framed Dummy Image
          - Background: Charcoal Slate (#141722)
      ===================================================================== */}
      <section className="relative bg-[#141722] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Part: Text Narrative */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="rdr-trait mb-4" />
            <div className="text-xs font-extrabold uppercase tracking-[0.22em] text-[var(--color-primary-flame)]">
              ABOUT FLAME KURUKSHETRA
            </div>
            <h2 className="font-horizon text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-wide text-white mt-2 leading-[1.12]">
              WHERE LEGENDS RISE &amp;{' '}
              <span className="text-[var(--color-primary-flame)]">
                RIVALRIES ARE FORGED
              </span>
            </h2>

            <p className="mt-5 text-sm sm:text-base text-white/80 font-normal leading-relaxed">
              Set across the sprawling 60-acre lush valley campus of FLAME University in Lavale, Pune, Kurukshetra is more than a tournament—it is Western India&apos;s flagship inter-collegiate crucible.
            </p>
            <p className="mt-3.5 text-sm sm:text-base text-white/70 font-normal leading-relaxed">
              By day, national university contingents clash across FIFA-standard floodlit turfs, indoor wooden basketball courts, panoramic padel arenas, and high-stakes venture boardrooms. By night, the campus amphitheater transforms into an electric cultural festival with headline concerts, street dance cyphers, and pro-shows.
            </p>

            {/* 3 Compact Feature Pillars */}
            <div className="mt-7 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
              <div className="rounded-xl bg-white/[0.04] border border-white/10 p-4">
                <Trophy className="w-5 h-5 text-[var(--color-primary-flame)] mb-2" />
                <div className="text-xs font-extrabold uppercase tracking-wider text-white">
                  Pro Officiating
                </div>
                <p className="text-xs text-white/60 mt-1 font-normal">
                  Federation-certified referees &amp; live digital scoring across all courts.
                </p>
              </div>
              <div className="rounded-xl bg-white/[0.04] border border-white/10 p-4">
                <Sparkles className="w-5 h-5 text-[var(--color-accent-yellow)] mb-2" />
                <div className="text-xs font-extrabold uppercase tracking-wider text-white">
                  Pro-Nights &amp; Stage
                </div>
                <p className="text-xs text-white/60 mt-1 font-normal">
                  Concert-grade amphitheater evenings, band battles &amp; runway walks.
                </p>
              </div>
              <div className="rounded-xl bg-white/[0.04] border border-white/10 p-4">
                <ShieldCheck className="w-5 h-5 text-emerald-400 mb-2" />
                <div className="text-xs font-extrabold uppercase tracking-wider text-white">
                  Full Hospitality
                </div>
                <p className="text-xs text-white/60 mt-1 font-normal">
                  Partnered hotel stays, shuttle fleets &amp; athlete nutrition pipelines.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/register"
                className="rdr-btn inline-flex items-center gap-2 bg-[var(--color-primary-flame)] hover:bg-[#ea5401] px-6 py-3.5 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white shadow-lg transition"
              >
                <span>Register Your University</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                to="/faq"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white/80 hover:text-white"
              >
                <span>Read Contingent Guidelines</span>
                <ChevronRight className="w-4 h-4 text-[var(--color-primary-flame)]" />
              </Link>
            </div>
          </div>

          {/* Right Part: Framed Dummy Feature Image */}
          <div className="lg:col-span-6 relative">
            <div className="rdr-card relative overflow-hidden border-2 border-white/15 bg-[#09090B] shadow-[0_24px_60px_rgba(0,0,0,0.6)]">
              <img
                src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80"
                alt="FLAME Kurukshetra Stadium & Amphitheater"
                loading="lazy"
                className="w-full h-[360px] sm:h-[460px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Bottom Overlay Caption inside Image */}
              <div className="absolute bottom-5 left-5 right-5 flex flex-col sm:flex-row sm:items-end justify-between gap-4 bg-black/75 backdrop-blur-md border border-white/15 rounded-2xl p-4">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[var(--color-primary-flame)]">
                    LAVALE VALLEY CAMPUS • PUNE
                  </span>
                  <div className="font-horizon text-base sm:text-lg font-black uppercase text-white mt-0.5">
                    60-Acre Championship Arena
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-lg bg-[var(--color-primary-flame)] px-3 py-1.5 text-xs font-extrabold uppercase text-white shrink-0">
                  <Zap className="w-3.5 h-3.5" />
                  Feb 18–21, 2027
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 6: ORGANIZING COMMITTEE & LAST YEAR'S HIGHLIGHTS
          - Part A: Organizing Committee in Route du Rhum ".skippers" portrait style
          - Part B: Last Year's Photo Vault in Route du Rhum ".actus" 7fr + 5fr bento grid
      ===================================================================== */}
      <section className="relative bg-[#0B0C10] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          {/* PART A: ORGANIZING COMMITTEE SHOWCASE */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="rdr-trait mb-3" />
              <div className="text-xs font-extrabold uppercase tracking-[0.2em] text-[var(--color-primary-flame)]">
                THE ARCHITECTS OF KURUKSHETRA
              </div>
              <h2 className="font-horizon text-2xl sm:text-4xl font-black uppercase tracking-wide text-white mt-1">
                ORGANIZING <span className="text-[var(--color-primary-flame)]">COMMITTEE</span>
              </h2>
            </div>
            <Link
              to="/committee"
              className="rdr-btn inline-flex items-center gap-2 border border-white/20 bg-white/5 hover:bg-[var(--color-primary-flame)] hover:border-[var(--color-primary-flame)] px-5 py-3 text-xs font-extrabold uppercase tracking-wider text-white transition self-start sm:self-auto"
            >
              <Users className="w-4 h-4" />
              <span>Meet All 17 Festival Heads</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Swipe Hint */}
          <div className="lg:hidden flex items-center justify-between text-[11px] font-bold uppercase tracking-widest text-white/50 mb-3">
            <span>Swipe horizontally to explore heads</span>
            <span className="text-[var(--color-primary-flame)]">→</span>
          </div>

          {/* Route du Rhum ".skippers" 6-Card Portrait Rail (Snap-Scroll on Mobile, 6 Columns on Desktop) */}
          <div className="flex lg:grid lg:grid-cols-6 gap-4 sm:gap-5 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-2">
            {featuredHeads.map((head) => (
              <Link
                key={head.id}
                to="/committee"
                className="rdr-card group relative shrink-0 w-[68vw] xs:w-[54vw] sm:w-[240px] lg:w-auto aspect-[4/5] overflow-hidden bg-[#161923] border border-white/10 snap-start shadow-xl"
              >
                <img
                  src={head.photo}
                  alt={head.name}
                  loading="lazy"
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(9,9,11,0.05) 35%, rgba(9,9,11,0.92) 100%)',
                  }}
                />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block rounded bg-[var(--color-primary-flame)] px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-white">
                    {head.idBadge}
                  </span>
                  <h3 className="font-horizon text-base sm:text-lg font-black uppercase text-white mt-1.5 leading-tight">
                    {head.name}
                  </h3>
                  <p className="text-xs text-white/70 font-normal mt-0.5 truncate">
                    {head.wingLabel}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Divider Line Between Committee and Last Year's Highlights */}
          <div className="my-16 sm:my-20 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />

          {/* PART B: LAST YEAR'S HIGHLIGHTS / PHOTO VAULT (Route du Rhum 7fr + 5fr Asymmetric Bento) */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="rdr-trait mb-3" />
              <div className="text-xs font-extrabold uppercase tracking-[0.2em] text-[var(--color-primary-flame)]">
                RELIVE THE GLORY
              </div>
              <h2 className="font-horizon text-2xl sm:text-4xl font-black uppercase tracking-wide text-white mt-1">
                HIGHLIGHTS FROM <span className="text-[var(--color-primary-flame)]">LAST EDITION</span>
              </h2>
            </div>
            <Link
              to="/album"
              className="rdr-btn inline-flex items-center gap-2 border border-white/20 bg-white/5 hover:bg-[var(--color-primary-flame)] hover:border-[var(--color-primary-flame)] px-5 py-3 text-xs font-extrabold uppercase tracking-wider text-white transition self-start sm:self-auto"
            >
              <Camera className="w-4 h-4" />
              <span>Open Full Photo Vault</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* 7fr + 5fr Bento Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Large Featured Highlight (7 cols) */}
            {featuredPhotos[0] && (
              <Link
                to="/album"
                className="rdr-card group relative lg:col-span-7 min-h-[320px] sm:min-h-[420px] overflow-hidden border border-white/10 bg-[#141722] shadow-2xl"
              >
                <img
                  src={featuredPhotos[0].image}
                  alt={featuredPhotos[0].title}
                  loading="lazy"
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="inline-block rounded-md bg-[var(--color-primary-flame)] px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-white">
                    {featuredPhotos[0].category} • Featured Moment
                  </span>
                  <h3 className="font-horizon text-xl sm:text-2xl lg:text-3xl font-black uppercase text-white mt-2">
                    {featuredPhotos[0].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/75 mt-1 font-normal">
                    Captured by {featuredPhotos[0].photographer} • Click to browse full high-res gallery
                  </p>
                </div>
              </Link>
            )}

            {/* Right 2 Stacked Cards (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {featuredPhotos.slice(1, 3).map((item) => (
                <Link
                  key={item.id}
                  to="/album"
                  className="rdr-card-sm group relative flex-1 min-h-[195px] overflow-hidden border border-white/10 bg-[#141722] shadow-xl"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block rounded bg-white/15 backdrop-blur-md px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-[var(--color-accent-yellow)]">
                      {item.category}
                    </span>
                    <h4 className="font-horizon text-base sm:text-lg font-black uppercase text-white mt-1">
                      {item.title}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 7: REGISTRATIONS CLOSING SOON (Route du Rhum ".promo" Banner)
          - Vibrant Flame Orange Gradient Card with Diagonal Stripes & Visual Frame
      ===================================================================== */}
      <section className="relative bg-[#141722] py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div
            className="rdr-card relative overflow-hidden p-8 sm:p-12 lg:p-16 shadow-[0_24px_60px_rgba(254,90,0,0.3)] border border-white/20"
            style={{
              background:
                'linear-gradient(118deg, #FF6B1A 0%, #FE5A00 48%, #C83E00 100%)',
            }}
          >
            {/* Diagonal Stripe Texture */}
            <div className="absolute inset-0 bg-diagonal-stripes pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Promo Copy & CTA */}
              <div className="lg:col-span-7 text-white">
                <span className="rdr-trait-white mb-4" />
                <div className="inline-flex items-center gap-2 rounded-full bg-black/25 px-3.5 py-1 text-xs font-extrabold uppercase tracking-[0.18em] text-white mb-3">
                  <Award className="w-3.5 h-3.5 text-[#FAAD36]" />
                  <span>EARLY CONTINGENT SLOTS FILLING FAST</span>
                </div>
                <h2 className="font-horizon text-3xl sm:text-5xl font-black uppercase tracking-wide leading-[1.08] text-white">
                  REGISTRATIONS CLOSING SOON
                </h2>
                <p className="mt-4 text-sm sm:text-base lg:text-lg text-white/90 font-normal max-w-xl leading-relaxed">
                  Secure your university&apos;s slot across Sports, Cultural, Management, and Esports brackets before brackets lock. Get priority campus hospitality and contingent passes.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link
                    to="/register"
                    className="rdr-btn inline-flex items-center gap-3 bg-[#09090B] hover:bg-white text-white hover:text-[#09090B] px-8 py-4 text-sm sm:text-base font-black uppercase tracking-[0.1em] shadow-2xl transition-all duration-200"
                  >
                    <UserPlus className="w-5 h-5" />
                    <span>Register Now</span>
                    <ArrowUpRight className="w-5 h-5" />
                  </Link>
                  <Link
                    to="/contact"
                    className="rdr-btn inline-flex items-center gap-2 border-2 border-white/40 bg-white/10 hover:bg-white/20 px-6 py-4 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white transition"
                  >
                    <span>Contact Contingent Desk</span>
                  </Link>
                </div>
              </div>

              {/* Right Visual Card */}
              <div className="lg:col-span-5">
                <div className="rdr-card-sm overflow-hidden border-2 border-white/30 bg-[#09090B] shadow-2xl relative">
                  <img
                    src="https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&w=900&q=80"
                    alt="Register for FLAME Kurukshetra 2027"
                    loading="lazy"
                    className="w-full h-64 sm:h-72 object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                    <div>
                      <div className="text-[10px] font-extrabold uppercase tracking-widest text-[#FAAD36]">
                        OFFICIAL PORTAL
                      </div>
                      <div className="font-horizon text-sm sm:text-base font-black uppercase">
                        FEB 18–21, 2027 • FLAME PUNE
                      </div>
                    </div>
                    <span className="rounded-lg bg-white text-[#09090B] px-3 py-1 text-xs font-extrabold uppercase">
                      ₹10L+ Prizes
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          EVENT QUICK-VIEW MODAL
      ===================================================================== */}
      {selectedEventModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
          onClick={() => setSelectedEventModal(null)}
        >
          <div
            className="rdr-card max-w-lg w-full bg-[#12141C] border border-white/15 text-white overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-56 w-full">
              <img
                src={selectedEventModal.image}
                alt={selectedEventModal.name}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#12141C] via-black/30 to-transparent" />
              <span className="absolute top-4 left-4 rounded bg-[var(--color-primary-flame)] px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-white">
                {selectedEventModal.categoryLabel}
              </span>
            </div>
            <div className="p-6 sm:p-8">
              <h3 className="font-horizon text-2xl font-black uppercase text-white">
                {selectedEventModal.name}
              </h3>
              <p className="mt-2 text-sm text-white/75 font-normal leading-relaxed">
                {selectedEventModal.desc}
              </p>
              <div className="mt-5 grid grid-cols-2 gap-3 text-xs bg-white/5 rounded-xl p-4 border border-white/10">
                <div>
                  <span className="text-white/50 uppercase block">Dates</span>
                  <span className="font-bold text-white mt-0.5 block">{selectedEventModal.datesText}</span>
                </div>
                <div>
                  <span className="text-white/50 uppercase block">Prize Pool</span>
                  <span className="font-bold text-[var(--color-primary-flame)] mt-0.5 block">{selectedEventModal.prize}</span>
                </div>
                <div>
                  <span className="text-white/50 uppercase block">Venue</span>
                  <span className="font-bold text-white mt-0.5 block">{selectedEventModal.venue}</span>
                </div>
                <div>
                  <span className="text-white/50 uppercase block">Format</span>
                  <span className="font-bold text-white mt-0.5 block">{selectedEventModal.format}</span>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedEventModal(null)}
                  className="rounded-lg border border-white/20 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white/80 hover:text-white"
                >
                  Close
                </button>
                <Link
                  to="/register"
                  className="rdr-btn bg-[var(--color-primary-flame)] hover:bg-[#ea5401] px-6 py-2.5 text-xs font-extrabold uppercase tracking-wider text-white"
                >
                  Register for Event
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
