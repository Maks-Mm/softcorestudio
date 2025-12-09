//app/sections/portfolio.tsx
"use client";

import React from "react";
import "../styles/Portfolio.css";

interface PortfolioProps {
  onOpen?: () => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ onOpen }) => {
  const openPortfolio = () => {
    if (onOpen) onOpen();

    window.open(
      "https://mmpryshchepa-giuz.vercel.app/",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="content-wrapper">
        <h2 className="title">Our Success Stories</h2>

        <button onClick={openPortfolio} className="portfolio-button">
          View Portfolio
        </button>
      </div>
    </section>
  );
};

export default Portfolio;
