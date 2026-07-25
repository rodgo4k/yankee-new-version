import { useCallback, useEffect, useMemo, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import { observeInView, isMotionPaused, subscribeMotionPause } from "@/lib/motionPause";

type PrismGridProps = {
  backgroundColor?: string;
  boxSize?: number;
  borderWidth?: number;
  borderColor?: string;
  rotate?: { x?: number; y?: number };
  colors?: string[];
  className?: string;
  idle?: boolean;
};

const DEFAULT_COLORS = [
  "rgba(96, 165, 250, 0.55)",
  "rgba(59, 130, 246, 0.5)",
  "rgba(147, 197, 253, 0.55)",
  "rgba(251, 191, 36, 0.4)",
  "rgba(253, 224, 171, 0.5)",
  "rgba(167, 243, 208, 0.45)",
  "rgba(196, 181, 253, 0.45)",
  "rgba(253, 186, 116, 0.4)",
];

const PrismGrid = ({
  backgroundColor = "hsl(40 30% 97%)",
  boxSize = 44,
  borderWidth = 1,
  borderColor = "rgba(30, 20, 10, 0.08)",
  rotate = { x: 0, y: 0 },
  colors = DEFAULT_COLORS,
  className = "",
  idle = true,
}: PrismGridProps) => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const cellRefs = useRef<(HTMLDivElement | null)[]>([]);
  const fadeTimers = useRef<Map<number, number>>(new Map());
  const activeRef = useRef(true);
  const inViewRef = useRef(true);
  const lastMoveRef = useRef(0);
  const [dims, setDims] = useState({ cols: 0, rows: 0 });
  const [isNarrow, setIsNarrow] = useState(() =>
    typeof window !== "undefined" && window.matchMedia("(max-width: 768px)").matches,
  );

  const effectiveBox = isNarrow ? Math.max(boxSize, 56) : boxSize;
  const idleMs = isNarrow ? 720 : 420;
  const idleBurst = isNarrow ? 2 : 4;

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const sync = () => setIsNarrow(mq.matches);
    sync();
    if (typeof mq.addEventListener === "function") {
      mq.addEventListener("change", sync);
      return () => mq.removeEventListener("change", sync);
    }
    mq.addListener(sync);
    return () => mq.removeListener(sync);
  }, []);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const measure = () => {
      const { width, height } = el.getBoundingClientRect();
      const cols = Math.max(1, Math.ceil(width / effectiveBox) + 2);
      const rows = Math.max(1, Math.ceil(height / effectiveBox) + 2);
      setDims((prev) => (prev.cols === cols && prev.rows === rows ? prev : { cols, rows }));
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [effectiveBox]);

  const total = dims.cols * dims.rows;

  const clearCell = useCallback((index: number) => {
    const cell = cellRefs.current[index];
    if (cell) cell.style.backgroundColor = "transparent";
    fadeTimers.current.delete(index);
  }, []);

  const lightCell = useCallback(
    (index: number) => {
      if (!activeRef.current || index < 0 || index >= total) return;
      const cell = cellRefs.current[index];
      if (!cell) return;

      const color = colors[Math.floor(Math.random() * colors.length)] ?? colors[0];
      cell.style.backgroundColor = color;

      const existing = fadeTimers.current.get(index);
      if (existing) window.clearTimeout(existing);

      const t = window.setTimeout(() => clearCell(index), isNarrow ? 1400 : 1200);
      fadeTimers.current.set(index, t);
    },
    [clearCell, colors, total, isNarrow],
  );

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const syncActive = () => {
      activeRef.current = inViewRef.current && !isMotionPaused();
    };

    const unsubPause = subscribeMotionPause(() => syncActive());
    const unsubView = observeInView(el, (inView) => {
      inViewRef.current = inView;
      syncActive();
      if (!inView) {
        fadeTimers.current.forEach((timer) => window.clearTimeout(timer));
        fadeTimers.current.clear();
      }
    });

    return () => {
      unsubPause();
      unsubView();
      fadeTimers.current.forEach((timer) => window.clearTimeout(timer));
      fadeTimers.current.clear();
    };
  }, []);

  useEffect(() => {
    if (!idle || total === 0) return;

    const id = window.setInterval(() => {
      if (!activeRef.current) return;
      const n = idleBurst + Math.floor(Math.random() * (isNarrow ? 2 : 5));
      for (let i = 0; i < n; i++) {
        lightCell(Math.floor(Math.random() * total));
      }
    }, idleMs);

    return () => window.clearInterval(id);
  }, [idle, total, lightCell, idleMs, idleBurst, isNarrow]);

  const onMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (!activeRef.current) return;
    const now = performance.now();
    if (now - lastMoveRef.current < (isNarrow ? 48 : 32)) return;
    lastMoveRef.current = now;

    const el = wrapRef.current;
    if (!el || dims.cols === 0) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    if (x < 0 || y < 0 || x > rect.width || y > rect.height) return;

    const rx = ((rotate.x ?? 0) * Math.PI) / 180;
    const ry = ((rotate.y ?? 0) * Math.PI) / 180;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const dx = x - cx;
    const dy = y - cy;
    const ux = dx * Math.cos(ry) + cx;
    const uy = dy * Math.cos(rx) + cy;

    const col = Math.floor(ux / effectiveBox);
    const row = Math.floor(uy / effectiveBox);
    if (col < 0 || row < 0 || col >= dims.cols || row >= dims.rows) return;
    lightCell(row * dims.cols + col);
  };

  const cells = useMemo(() => Array.from({ length: total }, (_, i) => i), [total]);

  return (
    <div
      ref={wrapRef}
      className={`absolute inset-0 overflow-hidden ${className}`}
      style={{ backgroundColor, perspective: 1200 }}
      onPointerMove={onMove}
      aria-hidden
    >
      <div
        className="absolute left-1/2 top-1/2"
        style={{
          width: dims.cols * effectiveBox,
          height: dims.rows * effectiveBox,
          transform: `translate3d(-50%, -50%, 0) rotateX(${rotate.y ?? 0}deg) rotateY(${rotate.x ?? 0}deg)`,
          transformStyle: "preserve-3d",
          display: "grid",
          gridTemplateColumns: `repeat(${dims.cols}, ${effectiveBox}px)`,
          gridTemplateRows: `repeat(${dims.rows}, ${effectiveBox}px)`,
          borderTop: `${borderWidth}px solid ${borderColor}`,
          borderLeft: `${borderWidth}px solid ${borderColor}`,
        }}
      >
        {cells.map((i) => (
          <div
            key={i}
            ref={(node) => {
              cellRefs.current[i] = node;
            }}
            style={{
              width: effectiveBox,
              height: effectiveBox,
              boxSizing: "border-box",
              borderRight: `${borderWidth}px solid ${borderColor}`,
              borderBottom: `${borderWidth}px solid ${borderColor}`,
              backgroundColor: "transparent",
              transition: "background-color 1s ease",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default PrismGrid;
