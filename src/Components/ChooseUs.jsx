import { motion as Motion } from "framer-motion";
import { Users, Briefcase, GraduationCap, Target } from "lucide-react";

const points = [
  {
    title: "Experienced Team",
    icon: Users,
    desc: "Industry experts with real-world project experience.",
  },
  {
    title: "Real Project Experience",
    icon: Briefcase,
    desc: "Hands-on training with live and practical projects.",
  },
  {
    title: "Career Assistance",
    icon: GraduationCap,
    desc: "Guidance for interviews, resumes, and placements.",
  },
  {
    title: "Client-Focused Solutions",
    icon: Target,
    desc: "We build solutions that match real business needs.",
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
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1 },
};

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-gradient-to-b pointer-events-none from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Why Choose <span className="text-brand-orange">Dostiva</span>
        </h2>

        <Motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-4 gap-6"
        >
          {points.map((p) => {
            const Icon = p.icon;
            return (
              <Motion.div
                key={p.title}
                variants={item}
                whileHover={{ y: -8, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group p-6 rounded-2xl border bg-white shadow-sm hover:shadow-xl transition text-center"
              >
                {/* Icon */}
                <div className="mx-auto mb-4 h-12 w-12 rounded-xl bg-brand-orange/10 flex items-center justify-center group-hover:bg-brand-orange/20 transition">
                  <Icon className="h-6 w-6 text-brand-orange" />
                </div>

                <h3 className="font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-slate-600">{p.desc}</p>
              </Motion.div>
            );
          })}
        </Motion.div>
      </div>
    </section>
  );
}
