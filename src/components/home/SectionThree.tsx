import HomeCard from "./HomeCard";
import SectionTitle from "./SectionTitle";

const HomeSectionThree = () => {
  return (
    <section className="section py-[100px] w-full max-[500px]:py-[50px]">
      <div className="constraint flex flex-col">
        <SectionTitle title="EVENTS & CAMPAIGNS" />

        <p className="font-semibold text-[40px] mt-5 mb-10 text-center">
          What&rsquo;s <span className="text-primary">Happening?</span>
        </p>

        <div
          className="grid grid-cols-4 gap-2.5 max-[1000px]:grid-cols-2
         max-[600px]:grid-cols-1"
        >
          {Reasons.map((reason) => (
            <HomeCard
              key={reason.title}
              data={reason}
              className="px-5 py-[30px]"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeSectionThree;

const Reasons = [
  {
    icon: "/images/contributor.svg",
    title: "Contributor Onboarding Sessions",
    subTitle: "Weekly sessions to help new contributors get started",
  },
  {
    icon: "/images/hack-night.svg",
    title: "Monthly Workshops",
    subTitle:
      "Learn how to contribute to open source through design, community management, code, and technical writing. ",
  },
  {
    icon: "/images/house-flag.svg",
    title: "Open Source In Person Events",
    subTitle: "Annual celebration of global open source",
  },
  {
    icon: "/images/contributor-ama.svg",
    title: "Community AMAs",
    subTitle: "Regular Q&A sessions with industry experts",
  },
];
