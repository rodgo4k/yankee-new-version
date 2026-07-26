import { YankeeAiPhone } from "@/components/home/FocusPresentScene";

const MemoryPhoneScene = ({ className = "" }: { className?: string }) => (
  <YankeeAiPhone
    className={className}
    rotate={1.5}
    labels={{
      hello: "ask once · it remembers",
      chat: "private memory · only you",
      image: "months of context",
    }}
  />
);

export default MemoryPhoneScene;
