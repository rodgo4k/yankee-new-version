import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import AiPhoneShell from "@/components/home/AiPhoneShell";
import profileView from "@/assets/yankee/profile-view.png";
import profileEditPink from "@/assets/yankee/profile-edit-pink.png";

const ease = [0.25, 0.4, 0.25, 1] as const;
const GREEN = "#34c759";
const INK = "#3c2830";

type Phase = "view" | "edit";
const phases: Phase[] = ["view", "edit"];
const HOLD: Record<Phase, number> = { view: 5600, edit: 6800 };
const labels: Record<Phase, string> = {
  view: "your profile, your rules",
  edit: "change what they see",
};

const ViewPhase = () => (
  <motion.img
    key="view"
    src={profileView}
    alt=""
    initial={{ opacity: 0, scale: 1.02 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.99 }}
    transition={{ duration: 0.4, ease }}
    className="absolute inset-0 w-full h-full object-cover object-top"
  />
);

const EditPhase = () => {
  const [toast, setToast] = useState(false);

  useEffect(() => {
    setToast(false);
    const timers = [
      window.setTimeout(() => setToast(true), 700),
      window.setTimeout(() => setToast(false), 5200),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <motion.div
      key="edit"
      initial={{ opacity: 0, scale: 1.02 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.99 }}
      transition={{ duration: 0.4, ease }}
      className="absolute inset-0 overflow-hidden"
    >
      <img
        src={profileEditPink}
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-top"
      />

      <AnimatePresence>
        {toast && (
          <div className="absolute inset-x-3 top-[52%] z-20 flex justify-center pointer-events-none">
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.35, ease }}
              className="inline-flex max-w-full items-center gap-2 rounded-full bg-white/92 backdrop-blur-md border border-white/80 px-3 py-2 shadow-lg"
            >
              <span
                className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                style={{ background: GREEN }}
              >
                <Check size={11} className="text-white" strokeWidth={3} />
              </span>
              <p className="text-[11px] font-semibold whitespace-nowrap" style={{ color: INK }}>
                Pink theme applied
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const PrivacyStayYoursScene = ({ className = "" }: { className?: string }) => {
  const [i, setI] = useState(0);
  const phase = phases[i];

  useEffect(() => {
    const id = window.setTimeout(() => setI((n) => (n + 1) % phases.length), HOLD[phase]);
    return () => clearTimeout(id);
  }, [phase, i]);

  return (
    <div className={`w-[280px] sm:w-[300px] shrink-0 ${className}`}>
      <AiPhoneShell className="!w-full !max-w-none" rotate={1.5} bleed light>
        <AnimatePresence mode="wait">
          {phase === "view" && <ViewPhase key="view" />}
          {phase === "edit" && <EditPhase key="edit" />}
        </AnimatePresence>
      </AiPhoneShell>
      <p className="mt-4 text-center text-[12px] text-foreground/45 lowercase tracking-tight">
        {labels[phase]}
      </p>
    </div>
  );
};

export default PrivacyStayYoursScene;
