import { motion as Motion } from "framer-motion";

const steps = [
  "Choose Service / Course",
  "Connect with Our Team",
  "Start Your Project / Learning",
  "Get Results",
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

export default function HowItWorks() {
  return (
    <section className="relative py-28 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-14 text-center text-slate-900">
          How It <span className="text-brand-orange">Works</span>
        </h2>

        <Motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-4 gap-8"
        >
          {steps.map((s, idx) => (
            <Motion.div
              key={s}
              variants={item}
              whileHover={{ y: -10, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              className="
                group relative p-8 rounded-3xl
                bg-white/70 backdrop-blur-xl
                border border-white/50
                shadow-lg hover:shadow-2xl
                transition
                text-center
                overflow-hidden
              "
            >
              {/* Gradient glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-brand-orange/10 via-transparent to-blue-500/10" />

              {/* Step Number with Gradient Ring */}
              <div className="relative mx-auto mb-6 h-14 w-14 rounded-full p-[2px] bg-gradient-to-br from-brand-orange to-blue-500">
                <div className="h-full w-full rounded-full bg-white flex items-center justify-center font-extrabold text-lg text-slate-900">
                  {idx + 1}
                </div>
              </div>

              {/* Step Text */}
              <p className="relative font-semibold text-slate-900 text-base">
                {s}
              </p>
            </Motion.div>
          ))}
        </Motion.div>
      </div>
    </section>
  );
}
