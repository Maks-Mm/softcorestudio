//app/page.tsx

"use client";

import { useState, useEffect } from "react";
import Banner from "./components/Banner";
import SignupModal from "./components/SignupModal";
import Hero from "./components/Hero";
import AOS from "aos";
import { useToast } from "./components/ToastProvider";
export default function Home() {
  const [open, setOpen] = useState(false);
  const { showSuccess, showError, showInfo } = useToast();

  useEffect(() => {
    AOS.init({
      duration: 400,
      once: true,
      offset: 100,
      easing: "ease-out-cubic",
    });

    showInfo("Welcome to Soft Core Studio! 🚀", 3000);
  }, []);

  const handleGetQuote = () => {
    setOpen(true);
    showInfo("Opening quote form...", 2000);
  };

  return (
    <main className="min-h-screen">

      <SignupModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onSuccess={() => showSuccess("Thank you! We'll contact you soon.", 5000)}
        onError={() => showError("Please fill in all required fields.", 3000)}
      />

      <Hero onOpen={handleGetQuote} />
      {/* Hero */}




      {/* Banner + Services + Contact + Footer */}
      <Banner onOpen={handleGetQuote} />
    </main>
  );
}
