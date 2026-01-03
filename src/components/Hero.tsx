import { useState, useEffect } from 'react';
import { ArrowRight, Receipt, Calendar, Users, TrendingUp, Camera, CreditCard } from 'lucide-react';

interface HeroProps {
  onGetStarted: () => void;
}

const features = [
  {
    icon: Receipt,
    title: 'Smart Billing',
    description: 'Quick invoicing & payments',
    color: 'from-blue-500 to-blue-600',
    accent: 'bg-blue-500',
  },
  {
    icon: Calendar,
    title: 'Event Management',
    description: 'Schedule shoots seamlessly',
    color: 'from-green-500 to-emerald-600',
    accent: 'bg-green-500',
  },
  {
    icon: Users,
    title: 'Customer CRM',
    description: 'Track client relationships',
    color: 'from-purple-500 to-purple-600',
    accent: 'bg-purple-500',
  },
  {
    icon: TrendingUp,
    title: 'Analytics',
    description: 'Real-time business insights',
    color: 'from-orange-500 to-red-500',
    accent: 'bg-orange-500',
  },
];

const mockDashboardData = {
  revenue: '₹1,24,500',
  bookings: 47,
  customers: 156,
  pendingPayments: '₹28,300',
};

export default function Hero({ onGetStarted }: HeroProps) {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveFeature((prev) => (prev + 1) % features.length);
        setIsAnimating(false);
      }, 300);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const currentFeature = features[activeFeature];
  const FeatureIcon = currentFeature.icon;

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute -bottom-40 right-1/3 w-72 h-72 bg-red-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="relative z-20 container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <img src="/snapflo-logo.png" alt="Snapflow" className="h-12 brightness-0 invert" />
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white transition">Features</a>
            <a href="#analytics" className="text-gray-300 hover:text-white transition">Analytics</a>
            <button 
              onClick={onGetStarted}
              className="bg-white text-slate-900 px-6 py-2.5 rounded-lg hover:bg-gray-100 transition font-medium"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left side - Text content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <Camera className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-gray-300">Built for Photo Studios</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Complete Studio
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                Management Platform
              </span>
            </h1>
            
            <p className="text-lg lg:text-xl text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0">
              From billing to analytics, manage your entire photo studio with one powerful platform. 
              Save time, increase revenue, and grow your business.
            </p>

            <button 
              onClick={onGetStarted}
              className="group bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all font-semibold text-lg inline-flex items-center gap-3 shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Feature pills */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-8">
              {features.map((feature, index) => (
                <button
                  key={index}
                  onClick={() => setActiveFeature(index)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeFeature === index
                      ? 'bg-white text-slate-900 shadow-lg'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {feature.title}
                </button>
              ))}
            </div>
          </div>

          {/* Right side - Animated dashboard mockup */}
          <div className="relative">
            {/* Main dashboard card */}
            <div 
              className={`relative bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-6 shadow-2xl transform transition-all duration-500 ${
                isAnimating ? 'scale-95 opacity-80' : 'scale-100 opacity-100'
              }`}
            >
              {/* Dashboard header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${currentFeature.color} flex items-center justify-center`}>
                    <FeatureIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">{currentFeature.title}</h3>
                    <p className="text-gray-400 text-sm">{currentFeature.description}</p>
                  </div>
                </div>
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                    <span className="text-gray-400 text-xs">Revenue</span>
                  </div>
                  <p className="text-2xl font-bold text-white">{mockDashboardData.revenue}</p>
                  <p className="text-green-400 text-xs mt-1">+24% this month</p>
                </div>
                <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-blue-400" />
                    <span className="text-gray-400 text-xs">Bookings</span>
                  </div>
                  <p className="text-2xl font-bold text-white">{mockDashboardData.bookings}</p>
                  <p className="text-blue-400 text-xs mt-1">This month</p>
                </div>
                <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-4 h-4 text-purple-400" />
                    <span className="text-gray-400 text-xs">Customers</span>
                  </div>
                  <p className="text-2xl font-bold text-white">{mockDashboardData.customers}</p>
                  <p className="text-purple-400 text-xs mt-1">Active clients</p>
                </div>
                <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <CreditCard className="w-4 h-4 text-orange-400" />
                    <span className="text-gray-400 text-xs">Pending</span>
                  </div>
                  <p className="text-2xl font-bold text-white">{mockDashboardData.pendingPayments}</p>
                  <p className="text-orange-400 text-xs mt-1">To collect</p>
                </div>
              </div>

              {/* Animated progress bars */}
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-400">Wedding Photography</span>
                    <span className="text-white">₹68,500</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full transition-all duration-1000"
                      style={{ width: '75%' }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-400">Portrait Sessions</span>
                    <span className="text-white">₹32,200</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-purple-500 to-purple-400 rounded-full transition-all duration-1000"
                      style={{ width: '55%' }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-400">Product Sales</span>
                    <span className="text-white">₹23,800</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-pink-500 to-pink-400 rounded-full transition-all duration-1000"
                      style={{ width: '40%' }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating notification cards */}
            <div className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-xl animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <Receipt className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">New Payment</p>
                  <p className="text-sm font-semibold text-gray-900">₹8,500 received</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-xl animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <Calendar className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">New Booking</p>
                  <p className="text-sm font-semibold text-gray-900">Wedding - Jan 15</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </div>
  );
}
