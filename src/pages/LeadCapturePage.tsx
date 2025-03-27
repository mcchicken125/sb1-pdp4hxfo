import React from 'react';
import { CheckCircle, ArrowRight, FileText, Clock, Info } from 'lucide-react';
import QuoteForm from '../components/QuoteForm';

const LeadCapturePage: React.FC = () => {
  const testimonials = [
    {
      name: "Daniel Hayes",
      location: "Charlotte, NC",
      quote: "Royal Outdoors transformed our overgrown 5-acre property into a beautiful, usable space. Their team was professional, efficient, and left the site immaculate.",
      rating: 5
    },
    {
      name: "Sophia Ramirez",
      location: "Huntersville, NC",
      quote: "We needed land cleared for our new home construction. The team at Royal Outdoors provided an excellent service at a competitive price. Highly recommended!",
      rating: 5
    },
    {
      name: "James Carter",
      location: "Fort Mill, SC",
      quote: "The forestry mulching service was perfect for our property. It preserved the topsoil while clearing all the unwanted brush and small trees. Great environmental solution!",
      rating: 4
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-gray-900 via-gray-800 to-primary-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-grid-pattern"></div>
        </div>
        
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://i.imgur.com/eONuwDf.jpeg" 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-70"></div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-primary-600 bg-opacity-90 rounded-full mb-6 backdrop-blur-sm transform hover:scale-105 transition-transform duration-300">
              <FileText className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Free Estimate</span>
            </div>
            
            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Get Your Free Quote
            </h1>
            
            {/* Description */}
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Fill out the form below to receive a detailed, no-obligation quote for your land clearing project.
            </p>
            
            {/* Quick Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg hover:bg-white/20 transition-all duration-300 flex items-start">
                <Clock className="w-5 h-5 text-primary-300 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-white">24-Hour Response</p>
                  <p className="text-sm text-gray-300">Quick turnaround on quotes</p>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg hover:bg-white/20 transition-all duration-300 flex items-start">
                <CheckCircle className="w-5 h-5 text-primary-300 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-white">No Obligation</p>
                  <p className="text-sm text-gray-300">Free detailed estimates</p>
                </div>
              </div>
            </div>
            
            {/* Scroll Indicator */}
            <div className="flex justify-center mt-12">
              <a 
                href="#quote-form" 
                className="flex flex-col items-center text-white/70 hover:text-white transition-colors duration-300"
              >
                <span className="text-sm mb-2">Start Your Quote</span>
                <ArrowRight className="w-6 h-6 animate-bounce" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Curve */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>
      
      {/* Quote Form Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div id="quote-form" className="transform hover:scale-[1.01] transition-transform duration-300">
              <QuoteForm />
            </div>
            
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:translate-y-[-4px]">
                <h2 className="text-3xl font-bold mb-6">Why Request a Quote?</h2>
                <div className="space-y-4">
                  {[
                    {
                      title: "Detailed Pricing",
                      description: "Get transparent, itemized pricing with no hidden fees or surprise charges."
                    },
                    {
                      title: "Project Timeline",
                      description: "Receive a realistic timeline for your project from start to finish."
                    },
                    {
                      title: "Customized Approach",
                      description: "Get recommendations tailored to your specific property and project goals."
                    },
                    {
                      title: "No Obligation",
                      description: "Our quotes are completely free with no pressure or obligation to proceed."
                    }
                  ].map((item, index) => (
                    <div 
                      key={index}
                      className="flex items-start group hover:translate-x-1 transition-transform duration-200"
                    >
                      <CheckCircle className="w-6 h-6 text-primary-500 mr-3 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200" />
                      <div>
                        <h3 className="font-bold text-gray-800 mb-1 group-hover:text-primary-600 transition-colors duration-200">
                          {item.title}
                        </h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-primary-50 p-6 rounded-lg border border-primary-100 hover:shadow-lg transition-all duration-300 transform hover:translate-y-[-4px]">
                <h3 className="text-xl font-bold text-primary-800 mb-4">What Happens Next?</h3>
                <ol className="space-y-4">
                  {[
                    "We'll review your information within 24 hours",
                    "Our team will contact you to schedule a site visit if needed",
                    "You'll receive a detailed quote for your project",
                    "We'll answer any questions and schedule your project when you're ready"
                  ].map((step, index) => (
                    <li 
                      key={index}
                      className="flex items-start group hover:translate-x-1 transition-transform duration-200"
                    >
                      <span className="bg-primary-100 text-primary-700 font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5 group-hover:bg-primary-200 transition-colors duration-200">
                        {index + 1}
                      </span>
                      <p className="text-gray-700">{step}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Animated background glow */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(124,58,237,0.1),transparent_70%)] animate-pulse-subtle"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-800">
              What Our Clients Say
            </h2>
            <p className="text-gray-600">
              Don't just take our word for it. Here's what our satisfied customers have to say.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="group relative bg-white p-6 rounded-lg transition-all duration-500 hover:translate-y-[-4px]"
              >
                {/* Card glow effect */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary-500/0 via-primary-500/10 to-primary-500/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700"></div>
                
                {/* Card border glow */}
                <div className="absolute inset-0 rounded-lg p-[1px] bg-gradient-to-r from-transparent via-primary-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Card content */}
                <div className="relative bg-white rounded-lg p-6 shadow-lg group-hover:shadow-primary-500/10 transition-shadow duration-500">
                  <div className="flex text-yellow-400 mb-4 gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i} 
                        className={`w-5 h-5 transition-transform duration-300 group-hover:scale-110 ${
                          i < testimonial.rating 
                            ? 'text-yellow-400 fill-yellow-400 animate-pulse-subtle' 
                            : 'text-gray-300'
                        }`}
                        style={{ animationDelay: `${i * 100}ms` }}
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-4 transition-colors duration-300 group-hover:text-gray-700">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center">
                    <div className="flex-1">
                      <p className="font-bold text-gray-800 group-hover:text-primary-600 transition-colors duration-300">
                        - {testimonial.name}
                      </p>
                      <p className="text-gray-500 text-sm">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default LeadCapturePage;