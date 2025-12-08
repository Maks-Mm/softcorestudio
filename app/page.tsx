//app/page.tsx
"use client"
import { useState, useEffect } from "react";
import Banner from "./components/Banner";
import SignupModal from "./components/SignupModal";
import Hero from "./components/Hero";
import Portfolio from "./sections/Portfolio";
import AOS from "aos";
import { useToast } from "./components/ToastProvider";

export default function Home() {
  const [open, setOpen] = useState(false);
  const { showSuccess, showError, showInfo, showWarning } = useToast();

  useEffect(() => {
    AOS.init({
      duration: 400,
      once: true,
      offset: 100,
      easing: "ease-out-cubic",
    });
    
    // Show welcome message when page loads
    showInfo("Welcome to Soft Core Studio! 🚀", 3000);
  }, []);


  const handleGetQuote = () => {
    console.log("Get Quote clicked");
    setOpen(true);
    showInfo("Opening quote form...", 2000);
  };

  const handleModalSuccess = () => {
    showSuccess("Thank you! We'll contact you soon.", 5000);
  };

  const handleModalError = () => {
    showError("Please fill in all required fields.", 3000);
  };

  return (
    <main className="min-h-screen">
      <SignupModal 
        isOpen={open} 
        onClose={() => setOpen(false)}
        onSuccess={handleModalSuccess} // Pass this prop
        onError={handleModalError}     // Pass this prop
      />
      <Portfolio 
        onOpen={() => { 
          console.log("Portfolio open clicked");
          showInfo("Viewing portfolio details...", 2000);
        }} 
      />
      <Hero 
        onOpen={handleGetQuote}
      />
      <Banner 
        onOpen={handleGetQuote}
      />
    </main>
  );
}