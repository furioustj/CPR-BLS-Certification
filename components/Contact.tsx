'use client';

import { useState } from 'react';
import emailjs from 'emailjs-com';

type StatusType = {
    success: boolean;
    message: string;
} | null;

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        whatsapp_number: '',
        message: ''
    });

    const [status, setStatus] = useState<StatusType>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        emailjs.send(
            'service_efgmphd',
            'template_hwn1rle',
            {
                ...formData,
                whatsapp_link: `https://wa.me/${formData.whatsapp_number.replace(/\D/g, '')}`
            },
            'RLlyarkntBn2iWSOK'
        ).then(
            () => {
                setStatus({ success: true, message: "Message sent successfully!" });
                setFormData({ name: '', email: '', whatsapp_number: '', message: '' });
            },
            () => {
                setStatus({ success: false, message: "Failed to send message, try again." });
            }
        );
    };

    return (
        <>
            {/* Chatbox Section */}
            <section className="bg-white py-12 px-6 flex justify-center" id='chatbox'>
                <div className="w-full max-w-lg bg-gray-100 text-black rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-2xl">
                    <h3 className="text-xl font-semibold mb-3 text-center">Send Us a Message</h3>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                        <input 
                            type="text" 
                            name="name" 
                            placeholder="Your Name" 
                            value={formData.name} 
                            onChange={handleChange} 
                            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                            required
                        />
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="Your Email" 
                            value={formData.email} 
                            onChange={handleChange} 
                            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                            required
                        />
                        <input 
                            type="tel" 
                            name="whatsapp_number" 
                            placeholder="Your WhatsApp Number" 
                            value={formData.whatsapp_number} 
                            onChange={handleChange} 
                            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                            required
                        />
                        <textarea 
                            name="message" 
                            placeholder="Your Message" 
                            value={formData.message} 
                            onChange={handleChange} 
                            className="p-3 border rounded-lg h-24 focus:outline-none focus:ring-2 focus:ring-red-500"
                            required
                        />
                        <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:bg-red-700 hover:scale-105">
                            Send
                        </button>
                    </form>

                    {status && (
                        <p className={`mt-3 text-center font-medium ${status.success ? "text-green-600" : "text-red-600"}`}>
                            {status.message}
                        </p>
                    )}
                </div>
            </section>

            {/* Contact Info Section */}
            <section className="bg-red-600 text-white text-center py-12 px-6">
                <h2 className="text-2xl font-semibold">Contact Us</h2>
                <div className="mt-4 text-lg">
                    <p>Call/WhatsApp:</p>
                    <p><a href="tel:+917775957175" className="underline">+91-7775957175</a></p>
                    <p><a href="tel:+919689689991" className="underline">+91-9689689991</a></p>
                    <p><a href="tel:+919499220094" className="underline">+91-9499220094</a></p>
                </div>
                <p className="mt-4">
                  🌍 Website:  
                    <a href="https://rescuefederation.com/" target="_blank" rel="noopener noreferrer" className="text-white underline">
                         rescuefederation.com
                    </a>
                </p>

            </section>
        </>
    );
}
