import React from 'react';
import {
  FACULTY_ADVISORS,
  EC_MEMBERS,
  CC_HEADS,
} from '../data/websiteContent';

/**
 * Page 11 Fix:
 * - Removed search bar and department categorization bar
 * - Directly displays photos below the header:
 *   Row 1: Three Advisors (Farrokh Sir, Razmi Ma'am & Tamosi Ma'am)
 *   Row 2: Executive Council (EC)
 *   Row 3 onwards: All Core Committee (CC) Heads
 */
function MemberCard({ person, accentColor = '#FE5A00' }) {
  return (
    <div className="group rounded-2xl border border-white/12 bg-[#12141C] hover:border-[var(--color-primary-flame)] overflow-hidden transition-all duration-300 flex flex-col justify-between shadow-xl hover:-translate-y-1">
      {/* Portrait Image */}
      <div className="relative aspect-[4/5] w-full bg-black overflow-hidden">
        <img
          src={person.photo}
          alt={person.name}
          loading="lazy"
          className="w-full h-full object-cover object-center transition duration-500 group-hover:scale-105"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(9,9,11,0.05) 45%, rgba(18,20,28,0.96) 100%)',
          }}
        />

        <div className="absolute top-3.5 left-3.5">
          <span
            className="rounded-md px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white shadow"
            style={{ backgroundColor: accentColor }}
          >
            {person.idBadge}
          </span>
        </div>

        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="font-horizon text-xl font-black uppercase text-white group-hover:text-[var(--color-primary-flame)] transition-colors leading-tight">
            {person.name}
          </h3>
          <p className="text-xs font-bold uppercase tracking-wider text-[var(--color-primary-flame)] mt-1">
            {person.role}
          </p>
          <p className="text-xs text-white/65 mt-0.5">{person.wingLabel}</p>
        </div>
      </div>

      {/* Concise Description */}
      <div className="p-4 sm:p-5 bg-[#12141C] border-t border-white/10">
        <p className="text-xs sm:text-sm text-white/75 leading-relaxed font-normal">
          {person.oneLiner}
        </p>
      </div>
    </div>
  );
}

export default function CommitteePage() {
  return (
    <div className="w-full min-h-screen bg-[#09090B] text-white flex flex-col">
      {/* =========================================================================
           1. HERO BANNER (Search bar & department categorization bar removed per Page 11)
           ========================================================================= */}
      <section className="relative w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-white/10 bg-blueprint-grid">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs tracking-widest uppercase text-white/80 mb-4 font-bold">
            <span className="h-2 w-2 rounded-full bg-[var(--color-primary-flame)] animate-pulse" />
            <span>MEET THE OC • FLAME UNIVERSITY KURUKSHETRA 2027</span>
          </div>

          <h1 className="font-horizon text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white">
            ORGANIZING <span className="text-[var(--color-primary-flame)]">COMMITTEE</span>
          </h1>

          <p className="max-w-xl text-sm sm:text-base text-white/70 mt-3 leading-relaxed">
            The Faculty Advisors, Executive Council, and Core Committee Heads leading FLAME Kurukshetra 2027.
          </p>
        </div>
      </section>

      {/* =========================================================================
           2. DIRECT PHOTO ROWS:
              - Row 1: Three Advisors (Farrokh Sir, Razmi Ma'am & Tamosi Ma'am)
              - Row 2: Executive Council (EC)
              - Row 3 Onwards: All Core Committee (CC) Heads
           ========================================================================= */}
      <main className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
        {/* ROW 1: THREE FACULTY ADVISORS */}
        <section>
          <div className="mb-6 flex items-center gap-3">
            <span className="rdr-trait" />
            <h2 className="font-horizon text-xl sm:text-2xl font-black uppercase tracking-wider text-white">
              FACULTY <span className="text-[var(--color-primary-flame)]">ADVISORS</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {FACULTY_ADVISORS.map((advisor) => (
              <MemberCard key={advisor.id} person={advisor} accentColor="#FAAD36" />
            ))}
          </div>
        </section>

        {/* ROW 2: EXECUTIVE COUNCIL (EC) */}
        <section>
          <div className="mb-6 flex items-center gap-3">
            <span className="rdr-trait" />
            <h2 className="font-horizon text-xl sm:text-2xl font-black uppercase tracking-wider text-white">
              EXECUTIVE <span className="text-[var(--color-primary-flame)]">COUNCIL (EC)</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {EC_MEMBERS.map((ec) => (
              <MemberCard key={ec.id} person={ec} accentColor="#FE5A00" />
            ))}
          </div>
        </section>

        {/* ROW 3 ONWARDS: ALL CORE COMMITTEE (CC) HEADS */}
        <section>
          <div className="mb-6 flex items-center gap-3">
            <span className="rdr-trait" />
            <h2 className="font-horizon text-xl sm:text-2xl font-black uppercase tracking-wider text-white">
              CORE COMMITTEE <span className="text-[var(--color-primary-flame)]">(CC) HEADS</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CC_HEADS.map((cc) => (
              <MemberCard key={cc.id} person={cc} accentColor="#FE5A00" />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
