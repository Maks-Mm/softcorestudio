// src/components/ServicesSection.tsx
import React from "react";

interface ServicesSectionProps {
    onOpenModal: () => void; // callback to open Services Modal
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenModal }) => {
    return (
        <section
            id="services"
            className="relative bg-candyred text-antiwhite flex items-center justify-center py-24 px-4 md:py-32 md:px-8"
            style={{
                backgroundImage:
                    'linear-gradient(rgba(217, 4, 41, 0.45), rgba(217, 4, 41, 0.45)), url("https://images.unsplash.com/photo-1759139681761-852dd24340df?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0")',
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="text-center max-w-3xl">
                <h2 className="text-3xl md:text-5xl font-bold uppercase mb-8">
                    End-to-End Digital Solutions
                </h2>
                <button
                    onClick={onOpenModal}
                    className="bg-gunmetal hover:bg-black text-antiwhite font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                >
                    View Full Service List
                </button>
            </div>
        </section>

    );
};

export default ServicesSection;
