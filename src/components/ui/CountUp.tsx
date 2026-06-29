"use client";

import { useInView, useMotionValue, useSpring, animate } from "framer-motion";
import { useEffect, useRef } from "react";

interface CountUpProps {
  value: number;
  suffix?: string;
}

export default function CountUp({ value, suffix = "" }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isInView && !hasAnimated.current && ref.current) {
      hasAnimated.current = true;
      const node = ref.current;

      const controls = animate(0, value, {
        duration: 1.5,
        ease: "easeOut",
        onUpdate(latest) {
          node.textContent = Math.round(latest) + suffix;
        },
      });

      return () => controls.stop();
    }
  }, [isInView, value, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}
