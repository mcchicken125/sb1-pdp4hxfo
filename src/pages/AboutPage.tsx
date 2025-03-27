import React from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { 
  CheckCircle, 
  Award, 
  Users, 
  Leaf, 
  Shield, 
  Clock,
  ArrowRight,
  DollarSign,
  Building
} from 'lucide-react';

import CTASection from '../components/CTASection';

const AboutPage: React.FC = () => {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [storyRef, storyInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
    rootMargin: '-50px',
  });

  const values = [
    {
      icon: <Shield className="w-10 h-10 text-primary-600" />,
      title: "Safety First",
      description: "We prioritize the safety of our team, clients, and the environment in every project we undertake."
    },
    {
      icon: <Award className="w-10 h-10 text-primary-600" />,
      title: "Quality Work",
      description: "We deliver exceptional results through attention to detail and commitment to excellence."
    },
    {
      icon: <Leaf className="w-10 h-10 text-primary-600" />,
      title: "Environmental Responsibility",
      description: "We use eco-friendly practices that minimize environmental impact while achieving project goals."
    },
    {
      icon: <Clock className="w-10 h-10 text-primary-600" />,
      title: "Reliability",
      description: "We honor our commitments, meet deadlines, and communicate transparently throughout the process."
    }
  ];

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
        <div 
          className={`absolute inset-0 opacity-20 transition-transform duration-1000 ${
            heroInView ? 'scale-100' : 'scale-110'
          }`}
        >
          <img 
            src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
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
              <span className="text-sm font-medium">Our Company</span>
            </div>
            
            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              About Royal Outdoors
            </h1>
            
            {/* Description */}
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              We're a team of land clearing professionals dedicated to transforming properties while preserving the environment.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center hover:bg-white/20 transition-all duration-300">
                <p className="text-3xl font-bold text-primary-300 mb-1">10+</p>
                <p className="text-white text-sm">Years Experience</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center hover:bg-white/20 transition-all duration-300">
                <p className="text-3xl font-bold text-primary-300 mb-1">500+</p>
                <p className="text-white text-sm">Projects Completed</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center hover:bg-white/20 transition-all duration-300">
                <p className="text-3xl font-bold text-primary-300 mb-1">30+</p>
                <p className="text-white text-sm">Team Members</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center hover:bg-white/20 transition-all duration-300">
                <p className="text-3xl font-bold text-primary-300 mb-1">100%</p>
                <p className="text-white text-sm">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Curve */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Our Story Section */}
      <section 
        ref={storyRef}
        className="py-16 overflow-hidden"
      >
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 delay-300 ${
              storyInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 relative">
                Our Story
                <span className="absolute -bottom-2 left-0 w-20 h-1 bg-primary-600 transform origin-left transition-transform duration-500 delay-500"
                  style={{ transform: storyInView ? 'scaleX(1)' : 'scaleX(0)' }}
                ></span>
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600 transform transition-all duration-500 delay-[400ms]"
                  style={{ 
                    opacity: storyInView ? 1 : 0,
                    transform: storyInView ? 'translateY(0)' : 'translateY(20px)'
                  }}
                >
                  Founded in 2015, Royal Outdoors began with a simple mission: to provide professional land clearing services that balance property development needs with environmental responsibility.
                </p>
                <p className="text-gray-600 transform transition-all duration-500 delay-[600ms]"
                  style={{ 
                    opacity: storyInView ? 1 : 0,
                    transform: storyInView ? 'translateY(0)' : 'translateY(20px)'
                  }}
                >
                  Our founder, Tim Stash, recognized that traditional land clearing methods often caused unnecessary environmental damage. Drawing on his forestry background, he built a company focused on innovative techniques like forestry mulching that minimize ecological impact while delivering exceptional results.
                </p>
                <p className="text-gray-600 transform transition-all duration-500 delay-[800ms]"
                  style={{ 
                    opacity: storyInView ? 1 : 0,
                    transform: storyInView ? 'translateY(0)' : 'translateY(20px)'
                  }}
                >
                  Over the years, we've grown from a small operation to a full-service land management company serving residential, commercial, and agricultural clients throughout Northern California. Despite our growth, we maintain our commitment to personalized service and sustainable practices.
                </p>
                <p className="text-gray-600 transform transition-all duration-500 delay-[1000ms]"
                  style={{ 
                    opacity: storyInView ? 1 : 0,
                    transform: storyInView ? 'translateY(0)' : 'translateY(20px)'
                  }}
                >
                  Today, Royal Outdoors is recognized as a leader in environmentally responsible land clearing, known for our expertise, reliability, and dedication to customer satisfaction.
                </p>
              </div>
            </div>
            
            <div className={`relative transition-all duration-1000 delay-500 ${
              storyInView ? 'opacity-100 translate-x-0 rotate-0' : 'opacity-0 translate-x-10 rotate-3'
            }`}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                <img 
                  src="https://i.imgur.com/sUFpnp5.jpeg" 
                  alt="Royal Outdoors team with equipment" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                {/* Gradient overlay that appears on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary-100 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary-200 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-gray-600">
              These principles guide everything we do, from how we treat our clients to how we approach each project.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://i.imgur.com/sUFpnp5.jpeg" 
                  alt="Land clearing equipment in action" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Award className="w-8 h-8 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-purple-900">100%</p>
                    <p className="text-gray-600">Client Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Why Choose Royal Outdoors?
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                When you choose Royal Outdoors for your land clearing needs, you're partnering with a company that combines expertise, quality equipment, and environmental responsibility.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Users className="w-6 h-6 text-purple-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                      Experienced Team
                    </h3>
                    <p className="text-gray-600">
                      Our crew has over 10+ years of combined experience in land clearing and forestry management.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Shield className="w-6 h-6 text-purple-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                      Fully Licensed & Insured
                    </h3>
                    <p className="text-gray-600">
                      We maintain comprehensive insurance coverage and all required licenses for your peace of mind.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Leaf className="w-6 h-6 text-purple-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                      Eco-Friendly Approach
                    </h3>
                    <p className="text-gray-600">
                      Our methods minimize environmental impact while achieving your property goals.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link 
                  to="/quote" 
                  className="btn btn-primary hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-primary-500/30"
                >
                  Get a Free Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CTASection />
    </>
  );
};

export default AboutPage;