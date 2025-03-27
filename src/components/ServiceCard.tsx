import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  image,
  link
}) => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate('/services');
    // Add a small delay to ensure navigation completes before scrolling
    setTimeout(() => {
      const element = document.getElementById(link.split('#')[1]);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="card group hover:translate-y-[-5px] transition-all duration-300 hover:shadow-xl">
      {/* Image Container - Removed gradient overlay */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Title Section with Icon */}
      <div className="px-5 pt-4 pb-2 flex items-center">
        <div className="bg-primary-600 p-2 rounded-full mr-3 transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
          {title}
        </h3>
      </div>

      {/* Description and Link */}
      <div className="px-5 pb-5">
        <p className="text-gray-600 mb-4">{description}</p>
        <button 
          onClick={handleLearnMore}
          className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 group cursor-pointer"
        >
          <span className="relative">
            Learn More 
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-300"></span>
          </span>
          <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;