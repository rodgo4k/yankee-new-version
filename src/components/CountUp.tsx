import { useEffect, useRef, useState } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
interface CountUpProps {
    label: string;
    sub: string;
    numericValue?: number;
    suffix?: string;
}
const CountUp = ({ label, sub, numericValue, suffix = "" }: CountUpProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [displayValue, setDisplayValue] = useState(numericValue ? "0" : label);
    const spring = useSpring(0, { stiffness: 50, damping: 20 });
    const rounded = useTransform(spring, (v) => Math.round(v));
    useEffect(() => {
        if (isInView && numericValue) {
            spring.set(numericValue);
        }
    }, [isInView, numericValue, spring]);
    useEffect(() => {
        if (numericValue) {
            return rounded.on("change", (v) => setDisplayValue(String(v)));
        }
    }, [rounded, numericValue]);
    return (<motion.div ref={ref} initial={{ opacity: 0, y: 30, scale: 0.95 }} animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}} transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }} className="text-center">
      <p className="text-4xl md:text-6xl lg:text-7xl font-semibold text-foreground tracking-tight">
        {displayValue}{suffix}
      </p>
      <p className="mt-3 text-sm text-muted-foreground">{sub}</p>
    </motion.div>);
};
export default CountUp;
