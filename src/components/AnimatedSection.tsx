import { motion } from "framer-motion";
import { ReactNode } from "react";
interface AnimatedSectionProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "left" | "right" | "none";
}
const AnimatedSection = ({ children, className = "", delay = 0, direction = "up" }: AnimatedSectionProps) => {
    const directionMap = {
        up: { y: 50, x: 0 },
        left: { y: 0, x: -50 },
        right: { y: 0, x: 50 },
        none: { y: 0, x: 0 },
    };
    const { x, y } = directionMap[direction];
    return (<motion.div initial={{ opacity: 0, y, x }} whileInView={{ opacity: 1, y: 0, x: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{
            duration: 0.8,
            delay,
            ease: [0.25, 0.46, 0.45, 0.94],
        }} className={className}>
      {children}
    </motion.div>);
};
export default AnimatedSection;
