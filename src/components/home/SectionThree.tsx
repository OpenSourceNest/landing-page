import HomeCard from "./HomeCard";
import SectionTitle from "./SectionTitle";

const HomeSectionThree = () => {
  return (
    <section className="section py-[100px] w-full">
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
    title: "Monthly Hack Nights",
    subTitle: "Collaborative coding sessions every month",
  },
  {
    icon: "/images/house-flag.svg",
    title: "Open Source Global Fest",
    subTitle: "Annual celebration of global open source",
  },
  {
    icon: "/images/contributor-ama.svg",
    title: "Community AMAs",
    subTitle: "Regular Q&A sessions with industry experts",
  },
];
