import { BarChart3, TrendingUp, DollarSign, Users, Calendar, Target } from 'lucide-react';

export default function Analytics() {
  return (
    <section id="analytics" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Data-Driven Insights for Growth
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Make smarter business decisions with comprehensive analytics. Track what matters and watch your studio thrive.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">₹45,280</h3>
              <p className="text-gray-600 mb-1">Monthly Revenue</p>
              <div className="flex items-center gap-1 text-green-600">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm font-semibold">+24% from last month</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">142</h3>
              <p className="text-gray-600 mb-1">Bookings This Month</p>
              <div className="flex items-center gap-1 text-blue-600">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm font-semibold">+18% from last month</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">1,847</h3>
              <p className="text-gray-600 mb-1">Active Customers</p>
              <div className="flex items-center gap-1 text-red-600">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm font-semibold">+32% from last month</span>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Revenue Analytics</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center justify-between">
                  <span className="text-gray-600">Wedding Photography</span>
                  <span className="font-semibold text-gray-900">₹28,500</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-gray-600">Portrait Sessions</span>
                  <span className="font-semibold text-gray-900">₹9,200</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-gray-600">Product Sales</span>
                  <span className="font-semibold text-gray-900">₹7,580</span>
                </li>
                <li className="flex items-center justify-between pt-3 border-t-2 border-gray-100">
                  <span className="text-gray-900 font-semibold">Total Revenue</span>
                  <span className="font-bold text-xl text-blue-600">₹45,280</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Performance Metrics</h3>
              </div>
              <ul className="space-y-4">
                <li>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-600">Booking Rate</span>
                    <span className="font-semibold text-gray-900">87%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full" style={{ width: '87%' }}></div>
                  </div>
                </li>
                <li>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-600">Customer Satisfaction</span>
                    <span className="font-semibold text-gray-900">94%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full" style={{ width: '94%' }}></div>
                  </div>
                </li>
                <li>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-600">Social Engagement</span>
                    <span className="font-semibold text-gray-900">76%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div className="bg-gradient-to-r from-red-500 to-pink-500 h-2 rounded-full" style={{ width: '76%' }}></div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
