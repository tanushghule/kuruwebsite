import React, { useState, useEffect, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import {
  Search,
  MapPin,
  Layers,
  Calendar,
  RotateCcw,
  ArrowUpRight,
  Clock,
  X,
  UserPlus,
} from 'lucide-react';
import { SCHEDULE_EVENTS } from '../data/websiteContent';

export default function EventsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';

  const [searchInput, setSearchInput] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [activeEventModal, setActiveEventModal] = useState(null);

  // Sync category when user clicks Navbar -> Events -> Sport / Cultural / Management Events
  useEffect(() => {
    const paramCat = searchParams.get('category');
    if (paramCat && ['sports', 'cultural', 'management'].includes(paramCat)) {
      setSelectedCategory(paramCat);
    } else if (!paramCat) {
      setSelectedCategory('all');
    }
  }, [searchParams]);

  // Unique venues for Location dropdown
  const locations = useMemo(() => {
    const set = new Set(SCHEDULE_EVENTS.map((e) => e.venue));
    return Array.from(set);
  }, []);

  const filteredEvents = useMemo(() => {
    return SCHEDULE_EVENTS.filter((ev) => {
      const matchesCat =
        selectedCategory === 'all' || ev.category === selectedCategory;
      const matchesLoc =
        selectedLocation === 'all' || ev.venue === selectedLocation;
      const q = searchInput.trim().toLowerCase();
      const matchesSearch =
        !q ||
        ev.name.toLowerCase().includes(q) ||
        ev.desc.toLowerCase().includes(q) ||
        ev.venue.toLowerCase().includes(q) ||
        ev.categoryLabel.toLowerCase().includes(q);
      return matchesCat && matchesLoc && matchesSearch;
    });
  }, [selectedCategory, selectedLocation, searchInput]);

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
    setSelectedLocation('all');
    handleCategoryChange('all');
  };

  return (
    <div className="min-h-screen w-full bg-[#09090B] text-white pb-20">
      {/* =====================================================================
          1. HERO BANNER (Modeled after events1.png)
      ===================================================================== */}
      <section className="relative h-[300px] sm:h-[360px] w-full flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1800&q=80"
          alt="FLAME Kurukshetra Events"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-horizon text-4xl sm:text-6xl font-black uppercase tracking-wider text-white">
            EVENTS
          </h1>
          <div className="mt-3 flex items-center justify-center gap-2 text-sm sm:text-base font-medium text-white/85">
            <Link to="/" className="hover:text-[var(--color-primary-flame)] transition">
              Home
            </Link>
            <span>/</span>
            <span className="text-[var(--color-primary-flame)] font-semibold">Events</span>
          </div>
        </div>
      </section>

      {/* =====================================================================
          2. FLOATING FILTER BAR (Modeled after events1.png)
      ===================================================================== */}
      <section className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 -mt-12 sm:-mt-14">
        <div className="rounded-2xl bg-[#13151E] border border-white/15 p-4 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 items-center">
            {/* Search Input */}
            <div className="md:col-span-4 relative">
              <Search className="w-4 h-4 text-[var(--color-primary-flame)] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Find your next event"
                className="w-full rounded-xl bg-white/[0.05] border border-white/15 pl-10 pr-4 py-3 text-sm text-white placeholder:text-white/45 focus:outline-none focus:border-[var(--color-primary-flame)] transition"
              />
            </div>

            {/* Event Location Dropdown */}
            <div className="md:col-span-3 relative">
              <MapPin className="w-4 h-4 text-[var(--color-primary-flame)] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full rounded-xl bg-[#1B1E2B] border border-white/15 pl-10 pr-8 py-3 text-sm text-white focus:outline-none focus:border-[var(--color-primary-flame)] transition appearance-none cursor-pointer"
              >
                <option value="all">Event Location (All)</option>
                {locations.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
            </div>

            {/* Event Category Dropdown (Sports Events, Cultural Events, Management Events) */}
            <div className="md:col-span-3 relative">
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
                Search Now
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
                  className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition ${
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
          3. 3-COLUMN IMAGE OVERLAY CARDS GRID (Modeled after events1.png & events2.png)
      ===================================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredEvents.map((ev) => (
              <div
                key={ev.id}
                onClick={() => setActiveEventModal(ev)}
                className="group relative h-[390px] sm:h-[420px] rounded-2xl overflow-hidden border border-white/15 bg-[#12141C] cursor-pointer shadow-[0_14px_35px_rgba(0,0,0,0.45)] hover:border-[var(--color-primary-flame)] transition-all duration-300 hover:-translate-y-1"
              >
                {/* Full-Bleed Event Background Photo */}
                <img
                  src={ev.image}
                  alt={ev.name}
                  loading="lazy"
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />

                {/* Gradient Overlay for Crisp Readability */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(9,9,11,0.15) 0%, rgba(9,9,11,0.45) 48%, rgba(9,9,11,0.94) 100%)',
                  }}
                />

                {/* Top-Left Category Badge (Like events1.png & events2.png) */}
                <div className="absolute top-4 left-4">
                  <span className="inline-block rounded-md bg-[var(--color-primary-flame)] px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-white shadow-md">
                    {ev.categoryLabel}
                  </span>
                </div>

                {/* Bottom Content Overlay (Date, Title, Description, Register Link) */}
                <div className="absolute bottom-0 inset-x-0 p-6 flex flex-col justify-end">
                  <div className="flex items-center gap-2 text-xs font-semibold text-white/90 mb-2">
                    <Calendar className="w-3.5 h-3.5 text-[var(--color-primary-flame)] shrink-0" />
                    <span>{ev.datesText}</span>
                  </div>

                  <h3 className="font-horizon text-xl sm:text-2xl font-extrabold text-white group-hover:text-[var(--color-primary-flame)] transition-colors leading-snug">
                    {ev.name}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-white/80 font-normal line-clamp-2 leading-relaxed">
                    {ev.desc}
                  </p>

                  <div className="mt-4 pt-3 border-t border-white/15 flex items-center justify-between text-xs">
                    <span className="text-white/70 truncate flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[var(--color-primary-flame)] shrink-0" />
                      <span className="truncate">{ev.venue}</span>
                    </span>
                    <Link
                      to="/register"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 font-extrabold uppercase tracking-wider text-[var(--color-primary-flame)] hover:underline shrink-0 ml-2"
                    >
                      <span>Register</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* =====================================================================
          4. EVENT DETAIL MODAL
      ===================================================================== */}
      {activeEventModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
          onClick={() => setActiveEventModal(null)}
        >
          <div
            className="max-w-lg w-full rounded-2xl bg-[#12141C] border border-white/15 text-white overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-56 w-full">
              <img
                src={activeEventModal.image}
                alt={activeEventModal.name}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#12141C] via-black/30 to-transparent" />
              <span className="absolute top-4 left-4 rounded bg-[var(--color-primary-flame)] px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-white">
                {activeEventModal.categoryLabel}
              </span>
              <button
                type="button"
                onClick={() => setActiveEventModal(null)}
                className="absolute top-4 right-4 h-8 w-8 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-black"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 sm:p-7">
              <h3 className="font-horizon text-2xl font-black uppercase text-white">
                {activeEventModal.name}
              </h3>
              <p className="mt-2 text-sm text-white/75 leading-relaxed">
                {activeEventModal.desc}
              </p>

              <div className="mt-5 grid grid-cols-2 gap-3 text-xs bg-white/[0.04] rounded-xl p-4 border border-white/10">
                <div>
                  <span className="text-white/50 uppercase block">Date</span>
                  <span className="font-bold text-white mt-0.5 block">
                    {activeEventModal.datesText}
                  </span>
                </div>
                <div>
                  <span className="text-white/50 uppercase block">Timings</span>
                  <span className="font-bold text-white mt-0.5 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[var(--color-primary-flame)]" />
                    {activeEventModal.timing}
                  </span>
                </div>
                <div>
                  <span className="text-white/50 uppercase block">Venue</span>
                  <span className="font-bold text-white mt-0.5 block">
                    {activeEventModal.venue}
                  </span>
                </div>
                <div>
                  <span className="text-white/50 uppercase block">Prize Pool</span>
                  <span className="font-bold text-[var(--color-primary-flame)] mt-0.5 block">
                    {activeEventModal.prize}
                  </span>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setActiveEventModal(null)}
                  className="rounded-xl border border-white/20 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white/80 hover:text-white"
                >
                  Close
                </button>
                <Link
                  to="/register"
                  className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary-flame)] hover:bg-[#ea5401] px-6 py-2.5 text-xs font-extrabold uppercase tracking-wider text-white shadow-lg"
                >
                  <UserPlus className="w-4 h-4" />
                  <span>Register Now</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
