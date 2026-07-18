import { motion } from "framer-motion";
import { ReactNode, useRef, useState } from "react";
interface MagneticButtonProps {
    children: ReactNode;
    className?: string;
    as?: "button" | "a" | "div";
    href?: string;
    target?: string;
    rel?: string;
    onClick?: () => void;
}
const MagneticButton = ({ children, className = "", as = "button", href, target, rel, onClick, }: MagneticButtonProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const handleMouse = (e: React.MouseEvent) => {
        if (!ref.current)
            return;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        const x = (e.clientX - left - width / 2) * 0.15;
        const y = (e.clientY - top - height / 2) * 0.15;
        setPosition({ x, y });
    };
    const reset = () => setPosition({ x: 0, y: 0 });
    const Component = as === "a" ? motion.a : motion.button;
    return (<div ref={ref} onMouseMove={handleMouse} onMouseLeave={reset} className="inline-block">
      <Component href={href} target={target} rel={rel} onClick={onClick} animate={{ x: position.x, y: position.y }} transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }} className={className}>
        {children}
      </Component>
    </div>);
};
export default MagneticButton;
