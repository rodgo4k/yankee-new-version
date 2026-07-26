import { useEffect, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Calendar,
  Shield,
  Split,
  Users,
} from "lucide-react";
import CrowdFeelScene from "@/components/home/CrowdFeelScene";
import { uniqueFacesFor } from "@/lib/crowdFaces";

const ease = [0.25, 0.4, 0.25, 1] as const;
const BLUE = "#2f6bff";
const GREEN = "#34c759";

const shell =
  "yankee-surface rounded-[1.5rem] bg-card border border-foreground/[0.06] overflow-hidden";

const CapPanel = () => {
  const [n, setN] = useState(0);
  const [cycle, setCycle] = useState(0);
  const cap = 48;

  useEffect(() => {
    setN(0);
    let v = 0;
    const id = window.setInterval(() => {
      v += 2;
      if (v >= cap) {
        setN(cap);
        clearInterval(id);
      } else setN(v);
    }, 45);
    const next = window.setTimeout(() => setCycle((c) => c + 1), 4000);
    return () => {
      clearInterval(id);
      clearTimeout(next);
    };
  }, [cycle]);

  return (
    <div className="relative h-[120px] flex flex-col items-center justify-center gap-2">
      <div className="w-[70%] h-2 rounded-full bg-foreground/[0.06] overflow-hidden">
        <motion.div
          animate={{ width: `${(n / cap) * 100}%` }}
          className="h-full rounded-full"
          style={{ background: BLUE }}
        />
      </div>
      <p className="text-[18px] font-semibold tabular-nums text-foreground">
        {n}
        <span className="text-foreground/35 font-medium">/{cap}</span>
      </p>
      <p className="text-[10px] text-foreground/40 lowercase">
        {n >= cap ? "ready to split" : "filling the room"}
      </p>
    </div>
  );
};

const ModsPanel = () => {
  const faces = uniqueFacesFor(["Mia Taylor", "Ethan Carter", "Ava Nguyen"]);
  return (
    <div className="relative h-[120px] flex items-center justify-center">
      <motion.span
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 2.4, repeat: Infinity }}
        className="absolute w-10 h-10 rounded-full flex items-center justify-center text-white z-10"
        style={{ background: BLUE }}
      >
        <Shield size={16} />
      </motion.span>
      {faces.map((src, i) => {
        const angle = -55 + i * 55;
        const x = Math.cos((angle * Math.PI) / 180) * 44;
        const y = Math.sin((angle * Math.PI) / 180) * 30;
        return (
          <span key={src} className="absolute" style={{ transform: `translate(${x}px, ${y}px)` }}>
            <motion.span
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.2 }}
              className="block w-8 h-8 rounded-full overflow-hidden border-2 border-card bg-[#2a2a2c]"
            >
              <img src={src} alt="" className="w-full h-full object-cover" />
            </motion.span>
          </span>
        );
      })}
    </div>
  );
};

const MeetupPanel = () => {
  const [going, setGoing] = useState(8);
  useEffect(() => {
    const id = window.setInterval(() => {
      setGoing((n) => (n >= 18 ? 8 : n + 1));
    }, 700);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative h-[120px] flex flex-col items-center justify-center gap-2">
      <motion.span
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 2.2, repeat: Infinity }}
        className="w-11 h-11 rounded-full flex items-center justify-center text-white"
        style={{ background: BLUE }}
      >
        <Calendar size={18} />
      </motion.span>
      <p className="text-[13px] font-semibold lowercase text-foreground">photo walk</p>
      <p className="text-[10px] text-foreground/40 lowercase tabular-nums">{going} going · saturday</p>
    </div>
  );
};

const SplitPanel = () => {
  const [split, setSplit] = useState(false);
  useEffect(() => {
    const id = window.setInterval(() => setSplit((v) => !v), 2400);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative h-[120px] flex items-center justify-center">
      <AnimatePresence mode="wait">
        {!split ? (
          <motion.div
            key="one"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85, x: -20 }}
            className="flex flex-col items-center gap-2"
          >
            <span className="w-14 h-10 rounded-xl bg-foreground/[0.08] border border-foreground/10 flex items-center justify-center">
              <Users size={16} className="text-foreground/50" />
            </span>
            <p className="text-[10px] text-foreground/40 lowercase">one room · full</p>
          </motion.div>
        ) : (
          <motion.div
            key="two"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2"
          >
            {["nyc", "london"].map((city, i) => (
              <motion.span
                key={city}
                initial={{ x: i === 0 ? 12 : -12, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="w-12 h-10 rounded-xl bg-foreground/[0.08] border border-foreground/10 flex flex-col items-center justify-center"
              >
                <Split size={12} style={{ color: BLUE }} />
                <p className="text-[8px] text-foreground/45 lowercase mt-0.5">{city}</p>
              </motion.span>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      {split && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute bottom-3 w-5 h-5 rounded-full flex items-center justify-center text-white"
          style={{ background: GREEN }}
        >
          <Split size={10} />
        </motion.span>
      )}
    </div>
  );
};

const ideaItems = [
  {
    title: "capped by design",
    text: "every crowd stays at a size that keeps conversations real. when it fills, yankee suggests a natural split.",
    Visual: CapPanel,
  },
  {
    title: "owned by members",
    text: "volunteer mods from the crowd set the tone. reports are private and handled the same day.",
    Visual: ModsPanel,
  },
  {
    title: "meetups built in",
    text: "photo walks, book clubs, dinners. one tap rsvp and a reminder before you leave.",
    Visual: MeetupPanel,
  },
  {
    title: "split, don't sprawl",
    text: "when a room grows, it becomes two rooms. nobody gets lost in a stadium chat.",
    Visual: SplitPanel,
  },
];

export const CommunityIdeaScene = () => (
  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
    {ideaItems.map((item, i) => {
      const Visual = item.Visual;
      return (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: i * 0.07, ease }}
          className={`${shell} p-5 flex flex-col`}
        >
          <Visual />
          <h3 className="mt-2 text-[15px] font-semibold lowercase tracking-tight text-foreground">
            {item.title}
          </h3>
          <p className="mt-2 text-[13px] text-muted-foreground leading-relaxed lowercase">{item.text}</p>
        </motion.div>
      );
    })}
  </div>
);

type MeansPhase = "size" | "mods" | "meet";
const meansPhases: MeansPhase[] = ["size", "mods", "meet"];
const MEANS_HOLD: Record<MeansPhase, number> = { size: 6800, mods: 7000, meet: 7200 };

const meansCopy: Record<MeansPhase, { kicker: string; title: ReactNode; body: string }> = {
  size: {
    kicker: "capped by design",
    title: (
      <>
        rooms that stay at the{" "}
        <span className="font-serif-display italic font-medium">right size</span>
      </>
    ),
    body: "every crowd caps at a number that keeps conversations real. when it fills, yankee suggests a natural split.",
  },
  mods: {
    kicker: "owned by members",
    title: (
      <>
        moderation by the{" "}
        <span className="font-serif-display italic font-medium">people who show up</span>
      </>
    ),
    body: "volunteer mods from the crowd set the tone. reports are private, handled fast, never by a faceless policy team.",
  },
  meet: {
    kicker: "from thread to table",
    title: (
      <>
        meetups that <span className="font-serif-display italic font-medium">actually happen</span>
      </>
    ),
    body: "every crowd has a quiet calendar. one tap rsvp and a reminder before you leave.",
  },
};

export const CommunityMeansScene = () => {
  const [i, setI] = useState(0);
  const phase = meansPhases[i];
  const copy = meansCopy[phase];

  useEffect(() => {
    const id = window.setTimeout(() => setI((n) => (n + 1) % meansPhases.length), MEANS_HOLD[phase]);
    return () => clearTimeout(id);
  }, [phase, i]);

  return (
    <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
      <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center lg:justify-start">
        <CrowdFeelScene />
      </div>
      <div className="lg:col-span-7 order-1 lg:order-2">
        <div className="flex gap-1.5 mb-5">
          {meansPhases.map((p, idx) => (
            <motion.span
              key={p}
              animate={{
                width: idx === i ? 18 : 6,
                backgroundColor: idx === i ? BLUE : "rgba(0,0,0,0.14)",
              }}
              className="h-1 rounded-full"
            />
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={phase}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease }}
          >
            <p className="font-serif-display italic text-[1.15rem] text-foreground/50 lowercase leading-none">
              {copy.kicker}
            </p>
            <h3 className="mt-3 text-[26px] md:text-[32px] font-semibold leading-[1.05] tracking-tight lowercase text-foreground max-w-[16ch]">
              {copy.title}
            </h3>
            <p className="mt-4 text-[15px] text-muted-foreground leading-relaxed lowercase max-w-md">
              {copy.body}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

const layerSteps = [
  {
    n: "01",
    t: "start your crowd",
    d: "pick a topic, a city, or a vibe. set the cap and the tone. your room is private until you invite people.",
  },
  {
    n: "02",
    t: "invite your people",
    d: "send a simple link. they join with their phone number. no public profile needed.",
  },
  {
    n: "03",
    t: "meet, chat, repeat",
    d: "host threads and events. when the room grows, split it naturally so conversations stay close.",
  },
];

export const CommunityStepsScene = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setActive((n) => (n + 1) % layerSteps.length), 3400);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="grid md:grid-cols-12 gap-6 items-center">
      <div className="md:col-span-5 relative h-[280px] flex items-center justify-center">
        {layerSteps.map((s, i) => {
          const offset = (i - active + layerSteps.length) % layerSteps.length;
          return (
            <motion.div
              key={s.n}
              animate={{
                y: offset * 18,
                scale: 1 - offset * 0.06,
                opacity: offset > 2 ? 0 : 1 - offset * 0.25,
                zIndex: 10 - offset,
              }}
              transition={{ duration: 0.55, ease }}
              className="absolute w-[78%] max-w-[260px] rounded-[1.35rem] border border-foreground/10 bg-card p-5 shadow-[0_18px_50px_-28px_rgba(0,0,0,0.45)]"
            >
              <span
                className="inline-flex w-8 h-8 rounded-full items-center justify-center text-white text-[11px] font-semibold"
                style={{ background: BLUE }}
              >
                {s.n}
              </span>
              <p className="mt-3 text-[14px] font-semibold lowercase text-foreground">{s.t}</p>
              <div className="mt-3 h-1.5 rounded-full bg-foreground/[0.06] overflow-hidden">
                <motion.div
                  animate={{ width: offset === 0 ? "100%" : "0%" }}
                  transition={{ duration: 3, ease: "linear" }}
                  className="h-full rounded-full"
                  style={{ background: BLUE }}
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="md:col-span-7 space-y-3">
        {layerSteps.map((s, i) => (
          <motion.button
            key={s.n}
            type="button"
            onClick={() => setActive(i)}
            animate={{
              borderColor: i === active ? "rgba(47,107,255,0.35)" : "rgba(0,0,0,0.06)",
              backgroundColor: i === active ? "rgba(47,107,255,0.04)" : "rgba(255,255,255,1)",
            }}
            className={`${shell} w-full text-left p-5 transition-colors`}
          >
            <p className="font-serif-display italic text-[1.15rem] text-foreground/45 leading-none">{s.n}</p>
            <h3 className="mt-2 text-[16px] font-semibold lowercase tracking-tight text-foreground">{s.t}</h3>
            <p className="mt-1.5 text-[13px] text-muted-foreground leading-relaxed lowercase">{s.d}</p>
          </motion.button>
        ))}
      </div>
    </div>
  );
};
