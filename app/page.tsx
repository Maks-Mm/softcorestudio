// app/page.tsx
"use client"
import { useState } from "react";
import Banner from "./components/Banner";
import SignupModal from "./components/SignupModal";
import Hero from "./components/Hero";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <main className="min-h-screen">
      <SignupModal isOpen={open} onClose={() => setOpen(false)} />
      <Hero onOpen={() => { console.log("Hero open clicked"); setOpen(true) }} />
      <Banner onOpen={() => { console.log("Banner open clicked"); setOpen(true) }} />

    </main>
  );
}