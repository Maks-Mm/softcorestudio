// src/components/SignupModal.tsx
"use client"
import React, { useState, useEffect } from "react";
import "../styles/SignupModal.css";

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  profession?: string;
  budget?: string;
}

const SignupModal: React.FC<SignupModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    profession: "",
    budget: "medium" as "small" | "medium" | "large"
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!formData.profession) newErrors.profession = "Please select a profession";
    if (!formData.budget) newErrors.budget = "Please select a budget range";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log("Form Submitted:", formData);
      setSubmitSuccess(true);
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          profession: "",
          budget: "medium"
        });
        setSubmitSuccess(false);
        onClose();
      }, 2000);
      
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  if (!isOpen) return null;

  return (
    <div className="signup-modal-overlay" onClick={onClose}>
      <div className="signup-modal-container" onClick={e => e.stopPropagation()}>
        <button 
          className="signup-modal-close" 
          onClick={onClose}
          aria-label="Close modal"
          disabled={isSubmitting}
        >
          &times;
        </button>

        <h2 className="signup-modal-title">Let's Build Something Great Together 🚀</h2>
        <p className="signup-modal-description">
          Tell us a few details so we can prepare a personalized estimate for your project.
        </p>

        {submitSuccess ? (
          <div className="success-message" style={{
            textAlign: 'center',
            padding: '2rem',
            color: '#10b981'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎉</div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.5rem' }}>
              Thank You!
            </h3>
            <p>We'll contact you within 24 hours with your personalized estimate.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="signup-form" noValidate>
            <div>
              <label className="signup-label">First Name *</label>
              <input
                type="text"
                value={formData.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                className={`signup-input ${errors.firstName ? 'error' : ''}`}
                placeholder="John"
                disabled={isSubmitting}
              />
              {errors.firstName && (
                <span className="signup-error">⚠️ {errors.firstName}</span>
              )}
            </div>

            <div>
              <label className="signup-label">Last Name *</label>
              <input
                type="text"
                value={formData.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                className={`signup-input ${errors.lastName ? 'error' : ''}`}
                placeholder="Doe"
                disabled={isSubmitting}
              />
              {errors.lastName && (
                <span className="signup-error">⚠️ {errors.lastName}</span>
              )}
            </div>

            <div>
              <label className="signup-label">Email *</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className={`signup-input ${errors.email ? 'error' : ''}`}
                placeholder="you@example.com"
                disabled={isSubmitting}
              />
              <small className="signup-small">We'll get back to you within 24 hours.</small>
              {errors.email && (
                <span className="signup-error">⚠️ {errors.email}</span>
              )}
            </div>

            <div>
              <label className="signup-label">What best describes you? *</label>
              <select
                value={formData.profession}
                onChange={(e) => handleInputChange('profession', e.target.value)}
                className={`signup-input ${errors.profession ? 'error' : ''}`}
                disabled={isSubmitting}
              >
                <option value="">Select...</option>
                <option value="Startup Founder">Startup Founder</option>
                <option value="E-commerce Business">E-commerce Business</option>
                <option value="Agency / Freelancer">Agency / Freelancer</option>
                <option value="Enterprise Company">Enterprise Company</option>
                <option value="Non-Profit / NGO">Non-Profit / NGO</option>
                <option value="Other">Other</option>
              </select>
              {errors.profession && (
                <span className="signup-error">⚠️ {errors.profession}</span>
              )}
            </div>

            <div className="signup-budget-group">
              <label className="signup-label">Estimated Budget *</label>

              <label className="signup-radio">
                <input
                  type="radio"
                  name="budget"
                  value="small"
                  checked={formData.budget === "small"}
                  onChange={() => handleInputChange('budget', "small")}
                  disabled={isSubmitting}
                />
                <span>Starter Budget (&lt; $5k)</span>
              </label>

              <label className="signup-radio">
                <input
                  type="radio"
                  name="budget"
                  value="medium"
                  checked={formData.budget === "medium"}
                  onChange={() => handleInputChange('budget', "medium")}
                  disabled={isSubmitting}
                />
                <span>Growth Budget ($5k – $15k)</span>
              </label>

              <label className="signup-radio">
                <input
                  type="radio"
                  name="budget"
                  value="large"
                  checked={formData.budget === "large"}
                  onChange={() => handleInputChange('budget', "large")}
                  disabled={isSubmitting}
                />
                <span>Enterprise Budget ($15k+)</span>
              </label>
              {errors.budget && (
                <span className="signup-error" style={{ marginTop: '0.5rem' }}>
                  ⚠️ {errors.budget}
                </span>
              )}
            </div>

            <button 
              type="submit" 
              className="signup-submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span style={{ marginRight: '0.5rem' }}>⏳</span>
                  Processing...
                </>
              ) : (
                'Get My Project Estimate'
              )}
            </button>
            
            <div style={{ 
              marginTop: '1rem', 
              fontSize: '0.75rem', 
              color: '#9ca3af',
              textAlign: 'center'
            }}>
              By submitting, you agree to our Privacy Policy and Terms of Service.
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default SignupModal;