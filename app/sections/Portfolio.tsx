// app/sections/Portfolio.tsx
"use client";

import React from "react";
import "../styles/Portfolio.css";
import { Button } from "../components/Button";

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
    <div className="portfolio-wrapper" id="portfolio">
      <div className="portfolio-container">
        <div className="portfolio-header">
          <h2 className="portfolio-title">Our Successful Projects</h2>
          <p className="portfolio-subtitle">Live production platforms we built:</p>
        </div>

        <div className="portfolio-grid">
          {projects.map((p, i) => (
            <div key={i} className="portfolio-card">
              <div
                className="portfolio-image"
                style={{ backgroundImage: `url(${p.img})` }}
              />

              <div className="portfolio-content">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <Button
                  text="Open Project →"
                  variant="white"
                  onClick={() => openProject(p.link)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;