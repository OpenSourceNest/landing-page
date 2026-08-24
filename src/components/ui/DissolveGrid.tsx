"use client";

import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

export interface DissolveGridProps {
  /** Grid items — each direct child becomes one grid cell. */
  children: ReactNode;
  /** Column count, or any grid-template-columns value. Default: responsive auto-fill. */
  columns?: number | string;
  /** Gap between cells (any valid CSS gap value). Default: 8. */
  gap?: string | number;
  /** Ms to wait after mount before the dissolve sequence starts. Default: 1000 (one second). */
  startDelay?: number;
  /** Ms window within which each cell independently, randomly picks its fade-out moment. Default: 1500. */
  randomWindow?: number;
  /** Ms duration of each cell's opacity transition. Default: 400. Shortened automatically when the user prefers reduced motion. */
  fadeDuration?: number;
  /** Fires once every cell has faded out and the grid has been hidden. */
  onDissolved?: () => void;
  className?: string;
  style?: CSSProperties;
}

/**
 * Fills its parent at 100% width/height with a CSS grid of `children`.
 *
 * `startDelay` ms after mounting, every cell independently rolls a random
 * moment inside `randomWindow` at which it fades its own opacity to 0.
 * Once every cell has reached 0, the grid container itself switches to
 * `display: none`.
 *
 * Note: since sizing is percentage-based, the parent element needs an
 * actual height (not just `height: auto`) for the 100% to resolve.
 *
 * @example
 * <div style={{ width: 400, height: 400 }}>
 *   <DissolveGrid columns={4} gap={4}>
 *     {items.map((item) => (
 *       <Card key={item.id} {...item} />
 *     ))}
 *   </DissolveGrid>
 * </div>
 */
function DissolveGrid({
  children,
  columns = "auto-fill",
  gap = 8,
  startDelay = 1000,
  randomWindow = 1500,
  fadeDuration = 400,
  onDissolved,
  className,
  style,
}: DissolveGridProps) {
  const items = useMemo(() => React.Children.toArray(children), [children]);
  const total = items.length;

  // Respect prefers-reduced-motion by skipping the transition, not the logic.
  const prefersReducedMotion = useMemo(
    () =>
      typeof window !== "undefined" &&
      !!window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches,
    [],
  );
  const effectiveFadeDuration = prefersReducedMotion ? 0 : fadeDuration;

  const [dissolved, setDissolved] = useState<boolean[]>(() =>
    new Array(total).fill(false),
  );
  const [hidden, setHidden] = useState(false);

  const dissolvedCount = useRef(0);

  // Keep the latest onDissolved without making the effect below re-run
  // just because the caller passed a fresh inline function.
  const onDissolvedRef = useRef(onDissolved);
  useEffect(() => {
    onDissolvedRef.current = onDissolved;
  }, [onDissolved]);

  useEffect(() => {
    setDissolved(new Array(total).fill(false));
    setHidden(false);
    dissolvedCount.current = 0;

    if (total === 0) return;

    const timers: ReturnType<typeof setTimeout>[] = [];

    const kickoff = setTimeout(() => {
      for (let i = 0; i < total; i++) {
        const delay = Math.random() * randomWindow;
        const t = setTimeout(() => {
          setDissolved((prev) => {
            if (prev[i]) return prev;
            const next = [...prev];
            next[i] = true;
            return next;
          });

          dissolvedCount.current += 1;
          if (dissolvedCount.current === total) {
            timers.push(
              setTimeout(() => {
                setHidden(true);
                onDissolvedRef.current?.();
              }, effectiveFadeDuration),
            );
          }
        }, delay);
        timers.push(t);
      }
    }, startDelay);

    timers.push(kickoff);
    return () => timers.forEach(clearTimeout);
  }, [total, startDelay, randomWindow, effectiveFadeDuration]);

  const gridTemplateColumns =
    typeof columns === "number"
      ? `repeat(${columns}, 1fr)`
      : columns === "auto-fill"
        ? "repeat(auto-fill, minmax(60px, 1fr))"
        : columns;

  return (
    <div
      className={className}
      aria-hidden={hidden}
      style={{
        ...style,
        width: "100%",
        height: "100%",
        display: hidden ? "none" : "grid",
        gridTemplateColumns,
        gap,
        transition: "background 1s ease-in-out",
      }}
    >
      {items.map((child, i) => (
        <div
          key={i}
          aria-hidden={dissolved[i]}
          style={{
            opacity: dissolved[i] ? 0 : 1,
            pointerEvents: dissolved[i] ? "none" : "auto",
            transition: `opacity ${effectiveFadeDuration}ms ease`,
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}

export default function DissolveGridParent() {
  const defaultCells = Array.from({ length: 500 }, (_, i) => i);
  const [runId, setRunId] = useState(0);
  const [cells, setCells] = useState(defaultCells);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleMobileLayout = () => {
      if (window.innerWidth < 900) {
        setCells(Array.from({ length: 100 }, (_, i) => i));
      } else {
        setCells(defaultCells);
      }
    };

    handleMobileLayout();
    window.addEventListener("resize", handleMobileLayout);

    return () => {
      window.removeEventListener("resize", handleMobileLayout);
    };
  }, []);

  return (
    <>
      <div
        style={{
          //   minHeight: 0,
          overflow: "auto",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          //   background: "green",
          zIndex: 1,
          overflowY: "hidden",
          display: hidden ? "none" : "flex",
        }}
      >
        <DissolveGrid
          key={runId}
          columns="repeat(auto-fill, minmax(40px, 1fr))"
          gap={0}
          startDelay={0}
          randomWindow={2500}
          fadeDuration={0}
          onDissolved={() => setHidden(true)}
        >
          {cells.map((i) => (
            <div
              key={i}
              style={{
                aspectRatio: "1 / 1",
                // background: PALETTE[i % PALETTE.length],
                background: "black",
              }}
            />
          ))}
        </DissolveGrid>
      </div>

      <button
        onClick={() => {
          setRunId((n) => n + 1);
          setHidden(false);
        }}
        style={{
          padding: "7px 16px",
          borderRadius: 999,
          border: "1px solid #4A4356",
          background: "transparent",
          color: "#E4B565",
          fontSize: 13,
          fontWeight: 500,
          zIndex: 10,
          position: "absolute",
          display: "none",
        }}
      >
        Replay
      </button>
    </>
  );
}
