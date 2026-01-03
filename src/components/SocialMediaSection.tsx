import { Share2, Instagram, Facebook, Twitter, Linkedin, Youtube, CheckCircle } from 'lucide-react';

export default function SocialMediaSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 to-red-600">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Share2 className="w-5 h-5" />
                <span className="font-medium">Social Media Automation</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Post Everywhere with One Click
              </h2>
              <p className="text-xl text-blue-50 mb-8 leading-relaxed">
                Stop wasting time posting the same content across multiple platforms.
                Share your latest shoots, promotions, and updates to all your social media channels instantly.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Unified Dashboard</h4>
                    <p className="text-blue-50">Manage all your social accounts from one place</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Schedule Posts</h4>
                    <p className="text-blue-50">Plan your content calendar weeks in advance</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Engagement Tracking</h4>
                    <p className="text-blue-50">Monitor likes, comments, and shares across all platforms</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl p-8">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Connected Platforms</h3>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="flex flex-col items-center gap-2 p-4 bg-gradient-to-br from-pink-50 to-red-50 rounded-xl">
                      <Instagram className="w-8 h-8 text-pink-600" />
                      <span className="text-sm font-medium text-gray-700">Instagram</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                      <Facebook className="w-8 h-8 text-blue-600" />
                      <span className="text-sm font-medium text-gray-700">Facebook</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 p-4 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl">
                      <Twitter className="w-8 h-8 text-cyan-600" />
                      <span className="text-sm font-medium text-gray-700">Twitter</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl">
                      <Linkedin className="w-8 h-8 text-blue-700" />
                      <span className="text-sm font-medium text-gray-700">LinkedIn</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 p-4 bg-gradient-to-br from-red-50 to-pink-50 rounded-xl">
                      <Youtube className="w-8 h-8 text-red-600" />
                      <span className="text-sm font-medium text-gray-700">YouTube</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border-2 border-dashed border-gray-300">
                      <Share2 className="w-8 h-8 text-gray-400" />
                      <span className="text-sm font-medium text-gray-500">More</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-red-50 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-red-600 rounded-full"></div>
                    <div>
                      <p className="font-semibold text-gray-900">Your Studio</p>
                      <p className="text-sm text-gray-500">Ready to post</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">Check out our latest wedding photography package! 📸✨</p>
                  <button className="w-full bg-gradient-to-r from-blue-600 to-red-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition">
                    Post to All Platforms
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
