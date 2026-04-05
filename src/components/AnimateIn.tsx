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
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
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
