import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PillTag } from "@/components/Bubble";

interface PromoPillProps {
  tag: string;
  text: string;
  to?: string;
  className?: string;
}

const PromoPill = ({ tag, text, to = "/features", className = "" }: PromoPillProps) => (
  <Link
    to={to}
    className={`yankee-surface yankee-surface--control inline-flex items-center gap-2.5 pl-1.5 pr-4 py-1.5 rounded-full bg-card transition-all ${className}`}
  >
    <PillTag>{tag}</PillTag>
    <span className="text-[13px] md:text-[14px] font-medium text-foreground tracking-tight lowercase">
      {text}
    </span>
    <ArrowRight size={14} className="text-foreground/70 shrink-0" />
  </Link>
);

export default PromoPill;
