import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  UserPlus,
  CheckCircle2,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

export default function RegistrationFlow({ onRegisterSuccess }) {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    teamName: '',
    shortName: '',
    university: '',
    uniId: 'flame',
    sportCategory: 'SPORTS',
    captain: '',
    email: '',
    contact: '',
    rosterSize: '12',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPoolEntry = {
      id: `reg-${Date.now()}`,
      teamName: form.teamName.trim(),
      shortName: (
        form.shortName.trim() || form.teamName.trim().slice(0, 7)
      ).toUpperCase(),
      university: form.university.trim(),
      uniId: form.uniId,
      captain: form.captain.trim(),
      contact: form.contact.trim(),
      source: 'Auto-Synced Portal Registration',
      wins: 0,
      losses: 0,
    };

    if (onRegisterSuccess) {
      onRegisterSuccess(newPoolEntry);
    }
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-zinc-900 dark:bg-[var(--color-primary-black)] dark:text-[var(--color-primary-white)] bg-blueprint-grid py-5 sm:py-12 px-3 sm:px-6 lg:px-8 pb-24">
      <div className="max-w-3xl mx-auto">
        <div className="rounded-2xl sm:rounded-3xl border border-white/15 bg-[#09090B] text-white p-4 sm:p-10 shadow-2xl space-y-4 sm:space-y-6">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-primary-flame)]/40 bg-[var(--color-primary-flame)]/15 px-3 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[var(--color-primary-flame)]">
            <UserPlus className="w-3.5 h-3.5" />
            <span>Official Contingent Registration • Auto-Pool Sync</span>
          </div>

          <h1
            className="font-horizon text-lg sm:text-4xl font-black uppercase tracking-wider text-white leading-tight"
            style={{ fontFamily: 'var(--font-header-horizon)' }}
          >
            REGISTER <span className="text-[var(--color-primary-flame)]">TEAM / CONTINGENT</span>
          </h1>
          <p className="text-xs sm:text-base text-white/75">
            Once your registration succeeds, your team is{' '}
            <strong className="text-[#FAAD36]">
              automatically added to the Tournament Seeding Pool
            </strong>{' '}
            for instant bracket generation.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 pt-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block font-mono text-[10px] sm:text-xs font-bold uppercase text-white/80 mb-1">
                    Team / Squad Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.teamName}
                    onChange={(e) => setForm({ ...form, teamName: e.target.value })}
                    placeholder="e.g., BITS Pilani Hawks"
                    className="w-full rounded-xl border border-white/20 bg-white/5 px-3.5 py-2.5 sm:py-3 text-base text-white focus:border-[var(--color-primary-flame)] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[10px] sm:text-xs font-bold uppercase text-white/80 mb-1">
                    Short Ticker Code (Max 8 chars) *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.shortName}
                    onChange={(e) => setForm({ ...form, shortName: e.target.value })}
                    placeholder="e.g., BITS"
                    className="w-full rounded-xl border border-white/20 bg-white/5 px-3.5 py-2.5 sm:py-3 text-base uppercase text-white focus:border-[var(--color-primary-flame)] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[10px] sm:text-xs font-bold uppercase text-white/80 mb-1">
                    University / College Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.university}
                    onChange={(e) => setForm({ ...form, university: e.target.value })}
                    placeholder="e.g., BITS Pilani"
                    className="w-full rounded-xl border border-white/20 bg-white/5 px-3.5 py-2.5 sm:py-3 text-base text-white focus:border-[var(--color-primary-flame)] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[10px] sm:text-xs font-bold uppercase text-white/80 mb-1">
                    Link to Medal Tally University
                  </label>
                  <select
                    value={form.uniId}
                    onChange={(e) => setForm({ ...form, uniId: e.target.value })}
                    className="w-full rounded-xl border border-white/20 bg-[#121216] px-3.5 py-2.5 sm:py-3 text-sm font-bold text-white"
                  >
                    <option value="flame">FLAME University, Pune</option>
                    <option value="symbiosis">Symbiosis International (SIU)</option>
                    <option value="iitb">IIT Bombay</option>
                    <option value="nmims">NMIMS Mumbai</option>
                    <option value="stxaviers">St. Xavier&apos;s College, Mumbai</option>
                    <option value="coep">COEP Technological University</option>
                    <option value="ashoka">Ashoka University</option>
                    <option value="christ">Christ University, Bengaluru</option>
                  </select>
                </div>

                <div>
                  <label className="block font-mono text-[10px] sm:text-xs font-bold uppercase text-white/80 mb-1">
                    Captain / POC Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.captain}
                    onChange={(e) => setForm({ ...form, captain: e.target.value })}
                    placeholder="e.g., Siddharth Mehta"
                    className="w-full rounded-xl border border-white/20 bg-white/5 px-3.5 py-2.5 sm:py-3 text-base text-white focus:border-[var(--color-primary-flame)] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[10px] sm:text-xs font-bold uppercase text-white/80 mb-1">
                    Captain WhatsApp / Contact *
                  </label>
                  <input
                    type="tel"
                    required
                    value={form.contact}
                    onChange={(e) => setForm({ ...form, contact: e.target.value })}
                    placeholder="+91 98201 55432"
                    className="w-full rounded-xl border border-white/20 bg-white/5 px-3.5 py-2.5 sm:py-3 text-base text-white focus:border-[var(--color-primary-flame)] focus:outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-2 flex items-center justify-center gap-2 rounded-xl sm:rounded-2xl bg-[var(--color-primary-flame)] hover:bg-[#ff6a1a] px-4 sm:px-6 py-3.5 sm:py-4 text-xs sm:text-base font-black uppercase tracking-wider text-white shadow-[0_0_30px_rgba(254,90,0,0.45)] transition"
              >
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                <span>Complete Registration &amp; Sync Pool</span>
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-2xl border border-emerald-500/40 bg-emerald-500/10 p-5 sm:p-6 text-center space-y-3 sm:space-y-4"
            >
              <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12 text-emerald-400 mx-auto" />
              <h2 className="font-horizon text-base sm:text-2xl font-black uppercase text-white">
                REGISTRATION CONFIRMED &amp; SYNCED!
              </h2>
              <p className="text-xs sm:text-base text-white/85 max-w-lg mx-auto">
                <strong>{form.teamName}</strong> ({form.university}) has been automatically
                added to the Tournament Seeding Pool.
              </p>
              <div className="flex flex-wrap justify-center gap-2.5 pt-2">
                <button
                  type="button"
                  onClick={() => navigate('/live-events')}
                  className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary-flame)] px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-black uppercase text-white"
                >
                  <span>Go to Live Events</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setForm({
                      teamName: '',
                      shortName: '',
                      university: '',
                      uniId: 'flame',
                      sportCategory: 'SPORTS',
                      captain: '',
                      email: '',
                      contact: '',
                      rosterSize: '12',
                    });
                  }}
                  className="rounded-xl border border-white/20 bg-white/10 px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-bold uppercase text-white"
                >
                  Register Another Team
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
