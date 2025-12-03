"use client";

import { ArrowRight, Code, Globe, Rocket } from 'lucide-react';
import GlassButton from './GlassButton';
import { motion } from "framer-motion";
import InfoBadge from './InfoBadge';

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 px-4">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000" />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
            <Rocket className="w-4 h-4" />
            <span>Full-Stack Development Studio</span>
          </div>

          {/* LOGO + NAME LINE
            <div className="flex items-center justify-center gap-4 mb-6">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Softcore Studio
            </h1>
          </div>
          */}




          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            We build modern websites, custom web applications & digital solutions
            that help businesses grow online.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <InfoBadge icon={Globe} text="English • German • Polish • Russian" />
            <InfoBadge icon={Code} text="React • WordPress • Node.js • MongoDB" />
          </div>



          <div className="flex flex-wrap justify-center gap-4">
            <GlassButton>Get Free Quote</GlassButton>
            <GlassButton>View Portfolio</GlassButton>
            <GlassButton>Book a Call</GlassButton>
          </div>
        </div>
      </div>
    </section>
  );
}