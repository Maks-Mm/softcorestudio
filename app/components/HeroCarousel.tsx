//app/components/HeroCarousel.tsx
'use client';

import { useEffect, useState, useRef } from "react";
import "../styles/HeroCarousel.css";

const images = [
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1534008897995-27a23e859048?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1600&q=80",
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoSlide();
    return stopAutoSlide;
  }, []);

  return (
    <div
      className="carousel-wrapper"
      onMouseEnter={stopAutoSlide}
      onMouseLeave={startAutoSlide}
    >
      {images.map((img, index) => (
        <div
          key={index}
          className={`carousel-slide ${index === current ? "active" : ""}`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      <div className="carousel-overlay" />

      {/* Navigation */}
      <div className="carousel-nav">
        <button
          className="carousel-nav-btn"
          onClick={() =>
            setCurrent((current - 1 + images.length) % images.length)
          }
        >
          ‹
        </button>
        <button
          className="carousel-nav-btn"
          onClick={() => setCurrent((current + 1) % images.length)}
        >
          ›
        </button>
      </div>

      {/* Dots */}
      <div className="carousel-controls">
        {images.map((_, i) => (
          <span
            key={i}
            className={`carousel-dot ${i === current ? "active" : ""}`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </div>
  );
}
