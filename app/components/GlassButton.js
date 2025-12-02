// app/components/GlassButton.js
"use client";

import { useState } from "react";

export default function GlassButton({ children }) {
  const [hover, setHover] = useState(false);
  const [pressed, setPressed] = useState(false);

  // 50% SIZE REDUCTION
  const baseStyle = {
    position: "relative",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0.5rem 1.25rem", // 50% of original
    borderRadius: 9999,
    fontWeight: 700,
    fontSize: "0.5625rem", // 50% of 1.125rem
    cursor: "pointer",
    overflow: "hidden",
    userSelect: "none",
    transition: "transform 160ms ease, box-shadow 160ms ease",
    transform: pressed ? "scale(0.95)" : hover ? "scale(1.06)" : "scale(1)",
    background: "rgba(0,0,0,0.06)",
    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)",
    border: "1px solid rgba(255,255,255,0.08)",
    color: "white",
  };

  const shimmerContainerStyle = {
    position: "absolute",
    inset: 0,
    display: "flex",
    height: "100%",
    width: "100%",
    justifyContent: "center",
    pointerEvents: "none",
    zIndex: 0,
  };

  const shimmerBarStyle = {
    height: "100%",
    width: "28px", // 50% of original 56px
    background: "rgba(255,255,255,0.18)",
    transform: hover
      ? "skew(-13deg) translateX(120%)"
      : "skew(-13deg) translateX(-120%)",
    transition: "transform 900ms cubic-bezier(.2,.9,.2,1)",
    willChange: "transform",
  };

  const contentStyle = {
    position: "relative",
    zIndex: 2,
    pointerEvents: "none",
  };

  const glowStyle = {
    position: "absolute",
    inset: 0,
    borderRadius: 9999,
    zIndex: -1,
    transform: "translateY(5px)", // 50% of 10px
    filter: "blur(4px)", // 50% of 8px
    background: "rgba(0,0,0,0.5)",
    opacity: 0.25,
    pointerEvents: "none",
  };

  return (
    <button
      type="button"
      style={baseStyle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        setHover(false);
        setPressed(false);
      }}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
    >
      <span style={contentStyle}>{children}</span>

      <div style={shimmerContainerStyle}>
        <div style={shimmerBarStyle} />
      </div>

      <div style={glowStyle} />
    </button>
  );
}
