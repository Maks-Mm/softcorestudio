//app/components/Services.jsx

import { Monitor, ShoppingCart, Cpu, Zap, Shield, TrendingUp } from 'lucide-react';
import GlassButton from './GlassButton';

const services = [
  {
    icon: <Monitor className="w-10 h-10" />,
    title: "WordPress Websites",
    description: "Custom WordPress themes, Elementor pages, WooCommerce stores with full responsive design.",
    features: ["Business Sites", "Blogs", "E-commerce", "Landing Pages"],
    price: "From €400",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: <Cpu className="w-10 h-10" />,
    title: "React Applications",
    description: "Modern web apps built with React, Next.js, Vite, and TypeScript for optimal performance.",
    features: ["SPA/MPA", "Dashboard", "Custom UI", "API Integration"],
    price: "From €800",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: <ShoppingCart className="w-10 h-10" />,
    title: "E-commerce Solutions",
    description: "Complete online stores with WooCommerce or Shopify, payment integration, and inventory management.",
    features: ["Product Catalog", "Payment Gateways", "Order Management", "Mobile Ready"],
    price: "From €600",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: <Cpu className="w-10 h-10" />,
    title: "API & Backend",
    description: "Custom backend systems, REST APIs, database design, and server-side applications.",
    features: ["Node.js/Express", "MongoDB/PostgreSQL", "Authentication", "Cloud Deployment"],
    price: "From €500",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: <TrendingUp className="w-10 h-10" />,
    title: "SEO Optimization",
    description: "Improve Google rankings with on-page SEO, speed optimization, and content strategy.",
    features: ["Technical SEO", "Page Speed", "Content Audit", "Analytics Setup"],
    price: "From €300",
    color: "from-yellow-500 to-amber-500"
  },
  {
    icon: <Shield className="w-10 h-10" />,
    title: "Monthly Maintenance",
    description: "Ongoing support, updates, backups, security monitoring, and performance optimization.",
    features: ["Updates", "Backups", "Security", "24/7 Monitoring"],
    price: "€50/month",
    color: "from-gray-700 to-gray-900"
  }
];

export default function Services() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Our Development Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Full-stack solutions tailored to your business needs, from simple websites
            to complex web applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${service.color} text-white mb-6 group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>

              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-gray-800">Includes:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                <span className="text-2xl font-bold text-gray-900">{service.price}</span>
                <GlassButton className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:shadow-lg transition-shadow">
                  Learn More
                </GlassButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
