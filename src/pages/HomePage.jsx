import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Flame,
  Trophy,
  Calendar,
  Radio,
  ArrowRight,
  Search,
  MapPin,
  Clock,
  Sparkles,
  Users,
  Award,
  ChevronRight,
  ExternalLink,
  Shield,
  Zap,
} from 'lucide-react';
import { SCHEDULE_EVENTS, TICKER_MATCHUPS } from '../data/websiteContent';
import { cn } from '../utils/cn';

export default function HomePage() {
  const [bannerMode, setBannerMode] = useState('live'); // 'live' | 'countdown'
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Countdown State
  const [timeLeft, setTimeLeft] = useState({
    days: 118,
    hours: 14,
    minutes: 32,
    seconds: 45,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        }
        if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        }
        if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Filter events based on search and category
  const filteredEvents = SCHEDULE_EVENTS.filter((ev) => {
    const matchesCategory =
      selectedCategory === 'all' || ev.category === selectedCategory;
    const matchesSearch =
      ev.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ev.venue.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ev.desc.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full flex flex-col bg-[#09090B] text-white overflow-hidden">
      {/* =========================================================================
           1. TOP CURRENT MATCHUPS BANNER / COUNTDOWN TOGGLE
           ========================================================================= */}
      <section className="w-full border-b border-white/10 bg-[#0C0C10] py-3 px-4">
        <div className="max-w-7xl mx-auto flex flex-col gap-3">
          {/* Header Controls */}
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-[var(--color-primary-flame)] animate-pulse" />
              <span className="font-mono font-bold tracking-wider uppercase text-white/90">
                {bannerMode === 'live' ? 'CURRENT LIVE ARENAS' : 'COUNTDOWN TO KURUKSHETRA'}
              </span>
            </div>

            <button
              type="button"
              onClick={() => setBannerMode((prev) => (prev === 'live' ? 'countdown' : 'live'))}
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/5 hover:bg-white/10 px-3 py-1 font-mono text-xs text-white/80 transition"
            >
              <Zap className="w-3.5 h-3.5 text-[var(--color-primary-flame)]" />
              <span>{bannerMode === 'live' ? 'Switch to Countdown' : 'Switch to Live Scores'}</span>
            </button>
          </div>

          {/* Mode 1: Live Matchups Rail */}
          {bannerMode === 'live' ? (
            <div className="flex items-center gap-3 overflow-x-auto no-scrollbar py-1">
              {TICKER_MATCHUPS.map((match) => (
                <Link
                  key={match.id}
                  to={match.link}
                  className="flex-shrink-0 flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] hover:border-[var(--color-primary-flame)]/50 px-4 py-2.5 transition group"
                >
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono uppercase text-white/50 tracking-wider">
                      {match.sport} • {match.stage}
                    </span>
                    <span className="text-xs font-bold text-white group-hover:text-[var(--color-primary-flame)] transition">
                      {match.teamA} <span className="text-white/40">vs</span> {match.teamB}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 border-l border-white/10 pl-3">
                    <span className="font-mono text-xs font-bold text-[var(--color-accent-yellow)]">
                      {match.score}
                    </span>
                    <span className="rounded-full bg-emerald-500/20 text-emerald-400 text-[9px] font-mono font-bold px-1.5 py-0.5">
                      {match.status}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            /* Mode 2: Countdown Timer */
            <div className="flex items-center justify-center gap-3 sm:gap-6 py-2">
              {[
                { label: 'DAYS', val: timeLeft.days },
                { label: 'HOURS', val: timeLeft.hours },
                { label: 'MINUTES', val: timeLeft.minutes },
                { label: 'SECONDS', val: timeLeft.seconds },
              ].map((unit) => (
                <div
                  key={unit.label}
                  className="flex flex-col items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2 min-w-[70px] sm:min-w-[90px]"
                >
                  <span className="font-mono text-xl sm:text-2xl font-black text-[var(--color-primary-flame)]">
                    {String(unit.val).padStart(2, '0')}
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-mono tracking-wider text-white/60">
                    {unit.label}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* =========================================================================
           2. HERO SECTION
           ========================================================================= */}
      <section className="relative w-full py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-blueprint-grid overflow-hidden border-b border-white/10">
        {/* Ambient Phoenix Glow */}
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[var(--color-primary-flame)]/15 rounded-full blur-[140px]" />
        
        <div className="relative max-w-5xl mx-auto flex flex-col items-center text-center">
          {/* Badge Pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-mono tracking-widest uppercase text-white/80 mb-6 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-[var(--color-primary-flame)] animate-ping" />
            <span>FEB 18–21, 2027 • FLAME CAMPUS, PUNE</span>
          </div>

          {/* Main Display Headline */}
          <h1 className="font-horizon text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-tight">
            FLAME <span className="text-[var(--color-primary-flame)]">KURUKSHETRA</span>
          </h1>

          <p className="font-horizon-outlined text-2xl sm:text-3xl lg:text-4xl text-white/80 uppercase tracking-wider mt-1">
            THE CONCLAVE OF CHAMPIONS
          </p>

          <p className="max-w-2xl text-base sm:text-lg text-white/70 mt-6 leading-relaxed">
            Western India&apos;s premier collegiate sports, cultural, and management battleground. 
            Where 50+ universities, 2,500+ athletes, and ₹10L+ in cash prizes collide across four legendary days.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <Link
              to="/register"
              className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary-flame)] hover:bg-[#ea5401] px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-[0_0_25px_rgba(254,90,0,0.5)] transition duration-200 active:scale-95"
            >
              <span>Register Contingent</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/schedule"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 hover:bg-white/20 px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition duration-200"
            >
              <Calendar className="w-4 h-4 text-[var(--color-primary-flame)]" />
              <span>Full Schedule</span>
            </Link>

            <Link
              to="/live-events"
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--color-primary-flame)]/40 bg-[var(--color-primary-flame)]/15 hover:bg-[var(--color-primary-flame)]/25 px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-[var(--color-primary-flame)] transition duration-200"
            >
              <Radio className="w-4 h-4 animate-pulse" />
              <span>Live Arena</span>
            </Link>
          </div>

          {/* Telemetry Stats Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full max-w-4xl mt-16 pt-10 border-t border-white/10">
            <div className="flex flex-col items-center p-4 rounded-2xl bg-white/[0.03] border border-white/10">
              <span className="font-horizon text-3xl sm:text-4xl font-bold text-[var(--color-primary-flame)]">50+</span>
              <span className="text-xs font-mono uppercase tracking-wider text-white/60 mt-1">Universities</span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-2xl bg-white/[0.03] border border-white/10">
              <span className="font-horizon text-3xl sm:text-4xl font-bold text-white">2,500+</span>
              <span className="text-xs font-mono uppercase tracking-wider text-white/60 mt-1">Athletes</span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-2xl bg-white/[0.03] border border-white/10">
              <span className="font-horizon text-3xl sm:text-4xl font-bold text-[var(--color-accent-yellow)]">20+</span>
              <span className="text-xs font-mono uppercase tracking-wider text-white/60 mt-1">Disciplines</span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-2xl bg-white/[0.03] border border-white/10">
              <span className="font-horizon text-3xl sm:text-4xl font-bold text-emerald-400">₹10L+</span>
              <span className="text-xs font-mono uppercase tracking-wider text-white/60 mt-1">Prize Pool</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
           3. AFFILIATED FLAGSHIPS SECTION
           ========================================================================= */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 border-b border-white/10 bg-[#070709]">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[var(--color-primary-flame)] font-bold">
                FLAGSHIP AFFILIATIONS
              </span>
              <h2 className="font-horizon text-2xl sm:text-3xl font-black uppercase text-white mt-1">
                MARQUEE CHAMPIONSHIPS
              </h2>
            </div>
            <p className="text-sm text-white/60 max-w-md">
              Signature annual initiatives and tournaments held in conjunction with FLAME Kurukshetra.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Maidaan */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] hover:border-[var(--color-primary-flame)]/50 p-6 flex flex-col justify-between transition group">
              <div>
                <span className="rounded-full bg-[var(--color-primary-flame)]/20 text-[var(--color-primary-flame)] text-[10px] font-mono font-bold px-2.5 py-1">
                  INTER-COLLEGIATE FOOTBALL
                </span>
                <h3 className="font-horizon text-xl font-bold text-white mt-4 group-hover:text-[var(--color-primary-flame)] transition">
                  Maidaan Championship
                </h3>
                <p className="text-sm text-white/70 mt-2 leading-relaxed">
                  The flagship full-pitch knockout tournament on FLAME&apos;s FIFA-standard floodlit turf. 16 elite collegiate squads battling for the revered Maidaan Cup.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/60">
                <span>11v11 KNOCKOUT</span>
                <span className="text-[var(--color-primary-flame)] font-bold">₹1.45L PRIZE</span>
              </div>
            </div>

            {/* Card 2: 50 Days */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] hover:border-[var(--color-primary-flame)]/50 p-6 flex flex-col justify-between transition group">
              <div>
                <span className="rounded-full bg-cyan-500/20 text-cyan-400 text-[10px] font-mono font-bold px-2.5 py-1">
                  PRE-FESTIVAL CAMPAIGN
                </span>
                <h3 className="font-horizon text-xl font-bold text-white mt-4 group-hover:text-[var(--color-primary-flame)] transition">
                  50 Days to Kuru
                </h3>
                <p className="text-sm text-white/70 mt-2 leading-relaxed">
                  Campus mini-marathons, inter-hostel qualifiers, and the Phoenix flame relay uniting student athletes across Western India leading into the main event.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/60">
                <span>CAMPUS RELAYS</span>
                <span className="text-cyan-400 font-bold">ANNUAL TRADITION</span>
              </div>
            </div>

            {/* Card 3: Decibel */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] hover:border-[var(--color-primary-flame)]/50 p-6 flex flex-col justify-between transition group">
              <div>
                <span className="rounded-full bg-amber-500/20 text-amber-400 text-[10px] font-mono font-bold px-2.5 py-1">
                  AMPHITHEATER PRO-NIGHT
                </span>
                <h3 className="font-horizon text-xl font-bold text-white mt-4 group-hover:text-[var(--color-primary-flame)] transition">
                  DECIBEL: Battle of Bands
                </h3>
                <p className="text-sm text-white/70 mt-2 leading-relaxed">
                  Electrifying acoustic and rock band clash under full stadium concert acoustics. Judged by mainstream music directors with professional studio recording deals.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/60">
                <span>HEADLINE SHOW</span>
                <span className="text-amber-400 font-bold">STUDIO DEAL</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
           4. EVENT SEARCH & FILTER MATRIX (20 DISCIPLINES)
           ========================================================================= */}
      <section className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-white/10" id="event-search">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[var(--color-primary-flame)] font-bold">
                COMPETITIVE PORTFOLIO
              </span>
              <h2 className="font-horizon text-3xl sm:text-4xl font-black uppercase text-white mt-1">
                DISCIPLINES & EVENTS
              </h2>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search football, chess, b-plan..."
                className="w-full rounded-xl border border-white/15 bg-white/5 py-2.5 pl-10 pr-4 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[var(--color-primary-flame)] transition"
              />
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All Disciplines (20)' },
              { id: 'sports', label: 'Sports (10)' },
              { id: 'cultural', label: 'Culturals (5)' },
              { id: 'me', label: 'Management & Esports (5)' },
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={cn(
                  'rounded-xl px-4 py-2 text-xs font-mono uppercase tracking-wider transition font-bold',
                  selectedCategory === cat.id
                    ? 'bg-[var(--color-primary-flame)] text-white shadow-[0_0_15px_rgba(254,90,0,0.5)]'
                    : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10'
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((ev) => (
              <div
                key={ev.id}
                className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] hover:border-[var(--color-primary-flame)]/50 p-5 transition group"
              >
                <div className="flex items-center justify-between text-xs font-mono text-white/60 mb-3">
                  <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-[10px] uppercase font-bold text-white">
                    {ev.categoryLabel}
                  </span>
                  <span className="text-[var(--color-primary-flame)] font-bold">{ev.datesText}</span>
                </div>

                <h3 className="font-horizon text-lg font-bold text-white group-hover:text-[var(--color-primary-flame)] transition">
                  {ev.name}
                </h3>

                <p className="text-xs text-white/65 mt-2 line-clamp-2 leading-relaxed">
                  {ev.desc}
                </p>

                <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-1.5 text-[11px] font-mono text-white/60">
                  <div className="flex items-center gap-1.5 truncate">
                    <MapPin className="w-3.5 h-3.5 text-[var(--color-primary-flame)] shrink-0" />
                    <span className="truncate">{ev.venue}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-[var(--color-accent-yellow)] shrink-0" />
                    <span className="text-white font-bold">{ev.prize}</span>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between">
                  <Link
                    to="/schedule"
                    className="text-xs font-mono text-white/70 hover:text-white flex items-center gap-1"
                  >
                    <span>View Schedule</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    to="/register"
                    className="rounded-lg bg-[var(--color-primary-flame)] hover:bg-[#ea5401] px-3.5 py-1.5 text-xs font-bold text-white transition shadow-sm"
                  >
                    Register Team
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="py-16 text-center text-white/50 text-sm font-mono">
              No disciplines matching &quot;{searchTerm}&quot; found.
            </div>
          )}
        </div>
      </section>

      {/* =========================================================================
           5. FESTIVAL MANIFESTO / STATEMENT
           ========================================================================= */}
      <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-[#070709] border-b border-white/10">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <div className="h-12 w-12 rounded-2xl bg-[var(--color-primary-flame)]/20 border border-[var(--color-primary-flame)]/40 flex items-center justify-center text-[var(--color-primary-flame)] mb-6">
            <Flame className="w-6 h-6 fill-current" />
          </div>

          <h2 className="font-horizon text-2xl sm:text-4xl font-black uppercase text-white leading-tight">
            WHERE LEGENDS RISE & RIVALRIES ARE FORGED
          </h2>

          <p className="text-base sm:text-lg text-white/75 mt-6 leading-relaxed max-w-3xl">
            Kurukshetra is not merely an athletic contest—it is an arena where passion transcends boundaries. Under the floodlights of Lavale, collegiate titans meet in intense competition, forging bonds of brotherhood that last long after the final whistle blows.
          </p>

          <div className="mt-8 flex items-center gap-4 text-xs font-mono text-white/50 uppercase tracking-widest">
            <span>COURAGE</span>
            <span className="text-[var(--color-primary-flame)]">•</span>
            <span>INTEGRITY</span>
            <span className="text-[var(--color-primary-flame)]">•</span>
            <span>GLORY</span>
          </div>
        </div>
      </section>

      {/* =========================================================================
           6. FESTIVAL HUB TEASER: COMMITTEE & MEDIA VAULT
           ========================================================================= */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Organizing Committee */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 flex flex-col justify-between hover:border-[var(--color-primary-flame)]/40 transition">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[var(--color-primary-flame)] font-bold">
                LEADERSHIP & WINGS
              </span>
              <h3 className="font-horizon text-2xl font-bold text-white mt-2">
                The Organizing Committee
              </h3>
              <p className="text-sm text-white/70 mt-3 leading-relaxed">
                Meet the Apex Leadership, General Secretaries, and 14 Core Committee Heads steering administration, logistics, sporting federations, and pro-night productions.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-mono text-white/50">17 FESTIVAL HEADS</span>
              <Link
                to="/committee"
                className="inline-flex items-center gap-1.5 text-xs font-bold font-mono uppercase tracking-wider text-[var(--color-primary-flame)] hover:underline"
              >
                <span>View Full Roster</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 2: Photo Vault */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 flex flex-col justify-between hover:border-[var(--color-primary-flame)]/40 transition">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">
                DIGITAL MEDIA VAULT
              </span>
              <h3 className="font-horizon text-2xl font-bold text-white mt-2">
                Official Athletic Archive
              </h3>
              <p className="text-sm text-white/70 mt-3 leading-relaxed">
                Explore thousands of high-definition match photos, track sprints, championship celebrations, and amphitheater concerts organized in an interactive Drive format.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-mono text-white/50">4-DAY PHOTO CLOUD</span>
              <Link
                to="/album"
                className="inline-flex items-center gap-1.5 text-xs font-bold font-mono uppercase tracking-wider text-cyan-400 hover:underline"
              >
                <span>Open Media Vault</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
           7. BOTTOM REGISTRATION CALL TO ACTION
           ========================================================================= */}
      <section className="relative w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#09090B] to-[#140a04] text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <span className="rounded-full bg-[var(--color-primary-flame)]/20 text-[var(--color-primary-flame)] text-xs font-mono font-bold px-4 py-1 uppercase tracking-widest">
            REGISTRATIONS CLOSING SOON
          </span>

          <h2 className="font-horizon text-3xl sm:text-5xl font-black uppercase text-white mt-4 leading-tight">
            CLAIM YOUR SPOT ON THE PODIUM
          </h2>

          <p className="text-sm sm:text-base text-white/70 mt-4 max-w-xl">
            Slots across Football, Basketball, T20 Cricket, and Shark Arena fill rapidly. Secure your contingent credentials today.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <Link
              to="/register"
              className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary-flame)] hover:bg-[#ea5401] px-8 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-[0_0_30px_rgba(254,90,0,0.6)] transition duration-200 active:scale-95"
            >
              <span>Begin Team Registration</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 hover:bg-white/20 px-6 py-4 text-sm font-bold uppercase tracking-wider text-white transition duration-200"
            >
              <span>Contact War Room</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
