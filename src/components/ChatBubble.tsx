import { motion } from "framer-motion";
interface ChatBubbleProps {
    from: "me" | "them";
    name?: string;
    children: React.ReactNode;
    delay?: number;
}
const ChatBubble = ({ from, name, children, delay = 0 }: ChatBubbleProps) => (<motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay }} className={`flex flex-col gap-1 ${from === "me" ? "items-end" : "items-start"}`}>
    {name && <span className="text-[10px] text-muted-foreground px-2">{name}</span>}
    <div className={`max-w-[85%] px-3.5 py-2 text-[13px] leading-snug ${from === "me"
        ? "bg-primary text-background rounded-2xl rounded-br-md"
        : "bg-card border border-border/30 text-foreground rounded-2xl rounded-bl-md"}`}>
      {children}
    </div>
  </motion.div>);
export default ChatBubble;
