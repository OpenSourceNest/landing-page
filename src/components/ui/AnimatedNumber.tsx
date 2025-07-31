"use client";

import { motion, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

const AnimatedNumber = ({ value }: { value: number }) => {
  const spring = useSpring(0, { mass: 0.9, stiffness: 30, damping: 15 });
  const display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString()
  );

  useEffect(() => {
    setTimeout(() => {
      spring.set(value);
    }, 300);
  }, [value, spring]);

  return <motion.span>{display}</motion.span>;
};

export default AnimatedNumber;
