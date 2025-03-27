import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CheckCircle, AlertCircle, X, Info } from 'lucide-react';
import { supabase } from '../lib/supabase';
import type { Database } from '../types/database.types';

type FormData = Database['public']['Tables']['land_clearing_doc']['Insert'];

interface QuoteFormProps {
  className?: string;
  compact?: boolean;
}

const QuoteForm: React.FC<QuoteFormProps> = ({ className = '', compact = false }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const serviceOptions = [
    { value: "land-clearing", label: "Land Clearing" },
    { value: "forestry-mulching", label: "Forestry Mulching" },
    { value: "demolition", label: "Demolition Services" },
    { value: "septic-installation", label: "Septic System Installation" }
  ];

  const propertySizes = [
    { value: "under-1", label: "Under 1 acre" },
    { value: "1-5", label: "1-5 acres" },
    { value: "5-10", label: "5-10 acres" },
    { value: "10-plus", label: "10+ acres" },
    { value: "not-sure", label: "Not sure" }
  ];
  
  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage('');
    
    try {
      const { error } = await supabase
        .from('land_clearing_doc')
        .insert([{
          full_name: data.full_name,
          email: data.email,
          phone_number: data.phone_number,
          property_address: data.property_address,
          service_needed: data.service_needed,
          property_size: data.property_size,
          project_details: data.project_details
        }]);
      
      if (error) throw error;
      
      setSubmitStatus('success');
      setShowPopup(true);
      reset();
      
      setTimeout(() => {
        setShowPopup(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setErrorMessage('There was an error submitting your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`relative ${className}`}>
      {/* Success Popup */}
      {showPopup && submitStatus === 'success' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/50">
          <div className="relative bg-white rounded-lg p-6 max-w-md w-full animate-fade-in mx-4">
            <button 
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close popup"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="text-center">
              <CheckCircle className="w-16 h-16 text-primary-500 mx-auto mb-4" />
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">Thank You!</h3>
              <p className="text-gray-600 mb-6">
                Your quote request has been submitted successfully. We'll get back to you within 24 hours with a detailed estimate.
              </p>
              <button 
                onClick={() => setShowPopup(false)}
                className="btn btn-primary"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 hover:shadow-lg transition-shadow duration-300">
        {!compact && (
          <div className="mb-6">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">Get Your Free Quote</h3>
            <p className="text-gray-600">
              Fill out the form below and we'll get back to you with a detailed quote for your project within 24 hours.
            </p>
          </div>
        )}
        
        {submitStatus === 'error' && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md flex items-start">
            <AlertCircle className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
            <p className="text-red-700 text-sm">{errorMessage}</p>
          </div>
        )}
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="fullName" className="form-label">
                Full Name<span className="text-red-500">*</span>
              </label>
              <input
                id="fullName"
                type="text"
                className={`form-input ${errors.full_name ? 'border-red-500' : ''}`}
                placeholder="John Doe"
                {...register('full_name', { 
                  required: 'Name is required',
                  minLength: { value: 2, message: 'Name must be at least 2 characters' }
                })}
              />
              {errors.full_name && (
                <p className="mt-1 text-sm text-red-500">{errors.full_name.message}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="email" className="form-label">
                Email Address<span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                className={`form-input ${errors.email ? 'border-red-500' : ''}`}
                placeholder="john@example.com"
                {...register('email', { 
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                  }
                })}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="phone" className="form-label">
                Phone Number<span className="text-red-500">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                className={`form-input ${errors.phone_number ? 'border-red-500' : ''}`}
                placeholder="(555) 123-4567"
                {...register('phone_number', { 
                  required: 'Phone number is required',
                  pattern: {
                    value: /^[\d\s()-]+$/,
                    message: 'Invalid phone number'
                  }
                })}
              />
              {errors.phone_number && (
                <p className="mt-1 text-sm text-red-500">{errors.phone_number.message}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="address" className="form-label">
                Property Address/County<span className="text-red-500">*</span>
              </label>
              <input
                id="address"
                type="text"
                className={`form-input ${errors.property_address ? 'border-red-500' : ''}`}
                placeholder="123 Main St, City, State"
                {...register('property_address', { 
                  required: 'Property address is required'
                })}
              />
              {errors.property_address && (
                <p className="mt-1 text-sm text-red-500">{errors.property_address.message}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="service" className="form-label">
                Service Needed<span className="text-red-500">*</span>
              </label>
              <select
                id="service"
                className={`form-input ${errors.service_needed ? 'border-red-500' : ''}`}
                {...register('service_needed', { required: 'Please select a service' })}
              >
                <option value="">Select a service</option>
                {serviceOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {errors.service_needed && (
                <p className="mt-1 text-sm text-red-500">{errors.service_needed.message}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="projectSize" className="form-label">
                Property Size<span className="text-red-500">*</span>
              </label>
              <select
                id="projectSize"
                className={`form-input ${errors.property_size ? 'border-red-500' : ''}`}
                {...register('property_size', { required: 'Please select property size' })}
              >
                <option value="">Select property size</option>
                {propertySizes.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {errors.property_size && (
                <p className="mt-1 text-sm text-red-500">{errors.property_size.message}</p>
              )}
            </div>
          </div>
          
          <div>
            <label htmlFor="details" className="form-label">
              Project Details
              <span className="ml-1 text-gray-500 text-sm">(optional)</span>
            </label>
            <textarea
              id="details"
              rows={4}
              className="form-input"
              placeholder="Tell us more about your project (e.g., timeline, specific requirements, or concerns)"
              {...register('project_details')}
            ></textarea>
          </div>
          
          <div className="mt-6">
            <button 
              type="submit" 
              className="btn btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Get My Free Quote'}
            </button>
            <div className="mt-4 text-xs sm:text-sm text-gray-500">
              <div className="flex items-start space-x-2">
                <Info className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <p>
                  By submitting this form, you agree to our{' '}
                  <a href="/privacy" className="text-primary-600 hover:text-primary-700 underline">privacy policy</a>
                  {' '}and{' '}
                  <a href="/terms" className="text-primary-600 hover:text-primary-700 underline">terms of service</a>.
                  We'll respond within 24 hours during business hours.
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default QuoteForm;