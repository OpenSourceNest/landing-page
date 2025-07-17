import Image from "next/image";

const HomeSectionOne = () => {
  return (
    <section className="section bg-[url(/images/hero-bg.svg)] bg-bottom bg-no-repeat bg-cover">
      <div className="constraint py-[143px] flex justify-center gap-24 mx-auto items-center">
        <div className="">
          <div
            className="flex items-center gap-1 py-2.5 px-5 bg-[#C7FFD0] rounded-full
          text-primary2 w-fit"
          >
            <Image src="/images/globe.svg" alt="" height={16} width={16} />
            <p className="font-medium text-[10px]">Top Open Source Community</p>
          </div>

          <p className="font-semibold text-[80px]/[80px] my-4">
            Where
            <br />
            <span className="text-primary">Open Source</span>
            <br />
            Talent Thrives
          </p>

          <p className="text-[18px]">
            Discover, connect, and contribute to the future of <br /> open
            source — from anywhere in the world.
          </p>

          <div className="flex gap-2.5 mt-[50px]">
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
        p-2.5 rounded-sm"
        >
          {Stat.map((stat) => (
            <div
              key={stat.title}
              className={`text-center py-[49px] px-[43px] flex flex-col 
                justify-center rounded-[6px] gap-1.5 z-10 ${stat.class}`}
            >
              <p className="font-semibold text-[50px]/[24px]">{stat.title}</p>
              <p className="font-medium text-[22px]">{stat.subject}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeSectionOne;

const Stat = [
  {
    title: "500+",
    subject: "Contributors",
    class: "bg-primary3",
  },
  {
    title: "20+",
    subject: "Countries",
    class: "bg-[#242424]",
  },
  {
    title: "50+",
    subject: "Projects",
    class: "bg-[#242424]",
  },
  {
    title: "100+",
    subject: "Contributors",
    class: "bg-primary3",
  },
];
