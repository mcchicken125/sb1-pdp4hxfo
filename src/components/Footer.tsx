import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const navigate = useNavigate();

  const handleNavClick = (path: string) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Logo className="h-12 w-auto text-white mb-4" />
            <p className="text-gray-400 mb-6">
              Charlotte's trusted experts in professional land clearing and property services. Delivering exceptional results with environmental responsibility throughout North Carolina since 2015.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => handleNavClick('/')}
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('/services')}
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('/about')}
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('/contact')}
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Our Services in Charlotte</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => {
                    navigate('/services');
                    setTimeout(() => {
                      document.getElementById('land-clearing')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  Professional Land Clearing
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    navigate('/services');
                    setTimeout(() => {
                      document.getElementById('forestry-mulching')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  Forestry Mulching
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    navigate('/services');
                    setTimeout(() => {
                      document.getElementById('demolition')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  Demolition Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    navigate('/services');
                    setTimeout(() => {
                      document.getElementById('septic-installation')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  Septic Installation
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="w-5 h-5 mr-3 text-primary-400 flex-shrink-0 mt-0.5" />
                <a href="tel:+17046504317" className="hover:text-primary-400 transition-colors">(704) 650-4317</a>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 mr-3 text-primary-400 flex-shrink-0 mt-0.5" />
                <a href="mailto:timstash26@gmail.com" className="hover:text-primary-400 transition-colors">timstash26@gmail.com</a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-primary-400 flex-shrink-0 mt-0.5" />
                <span>6200 Old corral st<br />Charlotte NC 28277</span>
              </li>
              <li className="flex items-start">
                <Clock className="w-5 h-5 mr-3 text-primary-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p>Monday-Saturday: 7am-6pm</p>
                  <p>Sunday: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Royal Outdoors Land Clearing Services - Charlotte, NC. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <button 
              onClick={() => handleNavClick('/privacy')}
              className="text-gray-500 hover:text-primary-400 text-sm"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => handleNavClick('/terms')}
              className="text-gray-500 hover:text-primary-400 text-sm"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;