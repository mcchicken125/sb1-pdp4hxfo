import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  location: string;
  quote: string;
  rating: number;
  image?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  location,
  quote,
  rating,
  image
}) => {
  return (
    <div className="card p-6 hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px]">
      <div className="flex items-center mb-4">
        {image ? (
          <img 
            src={image} 
            alt={name} 
            className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-primary-200"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mr-4 shadow-sm">
            <span className="text-lg font-bold">{name.charAt(0)}</span>
          </div>
        )}
        <div>
          <h4 className="font-bold text-gray-800">{name}</h4>
          <p className="text-sm text-gray-500">{location}</p>
        </div>
      </div>
      
      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'} ${
              i < rating ? 'animate-pulse-subtle' : ''
            }`} 
          />
        ))}
      </div>
      
      <p className="text-gray-600 italic relative">
        <span className="text-primary-400 text-3xl absolute -top-2 -left-1 opacity-20">"</span>
        <span className="relative z-10">{quote}</span>
        <span className="text-primary-400 text-3xl absolute -bottom-5 -right-1 opacity-20">"</span>
      </p>
    </div>
  );
};

export default TestimonialCard;