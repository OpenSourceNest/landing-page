"use client";

import { useState } from "react";

const SPRINT26_URL = "https://opensourcenest.org/sprint26";
const SHARE_TEXT =
  "Sprint 26 is live — 5 weeks, multiple repos, zero spam PRs. Join as a maintainer or contributor:";

const Sprint26Share = () => {
  const [copied, setCopied] = useState(false);

  const shareOnX = () => {
    const url = `https://x.com/intent/tweet?text=${encodeURIComponent(
      SHARE_TEXT,
    )}&url=${encodeURIComponent(SPRINT26_URL)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const copyLink = async () => {
    await navigator.clipboard.writeText(SPRINT26_URL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="section bg-black py-5">
      <div className="constraint bg-[#0d0d0d] border-2 border-white flex gap-10 p-10 max-[1000px]:flex-col max-[512px]:p-6">
        <div className="flex-1 flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <p className="font-pixel! text-primary text-[20px]">
              {">_SHARE THE WORD"}
            </p>
            <p className="font-pixel! font-bold text-[36px] text-white leading-tight max-[512px]:text-[28px]">
              AMPLIFY THE SPRINT
            </p>
          </div>
          <p className="text-white/80 text-[20px]">
            Know a maintainer drowning in{" "}
            <span className="bg-primary/50 font-semibold px-1 text-nowrap rounded-sm">
              help wanted
            </span>{" "}
            tickets? Share this event and let our community take the load off
            their shoulders.
          </p>

          <div className="flex gap-3">
            <button
              onClick={shareOnX}
              className="font-pixel! uppercase bg-primary text-black font-semibold px-5 py-2 cursor-pointer max-[512px]:flex-1 max-[512px]:px-4"
            >
              Share on X
            </button>

            <button
              onClick={copyLink}
              className="font-pixel! uppercase bg-black border border-[#a7ffc9] text-white font-semibold px-5 py-2 cursor-pointer max-[512px]:flex-1 max-[512px]:px-4"
            >
              {copied ? "Copied ✓" : "Copy Link"}
            </button>
          </div>
        </div>

        <div className="font-pixel! uppercase flex-1 bg-black border border-[#282828] p-8 max-[512px]:p-5 text-[16px] flex flex-col justify-center">
          <p className="text-[#828282]">$ npx sprint26 --share</p>
          <p className="text-[#a9ffb7]">{">"} copying invite…</p>
          <p className="text-[#a9ffb7]">{">"} 5 weeks. 68 repos.</p>
          <p className="text-[#a9ffb7]">{">"} zero spam PRs.</p>
          <p className="text-[#a9ffb7]">{">"} link copied ✓</p>
        </div>
      </div>
    </section>
  );
};

export default Sprint26Share;
