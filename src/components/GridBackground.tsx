import { motion } from "framer-motion";
interface GridBackgroundProps {
    className?: string;
    variant?: "dots" | "grid" | "radial";
}
const GridBackground = ({ className = "", variant = "grid" }: GridBackgroundProps) => {
    if (variant === "dots") {
        return (<div className={`absolute inset-0 ${className}`}>
        <div className="absolute inset-0 opacity-[0.08]" style={{
                backgroundImage: `radial-gradient(circle, hsl(0 0% 100% / 0.3) 1px, transparent 1px)`,
                backgroundSize: "32px 32px",
            }}/>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background"/>
      </div>);
    }
    if (variant === "radial") {
        return (<div className={`absolute inset-0 ${className}`}>
        <div className="absolute inset-0 opacity-[0.05]" style={{
                backgroundImage: `
              linear-gradient(hsl(0 0% 100% / 0.15) 1px, transparent 1px),
              linear-gradient(90deg, hsl(0 0% 100% / 0.15) 1px, transparent 1px)
            `,
                backgroundSize: "80px 80px",
            }}/>
        <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full" style={{
                background: `radial-gradient(circle, hsl(0 0% 100% / 0.03) 0%, transparent 70%)`,
            }} animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5],
            }} transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
            }}/>
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background"/>
      </div>);
    }
    return (<div className={`absolute inset-0 ${className}`}>
      <div className="absolute inset-0 opacity-[0.04]" style={{
            backgroundImage: `
            linear-gradient(hsl(0 0% 100% / 0.3) 1px, transparent 1px),
            linear-gradient(90deg, hsl(0 0% 100% / 0.3) 1px, transparent 1px)
          `,
            backgroundSize: "64px 64px",
        }}/>
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background"/>
    </div>);
};
export default GridBackground;
