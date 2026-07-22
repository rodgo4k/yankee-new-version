import { useCallback, useMemo, useRef, useState } from "react";
import { motion, useReducedMotion, type Transition } from "framer-motion";

type RandomLetterSwapProps = {
  /** Heading text split into letters and swapped on hover */
  label: string;
  /** forward plays once on hover; pingpong reverses on hover-out */
  mode?: "forward" | "pingpong";
  /** When true, letters slide upward; otherwise downward */
  reverse?: boolean;
  /** Delay between each letter swap (seconds) */
  staggerDuration?: number;
  className?: string;
};

const spring: Transition = { type: "spring", stiffness: 420, damping: 28, mass: 0.55 };

/**
 * Origin Kit–inspired Random Letter Swap:
 * on hover, letters swap vertically in a randomized staggered order.
 */
const RandomLetterSwap = ({
  label,
  mode = "pingpong",
  reverse = false,
  staggerDuration = 0.045,
  className = "",
}: RandomLetterSwapProps) => {
  const reduceMotion = useReducedMotion();
  const [hovered, setHovered] = useState(false);
  const [order, setOrder] = useState<number[]>([]);
  const orderRef = useRef<number[]>([]);

  const chars = useMemo(() => Array.from(label), [label]);

  const shuffleOrder = useCallback(() => {
    const indices = chars
      .map((_, i) => i)
      .filter((i) => chars[i] !== " ");
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    orderRef.current = indices;
    setOrder(indices);
  }, [chars]);

  const delayFor = (index: number) => {
    if (reduceMotion || order.length === 0) return 0;
    const rank = order.indexOf(index);
    if (rank < 0) return 0;
    return rank * staggerDuration;
  };

  const active = hovered && !reduceMotion;

  const onEnter = () => {
    shuffleOrder();
    if (mode === "forward") {
      setHovered(false);
      requestAnimationFrame(() => setHovered(true));
      return;
    }
    setHovered(true);
  };

  const onLeave = () => {
    if (mode === "pingpong") setHovered(false);
  };

  return (
    <span
      className={`inline-flex flex-wrap items-baseline lowercase ${className}`}
      aria-label={label}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onFocus={onEnter}
      onBlur={onLeave}
      tabIndex={0}
    >
      {chars.map((char, i) => {
        if (char === " ") {
          return (
            <span key={`sp-${i}`} className="inline-block w-[0.3em]" aria-hidden>
              {" "}
            </span>
          );
        }

        return (
          <span
            key={`${label}-${i}`}
            className="relative inline-block overflow-hidden align-baseline h-[1.1em] leading-none"
            aria-hidden
          >
            <motion.span
              className="inline-flex flex-col will-change-transform"
              animate={{ y: active ? (reverse ? "0%" : "-50%") : reverse ? "-50%" : "0%" }}
              initial={false}
              transition={{ ...spring, delay: delayFor(i) }}
            >
              <span className="block h-[1.1em] leading-[1.1em]">{char}</span>
              <span className="block h-[1.1em] leading-[1.1em]">{char}</span>
            </motion.span>
          </span>
        );
      })}
    </span>
  );
};

export default RandomLetterSwap;
