import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 text-gray-500">

      <div className="container mx-auto px-6 pt-14 pb-10">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div>
            <img src="/snapflo-side-logo.png" alt="Snapflo" className="h-10 mb-4" />
            <p
              className="font-semibold text-transparent bg-clip-text mb-2 text-sm"
              style={{ backgroundImage: 'linear-gradient(to right, #8B5CF6, #3B82F6, #EF4444)' }}
            >
              Every frame, delivered.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              For studio owners, freelancers, and content creators — one platform to run it all.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-4 text-sm">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className="hover:text-gray-900 transition">Features</a></li>
              <li><a href="#analytics" className="hover:text-gray-900 transition">Analytics</a></li>
              <li><a href="#" className="hover:text-gray-900 transition">Integrations</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-4 text-sm">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/privacy-policy"  className="hover:text-gray-900 transition">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-gray-900 transition">Terms of Service</Link></li>
              <li><Link to="/cookie-policy"   className="hover:text-gray-900 transition">Cookie Policy</Link></li>
              <li><Link to="/data-deletion"   className="hover:text-gray-900 transition">Data Deletion</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-4 text-sm">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-violet-500 flex-shrink-0" />
                <a href="mailto:support@snapflo.studio" className="hover:text-gray-900 transition">support@snapflo.studio</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-500 flex-shrink-0" />
                <a href="tel:+919003382337" className="hover:text-gray-900 transition">+91 9003382337</a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-red-400 flex-shrink-0" />
                <span>Chennai, Tamilnadu, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Snapflo by TrizenAI Technologies Private Limited. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link to="/privacy-policy"   className="hover:text-gray-900 transition">Privacy Policy</Link>
              <Link to="/terms-of-service" className="hover:text-gray-900 transition">Terms of Service</Link>
              <Link to="/data-deletion"    className="hover:text-gray-900 transition">Data Deletion</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
