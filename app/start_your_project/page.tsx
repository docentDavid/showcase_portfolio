"use client";
import { useState } from "react";
import emailjs from "emailjs-com";

export default function StartYourProject() {
        const [formData, setFormData] = useState({
            name: "",
            email: "",
            phone: "",
            message: "",
        });

        const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

        const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        };

        const handleSubmit = (e: React.FormEvent) => {
            e.preventDefault();

        emailjs
        .send(
            "service_hox9xx8",  
            "template_dyckh4r",     
            {
            from_name: formData.name,
            from_email: formData.email,
            phone: formData.phone,
            message: formData.message,
            },
            "pF-umWLvZd-cOm1Eo"
        )
        .then(
            () => {
                setStatus("success");
                setFormData({ name: "", email: "", phone: "", message: "" });
                setTimeout(() => setStatus("idle"), 4000); // hide message after 4s
            },
            () => {
                setStatus("error");
                setTimeout(() => setStatus("idle"), 4000);
            }
        );
    };


        return (
            <main>
                <div className="black-background3" id="start-project"></div>
                <div className="start-project-content">
                    <aside className="start-project-section">
                        <h2 className="start-project-title">Ready to level up your brand?</h2>
                        <p className="start-project-description">I’d love to hear more about your project. Whether you need help with branding, web design, or optimization, let’s start a conversation.</p>
                    </aside>
                    <form className="start-project-form" onSubmit={handleSubmit}>
                        <label htmlFor="name">Full Name*</label>
                            <input
                                className="short-input"
                                type="text"
                                id="name"
                                name="name"
                                placeholder="John Doe"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />

                            <label htmlFor="email">Your Email*</label>
                            <input
                                className="short-input"
                                type="email"
                                id="email"
                                name="email"
                                placeholder="john@example.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />

                            <label htmlFor="phone">Phone Number*</label>
                            <input
                                className="short-input"
                                type="telephone"
                                id="phone"
                                name="phone"
                                placeholder="+31 234 567 890"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />

                            <label htmlFor="message">What are you looking for in your project?</label>
                            <textarea
                                className="long-input"
                                id="message"
                                name="message"
                                placeholder="Briefly describe your project goals, challenges and any specific requirements."
                                rows={5}
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />

                        {/* ✅ Replace button with status message */}
                        {status === "idle" || status === "sending" ? (
                            <button type="submit" className="get-started">
                            {status === "sending" ? "Sending..." : "Get started"}
                            </button>
                        ) : status === "success" ? (
                            <p className="status-box success">
                            ✅ Message sent successfully!
                            </p>
                        ) : (
                            <p className="status-box error">
                            ❌ Something went wrong. Please try again.
                            </p>
                        )}
                    </form>

                </div>
            </main>
    );
}
