const Sprint26Benefits = () => {
  return (
    <section className="section bg-black">
      <div className="constraint flex flex-col gap-[30px]">
        <div className="flex flex-col gap-3 py-10">
          <p className="font-pixel! text-primary text-[20px]">
            {">_WHAT YOU WALK AWAY WITH"}
          </p>
          <p className="font-pixel! font-bold text-[48px] text-white leading-tight max-[512px]:text-[32px]">
            BENEFITS, BOTH SIDES
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex gap-5 max-[1000px]:flex-col">
            <div className="bg-gradient-to-b from-[#10af4b] from-[46%] to-[#0e975d] border-4 border-white rounded-[20px] flex-1 flex flex-col gap-3 justify-center px-10 py-12">
              <p className="font-pixel! text-white text-[16px] font-medium">
                FOR MAINTAINERS
              </p>
              <p className="font-pixel! text-white font-bold text-[36px] leading-tight">
                BACKLOG,
                <br />
                ACTUALLY CLEARED
              </p>
              <p className="text-white/90 text-[20px] pb-5">
                Scoped issues get claimed by matched contributors with a
                mentor attached, so review time goes down instead of up.
              </p>
              <p className="font-pixel! text-white font-bold text-[50px]">
                -64%
              </p>
            </div>

            <div className="flex-1 flex flex-col gap-5">
              <div className="bg-[#0d0d0d] border border-[#282828] rounded-[20px] flex flex-col gap-3 p-10">
                <p className="text-primary text-[16px] font-medium">
                  FOR MAINTAINERS
                </p>
                <p className="font-bold text-[22px] text-white">
                  Zero spam guarantee
                </p>
                <p className="text-white/80 text-[16px]">
                  Every contributor is verified and rate-limited to one open
                  claim. Drive-by README PRs never reach your queue.
                </p>
              </div>
              <div className="flex gap-5 max-[650px]:flex-col">
                <div className="bg-[#0d0d0d] border border-[#282828] rounded-[20px] flex-1 flex flex-col gap-3 p-10">
                  <p className="font-pixel! text-primary font-bold text-[36px]">
                    72H
                  </p>
                  <p className="text-white/80 text-[16px]">
                    Median first review, tracked publicly on the board.
                  </p>
                </div>
                <div className="bg-[#0d0d0d] border border-[#282828] rounded-[20px] flex-1 flex flex-col gap-3 p-10">
                  <p className="font-pixel! uppercase text-primary text-[16px] font-medium">
                    Shared
                  </p>
                  <p className="text-white/80 text-[16px]">
                    A mentor pairing for every repo, funded by our partners.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-5 max-[1000px]:flex-col">
            <div className="bg-primary3/10 border-4 border-primary3 rounded-[20px] flex-1 flex flex-col gap-3 justify-center px-10 py-12">
              <p className="font-pixel! text-white text-[16px] font-medium">
                FOR CONTRIBUTORS
              </p>
              <p className="font-pixel! text-white font-bold text-[36px] leading-tight">
                REAL MERGED
                <br />
                WORK, NOT TUTORIALS
              </p>
              <p className="text-white/90 text-[20px] pb-3">
                Ship into codebases people run in production, with a
                maintainer who committed to reviewing you.
              </p>
              <div className="flex gap-3 flex-wrap">
                {["CODE REVIEW", "MENTORSHIP", "PUBLIC RECORD"].map((tag) => (
                  <span
                    key={tag}
                    className="font-pixel! border border-primary3 text-white text-[16px] px-3 py-1.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex-1 flex flex-col gap-5">
              <div className="bg-[#0d0d0d] border border-[#282828] rounded-[20px] flex flex-col gap-3 p-10">
                <p className="text-primary text-[16px] font-medium">
                  FOR CONTRIBUTORS
                </p>
                <p className="font-bold text-[22px] text-white">
                  A sprint record you can send a recruiter
                </p>
                <p className="text-white/80 text-[16px]">
                  Merged PRs, mentor notes, and review turnaround, exported
                  as one shareable page at the end of week five.
                </p>
              </div>
              <div className="flex gap-5 max-[650px]:flex-col">
                <div className="bg-[#0d0d0d] border border-[#282828] rounded-[20px] flex-1 flex flex-col gap-3 p-10">
                  <p className="font-pixel! text-primary font-bold text-[36px]">
                    2
                  </p>
                  <p className="text-white/80 text-[16px]">
                    Repos matched per contributor, swap once free.
                  </p>
                </div>
                <div className="bg-[#0d0d0d] border border-[#282828] rounded-[20px] flex-1 flex flex-col gap-3 p-10">
                  <p className="font-pixel! uppercase text-primary text-[16px] font-medium">
                    Shared
                  </p>
                  <p className="text-white/80 text-[16px]">
                    Weekly office hours, recorded and open to everyone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sprint26Benefits;
