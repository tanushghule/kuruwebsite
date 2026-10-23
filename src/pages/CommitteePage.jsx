import React, { useState } from 'react';
import {
  Users,
  Search,
  Mail,
  CheckCircle2,
  X,
  ExternalLink,
  ShieldCheck,
  Award,
} from 'lucide-react';
import { COMMITTEE_HEADS } from '../data/websiteContent';
import { cn } from '../utils/cn';

export default function CommitteePage() {
  const [selectedWing, setSelectedWing] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeLeaderModal, setActiveLeaderModal] = useState(null);

  // Wings list
  const wingsList = [
    { id: 'all', label: `All Heads (${COMMITTEE_HEADS.length})` },
    { id: 'governance', label: 'Apex Leadership' },
    { id: 'sports', label: 'Sports' },
    { id: 'cultural', label: 'Culturals' },
    { id: 'pr', label: 'PR & Media' },
    { id: 'management', label: 'Management' },
    { id: 'finance', label: 'Finance' },
    { id: 'sponsorship', label: 'Sponsorship' },
    { id: 'logistics', label: 'Logistics' },
    { id: 'hospitality', label: 'Hospitality' },
    { id: 'registrations', label: 'Registrations' },
    { id: 'ceremonies', label: 'Ceremonies' },
    { id: 'it', label: 'IT & Digital' },
    { id: 'security', label: 'Security' },
  ];

  // Filter leaders
  const filteredLeaders = COMMITTEE_HEADS.filter((leader) => {
    const matchesWing = selectedWing === 'all' || leader.wing === selectedWing;
    const matchesSearch =
      leader.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      leader.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      leader.wingLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
      leader.instagram.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesWing && matchesSearch;
  });

  return (
    <div className="w-full min-h-screen bg-[#09090B] text-white flex flex-col">
      {/* =========================================================================
           1. HERO BANNER
           ========================================================================= */}
      <section className="relative w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-white/10 bg-blueprint-grid">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-mono tracking-widest uppercase text-white/80 mb-4">
            <span className="h-2 w-2 rounded-full bg-[var(--color-primary-flame)] animate-pulse" />
            <span>17 FESTIVAL HEADS • 13 DIVISIONS • FLAME UNIVERSITY</span>
          </div>

          <h1 className="font-horizon text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white">
            ORGANIZING <span className="text-[var(--color-primary-flame)]">COMMITTEE</span>
          </h1>

          <p className="max-w-xl text-sm sm:text-base text-white/70 mt-3 leading-relaxed">
            The Executive Council and Core Committee heads commanding operations, athlete hospitality, corporate alliances, and festival productions.
          </p>

          {/* Search Box */}
          <div className="relative w-full max-w-md mt-8">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search heads by name, division, handle..."
              className="w-full rounded-xl border border-white/15 bg-white/5 py-2.5 pl-10 pr-4 text-xs sm:text-sm text-white placeholder-white/40 focus:outline-none focus:border-[var(--color-primary-flame)] transition"
            />
          </div>
        </div>
      </section>

      {/* =========================================================================
           2. WINGS FILTER BAR
           ========================================================================= */}
      <section className="w-full border-b border-white/10 bg-[#0C0C10] py-3 px-4 sticky top-16 sm:top-20 z-30 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5">
          {wingsList.map((wing) => (
            <button
              key={wing.id}
              type="button"
              onClick={() => setSelectedWing(wing.id)}
              className={cn(
                'rounded-xl px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider transition shrink-0 font-bold',
                selectedWing === wing.id
                  ? 'bg-[var(--color-primary-flame)] text-white shadow-[0_0_15px_rgba(254,90,0,0.5)]'
                  : 'bg-white/5 text-white/70 hover:bg-white/10 border border-white/10'
              )}
            >
              {wing.label}
            </button>
          ))}
        </div>
      </section>

      {/* =========================================================================
           3. LEADERS GRID
           ========================================================================= */}
      <main className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredLeaders.map((leader) => (
            <div
              key={leader.id}
              onClick={() => setActiveLeaderModal(leader)}
              className="group cursor-pointer rounded-2xl border border-white/10 bg-white/[0.03] hover:border-[var(--color-primary-flame)]/50 overflow-hidden transition flex flex-col justify-between"
            >
              {/* Leader Photo */}
              <div className="relative aspect-[4/4.5] w-full bg-black/40 overflow-hidden">
                <img
                  src={leader.photo}
                  alt={leader.name}
                  className="w-full h-full object-cover object-top transition duration-300 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = '/assets/hero-player.png';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                <div className="absolute top-3 left-3">
                  <span className="rounded-full bg-black/70 border border-white/20 backdrop-blur-md px-2.5 py-0.5 text-[9px] font-mono font-bold text-white uppercase tracking-wider">
                    {leader.idBadge}
                  </span>
                </div>
              </div>

              {/* Leader Info */}
              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-horizon text-lg font-bold text-white group-hover:text-[var(--color-primary-flame)] transition">
                    {leader.name}
                  </h3>
                  <div className="text-xs font-mono font-bold text-[var(--color-primary-flame)] mt-0.5">
                    {leader.role}
                  </div>
                  <p className="text-xs text-white/60 mt-2 line-clamp-2 leading-relaxed">
                    {leader.oneLiner}
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-white/50">
                  <span className="rounded bg-white/5 px-2 py-0.5">{leader.wingLabel}</span>
                  <span className="text-[var(--color-primary-flame)] font-bold group-hover:underline">
                    View Bio →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredLeaders.length === 0 && (
          <div className="py-20 text-center text-white/40 text-sm font-mono">
            No committee leaders matching &quot;{searchQuery}&quot; found.
          </div>
        )}
      </main>

      {/* =========================================================================
           4. LEADER DOSSIER MODAL
           ========================================================================= */}
      {activeLeaderModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveLeaderModal(null)}
        >
          <div
            className="w-full max-w-2xl rounded-3xl border border-white/15 bg-[#121217] p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-[var(--color-primary-flame)]/20 text-[var(--color-primary-flame)] text-xs font-mono font-bold px-3 py-1 uppercase">
                  {activeLeaderModal.wingLabel}
                </span>
                <span className="text-xs font-mono text-white/50">
                  {activeLeaderModal.idBadge}
                </span>
              </div>

              <button
                type="button"
                onClick={() => setActiveLeaderModal(null)}
                className="h-8 w-8 rounded-lg bg-white/10 hover:bg-white/20 text-white/70 hover:text-white flex items-center justify-center transition"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="mt-6 flex flex-col sm:flex-row gap-6">
              {/* Photo */}
              <div className="relative w-full sm:w-48 aspect-[3/4] shrink-0 rounded-2xl overflow-hidden border border-white/10 bg-black">
                <img
                  src={activeLeaderModal.photo}
                  alt={activeLeaderModal.name}
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    e.currentTarget.src = '/assets/hero-player.png';
                  }}
                />
              </div>

              {/* Bio & Details */}
              <div className="flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-horizon text-2xl font-black text-white">
                    {activeLeaderModal.name}
                  </h3>
                  <div className="text-sm font-mono font-bold text-[var(--color-primary-flame)] mt-1">
                    {activeLeaderModal.role}
                  </div>

                  <p className="text-xs sm:text-sm text-white/80 mt-4 leading-relaxed">
                    {activeLeaderModal.fullBio}
                  </p>
                </div>

                {/* Contact Pills */}
                <div className="flex flex-wrap items-center gap-3 mt-6 pt-4 border-t border-white/10">
                  <a
                    href={`mailto:${activeLeaderModal.email}`}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/5 hover:bg-white/10 px-3 py-1.5 text-xs font-mono text-white/80 transition"
                  >
                    <Mail className="w-3.5 h-3.5 text-[var(--color-primary-flame)]" />
                    <span>Email</span>
                  </a>

                  {activeLeaderModal.instagram && (
                    <a
                      href={`https://instagram.com/${activeLeaderModal.instagram}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/5 hover:bg-white/10 px-3 py-1.5 text-xs font-mono text-white/80 transition"
                    >
                      <svg className="w-3.5 h-3.5 text-pink-400 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                      <span>@{activeLeaderModal.instagram}</span>
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Key Deliverables */}
            <div className="mt-8 p-5 rounded-2xl bg-white/[0.03] border border-white/10">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--color-accent-yellow)] font-bold mb-3">
                KEY MANDATES & DELIVERABLES
              </h4>
              <ul className="flex flex-col gap-2 text-xs sm:text-sm text-white/80">
                {activeLeaderModal.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
