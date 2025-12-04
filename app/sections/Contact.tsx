// src/sections/Contact.tsx
import React from "react";

interface ContactProps {
    openModal: () => void; // function to open the signup modal
}

const Contact: React.FC<ContactProps> = ({ openModal }) => {
    return (
        <section
            id="contact"
            className="relative flex items-center justify-center min-h-screen bg-candyred bg-opacity-80 bg-[url('https://images.unsplash.com/photo-1487537708572-3c850b5e856e?dpr=1&auto=compress&format&fit=crop&w=1199&h=798&q=80&cs=tinysrgb&crop=&bg=')] bg-center bg-cover p-6"
        >
            <div className="text-center text-white">
                <h2 className="text-4xl font-bold uppercase mb-6">Ready to Get Started?</h2>
                <button
                    onClick={openModal}
                    className="bg-gunmetal hover:bg-gunmetal/90 text-antiwhite font-semibold py-3 px-6 rounded shadow-lg transition"
                >
                    Contact Us
                </button>
            </div>
        </section>

    );
};

export default Contact;
