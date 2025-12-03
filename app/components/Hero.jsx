//app/components/Hero.jsx

"use client";

import { ArrowRight, Code, Globe, Rocket } from 'lucide-react';
import GlassButton from './GlassButton';
import InfoBadge from './InfoBadge';
import { motion } from "framer-motion";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={`relative overflow-hidden py-20 md:py-28 px-4 ${styles.heroSection}`}>
      
      {/* CodePen parallax background */}
      <div className={styles.codepenBackground} />

      {/* Your animated blobs */}
      <div className={styles.blueBlob} />
      <div className={styles.purpleBlob} />

      <div className="relative max-w-7xl mx-auto z-10">
        <div className="text-center">

          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
            <Rocket className="w-4 h-4" />
            <span>Full-Stack Development Studio</span>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto leading-relaxed"
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
