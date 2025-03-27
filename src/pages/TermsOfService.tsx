import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, ArrowLeft } from 'lucide-react';

const TermsOfService: React.FC = () => {
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
              <FileText className="w-8 h-8 text-primary-600 mr-3" />
              <h1 className="text-3xl font-bold text-gray-900">Terms of Service</h1>
            </div>

            <div className="prose max-w-none text-gray-600">
              <p className="text-sm text-gray-500 mb-6">Last updated: {new Date().toLocaleDateString()}</p>

              <section className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4">1. Agreement to Terms</h2>
                <p>
                  By accessing or using Royal Outdoors' website and services, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4">2. Services</h2>
                <p className="mb-4">
                  Royal Outdoors provides land clearing, forestry mulching, demolition, and septic installation services. Our services are subject to these terms and any additional agreements or contracts specific to your project.
                </p>
                <p>
                  We reserve the right to refuse service to anyone for any reason at any time.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4">3. Quotes and Estimates</h2>
                <p className="mb-4">
                  Quotes provided through our website are estimates based on the information you provide. Final pricing may vary based on:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Actual site conditions</li>
                  <li>Project complexity</li>
                  <li>Required permits and regulations</li>
                  <li>Additional services requested</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4">4. Your Responsibilities</h2>
                <p className="mb-4">You agree to:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Provide accurate information about your property and project requirements</li>
                  <li>Obtain necessary permits and authorizations</li>
                  <li>Ensure property access for our team</li>
                  <li>Mark or identify underground utilities and structures</li>
                  <li>Communicate any special requirements or concerns</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4">5. Liability and Insurance</h2>
                <p>
                  Royal Outdoors maintains comprehensive insurance coverage for our operations. However, we are not liable for damages caused by:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Unmarked underground utilities or structures</li>
                  <li>Pre-existing property conditions</li>
                  <li>Force majeure events</li>
                  <li>Circumstances beyond our reasonable control</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4">6. Payment Terms</h2>
                <p>
                  Payment terms will be specified in your project agreement. Generally, we require a deposit before work begins, with the balance due upon completion. We accept major credit cards, checks, and electronic payments.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4">7. Cancellation Policy</h2>
                <p>
                  Cancellation policies will be outlined in your project agreement. Notice requirements and any applicable fees will vary based on project scope and timing.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4">8. Intellectual Property</h2>
                <p>
                  All content on our website, including text, graphics, logos, and images, is our property and protected by applicable copyright and trademark laws.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4">9. Dispute Resolution</h2>
                <p>
                  Any disputes arising from these terms or our services will be resolved through negotiation, mediation, or arbitration in accordance with North Carolina law.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4">10. Changes to Terms</h2>
                <p>
                  We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services constitutes acceptance of any modifications.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4">11. Contact Information</h2>
                <p>
                  Questions about these Terms of Service should be sent to:<br />
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

export default TermsOfService;