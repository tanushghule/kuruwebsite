import React, { useState, useEffect, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import {
  Search,
  Layers,
  RotateCcw,
} from 'lucide-react';
import { SCHEDULE_EVENTS } from '../data/websiteContent';

export default function EventsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';

  const [searchInput, setSearchInput] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  // Sync category when user clicks Navbar -> Events -> Sport / Cultural / Management Events
  useEffect(() => {
    const paramCat = searchParams.get('category');
    if (paramCat && ['sports', 'cultural', 'management'].includes(paramCat)) {
      setSelectedCategory(paramCat);
    } else if (!paramCat) {
      setSelectedCategory('all');
    }
  }, [searchParams]);

  const filteredEvents = useMemo(() => {
    return SCHEDULE_EVENTS.filter((ev) => {
      const matchesCat =
        selectedCategory === 'all' || ev.category === selectedCategory;
      const q = searchInput.trim().toLowerCase();
      const matchesSearch =
        !q ||
        ev.name.toLowerCase().includes(q) ||
        ev.categoryLabel.toLowerCase().includes(q);
      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchInput]);

  const handleCategoryChange = (val) => {
    setSelectedCategory(val);
    if (val === 'all') {
      searchParams.delete('category');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ category: val });
    }
  };

  const handleReset = () => {
    setSearchInput('');
    handleCategoryChange('all');
  };

  return (
    <div className="min-h-screen w-full bg-[#09090B] text-white pb-20">
      {/* =====================================================================
          1. HERO BANNER
      ===================================================================== */}
      <section className="relative h-[240px] sm:h-[340px] w-full flex items-center justify-center overflow-hidden">
        <img
          src="/assets/events/basketball.jpg"
          alt="FLAME Kurukshetra Events"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-horizon text-3xl sm:text-6xl font-black uppercase tracking-wider text-white">
            EVENTS
          </h1>
          <div className="mt-3 flex items-center justify-center gap-2 text-xs sm:text-base font-medium text-white/85">
            <Link to="/" className="hover:text-[var(--color-primary-flame)] transition">
              Home
            </Link>
            <span>/</span>
            <span className="text-[var(--color-primary-flame)] font-semibold">Events</span>
          </div>
        </div>
      </section>

      {/* =====================================================================
          2. FLOATING FILTER BAR
      ===================================================================== */}
      <section className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 -mt-10 sm:-mt-14">
        <div className="rounded-2xl bg-[#13151E] border border-white/15 p-4 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 items-center">
            {/* Search Input */}
            <div className="md:col-span-6 relative">
              <Search className="w-4 h-4 text-[var(--color-primary-flame)] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Find your next event..."
                className="w-full rounded-xl bg-white/[0.05] border border-white/15 pl-10 pr-4 py-3 text-sm text-white placeholder:text-white/45 focus:outline-none focus:border-[var(--color-primary-flame)] transition"
              />
            </div>

            {/* Event Category Dropdown (Sports Events, Cultural Events, Management Events) */}
            <div className="md:col-span-4 relative">
              <Layers className="w-4 h-4 text-[var(--color-primary-flame)] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <select
                value={selectedCategory}
                onChange={(e) => handleCategoryChange(e.target.value)}
                className="w-full rounded-xl bg-[#1B1E2B] border border-white/15 pl-10 pr-8 py-3 text-sm text-white focus:outline-none focus:border-[var(--color-primary-flame)] transition appearance-none cursor-pointer"
              >
                <option value="all">Event Category (All)</option>
                <option value="sports">Sport Events</option>
                <option value="cultural">Cultural Events</option>
                <option value="management">Management Events</option>
              </select>
            </div>

            {/* Reset & Search Now Buttons */}
            <div className="md:col-span-2 flex items-center gap-2">
              <button
                type="button"
                onClick={handleReset}
                title="Reset filters"
                className="h-11 w-11 shrink-0 rounded-xl border border-white/15 bg-white/[0.05] hover:bg-white/10 flex items-center justify-center text-white/75 hover:text-white transition"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => {}}
                className="flex-1 rounded-xl bg-[var(--color-primary-flame)] hover:bg-[#ea5401] py-3 px-4 text-xs font-extrabold uppercase tracking-wider text-white shadow-lg transition text-center"
              >
                Search
              </button>
            </div>
          </div>

          {/* Quick Category Subtab Pills below bar */}
          <div className="mt-4 pt-3.5 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              {[
                { id: 'all', label: 'All Events' },
                { id: 'sports', label: 'Sport Events' },
                { id: 'cultural', label: 'Cultural Events' },
                { id: 'management', label: 'Management Events' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => handleCategoryChange(tab.id)}
                  className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition ${
                    selectedCategory === tab.id
                      ? 'bg-[var(--color-primary-flame)] text-white shadow-[0_0_15px_rgba(254,90,0,0.45)]'
                      : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <span className="text-xs text-white/55 font-medium">
              Showing {filteredEvents.length} events • 22nd–26th January 2027
            </span>
          </div>
        </div>
      </section>

      {/* =====================================================================
          3. IMAGE OVERLAY CARDS GRID (Big Image + 60-70% Dark Shade + Title Only)
          (All date, prize pool, venue, and format details remain preserved in
          SCHEDULE_EVENTS in src/data/websiteContent.js for backend integration)
      ===================================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 sm:mt-16">
        {filteredEvents.length === 0 ? (
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-12 text-center">
            <h3 className="font-horizon text-xl font-bold text-white">
              No matching events found
            </h3>
            <p className="text-sm text-white/60 mt-2">
              Try clearing your search or selecting another event category.
            </p>
            <button
              type="button"
              onClick={handleReset}
              className="mt-4 rounded-xl bg-[var(--color-primary-flame)] px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider text-white"
            >
              Show All Events
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
            {filteredEvents.map((ev) => (
              <Link
                key={ev.id}
                to="/register"
                className="group relative h-[320px] sm:h-[400px] rounded-2xl overflow-hidden border border-white/15 bg-[#12141C] shadow-[0_14px_35px_rgba(0,0,0,0.45)] hover:border-[var(--color-primary-flame)] transition-all duration-300 hover:-translate-y-1 block"
              >
                {/* Full-Bleed Event Background Photo */}
                <img
                  src={ev.image}
                  alt={ev.name}
                  loading="lazy"
                  className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />

                {/* Shaded Dark Layer: 20% top to 70% bottom */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(0,0,0,0.22) 0%, rgba(0,0,0,0.52) 55%, rgba(0,0,0,0.75) 100%)',
                  }}
                />

                {/* Bottom Event Heading Only */}
                <div className="absolute inset-0 p-6 sm:p-7 flex flex-col justify-end">
                  <h3 className="font-horizon text-xl sm:text-2xl font-black uppercase tracking-wide text-white group-hover:text-[var(--color-primary-flame)] transition-colors leading-snug drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
                    {ev.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
