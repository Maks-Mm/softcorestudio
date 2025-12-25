//app/signin/page.tsx

"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  signInWithEmail,
  signInWithGoogle,
  signInWithGitHub,
} from "@/app/lib/auth";

import { FcGoogle, FcPhone, FcPhoneAndroid, FcLock } from "react-icons/fc";
import { AiOutlineMail, AiOutlineGithub } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/AuthForm.css";

type AuthError = {
  message: string;
} | null;

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [showPhoneInput, setShowPhoneInput] = useState(false);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const router = useRouter();

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
    AOS.refresh();
  }, [showPhoneInput]);

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const { user, error }: { user: any; error: AuthError } =
        await signInWithEmail(email, password);

      if (error) {
        setError(error?.message || "Login failed");
      } else if (user) {
        setSuccess("Login successful! Redirecting...");
        setTimeout(() => router.push("/dashboard"), 1500);
      }
    } catch (err: any) {
      setError(err?.message || "Unexpected error");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const { user, error }: { user: any; error: AuthError } =
        await signInWithGoogle();

      if (error) {
        setError(error?.message || "Google login failed");
      } else if (user) {
        setSuccess("Google login successful! Redirecting...");
        setTimeout(() => router.push("/dashboard"), 1500);
      }
    } catch (err: any) {
      setError(err?.message || "Unexpected error");
    } finally {
      setLoading(false);
    }
  };

  const handleGitHubSignIn = async () => {
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const { user, error }: { user: any; error: AuthError } =
        await signInWithGitHub();

      if (error) {
        setError(error?.message || "GitHub login failed");
      } else if (user) {
        setSuccess("GitHub login successful! Redirecting...");
        setTimeout(() => router.push("/dashboard"), 1500);
      }
    } catch (err: any) {
      setError(err?.message || "Unexpected error");
    } finally {
      setLoading(false);
    }
  };

  const handleToggleToSignUp = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      router.push("/signup");
    }, 300);
  };

  const handleTogglePhoneInput = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setShowPhoneInput(!showPhoneInput);
      setIsTransitioning(false);
      setTimeout(() => AOS.refresh(), 50);
    }, 300);
  };

  return (
    <div className="auth-container" data-aos="fade-up">
      <div className="auth-form-wrapper">
        <div
          className={`form-box login ${
            isTransitioning ? "form-transition-out" : "form-transition-in"
          }`}
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <form
            className="auth-form"
            onSubmit={showPhoneInput ? (e) => e.preventDefault() : handleEmailSignIn}
          >
            <h1 data-aos="fade-down" data-aos-delay="300">
              Login
            </h1>

            {!showPhoneInput ? (
              <div data-aos="fade-up" data-aos-delay="400">
                <div className="input-box" data-aos="fade-right" data-aos-delay="500">
                  <input
                    type="email"
                    placeholder="Email"
                    required={!showPhoneInput}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <span className="icon">
                    <AiOutlineMail />
                  </span>
                </div>
                <div className="input-box" data-aos="fade-left" data-aos-delay="600">
                  <input
                    type="password"
                    placeholder="Password"
                    required={!showPhoneInput}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <span className="icon">
                    <FcLock />
                  </span>
                </div>
              </div>
            ) : (
              <div className="input-box" data-aos="fade-up" data-aos-delay="400">
                <input
                  type="tel"
                  placeholder="Phone number (Coming soon)"
                  disabled
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <span className="icon">
                  <FcPhoneAndroid />
                </span>
              </div>
            )}

            <div className="forgot-link" data-aos="fade-up" data-aos-delay="700">
              <a href="#" onClick={handleTogglePhoneInput}>
                {showPhoneInput ? "Use Email Instead" : "Use Phone Instead"}
              </a>
            </div>

            {error && (
              <div className="error-message" data-aos="fade-up">
                {error}
              </div>
            )}
            {success && (
              <div className="success-message" data-aos="fade-up">
                {success}
              </div>
            )}

            <button
              type="submit"
              className="auth-btn"
              disabled={loading || showPhoneInput}
              data-aos="fade-up"
              data-aos-delay="800"
            >
              {loading ? (
                <>
                  <span className="loading-spinner"></span>
                  {showPhoneInput ? "Checking..." : "Logging in..."}
                </>
              ) : showPhoneInput ? (
                "Coming Soon"
              ) : (
                "Login"
              )}
            </button>

            <div className="social-providers" data-aos="fade-up" data-aos-delay="900">
              <div className="providers-title">Login with</div>
              <div className="social-buttons">
                <button
                  type="button"
                  className="social-btn google"
                  onClick={handleGoogleSignIn}
                  disabled={loading}
                  title="Google"
                  data-aos="flip-left"
                  data-aos-delay="1000"
                >
                  <FcGoogle size={24} />
                </button>
                <button
                  type="button"
                  className="social-btn github"
                  onClick={handleGitHubSignIn}
                  disabled={loading}
                  title="GitHub"
                  data-aos="flip-left"
                  data-aos-delay="1100"
                >
                  <AiOutlineGithub size={24} />
                </button>
                <button
                  type="button"
                  className="social-btn phone"
                  onClick={() => {
                    setShowPhoneInput(true);
                    AOS.refresh();
                  }}
                  disabled={loading}
                  title="Phone (Coming Soon)"
                  data-aos="flip-left"
                  data-aos-delay="1200"
                >
                  <FcPhone size={24} />
                </button>
                <button
                  type="button"
                  className="social-btn email"
                  onClick={() => {
                    setShowPhoneInput(false);
                    AOS.refresh();
                  }}
                  disabled={loading}
                  title="Email"
                  data-aos="flip-left"
                  data-aos-delay="1300"
                >
                  <AiOutlineMail size={24} />
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className="toggle-box">
          <div
            className="toggle-panel toggle-left"
            data-aos="fade-right"
            data-aos-delay="1400"
          >
            <h1 data-aos="fade-down" data-aos-delay="1500">Hello, Welcome!</h1>
            <p data-aos="fade-up" data-aos-delay="1600">
              Don&apos;t have an account? Join our community today!
            </p>
            <button
              className="toggle-btn"
              onClick={handleToggleToSignUp}
              data-aos="zoom-in"
              data-aos-delay="1700"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
