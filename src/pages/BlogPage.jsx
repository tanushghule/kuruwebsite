import React, { useState } from 'react';
import {
  BookOpen,
  Search,
  Clock,
  Calendar,
  User,
  ArrowRight,
  X,
  Share2,
  Bookmark,
  ChevronRight,
} from 'lucide-react';
import { BLOG_POSTS } from '../data/websiteContent';
import { cn } from '../utils/cn';

export default function BlogPage() {
  const [selectedTag, setSelectedTag] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeStoryModal, setActiveStoryModal] = useState(null);

  const tags = [
    { id: 'all', label: 'All Stories' },
    { id: 'Tools', label: 'Tech & Tools' },
    { id: 'Guides', label: 'Tactical Guides' },
    { id: 'Insights', label: 'Leadership & Insights' },
  ];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesTag = selectedTag === 'all' || post.category === selectedTag;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTag && matchesSearch;
  });

  return (
    <div className="w-full min-h-screen bg-[#09090B] text-white flex flex-col">
      {/* =========================================================================
           1. HERO BANNER
           ========================================================================= */}
      <section className="relative w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-white/10 bg-blueprint-grid">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-mono tracking-widest uppercase text-white/80 mb-4">
            <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
            <span>FESTIVAL CHRONICLES • INSIGHTS & TACTICAL ANALYSIS</span>
          </div>

          <h1 className="font-horizon text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white">
            STORIES & <span className="text-amber-400">CHRONICLES</span>
          </h1>

          <p className="max-w-xl text-sm sm:text-base text-white/70 mt-3 leading-relaxed">
            Behind-the-scenes engineering, tactical playbooks, athlete spotlights, and executive reflections from Kurukshetra 2027.
          </p>

          {/* Search Box */}
          <div className="relative w-full max-w-md mt-8">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles, guides, tactical playbooks..."
              className="w-full rounded-xl border border-white/15 bg-white/5 py-2.5 pl-10 pr-4 text-xs sm:text-sm text-white placeholder-white/40 focus:outline-none focus:border-amber-400 transition"
            />
          </div>
        </div>
      </section>

      {/* =========================================================================
           2. CATEGORY PILLS BAR
           ========================================================================= */}
      <section className="w-full border-b border-white/10 bg-[#0C0C10] py-3 px-4 sticky top-16 sm:top-20 z-30 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 overflow-x-auto no-scrollbar py-0.5">
          {tags.map((tag) => (
            <button
              key={tag.id}
              type="button"
              onClick={() => setSelectedTag(tag.id)}
              className={cn(
                'rounded-xl px-4 py-1.5 text-xs font-mono uppercase tracking-wider transition shrink-0 font-bold',
                selectedTag === tag.id
                  ? 'bg-amber-400 text-black shadow-[0_0_15px_rgba(251,191,36,0.5)]'
                  : 'bg-white/5 text-white/70 hover:bg-white/10 border border-white/10'
              )}
            >
              {tag.label}
            </button>
          ))}
        </div>
      </section>

      {/* =========================================================================
           3. MAIN ARTICLES FEED
           ========================================================================= */}
      <main className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 flex flex-col gap-10">
        {/* Featured Story (First story) */}
        {filteredPosts.length > 0 && (
          <div
            onClick={() => setActiveStoryModal(filteredPosts[0])}
            className="group cursor-pointer rounded-3xl border border-white/10 bg-white/[0.03] hover:border-amber-400/50 p-6 sm:p-10 transition flex flex-col lg:flex-row gap-8 items-center"
          >
            <div className="relative w-full lg:w-1/2 aspect-[16/10] rounded-2xl overflow-hidden bg-black/50 shrink-0">
              <img
                src={filteredPosts[0].image}
                alt={filteredPosts[0].title}
                className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src = '/assets/Homepage2.png';
                }}
              />
              <div className="absolute top-3 left-3">
                <span className="rounded-full bg-black/80 border border-white/20 backdrop-blur-md px-3 py-1 text-xs font-mono font-bold text-amber-400">
                  FEATURED DISPATCH
                </span>
              </div>
            </div>

            <div className="flex flex-col justify-between flex-1">
              <div>
                <div className="flex items-center gap-3 text-xs font-mono text-white/50 mb-3">
                  <span className="text-amber-400 font-bold">{filteredPosts[0].category}</span>
                  <span>•</span>
                  <span>{filteredPosts[0].readTime}</span>
                  <span>•</span>
                  <span>{filteredPosts[0].date}</span>
                </div>

                <h2 className="font-horizon text-2xl sm:text-3xl font-black text-white group-hover:text-amber-400 transition leading-snug">
                  {filteredPosts[0].title}
                </h2>

                <p className="text-sm text-white/70 mt-4 leading-relaxed line-clamp-3">
                  {filteredPosts[0].excerpt}
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={filteredPosts[0].avatar}
                    alt={filteredPosts[0].author}
                    className="w-10 h-10 rounded-full object-cover border border-white/20"
                    onError={(e) => {
                      e.currentTarget.src = '/assets/hero-player.png';
                    }}
                  />
                  <div>
                    <div className="text-xs font-bold text-white">{filteredPosts[0].author}</div>
                    <div className="text-[10px] font-mono text-white/50">{filteredPosts[0].role}</div>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-amber-400 group-hover:underline">
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.slice(1).map((post) => (
            <div
              key={post.id}
              onClick={() => setActiveStoryModal(post)}
              className="group cursor-pointer rounded-2xl border border-white/10 bg-white/[0.03] hover:border-amber-400/50 overflow-hidden transition flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] w-full bg-black/60 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = '/assets/Homepage3.png';
                  }}
                />
                <div className="absolute top-3 left-3">
                  <span className="rounded-full bg-black/70 border border-white/20 backdrop-blur-md px-2.5 py-0.5 text-[10px] font-mono font-bold text-white">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center gap-2 text-[11px] font-mono text-white/50 mb-2">
                    <span>{post.readTime}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>

                  <h3 className="font-horizon text-lg font-bold text-white group-hover:text-amber-400 transition line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-xs text-white/65 mt-2 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="font-mono text-white/60 truncate">{post.author}</span>
                  <span className="font-mono text-amber-400 font-bold group-hover:underline flex items-center gap-1 shrink-0">
                    <span>Read</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="py-20 text-center text-white/40 text-sm font-mono">
            No chronicles matching &quot;{searchQuery}&quot; found.
          </div>
        )}
      </main>

      {/* =========================================================================
           4. ARTICLE READER MODAL
           ========================================================================= */}
      {activeStoryModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200"
          onClick={() => setActiveStoryModal(null)}
        >
          <div
            className="w-full max-w-3xl rounded-3xl border border-white/15 bg-[#121217] p-6 sm:p-10 shadow-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2 text-xs font-mono">
                <span className="rounded-full bg-amber-400/20 text-amber-400 font-bold px-3 py-1 uppercase">
                  {activeStoryModal.category}
                </span>
                <span className="text-white/50">•</span>
                <span className="text-white/60">{activeStoryModal.readTime}</span>
              </div>

              <button
                type="button"
                onClick={() => setActiveStoryModal(null)}
                className="h-8 w-8 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Author Byline */}
            <div className="flex items-center gap-3 mt-6">
              <img
                src={activeStoryModal.avatar}
                alt={activeStoryModal.author}
                className="w-12 h-12 rounded-full object-cover border border-white/20"
                onError={(e) => {
                  e.currentTarget.src = '/assets/hero-player.png';
                }}
              />
              <div>
                <div className="text-sm font-bold text-white">{activeStoryModal.author}</div>
                <div className="text-xs font-mono text-white/50">{activeStoryModal.role} • {activeStoryModal.date}</div>
              </div>
            </div>

            {/* Article Headline */}
            <h1 className="font-horizon text-2xl sm:text-3xl font-black text-white mt-6 leading-snug">
              {activeStoryModal.title}
            </h1>

            {/* Article Excerpt Callout */}
            <div className="mt-4 p-4 rounded-xl border-l-2 border-amber-400 bg-white/[0.03] text-xs sm:text-sm text-white/80 italic leading-relaxed">
              {activeStoryModal.excerpt}
            </div>

            {/* Article Body */}
            <div className="mt-6 text-xs sm:text-sm text-white/80 leading-relaxed space-y-4 whitespace-pre-line font-sans">
              {activeStoryModal.content}
            </div>

            {/* Modal Footer */}
            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-mono text-white/50">
                OFFICIAL KURUKSHETRA NEWSROOM
              </span>

              <button
                type="button"
                onClick={() => setActiveStoryModal(null)}
                className="rounded-xl bg-white/10 hover:bg-white/20 px-5 py-2 text-xs font-mono font-bold text-white transition"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
