"use client";

import Image from "next/image";
import { HTMLAttributes } from "react";
import AnimatedNumber from "../ui/AnimatedNumber";
import { whatsappURL } from "../NavBar";

const campaignURL =
  "https://www.canva.com/design/DAGsP4YkRbw/TEJak4HyqSCTzKNj6PTHZw/view?utm_content=DAGsP4YkRbw&utm_source=opensourcenest";

const HomeSectionOne = () => {
  const handleHeroURL = (url: string) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <section className="section bg-[url(/images/hero-bg.svg)] bg-bottom bg-no-repeat bg-cover">
      <div
        className="constraint py-[143px] pt-[100px] flex justify-center gap-24 mx-auto items-center
      max-[1150px]:flex-wrap"
      >
        <div className="">
          <div
            className="flex items-center gap-1 py-2.5 px-5 bg-[#C7FFD0] rounded-full
          text-primary2 w-fit max-[500px]:py-[5px] max-[500px]:px-2.5"
          >
            <Image src="/images/globe.svg" alt="" height={16} width={16} />
            <p className="font-medium text-[10px] max-[500px]:text-[8px]">
              Top Open Source Initiative
            </p>
          </div>

          <p
            className="font-semibold text-[80px]/[80px] my-4
          max-[500px]:text-[60px]/[60px]"
          >
            Where
            <br />
            <span className="text-primary">Open Source</span>
            <br />
            Talent Thrives
          </p>

          <p className="text-[18px] max-[500px]:text-[16px] max-w-[430px]">
            Helping everyday people learn, use, and contribute to open source
          </p>

          <div className="flex gap-x-2.5 gap-y-5 mt-[50px] flex-wrap">
            <button
              className="bg-primary py-4 px-10 gap-2.5 rounded-full
            flex font-semibold text-[12px] border-primary border cursor-pointer"
              onClick={() => handleHeroURL(whatsappURL)}
            >
              <p>START CONTRIBUTING</p>
              <Image
                src="/images/arrow-right.svg"
                alt=""
                height={16}
                width={16}
              />
            </button>

            <button
              className="bg-black py-4 px-10 gap-2.5 rounded-full flex 
              font-semibold text-[12px] text-primary border-primary border cursor-pointer"
              onClick={() => handleHeroURL(campaignURL)}
            >
              <p>EXPLORE OUR PROJECT</p>
              <Image src="/images/code-tag.svg" alt="" height={16} width={16} />
            </button>
          </div>
        </div>

        <div
          className="grid grid-cols-2 gap-2.5 hero-border
        p-2.5 rounded-sm max-[1300px]:grid-cols-1 max-[1150px]:grid-cols-4
        max-[845px]:grid-cols-2 relative
        "
        >
          {Stat.map((stat) => (
            <div
              key={stat.title}
              className={`text-center py-[49px] px-[15px] flex flex-col 
                justify-center rounded-[6px] gap-1.5 z-[3] w-fullmax-[380px]:py-[30px]
                ${stat.className}`}
            >
              <p
                className="font-semibold text-[50px]/[24px]
              max-[500px]:text-[40px]/[24px] max-[380px]:text-[32px]/[24px]"
              >
                <AnimatedNumber value={stat.title} />
                {stat.after}
              </p>
              <p
                className="font-medium text-[22px]
              max-[500px]:text-[18px] max-[380px]:text-[16px] "
              >
                {stat.subject}
              </p>
            </div>
          ))}

          <div
            className="flex items-center gap-1 bg-[#C7FFD0] rounded-full
          text-primary2 w-fit px-2.5 py-1.5 
          absolute z-10 top-1/2 left-1/2 translate-[-50%] -rotate-6"
          >
            <p className="font-semibold text-[10px]">Targets for 2025</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSectionOne;

const Stat: {
  title: number;
  subject: string;
  after?: string;
  className: HTMLAttributes<HTMLDivElement>["className"];
}[] = [
  {
    title: 1,
    after: "",
    subject: "Mission",
    className: "bg-primary3",
  },
  {
    title: 4,
    after: "",
    subject: "Tracks",
    className: "bg-[#242424]",
  },
  {
    title: 9,
    after: "+",
    subject: "Projects",
    className: "bg-[#242424] max-[1300px]:bg-primary3 max-[845px]:bg-[#242424]",
  },
  {
    title: 300,
    after: "+",
    subject: "Contributors",
    className: "bg-primary3 max-[1300px]:bg-[#242424] max-[845px]:bg-primary3",
  },
];
