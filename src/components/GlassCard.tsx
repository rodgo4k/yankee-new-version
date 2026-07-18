import { motion } from "framer-motion";
import { ReactNode } from "react";
interface GlassCardProps {
    children: ReactNode;
    className?: string;
    hoverGlow?: string;
    delay?: number;
}
const GlassCard = ({ children, className = "", hoverGlow = "neutral", delay = 0 }: GlassCardProps) => {
    const glowColors: Record<string, string> = {
        neutral: "hover:shadow-[0_0_60px_-15px_hsl(0_0%_100%/0.08)]",
        primary: "hover:shadow-[0_0_60px_-15px_hsl(var(--primary)/0.15)]",
        green: "hover:shadow-[0_0_60px_-15px_hsl(142_71%_45%/0.3)]",
    };
    return (<motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }} whileHover={{ y: -4, transition: { duration: 0.3 } }} className={`
        relative p-8 rounded-2xl
        bg-card/50 backdrop-blur-sm
        border border-border/50
        hover:border-primary/30
        transition-all duration-500
        ${glowColors[hoverGlow] || glowColors.neutral}
        ${className}
      `}>
      {children}
    </motion.div>);
};
export default GlassCard;
