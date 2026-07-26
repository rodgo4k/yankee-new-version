import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  Clock,
  Globe2,
  Handshake,
  LifeBuoy,
  Newspaper,
} from "lucide-react";
import { Link } from "react-router-dom";

const ease = [0.25, 0.4, 0.25, 1] as const;
const BLUE = "#2f6bff";
const GREEN = "#34c759";

const shell =
  "yankee-surface rounded-[1.5rem] bg-card border border-foreground/[0.06] overflow-hidden";

const PartnershipsPanel = () => {
  const [n, setN] = useState(0);
  const tags = ["brands", "creators", "crowds"];
  useEffect(() => {
    const id = window.setInterval(() => setN((v) => (v + 1) % tags.length), 1200);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative h-[100px] flex flex-col items-center justify-center gap-2">
      <motion.span
        animate={{ scale: [1, 1.06, 1] }}
        transition={{ duration: 2.4, repeat: Infinity }}
        className="w-10 h-10 rounded-full flex items-center justify-center text-white"
        style={{ background: BLUE }}
      >
        <Handshake size={16} />
      </motion.span>
      <AnimatePresence mode="wait">
        <motion.p
          key={tags[n]}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          className="text-[11px] lowercase text-foreground/50"
        >
          with {tags[n]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
};

const PressPanel = () => {
  const [pulse, setPulse] = useState(false);
  useEffect(() => {
    const id = window.setInterval(() => setPulse((v) => !v), 1800);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative h-[100px] flex flex-col items-center justify-center gap-2">
      <motion.span
        animate={{ y: pulse ? [-2, 0, -2] : 0 }}
        transition={{ duration: 1.2, repeat: Infinity }}
        className="w-10 h-10 rounded-full flex items-center justify-center text-white"
        style={{ background: BLUE }}
      >
        <Newspaper size={16} />
      </motion.span>
      <motion.span
        animate={{ opacity: pulse ? 1 : 0.35, scale: pulse ? 1 : 0.95 }}
        className="inline-flex items-center gap-1.5 rounded-full border border-foreground/10 px-2.5 py-1 text-[10px] lowercase text-foreground/55"
      >
        <span className="w-1.5 h-1.5 rounded-full" style={{ background: GREEN }} />
        reply in hours
      </motion.span>
    </div>
  );
};

const SupportPanel = () => {
  const [ok, setOk] = useState(false);
  useEffect(() => {
    const id = window.setInterval(() => setOk((v) => !v), 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative h-[100px] flex items-center justify-center">
      <AnimatePresence mode="wait">
        {!ok ? (
          <motion.div
            key="ask"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="flex flex-col items-center gap-2"
          >
            <span className="w-10 h-10 rounded-full bg-foreground/[0.08] border border-foreground/10 flex items-center justify-center text-foreground/50">
              <LifeBuoy size={16} />
            </span>
            <p className="text-[10px] text-foreground/40 lowercase">routing to a human…</p>
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
              className="w-10 h-10 rounded-full flex items-center justify-center text-white"
              style={{ background: GREEN }}
            >
              <LifeBuoy size={16} />
            </span>
            <p className="text-[10px] text-foreground/45 lowercase">real person · online</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const CareersPanel = () => {
  const [n, setN] = useState(0);
  useEffect(() => {
    const id = window.setInterval(() => setN((v) => (v + 1) % 4), 900);
    return () => clearInterval(id);
  }, []);
  const roles = ["ios", "design", "backend"];

  return (
    <div className="relative h-[100px] flex flex-col items-center justify-center gap-1.5 px-3">
      <span
        className="w-9 h-9 rounded-full flex items-center justify-center text-white mb-0.5"
        style={{ background: BLUE }}
      >
        <Briefcase size={15} />
      </span>
      {roles.map((r, i) => (
        <motion.span
          key={r}
          animate={{ opacity: i < n ? 1 : 0.2, x: i < n ? 0 : -4 }}
          className="text-[10px] lowercase text-foreground/55"
        >
          {r} · open
        </motion.span>
      ))}
    </div>
  );
};

const helps = [
  {
    bubble: "collabs welcome",
    t: "partnerships",
    d: "brands, creators or crowds interested in collaborating with us.",
    Visual: PartnershipsPanel,
  },
  {
    bubble: "we reply fast",
    t: "press",
    d: "interviews, coverage requests or background on the company.",
    Visual: PressPanel,
  },
  {
    bubble: "real humans",
    t: "support",
    d: "trouble with your account, a bug, or a moderation question.",
    Visual: SupportPanel,
  },
  {
    bubble: "we're hiring",
    t: "careers",
    d: "engineering, design and community roles. come build with us.",
    Visual: CareersPanel,
  },
];

export const ContactHelpScene = () => (
  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
    {helps.map((item, i) => {
      const Visual = item.Visual;
      return (
        <motion.div
          key={item.t}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: i * 0.07, ease }}
          className={`${shell} p-5 flex flex-col`}
        >
          <span
            className="inline-flex self-start px-3.5 py-2 text-[13px] leading-snug lowercase rounded-2xl rounded-br-md text-white"
            style={{ background: BLUE }}
          >
            {item.bubble}
          </span>
          <div className="mt-3">
            <Visual />
          </div>
          <h3 className="mt-2 text-[16px] font-semibold lowercase tracking-tight text-foreground">
            {item.t}
          </h3>
          <p className="mt-2 text-[13px] text-muted-foreground leading-relaxed lowercase">{item.d}</p>
        </motion.div>
      );
    })}
  </div>
);

const OfficePanel = () => {
  const zones = ["americas", "europe", "asia"];
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = window.setInterval(() => setI((n) => (n + 1) % zones.length), 1600);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative h-[120px] flex flex-col items-center justify-center gap-3">
      <motion.span
        animate={{ rotate: 360 }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
        className="w-12 h-12 rounded-full border border-dashed border-foreground/20 flex items-center justify-center text-foreground/55"
      >
        <Globe2 size={18} />
      </motion.span>
      <div className="flex gap-1.5">
        {zones.map((z, idx) => (
          <motion.span
            key={z}
            animate={{
              backgroundColor: idx === i ? BLUE : "rgba(0,0,0,0.06)",
              color: idx === i ? "#fff" : "rgba(0,0,0,0.45)",
            }}
            className="rounded-full px-2.5 py-1 text-[10px] lowercase font-medium"
          >
            {z}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

const ResponsePanel = () => {
  const [hrs, setHrs] = useState(48);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    setHrs(48);
    let v = 48;
    const id = window.setInterval(() => {
      v -= 2;
      if (v <= 0) {
        setHrs(0);
        clearInterval(id);
      } else setHrs(v);
    }, 50);
    const next = window.setTimeout(() => setCycle((c) => c + 1), 3800);
    return () => {
      clearInterval(id);
      clearTimeout(next);
    };
  }, [cycle]);

  return (
    <div className="relative h-[120px] flex flex-col items-center justify-center gap-2">
      <motion.span
        animate={{ scale: [1, 1.06, 1] }}
        transition={{ duration: 2.2, repeat: Infinity }}
        className="w-11 h-11 rounded-full flex items-center justify-center text-white"
        style={{ background: hrs === 0 ? GREEN : BLUE }}
      >
        <Clock size={18} />
      </motion.span>
      <p className="text-[22px] font-semibold tabular-nums text-foreground">
        {hrs === 0 ? "< 1" : hrs}
        <span className="text-[14px] font-medium text-foreground/40">h</span>
      </p>
      <p className="text-[10px] text-foreground/40 lowercase">
        {hrs === 0 ? "urgent · escalated" : "typical reply window"}
      </p>
    </div>
  );
};

export const ContactMetaScene = () => (
  <div className="grid md:grid-cols-2 gap-4">
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease }}
      className={`${shell} p-7 md:p-8 flex flex-col`}
    >
      <OfficePanel />
      <p className="mt-2 font-serif-display italic text-[1.1rem] text-foreground/45 lowercase leading-none">
        office
      </p>
      <h3 className="mt-2 text-2xl md:text-3xl font-semibold lowercase tracking-tight text-foreground">
        global · remote-first
      </h3>
      <p className="mt-3 text-[14px] text-muted-foreground leading-relaxed lowercase">
        the yankee team is distributed across three continents. we publish our current locations in the careers listings.
      </p>
      <Link
        to="/careers"
        className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-medium lowercase text-foreground underline underline-offset-4 decoration-2"
      >
        see careers <ArrowRight size={13} />
      </Link>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: 0.08, ease }}
      className={`${shell} p-7 md:p-8 flex flex-col`}
    >
      <ResponsePanel />
      <p className="mt-2 font-serif-display italic text-[1.1rem] text-foreground/45 lowercase leading-none">
        response time
      </p>
      <h3 className="mt-2 text-2xl md:text-3xl font-semibold lowercase tracking-tight text-foreground">
        under 48 hours
      </h3>
      <p className="mt-3 text-[14px] text-muted-foreground leading-relaxed lowercase">
        every email is triaged the same day it arrives. if it&apos;s urgent — a moderation issue or a security report — we escalate immediately.
      </p>
    </motion.div>
  </div>
);
