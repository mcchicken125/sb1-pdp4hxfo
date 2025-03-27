import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  location: string;
  description: string;
  services: string[];
  beforeImage: string;
  afterImage: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  location,
  description,
  services,
  beforeImage,
  afterImage
}) => {
  const [showAfter, setShowAfter] = useState(false);
  
  return (
    <div className="group relative bg-white rounded-lg overflow-hidden transition-all duration-500 w-full sm:w-[400px]">
      {/* Purple Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700 animate-glow pointer-events-none"></div>
      
      {/* Card Content */}
      <div className="relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] hover:translate-y-[-4px] hover:shadow-purple-100/50">
        {/* Main Image Container */}
        <div className="relative w-full h-[250px] sm:h-[300px] overflow-hidden">
          <img 
            src={showAfter ? afterImage : beforeImage} 
            alt={`${title} - ${showAfter ? 'After' : 'Before'}`} 
            className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
            loading="lazy"
            width="400"
            height="300"
          />
        </div>
        
        {/* Content Section */}
        <div className="p-4">
          {/* Before/After Indicator */}
          <div className="flex justify-start mb-2">
            <span className={`text-xs font-medium px-2 py-0.5 rounded-full transition-all duration-300 ${
              showAfter 
                ? 'bg-purple-100 text-purple-700 group-hover:bg-purple-200'
                : 'bg-gray-100 text-gray-700 group-hover:bg-gray-200'
            }`}>
              {showAfter ? 'AFTER' : 'BEFORE'}
            </span>
          </div>
          
          {/* Project Info */}
          <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 group-hover:text-purple-900 transition-colors duration-300">{title}</h3>
          <p className="text-gray-500 text-xs mb-2">{location}</p>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">{description}</p>
          
          {/* Service Tags */}
          <div className="flex flex-wrap gap-1 mb-4">
            {services.map((service, index) => (
              <span 
                key={index} 
                className="bg-gray-100 text-gray-700 text-xs px-2 py-0.5 rounded-full transition-all duration-300 hover:bg-purple-100 hover:text-purple-700"
              >
                {service}
              </span>
            ))}
          </div>
          
          {/* View After Button */}
          <button 
            onClick={() => setShowAfter(!showAfter)}
            className="relative w-full flex items-center justify-center px-3 py-1.5 bg-purple-50 text-purple-700 rounded-lg transition-all duration-300 overflow-hidden group/btn text-sm"
            aria-label={showAfter ? "View before image" : "View after image"}
          >
            {/* Ripple Effect Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/0 via-purple-400/50 to-purple-400/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000"></div>
            
            {/* Button Content */}
            <span className="relative font-medium">
              {showAfter ? 'View Before' : 'View After'}
            </span>
            <ArrowRight className={`relative ml-2 w-4 h-4 transition-transform duration-300 ${
              showAfter ? 'rotate-180' : 'group-hover/btn:translate-x-1'
            }`} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;