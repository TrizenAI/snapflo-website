import { ArrowLeft, Mail, Clock, Shield, CheckCircle, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DataDeletion() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-pink-600 text-white py-16">
        <div className="container mx-auto px-6">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">Data Deletion Instructions</h1>
              <p className="text-red-100 mt-2">Snapflo Photo Management Studio</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Intro Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <p className="text-xl text-gray-700 leading-relaxed">
              Snapflo Photo Management Studio respects your privacy and your right to control your personal data. 
              You can request the deletion of any data we have collected through your use of our services.
            </p>
          </div>

          {/* How to Request */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">How to Request Data Deletion</h2>
            </div>
            
            <p className="text-gray-600 mb-6">
              If you want us to delete any data collected through Facebook in connection with the 
              Snapflo Photo Management Studio app, please follow the steps below:
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                  1
                </div>
                <div>
                  <p className="text-gray-800 font-medium">Send an email to</p>
                  <a 
                    href="mailto:privacy@snapflo.studio" 
                    className="text-blue-600 hover:text-blue-700 font-semibold text-lg"
                  >
                    privacy@snapflo.studio
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                  2
                </div>
                <div>
                  <p className="text-gray-800 font-medium">Use the subject line:</p>
                  <p className="text-gray-900 font-semibold text-lg">"Data Deletion Request – Snapflo"</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                  3
                </div>
                <div>
                  <p className="text-gray-800 font-medium mb-3">Include the following information in your message:</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      Your full name
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      The email address associated with your Facebook account
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      The name of the app: <strong>Snapflo Photo Management Studio</strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* What Data Will Be Deleted */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                <FileText className="w-6 h-6 text-red-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">What Data Will Be Deleted</h2>
            </div>
            
            <p className="text-gray-600 leading-relaxed">
              Upon verification, we will delete all personal data associated with your account that was 
              collected through Facebook, unless we are required to retain certain information for legal 
              or security purposes. This includes:
            </p>
            
            <ul className="mt-4 space-y-2">
              <li className="flex items-center gap-2 text-gray-700">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                Profile information obtained from Facebook
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                Email address linked to your Facebook account
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                Any other data collected through the Facebook integration
              </li>
            </ul>
          </div>

          {/* Processing Time */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <Clock className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Processing Time</h2>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <p className="text-gray-700 text-lg">
                We will process your data deletion request within <strong className="text-green-700">30 days</strong> of receiving it.
              </p>
              <p className="text-gray-600 mt-2">
                You will receive a confirmation email once your data has been successfully deleted.
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl shadow-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Questions?</h2>
            <p className="text-gray-300 mb-6">
              If you have any questions about this process or need assistance, please contact us:
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <a 
                href="mailto:privacy@snapflo.studio"
                className="flex items-center gap-3 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition"
              >
                <Mail className="w-5 h-5 text-blue-400" />
                <div>
                  <p className="text-sm text-gray-400">Privacy Email</p>
                  <p className="font-semibold">privacy@snapflo.studio</p>
                </div>
              </a>
              
              <a 
                href="mailto:hello@trizen-ai.com"
                className="flex items-center gap-3 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition"
              >
                <Mail className="w-5 h-5 text-green-400" />
                <div>
                  <p className="text-sm text-gray-400">General Support</p>
                  <p className="font-semibold">hello@trizen-ai.com</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

