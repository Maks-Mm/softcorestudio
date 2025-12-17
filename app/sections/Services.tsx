// app/sections/Services.tsx
import { useState } from 'react';
import "../styles/Services.css";

type Service = {
  id: number;
  title: string;
  price: string;
  description: string;
  tech: string[];
  features: string[];
  cta: string;
  icon: React.ReactNode;
  image?: string;
};

const services: Service[] = [
  {
    id: 1,
    title: "WordPress Development",
    description: "Professional WordPress sites with Elementor, WooCommerce & custom themes.",
    features: ["Custom Themes", "E-commerce", "Page Builder", "Optimization"],
    price: "€400+",
    tech: ["WordPress", "Elementor", "WooCommerce"],
    cta: "Start Project",
    icon: (
      <svg className="service-icon" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        <path fill="#21759B" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-111 0-200-89-200-200S145 56 256 56s200 89 200 200-89 200-200 200z"/>
        <path fill="#21759B" d="M256 56c-111 0-200 89-200 200s89 200 200 200 200-89 200-200S367 56 256 56zm24 223c-20 0-36-6-48-19-12-13-18-31-18-54 0-23 6-42 19-55 13-13 31-20 55-20 20 0 36 6 48 19 12 13 18 31 18 54 0 23-6 42-19 55-13 13-31 20-55 20zm-24-88c0 18 4 31 12 39s19 12 32 12c11 0 20-3 26-8 6-5 11-13 14-24l-39-22-45-11v12z"/>
      </svg>
    ),
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "React Applications",
    description: "Modern React & Next.js apps with TypeScript and scalable architecture.",
    features: ["Next.js 14", "TypeScript", "State Mgmt", "API Integration"],
    price: "€800+",
    tech: ["React", "Next.js", "TypeScript"],
    cta: "Start Project",
    icon: (
      <svg className="service-icon" viewBox="-11.5 -10.23174 23 20.46348" xmlns="http://www.w3.org/2000/svg">
        <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
        <g stroke="#61dafb" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2"/>
          <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
          <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
        </g>
      </svg>
    ),
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "E-commerce Solutions",
    description: "Complete online stores with secure payment processing and inventory management.",
    features: ["Shopify/Woo", "Payment Gateways", "Product Catalog", "Mobile Ready"],
    price: "€600+",
    tech: ["Shopify", "WooCommerce", "Stripe"],
    cta: "Start Project",
    icon: (
      <svg className="service-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path fill="#7AB55C" d="M21.5 9H17V7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v2H2.5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h19a1 1 0 0 0 1-1V10a1 1 0 0 0-1-1zM9 8h6v1H9V8zm11 11H4v-8h2v2a1 1 0 0 0 2 0v-2h8v2a1 1 0 0 0 2 0v-2h2v8z"/>
        <path fill="#95BF47" d="M12 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
      </svg>
    ),
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "SEO & Analytics",
    description: "Comprehensive SEO strategy and analytics for maximum visibility.",
    features: ["Technical SEO", "Google Analytics", "Keyword Research", "Reporting"],
    price: "€300+",
    tech: ["Google Analytics", "Search Console", "Ahrefs"],
    cta: "Start Project",
    icon: (
      <svg className="service-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path fill="#4285F4" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
        <path fill="#34A853" d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
        <path fill="#EA4335" d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
        <path fill="#FBBC05" d="M16 8h-2V6h2v2zm-8 0H6V6h2v2z"/>
      </svg>
    ),
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "DevOps & Maintenance",
    description: "Automated deployment, monitoring, and 24/7 support for your applications.",
    features: ["Cloud Hosting", "CI/CD Pipeline", "Security Updates", "Monitoring"],
    price: "€50/month",
    tech: ["AWS", "Docker", "CI/CD"],
    cta: "Subscribe Now",
    icon: (
      <svg className="service-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path fill="#6366F1" d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
        <path fill="#8B5CF6" d="M19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3z"/>
        <circle fill="#FFFFFF" cx="12" cy="14" r="2"/>
        <circle fill="#FFFFFF" cx="16" cy="14" r="1.5"/>
        <circle fill="#FFFFFF" cx="8" cy="14" r="1.5"/>
      </svg>
    ),
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&auto=format&fit=crop"
  }
];

export default function Services() {
  const [messages, setMessages] = useState<{[key: number]: boolean}>({});

  const handleButtonClick = (id: number) => {
    setMessages({...messages, [id]: true});
    
    setTimeout(() => {
      setMessages(prev => ({...prev, [id]: false}));
    }, 3500);
  };

  return (
    <section className="services-wrapper">
      <p className="services-subtitle">Enterprise-grade solutions built with professional tools</p>

      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <div className="service-image" style={{ backgroundImage: `url(${service.image})` }}>
              <div className="service-icon-container">
                {service.icon}
              </div>
            </div>

            <div className="service-content">
              <h3>{service.title}</h3>
              
              <div className="service-tech">
                {service.tech.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>

              <p className="service-desc">{service.description}</p>
              
              <div className="service-features">
                {service.features.map((feature, index) => (
                  <span key={index} className="feature-tag">✓ {feature}</span>
                ))}
              </div>

              <div className="service-footer">
                <span className="service-price">{service.price}</span>
                <button 
                  className="service-cta"
                  onClick={() => handleButtonClick(service.id)}
                >
                  {service.cta}
                </button>
              </div>

              {messages[service.id] && (
                <div className="service-message">
                  ✓ Thank you! Our team will contact you within 24 hours.
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}