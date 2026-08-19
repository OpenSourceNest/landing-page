import { IGithubProjectResponse, SearchQuery } from "@/lib/github";
import Link from "next/link";

const MAINTAINER_APPLICATION_URL = "https://forms.gle/i4qYyxYQRg8Q7MFG7";

const Sprint26Projects = ({
  projects,
}: {
  projects: IGithubProjectResponse[];
}) => {
  return (
    <section className="section bg-black">
      <div className="constraint flex flex-col gap-[30px]">
        <div className="flex items-end justify-between gap-6 pb-5 pt-10 border-b border-sprint26 max-[845px]:flex-col max-[845px]:items-start">
          <div className="flex flex-col gap-3">
            <p className="font-pixel! text-sprint26 text-[20px]">
              {">_ ON THE BOARD"}
            </p>
            <p className="font-pixel! font-bold text-[48px] text-white leading-tight max-[512px]:text-[32px]">
              PROJECTS TAKING PRs
            </p>
          </div>

          <Link
            href={`https://github.com/search?q=${SearchQuery}&sort=updated&order=desc&type=repositories`}
            target="_blank"
            className="text-sprint26 text-[22px] whitespace-nowrap p-1.5"
          >
            View all {projects.length ? projects.length : ""} repositories →
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-5 max-[1000px]:grid-cols-2 max-[650px]:grid-cols-1">
          {projects.slice(0, 10).map((project) => (
            <Link
              href={project.url.replace("api.github.com/repos/", "github.com/")}
              target="_blank"
              key={project.name}
              className="bg-[#0d0d0d] border border-[#282828] rounded-[20px] flex flex-col gap-3 p-8"
            >
              <div className="flex flex-col gap-3 pb-5">
                <div className="flex items-start justify-between gap-2.5">
                  <p className="font-pixel! uppercase font-bold text-[20px] text-white">
                    {project.name}
                  </p>
                  <span className="bg-sprint26 px-1.5 font-semibold rounded-xs text-black">
                    {project.open_issues}
                  </span>
                </div>
                <p className="text-[#828282] text-[16px]">
                  {project.description}
                </p>
              </div>
              <div className="flex gap-1.5 flex-wrap">
                {project.all_languages.map((language) => (
                  <span
                    key={language}
                    className="bg-black border border-[#828282] text-white text-[11px] px-3 py-1.5"
                  >
                    {language}
                  </span>
                ))}
              </div>
            </Link>
          ))}

          <Link
            href={MAINTAINER_APPLICATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0d0d0d] border border-[#282828] rounded-[20px] flex flex-col items-center justify-center text-center gap-3 p-10"
          >
            <p className="font-pixel! text-sprint26 font-bold text-[20px]">
              + YOUR REPO
            </p>
            <p className="text-[#828282] text-[16px]">
              Applications close before kickoff.
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Sprint26Projects;
