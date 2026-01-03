import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-16">
        <div className="container mx-auto px-6">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold">Cookie Policy</h1>
          <p className="text-orange-100 mt-4">Last updated: January 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. What Are Cookies?</h2>
              <p className="text-gray-600 leading-relaxed">
                Cookies are small text files that are stored on your device (computer, tablet, or mobile) 
                when you visit a website. They are widely used to make websites work more efficiently, 
                provide a better user experience, and give website owners information about how their 
                site is being used. Cookies can be "persistent" (remaining on your device for a set period) 
                or "session" cookies (deleted when you close your browser).
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Cookies</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Snapflo uses cookies and similar technologies for the following purposes:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Essential Cookies:</strong> These are necessary for the website to function properly and cannot be switched off. They are usually set in response to actions you take, such as logging in or filling out forms.</li>
                <li><strong>Performance Cookies:</strong> These help us understand how visitors interact with our website by collecting anonymous information about page visits, time spent on pages, and error messages.</li>
                <li><strong>Functional Cookies:</strong> These enable enhanced functionality and personalization, such as remembering your preferences and settings.</li>
                <li><strong>Analytics Cookies:</strong> We use these to analyze website traffic and usage patterns to improve our services and user experience.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Types of Cookies We Use</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-200 mt-4">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-200 px-4 py-3 text-left text-gray-700">Cookie Name</th>
                      <th className="border border-gray-200 px-4 py-3 text-left text-gray-700">Purpose</th>
                      <th className="border border-gray-200 px-4 py-3 text-left text-gray-700">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3 text-gray-600">session_id</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-600">Maintains user session</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-600">Session</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3 text-gray-600">auth_token</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-600">Authentication</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-600">7 days</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3 text-gray-600">preferences</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-600">User preferences</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-600">1 year</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3 text-gray-600">_ga</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-600">Google Analytics</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-600">2 years</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3 text-gray-600">cookie_consent</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-600">Stores consent preferences</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-600">1 year</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Third-Party Cookies</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                In addition to our own cookies, we may also use various third-party cookies to report 
                usage statistics, deliver advertisements, and provide other services:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Google Analytics:</strong> Used to analyze website traffic and user behavior.</li>
                <li><strong>Payment Processors:</strong> Our payment partners may set cookies for secure transaction processing.</li>
                <li><strong>Social Media:</strong> If you share content via social media buttons, those platforms may set their own cookies.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Managing Cookies</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                You have the right to decide whether to accept or reject cookies. You can manage your 
                cookie preferences in the following ways:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Browser Settings:</strong> Most web browsers allow you to control cookies through their settings. You can set your browser to refuse cookies or delete certain cookies.</li>
                <li><strong>Cookie Consent Banner:</strong> When you first visit our website, you can choose which categories of cookies to accept through our consent banner.</li>
                <li><strong>Opt-Out Links:</strong> For third-party analytics cookies, you can use opt-out tools provided by those services (e.g., Google Analytics Opt-out Browser Add-on).</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                Please note that disabling certain cookies may affect the functionality of our website 
                and your user experience.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Browser-Specific Instructions</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Here's how to manage cookies in popular browsers:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Google Chrome:</strong> Settings → Privacy and Security → Cookies and other site data</li>
                <li><strong>Mozilla Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</li>
                <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
                <li><strong>Microsoft Edge:</strong> Settings → Privacy, search, and services → Cookies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Local Storage and Similar Technologies</h2>
              <p className="text-gray-600 leading-relaxed">
                In addition to cookies, we may use other similar technologies such as local storage and 
                session storage. These technologies allow us to store data locally on your device to 
                improve performance and user experience. The same principles regarding consent and 
                management apply to these technologies.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Updates to This Policy</h2>
              <p className="text-gray-600 leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in our practices 
                or for legal, operational, or regulatory reasons. We will notify you of any material 
                changes by posting the updated policy on our website and updating the "Last updated" date. 
                We encourage you to review this policy periodically.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact Us</h2>
              <p className="text-gray-600 leading-relaxed">
                If you have any questions about our use of cookies or this Cookie Policy, please contact us at:
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

