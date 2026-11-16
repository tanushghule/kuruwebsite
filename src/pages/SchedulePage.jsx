import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  MapPin,
  Clock,
  Award,
  UserPlus,
  Calendar,
  ArrowUpRight,
} from 'lucide-react';
import { SCHEDULE_EVENTS } from '../data/websiteContent';
import { cn } from '../utils/cn';

export default function SchedulePage() {
  const [selectedDay, setSelectedDay] = useState('all'); // 'all' | 1 | 2 | 3 | 4 | 5
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

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
    {
      num: 1,
      date: 'JAN 22',
      dayName: 'FRIDAY',
      title: 'Ignition & Opening Rounds',
      desc: 'Contingent torchbearer march, initial group stage clashes, and acoustic courtyard showcases.',
    },
    {
      num: 2,
      date: 'JAN 23',
      dayName: 'SATURDAY',
      title: 'Clash of Titans & Flagships',
      desc: 'High-octane qualifiers, Shark Arena pitches, Table Tennis knockouts, and Battle of the Bands.',
    },
    {
      num: 3,
      date: 'JAN 24',
      dayName: 'SUNDAY',
      title: 'Quarter-Finals & Step-Off',
      desc: 'Volleyball and Tennis showdowns, Wolf of Dalal Street trading floor, and Western Group Dance.',
    },
    {
      num: 4,
      date: 'JAN 25',
      dayName: 'MONDAY',
      title: 'Semi-Finals & Runway Night',
      desc: 'Morning Yoga championship, high-stakes knockout semi-finals, and the Phoenix Walk fashion show.',
    },
    {
      num: 5,
      date: 'JAN 26',
      dayName: 'TUESDAY',
      title: 'Grand Finales & Closing Spectacle',
      desc: 'Swimming Gala, Gold medal championship finals, podium felicitations, and closing concert.',
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#09090B] text-white flex flex-col">
      {/* =========================================================================
           1. HERO BANNER
           ========================================================================= */}
      <section className="relative w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-white/10 bg-blueprint-grid">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs tracking-widest uppercase text-white/80 mb-4 font-bold">
            <span className="h-2 w-2 rounded-full bg-[var(--color-primary-flame)] animate-pulse" />
            <span>22ND–26TH JANUARY 2027 • OFFICIAL MASTER FIXTURES</span>
          </div>

          <h1 className="font-horizon text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white">
            TOURNAMENT <span className="text-[var(--color-primary-flame)]">SCHEDULE</span>
          </h1>

          <p className="max-w-xl text-sm sm:text-base text-white/70 mt-3 leading-relaxed">
            Full-width day-wise horizontal schedule with official timings, arena locations, format details, and direct registration links.
          </p>

          {/* Controls Bar: Category Pills + Search */}
          <div className="w-full max-w-4xl mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Category Pills (Esports removed, Management -> Management Events) */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {[
                { id: 'all', label: 'All Events' },
                { id: 'sports', label: 'Sports' },
                { id: 'cultural', label: 'Cultural' },
                { id: 'management', label: 'Management Events' },
              ].map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={cn(
                    'rounded-xl px-4 py-2 text-xs uppercase tracking-wider transition font-bold',
                    selectedCategory === cat.id
                      ? 'bg-[var(--color-primary-flame)] text-white shadow-[0_0_15px_rgba(254,90,0,0.5)]'
                      : 'bg-white/5 text-white/75 hover:bg-white/10 hover:text-white border border-white/10'
                  )}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Search Box */}
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search event or venue..."
                className="w-full rounded-xl border border-white/15 bg-white/5 py-2 pl-10 pr-3 text-xs sm:text-sm text-white placeholder-white/40 focus:outline-none focus:border-[var(--color-primary-flame)] transition"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
           2. DAY QUICK SELECTOR TABS
           ========================================================================= */}
      <section className="w-full border-b border-white/10 bg-[#0C0C10] py-3.5 px-4 sticky top-16 sm:top-20 z-30 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar">
          <button
            type="button"
            onClick={() => setSelectedDay('all')}
            className={cn(
              'rounded-xl px-4 py-2 text-xs uppercase tracking-wider transition shrink-0 font-extrabold',
              selectedDay === 'all'
                ? 'bg-white text-black shadow-md'
                : 'bg-white/5 text-white/70 hover:bg-white/10 border border-white/10'
            )}
          >
            All 5 Days (Jan 22–26)
          </button>

          {dayDetails.map((day) => (
            <button
              key={day.num}
              type="button"
              onClick={() => setSelectedDay(day.num)}
              className={cn(
                'rounded-xl px-4 py-2 text-xs uppercase tracking-wider transition shrink-0 font-bold flex items-center gap-2',
                selectedDay === day.num
                  ? 'bg-[var(--color-primary-flame)] text-white shadow-[0_0_15px_rgba(254,90,0,0.5)]'
                  : 'bg-white/5 text-white/70 hover:bg-white/10 border border-white/10'
              )}
            >
              <span>Day {day.num}</span>
              <span className="text-white/70">• {day.date}</span>
            </button>
          ))}
        </div>
      </section>

      {/* =========================================================================
           3. FULL-SCREEN HORIZONTAL DAY-WISE SCHEDULE (Page 6 Fix)
              - Fills the entire screen width (max-w-7xl)
              - Horizontal rows with Venue, Timings, Format, Prize, and Direct Register Button
           ========================================================================= */}
      <main className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10 sm:py-16 flex flex-col gap-10">
        {dayDetails
          .filter((d) => selectedDay === 'all' || selectedDay === d.num)
          .map((day) => {
            const events = getDayEvents(day.num);

            return (
              <section
                key={day.num}
                className="w-full rounded-3xl border border-white/12 bg-[#12141C] overflow-hidden shadow-2xl"
              >
                {/* Full-Width Horizontal Day Banner */}
                <div className="p-6 sm:p-8 border-b border-white/10 bg-gradient-to-r from-[#1A1D2B] via-[#131520] to-[#12141C] flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
                    <div className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary-flame)] px-4 py-2 text-white font-black text-sm uppercase tracking-wider w-fit shadow-md">
                      <Calendar className="w-4 h-4" />
                      <span>DAY 0{day.num} • {day.date}</span>
                    </div>
                    <div>
                      <div className="text-xs font-extrabold uppercase tracking-widest text-[var(--color-accent-yellow)]">
                        {day.dayName}, JANUARY 2027
                      </div>
                      <h2 className="font-horizon text-xl sm:text-2xl lg:text-3xl font-black uppercase text-white mt-0.5">
                        {day.title}
                      </h2>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-white/65 max-w-md font-normal">
                    {day.desc}
                  </p>
                </div>

                {/* Horizontal Event Rows List */}
                <div className="divide-y divide-white/10">
                  {events.map((ev) => (
                    <div
                      key={`${day.num}-${ev.id}`}
                      className="p-5 sm:p-6 hover:bg-white/[0.03] transition flex flex-col lg:flex-row lg:items-center justify-between gap-5"
                    >
                      {/* Left: Category Pill, Event Name & Description */}
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2.5 mb-2">
                          <span
                            className={cn(
                              'rounded-md px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider',
                              ev.category === 'sports'
                                ? 'bg-[var(--color-primary-flame)]/20 text-[var(--color-primary-flame)] border border-[var(--color-primary-flame)]/40'
                                : ev.category === 'cultural'
                                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                                : 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                            )}
                          >
                            {ev.categoryLabel}
                          </span>
                          <span className="text-xs text-white/55 font-medium">
                            {ev.format}
                          </span>
                        </div>

                        <h3 className="font-horizon text-lg sm:text-xl font-bold text-white">
                          {ev.name}
                        </h3>
                        <p className="mt-1 text-xs sm:text-sm text-white/70 font-normal max-w-2xl leading-relaxed">
                          {ev.desc}
                        </p>
                      </div>

                      {/* Middle: Timings, Venue & Prize Pool */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 lg:flex lg:items-center gap-3 sm:gap-6 shrink-0 bg-white/[0.03] lg:bg-transparent p-3.5 lg:p-0 rounded-xl border border-white/10 lg:border-0">
                        <div className="flex items-start gap-2.5 lg:w-44">
                          <Clock className="w-4 h-4 text-[var(--color-primary-flame)] shrink-0 mt-0.5" />
                          <div>
                            <div className="text-[10px] uppercase tracking-wider text-white/50 font-bold">
                              Timings
                            </div>
                            <div className="text-xs sm:text-sm font-bold text-white">
                              {ev.timing}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-start gap-2.5 lg:w-52">
                          <MapPin className="w-4 h-4 text-[var(--color-primary-flame)] shrink-0 mt-0.5" />
                          <div>
                            <div className="text-[10px] uppercase tracking-wider text-white/50 font-bold">
                              Venue
                            </div>
                            <div className="text-xs sm:text-sm font-bold text-white">
                              {ev.venue}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-start gap-2.5 lg:w-40">
                          <Award className="w-4 h-4 text-[var(--color-accent-yellow)] shrink-0 mt-0.5" />
                          <div>
                            <div className="text-[10px] uppercase tracking-wider text-white/50 font-bold">
                              Prize Pool
                            </div>
                            <div className="text-xs sm:text-sm font-bold text-[var(--color-accent-yellow)]">
                              {ev.prize.split('+')[0]}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Right: Direct Register CTA Button */}
                      <div className="shrink-0 flex items-center">
                        <Link
                          to="/register"
                          className="rdr-btn w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[var(--color-primary-flame)] hover:bg-[#ea5401] px-5 py-3 text-xs font-extrabold uppercase tracking-wider text-white shadow-[0_8px_20px_rgba(254,90,0,0.4)] transition"
                        >
                          <UserPlus className="w-4 h-4" />
                          <span>Register</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  ))}

                  {events.length === 0 && (
                    <div className="p-8 text-center text-sm text-white/50">
                      No matching events scheduled for Day {day.num}.
                    </div>
                  )}
                </div>
              </section>
            );
          })}
      </main>
    </div>
  );
}
