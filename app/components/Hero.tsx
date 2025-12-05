//app/components/Hero.tsx

import React from "react";

interface HeroProps {
  onQuoteClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onQuoteClick }) => {
  return (
    <header
      id="home"
      className="relative w-full h-screen flex items-center justify-center bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `linear-gradient(rgba(43,45,66,0.75), rgba(43,45,66,0.75)), url('https://images.unsplash.com/photo-1616469832301-ffaeadc68cf3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0')`,
      }}
    >
      <div className="container text-center px-4 animate-fadeInUp">
        <h1 className="text-candyred text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight leading-tight mb-4">
          Digital Product Delivery
        </h1>

        <p className="text-antiwhite text-lg md:text-xl mb-2">
          From Concept to Global Deployment.
        </p>

        <p className="text-antiwhite text-lg md:text-xl mb-6">
          We build scalable platforms and services for private and global clients.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">

          {/* Get a Quote Button */}


          <a
            href="#"
            onClick={onQuoteClick}
            className="btn btn-primary btn-lg btn-block"
            data-toggle="modal"
            data-target="#speakers_modal"
          >
            Get a Quote Now
            View Full Service List
          </a>

          {/* View Full Service List (Bootstrap-styled modal trigger) */}
          <a
            href="#"
            className="btn btn-primary btn-lg btn-block"
            data-toggle="modal"
            data-target="#speakers_modal"
          >
            View Full Service List
          </a>

        </div>
      </div>
    </header>
  );
};

export default Hero;
