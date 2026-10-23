import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Clock,
  MapPin,
  ArrowUpRight,
  Trophy,
} from 'lucide-react';
import { cn } from '../utils/cn';

export default function EventCard({ event, viewMode = 'GRID' }) {
  const isLive = event.status === 'LIVE';
  const isCompleted = event.status === 'COMPLETED';

  // Extract a quick sport-specific nuance pill
  const getNuanceTag = () => {
    if (event.sportType === 'ULTIMATE_FRISBEE') {
      return `Cap ${event.endCondition.targetScore} • ${event.nuances.lineRoleA?.split(' ')[0] || 'LIVE'}`;
    }
    if (event.sportType === 'BASKETBALL') {
      return `Q${event.nuances.quarter} • Shot ${event.nuances.shotClock}s`;
    }
    if (event.sportType === 'VOLLEYBALL') {
      return `Set ${event.nuances.currentSet} (${event.teamA.setsWon}–${event.teamB.setsWon})`;
    }
    if (event.sportType === 'CULTURAL_PANEL') {
      return `${event.nuances.peakDecibels || '100-Pt Jury'}`;
    }
    if (event.sportType === 'DANCE_CYPHER') {
      return `${event.nuances.cypherRound}`;
    }
    if (event.sportType === 'MANAGEMENT_SIM') {
      return `${event.nuances.currentRound}`;
    }
    return event.endCondition.description;
  };

  if (viewMode === 'MATCHUP') {
    return (
      <Link to={`/live-events/${event.id}`} className="block group focus:outline-none">
        <motion.div
          whileHover={{ y: -2 }}
          className={cn(
            'relative rounded-2xl sm:rounded-3xl p-3.5 sm:p-6 border transition-all overflow-hidden shadow-xl',
            isLive
              ? 'bg-gradient-to-r from-[#180800] via-[#09090B] to-[#180800] border-[var(--color-primary-flame)]/60 text-white shadow-[0_12px_40px_rgba(254,90,0,0.2)]'
              : 'bg-[#09090B] border-white/15 text-white hover:border-[var(--color-primary-flame)]/50'
          )}
        >
          {/* Top Metadata Strip */}
          <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 sm:pb-3 border-b border-white/10">
            <div className="flex items-center gap-1.5 sm:gap-2">
              {isLive ? (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-primary-flame)] px-2.5 py-0.5 text-[10px] sm:text-xs font-black uppercase tracking-widest text-white">
                  <span className="h-1.5 w-1.5 rounded-full bg-white animate-ping" />
                  LIVE
                </span>
              ) : isCompleted ? (
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 px-2.5 py-0.5 text-[10px] sm:text-xs font-black uppercase text-emerald-400">
                  <Trophy className="w-3 h-3" />
                  FINAL
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2.5 py-0.5 text-[10px] sm:text-xs font-bold uppercase text-white/85">
                  <Clock className="w-3 h-3 text-[var(--color-primary-flame)]" />
                  {event.day} • {event.timeLabel}
                </span>
              )}
              <span className="rounded-full border border-white/15 bg-white/5 px-2 py-0.5 font-mono text-[10px] sm:text-xs uppercase text-white/75 truncate max-w-[130px] sm:max-w-none">
                {event.stageTag}
              </span>
            </div>

            <span className="font-mono text-[10px] sm:text-xs text-[var(--color-primary-flame)] font-bold flex items-center gap-1">
              {getNuanceTag()}
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </div>

          {/* Center Head-to-Head Matchup */}
          <div className="pt-3 sm:py-4 grid grid-cols-12 items-center gap-1.5 sm:gap-4">
            {/* Team A */}
            <div className="col-span-4 text-left min-w-0">
              <span className="font-mono text-[10px] sm:text-xs uppercase tracking-wider text-white/55 block truncate">
                {event.teamA.record}
              </span>
              <h3
                className="text-base sm:text-2xl font-black uppercase text-white leading-tight truncate"
                style={{ fontFamily: 'var(--font-header-spartan)' }}
              >
                {event.teamA.shortName}
              </h3>
              <p className="text-[11px] sm:text-xs text-white/65 truncate">{event.teamA.name}</p>
            </div>

            {/* Center Score / Date Block */}
            <div className="col-span-4 text-center flex flex-col items-center justify-center min-w-0">
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-[var(--color-primary-flame)] font-bold truncate max-w-full">
                {event.title}
              </span>
              {isLive || isCompleted ? (
                <div
                  className="my-0.5 sm:my-1 flex items-center justify-center gap-1.5 sm:gap-4 text-2xl sm:text-5xl font-black tracking-tight text-white"
                  style={{ fontFamily: 'var(--font-header-spartan)' }}
                >
                  <span
                    className={
                      event.teamA.score > event.teamB.score
                        ? 'text-[var(--color-primary-flame)]'
                        : 'text-white'
                    }
                  >
                    {event.teamA.score}
                  </span>
                  <span className="text-white/30 text-lg sm:text-2xl">:</span>
                  <span
                    className={
                      event.teamB.score > event.teamA.score
                        ? 'text-[var(--color-primary-flame)]'
                        : 'text-white'
                    }
                  >
                    {event.teamB.score}
                  </span>
                </div>
              ) : (
                <div
                  className="my-0.5 sm:my-1 text-base sm:text-3xl font-black uppercase text-[#FAAD36]"
                  style={{ fontFamily: 'var(--font-header-spartan)' }}
                >
                  {event.timeLabel}
                </div>
              )}
              <span className="text-[10px] sm:text-xs font-mono text-white/60 flex items-center gap-1 truncate max-w-full">
                <MapPin className="w-3 h-3 text-[var(--color-primary-flame)] shrink-0" />
                <span className="truncate">{event.venue}</span>
              </span>
            </div>

            {/* Team B */}
            <div className="col-span-4 text-right min-w-0">
              <span className="font-mono text-[10px] sm:text-xs uppercase tracking-wider text-white/55 block truncate">
                {event.teamB.record}
              </span>
              <h3
                className="text-base sm:text-2xl font-black uppercase text-white leading-tight truncate"
                style={{ fontFamily: 'var(--font-header-spartan)' }}
              >
                {event.teamB.shortName}
              </h3>
              <p className="text-[11px] sm:text-xs text-white/65 truncate">{event.teamB.name}</p>
            </div>
          </div>
        </motion.div>
      </Link>
    );
  }

  // Default GRID View (Compact 230px on mobile so 2-3 cards fit per screen, 370px on desktop)
  return (
    <Link to={`/live-events/${event.id}`} className="group block focus:outline-none">
      <motion.div
        whileHover={{ y: -4 }}
        className="relative h-[230px] sm:h-[370px] w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-white/15 bg-[#09090B] shadow-[0_14px_35px_rgba(0,0,0,0.4)] transition-all duration-300 group-hover:border-[var(--color-primary-flame)] flex flex-col justify-between p-3.5 sm:p-5"
      >
        {/* Background Event Photography */}
        <img
          src={event.image}
          alt={event.title}
          className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105 filter brightness-75 contrast-110"
        />

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/30" />

        {/* Top Pills: Top-Left DAY / LIVE Pill + Top-Right STAGE Pill */}
        <div className="relative z-10 flex items-center justify-between gap-2">
          {isLive ? (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-primary-flame)] px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-black uppercase tracking-widest text-white shadow-[0_0_20px_rgba(254,90,0,0.8)]">
              <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-white animate-ping" />
              LIVE NOW
            </span>
          ) : isCompleted ? (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-600 px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-black uppercase tracking-widest text-white">
              <Trophy className="w-3 h-3" />
              COMPLETED
            </span>
          ) : (
            <span className="inline-flex items-center rounded-full bg-black/80 backdrop-blur-md border border-white/20 px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-white">
              {event.day}
            </span>
          )}

          <span className="inline-flex items-center rounded-full bg-black/75 backdrop-blur-md border border-white/20 px-2.5 py-0.5 sm:py-1 text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider text-white truncate max-w-[150px]">
            {event.stageTag}
          </span>
        </div>

        {/* Bottom Stack: Scoreboard Box + Title Bar */}
        <div className="relative z-10 space-y-2 sm:space-y-3 mt-auto">
          <div className="rounded-xl sm:rounded-2xl border border-white/15 bg-black/85 backdrop-blur-md p-2.5 sm:p-3.5 shadow-xl">
            <div className="flex items-center justify-between gap-2 text-[10px] sm:text-xs font-mono uppercase tracking-wider text-[var(--color-primary-flame)] mb-1 sm:mb-2">
              <span className="truncate">{event.round}</span>
              <span className="truncate text-[#FAAD36]">{getNuanceTag()}</span>
            </div>

            <div className="grid grid-cols-11 items-center gap-1">
              <div className="col-span-4 text-left min-w-0">
                <div className="text-xs sm:text-sm font-black uppercase text-white truncate">
                  {event.teamA.shortName}
                </div>
                <div className="hidden sm:block text-xs text-white/60 truncate">
                  {event.teamA.record}
                </div>
              </div>

              <div className="col-span-3 text-center">
                {isLive || isCompleted ? (
                  <div
                    className="inline-flex items-center justify-center gap-1 rounded-lg bg-[var(--color-primary-flame)]/20 border border-[var(--color-primary-flame)]/40 px-2 py-0.5 sm:py-1 text-base sm:text-xl font-black text-white"
                    style={{ fontFamily: 'var(--font-header-spartan)' }}
                  >
                    <span>{event.teamA.score}</span>
                    <span className="text-[var(--color-primary-flame)]">-</span>
                    <span>{event.teamB.score}</span>
                  </div>
                ) : (
                  <span className="inline-block rounded-lg bg-white/10 px-2 py-0.5 font-mono text-[10px] sm:text-xs font-bold text-[#FAAD36]">
                    VS
                  </span>
                )}
              </div>

              <div className="col-span-4 text-right min-w-0">
                <div className="text-xs sm:text-sm font-black uppercase text-white truncate">
                  {event.teamB.shortName}
                </div>
                <div className="hidden sm:block text-xs text-white/60 truncate">
                  {event.teamB.record}
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-end justify-between gap-2 pt-0.5">
            <div className="min-w-0">
              <h3
                className="text-base sm:text-xl font-black uppercase tracking-wide text-white leading-tight truncate group-hover:text-[var(--color-primary-flame)] transition-colors"
                style={{ fontFamily: 'var(--font-header-spartan)' }}
              >
                {event.title}
              </h3>
              <p className="text-[11px] sm:text-xs text-white/75 truncate flex items-center gap-1 mt-0.5">
                <MapPin className="w-3 h-3 text-[var(--color-primary-flame)] shrink-0" />
                <span className="truncate">{event.venue}</span>
              </p>
            </div>

            <div className="shrink-0 text-right">
              <span className="block font-mono text-[10px] sm:text-xs font-bold text-white">
                {event.timeLabel}
              </span>
              <span className="inline-flex items-center gap-0.5 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[var(--color-primary-flame)]">
                Score
                <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
