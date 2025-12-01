// pages/services.jsx
//import Navbar from "../../components/Navbar";

export default function Services() {
  const services = [
    { title: "WordPress Websites", desc: "Business sites, blogs, WooCommerce" },
    { title: "React Apps", desc: "Next.js, Vite, Tailwind" },
    { title: "API / Backend", desc: "Node.js, Express, MongoDB" },
    { title: "SEO Optimization", desc: "Improve Google visibility" },
  ];

  return (
    <>
      <section className="p-8 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {services.map((s, i) => (
          <div key={i} className="p-4 border rounded-xl shadow-lg hover:scale-105 transition">
            <h2 className="text-xl font-bold">{s.title}</h2>
            <p className="mt-2">{s.desc}</p>
          </div>
        ))}
      </section>
    </>
  );
}
