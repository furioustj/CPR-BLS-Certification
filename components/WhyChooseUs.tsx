import { ShieldCheck, MapPin, Users, Activity, BookOpenCheck, BadgeCheck } from "lucide-react";

const perks = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-red-600" />,
    title: "Certified by The Rescue Federation®",
    description:
      "Get a 2-year valid CPR/BLS certification, awarded by a trusted name in emergency care and widely recognized by healthcare institutions.",
  },
  {
    icon: <MapPin className="w-8 h-8 text-red-600" />,
    title: "On-Site Training Across India",
    description:
      "We bring the training to your school, college, hospital, or office — fully equipped with CPR manikins and materials.",
  },
  {
    icon: <Users className="w-8 h-8 text-red-600" />,
    title: "Led by Certified Experts",
    description:
      "Learn from certified BLS/ACLS instructors trained under global organizations like the AHA, Red Cross, and ERC.",
  },
  {
    icon: <Activity className="w-8 h-8 text-red-600" />,
    title: "Real-Life Emergency Simulations",
    description:
      "Practice hands-on CPR, choking rescue, trauma response, and team-based drills to be ready for real emergencies.",
  },
  {
    icon: <BookOpenCheck className="w-8 h-8 text-red-600" />,
    title: "Flexible Training Modules",
    description:
      "Choose from awareness sessions, certification programs, or advanced courses — tailored to your audience.",
  },
  {
    icon: <BadgeCheck className="w-8 h-8 text-red-600" />,
    title: "Institutional Upskilling & Recognition",
    description:
      "Boost NAAC/CSR value with life-saving skills, digital certificates, badges, and an optional Train-the-Trainer module.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-red-600">Why Choose Us</h2>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {perks.map((perk, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex justify-center mb-4">{perk.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{perk.title}</h3>
              <p className="text-gray-600">{perk.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
