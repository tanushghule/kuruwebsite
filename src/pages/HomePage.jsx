import React, { useState, useEffect, useMemo, useRef } from 'react';
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

// Target Kickoff: 22nd January 2027 09:00:00 IST (Page 4 Fix)
const TARGET_DATE = new Date('2027-01-22T09:00:00+05:30').getTime();

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
  const [selectedCategory, setSelectedCategory] = useState('cultural');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEventModal, setSelectedEventModal] = useState(null);
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
      const oneCultural = SCHEDULE_EVENTS.find((e) => e.category === 'cultural');
      const oneSports = SCHEDULE_EVENTS.find((e) => e.category === 'sports');
      const oneManagement = SCHEDULE_EVENTS.find((e) => e.category === 'management');
      return [oneCultural, oneSports, oneManagement].filter(Boolean);
    }

    return SCHEDULE_EVENTS.filter((ev) => ev.category === selectedCategory).slice(0, 3);
  }, [selectedCategory, searchQuery]);

  // Highlighted photos for the clickable Vault collage
  const collagePhotos = useMemo(() => ALBUM_MEDIA.slice(0, 6), []);

  return (
    <div className="min-h-screen w-full bg-[#09090B] text-white">
      {/* =====================================================================
          SECTION 1: FULL-BLEED BACKGROUND VIDEO HERO (bgvid.mp4)
      ===================================================================== */}
      <section className="relative min-h-[86vh] sm:min-h-[90vh] w-full flex items-center justify-center overflow-hidden border-b border-white/10 bg-black">
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
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 text-center flex flex-col items-center">
          <span className="rdr-trait mb-4 sm:mb-5" />

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
            Where India&apos;s finest collegiate athletes, artists, and management minds converge across five electrifying days of championship glory.
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
              to="/events"
              className="rdr-btn inline-flex items-center justify-center gap-2.5 border border-white/25 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold uppercase tracking-[0.1em] text-xs sm:text-sm px-6 sm:px-7 py-3.5 sm:py-5 transition w-full sm:w-auto"
            >
              <Calendar className="w-4 h-4 text-[var(--color-primary-flame)]" />
              <span>Explore Events</span>
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 2: COUNTDOWN SECTION (Page 4 Fix)
          - Title: "Official countdown to FLAME Kurukshetra 2027"
          - Date: "22nd-26th January"
          - Removed "Lavale, Pune"
      ===================================================================== */}
      <section className="relative bg-[#12141C] border-b border-white/10 py-10 sm:py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Header */}
          <div className="text-center lg:text-left max-w-lg">
            <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.2em] text-[var(--color-primary-flame)] mb-2">
              <Clock className="w-4 h-4" />
              <span>22ND–26TH JANUARY 2027</span>
            </div>
            <h2 className="font-horizon text-xl sm:text-2xl lg:text-3xl font-black uppercase tracking-wide text-white leading-snug">
              Official countdown to FLAME Kurukshetra 2027
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-white/70 font-normal">
              22nd–26th January • FLAME University Campus
            </p>
          </div>

          {/* Center: Skewed Countdown Blocks */}
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
              Five days of high-stakes inter-university rivalries across Olympic-grade turfs, indoor hardwood courts, amphitheater stages, and management war rooms.
            </p>
          </div>

          {/* 4 Credibility Counter Cards */}
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
                sub: 'Players, performers, and strategists competing on campus',
                accent: '#FAAD36',
              },
              {
                number: '20+',
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

      <SectionWaveDivider topColor="#1A1D27" bottomColor="#F4F1E8" />

      {/* =====================================================================
          SECTION 4: DISCIPLINES & EVENTS (Page 5 Fix)
          - Removed "Esports"
          - Renamed "Management" to "Management Events"
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
                Switch between categories or search below to inspect the top featured events across Sports, Cultural, and Management Events.
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

          {/* Category Filter Buttons: Cultural, Sports, Management Events, 1 of Each Category (Esports removed per Page 5) */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 sm:mb-10 pb-5 sm:pb-6 border-b border-[#0E111D]/10">
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 sm:pb-0 sm:flex-wrap">
              {[
                { id: 'cultural', label: 'Cultural' },
                { id: 'sports', label: 'Sports' },
                { id: 'management', label: 'Management Events' },
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
              to="/events"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[var(--color-primary-flame)] hover:underline shrink-0"
            >
              <span>View All Events Directory</span>
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
                Try searching for Football, Basketball, Band, Dance, or Shark Arena.
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

      <SectionWaveDivider topColor="#F4F1E8" bottomColor="#141722" flip />

      {/* =====================================================================
          SECTION 5: ABOUT SECTION (Page 7 Fix)
          - Photo updated to FLAME Campus (/flamecampusphoto.jpg)
          - Updated About FLAME Kurukshetra main body content
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

            <p className="mt-5 text-sm sm:text-base text-white/85 font-normal leading-relaxed">
              FLAME Kurukshetra is the flagship annual inter-collegiate festival of FLAME University—an exhilarating five-day convergence of Sports, Cultural, and Management Events where top universities across India compete for ultimate glory.
            </p>
            <p className="mt-3.5 text-sm sm:text-base text-white/75 font-normal leading-relaxed">
              Hosted across FLAME University&apos;s world-class athletic turfs, Olympic-size swimming pool, synthetic courts, indoor sports complex, and open-air amphitheater from 22nd to 26th January 2027, Kurukshetra unites fierce championship spirit with unforgettable campus camaraderie, artist pro-nights, and intellectual showdowns.
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
                  Culturals &amp; Stage
                </div>
                <p className="text-xs text-white/60 mt-1 font-normal">
                  Concert-grade amphitheater evenings, band battles &amp; dance showcases.
                </p>
              </div>
              <div className="rounded-xl bg-white/[0.04] border border-white/10 p-4">
                <ShieldCheck className="w-5 h-5 text-emerald-400 mb-2" />
                <div className="text-xs font-extrabold uppercase tracking-wider text-white">
                  Management Arena
                </div>
                <p className="text-xs text-white/60 mt-1 font-normal">
                  High-stakes venture pitches, crisis simulations &amp; trading floors.
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

          {/* Right Part: Official FLAME Campus Photo (flamecampusphoto.jpg — Page 7 Fix) */}
          <div className="lg:col-span-6 relative">
            <div className="rdr-card relative overflow-hidden border-2 border-white/15 bg-[#09090B] shadow-[0_24px_60px_rgba(0,0,0,0.6)]">
              <img
                src="/flamecampusphoto.jpg"
                alt="FLAME University Campus Sports Complex & Turf"
                loading="lazy"
                className="w-full h-[360px] sm:h-[460px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />

              {/* Bottom Overlay Caption inside Image */}
              <div className="absolute bottom-5 left-5 right-5 flex flex-col sm:flex-row sm:items-end justify-between gap-4 bg-black/75 backdrop-blur-md border border-white/15 rounded-2xl p-4">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[var(--color-primary-flame)]">
                    FLAME UNIVERSITY CAMPUS
                  </span>
                  <div className="font-horizon text-base sm:text-lg font-black uppercase text-white mt-0.5">
                    60-Acre Championship Arena
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-lg bg-[var(--color-primary-flame)] px-3 py-1.5 text-xs font-extrabold uppercase text-white shrink-0">
                  <Zap className="w-3.5 h-3.5" />
                  22nd–26th Jan 2027
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 6: ORGANIZING COMMITTEE (All 17 Visible) & PHOTO VAULT COLLAGE
      ===================================================================== */}
      <section className="relative bg-[#0B0C10] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          {/* PART A: ALL 17 ORGANIZING COMMITTEE MEMBERS COLLAGE */}
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
              <span>Meet the OC</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* All 17 Committee Members Collage Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 sm:gap-4">
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
                      'linear-gradient(180deg, rgba(9,9,11,0.05) 35%, rgba(9,9,11,0.92) 100%)',
                  }}
                />
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="inline-block rounded bg-[var(--color-primary-flame)] px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-wider text-white truncate max-w-full">
                    {head.idBadge}
                  </span>
                  <h3 className="font-horizon text-sm sm:text-base font-black uppercase text-white mt-1 leading-tight truncate">
                    {head.name}
                  </h3>
                  <p className="text-[11px] text-white/70 font-normal truncate">
                    {head.role}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Divider Line */}
          <div className="my-16 sm:my-20 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />

          {/* PART B: LAST YEAR'S HIGHLIGHTS COLLAGE (Clicking Anywhere Redirects to /album) */}
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

          {/* Entire Collage Wrapped in Link to /album */}
          <Link
            to="/album"
            className="group block rounded-3xl border border-white/15 bg-[#12141C] p-3 sm:p-5 hover:border-[var(--color-primary-flame)] transition-all shadow-2xl"
          >
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
              {collagePhotos.map((item, idx) => (
                <div
                  key={item.id}
                  className={cn(
                    'relative overflow-hidden rounded-2xl bg-black border border-white/10',
                    idx === 0 ? 'col-span-2 md:col-span-2 h-56 sm:h-72' : 'h-48 sm:h-72'
                  )}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-end justify-between gap-2">
                    <div>
                      <span className="inline-block rounded bg-[var(--color-primary-flame)] px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-white">
                        {item.category}
                      </span>
                      <h4 className="font-horizon text-sm sm:text-base font-bold uppercase text-white mt-1 line-clamp-1">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-center gap-2 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[var(--color-primary-flame)] py-1">
              <Camera className="w-4 h-4" />
              <span>Click anywhere on collage to explore the complete Photo Vault</span>
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </Link>
        </div>
      </section>

      {/* =====================================================================
          SECTION 7: REGISTRATIONS CLOSING SOON BANNER
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
            <div className="absolute inset-0 bg-diagonal-stripes pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
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
                  Secure your university&apos;s slot across Sports, Cultural, and Management Events before brackets lock. Get priority campus hospitality and contingent passes.
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

              <div className="lg:col-span-5">
                <div className="rdr-card-sm overflow-hidden border-2 border-white/30 bg-[#09090B] shadow-2xl relative">
                  <img
                    src="/flamecampusphoto.jpg"
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
                        22ND–26TH JAN 2027 • FLAME UNIVERSITY
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
