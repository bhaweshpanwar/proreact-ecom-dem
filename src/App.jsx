import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
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
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
          {/* Official Direct Pillar URLs from Client Brief */}
          <Route path="/ecommerce-management" element={<ServiceDetailPage slugOverride="ecommerce-management" />} />
          <Route path="/digital-marketing" element={<ServiceDetailPage slugOverride="digital-marketing" />} />
          <Route path="/website-development" element={<ServiceDetailPage slugOverride="website-development" />} />
          <Route path="/youtube-video-services" element={<ServiceDetailPage slugOverride="youtube-video-services" />} />
          <Route path="/creative-services" element={<ServiceDetailPage slugOverride="creative-services" />} />
          <Route path="/integrated-solutions" element={<ServiceDetailPage slugOverride="integrated-solutions" />} />
        </Routes>
        {/* Floating AI Astronaut Chatbot */}
        <OrbitChatbot />
      </div>
    </BrowserRouter>
  );
}
