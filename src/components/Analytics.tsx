import { useEffect, useRef, useState } from 'react';
import { BarChart3, TrendingUp, DollarSign, Users, Calendar, Target } from 'lucide-react';

const stats = [
  { icon: DollarSign, display: '₹45,280', label: 'Monthly Revenue',    change: '+24% from last month', gradient: 'linear-gradient(135deg, #22C55E, #16A34A)' },
  { icon: Calendar,   display: '142',      label: 'Bookings This Month', change: '+18% from last month', gradient: 'linear-gradient(135deg, #3B82F6, #2563EB)' },
  { icon: Users,      display: '1,847',    label: 'Active Customers',    change: '+32% from last month', gradient: 'linear-gradient(135deg, #EF4444, #DC2626)' },
];

const revenueItems = [
  { label: 'Wedding Photography', value: '₹28,500', pct: 63 },
  { label: 'Portrait Sessions',   value: '₹9,200',  pct: 20 },
  { label: 'Product Sales',       value: '₹7,580',  pct: 17 },
];

const metrics = [
  { label: 'Booking Rate',          value: 87 },
  { label: 'Customer Satisfaction', value: 94 },
  { label: 'Social Engagement',     value: 76 },
];

export default function Analytics() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="analytics" ref={sectionRef} className="bg-[#FAFAF7] relative min-h-screen flex flex-col justify-center py-16 sm:py-20 lg:py-24">
      <div className="absolute bottom-0 left-0 right-0 h-[3px]" style={{ background: 'linear-gradient(to right, #8B5CF6, #6366F1, #3B82F6, #22C55E, #EAB308, #F97316, #EF4444)' }} />

      <style>{`
        .analytics-gradient {
          animation: gradient-shift 10s linear infinite;
        }
        @keyframes gradient-shift {
          0%   { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
        .bar-fill {
          width: 0%;
          transition: width 1.2s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .bar-fill.animate { width: var(--target-width); }
        .stat-card {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .stat-card.animate {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-10 sm:mb-14 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Data-Driven{' '}
              <span
                className={`text-transparent bg-clip-text ${visible ? 'analytics-gradient' : ''}`}
                style={{ backgroundImage: 'linear-gradient(90deg, #22C55E, #3B82F6, #8B5CF6, #EF4444, #22C55E)', backgroundSize: '200% auto' }}
              >
                Insights for Growth
              </span>
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              Make smarter business decisions with comprehensive analytics. Track what matters and watch your studio thrive.
            </p>
          </div>

          {/* Stat cards — slide up on scroll */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {stats.map((s, i) => (
              <div
                key={i}
                className={`stat-card bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow ${visible ? 'animate' : ''}`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-md" style={{ background: s.gradient }}>
                  <s.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-1">{s.display}</h3>
                <p className="text-gray-500 mb-3">{s.label}</p>
                <div className="flex items-center gap-1" style={{ color: s.change.startsWith('+') ? '#16A34A' : '#DC2626' }}>
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-sm font-semibold">{s.change}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Detail panels */}
          <div className="grid lg:grid-cols-2 gap-6">

            {/* Revenue breakdown */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #3B82F6, #6366F1)' }}>
                  <BarChart3 className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Revenue Analytics</h3>
              </div>
              <ul className="space-y-4">
                {revenueItems.map((item, i) => (
                  <li key={i}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-500 text-sm">{item.label}</span>
                      <span className="font-semibold text-gray-900 text-sm">{item.value}</span>
                    </div>
                    <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className={`bar-fill h-full rounded-full ${visible ? 'animate' : ''}`}
                        style={{
                          '--target-width': `${item.pct}%`,
                          background: '#6366F1',
                          transitionDelay: `${300 + i * 150}ms`,
                        } as React.CSSProperties}
                      />
                    </div>
                  </li>
                ))}
                <li className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-gray-900 font-semibold">Total Revenue</span>
                  <span className="font-bold text-xl text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, #3B82F6, #8B5CF6)' }}>
                    ₹45,280
                  </span>
                </li>
              </ul>
            </div>

            {/* Performance metrics */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #EF4444, #F97316)' }}>
                  <Target className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Performance Metrics</h3>
              </div>
              <ul className="space-y-6">
                {metrics.map((m, i) => (
                  <li key={i}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-500">{m.label}</span>
                      <span className="font-semibold text-gray-900">{m.value}%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className={`bar-fill h-full rounded-full ${visible ? 'animate' : ''}`}
                        style={{
                          '--target-width': `${m.value}%`,
                          background: '#6366F1',
                          transitionDelay: `${300 + i * 150}ms`,
                        } as React.CSSProperties}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
