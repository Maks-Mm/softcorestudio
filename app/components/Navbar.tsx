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

  useEffect(() => {
    if (redirectToPortfolio) {
      router.push("/#portfolio");
      setRedirectToPortfolio(false);
    }
  }, [redirectToPortfolio, router]);

  return (
    <nav className={`top-nav animated fadeInDown clearfix ${isSticky ? "sticky" : ""}`}>
      <div className="container">
        <ul className="list-unstyled list-inline">
          <li className="list-inline-item m-r-1">
            <a onClick={() => scrollTo("home")} className="js-scroll">Home</a>
          </li>
          <li className="list-inline-item m-r-1">
            <a onClick={() => scrollTo("services")} className="js-scroll">Services</a>
          </li>
          <li className="list-inline-item m-r-1">
            <a onClick={() => scrollTo("locations")} className="js-scroll">Contact</a>
          </li>
          <li className="list-inline-item m-r-1">
            <a
              onClick={() => {
                if (window.location.pathname === "/") {
                  scrollTo("portfolio");
                } else {
                  setRedirectToPortfolio(true);
                }
              }}
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
  );
}
