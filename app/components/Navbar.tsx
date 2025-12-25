// app/components/Navbar.tsx


// app/components/Navbar.tsx
"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useStickyNav } from "../hooks/useStickyNav";
import { useSmoothScroll } from "../hooks/useSmoothScroll";
import "../styles/Navbar.css";
import { signOutUser } from "../lib/auth";
import { useAuth } from '../hooks/useAuth';

export default function Navbar() {
  const { user, loading } = useAuth(); // Get user and loading from the hook
  const isSticky = useStickyNav("home");
  const scrollTo = useSmoothScroll();
  const router = useRouter();
  const [redirectToPortfolio, setRedirectToPortfolio] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (targetId: string) => {
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

  const handleSignOut = async () => {
    try {
      const { success, error } = await signOutUser();
      if (success) {
        router.push("/");
      } else if (error) {
        console.error("Sign out error:", error);
      }
    } catch (error) {
      console.error("Sign out error:", error);
    }
  };

  // Redirect to portfolio if needed
  useEffect(() => {
    if (redirectToPortfolio) {
      router.push("/");
      setTimeout(() => {
        scrollTo("portfolio");
        setRedirectToPortfolio(false);
      }, 100);
    }
  }, [redirectToPortfolio, router, scrollTo]);

  if (loading) {
    // Optional: Show loading state
    return (
      <nav className="top-nav clearfix">
        <div className="container">
          <div className="nav-loading">Loading...</div>
        </div>
      </nav>
    );
  }

  return (
    <>
      <nav className={`top-nav animated fadeInDown clearfix ${isSticky ? "sticky" : ""}`}>
        <div className="container">
          <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <ul className={`list-unstyled list-inline ${isMenuOpen ? 'active' : ''}`}>
            <li className="list-inline-item m-r-1">
              <a onClick={() => handleNavClick("home")} className="js-scroll cursor-pointer">Home</a>
            </li>
            <li className="list-inline-item m-r-1">
              <a onClick={() => handleNavClick("services")} className="js-scroll cursor-pointer">Services</a>
            </li>
            <li className="list-inline-item m-r-1">
              <a onClick={() => handleNavClick("locations")} className="js-scroll cursor-pointer">Contact</a>
            </li>
            <li className="list-inline-item m-r-1">
              <a onClick={() => handleNavClick("portfolio")} className="js-scroll cursor-pointer">Portfolio</a>
            </li>

            <div className="nav-buttons">
              {user ? (
                <>
                  <span className="user-email">
                    {user.email || "User"}
                  </span>
                  <button className="btn signin-btn" onClick={handleSignOut}>
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <button className="btn signup-btn" onClick={() => router.push("/signup")}>
                    Sign Up
                  </button>
                  <button className="btn signin-btn" onClick={() => router.push("/signin")}>
                    Sign In
                  </button>
                </>
              )}
            </div>
          </ul>
        </div>
      </nav>

      <div className={`menu-overlay ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}></div>
    </>
  );
}