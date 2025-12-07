// src/components/SignupModal.tsx
"use client"
import React, { useState } from "react";

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SignupModal: React.FC<SignupModalProps> = ({ isOpen, onClose }) => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [profession, setProfession] = useState("");
  const [budget, setBudget] = useState<"small" | "medium" | "large">("medium");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = {
      firstName,
      lastName,
      email,
      profession,
      budget,
    };
    console.log("Form Submitted:", formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 relative">
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          &times;
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold mb-2">
          Let’s Build Something Great Together 🚀
        </h2>
        <p className="text-gray-600 mb-6">
          Tell us a few details so we can prepare a personalized estimate for your project.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* First Name */}
          <div>
            <label className="block text-gray-700">First Name</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="John"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-gray-700">Last Name</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Doe"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
            <small className="text-gray-500">
              We’ll get back to you within 24 hours.
            </small>
          </div>

          {/* Profession */}
          <div>
            <label className="block text-gray-700">What best describes you?</label>
            <select
              value={profession}
              onChange={(e) => setProfession(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            >
              <option value="">Select...</option>
              <option value="Startup Founder">Startup Founder</option>
              <option value="E-commerce Business">E-commerce Business</option>
              <option value="Agency / Freelancer">Agency / Freelancer</option>
              <option value="Enterprise Company">Enterprise Company</option>
              <option value="Non-Profit / NGO">Non-Profit / NGO</option>
            </select>
          </div>

          {/* Budget */}
          <div className="flex flex-col space-y-2">
            <label className="block text-gray-700">Estimated Budget</label>

            <label className="inline-flex items-center space-x-2">
              <input
                type="radio"
                name="budget"
                value="small"
                checked={budget === "small"}
                onChange={() => setBudget("small")}
              />
              <span>Starter Budget (&lt; $5k)</span>
            </label>

            <label className="inline-flex items-center space-x-2">
              <input
                type="radio"
                name="budget"
                value="medium"
                checked={budget === "medium"}
                onChange={() => setBudget("medium")}
              />
              <span>Growth Budget ($5k – $15k)</span>
            </label>

            <label className="inline-flex items-center space-x-2">
              <input
                type="radio"
                name="budget"
                value="large"
                checked={budget === "large"}
                onChange={() => setBudget("large")}
              />
              <span>Enterprise Budget ($15k+)</span>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded font-semibold transition"
          >
            Get My Project Estimate
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupModal;
