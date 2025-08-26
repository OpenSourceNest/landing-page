"use client";

import { useEffect, useState } from "react";

const GithubWorkshop = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 752) {
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
    <div className="section">
      <iframe
        src="https://lu.ma/embed/event/evt-nbgJ6NgfWGpdIjQ/simple"
        width="100%"
        height={isMobile ? "800" : "430"}
        frameBorder="0"
        style={{ border: "1px solid white", borderRadius: 6 }}
        allow="fullscreen; payment"
        aria-hidden="false"
        tabIndex={0}
        className="constraint"
      ></iframe>
    </div>
  );
};

export default GithubWorkshop;
