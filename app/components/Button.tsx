// app/components/Button.tsx
import React from "react";
import "../styles/Button.css";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "white";
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  variant = "primary",
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`btn ${variant ? `btn-${variant}` : ""} ${className}`}
    >
      {text}
    </button>
  );
};
