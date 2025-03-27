import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, ArrowLeft } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="pt-32 pb-16">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link 
              to="/" 
              className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Shield className="w-8 h-8 text-primary-600 mr-3" />
              <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
            </div>

            <div className="prose max-w-none text-gray-600">
              <p className="text-sm text-gray-500 mb-6">Last updated: {new Date().toLocaleDateString()}</p>

              <section className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4">1. Introduction</h2>
                <p>
                  Royal Outdoors ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website royaloutdoors.com (the "Website").
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4">2. Information We Collect</h2>
                <p className="mb-4">We collect information that you provide directly to us, including:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Name and contact information (email address, phone number)</li>
                  <li>Property information (address, size, project details)</li>
                  <li>Communications and correspondence with us</li>
                  <li>Service preferences and requirements</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4">3. How We Use Your Information</h2>
                <p className="mb-4">We use the information we collect to:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Provide and improve our services</li>
                  <li>Respond to your inquiries and service requests</li>
                  <li>Send you quotes, updates, and service information</li>
                  <li>Communicate with you about our services</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4">4. Information Sharing</h2>
                <p>
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except to trusted third parties who assist us in operating our website, conducting our business, or servicing you.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4">5. Data Security</h2>
                <p>
                  We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4">6. Cookies and Tracking</h2>
                <p>
                  We use cookies and similar tracking technologies to track activity on our Website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4">7. Your Rights</h2>
                <p className="mb-4">You have the right to:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Object to our use of your information</li>
                  <li>Withdraw consent where applicable</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4">8. Contact Us</h2>
                <p>
                  If you have questions about this Privacy Policy, please contact us at:<br />
                  Email: timstash26@gmail.com<br />
                  Phone: (704) 650-4317
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;