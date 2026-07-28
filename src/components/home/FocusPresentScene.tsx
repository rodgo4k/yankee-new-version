import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
  Send,
  Sparkles,
  Square,
  Terminal,
  X,
} from "lucide-react";
import AiPhoneShell from "@/components/home/AiPhoneShell";
import illuConversational from "@/assets/yankee/illu-conversational.png";
import illuTerminal from "@/assets/yankee/illu-terminal.png";

const ease = [0.25, 0.4, 0.25, 1] as const;
const BLUE = "#2f6bff";
const GREEN = "#34c759";

type Phase = "picker" | "empty" | "stream" | "terminal";
const phases: Phase[] = ["picker", "empty", "stream", "terminal"];
const HOLD: Record<Phase, number> = {
  picker: 4600,
  empty: 5000,
  stream: 5800,
  terminal: 7200,
};

const PickerPhase = () => {
  const [picked, setPicked] = useState<"conversational" | "terminal">("conversational");

  return (
    <motion.div
      key="picker"
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -16 }}
      transition={{ duration: 0.35, ease }}
      className="flex flex-col h-full min-h-0 px-[18px] pt-1 pb-1"
    >
      <div className="shrink-0">
        <h3 className="text-[24px] font-semibold text-white tracking-tight leading-[1.15]">
          Choose your interface
        </h3>
        <p className="mt-2 text-[13px] text-[#8e8e93] leading-snug">
          You can switch later in Settings.
        </p>
      </div>

      <div className="mt-6 flex flex-col gap-3">
        <button
          type="button"
          onClick={() => setPicked("conversational")}
          className="w-full text-left rounded-[20px] border-[1.5px] bg-[#1c1c1e] pl-3 pr-3.5 py-3 flex items-center gap-3 transition-colors"
          style={{
            borderColor: picked === "conversational" ? BLUE : "transparent",
          }}
        >
          <img
            src={illuConversational}
            alt=""
            className="w-[72px] h-[48px] rounded-[12px] object-cover object-center shrink-0"
          />
          <span className="min-w-0 flex-1 py-0.5">
            <span className="block text-[15px] font-semibold text-white leading-tight tracking-tight">
              Conversational
            </span>
            <span className="mt-1 block text-[12px] font-normal text-[#8e8e93] leading-[1.35]">
              Bubbles, sources, suggested prompts. Recommended.
            </span>
          </span>
        </button>

        <button
          type="button"
          onClick={() => setPicked("terminal")}
          className="w-full text-left rounded-[20px] border-[1.5px] border-transparent bg-[#1c1c1e] pl-3 pr-3.5 py-3 flex items-center gap-3 transition-colors"
          style={{
            borderColor: picked === "terminal" ? BLUE : "transparent",
          }}
        >
          <img
            src={illuTerminal}
            alt=""
            className="w-[72px] h-[51px] rounded-[12px] object-cover object-center shrink-0"
          />
          <span className="min-w-0 flex-1 py-0.5">
            <span className="block text-[15px] font-semibold text-white leading-tight tracking-tight">
              Terminal
            </span>
            <span className="mt-1 block text-[12px] font-normal text-[#8e8e93] leading-[1.35]">
              Mono font, raw output, MCP tools visible. For devs.
            </span>
          </span>
        </button>
      </div>

      <div className="mt-auto shrink-0 pb-1">
        <button
          type="button"
          className="w-full rounded-full py-[14px] text-[15px] font-semibold text-white"
          style={{ background: BLUE }}
        >
          Continue
        </button>
        <p className="mt-3.5 text-center text-[13px] text-white/85 font-medium">Decide later</p>
      </div>
    </motion.div>
  );
};

const EmptyPhase = () => {
  const [showPrompts, setShowPrompts] = useState(0);

  useEffect(() => {
    const timers = [
      window.setTimeout(() => setShowPrompts(1), 500),
      window.setTimeout(() => setShowPrompts(2), 850),
      window.setTimeout(() => setShowPrompts(3), 1200),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const prompts = [
    "Summarize what my Connections posted today",
    "What's trending in the Boston Runners Crowd?",
    "Help me write a Notion about my run",
  ];

  return (
    <motion.div
      key="empty"
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -16 }}
      transition={{ duration: 0.35, ease }}
      className="relative flex flex-col h-full min-h-0"
    >
      <div className="flex items-center gap-2.5 px-3.5 shrink-0 mb-2">
        <span
          className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
          style={{ background: "rgba(47,107,255,0.2)" }}
        >
          <Sparkles size={13} style={{ color: BLUE }} />
        </span>
        <div className="flex-1 min-w-0">
          <p className="text-[13px] font-semibold text-white leading-none">Yankee AI</p>
          <p className="text-[10px] text-white/40 mt-0.5">App context</p>
        </div>
        <X size={16} className="text-white/70 shrink-0" strokeWidth={2.2} />
      </div>

      <div className="flex-1 min-h-0 flex flex-col items-center justify-center px-4 pb-20">
        <motion.div
          animate={{
            boxShadow: [
              "0 0 0 0 rgba(47,107,255,0.0)",
              "0 0 28px 4px rgba(47,107,255,0.35)",
              "0 0 0 0 rgba(47,107,255,0.0)",
            ],
          }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="w-14 h-14 rounded-full flex items-center justify-center"
          style={{ background: "radial-gradient(circle, rgba(47,107,255,0.45) 0%, rgba(47,107,255,0.08) 70%)" }}
        >
          <Sparkles size={22} style={{ color: BLUE }} />
        </motion.div>
        <p className="mt-4 text-[18px] font-semibold text-white tracking-tight">Ask anything</p>
        <p className="mt-1 text-[11px] text-white/40 text-center leading-snug max-w-[22ch]">
          Crowds, Connections, posts, Notions — all in scope.
        </p>

        <div className="mt-5 w-full flex flex-col gap-2">
          {prompts.map((p, i) =>
            showPrompts > i ? (
              <motion.div
                key={p}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-full bg-[#1c1c1e] border border-white/[0.08] px-3.5 py-2.5 text-[11px] text-white/80 text-center leading-snug"
              >
                {p}
              </motion.div>
            ) : null,
          )}
        </div>
      </div>

      <div className="absolute bottom-3 inset-x-3 flex items-center gap-2">
        <span className="rounded-full bg-[#1c1c1e] border border-white/[0.08] px-2.5 py-1.5 text-[10px] font-medium text-white/70 shrink-0">
          App
        </span>
        <div className="flex-1 rounded-full bg-[#1c1c1e] border border-white/[0.1] px-3.5 py-2.5 text-[12px] text-white/35 truncate">
          Ask Yankee AI...
        </div>
        <span
          className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
          style={{ background: BLUE }}
        >
          <Send size={14} className="text-white" />
        </span>
      </div>
    </motion.div>
  );
};

const StreamPhase = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [
      window.setTimeout(() => setStep(1), 280),
      window.setTimeout(() => setStep(2), 900),
      window.setTimeout(() => setStep(3), 1600),
      window.setTimeout(() => setStep(4), 2300),
      window.setTimeout(() => setStep(5), 3100),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const answer =
    "Three threads from the last 24h are pulling traction: Blue Hills meetup proposal, a tempo vs zone-2 debate, and a recovery question from @maya_reed.";

  return (
    <motion.div
      key="stream"
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -16 }}
      transition={{ duration: 0.35, ease }}
      className="relative flex flex-col h-full min-h-0"
    >
      <div className="flex items-center gap-2 px-3.5 mb-3 shrink-0">
        <ChevronLeft size={18} className="text-white/70 shrink-0" strokeWidth={2.2} />
        <div className="flex-1 min-w-0 text-center px-1">
          <p className="text-[13px] font-semibold text-white leading-none">Yankee AI</p>
          <div className="mt-1 flex items-center justify-center gap-1.5 flex-wrap">
            <span
              className="rounded-[4px] px-1 py-px text-[8px] font-bold text-white uppercase"
              style={{ background: BLUE }}
            >
              AI
            </span>
            <p className="text-[9px] text-white/40 truncate">Crowd · Boston Runners · 47 members</p>
          </div>
        </div>
        <MoreHorizontal size={16} className="text-white/55 shrink-0" />
      </div>

      <div className="flex-1 min-h-0 overflow-hidden px-3.5 pb-16 flex flex-col gap-2.5">
        {step >= 1 && (
          <motion.div
            initial={{ opacity: 0, y: 10, x: 14 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            className="flex justify-end"
          >
            <span
              className="max-w-[82%] rounded-2xl rounded-br-md px-3 py-2 text-[12px] text-white leading-snug"
              style={{ background: BLUE }}
            >
              What&apos;s trending in this Crowd?
            </span>
          </motion.div>
        )}

        {step >= 2 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="self-start max-w-[92%] rounded-2xl rounded-bl-md bg-[#1c1c1e] border border-white/[0.06] px-3 py-2.5"
          >
            <p className="text-[12px] text-white/90 leading-snug">
              {step >= 3 ? answer : answer.slice(0, 72)}
              {step < 3 && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.55, repeat: Infinity }}
                  className="inline-block w-[1.5px] h-[11px] bg-white/70 align-[-1px] ml-0.5"
                />
              )}
            </p>
            {step < 4 && (
              <p className="mt-2 text-[10px] text-white/35">Thinking...</p>
            )}
          </motion.div>
        )}

        {step >= 4 && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-nowrap items-center gap-1.5 overflow-hidden"
          >
            {["POST Blue Hills meetup", "POST @maya_reed recovery"].map((chip) => (
              <span
                key={chip}
                className="shrink-0 rounded-full bg-[#1c1c1e] border border-white/[0.1] px-2 py-1 text-[8px] text-white/65 font-medium whitespace-nowrap"
              >
                {chip}
              </span>
            ))}
          </motion.div>
        )}

        {step >= 5 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl bg-[#1c1c1e] border border-white/[0.12] px-3 py-2.5"
          >
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-[5px] bg-white/10 flex items-center justify-center shrink-0">
                <Terminal size={11} className="text-white/80" />
              </span>
              <p className="flex-1 font-mono text-[10px] text-white/85 truncate">crowd.get_posts</p>
              <span className="text-[10px] font-medium" style={{ color: BLUE }}>
                - running
              </span>
            </div>
            <p className="mt-1 font-mono text-[9px] text-white/35">querying Crowd: boston-runners</p>
          </motion.div>
        )}
      </div>

      <div className="absolute bottom-3 inset-x-3 flex items-center gap-2">
        <span className="rounded-full bg-[#1c1c1e] border border-white/[0.08] px-2.5 py-1.5 text-[10px] font-medium text-white/70 shrink-0">
          Crowd
        </span>
        <div className="flex-1 rounded-full bg-[#1c1c1e] border border-white/[0.1] px-3.5 py-2.5 text-[12px] text-white/35">
          Thinking...
        </div>
        <span
          className="w-9 h-9 rounded-[10px] flex items-center justify-center shrink-0"
          style={{ background: BLUE }}
        >
          <Square size={12} className="text-white fill-white" />
        </span>
      </div>
    </motion.div>
  );
};

const TerminalPhase = () => {
  const [lines, setLines] = useState(0);

  useEffect(() => {
    const timers = Array.from({ length: 12 }, (_, i) =>
      window.setTimeout(() => setLines(i + 1), 280 + i * 380),
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  const show = (n: number) => lines >= n;

  return (
    <motion.div
      key="terminal"
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -16 }}
      transition={{ duration: 0.35, ease }}
      className="relative flex flex-col h-full min-h-0"
    >
      <div className="relative flex items-center justify-center px-3.5 mb-2.5 shrink-0 min-h-[36px]">
        <X size={16} className="absolute left-3.5 text-white/85" strokeWidth={2.2} />
        <div className="text-center">
          <p className="text-[14px] font-semibold text-white leading-none">Yankee AI</p>
          <p className="mt-1 text-[11px] text-white/40 leading-none">terminal</p>
        </div>
      </div>

      <div className="px-3.5 mb-3 shrink-0 flex justify-center">
        <span className="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1"
          style={{ borderColor: "rgba(47,107,255,0.65)" }}
        >
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: GREEN }} />
          <span className="text-[10px] text-white/80 tracking-tight">
            claude · BYOK · 4.2k ctx
          </span>
        </span>
      </div>

      <div className="flex-1 min-h-0 overflow-hidden px-3.5 pb-16 font-mono text-[10px] leading-[1.55]">
        {show(1) && (
          <p className="text-white/35 italic">
            // session started · claude-sonnet-4-6 · 5 MCP tools available
          </p>
        )}

        {show(2) && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-2.5 text-white flex items-start gap-2"
          >
            <span className="flex-1 min-w-0">list_my_crowds</span>
            <ChevronRight size={12} className="text-white/35 shrink-0 mt-0.5" />
          </motion.p>
        )}

        {show(3) && (
          <p className="mt-1">
            <span style={{ color: GREEN }}>$ crowd.list_my</span>
            <span className="text-white"> → 4 results</span>
          </p>
        )}

        {show(4) && (
          <div className="mt-1 text-white/70 space-y-0.5">
            <p>- Boston Runners <span className="text-white/35">(owner, 142 members)</span></p>
            {show(5) && (
              <p>- Product Design NYC <span className="text-white/35">(member, 1.2k members)</span></p>
            )}
            {show(6) && (
              <p>- Malibu Surf <span className="text-white/35">(member, 88 members)</span></p>
            )}
            {show(7) && (
              <p>- Coffee Club <span className="text-white/35">(owner, 23 members)</span></p>
            )}
          </div>
        )}

        {show(8) && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-3 text-white flex items-start gap-2"
          >
            <span className="flex-1 min-w-0">summarize today in Product Design NYC</span>
            <ChevronRight size={12} className="text-white/35 shrink-0 mt-0.5" />
          </motion.p>
        )}

        {show(9) && (
          <p className="mt-1">
            <span style={{ color: GREEN }}>$ </span>
            <span className="text-white">crowd.get_posts crowd=design-nyc · since=24h</span>
          </p>
        )}

        {show(10) && (
          <p className="mt-1 text-white/80">18 posts · 7 threads · 2 events upcoming.</p>
        )}

        {show(11) && (
          <p className="mt-2.5 text-white/35 italic">// Streaming response...</p>
        )}

        {show(12) && (
          <motion.p
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-1.5 text-white leading-relaxed"
          >
            Two themes today: a) Figma plugin API gotchas and b) honest case-study writeups. Want a
            deeper dive on either?
          </motion.p>
        )}
      </div>

      <div className="absolute bottom-3 inset-x-3 flex items-center gap-2">
        <div className="flex-1 rounded-full bg-[#1c1c1e] border border-white/[0.1] px-3.5 py-2.5 flex items-center gap-1.5 font-mono text-[12px]">
          <span className="text-white/50">&gt;</span>
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.7, repeat: Infinity }}
            className="inline-block w-[7px] h-[13px] bg-white/80"
          />
        </div>
        <span
          className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
          style={{ background: BLUE }}
        >
          <Send size={14} className="text-white" />
        </span>
      </div>
    </motion.div>
  );
};

const defaultLabels: Record<Phase, string> = {
  picker: "01 · choose interface",
  empty: "02 · ask with context",
  stream: "03 · answers with sources",
  terminal: "04 · terminal mode",
};

export const YankeeAiPhone = ({
  className = "",
  rotate = 1.5,
  labels = defaultLabels,
}: {
  className?: string;
  rotate?: number;
  labels?: Record<Phase, string>;
}) => {
  const [i, setI] = useState(0);
  const phase = phases[i];

  useEffect(() => {
    const id = window.setTimeout(() => setI((n) => (n + 1) % phases.length), HOLD[phase]);
    return () => clearTimeout(id);
  }, [phase, i]);

  return (
    <div className={`w-[280px] sm:w-[300px] shrink-0 ${className}`}>
      <AiPhoneShell className="!w-full !max-w-none" rotate={rotate}>
        <AnimatePresence mode="wait">
          {phase === "picker" && <PickerPhase key="picker" />}
          {phase === "empty" && <EmptyPhase key="empty" />}
          {phase === "stream" && <StreamPhase key="stream" />}
          {phase === "terminal" && <TerminalPhase key="terminal" />}
        </AnimatePresence>
      </AiPhoneShell>
      <p className="mt-4 text-center text-[12px] text-foreground/45 lowercase tracking-tight">
        {labels[phase]}
      </p>
    </div>
  );
};

const FocusPresentScene = ({ className = "" }: { className?: string }) => (
  <YankeeAiPhone className={className} />
);

export default FocusPresentScene;
