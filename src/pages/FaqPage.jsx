import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  HelpCircle,
  Search,
  ChevronDown,
  Mail,
  ArrowRight,
  ThumbsUp,
  MessageSquare,
  ShieldAlert,
} from 'lucide-react';
import { FAQ_DATA } from '../data/websiteContent';
import { cn } from '../utils/cn';

export default function FaqPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedId, setExpandedId] = useState('faq-1');

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'general', label: 'General & Overview' },
    { id: 'registrations', label: 'Registrations & Teams' },
    { id: 'hospitality', label: 'Stay & Hospitality' },
    { id: 'rulebooks', label: 'Rules & Officiating' },
    { id: 'security', label: 'Security & Campus' },
  ];

  const filteredFaqs = FAQ_DATA.filter((item) => {
    const matchesCat =
      selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const toggleAccordion = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="w-full min-h-screen bg-[#09090B] text-white flex flex-col">
      {/* =========================================================================
           1. HERO BANNER
           ========================================================================= */}
      <section className="relative w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-white/10 bg-blueprint-grid">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-mono tracking-widest uppercase text-white/80 mb-4">
            <span className="h-2 w-2 rounded-full bg-sky-400 animate-pulse" />
            <span>KNOWLEDGE BASE • RULES, STAY, & ELIGIBILITY</span>
          </div>

          <h1 className="font-horizon text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white">
            FREQUENTLY ASKED <span className="text-sky-400">QUESTIONS</span>
          </h1>

          <p className="max-w-xl text-sm sm:text-base text-white/70 mt-3 leading-relaxed">
            Everything you need to know about team registrations, student eligibility, campus accommodation, sports rules, and festival access.
          </p>

          {/* Search Bar */}
          <div className="relative w-full max-w-md mt-8">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g. Cleats, Lodging, ID card)..."
              className="w-full rounded-xl border border-white/15 bg-white/5 py-2.5 pl-10 pr-4 text-xs sm:text-sm text-white placeholder-white/40 focus:outline-none focus:border-sky-400 transition"
            />
          </div>
        </div>
      </section>

      {/* =========================================================================
           2. CATEGORY FILTER BAR
           ========================================================================= */}
      <section className="w-full border-b border-white/10 bg-[#0C0C10] py-3 px-4 sticky top-16 sm:top-20 z-30 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 overflow-x-auto no-scrollbar py-0.5">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={cn(
                'rounded-xl px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider transition shrink-0 font-bold',
                selectedCategory === cat.id
                  ? 'bg-sky-400 text-black shadow-[0_0_15px_rgba(56,189,248,0.5)]'
                  : 'bg-white/5 text-white/70 hover:bg-white/10 border border-white/10'
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* =========================================================================
           3. ACCORDION FAQ LIST
           ========================================================================= */}
      <main className="max-w-4xl mx-auto w-full px-4 sm:px-6 py-12 sm:py-16 flex flex-col gap-4">
        {filteredFaqs.map((faq) => {
          const isExpanded = expandedId === faq.id;

          return (
            <div
              key={faq.id}
              className={cn(
                'rounded-2xl border transition overflow-hidden',
                isExpanded
                  ? 'border-sky-400/50 bg-white/[0.04] shadow-lg'
                  : 'border-white/10 bg-white/[0.02] hover:border-white/20'
              )}
            >
              <button
                type="button"
                onClick={() => toggleAccordion(faq.id)}
                className="w-full text-left p-5 flex items-center justify-between gap-4 transition"
              >
                <div className="flex items-start gap-3 min-w-0">
                  <span className="rounded bg-white/10 px-2 py-0.5 text-[10px] font-mono text-sky-400 shrink-0 mt-0.5 font-bold">
                    {faq.categoryLabel}
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-white leading-snug">
                    {faq.question}
                  </h3>
                </div>

                <div
                  className={cn(
                    'h-7 w-7 rounded-lg bg-white/10 flex items-center justify-center shrink-0 transition-transform duration-200',
                    isExpanded ? 'rotate-180 bg-sky-400 text-black' : 'text-white'
                  )}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {isExpanded && (
                <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-white/75 leading-relaxed border-t border-white/5">
                  <p>{faq.answer}</p>

                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-white/40">
                    <span>WAS THIS HELPFUL?</span>
                    <button
                      type="button"
                      className="inline-flex items-center gap-1.5 rounded-md bg-white/5 hover:bg-white/10 px-2.5 py-1 text-white/70 hover:text-white transition"
                    >
                      <ThumbsUp className="w-3 h-3 text-sky-400" />
                      <span>Yes (Helpful)</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {filteredFaqs.length === 0 && (
          <div className="py-20 text-center text-white/40 text-sm font-mono">
            No FAQ entries found for &quot;{searchQuery}&quot;.
          </div>
        )}

        {/* Still have questions banner */}
        <div className="mt-12 p-8 rounded-3xl border border-white/15 bg-gradient-to-r from-white/[0.03] to-[var(--color-primary-flame)]/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-2xl bg-[var(--color-primary-flame)]/20 border border-[var(--color-primary-flame)]/40 flex items-center justify-center text-[var(--color-primary-flame)] shrink-0">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-horizon text-lg font-bold text-white">
                Still have a question?
              </h4>
              <p className="text-xs text-white/60 mt-1">
                Leave a direct note in the War Room for the Kurukshetra Council desk.
              </p>
            </div>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary-flame)] hover:bg-[#ea5401] px-5 py-3 text-xs font-mono font-bold uppercase tracking-wider text-white shadow-lg transition shrink-0"
          >
            <span>War Room Note</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </main>
    </div>
  );
}
