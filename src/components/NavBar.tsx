"use client";

import Image from "next/image";
import Link from "next/link";
import AnimatedHamburgerButton from "./ui/AnimatedHamburgerButton";
import { useEffect, useState } from "react";

export const whatsappURL = "https://chat.whatsapp.com/CyCUKHBVHDLJXrUASXZ8u5";

const NavBar = () => {
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
      } w-full max-w-[1300px] mx-auto`}
    >
      <nav
        className="flex w-full items-center border rounded-full border-[#2A2A2A]
      justify-between gap-3 py-4 px-10 max-w-[95vw] mx-auto
      z-10 backdrop-blur-lg bg-[#0000007b] max-[600px]:px-4 max-[600px]:py-2"
      >
        <Link href="/" className="">
          {isMobile ? (
            <Image
              src="/images/logo-short.png"
              alt="OpenSourceNest Logo"
              height={43}
              width={43}
            />
          ) : (
            <Image
              src="/images/logo-full.png"
              alt="OpenSourceNest Logo"
              height={52}
              width={212}
            />
          )}
        </Link>

        <div className="flex items-center gap-3 max-[1100px]:hidden">
          {NavLinks.map((nav) => (
            <Link
              href={nav.url}
              key={nav.title}
              className="nav-link"
              target={nav.newTab ? "_blank" : ""}
            >
              <p className="font-medium mb-0.5">{nav.title}</p>
              <span className="block w-0 h-0.5 bg-primary mx-auto"></span>
            </Link>
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
            <Link
              href={nav.url}
              key={nav.title}
              className="nav-link"
              onClick={hideSideBar}
              target={nav.newTab ? "_blank" : ""}
            >
              <p className="font-medium mb-0.5 text-[20px]">{nav.title}</p>
              <span className="block w-0 h-0.5 bg-primary mx-auto"></span>
            </Link>
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
};

export default NavBar;

const NavLinks = [
  {
    title: "About Us",
    url: "https://docs.google.com/document/d/1IJxehnnRTp5WhD9iEuThm9nxXRgod_zABOK_nH5_nbs/",
    newTab: true,
  },
  {
    title: "Projects",
    url: "https://www.canva.com/design/DAGsP4YkRbw/TEJak4HyqSCTzKNj6PTHZw/view",
    newTab: true,
  },
  {
    title: "Volunteer",
    url: "https://volunteer.opensourcenest.org",
    newTab: true,
  },
];
