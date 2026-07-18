import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Users, MessageCircle, Video, Sparkles, Shield, Rss } from "lucide-react";

const items = [
  { label: "feed", icon: Rss },
  { label: "chat", icon: MessageCircle },
  { label: "calls", icon: Video },
  { label: "privacy", icon: Shield },
  { label: "ai", icon: Sparkles },
  { label: "crowds", icon: Users },
];

const RADIUS = 37;
const LINE_START = 15;
const LINE_END = 29;
const COUNT = items.length;

const slots = Array.from({ length: COUNT }, (_, i) => {
  const angle = (i / COUNT) * Math.PI * 2 - Math.PI / 2;
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  return {
    x: 50 + cos * RADIUS,
    y: 50 + sin * RADIUS,
    x1: 50 + cos * LINE_START,
    y1: 50 + sin * LINE_START,
    x2: 50 + cos * LINE_END,
    y2: 50 + sin * LINE_END,
  };
});

const BirdMark = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 120 166"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden
  >
    <path
      d="M65.7701 136.45V166H31.0057C27.5293 166 17.1 159.047 17.1 152.094V122.544H51.8644C61.2059 123.484 65.7701 131.236 65.7701 136.45Z"
      className="fill-current"
    />
    <path
      d="M99.9477 27.8115C121.675 74.7435 98.6028 164.13 72.1362 165.131V39.1099C73.0053 24.3351 89.5184 1.73822 115.592 0L99.9477 27.8115Z"
      className="fill-current"
    />
    <circle cx="94.7331" cy="13.9057" r="2.60733" className="fill-[hsl(var(--accent))]" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M75.8211 105.412L48.8149 45.0039C37.3717 24.6361 22.8937 20.452 0 22.0287L13.4259 58.4949L21.2184 54.0714C22.481 53.3547 24.0138 54.41 23.7948 55.8452L20.4713 77.6311L22.1579 82.2121C26.0484 96.492 52.212 114.278 75.8211 105.412Z"
      className="fill-current"
    />
  </svg>
);

const ease = [0.32, 0.72, 0.2, 1] as const;

const OrbitNodes = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setOffset((o) => o + 1);
    }, 4000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="relative w-full max-w-[440px] mx-auto aspect-square">
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden
      >
        {slots.map((s, i) => (
          <motion.line
            key={`line-${i}`}
            x1={s.x1}
            y1={s.y1}
            x2={s.x2}
            y2={s.y2}
            stroke="hsl(var(--foreground) / 0.16)"
            strokeWidth="0.4"
            strokeLinecap="round"
            strokeDasharray="1.1 1.3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 + i * 0.05 }}
          />
        ))}
      </svg>

      <motion.div
        className="absolute z-20"
        style={{
          left: "50%",
          top: "50%",
          width: "8.5rem",
          height: "8.5rem",
          marginLeft: "-4.25rem",
          marginTop: "-4.25rem",
        }}
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 160, damping: 16 }}
      >
        <motion.div
          className="w-full h-full rounded-full bg-card border border-border/70 shadow-[0_18px_40px_-18px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.7)] flex items-center justify-center"
          animate={{ y: [0, -7, 0, 4, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <BirdMark className="h-12 w-auto text-foreground" />
        </motion.div>
      </motion.div>

      {items.map((item, i) => {
        const Icon = item.icon;
        const slotIndex = (i + offset) % COUNT;
        const slot = slots[slotIndex];

        return (
          <motion.div
            key={item.label}
            className="absolute z-10"
            initial={{
              opacity: 0,
              scale: 0.45,
              left: `${slots[i].x}%`,
              top: `${slots[i].y}%`,
            }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            animate={{
              left: `${slot.x}%`,
              top: `${slot.y}%`,
            }}
            transition={{
              left: { duration: 0.85, ease },
              top: { duration: 0.85, ease },
              opacity: { duration: 0.4, delay: 0.15 + i * 0.05 },
              scale: { type: "spring", stiffness: 200, damping: 14, delay: 0.15 + i * 0.05 },
            }}
            style={{
              width: "4.25rem",
              height: "4.25rem",
              marginLeft: "-2.125rem",
              marginTop: "-2.125rem",
            }}
          >
            <div className="w-full h-full rounded-full bg-card border border-border/70 shadow-[0_14px_30px_-14px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.75)] flex flex-col items-center justify-center gap-0.5">
              <Icon size={15} className="text-foreground" />
              <span className="text-[10px] font-medium lowercase text-foreground/80 leading-none">
                {item.label}
              </span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default OrbitNodes;
