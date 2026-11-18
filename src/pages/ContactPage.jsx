import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  FileDown,
  FileText,
  Trophy,
  Music,
  ShieldCheck,
  Compass,
  Sparkles,
  Check,
  Copy,
  Navigation,
  Globe,
  Share2,
  Video,
  Briefcase,
  Users,
  Handshake,
} from 'lucide-react';
import {
  ContactWithDitherImage,
  DitherImageCanvas,
} from '../components/ui/contact-with-dither-image';

/**
 * Page 10 Fix:
 * Keep info ONLY for Ayush, Khushi, Parth, Janhavi, and Participants HOD (5 contacts total).
 * Time/officeHours removed from each contact card.
 * Department categorization filter bar removed.
 */
const STUDENT_POCS = [
  {
    id: 'poc-janhavi',
    name: 'Janhavi Ajgaonkar',
    role: 'Head of Registrations',
    department: 'Contingent Codes, Slotting & Accreditation',
    email: 'janhavi.ajgaonkar@flame.edu.in',
    phone: '+91 91674 88312',
    badge: 'REGISTRATIONS HEAD',
    icon: ShieldCheck,
    bio: 'Supervises portal registrations, contingent verification, team slotting, and official athlete accreditation badges.',
  },
  {
    id: 'poc-participants-hod',
    name: 'Laghuvi Agarwal',
    role: 'Participants HOD (Registrations Team)',
    department: 'Participant Onboarding, Assistance & Check-Ins',
    email: 'laghuvi.agarwal@flame.edu.in',
    phone: '+91 98193 64028',
    badge: 'PARTICIPANTS HOD',
    icon: Users,
    bio: 'Assists visiting university contingents and individual participants with onboarding, campus check-ins, and event coordination.',
  },
  {
    id: 'poc-ayush',
    name: 'Ayush Kumar',
    role: 'Chairperson, Executive Council (EC)',
    department: 'Apex Leadership & Institutional Governance',
    email: 'ayush.kumar@flame.edu.in',
    phone: '+91 98230 11402',
    badge: 'EXECUTIVE COUNCIL',
    icon: Sparkles,
    bio: 'Primary point of contact for institutional invitations, university leadership, and overall FLAME Kurukshetra 2027 governance.',
  },
  {
    id: 'poc-khushi',
    name: 'Khushi Bhatia',
    role: 'Joint Secretary, Executive Council (EC)',
    department: 'Central Secretariat & Inter-University Delegations',
    email: 'khushi.bhatia@flame.edu.in',
    phone: '+91 98204 55819',
    badge: 'EXECUTIVE COUNCIL',
    icon: Trophy,
    bio: 'Coordinates inter-university delegations, council administration, and multi-wing operational convergence across all festival days.',
  },
  {
    id: 'poc-parth',
    name: 'Parthsarthi Goyal',
    role: 'Joint Secretary, Executive Council (EC)',
    department: 'Council Protocol & Grievance Resolution',
    email: 'parthsarthi.goyal@flame.edu.in',
    phone: '+91 97651 33904',
    badge: 'EXECUTIVE COUNCIL',
    icon: Briefcase,
    bio: 'Oversees council protocol, senate approvals, official documentation, and contingent grievance resolution frameworks.',
  },
  {
    id: 'poc-shashwat',
    name: 'Shashwat Tripathi',
    role: 'Head of Sponsorship',
    department: 'Corporate Partnerships, Brand Alliances & Stalls',
    email: 'shashwat.tripathi@flame.edu.in',
    phone: '+91 99302 77210',
    badge: 'SPONSORSHIPS',
    icon: Handshake,
    bio: 'Primary point of contact for corporate sponsorships, title partnerships, on-campus brand activations, and promotional stalls.',
  },
];

const BROCHURE_HIGHLIGHTS = [
  { label: 'Edition', value: 'Kuru 2027 (16th Ed.)' },
  { label: 'Fest Dates', value: '22nd – 26th Jan 2027' },
  { label: 'Prize Pool', value: '₹10,00,000+ Across Arenas' },
  { label: 'Footfall', value: '50+ Partner Universities' },
];

export default function ContactPage() {
  const [copiedEmail, setCopiedEmail] = useState(null);

  const handleCopyEmail = (email) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2000);
  };

  return (
    <div
      id="hero"
      className="min-h-screen bg-[#FAF9F6] text-zinc-900 dark:bg-[var(--color-primary-black)] dark:text-[var(--color-primary-white)] pb-16 sm:pb-0 transition-colors duration-300"
    >
      {/* 1. ACETERNITY CONTACT WITH DITHER IMAGE HERO + INTERACTIVE WAR ROOM NOTE (Contains Overall General Brochure button) */}
      <ContactWithDitherImage brochureUrl="/kuru-general-brochure.pdf" />

      {/* 2. EVENT BROCHURES (SPORTS, CULTURAL, ME) & OVERALL CODE OF CONDUCT (Page 8 Fix) */}
      <section
        id="brochure"
        className="relative py-6 sm:py-16 border-b border-black/10 dark:border-white/10 bg-[#FAF9F6] dark:bg-black overflow-hidden transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl sm:rounded-3xl border border-[var(--color-primary-flame)]/45 bg-gradient-to-br from-[#160800] via-[#09090B] to-[#0d0400] text-white p-4 sm:p-10 lg:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
            {/* Corner Accent Badge */}
            <div className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-primary-flame)]/40 bg-[var(--color-primary-flame)]/15 px-3 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[var(--color-primary-flame)] mb-3 sm:mb-6">
              <FileText className="w-3.5 h-3.5 shrink-0" />
              <span>Category Rulebooks &amp; Official Code of Conduct</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-10 items-center">
              {/* Left 7 Cols: 3 Event Brochures (Sports, Cultural, ME) + 1 Overall Code of Conduct */}
              <div className="lg:col-span-7 space-y-3.5 sm:space-y-6">
                <h2 className="font-horizon text-lg sm:text-3xl lg:text-5xl font-black uppercase tracking-wider leading-tight text-white">
                  EVENT{' '}
                  <span className="text-[var(--color-primary-flame)]">
                    BROCHURES &amp; RULEBOOKS
                  </span>{' '}
                  2027
                </h2>

                <p className="text-white/80 text-xs sm:text-base leading-relaxed max-w-2xl">
                  Download the dedicated event brochures for{' '}
                  <strong className="text-white">
                    Sports, Cultural &amp; Management Events (ME)
                  </strong>{' '}
                  along with the mandatory{' '}
                  <strong className="text-white">
                    Overall Kurukshetra Code of Conduct
                  </strong>
                  .
                </p>

                {/* Key Fest Telemetry Grid */}
                <div className="grid grid-cols-2 gap-2 sm:gap-3 pt-0.5">
                  {BROCHURE_HIGHLIGHTS.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-xl border border-white/12 bg-white/[0.04] p-2.5 sm:p-3.5"
                    >
                      <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-[var(--color-primary-flame)] font-bold">
                        {item.label}
                      </span>
                      <span className="mt-0.5 block text-xs sm:text-base font-bold text-white truncate">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Page 8 Fix: 3 Buttons for Sports, Cultural & ME Brochures + 1 Button for Overall Code of Conduct */}
                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href="/kuru-general-brochure.pdf"
                    download="FLAME_Kurukshetra_2027_Sports_Events_Brochure.pdf"
                    className="group inline-flex items-center justify-between gap-3 rounded-xl bg-[var(--color-primary-flame)] hover:bg-[#ff6a1a] px-4 py-3.5 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white shadow-[0_8px_25px_rgba(254,90,0,0.35)] transition"
                  >
                    <span className="flex items-center gap-2">
                      <Trophy className="w-4 h-4 shrink-0" />
                      <span>Sports Events Brochure</span>
                    </span>
                    <FileDown className="w-4 h-4 shrink-0" />
                  </a>

                  <a
                    href="/kuru-general-brochure.pdf"
                    download="FLAME_Kurukshetra_2027_Cultural_Events_Brochure.pdf"
                    className="group inline-flex items-center justify-between gap-3 rounded-xl bg-[var(--color-primary-flame)] hover:bg-[#ff6a1a] px-4 py-3.5 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white shadow-[0_8px_25px_rgba(254,90,0,0.35)] transition"
                  >
                    <span className="flex items-center gap-2">
                      <Music className="w-4 h-4 shrink-0" />
                      <span>Cultural Events Brochure</span>
                    </span>
                    <FileDown className="w-4 h-4 shrink-0" />
                  </a>

                  <a
                    href="/kuru-general-brochure.pdf"
                    download="FLAME_Kurukshetra_2027_ME_Events_Brochure.pdf"
                    className="group inline-flex items-center justify-between gap-3 rounded-xl bg-[var(--color-primary-flame)] hover:bg-[#ff6a1a] px-4 py-3.5 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white shadow-[0_8px_25px_rgba(254,90,0,0.35)] transition"
                  >
                    <span className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4 shrink-0" />
                      <span>ME Events Brochure</span>
                    </span>
                    <FileDown className="w-4 h-4 shrink-0" />
                  </a>

                  <a
                    href="/kuru-general-brochure.pdf"
                    download="FLAME_Kurukshetra_2027_Code_of_Conduct.pdf"
                    className="group inline-flex items-center justify-between gap-3 rounded-xl border-2 border-white/25 bg-white/10 hover:bg-white hover:text-[#09090B] px-4 py-3.5 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white transition"
                  >
                    <span className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[var(--color-accent-yellow)] group-hover:text-[var(--color-primary-flame)] shrink-0" />
                      <span>Kurukshetra Code of Conduct</span>
                    </span>
                    <FileDown className="w-4 h-4 shrink-0" />
                  </a>
                </div>
              </div>

              {/* Right 5 Cols: Interactive Dithered Brochure Cover Preview Card */}
              <div className="hidden sm:block lg:col-span-5">
                <div className="relative mx-auto max-w-sm rounded-2xl border border-white/15 bg-black p-3.5 sm:p-4 shadow-2xl">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-white/10">
                    <DitherImageCanvas
                      imageSrc="/flamecampusphoto.jpg"
                      alt="FLAME Kurukshetra 2027 Official Rulebooks"
                      flameTint={true}
                      pixelScale={2}
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent flex flex-col justify-end p-4 sm:p-5">
                      <span className="text-xs uppercase tracking-widest text-[var(--color-primary-flame)] font-bold">
                        OFFICIAL DOSSIERS • 2027 EDITION
                      </span>
                      <h3 className="text-xl sm:text-2xl font-black uppercase text-white leading-tight mt-1">
                        FLAME KURUKSHETRA &apos;27 OFFICIAL RULEBOOK
                      </h3>
                    </div>
                  </div>

                  <div className="mt-3.5 flex items-center justify-between text-xs text-white/75 px-1">
                    <span>Sports, Cultural, ME &amp; Code of Conduct</span>
                    <a
                      href="/kuru-general-brochure.pdf"
                      download="FLAME_Kurukshetra_2027_Code_of_Conduct.pdf"
                      className="font-bold text-[var(--color-primary-flame)] hover:underline flex items-center gap-1"
                    >
                      <FileDown className="w-3.5 h-3.5" />
                      Direct PDF
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. STUDENT ORGANIZERS (POCs) DIRECTORY — ONLY 5 CONTACTS, NO FILTER BAR, NO TIME (Page 10 Fix) */}
      <section
        id="pocs"
        className="py-7 sm:py-20 border-b border-black/10 dark:border-white/10 bg-blueprint-subgrid transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="mb-6 sm:mb-12">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-primary-flame)]/40 bg-[var(--color-primary-flame)]/10 px-3 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[var(--color-primary-flame)] mb-2 sm:mb-3">
              <Mail className="w-3.5 h-3.5" />
              <span>Direct Student Secretariat Directory</span>
            </div>
            <h2 className="font-horizon text-lg sm:text-4xl lg:text-5xl font-black uppercase tracking-wider leading-tight text-zinc-950 dark:text-white">
              MEET THE <span className="text-[var(--color-primary-flame)]">STUDENT POCs</span>
            </h2>
            <p className="mt-1 sm:mt-2 text-zinc-600 dark:text-white/70 text-xs sm:text-base max-w-2xl">
              Tap directly on any organizer&apos;s{' '}
              <span className="text-[var(--color-primary-flame)] font-semibold underline decoration-dotted">
                name
              </span>{' '}
              below to email their official FLAME University inbox.
            </p>
          </div>

          {/* 5 POC Cards Grid (No categorization bar above, no time inside cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {STUDENT_POCS.map((poc, idx) => {
              const IconComponent = poc.icon;
              const mailtoHref = `mailto:${poc.email}?subject=${encodeURIComponent(
                `[FLAME Kurukshetra 2027 Inquiry] For ${poc.name} (${poc.role})`
              )}`;

              return (
                <motion.div
                  key={poc.id}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.04, duration: 0.3 }}
                  className="group relative flex flex-col justify-between rounded-2xl border border-white/15 bg-[#09090B] text-white p-5 sm:p-6 shadow-[0_14px_35px_rgba(0,0,0,0.28)] transition-all duration-300 hover:border-[var(--color-primary-flame)]"
                >
                  <div>
                    {/* Top Row: Badge & Icon */}
                    <div className="flex items-center justify-between gap-2 mb-3 sm:mb-4">
                      <span className="inline-flex items-center rounded-md bg-[var(--color-primary-flame)]/15 border border-[var(--color-primary-flame)]/40 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-[var(--color-primary-flame)]">
                        {poc.badge}
                      </span>
                      <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-[var(--color-primary-flame)] group-hover:bg-[var(--color-primary-flame)] group-hover:text-white transition-colors">
                        <IconComponent className="h-4 w-4" />
                      </div>
                    </div>

                    {/* CLICKABLE MAILTO ORGANIZER NAME */}
                    <a
                      href={mailtoHref}
                      title={`Email ${poc.name} (${poc.email})`}
                      className="group/name inline-flex items-center gap-1.5 text-lg sm:text-xl font-black uppercase tracking-wide text-white hover:text-[var(--color-primary-flame)] transition-colors focus:outline-none"
                    >
                      <span className="underline decoration-[var(--color-primary-flame)]/60 decoration-2 underline-offset-4 group-hover/name:decoration-[var(--color-primary-flame)]">
                        {poc.name}
                      </span>
                      <Mail className="w-4 h-4 text-[var(--color-primary-flame)] shrink-0" />
                    </a>

                    <p className="mt-1 text-xs sm:text-sm font-bold uppercase tracking-wider text-[var(--color-primary-flame)]">
                      {poc.role}
                    </p>
                    <p className="text-xs text-white/65 font-medium truncate">
                      {poc.department}
                    </p>

                    <p className="mt-3 text-xs sm:text-sm text-white/85 leading-relaxed">
                      {poc.bio}
                    </p>
                  </div>

                  {/* Contact Details Footer (Time Removed per Page 10 Fix) */}
                  <div className="mt-4 sm:mt-5 pt-3.5 sm:pt-4 border-t border-white/10 space-y-2 text-xs sm:text-sm">
                    <div className="flex items-center justify-between gap-2">
                      <a
                        href={mailtoHref}
                        className="flex items-center gap-1.5 text-white/95 hover:text-[var(--color-primary-flame)] truncate text-xs transition"
                      >
                        <Mail className="w-3.5 h-3.5 text-[var(--color-primary-flame)] shrink-0" />
                        <span className="truncate">{poc.email}</span>
                      </a>
                      <button
                        type="button"
                        onClick={() => handleCopyEmail(poc.email)}
                        title="Copy email address"
                        className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-white/60 hover:text-white transition shrink-0"
                      >
                        {copiedEmail === poc.email ? (
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>

                    <div className="flex items-center text-white/85 text-xs">
                      <a
                        href={`tel:${poc.phone.replace(/\s+/g, '')}`}
                        className="flex items-center gap-1.5 hover:text-white transition font-semibold"
                      >
                        <Phone className="w-3.5 h-3.5 text-[var(--color-primary-flame)]" />
                        <span>{poc.phone}</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* General Department Desks Strip (Page 12 Fix: Only keep Main Kuru ID and Regi Email ID) */}
          <div className="mt-6 sm:mt-10 grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-5">
            {[
              {
                title: 'Central Kurukshetra Secretariat',
                email: 'kurukshetra@flame.edu.in',
                desc: 'Institutional invites, general queries & official festival communications',
              },
              {
                title: 'Contingent Registrations Desk',
                email: 'kurukshetra.registrations@flame.edu.in',
                desc: 'Contingent registrations, team slotting & participant verification queries',
              },
            ].map((desk) => (
              <div
                key={desk.email}
                className="flex items-center justify-between rounded-xl border border-white/15 bg-[#09090B] text-white px-4 sm:px-6 py-4 shadow-md"
              >
                <div className="min-w-0">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-white/60">
                    {desk.title}
                  </h3>
                  <a
                    href={`mailto:${desk.email}`}
                    className="mt-1 inline-flex items-center gap-1.5 text-sm sm:text-base font-bold text-[var(--color-primary-flame)] hover:underline break-all"
                  >
                    <Mail className="w-4 h-4 shrink-0" />
                    <span>{desk.email}</span>
                  </a>
                  <p className="mt-1 text-xs text-white/55">{desk.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. RESPONSIVE GOOGLE MAPS IFRAME SECTION */}
      <section
        id="campus-map"
        className="py-7 sm:py-20 bg-[#FAF9F6] dark:bg-black transition-colors duration-300 pb-10 sm:pb-20"
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-8 items-stretch">
            <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl sm:rounded-3xl border border-white/15 bg-[#09090B] text-white p-4 sm:p-8 shadow-[0_18px_45px_rgba(0,0,0,0.3)]">
              <div className="space-y-3.5 sm:space-y-6">
                <div className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-primary-flame)]/40 bg-[var(--color-primary-flame)]/15 px-3 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[var(--color-primary-flame)]">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Battleground Location</span>
                </div>

                <div>
                  <h2 className="font-horizon text-lg sm:text-3xl lg:text-4xl font-black uppercase tracking-wider leading-tight text-white">
                    FLAME UNIVERSITY{' '}
                    <span className="text-[var(--color-primary-flame)]">CAMPUS</span>
                  </h2>
                  <p className="mt-1 sm:mt-2 text-xs sm:text-base text-white/75 leading-relaxed">
                    Gat No. 1270, Off. Pune Bangalore Highway, Vadzai, Pune, Maharashtra 412115
                  </p>
                </div>

                <div className="space-y-2.5 sm:space-y-3 border-t border-white/10 pt-3 sm:pt-5 text-xs sm:text-sm">
                  <div className="flex items-start gap-2.5">
                    <Compass className="w-4 h-4 text-[var(--color-primary-flame)] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-white">
                        From Chandni Chowk (Bavdhan):
                      </span>
                      <p className="text-white/65">
                        ~15 mins drive (7.5 km) via Mulshi Road.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Navigation className="w-4 h-4 text-[var(--color-primary-flame)] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-white">
                        From Pune Station / Airport:
                      </span>
                      <p className="text-white/65">
                        ~45–60 mins via Baner–Pashan Link Road or NH-48.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Phone className="w-4 h-4 text-[var(--color-primary-flame)] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-white">
                        Campus Security &amp; Gate 1 Desk:
                      </span>
                      <p className="text-white/65">
                        1800 209 4567 | +91 20 6790 6000
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 sm:mt-8 pt-3.5 sm:pt-5 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                <a
                  href="https://maps.google.com/?q=FLAME+University+Pune+412115"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-primary-flame)] px-4 sm:px-5 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-[0_0_20px_rgba(254,90,0,0.4)] hover:bg-[#ff6a1a] active:scale-95 transition"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Turn-by-Turn Directions</span>
                </a>
                <span className="text-[10px] text-white/50 text-center sm:text-right">
                  18.5246° N, 73.7286° E
                </span>
              </div>
            </div>

            <div className="lg:col-span-7 relative h-[230px] sm:h-auto sm:min-h-[460px] rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-[var(--color-primary-flame)]/40 bg-black/5 dark:bg-white/5 shadow-[0_0_50px_rgba(254,90,0,0.12)]">
              <iframe
                title="FLAME University Campus Map"
                src="https://maps.google.com/maps?q=FLAME%20University,%20Gat%20No.%201270,%20Lavale,%20Off.%20Pune%20Bangalore%20Highway,%20Pune%20412115&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 filter contrast-105"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="pointer-events-none absolute top-2.5 left-2.5 sm:top-4 sm:left-4 rounded-xl bg-black/85 backdrop-blur-md border border-white/15 px-2.5 py-1 sm:px-3.5 sm:py-2 text-xs text-white shadow-lg flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-[var(--color-primary-flame)] animate-ping shrink-0" />
                <span className="uppercase tracking-wider text-[9px] sm:text-[11px] font-bold">
                  FLAME UNIVERSITY CAMPUS
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Floating Social Dock (Page 9 Fix: Correct LinkedIn & YouTube URLs) */}
          <div className="mt-7 sm:mt-16 flex flex-col items-center justify-center">
            <div className="w-full sm:w-auto grid grid-cols-4 sm:inline-flex items-center justify-center gap-2 sm:gap-10 rounded-2xl border border-white/15 bg-[#09090B] px-3 sm:px-8 py-3 sm:py-4 backdrop-blur-xl shadow-xl">
              <a
                href="https://www.instagram.com/flamekurukshetra"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-1 text-white/80 hover:text-[var(--color-primary-flame)] transition"
              >
                <Share2 className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-[9px] sm:text-[10px] font-bold tracking-widest uppercase">
                  INSTAGRAM
                </span>
              </a>
              <a
                href="https://www.linkedin.com/in/flamekurukshetra2027/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-1 text-white/80 hover:text-[var(--color-primary-flame)] transition"
              >
                <Globe className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-[9px] sm:text-[10px] font-bold tracking-widest uppercase">
                  LINKEDIN
                </span>
              </a>
              <a
                href="https://www.youtube.com/@KurukshetraFLAME"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-1 text-white/80 hover:text-[var(--color-primary-flame)] transition"
              >
                <Video className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-[9px] sm:text-[10px] font-bold tracking-widest uppercase">
                  YOUTUBE
                </span>
              </a>
              <a
                href="/kuru-general-brochure.pdf"
                download="FLAME_Kurukshetra_2027_General_Brochure.pdf"
                className="group flex flex-col items-center gap-1 text-[var(--color-primary-flame)] hover:opacity-80 transition"
              >
                <FileDown className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-[9px] sm:text-[10px] font-bold tracking-widest uppercase">
                  BROCHURE
                </span>
              </a>
            </div>

            <p className="mt-4 sm:mt-6 text-center text-[10px] sm:text-xs text-zinc-500 dark:text-white/40 px-4">
              © 2027 FLAME Kurukshetra Student Secretariat • FLAME University
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
