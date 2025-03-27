import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const hasConsent = localStorage.getItem('cookieConsent');
    if (!hasConsent) {
      // Show the banner after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);
  
  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };
  
  if (!isVisible) return null;
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50 border-t border-gray-200">
      <div className="container-custom py-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0 pr-4">
            <p className="text-sm text-gray-700">
              We use cookies to enhance your experience on our website. By continuing to browse, you agree to our use of cookies.
            </p>
          </div>
          <div className="flex space-x-4">
            <button 
              onClick={acceptCookies}
              className="btn btn-primary py-2 px-4 text-sm"
            >
              Accept
            </button>
            <button 
              onClick={() => setIsVisible(false)}
              className="text-gray-500 hover:text-gray-700"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;