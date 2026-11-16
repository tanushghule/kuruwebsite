import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  Menu,
  X,
  FileText,
  Sun,
  Moon,
  Radio,
  Lock,
  LogOut,
  Sliders,
  Trophy,
  UserPlus,
  Mail,
  Calendar,
  ChevronDown,
  Camera,
  Users,
  BookOpen,
  HelpCircle,
  Sparkles,
  Briefcase,
  Music,
} from 'lucide-react';
import { cn } from '../utils/cn';
import KurukshetraLogo from './KurukshetraLogo';

export default function Navbar({
  theme = 'dark',
  onToggleTheme,
  isAdmin = false,
  onToggleAdmin,
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [eventsSubtabOpen, setEventsSubtabOpen] = useState(false);
  const [arenaDropdownOpen, setArenaDropdownOpen] = useState(false);
  const [peopleDropdownOpen, setPeopleDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const eventsSubtabRef = useRef(null);
  const arenaDropdownRef = useRef(null);
  const peopleDropdownRef = useRef(null);

  // Close menus on route/search change
  useEffect(() => {
    setMobileMenuOpen(false);
    setEventsSubtabOpen(false);
    setArenaDropdownOpen(false);
    setPeopleDropdownOpen(false);
  }, [location.pathname, location.search]);

  // Click outside listener for dropdowns
  useEffect(() => {
    function handleClickOutside(event) {
      if (eventsSubtabRef.current && !eventsSubtabRef.current.contains(event.target)) {
        setEventsSubtabOpen(false);
      }
      if (arenaDropdownRef.current && !arenaDropdownRef.current.contains(event.target)) {
        setArenaDropdownOpen(false);
      }
      if (peopleDropdownRef.current && !peopleDropdownRef.current.contains(event.target)) {
        setPeopleDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleAdminButtonClick = () => {
    if (!isAdmin) {
      onToggleAdmin();
      navigate('/admin');
    } else {
      onToggleAdmin();
      if (location.pathname === '/admin') {
        navigate('/live-events');
      }
    }
  };

  const isCurrent = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#09090B]/95 text-white backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.45)] transition-colors">
      <div className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-2 sm:gap-4">
        {/* Left: Official Kurukshetra Brand Logo & Full Un-Truncated Name (Page 2 Fix) */}
        <Link
          to="/"
          className="group flex items-center gap-2.5 sm:gap-3.5 focus:outline-none shrink-0"
        >
          <div className="relative flex shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-105">
            <KurukshetraLogo className="h-11 w-11 sm:h-14 sm:w-14" />
          </div>
          <div className="flex flex-col shrink-0">
            <span className="font-horizon text-xs xs:text-sm sm:text-base lg:text-lg xl:text-xl font-black uppercase leading-tight text-white tracking-wider whitespace-nowrap">
              FLAME <span className="text-[var(--color-primary-flame)]">KURUKSHETRA</span>
            </span>
            <span className="hidden sm:block text-[10px] lg:text-[11px] tracking-[0.16em] uppercase text-white/65 font-medium mt-0.5 whitespace-nowrap">
              The Conclave of Champions
            </span>
          </div>
        </Link>

        {/* Center: Desktop Navigation Bar with Events Subtab (Page 3 Fix) */}
        <nav className="hidden xl:flex items-center gap-1 rounded-full border border-white/15 bg-white/[0.04] p-1.5 backdrop-blur-md shrink-0">
          {/* 1. Home Link */}
          <Link
            to="/"
            className={cn(
              'inline-flex shrink-0 items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 whitespace-nowrap',
              location.pathname === '/'
                ? 'bg-[var(--color-primary-flame)] text-white shadow-[0_0_15px_rgba(254,90,0,0.5)]'
                : 'text-white/85 hover:text-white hover:bg-white/10'
            )}
          >
            Home
          </Link>

          {/* 2. Events Subtab Dropdown (Sports Events, Cultural Events, Management Events — per Page 3 & events1.png) */}
          <div
            className="relative shrink-0"
            ref={eventsSubtabRef}
            onMouseEnter={() => setEventsSubtabOpen(true)}
            onMouseLeave={() => setEventsSubtabOpen(false)}
          >
            <button
              type="button"
              onClick={() => setEventsSubtabOpen((prev) => !prev)}
              className={cn(
                'inline-flex shrink-0 items-center gap-1 px-3.5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 whitespace-nowrap',
                isCurrent('/events')
                  ? 'bg-[var(--color-primary-flame)] text-white shadow-[0_0_15px_rgba(254,90,0,0.5)]'
                  : 'text-white/85 hover:text-white hover:bg-white/10'
              )}
            >
              <span>Events</span>
              <ChevronDown
                className={cn(
                  'w-3.5 h-3.5 transition-transform duration-200',
                  eventsSubtabOpen ? 'rotate-180' : ''
                )}
              />
            </button>

            {eventsSubtabOpen && (
              <div className="absolute left-0 pt-2 w-60 z-50">
                <div className="rounded-2xl border border-white/15 bg-[#12131A] p-2 shadow-2xl backdrop-blur-xl animate-in fade-in zoom-in-95 duration-150 divide-y divide-white/10">
                  <div className="pb-1">
                    <Link
                      to="/events"
                      className="flex items-center justify-between rounded-xl px-3.5 py-2.5 text-xs font-extrabold uppercase tracking-wider text-[var(--color-primary-flame)] hover:bg-white/10 transition"
                    >
                      <span>All Events Directory</span>
                      <Sparkles className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                  <div className="pt-1 flex flex-col gap-0.5">
                    <Link
                      to="/events?category=sports"
                      className="flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-xs font-bold text-white hover:bg-white/10 hover:text-[var(--color-primary-flame)] transition"
                    >
                      <Trophy className="w-4 h-4 text-[var(--color-primary-flame)] shrink-0" />
                      <span>Sport Events</span>
                    </Link>
                    <Link
                      to="/events?category=cultural"
                      className="flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-xs font-bold text-white hover:bg-white/10 hover:text-[var(--color-primary-flame)] transition"
                    >
                      <Music className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>Cultural Events</span>
                    </Link>
                    <Link
                      to="/events?category=management"
                      className="flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-xs font-bold text-white hover:bg-white/10 hover:text-[var(--color-primary-flame)] transition"
                    >
                      <Briefcase className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>Management Events</span>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 3. Schedule Link */}
          <Link
            to="/schedule"
            className={cn(
              'inline-flex shrink-0 items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 whitespace-nowrap',
              isCurrent('/schedule')
                ? 'bg-[var(--color-primary-flame)] text-white shadow-[0_0_15px_rgba(254,90,0,0.5)]'
                : 'text-white/85 hover:text-white hover:bg-white/10'
            )}
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Schedule</span>
          </Link>

          {/* 4. Live Arena Dropdown */}
          <div className="relative shrink-0" ref={arenaDropdownRef}>
            <button
              type="button"
              onClick={() => setArenaDropdownOpen((prev) => !prev)}
              className={cn(
                'inline-flex shrink-0 items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 whitespace-nowrap',
                isCurrent('/live-events')
                  ? 'bg-[var(--color-primary-flame)] text-white shadow-[0_0_15px_rgba(254,90,0,0.5)]'
                  : 'text-white/85 hover:text-white hover:bg-white/10'
              )}
            >
              <span className="h-2 w-2 rounded-full bg-[var(--color-primary-flame)] animate-pulse" />
              <span>Live Arena</span>
              <ChevronDown
                className={cn(
                  'w-3.5 h-3.5 transition-transform duration-200',
                  arenaDropdownOpen ? 'rotate-180' : ''
                )}
              />
            </button>

            {arenaDropdownOpen && (
              <div className="absolute left-0 mt-2 w-72 rounded-2xl border border-white/15 bg-[#12131A] p-2 shadow-2xl backdrop-blur-xl animate-in fade-in zoom-in-95 duration-150">
                <div className="text-[10px] uppercase tracking-wider text-white/50 px-3 py-1.5 font-bold">
                  Match Centers &amp; Scoring
                </div>
                <Link
                  to="/live-events"
                  className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-xs font-bold text-white hover:bg-white/10 transition"
                >
                  <Trophy className="w-4 h-4 text-[var(--color-primary-flame)]" />
                  <div>
                    <div>Live Battleground &amp; Tally</div>
                    <div className="text-[11px] font-normal text-white/60">
                      Real-time scores &amp; university standings
                    </div>
                  </div>
                </Link>
                <Link
                  to="/live-events/ultimate-frisbee-final"
                  className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-xs font-bold text-white hover:bg-white/10 transition"
                >
                  <Radio className="w-4 h-4 text-emerald-400" />
                  <div>
                    <div>Match Center (Gold Final)</div>
                    <div className="text-[11px] font-normal text-white/60">
                      Court-side interactive scoreboard
                    </div>
                  </div>
                </Link>
              </div>
            )}
          </div>

          {/* 5. Festival Hub Dropdown */}
          <div className="relative shrink-0" ref={peopleDropdownRef}>
            <button
              type="button"
              onClick={() => setPeopleDropdownOpen((prev) => !prev)}
              className={cn(
                'inline-flex shrink-0 items-center gap-1 px-3.5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 whitespace-nowrap',
                isCurrent('/album') || isCurrent('/committee') || isCurrent('/blog')
                  ? 'bg-[var(--color-primary-flame)] text-white shadow-[0_0_15px_rgba(254,90,0,0.5)]'
                  : 'text-white/85 hover:text-white hover:bg-white/10'
              )}
            >
              <span>Festival Hub</span>
              <ChevronDown
                className={cn(
                  'w-3.5 h-3.5 transition-transform duration-200',
                  peopleDropdownOpen ? 'rotate-180' : ''
                )}
              />
            </button>

            {peopleDropdownOpen && (
              <div className="absolute left-0 mt-2 w-64 rounded-2xl border border-white/15 bg-[#12131A] p-2 shadow-2xl backdrop-blur-xl animate-in fade-in zoom-in-95 duration-150">
                <Link
                  to="/committee"
                  className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-xs font-bold text-white hover:bg-white/10 transition"
                >
                  <Users className="w-4 h-4 text-[var(--color-primary-flame)]" />
                  <div>
                    <div>Meet the OC</div>
                    <div className="text-[11px] font-normal text-white/60">
                      Advisors, EC &amp; CC Heads
                    </div>
                  </div>
                </Link>
                <Link
                  to="/album"
                  className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-xs font-bold text-white hover:bg-white/10 transition"
                >
                  <Camera className="w-4 h-4 text-cyan-400" />
                  <div>
                    <div>Photo Vault &amp; Media</div>
                    <div className="text-[11px] font-normal text-white/60">
                      Relive match moments &amp; albums
                    </div>
                  </div>
                </Link>
                <Link
                  to="/blog"
                  className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-xs font-bold text-white hover:bg-white/10 transition"
                >
                  <BookOpen className="w-4 h-4 text-amber-400" />
                  <div>
                    <div>Chronicles &amp; News</div>
                    <div className="text-[11px] font-normal text-white/60">
                      Fest stories, guides &amp; interviews
                    </div>
                  </div>
                </Link>
              </div>
            )}
          </div>

          {/* 6. FAQ Link */}
          <Link
            to="/faq"
            className={cn(
              'inline-flex shrink-0 items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 whitespace-nowrap',
              isCurrent('/faq')
                ? 'bg-[var(--color-primary-flame)] text-white shadow-[0_0_15px_rgba(254,90,0,0.5)]'
                : 'text-white/85 hover:text-white hover:bg-white/10'
            )}
          >
            FAQ
          </Link>

          {/* 7. Contact Link */}
          <Link
            to="/contact"
            className={cn(
              'inline-flex shrink-0 items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 whitespace-nowrap',
              isCurrent('/contact')
                ? 'bg-[var(--color-primary-flame)] text-white shadow-[0_0_15px_rgba(254,90,0,0.5)]'
                : 'text-white/85 hover:text-white hover:bg-white/10'
            )}
          >
            Contact
          </Link>

          {/* 8. Admin Link (If Admin Mode Active) */}
          {isAdmin && (
            <Link
              to="/admin"
              className={cn(
                'inline-flex shrink-0 items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 whitespace-nowrap',
                isCurrent('/admin')
                  ? 'bg-[#FAAD36] text-black shadow-[0_0_15px_rgba(250,173,54,0.5)]'
                  : 'bg-[#FAAD36]/20 text-[#FAAD36] border border-[#FAAD36]/40 hover:bg-[#FAAD36] hover:text-black'
              )}
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>Admin</span>
            </Link>
          )}
        </nav>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
          {/* Theme Toggle Button */}
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            className="inline-flex items-center justify-center h-9 w-9 sm:h-10 sm:w-10 rounded-xl border border-white/20 bg-white/10 hover:bg-white/20 text-white transition"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
          >
            {theme === 'dark' ? (
              <Sun className="h-4 w-4 text-[var(--color-accent-yellow)]" />
            ) : (
              <Moon className="h-4 w-4 text-sky-400" />
            )}
          </button>

          {/* Admin Toggle Button */}
          <button
            type="button"
            onClick={handleAdminButtonClick}
            className={cn(
              'hidden sm:inline-flex items-center gap-2 rounded-xl px-3.5 py-2.5 text-xs font-bold uppercase tracking-wider transition shadow-sm whitespace-nowrap',
              isAdmin
                ? 'bg-rose-600/20 text-rose-300 border border-rose-500/50 hover:bg-rose-600 hover:text-white'
                : 'bg-white/10 border border-white/20 hover:bg-white/20 text-white'
            )}
          >
            {isAdmin ? (
              <>
                <LogOut className="h-3.5 w-3.5" />
                <span className="hidden xl:inline">Exit Admin</span>
              </>
            ) : (
              <>
                <Lock className="h-3.5 w-3.5 text-[var(--color-accent-yellow)]" />
                <span className="hidden xl:inline">Admin Login</span>
              </>
            )}
          </button>

          {/* Register Contingent Primary CTA */}
          <Link
            to="/register"
            className="rdr-btn inline-flex items-center gap-1.5 sm:gap-2 bg-[var(--color-primary-flame)] hover:bg-[#ea5401] px-3 sm:px-5 py-2 sm:py-2.5 text-[11px] sm:text-xs lg:text-sm font-extrabold uppercase tracking-wider text-white shadow-[0_0_24px_rgba(254,90,0,0.5)] transition duration-200 active:scale-95 whitespace-nowrap"
          >
            <UserPlus className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
            <span>Register</span>
          </Link>

          {/* Hamburger Button for Mobile / Tablet */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            className="xl:hidden inline-flex items-center justify-center h-9 w-9 sm:h-10 sm:w-10 rounded-xl border border-white/20 bg-white/10 text-white hover:bg-white/20 transition"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-Out Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-0 top-[64px] sm:top-[80px] bottom-0 bg-[#09090B]/98 backdrop-blur-2xl border-t border-white/10 p-5 overflow-y-auto z-50 flex flex-col justify-between">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              <Link
                to="/"
                className={cn(
                  'flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-wider',
                  location.pathname === '/'
                    ? 'bg-[var(--color-primary-flame)] text-white'
                    : 'text-white/85 hover:bg-white/10'
                )}
              >
                <span>Home</span>
              </Link>

              {/* Events + Subtabs in Mobile Drawer */}
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-2">
                <Link
                  to="/events"
                  className={cn(
                    'flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-bold uppercase tracking-wider',
                    isCurrent('/events')
                      ? 'bg-[var(--color-primary-flame)] text-white'
                      : 'text-white hover:bg-white/10'
                  )}
                >
                  <span className="flex items-center gap-2.5">
                    <Sparkles className="w-4 h-4 text-[var(--color-primary-flame)]" />
                    <span>Events</span>
                  </span>
                </Link>
                <div className="mt-1.5 pl-4 grid grid-cols-1 gap-1 border-l border-white/15 ml-3">
                  <Link
                    to="/events?category=sports"
                    className="px-3 py-2 rounded-lg text-xs font-bold uppercase tracking-wider text-white/80 hover:text-white hover:bg-white/10"
                  >
                    • Sport Events
                  </Link>
                  <Link
                    to="/events?category=cultural"
                    className="px-3 py-2 rounded-lg text-xs font-bold uppercase tracking-wider text-white/80 hover:text-white hover:bg-white/10"
                  >
                    • Cultural Events
                  </Link>
                  <Link
                    to="/events?category=management"
                    className="px-3 py-2 rounded-lg text-xs font-bold uppercase tracking-wider text-white/80 hover:text-white hover:bg-white/10"
                  >
                    • Management Events
                  </Link>
                </div>
              </div>

              <Link
                to="/schedule"
                className={cn(
                  'flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-wider',
                  isCurrent('/schedule')
                    ? 'bg-[var(--color-primary-flame)] text-white'
                    : 'text-white/85 hover:bg-white/10'
                )}
              >
                <span className="flex items-center gap-2.5">
                  <Calendar className="w-4 h-4 text-[var(--color-primary-flame)]" />
                  <span>Tournament Schedule</span>
                </span>
              </Link>

              <Link
                to="/live-events"
                className={cn(
                  'flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-wider',
                  isCurrent('/live-events')
                    ? 'bg-[var(--color-primary-flame)] text-white'
                    : 'text-white/85 hover:bg-white/10'
                )}
              >
                <span className="flex items-center gap-2.5">
                  <Trophy className="w-4 h-4 text-[var(--color-primary-flame)]" />
                  <span>Live Arena &amp; Tally</span>
                </span>
                <span className="h-2 w-2 rounded-full bg-[var(--color-primary-flame)] animate-ping" />
              </Link>

              <Link
                to="/committee"
                className={cn(
                  'flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-wider',
                  isCurrent('/committee')
                    ? 'bg-[var(--color-primary-flame)] text-white'
                    : 'text-white/85 hover:bg-white/10'
                )}
              >
                <span className="flex items-center gap-2.5">
                  <Users className="w-4 h-4 text-[var(--color-accent-yellow)]" />
                  <span>Meet the OC</span>
                </span>
              </Link>

              <Link
                to="/album"
                className={cn(
                  'flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-wider',
                  isCurrent('/album')
                    ? 'bg-[var(--color-primary-flame)] text-white'
                    : 'text-white/85 hover:bg-white/10'
                )}
              >
                <span className="flex items-center gap-2.5">
                  <Camera className="w-4 h-4 text-cyan-400" />
                  <span>Photo Vault &amp; Album</span>
                </span>
              </Link>

              <Link
                to="/blog"
                className={cn(
                  'flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-wider',
                  isCurrent('/blog')
                    ? 'bg-[var(--color-primary-flame)] text-white'
                    : 'text-white/85 hover:bg-white/10'
                )}
              >
                <span className="flex items-center gap-2.5">
                  <BookOpen className="w-4 h-4 text-amber-400" />
                  <span>Stories &amp; Chronicles</span>
                </span>
              </Link>

              <Link
                to="/faq"
                className={cn(
                  'flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-wider',
                  isCurrent('/faq')
                    ? 'bg-[var(--color-primary-flame)] text-white'
                    : 'text-white/85 hover:bg-white/10'
                )}
              >
                <span className="flex items-center gap-2.5">
                  <HelpCircle className="w-4 h-4 text-sky-400" />
                  <span>Frequently Asked Questions</span>
                </span>
              </Link>

              <Link
                to="/contact"
                className={cn(
                  'flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-wider',
                  isCurrent('/contact')
                    ? 'bg-[var(--color-primary-flame)] text-white'
                    : 'text-white/85 hover:bg-white/10'
                )}
              >
                <span className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[var(--color-primary-flame)]" />
                  <span>Contact &amp; War Room</span>
                </span>
              </Link>
            </div>
          </div>

          {/* Mobile Footer CTAs */}
          <div className="flex flex-col gap-3 pt-6 border-t border-white/10">
            <Link
              to="/register"
              className="rdr-btn w-full flex items-center justify-center gap-2 py-3.5 text-sm font-extrabold uppercase tracking-wider bg-[var(--color-primary-flame)] text-white shadow-[0_0_24px_rgba(254,90,0,0.45)]"
            >
              <UserPlus className="w-4 h-4" />
              <span>Register Now</span>
            </Link>

            <button
              type="button"
              onClick={handleAdminButtonClick}
              className={cn(
                'w-full flex items-center justify-center gap-2 rounded-xl py-3 text-xs font-bold uppercase tracking-wider transition border',
                isAdmin
                  ? 'bg-rose-600/20 text-rose-300 border-rose-500/50'
                  : 'bg-white/5 border-white/15 text-white/80'
              )}
            >
              {isAdmin ? 'Exit Admin Mode' : 'Admin Login (Scorer / Council)'}
            </button>

            <a
              href="/kuru-general-brochure.pdf"
              download="FLAME_Kurukshetra_2027_General_Brochure.pdf"
              className="w-full flex items-center justify-center gap-2 rounded-xl py-3 text-xs font-bold uppercase tracking-wider bg-white/5 border border-white/10 text-white/70"
            >
              <FileText className="w-4 h-4 text-[var(--color-primary-flame)]" />
              <span>Download Fest Brochure</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
