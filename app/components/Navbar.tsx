"use client";

import React from "react";
import { useStickyNav } from "../hooks/useStickyNav";
import { useSmoothScroll } from "../hooks/useSmoothScroll";

interface NavbarProps {
  onStartProjectClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onStartProjectClick }) => {
  // ✅ use hooks inside the component
  const isSticky = useStickyNav("home");
  const scrollTo = useSmoothScroll();

  return (
    <nav
      className={`w-full top-0 left-0 z-50 transition-all duration-300 ${
        isSticky ? "fixed bg-black/20" : "absolute bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-end items-center">
        <ul className="flex space-x-4">
          <li>
            <button
              onClick={() => scrollTo("home")}
              className="text-antiwhite border-b-0 hover:text-imperialred transition-colors duration-200"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollTo("services")}
              className="text-antiwhite border-b-0 hover:text-imperialred transition-colors duration-200"
            >
              Services
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollTo("contact")}
              className="text-antiwhite border-b-0 hover:text-imperialred transition-colors duration-200"
            >
              Contact
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollTo("portfolio")}
              className="text-antiwhite border-b-0 hover:text-imperialred transition-colors duration-200"
            >
              Portfolio
            </button>
          </li>
          <li>
            <button
              onClick={onStartProjectClick}
              className="bg-candyred text-white px-4 py-1 rounded hover:bg-imperialred transition-colors duration-200"
            >
              Start a Project
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
