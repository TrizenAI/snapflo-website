import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Features from './components/Features';
import SocialMediaSection from './components/SocialMediaSection';
import Analytics from './components/Analytics';
import CTA from './components/CTA';
import Footer from './components/Footer';
import SignupModal from './components/SignupModal';
import ContactModal from './components/ContactModal';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookiePolicy from './pages/CookiePolicy';
import DataDeletion from './pages/DataDeletion';

function HomePage() {
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleGetStarted = () => {
    setIsSignupModalOpen(true);
  };

  const handleScheduleDemo = () => {
    setIsContactModalOpen(true);
  };

  return (
    <>
      <Hero onGetStarted={handleGetStarted} />
      <Features />
      <SocialMediaSection />
      <Analytics />
      <CTA onGetStarted={handleGetStarted} onScheduleDemo={handleScheduleDemo} />
      <Footer />
      <SignupModal
        isOpen={isSignupModalOpen}
        onClose={() => setIsSignupModalOpen(false)}
      />
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/data-deletion" element={<DataDeletion />} />
      </Routes>
    </div>
  );
}

export default App;
