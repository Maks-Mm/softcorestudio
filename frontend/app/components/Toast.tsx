"use client";

import React, { useEffect, useState } from "react";
import { CheckCircle, XCircle, AlertCircle, X, Info } from "lucide-react";

export type ToastType = "success" | "error" | "warning" | "info";

export interface ToastProps {
  id: string;
  message: string;
  type?: ToastType;
  duration?: number;
  onClose?: (id: string) => void;
}

const Toast: React.FC<ToastProps> = ({
  id,
  message,
  type = "info",
  duration = 5000,
  onClose,
}) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        handleClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [duration]);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => {
      onClose?.(id);
    }, 300);
  };

  const icons = {
    success: <CheckCircle className="w-5 h-5" />,
    error: <XCircle className="w-5 h-5" />,
    warning: <AlertCircle className="w-5 h-5" />,
    info: <Info className="w-5 h-5" />,
  };

  const styles = {
    success: "bg-green-50 border-green-200 text-green-800",
    error: "bg-red-50 border-red-200 text-red-800",
    warning: "bg-yellow-50 border-yellow-200 text-yellow-800",
    info: "bg-blue-50 border-blue-200 text-blue-800",
  };

  return (
    <div
      className={`flex items-center gap-3 p-4 rounded-lg border shadow-lg max-w-sm w-full transition-all duration-300 ${
        styles[type]
      } ${isExiting ? "opacity-0 translate-x-full" : "opacity-100 translate-x-0"}`}
    >
      <div className={`flex-shrink-0 ${type === "success" ? "text-green-600" : type === "error" ? "text-red-600" : type === "warning" ? "text-yellow-600" : "text-blue-600"}`}>
        {icons[type]}
      </div>
      <p className="flex-1 text-sm font-medium">{message}</p>
      <button
        onClick={handleClose}
        className={`flex-shrink-0 p-1 rounded-full hover:bg-opacity-20 hover:bg-black transition-colors ${
          type === "success" ? "text-green-600" : 
          type === "error" ? "text-red-600" : 
          type === "warning" ? "text-yellow-600" : 
          "text-blue-600"
        }`}
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

export default Toast;