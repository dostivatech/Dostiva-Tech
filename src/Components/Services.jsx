import Reveal from "./Reveal";
import { Code, Server, Wrench, Layers } from "lucide-react";
import { motion as Motion } from "framer-motion";

const items = [
  { title: "Web Development", desc: "Modern, responsive websites & apps.", icon: Code },
  { title: "Software Solutions", desc: "Custom software for your business.", icon: Layers },
  { title: "API & Backend", desc: "Secure and scalable backends.", icon: Server },
  { title: "Maintenance & Support", desc: "Ongoing improvements & fixes.", icon: Wrench },
];

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <Reveal>
          <h2 className="text-3xl font-bold mb-10 text-center">Our Services</h2>
        </Reveal>

        <div className="grid md:grid-cols-4 gap-6">
          {items.map((i, idx) => {
            const Icon = i.icon;
            return (
              <Reveal key={i.title} delay={idx * 0.08}>
                <Motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="p-6 bg-white rounded-2xl border shadow-sm hover:shadow-xl transition text-center"
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-brand-orange/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-brand-orange" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{i.title}</h3>
                  <p className="text-slate-600 text-sm">{i.desc}</p>
                </Motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
