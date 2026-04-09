import { motion as Motion } from "framer-motion";
import heroImg from "../assets/Hero.png";
//import BackgroundParticles from "./BgParticles";
import CSSParticles from "./CSSParticlles";

export default function Hero() {
  return (
    <section className="relative overflow-hidden text-white">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue via-blue-700 to-blue-900  pointer-events-none z-0" />
      <CSSParticles />

      {/* ✅ Particles ABOVE gradient */}
     

      {/* Blur shapes */}
      <div className="absolute -top-24 -left-24 w-96 h-96 pointer-events-none  bg-brand-orange/30 rounded-full blur-3xl z-0" />
      <div className="absolute top-1/2 -right-24 w-96 h-96 pointer-events-none  bg-cyan-400/20 rounded-full blur-3xl z-0" />

      {/* ✅ Content ABOVE particles */}
      <div className="relative pointer-events-none z-20 max-w-7xl mx-auto px-4 py-24 grid md:grid-cols-2 gap-12 items-center">
        
        <Motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Build. Learn. Grow. <br />
            <span className="text-brand-orange">with Dostiva Technologis</span>
          </h1>
          <p className="text-lg text-white/80 mb-8 max-w-xl">
            Innovative IT solutions and practical training for businesses and careers.
          </p>
        </Motion.div>

        <Motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="relative bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-4 md:p-6"
        >
          <img
            src={heroImg}
            alt="Dostiva Technologis"
            className="w-full h-72 md:h-96 object-cover rounded-xl"
          />
        </Motion.div>
      </div>
    </section>
  );
}
