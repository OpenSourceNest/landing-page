"use client";

import { motion, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const AnimatedNumber = ({ value }: { value: number }) => {
  const spring = useSpring(0, { mass: 0.9, stiffness: 30, damping: 15 });
  const display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString()
  );

  const [ref, inView] = useInView({
    threshold: 0.6, // Trigger when 60% of the element is visible
  });

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        spring.set(value);
      }, 300);
    }
  }, [value, spring, inView]);

  return (
    <motion.span
      ref={ref}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.8 }}
    >
      {display}
    </motion.span>
  );
};

export default AnimatedNumber;
