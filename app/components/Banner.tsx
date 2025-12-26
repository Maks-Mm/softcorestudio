"use client";

import "../styles/Banner.css";
import Portfolio from "../sections/Portfolio";
import Contact from "../sections/Contact";
import Services from "../sections/Services";
import Footer from "../sections/Footer";
import HeroCarousel from "./HeroCarousel";

interface BannerProps {
  onOpen?: () => void;
}

export default function Banner({ onOpen }: BannerProps) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="banner-wrapper">
      {/* HERO SECTION */}
      <header id="home" className="banner-hero">
        <div className="banner-container">
          <HeroCarousel />
        </div>
      </header>

      {/* OFFERS SECTION */}
      <section id="offers" className="section-offers">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Learn More About Us</h2>
          </div>
          <Portfolio onOpen={onOpen} />
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="section-services">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">End-to-End Digital Solutions</h2>
          </div>
          <Services />
          <button
            onClick={() => scrollTo("locations")}
            className="btn btn-dark"
          >
            View Full Service List
          </button>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="locations">
        <Contact openModal={onOpen} />
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}