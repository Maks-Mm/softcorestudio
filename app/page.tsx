// app/page.tsx
"use client"
import { useState, useEffect } from "react";
import Banner from "./components/Banner";
import SignupModal from "./components/SignupModal";
import Hero from "./components/Hero";
import Portfolio from "./sections/Portfolio";
import AOS from "aos";

export default function Home() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 400,
      once: true,
      offset: 100,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <main className="min-h-screen">
      <SignupModal isOpen={open} onClose={() => setOpen(false)} />
      <Portfolio 
        onOpen={() => { 
          console.log("Portfolio open clicked");
          setOpen(true);
        }} 
      />
      <Hero 
        onOpen={() => { 
          console.log("Hero open clicked"); 
          setOpen(true); 
        }} 
      />
      <Banner 
        onOpen={() => { 
          console.log("Banner open clicked"); 
          setOpen(true); 
        }} 
      />
    </main>
  );
}