"use client";
import { useState } from "react";

export default function FreeAccessForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        discordId: "",
        email: "",
    });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const redirectUrl = "https://google.com"; // unde vrei redirectul
    const formspreeEndpoint = "https://formspree.io/f/mblaevql"; // pune ID-ul tău

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validate = () => {
        if (!formData.firstName || !formData.lastName || !formData.discordId || !formData.email) {
            return "All fields are required.";
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            return "Invalid email address.";
        }
        return "";
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const err = validate();
        if (err) {
            setError(err);
            return;
        }
        setError("");
        setLoading(true);

        try {
            const response = await fetch(formspreeEndpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    _subject: "New Free Access Registration",
                    _replyto: formData.email, // email-ul celui care a completat
                    _format: "plain", // folosește plain text sau HTML dacă vrei
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    discordId: formData.discordId,
                    email: formData.email,
                }),
            });

            if (!response.ok) {
                throw new Error("Failed to submit form");
            }

            window.location.href = redirectUrl;
        } catch (err) {
            console.error(err);
            setError("Something went wrong. Try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full max-w-[600px] bg-[#1D1D1D]/90 border border-black rounded-2xl shadow-xl text-white p-12 mx-auto backdrop-blur-md">
            <h2 className="text-4xl font-extrabold mb-6 text-center text-white">
                7 Days Free General Access
            </h2>
            <p className="text-center text-lg text-gray-300 mb-8">
                Fill out the form below to unlock your free trial to the IWM Academy platform.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
                <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full py-3 px-4 rounded-lg bg-black text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    required
                />
                <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full py-3 px-4 rounded-lg bg-black text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    required
                />
                <input
                    type="text"
                    name="discordId"
                    placeholder="Discord ID"
                    value={formData.discordId}
                    onChange={handleChange}
                    className="w-full py-3 px-4 rounded-lg bg-black text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full py-3 px-4 rounded-lg bg-black text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    required
                />

                {error && <p className="text-red-500 text-sm">{error}</p>}

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-[#fd961a] hover:bg-[#e58000] text-white text-lg font-bold rounded-xl transition"
                >
                    {loading ? "Submitting..." : "Get Free Access"}
                </button>
            </form>
        </div>
    );
}
