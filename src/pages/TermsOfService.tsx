import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="container mx-auto px-6">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold">Terms of Service</h1>
          <p className="text-purple-100 mt-4">Last updated: January 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                By accessing or using Snapflo's photo studio management software and services ("Services"), 
                you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, 
                please do not use our Services. These Terms apply to all users, including studio owners, 
                employees, and any other individuals who access the Services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Services</h2>
              <p className="text-gray-600 leading-relaxed">
                Snapflo provides a cloud-based studio management platform that includes features such as 
                billing and invoicing, event management, customer relationship management, payment processing, 
                analytics and reporting, and social media integration. We reserve the right to modify, suspend, 
                or discontinue any aspect of the Services at any time.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Account Registration</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                To use our Services, you must create an account. You agree to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Provide accurate, current, and complete information during registration</li>
                <li>Maintain and promptly update your account information</li>
                <li>Keep your password secure and confidential</li>
                <li>Accept responsibility for all activities that occur under your account</li>
                <li>Notify us immediately of any unauthorized use of your account</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Subscription and Payments</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Access to certain features requires a paid subscription. By subscribing, you agree to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Pay all applicable fees as described at the time of purchase</li>
                <li>Provide valid payment information</li>
                <li>Automatic renewal of subscriptions unless cancelled before the renewal date</li>
                <li>No refunds for partial subscription periods, except as required by law</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                We reserve the right to change our pricing with 30 days' notice. Continued use after price 
                changes constitutes acceptance of the new pricing.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Acceptable Use</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                You agree not to use the Services to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon the rights of others, including intellectual property rights</li>
                <li>Upload or transmit viruses, malware, or other malicious code</li>
                <li>Attempt to gain unauthorized access to our systems or other users' accounts</li>
                <li>Interfere with or disrupt the Services or servers</li>
                <li>Use the Services for any fraudulent or deceptive purposes</li>
                <li>Collect or harvest user information without consent</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Data and Content</h2>
              <p className="text-gray-600 leading-relaxed">
                You retain ownership of all data and content you upload to the Services ("Your Content"). 
                By using our Services, you grant us a limited license to host, store, and process Your Content 
                solely to provide the Services to you. You are responsible for maintaining backups of Your Content 
                and ensuring you have the right to use and share any content you upload.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Intellectual Property</h2>
              <p className="text-gray-600 leading-relaxed">
                The Services, including all software, designs, text, graphics, logos, and other materials, 
                are owned by Snapflo and protected by intellectual property laws. You may not copy, modify, 
                distribute, sell, or lease any part of our Services without our written permission. 
                The Snapflo name, logo, and all related names, logos, and slogans are our trademarks.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Limitation of Liability</h2>
              <p className="text-gray-600 leading-relaxed">
                To the maximum extent permitted by law, Snapflo shall not be liable for any indirect, incidental, 
                special, consequential, or punitive damages, including loss of profits, data, or business 
                opportunities, arising out of or related to your use of the Services. Our total liability 
                shall not exceed the amount paid by you for the Services in the twelve months preceding the claim.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Disclaimer of Warranties</h2>
              <p className="text-gray-600 leading-relaxed">
                The Services are provided "as is" and "as available" without warranties of any kind, 
                either express or implied, including but not limited to warranties of merchantability, 
                fitness for a particular purpose, and non-infringement. We do not warrant that the Services 
                will be uninterrupted, error-free, or completely secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Indemnification</h2>
              <p className="text-gray-600 leading-relaxed">
                You agree to indemnify, defend, and hold harmless Snapflo and its officers, directors, 
                employees, and agents from any claims, damages, losses, liabilities, and expenses 
                (including legal fees) arising out of your use of the Services, violation of these Terms, 
                or infringement of any rights of another party.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Termination</h2>
              <p className="text-gray-600 leading-relaxed">
                We may suspend or terminate your access to the Services at any time for any reason, 
                including violation of these Terms. Upon termination, your right to use the Services 
                will immediately cease. You may also terminate your account at any time. Provisions that 
                by their nature should survive termination will survive, including ownership, warranty 
                disclaimers, and limitations of liability.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Governing Law</h2>
              <p className="text-gray-600 leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of India, 
                without regard to its conflict of law provisions. Any disputes arising from these Terms 
                or the Services shall be subject to the exclusive jurisdiction of the courts in Chennai, 
                Tamilnadu, India.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Changes to Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                We reserve the right to modify these Terms at any time. We will notify you of material 
                changes by posting the updated Terms on our website and updating the "Last updated" date. 
                Your continued use of the Services after such changes constitutes acceptance of the modified Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Contact Us</h2>
              <p className="text-gray-600 leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-700"><strong>Email:</strong> hello@trizen-ai.com</p>
                <p className="text-gray-700"><strong>Phone:</strong> +91 9003382337</p>
                <p className="text-gray-700"><strong>Address:</strong> Chennai, Tamilnadu, India</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

