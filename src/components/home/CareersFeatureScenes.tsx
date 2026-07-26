import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Eye, Globe2, Timer, Users } from "lucide-react";
import { YANKEE_MAILTO } from "@/lib/email";

const ease = [0.25, 0.4, 0.25, 1] as const;
const BLUE = "#2f6bff";
const GREEN = "#34c759";

const shell =
  "yankee-surface rounded-[1.5rem] bg-card border border-foreground/[0.06] overflow-hidden";

const AsyncPanel = () => {
  const hours = ["09:00", "14:00", "22:00"];
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = window.setInterval(() => setI((n) => (n + 1) % hours.length), 1400);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative h-[110px] flex flex-col items-center justify-center gap-2">
      <motion.span
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="w-10 h-10 rounded-full border border-dashed border-foreground/20 flex items-center justify-center text-foreground/55"
      >
        <Globe2 size={16} />
      </motion.span>
      <AnimatePresence mode="wait">
        <motion.p
          key={hours[i]}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          className="text-[13px] font-semibold tabular-nums text-foreground"
        >
          {hours[i]}
        </motion.p>
      </AnimatePresence>
      <p className="text-[10px] text-foreground/40 lowercase">your timezone · async</p>
    </div>
  );
};

const ScopePanel = () => {
  const faces = ["spec", "build", "ship"];
  const [n, setN] = useState(0);
  useEffect(() => {
    const id = window.setInterval(() => setN((v) => (v + 1) % (faces.length + 1)), 900);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative h-[110px] flex flex-col items-center justify-center gap-1.5 px-4">
      {faces.map((f, i) => (
        <motion.div
          key={f}
          animate={{ opacity: i < n ? 1 : 0.25, x: i < n ? 0 : -6 }}
          className="w-full max-w-[130px] rounded-lg border border-foreground/10 bg-foreground/[0.04] px-2.5 py-1.5 flex items-center gap-2"
        >
          <Users size={11} style={{ color: i < n ? BLUE : "rgba(0,0,0,0.3)" }} />
          <p className="text-[10px] lowercase text-foreground/65">{f}</p>
        </motion.div>
      ))}
    </div>
  );
};

const CyclePanel = () => {
  const [week, setWeek] = useState(1);
  useEffect(() => {
    const id = window.setInterval(() => setWeek((w) => (w >= 6 ? 1 : w + 1)), 700);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative h-[110px] flex flex-col items-center justify-center gap-2">
      <div className="flex gap-1">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.span
            key={i}
            animate={{
              backgroundColor: i < week ? BLUE : "rgba(0,0,0,0.08)",
              scale: i === week - 1 ? 1.15 : 1,
            }}
            className="w-2.5 h-2.5 rounded-full"
          />
        ))}
      </div>
      <motion.span
        animate={{ rotate: [0, -8, 8, 0] }}
        transition={{ duration: 2.4, repeat: Infinity }}
        className="w-10 h-10 rounded-full flex items-center justify-center text-white"
        style={{ background: BLUE }}
      >
        <Timer size={16} />
      </motion.span>
      <p className="text-[10px] text-foreground/40 lowercase tabular-nums">week {week} of 6</p>
    </div>
  );
};

const PayPanel = () => {
  const [reveal, setReveal] = useState(false);
  useEffect(() => {
    const id = window.setInterval(() => setReveal((v) => !v), 2400);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative h-[110px] flex flex-col items-center justify-center gap-2">
      <AnimatePresence mode="wait">
        {!reveal ? (
          <motion.div
            key="hide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, filter: "blur(4px)" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="w-10 h-10 rounded-full bg-foreground/[0.08] border border-foreground/10 flex items-center justify-center text-foreground/45">
              <Eye size={16} />
            </span>
            <p className="text-[10px] text-foreground/40 lowercase">opening bands…</p>
          </motion.div>
        ) : (
          <motion.div
            key="show"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center gap-1.5"
          >
            <span
              className="w-10 h-10 rounded-full flex items-center justify-center text-white"
              style={{ background: GREEN }}
            >
              <Eye size={16} />
            </span>
            <p className="text-[12px] font-semibold tabular-nums text-foreground">$140–180k</p>
            <p className="text-[10px] text-foreground/40 lowercase">public · no guessing</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const principles = [
  {
    bubble: "deep work over meetings",
    title: "remote, async first",
    desc: "one synchronous hour a day, at most. time zones are a feature, not a bug.",
    Visual: AsyncPanel,
  },
  {
    bubble: "own it end to end",
    title: "small teams, big scope",
    desc: "you'll own product areas from spec to on-call. no ticket farms.",
    Visual: ScopePanel,
  },
  {
    bubble: "cycles, not sprints",
    title: "ship in six weeks",
    desc: "everyone gets a real cooldown between cycles. burnout is not a badge.",
    Visual: CyclePanel,
  },
  {
    bubble: "bands are public",
    title: "compensation is open",
    desc: "salary bands are transparent inside and outside the company. no guessing.",
    Visual: PayPanel,
  },
];

export const CareersPrinciplesScene = () => (
  <div className="grid sm:grid-cols-2 gap-4">
    {principles.map((item, i) => {
      const Visual = item.Visual;
      return (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: i * 0.07, ease }}
          className={`${shell} p-5 md:p-6 flex flex-col`}
        >
          <span className="inline-flex self-start max-w-[95%] px-3.5 py-2 text-[13px] leading-snug lowercase rounded-2xl rounded-br-md text-white"
            style={{ background: BLUE }}
          >
            {item.bubble}
          </span>
          <div className="mt-3">
            <Visual />
          </div>
          <h3 className="mt-2 text-[16px] font-semibold lowercase tracking-tight text-foreground">
            {item.title}
          </h3>
          <p className="mt-2 text-[13px] text-muted-foreground leading-relaxed lowercase">{item.desc}</p>
        </motion.div>
      );
    })}
  </div>
);

const roles = [
  {
    title: "senior ios engineer",
    tag: "engineering",
    loc: "remote · americas / europe",
    desc: "swift, swiftui, deep experience with real-time and offline sync.",
    href: `${YANKEE_MAILTO}?subject=Senior%20iOS%20Engineer`,
  },
  {
    title: "product designer",
    tag: "design",
    loc: "remote · worldwide",
    desc: "systems, motion, taste. you draw on paper before you draw in figma.",
    href: `${YANKEE_MAILTO}?subject=Product%20Designer`,
  },
  {
    title: "backend engineer, feed",
    tag: "engineering",
    loc: "remote · americas / europe",
    desc: "go / rust. you've built ranking-free timelines at scale before.",
    href: `${YANKEE_MAILTO}?subject=Backend%20Engineer%20Feed`,
  },
];

export const CareersRolesScene = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setActive((n) => (n + 1) % roles.length), 3800);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="space-y-4">
      {roles.map((role, i) => {
        const on = i === active;
        return (
          <motion.a
            key={role.title}
            href={role.href}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.45, delay: i * 0.07, ease }}
            onMouseEnter={() => setActive(i)}
            animate={{
              borderColor: on ? "rgba(47,107,255,0.35)" : "rgba(0,0,0,0.06)",
              backgroundColor: on ? "rgba(47,107,255,0.03)" : "rgba(255,255,255,1)",
            }}
            className={`${shell} group block p-5 md:p-6 transition-colors`}
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <motion.span
                    animate={{
                      backgroundColor: on ? BLUE : "rgba(0,0,0,0.06)",
                      color: on ? "#fff" : "rgba(0,0,0,0.55)",
                    }}
                    className="inline-flex rounded-full px-2.5 py-0.5 text-[11px] font-medium lowercase"
                  >
                    {role.tag}
                  </motion.span>
                  <span className="text-[12px] text-muted-foreground lowercase">{role.loc}</span>
                </div>
                <h3 className="text-[18px] md:text-[20px] font-semibold lowercase tracking-tight text-foreground group-hover:underline underline-offset-4 decoration-2">
                  {role.title}
                </h3>
                <p className="mt-2 text-[14px] text-muted-foreground leading-relaxed lowercase max-w-xl">
                  {role.desc}
                </p>
                <div className="mt-3 h-1 rounded-full bg-foreground/[0.06] overflow-hidden max-w-xs">
                  <motion.div
                    animate={{ width: on ? "100%" : "0%" }}
                    transition={{ duration: 3.4, ease: "linear" }}
                    className="h-full rounded-full"
                    style={{ background: BLUE }}
                  />
                </div>
              </div>
              <motion.span
                animate={{
                  backgroundColor: on ? BLUE : "rgba(0,0,0,0.06)",
                  color: on ? "#fff" : "rgba(0,0,0,0.7)",
                }}
                className="inline-flex items-center gap-1.5 self-start shrink-0 rounded-full px-4 py-2 text-[13px] font-medium lowercase"
              >
                apply{" "}
                <ArrowUpRight
                  size={14}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </motion.span>
            </div>
          </motion.a>
        );
      })}
    </div>
  );
};
