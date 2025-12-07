// app/page.tsx
"use client"
import { useState } from "react";
import Banner from "./components/Banner";
import SignupModal from "./components/SignupModal";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <main className="min-h-screen">
      <Banner onOpen={() => setOpen(true)} />
      <SignupModal isOpen={open} onClose={() => setOpen(false)} />
    </main>
  );
}