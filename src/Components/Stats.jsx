import { motion as Motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({ to }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, to, { duration: 1.6, ease: "easeOut" });
      return controls.stop;
    }
  }, [isInView, to, count]);

  return <Motion.span ref={ref}>{rounded}</Motion.span>;
}

export default function Stats() {
  const stats = [
    { label: "Projects Delivered", value: 10 },
    { label: "Students Trained", value: 75 },
    { label: "Years Experience", value: 3.5 },
    { label: "Client Satisfaction (%)", value: 9 },
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-r from-brand-blue to-blue-800 text-white">
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-orange/20 rounded-full blur-3xl" />
       <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8 text-center">
        {stats.map((s) => (
          <div key={s.label} className="p-6">
            <div className="text-4xl md:text-5xl font-extrabold mb-2">
              <Counter to={s.value} />+
            </div>
            <div className="text-white/80">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
