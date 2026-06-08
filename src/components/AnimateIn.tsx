"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Animation = "fade-up" | "fade-in" | "fade-left" | "fade-right" | "scale-in";

export function AnimateIn({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 700,
  className = "",
}: {
  children: ReactNode;
  animation?: Animation;
  delay?: number;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  // Start visible so the server-rendered HTML (and the pre-hydration paint)
  // shows the content immediately. The entrance animation is a progressive
  // enhancement applied after mount — never a precondition for being seen.
  // This prevents the "black screen until JS loads" problem on slow devices.
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect users who prefer reduced motion: keep everything visible, skip
    // the entrance animation entirely.
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    // The observer drives visibility entirely. Its first callback fires after
    // the initial paint, so content the user can already see (the hero) reports
    // "intersecting" and simply stays visible — no flash. Anything below the
    // fold reports "not intersecting", gets hidden (off-screen, so unseen), and
    // then animates in once it scrolls into view.
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
        if (entry.isIntersecting) {
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const baseStyle = {
    transitionProperty: "opacity, transform",
    transitionDuration: `${duration}ms`,
    transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
    transitionDelay: `${delay}ms`,
  };

  const hiddenStyles: Record<Animation, React.CSSProperties> = {
    "fade-up": { opacity: 0, transform: "translateY(32px)" },
    "fade-in": { opacity: 0 },
    "fade-left": { opacity: 0, transform: "translateX(-32px)" },
    "fade-right": { opacity: 0, transform: "translateX(32px)" },
    "scale-in": { opacity: 0, transform: "scale(0.95)" },
  };

  const visibleStyle: React.CSSProperties = {
    opacity: 1,
    transform: "translate(0) scale(1)",
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...baseStyle,
        ...(visible ? visibleStyle : hiddenStyles[animation]),
      }}
    >
      {children}
    </div>
  );
}
