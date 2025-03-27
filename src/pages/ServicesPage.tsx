import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Trees, 
  Tractor, 
  Mountain, 
  Shovel, 
  Axe,
  CheckCircle,
  ArrowRight,
  Building,
  Container
} from 'lucide-react';

import CTASection from '../components/CTASection';
import FAQSection from '../components/FAQSection';

const ServicesPage: React.FC = () => {
  const services = [
    {
      id: "land-clearing",
      title: "Land Clearing",
      description: "Our comprehensive land clearing services remove trees, brush, and debris to prepare your property for development, construction, or landscaping.",
      icon: <Trees className="w-12 h-12 text-primary-600" />,
      image: "https://i.imgur.com/eONuwDf.jpeg",
      benefits: [
        "Creates usable space for construction and agriculture",
        "Removes hazardous trees and vegetation",
        "Improves property value and aesthetics",
        "Reduces fire hazards and pest habitats"
      ]
    },
    {
      id: "forestry-mulching",
      title: "Forestry Mulching",
      description: "Our forestry mulching service uses specialized equipment to clear land while grinding vegetation into beneficial mulch that enriches the soil.",
      icon: <Tractor className="w-12 h-12 text-primary-600" />,
      image: "https://i.imgur.com/sUFpnp5.jpeg",
      benefits: [
        "Environmentally friendly land clearing method",
        "Preserves topsoil and prevents erosion",
        "Eliminates burn piles and hauling debris",
        "Creates natural mulch that enriches the soil"
      ]
    },
    {
      id: "demolition",
      title: "Demolition",
      description: "Professional demolition services for residential and commercial structures with safe and efficient debris removal and disposal.",
      icon: <Building className="w-12 h-12 text-primary-600" />,
      image: "https://i.imgur.com/r9NKsZx.jpeg",
      benefits: [
        "Safe and controlled structure removal",
        "Complete debris cleanup and disposal",
        "Site preparation for new construction",
        "Compliance with local regulations"
      ]
    },
    {
      id: "septic-installation",
      title: "Septic Tank Installation",
      description: "Complete septic system installation services including tank placement, drain field setup, and system testing.",
      icon: <Container className="w-12 h-12 text-primary-600" />,
      image: "https://i.imgur.com/Yu9Hif5.jpeg",
      benefits: [
        "Professional system design and installation",
        "Compliance with local health codes",
        "Long-lasting and efficient operation",
        "Complete testing and certification"
      ]
    }
  ];
  
  const faqs = [
    {
      question: "What areas do you serve?",
      answer: "We proudly serve Charlotte, North Carolina, and nearby areas including Huntersville, Mint Hill, Indian Trail, Gastonia, Fort Mill, Concord, Matthews, and beyond. If your project is outside our service area, don't hesitate to reach out – we'd be happy to discuss availability."
    },
    {
      question: "Do you offer free estimates?",
      answer: "Yes, we provide free, no-obligation estimates for all our services. We'll visit your property to assess the scope of work and provide a detailed quote based on your specific needs."
    },
    {
      question: "How quickly can you start on my project?",
      answer: "Our typical lead time is 1-2 weeks, depending on our current schedule and the season. For urgent projects, we may be able to accommodate faster turnaround times. Contact us to discuss your timeline."
    },
    {
      question: "Are you licensed and insured?",
      answer: "Yes, Royal Outdoors is fully licensed and insured. We carry comprehensive liability insurance and workers' compensation coverage to protect both our clients and our team."
    },
    {
      question: "Can you clear land with structures or utilities?",
      answer: "Yes, we can work around existing structures and utilities. We take extra precautions when clearing near buildings, power lines, or other infrastructure to ensure safety and prevent damage."
    }
  ];

  // Scroll to service section with offset adjustment
  const scrollToService = (serviceId: string) => {
    const element = document.getElementById(serviceId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-gray-900 via-gray-800 to-primary-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-70"></div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 bg-primary-600 bg-opacity-90 rounded-full mb-6 backdrop-blur-sm">
              <Trees className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">Professional Land Management</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Our Services
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              We offer comprehensive land clearing and site preparation services for residential and commercial properties throughout North Carolina.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <a href="#land-clearing" className="btn btn-outline border-white text-white hover:bg-white/10">
                Explore Services
              </a>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-12">
              <button 
                onClick={() => scrollToService('land-clearing')}
                className="flex flex-col items-center p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300"
              >
                <div className="p-2 rounded-full bg-primary-600 mb-3">
                  <Trees className="w-6 h-6 text-white" />
                </div>
                <span className="text-center font-medium">Land Clearing</span>
              </button>
              
              <button 
                onClick={() => scrollToService('forestry-mulching')}
                className="flex flex-col items-center p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300"
              >
                <div className="p-2 rounded-full bg-primary-600 mb-3">
                  <Tractor className="w-6 h-6 text-white" />
                </div>
                <span className="text-center font-medium">Forestry Mulching</span>
              </button>
              
              <button 
                onClick={() => scrollToService('demolition')}
                className="flex flex-col items-center p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300"
              >
                <div className="p-2 rounded-full bg-primary-600 mb-3">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <span className="text-center font-medium">Demolition</span>
              </button>
              
              <button 
                onClick={() => scrollToService('septic-installation')}
                className="flex flex-col items-center p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300"
              >
                <div className="p-2 rounded-full bg-primary-600 mb-3">
                  <Container className="w-6 h-6 text-white" />
                </div>
                <span className="text-center font-medium">Septic Installation</span>
              </button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>
      
      {/* Services Detail Section */}
      <section className="py-12 bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our Professional Services</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Discover our range of specialized land management solutions designed to transform your property
            </p>
          </div>
          
          {services.map((service, index) => (
            <div 
              key={service.id}
              id={service.id}
              className="group mb-24 last:mb-0 scroll-mt-24"
            >
              <div className="relative">
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-primary-600 transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500"></div>
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className={`lg:col-span-5 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="relative overflow-hidden rounded-xl shadow-2xl group-hover:shadow-primary-100/30 transition-all duration-500">
                      <div className="aspect-w-4 aspect-h-3 w-full">
                        <img 
                          src={service.image} 
                          alt={service.title} 
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                          style={{objectPosition: service.id === 'forestry-mulching' ? 'center center' : 'center center'}}
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className={`lg:col-span-7 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="flex items-center mb-6">
                        <div className="p-3 bg-primary-100 rounded-lg">
                          {React.cloneElement(service.icon, { className: "w-10 h-10 text-primary-600" })}
                        </div>
                        <h2 className="text-3xl font-bold ml-5 text-gray-900">{service.title}</h2>
                      </div>
                      
                      <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                        {service.description}
                      </p>
                      
                      <div className="mb-8">
                        <h3 className="text-xl font-bold mb-4 text-gray-900 flex items-center">
                          <span className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                            <CheckCircle className="w-5 h-5 text-primary-600" />
                          </span>
                          Benefits
                        </h3>
                        <ul className="space-y-3">
                          {service.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start">
                              <CheckCircle className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mt-8 flex justify-start">
                        <Link 
                          to="/quote" 
                          className="btn btn-primary group/btn flex items-center"
                        >
                          Get a Quote for {service.title}
                          <ArrowRight className="ml-2 w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* FAQ Section */}
      <FAQSection 
        title="Services FAQ" 
        subtitle="Common questions about our Land Clearing and Demolition services"
        faqs={faqs}
        className="bg-gray-50"
      />
      
      {/* CTA Section */}
      <CTASection />
    </>
  );
};

export default ServicesPage;