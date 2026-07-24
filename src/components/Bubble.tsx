import { ReactNode } from "react";
type Tail = "bl" | "br" | "tl" | "tr" | "none";
interface SpeechBubbleProps {
    children: ReactNode;
    variant?: "light" | "dark";
    className?: string;
    tail?: Tail;
    size?: "sm" | "md" | "lg";
}
const tailClass: Record<Exclude<Tail, "none">, string> = {
    bl: "after:content-[''] after:absolute after:-bottom-2 after:left-6 after:w-4 after:h-4 after:rotate-45",
    br: "after:content-[''] after:absolute after:-bottom-2 after:right-6 after:w-4 after:h-4 after:rotate-45",
    tl: "after:content-[''] after:absolute after:-top-2 after:left-6 after:w-4 after:h-4 after:rotate-45",
    tr: "after:content-[''] after:absolute after:-top-2 after:right-6 after:w-4 after:h-4 after:rotate-45",
};
const sizeClass = {
    sm: "px-4 py-2 text-[13px] rounded-[999px]",
    md: "px-6 py-3 text-[15px] rounded-[2rem]",
    lg: "px-8 md:px-12 py-4 md:py-6 text-4xl md:text-6xl lg:text-7xl rounded-[2.5rem] md:rounded-[3.5rem]",
};
export const SpeechBubble = ({ children, variant = "light", className = "", tail = "none", size = "sm", }: SpeechBubbleProps) => {
    const skin = variant === "dark"
        ? "bg-primary text-primary-foreground after:bg-primary"
        : "bg-card text-foreground border border-border after:bg-card after:border-r after:border-b after:border-border";
    return (<span className={`relative inline-flex items-center gap-2 shadow-[0_2px_10px_-2px_rgba(0,0,0,0.08)] ${sizeClass[size]} ${skin} ${tail !== "none" ? tailClass[tail] : ""} ${className}`}>
      {children}
    </span>);
};
export const PillTag = ({ children, className = "", variant = "dark", }: {
    children: ReactNode;
    className?: string;
    variant?: "dark" | "light";
}) => (<span className={`inline-flex items-center px-3 py-1 rounded-full text-[11px] font-medium tracking-tight ${variant === "dark" ? "bg-primary text-primary-foreground" : "bg-card text-foreground border border-border"} ${className}`}>
    {children}
  </span>);
export default SpeechBubble;
