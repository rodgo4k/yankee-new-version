import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Moon } from "lucide-react";
import studentsHero from "@/assets/students-hero.jpg";

const ease = [0.25, 0.4, 0.25, 1] as const;

const rooms = [
  { name: "psych 101", meta: "lecture up" },
  { name: "design studio", meta: "crit thursday" },
  { name: "crew · dorm 4", meta: "private" },
];

const StudentHeroScene = () => {
  const [minutes, setMinutes] = useState(180);
  const [studyOn, setStudyOn] = useState(false);
  const [roomCount, setRoomCount] = useState(0);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    setMinutes(180);
    setStudyOn(false);
    setRoomCount(0);
    const timers: number[] = [];

    rooms.forEach((_, i) => {
      timers.push(window.setTimeout(() => setRoomCount(i + 1), 400 + i * 400));
    });
    timers.push(window.setTimeout(() => setStudyOn(true), 400 + rooms.length * 400 + 300));

    const tickStart = 400 + rooms.length * 400 + 600;
    let left = 180;
    const tick = () => {
      left -= 1;
      setMinutes(Math.max(0, left));
      if (left > 174) {
        timers.push(window.setTimeout(tick, 400));
      }
    };
    timers.push(window.setTimeout(tick, tickStart));
    timers.push(
      window.setTimeout(() => setCycle((c) => c + 1), tickStart + 3500),
    );

    return () => timers.forEach(clearTimeout);
  }, [cycle]);

  const hrs = Math.floor(minutes / 60);
  const mins = minutes % 60;
  const timeLabel = `${hrs}h ${String(mins).padStart(2, "0")}m`;

  return (
    <div className="relative w-full max-w-[460px] mx-auto">
      <div className="grid grid-cols-12 gap-3 items-stretch">
        <motion.div
          initial={{ opacity: 0, y: 28, rotate: -2 }}
          animate={{ opacity: 1, y: 0, rotate: -1.5 }}
          transition={{ duration: 0.7, ease }}
          className="yankee-surface col-span-7 relative rounded-[1.5rem] overflow-hidden min-h-[280px] md:min-h-[340px]"
        >
          <img
            src={studentsHero}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
            <span className="rounded-full border-2 border-white/70 bg-black/25 backdrop-blur-sm px-2.5 py-1 text-[11px] text-folk-bubble-foreground lowercase">
              campus
            </span>
            <motion.span
              initial={false}
              animate={{ opacity: studyOn ? 1 : 0 }}
              className="inline-flex items-center gap-1 rounded-full bg-folk-success px-2.5 py-1 text-[11px] font-medium text-foreground lowercase"
            >
              <Moon size={11} />
              study mode
            </motion.span>
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <p className="font-serif-display italic text-[1.25rem] md:text-[1.4rem] text-white leading-tight lowercase">
              campus verified
            </p>
            <p className="mt-1.5 text-[11px] text-white/70 lowercase">classes · clubs · your crew</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.12, ease }}
          className="yankee-surface col-span-5 rounded-[1.5rem] bg-card p-3 md:p-4 flex flex-col"
        >
          <p className="text-[11px] text-foreground/50 lowercase px-1 mb-3">rooms</p>
          <div className="flex flex-col gap-2 flex-1">
            {rooms.map((r, i) => {
              const on = i < roomCount;
              return (
                <motion.div
                  key={r.name}
                  initial={false}
                  animate={{ opacity: on ? 1 : 0.35, x: on ? 0 : 6 }}
                  transition={{ duration: 0.35, ease }}
                  className={`yankee-surface rounded-xl px-2.5 py-2 ${ on ? "bg-folk-bubble-soft" : "bg-background" }`}
                >
                  <div className="flex items-center gap-1.5">
                    <BookOpen size={11} className="shrink-0" />
                    <p className="text-[11px] md:text-[12px] font-semibold lowercase truncate">{r.name}</p>
                  </div>
                  <p className="mt-0.5 text-[10px] text-foreground/50 lowercase">{r.meta}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-3 pt-3 border-t border-border/10">
            <motion.div
              initial={false}
              animate={{ opacity: studyOn ? 1 : 0.4 }}
              className={`yankee-surface rounded-xl px-2.5 py-2 ${ studyOn ? "bg-folk-bubble text-white" : "bg-background" }`}
            >
              <p className="text-[10px] lowercase opacity-80">focus left</p>
              <p className="text-[15px] font-semibold tabular-nums lowercase leading-none mt-1">{timeLabel}</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-3 flex justify-end"
      >
        <div className="yankee-surface rounded-2xl rounded-br-md bg-folk-bubble px-3.5 py-2.5 text-[12px] md:text-[13px] leading-snug text-folk-bubble-foreground lowercase max-w-[90%]">
          only emergency calls break through
        </div>
      </motion.div>
    </div>
  );
};

export default StudentHeroScene;
