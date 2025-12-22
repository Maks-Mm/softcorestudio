"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useStickyNav } from "../hooks/useStickyNav";
import { useSmoothScroll } from "../hooks/useSmoothScroll";
import "../styles/Navbar.css";

export default function Navbar() {
  const isSticky = useStickyNav("home");
  const scrollTo = useSmoothScroll();
  const router = useRouter();
  const [redirectToPortfolio, setRedirectToPortfolio] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (redirectToPortfolio) {
      router.push("/#portfolio");
      setRedirectToPortfolio(false);
    }
  }, [redirectToPortfolio, router]);

  const handleNavClick = (targetId : any) => {
    if (targetId === "portfolio" && window.location.pathname !== "/") {
      setRedirectToPortfolio(true);
    } else {
      scrollTo(targetId);
    }
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className={`top-nav animated fadeInDown clearfix ${isSticky ? "sticky" : ""}`}>
        <div className="container">
          {/* Hamburger Menu Button - Only on Mobile */}
          <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <ul className={`list-unstyled list-inline ${isMenuOpen ? 'active' : ''}`}>
            <li className="list-inline-item m-r-1">
              <a onClick={() => handleNavClick("home")} className="js-scroll">Home</a>
            </li>
            <li className="list-inline-item m-r-1">
              <a onClick={() => handleNavClick("services")} className="js-scroll">Services</a>
            </li>
            <li className="list-inline-item m-r-1">
              <a onClick={() => handleNavClick("locations")} className="js-scroll">Contact</a>
            </li>
            <li className="list-inline-item m-r-1">
              <a
                onClick={() => handleNavClick("portfolio")}
                className="js-scroll"
              >
                Portfolio
              </a>
            </li>
            <li className="list-inline-item m-r-0">
              <a
                className="btn signup-btn btn-danger btn-sm"
                data-toggle="modal"
                data-target="#signup_form_modal"
              >
                Start a Project
              </a>
            </li>
          </ul>
        </div>
      </nav>
      
      {/* Mobile menu overlay */}
      <div className={`menu-overlay ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}></div>
    </>
  );
}