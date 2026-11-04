import React, { useState } from 'react';
import {
  Camera,
  Search,
  Grid,
  List as ListIcon,
  Download,
  X,
  Play,
  Film,
  Calendar,
  ExternalLink,
  ChevronRight,
  Eye,
} from 'lucide-react';
import { ALBUM_MEDIA } from '../data/websiteContent';
import { cn } from '../utils/cn';

export default function AlbumPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDay, setSelectedDay] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'list'
  const [activeMediaModal, setActiveMediaModal] = useState(null);

  const categories = [
    { id: 'all', label: 'All Media' },
    { id: 'Football', label: 'Football' },
    { id: 'Basketball', label: 'Basketball' },
    { id: 'Tennis', label: 'Tennis' },
    { id: 'Badminton', label: 'Badminton' },
    { id: 'Athletics', label: 'Athletics' },
    { id: 'Culturals', label: 'Culturals & Stage' },
  ];

  // Filter media
  const filteredMedia = ALBUM_MEDIA.filter((item) => {
    const matchesCat =
      selectedCategory === 'all' || item.category === selectedCategory;
    const matchesDay =
      selectedDay === 'all' || item.day === Number(selectedDay);
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.photographer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesDay && matchesSearch;
  });

  return (
    <div className="w-full min-h-screen bg-[#09090B] text-white flex flex-col">
      {/* =========================================================================
           1. HERO BANNER
           ========================================================================= */}
      <section className="relative w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-white/10 bg-blueprint-grid">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-mono tracking-widest uppercase text-white/80 mb-4">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>OFFICIAL ATHLETIC ARCHIVE • 4-DAY PHOTO VAULT</span>
          </div>

          <h1 className="font-horizon text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white">
            THE PHOENIX <span className="text-cyan-400">VAULT</span>
          </h1>

          <p className="max-w-xl text-sm sm:text-base text-white/70 mt-3 leading-relaxed">
            Every leap, smash, goal, and triumph captured across 4 days of athletic fury. High-resolution match photos and tournament chronicles.
          </p>

          {/* Drive-Style Search & View Toggle */}
          <div className="w-full max-w-2xl mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 p-2 rounded-2xl border border-white/15 bg-white/[0.04] backdrop-blur-md">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search vault (e.g. Football, Dunk, Amphitheater, Trophy)..."
                className="w-full rounded-xl bg-transparent py-2 pl-10 pr-4 text-xs sm:text-sm text-white placeholder-white/40 focus:outline-none"
              />
            </div>

            <div className="flex items-center gap-1 shrink-0 border-t sm:border-t-0 sm:border-l border-white/10 pt-2 sm:pt-0 sm:pl-2 w-full sm:w-auto justify-end">
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                className={cn(
                  'h-8 w-8 rounded-lg flex items-center justify-center transition',
                  viewMode === 'grid' ? 'bg-white/20 text-white' : 'text-white/40 hover:text-white'
                )}
                title="Grid View"
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setViewMode('list')}
                className={cn(
                  'h-8 w-8 rounded-lg flex items-center justify-center transition',
                  viewMode === 'list' ? 'bg-white/20 text-white' : 'text-white/40 hover:text-white'
                )}
                title="List View"
              >
                <ListIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
           2. FILTER CHIPS & DAY TABS BAR
           ========================================================================= */}
      <section className="w-full border-b border-white/10 bg-[#0C0C10] py-3 px-4 sticky top-16 sm:top-20 z-30 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Category Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar w-full sm:w-auto py-0.5">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={cn(
                  'rounded-xl px-3 py-1.5 text-xs font-mono uppercase tracking-wider transition shrink-0 font-bold',
                  selectedCategory === cat.id
                    ? 'bg-cyan-500 text-black shadow-[0_0_15px_rgba(6,182,212,0.5)]'
                    : 'bg-white/5 text-white/70 hover:bg-white/10 border border-white/10'
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Day Selector */}
          <div className="flex items-center gap-1 shrink-0">
            {['all', 1, 2, 3, 4].map((d) => (
              <button
                key={d}
                type="button"
                onClick={() => setSelectedDay(d)}
                className={cn(
                  'rounded-lg px-2.5 py-1 text-[11px] font-mono uppercase transition font-bold',
                  selectedDay === d
                    ? 'bg-white/20 text-white border border-white/30'
                    : 'text-white/50 hover:text-white'
                )}
              >
                {d === 'all' ? 'All Days' : `Day ${d}`}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
           3. MAIN MEDIA VAULT
           ========================================================================= */}
      <main className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10 sm:py-16 flex flex-col gap-12">
        {/* Highlight Reel Video Banner */}
        <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 overflow-hidden flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-1 flex flex-col gap-3">
            <span className="rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-mono font-bold px-3 py-1 w-fit uppercase tracking-wider">
              OFFICIAL HIGHLIGHT REEL
            </span>
            <h2 className="font-horizon text-2xl sm:text-3xl font-black text-white">
              Kurukshetra Arena Experience
            </h2>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed max-w-lg">
              Relive the electrifying atmosphere, crowd roar, night concerts, and floodlit championship games from FLAME University.
            </p>
          </div>

          <div className="w-full lg:w-96 rounded-2xl overflow-hidden border border-white/15 bg-black aspect-video flex items-center justify-center relative group">
            <video
              src="/bgvid.mp4"
              controls
              playsInline
              preload="metadata"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Media Grid / List View */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMedia.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveMediaModal(item)}
                className="group cursor-pointer rounded-2xl border border-white/10 bg-white/[0.03] hover:border-cyan-400/50 overflow-hidden transition flex flex-col justify-between"
              >
                {/* Thumbnail */}
                <div className="relative aspect-[16/10] w-full bg-black/60 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />

                  <div className="absolute top-3 left-3">
                    <span className="rounded-full bg-black/70 border border-white/20 backdrop-blur-md px-2.5 py-0.5 text-[10px] font-mono font-bold text-cyan-400">
                      DAY 0{item.day} • {item.category}
                    </span>
                  </div>

                  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition">
                    <span className="rounded-lg bg-black/80 text-white p-2 flex items-center justify-center">
                      <Eye className="w-4 h-4" />
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-4 flex flex-col justify-between flex-1">
                  <h3 className="text-sm font-bold text-white group-hover:text-cyan-400 transition line-clamp-1">
                    {item.title}
                  </h3>

                  <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-white/50">
                    <span>{item.date}</span>
                    <span>{item.size}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* List View */
          <div className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] divide-y divide-white/10 overflow-hidden">
            {filteredMedia.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveMediaModal(item)}
                className="p-4 hover:bg-white/[0.06] transition cursor-pointer flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-12 object-cover rounded-lg shrink-0"
                  />
                  <div className="min-w-0">
                    <h3 className="text-sm font-bold text-white truncate hover:text-cyan-400 transition">
                      {item.title}
                    </h3>
                    <div className="text-[11px] font-mono text-white/50 flex items-center gap-3 mt-1">
                      <span>DAY {item.day}</span>
                      <span>•</span>
                      <span>{item.category}</span>
                      <span className="hidden sm:inline">•</span>
                      <span className="hidden sm:inline">{item.photographer}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 shrink-0 text-xs font-mono text-white/50">
                  <span>{item.size}</span>
                  <button
                    type="button"
                    className="h-8 w-8 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {filteredMedia.length === 0 && (
          <div className="py-20 text-center text-white/40 text-sm font-mono">
            No media matching &quot;{searchQuery}&quot; found in the vault.
          </div>
        )}
      </main>

      {/* =========================================================================
           4. MEDIA LIGHTBOX MODAL
           ========================================================================= */}
      {activeMediaModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200"
          onClick={() => setActiveMediaModal(null)}
        >
          <div
            className="w-full max-w-4xl rounded-3xl border border-white/15 bg-[#121217] p-6 shadow-2xl flex flex-col gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-mono font-bold px-3 py-0.5">
                  DAY 0{activeMediaModal.day} • {activeMediaModal.category}
                </span>
                <span className="text-xs font-mono text-white/50">
                  {activeMediaModal.date}
                </span>
              </div>

              <button
                type="button"
                onClick={() => setActiveMediaModal(null)}
                className="h-8 w-8 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black flex items-center justify-center">
              <img
                src={activeMediaModal.image}
                alt={activeMediaModal.title}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
              <div>
                <h3 className="font-horizon text-xl font-bold text-white">
                  {activeMediaModal.title}
                </h3>
                <p className="text-xs font-mono text-white/50 mt-1">
                  CREDIT: {activeMediaModal.photographer} • FILE SIZE: {activeMediaModal.size}
                </p>
              </div>

              <a
                href={activeMediaModal.image}
                download
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 px-4 py-2 text-xs font-mono font-bold text-black transition"
              >
                <Download className="w-4 h-4" />
                <span>Save Full Res</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
