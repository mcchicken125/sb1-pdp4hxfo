import React from 'react';
import { Phone, Mail, MapPin, Clock, Building } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import QuoteForm from '../components/QuoteForm';

const ContactPage: React.FC = () => {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [contactRef, contactInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative pt-32 pb-16 bg-gradient-to-br from-gray-900 via-gray-800 to-primary-900 text-white overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-grid-pattern"></div>
        </div>
        
        {/* Background Image with Overlay */}
        <div className={`absolute inset-0 opacity-20 transition-transform duration-1000 ${
          heroInView ? 'scale-100' : 'scale-110'
        }`}>
          <img 
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-70"></div>
        
        <div className="container-custom relative z-10">
          <div className={`max-w-3xl transition-all duration-700 ${
            heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-primary-600 bg-opacity-90 rounded-full mb-6 backdrop-blur-sm transform hover:scale-105 transition-transform duration-300">
              <Building className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Get In Touch</span>
            </div>
            
            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Contact Us
            </h1>
            
            {/* Description */}
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Have questions about our services or ready to get started? Reach out to our team today.
            </p>
            
            {/* Quick Contact Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg hover:bg-white/20 transition-all duration-300 transform hover:translate-y-[-4px]">
                <Phone className="w-6 h-6 text-primary-300 mb-2" />
                <p className="font-medium text-white">(704) 650-4317</p>
                <p className="text-sm text-gray-300">Monday-Saturday: 7am-6pm</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg hover:bg-white/20 transition-all duration-300 transform hover:translate-y-[-4px]">
                <Mail className="w-6 h-6 text-primary-300 mb-2" />
                <p className="font-medium text-white">timstash26@gmail.com</p>
                <p className="text-sm text-gray-300">24/7 Response</p>
              </div>
              <div className="hidden lg:block bg-white/10 backdrop-blur-sm p-4 rounded-lg hover:bg-white/20 transition-all duration-300 transform hover:translate-y-[-4px]">
                <MapPin className="w-6 h-6 text-primary-300 mb-2" />
                <p className="font-medium text-white">Charlotte, North Carolina</p>
                <p className="text-sm text-gray-300">Serving the Carolinas</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Curve */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Contact Information Section */}
      <section 
        ref={contactRef}
        className="py-16"
      >
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className={`transition-all duration-500 ${
              contactInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8">
                We're here to answer any questions you have about our land clearing services. Contact us by phone, email, or fill out the form to get started.
              </p>
              
              <div className="space-y-6">
                <a 
                  href="tel:+17046504317"
                  className="flex items-start group hover:translate-x-2 transition-transform duration-300"
                >
                  <div className="bg-primary-100 p-3 rounded-full mr-4 transform group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1 group-hover:text-primary-600 transition-colors duration-300">Phone</h3>
                    <p className="text-gray-600">(704) 650-4317</p>
                    <p className="text-sm text-gray-500 mt-1">Monday-Saturday: 7am-6pm</p>
                  </div>
                </a>
                
                <a 
                  href="mailto:timstash26@gmail.com"
                  className="flex items-start group hover:translate-x-2 transition-transform duration-300"
                >
                  <div className="bg-primary-100 p-3 rounded-full mr-4 transform group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1 group-hover:text-primary-600 transition-colors duration-300">Email</h3>
                    <p className="text-gray-600">timstash26@gmail.com</p>
                    <p className="text-sm text-gray-500 mt-1">We respond within 24 hours</p>
                  </div>
                </a>
                
                <div className="flex items-start group hover:translate-x-2 transition-transform duration-300">
                  <div className="bg-primary-100 p-3 rounded-full mr-4 transform group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1 group-hover:text-primary-600 transition-colors duration-300">Office Location</h3>
                    <p className="text-gray-600">Charlotte, North Carolina</p>
                    <p className="text-sm text-gray-500 mt-1">By appointment only</p>
                  </div>
                </div>
                
                <div className="flex items-start group hover:translate-x-2 transition-transform duration-300">
                  <div className="bg-primary-100 p-3 rounded-full mr-4 transform group-hover:scale-110 transition-transform duration-300">
                    <Clock className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1 group-hover:text-primary-600 transition-colors duration-300">Business Hours</h3>
                    <p className="text-gray-600">Monday-Saturday: 7am-6pm</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Service Areas</h3>
                <p className="text-gray-600 mb-2">
                  We proudly serve areas within a 100-mile radius of Charlotte, covering both North Carolina and South Carolina:
                </p>
                <ul className="grid grid-cols-2 gap-2">
                  {[
                    'Charlotte, NC',
                    'Greensboro, NC',
                    'Winston-Salem, NC',
                    'High Point, NC',
                    'Asheville, NC',
                    'Hickory, NC',
                    'Statesville, NC',
                    'Salisbury, NC',
                    'Columbia, SC',
                    'Greenville, SC',
                    'Spartanburg, SC',
                    'Anderson, SC'
                  ].map((area, index) => (
                    <li 
                      key={area}
                      className="text-gray-600 flex items-center space-x-2 group hover:translate-x-2 transition-transform duration-300"
                      style={{ transitionDelay: `${index * 50}ms` }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-500 group-hover:scale-150 transition-transform duration-300"></span>
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className={`transition-all duration-500 ${
              contactInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">
              Find quick answers to common questions about our services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="faq-card">
              <h3 className="text-xl font-bold mb-3">How quickly can you provide a quote?</h3>
              <p className="text-gray-600">
                We typically provide quotes within 24-48 hours after assessing your property. For urgent requests, we can often expedite this process.
              </p>
            </div>
            
            <div className="faq-card">
              <h3 className="text-xl font-bold mb-3">Do you offer emergency services?</h3>
              <p className="text-gray-600">
                Yes, we offer emergency land clearing services for situations that require immediate attention. Contact us by phone for the fastest response.
              </p>
            </div>
            
            <div className="faq-card">
              <h3 className="text-xl font-bold mb-3">What information do you need for a quote?</h3>
              <p className="text-gray-600">
                To provide an accurate quote, we need your property location, approximate acreage, description of vegetation, and your project goals. Photos are also helpful.
              </p>
            </div>
            
            <div className="faq-card">
              <h3 className="text-xl font-bold mb-3">Do you work with homeowners associations?</h3>
              <p className="text-gray-600">
                Yes, we work with HOAs, property management companies, and individual homeowners. We can help with community-wide projects or individual properties.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;