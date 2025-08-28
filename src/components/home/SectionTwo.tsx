import HomeCard from "./HomeCard";
import SectionTitle from "./SectionTitle";

const HomeSectionTwo = () => {
  return (
    <section className="section py-[100px] w-full">
      <div className="constraint flex flex-col items-center">
        {/* <SectionTitle title="ABOUT OSN" /> */}

        <p className="font-semibold text-[40px] mt-5 mb-10 text-center">
          Why Join <span className="text-primary">the Nest?</span>
        </p>

        <div className="grid grid-cols-2 gap-2.5 max-[600px]:grid-cols-1">
          {Reasons.map((reason) => (
            <HomeCard key={reason.title} data={reason} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeSectionTwo;

const Reasons = [
  {
    icon: "/images/projects.svg",
    title: "Community-Led Projects",
    subTitle:
      "Contribute to community-driven projects shaping the future of tech globally.",
  },
  {
    icon: "/images/community.svg",
    title: "Supportive Community",
    subTitle: "Collaborate with peers who share your passion and drive.",
  },
  {
    icon: "/images/structured.svg",
    title: "Structured Guidance",
    subTitle:
      "Get guidance from experienced contributors and open source maintainers.",
  },
  {
    icon: "/images/opportunities.svg",
    title: "Opportunities & Exposure",
    subTitle:
      "Build your portfolio, gain visibility, and unlock global opportunities.",
  },
];
