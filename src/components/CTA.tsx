import { ArrowRight } from 'lucide-react';

interface CTAProps {
  onGetStarted: () => void;
  onScheduleDemo: () => void;
}

const stats = [
  { value: '500+', label: 'Studios' },
  { value: '₹2Cr+', label: 'Revenue tracked' },
  { value: '98%',  label: 'Satisfaction' },
];

export default function CTA({ onGetStarted, onScheduleDemo }: CTAProps) {
  return (
    <section className="relative">
      {/* Rainbow divider at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] z-10" style={{ background: 'linear-gradient(to right, #8B5CF6, #6366F1, #3B82F6, #22C55E, #EAB308, #F97316, #EF4444)' }} />

      <div className="grid md:grid-cols-2 min-h-[420px]">

        {/* Left — cream, text */}
        <div className="bg-[#FAFAF7] flex items-center px-10 lg:px-20 py-20">
          <div>
            <p className="text-indigo-700 text-xs font-semibold uppercase tracking-widest mb-5">
              Free Trial · No Credit Card
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-5">
              Grow your studio.<br />Start for free.
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-sm">
              Join studio owners, freelancers, and content creators managing billing, bookings, and clients — all from one place.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={onGetStarted}
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-white hover:opacity-90 transition shadow-md"
                style={{ background: '#4F46E5' }}
              >
                Get Started Free
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={onScheduleDemo}
                className="inline-flex items-center px-7 py-3.5 rounded-xl font-semibold text-sm text-indigo-700 border border-indigo-600 hover:border-indigo-700 hover:text-indigo-900 transition"
              >
                Schedule a Demo
              </button>
            </div>
          </div>
        </div>

        {/* Right — indigo, stats */}
        <div className="bg-indigo-600 flex items-center px-10 lg:px-20 py-20">
          <div className="w-full space-y-10">
            {stats.map((s, i) => (
              <div key={i} className={`flex items-end gap-4 ${i < stats.length - 1 ? 'pb-10 border-b border-indigo-500' : ''}`}>
                <span className="text-5xl lg:text-6xl font-bold text-white leading-none">{s.value}</span>
                <span className="text-indigo-100 text-sm pb-2">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
