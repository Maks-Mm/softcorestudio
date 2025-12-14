// app/sections/Contact.tsx
"use client";

import { useState } from 'react';

interface ContactProps {
    openModal?: () => void;
}

export default function Contact({ openModal }: ContactProps) {
    const [isHovered, setIsHovered] = useState(false);
    const [buttonVariant] = useState<'glow' | 'gradient' | 'minimal' | 'neon'>('glow');

    const handleClick = () => {
        openModal?.();
    };

    const renderButton = () => {
        switch (buttonVariant) {
            case 'glow':
                return (
                    <button
                        onClick={handleClick}
                        className="contact-cta-button glow-button"
                        aria-label="Contact Us to start your project"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <span className="button-content">
                            <svg className="button-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                            </svg>
                            Start Your Project Now
                            <svg className="button-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </span>
                        <span className="glow-effect"></span>
                    </button>
                );
            
            case 'gradient':
                return (
                    <button
                        onClick={handleClick}
                        className="contact-cta-button gradient-button"
                        aria-label="Contact Us to start your project"
                    >
                        <span className="gradient-bg"></span>
                        <span className="button-text">Start Your Project Now</span>
                        <div className="sparkles">
                            <div className="sparkle"></div>
                            <div className="sparkle"></div>
                            <div className="sparkle"></div>
                        </div>
                    </button>
                );
            
            case 'neon':
                return (
                    <button
                        onClick={handleClick}
                        className="contact-cta-button neon-button"
                        aria-label="Contact Us to start your project"
                    >
                        <span className="neon-text">Start Your Project Now</span>
                        <span className="neon-border"></span>
                        <span className="neon-glow"></span>
                    </button>
                );
            
            default:
                return (
                    <button
                        onClick={handleClick}
                        className="contact-cta-button minimal-button"
                        aria-label="Contact Us to start your project"
                    >
                        <span>Start Your Project Now</span>
                        <div className="arrow-wrapper">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                    </button>
                );
        }
    };

    return (
        <section
            id="contact"
            className="contact-section"
            style={{
                backgroundImage: "linear-gradient(rgba(217,4,41,0.85), rgba(217,4,41,0.85)), url('https://images.unsplash.com/photo-1487537708572-3c850b5e856e?dpr=1&auto=compress&format&fit=crop&w=1199&h=798&q=80&cs=tinysrgb&crop=&bg=')"
            }}
        >
            <div className="contact-container">
                <div className="contact-content-wrapper">
                    <div className="floating-elements">
                        <div className="floating-element"></div>
                        <div className="floating-element"></div>
                        <div className="floating-element"></div>
                    </div>
                    
                    <div className="badge">
                        <div className="pulse-dot"></div>
                        <span>Get Started</span>
                    </div>
                    
                    <h2 className="contact-title">
                        Ready to Transform Your Vision?
                        <div className="title-highlight"></div>
                    </h2>
                    
                    <p className="contact-subtitle">
                        Let's discuss your next project. We are here to help you achieve your goals with precision and creativity.
                    </p>
                    
                    {renderButton()}
                    
                    <div className="additional-info">
                        <div className="info-item">
                            <div className="info-icon">✓</div>
                            <div className="info-text">Free Consultation</div>
                        </div>
                        <div className="info-divider"></div>
                        <div className="info-item">
                            <div className="info-icon">🎯</div>
                            <div className="info-text">Custom Solutions</div>
                        </div>
                        <div className="info-divider"></div>
                        <div className="info-item">
                            <div className="info-icon">⚡</div>
                            <div className="info-text">Fast Response</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}