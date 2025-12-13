//app/sections/Contact.tsx
"use client";

interface ContactProps {
    openModal?: () => void;
}

export default function Contact({ openModal }: ContactProps) {
    const handleClick = () => {
        openModal?.();
    };

    return (
        <section
            id="contact"
            className="contact-section"
            style={{
                backgroundImage: "linear-gradient(rgba(217,4,41,0.8), rgba(217,4,41,0.8)), url('https://images.unsplash.com/photo-1487537708572-3c850b5e856e?dpr=1&auto=compress&format&fit=crop&w=1199&h=798&q=80&cs=tinysrgb&crop=&bg=')"
            }}
        >
            <div className="contact-content">
                <h2 className="contact-title">Ready to Get Started?</h2>
                <button
                    onClick={handleClick}
                    className="contact-button"
                >
                    Contact Us
                </button>
            </div>
        </section>
    );
}