import { ArrowLeft, Shield, Lock, Eye, Database, Globe, UserCheck, Bell, Scale } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="container mx-auto px-6">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          <div className="flex items-start gap-5">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/25">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Privacy Policy</h1>
              <p className="text-slate-400 mt-3 text-lg">Effective Date: January 1, {currentYear}</p>
              <p className="text-slate-500 mt-1">Last Updated: January 1, {currentYear}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Navigation */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <span className="font-medium">Quick Links:</span>
            <a href="#data-collection" className="hover:text-blue-600 transition">Data Collection</a>
            <span className="text-slate-300">•</span>
            <a href="#your-rights" className="hover:text-blue-600 transition">Your Rights</a>
            <span className="text-slate-300">•</span>
            <a href="#gdpr" className="hover:text-blue-600 transition">GDPR Compliance</a>
            <span className="text-slate-300">•</span>
            <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Introduction Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                <Eye className="w-5 h-5 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Introduction</h2>
            </div>
            <div className="prose prose-slate max-w-none">
              <p className="text-slate-600 leading-relaxed text-lg">
                TRIZENAI TECHNOLOGIES PRIVATE LIMITED ("Company," "we," "us," or "our") operates Snapflo, 
                a photo studio management platform. This Privacy Policy describes how we collect, use, process, 
                and protect your personal information in compliance with applicable data protection laws, including 
                the General Data Protection Regulation (GDPR), the California Consumer Privacy Act (CCPA), and 
                India's Digital Personal Data Protection Act, 2023.
              </p>
              <p className="text-slate-600 leading-relaxed mt-4">
                By accessing or using our Services, you acknowledge that you have read, understood, and agree to 
                be bound by this Privacy Policy. If you do not agree with our policies and practices, please do 
                not use our Services.
              </p>
            </div>
          </div>

          {/* Data Controller Information */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100 p-8 mb-8">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Data Controller Information</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-slate-500 mb-1">Company Name</p>
                <p className="font-semibold text-slate-900">TRIZENAI TECHNOLOGIES PRIVATE LIMITED</p>
              </div>
              <div>
                <p className="text-sm text-slate-500 mb-1">Registered Address</p>
                <p className="font-semibold text-slate-900">Chennai, Tamil Nadu, India</p>
              </div>
              <div>
                <p className="text-sm text-slate-500 mb-1">Data Protection Officer Email</p>
                <p className="font-semibold text-blue-600">hello@trizen-ai.com</p>
              </div>
              <div>
                <p className="text-sm text-slate-500 mb-1">General Inquiries</p>
                <p className="font-semibold text-blue-600">talent@trizen-ai.com</p>
              </div>
            </div>
          </div>

          {/* Section 1: Data Collection */}
          <section id="data-collection" className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                <Database className="w-5 h-5 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">1. Information We Collect</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-3">1.1 Information You Provide Directly</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <span className="font-medium text-slate-800">Account Registration Data:</span>
                      <span className="text-slate-600"> Full name, email address, phone number, studio/business name, password (encrypted), and profile information.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <span className="font-medium text-slate-800">Business Information:</span>
                      <span className="text-slate-600"> Studio details, customer records, booking information, event data, and business preferences.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <span className="font-medium text-slate-800">Financial Information:</span>
                      <span className="text-slate-600"> Billing address, tax identification numbers, and payment transaction records. Note: Payment card details are processed by PCI-DSS compliant third-party processors.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <span className="font-medium text-slate-800">Communication Data:</span>
                      <span className="text-slate-600"> Messages, support tickets, feedback, and any correspondence with our team.</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-3">1.2 Information Collected Automatically</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <span className="font-medium text-slate-800">Device Information:</span>
                      <span className="text-slate-600"> Device type, operating system, browser type, unique device identifiers, and mobile network information.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <span className="font-medium text-slate-800">Usage Data:</span>
                      <span className="text-slate-600"> Features accessed, actions performed, time spent on pages, error logs, and interaction patterns.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <span className="font-medium text-slate-800">Location Data:</span>
                      <span className="text-slate-600"> IP address-based approximate location for security and analytics purposes.</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-3">1.3 Information from Third Parties</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <span className="font-medium text-slate-800">Social Media Platforms:</span>
                      <span className="text-slate-600"> When you connect your Facebook, Instagram, or other social media accounts, we receive profile information, page access tokens, and authorized data as per your permissions.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <span className="font-medium text-slate-800">Payment Processors:</span>
                      <span className="text-slate-600"> Transaction confirmation and payment status from Razorpay, Stripe, or other payment partners.</span>
                    </div>
                  </li>
              </ul>
              </div>
            </div>
          </section>

          {/* Section 2: Legal Basis */}
          <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
                <Scale className="w-5 h-5 text-indigo-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">2. Legal Basis for Processing (GDPR)</h2>
            </div>
            
            <p className="text-slate-600 mb-6">
              Under the GDPR, we process your personal data based on the following legal grounds:
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                <h4 className="font-semibold text-slate-800 mb-2">Contractual Necessity</h4>
                <p className="text-sm text-slate-600">Processing necessary to fulfill our service agreement with you.</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                <h4 className="font-semibold text-slate-800 mb-2">Consent</h4>
                <p className="text-sm text-slate-600">Where you have given explicit consent for specific processing activities.</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                <h4 className="font-semibold text-slate-800 mb-2">Legitimate Interests</h4>
                <p className="text-sm text-slate-600">For improving our services, fraud prevention, and security measures.</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                <h4 className="font-semibold text-slate-800 mb-2">Legal Obligation</h4>
                <p className="text-sm text-slate-600">When required to comply with applicable laws and regulations.</p>
              </div>
            </div>
          </section>

          {/* Section 3: How We Use Information */}
          <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
                <Lock className="w-5 h-5 text-amber-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">3. How We Use Your Information</h2>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 border-l-4 border-blue-500 bg-blue-50/50">
                <h4 className="font-semibold text-slate-800">Service Delivery</h4>
                <p className="text-slate-600 text-sm mt-1">To provide, maintain, and improve our photo studio management platform and related services.</p>
              </div>
              <div className="p-4 border-l-4 border-green-500 bg-green-50/50">
                <h4 className="font-semibold text-slate-800">Transaction Processing</h4>
                <p className="text-slate-600 text-sm mt-1">To process payments, invoices, and financial transactions related to your subscription.</p>
              </div>
              <div className="p-4 border-l-4 border-purple-500 bg-purple-50/50">
                <h4 className="font-semibold text-slate-800">Communication</h4>
                <p className="text-slate-600 text-sm mt-1">To send service-related notifications, security alerts, and respond to your inquiries.</p>
              </div>
              <div className="p-4 border-l-4 border-amber-500 bg-amber-50/50">
                <h4 className="font-semibold text-slate-800">Analytics & Improvement</h4>
                <p className="text-slate-600 text-sm mt-1">To analyze usage patterns, diagnose technical issues, and enhance user experience.</p>
              </div>
              <div className="p-4 border-l-4 border-red-500 bg-red-50/50">
                <h4 className="font-semibold text-slate-800">Security & Fraud Prevention</h4>
                <p className="text-slate-600 text-sm mt-1">To detect, prevent, and respond to security incidents, fraud, and abuse.</p>
              </div>
              <div className="p-4 border-l-4 border-slate-500 bg-slate-50">
                <h4 className="font-semibold text-slate-800">Legal Compliance</h4>
                <p className="text-slate-600 text-sm mt-1">To comply with applicable laws, regulations, and legal processes.</p>
              </div>
            </div>
            </section>

          {/* Section 4: Data Sharing */}
          <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-rose-100 rounded-xl flex items-center justify-center">
                <Globe className="w-5 h-5 text-rose-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">4. Data Sharing and Disclosure</h2>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
              <p className="text-green-800 font-semibold flex items-center gap-2">
                <Shield className="w-5 h-5" />
                We do not sell, rent, or trade your personal information to third parties.
              </p>
            </div>

            <p className="text-slate-600 mb-4">We may share your information in the following limited circumstances:</p>

            <div className="space-y-4">
              <div className="p-4 bg-slate-50 rounded-xl">
                <h4 className="font-semibold text-slate-800 mb-2">Service Providers</h4>
                <p className="text-slate-600 text-sm">Trusted third-party vendors who assist in operating our platform (e.g., cloud hosting providers like AWS/Google Cloud, payment processors, email service providers). All providers are bound by data processing agreements.</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl">
                <h4 className="font-semibold text-slate-800 mb-2">Legal Requirements</h4>
                <p className="text-slate-600 text-sm">When required by law, subpoena, court order, or government request, or to protect our rights, property, or safety.</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl">
                <h4 className="font-semibold text-slate-800 mb-2">Business Transfers</h4>
                <p className="text-slate-600 text-sm">In connection with a merger, acquisition, reorganization, or sale of assets, your data may be transferred as part of the transaction with prior notice.</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl">
                <h4 className="font-semibold text-slate-800 mb-2">With Your Consent</h4>
                <p className="text-slate-600 text-sm">When you explicitly authorize us to share your information with specific third parties.</p>
              </div>
            </div>
          </section>

          {/* Section 5: International Data Transfers */}
          <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. International Data Transfers</h2>
            <p className="text-slate-600 mb-4">
              Your personal data may be transferred to and processed in countries outside your country of residence, 
              including India and other countries where our service providers operate.
            </p>
            <p className="text-slate-600">
              For transfers from the European Economic Area (EEA), we implement appropriate safeguards including:
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center gap-2 text-slate-600">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                Standard Contractual Clauses (SCCs) approved by the European Commission
              </li>
              <li className="flex items-center gap-2 text-slate-600">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                Binding Corporate Rules where applicable
              </li>
              <li className="flex items-center gap-2 text-slate-600">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                Adequacy decisions for countries recognized by the European Commission
              </li>
              </ul>
            </section>

          {/* Section 6: Data Security */}
          <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Data Security</h2>
            <p className="text-slate-600 mb-6">
              We implement industry-standard technical and organizational security measures to protect your personal data:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
                <Lock className="w-5 h-5 text-slate-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-slate-800">Encryption</h4>
                  <p className="text-sm text-slate-600">TLS 1.3 for data in transit; AES-256 for data at rest</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
                <Shield className="w-5 h-5 text-slate-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-slate-800">Access Controls</h4>
                  <p className="text-sm text-slate-600">Role-based access, multi-factor authentication</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
                <Eye className="w-5 h-5 text-slate-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-slate-800">Monitoring</h4>
                  <p className="text-sm text-slate-600">24/7 security monitoring and intrusion detection</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
                <Database className="w-5 h-5 text-slate-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-slate-800">Backups</h4>
                  <p className="text-sm text-slate-600">Regular encrypted backups with disaster recovery</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 7: Data Retention */}
          <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Data Retention</h2>
            <p className="text-slate-600 mb-4">
              We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-3 px-4 font-semibold text-slate-800">Data Type</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-800">Retention Period</th>
                  </tr>
                </thead>
                <tbody className="text-slate-600">
                  <tr className="border-b border-slate-100">
                    <td className="py-3 px-4">Account Information</td>
                    <td className="py-3 px-4">Duration of account + 30 days after deletion request</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-3 px-4">Transaction Records</td>
                    <td className="py-3 px-4">7 years (as required by tax/financial regulations)</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-3 px-4">Usage Analytics</td>
                    <td className="py-3 px-4">24 months (anonymized thereafter)</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-3 px-4">Support Communications</td>
                    <td className="py-3 px-4">3 years from resolution</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Backup Data</td>
                    <td className="py-3 px-4">90 days (rolling deletion)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            </section>

          {/* Section 8: Your Rights (GDPR) */}
          <section id="your-rights" className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center">
                <UserCheck className="w-5 h-5 text-teal-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">8. Your Privacy Rights</h2>
            </div>

            <div id="gdpr" className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
              <h3 className="font-semibold text-blue-900 mb-2">GDPR Rights (for EEA residents)</h3>
              <p className="text-blue-800 text-sm">Under the General Data Protection Regulation, you have the following rights:</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="p-4 bg-slate-50 rounded-xl">
                <h4 className="font-semibold text-slate-800 mb-1">Right of Access</h4>
                <p className="text-sm text-slate-600">Request a copy of your personal data we hold.</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl">
                <h4 className="font-semibold text-slate-800 mb-1">Right to Rectification</h4>
                <p className="text-sm text-slate-600">Request correction of inaccurate or incomplete data.</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl">
                <h4 className="font-semibold text-slate-800 mb-1">Right to Erasure</h4>
                <p className="text-sm text-slate-600">Request deletion of your personal data ("right to be forgotten").</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl">
                <h4 className="font-semibold text-slate-800 mb-1">Right to Restrict Processing</h4>
                <p className="text-sm text-slate-600">Request limitation of how we process your data.</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl">
                <h4 className="font-semibold text-slate-800 mb-1">Right to Data Portability</h4>
                <p className="text-sm text-slate-600">Receive your data in a structured, machine-readable format.</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl">
                <h4 className="font-semibold text-slate-800 mb-1">Right to Object</h4>
                <p className="text-sm text-slate-600">Object to processing based on legitimate interests or direct marketing.</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl">
                <h4 className="font-semibold text-slate-800 mb-1">Right to Withdraw Consent</h4>
                <p className="text-sm text-slate-600">Withdraw consent at any time where processing is consent-based.</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl">
                <h4 className="font-semibold text-slate-800 mb-1">Right to Lodge a Complaint</h4>
                <p className="text-sm text-slate-600">File a complaint with your local supervisory authority.</p>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <h4 className="font-semibold text-amber-900 mb-2">How to Exercise Your Rights</h4>
              <p className="text-amber-800 text-sm">
                To exercise any of these rights, please contact us at <strong>hello@trizen-ai.com</strong> or 
                visit our <Link to="/data-deletion" className="underline font-medium">Data Deletion page</Link>. 
                We will respond to your request within 30 days as required by GDPR.
              </p>
            </div>
            </section>

          {/* Section 9: Cookies */}
          <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Cookies and Tracking Technologies</h2>
            <p className="text-slate-600 mb-4">
              We use cookies and similar tracking technologies to enhance your experience. You can manage your 
              cookie preferences through your browser settings or our cookie consent banner.
            </p>
            <p className="text-slate-600">
              For detailed information, please refer to our <Link to="/cookie-policy" className="text-blue-600 hover:underline">Cookie Policy</Link>.
              </p>
            </section>

          {/* Section 10: Children's Privacy */}
          <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Children's Privacy</h2>
            <p className="text-slate-600">
              Our Services are not intended for individuals under the age of 18. We do not knowingly collect 
              personal information from children. If we become aware that we have collected personal data from 
              a child without parental consent, we will take immediate steps to delete such information. If you 
              believe we have collected information from a child, please contact us at <strong>hello@trizen-ai.com</strong>.
            </p>
            </section>

          {/* Section 11: Third-Party Links */}
          <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Third-Party Links and Services</h2>
            <p className="text-slate-600">
              Our Services may contain links to third-party websites and services (e.g., Facebook, Instagram, 
              payment gateways). We are not responsible for the privacy practices of these third parties. 
              We encourage you to review their privacy policies before providing any personal information.
              </p>
            </section>

          {/* Section 12: Changes */}
          <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                <Bell className="w-5 h-5 text-orange-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">12. Changes to This Policy</h2>
            </div>
            <p className="text-slate-600">
              We may update this Privacy Policy from time to time to reflect changes in our practices or 
              applicable laws. We will notify you of material changes by posting the updated policy on our 
              website, updating the "Last Updated" date, and, where required, sending you an email notification. 
              Your continued use of our Services after such changes constitutes acceptance of the updated policy.
              </p>
            </section>

          {/* Contact Section */}
          <section id="contact" className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">13. Contact Us</h2>
            <p className="text-slate-300 mb-6">
              If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, 
              please contact us:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="p-4 bg-white/10 rounded-xl">
                <p className="text-sm text-slate-400 mb-1">Data Protection Officer</p>
                <p className="font-semibold">hello@trizen-ai.com</p>
              </div>
              <div className="p-4 bg-white/10 rounded-xl">
                <p className="text-sm text-slate-400 mb-1">General Inquiries</p>
                <p className="font-semibold">talent@trizen-ai.com</p>
              </div>
              <div className="p-4 bg-white/10 rounded-xl">
                <p className="text-sm text-slate-400 mb-1">Phone</p>
                <p className="font-semibold">+91 9003382337</p>
              </div>
              <div className="p-4 bg-white/10 rounded-xl">
                <p className="text-sm text-slate-400 mb-1">Address</p>
                <p className="font-semibold">Chennai, Tamil Nadu, India</p>
              </div>
            </div>

            <div className="bg-white/10 rounded-xl p-4">
              <p className="text-slate-300 text-sm">
                <strong className="text-white">TRIZENAI TECHNOLOGIES PRIVATE LIMITED</strong><br />
                For GDPR-related inquiries, EEA residents may also contact their local Data Protection Authority.
              </p>
              </div>
            </section>

          {/* Footer */}
          <div className="mt-8 text-center text-slate-500 text-sm">
            <p>© {currentYear} Snapflo by TRIZENAI TECHNOLOGIES PRIVATE LIMITED. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
