import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
export interface FAQItem {
    q: string;
    a: string;
}
const FAQ = ({ items }: {
    items: FAQItem[];
}) => {
    const [open, setOpen] = useState<number | null>(0);
    return (<div className="divide-y divide-border/20 border-t border-b border-border/20">
      {items.map((item, i) => {
            const isOpen = open === i;
            return (<div key={i}>
            <button onClick={() => setOpen(isOpen ? null : i)} className="w-full flex items-center justify-between py-6 text-left group">
              <span className="text-[15px] font-medium text-foreground group-hover:text-primary transition-colors duration-200">
                {item.q}
              </span>
              <Plus size={18} className={`text-muted-foreground shrink-0 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}/>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (<motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }} className="overflow-hidden">
                  <p className="pb-6 pr-8 text-[14px] text-muted-foreground leading-relaxed">{item.a}</p>
                </motion.div>)}
            </AnimatePresence>
          </div>);
        })}
    </div>);
};
export default FAQ;
