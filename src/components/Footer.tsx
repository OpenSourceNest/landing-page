import Image from "next/image";
import Link from "next/link";

const socialIcons = [
  {
    src: "/images/social-x.svg",
    alt: "X",
    url: "https://x.com/opensourcenest",
  },
  {
    src: "/images/social-whatsapp.svg",
    alt: "WhatsApp",
    url: "https://bit.ly/osn-whatsapp",
  },
  {
    src: "/images/social-linkedin.svg",
    alt: "LinkedIn",
    url: "https://www.linkedin.com/company/opensourcenest",
  },
  {
    src: "/images/social-discord.svg",
    alt: "Discord",
    url: "https://bit.ly/osn-discord",
  },
];

const exploreLinks = [
  { title: "Campaign", url: "/campaign" },
  { title: "Sprint 26", url: "/sprint26" },
  { title: "Projects", url: "/projects" },
  { title: "Code Of Conduct", url: "/code-of-conduct" },
];

const Footer = () => {
  return (
    <footer className="section bg-black pt-10 pb-10 flex flex-col items-center relative overflow-hidden p-0">
      <div
        className="w-full max-w-[90vw] bg-primary/10 bg-[url(/images/footer-boxes-bg.svg)] bg-center bg-no-repeat bg-cover rounded-[20px] relative
      overflow-hidden pt-[80px] px-10 max-[845px]:px-6 flex justify-center pb-[100px]"
      >
        <div className="flex gap-10 max-[1150px]:flex-col justify-center">
          <div className=" flex flex-col gap-5 pb-10 min-w-[260px]">
            <span className="font-pixel! uppercase bg-primary/70 text-black font-semibold rounded-full px-4 py-2.5 w-fit text-[14px]">
              Who we are
            </span>
            <p className="font-semibold text-[28px] text-white leading-tight">
              OpenSourceNest
              <br />a home for foss advocates
            </p>
            <p className="text-white/90 text-[18px] max-w-[420px]">
              We run contribution sprints, mentorship, and events that keep open
              source talents thriving.
            </p>
          </div>

          <div className="flex flex-col gap-5 pb-10 max-[845px]:pl-0 shrink-0 items-stretch">
            <span className="font-pixel! uppercase bg-primary/70 text-black font-semibold rounded-full px-4 py-2.5 w-fit text-[14px]">
              Explore
            </span>

            {exploreLinks.map((link) => (
              <Link
                key={link.title}
                href={link.url}
                className="text-white text-[20px] font-medium"
              >
                {link.title}
              </Link>
            ))}
          </div>

          <div className="flex-1 flex flex-col gap-5 pb-10 min-w-[260px]">
            <span className="font-pixel! uppercase bg-primary/70 text-black font-semibold rounded-full px-4 py-2.5 w-fit text-[14px]">
              Contact
            </span>
            <p className="font-semibold text-[28px] max-[512px]:text-[22px] text-white leading-tight break-words">
              hello@opensourcenest.dev
            </p>
            <p className="text-white/90 text-[20px]">
              *we are maintainers too: async beats a meeting.
            </p>

            <Link
              href="/contact"
              className="font-semibold text-[26px] text-white w-fit"
            >
              {"> "}
              <span className="underline">Partner with us</span>
            </Link>

            <div className="flex items-center gap-3">
              {socialIcons.map((icon) => (
                <Link
                  href={icon.url}
                  key={icon.alt}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary/20 flex items-center p-4 rounded-lg"
                >
                  <Image src={icon.src} alt={icon.alt} width={36} height={36} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <p
        className="font-pixel! text-center font-bold text-white leading-none tracking-[8px] whitespace-nowrap
      overflow-hidden bottom-[-45px] max-[845px]:text-[48px] absolute w-full"
        style={{
          fontSize: `clamp(50px, 9vw, 180px)`,
        }}
      >
        opensourcenest
      </p>
    </footer>
  );
};

export default Footer;
