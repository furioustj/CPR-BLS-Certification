'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { CheckCircle } from 'lucide-react';

const options = [
  {
    title: "Basic CPR (2–3 Hours)",
    shortDescription: "Essential life-saving techniques for non-medical individuals.",
    points: [
      "CPR & Choking Management for general public",
      "Hands-only & full CPR practice",
      "Certificate of Participation"
    ]
  },
  {
    title: "Standard CPR/BLS (4–6 Hours)",
    shortDescription: "Comprehensive hands-on training for various CPR techniques.",
    points: [
      "Includes Infant & Child CPR, Team CPR",
      "Hands-on and MCQ-based assessment",
      "2-Year Certification"
    ]
  },
  {
    title: "Comprehensive Training (6–8 Hours)",
    shortDescription: "Advanced CPR training with special cases and trauma care.",
    points: [
      "Covers trauma, burns, drowning scenarios",
      "Advanced mannequin practice",
      "2-Year Certification"
    ]
  },
  {
    title: "Advanced Training (1–2 Days)",
    shortDescription: "Intensive scenario-based training for medical professionals.",
    points: [
      "Role-playing emergencies & mock drills",
      "Advanced hands-on simulations",
      "Final practical & written evaluation"
    ]
  },
];

export default function TrainingOptions() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <section className="bg-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-red-600 mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Training Options
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-10">
          {options.map((option, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="bg-gray-50 border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-red-600 mb-3">{option.title}</h3>
              <p className="text-gray-700 mb-5">{option.shortDescription}</p>
              <ul className="space-y-2 text-left">
                {option.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-600 justify-center items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
