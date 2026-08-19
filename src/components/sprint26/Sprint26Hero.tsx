import Image from "next/image";
import Link from "next/link";
import DissolveGridParent from "../ui/DissolveGrid";

const Sprint26Hero = () => {
  return (
    <section
      className="section bg-black bg-[url(/images/hero-bg.svg)] bg-no-repeat bg-cover relative overflow-hidden"
      style={{
        backgroundPositionY: `-30px`,
      }}
    >
      <div className="constraint flex flex-col items-center gap-[60px] py-[70px]">
        <div className="relative w-full">
          <p
            className="font-pixel! text-center font-bold leading-none tracking-tight max-[845px]:text-[56px] max-[512px]:text-[40px]"
            style={{
              fontSize: `clamp(50px, 13vw, 200px)`,
            }}
          >
            Sprint{" "}
            <span className="bg-gradient-to-r from-[#01ff05] to-[#0e945f] bg-clip-text text-transparent">
              26
            </span>
          </p>

          <DissolveGridParent />
        </div>

        <div className="flex items-center justify-center gap-5 w-full max-[1150px]:flex-col">
          <div className="bg-white border border-[#242424] text-black flex flex-col gap-3 max-w-[560px] flex-1 min-w-[320px] max-[1150px]:order-last max-[400px]:min-w-0">
            <div
              className="bg-gradient-to-b from-[#10af4b] from-[46%] to-[#0e975d] flex flex-col gap-3 px-10 py-8 text-white
            shadow-two shadow-white"
            >
              <div className="flex flex-col gap-2">
                <p className="font-semibold text-[24px] leading-tight max-[512px]:text-[20px]">
                  {">_"}Clear Your Issue Backlog. Zero Spam.
                </p>
                <p className="font-semibold text-[24px] leading-tight max-[512px]:text-[20px]">
                  Join the 5-Week Open Source Contribution Sprint.
                </p>
              </div>

              <Image
                src="/images/sprint26/vector-divider.svg"
                alt=""
                width={400}
                height={2}
                className="w-full h-auto"
              />

              <p className="text-[18px] max-[512px]:text-[16px]">
                The 5-week open-source sprint where developers level up, and
                maintainers clear their backlogs (completely spam-free). We
                provide the mentorship, you provide the code.
              </p>

              <div className="flex items-center gap-2 pt-10">
                <Image
                  src="/images/sprint26/arrow-frame.svg"
                  alt=""
                  width={35}
                  height={35}
                  aria-hidden
                  className="rotate-90 shrink-0"
                />

                <Link
                  href="#how-to-join"
                  className="font-pixel! bg-white text-black font-semibold px-8 py-3 border-2 border-black whitespace-nowrap
                  shadow-one"
                >
                  Join The Sprint
                </Link>
              </div>
            </div>
          </div>

          <Image
            src="/images/sprint26/hero-mockup.png"
            alt="Sprint 26 devices mockup"
            width={782}
            height={568}
            priority
            className="w-full max-w-[500px] flex-1 min-w-[320px] h-auto object-contain max-[1150px]:order-first max-[400px]:min-w-0"
          />
        </div>
      </div>
    </section>
  );
};

export default Sprint26Hero;
