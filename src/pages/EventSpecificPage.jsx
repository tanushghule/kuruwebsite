import React, { useState, useRef, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  Trophy,
  Clock,
  Shield,
  Zap,
  Award,
  CheckCircle2,
  Flame,
  MapPin,
  Search,
  ChevronDown,
  Sliders,
} from 'lucide-react';
import { cn } from '../utils/cn';
import {
  DynamicScreenContainer,
  DynamicAutoGrid,
} from '../components/ui/dynamic-container';

function formatClock(seconds) {
  const m = Math.floor(Math.max(0, seconds) / 60);
  const s = Math.floor(Math.max(0, seconds) % 60);
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

export default function EventSpecificPage({
  events = [],
  isAdmin = false,
  onUpdateEvent,
  onAwardWinnerMedal,
}) {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const currentEvent = events.find((e) => e.id === eventId) || events[0];

  // Search Bar & Dropdown State
  const [searchQuery, setSearchQuery] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Close search dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (!currentEvent) return null;

  // Filter matches for Search Bar Dropdown (Live Games + Previously Happened / Upcoming Games)
  const matchingEvents = events.filter((ev) => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return true;
    return (
      ev.title.toLowerCase().includes(q) ||
      ev.teamA.name.toLowerCase().includes(q) ||
      ev.teamB.name.toLowerCase().includes(q) ||
      ev.teamA.shortName.toLowerCase().includes(q) ||
      ev.teamB.shortName.toLowerCase().includes(q) ||
      ev.venue.toLowerCase().includes(q) ||
      ev.category.toLowerCase().includes(q)
    );
  });

  const liveMatchesList = matchingEvents.filter((e) => e.status === 'LIVE');
  const otherMatchesList = matchingEvents.filter((e) => e.status !== 'LIVE');
  const allLiveEvents = events.filter((e) => e.status === 'LIVE');

  const handleSelectMatch = (id) => {
    setDropdownOpen(false);
    setSearchQuery('');
    navigate(`/live-events/${id}`);
  };

  // Admin-only Quick Score Helper (only rendered when isAdmin === true)
  const handleAdminScore = (side, pts = 1) => {
    if (!isAdmin || !onUpdateEvent || currentEvent.status === 'COMPLETED') return;
    const isA = side === 'A';
    const nextA = Math.max(0, currentEvent.teamA.score + (isA ? pts : 0));
    const nextB = Math.max(0, currentEvent.teamB.score + (!isA ? pts : 0));
    const scorer = isA ? currentEvent.teamA : currentEvent.teamB;
    const other = isA ? currentEvent.teamB : currentEvent.teamA;

    let updatedNuances = { ...currentEvent.nuances };
    if (currentEvent.sportType === 'ULTIMATE_FRISBEE' && pts > 0) {
      updatedNuances.lineRoleA = isA ? 'DEFENSE (PULLING)' : 'OFFENSE (RECEIVING)';
      updatedNuances.lineRoleB = !isA ? 'DEFENSE (PULLING)' : 'OFFENSE (RECEIVING)';
      updatedNuances.possession = isA ? 'B' : 'A';
      updatedNuances.lastAction = `${scorer.shortName} scores! ${scorer.shortName} switches to DEFENSE (Pulling); ${other.shortName} switches to OFFENSE.`;
    } else {
      updatedNuances.lastAction = `Score updated by Admin: ${currentEvent.teamA.shortName} ${nextA} – ${nextB} ${currentEvent.teamB.shortName}`;
    }

    const target = currentEvent.endCondition?.targetScore || 15;
    const winBy = currentEvent.endCondition?.winBy || 1;
    let nextStatus = currentEvent.status;
    let autoWinner = null;

    if (nextA >= target && nextA - nextB >= winBy) {
      nextStatus = 'COMPLETED';
      autoWinner = {
        side: 'A',
        teamName: currentEvent.teamA.name,
        shortName: currentEvent.teamA.shortName,
        universityId: currentEvent.teamA.id,
        universityName: currentEvent.teamA.university,
        loserUniversityId: currentEvent.teamB.id,
        reason: `Target Score Reached (${nextA}–${nextB})`,
      };
      if (onAwardWinnerMedal) {
        onAwardWinnerMedal(currentEvent.category, currentEvent.teamA.id, currentEvent.teamB.id);
      }
    } else if (nextB >= target && nextB - nextA >= winBy) {
      nextStatus = 'COMPLETED';
      autoWinner = {
        side: 'B',
        teamName: currentEvent.teamB.name,
        shortName: currentEvent.teamB.shortName,
        universityId: currentEvent.teamB.id,
        universityName: currentEvent.teamB.university,
        loserUniversityId: currentEvent.teamA.id,
        reason: `Target Score Reached (${nextB}–${nextA})`,
      };
      if (onAwardWinnerMedal) {
        onAwardWinnerMedal(currentEvent.category, currentEvent.teamB.id, currentEvent.teamA.id);
      }
    }

    onUpdateEvent({
      ...currentEvent,
      status: nextStatus,
      ...(autoWinner ? { winner: autoWinner } : {}),
      teamA: { ...currentEvent.teamA, score: nextA },
      teamB: { ...currentEvent.teamB, score: nextB },
      nuances: updatedNuances,
    });
  };

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-clip bg-[#FAF9F6] text-zinc-900 dark:bg-[var(--color-primary-black)] dark:text-[var(--color-primary-white)] bg-blueprint-grid pb-24 transition-colors duration-300">
      <DynamicScreenContainer className="pt-3.5 sm:pt-8 space-y-4 sm:space-y-8">
        {/* 1. TOP BAR: BACK BUTTON + SEARCHABLE GAME DROPDOWN SELECTOR */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-2.5 sm:gap-4">
          <Link
            to="/live-events"
            className="self-start inline-flex items-center gap-1.5 sm:gap-2 rounded-xl border border-white/15 bg-[#09090B] px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white hover:border-[var(--color-primary-flame)] transition shadow-md"
          >
            <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[var(--color-primary-flame)]" />
            <span>Back to Live &amp; Tally</span>
          </Link>

          {/* Search Bar & Game Selector Dropdown */}
          <div ref={dropdownRef} className="relative w-full lg:max-w-xl">
            <div
              onClick={() => setDropdownOpen(true)}
              className="flex items-center gap-2 sm:gap-3 rounded-xl sm:rounded-2xl border-2 border-[var(--color-primary-flame)]/60 bg-[#09090B] px-3 sm:px-4 py-2.5 sm:py-3 text-white shadow-xl cursor-pointer"
            >
              <Search className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--color-primary-flame)] shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onFocus={() => setDropdownOpen(true)}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setDropdownOpen(true);
                }}
                placeholder="Search live or past games..."
                className="w-full min-w-0 bg-transparent text-xs sm:text-base font-medium text-white placeholder:text-white/60 focus:outline-none"
              />
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setDropdownOpen(!dropdownOpen);
                }}
                className="inline-flex items-center gap-1 rounded-lg bg-white/10 px-2 sm:px-2.5 py-1 text-[10px] sm:text-xs font-mono uppercase text-[#FAAD36] shrink-0"
              >
                <span>Games ({events.length})</span>
                <ChevronDown
                  className={cn(
                    'w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform',
                    dropdownOpen && 'rotate-180'
                  )}
                />
              </button>
            </div>

            {/* Dropdown Menu: Grouped into LIVE GAMES and PREVIOUS / UPCOMING GAMES */}
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  className="absolute left-0 right-0 mt-1.5 z-40 rounded-2xl border border-white/20 bg-[#09090B] text-white shadow-[0_25px_70px_rgba(0,0,0,0.9)] max-h-[340px] overflow-y-auto p-2.5 sm:p-3 space-y-3"
                >
                  {/* Group 1: Live Games Going On Right Now */}
                  <div>
                    <div className="px-2.5 py-1 text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider text-[var(--color-primary-flame)] flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-[var(--color-primary-flame)] animate-ping" />
                      LIVE GAMES GOING ON NOW ({liveMatchesList.length})
                    </div>
                    {liveMatchesList.length === 0 ? (
                      <div className="px-2.5 py-2 text-xs text-white/50">
                        No live games match your search.
                      </div>
                    ) : (
                      <div className="mt-1 space-y-1">
                        {liveMatchesList.map((ev) => (
                          <button
                            key={ev.id}
                            type="button"
                            onClick={() => handleSelectMatch(ev.id)}
                            className={cn(
                              'w-full text-left rounded-xl px-3 py-2 transition flex items-center justify-between gap-2 border',
                              ev.id === currentEvent.id
                                ? 'bg-[var(--color-primary-flame)] text-white border-[var(--color-primary-flame)]'
                                : 'bg-white/[0.04] hover:bg-white/10 text-white border-white/10'
                            )}
                          >
                            <div className="min-w-0">
                              <div className="font-bold text-xs sm:text-base truncate">
                                {ev.title}
                              </div>
                              <div className="text-[11px] sm:text-xs opacity-80 truncate">
                                {ev.teamA.shortName} vs {ev.teamB.shortName} • {ev.venue}
                              </div>
                            </div>
                            <div className="shrink-0 font-mono text-xs sm:text-sm font-black px-2 py-0.5 rounded-lg bg-black/40">
                              {ev.teamA.score} - {ev.teamB.score}
                            </div>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Group 2: Previously Happened & Upcoming Games */}
                  {otherMatchesList.length > 0 && (
                    <div className="pt-2 border-t border-white/10">
                      <div className="px-2.5 py-1 text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider text-[#FAAD36]">
                        PREVIOUS &amp; UPCOMING GAMES ({otherMatchesList.length})
                      </div>
                      <div className="mt-1 space-y-1">
                        {otherMatchesList.map((ev) => (
                          <button
                            key={ev.id}
                            type="button"
                            onClick={() => handleSelectMatch(ev.id)}
                            className={cn(
                              'w-full text-left rounded-xl px-3 py-2 transition flex items-center justify-between gap-2 border',
                              ev.id === currentEvent.id
                                ? 'bg-[var(--color-primary-flame)] text-white border-[var(--color-primary-flame)]'
                                : 'bg-white/[0.02] hover:bg-white/10 text-white border-white/10'
                            )}
                          >
                            <div className="min-w-0">
                              <div className="font-bold text-xs sm:text-base truncate">
                                {ev.title}
                              </div>
                              <div className="text-[11px] sm:text-xs opacity-75 truncate">
                                {ev.teamA.shortName} vs {ev.teamB.shortName} • {ev.status}
                              </div>
                            </div>
                            <span className="shrink-0 font-mono text-[10px] sm:text-xs uppercase px-2 py-0.5 rounded bg-white/10">
                              {ev.status === 'COMPLETED'
                                ? `${ev.teamA.score}-${ev.teamB.score}`
                                : ev.timeLabel}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* 2. AUTOMATIC WINNER DECLARATION BANNER (If Match Completed) */}
        <AnimatePresence>
          {currentEvent.status === 'COMPLETED' && currentEvent.winner && (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="rounded-2xl sm:rounded-3xl border-2 border-[#FAAD36] bg-[#09090B] p-4 sm:p-8 text-white shadow-[0_0_50px_rgba(254,90,0,0.3)]"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-5">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-[#FAAD36] px-3 py-0.5 text-[10px] sm:text-xs font-black uppercase tracking-widest text-black">
                    <Trophy className="w-3.5 h-3.5" />
                    FINAL RESULT • WINNER DECLARED
                  </div>
                  <h2
                    className="font-horizon text-base sm:text-3xl lg:text-4xl font-black uppercase tracking-wider text-white pt-1"
                    style={{ fontFamily: 'var(--font-header-horizon)' }}
                  >
                    🏆 {currentEvent.winner.teamName} WINS!
                  </h2>
                  <p className="text-xs sm:text-base text-white/85">
                    Representing{' '}
                    <strong className="text-[#FAAD36]">
                      {currentEvent.winner.universityName}
                    </strong>{' '}
                    • {currentEvent.winner.reason}
                  </p>
                </div>

                <Link
                  to="/live-events"
                  className="self-start md:self-auto shrink-0 inline-flex items-center gap-2 rounded-xl sm:rounded-2xl bg-[var(--color-primary-flame)] px-4 sm:px-6 py-2.5 sm:py-3.5 text-xs sm:text-sm font-black uppercase tracking-wider text-white shadow-[0_0_25px_rgba(254,90,0,0.5)] hover:bg-[#ff6a1a] transition"
                >
                  <Award className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>View Medal Tally</span>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 3. FOCUSED MAIN SCOREBOARD — Side-by-side 12-col layout on BOTH Mobile & Desktop! */}
        <div className="rounded-2xl sm:rounded-3xl border border-white/15 bg-[#09090B] text-white overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
          {/* Top Match Header Bar */}
          <div className="px-3.5 sm:px-8 py-3 sm:py-4 border-b border-white/10 bg-white/[0.02] flex flex-wrap items-center justify-between gap-2">
            <div className="flex flex-wrap items-center gap-2 min-w-0">
              {currentEvent.status === 'LIVE' ? (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-primary-flame)] px-2.5 sm:px-3.5 py-0.5 sm:py-1 text-[10px] sm:text-xs font-black uppercase tracking-widest text-white shadow-[0_0_20px_rgba(254,90,0,0.6)]">
                  <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-white animate-ping" />
                  LIVE
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 px-2.5 py-0.5 text-[10px] sm:text-xs font-black uppercase tracking-widest text-emerald-400">
                  <CheckCircle2 className="w-3 h-3" />
                  {currentEvent.status}
                </span>
              )}
              <span className="font-bold text-xs sm:text-base text-white truncate">
                {currentEvent.title}
              </span>
              <span className="hidden xs:inline font-mono text-[10px] sm:text-xs uppercase text-[#FAAD36]">
                • {currentEvent.round}
              </span>
            </div>

            <div className="flex items-center gap-1.5 text-[11px] sm:text-sm text-white/75">
              <MapPin className="w-3.5 h-3.5 text-[var(--color-primary-flame)] shrink-0" />
              <span className="truncate">{currentEvent.venue}</span>
            </div>
          </div>

          {/* Center Scoreboard Grid: Side-by-Side 12-Col on Mobile & Desktop */}
          <div className="p-3.5 sm:p-10">
            {/* Clock Pill Centered Above Scoreboard on Mobile */}
            <div className="flex justify-center mb-3 sm:mb-5">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-xl sm:rounded-2xl border border-white/15 bg-black px-3 sm:px-4 py-1.5 sm:py-2 font-mono text-xs sm:text-lg font-black text-[#FAAD36]">
                <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[var(--color-primary-flame)]" />
                <span>{formatClock(currentEvent.clockSeconds)}</span>
                {currentEvent.sportType === 'BASKETBALL' && (
                  <span className="ml-1 rounded bg-[var(--color-primary-flame)] px-1.5 sm:px-2 py-0.5 text-[10px] sm:text-xs text-white">
                    Q{currentEvent.nuances.quarter} • {currentEvent.nuances.shotClock}s
                  </span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-12 gap-2 sm:gap-8 items-center">
              {/* Team A (4 Cols) */}
              <div className="col-span-4 text-left space-y-1 sm:space-y-2.5 min-w-0">
                <div className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-white/5 border border-white/10 px-3 py-1 font-mono text-xs text-white/80">
                  <span className="truncate">{currentEvent.teamA.university}</span>
                </div>

                <h2
                  className="font-horizon text-xs xs:text-sm sm:text-3xl font-black uppercase tracking-wider text-white truncate"
                  style={{ fontFamily: 'var(--font-header-horizon)' }}
                >
                  <span className="sm:hidden">{currentEvent.teamA.shortName}</span>
                  <span className="hidden sm:inline">{currentEvent.teamA.name}</span>
                </h2>
                <p className="sm:hidden text-[11px] text-white/65 truncate">
                  {currentEvent.teamA.name}
                </p>

                {/* Clean Sport Status Badge for Spectators */}
                {currentEvent.sportType === 'ULTIMATE_FRISBEE' && (
                  <div className="pt-0.5">
                    <span
                      className={cn(
                        'inline-flex items-center gap-1 rounded-lg sm:rounded-xl px-2 sm:px-3.5 py-0.5 sm:py-1.5 font-mono text-[9px] sm:text-xs font-black uppercase tracking-wider border',
                        currentEvent.nuances.lineRoleA?.includes('OFFENSE')
                          ? 'bg-[var(--color-primary-flame)] text-white border-[var(--color-primary-flame)]'
                          : 'bg-white/10 text-white/85 border-white/20'
                      )}
                    >
                      {currentEvent.nuances.lineRoleA?.includes('OFFENSE') ? (
                        <Zap className="w-3 h-3 shrink-0" />
                      ) : (
                        <Shield className="w-3 h-3 shrink-0" />
                      )}
                      <span className="truncate">
                        {currentEvent.nuances.lineRoleA?.split(' ')[0]}
                      </span>
                    </span>
                  </div>
                )}

                {currentEvent.sportType === 'BASKETBALL' && (
                  <div className="flex flex-wrap items-center gap-1 pt-0.5">
                    <span className="rounded-lg bg-white/10 px-2 py-0.5 font-mono text-[10px] sm:text-xs text-white">
                      Fouls: {currentEvent.teamA.teamFouls || 0}/5
                    </span>
                  </div>
                )}

                {currentEvent.sportType === 'VOLLEYBALL' && (
                  <div className="flex flex-wrap items-center gap-1 pt-0.5">
                    <span className="rounded-lg bg-[var(--color-primary-flame)]/20 border border-[var(--color-primary-flame)] px-2 py-0.5 font-mono text-[10px] sm:text-xs font-bold text-white">
                      Sets: {currentEvent.teamA.setsWon || 0}
                    </span>
                  </div>
                )}
              </div>

              {/* Center Score (4 Cols) */}
              <div className="col-span-4 flex flex-col items-center justify-center text-center">
                <div
                  className="flex items-center justify-center gap-2 xs:gap-3 sm:gap-6 text-3xl xs:text-4xl sm:text-7xl font-black leading-none tracking-tight"
                  style={{ fontFamily: 'var(--font-header-spartan)' }}
                >
                  <span className="text-[var(--color-primary-flame)]">
                    {currentEvent.teamA.score}
                  </span>
                  <span className="text-white/25 text-xl sm:text-4xl">:</span>
                  <span className="text-white">{currentEvent.teamB.score}</span>
                </div>

                {/* Target Progress Bar */}
                <div className="mt-2.5 sm:mt-4 w-full max-w-[180px] sm:max-w-xs">
                  <div className="flex justify-between text-[9px] sm:text-xs font-mono uppercase text-white/65 mb-1">
                    <span>Cap: {currentEvent.endCondition.targetScore}</span>
                    <span>
                      {Math.max(currentEvent.teamA.score, currentEvent.teamB.score)}/
                      {currentEvent.endCondition.targetScore}
                    </span>
                  </div>
                  <div className="h-1.5 sm:h-2.5 w-full rounded-full bg-white/10 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[var(--color-primary-flame)] to-[#FAAD36] transition-all duration-300"
                      style={{
                        width: `${Math.min(
                          100,
                          (Math.max(currentEvent.teamA.score, currentEvent.teamB.score) /
                            (currentEvent.endCondition.targetScore || 15)) *
                            100
                        )}%`,
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Team B (4 Cols) */}
              <div className="col-span-4 text-right space-y-1 sm:space-y-2.5 min-w-0">
                <div className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-white/5 border border-white/10 px-3 py-1 font-mono text-xs text-white/80">
                  <span className="truncate">{currentEvent.teamB.university}</span>
                </div>

                <h2
                  className="font-horizon text-xs xs:text-sm sm:text-3xl font-black uppercase tracking-wider text-white truncate"
                  style={{ fontFamily: 'var(--font-header-horizon)' }}
                >
                  <span className="sm:hidden">{currentEvent.teamB.shortName}</span>
                  <span className="hidden sm:inline">{currentEvent.teamB.name}</span>
                </h2>
                <p className="sm:hidden text-[11px] text-white/65 truncate">
                  {currentEvent.teamB.name}
                </p>

                {currentEvent.sportType === 'ULTIMATE_FRISBEE' && (
                  <div className="pt-0.5 flex justify-end">
                    <span
                      className={cn(
                        'inline-flex items-center gap-1 rounded-lg sm:rounded-xl px-2 sm:px-3.5 py-0.5 sm:py-1.5 font-mono text-[9px] sm:text-xs font-black uppercase tracking-wider border',
                        currentEvent.nuances.lineRoleB?.includes('OFFENSE')
                          ? 'bg-[var(--color-primary-flame)] text-white border-[var(--color-primary-flame)]'
                          : 'bg-white/10 text-white/85 border-white/20'
                      )}
                    >
                      {currentEvent.nuances.lineRoleB?.includes('OFFENSE') ? (
                        <Zap className="w-3 h-3 shrink-0" />
                      ) : (
                        <Shield className="w-3 h-3 shrink-0" />
                      )}
                      <span className="truncate">
                        {currentEvent.nuances.lineRoleB?.split(' ')[0]}
                      </span>
                    </span>
                  </div>
                )}

                {currentEvent.sportType === 'BASKETBALL' && (
                  <div className="flex flex-wrap items-center justify-end gap-1 pt-0.5">
                    <span className="rounded-lg bg-white/10 px-2 py-0.5 font-mono text-[10px] sm:text-xs text-white">
                      Fouls: {currentEvent.teamB.teamFouls || 0}/5
                    </span>
                  </div>
                )}

                {currentEvent.sportType === 'VOLLEYBALL' && (
                  <div className="flex flex-wrap items-center justify-end gap-1 pt-0.5">
                    <span className="rounded-lg bg-[var(--color-primary-flame)]/20 border border-[var(--color-primary-flame)] px-2 py-0.5 font-mono text-[10px] sm:text-xs font-bold text-white">
                      Sets: {currentEvent.teamB.setsWon || 0}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Latest Match Status Banner */}
          <div className="px-3.5 sm:px-6 py-2.5 sm:py-4 bg-[var(--color-primary-flame)]/15 border-t border-[var(--color-primary-flame)]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-4">
            <div className="flex items-start sm:items-center gap-2 text-xs sm:text-base font-bold text-white">
              <Flame className="w-4 h-4 text-[var(--color-primary-flame)] shrink-0 fill-current mt-0.5 sm:mt-0" />
              <span className="line-clamp-2 sm:line-clamp-none">
                {currentEvent.nuances.lastAction}
              </span>
            </div>
            <span className="font-mono text-[10px] sm:text-xs uppercase tracking-wider text-[#FAAD36] shrink-0">
              {currentEvent.endCondition.description}
            </span>
          </div>

          {/* ADMIN-ONLY QUICK SCORE BAR (Hidden in Viewer Mode) */}
          {isAdmin && (
            <div className="px-3.5 sm:px-6 py-3 sm:py-4 bg-black border-t border-[#FAAD36]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-[#FAAD36]">
                <Sliders className="w-4 h-4" />
                <span>ADMIN LIVE SCORER MODE</span>
              </div>

              <div className="grid grid-cols-2 sm:flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleAdminScore('A', 1)}
                  className="rounded-xl bg-[var(--color-primary-flame)] hover:bg-[#ff6a1a] px-3 sm:px-4 py-2 text-xs font-black uppercase text-white"
                >
                  +1 {currentEvent.teamA.shortName}
                </button>
                <button
                  type="button"
                  onClick={() => handleAdminScore('B', 1)}
                  className="rounded-xl bg-white/15 hover:bg-[var(--color-primary-flame)] px-3 sm:px-4 py-2 text-xs font-black uppercase text-white"
                >
                  +1 {currentEvent.teamB.shortName}
                </button>
                <Link
                  to="/admin"
                  className="col-span-2 sm:col-auto text-center rounded-xl border border-[#FAAD36]/50 bg-[#FAAD36]/15 px-3 sm:px-4 py-2 text-xs font-bold uppercase text-[#FAAD36] hover:bg-[#FAAD36] hover:text-black transition"
                >
                  Full Match Updation Console →
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* 4. LIVE GAMES SECTION — CHOOSE FROM ALL LIVE GAMES GOING ON RIGHT NOW */}
        <div className="rounded-2xl sm:rounded-3xl border border-white/15 bg-[#09090B] text-white p-4 sm:p-8 space-y-3.5 sm:space-y-5 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-3 border-b border-white/10 pb-3 sm:pb-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest text-[var(--color-primary-flame)]">
                <span className="h-2 w-2 rounded-full bg-[var(--color-primary-flame)] animate-ping" />
                LIVE ARENAS GOING ON NOW ({allLiveEvents.length})
              </div>
              <h3
                className="font-horizon text-base sm:text-2xl font-black uppercase tracking-wider text-white mt-0.5"
                style={{ fontFamily: 'var(--font-header-horizon)' }}
              >
                SWITCH LIVE GAME
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-white/65">
              Tap any live game below or use the search bar above to switch scoreboards.
            </p>
          </div>

          <DynamicAutoGrid minColWidth="250px" className="gap-2.5 sm:gap-4">
            {allLiveEvents.map((ev) => {
              const isSelected = ev.id === currentEvent.id;
              return (
                <button
                  key={ev.id}
                  type="button"
                  onClick={() => handleSelectMatch(ev.id)}
                  className={cn(
                    'w-full min-w-0 text-left rounded-xl sm:rounded-2xl p-3 sm:p-5 border transition-all flex flex-col justify-between gap-2.5 sm:gap-4',
                    isSelected
                      ? 'bg-gradient-to-br from-[#240c00] to-black border-[var(--color-primary-flame)] shadow-[0_8px_25px_rgba(254,90,0,0.3)]'
                      : 'bg-white/[0.03] border-white/12 hover:border-white/30'
                  )}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-[var(--color-primary-flame)]/20 border border-[var(--color-primary-flame)]/40 px-2 py-0.5 font-mono text-[10px] sm:text-xs font-bold uppercase text-[var(--color-primary-flame)]">
                      {ev.category}
                    </span>
                    <span className="font-mono text-[10px] sm:text-xs text-white/60 truncate">
                      {ev.stageTag}
                    </span>
                  </div>

                  <div>
                    <div className="font-bold text-sm sm:text-lg text-white leading-snug truncate">
                      {ev.title}
                    </div>
                    <div className="text-[11px] sm:text-xs text-white/65 mt-0.5 truncate">
                      {ev.round} • {ev.venue}
                    </div>
                  </div>

                  <div className="rounded-xl bg-black/70 border border-white/10 px-3 py-2 flex items-center justify-between">
                    <span className="font-bold text-xs sm:text-sm text-white truncate">
                      {ev.teamA.shortName}
                    </span>
                    <span
                      className="font-black text-base sm:text-xl text-[var(--color-primary-flame)] px-2"
                      style={{ fontFamily: 'var(--font-header-spartan)' }}
                    >
                      {ev.teamA.score} : {ev.teamB.score}
                    </span>
                    <span className="font-bold text-xs sm:text-sm text-white truncate">
                      {ev.teamB.shortName}
                    </span>
                  </div>
                </button>
              );
            })}
          </DynamicAutoGrid>
        </div>
      </DynamicScreenContainer>
    </div>
  );
}
