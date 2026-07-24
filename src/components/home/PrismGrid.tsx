import { useCallback, useEffect, useMemo, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";

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
  const [dims, setDims] = useState({ cols: 0, rows: 0 });
  const [lit, setLit] = useState<Record<number, string>>({});
  const fadeTimers = useRef<Map<number, number>>(new Map());

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const measure = () => {
      const { width, height } = el.getBoundingClientRect();
      const cols = Math.max(1, Math.ceil(width / boxSize) + 2);
      const rows = Math.max(1, Math.ceil(height / boxSize) + 2);
      setDims({ cols, rows });
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [boxSize]);

  const total = dims.cols * dims.rows;

  const lightCell = useCallback(
    (index: number) => {
      if (index < 0 || index >= total) return;
      const color = colors[Math.floor(Math.random() * colors.length)] ?? colors[0];
      setLit((prev) => ({ ...prev, [index]: color }));

      const existing = fadeTimers.current.get(index);
      if (existing) window.clearTimeout(existing);

      const t = window.setTimeout(() => {
        setLit((prev) => {
          if (!(index in prev)) return prev;
          const next = { ...prev };
          delete next[index];
          return next;
        });
        fadeTimers.current.delete(index);
      }, 1200);
      fadeTimers.current.set(index, t);
    },
    [colors, total],
  );

  useEffect(() => {
    return () => {
      fadeTimers.current.forEach((t) => window.clearTimeout(t));
      fadeTimers.current.clear();
    };
  }, []);

  useEffect(() => {
    if (!idle || total === 0) return;
    const id = window.setInterval(() => {
      const n = 4 + Math.floor(Math.random() * 5);
      for (let i = 0; i < n; i++) {
        lightCell(Math.floor(Math.random() * total));
      }
    }, 420);
    return () => window.clearInterval(id);
  }, [idle, total, lightCell]);

  const onMove = (e: ReactPointerEvent<HTMLDivElement>) => {
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

    const col = Math.floor(ux / boxSize);
    const row = Math.floor(uy / boxSize);
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
        className="absolute left-1/2 top-1/2 will-change-transform"
        style={{
          width: dims.cols * boxSize,
          height: dims.rows * boxSize,
          transform: `translate(-50%, -50%) rotateX(${rotate.y ?? 0}deg) rotateY(${rotate.x ?? 0}deg)`,
          transformStyle: "preserve-3d",
          display: "grid",
          gridTemplateColumns: `repeat(${dims.cols}, ${boxSize}px)`,
          gridTemplateRows: `repeat(${dims.rows}, ${boxSize}px)`,
          borderTop: `${borderWidth}px solid ${borderColor}`,
          borderLeft: `${borderWidth}px solid ${borderColor}`,
        }}
      >
        {cells.map((i) => (
          <div
            key={i}
            style={{
              width: boxSize,
              height: boxSize,
              boxSizing: "border-box",
              borderRight: `${borderWidth}px solid ${borderColor}`,
              borderBottom: `${borderWidth}px solid ${borderColor}`,
              backgroundColor: lit[i] ?? "transparent",
              transition: "background-color 1s ease",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default PrismGrid;
