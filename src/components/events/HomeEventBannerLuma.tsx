"use client";

import { useEffect, useState } from "react";

const HomeEventBannerLuma = () => {
  const [isMobile, setIsMobile] = useState(false);
  const padding = 16;

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 650) {
        setIsMobile(false);
      } else {
        setIsMobile(true);
      }
    }

    if (typeof window !== "undefined") {
      handleResize();
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <div className="w-[100vw] mx-auto">
      <iframe
        src="https://lu.ma/embed/event/evt-2JNFEWD7wLgQhrp/simple"
        width="100%"
        height={isMobile ? 730 + padding : 420 + padding}
        frameBorder="0"
        allow="fullscreen; payment"
        aria-hidden="false"
        tabIndex={0}
        className={`py-${padding}px`}
      ></iframe>
    </div>
  );
};

export default HomeEventBannerLuma;
