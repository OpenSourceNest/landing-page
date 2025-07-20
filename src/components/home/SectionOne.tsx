import Image from "next/image";
import { HTMLAttributes } from "react";

const HomeSectionOne = () => {
  return (
    <section className="section bg-[url(/images/hero-bg.svg)] bg-bottom bg-no-repeat bg-cover">
      <div
        className="constraint py-[143px] flex justify-center gap-24 mx-auto items-center
      max-[1150px]:flex-wrap"
      >
        <div className="">
          <div
            className="flex items-center gap-1 py-2.5 px-5 bg-[#C7FFD0] rounded-full
          text-primary2 w-fit "
          >
            <Image src="/images/globe.svg" alt="" height={16} width={16} />
            <p className="font-medium text-[10px]">Top Open Source Community</p>
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

          <p className="text-[18px] max-[500px]:text-[16px]">
            Discover, connect, and contribute to the future of{" "}
            <br className="max-[600px]:hidden" /> open source — from anywhere in
            the world.
          </p>

          <div className="flex gap-x-2.5 gap-y-5 mt-[50px] flex-wrap">
            <button
              className="bg-primary py-4 px-10 gap-2.5 rounded-full
            flex font-semibold text-[12px] border-primary border"
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
              font-semibold text-[12px] text-primary border-primary border"
            >
              <p>EXPLORE PROJECT</p>
              <Image src="/images/code-tag.svg" alt="" height={16} width={16} />
            </button>
          </div>
        </div>

        <div
          className="grid grid-cols-2 gap-2.5 hero-border
        p-2.5 rounded-sm max-[1300px]:grid-cols-1 max-[1150px]:grid-cols-4
        max-[845px]:grid-cols-2
        "
        >
          {Stat.map((stat) => (
            <div
              key={stat.title}
              className={`text-center py-[49px] px-[20px] flex flex-col 
                justify-center rounded-[6px] gap-1.5 z-10 w-full ${stat.className}`}
            >
              <p
                className="font-semibold text-[50px]/[24px]
              max-[500px]:text-[40px]/[24px]"
              >
                {stat.title}
              </p>
              <p
                className="font-medium text-[22px]
              max-[500px]:text-[18px]"
              >
                {stat.subject}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeSectionOne;

const Stat: {
  title: string;
  subject: string;
  className: HTMLAttributes<HTMLDivElement>["className"];
}[] = [
  {
    title: "500+",
    subject: "Contributors",
    className: "bg-primary3",
  },
  {
    title: "20+",
    subject: "Countries",
    className: "bg-[#242424]",
  },
  {
    title: "50+",
    subject: "Projects",
    className: "bg-[#242424] max-[1300px]:bg-primary3 max-[845px]:bg-[#242424]",
  },
  {
    title: "100+",
    subject: "Contributors",
    className: "bg-primary3 max-[1300px]:bg-[#242424] max-[845px]:bg-primary3",
  },
];
