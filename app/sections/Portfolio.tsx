// src/sections/Portfolio.tsx
import React from "react";

const Portfolio: React.FC = () => {
  return (
    <section
      id="portfolio"
      className="relative flex flex-col justify-center items-center h-screen bg-gunmetal bg-cover bg-center bg-blend-overlay before:absolute before:inset-0 before:bg-black/60"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1616469832424-6927678c6b4b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0")',
      }}
    >
      <div className="relative z-10 text-center px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white uppercase mb-6">
          Our Success Stories
        </h2>
        <a
          href="#"
          className="inline-block bg-candyred text-white font-semibold py-3 px-6 rounded-lg hover:bg-imperialred transition-colors duration-300"
        >
          View Portfolio
        </a>
      </div>
    </section>

  );
};

export default Portfolio;
