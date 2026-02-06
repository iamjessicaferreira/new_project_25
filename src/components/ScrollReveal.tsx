"use client";

import { useRef, useState, useEffect, type ReactNode } from "react";
import { RevealFx } from "@/once-ui/components";
import { type SpacingToken } from "@/once-ui/types";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  speed?: "slow" | "medium" | "fast";
  translateY?: number | SpacingToken;
  threshold?: number;
  rootMargin?: string;
  [key: string]: unknown;
}

export function ScrollReveal({
  children,
  delay = 0,
  speed = "medium",
  translateY = 16,
  threshold = 0.1,
  rootMargin = "0px 0px -50px 0px",
  ...rest
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return (
    <div ref={ref}>
      <RevealFx
        trigger={isVisible}
        delay={delay}
        speed={speed}
        translateY={translateY}
        revealedByDefault={false}
        {...rest}
      >
        {children}
      </RevealFx>
    </div>
  );
}
