"use client";

import Link from "next/link";
import { whatsappURL } from "../NavBar";

const ReadyToTakeFlight = () => {
  const joinCommunity = () => {
    const newWindow = window.open(whatsappURL, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <section
      className="py-[81px] max-w-[90vw] mx-auto
    max-[500px]:py-[20px] "
    >
      <div
        className="bg-primary3 py-[80px] px-[32px] flex flex-col
      items-center justify-center text-center rounded-[6px] w-full"
      >
        <h3 className="font-semibold text-[40px]">
          Ready to Take Flight with <span className="text-black">OSN?</span>
        </h3>

        <p className="mt-4 mb-8 text-black text-base font-medium max-w-[511px]">
          Join Africa&rsquo;s most vibrant open source initiative and start
          making an impact today.
        </p>

        <div className="flex items-center gap-2.5 justify-center flex-wrap-reverse">
          <button
            className="text-sm font-medium py-4 px-10 rounded-full bg-black
          border border-black cursor-pointer"
            onClick={joinCommunity}
          >
            JOIN OUR COMMUNITY
          </button>

          <Link
            href="mailto:info@opensourcenest.org"
            className="text-sm font-medium py-4 px-10 rounded-full border border-white
            "
            title="Send a mail to info@opensourcenest.org"
          >
            SEND US A MAIL
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ReadyToTakeFlight;
