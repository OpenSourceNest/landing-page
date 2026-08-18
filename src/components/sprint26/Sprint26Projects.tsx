import { sprint26Projects } from "@/data/sprint26.data";

const Sprint26Projects = () => {
  return (
    <section className="section bg-black">
      <div className="constraint flex flex-col gap-[30px]">
        <div className="flex items-end justify-between gap-6 pb-5 pt-10 border-b border-primary max-[845px]:flex-col max-[845px]:items-start">
          <div className="flex flex-col gap-3">
            <p className="font-pixel! text-primary text-[20px]">
              {">_ON THE BOARD"}
            </p>
            <p className="font-pixel! font-bold text-[48px] text-white leading-tight max-[512px]:text-[32px]">
              PROJECTS TAKING PRs
            </p>
          </div>
          <p className="text-primary text-[22px] whitespace-nowrap">
            View all 68 repositories →
          </p>
        </div>

        <div className="grid grid-cols-3 gap-5 max-[1000px]:grid-cols-2 max-[650px]:grid-cols-1">
          {sprint26Projects.map((project) => (
            <div
              key={project.name}
              className="bg-[#0d0d0d] border border-[#282828] rounded-[20px] flex flex-col gap-3 p-10"
            >
              <div className="flex flex-col gap-3 pb-5">
                <div className="flex items-start justify-between gap-2.5">
                  <p className="font-pixel! uppercase font-bold text-[20px] text-white">
                    {project.name}
                  </p>
                  <span className="bg-primary size-4 shrink-0 mt-1" />
                </div>
                <p className="text-[#828282] text-[16px]">
                  {project.description}
                </p>
              </div>
              <div className="flex gap-3 flex-wrap">
                <span className="bg-black border border-[#828282] text-white text-[16px] px-3 py-1.5">
                  {project.language}
                </span>
                <span className="bg-black border border-[#828282] text-white text-[16px] px-3 py-1.5">
                  {project.openIssues}
                </span>
              </div>
            </div>
          ))}

          <div className="bg-[#0d0d0d] border border-[#282828] rounded-[20px] flex flex-col items-center justify-center text-center gap-3 p-10">
            <p className="font-pixel! text-primary font-bold text-[20px]">
              + YOUR REPO
            </p>
            <p className="text-[#828282] text-[16px]">
              Applications close two weeks before kickoff.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sprint26Projects;
