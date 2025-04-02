"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

const options = [
  {
    title: "Basic CPR (2-3 Hours)",
    shortDescription: "Essential life-saving techniques for non-medical individuals.",
    fullDescription: (
      <>
        <p>This course covers CPR & Choking Management, ideal for school staff, security personnel, corporate employees, and general public safety.</p>
        <p className="mt-4"><strong>🎯 Focus:</strong> Quick training in CPR & Choking Management for non-medical individuals.</p>
        <p><strong>👥 Ideal for:</strong> Schools, Corporate Employees, Security Guards, First Responders</p>
        <p><strong>📖 Course Modules:</strong></p>
        <ul className="list-disc ml-8">
          <li>✅ Module 1: Introduction to CPR/BLS & Chain of Survival (15 min)</li>
          <li>✅ Module 2: Scene Safety & Emergency Response (15 min)</li>
          <li>✅ Module 3: Adult CPR - Hands-Only CPR & Full CPR (60 min)</li>
          <li>✅ Module 4: Choking Management (30 min)</li>
          <li>✅ Module 5: Recovery Position & Post-CPR Care (30 min)</li>
        </ul>
        <p><strong>📜 Final Assessment:</strong> Hands-on Demonstration</p>
        <p><strong>🎓 Certification:</strong> Certificate of Participation</p>
      </>
    ),
  },
  {
    title: "Standard CPR/BLS (4-6 Hours)",
    shortDescription: "Comprehensive hands-on training for various CPR techniques.",
    fullDescription: (
      <>
        <p>This course includes Adult, Infant & Child CPR, Team CPR, and First Aid techniques. Ideal for paramedics, nurses, fitness trainers, and healthcare workers.</p>
        <p className="mt-4"><strong>🎯 Focus:</strong> A deeper understanding of CPR/BLS, including Infant & Child CPR</p>
        <p><strong>👥 Ideal for:</strong> Paramedics, Nurses, Medical Students, Coaches, Fitness Trainers</p>
        <p><strong>📖 Course Modules:</strong></p>
        <ul className="list-disc ml-8">
          <li>✅ Includes all topics from Basic CPR Awareness Training</li>
          <li>✅ Module 6: Infant & Child CPR (60 min)</li>
          <li>✅ Module 7: Team CPR & Special Cases (60 min)</li>
        </ul>
        <p><strong>📜 Final Assessment:</strong> Hands-on test & MCQ-based exam</p>
        <p><strong>🎓 Certification:</strong> The Rescue Federation® CPR/BLS Certified (Valid for 2 Years)</p>
      </>
    ),
  },
  {
    title: "Comprehensive Training (6-8 Hours)",
    shortDescription: "Advanced CPR training with special cases.",
    fullDescription: (
      <>
        <p>This course focuses on emergency responses for drowning, burns, trauma, and choking management for all age groups, ensuring a deep understanding of life-saving interventions.</p>
        <p className="mt-4"><strong>🎯 Focus:</strong> Extensive CPR/BLS training, covering professional rescue techniques.</p>
        <p><strong>👥 Ideal for:</strong> Medical students, EMTs, Nurses, Lifeguards, Coaches</p>
        <p><strong>📖 Course Modules:</strong></p>
        <ul className="list-disc ml-8">
          <li>✅ Includes all topics from Standard CPR/BLS Certification</li>
          <li>✅ Module 8: Choking Management for All Ages (60 min)</li>
          <li>📍 Infant, Child, and Adult Choking Management</li>
          <li>📍 Heimlich Maneuver – Special Cases (Pregnant, Obese, Elderly)</li>
          <li>✅ Module 9: Advanced Hands-On CPR Practice (60 min)</li>
          <li>📍 Compression techniques for all age groups</li>
          <li>📍 Practice on professional CPR mannequins</li>
          <li>📍 Real-life scenario drills</li>
          <li>✅ Module 10: CPR for Trauma & Special Cases (60 min)</li>
          <li>📍 CPR for drowning, burns, electrocution victims</li>
          <li>📍 Managing CPR in a multi-victim scenario</li>
          <li>📍 Post-resuscitation care</li>
        </ul>
        <p><strong>📜 Final Assessment:</strong> Practical exam & multiple-choice test</p>
        <p><strong>🎓 Certification:</strong> The Rescue Federation® CPR/BLS Certified (Valid for 2 Years)</p>
      </>
    ),
  },
  {
    title: "Advanced Training (1-2 Days)",
    shortDescription: "Intensive scenario-based training for professionals.",
    fullDescription: (
      <>
        <p>This course covers trauma response, the science behind CPR, role-playing emergencies, and post-resuscitation care for healthcare professionals in high-pressure situations.</p>
        <p className="mt-4"><strong>🎯 Focus:</strong> Hands-on, scenario-based intensive training for professionals</p>
        <p><strong>👥 Ideal for:</strong> Doctors, EMTs, Nurses, Advanced First Responders</p>
        <p><strong>📖 Course Structure:</strong></p>
        <ul className="list-disc ml-8">
          <li>✅ Day 1: Theoretical & Basic Practical Training (6-8 Hours)</li>
          <li>✅ Includes all topics from Comprehensive CPR/BLS Training</li>
          <li>✅ Module 11: The Science Behind CPR (45 min)</li>
          <li>✅ Module 12: Special CPR Scenarios (60 min)</li>
          <li>✅ Day 2: Advanced Practical & Simulation-Based Training (6-8 Hours)</li>
          <li>✅ Module 13: Intensive Hands-on CPR Practice (90 min)</li>
          <li>✅ Module 14: Mock CPR Emergencies & Role-Playing (90 min)</li>
          <li>✅ Module 15: Final Evaluation & Certification (120 min)</li>
        </ul>
        <p><strong>📜 Final Assessment:</strong> Practical tests & written evaluation</p>
        <p><strong>🎓 Certification:</strong> The Rescue Federation® Advanced CPR/BLS Certified (Valid for 2 Years)</p>
      </>
    ),
  },
];

export default function TrainingOptions() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <section className="bg-gray-100 py-12 px-6">
      <h2 className="text-4xl font-bold text-center text-red-600">Training Options</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {options.map((option, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white shadow-lg rounded-2xl border border-red-200 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.2 }}
          >
            <h3 className="text-xl text-red-700 font-bold">{option.title}</h3>
            <p className="text-gray-700 mt-2">{option.shortDescription}</p>
            <div className="mt-4 text-gray-700 bg-red-100 p-4 rounded-lg">{option.fullDescription}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
