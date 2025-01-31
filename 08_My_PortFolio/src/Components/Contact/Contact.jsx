import { useState } from "react";
import { Link } from "react-router-dom";
export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        tel: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);
    const [status, setStatus] = useState("");
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        const newErrors = {};
        const emailPattern = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
        const telPattern = /^[0-9]{10}$/; // Assuming telephone number is 10 digits

        if (!formData.name) newErrors.name = "Full Name is required";
        if (!formData.email) newErrors.email = "Email is required";
        else if (!emailPattern.test(formData.email))
            newErrors.email = "Invalid email format";

        if (!formData.tel) newErrors.tel = "Telephone Number is required";
        else if (!telPattern.test(formData.tel))
            newErrors.tel = "Invalid telephone number format";

        if (!formData.message) newErrors.message = "Message is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        const response = await fetch("https://formspree.io/f/xzzdgzng", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            setSubmitted(true);
            setFormData({ name: "", email: "", tel: "", message: "" });
        } else {
            setStatus("Oops! Something went wrong.");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-[500px] bg-transparent bg-slate-800">
            <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                <div className="mt-8 overflow-hidden">
                    <div className="grid  grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Get in touch card */}
                        <div className="p-6 mr-2 rounded-3xl bg-gray-100 sm:rounded-lg flex flex-col items-center justify-center">
                            <h1 className="text-3xl sm:text-4xl text-gray-800 font-extrabold tracking-tight">
                                Get in touch:
                            </h1>
                            <p className="text-normal text-lg sm:text-xl font-medium text-gray-600 mt-2">
                                Fill in the form to start a conversation
                            </p>
                            <div className="flex items-center mt-8 text-gray-600">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-gray-500"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                    Shrirampur, Ahmednagar, Maharashtra, 413709
                                </div>
                            </div>

                            <div className="flex items-center mt-4 text-gray-600">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-gray-500"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>
                                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                    +91 **********
                                </div>
                            </div>

                            <div className="flex items-center mt-2 text-gray-600">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-gray-500"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                    SakshiKolekar****@gmail.com
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        {submitted ? (
                            // Thank You Message
                            <div className="flex justify-center items-center min-h-[500px] bg-transparent">
                                <div className="p-8 bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 rounded-3xl shadow-xl text-center max-w-xl mx-auto">
                                    <h2 className="text-3xl font-extrabold text-white mb-4">
                                        Thank You for Contacting Me!
                                    </h2>
                                    <p className="text-lg text-white font-semibold mb-6">
                                        I have received your details and will get back to you as soon as possible.
                                    </p>
                                    <div className="flex justify-center items-center">
                                        <svg
                                            className="w-16 h-16 animate-pulse text-white"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            strokeWidth="2"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M5 12l5 5L20 7"
                                            />
                                        </svg>
                                    </div>
                                    <button  className="mt-6 py-3 px-6 bg-teal-600 text-white font-semibold rounded-full hover:bg-teal-700 transform hover:scale-105 transition duration-300">
                                        <Link to="/">
                                        Go Back to Homepage
                                        </Link>
                                    </button>
                                </div>
                            </div>

                        ) : (
                            // Contact Form
                            <form
                                onSubmit={handleSubmit}
                                className="p-6 flex flex-col justify-center rounded-3xl shadow-lg"
                            >
                                <div className="flex flex-col">
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="Full Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                                    />
                                    {errors.name && (
                                        <p className="text-red-500 text-sm">{errors.name}</p>
                                    )}
                                </div>

                                <div className="flex flex-col mt-2">
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                                    />
                                    {errors.email && (
                                        <p className="text-red-500 text-sm">{errors.email}</p>
                                    )}
                                </div>

                                <div className="flex flex-col mt-2">
                                    <input
                                        type="tel"
                                        name="tel"
                                        id="tel"
                                        placeholder="Telephone Number"
                                        value={formData.tel}
                                        onChange={handleChange}
                                        required
                                        className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                                    />
                                    {errors.tel && (
                                        <p className="text-red-500 text-sm">{errors.tel}</p>
                                    )}
                                </div>

                                <div className="flex flex-col mt-2">
                                    <textarea
                                        name="message"
                                        id="message"
                                        placeholder="Why are you contacting me?"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                                    />
                                    {errors.message && (
                                        <p className="text-red-500 text-sm">{errors.message}</p>
                                    )}
                                </div>

                                <button
                                    type="submit"
                                    className="mt-6 py-3 px-4 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 focus:outline-none"
                                >
                                    Send Message
                                </button>

                                {status && (
                                    <p className="text-red-500 text-sm mt-4">{status}</p>
                                )}
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
