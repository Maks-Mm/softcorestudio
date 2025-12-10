// ...existing code...
"use client";

import React, { useState } from "react";
import "../styles/Portfolio.css";

interface PortfolioProps {
  onOpen?: () => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ onOpen }) => {
  const [showPortfolio, setShowPortfolio] = useState(false);

  const openPortfolio = () => {
    if (onOpen) onOpen();
    setShowPortfolio(true); // show in-page section as well
    window.open(
      "https://mmpryshchepa-giuz.vercel.app/",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div>
      {!showPortfolio && (
        <button onClick={openPortfolio} className="portfolio-button">
          View Portfolio
        </button>
      )}
    </div>
  );
};

export default Portfolio;