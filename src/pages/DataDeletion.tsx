import { ArrowLeft, Mail, Clock, Shield, CheckCircle, FileText, AlertCircle, Database, UserX, Globe, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DataDeletion() {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-rose-900 via-red-900 to-rose-900 text-white py-20">
        <div className="container mx-auto px-6">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-rose-300 hover:text-white mb-8 transition group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          <div className="flex items-start gap-5">
            <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg shadow-red-500/25">
              <UserX className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Data Deletion Request</h1>
              <p className="text-rose-300 mt-3 text-lg">GDPR & Privacy Rights Compliance</p>
              <p className="text-rose-400 mt-1">Snapflo by TRIZENAI TECHNOLOGIES PRIVATE LIMITED</p>
            </div>
          </div>
        </div>
      </div>

      {/* GDPR Badge */}
      <div className="bg-white border-b border-slate-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 border border-blue-200 rounded-full">
              <Globe className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-800">GDPR Compliant</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-green-50 border border-green-200 rounded-full">
              <Shield className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium text-green-800">Right to Erasure</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-purple-50 border border-purple-200 rounded-full">
              <Lock className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-medium text-purple-800">Secure Processing</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-rose-100 rounded-xl flex items-center justify-center">
                <Shield className="w-5 h-5 text-rose-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Your Right to Data Deletion</h2>
            </div>
            <div className="prose prose-slate max-w-none">
              <p className="text-slate-600 leading-relaxed text-lg">
                At <strong>TRIZENAI TECHNOLOGIES PRIVATE LIMITED</strong>, we respect your privacy and your right 
                to control your personal data. In compliance with the <strong>General Data Protection Regulation (GDPR)</strong>, 
                the <strong>California Consumer Privacy Act (CCPA)</strong>, and other applicable privacy laws, you 
                have the right to request the deletion of your personal data ("Right to Erasure" or "Right to be Forgotten").
              </p>
              <p className="text-slate-600 leading-relaxed mt-4">
                This page provides comprehensive instructions on how to submit a data deletion request for any 
                personal information collected through Snapflo Photo Management Studio, including data obtained 
                via Facebook, Instagram, or other third-party integrations.
              </p>
            </div>
          </div>

          {/* Scope of Data Deletion */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                <Database className="w-5 h-5 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Scope of Data Deletion</h2>
            </div>

            <p className="text-slate-600 mb-6">
              Upon verification of your identity and approval of your request, the following categories of 
              personal data will be permanently deleted from our systems:
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                <h4 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Account Information
                </h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Full name and display name</li>
                  <li>• Email address</li>
                  <li>• Phone number</li>
                  <li>• Profile photos</li>
                  <li>• Login credentials (encrypted)</li>
                </ul>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                <h4 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Business Data
                </h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Studio/business information</li>
                  <li>• Customer records you've created</li>
                  <li>• Booking and event data</li>
                  <li>• Invoice and billing history</li>
                </ul>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                <h4 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Third-Party Integration Data
                </h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Facebook profile information</li>
                  <li>• Instagram account data</li>
                  <li>• Social media access tokens</li>
                  <li>• Connected page information</li>
                </ul>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                <h4 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Usage & Analytics Data
                </h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Activity logs</li>
                  <li>• Feature usage data</li>
                  <li>• Device information</li>
                  <li>• IP address records</li>
                </ul>
              </div>
            </div>

            {/* Data Retention Exceptions */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-amber-900 mb-2">Data Retention Exceptions</h4>
                  <p className="text-amber-800 text-sm mb-2">
                    In accordance with GDPR Article 17(3), certain data may be retained where required by law:
                  </p>
                  <ul className="text-amber-800 text-sm space-y-1">
                    <li>• <strong>Financial records:</strong> Transaction and tax-related data (retained for 7 years as per legal requirements)</li>
                    <li>• <strong>Legal obligations:</strong> Data necessary for compliance with legal obligations, court orders, or regulatory requirements</li>
                    <li>• <strong>Legal claims:</strong> Data necessary for establishing, exercising, or defending legal claims</li>
                    <li>• <strong>Anonymized data:</strong> Aggregated, anonymized statistics that cannot identify you</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* How to Request Deletion */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                <Mail className="w-5 h-5 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">How to Submit a Data Deletion Request</h2>
            </div>

            <p className="text-slate-600 mb-6">
              You can request deletion of your personal data through any of the following methods:
            </p>

            {/* Method 1: Email */}
            <div className="border border-slate-200 rounded-xl p-6 mb-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                <h3 className="text-xl font-semibold text-slate-900">Email Request (Recommended)</h3>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-slate-50 rounded-lg">
                  <p className="text-sm text-slate-500 mb-1">Send your request to:</p>
                  <a href="mailto:privacy@trizen-ai.com" className="text-xl font-semibold text-blue-600 hover:text-blue-700">
                    privacy@trizen-ai.com
                  </a>
                </div>

                <div className="p-4 bg-slate-50 rounded-lg">
                  <p className="text-sm text-slate-500 mb-1">Subject Line:</p>
                  <p className="font-semibold text-slate-900">"GDPR Data Deletion Request – Snapflo – [Your Full Name]"</p>
                </div>

                <div className="p-4 bg-slate-50 rounded-lg">
                  <p className="text-sm text-slate-500 mb-2">Required Information:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-slate-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Full Legal Name</strong> as registered in your Snapflo account</span>
                    </li>
                    <li className="flex items-start gap-2 text-slate-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Email Address</strong> associated with your Snapflo account</span>
                    </li>
                    <li className="flex items-start gap-2 text-slate-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Phone Number</strong> associated with your account (if applicable)</span>
                    </li>
                    <li className="flex items-start gap-2 text-slate-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Studio/Business Name</strong> (if applicable)</span>
                    </li>
                    <li className="flex items-start gap-2 text-slate-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Connected Social Media Accounts</strong> (Facebook/Instagram email if different)</span>
                    </li>
                    <li className="flex items-start gap-2 text-slate-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Specific Data Categories</strong> you wish to delete (or "All Data")</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Method 2: In-App */}
            <div className="border border-slate-200 rounded-xl p-6 mb-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                <h3 className="text-xl font-semibold text-slate-900">In-App Account Deletion</h3>
              </div>
              <p className="text-slate-600 mb-4">
                If you have access to your Snapflo account, you can initiate account deletion directly:
              </p>
              <ol className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-slate-200 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">1</span>
                  <span>Log in to your Snapflo account</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-slate-200 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">2</span>
                  <span>Navigate to <strong>Settings → Privacy & Security</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-slate-200 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">3</span>
                  <span>Select <strong>"Delete My Account and Data"</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-slate-200 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">4</span>
                  <span>Confirm your identity and submit the request</span>
                </li>
              </ol>
            </div>

            {/* Method 3: Facebook Integration */}
            <div className="border border-slate-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                <h3 className="text-xl font-semibold text-slate-900">Facebook Data Deletion (Meta Platform Users)</h3>
              </div>
              <p className="text-slate-600 mb-4">
                If you connected your account via Facebook Login, you can also manage data deletion through Facebook:
              </p>
              <ol className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-slate-200 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">1</span>
                  <span>Go to <strong>Facebook Settings & Privacy → Settings</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-slate-200 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">2</span>
                  <span>Navigate to <strong>Apps and Websites</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-slate-200 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">3</span>
                  <span>Find <strong>Snapflo Photo Management Studio</strong> and select <strong>Remove</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-slate-200 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">4</span>
                  <span>This will revoke our access; email us at <strong>privacy@trizen-ai.com</strong> to complete the deletion</span>
                </li>
              </ol>
            </div>
          </div>

          {/* Verification Process */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                <Shield className="w-5 h-5 text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Identity Verification</h2>
            </div>

            <p className="text-slate-600 mb-4">
              To protect your privacy and prevent unauthorized deletion of data, we may require identity verification:
            </p>

            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                <span>We will send a verification code to your registered email or phone number</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                <span>For requests involving significant data, we may request additional verification (e.g., government-issued ID)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                <span>Authorized agents must provide written authorization from the data subject</span>
              </li>
            </ul>
          </div>

          {/* Processing Timeline */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center">
                <Clock className="w-5 h-5 text-teal-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Processing Timeline</h2>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex flex-col items-center justify-center">
                  <span className="text-2xl font-bold text-blue-600">24h</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">Acknowledgment</h4>
                  <p className="text-slate-600 text-sm">We will acknowledge receipt of your request within 24 hours</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl">
                <div className="w-16 h-16 bg-amber-100 rounded-xl flex flex-col items-center justify-center">
                  <span className="text-2xl font-bold text-amber-600">72h</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">Verification</h4>
                  <p className="text-slate-600 text-sm">Identity verification will be completed within 72 hours</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl">
                <div className="w-16 h-16 bg-green-100 rounded-xl flex flex-col items-center justify-center">
                  <span className="text-2xl font-bold text-green-600">30</span>
                  <span className="text-xs text-green-600">days</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">Completion (GDPR Requirement)</h4>
                  <p className="text-slate-600 text-sm">Your data will be permanently deleted within 30 days as required by GDPR</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl">
                <div className="w-16 h-16 bg-purple-100 rounded-xl flex flex-col items-center justify-center">
                  <span className="text-2xl font-bold text-purple-600">90</span>
                  <span className="text-xs text-purple-600">days</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">Backup Purge</h4>
                  <p className="text-slate-600 text-sm">Data will be removed from all backup systems within 90 days</p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl">
              <p className="text-green-800 text-sm flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>You will receive a confirmation email once your data has been successfully deleted.</span>
              </p>
            </div>
          </div>

          {/* Your Rights */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
                <FileText className="w-5 h-5 text-indigo-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Your Additional Rights</h2>
            </div>

            <p className="text-slate-600 mb-4">
              In addition to the right to erasure, you have the following rights under GDPR and other privacy laws:
            </p>

            <div className="grid md:grid-cols-2 gap-3">
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                <h4 className="font-medium text-slate-800">Right of Access</h4>
                <p className="text-sm text-slate-600">Request a copy of your personal data</p>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                <h4 className="font-medium text-slate-800">Right to Rectification</h4>
                <p className="text-sm text-slate-600">Correct inaccurate or incomplete data</p>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                <h4 className="font-medium text-slate-800">Right to Restrict Processing</h4>
                <p className="text-sm text-slate-600">Limit how we use your data</p>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                <h4 className="font-medium text-slate-800">Right to Data Portability</h4>
                <p className="text-sm text-slate-600">Receive your data in a portable format</p>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                <h4 className="font-medium text-slate-800">Right to Object</h4>
                <p className="text-sm text-slate-600">Object to certain types of processing</p>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                <h4 className="font-medium text-slate-800">Right to Lodge a Complaint</h4>
                <p className="text-sm text-slate-600">File a complaint with a supervisory authority</p>
              </div>
            </div>

            <p className="text-slate-600 mt-4 text-sm">
              For more information about your rights, please review our <Link to="/privacy-policy" className="text-indigo-600 hover:underline font-medium">Privacy Policy</Link>.
            </p>
          </div>

          {/* Consequences of Deletion */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8 mb-8">
            <div className="flex items-start gap-3 mb-4">
              <AlertCircle className="w-6 h-6 text-amber-600 mt-0.5" />
              <h2 className="text-2xl font-bold text-amber-900">Important: Consequences of Data Deletion</h2>
            </div>
            <p className="text-amber-800 mb-4">
              Please be aware that once your data deletion request is processed:
            </p>
            <ul className="space-y-2 text-amber-800">
              <li className="flex items-start gap-2">
                <span className="font-bold">•</span>
                <span>Your Snapflo account will be permanently closed and cannot be recovered</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">•</span>
                <span>All your data, including customer records, bookings, and invoices, will be permanently deleted</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">•</span>
                <span>Any active subscriptions will be cancelled without refund for the remaining period</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">•</span>
                <span>Connected social media integrations will be disconnected</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">•</span>
                <span>This action is <strong>irreversible</strong> – we recommend exporting your data before requesting deletion</span>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <section className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Contact Our Privacy Team</h2>
            <p className="text-slate-300 mb-6">
              For questions about data deletion, privacy concerns, or to submit a request, please contact us:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <a 
                href="mailto:privacy@trizen-ai.com"
                className="p-4 bg-white/10 rounded-xl hover:bg-white/20 transition flex items-center gap-3"
              >
                <div className="w-10 h-10 bg-rose-500 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Data Protection Officer</p>
                  <p className="font-semibold">privacy@trizen-ai.com</p>
                </div>
              </a>
              
              <a 
                href="mailto:hello@trizen-ai.com"
                className="p-4 bg-white/10 rounded-xl hover:bg-white/20 transition flex items-center gap-3"
              >
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">General Support</p>
                  <p className="font-semibold">hello@trizen-ai.com</p>
                </div>
              </a>
            </div>

            <div className="bg-white/10 rounded-xl p-4">
              <p className="text-slate-300 text-sm">
                <strong className="text-white">TRIZENAI TECHNOLOGIES PRIVATE LIMITED</strong><br />
                Registered Office: Chennai, Tamil Nadu, India<br />
                Phone: +91 9003382337
              </p>
            </div>

            <div className="mt-6 p-4 bg-blue-900/50 rounded-xl border border-blue-700">
              <p className="text-blue-200 text-sm">
                <strong className="text-blue-100">For EEA Residents:</strong> If you are unsatisfied with our response to your 
                data deletion request, you have the right to lodge a complaint with your local Data Protection Authority.
              </p>
            </div>
          </section>

          {/* Footer */}
          <div className="mt-8 text-center text-slate-500 text-sm">
            <p>© {currentYear} Snapflo by TRIZENAI TECHNOLOGIES PRIVATE LIMITED. All rights reserved.</p>
            <p className="mt-2">
              <Link to="/privacy-policy" className="hover:text-slate-700">Privacy Policy</Link>
              <span className="mx-2">•</span>
              <Link to="/terms-of-service" className="hover:text-slate-700">Terms of Service</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
