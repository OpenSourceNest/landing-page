import {
  sprint26ContributorSteps,
  sprint26MaintainerSteps,
  Sprint26Step,
} from "@/data/sprint26.data";
import Link from "next/link";

const MAINTAINER_APPLICATION_URL = "https://forms.gle/i4qYyxYQRg8Q7MFG7";

const StepRow = ({ step }: { step: Sprint26Step }) => (
  <div className="border-b border-[#282828] first:border-t flex gap-4 max-[512px]:gap-2 items-start py-4">
    <div
      className="bg-black border border-sprint263 flex items-center justify-center p-3 max-[512px]:p-2
    w-14 max-[512px]:w-10 shrink-0"
      style={{ transform: `scale(0.8)` }}
    >
      <p className="font-pixel! text-sprint26 font-bold text-[18px] max-[512px]:text-[16px]">
        {step.number}
      </p>
    </div>

    <div className="flex flex-col gap-2">
      <p className="font-semibold text-[22px] max-[512px]:text-[16px] text-white">
        {step.title}
      </p>
      <p className="text-[#828282] text-[18px] max-[512px]:text-[13px]">
        {step.description}
      </p>
    </div>
  </div>
);

const Sprint26HowToJoin = () => {
  return (
    <section id="how-to-join" className="section bg-black mt-[150px]">
      <div className="constraint flex flex-col gap-[10px]">
        <div className="flex items-center justify-between gap-x-10 gap-y-0 max-[845px]:flex-col max-[845px]:items-start">
          <div className="flex flex-col gap-3 py-10">
            <p className="font-pixel! text-sprint26 text-[20px]">
              {">_ HOW TO JOIN"}
            </p>
            <p className="font-pixel! font-bold text-[48px] text-white leading-tight max-[512px]:text-[36px]">
              TWO DOORS,
              <br />
              ONE SPRINT
            </p>
          </div>

          <p className="text-white/80 text-[20px] max-w-[440px] text-right max-[845px]:text-left">
            Pick the lane that fits. Maintainers bring the backlog, contributors
            bring the pull requests.
          </p>
        </div>

        <div className="flex gap-5 items-stretch max-[1000px]:flex-col">
          <div className="bg-[#0d0d0d] border border-[#282828] rounded-[20px] flex-1 flex flex-col gap-3 p-10 max-[512px]:p-6">
            <div className="flex items-center justify-between gap-2.5 pb-10">
              <p className="font-pixel! font-bold text-[28px] max-[512px]:text-[20px] text-white">
                JOIN AS A MAINTAINER
              </p>
              <span className="font-pixel! uppercase bg-sprint26 text-black text-[14px] max-[512px]:text-[11px] font-medium px-3 py-1.5 max-[512px]:px-2 whitespace-nowrap">
                Repo owners
              </span>
            </div>
            <p className="text-[#828282] text-[20px] pb-6">
              Bring the issues you never get to. We route reviewed, scoped
              contributors to them.
            </p>
            <div className="flex flex-col">
              {sprint26MaintainerSteps.map((step) => (
                <StepRow key={step.number} step={step} />
              ))}
            </div>
            <Link
              href={MAINTAINER_APPLICATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-pixel! uppercase bg-sprint26 text-black font-semibold px-8 py-5 mt-8 w-fit"
            >
              List My Repo
            </Link>
          </div>

          <div className="bg-[#0d0d0d] border border-[#282828] rounded-[20px] flex-1 flex flex-col gap-3 p-10 max-[512px]:p-6">
            <div className="flex items-center justify-between gap-2.5 pb-10">
              <p className="font-pixel! font-bold text-[28px] max-[512px]:text-[20px] text-white">
                JOIN AS A CONTRIBUTOR
              </p>
              <span className="font-pixel! uppercase bg-black border border-sprint26 text-white text-[14px] max-[512px]:text-[11px] font-medium px-3 py-1.5 max-[512px]:px-2 whitespace-nowrap">
                Developers
              </span>
            </div>
            <p className="text-[#828282] text-[20px] pb-6">
              No prior open source needed. Bring one language you are
              comfortable in and four weeks of attention.
            </p>
            <div className="flex flex-col">
              {sprint26ContributorSteps.map((step) => (
                <StepRow key={step.number} step={step} />
              ))}
            </div>
            <button className="font-pixel! uppercase bg-black border border-[#a7ffc9] text-white font-semibold px-8 py-5 mt-8 w-fit cursor-pointer">
              Start Matching
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sprint26HowToJoin;
