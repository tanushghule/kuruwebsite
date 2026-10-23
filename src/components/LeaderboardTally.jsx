import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Crown, ArrowUpDown, Flame } from 'lucide-react';
import { cn } from '../utils/cn';

const TALLY_SCOPES = [
  { id: 'OVERALL', label: 'Overall Kuru Tally', shortLabel: 'Overall' },
  { id: 'SPORTS', label: 'Sports Arena Tally', shortLabel: 'Sports' },
  { id: 'CULTURALS', label: 'Cultural Stage Tally', shortLabel: 'Culturals' },
  { id: 'MANAGEMENT', label: 'Management Tally', shortLabel: 'Management' },
];

export default function LeaderboardTally({
  universities = [],
  activeCategory = 'OVERALL',
  onSelectScope,
}) {
  const [scope, setScope] = useState(activeCategory || 'OVERALL');
  const [sortBy, setSortBy] = useState('GOLD'); // 'GOLD' | 'TOTAL' | 'POINTS'

  const currentScope = scope;

  const handleScopeChange = (newScope) => {
    setScope(newScope);
    if (onSelectScope) onSelectScope(newScope);
  };

  // Compute aggregated or category-specific medals for each university
  const computedRows = universities
    .map((uni) => {
      if (currentScope === 'OVERALL') {
        const s = uni.medals.SPORTS || { gold: 0, silver: 0, bronze: 0, points: 0 };
        const c = uni.medals.CULTURALS || { gold: 0, silver: 0, bronze: 0, points: 0 };
        const m = uni.medals.MANAGEMENT || { gold: 0, silver: 0, bronze: 0, points: 0 };
        const gold = s.gold + c.gold + m.gold;
        const silver = s.silver + c.silver + m.silver;
        const bronze = s.bronze + c.bronze + m.bronze;
        const total = gold + silver + bronze;
        const points = s.points + c.points + m.points;
        return {
          ...uni,
          gold,
          silver,
          bronze,
          total,
          points,
          winRate: Math.min(98, Math.round((gold / Math.max(1, total)) * 100)),
        };
      } else {
        const cat = uni.medals[currentScope] || {
          gold: 0,
          silver: 0,
          bronze: 0,
          points: 0,
        };
        const total = cat.gold + cat.silver + cat.bronze;
        return {
          ...uni,
          gold: cat.gold,
          silver: cat.silver,
          bronze: cat.bronze,
          total,
          points: cat.points,
          winRate: Math.min(98, Math.round((cat.gold / Math.max(1, total)) * 100)),
        };
      }
    })
    .sort((a, b) => {
      if (sortBy === 'TOTAL') return b.total - a.total || b.gold - a.gold;
      if (sortBy === 'POINTS') return b.points - a.points || b.gold - a.gold;
      return b.gold - a.gold || b.silver - a.silver || b.bronze - a.bronze;
    });

  const topThree = computedRows.slice(0, 3);
  const totalGoldAwarded = computedRows.reduce((acc, r) => acc + r.gold, 0);
  const totalMedalsAwarded = computedRows.reduce((acc, r) => acc + r.total, 0);

  return (
    <div className="space-y-5 sm:space-y-8">
      <div className="rounded-2xl sm:rounded-3xl border border-white/15 bg-[#09090B] text-white p-4 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 sm:gap-6 pb-4 sm:pb-6 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-primary-flame)]/40 bg-[var(--color-primary-flame)]/15 px-3 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[var(--color-primary-flame)] mb-2 sm:mb-3">
              <Trophy className="w-3.5 h-3.5 shrink-0" />
              <span>Official Contingent Standings • Live Updated</span>
            </div>
            <h2
              className="font-horizon text-lg sm:text-4xl font-black uppercase tracking-wider text-white"
              style={{ fontFamily: 'var(--font-header-horizon)' }}
            >
              {currentScope === 'OVERALL' ? (
                <>
                  OVERALL <span className="text-[var(--color-primary-flame)]">KURUKSHETRA TALLY</span>
                </>
              ) : (
                <>
                  {currentScope}{' '}
                  <span className="text-[var(--color-primary-flame)]">CATEGORY TALLY</span>
                </>
              )}
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-white/65 max-w-2xl">
              Switch between individual category medal tallies (Sports, Culturals, Management)
              and the combined Overall General Championship leaderboard.
            </p>
          </div>

          {/* Summary Telemetry Gauges */}
          <div className="grid grid-cols-2 gap-2.5 sm:gap-3 shrink-0">
            <div className="rounded-xl sm:rounded-2xl bg-[var(--color-primary-flame)] text-white p-3 sm:p-4 sm:min-w-[140px] shadow-[0_0_25px_rgba(254,90,0,0.35)]">
              <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-wider opacity-90">
                <span>GOLD MEDALS</span>
                <Crown className="w-3.5 h-3.5" />
              </div>
              <div
                className="mt-0.5 sm:mt-1 text-2xl sm:text-4xl font-black leading-none"
                style={{ fontFamily: 'var(--font-header-spartan)' }}
              >
                {totalGoldAwarded}
              </div>
              <span className="mt-0.5 block text-[10px] font-mono uppercase opacity-80">
                In {currentScope}
              </span>
            </div>

            <div className="rounded-xl sm:rounded-2xl bg-[#FAAD36] text-black p-3 sm:p-4 sm:min-w-[140px] shadow-lg">
              <div className="flex items-center justify-between text-[10px] font-mono font-bold uppercase tracking-wider">
                <span>TOTAL MEDALS</span>
                <Medal className="w-3.5 h-3.5" />
              </div>
              <div
                className="mt-0.5 sm:mt-1 text-2xl sm:text-4xl font-black leading-none"
                style={{ fontFamily: 'var(--font-header-spartan)' }}
              >
                {totalMedalsAwarded}
              </div>
              <span className="mt-0.5 block text-[10px] font-mono font-semibold uppercase opacity-80">
                {universities.length} Universities
              </span>
            </div>
          </div>
        </div>

        {/* 4-Pill Scope Selector: 2x2 grid on mobile, inline on desktop */}
        <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
          <div className="grid grid-cols-2 sm:flex items-center gap-1.5 sm:gap-2">
            {TALLY_SCOPES.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => handleScopeChange(tab.id)}
                className={cn(
                  'px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all border text-center',
                  currentScope === tab.id
                    ? 'bg-[var(--color-primary-flame)] text-white border-[var(--color-primary-flame)] shadow-[0_0_20px_rgba(254,90,0,0.4)]'
                    : 'bg-white/[0.04] text-white/70 border-white/10 hover:border-white/25 hover:text-white'
                )}
              >
                <span className="sm:hidden">{tab.shortLabel}</span>
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Sort Toggle */}
          <div className="flex items-center justify-between sm:justify-start gap-1 bg-white/[0.04] border border-white/10 rounded-xl p-1">
            <span className="px-2 text-[10px] font-mono uppercase text-white/50 flex items-center gap-1">
              <ArrowUpDown className="w-3 h-3 text-[var(--color-primary-flame)]" />
              Rank:
            </span>
            {[
              { id: 'GOLD', label: 'Gold' },
              { id: 'TOTAL', label: 'Total' },
              { id: 'POINTS', label: 'Points' },
            ].map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setSortBy(s.id)}
                className={cn(
                  'px-2.5 py-1 rounded-lg text-[11px] font-bold uppercase transition',
                  sortBy === s.id
                    ? 'bg-[var(--color-primary-flame)] text-white'
                    : 'text-white/65 hover:text-white'
                )}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        {/* Top 3 Podium Cards */}
        <div className="mt-5 sm:mt-8 grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-5">
          {topThree.map((uni, idx) => {
            const isFirst = idx === 0;
            const ringPercent = uni.winRate;
            const circumference = 2 * Math.PI * 34;
            const strokeDashoffset = circumference - (ringPercent / 100) * circumference;

            return (
              <motion.div
                key={uni.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className={cn(
                  'relative rounded-2xl p-3.5 sm:p-5 border flex flex-col justify-between overflow-hidden',
                  isFirst
                    ? 'bg-gradient-to-br from-[var(--color-primary-flame)] via-[#d94b00] to-[#7a2600] text-white border-[#FAAD36]/60 shadow-[0_12px_40px_rgba(254,90,0,0.35)]'
                    : 'bg-white/[0.04] text-white border-white/15'
                )}
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="min-w-0">
                    <span
                      className={cn(
                        'inline-flex items-center gap-1 rounded-md px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-widest',
                        isFirst
                          ? 'bg-black/40 text-[#FAAD36]'
                          : 'bg-[var(--color-primary-flame)]/20 text-[var(--color-primary-flame)]'
                      )}
                    >
                      RANK #{idx + 1} • {uni.shortCode}
                    </span>
                    <h3
                      className="mt-1 sm:mt-2 text-base sm:text-xl font-black uppercase leading-tight truncate"
                      style={{ fontFamily: 'var(--font-header-spartan)' }}
                    >
                      {uni.university}
                    </h3>
                    <p
                      className={cn(
                        'text-xs font-mono mt-0.5',
                        isFirst ? 'text-white/80' : 'text-white/50'
                      )}
                    >
                      {uni.points} Championship Pts
                    </p>
                  </div>

                  {/* Circular Gold Ratio Gauge */}
                  <div className="relative h-14 w-14 sm:h-20 sm:w-20 shrink-0 flex items-center justify-center">
                    <svg className="h-full w-full -rotate-90" viewBox="0 0 80 80">
                      <circle
                        cx="40"
                        cy="40"
                        r="34"
                        stroke="currentColor"
                        strokeWidth="6"
                        fill="transparent"
                        className={isFirst ? 'text-black/30' : 'text-white/10'}
                      />
                      <circle
                        cx="40"
                        cy="40"
                        r="34"
                        stroke="currentColor"
                        strokeWidth="6"
                        fill="transparent"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        strokeLinecap="round"
                        className={
                          isFirst ? 'text-[#FAAD36]' : 'text-[var(--color-primary-flame)]'
                        }
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                      <span className="text-xs sm:text-base font-black leading-none">
                        {ringPercent}%
                      </span>
                      <span className="hidden sm:block text-[8px] font-mono uppercase opacity-75 mt-0.5">
                        GOLD
                      </span>
                    </div>
                  </div>
                </div>

                {/* 3 Pill Counters: GOLD / SILVER / BRONZE */}
                <div className="mt-3 sm:mt-5 grid grid-cols-3 gap-1.5 sm:gap-2 pt-2.5 sm:pt-3 border-t border-white/15">
                  <div className="rounded-xl bg-black/35 px-2 py-1.5 sm:py-2 text-center">
                    <span className="block text-[9px] font-mono uppercase text-[#FAAD36]">
                      GOLD
                    </span>
                    <span className="text-base sm:text-xl font-black text-white">{uni.gold}</span>
                  </div>
                  <div className="rounded-xl bg-black/35 px-2 py-1.5 sm:py-2 text-center">
                    <span className="block text-[9px] font-mono uppercase text-zinc-300">
                      SILVER
                    </span>
                    <span className="text-base sm:text-xl font-black text-white">
                      {uni.silver}
                    </span>
                  </div>
                  <div className="rounded-xl bg-black/35 px-2 py-1.5 sm:py-2 text-center">
                    <span className="block text-[9px] font-mono uppercase text-[#E47A2F]">
                      BRONZE
                    </span>
                    <span className="text-base sm:text-xl font-black text-white">
                      {uni.bronze}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* MOBILE STANDINGS LIST (< 640px) — Zero Horizontal Scroll Needed! */}
        <div className="sm:hidden mt-5 space-y-2">
          {computedRows.map((row, index) => (
            <div
              key={row.id}
              className={cn(
                'rounded-xl border p-3 flex flex-col gap-2',
                index === 0
                  ? 'bg-[var(--color-primary-flame)]/12 border-[var(--color-primary-flame)]/40'
                  : 'bg-black/60 border-white/10'
              )}
            >
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="font-mono text-xs font-black text-[#FAAD36] shrink-0">
                    #{index + 1}
                  </span>
                  <span className="inline-flex px-1.5 py-0.5 rounded bg-[var(--color-primary-flame)]/20 border border-[var(--color-primary-flame)]/40 font-mono text-[10px] font-bold text-[var(--color-primary-flame)] shrink-0">
                    {row.shortCode}
                  </span>
                  <span className="font-bold text-xs text-white truncate">
                    {row.university}
                  </span>
                </div>
                <span className="font-mono text-xs font-black text-[var(--color-primary-flame)] shrink-0">
                  {row.points} PTS
                </span>
              </div>

              <div className="grid grid-cols-4 gap-1.5 text-center font-mono text-[11px]">
                <div className="rounded-lg bg-[#FAAD36]/15 border border-[#FAAD36]/30 py-1 text-[#FAAD36] font-bold">
                  🥇 {row.gold}
                </div>
                <div className="rounded-lg bg-white/5 py-1 text-zinc-200 font-bold">
                  🥈 {row.silver}
                </div>
                <div className="rounded-lg bg-white/5 py-1 text-[#E47A2F] font-bold">
                  🥉 {row.bronze}
                </div>
                <div className="rounded-lg bg-white/10 py-1 text-white font-black">
                  TOT: {row.total}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* DESKTOP/TABLET STANDINGS TABLE (sm+) — Fitted 100% inside container */}
        <div className="hidden sm:block mt-8 overflow-hidden rounded-2xl border border-white/12 bg-black/60">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.03] text-xs font-mono uppercase tracking-wider text-white/55">
                <th className="py-3.5 px-4">Pos</th>
                <th className="py-3.5 px-4">University / Contingent</th>
                <th className="py-3.5 px-3 text-center text-[#FAAD36]">🥇 Gold</th>
                <th className="py-3.5 px-3 text-center text-zinc-300">🥈 Silver</th>
                <th className="py-3.5 px-3 text-center text-[#E47A2F]">🥉 Bronze</th>
                <th className="py-3.5 px-3 text-center text-white">Total</th>
                <th className="py-3.5 px-4 text-right text-[var(--color-primary-flame)]">
                  Kuru Pts
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10 text-sm sm:text-base">
              {computedRows.map((row, index) => (
                <tr
                  key={row.id}
                  className={cn(
                    'transition hover:bg-white/[0.05]',
                    index === 0 && 'bg-[var(--color-primary-flame)]/[0.08]'
                  )}
                >
                  <td className="py-4 px-4 font-mono font-bold text-white/85">
                    #{index + 1}
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--color-primary-flame)]/15 border border-[var(--color-primary-flame)]/40 font-mono text-xs font-bold text-[var(--color-primary-flame)]">
                        {row.shortCode}
                      </span>
                      <div>
                        <div className="font-bold text-base text-white flex items-center gap-1.5">
                          <span>{row.university}</span>
                          {index === 0 && (
                            <Flame className="w-4 h-4 text-[var(--color-primary-flame)] fill-current" />
                          )}
                        </div>
                        <span className="text-xs sm:text-sm text-white/65 font-mono">
                          {row.city} Contingent
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-3 text-center">
                    <span className="inline-flex min-w-[2.25rem] items-center justify-center rounded-md bg-[#FAAD36]/15 border border-[#FAAD36]/40 px-2.5 py-1 font-mono font-black text-[#FAAD36]">
                      {row.gold}
                    </span>
                  </td>
                  <td className="py-4 px-3 text-center font-mono font-bold text-zinc-200">
                    {row.silver}
                  </td>
                  <td className="py-4 px-3 text-center font-mono font-bold text-[#E47A2F]">
                    {row.bronze}
                  </td>
                  <td className="py-4 px-3 text-center">
                    <span className="inline-flex min-w-[2.4rem] items-center justify-center rounded-md bg-white/10 px-2.5 py-1 font-mono font-black text-white">
                      {row.total}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-right font-mono font-black text-[var(--color-primary-flame)]">
                    {row.points} PTS
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
