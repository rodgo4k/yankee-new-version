import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Apple,
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
};

const DownloadDesktopHero = ({ iosHref }: DownloadDesktopHeroProps) => {
  const [activeId, setActiveId] = useState<string | null>("feed");
  const active = peeks.find((p) => p.id === activeId) ?? null;

  return (
    <section className="relative -mt-12 md:-mt-14 min-h-[100svh] pt-14 md:pt-16 pb-6 md:pb-8 overflow-x-hidden dotted-bg flex flex-col">
      <div className="absolute inset-0 bg-background/80" />

      <div className="relative flex-1 flex flex-col justify-center max-w-[1200px] w-full mx-auto px-5 md:px-6">
        {}
        <div className="relative flex-1 flex flex-col justify-center min-h-0 py-2">
          <HeroEdgeStickers satellites={satellites} />

          {}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="hidden lg:block absolute top-[18%] left-[14%] z-[5] font-serif-display italic text-[13px] text-foreground/25 lowercase -rotate-6 pointer-events-none"
          >
            no algorithm
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="hidden lg:block absolute top-[20%] right-[12%] z-[5] font-serif-display italic text-[13px] text-foreground/25 lowercase rotate-6 pointer-events-none"
          >
            finite scroll
          </motion.span>

          {}
          <div className="relative z-20 pointer-events-none flex flex-col items-center">
            <div className="text-center max-w-xl mx-auto pointer-events-auto shrink-0">
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="font-serif-display italic text-[1rem] md:text-[1.15rem] text-foreground/45 lowercase"
              >
                download
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.06, ease }}
                className="mt-1 text-[2.4rem] sm:text-5xl md:text-[3.5rem] font-semibold text-foreground tracking-tight leading-[0.9] lowercase"
              >
                <span className="font-serif-display italic font-medium">yankee</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.16 }}
                className="mt-2.5 text-[13px] md:text-[15px] text-muted-foreground lowercase max-w-md mx-auto"
              >
                the quieter social app. hover icons — and the stickers around the edges.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.26 }}
                className="mt-4 flex flex-wrap items-center justify-center gap-3"
              >
                <a
                  href={iosHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 px-5 py-3 rounded-full text-[14px] font-semibold text-folk-bubble-foreground lowercase tracking-tight folk-cta shadow-[0_14px_40px_-10px_rgba(37,99,235,0.55),inset_0_1px_0_rgba(255,255,255,0.35)] hover:brightness-105 transition-[filter,transform] active:scale-[0.98]"
                >
                  <Apple size={16} /> download for ios
                </a>
              </motion.div>
            </div>

            {}
            <div className="mt-4 md:mt-5 relative mx-auto w-[min(150px,28vw)] sm:w-[min(168px,22vw)] md:w-[min(180px,18vw)] pointer-events-auto shrink-0">
              <AnimatePresence mode="wait">
                {active ? (
                  <motion.div
                    key={active.id}
                    initial={{ opacity: 0, y: 12, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 380, damping: 28 }}
                    className="w-full"
                  >
                    <div className="yankee-surface relative rounded-[1.55rem] bg-card p-1.5">
                      <button
                        type="button"
                        aria-label="Close preview"
                        onClick={() => setActiveId(null)}
                        className="yankee-surface yankee-surface--control absolute -top-2 -right-2 z-20 w-6 h-6 rounded-full bg-card text-foreground/55 hover:text-foreground flex items-center justify-center"
                      >
                        <X size={12} />
                      </button>
                      <div className="relative aspect-[9/17] max-h-[min(38svh,300px)] rounded-[1.2rem] bg-muted overflow-hidden mx-auto">
                        <span className="absolute left-1/2 -translate-x-1/2 top-1.5 z-10 w-12 h-3 rounded-full bg-foreground/90 pointer-events-none" />
                        <img
                          src={active.media}
                          alt={active.label}
                          className={`w-full h-full object-cover ${active.objectTop ? "object-top" : "object-center"}`}
                        />
                        {active.kind === "video-look" && (
                          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <span className="yankee-surface yankee-surface--control w-9 h-9 rounded-full bg-card/90 flex items-center justify-center">
                              <span className="ml-0.5 w-0 h-0 border-y-[6px] border-y-transparent border-l-[9px] border-l-foreground" />
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                    <p className="mt-1.5 text-center text-[11px] text-foreground/45 lowercase">
                      {active.label}
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="aspect-[9/17] max-h-[min(38svh,300px)] rounded-[1.55rem] border-2 border-dashed border-foreground/25 bg-card/40 flex items-center justify-center px-4"
                  >
                    <p className="text-[12px] text-muted-foreground lowercase text-center">
                      hover an icon below
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="mt-4 md:mt-5 flex flex-wrap items-start justify-center gap-2.5 md:gap-3.5 pointer-events-auto shrink-0">
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
                    className="flex flex-col items-center gap-1 group"
                  >
                    <span
                      className={`yankee-surface w-10 h-10 md:w-11 md:h-11 rounded-[0.9rem] flex items-center justify-center transition-all ${ isActive ? "bg-folk-bubble text-folk-bubble-foreground " : "bg-card text-foreground " }`}
                    >
                      <Icon size={17} strokeWidth={2} />
                    </span>
                    <span
                      className={`yankee-surface yankee-surface--control rounded-full px-2 py-0.5 text-[9px] md:text-[10px] font-medium lowercase ${ isActive ? "bg-folk-bubble text-folk-bubble-foreground" : "bg-folk-panel text-foreground" }`}
                    >
                      {peek.label}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadDesktopHero;
