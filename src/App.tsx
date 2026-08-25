import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Navbar } from './sections/Navbar/Navbar';
import { Footer } from './sections/Footer/Footer';
import { HomePage } from './pages/HomePage/HomePage';
import { StoryPage } from './pages/StoryPage/StoryPage';
import { VillasPage } from './pages/VillasPage/VillasPage';
import { VillaPage } from './pages/VillaPage/VillaPage';
import { BorgoPage } from './pages/BorgoPage/BorgoPage';
import { OriginsPage } from './pages/OriginsPage/OriginsPage';
import { ScarpaWineryPage } from './pages/ScarpaWineryPage/ScarpaWineryPage';
import { PeoplePage } from './pages/PeoplePage/PeoplePage';

import './App.css';
import { PressPage } from './pages/PressPage/PressPage';
import { ExperiencesPage } from './pages/ExperiencesPage/ExperiencesPage';
import { StaysPage } from './pages/StaysPage/StaysPage';
import { DiscoverPage } from './pages/DiscoverPage/DiscoverPage';
import { RegionPage } from './pages/RegionPage/RegionPage';
import { JournalPage } from './pages/JournalPage/JournalPage';
import { JournalArticlePage } from './pages/JournalArticlePage/JournalArticlePage';
import { CookieBanner } from './components/ui/CookieBanner/CookieBanner';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';

export default function App() {
  const location = useLocation();
  return (
    <div className="min-h-dvh bg-white text-ink-900">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/it" element={<HomePage />} />

        <Route path="/villas" element={<VillasPage />} />
        <Route path="/it/villas" element={<VillasPage />} />

        <Route path="/villas/:villaId" element={<VillaPage />} />
        <Route path="/it/villas/:villaId" element={<VillaPage />} />

        <Route path="/borgo" element={<BorgoPage />} />
        <Route path="/it/borgo" element={<BorgoPage />} />

        <Route path="/experiences" element={<ExperiencesPage />} />
        <Route path="/it/experiences" element={<ExperiencesPage />} />

        <Route path="/story" element={<StoryPage />} />
        <Route path="/it/story" element={<StoryPage />} />

        <Route path="/story/origins" element={<OriginsPage />} />
        <Route path="/it/story/origins" element={<OriginsPage />} />

        <Route path="/story/scarpa-winery" element={<ScarpaWineryPage />} />
        <Route path="/it/story/scarpa-winery" element={<ScarpaWineryPage />} />

        <Route path="/story/people" element={<PeoplePage />} />
        <Route path="/it/story/people" element={<PeoplePage />} />

        <Route path="/story/press" element={<PressPage />} />
        <Route path="/it/story/press" element={<PressPage />} />

        <Route path="/stays" element={<StaysPage />} />
        <Route path="/it/stays" element={<StaysPage />} />

        <Route path="/discover" element={<DiscoverPage />} />
        <Route path="/it/discover" element={<DiscoverPage />} />

        <Route path="/discover/region" element={<RegionPage />} />
        <Route path="/it/discover/region" element={<RegionPage />} />

        <Route path="/discover/journal" element={<JournalPage />} />
        <Route path="/it/discover/journal" element={<JournalPage />} />

        <Route path="/discover/journal/:articleId" element={<JournalArticlePage />} />
        <Route path="/it/discover/journal/:articleId" element={<JournalArticlePage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer key={location.pathname} />

      <CookieBanner />
    </div>
  );
}
