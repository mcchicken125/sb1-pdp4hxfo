import React from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { 
  ChevronRight, 
  Trees, 
  Tractor, 
  Mountain, 
  Shovel, 
  CheckCircle, 
  Award, 
  Clock, 
  DollarSign, 
  ThumbsUp,
  Building,
  Container 
} from 'lucide-react';

import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import QuoteForm from '../components/QuoteForm';
import CTASection from '../components/CTASection';
import FAQSection from '../components/FAQSection';

const HomePage: React.FC = () => {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [servicesRef, servicesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      title: "Land Clearing",
      description: "Professional land clearing services to prepare your property for development, construction, or landscaping needs.",
      icon: <Trees className="w-5 h-5 text-white" />,
      image: "https://i.imgur.com/MT6cAAp.jpeg",
      link: "/services#land-clearing"
    },
    {
      title: "Forestry Mulching",
      description: "Eco-friendly vegetation clearing that converts unwanted brush and trees into beneficial ground cover.",
      icon: <Tractor className="w-5 h-5 text-white" />,
      image: "https://i.imgur.com/sUFpnp5.jpeg",
      link: "/services#forestry-mulching"
    },
    {
      title: "Demolition",
      description: "Safe and efficient demolition services for residential and commercial structures with complete debris removal.",
      icon: <Building className="w-5 h-5 text-white" />,
      image: "https://i.imgur.com/r9NKsZx.jpeg",
      link: "/services#demolition"
    },
    {
      title: "Septic Installation",
      description: "Complete septic system installation services including tank placement, drain field setup, and system testing.",
      icon: <Container className="w-5 h-5 text-white" />,
      image: "https://i.imgur.com/Yu9Hif5.jpeg",
      link: "/services#septic-installation"
    }
  ];

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

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We provide comprehensive property services including land clearing, forestry mulching, demolition, and septic system installation. Our team is equipped to handle both residential and commercial projects of any size."
    },
    {
      question: "How much does it cost to clear land or demolish a structure?",
      answer: "Costs vary depending on the project scope, site conditions, and specific requirements. We provide free, detailed quotes after assessing your property. Contact us to schedule a site visit for an accurate estimate."
    },
    {
      question: "Do you handle all necessary permits?",
      answer: "Yes, we manage all required permits for land clearing, demolition, and septic installation projects. We ensure full compliance with local regulations and environmental requirements."
    },
    {
      question: "How long do projects typically take?",
      answer: "Project timelines vary based on scope and complexity. Land clearing projects typically take 1-5 days, demolitions 2-7 days, and septic installations 3-5 days. We'll provide a detailed timeline during consultation."
    },
    {
      question: "Are you licensed and insured?",
      answer: "Yes, we're fully licensed and insured for all our services including land clearing, demolition, and septic installation. We carry comprehensive liability insurance and workers' compensation coverage."
    }
  ];

  return (
    <>
      <section 
        ref={heroRef}
        className="relative min-h-screen bg-hero-pattern bg-cover bg-center flex items-center"
      >
        <div className="container-custom pt-32 pb-20">
          <div className={`max-w-3xl transition-all duration-1000 ${
            heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Expert Land Clearing & Property Services
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Transform your property with our comprehensive services: professional land clearing, demolition, septic installation, and forestry mulching. Serving Charlotte and the Carolinas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/quote" className="btn btn-primary hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-primary-500/30">
                Get a Free Quote
              </Link>
              <Link to="/services" className="btn btn-outline border-white text-white hover:bg-white/20 transition-all duration-300 group">
                Explore Our Services <ChevronRight className="ml-1 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
            
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center hover:bg-white/20 transition-colors duration-300 transform hover:scale-105">
                <CheckCircle className="w-8 h-8 text-primary-400 mx-auto mb-2" />
                <p className="text-white font-medium">Licensed & Insured</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center hover:bg-white/20 transition-colors duration-300 transform hover:scale-105">
                <Award className="w-8 h-8 text-primary-400 mx-auto mb-2" />
                <p className="text-white font-medium">5-Star Rated</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center hover:bg-white/20 transition-colors duration-300 transform hover:scale-105">
                <Clock className="w-8 h-8 text-primary-400 mx-auto mb-2" />
                <p className="text-white font-medium">Fast Turnaround</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center hover:bg-white/20 transition-colors duration-300 transform hover:scale-105">
                <DollarSign className="w-8 h-8 text-primary-400 mx-auto mb-2" />
                <p className="text-white font-medium">Free Estimates</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section 
        ref={servicesRef}
        className="py-16 md:py-24 bg-gray-50"
      >
        <div className="container-custom">
          <div className={`text-center max-w-3xl mx-auto mb-12 transition-all duration-1000 ${
            servicesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">Our Professional Services</h2>
            <p className="text-gray-600">
              We offer comprehensive land clearing and site preparation services for residential and commercial properties.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                image={service.image}
                link={service.link}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services" className="btn btn-primary hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-primary-500/30 group">
              View All Services <ChevronRight className="ml-1 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Royal Outdoors?</h2>
              <p className="text-gray-600 mb-8">
                With over 10 years of experience and specialized equipment, we deliver professional land clearing, demolition, and septic installation services tailored to your specific needs.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start hover:translate-x-1 transition-transform duration-300">
                  <div className="bg-primary-100 p-2 rounded-full mr-4">
                    <CheckCircle className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Experienced Professionals</h3>
                    <p className="text-gray-600">Our team brings years of expertise in land clearing, demolition, and septic system installation.</p>
                  </div>
                </div>
                
                <div className="flex items-start hover:translate-x-1 transition-transform duration-300">
                  <div className="bg-primary-100 p-2 rounded-full mr-4">
                    <CheckCircle className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Specialized Equipment</h3>
                    <p className="text-gray-600">We use state-of-the-art machinery for efficient land clearing, demolition, and septic installation.</p>
                  </div>
                </div>
                
                <div className="flex items-start hover:translate-x-1 transition-transform duration-300">
                  <div className="bg-primary-100 p-2 rounded-full mr-4">
                    <CheckCircle className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Eco-Friendly Approach</h3>
                    <p className="text-gray-600">Our forestry mulching and demolition methods prioritize environmental responsibility and waste reduction.</p>
                  </div>
                </div>
                
                <div className="flex items-start hover:translate-x-1 transition-transform duration-300">
                  <div className="bg-primary-100 p-2 rounded-full mr-4">
                    <CheckCircle className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Comprehensive Services</h3>
                    <p className="text-gray-600">From land clearing to septic installation, we provide end-to-end solutions for your property needs.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link to="/about" className="btn btn-primary hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-primary-500/30">
                  Learn More About Us
                </Link>
              </div>
            </div>
            
            <div className="relative transform hover:scale-[1.02] transition-transform duration-500">
              <img 
                src="https://i.imgur.com/pxkrKAg.jpeg" 
                alt="Land clearing equipment in action" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                <div className="flex items-center">
                  <ThumbsUp className="w-10 h-10 text-primary-500 mr-3" />
                  <div>
                    <p className="text-gray-800 font-bold text-xl">100% Satisfaction</p>
                    <p className="text-gray-600">Guaranteed on all projects</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Your Free Quote Today</h2>
              <p className="text-gray-600 mb-8">
                Fill out our simple form to receive a detailed, no-obligation quote for your land clearing project. Our team will get back to you within 24 hours.
              </p>
              
              <div className="bg-white p-6 rounded-lg shadow-md mb-8 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-800 mb-4">What to Expect</h3>
                <ul className="space-y-3">
                  <li className="flex items-start hover:translate-x-1 transition-transform duration-300">
                    <div className="bg-primary-100 p-1 rounded-full mr-3 mt-1">
                      <CheckCircle className="w-4 h-4 text-primary-600" />
                    </div>
                    <p className="text-gray-600">Detailed, transparent pricing with no hidden fees</p>
                  </li>
                  <li className="flex items-start hover:translate-x-1 transition-transform duration-300">
                    <div className="bg-primary-100 p-1 rounded-full mr-3 mt-1">
                      <CheckCircle className="w-4 h-4 text-primary-600" />
                    </div>
                    <p className="text-gray-600">Customized solutions based on your specific needs</p>
                  </li>
                  <li className="flex items-start hover:translate-x-1 transition-transform duration-300">
                    <div className="bg-primary-100 p-1 rounded-full mr-3 mt-1">
                      <CheckCircle className="w-4 h-4 text-primary-600" />
                    </div>
                    <p className="text-gray-600">Flexible scheduling to accommodate your timeline</p>
                  </li>
                  <li className="flex items-start hover:translate-x-1 transition-transform duration-300">
                    <div className="bg-primary-100 p-1 rounded-full mr-3 mt-1">
                      <CheckCircle className="w-4 h-4 text-primary-600" />
                    </div>
                    <p className="text-gray-600">Professional consultation on the best approach for your property</p>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md mb-8 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-primary-100 p-2 rounded-full mr-4">
                    <Clock className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Quick Response Time</h3>
                    <p className="text-gray-600">We'll respond to your quote request within 24 hours.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
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
            
            <div className="transform hover:scale-[1.01] transition-transform duration-300">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-gray-600">
              Don't just take our word for it. Here's what our satisfied customers have to say about our services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                location={testimonial.location}
                quote={testimonial.quote}
                rating={testimonial.rating}
              />
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />
      
      <CTASection />
    </>
  );
};

export default HomePage;