import { useState } from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import SocialMediaSection from './components/SocialMediaSection';
import Analytics from './components/Analytics';
import CTA from './components/CTA';
import Footer from './components/Footer';
import SignupModal from './components/SignupModal';
import ContactModal from './components/ContactModal';

function App() {
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleGetStarted = () => {
    setIsSignupModalOpen(true);
  };

  const handleScheduleDemo = () => {
    setIsContactModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
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
    </div>
  );
}

export default App;
