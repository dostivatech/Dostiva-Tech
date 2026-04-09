import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import logo from "../assets/logo-128.png";


export default function Navbar() {
  return (
    <Motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b"
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo + Brand */}
         <Link to="/" className="flex items-center gap-3">
          <Motion.img
            src={logo}
            alt="Dostiva Logo"
            className="h-16 w-16 md:h-20 md:w-20 object-contain"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
          <span className="font-extrabold text-xl md:text-2xl text-brand-blue leading-none">
            Dostiva <span className="text-brand-orange">Tech</span>
          </span>
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <Link to="/services" className="hover:text-brand-orange">Services</Link>
          <Link to="/training" className="hover:text-brand-orange">Training</Link>
          <Link to="/contact" className="hover:text-brand-orange">Contact</Link>
        </nav>

        {/* CTA Button */}
        <Link
          to="/contact"
          className="bg-gradient-to-r from-brand-orange to-orange-500 text-white px-5 py-2 rounded-xl shadow hover:shadow-lg transition"
        >
          Get Started
        </Link>
      </div>
    </Motion.header>
  );
}
