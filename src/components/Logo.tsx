import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = 'h-10 w-auto' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <svg 
        viewBox="0 0 360 60" 
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto"
      >
        <defs>
          <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="1" dy="1" stdDeviation="1" floodOpacity="0.5" />
          </filter>
        </defs>
        
        {/* Text with subtle shadow effect */}
        <text 
          x="10" 
          y="38" 
          fontFamily="Montserrat, sans-serif" 
          fontWeight="800" 
          fontSize="32" 
          fill="#7c3aed" 
          filter="url(#shadow)"
        >
          ROYAL OUTDOORS
        </text>
      </svg>
    </div>
  );
};

export default Logo;