import React, { useEffect, useRef, useState } from "react";

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
  { src: "/images/ventures/jetty-mayfair.jpg" },
  { src: "/images/ventures/sreenivasam-lake-view-villas.jpg" },
  { src: "/images/ventures/sree-harivasam.jpg" },
  { src: "/images/ventures/sreenivasam-landmark.jpg" },
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

  // Responsive adjustments for mobile screens
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const effectiveCollapsedWidth = isMobile ? Math.min(collapsedWidth, 70) : collapsedWidth;
  const effectiveHoverWidth = isMobile ? Math.min(hoverWidth, 140) : hoverWidth;
  const effectiveCollapsedHeight = isMobile ? Math.min(collapsedHeight, 260) : collapsedHeight;
  const effectiveHoverHeight = isMobile ? Math.min(hoverHeight, 300) : hoverHeight;
  const effectiveOpenSize = isMobile ? Math.min(openSize, window.innerWidth - 32) : openSize;
  const effectiveGap = isMobile ? 8 : gap;

  // Normalize image objects { src: ... }
  const rawItems = Array.isArray(images) && images.length > 0 ? images : DEFAULT_IMAGES;
  const items = rawItems.map((img) => (typeof img === "string" ? { src: img } : img));
  const count = items.length;

  const containerRef = useRef(null);
  const [factors, setFactors] = useState(() => items.map(() => 0));
  const [open, setOpen] = useState(null);
  const [closing, setClosing] = useState(false);

  const isCanvas = RenderTarget.current() === RenderTarget.canvas;

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
          cur[i] += d * 0.2;
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
    const totalBase = n * effectiveCollapsedWidth + (n - 1) * effectiveGap;
    const startX = (rect.width - totalBase) / 2;
    targetRef.current = items.map((_, i) => {
      const center = startX + i * (effectiveCollapsedWidth + effectiveGap) + effectiveCollapsedWidth / 2;
      const dist = Math.abs(cx - center);
      const f = Math.max(0, 1 - dist / influence);
      return f * f * (3 - 2 * f);
    });
    startLoop();
  };

  const onMove = (e) => {
    if (isCanvas || open !== null || isMobile) return;
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
        ? { width: effectiveOpenSize, height: effectiveOpenSize }
        : { width: effectiveCollapsedWidth, height: effectiveCollapsedHeight };
    }
    const f = factors[i] ?? 0;
    return {
      width: effectiveCollapsedWidth + (effectiveHoverWidth - effectiveCollapsedWidth) * f,
      height: effectiveCollapsedHeight + (effectiveHoverHeight - effectiveCollapsedHeight) * f,
    };
  };

  const openEase = `width ${dur}s ${ease}, height ${dur}s ${ease}, filter ${dur}s ${ease}, opacity ${dur}s ${ease}`;
  const barTransition = open !== null || closing ? openEase : "none";

  return (
    <div className="w-full overflow-x-auto overflow-y-hidden py-4 scrollbar-thin">
      <div
        ref={containerRef}
        style={{
          ...style,
          minWidth: isMobile ? "max-content" : "100%",
          height: `${effectiveHoverHeight + 40}px`,
          display: "flex",
          alignItems: "center",
          justifyContent: isMobile ? "flex-start" : "center",
          gap: `${effectiveGap}px`,
          position: "relative",
          padding: "0 16px",
        }}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
      >
        {/* Transparent backdrop — click to close */}
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
                backgroundColor: "#1B1C1C",
                backgroundImage: img && img.src ? `url(${img.src})` : undefined,
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
    </div>
  );
}

export default function MagneticCarousel(props) {
  return <OriginkitBase_MagneticCarousel {...props} />;
}
