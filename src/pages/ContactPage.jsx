import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  FileDown,
  FileText,
  ExternalLink,
  Trophy,
  Music,
  Handshake,
  ShieldCheck,
  BedDouble,
  Megaphone,
  Clock,
  Compass,
  Sparkles,
  Check,
  Copy,
  Navigation,
  Building2,
  Globe,
  Share2,
  Video,
} from 'lucide-react';
import {
  ContactWithDitherImage,
  DitherImageCanvas,
} from '../components/ui/contact-with-dither-image';
import { cn } from '../utils/cn';

const STUDENT_POCS = [
  {
    id: 'poc-convener',
    name: 'Aarav Deshmukh',
    role: 'Overall Fest Convener',
    department: 'Core Secretariat & Fest Operations',
    email: 'aarav.deshmukh@flame.edu.in',
    phone: '+91 98230 11402',
    badge: 'OVERALL HEAD',
    icon: Sparkles,
    officeHours: '10:00 AM – 9:00 PM',
    bio: 'Primary point of contact for institutional invitations, university leadership, and overall Kurukshetra 2027 governance.',
  },
  {
    id: 'poc-sports',
    name: 'Rhea Kulkarni',
    role: 'Head of Sports & Athletics',
    department: '25+ Inter-Collegiate Sports Arenas',
    email: 'rhea.kulkarni@flame.edu.in',
    phone: '+91 98204 55819',
    badge: 'SPORTS ARENA',
    icon: Trophy,
    officeHours: '9:00 AM – 8:00 PM',
    bio: 'Handles tournament fixtures, refereeing technicalities, player eligibility, and Arjuna Sports Complex bookings.',
  },
  {
    id: 'poc-culturals',
    name: 'Kabir Mehta',
    role: 'Cultural & Pro-Nights Secretary',
    department: 'Performing Arts, Battle of Bands & Fashion',
    email: 'kabir.mehta@flame.edu.in',
    phone: '+91 97651 33904',
    badge: 'CULTURALS & PRO',
    icon: Music,
    officeHours: '11:00 AM – 10:00 PM',
    bio: 'Point of contact for stage technical riders, soundcheck slots, cultural flagship rules, and artist management.',
  },
  {
    id: 'poc-sponsorship',
    name: 'Ananya Nair',
    role: 'Director of Corporate & Sponsorships',
    department: 'Brand Partnerships, Stalls & Media Alliances',
    email: 'ananya.nair@flame.edu.in',
    phone: '+91 99302 77210',
    badge: 'SPONSORSHIPS',
    icon: Handshake,
    officeHours: '10:00 AM – 7:00 PM',
    bio: 'Coordinates title sponsorships, on-campus brand activations, food flea-market stalls, and deliverable MoUs.',
  },
  {
    id: 'poc-hospitality',
    name: 'Vivaan Joshi',
    role: 'Head of Contingent Relations & Hospitality',
    department: 'On-Campus Accommodation & Transport',
    email: 'vivaan.joshi@flame.edu.in',
    phone: '+91 98193 64028',
    badge: 'HOSPITALITY & PR',
    icon: BedDouble,
    officeHours: '24x7 Helpline',
    bio: 'Manages outstation contingent check-ins, Pune shuttle buses, meal coupons, and security passes at Gate 1.',
  },
  {
    id: 'poc-registrations',
    name: 'Ishita Sharma',
    role: 'Head of Registrations & Finance',
    department: 'Contingent Codes, Fee Waivers & Prize Disbursal',
    email: 'ishita.sharma@flame.edu.in',
    phone: '+91 91674 88312',
    badge: 'REGISTRATIONS',
    icon: ShieldCheck,
    officeHours: '10:00 AM – 8:00 PM',
    bio: 'Resolves portal registration queries, invoice receipts, contingent cap approvals, and cash prize KYC.',
  },
  {
    id: 'poc-media',
    name: 'Devansh Singhania',
    role: 'Head of Public Relations & Media',
    department: 'Campus Ambassadors, Press & Digital Outreach',
    email: 'devansh.singhania@flame.edu.in',
    phone: '+91 98901 41299',
    badge: 'PR & MEDIA',
    icon: Megaphone,
    officeHours: '11:00 AM – 8:00 PM',
    bio: 'Coordinates press accreditation, photography passes, creator collaborations, and Contingent Leader meetups.',
  },
  {
    id: 'poc-logistics',
    name: 'Tara Chatterjee',
    role: 'Secretary of Security & Campus Logistics',
    department: 'Gate Clearances, Equipment & Emergency Response',
    email: 'tara.chatterjee@flame.edu.in',
    phone: '+91 98337 19045',
    badge: 'SECURITY & OPS',
    icon: Building2,
    officeHours: '24x7 Control',
    bio: 'Handles vehicle entry permits, musical/sports gear gate passes, medical bay coordination, and night curfews.',
  },
];

const BROCHURE_HIGHLIGHTS = [
  { label: 'Edition', value: 'Kuru 2027 (16th Ed.)' },
  { label: 'Fest Dates', value: '18 – 21 Feb 2027' },
  { label: 'Prize Pool', value: '₹18,50,000+ (45+ Events)' },
  { label: 'Footfall', value: '15,000+ | 85+ Unis' },
];

export default function ContactPage() {
  const [copiedEmail, setCopiedEmail] = useState(null);
  const [activeDeptFilter, setActiveDeptFilter] = useState('ALL');

  const handleCopyEmail = (email) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2000);
  };

  const filteredPocs =
    activeDeptFilter === 'ALL'
      ? STUDENT_POCS
      : STUDENT_POCS.filter((p) => p.badge.includes(activeDeptFilter));

  return (
    <div
      id="hero"
      className="min-h-screen bg-[#FAF9F6] text-zinc-900 dark:bg-[var(--color-primary-black)] dark:text-[var(--color-primary-white)] pb-16 sm:pb-0 transition-colors duration-300"
    >
      {/* 1. ACETERNITY CONTACT WITH DITHER IMAGE HERO + INTERACTIVE WAR ROOM NOTE */}
      <ContactWithDitherImage brochureUrl="/kuru-general-brochure.pdf" />

      {/* 2. OVERALL KURU GENERAL BROCHURE SHOWCASE & DOWNLOAD HUB */}
      <section
        id="brochure"
        className="relative py-6 sm:py-16 border-b border-black/10 dark:border-white/10 bg-[#FAF9F6] dark:bg-black overflow-hidden transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl sm:rounded-3xl border border-[var(--color-primary-flame)]/45 bg-gradient-to-br from-[#160800] via-[#09090B] to-[#0d0400] text-white p-4 sm:p-10 lg:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
            {/* Corner Accent Badge */}
            <div className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-primary-flame)]/40 bg-[var(--color-primary-flame)]/15 px-3 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[var(--color-primary-flame)] mb-3 sm:mb-6">
              <FileText className="w-3.5 h-3.5 shrink-0" />
              <span>Official Fest Dossier &amp; Rulebook</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-10 items-center">
              {/* Left 7 Cols: Overall Kuru General Brochure Details & Download */}
              <div className="lg:col-span-7 space-y-3.5 sm:space-y-6">
                <h2
                  className="font-horizon text-lg sm:text-3xl lg:text-5xl font-black uppercase tracking-wider leading-tight text-white"
                  style={{ fontFamily: 'var(--font-header-horizon)' }}
                >
                  OVERALL{' '}
                  <span className="text-[var(--color-primary-flame)]">
                    KURU GENERAL BROCHURE
                  </span>{' '}
                  2027
                </h2>

                <p className="text-white/80 text-xs sm:text-lg leading-relaxed max-w-2xl">
                  Complete event matrix for{' '}
                  <strong className="text-white">
                    Sports, Culturals &amp; Management
                  </strong>
                  , general contingent scoring system, accommodation tariffs at FLAME Lavale
                  Campus, and code of conduct.
                </p>

                {/* Key Fest Telemetry Grid — 2x2 on Mobile so zero vertical bloat! */}
                <div className="grid grid-cols-2 gap-2 sm:gap-3 pt-0.5">
                  {BROCHURE_HIGHLIGHTS.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-xl border border-white/12 bg-white/[0.04] p-2.5 sm:p-3.5"
                    >
                      <span className="block font-mono text-[10px] sm:text-xs uppercase tracking-widest text-[var(--color-primary-flame)] font-bold">
                        {item.label}
                      </span>
                      <span className="mt-0.5 block text-xs sm:text-base font-bold text-white truncate">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Primary & Secondary Brochure Actions */}
                <div className="pt-1 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4">
                  <a
                    href="/kuru-general-brochure.pdf"
                    download="FLAME_Kurukshetra_2027_General_Brochure.pdf"
                    className="group inline-flex items-center justify-center gap-2 sm:gap-3 rounded-xl bg-[var(--color-primary-flame)] px-4 sm:px-7 py-3 sm:py-4 text-xs sm:text-base font-black uppercase tracking-wider text-white shadow-[0_8px_25px_rgba(254,90,0,0.4)] transition-all duration-300 hover:bg-[#ff6a1a] active:scale-95 text-center"
                    style={{ fontFamily: 'var(--font-header-spartan)' }}
                  >
                    <FileDown className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                    <span>Download Kuru General Brochure (PDF)</span>
                  </a>

                  <a
                    href="/kuru-general-brochure.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 px-4 py-2.5 sm:py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-white transition"
                  >
                    <span>Preview Brochure in Browser</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[var(--color-primary-flame)]" />
                  </a>
                </div>
              </div>

              {/* Right 5 Cols: Interactive Dithered Brochure Cover Preview Card (Hidden on small mobile to save scroll space) */}
              <div className="hidden sm:block lg:col-span-5">
                <div className="relative mx-auto max-w-sm rounded-2xl border border-white/15 bg-black p-3.5 sm:p-4 shadow-2xl">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-white/10">
                    <DitherImageCanvas
                      imageSrc="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=800&q=80"
                      alt="FLAME Kurukshetra 2027 General Brochure Dither Cover"
                      flameTint={true}
                      pixelScale={2}
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent flex flex-col justify-end p-4 sm:p-5">
                      <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-primary-flame)]">
                        PDF DOSSIER • 2.4 MB • VERIFIED
                      </span>
                      <h3
                        className="text-xl sm:text-2xl font-black uppercase text-white leading-tight mt-1"
                        style={{ fontFamily: 'var(--font-header-spartan)' }}
                      >
                        FLAME KURUKSHETRA &apos;27 OFFICIAL RULEBOOK
                      </h3>
                    </div>
                  </div>

                  <div className="mt-3.5 flex items-center justify-between text-xs text-white/75 px-1">
                    <span>Sports, Culturals &amp; Pronites</span>
                    <a
                      href="/kuru-general-brochure.pdf"
                      download="FLAME_Kurukshetra_2027_General_Brochure.pdf"
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

      {/* 3. STUDENT ORGANIZERS (POCs) DIRECTORY — CLICKABLE MAILTO NAMES */}
      <section
        id="pocs"
        className="py-7 sm:py-20 border-b border-black/10 dark:border-white/10 bg-blueprint-subgrid transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3.5 sm:gap-6 mb-5 sm:mb-12">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-primary-flame)]/40 bg-[var(--color-primary-flame)]/10 px-3 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[var(--color-primary-flame)] mb-2 sm:mb-3">
                <Mail className="w-3.5 h-3.5" />
                <span>Direct Student Secretariat Directory</span>
              </div>
              <h2
                className="font-horizon text-lg sm:text-4xl lg:text-5xl font-black uppercase tracking-wider leading-tight text-zinc-950 dark:text-white"
                style={{ fontFamily: 'var(--font-header-horizon)' }}
              >
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

            {/* Department Filter Pills — Fitted 3x2 grid on mobile, 6-col row on desktop (Zero horizontal scrolling!) */}
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5 sm:gap-2 w-full md:w-auto">
              {[
                { label: 'All (8)', value: 'ALL' },
                { label: 'Core & Reg', value: 'OVERALL' },
                { label: 'Sports', value: 'SPORTS' },
                { label: 'Culturals', value: 'CULTURALS' },
                { label: 'Sponsors', value: 'SPONSORSHIPS' },
                { label: 'Stay & PR', value: 'HOSPITALITY' },
              ].map((tab) => (
                <button
                  key={tab.value}
                  type="button"
                  onClick={() => setActiveDeptFilter(tab.value)}
                  className={cn(
                    'px-2 sm:px-3.5 py-2 sm:py-1.5 rounded-xl text-[11px] sm:text-xs font-bold uppercase tracking-wider transition border text-center truncate',
                    activeDeptFilter === tab.value
                      ? 'bg-[var(--color-primary-flame)] text-white border-[var(--color-primary-flame)] shadow-[0_0_20px_rgba(254,90,0,0.35)]'
                      : 'bg-white dark:bg-white/[0.03] text-zinc-700 dark:text-white/70 border-black/10 dark:border-white/10 hover:border-[var(--color-primary-flame)]'
                  )}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* POCs Grid — Dynamic auto-fit container grid */}
          <div
            style={{
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
            }}
            className="grid w-full max-w-full min-w-0 gap-3 sm:gap-5"
          >
            {filteredPocs.map((poc, idx) => {
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
                  transition={{ delay: idx * 0.03, duration: 0.3 }}
                  className="group relative flex flex-col justify-between rounded-2xl border border-white/15 bg-[#09090B] text-white p-3.5 sm:p-6 shadow-[0_14px_35px_rgba(0,0,0,0.28)] transition-all duration-300 hover:border-[var(--color-primary-flame)]"
                >
                  <div>
                    {/* Top Row: Badge & Icon */}
                    <div className="flex items-center justify-between gap-2 mb-2 sm:mb-4">
                      <span className="inline-flex items-center rounded-md bg-[var(--color-primary-flame)]/15 border border-[var(--color-primary-flame)]/40 px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-widest text-[var(--color-primary-flame)]">
                        {poc.badge}
                      </span>
                      <div className="flex h-7 w-7 sm:h-9 sm:w-9 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-[var(--color-primary-flame)] group-hover:bg-[var(--color-primary-flame)] group-hover:text-white transition-colors">
                        <IconComponent className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                      </div>
                    </div>

                    {/* CLICKABLE MAILTO ORGANIZER NAME */}
                    <a
                      href={mailtoHref}
                      title={`Email ${poc.name} (${poc.email})`}
                      className="group/name inline-flex items-center gap-1.5 text-base sm:text-xl font-black uppercase tracking-wide text-white hover:text-[var(--color-primary-flame)] transition-colors focus:outline-none"
                      style={{ fontFamily: 'var(--font-header-spartan)' }}
                    >
                      <span className="underline decoration-[var(--color-primary-flame)]/60 decoration-2 underline-offset-4 group-hover/name:decoration-[var(--color-primary-flame)]">
                        {poc.name}
                      </span>
                      <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[var(--color-primary-flame)] shrink-0" />
                    </a>

                    <p className="mt-0.5 sm:mt-1.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-[var(--color-primary-flame)]">
                      {poc.role}
                    </p>
                    <p className="text-xs text-white/65 font-medium truncate">
                      {poc.department}
                    </p>

                    <p className="mt-2 sm:mt-3.5 text-xs sm:text-sm text-white/85 leading-relaxed line-clamp-2 sm:line-clamp-none">
                      {poc.bio}
                    </p>
                  </div>

                  {/* Contact Details Footer */}
                  <div className="mt-3 sm:mt-5 pt-2.5 sm:pt-4 border-t border-white/10 space-y-1.5 sm:space-y-2.5 text-xs sm:text-sm">
                    <div className="flex items-center justify-between gap-2">
                      <a
                        href={mailtoHref}
                        className="flex items-center gap-1.5 text-white/95 hover:text-[var(--color-primary-flame)] truncate font-mono text-[11px] sm:text-xs transition"
                      >
                        <Mail className="w-3.5 h-3.5 text-[var(--color-primary-flame)] shrink-0" />
                        <span className="truncate">{poc.email}</span>
                      </a>
                      <button
                        type="button"
                        onClick={() => handleCopyEmail(poc.email)}
                        title="Copy email address"
                        className="p-1 sm:p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-white/60 hover:text-white transition shrink-0"
                      >
                        {copiedEmail === poc.email ? (
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>

                    <div className="flex items-center justify-between text-white/85 text-[11px] sm:text-xs">
                      <a
                        href={`tel:${poc.phone.replace(/\s+/g, '')}`}
                        className="flex items-center gap-1.5 hover:text-white transition font-semibold"
                      >
                        <Phone className="w-3.5 h-3.5 text-[var(--color-primary-flame)]" />
                        <span>{poc.phone}</span>
                      </a>
                      <span className="flex items-center gap-1 text-[10px] sm:text-xs text-white/60">
                        <Clock className="w-3 h-3" />
                        {poc.officeHours}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* General Department Desks Strip */}
          <div className="mt-5 sm:mt-10 grid grid-cols-1 md:grid-cols-3 gap-2.5 sm:gap-4">
            {[
              {
                title: 'Central Kurukshetra Secretariat',
                email: 'kurukshetra@flame.edu.in',
                desc: 'Institutional invites, contingent codes & general queries',
              },
              {
                title: 'Sponsorships & Brand Partnerships Desk',
                email: 'sponsorship.kuru@flame.edu.in',
                desc: 'Title sponsorships, stall bookings & pro-night partnerships',
              },
              {
                title: 'Sports & Cultural Technical Desk',
                email: 'events.kurukshetra@flame.edu.in',
                desc: 'Fixture schedules, backing tracks & rulebook clarifications',
              },
            ].map((desk) => (
              <div
                key={desk.email}
                className="flex items-center justify-between rounded-xl border border-white/15 bg-[#09090B] text-white px-3.5 sm:px-5 py-3 sm:py-4 shadow-md"
              >
                <div className="min-w-0">
                  <h3 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white/60">
                    {desk.title}
                  </h3>
                  <a
                    href={`mailto:${desk.email}`}
                    className="mt-0.5 inline-flex items-center gap-1.5 text-xs sm:text-base font-bold text-[var(--color-primary-flame)] hover:underline break-all"
                  >
                    <Mail className="w-3.5 h-3.5 shrink-0" />
                    <span>{desk.email}</span>
                  </a>
                  <p className="mt-0.5 text-[11px] sm:text-xs text-white/55">{desk.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. RESPONSIVE GOOGLE MAPS IFRAME SECTION — FLAME UNIVERSITY (GAT NO. 1270, LAVALE, PUNE) */}
      <section
        id="campus-map"
        className="py-7 sm:py-20 bg-[#FAF9F6] dark:bg-black transition-colors duration-300 pb-10 sm:pb-20"
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-8 items-stretch">
            {/* Campus Address & Travel Directions Card */}
            <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl sm:rounded-3xl border border-white/15 bg-[#09090B] text-white p-4 sm:p-8 shadow-[0_18px_45px_rgba(0,0,0,0.3)]">
              <div className="space-y-3.5 sm:space-y-6">
                <div className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-primary-flame)]/40 bg-[var(--color-primary-flame)]/15 px-3 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[var(--color-primary-flame)]">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Battleground Location</span>
                </div>

                <div>
                  <h2
                    className="font-horizon text-lg sm:text-3xl lg:text-4xl font-black uppercase tracking-wider leading-tight text-white"
                    style={{ fontFamily: 'var(--font-header-horizon)' }}
                  >
                    FLAME UNIVERSITY{' '}
                    <span className="text-[var(--color-primary-flame)]">CAMPUS</span>
                  </h2>
                  <p className="mt-1 sm:mt-2 text-xs sm:text-base text-white/75 leading-relaxed">
                    Gat No. 1270, Lavale, Off. Pune Bangalore Highway, Vadzai, Pune,
                    Maharashtra 412115
                  </p>
                </div>

                {/* Key Reach Metrics */}
                <div className="space-y-2.5 sm:space-y-3 border-t border-white/10 pt-3 sm:pt-5 text-xs sm:text-sm">
                  <div className="flex items-start gap-2.5">
                    <Compass className="w-4 h-4 text-[var(--color-primary-flame)] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-white">
                        From Chandni Chowk (Bavdhan):
                      </span>
                      <p className="text-white/65">
                        ~15 mins drive (7.5 km) via Mulshi Road / Lavale Phata.
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
                  href="https://maps.google.com/?q=FLAME+University+Gat+No.+1270+Lavale+Pune+412115"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-primary-flame)] px-4 sm:px-5 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-[0_0_20px_rgba(254,90,0,0.4)] hover:bg-[#ff6a1a] active:scale-95 transition"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Turn-by-Turn Directions</span>
                </a>
                <span className="font-mono text-[10px] text-white/50 text-center sm:text-right">
                  18.5246° N, 73.7286° E
                </span>
              </div>
            </div>

            {/* Responsive Google Maps Iframe (7 Cols — 230px on mobile so easy to scroll past!) */}
            <div className="lg:col-span-7 relative h-[230px] sm:h-auto sm:min-h-[460px] rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-[var(--color-primary-flame)]/40 bg-black/5 dark:bg-white/5 shadow-[0_0_50px_rgba(254,90,0,0.12)]">
              <iframe
                title="FLAME University Lavale Pune Map"
                src="https://maps.google.com/maps?q=FLAME%20University,%20Gat%20No.%201270,%20Lavale,%20Off.%20Pune%20Bangalore%20Highway,%20Pune%20412115&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 filter contrast-105"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              {/* Floating Top-Left Live Tag over Map */}
              <div className="pointer-events-none absolute top-2.5 left-2.5 sm:top-4 sm:left-4 rounded-xl bg-black/85 backdrop-blur-md border border-white/15 px-2.5 py-1 sm:px-3.5 sm:py-2 text-xs text-white shadow-lg flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-[var(--color-primary-flame)] animate-ping shrink-0" />
                <span className="font-mono uppercase tracking-wider text-[9px] sm:text-[11px] font-bold">
                  FLAME UNIVERSITY • LAVALE, PUNE
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Floating Social Dock */}
          <div className="mt-7 sm:mt-16 flex flex-col items-center justify-center">
            <div className="w-full sm:w-auto grid grid-cols-4 sm:inline-flex items-center justify-center gap-2 sm:gap-10 rounded-2xl border border-white/15 bg-[#09090B] px-3 sm:px-8 py-3 sm:py-4 backdrop-blur-xl shadow-xl">
              <a
                href="https://www.instagram.com/flamekurukshetra"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-1 text-white/80 hover:text-[var(--color-primary-flame)] transition"
              >
                <Share2 className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="font-pixel text-[9px] sm:text-[10px] tracking-widest uppercase">
                  INSTAGRAM
                </span>
              </a>
              <a
                href="https://www.linkedin.com/school/flameuniversity/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-1 text-white/80 hover:text-[var(--color-primary-flame)] transition"
              >
                <Globe className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="font-pixel text-[9px] sm:text-[10px] tracking-widest uppercase">
                  LINKEDIN
                </span>
              </a>
              <a
                href="https://www.youtube.com/@FLAMEUniversityPune"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-1 text-white/80 hover:text-[var(--color-primary-flame)] transition"
              >
                <Video className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="font-pixel text-[9px] sm:text-[10px] tracking-widest uppercase">
                  YOUTUBE
                </span>
              </a>
              <a
                href="/kuru-general-brochure.pdf"
                download="FLAME_Kurukshetra_2027_General_Brochure.pdf"
                className="group flex flex-col items-center gap-1 text-[var(--color-primary-flame)] hover:opacity-80 transition"
              >
                <FileDown className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="font-pixel text-[9px] sm:text-[10px] tracking-widest uppercase">
                  BROCHURE
                </span>
              </a>
            </div>

            <p className="mt-4 sm:mt-6 text-center text-[10px] sm:text-xs text-zinc-500 dark:text-white/40 font-mono px-4">
              © 2027 FLAME Kurukshetra Student Secretariat • FLAME University, Lavale, Pune
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
