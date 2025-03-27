import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  const toggleMenu = () => setIsOpen(!isOpen);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    setIsOpen(false);
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location]);
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleNavClick = (path: string) => {
    navigate(path);
    window.scrollTo(0, 0);
  };
  
  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container-custom">
        <nav className="flex items-center justify-between">
          <button 
            onClick={() => handleNavClick('/')} 
            className="flex items-center z-20" 
            aria-label="Royal Outdoors - Professional Land Clearing Services"
          >
            <Logo className={`h-8 sm:h-12 w-auto ${isScrolled ? 'text-primary-600' : 'text-white'}`} />
          </button>
          
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.path)}
                className={`font-medium transition-colors duration-200 ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-primary-600' 
                    : 'text-white hover:text-primary-200'
                } ${location.pathname === link.path ? 'font-bold' : ''}`}
              >
                {link.name}
              </button>
            ))}
          </div>
          
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href="tel:+17046504317" 
              className={`flex items-center font-medium ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              <Phone className="w-4 h-4 mr-2" />
              (704) 650-4317
            </a>
            <button 
              onClick={() => handleNavClick('/quote')} 
              className="btn btn-primary"
            >
              Get Your Free Quote
            </button>
          </div>
          
          <button 
            className="lg:hidden z-20"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
            )}
          </button>
        </nav>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={`fixed inset-0 bg-white z-10 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } lg:hidden`}
      >
        <div className="container-custom pt-24 pb-8">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.path)}
                className={`text-lg font-medium px-4 py-2 rounded-md ${
                  location.pathname === link.path 
                    ? 'bg-primary-50 text-primary-600' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {link.name}
              </button>
            ))}
            <div className="border-t border-gray-200 pt-4 mt-2">
              <a 
                href="tel:+17046504317" 
                className="flex items-center font-medium text-gray-700 px-4 py-2"
              >
                <Phone className="w-4 h-4 mr-2" />
                (704) 650-4317
              </a>
              <button 
                onClick={() => handleNavClick('/quote')}
                className="btn btn-primary w-full mt-4 justify-center"
              >
                Get Your Free Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;