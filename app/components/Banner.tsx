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
    <div className="banner-container">
      {/* HERO SECTION */}

      {/*the content is repiding like at Hero  */}
      <header
        id="home"
        className="banner-hero"
      >
        <HeroCarousel />

       
      </header>

      {/* OFFERS SECTION */}
      <section
        id="offers"
        className="section-offers"
        style={{
          backgroundImage:
            "linear-gradient(rgba(217,4,41,0.45), rgba(217,4,41,0.45)), url('https://plus.unsplash.com/premium_photo-1661306568863-57a53e63ce73?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="container">
          <h2 className="section-title">
            Learn More About Us
          </h2>
          <Portfolio onOpen={onOpen} />
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section
        id="services"
        className="section-services"
        style={{
          backgroundImage:
            "linear-gradient(rgba(217,4,41,0.45), rgba(217,4,41,0.45)), url('https://images.unsplash.com/photo-1759139681761-852dd24340df?q=80&w=1170&auto=format&fit=crop')",
        }}
      >
        <div className="container">
          <h2 className="section-title">
            End-to-End Digital Solutions
          </h2>
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