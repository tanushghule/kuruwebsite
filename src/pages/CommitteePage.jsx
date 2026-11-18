import React from 'react';
import {
  FACULTY_ADVISORS,
  EC_MEMBERS,
  CC_HEADS,
} from '../data/websiteContent';
import { cn } from '../utils/cn';

/**
 * Meet the OC Card:
 * - Eye-level aligned at 30% from the top of the 4:5 portrait frame
 * - Center hierarchy cards (Dr. Mahdi Farrokh & Ayush Kumar) are elevated above left/right cards
 * - Advisors: Name only (no orange designation line, no Faculty Advisory Board line, no description)
 * - EC & CC Heads: Name & Position only (no Executive Council/Team line, no description)
 */
function MemberCard({ person, showRole = true }) {
  return (
    <div
      className={cn(
        'group rounded-xl sm:rounded-2xl border border-white/12 bg-[#12141C] hover:border-[var(--color-primary-flame)] overflow-hidden transition-all duration-300 shadow-xl',
        person.isCenterElevated
          ? '-translate-y-2.5 sm:-translate-y-5 border-[var(--color-primary-flame)]/40 shadow-[0_18px_45px_rgba(254,90,0,0.22)]'
          : 'hover:-translate-y-1'
      )}
    >
      {/* Portrait Image (4:5 aspect ratio with eye level aligned at 30%) */}
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
              'linear-gradient(180deg, rgba(9,9,11,0.02) 48%, rgba(18,20,28,0.95) 100%)',
          }}
        />

        <div className="absolute bottom-2 left-2 right-2 sm:bottom-4 sm:left-4 sm:right-4">
          <h3 className="font-horizon text-[11px] min-[380px]:text-xs sm:text-lg lg:text-xl font-black uppercase text-white group-hover:text-[var(--color-primary-flame)] transition-colors leading-tight">
            {person.name}
          </h3>
          {showRole && person.role && (
            <p className="text-[9px] min-[380px]:text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[var(--color-primary-flame)] mt-0.5 sm:mt-1 leading-snug">
              {person.role}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default function CommitteePage() {
  return (
    <div className="w-full min-h-screen bg-[#09090B] text-white flex flex-col">
      {/* =========================================================================
           1. HERO BANNER
           ========================================================================= */}
      <section className="relative w-full py-10 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-white/10 bg-blueprint-grid">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 sm:px-4 py-1.5 text-[10px] sm:text-xs tracking-widest uppercase text-white/80 mb-4 font-bold">
            <span className="h-2 w-2 rounded-full bg-[var(--color-primary-flame)] animate-pulse" />
            <span>MEET THE OC • FLAME UNIVERSITY KURUKSHETRA 2027</span>
          </div>

          <h1 className="font-horizon text-2xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white">
            ORGANIZING <span className="text-[var(--color-primary-flame)]">COMMITTEE</span>
          </h1>

          <p className="max-w-xl text-xs sm:text-base text-white/70 mt-3 leading-relaxed">
            The Faculty Advisors, Executive Committee, and Core Committee Heads leading FLAME Kurukshetra 2027.
          </p>
        </div>
      </section>

      {/* =========================================================================
           2. DIRECT PHOTO ROWS (3 per row on mobile & desktop):
              - Row 1: Faculty Advisors (Dr. Vahideh Razmi, Dr. Mahdi Farrokh [Center Elevated], Ms. Tamosi Sarkar)
              - Row 2: Executive Committee (Khushi Bhatia, Ayush Kumar [Center Elevated], Parthsarthi Goyal)
              - Row 3 Onwards: Core Committee (CC) Heads
           ========================================================================= */}
      <main className="max-w-7xl mx-auto w-full px-3 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12 sm:space-y-16">
        {/* ROW 1: THREE FACULTY ADVISORS */}
        <section>
          <div className="mb-6 sm:mb-9 flex items-center gap-3">
            <span className="rdr-trait" />
            <h2 className="font-horizon text-lg sm:text-2xl font-black uppercase tracking-wider text-white">
              FACULTY <span className="text-[var(--color-primary-flame)]">ADVISORS</span>
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-2.5 sm:gap-6 lg:gap-8 pt-2 sm:pt-4">
            {FACULTY_ADVISORS.map((advisor) => (
              <MemberCard key={advisor.id} person={advisor} showRole={false} />
            ))}
          </div>
        </section>

        {/* ROW 2: EXECUTIVE COMMITTEE (EC) */}
        <section>
          <div className="mb-6 sm:mb-9 flex items-center gap-3">
            <span className="rdr-trait" />
            <h2 className="font-horizon text-lg sm:text-2xl font-black uppercase tracking-wider text-white">
              EXECUTIVE <span className="text-[var(--color-primary-flame)]">COMMITTEE (EC)</span>
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-2.5 sm:gap-6 lg:gap-8 pt-2 sm:pt-4">
            {EC_MEMBERS.map((ec) => (
              <MemberCard key={ec.id} person={ec} showRole={true} />
            ))}
          </div>
        </section>

        {/* ROW 3 ONWARDS: ALL CORE COMMITTEE (CC) HEADS */}
        <section>
          <div className="mb-6 flex items-center gap-3">
            <span className="rdr-trait" />
            <h2 className="font-horizon text-lg sm:text-2xl font-black uppercase tracking-wider text-white">
              CORE COMMITTEE <span className="text-[var(--color-primary-flame)]">(CC) HEADS</span>
            </h2>
          </div>
          <div className="grid grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-6">
            {CC_HEADS.map((cc) => (
              <MemberCard key={cc.id} person={cc} showRole={true} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
