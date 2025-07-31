"use client";

import { MotionConfig, motion } from "framer-motion";
import { useEffect } from "react";

interface IProp {
  active: boolean;
  setActive: (data: boolean) => void;
}

const AnimatedHamburgerButton = ({ active, setActive }: IProp) => {
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 1100) {
        setActive(false);
      }
    }

    if (typeof window !== "undefined") {
      handleResize();
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <MotionConfig
      transition={{
        duration: 0.3,
        ease: "linear",
      }}
    >
      <motion.button
        initial={false}
        animate={active ? "open" : "closed"}
        onClick={() => setActive(!active)}
        className="relative h-8 w-8 rounded bg-white/0 transition-colors hover:bg-white/20 scale-125
        min-[1100px]:hidden"
      >
        <motion.span
          variants={VARIANTS.top}
          className="absolute h-0.5 w-5 bg-white"
          style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
        />
        <motion.span
          variants={VARIANTS.middle}
          className="absolute h-0.5 w-5 bg-white"
          style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
        />
        <motion.span
          variants={VARIANTS.bottom}
          className="absolute h-0.5 w-2.5 bg-white"
          style={{
            x: "-50%",
            y: "50%",
            bottom: "35%",
            left: "calc(50% + 10px)",
          }}
        />
      </motion.button>
    </MotionConfig>
  );
};

const VARIANTS = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["35%", "50%", "50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "35%"],
    },
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
    },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      bottom: ["35%", "50%", "50%"],
      left: "50%",
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      bottom: ["50%", "50%", "35%"],
      left: "calc(50% + 5px)",
    },
  },
};

export default AnimatedHamburgerButton;
