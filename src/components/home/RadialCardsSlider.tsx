import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import homeFeed from "@/assets/yankee/home-feed.png";
import chat from "@/assets/yankee/chat.png";
import videoCall from "@/assets/yankee/video-call.png";
import crowdsHome from "@/assets/yankee/crowds-home.png";
import messages from "@/assets/yankee/messages.png";
import aiChat from "@/assets/yankee/ai-chat.png";
import profileView from "@/assets/yankee/profile-view.png";
import searchImg from "@/assets/yankee/search.png";
import { isMotionPaused, observeInView, subscribeMotionPause } from "@/lib/motionPause";

gsap.registerPlugin(Draggable);

const cards = [
  { src: homeFeed, label: "feed" },
  { src: chat, label: "chat" },
  { src: videoCall, label: "calls" },
  { src: crowdsHome, label: "crowds" },
  { src: messages, label: "inbox" },
  { src: aiChat, label: "AI agent" },
  { src: profileView, label: "profile" },
  { src: searchImg, label: "search" },
];

const norm = (deg: number) => {
  let d = ((deg % 360) + 360) % 360;
  if (d > 180) d -= 360;
  return d;
};

type CardSetters = {
  x: (v: number) => void;
  y: (v: number) => void;
  scale: (v: number) => void;
  rotate: (v: number) => void;
  opacity: (v: number) => void;
  zIndex: (v: number) => void;
};

const RadialCardsSlider = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    let cleanup = () => {};

    try {
      const cardEls = cardRefs.current.filter(Boolean) as HTMLDivElement[];
      const n = cardEls.length;
      if (n === 0) return;

      const step = 360 / n;
      const proxy = document.createElement("div");
      const HALF_ARC = 52;
      const PACK = 0.38;
      const narrow =
        typeof window !== "undefined" && window.matchMedia("(max-width: 768px)").matches;
      let angle = 0;
      let dragging = false;
      let inView = true;
      let paused = isMotionPaused();
      let leaveTimer = 0;
      let frame = 0;
      const active = new Array(n).fill(false);

      gsap.set(cardEls, {
        transformOrigin: "50% 100%",
        xPercent: -50,
        yPercent: 0,
        opacity: 0,
        force3D: !narrow,
      });
      cardEls.forEach((card) => {
        card.style.visibility = "hidden";
        card.style.pointerEvents = "none";
      });

      const setters: CardSetters[] = cardEls.map((card) => ({
        x: gsap.quickSetter(card, "x", "px") as (v: number) => void,
        y: gsap.quickSetter(card, "y", "px") as (v: number) => void,
        scale: gsap.quickSetter(card, "scale") as (v: number) => void,
        rotate: gsap.quickSetter(card, "rotate", "deg") as (v: number) => void,
        opacity: gsap.quickSetter(card, "opacity") as (v: number) => void,
        zIndex: gsap.quickSetter(card, "zIndex") as (v: number) => void,
      }));

      const layout = () => {
        const w = root.clientWidth || window.innerWidth;
        const radiusX = Math.min(560, Math.max(300, w * 0.46));
        const radiusY = Math.min(300, Math.max(180, w * 0.26));

        for (let i = 0; i < n; i++) {
          const card = cardEls[i];
          const rel = norm(angle + i * step) * PACK;
          const abs = Math.abs(rel);
          const onArc = abs <= HALF_ARC + 4;
          const set = setters[i];

          if (!onArc) {
            set.opacity(0);
            card.style.visibility = "hidden";
            card.style.pointerEvents = "none";
            active[i] = false;
            continue;
          }

          const t = Math.max(-1, Math.min(1, rel / HALF_ARC));
          const theta = t * HALF_ARC * (Math.PI / 180);
          const x = Math.sin(theta) * radiusX;
          const y = -Math.cos(theta) * radiusY;
          const rot =
            (Math.atan2(Math.sin(theta) * radiusY, Math.cos(theta) * radiusX) * 180) /
            Math.PI;
          const edge = Math.min(1, abs / HALF_ARC);
          const fade = Math.pow(1 - edge, 1.05);
          const scale = 0.9 + fade * 0.18;
          const interactive = fade > 0.12;

          if (!active[i]) {
            card.style.visibility = "visible";
            active[i] = true;
          }

          set.x(x);
          set.y(y);
          set.scale(scale);
          set.rotate(rot);
          set.opacity(Math.max(0, fade));
          set.zIndex(Math.round(fade * 100));
          card.style.pointerEvents = interactive ? "auto" : "none";
        }
      };

      layout();

      const shouldRun = () => inView && !paused;

      const tick = () => {
        if (!shouldRun() || dragging) return;
        frame += 1;
        if (narrow && frame % 2 === 1) return;
        angle += narrow ? 0.2 : 0.1;
        layout();
      };
      gsap.ticker.add(tick);

      const [draggable] = Draggable.create(proxy, {
        trigger: root,
        type: "x",
        inertia: false,
        onPress() {
          if (!shouldRun()) return;
          dragging = true;
        },
        onDrag() {
          if (!inView || paused) return;
          angle += this.deltaX * 0.34;
          layout();
        },
        onRelease() {
          dragging = false;
        },
      });

      const onResize = () => layout();
      window.addEventListener("resize", onResize);

      const unsubView = observeInView(
        root,
        (next) => {
          if (next) {
            window.clearTimeout(leaveTimer);
            inView = true;
            layout();
            return;
          }
          window.clearTimeout(leaveTimer);
          leaveTimer = window.setTimeout(() => {
            inView = false;
          }, 450);
        },
        { rootMargin: "160px 0px", threshold: 0 },
      );

      const unsubPause = subscribeMotionPause((next) => {
        paused = next;
        if (!next && inView) layout();
      });

      cleanup = () => {
        gsap.ticker.remove(tick);
        draggable?.kill();
        window.removeEventListener("resize", onResize);
        window.clearTimeout(leaveTimer);
        unsubView();
        unsubPause();
      };
    } catch (err) {
      console.error("RadialCardsSlider init failed:", err);
    }

    return () => cleanup();
  }, []);

  return (
    <div className="w-full h-full select-none">
      <div
        ref={rootRef}
        className="relative h-full cursor-grab active:cursor-grabbing touch-none overflow-visible"
        aria-label="Drag to spin feature cards along the arc"
      >
        <div className="absolute left-1/2 top-[78%] md:top-[82%] -translate-x-1/2 w-0 h-0">
          {cards.map((card, i) => (
            <div
              key={card.label}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              className="absolute left-0 top-0 w-[110px] sm:w-[138px] md:w-[152px] opacity-0 invisible pointer-events-none"
            >
              <div className="yankee-surface yankee-surface--media rounded-[1.15rem] bg-card overflow-hidden">
                <div className="aspect-[9/16] bg-muted overflow-hidden">
                  <img
                    src={card.src}
                    alt=""
                    className="w-full h-full object-cover object-top pointer-events-none"
                    draggable={false}
                    decoding="async"
                    loading={i < 3 ? "eager" : "lazy"}
                  />
                </div>
                <p className="px-2 py-1.5 text-center text-[11px] font-medium lowercase tracking-tight border-t border-foreground/8">
                  {card.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RadialCardsSlider;
