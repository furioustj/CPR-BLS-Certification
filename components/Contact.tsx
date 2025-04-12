'use client';

import { useState } from 'react';
import emailjs from 'emailjs-com';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaGlobe,
} from 'react-icons/fa';

type StatusType = {
  success: boolean;
  message: string;
} | null;

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp_number: '',
    message: '',
  });

  const [status, setStatus] = useState<StatusType>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .send(
        'service_efgmphd',
        'template_hwn1rle',
        {
          ...formData,
          whatsapp_link: `https://wa.me/${formData.whatsapp_number.replace(/\D/g, '')}`,
        },
        'RLlyarkntBn2iWSOK'
      )
      .then(
        () => {
          setStatus({ success: true, message: 'Message sent successfully!' });
          setFormData({
            name: '',
            email: '',
            whatsapp_number: '',
            message: '',
          });
        },
        () => {
          setStatus({ success: false, message: 'Failed to send message, try again.' });
        }
      );
  };

  return (
    <>
      {/* Chatbox Section */}
      <section className="bg-white py-12 px-6 flex justify-center" id="chatbox">
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
              className="p-3 border rounded-lg h-24 resize-none focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
            <button
              type="submit"
              className="bg-red-600 text-white px-4 py-2 rounded-lg transition-transform duration-300 hover:bg-red-700 hover:scale-105"
            >
              Send
            </button>
          </form>

          {status && (
            <p
              className={`mt-3 text-center font-medium ${
                status.success ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {status.message}
            </p>
          )}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-100 border-t border-gray-300 py-4 px-4 md:px-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Left: Branding */}
          <div className="flex items-center justify-center md:justify-start space-x-3">
  <img
    src="/LogoRescue.png"
    alt="Logo"
    className="w-13 h-auto"
  />
  <div>
    <h3 className="text-lg font-semibold text-red-600">The Rescue Federation®</h3>
    <p className="text-sm text-gray-600">
      &copy; {new Date().getFullYear()} All rights reserved.
    </p>
  </div>
</div>


          {/* Right: Social Icons */}
          <div className="flex items-center gap-4">
  <a
    href="http://www.rescuefederation.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-600 hover:text-red-600 transition-colors duration-300"
  >
    <FaGlobe size={18} />
  </a>

  <a
    href="http://www.instagram.com/therescuefederation/?hl=en"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-600 hover:text-pink-600 transition-colors duration-300"
  >
    <FaInstagram size={18} />
  </a>

  <a
    href="http://www.facebook.com/Rescue.federation.air.ambulance.india/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-600 hover:text-blue-700 transition-colors duration-300"
  >
    <FaFacebookF size={18} />
  </a>

  <a
    href="http://www.linkedin.com/company/the-rescue-federation/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
  >
    <FaLinkedinIn size={18} />
  </a>

  <a
    href="http://www.x.com/rescuefed"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-600 hover:text-sky-600 transition-colors duration-300"
  >
    <FaTwitter size={18} />
  </a>
    </div>
        
   </div>
</footer>
    </>
  );
}
