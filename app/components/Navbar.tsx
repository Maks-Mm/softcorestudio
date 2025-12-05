"use client";

import React from "react";
import { useStickyNav } from "../hooks/useStickyNav";
import { useSmoothScroll } from "../hooks/useSmoothScroll";
import "../styles/Navbar.css";

export default function Navbar() {
  const isSticky = useStickyNav("home");
  const scrollTo = useSmoothScroll();

  return (
    <nav className={`top-nav animated fadeInDown clearfix ${isSticky ? "sticky" : ""}`}>
      <div className="container">
        <ul className="list-unstyled list-inline">

          <li className="list-inline-item">
            <a onClick={() => scrollTo("home")} className="js-scroll">Home</a>
          </li>

          <li className="list-inline-item">
            <a onClick={() => scrollTo("services")} className="js-scroll">Services</a>
          </li>

          <li className="list-inline-item">
            <a onClick={() => scrollTo("contact")} className="js-scroll">Contact</a>
          </li>

          <li className="list-inline-item">
            <a onClick={() => scrollTo("portfolio")} className="js-scroll">Portfolio</a>
          </li>

          <li className="list-inline-item">
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
