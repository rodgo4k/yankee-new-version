import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Check, Split } from "lucide-react";
import smallTeamCollab from "@/assets/small-team-collab.jpg";

const ease = [0.25, 0.4, 0.25, 1] as const;

const rooms = [
  { name: "design · sprint", meta: "capped at 8", status: "open" },
  { name: "launch war room", meta: "12 members", status: "active" },
  { name: "standup", meta: "ready to split", status: "split" },
  { name: "company feed", meta: "chronological", status: "live" },
];

const TeamHeroScene = () => {
  const [active, setActive] = useState(0);
  const [focus, setFocus] = useState(false);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    setActive(0);
    setFocus(false);
    const timers: number[] = [];

    rooms.forEach((_, i) => {
      timers.push(window.setTimeout(() => setActive(i + 1), 400 + i * 480));
    });
    timers.push(window.setTimeout(() => setFocus(true), 400 + rooms.length * 480 + 500));
    timers.push(
      window.setTimeout(() => setCycle((c) => c + 1), 400 + rooms.length * 480 + 2800),
    );

    return () => timers.forEach(clearTimeout);
  }, [cycle]);

  return (
    <div className="relative w-full max-w-[460px] mx-auto">
      <div className="grid grid-cols-12 gap-3 items-stretch">
        <motion.div
          initial={{ opacity: 0, y: 28, rotate: -2 }}
          animate={{ opacity: 1, y: 0, rotate: -1.5 }}
          transition={{ duration: 0.7, ease }}
          className="col-span-7 relative rounded-[1.5rem] border-2 border-foreground overflow-hidden shadow-[6px_6px_0_0_hsl(var(--foreground))] min-h-[280px] md:min-h-[340px]"
        >
          <img
            src={smallTeamCollab}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
            <span className="rounded-full border-2 border-white/70 bg-black/25 backdrop-blur-sm px-2.5 py-1 text-[11px] text-white lowercase">
              workspace
            </span>
            <motion.span
              initial={false}
              animate={{ opacity: focus ? 1 : 0 }}
              className="rounded-full bg-[#3DDC97] px-2.5 py-1 text-[11px] font-medium text-foreground lowercase"
            >
              focus on
            </motion.span>
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <p className="font-serif-display italic text-[1.25rem] md:text-[1.4rem] text-white leading-tight lowercase">
              quieter than slack.
            </p>
            <p className="mt-1.5 text-[11px] text-white/70 lowercase">sharper than email.</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.12, ease }}
          className="col-span-5 rounded-[1.5rem] border-2 border-foreground bg-card p-3 md:p-4 shadow-[5px_5px_0_0_hsl(var(--foreground))] flex flex-col"
        >
          <p className="text-[11px] text-foreground/50 lowercase px-1 mb-3">rooms</p>
          <div className="flex-1 flex flex-col gap-2">
            {rooms.map((r, i) => {
              const on = i < active;
              return (
                <motion.div
                  key={r.name}
                  initial={false}
                  animate={{
                    opacity: on ? 1 : 0.35,
                    x: on ? 0 : 6,
                  }}
                  transition={{ duration: 0.35, ease }}
                  className={`rounded-xl border-2 border-foreground px-2.5 py-2 ${
                    on && r.status === "split"
                      ? "bg-[#5B9CFF] text-white"
                      : on
                        ? "bg-[#E8E6E1]"
                        : "bg-background"
                  }`}
                >
                  <div className="flex items-center justify-between gap-1">
                    <p className="text-[11px] md:text-[12px] font-semibold lowercase truncate">{r.name}</p>
                    {on && r.status === "split" ? (
                      <Split size={11} />
                    ) : on ? (
                      <Check size={11} />
                    ) : (
                      <span className="w-3 h-3 rounded-full border-2 border-foreground/20" />
                    )}
                  </div>
                  <p
                    className={`mt-0.5 text-[10px] lowercase ${
                      on && r.status === "split" ? "text-white/80" : "text-foreground/50"
                    }`}
                  >
                    {r.meta}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-3 flex justify-end"
      >
        <div className="rounded-2xl rounded-br-md bg-[#5B9CFF] px-3.5 py-2.5 text-[12px] md:text-[13px] leading-snug text-white lowercase shadow-[3px_3px_0_0_hsl(var(--foreground))] max-w-[90%]">
          only urgent mentions break through
        </div>
      </motion.div>
    </div>
  );
};

export default TeamHeroScene;
