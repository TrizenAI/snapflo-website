import { ArrowLeft, FileText, Scale, Shield, CreditCard, AlertTriangle, Gavel, Globe, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TermsOfService() {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-6">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-indigo-300 hover:text-white mb-8 transition group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          <div className="flex items-start gap-5">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/25">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Terms of Service</h1>
              <p className="text-indigo-300 mt-3 text-lg">Effective Date: January 1, {currentYear}</p>
              <p className="text-indigo-400 mt-1">Last Updated: January 1, {currentYear}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Navigation */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center gap-2 text-sm text-slate-600 flex-wrap">
            <span className="font-medium">Sections:</span>
            <a href="#acceptance" className="hover:text-indigo-600 transition">Acceptance</a>
            <span className="text-slate-300">•</span>
            <a href="#services" className="hover:text-indigo-600 transition">Services</a>
            <span className="text-slate-300">•</span>
            <a href="#account" className="hover:text-indigo-600 transition">Account</a>
            <span className="text-slate-300">•</span>
            <a href="#payment" className="hover:text-indigo-600 transition">Payment</a>
            <span className="text-slate-300">•</span>
            <a href="#liability" className="hover:text-indigo-600 transition">Liability</a>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Introduction Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
                <Scale className="w-5 h-5 text-indigo-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Agreement Overview</h2>
            </div>
            <div className="prose prose-slate max-w-none">
              <p className="text-slate-600 leading-relaxed text-lg">
                These Terms of Service ("Terms," "Agreement") constitute a legally binding agreement between you 
                ("User," "you," or "your") and <strong>TRIZENAI TECHNOLOGIES PRIVATE LIMITED</strong> ("Company," 
                "we," "us," or "our"), governing your access to and use of Snapflo, our photo studio management 
                platform and related services (collectively, the "Services").
              </p>
              <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-xl">
                <p className="text-amber-800 text-sm font-medium">
                  ⚠️ IMPORTANT: Please read these Terms carefully before using our Services. By accessing or using 
                  Snapflo, you acknowledge that you have read, understood, and agree to be bound by these Terms. 
                  If you do not agree, you may not use our Services.
                </p>
              </div>
            </div>
          </div>

          {/* Section 1: Acceptance */}
          <section id="acceptance" className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Acceptance of Terms</h2>
            <div className="space-y-4 text-slate-600">
              <p>
                <strong>1.1</strong> By creating an account, accessing, or using our Services, you represent and warrant that:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>You are at least 18 years of age or the age of majority in your jurisdiction;</li>
                <li>You have the legal capacity and authority to enter into this Agreement;</li>
                <li>If acting on behalf of a business entity, you have the authority to bind that entity to these Terms;</li>
                <li>Your use of the Services complies with all applicable laws and regulations.</li>
              </ul>
              <p>
                <strong>1.2</strong> These Terms apply to all users, including but not limited to studio owners, 
                photographers, staff members, and any other individuals who access the Services.
              </p>
              <p>
                <strong>1.3</strong> We may modify these Terms at any time. Material changes will be communicated 
                via email or in-app notification at least 30 days before they take effect. Your continued use of 
                the Services after such changes constitutes acceptance of the modified Terms.
              </p>
            </div>
            </section>

          {/* Section 2: Description of Services */}
          <section id="services" className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                <Globe className="w-5 h-5 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">2. Description of Services</h2>
            </div>
            <div className="space-y-4 text-slate-600">
              <p>
                <strong>2.1</strong> Snapflo is a cloud-based photo studio management platform that provides:
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="p-3 bg-slate-50 rounded-lg">
                  <span className="font-medium text-slate-800">• Billing & Invoicing</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg">
                  <span className="font-medium text-slate-800">• Event Management</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg">
                  <span className="font-medium text-slate-800">• Customer Relationship Management</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg">
                  <span className="font-medium text-slate-800">• Payment Processing</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg">
                  <span className="font-medium text-slate-800">• Analytics & Reporting</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg">
                  <span className="font-medium text-slate-800">• Social Media Integration</span>
                </div>
              </div>
              <p>
                <strong>2.2</strong> We reserve the right to modify, update, suspend, or discontinue any aspect 
                of the Services at any time, with or without notice. We will provide reasonable notice for any 
                changes that materially affect your use of the Services.
              </p>
              <p>
                <strong>2.3</strong> Certain features may require third-party integrations (e.g., Facebook, Instagram, 
                payment gateways). Your use of such integrations is subject to the respective third party's terms and policies.
              </p>
            </div>
          </section>

          {/* Section 3: Account Registration */}
          <section id="account" className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                <Shield className="w-5 h-5 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">3. Account Registration and Security</h2>
            </div>
            <div className="space-y-4 text-slate-600">
              <p><strong>3.1 Account Creation:</strong> To access our Services, you must create an account by providing accurate, current, and complete information.</p>
              
              <p><strong>3.2 Account Responsibilities:</strong> You agree to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Maintain the accuracy of your account information at all times;</li>
                <li>Keep your login credentials secure and confidential;</li>
                <li>Not share your account with unauthorized users;</li>
                <li>Notify us immediately of any unauthorized access or security breach;</li>
                <li>Accept full responsibility for all activities conducted under your account.</li>
              </ul>
              
              <p><strong>3.3 Account Termination:</strong> We reserve the right to suspend or terminate your account if we reasonably believe you have violated these Terms, engaged in fraudulent activity, or for any other reason at our sole discretion.</p>
              
              <p><strong>3.4 Effect of Termination:</strong> Upon termination, your right to access the Services will cease immediately. You may request a copy of your data within 30 days of termination, after which your data will be deleted in accordance with our Privacy Policy.</p>
            </div>
          </section>

          {/* Section 4: Subscription and Payments */}
          <section id="payment" className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
                <CreditCard className="w-5 h-5 text-amber-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">4. Subscription, Fees, and Payment</h2>
            </div>
            <div className="space-y-4 text-slate-600">
              <p><strong>4.1 Subscription Plans:</strong> Access to certain features requires a paid subscription. Details of available plans, features, and pricing are provided on our website and within the application.</p>
              
              <p><strong>4.2 Payment Terms:</strong></p>
              <ul className="list-disc pl-6 space-y-2">
                <li>All fees are quoted in Indian Rupees (INR) unless otherwise specified;</li>
                <li>Payment is due at the beginning of each billing period;</li>
                <li>You authorize us to charge your provided payment method for all applicable fees;</li>
                <li>Subscription fees are non-refundable except as required by applicable law or as stated in our refund policy.</li>
              </ul>

              <p><strong>4.3 Automatic Renewal:</strong> Subscriptions automatically renew at the end of each billing period unless cancelled before the renewal date. You may cancel your subscription through your account settings or by contacting support.</p>

              <p><strong>4.4 Price Changes:</strong> We reserve the right to modify pricing with at least 30 days' advance notice. Price changes will apply to the next billing cycle following the notice period.</p>

              <p><strong>4.5 Taxes:</strong> You are responsible for all applicable taxes, including GST, VAT, or other transaction taxes. We will add applicable taxes to your invoice as required by law.</p>

              <p><strong>4.6 Late Payment:</strong> Failure to pay fees when due may result in suspension or termination of your access to the Services. We may charge interest on overdue amounts at the maximum rate permitted by law.</p>
            </div>
          </section>

          {/* Section 5: Acceptable Use */}
          <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-red-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">5. Acceptable Use Policy</h2>
            </div>
            <div className="space-y-4 text-slate-600">
              <p><strong>5.1 Prohibited Conduct:</strong> You agree NOT to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Violate any applicable local, national, or international laws or regulations;</li>
                <li>Infringe upon intellectual property rights of any party;</li>
                <li>Upload, transmit, or distribute malware, viruses, or harmful code;</li>
                <li>Attempt to gain unauthorized access to our systems, networks, or other users' accounts;</li>
                <li>Interfere with, disrupt, or overload the Services or associated infrastructure;</li>
                <li>Use the Services for any fraudulent, deceptive, or illegal purposes;</li>
                <li>Harvest, collect, or store personal information of other users without consent;</li>
                <li>Resell, sublicense, or commercially exploit the Services without authorization;</li>
                <li>Reverse engineer, decompile, or disassemble any part of the Services;</li>
                <li>Use automated systems (bots, scrapers) to access the Services without permission;</li>
                <li>Upload content that is defamatory, obscene, threatening, or violates third-party rights.</li>
              </ul>

              <p><strong>5.2 Enforcement:</strong> We reserve the right to investigate violations of this policy and take appropriate action, including suspending or terminating access to the Services, removing content, and reporting illegal activities to law enforcement.</p>
            </div>
            </section>

          {/* Section 6: Your Content */}
          <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Your Data and Content</h2>
            <div className="space-y-4 text-slate-600">
              <p><strong>6.1 Ownership:</strong> You retain all ownership rights to the data, content, photographs, and materials you upload to the Services ("Your Content"). We claim no ownership over Your Content.</p>
              
              <p><strong>6.2 License Grant:</strong> By uploading Your Content, you grant us a limited, non-exclusive, royalty-free license to host, store, copy, and display Your Content solely for the purpose of providing the Services to you. This license terminates when you delete Your Content or close your account.</p>

              <p><strong>6.3 Responsibility:</strong> You are solely responsible for:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Ensuring you have the right to upload and use Your Content;</li>
                <li>Obtaining necessary consents from individuals featured in your photographs;</li>
                <li>Maintaining your own backups of Your Content;</li>
                <li>Ensuring Your Content does not violate any laws or third-party rights.</li>
              </ul>

              <p><strong>6.4 Data Processing:</strong> Our processing of your personal data is governed by our <Link to="/privacy-policy" className="text-indigo-600 hover:underline">Privacy Policy</Link>.</p>
            </div>
            </section>

          {/* Section 7: Intellectual Property */}
          <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Intellectual Property Rights</h2>
            <div className="space-y-4 text-slate-600">
              <p><strong>7.1 Our Intellectual Property:</strong> The Services, including all software, source code, designs, graphics, user interfaces, logos, trademarks, and documentation, are owned by TRIZENAI TECHNOLOGIES PRIVATE LIMITED and protected by intellectual property laws.</p>
              
              <p><strong>7.2 Limited License:</strong> Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to access and use the Services for your internal business purposes.</p>

              <p><strong>7.3 Restrictions:</strong> You may not:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Copy, modify, or create derivative works of the Services;</li>
                <li>Distribute, sell, license, or transfer the Services;</li>
                <li>Remove any proprietary notices or labels;</li>
                <li>Use our trademarks without prior written consent.</li>
              </ul>

              <p><strong>7.4 Feedback:</strong> Any feedback, suggestions, or ideas you provide about the Services may be used by us without obligation or compensation to you.</p>
            </div>
            </section>

          {/* Section 8: Disclaimer of Warranties */}
          <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Disclaimer of Warranties</h2>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-slate-600 space-y-4">
              <p><strong>8.1</strong> THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.</p>
              
              <p><strong>8.2</strong> WE DO NOT WARRANT THAT:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The Services will be uninterrupted, error-free, or completely secure;</li>
                <li>Any defects will be corrected;</li>
                <li>The Services will meet your specific requirements;</li>
                <li>The results obtained from using the Services will be accurate or reliable.</li>
              </ul>

              <p><strong>8.3</strong> You acknowledge that you use the Services at your own risk and discretion.</p>
            </div>
            </section>

          {/* Section 9: Limitation of Liability */}
          <section id="liability" className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                <Gavel className="w-5 h-5 text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">9. Limitation of Liability</h2>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 text-slate-600 space-y-4">
              <p><strong>9.1</strong> TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, TRIZENAI TECHNOLOGIES PRIVATE LIMITED AND ITS OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, AND AFFILIATES SHALL NOT BE LIABLE FOR:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Any indirect, incidental, special, consequential, or punitive damages;</li>
                <li>Loss of profits, revenue, data, business opportunities, or goodwill;</li>
                <li>Cost of procurement of substitute services;</li>
                <li>Any damages arising from your use or inability to use the Services.</li>
              </ul>

              <p><strong>9.2</strong> OUR TOTAL AGGREGATE LIABILITY FOR ALL CLAIMS ARISING OUT OF OR RELATING TO THESE TERMS OR THE SERVICES SHALL NOT EXCEED THE GREATER OF: (A) THE AMOUNT PAID BY YOU FOR THE SERVICES DURING THE TWELVE (12) MONTHS PRECEDING THE CLAIM; OR (B) ONE HUNDRED US DOLLARS (USD $100).</p>

              <p><strong>9.3</strong> These limitations apply regardless of the theory of liability (contract, tort, negligence, strict liability, or otherwise), even if we have been advised of the possibility of such damages.</p>

              <p><strong>9.4</strong> Some jurisdictions do not allow the exclusion or limitation of certain damages, so some of the above limitations may not apply to you.</p>
            </div>
            </section>

          {/* Section 10: Indemnification */}
          <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Indemnification</h2>
            <div className="space-y-4 text-slate-600">
              <p><strong>10.1</strong> You agree to indemnify, defend, and hold harmless TRIZENAI TECHNOLOGIES PRIVATE LIMITED and its officers, directors, employees, agents, licensors, and service providers from and against any claims, liabilities, damages, losses, costs, and expenses (including reasonable legal fees) arising out of or related to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your use or misuse of the Services;</li>
                <li>Your violation of these Terms;</li>
                <li>Your violation of any third-party rights, including intellectual property or privacy rights;</li>
                <li>Your Content or your customers' data that you process using the Services;</li>
                <li>Any dispute between you and your customers or third parties.</li>
              </ul>

              <p><strong>10.2</strong> We reserve the right to assume exclusive defense and control of any matter subject to indemnification by you, and you agree to cooperate with our defense of such claims.</p>
            </div>
            </section>

          {/* Section 11: Governing Law */}
          <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Governing Law and Dispute Resolution</h2>
            <div className="space-y-4 text-slate-600">
              <p><strong>11.1 Governing Law:</strong> These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.</p>
              
              <p><strong>11.2 Dispute Resolution:</strong></p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Informal Resolution:</strong> Before initiating formal proceedings, you agree to first contact us at legal@trizen-ai.com to attempt to resolve any dispute informally within 30 days.</li>
                <li><strong>Arbitration:</strong> Any dispute that cannot be resolved informally shall be settled by binding arbitration in accordance with the Arbitration and Conciliation Act, 1996 of India.</li>
                <li><strong>Jurisdiction:</strong> The arbitration shall take place in Chennai, Tamil Nadu, India, and the proceedings shall be conducted in English.</li>
              </ul>

              <p><strong>11.3 Class Action Waiver:</strong> You agree that any dispute resolution proceedings will be conducted only on an individual basis and not in a class, consolidated, or representative action.</p>

              <p><strong>11.4 Courts:</strong> Notwithstanding the above, either party may seek injunctive or equitable relief in courts of competent jurisdiction in Chennai, Tamil Nadu, India.</p>
            </div>
            </section>

          {/* Section 12: General Provisions */}
          <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">12. General Provisions</h2>
            <div className="space-y-4 text-slate-600">
              <p><strong>12.1 Entire Agreement:</strong> These Terms, together with our Privacy Policy and any other policies referenced herein, constitute the entire agreement between you and us regarding the Services.</p>
              
              <p><strong>12.2 Severability:</strong> If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.</p>

              <p><strong>12.3 Waiver:</strong> Our failure to enforce any right or provision of these Terms shall not constitute a waiver of such right or provision.</p>

              <p><strong>12.4 Assignment:</strong> You may not assign or transfer your rights or obligations under these Terms without our prior written consent. We may assign our rights and obligations without restriction.</p>

              <p><strong>12.5 Force Majeure:</strong> We shall not be liable for any failure or delay in performance due to circumstances beyond our reasonable control, including natural disasters, acts of war, terrorism, pandemics, or government actions.</p>

              <p><strong>12.6 Notices:</strong> We may provide notices to you via email to the address associated with your account or through the Services. You may provide notices to us at the contact information below.</p>
            </div>
            </section>

          {/* Section 13: Changes to Terms */}
          <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                <Bell className="w-5 h-5 text-orange-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">13. Changes to These Terms</h2>
            </div>
            <div className="space-y-4 text-slate-600">
              <p>We reserve the right to modify, update, or revise these Terms at any time. When we make material changes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>We will update the "Last Updated" date at the top of this page;</li>
                <li>We will notify you via email or in-app notification at least 30 days before the changes take effect;</li>
                <li>We may require you to accept the updated Terms before continuing to use the Services.</li>
              </ul>
              <p>Your continued use of the Services after the effective date of any changes constitutes your acceptance of the modified Terms.</p>
            </div>
            </section>

          {/* Contact Section */}
          <section className="bg-gradient-to-br from-indigo-900 to-purple-900 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">14. Contact Information</h2>
            <p className="text-indigo-200 mb-6">
              For questions, concerns, or notices regarding these Terms of Service, please contact us:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="p-4 bg-white/10 rounded-xl">
                <p className="text-sm text-indigo-300 mb-1">Legal Department</p>
                <p className="font-semibold">legal@trizen-ai.com</p>
              </div>
              <div className="p-4 bg-white/10 rounded-xl">
                <p className="text-sm text-indigo-300 mb-1">General Inquiries</p>
                <p className="font-semibold">hello@trizen-ai.com</p>
              </div>
              <div className="p-4 bg-white/10 rounded-xl">
                <p className="text-sm text-indigo-300 mb-1">Phone</p>
                <p className="font-semibold">+91 9003382337</p>
              </div>
              <div className="p-4 bg-white/10 rounded-xl">
                <p className="text-sm text-indigo-300 mb-1">Registered Office</p>
                <p className="font-semibold">Chennai, Tamil Nadu, India</p>
              </div>
            </div>

            <div className="bg-white/10 rounded-xl p-4">
              <p className="text-indigo-200 text-sm">
                <strong className="text-white">TRIZENAI TECHNOLOGIES PRIVATE LIMITED</strong><br />
                By using Snapflo, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
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
