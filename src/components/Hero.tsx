import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

// Static public paths — browser can discover & preload before JS runs
const wallPhotos = [
  { src: '/images/arrangement-professional-photographer-equipment.webp',  style: { top: '0%',    left: '0%',   width: '52%', rotate: '-2deg',   zIndex: 1 } },
  { src: '/images/photographer-taking-photos-handsome-model.webp',        style: { top: '0%',    right: '0%',  width: '46%', rotate: '2.5deg',  zIndex: 2 } },
  { src: '/images/young-man-working-his-photography-studio.webp',         style: { top: '30%',   left: '8%',   width: '54%', rotate: '-1deg',   zIndex: 4 } },
  { src: '/images/full-shot-woman-working-as-photographer.webp',          style: { bottom: '0%', left: '0%',   width: '45%', rotate: '2deg',    zIndex: 3 } },
  { src: '/images/man-working-his-photography-studio.webp',               style: { bottom: '0%', right: '0%',  width: '52%', rotate: '-2deg',   zIndex: 3 } },
];

const VIBGYOR = 'linear-gradient(to right, #8B5CF6, #6366F1, #3B82F6, #22C55E, #EAB308, #F97316, #EF4444)';

interface HeroProps {
  onGetStarted: () => void;
  onScheduleDemo: () => void;
}

export default function Hero({ onGetStarted, onScheduleDemo }: HeroProps) {
  const [rolled, setRolled] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setRolled(true), 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="relative overflow-hidden bg-[#FAFAF7] min-h-screen flex flex-col">

      {/* Pastel orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 left-[5%]     w-72 h-72 bg-violet-200/50 rounded-full blur-3xl" />
        <div className="absolute top-10  left-[35%]    w-56 h-56 bg-indigo-200/40 rounded-full blur-3xl" />
        <div className="absolute -top-10 right-[10%]   w-80 h-80 bg-blue-200/40   rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-[5%]   w-64 h-64 bg-green-200/30  rounded-full blur-3xl" />
        <div className="absolute bottom-0  left-[40%]  w-48 h-48 bg-yellow-200/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2  right-[2%]   w-56 h-56 bg-orange-200/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-16 right-[10%] w-72 h-72 bg-red-200/30   rounded-full blur-3xl" />
      </div>

      {/* Rainbow top bar */}
      <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: VIBGYOR }} />

      {/* Navigation */}
      <header>
      <nav className="relative z-20 container mx-auto px-4 sm:px-6 py-5">
        <div className="flex items-center justify-between">
          <img src="/snapflo-side-logo.png" alt="Snapflo" className="h-9 sm:h-11" fetchPriority="high" decoding="sync" />
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <a href="#features" className="text-gray-500 hover:text-gray-900 transition font-medium text-sm lg:text-base">Features</a>
            <a href="#analytics" className="text-gray-500 hover:text-gray-900 transition font-medium text-sm lg:text-base">Analytics</a>
            <button
              onClick={onGetStarted}
              className="px-5 py-2.5 rounded-lg font-semibold text-white hover:opacity-90 transition text-sm lg:text-base shadow-md"
              style={{ background: '#6366F1' }}
            >
              Get Started
            </button>
          </div>
          {/* Mobile CTA */}
          <button
            onClick={onGetStarted}
            className="md:hidden px-4 py-2 rounded-lg font-semibold text-white text-sm"
            style={{ background: '#6366F1' }}
          >
            Get Started
          </button>
        </div>
      </nav>
      </header>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex items-center container mx-auto px-4 sm:px-6 pt-6 pb-16 sm:pt-8 sm:pb-20 lg:pt-12 lg:pb-24">
        <div className="w-full grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Left — text */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-5 leading-tight">
              Every frame,
              {/* Fixed-height clip zone */}
              <span
                className="block mt-1 overflow-hidden relative"
                style={{ height: '1.25em' }}
              >
                {/* captured. — flips out upward */}
                <span
                  className="absolute inset-0 text-transparent bg-clip-text"
                  style={{
                    backgroundImage: VIBGYOR,
                    transformOrigin: 'center top',
                    transform: rolled ? 'translateY(-105%) scaleY(0.4)' : 'translateY(0%) scaleY(1)',
                    opacity: rolled ? 0 : 1,
                    transition: 'transform 0.55s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s ease',
                    willChange: 'transform, opacity',
                  }}
                >
                  captured.
                </span>
                {/* delivered. — flips in from bottom */}
                <span
                  className="absolute inset-0 text-transparent bg-clip-text"
                  style={{
                    backgroundImage: VIBGYOR,
                    transformOrigin: 'center bottom',
                    transform: rolled ? 'translateY(0%) scaleY(1)' : 'translateY(105%) scaleY(0.4)',
                    opacity: rolled ? 1 : 0,
                    transition: 'transform 0.55s cubic-bezier(0.4, 0, 0.2, 1) 0.05s, opacity 0.4s ease 0.05s',
                    willChange: 'transform, opacity',
                  }}
                >
                  delivered.
                </span>
              </span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-gray-500 mb-7 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              One platform for every kind of creator.<br className="hidden sm:block" />
              {' '}Book clients, deliver stunning galleries, send invoices, and track your growth —{' '}
              <span
                className="text-transparent bg-clip-text font-semibold"
                style={{ backgroundImage: 'linear-gradient(to right, #6366F1, #EF4444)' }}
              >
                all under one roof.
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <button
                onClick={onGetStarted}
                className="group text-white w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-base inline-flex items-center justify-center gap-2 shadow-xl transition-all hover:scale-[1.02] hover:shadow-2xl"
                style={{ background: '#6366F1' }}
              >
                Start Free Trial
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={onScheduleDemo}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-base inline-flex items-center justify-center gap-2 border border-indigo-400 text-indigo-500 hover:border-indigo-500 hover:text-indigo-700 transition-all hover:scale-[1.02]"
              >
                Schedule a Demo
              </button>
            </div>
          </div>

          {/* Right — photo wall */}
          <div className="order-1 lg:order-2 w-full">
            {/* Fixed-ratio container so photos scale proportionally */}
            <div className="relative w-full" style={{ paddingBottom: '75%' }}>
              {wallPhotos.map((photo, i) => (
                <div
                  key={i}
                  className="absolute overflow-hidden rounded-xl border border-white/60 transition-transform duration-300 hover:scale-[1.04] hover:z-50"
                  style={{
                    top: photo.style.top,
                    left: photo.style.left,
                    right: photo.style.right,
                    bottom: photo.style.bottom,
                    width: photo.style.width,
                    zIndex: photo.style.zIndex,
                    aspectRatio: '4/3',
                    transform: `rotate(${photo.style.rotate})`,
                    boxShadow: '0 6px 20px rgba(0,0,0,0.14), 0 2px 6px rgba(0,0,0,0.07)',
                  }}
                >
                  <img
                    src={photo.src}
                    alt=""
                    className="w-full h-full object-cover"
                    loading={i === 0 ? 'eager' : 'lazy'}
                    fetchPriority={i === 0 ? 'high' : 'low'}
                    decoding={i === 0 ? 'sync' : 'async'}
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#FAFAF7] to-transparent" />
      {/* Rainbow divider */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px]" style={{ background: VIBGYOR }} />
    </div>
  );
}
