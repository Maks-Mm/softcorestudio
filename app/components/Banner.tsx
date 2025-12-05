//app/components/Banner.tsx

import React from "react";
import "../styles/Banner.css";

export default function Banner() {
  return (
    <div className="w-full">
      {/* Top Hero */}
      <header
        id="home"
        className="top-hero jumbotron-fluid p-b-3 bg-faded h-screen flex items-center pt-[125px] bg-fixed bg-cover bg-bottom"
        style={{
          backgroundImage:
            "linear-gradient(rgba(43,45,66,0.75), rgba(43,45,66,0.75)), url('https://images.unsplash.com/photo-1616469832301-ffaeadc68cf3?q=80&w=1170&auto=format&fit=crop')",
        }}
      >
        <div className="container animated fadeInUp text-white">
          <h1 className="text-red-600 font-bold uppercase w-1/2 leading-none tracking-tight text-6xl drop-shadow-md">
            Soft Core Studio
          </h1>
          <p className="lead mt-4 text-gray-200">From Concept to Global Deployment.</p>
          <p className="lead mt-4 mb-6 text-gray-200">
            We build scalable platforms and services for private or global clients.
          </p>
          <button
            type="button"
            className="btn btn-lg btn-danger mt-4"
            data-toggle="modal"
            data-target="#signup_form_modal"
          >
            Get a Quote Now
          </button>
          <button
            type="button"
            className="js-scroll btn btn-lg btn-default mt-4 ml-3"
            data-scroll-to="#services"
          >
            See Our Services
          </button>
        </div>
      </header>

      {/* Services Section */}
      <section
        id="services"
        className="banner speakers py-12 text-center text-white bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(217,4,41,0.45), rgba(217,4,41,0.45)), url('https://images.unsplash.com/photo-1759139681761-852dd24340df?q=80&w=1170&auto=format&fit=crop')",
        }}
      >
        <div className="wrapper">
          <h2 className="mb-6 text-4xl uppercase font-bold">End-to-End Digital Solutions</h2>
          <a
            href="#"
            className="btn btn-primary btn-lg btn-block"
            data-toggle="modal"
            data-target="#speakers_modal"
          >
            View Full Service List
          </a>
        </div>
      </section>

      {/* Portfolio */}
      <section
        id="portfolio"
        className="banner learn py-12 text-center text-white bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1616469832424-6927678c6b4b?q=80&w=1170&auto=format&fit=crop')",
        }}
      >
        <div className="wrapper">
          <h2 className="mb-6 text-4xl uppercase font-bold">Our Success Stories</h2>
          <a href="#" className="btn btn-danger btn-lg btn-block">
            View Portfolio
          </a>
        </div>
      </section>

      {/* Contact */}
      <section
        id="locations"
        className="banner signup py-12 text-center text-white bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(217,4,41,0.45), rgba(217,4,41,0.45)), url('https://images.unsplash.com/photo-1487537708572-3c850b5e856e?auto=compress&fit=crop&w=1199&h=798')",
        }}
      >
        <div className="wrapper">
          <h2 className="mb-6 text-4xl uppercase font-bold">Ready to Get Started?</h2>
          <a
            href="#"
            className="btn btn-primary btn-lg btn-block"
            data-toggle="modal"
            data-target="#signup_form_modal"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center bg-[#2B2D42] text-gray-200">
        <p className="text-sm">
          <span id="copyright-year">2025</span> Soft Core Studio, All Rights Reserved
        </p>
      </footer>
    </div>
  );
}