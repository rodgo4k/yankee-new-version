import { useCallback, useEffect, useRef, useState } from "react";

type DotImageRevealProps = {
  /** Image sampled into every resting/open dot */
  image: string;
  /** Fill behind the grid (gaps between dots) */
  background?: string;
  /** Number of columns; rows auto-fill height */
  dots?: number;
  /** Space between resting dots in px */
  gap?: number;
  /** Cursor trigger radius in px */
  radius?: number;
  /** How evenly the trigger area opens (1–20) */
  intensity?: number;
  /** cover crops to fill; contain shows the full image */
  fit?: "cover" | "contain";
  className?: string;
  alt?: string;
};

/**
 * Origin Kit–style Dot Image Reveal:
 * each resting circle already shows its slice of the image;
 * near the pointer, dots open into a continuous picture.
 */
const DotImageReveal = ({
  image,
  background = "transparent",
  dots = 18,
  gap = 14,
  radius = 150,
  intensity = 10,
  fit = "cover",
  className = "",
  alt = "",
}: DotImageRevealProps) => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const pointerRef = useRef<{ x: number; y: number; active: boolean }>({
    x: -9999,
    y: -9999,
    active: false,
  });
  const rafRef = useRef<number>(0);
  const [ready, setReady] = useState(false);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    const img = imgRef.current;
    if (!canvas || !wrap || !img || !img.complete) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = wrap.clientWidth;
    const h = wrap.clientHeight;
    if (w <= 0 || h <= 0) return;

    const cssW = Math.round(w);
    const cssH = Math.round(h);
    if (canvas.width !== cssW * dpr || canvas.height !== cssH * dpr) {
      canvas.width = cssW * dpr;
      canvas.height = cssH * dpr;
      canvas.style.width = `${cssW}px`;
      canvas.style.height = `${cssH}px`;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    ctx.clearRect(0, 0, cssW, cssH);
    if (background !== "transparent") {
      ctx.fillStyle = background;
      ctx.fillRect(0, 0, cssW, cssH);
    }

    const cols = Math.max(4, Math.round(dots));
    const { x: px, y: py, active } = pointerRef.current;
    const falloff = Math.max(0.15, 1 - intensity / 20);

    let dx = 0;
    let dy = 0;
    let dw = cssW;
    let dh = cssH;
    let sx = 0;
    let sy = 0;
    let sw = img.naturalWidth;
    let sh = img.naturalHeight;

    if (fit === "contain") {
      const scale = Math.min(cssW / img.naturalWidth, cssH / img.naturalHeight);
      dw = img.naturalWidth * scale;
      dh = img.naturalHeight * scale;
      dx = (cssW - dw) / 2;
      dy = (cssH - dh) / 2;
    } else {
      const ir = img.naturalWidth / img.naturalHeight;
      const cr = cssW / cssH;
      if (ir > cr) {
        sw = img.naturalHeight * cr;
        sx = (img.naturalWidth - sw) / 2;
      } else {
        sh = img.naturalWidth / cr;
        sy = (img.naturalHeight - sh) / 2;
      }
    }

    const cellW = dw / cols;
    const rows = Math.max(1, Math.round(dh / cellW));
    const cellH = dh / rows;

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const cx = dx + (col + 0.5) * cellW;
        const cy = dy + (row + 0.5) * cellH;

        const dist = active ? Math.hypot(cx - px, cy - py) : 9999;
        const t = Math.max(0, 1 - dist / radius);
        const open = Math.pow(t, falloff);

        const base = Math.min(cellW, cellH);
        // Resting: larger image circles. Open: expand past the cell so neighbors touch
        const restSize = Math.max(4, Math.min(base - gap * 0.25, base * 0.72));
        const openSize = Math.max(cellW, cellH) * 1.08;
        const size = restSize + (openSize - restSize) * open;
        const radiusDot = size / 2;
        // Fully open → square tiles that kiss; resting stays circular
        const round = Math.max(0.5, radiusDot * (1 - open));

        const x = cx - radiusDot;
        const y = cy - radiusDot;
        const rw = size;
        const rh = size;
        const rr = Math.max(0.5, round);

        ctx.save();
        ctx.beginPath();
        ctx.moveTo(x + rr, y);
        ctx.arcTo(x + rw, y, x + rw, y + rh, rr);
        ctx.arcTo(x + rw, y + rh, x, y + rh, rr);
        ctx.arcTo(x, y + rh, x, y, rr);
        ctx.arcTo(x, y, x + rw, y, rr);
        ctx.closePath();
        ctx.clip();

        // Full-frame draw under the clip so open neighbors blend into one picture
        ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh);
        ctx.restore();
      }
    }
  }, [background, dots, fit, gap, intensity, radius]);

  useEffect(() => {
    const img = new Image();
    img.decoding = "async";
    img.src = image;
    img.onload = () => {
      imgRef.current = img;
      setReady(true);
    };
    return () => {
      img.onload = null;
    };
  }, [image]);

  useEffect(() => {
    if (!ready) return;

    const loop = () => {
      draw();
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);

    const onResize = () => draw();
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
    };
  }, [ready, draw]);

  const setPointer = (clientX: number, clientY: number, active: boolean) => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const rect = wrap.getBoundingClientRect();
    pointerRef.current = {
      x: clientX - rect.left,
      y: clientY - rect.top,
      active,
    };
  };

  return (
    <div
      ref={wrapRef}
      className={`relative w-full h-full touch-none select-none overflow-hidden ${className}`}
      role="img"
      aria-label={alt}
      onPointerMove={(e) => setPointer(e.clientX, e.clientY, true)}
      onPointerEnter={(e) => setPointer(e.clientX, e.clientY, true)}
      onPointerLeave={() => {
        pointerRef.current.active = false;
      }}
      onPointerDown={(e) => {
        (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
        setPointer(e.clientX, e.clientY, true);
      }}
      onPointerUp={(e) => {
        try {
          (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
        } catch {
          /* ignore */
        }
        if (e.pointerType === "touch") {
          pointerRef.current.active = false;
        }
      }}
    >
      <canvas ref={canvasRef} className="absolute inset-0 block w-full h-full" />
      {!ready && <div className="absolute inset-0 animate-pulse bg-muted" aria-hidden />}
    </div>
  );
};

export default DotImageReveal;
