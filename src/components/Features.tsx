import { ShoppingCart, Calendar, FileText, CreditCard, Bell, Package, TrendingUp, Zap } from 'lucide-react';

const features = [
  {
    icon: ShoppingCart,
    title: 'Shop Sales Billing',
    description: 'Quick and efficient billing for all your studio sales. Track products, services, and packages seamlessly.',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Calendar,
    title: 'Event Management',
    description: 'Schedule and manage photo shoots, bookings, and events with an intuitive calendar system.',
    color: 'from-red-500 to-red-600'
  },
  {
    icon: FileText,
    title: 'Professional Invoices',
    description: 'Generate beautiful, customized invoices instantly. Send them directly to clients with one click.',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: CreditCard,
    title: 'Payment Processing',
    description: 'Accept payments online, track transactions, and manage multiple payment methods effortlessly.',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Bell,
    title: 'Smart Reminders',
    description: 'Automated reminders for appointments, payments, and follow-ups. Never miss an opportunity.',
    color: 'from-cyan-500 to-blue-500'
  },
  {
    icon: Package,
    title: 'Product Management',
    description: 'Organize your photography packages, prints, and products with inventory tracking.',
    color: 'from-pink-500 to-red-500'
  },
  {
    icon: TrendingUp,
    title: 'Business Analytics',
    description: 'Comprehensive insights into revenue, bookings, and customer behavior to grow your business.',
    color: 'from-blue-600 to-cyan-600'
  },
  {
    icon: Zap,
    title: 'Social Media Integration',
    description: 'Post to all your social media platforms with one click. Streamline your marketing efforts.',
    color: 'from-red-600 to-pink-600'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Everything You Need to Run Your Studio
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Powerful features designed specifically for photo studios. Manage every aspect of your business from one platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-white border-2 border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
