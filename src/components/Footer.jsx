import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, FileText, Radio, ArrowUpRight } from 'lucide-react';
import KurukshetraLogo from './KurukshetraLogo';

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-[#070709] text-white/80 transition-colors">
      {/* Top Banner Grid Info */}
      <div className="border-b border-white/10 bg-black/60 px-4 py-4 text-xs tracking-wider text-white/60 uppercase font-medium">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 text-[var(--color-primary-flame)] font-bold">
              <span className="h-2 w-2 rounded-full bg-[var(--color-primary-flame)]" />
              OFFICIAL FESTIVAL PORTAL • FEB 18–21, 2027
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[var(--color-primary-flame)]" />
              FLAME UNIVERSITY, LAVALE, PUNE
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-white/40">EST. 2012</span>
            <span className="text-[var(--color-primary-flame)]">•</span>
            <span>WESTERN INDIA&apos;S PREMIER COLLEGIATE FEST</span>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Information */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Col */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-3.5 group">
              <div className="relative flex shrink-0 items-center justify-center rounded-full shadow-[0_0_24px_rgba(254,90,0,0.35)] transition-transform group-hover:scale-105">
                <KurukshetraLogo className="h-12 w-12" />
              </div>
              <div className="flex flex-col">
                <span className="font-horizon text-lg sm:text-xl font-black uppercase text-white tracking-wider">
                  FLAME <span className="text-[var(--color-primary-flame)]">KURUKSHETRA</span>
                </span>
                <span className="text-xs uppercase tracking-[0.2em] text-white/55 font-medium">
                  The Conclave of Champions
                </span>
              </div>
            </Link>

            <p className="text-sm text-white/65 leading-relaxed max-w-sm font-normal">
              The ultimate multi-disciplinary collegiate sports, cultural, management, and esports battleground. Over 50+ universities, 2,500+ athletes, and ₹10L+ in cash prizes across four intense championship days.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="/kuru-general-brochure.pdf"
                download="FLAME_Kurukshetra_2027_General_Brochure.pdf"
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 hover:bg-white/10 px-3.5 py-2 text-xs font-semibold text-white transition"
              >
                <FileText className="w-3.5 h-3.5 text-[var(--color-primary-flame)]" />
                <span>DOWNLOAD BROCHURE</span>
              </a>
              <Link
                to="/live-events"
                className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-primary-flame)]/20 border border-[var(--color-primary-flame)]/40 hover:bg-[var(--color-primary-flame)]/30 px-3.5 py-2 text-xs text-[var(--color-primary-flame)] transition font-bold"
              >
                <Radio className="w-3.5 h-3.5" />
                <span>LIVE ARENA</span>
              </Link>
            </div>
          </div>

          {/* Nav Links Column 1: Festival Arenas */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-[var(--color-primary-flame)]">
              Festival Arenas
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <Link to="/" className="text-white/70 hover:text-white transition flex items-center justify-between">
                  <span>Home Overview</span>
                </Link>
              </li>
              <li>
                <Link to="/schedule" className="text-white/70 hover:text-white transition flex items-center justify-between">
                  <span>Tournament Schedule</span>
                </Link>
              </li>
              <li>
                <Link to="/live-events" className="text-white/70 hover:text-white transition flex items-center justify-between">
                  <span>Live Scores & Tally</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary-flame)]" />
                </Link>
              </li>
              <li>
                <Link to="/live-events/ultimate-frisbee-final" className="text-white/70 hover:text-white transition flex items-center justify-between">
                  <span>Match Center</span>
                </Link>
              </li>
              <li>
                <Link to="/register" className="hover:text-white transition flex items-center justify-between font-bold text-[var(--color-primary-flame)]">
                  <span>Register Contingent</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Nav Links Column 2: Archive & Community */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-[var(--color-primary-flame)]">
              People & Media
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <Link to="/committee" className="text-white/70 hover:text-white transition">
                  Committee & Heads
                </Link>
              </li>
              <li>
                <Link to="/album" className="text-white/70 hover:text-white transition">
                  Photo Vault & Memories
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-white/70 hover:text-white transition">
                  Fest Stories & News
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/70 hover:text-white transition">
                  Contact & War Room
                </Link>
              </li>
              <li>
                <Link to="/admin" className="text-white/70 hover:text-white transition">
                  Admin Scorer Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Nav Links Column 3: Essentials & Support */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-[var(--color-primary-flame)]">
              Support & Guidelines
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <Link to="/faq" className="text-white/70 hover:text-white transition">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/70 hover:text-white transition">
                  Contingent Concierge Desk
                </Link>
              </li>
              <li>
                <span className="text-white/50 cursor-not-allowed">
                  Campus Rulebooks (PDF)
                </span>
              </li>
              <li>
                <span className="text-white/50 cursor-not-allowed">
                  Emergency Medical Protocol
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>
            © 2027 FLAME University Kurukshetra. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>FLAME UNIVERSITY CAMPUS, LAVALE, PUNE, MAHARASHTRA 412115</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
