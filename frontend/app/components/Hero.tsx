// app/components/Hero.tsx

import React from "react";
import "../styles/Hero.css";

interface HeroProps {
  onOpen?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpen }) => {
  return (
    <header id="home" className="hero">
      <div className="hero-container">

        <h1 className="hero-title">Soft Core Studio</h1>

        <p className="hero-subtext">From Concept to Global Deployment.</p>
        <p className="hero-subtext">
          We build scalable platforms and services for private or global clients.
        </p>

        <div className="hero-buttons">
          <button
            type="button"
            className="hero-btn hero-btn-primary"
            onClick={onOpen}
          >
            Get a Quote Now
          </button>

          <button
            type="button"
            className="hero-btn hero-btn-secondary"
            data-scroll-to="#services"
          >
            See Our Services
          </button>
        </div>

      </div>
    </header>
  );
};

export default Hero;