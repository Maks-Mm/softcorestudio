// app/components/HeroCarousel.tsx
'use client';

import { useEffect, useState, useRef } from "react";
import "../styles/HeroCarousel.css";

const carouselItems = [
  {
    image: "https://images.unsplash.com/photo-1758518730136-1bf4fa26ccbf?w=1600&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
    title: "Your Vision, Our Expertise",
    subtitle: "Transforming ideas into exceptional results with deep understanding and precision",
    cta: "Start Your Journey"
  },
  {
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Trusted by Industry Leaders",
    subtitle: "Join our community of happy clients achieving extraordinary success",
    cta: "View Success Stories"
  },
  {
    image: "https://images.unsplash.com/photo-1714974528749-fc028e54feb9?w=1600&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8",
    title: "Modern Solutions, Timeless Results",
    subtitle: "Cutting-edge insights combined with decades of consulting excellence",
    cta: "Explore Our Approach"
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1661512297781-98426989f692?w=1600&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8",
    title: "Where Professionalism Meets Innovation",
    subtitle: "Experience-driven consulting with a focus on measurable outcomes",
    cta: "Meet Our Experts"
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1661346369641-e10606088648?w=1600&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI5fHx8ZW58MHx8fHx8",
    title: "Beyond Consulting - A Partnership",
    subtitle: "We don't just advise, we collaborate to build your future",
    cta: "Schedule Consultation"
  }
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselItems.length);
    }, 5000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoSlide();
    return stopAutoSlide;
  }, []);

  const handleCtaClick = () => {
    // Smooth scroll to contact/consultation section
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className="carousel-wrapper"
      onMouseEnter={stopAutoSlide}
      onMouseLeave={startAutoSlide}
    >
      {carouselItems.map((item, index) => (
        <div
          key={index}
          className={`carousel-slide ${index === current ? "active" : ""}`}
          style={{ backgroundImage: `url(${item.image})` }}
        >
          <div className="carousel-content">
            <h1 className="carousel-title">{item.title}</h1>
            <p className="carousel-subtitle">{item.subtitle}</p>
            <button 
              className="carousel-cta"
              onClick={handleCtaClick}
            >
              {item.cta}
            </button>
          </div>
        </div>
      ))}

      <div className="carousel-overlay" />

      {/* Navigation */}
      <div className="carousel-nav">
        <button
          className="carousel-nav-btn"
          onClick={() =>
            setCurrent((current - 1 + carouselItems.length) % carouselItems.length)
          }
        >
          ‹
        </button>
        <button
          className="carousel-nav-btn"
          onClick={() => setCurrent((current + 1) % carouselItems.length)}
        >
          ›
        </button>
      </div>

      {/* Dots */}
      <div className="carousel-controls">
        {carouselItems.map((_, i) => (
          <span
            key={i}
            className={`carousel-dot ${i === current ? "active" : ""}`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </div>
  );
}