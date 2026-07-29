import { useEffect, useRef, useState, type CSSProperties } from "react";
import { AnimatePresence, motion, animate } from "framer-motion";
import {
  ArrowLeft,
  Bell,
  Calendar,
  ChevronRight,
  CircleAlert,
  Hand,
  Heart,
  MapPin,
  MessageCircle,
  Mic,
  MicOff,
  Phone,
  Plus,
  Search,
  Smile,
  Sparkles,
  StickyNote,
  SwitchCamera,
  TriangleAlert,
  Video,
  X,
} from "lucide-react";
import AiPhoneShell from "@/components/home/AiPhoneShell";
import { faceFor, uniqueFacesFor } from "@/lib/crowdFaces";
import cafeFriends from "@/assets/cafe-friends.jpg";
import filmNight from "@/assets/film-night.png";
import studentsHero from "@/assets/students-hero.jpg";
import mapsChillinDrink from "@/assets/yankee/maps-chillin-drink.png";
import mapsNycBg from "@/assets/yankee/maps-nyc-bg.png";
import spinEmily from "@/assets/yankee/spin-emily.png";
import spinSelf from "@/assets/yankee/spin-self.png";
import spinGuy from "@/assets/yankee/spin-guy.png";
import spinNeon from "@/assets/yankee/spin-neon.png";

const ease = [0.25, 0.4, 0.25, 1] as const;
const BLUE = "#2f6bff";
const RED = "#ff453a";

/* â”€â”€â”€ shared bits â”€â”€â”€ */

const usePhaseCycle = <T extends string>(phases: T[], hold: Record<T, number>) => {
  const [i, setI] = useState(0);
  const phase = phases[i];
  useEffect(() => {
    const id = window.setTimeout(() => setI((n) => (n + 1) % phases.length), hold[phase]);
    return () => clearTimeout(id);
  }, [phase, i, hold, phases.length]);
  return phase;
};

const PhoneWrap = ({
  children,
  label,
  rotate = -1.5,
  light = false,
  bleed = false,
}: {
  children: React.ReactNode;
  label: string;
  rotate?: number;
  light?: boolean;
  bleed?: boolean;
}) => (
  <div className="w-[280px] sm:w-[300px] shrink-0">
    <AiPhoneShell className="!w-full !max-w-none" rotate={rotate} light={light} bleed={bleed}>
      {children}
    </AiPhoneShell>
    <p className="mt-4 text-center text-[12px] text-foreground/45 lowercase tracking-tight">{label}</p>
  </div>
);

const Avatar = ({ src, size, className = "" }: { src: string; size: number; className?: string }) => (
  <span
    className={`relative inline-flex shrink-0 rounded-full overflow-hidden bg-[#2a2a2c] ${className}`}
    style={{ width: size, height: size, minWidth: size }}
  >
    <img src={src} alt="" className="absolute inset-0 w-full h-full object-cover" />
  </span>
);



/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   SPIN â€” mode / filter / sign / friend / matching / meet / grid
   â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */

type SpinPhase = "mode" | "filter" | "sign" | "friend" | "matching" | "meet" | "grid";
const spinPhases: SpinPhase[] = ["mode", "filter", "sign", "friend", "matching", "meet", "grid"];
const spinHold: Record<SpinPhase, number> = {
  mode: 4200,
  filter: 5600,
  sign: 5400,
  friend: 5200,
  matching: 4800,
  meet: 5000,
  grid: 5200,
};

const SpinTabs = ({ active = "Spin" }: { active?: string }) => (
  <div className="inline-flex rounded-full bg-[#1c1c1e] p-0.5 border border-white/[0.06]">
    {["Chats", "Request", "Spin"].map((t) => (
      <span
        key={t}
        className={`rounded-full px-2.5 py-1 text-[9px] font-semibold ${
          t === active ? "bg-white text-black" : "text-white/40"
        }`}
      >
        {t}
      </span>
    ))}
  </div>
);

const ModePhase = () => {
  const [mode, setMode] = useState<"Facetime" | "Chat">("Facetime");
  useEffect(() => {
    const t = window.setTimeout(() => setMode("Chat"), 1800);
    const t2 = window.setTimeout(() => setMode("Facetime"), 3200);
    return () => {
      clearTimeout(t);
      clearTimeout(t2);
    };
  }, []);

  return (
    <motion.div
      key="mode"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      className="flex flex-col h-full min-h-0 px-3.5"
    >
      <div className="flex items-center justify-between mb-3 shrink-0">
        <ArrowLeft size={15} className="text-white/50" />
        <SpinTabs />
        <span className="w-4" />
      </div>
      <div className="flex-1 flex flex-col items-center justify-center min-h-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={mode}
            initial={{ opacity: 0, rotateY: 40, scale: 0.94 }}
            animate={{ opacity: 1, rotateY: 0, scale: 1 }}
            exit={{ opacity: 0, rotateY: -40, scale: 0.94 }}
            transition={{ duration: 0.45, ease }}
            className="relative w-full rounded-[1.4rem] overflow-hidden aspect-[4/5] border border-white/10"
          >
            <img
              src={mode === "Facetime" ? studentsHero : cafeFriends}
              alt=""
              className="absolute inset-0 w-full h-full object-cover scale-110 blur-[2px] opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
              <span
                className="w-12 h-12 rounded-full flex items-center justify-center mb-3"
                style={{ background: "rgba(47,107,255,0.25)", color: BLUE }}
              >
                {mode === "Facetime" ? <Video size={22} /> : <MessageCircle size={22} />}
              </span>
              <p className="text-[22px] font-semibold text-white tracking-tight">{mode}</p>
              <p className="mt-1.5 text-[11px] text-white/55 leading-snug max-w-[180px]">
                {mode === "Facetime"
                  ? "Select a videochat mode to match new friends."
                  : "Select a chat group mode to match new friends."}
              </p>
            </div>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 inline-flex rounded-full bg-black/55 border border-white/15 p-1 gap-1">
              <span
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  mode === "Facetime" ? "bg-white text-black" : "text-white/50"
                }`}
              >
                <Video size={13} />
              </span>
              <span
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  mode === "Chat" ? "bg-white text-black" : "text-white/50"
                }`}
              >
                <MessageCircle size={13} />
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div
        className="mt-3 mb-1 rounded-full py-3 text-center text-[13px] font-semibold text-white shrink-0"
        style={{ background: BLUE }}
      >
        Continue
      </div>
    </motion.div>
  );
};

const FilterPhase = () => {
  const [amount, setAmount] = useState(1);
  const [miles, setMiles] = useState(25);
  const [age, setAge] = useState(18);

  useEffect(() => {
    const a = animate(1, 4, {
      duration: 2.0,
      ease: "easeInOut",
      onUpdate: (v) => setAmount(Math.round(v)),
    });
    const b = animate(25, 50, {
      duration: 2.2,
      ease: "easeInOut",
      onUpdate: (v) => setMiles(Math.round(v)),
    });
    const c = animate(18, 57, {
      duration: 2.4,
      ease: "easeInOut",
      onUpdate: (v) => setAge(Math.round(v)),
    });
    return () => {
      a.stop();
      b.stop();
      c.stop();
    };
  }, []);

  const Row = ({ label, value }: { label: string; value: string }) => (
    <div className="rounded-xl bg-[#141416] border border-white/[0.06] px-3 py-2 flex items-center justify-between gap-2">
      <p className="text-[11px] text-white/70 truncate">{label}</p>
      <span className="inline-flex items-center gap-0.5 text-[11px] text-white/45 shrink-0">
        {value}
        <ChevronRight size={12} strokeWidth={2} className="text-white/35" />
      </span>
    </div>
  );

  const SliderRow = ({
    label,
    valueLabel,
    pct,
    leftMark,
    rightMark,
  }: {
    label: string;
    valueLabel: string;
    pct: number;
    leftMark: string;
    rightMark: string;
  }) => (
    <div className="rounded-xl bg-[#141416] border border-white/[0.06] px-3 py-2.5">
      <div className="flex justify-between text-[10px] text-white/50 mb-2">
        <span>{label}</span>
        <span className="text-white font-semibold">{valueLabel}</span>
      </div>
      <div className="h-1 rounded-full bg-white/10 relative">
        <motion.div
          className="absolute left-0 top-0 h-full rounded-full bg-white"
          style={{ width: `${pct}%` }}
        />
        <motion.span
          className="absolute top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-white shadow"
          style={{ left: `calc(${pct}% - 7px)` }}
        />
      </div>
      <div className="mt-1.5 flex justify-between text-[9px] text-white/30">
        <span>{leftMark}</span>
        <span>{rightMark}</span>
      </div>
    </div>
  );

  return (
    <motion.div
      key="filter"
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -16 }}
      className="flex flex-col h-full min-h-0 px-3.5"
    >
      <div className="relative flex flex-col items-center mb-2 shrink-0 pt-0.5">
        <ArrowLeft size={15} className="absolute left-0 top-1 text-white/50" />
        <p className="text-[15px] font-semibold text-white tracking-tight">Filter Spin</p>
        <p className="text-[10px] text-white/40">Filter your preferences to get the best match.</p>
      </div>
      <div className="flex-1 min-h-0 overflow-y-auto space-y-2 pr-0.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <p className="text-[10px] font-medium text-white/40">About match</p>
        <Row label="Topic" value="Random" />
        <Row label="What I'm looking for..." value="New friends" />
        <SliderRow
          label="Amount"
          valueLabel={`1-${amount}`}
          pct={((amount - 1) / 3) * 100}
          leftMark="1"
          rightMark="4"
        />
        <Row label="Language" value="Global" />
        <Row label="Location" value="Random" />
        <SliderRow
          label="Miles"
          valueLabel={`25-${miles} mi`}
          pct={((miles - 25) / 75) * 100}
          leftMark="25 mi"
          rightMark="100 mi"
        />

        <p className="text-[10px] font-medium text-white/40 pt-1">About Spinners</p>
        <Row label="Gender" value="Random" />
        <SliderRow
          label="Age"
          valueLabel={`18-${age}`}
          pct={((age - 18) / 62) * 100}
          leftMark="18"
          rightMark="80"
        />
        <Row label="Sign" value="Random" />
        <Row label="Spin with a friend" value="@sophymartin" />
      </div>
      <div
        className="mt-2 mb-1 rounded-full py-3 text-center text-[13px] font-semibold text-white shrink-0"
        style={{ background: BLUE }}
      >
        Match Spin
      </div>
    </motion.div>
  );
};

const SpinRings = () => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const COUNT = 16;

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const nodes = Array.from(wrap.children) as HTMLElement[];
    let raf = 0;
    let offset = 0;
    let last = performance.now();

    const paint = (o: number) => {
      for (let i = 0; i < COUNT; i++) {
        let u = (i / COUNT) * 2 - 1 + o;
        if (u > 1) u -= 2;
        if (u < -1) u += 2;
        const absU = Math.abs(u);
        // Fake 3D (parent phone transform flattens real rotateY):
        // center = edge-on (tiny scaleX), edges = face-on (full oval).
        const face = Math.pow(absU, 0.85);
        const scaleX = 0.07 + face * 0.93;
        const h = 74;
        const w = h * 0.72;
        const t = absU;
        const r = Math.round(130 + (16 - 130) * t);
        const g = Math.round(210 + (32 - 210) * t);
        const b = Math.round(255 + (118 - 255) * t);
        const color = `rgb(${r},${g},${b})`;
        const el = nodes[i];
        el.style.width = `${w}px`;
        el.style.height = `${h}px`;
        el.style.background = color;
        el.style.boxShadow = `0 0 ${8 + face * 14}px ${color}99`;
        // scaleX simulates the turn toward the camera at the sides
        el.style.transform = `translate(-50%, -50%) translateX(${u * 112}px) scaleX(${scaleX.toFixed(3)})`;
        el.style.zIndex = String(Math.round((1 - absU) * 200));
        el.style.opacity = String(0.38 + (1 - absU) * 0.62);
      }
    };

    paint(0);

    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      offset = (offset + dt * 0.18) % 2;
      paint(offset);
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div ref={wrapRef} className="relative w-full h-[96px] max-w-[260px] mx-auto overflow-visible">
      {Array.from({ length: COUNT }, (_, i) => (
        <span
          key={i}
          className="absolute top-1/2 left-1/2 rounded-full will-change-transform"
          style={{ width: 52, height: 74, background: "#5aa8ff" }}
        />
      ))}
    </div>
  );
};

const MatchingPhase = () => {
  return (
    <motion.div
      key="matching"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col h-full min-h-0 px-3.5"
    >
      <div className="relative flex flex-col items-center justify-center mb-1 shrink-0 pt-0.5">
        <ArrowLeft size={15} className="absolute left-0 top-1 text-white/55" strokeWidth={1.75} />
        <p className="text-[13px] font-semibold text-white">Random&apos;s Spin</p>
        <p className="text-[10px] text-white/40 mt-0.5">Wait a minute, don&apos;t close the app.</p>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center min-h-0">
        <SpinRings />
        <p className="mt-7 text-[14px] font-semibold text-white">Match Spinners...</p>
        <p className="text-[11px] text-white/40 mt-1">0/1</p>
      </div>
      <div className="shrink-0 flex items-center gap-2 pb-1 pt-2">
        <span className="w-8 h-8 rounded-full bg-[#1c1c1e] border border-white/10 flex items-center justify-center shrink-0">
          <Plus size={14} className="text-white/70" strokeWidth={1.75} />
        </span>
        <div className="flex-1 h-8 rounded-full bg-[#1c1c1e] border border-white/10 flex items-center px-3 gap-2 min-w-0">
          <span className="text-[11px] text-white/35 flex-1">Text Here</span>
          <Smile size={14} className="text-white/45 shrink-0" strokeWidth={1.75} />
        </div>
        <span className="w-8 h-8 rounded-full bg-[#1c1c1e] border border-white/10 flex items-center justify-center shrink-0">
          <Mic size={14} className="text-white/70" strokeWidth={1.75} />
        </span>
      </div>
    </motion.div>
  );
};

const CallChrome = ({ muted = true }: { muted?: boolean }) => (
  <>
    <div className="absolute top-0 inset-x-0 z-30 flex items-center justify-between px-3.5 pt-[2.85rem] pointer-events-none">
      <ArrowLeft size={18} className="text-white drop-shadow" strokeWidth={2} />
      <p className="text-[15px] font-semibold text-white drop-shadow tracking-tight">Random&apos;s Spin</p>
      <p className="text-[13px] text-white tabular-nums drop-shadow w-[42px] text-right">04:35</p>
    </div>
    <div className="absolute bottom-[1.15rem] left-1/2 -translate-x-1/2 z-30 inline-flex items-center gap-4 rounded-full bg-[#2c2c2e]/92 px-4 py-2.5 shadow-lg">
      <SwitchCamera size={18} className="text-white" strokeWidth={1.75} />
      <Video size={18} className="text-white" strokeWidth={1.75} />
      {muted ? (
        <MicOff size={18} className="text-white" strokeWidth={1.75} />
      ) : (
        <Mic size={18} className="text-white" strokeWidth={1.75} />
      )}
      <span
        className="w-10 h-10 rounded-full flex items-center justify-center -my-1"
        style={{ background: RED }}
      >
        <Phone size={16} className="text-white rotate-[135deg]" strokeWidth={2.25} />
      </span>
    </div>
  </>
);

const EmilyBadge = () => (
  <div className="absolute top-3 left-3 z-20 inline-flex items-center gap-1.5 self-start">
    <Avatar src={spinEmily} size={28} />
    <div className="leading-tight drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
      <p className="text-[11px] text-white font-semibold">Emily Carter</p>
      <p className="text-[9px] text-white/70">@emilyy754</p>
    </div>
  </div>
);

const SelfPip = () => (
  <div className="pointer-events-none absolute bottom-2.5 right-2.5 z-20 h-[96px] w-[68px] overflow-hidden rounded-[12px]">
    <img
      src={spinSelf}
      alt=""
      className="absolute inset-0 h-full w-full object-cover object-[50%_18%]"
    />
  </div>
);

/** Outer corner strongly rounded; the other 3 corners stay subtle. */
const GRID_RADIUS = [
  "22px 6px 6px 6px",
  "6px 22px 6px 6px",
  "6px 6px 6px 22px",
  "6px 6px 22px 6px",
] as const;

/** Shared inset: gap under header + above control bar */
const CALL_STAGE: CSSProperties = {
  position: "absolute",
  left: 10,
  right: 10,
  top: 104,
  bottom: 96,
};

const MeetPhase = () => {
  return (
    <motion.div
      key="meet"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-x-0 -top-11 -bottom-5 z-10 overflow-hidden bg-black"
    >
      <div style={CALL_STAGE} className="overflow-hidden rounded-[22px]">
        <img
          src={spinEmily}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-[50%_18%]"
        />
        <EmilyBadge />
        <SelfPip />
      </div>
      <CallChrome muted />
    </motion.div>
  );
};

const GridPhase = () => {
  const tiles = [spinEmily, spinGuy, spinSelf, spinNeon];
  const gap = 4;
  const half = `calc(50% - ${gap / 2}px)`;
  const slots: CSSProperties[] = [
    { top: 0, left: 0 },
    { top: 0, right: 0 },
    { bottom: 0, left: 0 },
    { bottom: 0, right: 0 },
  ];

  return (
    <motion.div
      key="grid"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-x-0 -top-11 -bottom-5 z-10 overflow-hidden bg-black"
    >
      <div style={CALL_STAGE}>
        {tiles.map((src, i) => (
          <div
            key={i}
            className="overflow-hidden"
            style={{
              position: "absolute",
              width: half,
              height: half,
              borderRadius: GRID_RADIUS[i],
              ...slots[i],
            }}
          >
            <img
              src={src}
              alt=""
              className="block h-full w-full object-cover object-[50%_16%]"
              draggable={false}
            />
            {i === 0 && (
              <div className="absolute top-2.5 left-2.5 z-10 inline-flex items-center gap-1.5">
                <Avatar src={spinEmily} size={24} />
                <div className="leading-tight drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                  <p className="text-[10px] text-white font-semibold">Emily Carter</p>
                  <p className="text-[8px] text-white/70">@emilyy754</p>
                </div>
              </div>
            )}
            {i === 3 && <SelfPip />}
          </div>
        ))}
      </div>
      <CallChrome muted />
    </motion.div>
  );
};

const ZODIAC = [
  { name: "Random", on: false },
  { name: "Aries", on: true },
  { name: "Taurus", on: false },
  { name: "Gemini", on: true },
  { name: "Cancer", on: false },
  { name: "Leo", on: true },
  { name: "Virgo", on: false },
  { name: "Libra", on: true },
  { name: "Scorpio", on: false },
  { name: "Sagittarius", on: true },
  { name: "Capricorn", on: false },
  { name: "Aquarius", on: true },
  { name: "Pisces", on: false },
];

const Toggle = ({ on }: { on: boolean }) => (
  <span
    className={`relative inline-flex h-[22px] w-[40px] shrink-0 items-center rounded-full transition-colors ${
      on ? "justify-end" : "justify-start"
    }`}
    style={{ background: on ? BLUE : "#3a3a3c", padding: 2 }}
  >
    <span className="block h-[18px] w-[18px] rounded-full bg-white shadow" />
  </span>
);

const SignPhase = () => {
  return (
    <motion.div
      key="sign"
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -16 }}
      className="flex flex-col h-full min-h-0 bg-black px-3.5"
    >
      <div className="relative flex flex-col items-center mb-3 shrink-0 pt-0.5">
        <ArrowLeft size={15} className="absolute left-0 top-1 text-white/50" />
        <p className="text-[17px] font-semibold text-white tracking-tight">Sign</p>
        <p className="mt-1 text-center text-[11px] text-white/40 leading-snug px-2">
          Choose one or more zodiac signs that you want to match with.
        </p>
      </div>
      <div className="flex-1 min-h-0 overflow-y-auto space-y-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {ZODIAC.map((z) => (
          <div
            key={z.name}
            className="rounded-2xl bg-[#2c2c2e] px-3.5 py-3 flex items-center justify-between"
          >
            <p className="text-[13px] text-white font-medium">{z.name}</p>
            <Toggle on={z.on} />
          </div>
        ))}
      </div>
      <div
        className="mt-2 mb-1 rounded-full py-3.5 text-center text-[14px] font-semibold text-white shrink-0"
        style={{ background: BLUE }}
      >
        Add Sign
      </div>
    </motion.div>
  );
};

const FriendPhase = () => {
  const amountPct = 55;
  return (
    <motion.div
      key="friend"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative flex flex-col h-full min-h-0 bg-black overflow-hidden"
    >
      {/* Filter Spin behind the sheet */}
      <div className="flex flex-col h-full min-h-0 px-3.5 pt-0.5 pointer-events-none">
        <div className="relative flex flex-col items-center mb-2 shrink-0">
          <ArrowLeft size={15} className="absolute left-0 top-1 text-white/50" />
          <p className="text-[15px] font-semibold text-white tracking-tight">Filter Spin</p>
          <p className="text-[10px] text-white/40">Filter your preferences to get the best match.</p>
        </div>
        <div className="space-y-2">
          <p className="text-[10px] font-medium text-white/40">About match</p>
          {[
            ["Topic", "Random"],
            ["What I'm looking for...", "New friends"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="rounded-xl bg-[#141416] border border-white/[0.06] px-3 py-2 flex items-center justify-between"
            >
              <p className="text-[11px] text-white/70">{label}</p>
              <span className="inline-flex items-center gap-0.5 text-[11px] text-white/45">
                {value}
                <ChevronRight size={12} className="text-white/35" />
              </span>
            </div>
          ))}
          <div className="rounded-xl bg-[#141416] border border-white/[0.06] px-3 py-2.5">
            <div className="flex justify-between text-[10px] text-white/50 mb-2">
              <span>Amount</span>
              <span className="text-white font-semibold">1-4</span>
            </div>
            <div className="h-1 rounded-full bg-white/10 relative">
              <div
                className="absolute left-0 top-0 h-full rounded-full bg-white"
                style={{ width: `${amountPct}%` }}
              />
              <span
                className="absolute top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-white shadow"
                style={{ left: `calc(${amountPct}% - 7px)` }}
              />
            </div>
            <div className="mt-1.5 flex justify-between text-[9px] text-white/30">
              <span>1</span>
              <span>4</span>
            </div>
          </div>
          {[
            ["Language", "Global"],
            ["Location", "Random"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="rounded-xl bg-[#141416] border border-white/[0.06] px-3 py-2 flex items-center justify-between"
            >
              <p className="text-[11px] text-white/70">{label}</p>
              <span className="inline-flex items-center gap-0.5 text-[11px] text-white/45">
                {value}
                <ChevronRight size={12} className="text-white/35" />
              </span>
            </div>
          ))}
          <div className="rounded-xl bg-[#141416] border border-white/[0.06] px-3 py-2 flex items-center justify-between">
            <p className="text-[11px] text-white/70">Miles</p>
            <span className="text-[11px] text-white/45">25-50 mi</span>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 z-20 bg-black/50" />

      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 360, damping: 34 }}
        className="absolute inset-x-0 bottom-0 z-30 rounded-t-[1.35rem] bg-[#1c1c1e] px-3.5 pt-2 pb-3"
      >
        <span className="mx-auto mb-2.5 block h-1 w-9 rounded-full bg-white/25" />
        <p className="text-center text-[17px] font-semibold text-white">Spin with a friend</p>
        <p className="mt-1.5 text-center text-[11px] text-white/40 leading-snug px-3">
          Spin alone or select a contact to match together.
        </p>
        <div className="mt-3.5 space-y-2">
          <div className="rounded-2xl bg-[#2c2c2e] px-3.5 py-3.5 flex items-center gap-2.5">
            <span className="w-[20px] h-[20px] rounded-full border-2 border-white/30 shrink-0" />
            <p className="text-[13px] text-white font-medium">Alone</p>
          </div>
          <div className="rounded-2xl bg-[#2c2c2e] px-3.5 py-3.5 flex items-center gap-2.5">
            <span
              className="w-[20px] h-[20px] rounded-full shrink-0 flex items-center justify-center"
              style={{ background: BLUE }}
            >
              <span className="w-[7px] h-[7px] rounded-full bg-white" />
            </span>
            <p className="text-[13px] text-white font-medium flex-1">With a friend</p>
            <span className="inline-flex items-center gap-0.5 text-[12px] text-white/45">
              Select
              <ChevronRight size={13} className="text-white/35" />
            </span>
          </div>
        </div>
        <div
          className="mt-3.5 rounded-full py-3.5 text-center text-[14px] font-semibold text-white"
          style={{ background: BLUE }}
        >
          Add Filter
        </div>
      </motion.div>
    </motion.div>
  );
};

export const SpinScene = ({ className = "" }: { className?: string }) => {
  const phase = usePhaseCycle(spinPhases, spinHold);
  const labels: Record<SpinPhase, string> = {
    mode: "pick face or chat",
    filter: "tune the match",
    sign: "pick the signs",
    friend: "spin with a friend",
    matching: "finding spinners",
    meet: "you're in",
    grid: "up to four faces",
  };
  return (
    <div className={className}>
      <PhoneWrap label={labels[phase]} rotate={-1.5}>
        <div className="relative h-full min-h-0">
          <AnimatePresence mode="wait">
            {phase === "mode" && <ModePhase key="mode" />}
            {phase === "filter" && <FilterPhase key="filter" />}
            {phase === "sign" && <SignPhase key="sign" />}
            {phase === "friend" && <FriendPhase key="friend" />}
            {phase === "matching" && <MatchingPhase key="matching" />}
            {phase === "meet" && <MeetPhase key="meet" />}
            {phase === "grid" && <GridPhase key="grid" />}
          </AnimatePresence>
        </div>
      </PhoneWrap>
    </div>
  );
};

/*
   MAPS + PINS
   â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */

type MapsPhase = "pins" | "fab" | "focus";
const mapsPhases: MapsPhase[] = ["pins", "fab", "focus"];
const mapsHold: Record<MapsPhase, number> = { pins: 4200, fab: 4800, focus: 7200 };

const pinCats = [
  { label: "Chillin'", color: "#2f6bff", ink: "#0b2f8f", Icon: Sparkles },
  { label: "Moment", color: "#5aa8ff", ink: "#0f4f8f", Icon: Heart },
  { label: "SOS", color: "#f0c12e", ink: "#7a5c00", Icon: Bell },
  { label: "Events", color: "#2fbf5a", ink: "#0a6b2e", Icon: Calendar },
  { label: "AID", color: "#ff3b30", ink: "#8f100c", Icon: TriangleAlert },
];

type PinCardKind = "chillin" | "event";

type PinCardData = {
  kind: PinCardKind;
  name: string;
  withName: string;
  face: string;
  timeAgo: string;
  title: string;
  body: string;
  photo: string;
  likes: string;
  comments: string;
};

const MapPinCard = ({ card }: { card: PinCardData }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96, y: 8 }}
      transition={{ type: "spring", stiffness: 420, damping: 30 }}
      className="relative z-10 w-full px-2.5"
    >
      <div className="rounded-[1.15rem] bg-[#2c2c2e]/92 border border-white/[0.08] shadow-2xl px-3 pt-2.5 pb-3">
        <div className="flex items-center gap-2">
          <Avatar src={card.face} size={30} />
          <div className="flex-1 min-w-0 flex items-baseline gap-1.5">
            <span className="text-[12px] font-semibold text-white truncate">{card.name}</span>
            <span className="text-[10px] text-white/40 truncate">W/ {card.withName}</span>
          </div>
          <span className="text-[10px] text-white/40 shrink-0 tabular-nums">{card.timeAgo}</span>
        </div>

        <div className="mt-2.5 flex gap-2.5 items-start">
          <div className="flex-1 min-w-0">
            <p className="text-[13px] font-semibold text-white leading-snug">{card.title}</p>
            <p className="mt-1 text-[11px] text-white/65 leading-snug">{card.body}</p>
            <div className="mt-2.5 flex items-center gap-3.5">
              <span className="inline-flex items-center gap-1 text-[11px] text-white/85 tabular-nums">
                <Heart size={12} fill={RED} style={{ color: RED }} />
                {card.likes}
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] text-white/45 tabular-nums">
                <MessageCircle size={12} strokeWidth={1.75} />
                {card.comments}
              </span>
            </div>
          </div>
          <img
            src={card.photo}
            alt=""
            className="w-[76px] h-[76px] rounded-[0.85rem] object-cover shrink-0"
          />
        </div>
      </div>

      <div className="mt-2.5 flex gap-2">
        <span className="flex-1 rounded-full bg-[#2c2c2e]/90 border border-white/[0.06] py-2 text-center text-[11px] font-medium text-white">
          See profile
        </span>
        <span className="flex-1 rounded-full bg-[#2c2c2e]/90 border border-white/[0.06] py-2 inline-flex items-center justify-center gap-1 text-[11px] font-medium" style={{ color: BLUE }}>
          <Hand size={12} strokeWidth={2} />
          Touch
        </span>
        <span className="flex-1 rounded-full bg-[#2c2c2e]/90 border border-white/[0.06] py-2 inline-flex items-center justify-center gap-1 text-[11px] font-medium" style={{ color: RED }}>
          <CircleAlert size={12} strokeWidth={2} />
          Report
        </span>
      </div>
    </motion.div>
  );
};

const MapsInner = ({ phase }: { phase: MapsPhase }) => {
  const faces = uniqueFacesFor([
    "Maya Reed",
    "Leo Hart",
    "Emily Clark",
    "Sophie Carter",
    "Chris Parker",
  ]);
  const julia = faceFor("Julia Carter");
  const emily = faceFor("Emily Clark");
  const names = ["Maya", "Leo", "Emily", "Sophie", "Chris"];
  const [fabOpen, setFabOpen] = useState(false);
  const [pinN, setPinN] = useState(0);
  const [focus, setFocus] = useState(-1);
  const [card, setCard] = useState<PinCardData | null>(null);

  const cardsFor = (i: number): PinCardData => {
    if (i === 1) {
      return {
        kind: "chillin",
        name: "Julia Carter",
        withName: "Emily Carter",
        face: julia,
        timeAgo: "4 min",
        title: "At Starbucks!",
        body: "Anyone nearby wants to join for a quick coffee?",
        photo: mapsChillinDrink,
        likes: "25k",
        comments: "86k",
      };
    }
    return {
      kind: "event",
      name: "Emily Clark",
      withName: "Sophie Carter",
      face: emily,
      timeAgo: "12 min",
      title: "Film night tonight!",
      body: "Rooftop screening in the LES. Bring a jacket.",
      photo: filmNight,
      likes: "8.2k",
      comments: "1.4k",
    };
  };

  useEffect(() => {
    setFabOpen(false);
    setPinN(0);
    setFocus(-1);
    setCard(null);
    if (phase === "pins") {
      const timers = [1, 2, 3, 4, 5].map((n, i) => window.setTimeout(() => setPinN(n), 350 + i * 280));
      return () => timers.forEach(clearTimeout);
    }
    if (phase === "fab") {
      setPinN(5);
      const t = window.setTimeout(() => setFabOpen(true), 700);
      return () => clearTimeout(t);
    }
    setPinN(5);
    setFabOpen(false);
    const timers = [
      window.setTimeout(() => setFocus(1), 350),
      window.setTimeout(() => setCard(cardsFor(1)), 900),
      window.setTimeout(() => {
        setFocus(2);
        setCard(cardsFor(2));
      }, 4000),
    ];
    return () => timers.forEach(clearTimeout);
  }, [phase]);

  const pinSpots = [
    { x: "28%", y: "18%" },
    { x: "72%", y: "20%" },
    { x: "34%", y: "40%" },
    { x: "78%", y: "52%" },
    { x: "48%", y: "74%" },
  ];

  const openPin = (i: number) => {
    if (phase !== "focus") return;
    if (i !== 1 && i !== 2) return;
    setFocus(i);
    setCard(cardsFor(i));
  };

  return (
    <motion.div
      key={phase}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative flex flex-col h-full min-h-0 overflow-hidden bg-black"
    >
      <div className="absolute inset-0">
        <img
          src={mapsNycBg}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover object-[48%_42%] scale-110 transition-[filter] duration-300 ${
            card ? "blur-[10px] scale-[1.18]" : ""
          }`}
        />
        <div
          className={`absolute inset-0 transition-colors duration-300 ${
            card ? "bg-black/45" : "bg-gradient-to-b from-black/35 via-transparent to-black/50"
          }`}
        />
      </div>

      <div className={`relative z-10 px-3.5 flex items-center justify-center mb-2 ${card ? "opacity-0 pointer-events-none" : ""}`}>
        <div className="inline-flex items-center rounded-full bg-[#1c1c1e] border border-white/[0.08] p-0.5">
          <span className="w-7 h-7 rounded-full flex items-center justify-center text-white/45">
            <StickyNote size={12} />
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-white text-black px-2.5 py-1 text-[10px] font-semibold">
            <MapPin size={11} strokeWidth={2.2} />
            Maps
          </span>
        </div>
      </div>

      {pinSpots.map((p, i) => {
        if (i >= pinN) return null;
        const isFocus = focus === i;
        return (
          <motion.button
            type="button"
            key={names[i]}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: isFocus && !card ? 1.18 : 1,
              opacity: card ? 0 : 1,
              y: isFocus && !card ? [0, -4, 0] : 0,
            }}
            transition={{ type: "spring", stiffness: 420, damping: 18 }}
            className="absolute z-10 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
            style={{ left: p.x, top: p.y }}
            onClick={() => openPin(i)}
          >
            <Avatar src={faces[i]} size={32} />
            {isFocus && !card && (
              <motion.span
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute left-1/2 -translate-x-1/2 top-9 whitespace-nowrap rounded-full bg-black/80 border border-white/15 px-2 py-0.5 text-[9px] text-white"
              >
                {names[i]}
              </motion.span>
            )}
          </motion.button>
        );
      })}

      {!card && (
        <div className="absolute bottom-4 inset-x-0 z-20 px-2 flex gap-1.5 overflow-hidden pr-14">
          {pinCats.map((c) => {
            const Icon = c.Icon;
            return (
              <span
                key={c.label}
                className="inline-flex items-center gap-1 rounded-full bg-[#1c1c1e]/90 border border-white/10 px-2 py-1 text-[9px] text-white/80 shrink-0"
              >
                <Icon size={10} style={{ color: c.color }} />
                {c.label}
              </span>
            );
          })}
        </div>
      )}

      {!card && (
        <div className="absolute bottom-3 right-3 z-30 flex flex-col items-end gap-2">
          <AnimatePresence>
            {fabOpen && (
              <motion.div
                initial={{ opacity: 0, y: 12, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.95 }}
                className="rounded-2xl bg-[#1c1c1e]/92 backdrop-blur-md border border-white/[0.08] overflow-hidden min-w-[120px]"
              >
                {pinCats.map((c, i) => {
                  const Icon = c.Icon;
                  return (
                    <motion.div
                      key={c.label}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * i }}
                      className="flex items-center gap-2 px-3 py-2 border-b border-white/[0.06] last:border-0"
                    >
                      <Icon size={12} style={{ color: c.color }} />
                      <span className="text-[11px] text-white/85">{c.label}</span>
                    </motion.div>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
          <motion.span
            animate={{ rotate: fabOpen ? 45 : 0 }}
            className="w-11 h-11 rounded-full bg-black border border-white/20 flex items-center justify-center text-white shadow-xl"
          >
            {fabOpen ? <X size={18} /> : <Plus size={18} />}
          </motion.span>
        </div>
      )}

      <AnimatePresence>
        {card && (
          <motion.div
            key={card.kind + card.name}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-40 flex flex-col items-center justify-center"
          >
            <MapPinCard card={card} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const MapsPinsScene = ({ className = "" }: { className?: string }) => {
  const phase = usePhaseCycle(mapsPhases, mapsHold);
  const labels: Record<MapsPhase, string> = {
    pins: "pins drop in live",
    fab: "drop what matters",
    focus: "tap a pin, open the card",
  };
  return (
    <div className={className}>
      <PhoneWrap label={labels[phase]} rotate={2}>
        <AnimatePresence mode="wait">
          <MapsInner key={phase} phase={phase} />
        </AnimatePresence>
      </PhoneWrap>
    </div>
  );
};
