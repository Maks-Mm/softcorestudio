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
            {/* Dark overlay for better contrast */}
            <div className="contact-overlay"></div>
            
            <div className="contact-container">
                <div className="contact-content-wrapper">
                    {/* Floating decorative elements */}
                    <div className="floating-elements">
                        <div className="floating-element floating-element-1"></div>
                        <div className="floating-element floating-element-2"></div>
                        <div className="floating-element floating-element-3"></div>
                    </div>
                    
                    {/* Header section */}
                    <div className="contact-header">
                        <div className="contact-badge">
                            <div className="badge-pulse"></div>
                            <span className="badge-text">Let's Connect</span>
                        </div>
                        
                        <h2 className="contact-title">
                            Ready to Bring Your Vision to Life?
                            <span className="title-highlight"></span>
                        </h2>
                        
                        <p className="contact-subtitle">
                            Join hundreds of satisfied clients who transformed their ideas into 
                            exceptional digital experiences with our expert team.
                        </p>
                    </div>
                    
                    {/* CTA Section */}
                    <div className="contact-cta">
                        {renderButton()}
                        
                        <div className="cta-assurance">
                            <svg className="assurance-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M20 6L9 17l-5-5"/>
                            </svg>
                            <span>Free consultation • No commitment • 24-hour response</span>
                        </div>
                    </div>
                    
                    {/* Features Grid */}
                    <div className="contact-features">
                        <div className="feature-card">
                            <div className="feature-icon-wrapper">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                                    <path d="M22 4L12 14.01l-3-3"/>
                                </svg>
                            </div>
                            <h4 className="feature-title">Expert Strategy</h4>
                            <p className="feature-description">Customized solutions for your goals</p>
                        </div>
                        
                        <div className="feature-card">
                            <div className="feature-icon-wrapper">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                                </svg>
                            </div>
                            <h4 className="feature-title">Secure & Reliable</h4>
                            <p className="feature-description">Enterprise-grade security</p>
                        </div>
                        
                        <div className="feature-card">
                            <div className="feature-icon-wrapper">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                                    <path d="M2 17l10 5 10-5"/>
                                    <path d="M2 12l10 5 10-5"/>
                                </svg>
                            </div>
                            <h4 className="feature-title">End-to-End Support</h4>
                            <p className="feature-description">Full project lifecycle support</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}