"use client";

import React from "react";
import "../styles/Portfolio.css";

// Define props interface
interface PortfolioProps {
  onOpen?: () => void; // optional callback
}

const Portfolio: React.FC<PortfolioProps> = ({ onOpen }) => {
  const openPortfolio = () => {
    // Call the onOpen callback if provided
    if (onOpen) onOpen();

    // Open the portfolio in a new tab
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
