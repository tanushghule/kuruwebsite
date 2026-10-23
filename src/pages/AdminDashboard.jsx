import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Trophy,
  Plus,
  Upload,
  FileSpreadsheet,
  Users,
  ArrowUp,
  ArrowDown,
  Shuffle,
  Play,
  Square,
  Clock,
  MapPin,
  Calendar,
  CheckCircle2,
  Radio,
  Sliders,
  Sparkles,
  ExternalLink,
  RefreshCw,
  Award,
  Layers,
  UserPlus,
  ChevronRight,
  Flame,
  Shield,
  Zap,
  Edit3,
  Save,
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { cn } from '../utils/cn';

const TOURNAMENT_FORMATS = [
  {
    id: 'SINGLE_ELIMINATION',
    label: 'Single Elimination Knockout (Seed #1 vs #N Bracket)',
    desc: 'Seeds pair 1 vs N, 2 vs N-1. Winners automatically advance to Semi-Finals and Grand Finale.',
  },
  {
    id: 'SWISS_STAGE',
    label: 'Swiss Stage System (Score-Group Auto Pairing)',
    desc: 'No early elimination. Round 1 pairs top half vs bottom half; subsequent rounds automatically pair teams with identical W-L records.',
  },
  {
    id: 'ROUND_ROBIN',
    label: 'Round Robin League (Circle Method All-Play-All)',
    desc: 'Every registered team faces off in rotating rounds. Top 2 in standings advance to the Championship Final.',
  },
  {
    id: 'DOUBLE_ELIMINATION',
    label: 'Double Elimination (Upper & Lower Brackets)',
    desc: 'Teams must lose twice to be eliminated. Winners advance in Upper Bracket; first-loss teams drop to Lower Bracket.',
  },
];

const SPORT_NUANCE_PRESETS = [
  {
    id: 'ULTIMATE_FRISBEE',
    label: 'Ultimate Frisbee (WFDF Rules + Auto Offense/Defense Pull Switch)',
    category: 'SPORTS',
    defaultTarget: 15,
    defaultDurationMins: 45,
  },
  {
    id: 'BASKETBALL',
    label: '5v5 Floodlight Basketball (+1/+2/+3 + 24s Shot Clock & Bonus)',
    category: 'SPORTS',
    defaultTarget: 85,
    defaultDurationMins: 40,
  },
  {
    id: 'VOLLEYBALL',
    label: 'Indoor Volleyball (Best of 3 Sets, Win by 2, Side-Out Rotation)',
    category: 'SPORTS',
    defaultTarget: 25,
    defaultDurationMins: 60,
  },
  {
    id: 'CULTURAL_PANEL',
    label: 'Cultural Battle / Band Face-Off (100-Pt Jury + Peak dB Meter)',
    category: 'CULTURALS',
    defaultTarget: 100,
    defaultDurationMins: 20,
  },
  {
    id: 'MANAGEMENT_SIM',
    label: 'Management & Case War (₹150 Cr Valuation Cap / Boardroom Bell)',
    category: 'MANAGEMENT',
    defaultTarget: 150,
    defaultDurationMins: 30,
  },
];

const DEFAULT_PARTICIPANTS = [
  {
    id: 'seed-1',
    teamName: 'FLAME Stormchasers',
    shortName: 'FLAME',
    university: 'FLAME University, Pune',
    uniId: 'flame',
    captain: 'Rohan Deshmukh',
    contact: '+91 98230 11402',
    source: 'Pre-Seeded Host',
    wins: 0,
    losses: 0,
  },
  {
    id: 'seed-2',
    teamName: 'SIU Panthers',
    shortName: 'SYMBIOSIS',
    university: 'Symbiosis International (SIU)',
    uniId: 'symbiosis',
    captain: 'Aarav Kulkarni',
    contact: '+91 98204 55819',
    source: 'Portal Registration',
    wins: 0,
    losses: 0,
  },
  {
    id: 'seed-3',
    teamName: 'IITB Titans',
    shortName: 'IIT BOMBAY',
    university: 'IIT Bombay',
    uniId: 'iitb',
    captain: 'Kabir Verma',
    contact: '+91 97651 33904',
    source: 'Portal Registration',
    wins: 0,
    losses: 0,
  },
  {
    id: 'seed-4',
    teamName: 'NMIMS Renegades',
    shortName: 'NMIMS',
    university: 'NMIMS Mumbai',
    uniId: 'nmims',
    captain: 'Ananya Shah',
    contact: '+91 99302 77210',
    source: 'Portal Registration',
    wins: 0,
    losses: 0,
  },
];

const EXCEL_BULK_SAMPLE = `St. Xavier's Knights, XAVIERS, St. Xavier's College Mumbai, stxaviers, Vivaan Pereira, +91 98193 64028
COEP Falcons, COEP, COEP Technological University, coep, Devansh Patil, +91 91674 88312
Ashoka Hawks, ASHOKA, Ashoka University, ashoka, Tara Menon, +91 98901 41299
Christ Bengaluru FC, CHRIST, Christ University Bengaluru, christ, Pranav Rao, +91 98337 19045`;

function generatePairingsForRound(teams, format, roundNumber, tournamentMeta) {
  const list = [...teams];
  const pairs = [];

  if (format === 'SINGLE_ELIMINATION' || format === 'DOUBLE_ELIMINATION') {
    // Standard Bracket Seeding: Seed #1 vs #N, Seed #2 vs #N-1
    const half = Math.floor(list.length / 2);
    for (let i = 0; i < half; i++) {
      pairs.push([list[i], list[list.length - 1 - i]]);
    }
  } else if (format === 'SWISS_STAGE') {
    // Sort by wins descending, then pair adjacent teams (Swiss 1-0 vs 1-0, 0-1 vs 0-1)
    const sorted = [...list].sort((a, b) => (b.wins || 0) - (a.wins || 0));
    for (let i = 0; i + 1 < sorted.length; i += 2) {
      pairs.push([sorted[i], sorted[i + 1]]);
    }
  } else {
    // ROUND_ROBIN rotation based on roundNumber
    const rotated = [...list];
    if (rotated.length > 2) {
      for (let r = 1; r < roundNumber; r++) {
        const last = rotated.pop();
        rotated.splice(1, 0, last);
      }
    }
    const half = Math.floor(rotated.length / 2);
    for (let i = 0; i < half; i++) {
      pairs.push([rotated[i], rotated[rotated.length - 1 - i]]);
    }
  }

  return pairs.map(([tA, tB], idx) => {
    const matchId = `${tournamentMeta.slug}-r${roundNumber}-m${idx + 1}-${Date.now().toString().slice(-3)}`;
    return {
      id: matchId,
      tournamentId: tournamentMeta.id,
      tournamentName: tournamentMeta.name,
      roundNumber,
      matchIndex: idx + 1,
      title: `${tournamentMeta.name} — R${roundNumber} Match #${idx + 1}`,
      category: tournamentMeta.category,
      sportType: tournamentMeta.sportType,
      status: 'UPCOMING',
      day: tournamentMeta.day || 'DAY 2',
      dateLabel: tournamentMeta.dateLabel || '19 FEB 2027',
      timeLabel: `${16 + idx}:00 IST`,
      venue: tournamentMeta.venue || 'Arjuna Main Turf, FLAME',
      stageTag: (tournamentMeta.venue || 'ARJUNA TURF').slice(0, 16).toUpperCase(),
      round:
        pairs.length === 1
          ? 'GRAND FINALE'
          : pairs.length === 2 && format.includes('ELIMINATION')
          ? `SEMI-FINAL ${idx + 1}`
          : `${format.replace('_', ' ')} • ROUND ${roundNumber}`,
      image:
        tournamentMeta.category === 'CULTURALS'
          ? 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=900&q=80'
          : tournamentMeta.category === 'MANAGEMENT'
          ? 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80'
          : 'https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&w=900&q=80',
      endCondition: {
        mode: 'SCORE_OR_TIME',
        targetScore: Number(tournamentMeta.targetScore) || 15,
        winBy: Number(tournamentMeta.winBy) || 1,
        hardCapSeconds: (Number(tournamentMeta.durationMins) || 45) * 60,
        description: `First to ${tournamentMeta.targetScore} Pts (Win by ${tournamentMeta.winBy}) OR ${tournamentMeta.durationMins}:00 Time Cap`,
      },
      clockSeconds: 0,
      clockRunning: false,
      teamA: {
        id: tA.uniId || 'flame',
        participantId: tA.id,
        name: tA.teamName,
        shortName: tA.shortName,
        university: tA.university,
        record: `Seed #${teams.indexOf(tA) + 1} (${tA.wins || 0}-${tA.losses || 0})`,
        score: 0,
        spiritScore: 11.0,
        turnovers: 0,
        teamFouls: 0,
        setsWon: 0,
      },
      teamB: {
        id: tB.uniId || 'symbiosis',
        participantId: tB.id,
        name: tB.teamName,
        shortName: tB.shortName,
        university: tB.university,
        record: `Seed #${teams.indexOf(tB) + 1} (${tB.wins || 0}-${tB.losses || 0})`,
        score: 0,
        spiritScore: 11.0,
        turnovers: 0,
        teamFouls: 0,
        setsWon: 0,
      },
      nuances: {
        possession: 'A',
        lineRoleA: 'OFFENSE (RECEIVING)',
        lineRoleB: 'DEFENSE (PULLING)',
        quarter: 1,
        shotClock: 24,
        currentSet: 1,
        servingTeam: 'A',
        windSpeedKmh: 14,
        windDirection: 'NW Lavale Breeze',
        lastAction: `Auto-generated Round ${roundNumber} matchup (${tournamentMeta.format}). Awaiting referee kickoff.`,
      },
      feed: [
        {
          time: 'SCHEDULED',
          team: 'WAR ROOM',
          text: `Matchup auto-seeded via ${tournamentMeta.format}: ${tA.teamName} vs ${tB.teamName} at ${tournamentMeta.venue}.`,
        },
      ],
    };
  });
}

export default function AdminDashboard({
  events = [],
  tournaments = [],
  registeredPool = [],
  onCreateTournamentAndMatches,
  onAppendTournamentRound,
  onUpdateEvent,
  onAwardWinnerMedal,
  onAddParticipantToPool,
}) {
  const [activeTab, setActiveTab] = useState('CREATE'); // 'CREATE' | 'MATCH_CONSOLE'
  const fileInputRef = useRef(null);

  // Tournament Creation Form State
  const [tourneyForm, setTourneyForm] = useState({
    name: "Kurukshetra '27 Inter-Uni Ultimate Cup",
    clubName: 'FLAME Ultimate Frisbee Club & Sports Council',
    sportType: 'ULTIMATE_FRISBEE',
    category: 'SPORTS',
    format: 'SINGLE_ELIMINATION',
    venue: 'Arjuna Main Turf, FLAME',
    day: 'DAY 2',
    dateLabel: '19 FEB 2027',
    targetScore: 15,
    winBy: 1,
    durationMins: 45,
    prizePool: '₹1,25,000',
    refereeHead: 'Coach Vikramaditya Rao (WFDF Certified)',
    equipmentNotes: '175g Ultrastar Discs • Floodlight Check 17:00 IST • Medical Bay #2',
  });

  // Seeding Pool State (combines default teams + any newly registered teams from RegistrationFlow)
  const [seededTeams, setSeededTeams] = useState(() => {
    const merged = [...DEFAULT_PARTICIPANTS];
    registeredPool.forEach((reg) => {
      if (!merged.some((m) => m.teamName === reg.teamName)) {
        merged.push(reg);
      }
    });
    return merged;
  });

  // Keep seededTeams synced when new registrations arrive from /register
  React.useEffect(() => {
    setSeededTeams((prev) => {
      const next = [...prev];
      registeredPool.forEach((reg) => {
        if (!next.some((m) => m.id === reg.id || m.teamName === reg.teamName)) {
          next.push(reg);
        }
      });
      return next;
    });
  }, [registeredPool]);

  // Bulk Excel/CSV Paste State
  const [bulkText, setBulkText] = useState('');
  const [bulkSuccessMsg, setBulkSuccessMsg] = useState('');

  // Quick Single Team Add State
  const [quickTeam, setQuickTeam] = useState({
    teamName: '',
    shortName: '',
    university: '',
    captain: '',
  });

  // Match Updation Filter State
  const [selectedTourneyFilter, setSelectedTourneyFilter] = useState('ALL');
  const [editingLogisticsId, setEditingLogisticsId] = useState(null);
  const [logisticsDraft, setLogisticsDraft] = useState({
    venue: '',
    timeLabel: '',
    day: '',
    round: '',
  });

  // Move Seed Up or Down manually
  const moveSeed = (index, direction) => {
    const targetIdx = index + direction;
    if (targetIdx < 0 || targetIdx >= seededTeams.length) return;
    const copy = [...seededTeams];
    const temp = copy[index];
    copy[index] = copy[targetIdx];
    copy[targetIdx] = temp;
    setSeededTeams(copy);
  };

  const shuffleSeeds = () => {
    const copy = [...seededTeams].sort(() => Math.random() - 0.5);
    setSeededTeams(copy);
  };

  // Parse Bulk Excel / CSV rows
  const handleBulkImport = (rawString) => {
    const textToParse = rawString ?? bulkText;
    if (!textToParse.trim()) return;

    const lines = textToParse
      .split(/\r?\n/)
      .map((l) => l.trim())
      .filter(Boolean);

    const imported = [];
    lines.forEach((line, idx) => {
      // Support both tab-separated (direct Excel copy-paste) and comma-separated (CSV)
      const cols = line.includes('\t')
        ? line.split('\t').map((c) => c.trim())
        : line.split(',').map((c) => c.trim());

      if (cols.length >= 2) {
        const teamName = cols[0];
        const shortName = (cols[1] || teamName.slice(0, 8)).toUpperCase();
        const university = cols[2] || `${teamName} University`;
        const uniId = (cols[3] || shortName.toLowerCase()).replace(/[^a-z]/g, '');
        const captain = cols[4] || 'Contingent Leader';
        const contact = cols[5] || '+91 98200 00000';

        imported.push({
          id: `excel-${Date.now()}-${idx}`,
          teamName,
          shortName,
          university,
          uniId: uniId || 'flame',
          captain,
          contact,
          source: 'Excel Bulk Import',
          wins: 0,
          losses: 0,
        });
      }
    });

    if (imported.length > 0) {
      setSeededTeams((prev) => [...prev, ...imported]);
      imported.forEach((item) => {
        if (onAddParticipantToPool) onAddParticipantToPool(item);
      });
      setBulkSuccessMsg(
        `Successfully imported ${imported.length} teams from Excel/CSV into the seeding pool!`
      );
      setBulkText('');
      setTimeout(() => setBulkSuccessMsg(''), 4000);
    }
  };

  // Handle Excel / CSV File Upload
  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (evt) => {
      const content = evt.target?.result;
      if (typeof content === 'string') {
        handleBulkImport(content);
      }
    };
    reader.readAsText(file);
  };

  // Handle Quick Manual Participant Add
  const handleQuickAddTeam = (e) => {
    e.preventDefault();
    if (!quickTeam.teamName.trim()) return;
    const newEntry = {
      id: `manual-${Date.now()}`,
      teamName: quickTeam.teamName.trim(),
      shortName: (
        quickTeam.shortName.trim() || quickTeam.teamName.trim().slice(0, 7)
      ).toUpperCase(),
      university: quickTeam.university.trim() || 'Visiting University Contingent',
      uniId: 'flame',
      captain: quickTeam.captain.trim() || 'Team Captain',
      contact: '+91 98000 11223',
      source: 'Manual War-Room Entry',
      wins: 0,
      losses: 0,
    };
    setSeededTeams((prev) => [...prev, newEntry]);
    if (onAddParticipantToPool) onAddParticipantToPool(newEntry);
    setQuickTeam({ teamName: '', shortName: '', university: '', captain: '' });
  };

  // Create Tournament & Auto-Generate Round 1 Matchups
  const handleCreateTournament = (e) => {
    e.preventDefault();
    if (seededTeams.length < 2) return;

    const slug = tourneyForm.name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .slice(0, 22);
    const tourneyId = `tourney-${Date.now()}`;

    const tournamentMeta = {
      id: tourneyId,
      slug,
      ...tourneyForm,
      currentRound: 1,
      participants: seededTeams,
      createdAt: new Date().toLocaleTimeString(),
    };

    const round1Matches = generatePairingsForRound(
      seededTeams,
      tourneyForm.format,
      1,
      tournamentMeta
    );

    onCreateTournamentAndMatches(tournamentMeta, round1Matches);
    setSelectedTourneyFilter(tourneyId);
    setActiveTab('MATCH_CONSOLE');
  };

  // Auto-Generate Next Round Matchups based on Winners / Format Progression
  const handleAdvanceTournamentRound = (tourney) => {
    const tourneyMatches = events.filter((e) => e.tournamentId === tourney.id);
    const currentRoundMatches = tourneyMatches.filter(
      (m) => m.roundNumber === tourney.currentRound
    );

    const nextRoundNum = (tourney.currentRound || 1) + 1;
    let qualifyingTeams = [];

    if (
      tourney.format === 'SINGLE_ELIMINATION' ||
      tourney.format === 'DOUBLE_ELIMINATION'
    ) {
      // Winners of current round advance
      qualifyingTeams = currentRoundMatches.map((m) => {
        const winSide =
          m.winner?.side || (m.teamA.score >= m.teamB.score ? 'A' : 'B');
        const wTeam = winSide === 'A' ? m.teamA : m.teamB;
        return {
          id: wTeam.participantId || wTeam.id,
          teamName: wTeam.name,
          shortName: wTeam.shortName,
          university: wTeam.university,
          uniId: wTeam.id,
          wins: nextRoundNum - 1,
          losses: 0,
        };
      });
    } else {
      // SWISS_STAGE or ROUND_ROBIN: All teams continue with updated W-L records
      const updatedMap = new Map();
      tourney.participants.forEach((p) =>
        updatedMap.set(p.shortName, { ...p })
      );

      currentRoundMatches.forEach((m) => {
        const winSide =
          m.winner?.side || (m.teamA.score >= m.teamB.score ? 'A' : 'B');
        const winnerShort = winSide === 'A' ? m.teamA.shortName : m.teamB.shortName;
        const loserShort = winSide === 'A' ? m.teamB.shortName : m.teamA.shortName;

        if (updatedMap.has(winnerShort)) {
          const w = updatedMap.get(winnerShort);
          w.wins = (w.wins || 0) + 1;
        }
        if (updatedMap.has(loserShort)) {
          const l = updatedMap.get(loserShort);
          l.losses = (l.losses || 0) + 1;
        }
      });

      qualifyingTeams = Array.from(updatedMap.values());
    }

    if (qualifyingTeams.length < 2) return;

    const nextMatches = generatePairingsForRound(
      qualifyingTeams,
      tourney.format,
      nextRoundNum,
      tourney
    );

    onAppendTournamentRound(tourney.id, nextRoundNum, qualifyingTeams, nextMatches);
  };

  // Match Updation Actions (Go Live, End Match, Update Score, Update Logistics)
  const handleToggleMatchStatus = (match, newStatus) => {
    if (newStatus === 'LIVE') {
      onUpdateEvent({
        ...match,
        status: 'LIVE',
        nuances: {
          ...match.nuances,
          lastAction: `Referee whistle blown! Match is now LIVE at ${match.venue}.`,
        },
        feed: [
          {
            time: 'LIVE',
            team: 'REFEREE',
            text: `🟢 Match set to LIVE on user screens! Real-time score & clock telemetry activated.`,
          },
          ...match.feed,
        ],
      });
    } else if (newStatus === 'COMPLETED') {
      const scoreA = match.teamA.score;
      const scoreB = match.teamB.score;
      const winSide = scoreA >= scoreB ? 'A' : 'B';
      const winningTeam = winSide === 'A' ? match.teamA : match.teamB;
      const losingTeam = winSide === 'A' ? match.teamB : match.teamA;

      onUpdateEvent({
        ...match,
        status: 'COMPLETED',
        winner: {
          side: winSide,
          teamName: winningTeam.name,
          shortName: winningTeam.shortName,
          universityId: winningTeam.id,
          universityName: winningTeam.university,
          loserUniversityId: losingTeam.id,
          reason: `Official Match End Declared by Tournament Director (${scoreA}–${scoreB})`,
        },
        nuances: {
          ...match.nuances,
          lastAction: `FINAL: ${winningTeam.name} wins (${scoreA}–${scoreB})! Next bracket round ready.`,
        },
        feed: [
          {
            time: 'FINAL',
            team: winningTeam.shortName,
            text: `🏆 Match Ended: ${winningTeam.name} declared winner (${scoreA}–${scoreB})!`,
          },
          ...match.feed,
        ],
      });

      if (onAwardWinnerMedal) {
        onAwardWinnerMedal(match.category, winningTeam.id, losingTeam.id);
      }
    }
  };

  const handleQuickScoreUpdate = (match, side, delta) => {
    const isA = side === 'A';
    const nextScoreA = Math.max(0, match.teamA.score + (isA ? delta : 0));
    const nextScoreB = Math.max(0, match.teamB.score + (!isA ? delta : 0));
    const scorer = isA ? match.teamA : match.teamB;
    const other = isA ? match.teamB : match.teamA;

    let updatedNuances = { ...match.nuances };
    if (match.sportType === 'ULTIMATE_FRISBEE' && delta > 0) {
      updatedNuances.lineRoleA = isA ? 'DEFENSE (PULLING)' : 'OFFENSE (RECEIVING)';
      updatedNuances.lineRoleB = !isA ? 'DEFENSE (PULLING)' : 'OFFENSE (RECEIVING)';
      updatedNuances.possession = isA ? 'B' : 'A';
      updatedNuances.lastAction = `${scorer.shortName} scores (${nextScoreA}–${nextScoreB})! Auto Frisbee Rule: ${scorer.shortName} switches to DEFENSE; ${other.shortName} to OFFENSE.`;
    } else {
      updatedNuances.lastAction = `Live Score Updated: ${match.teamA.shortName} ${nextScoreA} – ${nextScoreB} ${match.teamB.shortName}`;
    }

    // Check if target score cap reached automatically
    const target = match.endCondition?.targetScore || 15;
    const winBy = match.endCondition?.winBy || 1;
    let autoWinner = null;
    let nextStatus = match.status;

    if (nextScoreA >= target && nextScoreA - nextScoreB >= winBy) {
      nextStatus = 'COMPLETED';
      autoWinner = {
        side: 'A',
        teamName: match.teamA.name,
        shortName: match.teamA.shortName,
        universityId: match.teamA.id,
        universityName: match.teamA.university,
        loserUniversityId: match.teamB.id,
        reason: `Automatic Target Cap Reached (${nextScoreA}–${nextScoreB})`,
      };
      if (onAwardWinnerMedal) {
        onAwardWinnerMedal(match.category, match.teamA.id, match.teamB.id);
      }
    } else if (nextScoreB >= target && nextScoreB - nextScoreA >= winBy) {
      nextStatus = 'COMPLETED';
      autoWinner = {
        side: 'B',
        teamName: match.teamB.name,
        shortName: match.teamB.shortName,
        universityId: match.teamB.id,
        universityName: match.teamB.university,
        loserUniversityId: match.teamA.id,
        reason: `Automatic Target Cap Reached (${nextScoreB}–${nextScoreA})`,
      };
      if (onAwardWinnerMedal) {
        onAwardWinnerMedal(match.category, match.teamB.id, match.teamA.id);
      }
    }

    onUpdateEvent({
      ...match,
      status: nextStatus,
      ...(autoWinner ? { winner: autoWinner } : {}),
      teamA: { ...match.teamA, score: nextScoreA },
      teamB: { ...match.teamB, score: nextScoreB },
      nuances: updatedNuances,
      feed: [
        {
          time: 'LIVE',
          team: scorer.shortName,
          text: autoWinner
            ? `🏆 AUTO WINNER DECLARED: ${autoWinner.teamName} hits target score (${nextScoreA}–${nextScoreB})!`
            : updatedNuances.lastAction,
        },
        ...match.feed,
      ],
    });
  };

  const handleSaveLogistics = (match) => {
    onUpdateEvent({
      ...match,
      venue: logisticsDraft.venue || match.venue,
      stageTag: (logisticsDraft.venue || match.venue).slice(0, 16).toUpperCase(),
      timeLabel: logisticsDraft.timeLabel || match.timeLabel,
      day: logisticsDraft.day || match.day,
      round: logisticsDraft.round || match.round,
      nuances: {
        ...match.nuances,
        lastAction: `Match schedule/location updated: ${logisticsDraft.venue || match.venue} at ${
          logisticsDraft.timeLabel || match.timeLabel
        }.`,
      },
    });
    setEditingLogisticsId(null);
  };

  const displayedMatches =
    selectedTourneyFilter === 'ALL'
      ? events
      : events.filter((e) => e.tournamentId === selectedTourneyFilter);

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-clip bg-[#FAF9F6] text-zinc-900 dark:bg-[var(--color-primary-black)] dark:text-[var(--color-primary-white)] bg-blueprint-grid pb-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pt-4 sm:pt-8 space-y-5 sm:space-y-8 w-full min-w-0">
        {/* Top Command Header */}
        <div className="rounded-2xl sm:rounded-3xl border border-white/15 bg-[#09090B] text-white p-4 sm:p-8 shadow-2xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 sm:gap-6">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-primary-flame)]/40 bg-[var(--color-primary-flame)]/15 px-3 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[var(--color-primary-flame)] mb-2 sm:mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Kurukshetra &apos;27 War Room • Admin Console</span>
              </div>
              <h1
                className="font-horizon text-lg sm:text-4xl lg:text-5xl font-black uppercase tracking-wider text-white leading-tight"
                style={{ fontFamily: 'var(--font-header-horizon)' }}
              >
                TOURNAMENT <span className="text-[var(--color-primary-flame)]">CREATION</span> &amp; MATCH UPDATION
              </h1>
              <p className="mt-1 sm:mt-2 text-xs sm:text-base text-white/75 max-w-3xl">
                Create tournaments with automated pairings, import teams from Excel/CSV,
                adjust seeds, and broadcast live match scores directly to viewer screens.
              </p>
            </div>

            {/* 2 Primary Mode Tabs: 2-col grid on mobile */}
            <div className="grid grid-cols-2 sm:flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => setActiveTab('CREATE')}
                className={cn(
                  'inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-xl sm:rounded-2xl px-3 sm:px-5 py-2.5 sm:py-3.5 text-xs sm:text-sm font-black uppercase tracking-wider transition border text-center',
                  activeTab === 'CREATE'
                    ? 'bg-[var(--color-primary-flame)] text-white border-[var(--color-primary-flame)] shadow-[0_0_25px_rgba(254,90,0,0.5)]'
                    : 'bg-white/5 text-white/80 border-white/15 hover:bg-white/10'
                )}
              >
                <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                <span className="truncate">1. Create ({seededTeams.length})</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('MATCH_CONSOLE')}
                className={cn(
                  'inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-xl sm:rounded-2xl px-3 sm:px-5 py-2.5 sm:py-3.5 text-xs sm:text-sm font-black uppercase tracking-wider transition border text-center',
                  activeTab === 'MATCH_CONSOLE'
                    ? 'bg-[var(--color-primary-flame)] text-white border-[var(--color-primary-flame)] shadow-[0_0_25px_rgba(254,90,0,0.5)]'
                    : 'bg-white/5 text-white/80 border-white/15 hover:bg-white/10'
                )}
              >
                <Radio className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                <span className="truncate">2. Matches ({events.length})</span>
              </button>
            </div>
          </div>
        </div>

        {/* =====================================================================
            TAB 1: TOURNAMENT CREATION, BULK EXCEL IMPORT & MANUAL SEEDING
           ===================================================================== */}
        {activeTab === 'CREATE' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 items-start">
            {/* Left 6 Cols: Tournament Setup & Rules Form */}
            <form
              onSubmit={handleCreateTournament}
              className="lg:col-span-6 rounded-2xl sm:rounded-3xl border border-white/15 bg-[#09090B] text-white p-4 sm:p-8 space-y-4 sm:space-y-6 shadow-xl"
            >
              <div className="border-b border-white/10 pb-3 sm:pb-4 flex items-center justify-between">
                <div>
                  <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-[var(--color-primary-flame)] font-bold">
                    STEP 1 • TOURNAMENT BLUEPRINT
                  </span>
                  <h2
                    className="font-horizon text-base sm:text-2xl font-black uppercase tracking-wider text-white mt-0.5"
                    style={{ fontFamily: 'var(--font-header-horizon)' }}
                  >
                    EVENT &amp; FORMAT CONFIG
                  </h2>
                </div>
                <Layers className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--color-primary-flame)] shrink-0" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2">
                  <label className="block font-mono text-xs font-bold uppercase text-white/80 mb-1.5">
                    Tournament Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={tourneyForm.name}
                    onChange={(e) =>
                      setTourneyForm({ ...tourneyForm, name: e.target.value })
                    }
                    placeholder="e.g., Kurukshetra '27 Inter-Uni Ultimate Cup"
                    className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-base font-semibold text-white focus:border-[var(--color-primary-flame)] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs font-bold uppercase text-white/80 mb-1.5">
                    Club / Sport Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={tourneyForm.clubName}
                    onChange={(e) =>
                      setTourneyForm({ ...tourneyForm, clubName: e.target.value })
                    }
                    placeholder="e.g., FLAME Sports Council"
                    className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm font-semibold text-white focus:border-[var(--color-primary-flame)] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs font-bold uppercase text-white/80 mb-1.5">
                    Fest Category Tab *
                  </label>
                  <select
                    value={tourneyForm.category}
                    onChange={(e) =>
                      setTourneyForm({ ...tourneyForm, category: e.target.value })
                    }
                    className="w-full rounded-xl border border-white/20 bg-[#121216] px-4 py-3 text-sm font-bold text-white focus:border-[var(--color-primary-flame)] focus:outline-none"
                  >
                    <option value="SPORTS">Sports Arena (SPORTS)</option>
                    <option value="CULTURALS">Cultural Stage (CULTURALS)</option>
                    <option value="MANAGEMENT">Management &amp; Conclave (MANAGEMENT)</option>
                  </select>
                </div>

                {/* Format Dropdown (Round Robin, Swiss Stage, Knockout, Double Elim) */}
                <div className="sm:col-span-2">
                  <label className="block font-mono text-xs font-bold uppercase text-[#FAAD36] mb-1.5">
                    Tournament Pairing Format (Auto-Matchup Generator) *
                  </label>
                  <select
                    value={tourneyForm.format}
                    onChange={(e) =>
                      setTourneyForm({ ...tourneyForm, format: e.target.value })
                    }
                    className="w-full rounded-xl border-2 border-[var(--color-primary-flame)]/60 bg-[#121216] px-4 py-3.5 text-sm sm:text-base font-bold text-white focus:border-[var(--color-primary-flame)] focus:outline-none"
                  >
                    {TOURNAMENT_FORMATS.map((fmt) => (
                      <option key={fmt.id} value={fmt.id}>
                        {fmt.label}
                      </option>
                    ))}
                  </select>
                  <p className="mt-1.5 text-xs text-white/65">
                    {
                      TOURNAMENT_FORMATS.find((f) => f.id === tourneyForm.format)
                        ?.desc
                    }
                  </p>
                </div>

                {/* Sport Rule & Nuance Engine Preset */}
                <div className="sm:col-span-2">
                  <label className="block font-mono text-xs font-bold uppercase text-white/80 mb-1.5">
                    Sport-Specific Rule &amp; Nuance Engine Preset
                  </label>
                  <select
                    value={tourneyForm.sportType}
                    onChange={(e) => {
                      const preset = SPORT_NUANCE_PRESETS.find(
                        (p) => p.id === e.target.value
                      );
                      setTourneyForm({
                        ...tourneyForm,
                        sportType: e.target.value,
                        category: preset?.category || tourneyForm.category,
                        targetScore: preset?.defaultTarget || 15,
                        durationMins: preset?.defaultDurationMins || 45,
                      });
                    }}
                    className="w-full rounded-xl border border-white/20 bg-[#121216] px-4 py-3 text-sm font-semibold text-white focus:border-[var(--color-primary-flame)] focus:outline-none"
                  >
                    {SPORT_NUANCE_PRESETS.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Auto-End Rules: Target Score, Win By, Time Cap */}
                <div>
                  <label className="block font-mono text-xs font-bold uppercase text-white/80 mb-1.5">
                    Auto-Win Target Score
                  </label>
                  <input
                    type="number"
                    min={1}
                    value={tourneyForm.targetScore}
                    onChange={(e) =>
                      setTourneyForm({ ...tourneyForm, targetScore: e.target.value })
                    }
                    className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-2.5 text-base font-bold text-white"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs font-bold uppercase text-white/80 mb-1.5">
                    Hard Time Cap (Mins)
                  </label>
                  <input
                    type="number"
                    min={5}
                    value={tourneyForm.durationMins}
                    onChange={(e) =>
                      setTourneyForm({
                        ...tourneyForm,
                        durationMins: e.target.value,
                      })
                    }
                    className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-2.5 text-base font-bold text-white"
                  />
                </div>

                {/* Additional Stored Metadata (Venue, Day, Referee, Prize Pool, Equipment) */}
                <div>
                  <label className="block font-mono text-xs font-bold uppercase text-white/80 mb-1.5">
                    Default Arena / Venue
                  </label>
                  <input
                    type="text"
                    value={tourneyForm.venue}
                    onChange={(e) =>
                      setTourneyForm({ ...tourneyForm, venue: e.target.value })
                    }
                    className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs font-bold uppercase text-white/80 mb-1.5">
                    Fest Day &amp; Prize Pool
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <select
                      value={tourneyForm.day}
                      onChange={(e) =>
                        setTourneyForm({ ...tourneyForm, day: e.target.value })
                      }
                      className="rounded-xl border border-white/20 bg-[#121216] px-3 py-2.5 text-sm font-bold text-white"
                    >
                      <option value="DAY 1">DAY 1</option>
                      <option value="DAY 2">DAY 2</option>
                      <option value="DAY 3">DAY 3</option>
                    </select>
                    <input
                      type="text"
                      value={tourneyForm.prizePool}
                      onChange={(e) =>
                        setTourneyForm({ ...tourneyForm, prizePool: e.target.value })
                      }
                      placeholder="₹1,25,000"
                      className="rounded-xl border border-white/20 bg-white/5 px-3 py-2.5 text-sm font-semibold text-white"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label className="block font-mono text-xs font-bold uppercase text-white/80 mb-1.5">
                    Chief Referee / Jury Chair &amp; Logistics Notes (Stored for Match Officials)
                  </label>
                  <input
                    type="text"
                    value={tourneyForm.equipmentNotes}
                    onChange={(e) =>
                      setTourneyForm({
                        ...tourneyForm,
                        equipmentNotes: e.target.value,
                      })
                    }
                    className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-2.5 text-sm text-white/90"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 sm:gap-3 rounded-xl sm:rounded-2xl bg-[var(--color-primary-flame)] hover:bg-[#ff6a1a] px-4 sm:px-6 py-3.5 sm:py-4 text-xs sm:text-base font-black uppercase tracking-wider text-white shadow-[0_0_35px_rgba(254,90,0,0.5)] transition active:scale-98"
                style={{ fontFamily: 'var(--font-header-spartan)' }}
              >
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                <span>
                  Create Tournament &amp; Round 1 ({Math.floor(seededTeams.length / 2)} Matches)
                </span>
              </button>
            </form>

            {/* Right 6 Cols: Bulk Excel Import, Auto Registration Sync & Manual Seeding Reorder */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-6">
              {/* Bulk Add from Excel / CSV Card */}
              <div className="rounded-2xl sm:rounded-3xl border border-white/15 bg-[#09090B] text-white p-4 sm:p-8 space-y-3.5 sm:space-y-4 shadow-xl">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3 sm:pb-4">
                  <div>
                    <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-[#FAAD36] font-bold">
                      STEP 2 • BULK EXCEL / CSV IMPORT
                    </span>
                    <h3
                      className="font-horizon text-base sm:text-xl font-black uppercase tracking-wider text-white mt-0.5"
                      style={{ fontFamily: 'var(--font-header-horizon)' }}
                    >
                      BULK ADD FROM EXCEL
                    </h3>
                  </div>

                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept=".csv,.txt,.tsv"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="inline-flex items-center gap-1.5 rounded-xl border border-white/20 bg-white/10 hover:bg-white/15 px-3 py-1.5 sm:py-2 text-xs font-bold uppercase text-white transition"
                    >
                      <Upload className="w-3.5 h-3.5 text-[var(--color-primary-flame)]" />
                      <span>Upload CSV</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setBulkText(EXCEL_BULK_SAMPLE)}
                      className="inline-flex items-center gap-1.5 rounded-xl bg-[#FAAD36]/20 border border-[#FAAD36]/40 px-3 py-1.5 sm:py-2 text-xs font-bold uppercase text-[#FAAD36] hover:bg-[#FAAD36]/30 transition"
                    >
                      <FileSpreadsheet className="w-3.5 h-3.5" />
                      <span>Sample Rows</span>
                    </button>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-white/75">
                  Paste rows from Excel/Sheets or upload CSV (<code className="text-[#FAAD36]">Team, ShortCode, University, UniID, Captain, Phone</code>):
                </p>

                <textarea
                  rows={3}
                  value={bulkText}
                  onChange={(e) => setBulkText(e.target.value)}
                  placeholder="Paste Excel cells or CSV rows here..."
                  className="w-full rounded-xl border border-white/20 bg-black p-3 font-mono text-xs sm:text-sm text-white placeholder:text-white/40 focus:border-[var(--color-primary-flame)] focus:outline-none"
                />

                <div className="flex flex-wrap items-center justify-between gap-2.5">
                  <button
                    type="button"
                    onClick={() => handleBulkImport()}
                    className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary-flame)] hover:bg-[#ff6a1a] px-4 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white transition"
                  >
                    <FileSpreadsheet className="w-4 h-4" />
                    <span>Import to Pool</span>
                  </button>

                  <Link
                    to="/register"
                    className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#FAAD36] hover:underline"
                  >
                    <UserPlus className="w-3.5 h-3.5" />
                    <span>Test Auto-Registration Sync →</span>
                  </Link>
                </div>

                {bulkSuccessMsg && (
                  <div className="rounded-xl border border-emerald-500/40 bg-emerald-500/15 px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-emerald-300 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>{bulkSuccessMsg}</span>
                  </div>
                )}
              </div>

              {/* Manual Seeding & Registered Participant Pool Card */}
              <div className="rounded-2xl sm:rounded-3xl border border-white/15 bg-[#09090B] text-white p-4 sm:p-8 space-y-4 sm:space-y-5 shadow-xl">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3 sm:pb-4">
                  <div>
                    <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-[var(--color-primary-flame)] font-bold">
                      STEP 3 • SEEDING POOL ({seededTeams.length} TEAMS)
                    </span>
                    <h3
                      className="font-horizon text-base sm:text-xl font-black uppercase tracking-wider text-white mt-0.5"
                      style={{ fontFamily: 'var(--font-header-horizon)' }}
                    >
                      MANUAL SEEDING
                    </h3>
                  </div>

                  <button
                    type="button"
                    onClick={shuffleSeeds}
                    className="inline-flex items-center gap-1.5 rounded-xl border border-white/20 bg-white/10 hover:bg-white/15 px-3 py-1.5 sm:py-2 text-xs font-bold uppercase text-white transition"
                  >
                    <Shuffle className="w-3.5 h-3.5 text-[var(--color-primary-flame)]" />
                    <span>Randomize</span>
                  </button>
                </div>

                {/* Quick Single Team Add Row */}
                <form
                  onSubmit={handleQuickAddTeam}
                  className="grid grid-cols-2 sm:grid-cols-12 gap-2"
                >
                  <input
                    type="text"
                    placeholder="Team Name"
                    value={quickTeam.teamName}
                    onChange={(e) =>
                      setQuickTeam({ ...quickTeam, teamName: e.target.value })
                    }
                    className="col-span-1 sm:col-span-4 rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-xs sm:text-sm text-white"
                  />
                  <input
                    type="text"
                    placeholder="Short (COEP)"
                    value={quickTeam.shortName}
                    onChange={(e) =>
                      setQuickTeam({ ...quickTeam, shortName: e.target.value })
                    }
                    className="col-span-1 sm:col-span-3 rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-xs sm:text-sm text-white"
                  />
                  <input
                    type="text"
                    placeholder="University"
                    value={quickTeam.university}
                    onChange={(e) =>
                      setQuickTeam({ ...quickTeam, university: e.target.value })
                    }
                    className="col-span-1 sm:col-span-3 rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-xs sm:text-sm text-white"
                  />
                  <button
                    type="submit"
                    className="col-span-1 sm:col-span-2 rounded-xl bg-white/15 hover:bg-[var(--color-primary-flame)] px-3 py-2 text-xs font-bold uppercase text-white transition"
                  >
                    + Add
                  </button>
                </form>

                {/* Seed List with Up/Down Controls */}
                <div className="space-y-2 max-h-[340px] overflow-y-auto pr-1">
                  {seededTeams.map((team, idx) => (
                    <div
                      key={team.id}
                      className="flex items-center justify-between gap-2 sm:gap-3 rounded-xl sm:rounded-2xl border border-white/12 bg-white/[0.03] px-3 sm:px-4 py-2.5 sm:py-3 hover:border-[var(--color-primary-flame)]/50 transition"
                    >
                      <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                        <span className="inline-flex h-7 w-7 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-lg sm:rounded-xl bg-[var(--color-primary-flame)] text-white font-mono text-xs sm:text-sm font-black">
                          #{idx + 1}
                        </span>
                        <div className="min-w-0">
                          <div className="flex items-center gap-1.5">
                            <span className="font-bold text-xs sm:text-base text-white truncate">
                              {team.teamName}
                            </span>
                            <span className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-[10px] sm:text-xs text-[#FAAD36]">
                              {team.shortName}
                            </span>
                          </div>
                          <div className="text-[11px] sm:text-xs text-white/65 truncate">
                            {team.university} •{' '}
                            <span className="text-emerald-400 font-semibold">
                              {team.source}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-1 shrink-0">
                        <button
                          type="button"
                          disabled={idx === 0}
                          onClick={() => moveSeed(idx, -1)}
                          title="Move Seed Higher"
                          className="p-1.5 sm:p-2 rounded-lg bg-white/10 hover:bg-[var(--color-primary-flame)] disabled:opacity-30 text-white transition"
                        >
                          <ArrowUp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </button>
                        <button
                          type="button"
                          disabled={idx === seededTeams.length - 1}
                          onClick={() => moveSeed(idx, 1)}
                          title="Move Seed Lower"
                          className="p-1.5 sm:p-2 rounded-lg bg-white/10 hover:bg-[var(--color-primary-flame)] disabled:opacity-30 text-white transition"
                        >
                          <ArrowDown className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Live Bracket Pairing Preview Strip */}
                <div className="rounded-xl sm:rounded-2xl border border-[#FAAD36]/35 bg-[#FAAD36]/10 p-3 sm:p-4">
                  <div className="text-[10px] sm:text-xs font-mono font-bold uppercase text-[#FAAD36] mb-2">
                    AUTO ROUND 1 PAIRING PREVIEW ({tourneyForm.format.replace('_', ' ')}):
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2 text-xs text-white">
                    {Array.from({ length: Math.floor(seededTeams.length / 2) }).map(
                      (_, i) => {
                        const a = seededTeams[i];
                        const b =
                          tourneyForm.format === 'SWISS_STAGE'
                            ? seededTeams[i * 2 + 1] || seededTeams[seededTeams.length - 1 - i]
                            : seededTeams[seededTeams.length - 1 - i];
                        if (!a || !b) return null;
                        return (
                          <div
                            key={i}
                            className="rounded-xl bg-black/60 border border-white/10 px-3 py-1.5 sm:py-2 flex items-center justify-between font-mono"
                          >
                            <span className="font-bold text-[var(--color-primary-flame)] truncate">
                              #{seededTeams.indexOf(a) + 1} {a.shortName}
                            </span>
                            <span className="text-white/40 px-1">VS</span>
                            <span className="font-bold text-white truncate">
                              #{seededTeams.indexOf(b) + 1} {b.shortName}
                            </span>
                          </div>
                        );
                      }
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =====================================================================
            TAB 2: MATCH UPDATION & BRACKET PROGRESSION CONSOLE
           ===================================================================== */}
        {activeTab === 'MATCH_CONSOLE' && (
          <div className="space-y-5 sm:space-y-8">
            {/* Active Tournaments Progression Bar */}
            <div className="rounded-2xl sm:rounded-3xl border border-white/15 bg-[#09090B] text-white p-4 sm:p-8 space-y-4 sm:space-y-5 shadow-xl">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4 border-b border-white/10 pb-3 sm:pb-4">
                <div>
                  <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-[#FAAD36] font-bold">
                    BRACKET &amp; ROUND PROGRESSION ENGINE
                  </span>
                  <h2
                    className="font-horizon text-base sm:text-2xl font-black uppercase tracking-wider text-white mt-0.5"
                    style={{ fontFamily: 'var(--font-header-horizon)' }}
                  >
                    ACTIVE TOURNAMENTS &amp; NEXT-ROUND
                  </h2>
                </div>

                <div className="flex flex-wrap items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => setSelectedTourneyFilter('ALL')}
                    className={cn(
                      'shrink-0 px-3 py-1.5 rounded-xl text-xs font-bold uppercase transition border',
                      selectedTourneyFilter === 'ALL'
                        ? 'bg-[var(--color-primary-flame)] text-white border-[var(--color-primary-flame)]'
                        : 'bg-white/5 text-white/75 border-white/15'
                    )}
                  >
                    All ({events.length})
                  </button>
                  {tournaments.map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setSelectedTourneyFilter(t.id)}
                      className={cn(
                        'shrink-0 px-3 py-1.5 rounded-xl text-xs font-bold uppercase transition border',
                        selectedTourneyFilter === t.id
                          ? 'bg-[var(--color-primary-flame)] text-white border-[var(--color-primary-flame)]'
                          : 'bg-white/5 text-white/75 border-white/15'
                      )}
                    >
                      {t.name} (R{t.currentRound})
                    </button>
                  ))}
                </div>
              </div>

              {tournaments.length === 0 ? (
                <div className="rounded-xl sm:rounded-2xl border border-white/10 bg-white/[0.02] p-3.5 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <p className="text-xs sm:text-sm text-white/75">
                    Viewing pre-loaded matches below. Create a custom bracket to auto-generate Round 1 &amp; Round 2 matchups.
                  </p>
                  <button
                    type="button"
                    onClick={() => setActiveTab('CREATE')}
                    className="shrink-0 inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-primary-flame)] px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Create Tournament</span>
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  {tournaments.map((t) => (
                    <div
                      key={t.id}
                      className="rounded-2xl border border-[var(--color-primary-flame)]/40 bg-gradient-to-r from-[#160700] to-black p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                    >
                      <div>
                        <span className="font-mono text-[10px] sm:text-xs uppercase text-[#FAAD36] font-bold">
                          {t.format.replace('_', ' ')} • ROUND {t.currentRound}
                        </span>
                        <h3 className="text-base sm:text-lg font-black uppercase text-white mt-0.5">
                          {t.name}
                        </h3>
                        <p className="text-xs text-white/70 mt-0.5">
                          {t.clubName} • {t.venue}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleAdvanceTournamentRound(t)}
                        className="shrink-0 inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#FAAD36] hover:bg-[#ffc05c] text-black px-3.5 py-2.5 text-xs font-black uppercase tracking-wider shadow-lg transition"
                      >
                        <RefreshCw className="w-3.5 h-3.5" />
                        <span>Generate Round {t.currentRound + 1}</span>
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Live Match Updation Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              {displayedMatches.map((match) => {
                const isLive = match.status === 'LIVE';
                const isCompleted = match.status === 'COMPLETED';
                const isEditing = editingLogisticsId === match.id;

                return (
                  <div
                    key={match.id}
                    className={cn(
                      'rounded-2xl sm:rounded-3xl border bg-[#09090B] text-white p-4 sm:p-6 space-y-3.5 sm:space-y-5 shadow-2xl transition',
                      isLive
                        ? 'border-[var(--color-primary-flame)] shadow-[0_10px_40px_rgba(254,90,0,0.22)]'
                        : 'border-white/15'
                    )}
                  >
                    {/* Top Match Status & Manual Go-Live / End-Match Controls */}
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
                      <div className="flex items-center gap-2">
                        {isLive ? (
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-primary-flame)] px-3 py-1 text-xs font-black uppercase tracking-widest text-white">
                            <span className="h-2 w-2 rounded-full bg-white animate-ping" />
                            LIVE ON SCREEN
                          </span>
                        ) : isCompleted ? (
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 px-3 py-1 text-xs font-black uppercase text-emerald-400">
                            <Trophy className="w-3.5 h-3.5" />
                            COMPLETED
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase text-white/80">
                            UPCOMING
                          </span>
                        )}
                        <span className="font-mono text-xs text-[#FAAD36] font-bold">
                          {match.round}
                        </span>
                      </div>

                      {/* Manual Match Lifecycle Triggers */}
                      <div className="flex items-center gap-2">
                        {!isLive && !isCompleted && (
                          <button
                            type="button"
                            onClick={() => handleToggleMatchStatus(match, 'LIVE')}
                            className="inline-flex items-center gap-1.5 rounded-xl bg-[var(--color-primary-flame)] hover:bg-[#ff6a1a] px-4 py-2 text-xs font-black uppercase tracking-wider text-white shadow-[0_0_20px_rgba(254,90,0,0.4)] transition"
                          >
                            <Play className="w-3.5 h-3.5 fill-current" />
                            <span>Make Match LIVE</span>
                          </button>
                        )}

                        {isLive && (
                          <button
                            type="button"
                            onClick={() => handleToggleMatchStatus(match, 'COMPLETED')}
                            className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 px-4 py-2 text-xs font-black uppercase tracking-wider text-white transition"
                          >
                            <Square className="w-3.5 h-3.5 fill-current" />
                            <span>End Match &amp; Declare Winner</span>
                          </button>
                        )}

                        <Link
                          to={`/live-events/${match.id}`}
                          className="inline-flex items-center gap-1 rounded-xl border border-white/20 bg-white/5 hover:bg-white/15 px-3 py-2 text-xs font-bold uppercase text-white transition"
                          title="Open Spectator Screen"
                        >
                          <span>Spectator View</span>
                          <ExternalLink className="w-3.5 h-3.5 text-[var(--color-primary-flame)]" />
                        </Link>
                      </div>
                    </div>

                    {/* Title & Editable Logistics (Location, Time, Day, Round) */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div>
                        <h3
                          className="text-xl font-black uppercase text-white"
                          style={{ fontFamily: 'var(--font-header-spartan)' }}
                        >
                          {match.title}
                        </h3>
                        <div className="mt-1 flex flex-wrap items-center gap-3 text-sm text-white/75">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4 text-[var(--color-primary-flame)]" />
                            {match.venue}
                          </span>
                          <span className="flex items-center gap-1 font-mono text-xs text-[#FAAD36]">
                            <Clock className="w-3.5 h-3.5" />
                            {match.day} • {match.timeLabel}
                          </span>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => {
                          if (isEditing) {
                            setEditingLogisticsId(null);
                          } else {
                            setEditingLogisticsId(match.id);
                            setLogisticsDraft({
                              venue: match.venue,
                              timeLabel: match.timeLabel,
                              day: match.day,
                              round: match.round,
                            });
                          }
                        }}
                        className="self-start sm:self-auto inline-flex items-center gap-1.5 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 px-3 py-2 text-xs font-bold uppercase text-white/85 transition"
                      >
                        <Edit3 className="w-3.5 h-3.5 text-[var(--color-primary-flame)]" />
                        <span>{isEditing ? 'Cancel Edit' : 'Edit Venue / Time'}</span>
                      </button>
                    </div>

                    {/* Collapsible Logistics Editor */}
                    {isEditing && (
                      <div className="rounded-2xl border border-[#FAAD36]/40 bg-white/[0.04] p-4 space-y-3">
                        <div className="text-xs font-mono uppercase text-[#FAAD36] font-bold">
                          UPDATE MATCH LOCATION, TIME &amp; ROUND INFO
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          <input
                            type="text"
                            value={logisticsDraft.venue}
                            onChange={(e) =>
                              setLogisticsDraft({
                                ...logisticsDraft,
                                venue: e.target.value,
                              })
                            }
                            placeholder="Venue / Court"
                            className="rounded-xl border border-white/20 bg-black px-3 py-2 text-sm text-white"
                          />
                          <input
                            type="text"
                            value={logisticsDraft.timeLabel}
                            onChange={(e) =>
                              setLogisticsDraft({
                                ...logisticsDraft,
                                timeLabel: e.target.value,
                              })
                            }
                            placeholder="Time (e.g. 18:30 IST)"
                            className="rounded-xl border border-white/20 bg-black px-3 py-2 text-sm text-white"
                          />
                          <input
                            type="text"
                            value={logisticsDraft.round}
                            onChange={(e) =>
                              setLogisticsDraft({
                                ...logisticsDraft,
                                round: e.target.value,
                              })
                            }
                            placeholder="Round Label"
                            className="rounded-xl border border-white/20 bg-black px-3 py-2 text-sm text-white"
                          />
                        </div>
                        <button
                          type="button"
                          onClick={() => handleSaveLogistics(match)}
                          className="inline-flex items-center gap-1.5 rounded-xl bg-[var(--color-primary-flame)] px-4 py-2 text-xs font-bold uppercase text-white"
                        >
                          <Save className="w-3.5 h-3.5" />
                          <span>Save &amp; Broadcast Match Info</span>
                        </button>
                      </div>
                    )}

                    {/* Scoreboard Readout */}
                    <div className="rounded-2xl border border-white/12 bg-black/70 p-4 grid grid-cols-11 items-center gap-2">
                      <div className="col-span-4">
                        <div className="font-bold text-base uppercase text-white truncate">
                          {match.teamA.shortName}
                        </div>
                        <div className="text-xs text-white/60 truncate">
                          {match.teamA.name}
                        </div>
                        {match.sportType === 'ULTIMATE_FRISBEE' && (
                          <span className="mt-1 inline-block rounded bg-[var(--color-primary-flame)]/20 border border-[var(--color-primary-flame)]/40 px-2 py-0.5 font-mono text-xs text-[var(--color-primary-flame)]">
                            {match.nuances.lineRoleA}
                          </span>
                        )}
                      </div>

                      <div
                        className="col-span-3 text-center text-3xl sm:text-4xl font-black text-white"
                        style={{ fontFamily: 'var(--font-header-spartan)' }}
                      >
                        <span className="text-[var(--color-primary-flame)]">
                          {match.teamA.score}
                        </span>{' '}
                        - <span>{match.teamB.score}</span>
                      </div>

                      <div className="col-span-4 text-right">
                        <div className="font-bold text-base uppercase text-white truncate">
                          {match.teamB.shortName}
                        </div>
                        <div className="text-xs text-white/60 truncate">
                          {match.teamB.name}
                        </div>
                        {match.sportType === 'ULTIMATE_FRISBEE' && (
                          <span className="mt-1 inline-block rounded bg-white/10 px-2 py-0.5 font-mono text-xs text-white/80">
                            {match.nuances.lineRoleB}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* ONCE MATCH IS LIVE: Live Score Update, Timer & Nuance Controls Appear */}
                    {isLive ? (
                      <div className="rounded-2xl border border-[var(--color-primary-flame)]/40 bg-[var(--color-primary-flame)]/10 p-4 space-y-4">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="font-mono text-xs font-bold uppercase text-[var(--color-primary-flame)] flex items-center gap-1.5">
                            <Radio className="w-4 h-4 animate-pulse" />
                            LIVE SCORE &amp; TIMER CONSOLE (UPDATES USER SCREENS INSTANTLY)
                          </span>
                          <div className="flex items-center gap-2">
                            <button
                              type="button"
                              onClick={() =>
                                onUpdateEvent({
                                  ...match,
                                  clockSeconds: match.clockSeconds + 60,
                                })
                              }
                              className="rounded-lg bg-black/60 border border-white/15 px-2.5 py-1 font-mono text-xs text-[#FAAD36] hover:bg-black"
                            >
                              Clock +1:00 ({Math.floor(match.clockSeconds / 60)}m)
                            </button>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <div className="flex items-center gap-2">
                            <button
                              type="button"
                              onClick={() => handleQuickScoreUpdate(match, 'A', 1)}
                              className="flex-1 rounded-xl bg-[var(--color-primary-flame)] hover:bg-[#ff6a1a] py-2.5 text-xs font-black uppercase text-white shadow"
                            >
                              +1 {match.teamA.shortName}
                            </button>
                            <button
                              type="button"
                              onClick={() => handleQuickScoreUpdate(match, 'A', -1)}
                              className="rounded-xl bg-black/60 border border-white/15 px-3 py-2.5 text-xs font-bold text-white/75 hover:text-white"
                            >
                              -1
                            </button>
                          </div>

                          <div className="flex items-center gap-2">
                            <button
                              type="button"
                              onClick={() => handleQuickScoreUpdate(match, 'B', 1)}
                              className="flex-1 rounded-xl bg-white/15 hover:bg-[var(--color-primary-flame)] py-2.5 text-xs font-black uppercase text-white shadow"
                            >
                              +1 {match.teamB.shortName}
                            </button>
                            <button
                              type="button"
                              onClick={() => handleQuickScoreUpdate(match, 'B', -1)}
                              className="rounded-xl bg-black/60 border border-white/15 px-3 py-2.5 text-xs font-bold text-white/75 hover:text-white"
                            >
                              -1
                            </button>
                          </div>
                        </div>
                      </div>
                    ) : isCompleted && match.winner ? (
                      <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300 font-semibold flex items-center justify-between">
                        <span>🏆 Winner: {match.winner.teamName}</span>
                        <span className="text-xs font-mono">{match.winner.reason}</span>
                      </div>
                    ) : (
                      <div className="text-xs text-white/60 font-mono flex items-center justify-between">
                        <span>
                          Click &quot;Make Match LIVE&quot; above to unlock live scoring &amp;
                          match clock controls.
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
