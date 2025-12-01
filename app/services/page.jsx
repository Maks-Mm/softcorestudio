// app/services/page.jsx
import servicesStyles from './page.module.css';

export default function Services() {
  const services = [
    { title: "WordPress Websites", desc: "Business sites, blogs, WooCommerce" },
    { title: "React Apps", desc: "Next.js, Vite, Tailwind" },
    { title: "API / Backend", desc: "Node.js, Express, MongoDB" },
    { title: "SEO Optimization", desc: "Improve Google visibility" },
  ];

  return (
    <section className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive web development solutions for businesses of all sizes.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <div 
              key={i} 
              className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg mb-6 flex items-center justify-center group-hover:rotate-12 transition-transform">
                <span className="text-white font-bold">{i + 1}</span>
              </div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">{s.title}</h2>
              <p className="text-gray-600">{s.desc}</p>
              <button className="mt-6 text-blue-600 font-semibold hover:text-blue-700 transition">
                Learn more →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}