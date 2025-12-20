// app/components/Navbar.tsx
"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // if using Next.js 13 app router
import { useStickyNav } from "../hooks/useStickyNav";
import { useSmoothScroll } from "../hooks/useSmoothScroll";

export default function Navbar() {
  const isSticky = useStickyNav("home");
  const scrollTo = useSmoothScroll();
  const router = useRouter();

  const [redirectToPortfolio, setRedirectToPortfolio] = useState(false);

  React.useEffect(() => {
    if (redirectToPortfolio) {
      router.push("/#portfolio"); // redirect and scroll to portfolio
      setRedirectToPortfolio(false);
    }
  }, [redirectToPortfolio, router]);

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
            <a onClick={() => {
              // If already on the same page, just scroll
              if (window.location.pathname === "/") {
                scrollTo("portfolio");
              } else {
                setRedirectToPortfolio(true); // redirect to home + scroll
              }
            }} className="js-scroll">Portfolio</a>
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
