import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Apple,
  Smartphone,
  Clock,
  Users,
  MessageCircle,
  Video,
  Lock,
  Sparkles,
  X,
} from "lucide-react";
import HeroEdgeStickers, { type HeroSatellite } from "@/components/home/HeroEdgeStickers";
import homeFeed from "@/assets/yankee/home-feed.png";
import chat from "@/assets/yankee/chat.png";
import crowdsHome from "@/assets/yankee/crowds-home.png";
import videoCall from "@/assets/yankee/video-call.png";
import messages from "@/assets/yankee/messages.png";
import profileView from "@/assets/yankee/profile-view.png";
import cafeFriends from "@/assets/cafe-friends.jpg";
import rememberOffice from "@/assets/remember-office.jpg";
import heroParty from "@/assets/hero-party.jpg";
import familyField from "@/assets/family-field.jpg";
import tripPhotos from "@/assets/trip-photos.png";
import studentsHero from "@/assets/students-hero.jpg";

const ease = [0.25, 0.4, 0.25, 1] as const;

type Peek = {
  id: string;
  label: string;
  filename: string;
  media: string;
  kind: "image" | "video-look";
  icon: typeof Clock;
  objectTop?: boolean;
};

const peeks: Peek[] = [
  {
    id: "feed",
    label: "the feed",
    filename: "chronological-feed.png",
    media: homeFeed,
    kind: "image",
    icon: Clock,
    objectTop: true,
  },
  {
    id: "chat",
    label: "real chat",
    filename: "just-say-hi.mov",
    media: chat,
    kind: "video-look",
    icon: MessageCircle,
    objectTop: true,
  },
  {
    id: "crowds",
    label: "crowds",
    filename: "small-rooms.png",
    media: crowdsHome,
    kind: "image",
    icon: Users,
    objectTop: true,
  },
  {
    id: "calls",
    label: "calls",
    filename: "clear-calls.mov",
    media: videoCall,
    kind: "video-look",
    icon: Video,
    objectTop: true,
  },
  {
    id: "privacy",
    label: "privacy",
    filename: "encrypted-memory.png",
    media: rememberOffice,
    kind: "image",
    icon: Lock,
  },
  {
    id: "people",
    label: "your people",
    filename: "friends-first.jpg",
    media: cafeFriends,
    kind: "image",
    icon: Sparkles,
  },
];

const satellites: HeroSatellite[] = [
  {
    id: "sat-party",
    filename: "weekend.mov",
    media: heroParty,
    kind: "video-look",
    rotate: -8,
    className: "top-[6%] left-[1%] lg:left-0",
    origin: "top left",
  },
  {
    id: "sat-msgs",
    filename: "inbox.png",
    media: messages,
    kind: "image",
    objectTop: true,
    rotate: 7,
    className: "top-[8%] right-[1%] lg:right-0",
    origin: "top right",
  },
  {
    id: "sat-trip",
    filename: "memories.jpg",
    media: tripPhotos,
    kind: "image",
    rotate: 5,
    lgOnly: true,
    className: "top-[38%] left-0",
    origin: "center left",
  },
  {
    id: "sat-profile",
    filename: "you.png",
    media: profileView,
    kind: "image",
    objectTop: true,
    rotate: -6,
    lgOnly: true,
    className: "top-[36%] right-0",
    origin: "center right",
  },
  {
    id: "sat-field",
    filename: "away-from-feed.jpg",
    media: familyField,
    kind: "image",
    rotate: -4,
    className: "bottom-[18%] left-[2%] lg:left-0",
    origin: "bottom left",
  },
  {
    id: "sat-students",
    filename: "campus.mov",
    media: studentsHero,
    kind: "video-look",
    rotate: 9,
    className: "bottom-[16%] right-[2%] lg:right-0",
    origin: "bottom right",
  },
];

type DownloadDesktopHeroProps = {
  iosHref: string;
  androidHref: string;
};

const DownloadDesktopHero = ({ iosHref, androidHref }: DownloadDesktopHeroProps) => {
  const [activeId, setActiveId] = useState<string | null>("feed");
  const active = peeks.find((p) => p.id === activeId) ?? null;

  return (
    <section className="relative -mt-24 pt-28 md:pt-32 pb-14 md:pb-20 overflow-x-hidden dotted-bg">
      <div className="absolute inset-0 bg-background/80" />

      <div className="relative max-w-[1200px] mx-auto px-5 md:px-6">
        {/* Stage with edge satellites (desktop / tablet) */}
        <div className="relative min-h-0 md:min-h-[720px] lg:min-h-[760px]">
          <HeroEdgeStickers satellites={satellites} />

          {/* Decorative float labels (non-blocking) */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="hidden lg:block absolute top-[22%] left-[14%] z-[5] font-serif-display italic text-[13px] text-foreground/25 lowercase -rotate-6 pointer-events-none"
          >
            no algorithm
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="hidden lg:block absolute top-[24%] right-[12%] z-[5] font-serif-display italic text-[13px] text-foreground/25 lowercase rotate-6 pointer-events-none"
          >
            finite scroll
          </motion.span>

          {/* Center column — pointer-events only on interactive bits so edge stickers work */}
          <div className="relative z-20 pointer-events-none">
            <div className="text-center max-w-xl mx-auto pointer-events-auto">
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="font-serif-display italic text-[1.15rem] md:text-[1.35rem] text-foreground/45 lowercase"
              >
                download
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.06, ease }}
                className="mt-2 text-[3rem] sm:text-6xl md:text-[5rem] font-semibold text-foreground tracking-tight leading-[0.9] lowercase"
              >
                <span className="font-serif-display italic font-medium">yankee</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.16 }}
                className="mt-4 text-[15px] md:text-[17px] text-muted-foreground lowercase"
              >
                the quieter social app. hover icons — and the stickers around the edges.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.26 }}
                className="mt-7 flex flex-wrap items-center justify-center gap-3"
              >
                <a
                  href={iosHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 px-5 py-3.5 rounded-full text-[14px] font-semibold text-folk-bubble-foreground lowercase tracking-tight
                    folk-cta
                    shadow-[0_14px_40px_-10px_rgba(37,99,235,0.55),inset_0_1px_0_rgba(255,255,255,0.35)]
                    hover:brightness-105 transition-[filter,transform] active:scale-[0.98]"
                >
                  <Apple size={16} /> download for ios
                </a>
                <a
                  href={androidHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-5 py-3.5 rounded-full border-2 border-foreground bg-card text-[14px] font-medium text-foreground lowercase shadow-[3px_3px_0_0_hsl(var(--foreground))] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0_0_hsl(var(--foreground))] transition-all"
                >
                  <Smartphone size={15} /> android
                </a>
              </motion.div>

              <p className="mt-4 text-[12px] text-muted-foreground lowercase">
                free · ios 16+ · android 10+
              </p>
            </div>

            {/* Main preview stage */}
            <div className="mt-10 md:mt-12 relative mx-auto max-w-[400px] min-h-[260px] md:min-h-[300px] pointer-events-auto">
              <AnimatePresence mode="wait">
                {active ? (
                  <motion.div
                    key={active.id}
                    initial={{ opacity: 0, y: 18, scale: 0.94 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.96 }}
                    transition={{ type: "spring", stiffness: 380, damping: 28 }}
                    className="w-full"
                  >
                    <div className="rounded-[1.35rem] border-2 border-foreground bg-card overflow-hidden shadow-[6px_6px_0_0_hsl(var(--foreground))]">
                      <div className="flex items-center justify-between gap-2 px-3.5 py-2.5 border-b-2 border-foreground bg-folk-panel">
                        <div className="flex items-center gap-1.5">
                          <button
                            type="button"
                            aria-label="Close preview"
                            onClick={() => setActiveId(null)}
                            className="w-2.5 h-2.5 rounded-full bg-[#FF6B6B] border border-foreground/40 hover:scale-110 transition-transform"
                          />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#FFD166] border border-foreground/40" />
                          <span className="w-2.5 h-2.5 rounded-full bg-folk-success border border-foreground/40" />
                        </div>
                        <p className="text-[11px] lowercase text-foreground/60 truncate font-medium">
                          {active.filename}
                        </p>
                        <button
                          type="button"
                          aria-label="Close"
                          onClick={() => setActiveId(null)}
                          className="text-foreground/50 hover:text-foreground transition-colors"
                        >
                          <X size={13} />
                        </button>
                      </div>
                      <div className="relative aspect-[4/3] bg-muted overflow-hidden">
                        <img
                          src={active.media}
                          alt={active.label}
                          className={`w-full h-full object-cover ${active.objectTop ? "object-top" : "object-center"}`}
                        />
                        {active.kind === "video-look" && (
                          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <span className="w-11 h-11 rounded-full border-2 border-foreground bg-card/90 flex items-center justify-center shadow-[2px_2px_0_0_hsl(var(--foreground))]">
                              <span className="ml-0.5 w-0 h-0 border-y-[7px] border-y-transparent border-l-[11px] border-l-foreground" />
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                    <p className="mt-2 text-center text-[12px] text-foreground/45 lowercase">
                      {active.filename}
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="h-full min-h-[260px] md:min-h-[300px] rounded-[1.35rem] border-2 border-dashed border-foreground/25 bg-card/40 flex items-center justify-center px-6"
                  >
                    <p className="text-[14px] text-muted-foreground lowercase text-center">
                      hover an icon below to open a preview
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Icon rail */}
            <div className="mt-8 md:mt-10 flex flex-wrap items-start justify-center gap-3 md:gap-4 pointer-events-auto">
              {peeks.map((peek, i) => {
                const Icon = peek.icon;
                const isActive = activeId === peek.id;
                return (
                  <motion.button
                    key={peek.id}
                    type="button"
                    aria-label={`Preview ${peek.label}`}
                    aria-pressed={isActive}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.05, ease }}
                    whileHover={{ y: -4, rotate: 0 }}
                    onMouseEnter={() => setActiveId(peek.id)}
                    onFocus={() => setActiveId(peek.id)}
                    onClick={() => setActiveId(peek.id)}
                    className="flex flex-col items-center gap-1.5 group"
                  >
                    <span
                      className={`w-12 h-12 md:w-14 md:h-14 rounded-[1rem] border-2 border-foreground flex items-center justify-center transition-all ${
                        isActive
                          ? "bg-folk-bubble text-folk-bubble-foreground shadow-[4px_4px_0_0_hsl(var(--foreground))]"
                          : "bg-card text-foreground shadow-[3px_3px_0_0_hsl(var(--foreground))] group-hover:shadow-[4px_4px_0_0_hsl(var(--foreground))]"
                      }`}
                    >
                      <Icon size={20} strokeWidth={2} />
                    </span>
                    <span
                      className={`rounded-full border-2 border-foreground px-2.5 py-0.5 text-[10px] md:text-[11px] font-medium lowercase shadow-[2px_2px_0_0_hsl(var(--foreground))] ${
                        isActive ? "bg-folk-bubble text-folk-bubble-foreground" : "bg-folk-panel text-foreground"
                      }`}
                    >
                      {peek.label}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>

        <p className="mt-6 text-center text-[12px] text-muted-foreground/70 lowercase hidden md:block">
          tip: hover the little photos at the edges too
        </p>
      </div>
    </section>
  );
};

export default DownloadDesktopHero;
