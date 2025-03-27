import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  faqs: FAQItem[];
  className?: string;
}

const FAQSection: React.FC<FAQSectionProps> = ({
  title = "Frequently Asked Questions",
  subtitle = "Find answers to common questions about our professional property services",
  faqs,
  className = ""
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <section className={`py-12 md:py-20 ${className}`}>
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-gray-600">{subtitle}</p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors duration-300"
            >
              <button
                className="flex justify-between items-center w-full py-5 px-4 text-left focus:outline-none group"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <h3 className="text-lg font-medium text-gray-800 group-hover:text-primary-600 transition-colors duration-300">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-primary-600 transform transition-transform duration-300" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500 group-hover:text-primary-600 transform transition-transform duration-300" />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-gray-600 pb-5 px-4">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;