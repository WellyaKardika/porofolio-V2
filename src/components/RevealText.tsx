import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface RevealTextProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: "up" | "down";
  margin?: string;
  once?: boolean;
  className?: string;
}

export default function RevealText({
  children,
  delay = 0,
  duration = 0.8,
  direction = "up",
  margin = "0px 0px -80px 0px",
  once = true,
  className = "",
}: RevealTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  // Deteksi elemen masuk viewport dengan opsi margin dan once
  const isInView = useInView(ref, { margin: margin as any, once });

  // Posisi awal tergantung direction
  const yOffset = direction === "up" ? "105%" : "-105%";

  return (
    <div ref={ref} className={className} style={{ overflow: "hidden" }}>
      <motion.div
        initial={{ y: yOffset }}
        animate={isInView ? { y: "0%" } : { y: yOffset }}
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
