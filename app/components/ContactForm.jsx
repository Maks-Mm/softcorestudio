//app/component/ConstForm.jsx
"use client";

import { useState, useEffect, useRef } from 'react';
import { Send } from 'lucide-react';
import styles from '../components/ContactForm.module.css';

export default function ContactForm() {

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.grid}>

          {/* Contact Info Section */}
          <div className={styles.infoBox}>
            <h2 className={styles.title}>Secure Contact Form</h2>
            <p className={styles.subtitle}>Your security is our priority.</p>
          </div>

          {/* Form Section (inputs removed) */}
          <div className={styles.formBox}>
            <form className={styles.form}>
              {/* You removed inputs – now empty form structure */}

              <button type="submit" className={styles.submitBtn}>
                <Send className={styles.icon} />
                Send Secure Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
