"use client";

import { CheckCircle, Clock, Globe, Shield, Zap, Code } from 'lucide-react';

const features = [
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Fast Delivery",
    description: "Typical project completion in 2-4 weeks. We value your time.",
    color: "text-yellow-500"
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: "Clean Code",
    description: "Well-documented, maintainable code following best practices.",
    color: "text-blue-500"
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Flexible Pricing",
    description: "Fixed price or hourly rate. No hidden costs.",
    color: "text-green-500"
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Multilingual Support",
    description: "Communication in English, German, Polish, or Russian.",
    color: "text-purple-500"
  },
  {
    icon: <CheckCircle className="w-8 h-8" />,
    title: "Quality Assurance",
    description: "Rigorous testing across devices and browsers.",
    color: "text-emerald-500"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Post-Launch Support",
    description: "Free 30-day support & maintenance packages available.",
    color: "text-red-500"
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Softcore Studio</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We combine technical expertise with a client-first approach to deliver exceptional results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className={`inline-flex p-3 rounded-xl bg-white/10 mb-6 ${feature.color}`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Process */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12">
          <h3 className="text-3xl font-bold mb-12 text-center">
            Our <span className="text-cyan-300">4-Step</span> Process
          </h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery Call", desc: "Understand your needs & goals" },
              { step: "02", title: "Planning & Quote", desc: "Detailed proposal with timeline" },
              { step: "03", title: "Development", desc: "Regular updates & feedback" },
              { step: "04", title: "Launch & Support", desc: "Deployment & post-launch care" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
                  {item.step}
                </div>
                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}