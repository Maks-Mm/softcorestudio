// app/components/Button.tsx (or inside Services.tsx if you prefer)
import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
}

const buttonStyles = {
  primary: "bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg px-5 py-2 text-sm hover:scale-105 transition-transform",
  secondary: "bg-gray-100 text-gray-800 font-medium rounded-lg px-5 py-2 text-sm hover:bg-gray-200 transition-colors",
};

export const Button: React.FC<ButtonProps> = ({ text, onClick, variant = "primary", className = "" }) => {
  return (
    <button onClick={onClick} className={`${buttonStyles[variant]} ${className}`}>
      {text}
    </button>
  );
};
