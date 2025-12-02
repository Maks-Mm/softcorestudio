// app/services/page.jsx
'use client';

import React from 'react';
import AntiSpamContactForm from '../components/AntiSpamContactForm';
import styles from './page.module.css';

export default function Services() {
  const services = [
    { title: "WordPress Websites", desc: "Business sites, blogs, WooCommerce" },
    { title: "React Apps", desc: "Next.js, Vite, Tailwind" },
    { title: "API / Backend", desc: "Node.js, Express, MongoDB" },
    { title: "SEO Optimization", desc: "Improve Google visibility" },
  ];

  return (
    <div className={styles.servicesPage}>
      <section className={styles.servicesHero}>
        <div className={styles.servicesContainer}>
          <div className={styles.servicesHeader}>
            <h1 className={styles.servicesTitle}>
              Our Services
            </h1>
            <p className={styles.servicesSubtitle}>
              Comprehensive web development solutions for businesses of all sizes.
            </p>
          </div>

          <div className={styles.servicesGrid}>
            {services.map((s, i) => (
              <div
                key={i}
                className={styles.serviceCard}
              >
                <div className={styles.serviceIcon}>
                  <span>{i + 1}</span>
                </div>
                <h2 className={styles.serviceTitle}>{s.title}</h2>
                <p className={styles.serviceDesc}>{s.desc}</p>
                <button className={styles.serviceButton}>
                  Learn more →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.contactSection}>
        <div className={styles.contactContainer}>
          <h2>Get a Quote for Our Services</h2>
          <p>Interested in our services? Contact us for a personalized quote.</p>
          <AntiSpamContactForm />
        </div>
      </section>
    </div>
  );
}