import { motion } from "framer-motion";

type TypingDotsProps = {
  className?: string;
  tone?: "them" | "you";
};

const TypingDots = ({ className = "", tone = "them" }: TypingDotsProps) => (
  <div
    className={`inline-flex h-10 min-w-[3.35rem] items-center justify-center gap-1.5 rounded-full px-3.5 ${
      tone === "you" ? "folk-cta" : "bg-[#1a1a1a]"
    } ${className}`}
    aria-label="typing"
  >
    {[0, 1, 2].map((i) => (
      <motion.span
        key={i}
        className="block h-2 w-2 rounded-full bg-white"
        animate={{ y: [0, -4, 0], opacity: [0.35, 1, 0.35] }}
        transition={{ duration: 0.7, repeat: Infinity, delay: i * 0.15, ease: "easeInOut" }}
      />
    ))}
  </div>
);

export default TypingDots;
