import { Check } from "lucide-react";
import { motion } from "framer-motion";
interface PriceCardProps {
    name: string;
    price: string;
    period?: string;
    tagline: string;
    features: string[];
    cta: string;
    href?: string;
    highlighted?: boolean;
    delay?: number;
}
const PriceCard = ({ name, price, period = "/ mês", tagline, features, cta, href = "#", highlighted, delay = 0 }: PriceCardProps) => (<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay }} className={`yankee-surface yankee-surface--lg rounded-[2rem] p-8 flex flex-col ${highlighted ? "bg-primary text-primary-foreground !border-primary" : "bg-card"}`}>
    <div className="flex items-center justify-between">
      <h3 className={`text-[15px] font-semibold lowercase ${highlighted ? "text-primary-foreground" : "text-foreground"}`}>{name}</h3>
      {highlighted && (<span className="text-[10px] uppercase tracking-widest opacity-80 font-medium">popular</span>)}
    </div>
    <div className="mt-6 flex items-baseline gap-1">
      <span className={`text-4xl font-semibold tracking-tight ${highlighted ? "text-primary-foreground" : "text-foreground"}`}>{price}</span>
      <span className={`text-[13px] ${highlighted ? "opacity-70" : "text-muted-foreground"}`}>{period}</span>
    </div>
    <p className={`mt-3 text-[13px] leading-relaxed min-h-[3rem] ${highlighted ? "opacity-80" : "text-muted-foreground"}`}>{tagline}</p>
    <a href={href} className={`mt-6 inline-flex items-center justify-center px-5 py-2.5 rounded-full text-[13px] font-medium transition-all duration-200 ${highlighted ? "bg-primary-foreground text-primary hover:opacity-90" : "bg-foreground text-background hover:opacity-90"}`}>
      {cta}
    </a>
    <ul className="mt-8 space-y-3 flex-1">
      {features.map((f) => (<li key={f} className={`flex items-start gap-2.5 text-[13px] leading-relaxed ${highlighted ? "opacity-90" : "text-muted-foreground"}`}>
          <Check size={14} className={`mt-0.5 shrink-0 ${highlighted ? "text-primary-foreground" : "text-primary"}`}/>
          <span>{f}</span>
        </li>))}
    </ul>

  </motion.div>);
export default PriceCard;
