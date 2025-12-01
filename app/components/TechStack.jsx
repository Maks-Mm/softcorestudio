"use client";

import { useState } from 'react';
import {
    SiReact, SiNextdotjs, SiNodedotjs, SiMongodb,
    SiWordpress, SiTailwindcss, SiExpress, SiTypescript,
    SiPython, SiGit, SiDocker, SiAmazonaws
} from "react-icons/si";


const techStack = [
    { icon: <SiReact />, name: "React", color: "text-cyan-500", category: "Frontend" },
    { icon: <SiNextdotjs />, name: "Next.js", color: "text-gray-900", category: "Full Stack" },
    { icon: <SiNodedotjs />, name: "Node.js", color: "text-green-600", category: "Backend" },
    { icon: <SiMongodb />, name: "MongoDB", color: "text-green-700", category: "Database" },
    { icon: <SiWordpress />, name: "WordPress", color: "text-blue-900", category: "CMS" },
    { icon: <SiTailwindcss />, name: "Tailwind", color: "text-teal-500", category: "Frontend" },
    { icon: <SiExpress />, name: "Express", color: "text-gray-500", category: "Backend" },
    { icon: <SiTypescript />, name: "TypeScript", color: "text-blue-600", category: "Frontend" },
    { icon: <SiPython />, name: "Python", color: "text-yellow-500", category: "Backend" },
    { icon: <SiGit />, name: "Git", color: "text-orange-600", category: "Tools" },
    { icon: <SiDocker />, name: "Docker", color: "text-blue-500", category: "DevOps" },
    { icon: <SiAmazonaws />, name: "AWS", color: "text-orange-400", category: "Cloud" },
];

export default function TechStack() {
    const [activeCategory, setActiveCategory] = useState("All");

    const categories = ["All", "Frontend", "Backend", "Database", "CMS", "DevOps"];
    const filteredTech = activeCategory === "All"
        ? techStack
        : techStack.filter(tech => tech.category === activeCategory);

    return (
        <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                        Technology Stack
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        We work with modern technologies to deliver scalable, maintainable solutions.
                    </p>
                </div>

                {/* Filter buttons */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-2 rounded-full font-semibold transition-all ${activeCategory === category
                                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                                    : "bg-white text-gray-700 border border-gray-200 hover:border-blue-300"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Tech grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                    {filteredTech.map((tech, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center"
                        >
                            <div className="flex justify-center mb-4">
                                <div className={`text-5xl ${tech.color} group-hover:scale-110 transition-transform`}>
                                    {tech.icon}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{tech.name}</h3>
                            <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                                {tech.category}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-12 border-t border-gray-200">
                    <div className="text-center">
                        <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">50+</div>
                        <div className="text-gray-600 mt-2">Projects Completed</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">100%</div>
                        <div className="text-gray-600 mt-2">Client Satisfaction</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">24/7</div>
                        <div className="text-gray-600 mt-2">Support Available</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">12+</div>
                        <div className="text-gray-600 mt-2">Tech Stack</div>
                    </div>
                </div>
            </div>
        </section>
    );
}