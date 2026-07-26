import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AiPhoneShell from "@/components/home/AiPhoneShell";
import {
  ChoosePhase,
  SessionPhase,
  InvitePhase,
  ContributePhase,
} from "@/components/home/AiSessionScene";
import {
  CollabPromptPhase,
  ResultPhase,
  CommandsPhase,
} from "@/components/home/AiCrowdScenes";

const ease = [0.25, 0.4, 0.25, 1] as const;

const trio = [
  { key: "session", label: "new session", rotate: -4 },
  { key: "invite", label: "invite + roles", rotate: 0 },
  { key: "contribute", label: "contributions", rotate: 4 },
] as const;

const renderTrioPhase = (key: (typeof trio)[number]["key"]) => {
  if (key === "session") return <SessionPhase />;
  if (key === "invite") return <InvitePhase />;
  return <ContributePhase />;
};

export const AiTrioScene = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setActive((a) => (a + 1) % 3), 3800);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative w-full">
      <div className="hidden md:flex items-end justify-center gap-3 lg:gap-5">
        {trio.map((p, i) => (
          <motion.div
            key={p.key}
            animate={{
              y: active === i ? -12 : 0,
              scale: active === i ? 1.04 : 0.92,
              opacity: active === i ? 1 : 0.55,
            }}
            transition={{ duration: 0.55, ease }}
            className="w-[210px] lg:w-[230px] shrink-0"
            style={{ zIndex: active === i ? 3 : 1 }}
          >
            <AiPhoneShell rotate={p.rotate} className="!w-full !max-w-none">
              <div
                key={active === i ? `${p.key}-play-${active}` : `${p.key}-idle`}
                className="h-full overflow-hidden"
              >
                {renderTrioPhase(p.key)}
              </div>
            </AiPhoneShell>
            <p className="mt-3 text-center text-[11px] text-foreground/45 lowercase">{p.label}</p>
          </motion.div>
        ))}
      </div>

      <div className="md:hidden">
        <AiPhoneShell>
          <AnimatePresence mode="wait">
            <motion.div
              key={trio[active].key}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35 }}
              className="h-full"
            >
              {renderTrioPhase(trio[active].key)}
            </motion.div>
          </AnimatePresence>
        </AiPhoneShell>
        <p className="mt-3 text-center text-[12px] text-foreground/45 lowercase">
          {trio[active].label}
        </p>
      </div>
    </div>
  );
};

export const AiChooseDemo = () => (
  <AiPhoneShell rotate={2}>
    <ChoosePhase />
  </AiPhoneShell>
);

export const AiInviteDemo = () => (
  <AiPhoneShell rotate={-2}>
    <InvitePhase />
  </AiPhoneShell>
);

export const AiContributeDemo = () => (
  <AiPhoneShell rotate={1.5}>
    <ContributePhase />
  </AiPhoneShell>
);

export const AiCollabDemo = () => (
  <AiPhoneShell rotate={-1.5}>
    <CollabPromptPhase />
  </AiPhoneShell>
);

export const AiResultDemo = () => (
  <AiPhoneShell rotate={2}>
    <ResultPhase />
  </AiPhoneShell>
);

export const AiCommandsDemo = () => (
  <AiPhoneShell rotate={-2}>
    <CommandsPhase />
  </AiPhoneShell>
);

const models = [
  { id: "gpt-4o", label: "gpt-4o" },
  { id: "claude", label: "claude" },
  { id: "gemini", label: "gemini" },
  { id: "local", label: "yankee local" },
];

export const AiModelsStrip = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setActive((a) => (a + 1) % models.length), 1600);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-2 md:gap-2.5">
      {models.map((m, i) => {
        const on = i === active;
        return (
          <motion.span
            key={m.id}
            animate={{
              scale: on ? 1.06 : 1,
              backgroundColor: on ? "hsl(var(--folk-bubble))" : "hsl(var(--card))",
              color: on ? "hsl(var(--folk-bubble-foreground))" : "hsl(var(--foreground) / 0.7)",
              boxShadow: on
                ? "0 12px 32px -12px rgba(37,99,235,0.55)"
                : "0 0 0 0 transparent",
            }}
            transition={{ duration: 0.4, ease }}
            className="yankee-surface yankee-surface--control inline-flex items-center rounded-full px-4 py-2 text-[13px] font-medium lowercase"
          >
            {m.label}
            {on && (
              <motion.span
                layoutId="model-dot"
                className="ml-2 w-1.5 h-1.5 rounded-full bg-white/90"
              />
            )}
          </motion.span>
        );
      })}
    </div>
  );
};
