import { motion as Motion} from "framer-motion";

export default function Reveal({ children, delay = 0 }) {
  return (
    <Motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </Motion.div>
  );
}
