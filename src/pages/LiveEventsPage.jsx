import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Radio,
  Trophy,
  MapPin,
  LayoutGrid,
  Rows,
  ArrowUpRight,
  Filter,
} from 'lucide-react';
import { CATEGORIES } from '../data/liveEventsData';
import EventCard from '../components/EventCard';
import LeaderboardTally from '../components/LeaderboardTally';
import {
  DynamicScreenContainer,
  DynamicAutoGrid,
  DynamicPillGrid,
} from '../components/ui/dynamic-container';
import { cn } from '../utils/cn';

const DAYS = [
  { id: 'ALL', label: 'All Days', dateNum: '18-21', weekDay: 'FEB' },
  { id: 'DAY 1', label: 'Day 1', dateNum: '18', weekDay: 'THU' },
  { id: 'DAY 2', label: 'Day 2', dateNum: '19', weekDay: 'FRI' },
  { id: 'DAY 3', label: 'Day 3', dateNum: '20', weekDay: 'SAT' },
];

export default function LiveEventsPage({ events = [], universities = [] }) {
  const [activeCategory, setActiveCategory] = useState('SPORTS');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [dayFilter, setDayFilter] = useState('ALL');
  const [stageFilter, setStageFilter] = useState('ALL STAGES');
  const [viewMode, setViewMode] = useState('GRID');
  const [activeSectionTab, setActiveSectionTab] = useState('EVENTS'); // 'EVENTS' | 'TALLY'
  const [tallyScope, setTallyScope] = useState('OVERALL');

  const handleCategoryChange = (catId) => {
    setActiveCategory(catId);
    setStageFilter('ALL STAGES');
  };

  const categoryEvents = events.filter((e) => e.category === activeCategory);
  const availableStages = [
    'ALL STAGES',
    ...Array.from(new Set(categoryEvents.map((e) => e.stageTag))),
  ];

  const filteredEvents = categoryEvents.filter((ev) => {
    if (statusFilter === 'LIVE' && ev.status !== 'LIVE') return false;
    if (statusFilter === 'UPCOMING' && ev.status !== 'UPCOMING') return false;
    if (dayFilter !== 'ALL' && ev.day !== dayFilter) return false;
    if (stageFilter !== 'ALL STAGES' && ev.stageTag !== stageFilter) return false;
    return true;
  });

  const liveCountInCategory = categoryEvents.filter((e) => e.status === 'LIVE').length;
  const totalLiveCount = events.filter((e) => e.status === 'LIVE').length;

  const spotlightEvent =
    categoryEvents.find((e) => e.status === 'LIVE') || categoryEvents[0];

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-clip bg-[#FAF9F6] text-zinc-900 dark:bg-[var(--color-primary-black)] dark:text-[var(--color-primary-white)] bg-blueprint-grid pb-24 transition-colors duration-300">
      {/* 1. HERO BANNER + VIEW TOGGLE BUTTON (Fitted inside DynamicScreenContainer) */}
      <section className="relative w-full max-w-full border-b border-black/10 dark:border-white/10 pt-3.5 sm:pt-8 pb-4 sm:pb-10 overflow-hidden">
        <div className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 h-[200px] sm:h-[280px] w-[260px] sm:w-[540px] rounded-full bg-[var(--color-primary-flame)]/12 blur-[90px] sm:blur-[120px]" />

        <DynamicScreenContainer className="max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-3 sm:gap-5 mb-4 sm:mb-8">
            <div className="min-w-0">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-primary-flame)]/40 bg-[#09090B] px-2.5 sm:px-3.5 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[var(--color-primary-flame)] mb-2 shadow-md max-w-full">
                <span className="h-2 w-2 rounded-full bg-[var(--color-primary-flame)] animate-ping shrink-0" />
                <span className="truncate">
                  {totalLiveCount} ARENAS LIVE • KURUKSHETRA &apos;27
                </span>
              </div>
              <h1
                className="font-horizon text-lg sm:text-4xl lg:text-5xl font-black uppercase tracking-wider leading-tight text-zinc-950 dark:text-white"
                style={{ fontFamily: 'var(--font-header-horizon)' }}
              >
                LIVE <span className="text-[var(--color-primary-flame)]">BATTLEGROUND</span> &amp; TALLY
              </h1>
              <p className="mt-1 text-xs sm:text-base text-zinc-700 dark:text-white/75 max-w-2xl">
                Follow live and upcoming inter-university clashes across all 3 categories, or
                tap the Medal Tally button to view university standings.
              </p>
            </div>

            {/* Primary View Toggle Button: Fitted 2-column grid on mobile */}
            <div className="grid grid-cols-2 sm:inline-flex w-full sm:w-auto rounded-2xl border border-white/15 bg-[#09090B] p-1 sm:p-1.5 shadow-xl gap-1">
              <button
                type="button"
                onClick={() => setActiveSectionTab('EVENTS')}
                className={cn(
                  'inline-flex items-center justify-center gap-1.5 rounded-xl px-2 sm:px-4 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider transition text-center min-w-0',
                  activeSectionTab === 'EVENTS'
                    ? 'bg-[var(--color-primary-flame)] text-white shadow-[0_0_20px_rgba(254,90,0,0.45)]'
                    : 'text-white/75 hover:text-white'
                )}
              >
                <Radio className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                <span className="truncate">Live &amp; Upcoming ({events.length})</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveSectionTab('TALLY')}
                className={cn(
                  'inline-flex items-center justify-center gap-1.5 rounded-xl px-2 sm:px-4 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider transition text-center min-w-0',
                  activeSectionTab === 'TALLY'
                    ? 'bg-[var(--color-primary-flame)] text-white shadow-[0_0_20px_rgba(254,90,0,0.45)]'
                    : 'text-white/75 hover:text-white'
                )}
              >
                <Trophy className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                <span className="truncate sm:hidden">Medal Tally</span>
                <span className="hidden sm:inline">Medal Category &amp; Overall Tally</span>
              </button>
            </div>
          </div>

          {/* When on EVENTS tab: show the 3 Category Tabs + Featured Spotlight */}
          {activeSectionTab === 'EVENTS' && (
            <>
              {/* 3 MAIN CATEGORY TABS — Fitted 3-column grid on all screens */}
              <div className="grid grid-cols-3 gap-1.5 sm:gap-4 mb-4 sm:mb-8">
                {CATEGORIES.map((cat) => {
                  const isSelected = activeCategory === cat.id;
                  const catAllCount = events.filter((e) => e.category === cat.id).length;
                  const catLiveCount = events.filter(
                    (e) => e.category === cat.id && e.status === 'LIVE'
                  ).length;

                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => handleCategoryChange(cat.id)}
                      className={cn(
                        'text-left rounded-xl sm:rounded-2xl p-2 sm:p-5 border transition-all duration-300 relative overflow-hidden min-w-0',
                        isSelected
                          ? 'bg-[#09090B] border-[var(--color-primary-flame)] text-white shadow-[0_8px_25px_rgba(254,90,0,0.28)]'
                          : 'bg-[#09090B]/95 border-white/15 text-white/75 hover:border-white/30 hover:text-white'
                      )}
                    >
                      <div className="flex items-center justify-between gap-1 mb-1">
                        <span className="font-mono text-[10px] sm:text-xs font-bold uppercase text-[var(--color-primary-flame)] truncate">
                          {catAllCount} <span className="hidden sm:inline">EVENTS</span>
                        </span>
                        {catLiveCount > 0 && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-[var(--color-primary-flame)] px-1.5 sm:px-2.5 py-0.5 text-[9px] sm:text-xs font-black uppercase text-white shrink-0">
                            <span className="h-1.5 w-1.5 rounded-full bg-white animate-ping shrink-0" />
                            <span>{catLiveCount}</span>
                            <span className="hidden sm:inline">LIVE</span>
                          </span>
                        )}
                      </div>
                      <div
                        className="font-horizon text-[11px] xs:text-xs sm:text-xl font-black uppercase text-white truncate"
                        style={{ fontFamily: 'var(--font-header-horizon)' }}
                      >
                        {cat.shortLabel || cat.label}
                      </div>
                      <p className="hidden sm:block mt-1 text-xs sm:text-sm text-white/65 line-clamp-1">
                        {cat.tagline}
                      </p>
                    </button>
                  );
                })}
              </div>

              {/* Featured Live Arena Spotlight Banner */}
              {spotlightEvent && (
                <div className="rounded-2xl sm:rounded-3xl border border-white/15 bg-[#09090B] text-white overflow-hidden shadow-2xl">
                  <div className="grid grid-cols-1 lg:grid-cols-12">
                    {/* Left 7 Cols */}
                    <div className="lg:col-span-7 relative p-3.5 sm:p-8 flex flex-col justify-between overflow-hidden min-w-0">
                      <img
                        src={spotlightEvent.image}
                        alt={spotlightEvent.title}
                        className="absolute inset-0 h-full w-full object-cover opacity-30 filter contrast-125"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/40" />

                      <div className="relative z-10 flex flex-wrap items-center justify-between gap-1.5">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-primary-flame)] px-2.5 sm:px-3.5 py-0.5 sm:py-1 text-[10px] sm:text-xs font-black uppercase tracking-wider text-white">
                          <span className="h-1.5 w-1.5 rounded-full bg-white animate-ping shrink-0" />
                          FEATURED {activeCategory}
                        </span>
                        <span className="rounded-full border border-white/20 bg-black/70 px-2.5 py-0.5 font-mono text-[10px] sm:text-xs text-white/85 truncate">
                          {spotlightEvent.round}
                        </span>
                      </div>

                      <div className="relative z-10 my-2.5 sm:my-4 flex items-center justify-between gap-2.5">
                        <div className="min-w-0 flex-1">
                          <div className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-[#FAAD36] font-bold truncate">
                            {spotlightEvent.teamA.shortName} VS {spotlightEvent.teamB.shortName}
                          </div>
                          <h2
                            className="font-horizon text-sm sm:text-3xl font-black uppercase text-white mt-0.5 leading-tight"
                            style={{ fontFamily: 'var(--font-header-horizon)' }}
                          >
                            {spotlightEvent.title}
                          </h2>
                          <p className="hidden sm:block mt-2 text-sm text-white/85 max-w-xl">
                            {spotlightEvent.nuances.lastAction}
                          </p>
                        </div>

                        {/* Mobile Inline Score Pill */}
                        <div className="lg:hidden shrink-0 rounded-xl border border-white/20 bg-black/80 px-2.5 py-1.5 text-center">
                          <span className="block font-mono text-[9px] uppercase text-[#FAAD36]">
                            SCORE
                          </span>
                          <div
                            className="text-lg font-black text-white leading-none mt-0.5"
                            style={{ fontFamily: 'var(--font-header-spartan)' }}
                          >
                            <span className="text-[var(--color-primary-flame)]">
                              {spotlightEvent.teamA.score}
                            </span>
                            <span className="text-white/40 mx-1">:</span>
                            <span>{spotlightEvent.teamB.score}</span>
                          </div>
                        </div>
                      </div>

                      <div className="relative z-10 flex items-center justify-between gap-2 pt-2.5 sm:pt-3 border-t border-white/15">
                        <div className="flex items-center gap-1.5 text-xs text-white/80 min-w-0">
                          <MapPin className="w-3.5 h-3.5 text-[var(--color-primary-flame)] shrink-0" />
                          <span className="truncate">{spotlightEvent.venue}</span>
                        </div>

                        <Link
                          to={`/live-events/${spotlightEvent.id}`}
                          className="shrink-0 inline-flex items-center gap-1 rounded-xl bg-[var(--color-primary-flame)] hover:bg-[#ff6a1a] px-3 sm:px-4 py-2 text-xs font-black uppercase tracking-wider text-white shadow-[0_0_20px_rgba(254,90,0,0.5)] transition"
                        >
                          <span>Scoreboard</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>

                    {/* Right 5 Cols: Desktop Score & 4-Column Day Filter */}
                    <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-white/10 bg-black/70 p-3 sm:p-6 flex flex-col justify-between min-w-0">
                      <div className="hidden lg:block">
                        <div className="flex items-center justify-between text-xs font-mono uppercase text-white/60 mb-2.5">
                          <span>LIVE SCOREBOARD</span>
                          <span className="text-[var(--color-primary-flame)] font-bold">
                            {spotlightEvent.status}
                          </span>
                        </div>

                        <div className="rounded-2xl border border-white/15 bg-white/[0.04] p-4 grid grid-cols-7 items-center text-center">
                          <div className="col-span-3 min-w-0">
                            <div className="text-xs font-bold uppercase text-white/80 truncate">
                              {spotlightEvent.teamA.shortName}
                            </div>
                            <div
                              className="text-3xl sm:text-5xl font-black text-[var(--color-primary-flame)] mt-1"
                              style={{ fontFamily: 'var(--font-header-spartan)' }}
                            >
                              {spotlightEvent.teamA.score}
                            </div>
                          </div>
                          <div className="col-span-1 font-mono text-xs text-white/40">VS</div>
                          <div className="col-span-3 min-w-0">
                            <div className="text-xs font-bold uppercase text-white/80 truncate">
                              {spotlightEvent.teamB.shortName}
                            </div>
                            <div
                              className="text-3xl sm:text-5xl font-black text-white mt-1"
                              style={{ fontFamily: 'var(--font-header-spartan)' }}
                            >
                              {spotlightEvent.teamB.score}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Day Calendar Selector Cards — 4 equal columns */}
                      <div className="lg:mt-4">
                        <span className="hidden sm:block font-mono text-xs uppercase tracking-wider text-white/60 mb-2">
                          FILTER BY FEST DAY
                        </span>
                        <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
                          {DAYS.map((d) => {
                            const active = dayFilter === d.id;
                            return (
                              <button
                                key={d.id}
                                type="button"
                                onClick={() => setDayFilter(d.id)}
                                className={cn(
                                  'rounded-xl py-1.5 px-1 sm:p-2 text-center transition border flex flex-col items-center justify-center min-w-0',
                                  active
                                    ? 'bg-[#FAAD36] text-black border-[#FAAD36] font-black'
                                    : 'bg-white/[0.04] text-white border-white/10 hover:border-white/30'
                                )}
                              >
                                <span
                                  className="text-sm sm:text-lg font-black leading-tight"
                                  style={{ fontFamily: 'var(--font-header-spartan)' }}
                                >
                                  {d.dateNum}
                                </span>
                                <span className="text-[10px] sm:text-xs font-bold uppercase truncate max-w-full">
                                  {d.label}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </DynamicScreenContainer>
      </section>

      {/* 2. MAIN CONTENT SECTION: Fitted inside DynamicScreenContainer with ZERO horizontal scroll */}
      <DynamicScreenContainer as="section" className="max-w-7xl pt-4 sm:pt-8">
        {activeSectionTab === 'EVENTS' ? (
          <div className="space-y-4 sm:space-y-6">
            {/* Filter Controls Bar — Uses fitted grids instead of horizontal scrollbars! */}
            <div className="rounded-2xl border border-white/15 bg-[#09090B] text-white p-3 sm:p-5 shadow-xl space-y-2.5 lg:space-y-0 lg:flex lg:items-center lg:justify-between lg:gap-4">
              {/* Row 1: 3-Col Status Pills + View Mode Switcher */}
              <div className="flex items-center justify-between gap-2">
                <div className="grid grid-cols-3 sm:flex items-center gap-1.5 flex-1 sm:flex-initial">
                  {[
                    { id: 'ALL', label: 'All' },
                    { id: 'LIVE', label: `Live (${liveCountInCategory})` },
                    { id: 'UPCOMING', label: 'Upcoming' },
                  ].map((st) => (
                    <button
                      key={st.id}
                      type="button"
                      onClick={() => setStatusFilter(st.id)}
                      className={cn(
                        'px-2 sm:px-3.5 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider transition border text-center truncate',
                        statusFilter === st.id
                          ? 'bg-[var(--color-primary-flame)] text-white border-[var(--color-primary-flame)]'
                          : 'bg-white/[0.04] text-white/75 border-white/10 hover:text-white'
                      )}
                    >
                      {st.label}
                    </button>
                  ))}
                </div>

                {/* Card Layout Switcher */}
                <div className="flex items-center gap-1 shrink-0 bg-white/[0.04] border border-white/10 rounded-xl p-1">
                  <button
                    type="button"
                    onClick={() => setViewMode('GRID')}
                    className={cn(
                      'inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-bold uppercase transition',
                      viewMode === 'GRID'
                        ? 'bg-[var(--color-primary-flame)] text-white'
                        : 'text-white/65 hover:text-white'
                    )}
                    title="Poster Cards"
                  >
                    <LayoutGrid className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Cards</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setViewMode('MATCHUP')}
                    className={cn(
                      'inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-bold uppercase transition',
                      viewMode === 'MATCHUP'
                        ? 'bg-[var(--color-primary-flame)] text-white'
                        : 'text-white/65 hover:text-white'
                    )}
                    title="Matchup Rows"
                  >
                    <Rows className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Rows</span>
                  </button>
                </div>
              </div>

              {/* Row 2: Stage Filter — DynamicPillGrid fits all stages without horizontal scroll! */}
              <DynamicPillGrid minPillWidth="110px" className="lg:max-w-xl">
                {availableStages.map((stg) => (
                  <button
                    key={stg}
                    type="button"
                    onClick={() => setStageFilter(stg)}
                    className={cn(
                      'px-2 py-1.5 rounded-xl text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider transition border text-center truncate',
                      stageFilter === stg
                        ? 'bg-[#FAAD36] text-black border-[#FAAD36]'
                        : 'bg-white/[0.04] text-white/70 border-white/10 hover:text-white'
                    )}
                  >
                    {stg}
                  </button>
                ))}
              </DynamicPillGrid>
            </div>

            {/* Event Cards Display — Powered by DynamicAutoGrid */}
            {filteredEvents.length === 0 ? (
              <div className="rounded-2xl sm:rounded-3xl border border-white/15 bg-[#09090B] text-white p-8 text-center space-y-3">
                <p className="text-sm sm:text-lg font-bold">
                  No events match your active day or stage filter.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setStatusFilter('ALL');
                    setDayFilter('ALL');
                    setStageFilter('ALL STAGES');
                  }}
                  className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary-flame)] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white"
                >
                  Reset Filters
                </button>
              </div>
            ) : viewMode === 'GRID' ? (
              <DynamicAutoGrid minColWidth="280px">
                {filteredEvents.map((event) => (
                  <EventCard key={event.id} event={event} viewMode="GRID" />
                ))}
              </DynamicAutoGrid>
            ) : (
              <div className="space-y-3 sm:space-y-4">
                {filteredEvents.map((event) => (
                  <EventCard key={event.id} event={event} viewMode="MATCHUP" />
                ))}
              </div>
            )}
          </div>
        ) : (
          /* Shows ONLY when the user clicks "Medal Category & Overall Tally" button */
          <LeaderboardTally
            universities={universities}
            activeCategory={tallyScope}
            onSelectScope={setTallyScope}
          />
        )}
      </DynamicScreenContainer>
    </div>
  );
}
