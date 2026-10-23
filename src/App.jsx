import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import HomePage from './pages/HomePage';
import SchedulePage from './pages/SchedulePage';
import AlbumPage from './pages/AlbumPage';
import CommitteePage from './pages/CommitteePage';
import BlogPage from './pages/BlogPage';
import FaqPage from './pages/FaqPage';
import ContactPage from './pages/ContactPage';
import LiveEventsPage from './pages/LiveEventsPage';
import EventSpecificPage from './pages/EventSpecificPage';
import AdminDashboard from './pages/AdminDashboard';
import RegistrationFlow from './pages/RegistrationFlow';

import {
  INITIAL_EVENTS,
  INITIAL_UNIVERSITY_MEDALS,
} from './data/liveEventsData';

export default function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('kuru-theme') || 'dark';
    }
    return 'dark';
  });

  // Default opens in Viewer's View (isAdmin = false)
  const [isAdmin, setIsAdmin] = useState(false);

  const [events, setEvents] = useState(INITIAL_EVENTS);
  const [universities, setUniversities] = useState(INITIAL_UNIVERSITY_MEDALS);
  const [tournaments, setTournaments] = useState([]);
  const [registeredPool, setRegisteredPool] = useState([]);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
    localStorage.setItem('kuru-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const toggleAdminRole = () => {
    setIsAdmin((prev) => !prev);
  };

  // Update a specific match state (live score, clock, sport nuances, automatic winner)
  const handleUpdateEvent = (updatedEvent) => {
    setEvents((prev) =>
      prev.map((ev) => (ev.id === updatedEvent.id ? updatedEvent : ev))
    );
  };

  // Create a new Tournament and prepend its auto-generated Round 1 matches to live events
  const handleCreateTournamentAndMatches = (newTournament, round1Matches) => {
    setTournaments((prev) => [newTournament, ...prev]);
    setEvents((prev) => [...round1Matches, ...prev]);
  };

  // Advance an existing Tournament to the next round and auto-generate next matchups
  const handleAppendTournamentRound = (
    tournamentId,
    nextRoundNum,
    updatedParticipants,
    nextMatches
  ) => {
    setTournaments((prev) =>
      prev.map((t) =>
        t.id === tournamentId
          ? {
              ...t,
              currentRound: nextRoundNum,
              participants: updatedParticipants,
            }
          : t
      )
    );
    setEvents((prev) => [...nextMatches, ...prev]);
  };

  // Automatically add registered participants into the Tournament Seeding Pool
  const handleAddParticipantToPool = (newParticipant) => {
    setRegisteredPool((prev) => [...prev, newParticipant]);
  };

  // Automatically credit Gold/Silver medals to the category and overall tally when a match concludes
  const handleAwardWinnerMedal = (category, winnerUniId, loserUniId) => {
    setUniversities((prev) =>
      prev.map((uni) => {
        if (uni.id === winnerUniId) {
          const currentCat = uni.medals[category] || {
            gold: 0,
            silver: 0,
            bronze: 0,
            points: 0,
          };
          return {
            ...uni,
            medals: {
              ...uni.medals,
              [category]: {
                ...currentCat,
                gold: currentCat.gold + 1,
                points: currentCat.points + 50,
              },
            },
          };
        }
        if (uni.id === loserUniId) {
          const currentCat = uni.medals[category] || {
            gold: 0,
            silver: 0,
            bronze: 0,
            points: 0,
          };
          return {
            ...uni,
            medals: {
              ...uni.medals,
              [category]: {
                ...currentCat,
                silver: currentCat.silver + 1,
                points: currentCat.points + 30,
              },
            },
          };
        }
        return uni;
      })
    );
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-[#FAF9F6] text-zinc-900 dark:bg-[var(--color-primary-black)] dark:text-[var(--color-primary-white)] flex flex-col selection:bg-[var(--color-primary-flame)] selection:text-white transition-colors duration-300">
        <Navbar
          theme={theme}
          onToggleTheme={toggleTheme}
          isAdmin={isAdmin}
          onToggleAdmin={toggleAdminRole}
        />
        <main className="flex-1 flex flex-col">
          <Routes>
            {/* Merged Home Page */}
            <Route path="/" element={<HomePage />} />

            {/* Merged Schedule Page */}
            <Route path="/schedule" element={<SchedulePage />} />

            {/* Merged Album Page */}
            <Route path="/album" element={<AlbumPage />} />

            {/* Merged Committee Page */}
            <Route path="/committee" element={<CommitteePage />} />

            {/* Merged Blog / Stories Page */}
            <Route path="/blog" element={<BlogPage />} />

            {/* Merged FAQ Page */}
            <Route path="/faq" element={<FaqPage />} />

            {/* War Room / Contact Page */}
            <Route path="/contact" element={<ContactPage theme={theme} />} />

            {/* Live Arena & Match Center */}
            <Route
              path="/live-events"
              element={
                <LiveEventsPage
                  events={events}
                  universities={universities}
                  isAdmin={isAdmin}
                />
              }
            />
            <Route
              path="/live-events/:eventId"
              element={
                <EventSpecificPage
                  events={events}
                  isAdmin={isAdmin}
                  onUpdateEvent={handleUpdateEvent}
                  onAwardWinnerMedal={handleAwardWinnerMedal}
                />
              }
            />

            {/* Contingent Registration */}
            <Route
              path="/register"
              element={
                <RegistrationFlow
                  onRegisterSuccess={handleAddParticipantToPool}
                />
              }
            />

            {/* Admin Management Dashboard */}
            <Route
              path="/admin"
              element={
                isAdmin ? (
                  <AdminDashboard
                    events={events}
                    tournaments={tournaments}
                    registeredPool={registeredPool}
                    onCreateTournamentAndMatches={handleCreateTournamentAndMatches}
                    onAppendTournamentRound={handleAppendTournamentRound}
                    onUpdateEvent={handleUpdateEvent}
                    onAwardWinnerMedal={handleAwardWinnerMedal}
                    onAddParticipantToPool={handleAddParticipantToPool}
                  />
                ) : (
                  <Navigate to="/live-events" replace />
                )
              }
            />

            {/* Fallback route to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}