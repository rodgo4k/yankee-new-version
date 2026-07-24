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

const RadialCardsSlider = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const cardEls = cardRefs.current.filter(Boolean) as HTMLDivElement[];
    const n = cardEls.length;
    const step = 360 / n;
    const proxy = document.createElement("div");
    const HALF_ARC = 52;
    const PACK = 0.38;
    let angle = 0;
    let dragging = false;

    gsap.set(cardEls, { transformOrigin: "50% 100%", xPercent: -50, yPercent: 0 });

    const layout = () => {
      const w = root.clientWidth;
      const radiusX = Math.min(560, Math.max(300, w * 0.46));
      const radiusY = Math.min(300, Math.max(180, w * 0.26));

      cardEls.forEach((card, i) => {
        const rel = norm(angle + i * step) * PACK;
        const abs = Math.abs(rel);
        const onArc = abs <= HALF_ARC + 4;

        const t = Math.max(-1, Math.min(1, rel / HALF_ARC));
        const theta = t * HALF_ARC * (Math.PI / 180);

        const x = Math.sin(theta) * radiusX;
        const y = -Math.cos(theta) * radiusY;

        const rot =
          (Math.atan2(Math.sin(theta) * radiusY, Math.cos(theta) * radiusX) * 180) /
          Math.PI;

        const edge = Math.min(1, abs / HALF_ARC);
        const fade = onArc ? Math.pow(1 - edge, 1.05) : 0;
        const scale = 0.9 + fade * 0.18;

        gsap.set(card, {
          x,
          y,
          scale,
          zIndex: Math.round(fade * 100),
          opacity: Math.max(0, fade),
          rotate: rot,
          pointerEvents: fade > 0.12 ? "auto" : "none",
        });
      });
    };

    layout();

    const tick = () => {
      if (!dragging) {
        angle += 0.1;
        layout();
      }
    };
    gsap.ticker.add(tick);

    const [draggable] = Draggable.create(proxy, {
      trigger: root,
      type: "x",
      inertia: false,
      onPress() {
        dragging = true;
      },
      onDrag() {
        angle += this.deltaX * 0.34;
        layout();
      },
      onRelease() {
        dragging = false;
      },
    });

    const onResize = () => layout();
    window.addEventListener("resize", onResize);

    return () => {
      gsap.ticker.remove(tick);
      draggable?.kill();
      window.removeEventListener("resize", onResize);
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
              className="absolute left-0 top-0 w-[110px] sm:w-[138px] md:w-[152px] will-change-transform"
            >
              <div className="yankee-surface yankee-surface--media rounded-[1.15rem] bg-card overflow-hidden">
                {}
                <div className="aspect-[9/16] bg-muted overflow-hidden">
                  <img
                    src={card.src}
                    alt=""
                    className="w-full h-full object-cover object-top pointer-events-none"
                    draggable={false}
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
