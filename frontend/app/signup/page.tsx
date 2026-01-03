// app/signup/page.tsx

"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { FcGoogle, FcPhone, FcPhoneAndroid, FcLock } from "react-icons/fc";
import { AiOutlineMail, AiOutlineGithub, AiOutlineUser } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/AuthForm.css";

async function signUpWithEmail(email: string, password: string, username: string) {
  try {
    const res = await fetch(`http://localhost:5000/api/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, username }),
    });

    const text = await res.text();
    let data;
    try {
      data = JSON.parse(text);
    } catch {
      console.error("Invalid JSON response:", text);
      return { user: null, error: "Invalid response from server" };
    }

    if (!res.ok) {
      return { user: null, error: data.error || "Failed to register" };
    }

    return { user: data, error: null };
  } catch (err: any) {
    return { user: null, error: err.message || "Network error" };
  }
}


// Placeholder functions for Google/GitHub (still not implemented)
async function signInWithGoogle() {
  return { user: { email: "google@example.com" }, error: null };
}
async function signInWithGitHub() {
  return { user: { email: "github@example.com" }, error: null };
}

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [showPhoneInput, setShowPhoneInput] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [authMethod, setAuthMethod] = useState<"email" | "phone">("email");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const router = useRouter();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 100 });
    AOS.refresh();
  }, [showPhoneInput]);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      // Call the real API and include username
      const { user, error } = await signUpWithEmail(email, password, username);
      if (error) setError(error);
      else if (user) {
        setSuccess("Registration successful! Redirecting...");
        setTimeout(() => router.push("/signin"), 1500);
      }
    } catch (err: any) {
      setError(err?.message || "Unexpected error");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setError(""); setSuccess(""); setLoading(true);
    try {
      const { user, error } = await signInWithGoogle();
      if (error) setError(error || "Google sign-in failed");
      else if (user) {
        setSuccess("Google registration successful! Redirecting...");
        setTimeout(() => router.push("/dashboard"), 1500);
      }
    } finally { setLoading(false); }
  };

  const handleGitHubSignIn = async () => {
    setError(""); setSuccess(""); setLoading(true);
    try {
      const { user, error } = await signInWithGitHub();
      if (error) setError(error || "GitHub sign-in failed");
      else if (user) {
        setSuccess("GitHub registration successful! Redirecting...");
        setTimeout(() => router.push("/dashboard"), 1500);
      }
    } finally { setLoading(false); }
  };

  const togglePhoneInput = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setShowPhoneInput(!showPhoneInput);
      setAuthMethod(!showPhoneInput ? "phone" : "email");
      setIsTransitioning(false);
      setTimeout(() => AOS.refresh(), 50);
    }, 300);
  };

  const goToSignIn = () => {
    setIsTransitioning(true);
    setTimeout(() => router.push("/signin"), 300);
  };

  return (
    <div className="auth-container" data-aos="fade-up">
      <div className="auth-form-wrapper active">
        <div
          className={`form-box register ${isTransitioning ? "form-transition-out" : "form-transition-in"}`}
          data-aos="zoom-in" data-aos-delay={200}
        >
          <form onSubmit={handleSignUp}>
            <h1 data-aos="fade-down" data-aos-delay={300}>Registration</h1>

            <div className="input-box" data-aos="fade-right" data-aos-delay={400}>
              <input
                type="text"
                placeholder="Username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <span className="icon"><AiOutlineUser /></span>
            </div>

            {!showPhoneInput ? (
              <>
                <div className="input-box" data-aos="fade-right" data-aos-delay={600}>
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <span className="icon"><AiOutlineMail /></span>
                </div>
                <div className="input-box" data-aos="fade-left" data-aos-delay={700}>
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <span className="icon"><FcLock /></span>
                </div>
              </>
            ) : (
              <div className="input-box" data-aos="fade-up" data-aos-delay={500}>
                <input
                  type="tel"
                  placeholder="Phone number (+1234567890)"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <span className="icon"><FcPhoneAndroid /></span>
              </div>
            )}

            <div className="forgot-link" data-aos="fade-up" data-aos-delay={800}>
              <a href="#" onClick={togglePhoneInput}>
                {showPhoneInput ? "Use Email Instead" : "Use Phone Instead"}
              </a>
            </div>

            {error && <div className="error-message" data-aos="fade-up">{error}</div>}
            {success && <div className="success-message" data-aos="fade-up">{success}</div>}

            <button type="submit" className="auth-btn" disabled={loading} data-aos="fade-up" data-aos-delay={900}>
              {loading ? <> <span className="loading-spinner"></span> Registering... </> : "Register"}
            </button>

            <div className="social-providers" data-aos="fade-up" data-aos-delay={1000}>
              <div className="providers-title">Register with</div>
              <div className="social-buttons">
                <button type="button" className="social-btn google" onClick={handleGoogleSignIn} disabled={loading} title="Google" data-aos="flip-left" data-aos-delay={1100}><FcGoogle size={24} /></button>
                <button type="button" className="social-btn github" onClick={handleGitHubSignIn} disabled={loading} title="GitHub" data-aos="flip-left" data-aos-delay={1200}><AiOutlineGithub size={24} /></button>
                <button type="button" className="social-btn phone" onClick={togglePhoneInput} disabled={loading} title="Phone" data-aos="flip-left" data-aos-delay={1300}><FcPhone size={24} /></button>
                <button type="button" className="social-btn email" onClick={togglePhoneInput} disabled={loading} title="Email" data-aos="flip-left" data-aos-delay={1400}><AiOutlineMail size={24} /></button>
              </div>
            </div>
          </form>
        </div>

        <div className="toggle-box">
          <div className="toggle-panel toggle-right" data-aos="fade-left" data-aos-delay={1500}>
            <h1 data-aos="fade-down" data-aos-delay={1600}>Welcome Back!</h1>
            <p data-aos="fade-up" data-aos-delay={1700}>Already have an account? Sign in to continue your journey!</p>
            <button className="toggle-btn" onClick={goToSignIn} data-aos="zoom-in" data-aos-delay={1800}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}
