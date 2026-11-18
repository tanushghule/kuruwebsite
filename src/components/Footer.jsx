import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, ArrowUpRight } from 'lucide-react';
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
              OFFICIAL FESTIVAL PORTAL • 22ND–26TH JANUARY 2027
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5">
              FLAME UNIVERSITY CAMPUS
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-white/40">EST. 2008</span>
            <span className="text-[var(--color-primary-flame)]">•</span>
            <span>19TH EDITION • PREMIER COLLEGIATE FEST</span>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Information */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Col */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-3.5 group">
              <div className="relative flex shrink-0 items-center justify-center rounded-full transition-transform group-hover:scale-105">
                <KurukshetraLogo className="h-12 w-12 sm:h-14 sm:w-14" />
              </div>
              <div className="flex flex-col">
                <span className="font-horizon text-base sm:text-xl font-black uppercase text-white tracking-wider whitespace-nowrap">
                  FLAME <span className="text-[var(--color-primary-flame)]">KURUKSHETRA</span>
                </span>
                <span className="text-xs uppercase tracking-[0.2em] text-white/55 font-medium">
                  The Conclave of Champions
                </span>
              </div>
            </Link>

            <p className="text-sm text-white/65 leading-relaxed max-w-sm font-normal">
              India&apos;s premier multi-disciplinary collegiate sports, cultural, and management events conclave. Over 50+ universities, 8,500+ collegiate athletes, and ₹10L+ in cash prizes across five intense championship days.
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
                <Link to="/events" className="text-white/70 hover:text-white transition flex items-center justify-between">
                  <span>All Events Directory</span>
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
              Festival Hub
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <Link to="/committee" className="text-white/70 hover:text-white transition">
                  Meet the OC
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-white/70 hover:text-white transition">
                  Fest Stories &amp; News
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/70 hover:text-white transition">
                  Contact &amp; War Room
                </Link>
              </li>
            </ul>
          </div>

          {/* Nav Links Column 3: Social & Support */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-[var(--color-primary-flame)]">
              Connect &amp; Support
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <Link to="/faq" className="text-white/70 hover:text-white transition">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/flamekurukshetra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition"
                >
                  Instagram (@flamekurukshetra)
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/flamekurukshetra2027/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition"
                >
                  LinkedIn Official
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@KurukshetraFLAME"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition"
                >
                  YouTube (@KurukshetraFLAME)
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>
            © 2027 FLAME University Kurukshetra (EST. 2008). All Rights Reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>FLAME UNIVERSITY CAMPUS • 22ND–26TH JANUARY 2027</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
