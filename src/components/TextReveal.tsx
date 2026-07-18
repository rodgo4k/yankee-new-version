import { motion } from "framer-motion";
interface TextRevealProps {
    text: string;
    className?: string;
    delay?: number;
    highlightText?: string;
    highlightClassName?: string;
}
const TextReveal = ({ text, className = "", delay = 0, highlightText, highlightClassName = "text-gradient", }: TextRevealProps) => {
    const words = text.split(" ");
    return (<motion.span className={className}>
      {words.map((word, i) => (<span key={i} className="inline-block overflow-hidden">
          <motion.span className={`inline-block ${highlightText && word === highlightText ? highlightClassName : ""}`} initial={{ y: "100%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{
                duration: 0.6,
                delay: delay + i * 0.06,
                ease: [0.25, 0.4, 0.25, 1],
            }}>
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>))}
    </motion.span>);
};
export default TextReveal;
