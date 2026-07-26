import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, Bookmark, Film, Image as ImageIcon, MoreVertical, Pencil, Plus } from "lucide-react";
import AiPhoneShell from "@/components/home/AiPhoneShell";
import { faceFor, uniqueFacesFor } from "@/lib/crowdFaces";
import hillsSunset from "@/assets/hills-sunset.jpg";
import cafeFriends from "@/assets/cafe-friends.jpg";
import filmNight from "@/assets/film-night.png";
import liveThread from "@/assets/live-thread.png";
import tripPhotos from "@/assets/trip-photos.png";
import studentsHero from "@/assets/students-hero.jpg";

const ease = [0.25, 0.4, 0.25, 1] as const;
const PINK_BG = "#f4c4d4";
const INK = "#2a1f1c";
const MUTED = "#6b5a56";
const BLUE = "#2f6bff";

type Phase = "view" | "edit";
const phases: Phase[] = ["view", "edit"];
const HOLD: Record<Phase, number> = { view: 6200, edit: 6200 };
const labels: Record<Phase, string> = {
  view: "your profile, your rules",
  edit: "change what they see",
};

const CircleBtn = ({ children }: { children: React.ReactNode }) => (
  <span className="w-8 h-8 rounded-full bg-white/55 backdrop-blur-sm flex items-center justify-center text-[#3a2a28] shadow-sm">
    {children}
  </span>
);

const Avatar = ({ src, size }: { src: string; size: number }) => (
  <span
    className="relative inline-flex shrink-0 rounded-full overflow-hidden bg-white/40"
    style={{ width: size, height: size, minWidth: size }}
  >
    <img src={src} alt="" className="absolute inset-0 w-full h-full object-cover" />
  </span>
);

const ViewPhase = () => {
  const sarah = faceFor("Sarah Moriaty");
  const [connA, connB] = uniqueFacesFor(["Chris Parker", "Maya Reed"]);
  const [admA, admB] = uniqueFacesFor(["Ethan Miller", "Emily Clark"]);
  const [ready, setReady] = useState(0);

  useEffect(() => {
    const timers = [1, 2, 3, 4].map((n, i) => window.setTimeout(() => setReady(n), 180 + i * 220));
    return () => timers.forEach(clearTimeout);
  }, []);

  const stories = [
    { label: "Dailys", src: hillsSunset },
    { label: "Me", src: sarah },
    { label: "New", src: null as string | null },
    { label: "Pets", src: liveThread },
    { label: "Makes", src: filmNight },
  ];

  const grid = [filmNight, studentsHero, cafeFriends, tripPhotos, hillsSunset, liveThread];

  return (
    <motion.div
      key="view"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      className="relative flex flex-col h-full min-h-0 overflow-hidden"
      style={{ background: PINK_BG }}
    >
      <div className="flex items-center justify-between px-3.5 pt-0.5 mb-2 shrink-0">
        <CircleBtn>
          <ArrowLeft size={14} strokeWidth={2.2} />
        </CircleBtn>
        <CircleBtn>
          <MoreVertical size={14} />
        </CircleBtn>
      </div>

      <div className="flex flex-col items-center px-4 shrink-0">
        {ready >= 1 && (
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
            <Avatar src={sarah} size={78} />
          </motion.div>
        )}
        {ready >= 2 && (
          <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="mt-2 text-center">
            <p className="text-[15px] font-semibold" style={{ color: INK }}>
              Sarah Moriaty
            </p>
            <p className="text-[10px] mt-0.5" style={{ color: MUTED }}>
              @moriatyyi · She/her
            </p>
            <p className="text-[11px] mt-1.5 leading-snug max-w-[200px]" style={{ color: INK }}>
              Coffee, chaos &amp; creativity. A heart with Wi-Fi.
            </p>
          </motion.div>
        )}
      </div>

      {ready >= 3 && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-3 px-4 flex justify-between gap-2 shrink-0"
        >
          {[
            {
              label: "Connections",
              node: (
                <span className="inline-flex items-center rounded-full bg-white/70 pl-1 pr-1.5 py-1 gap-0.5">
                  <Avatar src={connA} size={18} />
                  <Avatar src={connB} size={18} />
                  <span className="ml-0.5 text-[9px] font-semibold rounded-full bg-[#f8d4e0] px-1.5 py-0.5" style={{ color: INK }}>
                    +198
                  </span>
                </span>
              ),
            },
            {
              label: "Hearts",
              node: (
                <span className="inline-flex items-center justify-center rounded-full bg-white/70 px-3 py-1.5 text-[11px] font-semibold" style={{ color: INK }}>
                  25k
                </span>
              ),
            },
            {
              label: "Admirers",
              node: (
                <span className="inline-flex items-center rounded-full bg-white/70 pl-1 pr-1.5 py-1 gap-0.5">
                  <Avatar src={admA} size={18} />
                  <Avatar src={admB} size={18} />
                  <span className="ml-0.5 text-[9px] font-semibold rounded-full bg-[#f8d4e0] px-1.5 py-0.5" style={{ color: INK }}>
                    237k
                  </span>
                </span>
              ),
            },
          ].map((s) => (
            <div key={s.label} className="flex-1 flex flex-col items-center gap-1 min-w-0">
              {s.node}
              <p className="text-[9px]" style={{ color: MUTED }}>
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>
      )}

      {ready >= 4 && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-3 px-3 flex gap-2.5 overflow-hidden shrink-0"
        >
          {stories.map((st) => (
            <div key={st.label} className="flex flex-col items-center gap-1 shrink-0 w-[46px]">
              {st.src ? (
                <Avatar src={st.src} size={42} />
              ) : (
                <span className="w-[42px] h-[42px] rounded-full bg-white/70 flex items-center justify-center" style={{ color: INK }}>
                  <Plus size={16} />
                </span>
              )}
              <p className="text-[8px] truncate w-full text-center" style={{ color: MUTED }}>
                {st.label}
              </p>
            </div>
          ))}
        </motion.div>
      )}

      <div className="relative mt-3 flex-1 min-h-0">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 z-10 -translate-y-1/2">
          <div className="flex items-center gap-3 rounded-full bg-white/55 backdrop-blur-md border border-white/50 px-3 py-1.5 shadow-sm">
            <ImageIcon size={13} style={{ color: INK }} />
            <Film size={13} className="opacity-45" style={{ color: INK }} />
            <Bookmark size={13} className="opacity-45" style={{ color: INK }} />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-[2px] h-full overflow-hidden pt-3">
          {grid.map((src, i) => (
            <motion.img
              key={`${src}-${i}`}
              src={src}
              alt=""
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.05 * i }}
              className="w-full h-full object-cover min-h-[72px]"
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const EditPhase = () => {
  const sophia = faceFor("Sophia Carter");
  const [layout, setLayout] = useState<"Vertical" | "Horizontal">("Horizontal");
  const [colorIdx, setColorIdx] = useState(5);

  useEffect(() => {
    const t1 = window.setTimeout(() => setColorIdx(1), 1400);
    const t2 = window.setTimeout(() => setLayout("Vertical"), 2800);
    const t3 = window.setTimeout(() => setLayout("Horizontal"), 4200);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  const colors = [
    "#111111",
    "#ffffff",
    "#a8e6cf",
    "#f6e7a1",
    "#7a8f5a",
    "#1e3a5f",
    "#1f4d3a",
    "#6b1e2e",
    "#5c4033",
    "#3d2a5c",
    "#2a2a2a",
  ];

  const fields = [
    { label: "Name", value: "Sophia Carter" },
    { label: "User", value: "SophiaKindVibes" },
    { label: "Pronoun", value: "She/her" },
    { label: "Link", value: "www.sophiaworld.com" },
    { label: "Description", value: "Welcome to my world!", count: "20/150" },
  ];

  return (
    <motion.div
      key="edit"
      initial={{ opacity: 0, x: 14 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -14 }}
      className="relative flex flex-col h-full min-h-0 overflow-hidden px-3.5"
      style={{ background: PINK_BG }}
    >
      <div className="flex items-center justify-between mb-2 shrink-0">
        <ArrowLeft size={16} style={{ color: INK }} />
        <span className="w-7 h-7 rounded-full bg-white/70 flex items-center justify-center" style={{ color: INK }}>
          <Pencil size={12} />
        </span>
      </div>

      <div className="flex flex-col items-center shrink-0 mb-3">
        <div className="relative">
          <Avatar src={sophia} size={68} />
          <span className="absolute -bottom-0.5 -right-0.5 w-5 h-5 rounded-full bg-white flex items-center justify-center shadow-sm" style={{ color: INK }}>
            <Pencil size={10} />
          </span>
        </div>
        <p className="mt-2 text-[14px] font-semibold" style={{ color: INK }}>
          Sophia Carter
        </p>
        <p className="text-[10px]" style={{ color: MUTED }}>
          @SophiaKindVibes
        </p>
        <p className="text-[10px]" style={{ color: MUTED }}>
          She/her
        </p>
      </div>

      <div className="shrink-0 mb-2">
        <p className="text-[10px] font-medium mb-1.5" style={{ color: MUTED }}>
          Color
        </p>
        <div className="flex flex-wrap gap-1.5">
          {colors.map((c, i) => (
            <motion.button
              key={c + i}
              type="button"
              animate={{ scale: colorIdx === i ? 1.12 : 1 }}
              className="w-5 h-5 rounded-full border-2"
              style={{
                background: c,
                borderColor: colorIdx === i ? BLUE : "rgba(0,0,0,0.08)",
              }}
            />
          ))}
        </div>
      </div>

      <div className="shrink-0 mb-2.5">
        <p className="text-[10px] font-medium mb-1.5" style={{ color: MUTED }}>
          Layout
        </p>
        <div className="inline-flex rounded-full bg-white/50 p-0.5 gap-0.5">
          {(["Vertical", "Horizontal"] as const).map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => setLayout(opt)}
              className="rounded-full px-3 py-1 text-[10px] font-medium transition-colors"
              style={{
                background: layout === opt ? "#1c1c1e" : "transparent",
                color: layout === opt ? "#fff" : MUTED,
              }}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 min-h-0 overflow-hidden space-y-1.5 pb-2">
        {fields.map((f, i) => (
          <motion.div
            key={f.label}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 * i }}
            className="rounded-xl bg-white/85 px-2.5 py-1.5 relative"
          >
            {f.count && (
              <span className="absolute top-1.5 right-2 text-[8px]" style={{ color: MUTED }}>
                {f.count}
              </span>
            )}
            <p className="text-[8px]" style={{ color: MUTED }}>
              {f.label}
            </p>
            <p className="text-[11px] font-medium truncate" style={{ color: INK }}>
              {f.value}
            </p>
            {f.label === "Name" && (
              <div className="mt-1 space-y-0.5">
                <p className="text-[7px] leading-tight" style={{ color: MUTED }}>
                  · After changing your username/name, you can only modify it again after 7 days.
                </p>
                <p className="text-[7px] leading-tight" style={{ color: MUTED }}>
                  · You will be able to change your username/name back within 14 days.
                </p>
                <p className="text-[8px] font-medium text-red-500">This username already exists</p>
              </div>
            )}
          </motion.div>
        ))}
      </div>
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
      <AiPhoneShell className="!w-full !max-w-none" rotate={1.5} light>
        <div className="absolute top-11 right-4 z-30 flex gap-1">
          {phases.map((p, idx) => (
            <motion.span
              key={p}
              animate={{
                width: idx === i ? 14 : 4,
                backgroundColor: idx === i ? "#e879a9" : "rgba(0,0,0,0.18)",
              }}
              className="h-1 rounded-full"
            />
          ))}
        </div>
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
