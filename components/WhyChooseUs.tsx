'use client';

import { motion } from 'framer-motion';

export default function WhyChooseUs() {
  return (
    <section className="bg-white text-black text-center py-16 px-6">
      <motion.h2
        className="text-3xl font-bold text-red-600"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        Why Choose Us?
      </motion.h2>
      <p className="mt-4 text-lg text-gray-700">
        The Rescue Federation® ensures swift, safe, and efficient medical transport services with expert care.
      </p>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            title: 'Air Ambulance Services',
            description: 'Rapid and safe air transportation for critical patients with advanced medical equipment.',
            icon: '✈️',
          },
          {
            title: 'Organ Transplant Transfers',
            description: 'Specialized air ambulance services ensuring timely and secure organ transportation.',
            icon: '🫀',
          },
          {
            title: 'Neonatal and Pediatric Transfers',
            description: 'Dedicated transport services for neonatal and pediatric patients requiring critical care.',
            icon: '👶',
          },
          {
            title: 'Disaster Management',
            description: 'Comprehensive disaster response services during natural and man-made emergencies.',
            icon: '🌪️',
          },
          {
            title: 'Critical Care Ground Ambulance',
            description: 'ICU-equipped ground ambulances ensuring continuous medical care en route.',
            icon: '🚑',
          },
          {
            title: '24/7 Emergency Support',
            description: 'Round-the-clock assistance for medical transportation and emergency coordination.',
            icon: '⏳',
          },
        ].map((service, index) => (
          <motion.div
            key={index}
            className="bg-red-100 p-6 rounded-2xl shadow-lg text-left transform transition-all duration-300 hover:scale-105 hover:bg-red-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 * index }}
          >
            <div className="flex items-center space-x-4">
              <span className="text-4xl">{service.icon}</span>
              <h3 className="text-xl font-semibold text-red-600">{service.title}</h3>
            </div>
            <p className="mt-3 text-gray-700">{service.description}</p>
          </motion.div>
        ))}
      </div>
      <motion.p
        className="mt-12 text-lg font-semibold text-red-700"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 1 }}
      >
        Your safety, our priority. Trusted medical transport for every emergency.
      </motion.p>
    </section>
  );
}