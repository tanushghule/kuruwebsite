import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Trophy,
  Calendar,
  ArrowUpRight,
  Search,
  Users,
  Sparkles,
  ShieldCheck,
  UserPlus,
  Clock,
  ChevronRight,
  Award,
  Zap,
} from 'lucide-react';
import {
  SCHEDULE_EVENTS,
  COMMITTEE_HEADS,
} from '../data/websiteContent';
import { cn } from '../utils/cn';

// Target Kickoff: 22nd January 2027 09:00:00 IST
const TARGET_DATE = new Date('2027-01-22T09:00:00+05:30').getTime();

// 9 distinct photos for the 3x3 Highlights Collage
const COLLAGE_NINE_PHOTOS = [
  { id: 'c-1', image: '/assets/collage/collage-1.jpg', title: 'Kurukshetra Arena Highlights' },
  { id: 'c-2', image: '/assets/collage/collage-2.jpg', title: 'Mainstage Cultural Showcase' },
  { id: 'c-3', image: '/assets/collage/collage-3.jpg', title: 'Track & Field Championship' },
  { id: 'c-4', image: '/assets/collage/collage-4.jpg', title: 'Inter-University Showdown' },
  { id: 'c-5', image: '/assets/collage/collage-5.jpg', title: 'Floodlit Turf Action' },
  { id: 'c-6', image: '/assets/collage/collage-6.jpg', title: 'Amphitheater Evening Energy' },
  { id: 'c-7', image: '/assets/collage/collage-7.jpg', title: 'Court Championship Rally' },
  { id: 'c-8', image: '/assets/collage/collage-8.jpg', title: 'Team Spirit & Podium Glory' },
  { id: 'c-9', image: '/assets/collage/collage-9.jpg', title: 'Campus Festival Moments' },
];

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
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const countdown = useCountdown(TARGET_DATE);
  const heroVideoRef = useRef(null);

  useEffect(() => {
    const vid = heroVideoRef.current;
    if (vid) {
      vid.defaultMuted = true;
      vid.muted = true;
      vid.play().catch(() => {});
    }
  }, []);

  // Dynamic array of all events (filtered if user selects a category or types a search query)
  const displayedEvents = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return SCHEDULE_EVENTS.filter((ev) => {
      const matchesCat =
        selectedCategory === 'all' || ev.category === selectedCategory;
      const matchesQuery =
        !query ||
        ev.name.toLowerCase().includes(query) ||
        ev.categoryLabel.toLowerCase().includes(query);
      return matchesCat && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  // Duplicate list for seamless infinite horizontal marquee scrolling
  const marqueeEvents = useMemo(() => {
    if (displayedEvents.length === 0) return [];
    return [...displayedEvents, ...displayedEvents];
  }, [displayedEvents]);

  return (
    <div className="min-h-screen w-full bg-[#09090B] text-white overflow-x-hidden">
      {/* =====================================================================
          SECTION 1: FULL-BLEED BACKGROUND VIDEO HERO (bgvid.mp4)
      ===================================================================== */}
      <section className="relative min-h-[82vh] sm:min-h-[90vh] w-full flex items-center justify-center overflow-hidden border-b border-white/10 bg-black">
        {/* Background Video (bgvid.mp4) */}
        <video
          ref={heroVideoRef}
          src="/bgvid.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover object-center z-0"
        >
          <source src="/bgvid.mp4" type="video/mp4" />
        </video>

        {/* Slight Black Overlay on top of bgvid.mp4 */}
        <div className="absolute inset-0 bg-black/45 z-[1]" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#12141C] to-transparent z-[1]" />

        {/* Hero Center Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 text-center flex flex-col items-center">
          <span className="rdr-trait mb-4 sm:mb-5" />

          <h1 className="font-horizon-wide text-[1.75rem] min-[375px]:text-[2.05rem] sm:text-5xl lg:text-6xl xl:text-[4.75rem] font-black uppercase tracking-[0.02em] sm:tracking-[0.05em] text-white leading-[1.08] drop-shadow-[0_8px_30px_rgba(0,0,0,0.7)]">
            FLAME{' '}
            <span className="block sm:inline text-[var(--color-primary-flame)]">
              KURUKSHETRA 2027
            </span>
          </h1>

          <p className="mt-3 sm:mt-4 text-[11px] min-[375px]:text-xs sm:text-lg lg:text-xl font-bold uppercase tracking-[0.14em] sm:tracking-[0.26em] text-white/90">
            The Conclave of Champions • 19th Edition
          </p>

          <p className="mt-3.5 sm:mt-5 max-w-2xl text-xs sm:text-base lg:text-lg text-white/80 font-normal leading-relaxed px-1">
            Where India&apos;s finest collegiate athletes, artists, and management minds converge across five electrifying days of championship glory.
          </p>

          {/* Most Prominent Element: Register Now CTA */}
          <div className="mt-7 sm:mt-11 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto px-2 sm:px-0">
            <Link
              to="/register"
              className="rdr-btn group relative inline-flex items-center justify-center gap-2 sm:gap-3 bg-[var(--color-primary-flame)] hover:bg-[#ff6a1a] text-white font-black uppercase tracking-[0.06em] sm:tracking-[0.12em] text-xs min-[375px]:text-sm sm:text-lg px-5 sm:px-12 py-3.5 sm:py-5 shadow-[0_14px_45px_rgba(254,90,0,0.6)] hover:shadow-[0_18px_55px_rgba(254,90,0,0.8)] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 w-full sm:w-auto"
            >
              <UserPlus className="w-4 h-4 sm:w-6 sm:h-6 shrink-0" />
              <span>Register Contingent Now</span>
              <ArrowUpRight className="w-4 h-4 sm:w-6 sm:h-6 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
            </Link>

            <Link
              to="/events"
              className="rdr-btn inline-flex items-center justify-center gap-2 border border-white/25 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold uppercase tracking-[0.1em] text-xs sm:text-sm px-5 sm:px-7 py-3.5 sm:py-5 transition w-full sm:w-auto"
            >
              <Calendar className="w-4 h-4 text-[var(--color-primary-flame)]" />
              <span>Explore Events</span>
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 2: COUNTDOWN SECTION
      ===================================================================== */}
      <section className="relative bg-[#12141C] border-b border-white/10 py-9 sm:py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
          {/* Left Header */}
          <div className="text-center lg:text-left max-w-lg">
            <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.2em] text-[var(--color-primary-flame)] mb-2">
              <Clock className="w-4 h-4" />
              <span>22ND–26TH JANUARY 2027</span>
            </div>
            <h2 className="font-horizon text-lg sm:text-2xl lg:text-3xl font-black uppercase tracking-wide text-white leading-snug">
              Official countdown to FLAME Kurukshetra 2027
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-white/70 font-normal">
              22nd–26th January • FLAME University Campus
            </p>
          </div>

          {/* Center: Skewed Countdown Blocks */}
          <div className="grid grid-cols-4 gap-2 sm:gap-5 w-full lg:w-auto">
            {[
              { value: String(countdown.days).padStart(2, '0'), label: 'DAYS', accent: '#FE5A00' },
              { value: String(countdown.hours).padStart(2, '0'), label: 'HOURS', accent: '#FAAD36' },
              { value: String(countdown.minutes).padStart(2, '0'), label: 'MINUTES', accent: '#FFFFFF' },
              { value: String(countdown.seconds).padStart(2, '0'), label: 'SECONDS', accent: '#FE5A00' },
            ].map((unit) => (
              <div
                key={unit.label}
                className="rdr-skew-stat bg-[#1B1E2B]/90 border border-white/10 px-2 py-3 sm:px-7 sm:py-5 shadow-lg flex flex-col items-center justify-center sm:min-w-[125px]"
                style={{ borderLeft: `3px solid ${unit.accent}` }}
              >
                <span className="font-horizon text-xl min-[375px]:text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-wider tabular-nums leading-none">
                  {unit.value}
                </span>
                <span
                  className="mt-1.5 sm:mt-2 text-[9px] sm:text-xs font-extrabold uppercase tracking-[0.12em] sm:tracking-[0.22em]"
                  style={{ color: unit.accent }}
                >
                  {unit.label}
                </span>
              </div>
            ))}
          </div>

          {/* Right Quick Action */}
          <div className="shrink-0 w-full sm:w-auto">
            <Link
              to="/register"
              className="rdr-btn w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-[#09090B] hover:bg-[var(--color-primary-flame)] hover:text-white px-6 py-3.5 text-xs sm:text-sm font-extrabold uppercase tracking-wider transition shadow-md"
            >
              <span>Lock Contingent Slot</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 3: CREDIBILITY COUNTERS SECTION
      ===================================================================== */}
      <section className="relative bg-[#1A1D27] bg-blueprint-grid py-12 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-10">
            <div>
              <span className="rdr-trait mb-3" />
              <div className="text-xs font-extrabold uppercase tracking-[0.2em] text-[var(--color-primary-flame)]">
                SCALE OF THE BATTLEGROUND
              </div>
              <h2 className="font-horizon text-xl sm:text-4xl font-black uppercase tracking-wide text-white mt-1">
                INDIA&apos;S PREMIER COLLEGIATE CONCLAVE
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-white/75 max-w-md font-normal leading-relaxed">
              Five days of inter-university competition backed by world-class sporting infrastructure and facilities, vibrant cultural stages, and management arenas.
            </p>
          </div>

          {/* 4 Credibility Counter Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
            {[
              {
                number: '50+',
                label: 'PARTNER UNIVERSITIES',
                sub: 'National contingents competing for the Overall Championship',
                accent: '#FE5A00',
              },
              {
                number: '8.5K+',
                label: 'COLLEGIATE ATHLETES',
                sub: 'Players, performers, and strategists competing on campus',
                accent: '#FAAD36',
              },
              {
                number: '35+',
                label: 'FLAGSHIP DISCIPLINES',
                sub: 'Spanning Sports, Cultural, and Management Events arenas',
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
                    className="font-horizon text-2xl sm:text-5xl font-black tracking-wide leading-none"
                    style={{ color: stat.accent }}
                  >
                    {stat.number}
                  </div>
                  <div className="mt-2 sm:mt-3 text-[10px] sm:text-sm font-extrabold uppercase tracking-[0.06em] sm:tracking-[0.14em] text-white leading-snug">
                    {stat.label}
                  </div>
                </div>
                <p className="mt-2 sm:mt-3 text-[11px] sm:text-sm text-white/65 font-normal leading-relaxed">
                  {stat.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionWaveDivider topColor="#1A1D27" bottomColor="#F4F1E8" />

      {/* =====================================================================
          SECTION 4: DISCIPLINES & EVENTS — CONTINUOUS SLOW HORIZONTAL MARQUEE
          - All events rendered in a smooth, continuous horizontal marquee
          - Stops on hover
          - Cards display big image + 60-70% dark overlay + Event Title only
      ===================================================================== */}
      <section
        id="event-search"
        className="relative bg-[#F4F1E8] text-[#0E111D] py-14 sm:py-24 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Row */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 sm:mb-10">
            <div>
              <span className="rdr-trait mb-3" />
              <div className="text-xs font-extrabold uppercase tracking-[0.2em] text-[var(--color-primary-flame)]">
                CHOOSE YOUR ARENA
              </div>
              <h2 className="font-horizon text-2xl sm:text-5xl font-black uppercase tracking-wide text-[#0E111D] mt-1">
                DISCIPLINES &amp; <span className="text-[var(--color-primary-flame)]">EVENTS</span>
              </h2>
              <p className="mt-2 text-xs sm:text-base text-[#0E111D]/70 max-w-xl font-normal">
                Explore all {SCHEDULE_EVENTS.length} official disciplines across Sports, Cultural, and Management Events. Hover over any card to pause the reel.
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
                  placeholder="Search football, dance, management..."
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

          {/* Category Filter Buttons */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-5 border-b border-[#0E111D]/10">
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 sm:pb-0 sm:flex-wrap">
              {[
                { id: 'all', label: `All Events (${SCHEDULE_EVENTS.length})` },
                { id: 'sports', label: 'Sports' },
                { id: 'cultural', label: 'Cultural' },
                { id: 'management', label: 'Management Events' },
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
              to="/events"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[var(--color-primary-flame)] hover:underline shrink-0"
            >
              <span>View All Events Directory</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Continuous Non-Stop Slow Horizontal Marquee (Pauses on Hover) */}
        {displayedEvents.length === 0 ? (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl bg-white border border-[#0E111D]/10 p-10 text-center">
              <p className="text-lg font-bold text-[#0E111D]">
                No events matched &ldquo;{searchQuery}&rdquo;
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="rdr-btn mt-4 bg-[var(--color-primary-flame)] text-white px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider"
              >
                Reset Filter
              </button>
            </div>
          </div>
        ) : (
          <div className="relative w-full overflow-hidden py-2">
            <div
              className="flex w-max gap-5 sm:gap-7 px-4 sm:px-6 hover:[animation-play-state:paused]"
              style={{
                animation: `kuruEventsMarquee ${Math.max(45, displayedEvents.length * 4.5)}s linear infinite`,
              }}
            >
              {marqueeEvents.map((event, idx) => (
                <Link
                  key={`${event.id}-${idx}`}
                  to="/events"
                  className="group relative w-[270px] sm:w-[350px] h-[340px] sm:h-[420px] shrink-0 rounded-2xl overflow-hidden bg-[#0E111D] border border-[#0E111D]/15 shadow-[0_14px_34px_rgba(14,17,29,0.16)] hover:shadow-[0_22px_50px_rgba(254,90,0,0.28)] transition-all duration-300"
                >
                  <img
                    src={event.image}
                    alt={event.name}
                    loading="lazy"
                    className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Dark shaded layer: 20% opacity at top to 70% opacity at bottom */}
                  <div
                    className="absolute inset-0 transition-opacity duration-300"
                    style={{
                      background:
                        'linear-gradient(180deg, rgba(0,0,0,0.22) 0%, rgba(0,0,0,0.52) 55%, rgba(0,0,0,0.75) 100%)',
                    }}
                  />
                  {/* Event Title Overlaid on the Image */}
                  <div className="absolute inset-0 p-6 sm:p-7 flex flex-col justify-end">
                    <h3 className="font-horizon text-xl sm:text-2xl font-black uppercase tracking-wide text-white group-hover:text-[var(--color-primary-flame)] transition-colors leading-snug drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
                      {event.name}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
            <style>{`
              @keyframes kuruEventsMarquee {
                0% {
                  transform: translate3d(0, 0, 0);
                }
                100% {
                  transform: translate3d(-50%, 0, 0);
                }
              }
            `}</style>
          </div>
        )}
      </section>

      <SectionWaveDivider topColor="#F4F1E8" bottomColor="#141722" flip />

      {/* =====================================================================
          SECTION 5: ABOUT SECTION
          - Simple, clear English referencing Arjuna sports complex & 70-acre campus
      ===================================================================== */}
      <section className="relative bg-[#141722] py-14 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Part: Text Narrative */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="rdr-trait mb-4" />
            <div className="text-xs font-extrabold uppercase tracking-[0.22em] text-[var(--color-primary-flame)]">
              ABOUT FLAME KURUKSHETRA
            </div>
            <h2 className="font-horizon text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-wide text-white mt-2 leading-[1.12]">
              WHERE LEGENDS RISE &amp;{' '}
              <span className="text-[var(--color-primary-flame)]">
                RIVALRIES ARE FORGED
              </span>
            </h2>

            <p className="mt-5 text-sm sm:text-base text-white/85 font-normal leading-relaxed">
              FLAME Kurukshetra is the flagship annual inter-collegiate festival of FLAME University, bringing together students from universities across India for five days of Sports, Cultural, and Management Events.
            </p>
            <p className="mt-3.5 text-sm sm:text-base text-white/75 font-normal leading-relaxed">
              Hosted across FLAME University&apos;s 70-acre campus and the Arjuna sports complex from 22nd to 26th January 2027, the festival features world-class sporting infrastructure and facilities alongside vibrant cultural stages and management competitions.
            </p>

            {/* 3 Compact Feature Pillars */}
            <div className="mt-7 grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 w-full">
              <div className="rounded-xl bg-white/[0.04] border border-white/10 p-4">
                <Trophy className="w-5 h-5 text-[var(--color-primary-flame)] mb-2" />
                <div className="text-xs font-extrabold uppercase tracking-wider text-white">
                  Arjuna Sports Complex
                </div>
                <p className="text-xs text-white/60 mt-1 font-normal">
                  World-class sporting infrastructure, outdoor turfs, and indoor courts.
                </p>
              </div>
              <div className="rounded-xl bg-white/[0.04] border border-white/10 p-4">
                <Sparkles className="w-5 h-5 text-[var(--color-accent-yellow)] mb-2" />
                <div className="text-xs font-extrabold uppercase tracking-wider text-white">
                  Culturals &amp; Stage
                </div>
                <p className="text-xs text-white/60 mt-1 font-normal">
                  Amphitheater evenings, group &amp; solo dance, music, and theatre showcases.
                </p>
              </div>
              <div className="rounded-xl bg-white/[0.04] border border-white/10 p-4">
                <ShieldCheck className="w-5 h-5 text-emerald-400 mb-2" />
                <div className="text-xs font-extrabold uppercase tracking-wider text-white">
                  Management Arena
                </div>
                <p className="text-xs text-white/60 mt-1 font-normal">
                  Case competitions, bidding wars, MUN debates, and business strategy challenges.
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

          {/* Right Part: Official FLAME Campus Photo */}
          <div className="lg:col-span-6 relative">
            <div className="rdr-card relative overflow-hidden border-2 border-white/15 bg-[#09090B] shadow-[0_24px_60px_rgba(0,0,0,0.6)]">
              <img
                src="/flamecampusphoto.jpg"
                alt="FLAME University 70-Acre Campus & Arjuna Sports Complex"
                loading="lazy"
                className="w-full h-[300px] sm:h-[460px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />

              {/* Bottom Overlay Caption inside Image */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 flex flex-col sm:flex-row sm:items-end justify-between gap-3 bg-black/75 backdrop-blur-md border border-white/15 rounded-2xl p-3.5 sm:p-4">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[var(--color-primary-flame)]">
                    FLAME UNIVERSITY • ARJUNA COMPLEX
                  </span>
                  <div className="font-horizon text-sm sm:text-lg font-black uppercase text-white mt-0.5">
                    70-Acre Championship Campus
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-lg bg-[var(--color-primary-flame)] px-3 py-1.5 text-xs font-extrabold uppercase text-white shrink-0 self-start sm:self-auto">
                  <Zap className="w-3.5 h-3.5" />
                  22nd–26th Jan 2027
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 6: ORGANIZING COMMITTEE (3-per-row on mobile, 30% Eye-Level Aligned)
          & 3x3 HIGHLIGHTS COLLAGE
      ===================================================================== */}
      <section className="relative bg-[#0B0C10] py-14 sm:py-24 px-3 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          {/* PART A: ALL 17 ORGANIZING COMMITTEE MEMBERS COLLAGE */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10 px-1">
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
              <span>Meet the OC</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* 3-per-row on mobile, 4 on tablet, 6 on desktop — Eye-level aligned at 30% */}
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-4">
            {COMMITTEE_HEADS.map((head) => (
              <Link
                key={head.id}
                to="/committee"
                className="rdr-card-sm group relative aspect-[4/5] overflow-hidden bg-[#161923] border border-white/10 hover:border-[var(--color-primary-flame)] shadow-lg transition-all duration-300"
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
                      'linear-gradient(180deg, rgba(9,9,11,0.02) 45%, rgba(9,9,11,0.92) 100%)',
                  }}
                />
                <div className="absolute bottom-2 left-2 right-2 sm:bottom-3 sm:left-3 sm:right-3">
                  <h3 className="font-horizon text-[10px] min-[380px]:text-xs sm:text-sm font-black uppercase text-white leading-tight truncate">
                    {head.name}
                  </h3>
                  <p className="text-[9px] sm:text-[11px] text-[var(--color-primary-flame)] font-bold truncate mt-0.5">
                    {head.role}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Divider Line */}
          <div className="my-14 sm:my-20 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />

          {/* PART B: 3x3 HIGHLIGHTS COLLAGE (All 9 Grid Slots Filled) */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10 px-1">
            <div>
              <span className="rdr-trait mb-3" />
              <div className="text-xs font-extrabold uppercase tracking-[0.2em] text-[var(--color-primary-flame)]">
                RELIVE THE GLORY
              </div>
              <h2 className="font-horizon text-2xl sm:text-4xl font-black uppercase tracking-wide text-white mt-1">
                HIGHLIGHTS FROM <span className="text-[var(--color-primary-flame)]">LAST EDITION</span>
              </h2>
            </div>
          </div>

          <div className="rounded-2xl sm:rounded-3xl border border-white/15 bg-[#12141C] p-2.5 sm:p-5 shadow-2xl">
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              {COLLAGE_NINE_PHOTOS.map((item) => (
                <div
                  key={item.id}
                  className="group relative aspect-[4/3] overflow-hidden rounded-xl sm:rounded-2xl bg-black border border-white/10"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 7: REGISTRATIONS OPEN NOW BANNER
      ===================================================================== */}
      <section className="relative bg-[#141722] py-14 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div
            className="rdr-card relative overflow-hidden p-6 sm:p-12 lg:p-16 shadow-[0_24px_60px_rgba(254,90,0,0.3)] border border-white/20"
            style={{
              background:
                'linear-gradient(118deg, #FF6B1A 0%, #FE5A00 48%, #C83E00 100%)',
            }}
          >
            <div className="absolute inset-0 bg-diagonal-stripes pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7 text-white">
                <span className="rdr-trait-white mb-4" />
                <div className="inline-flex items-center gap-2 rounded-full bg-black/25 px-3.5 py-1 text-[10px] sm:text-xs font-extrabold uppercase tracking-[0.16em] text-white mb-3">
                  <Award className="w-3.5 h-3.5 text-[#FAAD36]" />
                  <span>19TH EDITION • CONTINGENT REGISTRATIONS LIVE</span>
                </div>
                <h2 className="font-horizon text-2xl sm:text-5xl font-black uppercase tracking-wide leading-[1.08] text-white">
                  REGISTRATIONS OPEN NOW
                </h2>
                <p className="mt-4 text-sm sm:text-base lg:text-lg text-white/90 font-normal max-w-xl leading-relaxed">
                  Secure your university&apos;s slot across Sports, Cultural, and Management Events. Register your contingent and lock in priority campus hospitality.
                </p>

                <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3.5 sm:gap-4">
                  <Link
                    to="/register"
                    className="rdr-btn inline-flex items-center justify-center gap-3 bg-[#09090B] hover:bg-white text-white hover:text-[#09090B] px-7 sm:px-8 py-4 text-xs sm:text-base font-black uppercase tracking-[0.1em] shadow-2xl transition-all duration-200"
                  >
                    <UserPlus className="w-5 h-5" />
                    <span>Register Now</span>
                    <ArrowUpRight className="w-5 h-5" />
                  </Link>
                  <Link
                    to="/contact"
                    className="rdr-btn inline-flex items-center justify-center gap-2 border-2 border-white/40 bg-white/10 hover:bg-white/20 px-6 py-4 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white transition"
                  >
                    <span>Contact Contingent Desk</span>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rdr-card-sm overflow-hidden border-2 border-white/30 bg-[#09090B] shadow-2xl relative">
                  <img
                    src="/assets/collage/collage-1.jpg"
                    alt="Register for FLAME Kurukshetra 2027"
                    loading="lazy"
                    className="w-full h-56 sm:h-72 object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                    <div>
                      <div className="text-[10px] font-extrabold uppercase tracking-widest text-[#FAAD36]">
                        OFFICIAL PORTAL
                      </div>
                      <div className="font-horizon text-base sm:text-lg font-black uppercase">
                        22nd–26th January 2027
                      </div>
                    </div>
                    <span className="h-3 w-3 rounded-full bg-emerald-400 animate-ping" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
