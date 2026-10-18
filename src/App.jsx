import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import PillarExplorePage from './pages/PillarExplorePage';
import ScrollToTop from './components/ScrollToTop';
import OrbitChatbot from './components/Chatbot/OrbitChatbot';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="relative min-h-screen bg-white text-slate-900">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutPage />} />

          {/* Explore Pillar Pages (From MegaMenu "Explore Full Pillar" & Direct Links) */}
          <Route path="/services/ecommerce-management" element={<PillarExplorePage pillarOverride="ecommerce-management" />} />
          <Route path="/services/digital-marketing" element={<PillarExplorePage pillarOverride="digital-marketing" />} />
          <Route path="/services/website-development" element={<PillarExplorePage pillarOverride="website-development" />} />
          <Route path="/services/youtube-video-services" element={<PillarExplorePage pillarOverride="youtube-video-services" />} />
          <Route path="/services/creative-services" element={<PillarExplorePage pillarOverride="creative-services" />} />
          <Route path="/services/integrated-solutions" element={<PillarExplorePage pillarOverride="integrated-solutions" />} />

          {/* Direct Root Pillar URLs */}
          <Route path="/ecommerce-management" element={<PillarExplorePage pillarOverride="ecommerce-management" />} />
          <Route path="/digital-marketing" element={<PillarExplorePage pillarOverride="digital-marketing" />} />
          <Route path="/website-development" element={<PillarExplorePage pillarOverride="website-development" />} />
          <Route path="/youtube-video-services" element={<PillarExplorePage pillarOverride="youtube-video-services" />} />
          <Route path="/creative-services" element={<PillarExplorePage pillarOverride="creative-services" />} />
          <Route path="/integrated-solutions" element={<PillarExplorePage pillarOverride="integrated-solutions" />} />

          {/* Dedicated Dynamic Pillar Exploration Routes */}
          <Route path="/pillars/:pillarId" element={<PillarExplorePage />} />
          <Route path="/explore-pillars" element={<PillarExplorePage />} />
          <Route path="/explore-pillar" element={<PillarExplorePage />} />
          <Route path="/explore" element={<PillarExplorePage />} />

          {/* Individual Detailed Service Routes (Amazon, Flipkart, SEO, Meta Ads, etc.) */}
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
        </Routes>
        {/* Floating AI Astronaut Chatbot */}
        <OrbitChatbot />
      </div>
    </BrowserRouter>
  );
}
