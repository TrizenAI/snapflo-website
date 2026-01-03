import { ArrowRight } from 'lucide-react';

interface CTAProps {
  onGetStarted: () => void;
}

export default function CTA({ onGetStarted }: CTAProps) {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-blue-600 to-red-600 rounded-3xl p-12 md:p-16 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Transform Your Photo Studio?
            </h2>
            <p className="text-xl text-blue-50 mb-8 max-w-2xl">
              Join hundreds of photographers who are growing their business with Snapflow.
              Get started today and transform your studio operations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onGetStarted}
                className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-gray-50 transition font-semibold text-lg flex items-center justify-center gap-2 shadow-lg"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-transparent text-white px-8 py-4 rounded-xl hover:bg-white/10 transition font-semibold text-lg border-2 border-white">
                Schedule Demo
              </button>
            </div>
          </div>

          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-400/20 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
}
