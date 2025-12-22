
// app/sections/Services.tsx
"use client"

import { useState } from "react";
import "../styles/Services.css";
import { FaReact, FaWordpress, FaDev } from "react-icons/fa";
import { SiWoocommerce } from "react-icons/si";
import { TbSeo } from "react-icons/tb";
import { Button } from "../components/Button";
import { CiServer } from "react-icons/ci";


type Service = {
  id: number;
  title: string;
  description: string;
  price: string;
  tech: string[];
  features: string[];
  cta: string;
  icon: React.ReactNode;
  image: string;
  colorClass: string;
};

const services: Service[] = [
  {
    id: 1,
    title: "WordPress Development",
    description:
      "Professional WordPress sites with Elementor, WooCommerce & custom themes.",
    price: "€400+",
    tech: ["WordPress", "Elementor", "WooCommerce"],
    features: ["Custom Themes", "E-commerce", "Page Builder", "Optimization"],
    cta: "Start Project",
    icon: <FaWordpress />,
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600",
    colorClass: "wordpress",
  },
  {
    id: 2,
    title: "React Applications",
    description:
      "Modern React & Next.js apps with TypeScript and scalable architecture.",
    price: "€800+",
    tech: ["React", "Next.js", "TypeScript"],
    features: ["Next.js 14", "TypeScript", "State Mgmt", "API Integration"],
    cta: "Start Project",
    icon: <FaReact />,
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600",
    colorClass: "react",
  },
  {
    id: 3,
    title: "E-commerce Solutions",
    description:
      "Complete online stores with secure payment processing and inventory management.",
    price: "€600+",
    tech: ["Shopify", "WooCommerce", "Stripe"],
    features: ["Shopify/Woo", "Payments", "Product Catalog", "Mobile Ready"],
    cta: "Start Project",
    icon: <SiWoocommerce />,
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c29sdXRpb25zfGVufDB8fDB8fHww",
    colorClass: "shop",
  },
  {
    id: 4,
    title: "SEO & Analytics",
    description: "Comprehensive SEO strategy and analytics for maximum visibility.",
    price: "€300+",
    tech: ["Google Analytics", "Search Console", "Ahrefs"],
    features: ["Technical SEO", "Keywords", "Analytics", "Reporting"],
    cta: "Start Project",
    icon: <TbSeo />,
    image:
      "https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWl8ZW58MHx8MHx8fDA%3D",
    colorClass: "seo",
  },
  {
    id: 5,
    title: "DevOps & Maintenance",
    description:
      "Automated deployment, monitoring, and 24/7 support for your applications.",
    price: "€50/month",
    tech: ["AWS", "Docker", "CI/CD"],
    features: ["Hosting", "CI/CD", "Security", "Monitoring"],
    cta: "Subscribe Now",
    icon: <FaDev />,
    image:
      "https://media.istockphoto.com/id/1352203098/photo/devops-software-development-and-it-operations-engineer-working-in-agile-methodology.webp?a=1&b=1&s=612x612&w=0&k=20&c=jP0fXJ1bS29ztm0HKdTg7Tom7fKIt8lCmvxGtx-zf3I=",
    colorClass: "dev",
  },
  {
    id: 6,
    title: "API & Backend Development",
    description:
      "Robust backend systems with secure APIs, databases, and scalable server architecture.",
    price: "€700+",
    tech: ["Node.js", "Express", "MongoDB", "PostgreSQL"],
    features: [
      "REST & GraphQL APIs",
      "Authentication & Authorization",
      "Database Design",
      "Scalable Architecture",
    ],
    cta: "Start Project",
    icon: <CiServer />,
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600",
    colorClass: "backend",
  }

];

export default function Services() {
  const [messages, setMessages] = useState<Record<number, boolean>>({});

  const handleClick = (id: number) => {
    setMessages((prev) => ({ ...prev, [id]: true }));
    setTimeout(() => setMessages((prev) => ({ ...prev, [id]: false })), 3500);
  };

  return (
    <section className="services-wrapper">
      <p className="services-subtitle">
        Enterprise-grade solutions built with professional tools
      </p>

      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <div
              className="service-image"
              style={{ backgroundImage: `url(${service.image})` }}
            >
              <div className={`service-icon ${service.colorClass}`}>
                {service.icon}
              </div>
            </div>

            <div className="service-content">
              <h3>{service.title}</h3>

              <div className="service-tech">
                {service.tech.map((t, idx) => (
                  <span key={idx}>{t}</span>
                ))}
              </div>

              <p className="service-desc">{service.description}</p>

              <div className="service-features">
                {service.features.map((f, idx) => (
                  <span key={idx}>✓ {f}</span>
                ))}
              </div>


              <div className="service-footer">
                <span className="service-price">{service.price}</span>
                <Button
                  text={service.cta}
                  variant="white"
                  onClick={() => handleClick(service.id)}
                  className="service-button"
                />
              </div>

              {messages[service.id] && (
                <div className="service-message">
                  ✓ Thank you! Our team will contact you within 24 hours.
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
