// app/signin/page.tsx
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { 
  signInWithEmail, 
  signInWithGoogle, 
  signInWithGitHub,
  initiatePhoneAuth 
} from "@/app/lib/auth";
import { 
  FcGoogle,
  FcPhone,
  FcPhoneAndroid,
  FcLock,
  FcKey,
  FcBusinessman,
  FcGraduationCap 
} from "react-icons/fc";
import { AiOutlineMail, AiOutlineGithub } from "react-icons/ai";
import { BsShieldLock } from "react-icons/bs";
import "../styles/AuthForm.css";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [showPhoneInput, setShowPhoneInput] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [authMethod, setAuthMethod] = useState<"email" | "phone" | "">("");
  const router = useRouter();

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);
    
    const { user, error } = await signInWithEmail(email, password);
    
    if (error) {
      setError(error.message);
      setLoading(false);
    } else if (user) {
      setSuccess("Login successful! Redirecting...");
      setTimeout(() => router.push("/dashboard"), 1500);
    }
  };

  const handleGoogleSignIn = async () => {
    setError("");
    setSuccess("");
    setLoading(true);
    const { user, error } = await signInWithGoogle();
    
    if (error) {
      setError(error.message);
      setLoading(false);
    } else if (user) {
      setSuccess("Google login successful! Redirecting...");
      setTimeout(() => router.push("/dashboard"), 1500);
    }
  };

  const handleGitHubSignIn = async () => {
    setError("");
    setSuccess("");
    setLoading(true);
    const { user, error } = await signInWithGitHub();
    
    if (error) {
      setError(error.message);
      setLoading(false);
    } else if (user) {
      setSuccess("GitHub login successful! Redirecting...");
      setTimeout(() => router.push("/dashboard"), 1500);
    }
  };

  const handlePhoneAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);
    
    // Note: Phone auth requires additional setup (recaptcha, verification code)
    const { confirmationResult, error } = await initiatePhoneAuth(phone);
    
    if (error) {
      setError(error.message);
      setLoading(false);
    } else if (confirmationResult) {
      setSuccess("Verification code sent to your phone!");
      // You would need to add verification code input here
    }
  };

  const handleToggleToSignUp = () => {
    router.push("/signup");
  };

  return (
    <div className="auth-container">
      <div className="auth-form-wrapper">
        {/* Login Form */}
        <div className="form-box login">
          <form className="auth-form" onSubmit={authMethod === "phone" ? handlePhoneAuth : handleEmailSignIn}>
            <h1>Login</h1>
            
            {!showPhoneInput ? (
              <>
                <div className="input-box">
                  <input
                    type="email"
                    placeholder="Email"
                    required={authMethod === "email"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <span className="icon">
                    <AiOutlineMail />
                  </span>
                </div>
                <div className="input-box">
                  <input
                    type="password"
                    placeholder="Password"
                    required={authMethod === "email"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <span className="icon">
                    <FcLock />
                  </span>
                </div>
              </>
            ) : (
              <div className="input-box">
                <input
                  type="tel"
                  placeholder="Phone number (+1234567890)"
                  required={authMethod === "phone"}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <span className="icon">
                  <FcPhoneAndroid />
                </span>
              </div>
            )}
            
            <div className="forgot-link">
              <a href="#" onClick={() => setShowPhoneInput(!showPhoneInput)}>
                {showPhoneInput ? "Use Email Instead" : "Use Phone Instead"}
              </a>
            </div>
            
            {error && <div className="error-message">{error}</div>}
            {success && <div className="success-message">{success}</div>}
            
            <button 
              type="submit" 
              className="auth-btn"
              disabled={loading}
              onClick={() => setAuthMethod(showPhoneInput ? "phone" : "email")}
            >
              {loading ? (
                <>
                  <span className="loading-spinner"></span>
                  Logging in...
                </>
              ) : (
                'Login'
              )}
            </button>
            
            <div className="social-providers">
              <div className="providers-title">Login with</div>
              <div className="social-buttons">
                <button 
                  type="button" 
                  className="social-btn google"
                  onClick={handleGoogleSignIn}
                  disabled={loading}
                  title="Google"
                >
                  <FcGoogle size={24} />
                </button>
                <button 
                  type="button" 
                  className="social-btn github"
                  onClick={handleGitHubSignIn}
                  disabled={loading}
                  title="GitHub"
                >
                  <AiOutlineGithub size={24} />
                </button>
                <button 
                  type="button" 
                  className="social-btn phone"
                  onClick={() => setShowPhoneInput(true)}
                  disabled={loading}
                  title="Phone"
                >
                  <FcPhone size={24} />
                </button>
                <button 
                  type="button" 
                  className="social-btn email"
                  onClick={() => setShowPhoneInput(false)}
                  disabled={loading}
                  title="Email"
                >
                  <AiOutlineMail size={24} />
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Toggle Panel */}
        <div className="toggle-box">
          <div className="toggle-panel toggle-left">
            <h1>Hello, Welcome!</h1>
            <p>Don&apos;t have an account? Join our community today!</p>
            <button 
              className="toggle-btn" 
              onClick={handleToggleToSignUp}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}