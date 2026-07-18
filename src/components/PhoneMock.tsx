import { motion } from "framer-motion";
interface PhoneMockProps {
    src: string;
    alt: string;
    className?: string;
    delay?: number;
}
const PhoneMock = ({ src, alt, className = "", delay = 0 }: PhoneMockProps) => (<motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }} className={`rounded-[28px] overflow-hidden border border-border/30 shadow-2xl shadow-primary/5 bg-card ${className}`}>
    <img src={src} alt={alt} className="w-full h-auto" loading="lazy"/>
  </motion.div>);
export default PhoneMock;
