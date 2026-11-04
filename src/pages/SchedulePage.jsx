import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Calendar,
  Search,
  MapPin,
  Clock,
  Award,
  ChevronRight,
  X,
  Radio,
  UserPlus,
  Flame,
} from 'lucide-react';
import { SCHEDULE_EVENTS } from '../data/websiteContent';
import { cn } from '../utils/cn';

export default function SchedulePage() {
  const [selectedDay, setSelectedDay] = useState('all'); // 'all' | 1 | 2 | 3 | 4
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEventModal, setSelectedEventModal] = useState(null);

  // Filter events
  const filteredEvents = SCHEDULE_EVENTS.filter((ev) => {
    const matchesDay =
      selectedDay === 'all' || ev.days.includes(Number(selectedDay));
    const matchesCategory =
      selectedCategory === 'all' || ev.category === selectedCategory;
    const matchesSearch =
      ev.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ev.venue.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ev.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDay && matchesCategory && matchesSearch;
  });

  const getDayEvents = (dayNum) => {
    return filteredEvents.filter((ev) => ev.days.includes(dayNum));
  };

  const dayDetails = [
    { num: 1, date: "FEB 18", dayName: "THURSDAY", title: "Ignition & Opening Rounds", desc: "Contingent torchbearer march, initial group stage clashes, and opening concerts." },
    { num: 2, date: "FEB 19", dayName: "FRIDAY", title: "Clash of Titans & Flagships", desc: "High-octane football qualifiers, Shark Arena pitches, and Battle of the Bands." },
    { num: 3, date: "FEB 20", dayName: "SATURDAY", title: "Semi-Final Showdowns & Runway", desc: "High-stakes knockout semis, Step Up street dance, and the Phoenix Walk fashion show." },
    { num: 4, date: "FEB 21", dayName: "SUNDAY", title: "Grand Finales & Pro-Night", desc: "Gold medal matches, podium felicitations, trophy parade, and headline celebrity concert." },
  ];

  return (
    <div className="w-full min-h-screen bg-[#09090B] text-white flex flex-col">
      {/* =========================================================================
           1. HERO BANNER
           ========================================================================= */}
      <section className="relative w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-white/10 bg-blueprint-grid">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-mono tracking-widest uppercase text-white/80 mb-4">
            <span className="h-2 w-2 rounded-full bg-[var(--color-primary-flame)] animate-pulse" />
            <span>FEB 18–21, 2027 • OFFICIAL MASTER FIXTURES</span>
          </div>

          <h1 className="font-horizon text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white">
            TOURNAMENT <span className="text-[var(--color-primary-flame)]">SCHEDULE</span>
          </h1>

          <p className="max-w-xl text-sm sm:text-base text-white/70 mt-3 leading-relaxed">
            Four days of relentless athletic matches, cultural spectacles, and management war rooms across FLAME University arenas.
          </p>

          {/* Controls Bar: Category Pills + Search */}
          <div className="w-full max-w-3xl mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Category Pills */}
            <div className="flex flex-wrap items-center justify-center gap-1.5">
              {[
                { id: 'all', label: 'All Events' },
                { id: 'sports', label: 'Sports' },
                { id: 'cultural', label: 'Cultural' },
                { id: 'management', label: 'Management' },
                { id: 'esports', label: 'Esports' },
              ].map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={cn(
                    'rounded-xl px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider transition font-bold',
                    selectedCategory === cat.id
                      ? 'bg-[var(--color-primary-flame)] text-white shadow-[0_0_15px_rgba(254,90,0,0.5)]'
                      : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10'
                  )}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Search Box */}
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Filter event..."
                className="w-full rounded-xl border border-white/15 bg-white/5 py-1.5 pl-9 pr-3 text-xs text-white placeholder-white/40 focus:outline-none focus:border-[var(--color-primary-flame)] transition"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
           2. DAY QUICK SELECTOR TABS
           ========================================================================= */}
      <section className="w-full border-b border-white/10 bg-[#0C0C10] py-3 px-4 sticky top-16 sm:top-20 z-30 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 sm:gap-4 overflow-x-auto no-scrollbar">
          <button
            type="button"
            onClick={() => setSelectedDay('all')}
            className={cn(
              'rounded-xl px-4 py-2 text-xs font-mono uppercase tracking-wider transition shrink-0 font-bold',
              selectedDay === 'all'
                ? 'bg-white text-black shadow-md'
                : 'bg-white/5 text-white/70 hover:bg-white/10 border border-white/10'
            )}
          >
            All 4 Days
          </button>

          {dayDetails.map((day) => (
            <button
              key={day.num}
              type="button"
              onClick={() => setSelectedDay(day.num)}
              className={cn(
                'rounded-xl px-4 py-2 text-xs font-mono uppercase tracking-wider transition shrink-0 font-bold flex items-center gap-2',
                selectedDay === day.num
                  ? 'bg-[var(--color-primary-flame)] text-white shadow-[0_0_15px_rgba(254,90,0,0.5)]'
                  : 'bg-white/5 text-white/70 hover:bg-white/10 border border-white/10'
              )}
            >
              <span>Day {day.num}</span>
              <span className="hidden sm:inline text-white/50">• {day.date}</span>
            </button>
          ))}
        </div>
      </section>

      {/* =========================================================================
           3. DAY-WISE SCHEDULE BREAKDOWN
           ========================================================================= */}
      <main className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dayDetails
            .filter((d) => selectedDay === 'all' || selectedDay === d.num)
            .map((day) => {
              const events = getDayEvents(day.num);

              return (
                <div
                  key={day.num}
                  className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden"
                >
                  {/* Day Header */}
                  <div className="p-5 border-b border-white/10 bg-white/[0.02]">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="rounded bg-[var(--color-primary-flame)] text-white font-bold px-2 py-0.5">
                        DAY 0{day.num}
                      </span>
                      <span className="text-white/60 font-bold">{day.date}</span>
                    </div>

                    <h3 className="font-horizon text-lg font-bold text-white mt-3">
                      {day.title}
                    </h3>

                    <p className="text-[11px] text-white/50 mt-1 line-clamp-2">
                      {day.desc}
                    </p>
                  </div>

                  {/* Event Rows */}
                  <div className="p-3 flex flex-col gap-2 flex-1">
                    {events.map((ev) => (
                      <button
                        key={ev.id}
                        type="button"
                        onClick={() => setSelectedEventModal(ev)}
                        className="w-full text-left p-3 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.08] hover:border-[var(--color-primary-flame)]/40 transition group flex items-start justify-between gap-2"
                      >
                        <div className="flex items-start gap-2.5 min-w-0">
                          <span
                            className={cn(
                              'h-2 w-2 rounded-full mt-1.5 shrink-0',
                              ev.category === 'sports'
                                ? 'bg-[var(--color-primary-flame)]'
                                : ev.category === 'cultural'
                                ? 'bg-amber-400'
                                : 'bg-cyan-400'
                            )}
                          />
                          <div className="min-w-0">
                            <h4 className="text-xs font-bold text-white group-hover:text-[var(--color-primary-flame)] transition truncate">
                              {ev.name}
                            </h4>
                            <p className="text-[10px] font-mono text-white/50 truncate mt-0.5">
                              {ev.venue}
                            </p>
                          </div>
                        </div>

                        <ChevronRight className="w-4 h-4 text-white/30 group-hover:text-white shrink-0 mt-1 transition" />
                      </button>
                    ))}

                    {events.length === 0 && (
                      <div className="p-6 text-center text-xs font-mono text-white/40">
                        No matches found for Day {day.num}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
        </div>
      </main>

      {/* =========================================================================
           4. EVENT DETAILS MODAL / DRAWER
           ========================================================================= */}
      {selectedEventModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedEventModal(null)}
        >
          <div
            className="w-full max-w-lg rounded-2xl border border-white/15 bg-[#121217] p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-[var(--color-primary-flame)]/20 text-[var(--color-primary-flame)] text-xs font-mono font-bold px-2.5 py-0.5">
                  {selectedEventModal.categoryLabel}
                </span>
                <span className="text-xs font-mono text-white/60">
                  {selectedEventModal.datesText}
                </span>
              </div>

              <button
                type="button"
                onClick={() => setSelectedEventModal(null)}
                className="h-8 w-8 rounded-lg bg-white/10 hover:bg-white/20 text-white/70 hover:text-white flex items-center justify-center transition"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <h3 className="font-horizon text-2xl font-bold text-white mt-4">
              {selectedEventModal.name}
            </h3>

            <p className="text-xs sm:text-sm text-white/70 mt-3 leading-relaxed">
              {selectedEventModal.desc}
            </p>

            <div className="mt-5 p-4 rounded-xl bg-white/[0.04] border border-white/10 flex flex-col gap-2.5 text-xs font-mono">
              <div className="flex items-center justify-between">
                <span className="text-white/50">VENUE:</span>
                <span className="text-white font-bold">{selectedEventModal.venue}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/50">FORMAT:</span>
                <span className="text-white font-bold">{selectedEventModal.format}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/50">PRIZE POOL:</span>
                <span className="text-[var(--color-accent-yellow)] font-bold">{selectedEventModal.prize}</span>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-3">
              <Link
                to="/live-events"
                className="inline-flex items-center gap-1.5 rounded-xl border border-white/20 bg-white/10 hover:bg-white/20 px-4 py-2.5 text-xs font-mono font-bold text-white transition"
              >
                <Radio className="w-3.5 h-3.5 text-[var(--color-primary-flame)]" />
                <span>Live Scores</span>
              </Link>

              <Link
                to="/register"
                className="inline-flex items-center gap-1.5 rounded-xl bg-[var(--color-primary-flame)] hover:bg-[#ea5401] px-5 py-2.5 text-xs font-mono font-bold text-white shadow-lg transition"
              >
                <UserPlus className="w-3.5 h-3.5" />
                <span>Register Team</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
