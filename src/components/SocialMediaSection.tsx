import { CheckCircle } from 'lucide-react';
import { FaInstagram, FaFacebook, FaXTwitter, FaLinkedinIn, FaYoutube, FaEllipsis } from 'react-icons/fa6';

const platforms = [
  { icon: FaInstagram,  label: 'Instagram',  gradient: 'linear-gradient(135deg, #E1306C, #F77737)' },
  { icon: FaFacebook,   label: 'Facebook',   gradient: 'linear-gradient(135deg, #1877F2, #0a5dbf)' },
  { icon: FaXTwitter,   label: 'X (Twitter)', gradient: 'linear-gradient(135deg, #000000, #333333)' },
  { icon: FaLinkedinIn, label: 'LinkedIn',   gradient: 'linear-gradient(135deg, #0A66C2, #0077B5)' },
  { icon: FaYoutube,    label: 'YouTube',    gradient: 'linear-gradient(135deg, #FF0000, #cc0000)'  },
  { icon: FaEllipsis,   label: 'More',       gradient: 'linear-gradient(135deg, #9CA3AF, #6B7280)'  },
];

const checkPoints = [
  { title: 'Unified Dashboard',    desc: 'Manage all your social accounts from one place',          grad: 'linear-gradient(135deg,#8B5CF6,#6366F1)' },
  { title: 'Schedule Posts',       desc: 'Plan your content calendar weeks in advance',              grad: 'linear-gradient(135deg,#3B82F6,#22C55E)'  },
  { title: 'Engagement Tracking',  desc: 'Monitor likes, comments, and shares across all platforms', grad: 'linear-gradient(135deg,#F97316,#EF4444)'  },
];

export default function SocialMediaSection() {
  return (
    <section aria-label="Social Media Scheduling" className="bg-white relative min-h-screen flex flex-col justify-center py-16 sm:py-20 lg:py-24">
      <div className="absolute bottom-0 left-0 right-0 h-[3px]" style={{ background: 'linear-gradient(to right, #8B5CF6, #6366F1, #3B82F6, #22C55E, #EAB308, #F97316, #EF4444)' }} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            {/* Left — text */}
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Post Everywhere{' '}
                <span
                  className="text-transparent bg-clip-text"
                  style={{ backgroundImage: 'linear-gradient(to right, #EC4899, #F97316, #EAB308)' }}
                >
                  with One Click
                </span>
              </h2>

              <p className="text-xl text-gray-500 mb-8 leading-relaxed">
                Stop wasting time posting the same content across multiple platforms.
                Share your latest shoots, promotions, and updates to all your social media channels instantly.
              </p>

              <div className="space-y-5">
                {checkPoints.map((pt, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: pt.grad }}
                    >
                      <CheckCircle className="w-3.5 h-3.5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-0.5">{pt.title}</h4>
                      <p className="text-gray-500 text-sm">{pt.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — platform card */}
            <div className="rounded-3xl border border-gray-200 p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Connected Platforms</h3>
              <div className="grid grid-cols-3 gap-4 mb-6">
                {platforms.map((p, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center gap-2 p-4 rounded-xl border border-indigo-100/60 hover:border-indigo-200 transition-all"
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center"
                      style={{ background: p.gradient }}
                    >
                      <p.icon size={18} color="white" />
                    </div>
                    <span className="text-xs font-medium text-gray-500">{p.label}</span>
                  </div>
                ))}
              </div>

              {/* Post composer */}
              <div className="rounded-xl bg-white border border-gray-200 overflow-hidden">
                {/* Composer header */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-amber-100 flex items-center justify-center">
                      <span className="text-amber-600 font-bold text-xs">L</span>
                    </div>
                    <span className="text-sm font-semibold text-gray-800">Lumière Studio</span>
                  </div>
                  <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">Draft</span>
                </div>

                {/* Post text */}
                <div className="px-4 py-3">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Golden hour, genuine smiles, and frames worth keeping forever. Bookings open for this season — drop us a message! 📷
                  </p>
                </div>

                {/* Platform targets */}
                <div className="px-4 pb-3 flex items-center gap-2">
                  <span className="text-xs text-gray-400">Posting to</span>
                  {[FaInstagram, FaFacebook, FaXTwitter, FaLinkedinIn, FaYoutube].map((Icon, i) => (
                    <div
                      key={i}
                      className="w-6 h-6 rounded-full flex items-center justify-center"
                      style={{ background: ['linear-gradient(135deg,#E1306C,#F77737)', 'linear-gradient(135deg,#1877F2,#0a5dbf)', 'linear-gradient(135deg,#000,#333)', 'linear-gradient(135deg,#0A66C2,#0077B5)', 'linear-gradient(135deg,#FF0000,#cc0000)'][i] }}
                    >
                      <Icon size={11} color="white" />
                    </div>
                  ))}
                </div>

                {/* Footer action */}
                <div className="px-4 py-3 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs text-gray-400">Scheduled · Today 6:00 PM</span>
                  <button
                    className="text-white text-xs font-semibold px-4 py-1.5 rounded-lg hover:opacity-90 transition"
                    style={{ background: '#6366F1' }}
                  >
                    Publish Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
