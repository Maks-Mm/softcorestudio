"use client";

import React from "react";
import "../styles/Banner.css";
import Portfolio from "../sections/Portfolio"; // <-- USE YOUR REAL COMPONENT

interface BannerProps {
  onOpen?: () => void;
}

export default function Banner({ onOpen }: BannerProps) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full">
      {/* HERO */}
      <header
        id="home"
        className="relative h-screen flex items-center pt-[125px] bg-fixed bg-cover bg-bottom text-white"
        style={{
          backgroundImage:
            "linear-gradient(rgba(43,45,66,0.75), rgba(43,45,66,0.75)), url('https://images.unsplash.com/photo-1616469832301-ffaeadc68cf3?q=80&w=1170&auto=format&fit=crop')",
        }}
      >
        <div className="container mx-auto px-6 animate-fadeInUp">
          <h1 className="text-red-600 font-bold uppercase w-3/4 md:w-1/2 leading-[0.9] tracking-tight text-6xl md:text-7xl drop-shadow-md">
            Soft Core Studio
          </h1>

          <p className="mt-4 text-gray-200 text-lg">
            From Concept to Global Deployment.
          </p>
          <p className="mt-4 mb-8 text-gray-200 text-lg">
            We build scalable platforms and services for private or global clients.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button onClick={onOpen} className="btn btn-primary px-6 py-3">
              Get a Quote Now
            </button>

            <button
              onClick={() => scrollTo("services")}
              className="px-6 py-3 rounded-md bg-gray-200 text-black hover:bg-gray-100 transition"
            >
              See Our Services
            </button>
          </div>
        </div>
      </header>

      {/* OFFERS SECTION – Portfolio mounts here */}
      <section
        id="offers"
        className="py-16 text-center text-white bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(217,4,41,0.45), rgba(217,4,41,0.45)), url('https://plus.unsplash.com/premium_photo-1661306568863-57a53e63ce73?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl uppercase font-bold mb-10">
            Learn More About Us
          </h2>

          {/* YOUR REAL PORTFOLIO COMPONENT */}
          <Portfolio onOpen={onOpen} />
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="py-16 text-center text-white bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(217,4,41,0.45), rgba(217,4,41,0.45)), url('https://images.unsplash.com/photo-1759139681761-852dd24340df?q=80&w=1170&auto=format&fit=crop')",
        }}
      >
        <div className="container mx-auto px-6">
          <h2 className="mb-6 text-4xl uppercase font-bold">
            End-to-End Digital Solutions
          </h2>

        <button
          onClick={() => scrollTo("locations")}
          className="px-8 py-4 rounded-md bg-[#2B2D42] hover:bg-[#1f2030] transition inline-block"
        >
          View Full Service List
        </button>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="locations"
        className="py-16 text-center text-white bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(217,4,41,0.45), rgba(217,4,41,0.45)), url('https://images.unsplash.com/photo-1487537708572-3c850b5e856e?auto=compress&fit=crop&w=1199&h=798')",
        }}
      >
        <div className="container mx-auto px-6">
          <h2 className="mb-6 text-4xl uppercase font-bold">
            Ready to Get Started?
          </h2>

          <button
            onClick={() => alert("Contact form would open here")}
            className="px-8 py-4 rounded-md bg-[#2B2D42] hover:bg-[#1f2030] transition inline-block"
          >
            Contact Us
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-6 text-center bg-[#2B2D42] text-gray-200">
        <p className="text-sm">© 2025 Soft Core Studio — All Rights Reserved</p>
      </footer>
    </div>
  );
}
