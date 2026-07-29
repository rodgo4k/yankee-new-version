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
import { observeInView } from "@/lib/motionPause";

gsap.registerPlugin(Draggable);

const allCards = [
  { src: homeFeed, label: "feed" },
  { src: chat, label: "chat" },
  { src: videoCall, label: "calls" },
  { src: crowdsHome, label: "crowds" },
  { src: messages, label: "inbox" },
  { src: aiChat, label: "AI agent" },
  { src: profileView, label: "profile" },
  { src: searchImg, label: "search" },
];

const cards =
  typeof window !== "undefined" && window.matchMedia("(max-width: 768px)").matches
    ? allCards.slice(0, 5)
    : allCards;

const norm = (deg: number) => {
  let d = ((deg % 360) + 360) % 360;
  if (d > 180) d -= 360;
  return d;
};

const RadialCardsSlider = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    let cancelled = false;
    let cleanup = () => {};
    let rafWait = 0;

    const boot = () => {
      if (cancelled) return;
      const cardEls = cardRefs.current.filter(Boolean) as HTMLDivElement[];
      if (cardEls.length === 0) {
        rafWait = requestAnimationFrame(boot);
        return;
      }

      const n = cardEls.length;
      const step = 360 / n;
      const proxy = document.createElement("div");
      const narrow = window.matchMedia("(max-width: 768px)").matches;
      /** Match the hero print on iPhone: five tightly packed phones. */
      const HALF_ARC = narrow ? 48 : 52;
      // Lower PACK = neighbors sit closer on the arc
      const PACK = narrow ? 0.26 : 0.38;
      const frameMs = narrow ? 72 : 16;
      const spin = narrow ? 0.55 : 0.1;
      let angle = 0;
      let dragging = false;
      let inView = true;
      let leaveTimer = 0;
      let raf = 0;
      let tickTimer = 0;
      let lastTs = 0;

      cardEls.forEach((card) => {
        card.style.transformOrigin = "50% 100%";
        if (!narrow) card.style.willChange = "transform, opacity";
        card.style.opacity = "0";
        card.style.visibility = "hidden";
      });

      const layout = () => {
        const w = root.clientWidth || window.innerWidth;
        // CRITICAL: do not floor mobile radius at 300 — that spreads cards on iPhone.
        const radiusX = narrow
          ? Math.min(152, Math.max(112, w * 0.36))
          : Math.min(560, Math.max(300, w * 0.46));
        const radiusY = narrow
          ? Math.min(108, Math.max(78, w * 0.2))
          : Math.min(300, Math.max(170, w * 0.26));

        for (let i = 0; i < n; i++) {
          const card = cardEls[i];
          const rel = norm(angle + i * step) * PACK;
          const abs = Math.abs(rel);
          const onArc = abs <= HALF_ARC + 4;

          if (!onArc) {
            card.style.opacity = "0";
            card.style.visibility = "hidden";
            card.style.pointerEvents = "none";
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
          const scale = narrow ? 0.92 + fade * 0.14 : 0.9 + fade * 0.18;

          card.style.visibility = "visible";
          card.style.opacity = String(Math.max(0.12, fade));
          card.style.zIndex = String(Math.round(fade * 100));
          card.style.pointerEvents = fade > 0.12 ? "auto" : "none";
          card.style.transform = `translate(-50%, 0) translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0) rotate(${rot.toFixed(2)}deg) scale(${scale.toFixed(3)})`;
        }
      };

      layout();

      const shouldRun = () => inView;

      const clearTick = () => {
        cancelAnimationFrame(raf);
        window.clearTimeout(tickTimer);
        raf = 0;
        tickTimer = 0;
      };

      const scheduleTick = () => {
        clearTick();
        if (!shouldRun()) return;

        // iPhone: do not keep a rAF loop awake every frame (causes jank).
        if (narrow) {
          const stepOnce = () => {
            tickTimer = window.setTimeout(() => {
              if (!shouldRun()) return;
              if (!dragging) {
                angle += spin;
                layout();
              }
              if (shouldRun()) stepOnce();
            }, frameMs);
          };
          stepOnce();
          return;
        }

        const loop = (ts: number) => {
          raf = requestAnimationFrame(loop);
          if (!shouldRun() || dragging) return;
          if (ts - lastTs < frameMs) return;
          lastTs = ts;
          angle += spin;
          layout();
        };
        raf = requestAnimationFrame(loop);
      };

      scheduleTick();

      const [draggable] = Draggable.create(proxy, {
        trigger: root,
        type: "x",
        inertia: false,
        onPress() {
          if (!shouldRun()) return;
          dragging = true;
        },
        onDrag() {
          if (!inView) return;
          angle += this.deltaX * (narrow ? 0.28 : 0.34);
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
            scheduleTick();
            return;
          }
          window.clearTimeout(leaveTimer);
          leaveTimer = window.setTimeout(() => {
            inView = false;
            clearTick();
          }, 450);
        },
        { rootMargin: "160px 0px", threshold: 0 },
      );

      cleanup = () => {
        clearTick();
        draggable?.kill();
        window.removeEventListener("resize", onResize);
        window.clearTimeout(leaveTimer);
        unsubView();
        cardEls.forEach((card) => {
          card.style.willChange = "auto";
        });
      };
    };

    boot();

    return () => {
      cancelled = true;
      cancelAnimationFrame(rafWait);
      cleanup();
    };
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
              className="absolute left-0 top-0 w-[96px] sm:w-[138px] md:w-[152px]"
              style={{ opacity: 0, visibility: "hidden" as const }}
            >
              <div className="yankee-surface yankee-surface--media rounded-[1.15rem] bg-card overflow-hidden">
                <div className="aspect-[9/16] bg-muted overflow-hidden">
                  <img
                    src={card.src}
                    alt=""
                    className="w-full h-full object-cover object-top pointer-events-none"
                    draggable={false}
                    decoding="async"
                    loading={i < 4 ? "eager" : "lazy"}
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
