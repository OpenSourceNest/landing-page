import Image from "next/image";
import Link from "next/link";

const Sprint26Hero = () => {
  return (
    <section className="section bg-black bg-[url(/images/sprint26/boxes-bg-1.svg)] bg-center bg-no-repeat bg-cover relative overflow-hidden">
      <div className="constraint flex flex-col items-center gap-[60px] py-[70px]">
        <p className="text-center font-bold text-[80px] leading-none tracking-tight max-[845px]:text-[56px] max-[512px]:text-[40px]">
          Sprint{" "}
          <span className="bg-gradient-to-r from-[#01ff05] to-[#0e945f] bg-clip-text text-transparent">
            26
          </span>
        </p>

        <div className="flex items-center justify-between gap-10 w-full max-[1150px]:flex-col">
          <div className="bg-white border border-[#242424] text-black flex flex-col gap-3 max-w-[560px] flex-1 min-w-[320px]">
            <div className="bg-gradient-to-b from-[#10af4b] from-[46%] to-[#0e975d] flex flex-col gap-3 px-10 py-8 text-white">
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
                Got good first issue tickets gathering dust? Let our
                community knock them out. We are matching eager developers
                with open-source repositories for a massive 5-Week
                contribution event.
              </p>

              <div className="flex items-center gap-4 pt-6">
                <Link
                  href="#how-to-join"
                  className="bg-white text-black font-semibold px-8 py-4 border border-black"
                >
                  Get Started
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
            className="w-full max-w-[560px] flex-1 min-w-[320px] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Sprint26Hero;
