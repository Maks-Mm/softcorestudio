// src/components/SignupModal.tsx
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
    // You can send formData to backend here
    onClose(); // Close modal after submit
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 relative">
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4">Start Your Project Today!</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">First Name:</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700">Last Name:</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
            <small className="text-gray-500">Your email will be used as a primary contact.</small>
          </div>

          <div>
            <label className="block text-gray-700">Your Role/Company Type:</label>
            <select
              value={profession}
              onChange={(e) => setProfession(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            >
              <option value="">---</option>
              <option value="Tech Startup">Tech Startup</option>
              <option value="Enterprise Client">Enterprise Client</option>
              <option value="Small/Medium Business">Small/Medium Business</option>
              <option value="Non-Profit/NGO">Non-Profit/NGO</option>
            </select>
          </div>

          <div className="flex flex-col space-y-2">
            <label className="block text-gray-700">Project Budget:</label>
            <label className="inline-flex items-center space-x-2">
              <input
                type="radio"
                name="budget"
                value="small"
                checked={budget === "small"}
                onChange={() => setBudget("small")}
              />
              <span>Small Project Budget (&lt; $10k)</span>
            </label>
            <label className="inline-flex items-center space-x-2">
              <input
                type="radio"
                name="budget"
                value="medium"
                checked={budget === "medium"}
                onChange={() => setBudget("medium")}
              />
              <span>Medium/Large Project Budget (&gt; $10k)</span>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded font-semibold transition"
          >
            Submit for Quote
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupModal;
