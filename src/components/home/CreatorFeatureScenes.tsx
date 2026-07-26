import { useEffect, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Ban,
  Bell,
  DollarSign,
  Download,
  Eye,
  Globe,
  Heart,
  MapPin,
  MessageCircle,
  MoreVertical,
  Radio,
  Users,
} from "lucide-react";
import AiPhoneShell from "@/components/home/AiPhoneShell";
import YankeePhoneNav from "@/components/home/YankeePhoneNav";
import { faceFor, uniqueFacesFor } from "@/lib/crowdFaces";
import cafeFriends from "@/assets/cafe-friends.jpg";

const ease = [0.25, 0.4, 0.25, 1] as const;
const BLUE = "#2f6bff";
const GREEN = "#34c759";
const RED = "#ff453a";

const shell =
  "yankee-surface rounded-[1.5rem] bg-card border border-foreground/[0.06] overflow-hidden";

const ReachPanel = () => {
  const [n, setN] = useState(0);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    setN(0);
    let v = 0;
    const id = window.setInterval(() => {
      v += 5;
      if (v >= 100) {
        setN(100);
        clearInterval(id);
      } else setN(v);
    }, 35);
    const next = window.setTimeout(() => setCycle((c) => c + 1), 4200);
    return () => {
      clearInterval(id);
      clearTimeout(next);
    };
  }, [cycle]);

  return (
    <div className="relative h-[120px] flex flex-col items-center justify-center gap-2">
      <motion.span
        animate={{ scale: [1, 1.06, 1] }}
        transition={{ duration: 2.4, repeat: Infinity }}
        className="w-11 h-11 rounded-full flex items-center justify-center text-white"
        style={{ background: BLUE }}
      >
        <Eye size={18} />
      </motion.span>
      <p className="text-[20px] font-semibold tabular-nums text-foreground">{n}%</p>
      <p className="text-[10px] text-foreground/40 lowercase">followers reached</p>
    </div>
  );
};

const NoTaxPanel = () => (
  <div className="relative h-[120px] flex items-center justify-center">
    <motion.div
      animate={{ rotate: [0, -6, 6, 0] }}
      transition={{ duration: 3.2, repeat: Infinity }}
      className="relative"
    >
      <span className="w-12 h-12 rounded-full bg-foreground/[0.06] border border-foreground/10 flex items-center justify-center text-foreground/60">
        <Ban size={20} />
      </span>
      <motion.span
        animate={{ scaleX: [0, 1], opacity: [0, 1] }}
        transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 1.6 }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-[2px] origin-center rounded-full"
        style={{ background: RED, rotate: -28 }}
      />
    </motion.div>
  </div>
);

const CrowdsPanel = () => (
  <div className="relative h-[120px] flex items-center justify-center">
    {[0, 1, 2].map((i) => (
      <motion.span
        key={i}
        animate={{ y: [0, -6, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.25 }}
        className="w-9 h-9 -ml-2 first:ml-0 rounded-full border-2 border-card flex items-center justify-center text-white text-[11px] font-semibold"
        style={{ background: [BLUE, "#4a6fa5", GREEN][i], zIndex: 3 - i }}
      >
        {["M", "C", "L"][i]}
      </motion.span>
    ))}
    <Users size={14} className="absolute bottom-4 text-foreground/35" />
  </div>
);

const ArchivePanel = () => {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const loop = () => {
      setDone(false);
      const t = window.setTimeout(() => setDone(true), 1600);
      return t;
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

const dealItems = [
  {
    title: "every follower, every time",
    text: "what you post reaches everyone who follows you. no quiet demotion, no auction for your own audience.",
    Visual: ReachPanel,
  },
  {
    title: "no algorithm tax",
    text: "chronological delivery. yankee does not bury your work to sell boosts back to you.",
    Visual: NoTaxPanel,
  },
  {
    title: "crowds that stay human",
    text: "grow rooms that cap and split on purpose. conversations stay grounded, not stadium-sized.",
    Visual: CrowdsPanel,
  },
  {
    title: "you own the archive",
    text: "export posts, replies and metrics any time. leave with your work if you ever need to.",
    Visual: ArchivePanel,
  },
];

export const CreatorDealScene = () => (
  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
    {dealItems.map((item, i) => {
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

type MeansPhase = "reach" | "stats" | "archive";
const meansPhases: MeansPhase[] = ["reach", "stats", "archive"];
const MEANS_HOLD: Record<MeansPhase, number> = { reach: 5800, stats: 5600, archive: 5600 };

const meansCopy: Record<MeansPhase, { kicker: string; title: ReactNode; body: string }> = {
  reach: {
    kicker: "complete reach",
    title: (
      <>
        post once. <span className="font-serif-display italic font-medium">reach every follower.</span>
      </>
    ),
    body: "your people chose to follow you. yankee makes sure they see what you make, without ranking games in the middle.",
  },
  stats: {
    kicker: "honest numbers",
    title: (
      <>
        views, saves, replies. <span className="font-serif-display italic font-medium">nothing vanity.</span>
      </>
    ),
    body: "simple delivery stats you can trust. no dopamine graphs, no mystery engagement score.",
  },
  archive: {
    kicker: "portable work",
    title: (
      <>
        your archive, <span className="font-serif-display italic font-medium">always exportable</span>
      </>
    ),
    body: "download every post, metric and reply. your content is yours, not locked inside rules that change overnight.",
  },
};

const Avatar = ({ src, size, badge }: { src: string; size: number; badge?: boolean }) => (
  <span
    className="relative inline-flex shrink-0 rounded-full overflow-hidden bg-[#2a2a2c]"
    style={{ width: size, height: size, minWidth: size }}
  >
    <img src={src} alt="" className="absolute inset-0 w-full h-full object-cover" />
    {badge && (
      <span
        className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full border-2 border-black"
        style={{ background: BLUE }}
      />
    )}
  </span>
);

const CreatorFeedPhone = () => {
  const paityn = faceFor("Paityn Franci");
  const emily = faceFor("Emily Carter");
  const self = faceFor("Mia Taylor");
  const viewers = uniqueFacesFor(["Maya Reed", "Chris Parker", "Leo Hart"]);
  const [step, setStep] = useState(0);
  const [views, setViews] = useState(4800);

  useEffect(() => {
    const timers = [1, 2, 3, 4].map((n, i) => window.setTimeout(() => setStep(n), 220 + i * 400));
    return () => timers.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    if (step < 2) return;
    const id = window.setInterval(() => {
      setViews((v) => (v >= 5300 ? 5300 : v + 18));
    }, 50);
    return () => clearInterval(id);
  }, [step]);

  return (
    <div className="w-[280px] sm:w-[300px] shrink-0">
      <AiPhoneShell className="!w-full !max-w-none" rotate={-1.5}>
        <div className="relative flex flex-col h-full min-h-0">
          <div className="px-3.5 flex items-center gap-2.5 mb-3 shrink-0">
            <Globe size={15} className="text-white/70" />
            <Radio size={15} className="text-white/70" />
            <p className="flex-1 text-center font-serif-display italic text-[18px] text-white tracking-tight">
              Yankee
            </p>
            <Bell size={15} className="text-white/70" />
            <Avatar src={self} size={26} />
          </div>

          <div className="px-3.5 flex-1 min-h-0 flex flex-col pb-16">
            {step >= 1 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2.5 mb-2.5 shrink-0"
              >
                <Avatar src={paityn} size={36} />
                <div className="flex-1 min-w-0">
                  <p className="text-[13px] font-semibold text-white truncate">Paityn Franci</p>
                  <p className="text-[10px] text-white/40">Posted 24 minutes ago.</p>
                </div>
                <Heart size={15} className="text-white/55" />
                <span className="w-6 h-6 rounded-full border border-white/25 flex items-center justify-center text-white/55">
                  <DollarSign size={11} />
                </span>
                <MoreVertical size={14} className="text-white/45" />
              </motion.div>
            )}

            {step >= 2 && (
              <motion.div
                initial={{ opacity: 0, y: 18, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                className="relative flex-1 min-h-[220px] rounded-[1.35rem] overflow-hidden"
              >
                <img src={cafeFriends} alt="" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/75" />
                <div className="absolute top-2.5 left-2.5 right-2.5 flex items-start justify-between gap-2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-black/45 backdrop-blur-sm px-2 py-1 text-[9px] text-white/90">
                    <MapPin size={10} style={{ color: BLUE }} />
                    Massachusetts | Boston
                  </span>
                  <motion.span
                    animate={{ scale: views >= 5300 ? [1, 1.06, 1] : 1 }}
                    transition={{ duration: 0.8, repeat: views >= 5300 ? Infinity : 0 }}
                    className="inline-flex items-center gap-1 rounded-full bg-black/45 backdrop-blur-sm pl-1 pr-2 py-1"
                  >
                    <span className="flex -space-x-1.5">
                      {viewers.map((v) => (
                        <Avatar key={v} src={v} size={14} />
                      ))}
                    </span>
                    <span className="text-[9px] text-white/90 font-medium tabular-nums">
                      {views.toLocaleString("en-US")}
                    </span>
                  </motion.span>
                </div>

                {step >= 3 && (
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute bottom-2.5 left-2.5 right-2.5"
                  >
                    <p className="text-[11px] text-white leading-snug mb-0.5">
                      I never tire of admiring this view before going to work. What do you think guys?
                    </p>
                    <p className="text-[10px] text-white/55 mb-2">#let&apos;s go #excited</p>
                    {step >= 4 && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="rounded-2xl bg-black/45 backdrop-blur-md border border-white/10 px-2.5 py-2 flex items-center gap-2"
                      >
                        <Avatar src={emily} size={28} badge />
                        <div className="flex-1 min-w-0">
                          <p className="text-[10px] font-semibold text-white">Emily Carter</p>
                          <p className="text-[10px] text-white/65 truncate">This was smooth. Loved it.</p>
                        </div>
                        <MessageCircle size={14} className="text-white/55 shrink-0" />
                      </motion.div>
                    )}
                  </motion.div>
                )}
              </motion.div>
            )}
          </div>
          <YankeePhoneNav active="create" />
        </div>
      </AiPhoneShell>
      <p className="mt-4 text-center text-[12px] text-foreground/45 lowercase tracking-tight">
        every follower gets the post
      </p>
    </div>
  );
};

export const CreatorMeansScene = () => {
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
        <CreatorFeedPhone />
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
    t: "set up your profile",
    d: "claim your name, pin a few posts, and invite the people who already care about your work.",
  },
  {
    n: "02",
    t: "post to your people",
    d: "ship to all followers, a crowd, or close friends. one composer, clear audience every time.",
  },
  {
    n: "03",
    t: "see real delivery",
    d: "watch reached, opened and replies without vanity math. then keep making the next thing.",
  },
];

export const CreatorStepsScene = () => {
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
