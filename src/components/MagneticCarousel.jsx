import React, { useEffect, useRef, useState } from "react";

// Magnetic Carousel — Originkit Full-Width React Implementation
// macOS-dock style expanding image bars with click-to-expand focus

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
  { src: "./images/luxury_villa_venture_1786442598108.jpg" },
  { src: "./images/assets/20250604_152649.jpg" },
  { src: "./images/kakinada_branch_venture_1786442659994.jpg" },
  { src: "./images/assets/20260814_104916.jpg" },
  { src: "./images/assets/20260814_100950.jpg" },
  { src: "./images/assets/20260814_111241.jpg" },
];

function parseTransition(t) {
  const dur = Math.max(0.05, (t && t.duration) || 0.5);
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
  collapsedWidth: 95,
  hoverWidth: 230,
  collapsedHeight: 380,
  hoverHeight: 440,
  openSize: 580,
  gap: 16,
  influence: 220,
  blur: 4,
  transition: {
    type: "tween",
    duration: 0.35,
    delay: 0,
    ease: "easeInOut",
  },
};

function OriginkitBase_MagneticCarousel(props) {
  const mergedProps = { ...COMPONENT_DEFAULTS, ...props };
  const {
    images = DEFAULT_IMAGES,
    collapsedWidth: defaultCollapsedWidth = 95,
    hoverWidth: defaultHoverWidth = 230,
    collapsedHeight = 380,
    hoverHeight = 440,
    openSize = 580,
    gap: defaultGap = 16,
    influence: defaultInfluence = 220,
    blur = 4,
    transition = { type: "tween", duration: 0.35, ease: "easeInOut" },
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
  const [containerWidth, setContainerWidth] = useState(1200);

  const isCanvas = RenderTarget.current() === RenderTarget.canvas;

  const targetRef = useRef(items.map(() => 0));
  const curRef = useRef(items.map(() => 0));
  const loopRef = useRef(0);
  const closeTimer = useRef(0);

  // Measure container width to dynamically scale image bars so they always fit perfectly without horizontal scrollbar
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const updateSize = () => {
      setContainerWidth(el.clientWidth || window.innerWidth);
    };
    updateSize();
    const observer = new ResizeObserver(updateSize);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Compute responsive bar width & gap based on container width
  const availableWidth = Math.max(320, containerWidth - 40);
  const calculatedGap = count > 8 ? Math.max(8, Math.min(defaultGap, Math.floor(availableWidth / (count * 4)))) : defaultGap;
  const maxPossibleBarWidth = Math.floor((availableWidth - (count - 1) * calculatedGap) / count);
  const collapsedWidth = Math.max(36, Math.min(defaultCollapsedWidth, maxPossibleBarWidth));
  const hoverWidth = Math.max(collapsedWidth * 1.6, Math.min(defaultHoverWidth, collapsedWidth * 2.4));
  const gap = calculatedGap;
  const influence = Math.max(120, defaultInfluence * (collapsedWidth / defaultCollapsedWidth));

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
          cur[i] += d * 0.2; // lerp toward target
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

  const close = () => {
    targetRef.current = items.map(() => 0);
    curRef.current = items.map(() => 0);
    setFactors(items.map(() => 0));
    setClosing(true);
    clearTimeout(closeTimer.current);
    const { dur } = parseTransition(transition);
    closeTimer.current = setTimeout(() => setClosing(false), dur * 1000);
    setOpen(null);
  };

  const sizeFor = (i) => {
    if (open !== null) {
      const responsiveOpenSize = Math.min(openSize, containerWidth - 48);
      return i === open
        ? { width: responsiveOpenSize, height: responsiveOpenSize * 0.85 }
        : { width: Math.max(20, collapsedWidth * 0.6), height: collapsedHeight * 0.9 };
    }
    const f = factors[i] ?? 0;
    return {
      width: collapsedWidth + (hoverWidth - collapsedWidth) * f,
      height: collapsedHeight + (hoverHeight - collapsedHeight) * f,
    };
  };

  const { dur, ease } = parseTransition(transition);
  const openEase = `width ${dur}s ${ease}, height ${dur}s ${ease}, filter ${dur}s ${ease}, opacity ${dur}s ${ease}, box-shadow ${dur}s ${ease}`;
  const barTransition = open !== null || closing ? openEase : "none";

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        minHeight: `${hoverHeight + 40}px`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: `${gap}px`,
        position: "relative",
        overflow: "hidden", // Completely eliminate any horizontal scrollbar
        padding: "20px 0",
        userSelect: "none",
        ...style,
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
        const isOpenCard = open === i;
        const blurred = open !== null && !isOpenCard;

        return (
          <div
            key={i}
            onClick={(e) => {
              if (isCanvas) return;
              e.stopPropagation();
              if (open === i) close();
              else setOpen(i);
            }}
            className="rounded-2xl border border-[#E5E0D5] hover:border-[#4A5D4E] shadow-sm hover:shadow-xl transition-shadow"
            style={{
              flex: "none",
              width: `${Math.round(width)}px`,
              height: `${Math.round(height)}px`,
              overflow: "hidden",
              cursor: isCanvas ? "default" : "pointer",
              transition: barTransition,
              willChange: "width, height",
              position: "relative",
              zIndex: isOpenCard ? 20 : 2,
              filter: blurred ? `blur(${blur}px)` : "none",
              opacity: blurred ? 0.45 : 1,
              backgroundColor: "#1B1C1C",
              backgroundImage: img && img.src ? `url("${img.src}")` : undefined,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              boxShadow: isOpenCard
                ? "0 30px 60px -15px rgba(0, 0, 0, 0.5)"
                : undefined,
            }}
          >
            {/* Card Overlay & Expand hint */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1B1C1C]/80 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-3 pointer-events-none">
              <span className="text-white text-[10px] font-mono font-bold uppercase tracking-wider bg-[#1B1C1C]/90 px-2 py-0.5 rounded border border-white/20">
                {isOpenCard ? "Close ✕" : `Photo ${i + 1}`}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function MagneticCarousel(props) {
  return <OriginkitBase_MagneticCarousel {...props} />;
}
