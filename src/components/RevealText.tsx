import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTransition } from "./TransitionContext";

interface RevealTextProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  stagger?: number;
  direction?: "up" | "down";
  margin?: string;
  once?: boolean;
  className?: string;
}

export default function RevealText({
  children,
  delay = 0,
  duration = 0.8,
  stagger = 0.15,
  direction = "up",
  margin = "0px 0px -80px 0px",
  once = true,
  className = "",
}: RevealTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { isAnimating } = useTransition();
  
  // Deteksi elemen masuk viewport dengan opsi margin dan once
  const isInView = useInView(ref, { margin: margin as any, once });

  // Posisi awal tergantung direction
  const yOffset = direction === "up" ? "105%" : "-105%";

  const childArray = React.Children.toArray(children);

  // Jika cuma 1 elemen, render biasa
  if (childArray.length <= 1) {
    return (
      <div ref={ref} className={className} style={{ overflow: "hidden" }}>
        <motion.div
          initial={{ y: yOffset }}
          animate={isInView && !isAnimating ? { y: "0%" } : { y: yOffset }}
          transition={{
            duration: duration,
            delay: delay,
            ease: [0.33, 1, 0.68, 1], // easeOutCubic
          }}
        >
          {children}
        </motion.div>
      </div>
    );
  }

  // Jika multiple children (per baris), kita stagger
  return (
    <div ref={ref} className={className}>
      {childArray.map((child, i) => {
        // Jangan wrap <br /> dengan overflow: hidden
        if (React.isValidElement(child) && child.type === "br") {
          return <br key={i} />;
        }
        
        return (
          <div key={i} style={{ overflow: "hidden" }}>
            <motion.div
              initial={{ y: yOffset }}
              animate={isInView && !isAnimating ? { y: "0%" } : { y: yOffset }}
              transition={{
                duration: duration,
                delay: delay + i * stagger,
                ease: [0.33, 1, 0.68, 1], // easeOutCubic
              }}
              style={{ display: "block" }}
            >
              {child}
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
