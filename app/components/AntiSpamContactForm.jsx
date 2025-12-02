// components/AntiSpamContactForm.jsx
'use client';

import React, { useState, useEffect, useRef } from 'react';
import  AntiSpamContactFrom from './AntiSpamContactForm.css';

export default function AntiSpamContactForm() {
  const [csrfToken, setCsrfToken] = useState('');
  const [formLoadTime, setFormLoadTime] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });
  
  const botDetection = useRef({
    mouseMovements: 0,
    keystrokes: 0,
    focusEvents: 0,
    minInteractionScore: 5
  });

  // Rate limiting state
  const [rateLimit, setRateLimit] = useState({
    submissions: [],
    maxSubmissions: 3,
    window: 3600000 // 1 hour
  });

  // Initialize security measures
  useEffect(() => {
    // Generate CSRF token
    const generateCSRFToken = () => {
      return Array.from(crypto.getRandomValues(new Uint8Array(32)))
        .map(b => b.toString(16).padStart(2, '0'))
        .join('');
    };

    setCsrfToken(generateCSRFToken());
    setFormLoadTime(Date.now());

    // Load rate limit from sessionStorage
    const savedSubmissions = JSON.parse(sessionStorage.getItem('contactFormSubmissions') || '[]');
    setRateLimit(prev => ({ ...prev, submissions: savedSubmissions }));

    // Track mouse movements
    const handleMouseMove = () => {
      clearTimeout(window.mouseMoveTimeout);
      window.mouseMoveTimeout = setTimeout(() => {
        botDetection.current.mouseMovements++;
      }, 100);
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      if (window.mouseMoveTimeout) {
        clearTimeout(window.mouseMoveTimeout);
      }
    };
  }, []);

  // Track keyboard interactions
  const handleKeyDown = () => {
    botDetection.current.keystrokes++;
  };

  // Track focus events
  const handleFocus = () => {
    botDetection.current.focusEvents++;
  };

  // Check rate limit
  const checkRateLimit = () => {
    const now = Date.now();
    let submissions = [...rateLimit.submissions];
    
    // Remove old submissions
    submissions = submissions.filter(time => now - time < rateLimit.window);
    
    if (submissions.length >= rateLimit.maxSubmissions) {
      return false;
    }
    
    // Add current submission
    const newSubmissions = [...submissions, now];
    setRateLimit(prev => ({ ...prev, submissions: newSubmissions }));
    sessionStorage.setItem('contactFormSubmissions', JSON.stringify(newSubmissions));
    return true;
  };

  const getRemainingSubmissions = () => {
    const now = Date.now();
    const submissions = rateLimit.submissions.filter(time => now - time < rateLimit.window);
    return rateLimit.maxSubmissions - submissions.length;
  };

  // Show message
  const showMessage = (text, type) => {
    setMessage({ text, type });
    setTimeout(() => {
      setMessage({ text: '', type: '' });
    }, 5000);
  };

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Check rate limit
    if (!checkRateLimit()) {
      const remaining = getRemainingSubmissions();
      showMessage(`Rate limit exceeded. You can submit ${remaining} more time(s) in the next hour.`, 'warning');
      setIsSubmitting(false);
      return;
    }

    const formData = new FormData(e.target);
    
    // Check honeypot fields
    const honeypots = ['website', 'phone', 'company', 'address'];
    for (let field of honeypots) {
      if (formData.get(field) !== '') {
        console.log(`Bot detected - honeypot field "${field}" was filled`);
        showMessage('Something went wrong. Please try again.', 'error');
        setIsSubmitting(false);
        return;
      }
    }

    // Check timestamp - minimum 3 seconds interaction
    const submissionTime = Date.now();
    const interactionTime = submissionTime - formLoadTime;
    
    if (interactionTime < 3000) {
      console.log('Suspicious: Form submitted too quickly');
      showMessage('Please take a moment to fill out the form properly.', 'error');
      setIsSubmitting(false);
      return;
    }

    // Check bot detection score
    const interactionScore = botDetection.current.mouseMovements + 
                            botDetection.current.keystrokes + 
                            (botDetection.current.focusEvents * 2);
    
    if (interactionScore < botDetection.current.minInteractionScore) {
      console.log('Suspicious: Insufficient human-like interaction', {
        score: interactionScore,
        movements: botDetection.current.mouseMovements,
        keystrokes: botDetection.current.keystrokes,
        focus: botDetection.current.focusEvents
      });
      showMessage('Please interact with the form naturally.', 'error');
      setIsSubmitting(false);
      return;
    }

    // Verify CSRF token
    const submittedToken = formData.get('csrf_token');
    if (submittedToken !== csrfToken) {
      console.log('CSRF token mismatch');
      showMessage('Security validation failed. Please refresh and try again.', 'error');
      setIsSubmitting(false);
      return;
    }

    // Prepare data for submission
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
      csrf_token: csrfToken,
      timestamp: formLoadTime,
      interactionTime: interactionTime,
      interactionScore: interactionScore
    };

    try {
      // Here you would make your actual API call
      // For now, we'll simulate it
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Form submitted successfully:', {
        ...data,
        securityChecks: {
          honeypotsPassed: true,
          csrfValid: true,
          rateLimitOk: true,
          interactionTime: `${(interactionTime / 1000).toFixed(1)}s`,
          interactionScore: interactionScore
        }
      });
      
      showMessage('Thank you! Your message has been sent successfully.', 'success');
      e.target.reset();
      
      // Generate new CSRF token
      const newToken = Array.from(crypto.getRandomValues(new Uint8Array(32)))
        .map(b => b.toString(16).padStart(2, '0'))
        .join('');
      setCsrfToken(newToken);
      
    } catch (error) {
      console.error('Form submission error:', error);
      showMessage('An error occurred. Please try again.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="anti-spam-container">
      <h1>Get in Touch</h1>
      <p className="subtitle">We'd love to hear from you. Send us a message!</p>
      
      <form id="contactForm" onSubmit={handleSubmit}>
        {/* CSRF Token */}
        <input 
          type="hidden" 
          id="csrfToken" 
          name="csrf_token" 
          value={csrfToken}
          readOnly
        />
        
        {/* Timestamp for interaction verification */}
        <input 
          type="hidden" 
          id="timestamp" 
          name="timestamp" 
          value={formLoadTime || ''}
          readOnly
        />

        <div className="form-group">
          <label htmlFor="name">Name <span className="required">*</span></label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            required 
            onKeyDown={handleKeyDown}
            onFocus={handleFocus}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email <span className="required">*</span></label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            required 
            onKeyDown={handleKeyDown}
            onFocus={handleFocus}
          />
        </div>

        {/* HONEYPOT #1 - Position off-screen */}
        <div className="honeypot-1" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input 
            type="text" 
            id="website" 
            name="website" 
            tabIndex="-1" 
            autoComplete="off"
          />
        </div>

        {/* HONEYPOT #2 - Display none */}
        <div className="honeypot-2" aria-hidden="true">
          <label htmlFor="phone">Phone</label>
          <input 
            type="text" 
            id="phone" 
            name="phone" 
            tabIndex="-1" 
            autoComplete="off"
          />
        </div>

        {/* HONEYPOT #3 - Visibility hidden */}
        <div className="honeypot-3" aria-hidden="true">
          <label htmlFor="company">Company</label>
          <input 
            type="text" 
            id="company" 
            name="company" 
            tabIndex="-1" 
            autoComplete="off"
          />
        </div>

        {/* HONEYPOT #4 - Looks real but off-screen */}
        <div className="honeypot-4" aria-hidden="true">
          <label htmlFor="address">Address (Optional)</label>
          <input 
            type="text" 
            id="address" 
            name="address" 
            tabIndex="-1" 
            autoComplete="nope"
          />
        </div>

        <div className="form-group">
          <label htmlFor="subject">Subject <span className="required">*</span></label>
          <input 
            type="text" 
            id="subject" 
            name="subject" 
            required 
            onKeyDown={handleKeyDown}
            onFocus={handleFocus}
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message <span className="required">*</span></label>
          <textarea 
            id="message" 
            name="message" 
            required 
            onKeyDown={handleKeyDown}
            onFocus={handleFocus}
          ></textarea>
        </div>

        <button 
          type="submit" 
          id="submitBtn" 
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>

        {message.text && (
          <div 
            id="responseMessage" 
            className={`message ${message.type} show`}
          >
            {message.text}
          </div>
        )}
      </form>
    </div>
  );
}