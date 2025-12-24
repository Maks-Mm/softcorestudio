// app/signup/page.tsx

"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { 
  signUpWithEmail, 
  signInWithGoogle, 
  signInWithGitHub,
  initiatePhoneAuth 
} from "@/app/lib/auth";
import { 
  FcGoogle,
  FcPhone,
  FcPhoneAndroid,
  FcLock,
  FcBusinessman,
  FcApproval 
} from "react-icons/fc";
import { AiOutlineMail, AiOutlineGithub, AiOutlineUser } from "react-icons/ai";
import "../styles/AuthForm.css";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [showPhoneInput, setShowPhoneInput] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [authMethod, setAuthMethod] = useState<"email" | "phone" | "">("");
  const router = useRouter();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);
    
    const { user, error } = await signUpWithEmail(email, password);
    
    if (error) {
      setError(error.message);
      setLoading(false);
    } else if (user) {
      setSuccess("Registration successful! Redirecting to dashboard...");
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
      setSuccess("Google registration successful! Redirecting...");
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
      setSuccess("GitHub registration successful! Redirecting...");
      setTimeout(() => router.push("/dashboard"), 1500);
    }
  };

  const handlePhoneAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);
    
    const { confirmationResult, error } = await initiatePhoneAuth(phone);
    
    if (error) {
      setError(error.message);
      setLoading(false);
    } else if (confirmationResult) {
      setSuccess("Verification code sent to your phone!");
    }
  };

  const handleToggleToSignIn = () => {
    router.push("/signin");
  };

  return (
    <div className="auth-container">
      <div className="auth-form-wrapper active">
        {/* Registration Form */}
        <div className="form-box register">
          <form className="auth-form" onSubmit={authMethod === "phone" ? handlePhoneAuth : handleSignUp}>
            <h1>Registration</h1>
            
            <div className="input-box">
              <input
                type="text"
                placeholder="Username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <span className="icon">
                <AiOutlineUser />
              </span>
            </div>
            
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
                  Registering...
                </>
              ) : (
                'Register'
              )}
            </button>
            
            <div className="social-providers">
              <div className="providers-title">Register with</div>
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
          <div className="toggle-panel toggle-right">
            <h1>Welcome Back!</h1>
            <p>Already have an account? Sign in to continue your journey!</p>
            <button 
              className="toggle-btn" 
              onClick={handleToggleToSignIn}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}