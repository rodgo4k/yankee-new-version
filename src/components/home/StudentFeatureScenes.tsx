import { useEffect, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BookOpen,
  Download,
  GraduationCap,
  Moon,
} from "lucide-react";
import PeopleCloseScene from "@/components/home/PeopleCloseScene";

const ease = [0.25, 0.4, 0.25, 1] as const;
const BLUE = "#2f6bff";
const GREEN = "#34c759";

const shell =
  "yankee-surface rounded-[1.5rem] bg-card border border-foreground/[0.06] overflow-hidden";

const ClassPanel = () => {
  const rooms = ["psych 101", "design", "crew"];
  const [n, setN] = useState(0);
  useEffect(() => {
    const id = window.setInterval(() => setN((v) => (v + 1) % (rooms.length + 1)), 900);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative h-[120px] flex flex-col items-center justify-center gap-1.5 px-4">
      {rooms.map((r, i) => (
        <motion.div
          key={r}
          animate={{
            opacity: i < n ? 1 : 0.2,
            x: i < n ? 0 : -6,
          }}
          className="w-full max-w-[140px] rounded-lg border border-foreground/10 bg-foreground/[0.04] px-2.5 py-1.5 flex items-center gap-2"
        >
          <BookOpen size={11} style={{ color: BLUE }} />
          <p className="text-[10px] lowercase text-foreground/70 truncate">{r}</p>
        </motion.div>
      ))}
    </div>
  );
};

const StudyPanel = () => {
  const [mins, setMins] = useState(180);
  const [on, setOn] = useState(false);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    setMins(180);
    setOn(false);
    const turnOn = window.setTimeout(() => setOn(true), 500);
    let left = 180;
    const tick = window.setInterval(() => {
      left -= 1;
      setMins(Math.max(0, left));
      if (left <= 174) clearInterval(tick);
    }, 400);
    const next = window.setTimeout(() => setCycle((c) => c + 1), 4200);
    return () => {
      clearTimeout(turnOn);
      clearInterval(tick);
      clearTimeout(next);
    };
  }, [cycle]);

  const hrs = Math.floor(mins / 60);
  const m = mins % 60;

  return (
    <div className="relative h-[120px] flex flex-col items-center justify-center gap-2">
      <motion.span
        animate={{ scale: on ? [1, 1.06, 1] : 1, rotate: on ? [-6, 6, -6] : 0 }}
        transition={{ duration: 2.4, repeat: Infinity }}
        className="w-11 h-11 rounded-full flex items-center justify-center"
        style={{ background: on ? BLUE : "rgba(0,0,0,0.12)", color: on ? "#fff" : "rgba(0,0,0,0.4)" }}
      >
        <Moon size={18} />
      </motion.span>
      <p className="text-[12px] font-semibold lowercase text-foreground">
        {on ? "study mode" : "ready"}
      </p>
      <p className="text-[10px] text-foreground/40 lowercase tabular-nums">
        {on ? `${hrs}h ${String(m).padStart(2, "0")}m left` : "snooze when you need"}
      </p>
    </div>
  );
};

const CampusPanel = () => {
  const [ok, setOk] = useState(false);
  useEffect(() => {
    const id = window.setInterval(() => setOk((v) => !v), 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative h-[120px] flex flex-col items-center justify-center gap-2">
      <AnimatePresence mode="wait">
        {!ok ? (
          <motion.div
            key="mail"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="flex flex-col items-center gap-2"
          >
            <span className="w-11 h-11 rounded-full bg-foreground/[0.08] border border-foreground/10 flex items-center justify-center text-foreground/55">
              <GraduationCap size={18} />
            </span>
            <p className="text-[10px] text-foreground/40 lowercase">verifying .edu…</p>
          </motion.div>
        ) : (
          <motion.div
            key="done"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center gap-2"
          >
            <span
              className="w-11 h-11 rounded-full flex items-center justify-center text-white"
              style={{ background: GREEN }}
            >
              <GraduationCap size={18} />
            </span>
            <p className="text-[10px] text-foreground/45 lowercase">campus unlocked</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ExportPanel = () => {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const loop = () => {
      setDone(false);
      return window.setTimeout(() => setDone(true), 1600);
    };
    let t = loop();
    const id = window.setInterval(() => {
      clearTimeout(t);
      t = loop();
    }, 3600);
    return () => {
      clearInterval(id);
      clearTimeout(t);
    };
  }, []);

  return (
    <div className="relative h-[120px] flex items-center justify-center">
      <AnimatePresence mode="wait">
        {!done ? (
          <motion.div
            key="pack"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex flex-col items-center gap-2"
          >
            <div className="flex gap-1">
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.12 }}
                  className="w-6 h-8 rounded-md bg-foreground/[0.08] border border-foreground/10"
                />
              ))}
            </div>
            <p className="text-[10px] text-foreground/40 lowercase">packing archive…</p>
          </motion.div>
        ) : (
          <motion.span
            key="ok"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-12 h-12 rounded-full flex items-center justify-center text-white"
            style={{ background: GREEN }}
          >
            <Download size={18} />
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
};

const ideaItems = [
  {
    title: "one room per class",
    text: "notes, questions and recordings stay in a capped, chronological room you can find when you are cramming.",
    Visual: ClassPanel,
  },
  {
    title: "study mode built in",
    text: "snooze the app for a set number of hours. only urgent dms and calls break through.",
    Visual: StudyPanel,
  },
  {
    title: "campus verified",
    text: "verify your student email. unlock study mode, campus rooms and student-only crowds.",
    Visual: CampusPanel,
  },
  {
    title: "yours after graduation",
    text: "export every message, file and thread. nothing is trapped inside a platform you leave behind.",
    Visual: ExportPanel,
  },
];

export const StudentIdeaScene = () => (
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

type MeansPhase = "class" | "focus" | "archive";
const meansPhases: MeansPhase[] = ["class", "focus", "archive"];
const MEANS_HOLD: Record<MeansPhase, number> = { class: 6800, focus: 6600, archive: 6400 };

const meansCopy: Record<MeansPhase, { kicker: string; title: ReactNode; body: string }> = {
  class: {
    kicker: "class first",
    title: (
      <>
        one room for each course,{" "}
        <span className="font-serif-display italic font-medium">not a noisy channel</span>
      </>
    ),
    body: "post notes, ask questions, share the recording link. each class room is capped, chronological and easy to find.",
  },
  focus: {
    kicker: "focus built in",
    title: (
      <>
        study mode on,{" "}
        <span className="font-serif-display italic font-medium">emergencies still through</span>
      </>
    ),
    body: "snooze the whole app for a set number of hours. your focus belongs to you.",
  },
  archive: {
    kicker: "yours after graduation",
    title: (
      <>
        your notes, <span className="font-serif-display italic font-medium">always portable</span>
      </>
    ),
    body: "export every message, file and thread when you graduate. nothing trapped inside a platform you no longer use.",
  },
};

export const StudentMeansScene = () => {
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
        <PeopleCloseScene />
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
    t: "verify with .edu",
    d: "confirm your student email. unlock study mode, campus rooms and student-only crowds.",
  },
  {
    n: "02",
    t: "join or start your rooms",
    d: "create rooms for courses, clubs, or your crew. invite people by link, phone or email.",
  },
  {
    n: "03",
    t: "study, chat, plan",
    d: "share notes, organize meetups, and turn on study mode when it is time to focus.",
  },
];

export const StudentStepsScene = () => {
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
