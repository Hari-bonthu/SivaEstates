import React, { useEffect, useRef, useState } from "react";

// Magnetic Carousel — Originkit Raw React Implementation
// A row of thin image bars that magnify (width + height) as the cursor nears,
// macOS-dock style — the bar under the cursor grows most, neighbors taper off
// by distance. Click a bar to open it as a large preview; click again to collapse.

const RenderTarget = {
  current: () => "preview",
  canvas: "canvas",
  export: "export",
  thumbnail: "thumbnail",
  preview: "preview",
};

const EASE_PRESETS = {
  linear: "linear",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
};

const DEFAULT_IMAGES = [
  { src: "https://imagedelivery.net/IEUjvl3YUlxY-MrTpOAWDQ/612d1402-0ad9-4135-3bbc-a30a6a252b00/w=800" },
  { src: "https://imagedelivery.net/IEUjvl3YUlxY-MrTpOAWDQ/6d2ad64a-102d-4eab-0efe-31479e34b500/w=800" },
  { src: "https://imagedelivery.net/IEUjvl3YUlxY-MrTpOAWDQ/be854dd1-37aa-4fc7-f569-fdb948109300/w=800" },
  { src: "https://imagedelivery.net/IEUjvl3YUlxY-MrTpOAWDQ/51984031-9176-484b-f5e0-4af9a8e9ed00/w=800" },
  { src: "https://imagedelivery.net/IEUjvl3YUlxY-MrTpOAWDQ/34ce1842-4b7a-4d52-0302-38582c341700/w=800" },
  { src: "https://imagedelivery.net/IEUjvl3YUlxY-MrTpOAWDQ/88369c6d-00cc-4ac9-74ca-0f0965e06300/w=800" },
  { src: "https://imagedelivery.net/IEUjvl3YUlxY-MrTpOAWDQ/aeaa0756-9647-4f6c-d900-204bd25e4a00/w=800" },
  { src: "https://imagedelivery.net/IEUjvl3YUlxY-MrTpOAWDQ/316d1761-fd79-4ca9-b8d4-f2bb20521a00/w=800" },
];

function parseTransition(t) {
  const dur = Math.max(0.05, (t && t.duration) || 0.3);
  let ease = "cubic-bezier(0.44, 0, 0.56, 1)";
  if (t && Array.isArray(t.ease) && t.ease.length === 4) {
    ease = `cubic-bezier(${t.ease.join(", ")})`;
  } else if (t && typeof t.ease === "string" && EASE_PRESETS[t.ease]) {
    ease = EASE_PRESETS[t.ease];
  } else if (t && t.type === "spring") {
    ease = "cubic-bezier(0.34, 1.56, 0.64, 1)";
  }
  return { dur, ease };
}

const COMPONENT_DEFAULTS = {
  images: DEFAULT_IMAGES,
  collapsedWidth: 100,
  hoverWidth: 200,
  collapsedHeight: 340,
  hoverHeight: 400,
  openSize: 560,
  gap: 16,
  influence: 200,
  blur: 2,
  transition: {
    type: "tween",
    duration: 0.3,
    delay: 0,
    ease: "easeInOut",
  },
};

function OriginkitBase_MagneticCarousel(props) {
  const mergedProps = { ...COMPONENT_DEFAULTS, ...props };
  const {
    images = DEFAULT_IMAGES,
    collapsedWidth = 100,
    hoverWidth = 200,
    collapsedHeight = 340,
    hoverHeight = 400,
    openSize = 560,
    gap = 16,
    influence = 200,
    blur = 2,
    transition = { type: "tween", duration: 0.3, ease: "easeInOut" },
    style = {},
  } = mergedProps;

  // Normalize image objects { src: ... }
  const rawItems = Array.isArray(images) && images.length > 0 ? images : DEFAULT_IMAGES;
  const items = rawItems.map((img) => (typeof img === "string" ? { src: img } : img));
  const count = items.length;

  const containerRef = useRef(null);
  const [factors, setFactors] = useState(() => items.map(() => 0));
  const [open, setOpen] = useState(null);
  const [closing, setClosing] = useState(false);

  const isCanvas = RenderTarget.current() === RenderTarget.canvas;

  // Continuous easing loop: cur eases toward target each frame with NO CSS transition fighting
  const targetRef = useRef(items.map(() => 0));
  const curRef = useRef(items.map(() => 0));
  const loopRef = useRef(0);
  const closeTimer = useRef(0);

  useEffect(() => {
    targetRef.current = items.map(() => 0);
    curRef.current = items.map(() => 0);
    setFactors(items.map(() => 0));
  }, [count]);

  useEffect(() => {
    return () => {
      cancelAnimationFrame(loopRef.current);
      clearTimeout(closeTimer.current);
    };
  }, []);

  const startLoop = () => {
    if (loopRef.current) return;
    const step = () => {
      const tgt = targetRef.current;
      const cur = curRef.current;
      let moving = false;
      for (let i = 0; i < cur.length; i++) {
        const d = (tgt[i] ?? 0) - cur[i];
        if (Math.abs(d) > 0.001) {
          cur[i] += d * 0.2; // 60fps lerp toward target
          moving = true;
        } else {
          cur[i] = tgt[i] ?? 0;
        }
      }
      setFactors([...cur]);
      loopRef.current = moving ? requestAnimationFrame(step) : 0;
    };
    loopRef.current = requestAnimationFrame(step);
  };

  const setTargetFromCursor = (clientX) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = clientX - rect.left;
    const n = items.length;
    // Stable collapsed-layout slot centers so the magnify peak tracks the cursor without feedback jitter
    const totalBase = n * collapsedWidth + (n - 1) * gap;
    const startX = (rect.width - totalBase) / 2;
    targetRef.current = items.map((_, i) => {
      const center = startX + i * (collapsedWidth + gap) + collapsedWidth / 2;
      const dist = Math.abs(cx - center);
      const f = Math.max(0, 1 - dist / influence);
      return f * f * (3 - 2 * f); // smoothstep falloff
    });
    startLoop();
  };

  const onMove = (e) => {
    if (isCanvas || open !== null) return;
    setTargetFromCursor(e.clientX);
  };

  const onLeave = () => {
    if (open !== null) return;
    targetRef.current = items.map(() => 0);
    startLoop();
  };

  const { dur, ease } = parseTransition(transition);

  const close = () => {
    targetRef.current = items.map(() => 0);
    curRef.current = items.map(() => 0);
    setFactors(items.map(() => 0));
    setClosing(true);
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setClosing(false), dur * 1000);
    setOpen(null);
  };

  const sizeFor = (i) => {
    if (open !== null) {
      return i === open
        ? { width: openSize, height: openSize }
        : { width: collapsedWidth, height: collapsedHeight };
    }
    const f = factors[i] ?? 0;
    return {
      width: collapsedWidth + (hoverWidth - collapsedWidth) * f,
      height: collapsedHeight + (hoverHeight - collapsedHeight) * f,
    };
  };

  // Open/close eases via the Transition prop (also animates the blur).
  // Hover has NO CSS transition — the JS loop above drives it with 100% fluidity and zero fighting.
  const openEase = `width ${dur}s ${ease}, height ${dur}s ${ease}, filter ${dur}s ${ease}, opacity ${dur}s ${ease}`;
  const barTransition = open !== null || closing ? openEase : "none";

  return (
    <div
      ref={containerRef}
      style={{
        ...style,
        width: "100%",
        height: `${hoverHeight + 40}px`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: `${gap}px`,
        position: "relative",
        overflow: "visible",
      }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {/* Transparent backdrop — click to close when a bar is open */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          pointerEvents: open !== null ? "auto" : "none",
        }}
        onClick={close}
      />

      {items.map((img, i) => {
        const { width, height } = sizeFor(i);
        const blurred = open !== null && i !== open;

        return (
          <div
            key={i}
            onClick={(e) => {
              if (isCanvas) return;
              e.stopPropagation();
              if (open === i) close();
              else setOpen(i);
            }}
            style={{
              flex: "none",
              width: `${Math.round(width)}px`,
              height: `${Math.round(height)}px`,
              overflow: "hidden",
              borderRadius: "16px",
              cursor: isCanvas ? "default" : "pointer",
              transition: barTransition,
              willChange: "width, height",
              position: "relative",
              zIndex: open === i ? 10 : 2,
              filter: blurred ? `blur(${blur}px)` : "none",
              opacity: blurred ? 0.5 : 1,
              backgroundColor: img && img.src
                ? "#1B1C1C"
                : `hsl(${(i * 360) / count}, 70%, 58%)`,
              backgroundImage: img && img.src
                ? `url(${img.src})`
                : undefined,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              boxShadow: open === i
                ? "0 25px 50px -12px rgba(0, 0, 0, 0.4)"
                : "0 4px 12px rgba(0, 0, 0, 0.08)",
            }}
          />
        );
      })}
    </div>
  );
}

export default function MagneticCarousel(props) {
  return <OriginkitBase_MagneticCarousel {...props} />;
}
