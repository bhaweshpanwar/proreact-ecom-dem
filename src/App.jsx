import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Home2Page from './pages/Home2/Home2Page';
import AboutPage from './pages/AboutPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import PillarExplorePage from './pages/PillarExplorePage';
import MarketplacePage from './pages/MarketplacePage';
import ScrollToTop from './components/ScrollToTop';
import OrbitChatbot from './components/Chatbot/OrbitChatbot';

function AppContent() {
  return (
    <div className="relative min-h-screen bg-white text-slate-900">
      <Header />
      <Routes>
        <Route path="/" element={<Home2Page />} />
        <Route path="/home2" element={<Home2Page />} />
        <Route path="/home1" element={<HomePage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/marketplace" element={<MarketplacePage />} />

        {/* Explore Pillar Pages (From MegaMenu "Explore Full Pillar" & Direct Links) */}
        <Route path="/services/ecommerce-management" element={<PillarExplorePage pillarOverride="ecommerce-management" />} />
        <Route path="/services/digital-marketing" element={<PillarExplorePage pillarOverride="digital-marketing" />} />
        <Route path="/services/web-development" element={<PillarExplorePage pillarOverride="web-development" />} />
        <Route path="/services/website-development" element={<PillarExplorePage pillarOverride="web-development" />} />
        <Route path="/services/creative-design" element={<PillarExplorePage pillarOverride="creative-design" />} />
        <Route path="/services/creative-services" element={<PillarExplorePage pillarOverride="creative-design" />} />
        <Route path="/services/photography-photoshoots" element={<PillarExplorePage pillarOverride="photography-photoshoots" />} />
        <Route path="/services/video-production-editing" element={<PillarExplorePage pillarOverride="video-production-editing" />} />
        <Route path="/services/youtube-video-services" element={<PillarExplorePage pillarOverride="video-production-editing" />} />
        <Route path="/services/youtube-strategy-management" element={<PillarExplorePage pillarOverride="youtube-strategy-management" />} />
        <Route path="/services/integrated-solutions" element={<PillarExplorePage pillarOverride="integrated-solutions" />} />

        {/* Direct Root Pillar URLs */}
        <Route path="/ecommerce-management" element={<PillarExplorePage pillarOverride="ecommerce-management" />} />
        <Route path="/digital-marketing" element={<PillarExplorePage pillarOverride="digital-marketing" />} />
        <Route path="/web-development" element={<PillarExplorePage pillarOverride="web-development" />} />
        <Route path="/website-development" element={<PillarExplorePage pillarOverride="web-development" />} />
        <Route path="/creative-design" element={<PillarExplorePage pillarOverride="creative-design" />} />
        <Route path="/creative-services" element={<PillarExplorePage pillarOverride="creative-design" />} />
        <Route path="/photography-photoshoots" element={<PillarExplorePage pillarOverride="photography-photoshoots" />} />
        <Route path="/video-production-editing" element={<PillarExplorePage pillarOverride="video-production-editing" />} />
        <Route path="/youtube-video-services" element={<PillarExplorePage pillarOverride="video-production-editing" />} />
        <Route path="/youtube-strategy-management" element={<PillarExplorePage pillarOverride="youtube-strategy-management" />} />
        <Route path="/integrated-solutions" element={<PillarExplorePage pillarOverride="integrated-solutions" />} />

        {/* Dedicated Dynamic Pillar Exploration Routes */}
        <Route path="/pillars/:pillarId" element={<PillarExplorePage />} />
        <Route path="/explore-pillars" element={<PillarExplorePage />} />
        <Route path="/explore-pillar" element={<PillarExplorePage />} />
        <Route path="/explore" element={<PillarExplorePage />} />

        {/* Individual Detailed Service Routes (Amazon, Flipkart, SEO, Meta Ads, etc.) */}
        <Route path="/services/:slug" element={<ServiceDetailPage />} />
      </Routes>
      <OrbitChatbot />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppContent />
    </BrowserRouter>
  );
}
