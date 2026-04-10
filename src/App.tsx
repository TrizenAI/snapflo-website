import { useState, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';

const Features = lazy(() => import('./components/Features'));
const SocialMediaSection = lazy(() => import('./components/SocialMediaSection'));
const Analytics = lazy(() => import('./components/Analytics'));
const CTA = lazy(() => import('./components/CTA'));
const Footer = lazy(() => import('./components/Footer'));
const SignupModal = lazy(() => import('./components/SignupModal'));
const ContactModal = lazy(() => import('./components/ContactModal'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));
const CookiePolicy = lazy(() => import('./pages/CookiePolicy'));
const DataDeletion = lazy(() => import('./pages/DataDeletion'));

function HomePage() {
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleGetStarted = () => setIsSignupModalOpen(true);
  const handleScheduleDemo = () => setIsContactModalOpen(true);

  return (
    <>
      <Hero onGetStarted={handleGetStarted} onScheduleDemo={handleScheduleDemo} />
      <main>
        <Suspense fallback={null}>
          <Features />
          <SocialMediaSection />
          <Analytics />
          <CTA onGetStarted={handleGetStarted} onScheduleDemo={handleScheduleDemo} />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      {isSignupModalOpen && (
        <Suspense fallback={null}>
          <SignupModal isOpen onClose={() => setIsSignupModalOpen(false)} />
        </Suspense>
      )}
      {isContactModalOpen && (
        <Suspense fallback={null}>
          <ContactModal isOpen onClose={() => setIsContactModalOpen(false)} />
        </Suspense>
      )}
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<Suspense fallback={null}><PrivacyPolicy /></Suspense>} />
        <Route path="/terms-of-service" element={<Suspense fallback={null}><TermsOfService /></Suspense>} />
        <Route path="/cookie-policy" element={<Suspense fallback={null}><CookiePolicy /></Suspense>} />
        <Route path="/data-deletion" element={<Suspense fallback={null}><DataDeletion /></Suspense>} />
      </Routes>
    </div>
  );
}

export default App;
