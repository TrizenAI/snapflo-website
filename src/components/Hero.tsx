import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

import img1 from '../assets/arrangement-professional-photographer-equipment.jpg';
import img2 from '../assets/photographer-taking-photos-handsome-model.jpg';
import img3 from '../assets/young-man-working-his-photography-studio.jpg';
import img4 from '../assets/full-shot-woman-working-as-photographer.jpg';
import img5 from '../assets/man-working-his-photography-studio.jpg';

const wallPhotos = [
  { src: img1, style: { top: '2%',    left: '1%',   width: '50%', rotate: '-2deg',   zIndex: 1 } },
  { src: img2, style: { top: '3%',    right: '1%',  width: '44%', rotate: '3deg',    zIndex: 2 } },
  { src: img3, style: { top: '28%',   left: '12%',  width: '52%', rotate: '-1.5deg', zIndex: 4 } },
  { src: img4, style: { bottom: '3%', left: '2%',   width: '43%', rotate: '2.5deg',  zIndex: 3 } },
  { src: img5, style: { bottom: '2%', right: '2%',  width: '50%', rotate: '-2.5deg', zIndex: 3 } },
];

interface HeroProps {
  onGetStarted: () => void;
}

export default function Hero({ onGetStarted }: HeroProps) {
  const [rolled, setRolled] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setRolled(true), 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#FAFAF7]">

      {/* Soft VIBGYOR pastel orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 left-[5%]    w-80 h-80  bg-violet-200/50 rounded-full blur-3xl" />
        <div className="absolute top-10  left-[35%]   w-64 h-64  bg-indigo-200/40 rounded-full blur-3xl" />
        <div className="absolute -top-10 right-[10%]  w-96 h-96  bg-blue-200/40   rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-[5%]  w-72 h-72  bg-green-200/30  rounded-full blur-3xl" />
        <div className="absolute bottom-0  left-[40%] w-56 h-56  bg-yellow-200/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2  right-[2%]  w-64 h-64  bg-orange-200/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-16 right-[10%] w-80 h-80 bg-red-200/30  rounded-full blur-3xl" />
      </div>

      {/* Rainbow spectrum bar at very top */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px]"
        style={{ background: 'linear-gradient(to right, #8B5CF6, #6366F1, #3B82F6, #22C55E, #EAB308, #F97316, #EF4444)' }}
      />

      {/* Navigation */}
      <nav className="relative z-20 container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <img src="/snapflo-side-logo.png" alt="Snapflo" className="h-12" fetchPriority="high" decoding="sync" />
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-500 hover:text-gray-900 transition font-medium">Features</a>
            <a href="#analytics" className="text-gray-500 hover:text-gray-900 transition font-medium">Analytics</a>
            <button
              onClick={onGetStarted}
              className="px-6 py-2.5 rounded-lg font-semibold text-white shadow-lg hover:opacity-90 transition"
              style={{ background: '#6366F1' }}
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — text */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Every frame,
              <span
                className="block mt-2 overflow-hidden"
                style={{ perspective: '600px', lineHeight: '1.25' }}
              >
                {/* "captured." — rolls out upward */}
                <span
                  className="text-transparent bg-clip-text block"
                  style={{
                    backgroundImage: 'linear-gradient(to right, #8B5CF6, #6366F1, #3B82F6, #22C55E, #EAB308, #F97316, #EF4444)',
                    transformOrigin: 'top center',
                    transform: rolled ? 'rotateX(90deg)' : 'rotateX(0deg)',
                    opacity: rolled ? 0 : 1,
                    transition: 'transform 0.55s cubic-bezier(0.4,0,0.2,1), opacity 0.4s ease',
                    position: rolled ? 'absolute' : 'relative',
                  }}
                >
                  captured.
                </span>
                {/* "delivered." — rolls in from below */}
                <span
                  className="text-transparent bg-clip-text block"
                  style={{
                    backgroundImage: 'linear-gradient(to right, #8B5CF6, #6366F1, #3B82F6, #22C55E, #EAB308, #F97316, #EF4444)',
                    transformOrigin: 'bottom center',
                    transform: rolled ? 'rotateX(0deg)' : 'rotateX(-90deg)',
                    opacity: rolled ? 1 : 0,
                    transition: 'transform 0.55s cubic-bezier(0.4,0,0.2,1) 0.1s, opacity 0.4s ease 0.1s',
                    position: rolled ? 'relative' : 'absolute',
                  }}
                >
                  delivered.
                </span>
              </span>
            </h1>

            <p className="text-lg lg:text-xl text-gray-500 mb-8 max-w-xl mx-auto lg:mx-0">
              One platform for every kind of creator.{' '}<br />Book clients, deliver stunning galleries, send invoices, and track your growth —{' '}
              <span className="text-transparent bg-clip-text font-semibold" style={{ backgroundImage: 'linear-gradient(to right, #6366F1, #EF4444)' }}>
                all under one roof.
              </span>
            </p>

            <button
              onClick={onGetStarted}
              className="group text-white px-8 py-4 rounded-xl font-semibold text-lg inline-flex items-center gap-3 shadow-xl transition-all hover:scale-[1.02] hover:shadow-2xl"
              style={{ background: '#6366F1' }}
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right — photo wall */}
          <div className="relative h-[480px] lg:h-[540px]">
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
                  boxShadow: '0 8px 24px rgba(0,0,0,0.15), 0 2px 6px rgba(0,0,0,0.08)',
                }}
              >
                <img src={photo.src} alt="" className="w-full h-full object-cover" loading="eager" fetchPriority="high" decoding="sync" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade to white */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#FAFAF7] to-transparent" />
      {/* Rainbow divider */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px]" style={{ background: 'linear-gradient(to right, #8B5CF6, #6366F1, #3B82F6, #22C55E, #EAB308, #F97316, #EF4444)' }} />
    </div>
  );
}
