"use client";

import Image from "next/image";
import Link from "next/link";
import AnimatedHamburgerButton from "./ui/AnimatedHamburgerButton";
import { useState } from "react";

const NavBar = () => {
  const [displaySidebar, setDisplaySidebar] = useState(false);

  const hideSideBar = () => {
    setDisplaySidebar(false);
  };

  return (
    <div
      className={`z-[20] ${
        displaySidebar
          ? `no-doc-scroll flex flex-col h-screen fixed w-full mt-[20px] px-2 gap-4
          pb-2`
          : "mt-[40px] sticky top-2.5"
      }`}
    >
      <nav
        className="flex w-[1146px] items-center border rounded-full border-[#2A2A2A]
      justify-between gap-3 py-4 px-16 max-w-[95vw] mx-auto
      z-10 backdrop-blur-lg bg-[#0000007b] max-[600px]:px-4"
      >
        <Image
          src="/images/logo-full.png"
          alt="OSN Logo"
          height={52}
          width={212}
        />

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
          rounded-full ml-3"
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
          rounded-full ml-3"
            onClick={hideSideBar}
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
];
