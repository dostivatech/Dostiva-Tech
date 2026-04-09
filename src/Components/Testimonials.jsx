import { motion as Motion } from "framer-motion";
import Reveal from "./Reveal";
import WaveBackground from "./WaveBackground";

const testimonials = [
  {
    name: "Ankit Sharma",
    role: "Startup Founder",
    quote:
      "Dostiva delivered our project on time with great quality. The team is responsive and professional.",
  },
  {
    name: "Priya Reddy",
    role: "Student (Full Stack)",
    quote:
      "The training is very practical. I cracked my first job interview thanks to their guidance.",
  },
  {
    name: "Rahul Verma",
    role: "Business Owner",
    quote:
      "Great support and clean development. Highly recommend for IT services.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden py-28 bg-gradient-to-b from-blue-50 via-blue-100 to-blue-200">
      
      {/* 🔺 Top Wave (Rotated 180°) */}
      <div className="absolute top-0 left-0 w-full rotate-180">
        <WaveBackground back="#bfdbfe" front="#93c5fd" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <Reveal>
          <h2 className="text-3xl font-bold mb-10 text-center text-blue-900">
            What People Say
          </h2>
        </Reveal>

        <Motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-6"
        >
          {testimonials.map((t) => (
            <Motion.div
              key={t.name}
              variants={item}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="p-6 bg-white/90 backdrop-blur rounded-2xl border border-blue-100 shadow-sm hover:shadow-xl transition"
            >
              <p className="text-slate-700 mb-4">“{t.quote}”</p>
              <div className="font-semibold text-blue-900">{t.name}</div>
              <div className="text-sm text-blue-600">{t.role}</div>
            </Motion.div>
          ))}
        </Motion.div>
      </div>

      {/* 🔻 Bottom Wave */}
      <WaveBackground back="#bfdbfe" front="#93c5fd" />
    </section>
  );
}
