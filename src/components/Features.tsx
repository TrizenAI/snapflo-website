import { Calendar, Receipt, Image, CreditCard, Users, UsersRound, TrendingUp, Bell } from 'lucide-react';

const features = [
  {
    icon: Calendar,
    title: 'Shoots & Events',
    description: 'Schedule, book, and manage every session — from a single weekend shoot to 50 studio events a month.',
    gradient: 'linear-gradient(135deg, #8B5CF6, #7C3AED)',
    glow: 'rgba(139,92,246,0.12)',
  },
  {
    icon: Receipt,
    title: 'Bill Without the Hassle',
    description: 'Product billing, event invoicing, or a one-tap pay link. One billing engine shaped around how you work.',
    gradient: 'linear-gradient(135deg, #6366F1, #4F46E5)',
    glow: 'rgba(99,102,241,0.12)',
  },
  {
    icon: Image,
    title: 'Galleries That Impress',
    description: 'Branded galleries with shareable links, password protection, and expiry control. Beautiful on every device.',
    gradient: 'linear-gradient(135deg, #3B82F6, #2563EB)',
    glow: 'rgba(59,130,246,0.12)',
  },
  {
    icon: CreditCard,
    title: 'Get Paid, Effortlessly',
    description: 'One-time payments, retainers, or digital product checkouts. Every transaction tracked in one place.',
    gradient: 'linear-gradient(135deg, #22C55E, #16A34A)',
    glow: 'rgba(34,197,94,0.12)',
  },
  {
    icon: Users,
    title: 'Know Your Clients',
    description: 'Contacts, session history, gallery access, and balances — all in one clean client view.',
    gradient: 'linear-gradient(135deg, #EAB308, #CA8A04)',
    glow: 'rgba(234,179,8,0.12)',
  },
  {
    icon: UsersRound,
    title: 'Built for Every Team Size',
    description: 'Solo shooter, growing studio, or multi-seat agency — Snapflo scales with your team.',
    gradient: 'linear-gradient(135deg, #F97316, #EA580C)',
    glow: 'rgba(249,115,22,0.12)',
  },
  {
    icon: TrendingUp,
    title: 'Insights That Drive Growth',
    description: 'Revenue, bookings, and gallery engagement — every number you need to grow with confidence.',
    gradient: 'linear-gradient(135deg, #EF4444, #DC2626)',
    glow: 'rgba(239,68,68,0.12)',
  },
  {
    icon: Bell,
    title: 'Always One Step Ahead',
    description: 'Automated reminders for shoots, payments, and follow-ups. Nothing slips through, ever.',
    gradient: 'linear-gradient(135deg, #EC4899, #DB2777)',
    glow: 'rgba(236,72,153,0.12)',
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-white relative min-h-screen flex flex-col justify-center py-16 sm:py-20 lg:py-24">
      <div className="absolute bottom-0 left-0 right-0 h-[3px]" style={{ background: 'linear-gradient(to right, #8B5CF6, #6366F1, #3B82F6, #22C55E, #EAB308, #F97316, #EF4444)' }} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Everything You Need to{' '}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(to right, #6366F1, #EF4444)' }}
            >
              Run Your Business
            </span>
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Powerful tools for studio owners, freelancers, and content creators. Manage every aspect of your business from one platform.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-white border transition-all duration-300 hover:shadow-xl cursor-default overflow-hidden"
              style={{ borderColor: 'rgba(0,0,0,0.07)' }}
            >
              {/* Hover background wash */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                style={{ background: feature.glow }}
              />
              {/* Top-right corner accent */}
              <div
                className="absolute top-0 right-0 w-14 h-14 rounded-bl-3xl opacity-[0.08]"
                style={{ background: feature.gradient }}
              />

              <div
                className="relative w-12 h-12 rounded-xl flex items-center justify-center mb-5 shadow-md"
                style={{ background: feature.gradient }}
              >
                <feature.icon className="w-6 h-6 text-white" />
              </div>

              <h3 className="relative text-base font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="relative text-gray-500 text-sm leading-relaxed">{feature.description}</p>

              {/* Bottom hover accent */}
              <div
                className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: feature.gradient }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
