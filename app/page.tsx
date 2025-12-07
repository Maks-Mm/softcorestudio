"use client";

import { useState } from "react";
import Banner from "./components/Banner";
import Hero from "./components/Hero";
import SignupModal from "./components/SignupModal";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";


export default function Home() {
  const [open, setOpen] = useState(true); // example: modal open on load

  return (
    <main className="min-h-screen">
     <Hero onOpen={() => setOpen(true)} />
      <Banner onOpen={() => setOpen(true)} />

      <SignupModal isOpen={open} onClose={() => setOpen(false)} />


      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <h3 className="text-3xl font-bold mb-4">Softcore Studio</h3>
              <p className="text-gray-400">Full-stack web development studio</p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 mb-4">
                © {new Date().getFullYear()} Softcore Studio. All rights reserved.
              </p>
              <div className="flex gap-4 justify-center md:justify-end">
                <FaWhatsapp className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                  WhatsApp
                </FaWhatsapp>
                <FaTelegram className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
                  Telegram
                </FaTelegram>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
