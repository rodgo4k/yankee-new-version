import { cn } from "@/lib/utils";

export type AppChatMessage = {
  from: "you" | "them";
  text: string;
};

type AppChatProps = {
  messages: AppChatMessage[];
  className?: string;
};

const AppChat = ({ messages, className }: AppChatProps) => (
  <div className={cn("yankee-chat", className)}>
    {messages.map((m, j) => (
      <div key={j} className={`flex ${m.from === "you" ? "justify-end" : "justify-start"}`}>
        <span
          className={`yankee-chat__bubble ${
            m.from === "you" ? "yankee-chat__bubble--you" : "yankee-chat__bubble--them"
          }`}
        >
          {m.text}
        </span>
      </div>
    ))}
  </div>
);

export default AppChat;
