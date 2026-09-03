import Reveal from "@/components/ui/Reveal";

const Sprint26Benefits = () => {
  return (
    <section className="section bg-black mt-[150px]">
      <Reveal className="constraint flex flex-col gap-[10px]">
        <div className="flex flex-col gap-3 py-10">
          <p className="font-pixel! text-sprint26 text-[20px]">
            {">_ WHAT YOU WALK AWAY WITH"}
          </p>
          <p className="font-pixel! font-bold text-[48px] text-white leading-tight max-[512px]:text-[32px]">
            BENEFITS, BOTH SIDES
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex gap-5 max-[1000px]:flex-col">
            <div className="bg-gradient-to-b from-[#10af4b] from-[46%] to-[#0e975d] border-4 border-white rounded-[20px] flex-1 flex flex-col gap-3 justify-center px-10 py-12 max-[512px]:px-6 max-[512px]:py-8">
              <p className="font-pixel! text-white text-[16px] font-medium">
                FOR MAINTAINERS
              </p>
              <p className="font-pixel! text-white font-bold text-[36px] leading-tight max-[512px]:text-[28px]">
                BACKLOG,
                <br />
                ACTUALLY CLEARED
              </p>
              <p className="text-white/90 text-[20px] max-[512px]:text-[16px] pb-5">
                Maintainers see a massive reduction in stale tickets when a
                guided community steps in.
              </p>
              <p className="font-pixel! text-white font-bold text-[50px] max-[512px]:text-[36px]">
                %
              </p>
            </div>

            <div className="flex-1 flex flex-col gap-5">
              <div className="bg-[#0d0d0d] border border-[#282828] rounded-[20px] flex flex-col gap-3 p-10 max-[512px]:p-6">
                <p className="text-sprint26 text-[16px] font-medium">
                  FOR MAINTAINERS
                </p>
                <p className="font-bold text-[22px] text-white">
                  Community Triage
                </p>
                <p className="text-white/80 text-[16px]">
                  Every PR is reviewed by an OSN mentor before the maintainer
                  sees it.
                </p>
              </div>

              <div className="flex gap-5 max-[650px]:flex-col">
                <div className="bg-[#0d0d0d] border border-[#282828] rounded-[20px] flex-1 flex flex-col gap-3 p-10 max-[512px]:p-6">
                  <p className="font-pixel! text-sprint26 font-bold text-[16px]">
                    4 Weeks of Focus
                  </p>
                  <p className="text-white/80 text-[16px]">
                    A structured timeline to keep momentum high and ship
                    features fast.
                  </p>
                </div>

                {/* <div className="bg-[#0d0d0d] border border-[#282828] rounded-[20px] flex-1 flex flex-col gap-3 p-10">
                  <p className="font-pixel! uppercase text-sprint26 text-[16px] font-medium">
                    Shared
                  </p>
                  <p className="text-white/80 text-[16px]">
                    A mentor pairing for every repo, funded by our partners.
                  </p>
                </div> */}
              </div>
            </div>
          </div>

          <div className="flex gap-5 max-[1000px]:flex-col">
            <div className="bg-sprint26/10 border-4 border-sprint26 rounded-[20px] flex-1 flex flex-col gap-3 justify-center px-10 py-12 max-[512px]:px-6 max-[512px]:py-8">
              <p className="font-pixel! text-white text-[16px] font-medium">
                FOR CONTRIBUTORS
              </p>
              <p className="font-pixel! text-white font-bold text-[36px] leading-tight max-[512px]:text-[28px]">
                REAL WORLD
                <br />
                WORK, NOT TUTORIALS
              </p>
              <p className="text-white/90 text-[20px] max-[512px]:text-[16px] pb-3">
                Stop building to-do apps. Start contributing to the
                infrastructure of the modern web alongside senior developers.
              </p>

              <div className="flex gap-3 flex-wrap">
                {["CODE REVIEW", "MENTORSHIP", "PUBLIC RECORD"].map((tag) => (
                  <span
                    key={tag}
                    className="font-pixel! border border-sprint263 text-white text-[16px] px-3 py-1.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex-1 flex flex-col gap-5">
              <div className="bg-[#0d0d0d] border border-[#282828] rounded-[20px] flex flex-col gap-3 p-10 max-[512px]:p-6">
                <p className="text-sprint26 text-[16px] font-medium">
                  FOR CONTRIBUTORS
                </p>
                <p className="font-bold text-[22px] text-white">
                  A sprint record you can send a recruiter
                </p>
                <p className="text-white/80 text-[16px]">
                  Merged PRs, mentor notes, and review turnaround, exported as
                  one shareable page at the end of week four.
                </p>
              </div>

              <div className="flex gap-5 max-[650px]:flex-col">
                {/* <div className="bg-[#0d0d0d] border border-[#282828] rounded-[20px] flex-1 flex flex-col gap-3 p-10">
                  <p className="font-pixel! text-sprint26 font-bold text-[36px]">
                    2
                  </p>
                  <p className="text-white/80 text-[16px]">
                    Repos matched per contributor, swap once free.
                  </p>
                </div> */}

                <div className="bg-[#0d0d0d] border border-[#282828] rounded-[20px] flex-1 flex flex-col gap-3 p-10 max-[512px]:p-6">
                  <p className="font-pixel! uppercase text-sprint26 text-[16px] font-medium">
                    Growth
                  </p>
                  <p className="text-white/80 text-[16px]">
                    Weekly office hours, open to everyone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default Sprint26Benefits;
