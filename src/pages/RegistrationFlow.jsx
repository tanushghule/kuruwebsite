import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  UserPlus,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Plus,
  Trash2,
  ShieldCheck,
  AlertCircle,
  Mail,
  Phone,
  Users,
} from 'lucide-react';
import { SCHEDULE_EVENTS } from '../data/websiteContent';
import { cn } from '../utils/cn';

/**
 * Updated RegistrationFlow:
 * - Visitor option removed completely (Participant / Team registration only).
 * - Interactive Captain / Team POC toggle slider per team member.
 * - Enforces that AT LEAST ONE member has the Captain / POC slider enabled (true).
 * - Only the Team Captain / Team POC's phone number and email are collected (not required for every player in team sports).
 */
export default function RegistrationFlow({ onRegisterSuccess }) {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const [form, setForm] = useState({
    teamName: '',
    shortName: '',
    university: '',
    uniId: 'flame',
    sportCategory: 'SPORTS',
    eventId: 'football',
  });

  // Roster array: each member has a Captain/POC slider (`isCaptain`).
  // Only members with `isCaptain === true` require email & phone!
  const [members, setMembers] = useState([
    {
      id: 'm-1',
      name: '',
      isCaptain: true,
      email: '',
      phone: '',
    },
    {
      id: 'm-2',
      name: '',
      isCaptain: false,
      email: '',
      phone: '',
    },
  ]);

  const handleToggleCaptain = (id) => {
    setErrorMsg('');
    setMembers((prev) =>
      prev.map((m) => (m.id === id ? { ...m, isCaptain: !m.isCaptain } : m))
    );
  };

  const handleMemberChange = (id, field, value) => {
    setErrorMsg('');
    setMembers((prev) =>
      prev.map((m) => (m.id === id ? { ...m, [field]: value } : m))
    );
  };

  const handleAddMember = () => {
    setMembers((prev) => [
      ...prev,
      {
        id: `m-${Date.now()}-${prev.length + 1}`,
        name: '',
        isCaptain: false,
        email: '',
        phone: '',
      },
    ]);
  };

  const handleRemoveMember = (id) => {
    if (members.length <= 1) return;
    setMembers((prev) => prev.filter((m) => m.id !== id));
  };

  const captainMembers = members.filter((m) => m.isCaptain);
  const hasAtLeastOneCaptain = captainMembers.length >= 1;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!hasAtLeastOneCaptain) {
      setErrorMsg(
        'Please toggle the Captain / Team POC slider ON for at least one team member.'
      );
      return;
    }

    // Validate that all marked Captains/POCs have name, email, and phone
    for (const cap of captainMembers) {
      if (!cap.name.trim() || !cap.email.trim() || !cap.phone.trim()) {
        setErrorMsg(
          'Please enter the Full Name, Official Email, and Phone Number for your designated Team Captain / POC.'
        );
        return;
      }
    }

    const primaryCaptain = captainMembers[0];

    const newPoolEntry = {
      id: `reg-${Date.now()}`,
      teamName: form.teamName.trim(),
      shortName: (
        form.shortName.trim() || form.teamName.trim().slice(0, 7)
      ).toUpperCase(),
      university: form.university.trim(),
      uniId: form.uniId,
      captain: primaryCaptain.name.trim(),
      email: primaryCaptain.email.trim(),
      contact: primaryCaptain.phone.trim(),
      rosterCount: members.filter((m) => m.name.trim()).length,
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
    <div className="min-h-screen bg-[#FAF9F6] text-zinc-900 dark:bg-[var(--color-primary-black)] dark:text-[var(--color-primary-white)] bg-blueprint-grid py-6 sm:py-12 px-3 sm:px-6 lg:px-8 pb-24">
      <div className="max-w-4xl mx-auto">
        <div className="rounded-2xl sm:rounded-3xl border border-white/15 bg-[#09090B] text-white p-5 sm:p-10 shadow-2xl space-y-5 sm:space-y-6">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-primary-flame)]/40 bg-[var(--color-primary-flame)]/15 px-3.5 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[var(--color-primary-flame)]">
            <UserPlus className="w-3.5 h-3.5" />
            <span>Official Team &amp; Contingent Registration • 22nd–26th Jan 2027</span>
          </div>

          <div>
            <h1 className="font-horizon text-xl sm:text-4xl font-black uppercase tracking-wider text-white leading-tight">
              REGISTER <span className="text-[var(--color-primary-flame)]">TEAM / CONTINGENT</span>
            </h1>
            <p className="mt-2 text-xs sm:text-sm text-white/75 leading-relaxed">
              Only the <strong className="text-[var(--color-primary-flame)]">Team Captain / Team POC&apos;s phone number and email</strong> are required for team events—you do not need to enter phone numbers or emails for every squad member. Use the <strong className="text-white">Captain / POC slider</strong> below (at least one must be enabled).
            </p>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6 pt-1">
              {/* 1. Contingent & Event Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-white/80 mb-1.5">
                    Team / Squad Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.teamName}
                    onChange={(e) => setForm({ ...form, teamName: e.target.value })}
                    placeholder="e.g., BITS Pilani Hawks"
                    className="w-full rounded-xl border border-white/20 bg-white/5 px-3.5 py-3 text-sm text-white focus:border-[var(--color-primary-flame)] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-white/80 mb-1.5">
                    Short Ticker Code (Max 8 chars) *
                  </label>
                  <input
                    type="text"
                    required
                    maxLength={8}
                    value={form.shortName}
                    onChange={(e) => setForm({ ...form, shortName: e.target.value })}
                    placeholder="e.g., BITS"
                    className="w-full rounded-xl border border-white/20 bg-white/5 px-3.5 py-3 text-sm uppercase text-white focus:border-[var(--color-primary-flame)] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-white/80 mb-1.5">
                    University / College Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.university}
                    onChange={(e) => setForm({ ...form, university: e.target.value })}
                    placeholder="e.g., BITS Pilani"
                    className="w-full rounded-xl border border-white/20 bg-white/5 px-3.5 py-3 text-sm text-white focus:border-[var(--color-primary-flame)] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-white/80 mb-1.5">
                    Select Event Discipline *
                  </label>
                  <select
                    value={form.eventId}
                    onChange={(e) => setForm({ ...form, eventId: e.target.value })}
                    className="w-full rounded-xl border border-white/20 bg-[#12141C] px-3.5 py-3 text-sm font-semibold text-white focus:border-[var(--color-primary-flame)] focus:outline-none"
                  >
                    {SCHEDULE_EVENTS.map((ev) => (
                      <option key={ev.id} value={ev.id}>
                        {ev.name} ({ev.categoryLabel})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* 2. Team Roster & Captain / POC Slider Section */}
              <div className="rounded-2xl border border-white/15 bg-[#12141C] p-4 sm:p-6 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-[var(--color-primary-flame)]" />
                      <h2 className="font-horizon text-base sm:text-lg font-black uppercase tracking-wide text-white">
                        TEAM ROSTER &amp; CAPTAIN POC SLIDER
                      </h2>
                    </div>
                    <p className="text-xs text-white/65 mt-1">
                      Toggle the <strong className="text-[var(--color-primary-flame)]">Captain / Team POC</strong> slider ON for at least one member. Phone &amp; Email are only asked for the Captain/POC.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={handleAddMember}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 px-3.5 py-2 text-xs font-extrabold uppercase tracking-wider text-white transition shrink-0 self-start sm:self-auto"
                  >
                    <Plus className="w-3.5 h-3.5 text-[var(--color-primary-flame)]" />
                    <span>Add Team Member</span>
                  </button>
                </div>

                {/* Validation Banner if 0 Captains selected */}
                {!hasAtLeastOneCaptain && (
                  <div className="flex items-center gap-2.5 rounded-xl border border-rose-500/40 bg-rose-500/10 px-4 py-3 text-xs font-semibold text-rose-200">
                    <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
                    <span>
                      At least one member must have the <strong>Captain / Team POC</strong> slider enabled.
                    </span>
                  </div>
                )}

                {errorMsg && (
                  <div className="flex items-center gap-2.5 rounded-xl border border-rose-500/40 bg-rose-500/10 px-4 py-3 text-xs font-semibold text-rose-200">
                    <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                {/* Member Rows */}
                <div className="space-y-3">
                  {members.map((member, index) => (
                    <div
                      key={member.id}
                      className={cn(
                        'rounded-xl border p-4 transition-all',
                        member.isCaptain
                          ? 'border-[var(--color-primary-flame)]/60 bg-[var(--color-primary-flame)]/[0.07]'
                          : 'border-white/10 bg-white/[0.02]'
                      )}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        {/* Player Name Input */}
                        <div className="flex-1">
                          <label className="block text-[11px] font-bold uppercase tracking-wider text-white/70 mb-1">
                            {member.isCaptain
                              ? `Member #${index + 1} — Captain / Team POC Name *`
                              : `Member #${index + 1} — Player Full Name *`}
                          </label>
                          <input
                            type="text"
                            required
                            value={member.name}
                            onChange={(e) =>
                              handleMemberChange(member.id, 'name', e.target.value)
                            }
                            placeholder={
                              member.isCaptain
                                ? 'e.g., Siddharth Mehta (Captain / POC)'
                                : 'e.g., Team Player Name (No phone/email needed)'
                            }
                            className="w-full rounded-lg border border-white/15 bg-black/50 px-3.5 py-2.5 text-sm text-white focus:border-[var(--color-primary-flame)] focus:outline-none"
                          />
                        </div>

                        {/* Captain / POC Slider Toggle */}
                        <div className="flex items-center justify-between sm:justify-end gap-3 pt-1 sm:pt-5 shrink-0">
                          <label
                            htmlFor={`captain-slider-${member.id}`}
                            className="flex items-center gap-2.5 cursor-pointer select-none"
                          >
                            <span
                              className={cn(
                                'text-xs font-extrabold uppercase tracking-wider',
                                member.isCaptain
                                  ? 'text-[var(--color-primary-flame)]'
                                  : 'text-white/60'
                              )}
                            >
                              {member.isCaptain ? 'Captain / POC (Active)' : 'Captain / POC'}
                            </span>
                            <button
                              id={`captain-slider-${member.id}`}
                              type="button"
                              role="switch"
                              aria-checked={member.isCaptain}
                              onClick={() => handleToggleCaptain(member.id)}
                              className={cn(
                                'relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none',
                                member.isCaptain
                                  ? 'bg-[var(--color-primary-flame)]'
                                  : 'bg-white/20'
                              )}
                            >
                              <span
                                className={cn(
                                  'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out',
                                  member.isCaptain ? 'translate-x-5' : 'translate-x-0'
                                )}
                              />
                            </button>
                          </label>

                          {members.length > 1 && (
                            <button
                              type="button"
                              onClick={() => handleRemoveMember(member.id)}
                              title="Remove member"
                              className="p-2 rounded-lg bg-white/5 hover:bg-rose-500/20 text-white/50 hover:text-rose-300 transition"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                      </div>

                      {/* Captain / POC Contact Fields (Shown ONLY when Captain Slider is TRUE) */}
                      {member.isCaptain && (
                        <div className="mt-3.5 pt-3.5 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div>
                            <label className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[var(--color-primary-flame)] mb-1">
                              <Mail className="w-3.5 h-3.5" />
                              <span>Captain / POC Email ID *</span>
                            </label>
                            <input
                              type="email"
                              required
                              value={member.email}
                              onChange={(e) =>
                                handleMemberChange(member.id, 'email', e.target.value)
                              }
                              placeholder="captain@university.edu.in"
                              className="w-full rounded-lg border border-white/20 bg-black/60 px-3.5 py-2.5 text-sm text-white focus:border-[var(--color-primary-flame)] focus:outline-none"
                            />
                          </div>

                          <div>
                            <label className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[var(--color-primary-flame)] mb-1">
                              <Phone className="w-3.5 h-3.5" />
                              <span>Captain / POC WhatsApp Number *</span>
                            </label>
                            <input
                              type="tel"
                              required
                              value={member.phone}
                              onChange={(e) =>
                                handleMemberChange(member.id, 'phone', e.target.value)
                              }
                              placeholder="+91 98201 55432"
                              className="w-full rounded-lg border border-white/20 bg-black/60 px-3.5 py-2.5 text-sm text-white focus:border-[var(--color-primary-flame)] focus:outline-none"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                disabled={!hasAtLeastOneCaptain}
                className={cn(
                  'w-full flex items-center justify-center gap-2 rounded-xl sm:rounded-2xl px-6 py-4 text-xs sm:text-base font-black uppercase tracking-wider text-white transition',
                  hasAtLeastOneCaptain
                    ? 'bg-[var(--color-primary-flame)] hover:bg-[#ff6a1a] shadow-[0_0_30px_rgba(254,90,0,0.45)] cursor-pointer'
                    : 'bg-white/10 text-white/40 cursor-not-allowed'
                )}
              >
                <Sparkles className="w-5 h-5 shrink-0" />
                <span>Complete Team Registration</span>
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-2xl border border-emerald-500/40 bg-emerald-500/10 p-6 text-center space-y-4"
            >
              <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
              <h2 className="font-horizon text-lg sm:text-2xl font-black uppercase text-white">
                REGISTRATION CONFIRMED!
              </h2>
              <p className="text-xs sm:text-base text-white/85 max-w-lg mx-auto">
                <strong>{form.teamName}</strong> ({form.university}) has been registered with{' '}
                <strong>{captainMembers.map((c) => c.name).join(', ')}</strong> as the designated Team Captain / POC.
              </p>
              <div className="flex flex-wrap justify-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => navigate('/events')}
                  className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary-flame)] px-5 py-3 text-xs sm:text-sm font-black uppercase text-white"
                >
                  <span>Explore More Events</span>
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
                      eventId: 'football',
                    });
                  }}
                  className="rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-xs sm:text-sm font-bold uppercase text-white"
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
