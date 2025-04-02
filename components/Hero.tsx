'use client';

import { motion } from "framer-motion";

export default function Hero() {
  const handleScroll = () => {
    const chatbox = document.getElementById("chatbox");
    if (chatbox) {
      chatbox.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="bg-red-600 text-white text-center py-20">
      <img src="./LogoRescue.png" alt="The Rescue Federation" className="mx-auto w-30 mb-6" />

      <motion.h1
        className="text-4xl md:text-5xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        The Rescue Federation® CPR/BLS Training
      </motion.h1>
      <p className="mt-4 text-lg md:text-xl">Empowering You with Life-Saving Skills!</p>
      <button 
        onClick={handleScroll}
        className="mt-6 inline-block bg-white text-red-600 px-6 py-3 rounded-full font-bold shadow-lg hover:bg-gray-400 transition"
      >
        Get Certified
      </button>
    </section>
  );
}
