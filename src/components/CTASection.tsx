import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Calendar } from 'lucide-react';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  showPhone?: boolean;
  className?: string;
}

const CTASection: React.FC<CTASectionProps> = ({
  title = "Ready to Transform Your Property?",
  subtitle = "Get a free quote for our professional land clearing, demolition, and septic installation services.",
  primaryButtonText = "Request Your Free Quote",
  primaryButtonLink = "/quote",
  secondaryButtonText = "Schedule a Consultation",
  secondaryButtonLink = "/contact",
  showPhone = true,
  className = ""
}) => {
  return (
    <section className={`bg-cta-pattern bg-cover bg-center py-16 ${className}`}>
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
          <p className="text-gray-200 text-lg mb-8">{subtitle}</p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to={primaryButtonLink} 
              className="btn btn-primary hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-primary-500/30"
            >
              {primaryButtonText}
            </Link>
            
            <Link 
              to={secondaryButtonLink} 
              className="btn btn-outline border-white text-white hover:bg-white/20 transition-all duration-300 group"
            >
              <Calendar className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
              {secondaryButtonText}
            </Link>
          </div>
          
          {showPhone && (
            <div className="mt-8">
              <p className="text-gray-300 mb-2">Prefer to talk? Call us directly:</p>
              <a 
                href="tel:+17046504317" 
                className="inline-flex items-center text-white text-xl font-bold hover:text-primary-300 transition-colors duration-300 group"
              >
                <Phone className="w-5 h-5 mr-2 group-hover:animate-pulse-subtle" />
                (704) 650-4317
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CTASection;