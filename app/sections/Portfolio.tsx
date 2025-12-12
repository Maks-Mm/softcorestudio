
//then this must be a component no button but a styled portfolio block to render from Banner 
//the Hero component is false for Portfolio - rendering (it takes just mount of page no body like Banner)
//app/sections/portfolio.tsx

"use client";

import React from "react";
import "../styles/Portfolio.css";

interface PortfolioProps {
  onOpen?: () => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ onOpen }) => {
  const projects = [
    {
      title: "GIUZ Platform",
      desc: "E-commerce scraping engine with scalable infrastructure.",
      link: "https://mmpryshchepa-giuz.vercel.app/",
      img: "https://images.unsplash.com/photo-1522199710521-72d69614c702?w=1200"
    },
    {
      title: "Soft Core UI Kit",
      desc: "Internal UI framework for ultra-fast SaaS prototyping.",
      link: "https://google.com",
      img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1200"
    },
    {
      title: "API Service Hub",
      desc: "Microservice suite powering global data ingestion.",
      link: "https://google.com",
      img: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=1200"
    }
  ];

  const openProject = (url: string) => {
    if (onOpen) onOpen();
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="portfolio-wrapper">
      <h2 className="portfolio-title">Our Successful Projects</h2>
      <p className="portfolio-subtitle">Live production platforms we built:</p>

      <div className="portfolio-grid">
        {projects.map((p, i) => (
          <div
            key={i}
            className="portfolio-card"
            onClick={() => openProject(p.link)}
          >
            <div className="portfolio-image" style={{ backgroundImage: `url(${p.img})` }} />

            <div className="portfolio-content">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <span className="portfolio-link">Open Project →</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
