import { motion } from "framer-motion";

interface ChatBubbleProps {
  from: "me" | "them";
  name?: string;
  children: React.ReactNode;
  delay?: number;
}

const ChatBubble = ({ from, name, children, delay = 0 }: ChatBubbleProps) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay }}
    className={`flex flex-col gap-1 ${from === "me" ? "items-end" : "items-start"}`}
  >
    {name && <span className="text-[10px] text-muted-foreground px-1">{name}</span>}
    <div
      className={`yankee-chat__bubble max-w-[85%] ${
        from === "me" ? "yankee-chat__bubble--you" : "yankee-chat__bubble--them"
      }`}
    >
      {children}
    </div>
  </motion.div>
);

export default ChatBubble;
