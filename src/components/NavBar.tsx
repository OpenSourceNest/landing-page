"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import AnimatedHamburgerButton from "./ui/AnimatedHamburgerButton";
type value = number;

export const whatsappURL = "https://chat.whatsapp.com/CyCUKHBVHDLJXrUASXZ8u5";

export default function NavBar() {
  const [displaySidebar, setDisplaySidebar] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const hideSideBar = () => {
    setDisplaySidebar(false);
  };

  const joinCommunity = () => {
    const newWindow = window.open(whatsappURL, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;

    hideSideBar();
  };

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 400) {
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
    <div
      className={`z-[20] ${
        displaySidebar
          ? `no-doc-scroll flex flex-col h-screen fixed w-full mt-[10px] px-2 gap-4
          pb-2`
          : "mt-[40px] sticky top-2.5"
      } w-full max-w-[1500px] mx-auto`}
    >
      <nav
        className="flex w-full items-center border rounded-full border-[#2A2A2A]
      justify-between gap-3 py-4 px-10 max-w-[95vw] mx-auto
      z-10 backdrop-blur-lg bg-[#0000007b] max-[600px]:px-4 max-[600px]:py-2"
      >
        <Link href="/" className="">
          <Image
            src="/images/logo-short.png"
            alt="OpenSourceNest Logo"
            height={43}
            width={43}
            className="max-[400px]:block hidden"
          />

          <Image
            src="/images/logo-full.png"
            alt="OpenSourceNest Logo"
            height={52}
            width={212}
            className="max-[400px]:hidden block"
          />
        </Link>

        <div className="flex items-center gap-3 max-[1100px]:hidden">
          {NavLinks.map((nav) => (
            <NavLink key={nav.title} nav={nav} hideSideBar={hideSideBar} />
          ))}

          <button
            className="py-2.5 px-6 font-semibold text-primary border border-primary 
          rounded-full ml-3 cursor-pointer"
            onClick={joinCommunity}
          >
            JOIN COMMUNITY
          </button>
        </div>

        <AnimatedHamburgerButton
          setActive={setDisplaySidebar}
          active={displaySidebar}
        />
      </nav>

      {/* -------------------------------------------------------------------------- */
      /*                                   SIDEBAR                                  */
      /* -------------------------------------------------------------------------- */}

      <div
        className={`block border border-[#2A2A2A] h-[calc(100%_-_110px)] rounded-3xl
      bg-[#0000007b] backdrop-blur-2xl max-w-[95vw] mx-auto w-full p-5 pt-20 justify-center
      overflow-y-auto min-[1100px]:hidden ${
        displaySidebar ? "flex" : "hidden"
      }`}
      >
        <div className="gap-5 flex flex-col items-center mb-[350px]">
          {NavLinks.map((nav) => (
            <NavLink
              key={nav.title}
              nav={nav}
              hideSideBar={hideSideBar}
              fontSize="20px"
            />
          ))}

          <button
            className="py-2.5 px-6 font-semibold text-primary border border-primary 
          rounded-full ml-3 cursor-pointer"
            onClick={joinCommunity}
          >
            JOIN COMMUNITY
          </button>
        </div>
      </div>
    </div>
  );
}

const NavLink = ({
  nav,
  hideSideBar,
  fontSize,
}: {
  nav: (typeof NavLinks)[number];
  hideSideBar: () => void;
  fontSize?: `${value}px`;
}) => {
  const pathname = usePathname();
  const isActive = pathname === nav.url;

  return (
    <Link
      href={nav.url}
      key={nav.title}
      className="nav-link"
      onClick={hideSideBar}
      target={nav.newTab ? "_blank" : ""}
    >
      <p
        className={`font-medium mb-0.5 ${fontSize ? `text-[${fontSize}]` : ""}`}
      >
        {nav.title}
      </p>
      <span
        className="block w-0 h-0.5 bg-primary mx-auto"
        style={{ width: isActive ? "100%" : "" }}
      ></span>
    </Link>
  );
};

const NavLinks = [
  {
    title: "Campaign",
    url: "/campaign",
    newTab: false,
  },
  {
    title: "About Us",
    url: "https://docs.google.com/document/d/1IJxehnnRTp5WhD9iEuThm9nxXRgod_zABOK_nH5_nbs/",
    newTab: true,
  },
  {
    title: "Projects",
    url: "/projects",
    newTab: false,
  },
];
