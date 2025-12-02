"use client";

import { useState, useEffect } from "react";
import { Send } from "lucide-react";
import styles from "./ContactForm.module.css";

export default function ContactForm() {

  const [csrfToken, setCsrfToken] = useState("");
  const [formLoadTime, setFormLoadTime] = useState(0);
  const [response, setResponse] = useState({ text: "", type: "" });
  const [submitDisabled, setSubmitDisabled] = useState(false);

  // === Bot detection ===
  const botDetection = {
    mouseMovements: 0,
    keystrokes: 0,
    focusEvents: 0,
    minInteractionScore: 5,
  };

  // Generate secure CSRF token
  function generateCSRFToken() {
    const array = new Uint8Array(32);
    crypto.getRandomValues(array);
    return Array.from(array, b => b.toString(16).padStart(2, "0")).join("");
  }

  // Init security system on mount
  useEffect(() => {
    setCsrfToken(generateCSRFToken());
    setFormLoadTime(Date.now());

    // Track mouse movements
    let moveTimeout;
    const mouseHandler = () => {
      clearTimeout(moveTimeout);
      moveTimeout = setTimeout(() => botDetection.mouseMovements++, 120);
    };
    document.addEventListener("mousemove", mouseHandler);

    return () => document.removeEventListener("mousemove", mouseHandler);
  }, []);

  // === Rate-Limiting ===
  const RATE_LIMIT_KEY = "contactFormSubmissions";
  const RATE_LIMIT_WINDOW = 3600000;
  const MAX_SUBMISSIONS = 3;

  function checkRateLimit() {
    const now = Date.now();
    let submissions = JSON.parse(sessionStorage.getItem(RATE_LIMIT_KEY) || "[]");

    submissions = submissions.filter(t => now - t < RATE_LIMIT_WINDOW);

    if (submissions.length >= MAX_SUBMISSIONS) return false;

    submissions.push(now);
    sessionStorage.setItem(RATE_LIMIT_KEY, JSON.stringify(submissions));
    return true;
  }

  // === Show message ===
  const showMessage = (text, type) => {
    setResponse({ text, type });
    setTimeout(() => setResponse({ text: "", type: "" }), 5000);
  };

  // === Form submission handler ===
  const handleSubmit = e => {
    e.preventDefault();

    const formData = new FormData(e.target);

    // Honeypot fields
    const honeypots = ["website", "phone", "company", "address"];
    for (let h of honeypots) {
      if (formData.get(h)) {
        showMessage("Something went wrong. Try again.", "error");
        return;
      }
    }

    // Rate limit
    if (!checkRateLimit()) {
      showMessage(
        `Rate limit exceeded. Try again later.`,
        "warning"
      );
      return;
    }

    // Interaction time
    const interactionTime = Date.now() - formLoadTime;
    if (interactionTime < 3000) {
      showMessage("Please take time to fill the form.", "error");
      return;
    }

    // Bot interaction score
    const interactionScore =
      botDetection.mouseMovements +
      botDetection.keystrokes +
      botDetection.focusEvents * 2;

    if (interactionScore < botDetection.minInteractionScore) {
      showMessage("Please interact with the form normally.", "error");
      return;
    }

    // CSRF validation
    if (formData.get("csrf_token") !== csrfToken) {
      showMessage("Security validation failed.", "error");
      return;
    }

    // Disable button
    setSubmitDisabled(true);

    // Simulate sending
    setTimeout(() => {
      showMessage("Your message was sent successfully!", "success");

      e.target.reset();
      setCsrfToken(generateCSRFToken());
      setSubmitDisabled(false);
    }, 1300);
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.grid}>

          {/* Info Section */}
          <div className={styles.infoBox}>
            <h2 className={styles.title}>Secure Contact Form</h2>
            <p className={styles.subtitle}>Your security is our priority.</p>
          </div>

          {/* Form Section */}
          <div className={styles.formBox}>
            <form className={styles.form} onSubmit={handleSubmit}>

              {/* CSRF Hidden Token */}
              <input type="hidden" name="csrf_token" value={csrfToken} />

              {/* Timestamp */}
              <input type="hidden" name="timestamp" value={formLoadTime} />

              {/* Honeypots */}
              <div className={styles.honeypot1}>
                <input type="text" name="website" tabIndex="-1" />
              </div>

              <div className={styles.honeypot2}>
                <input type="text" name="phone" tabIndex="-1" />
              </div>

              <div className={styles.honeypot3}>
                <input type="text" name="company" tabIndex="-1" />
              </div>

              <div className={styles.honeypot4}>
                <input type="text" name="address" tabIndex="-1" />
              </div>

              {/* Real Inputs */}
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                onFocus={() => botDetection.focusEvents++}
                onKeyDown={() => botDetection.keystrokes++}
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                onFocus={() => botDetection.focusEvents++}
                onKeyDown={() => botDetection.keystrokes++}
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                onFocus={() => botDetection.focusEvents++}
                onKeyDown={() => botDetection.keystrokes++}
              />

              <textarea
                name="message"
                placeholder="Your Message"
                required
                onFocus={() => botDetection.focusEvents++}
                onKeyDown={() => botDetection.keystrokes++}
              ></textarea>

              {/* Submit Button */}
              <button
                type="submit"
                className={styles.submitBtn}
                disabled={submitDisabled}
              >
                <Send className={styles.icon} />
                {submitDisabled ? "Sending..." : "Send Secure Message"}
              </button>

              {/* Response */}
              {response.text && (
                <div className={`${styles.message} ${styles[response.type]}`}>
                  {response.text}
                </div>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
