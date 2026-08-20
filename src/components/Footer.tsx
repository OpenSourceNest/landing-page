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
    <footer className="w-full bg-black p-10 max-[512px]:p-5 flex flex-col items-center relative overflow-hidden">
      <div
        className="w-full bg-sprint26/0 rounded-[20px] relative
      overflow-hidden pt-10 px-10 max-[845px]:px-6 max-[512px]:pt-6 flex flex-col pb-[50px] max-[512px]:pb-8"
      >
        <div className="absolute inset-0 bg-[url(/images/footer-boxes-bg.svg)] bg-center bg-no-repeat bg-cover opacity-35 z-[1]"></div>

        <div className="flex gap-10 justify-between max-[845px]:flex-col w-full max-w-[2000px] z-[3] mx-auto">
          <div className=" flex flex-col gap-5 pb-10 min-w-[260px] max-[845px]:min-w-0">
            <span className="font-pixel! uppercase bg-sprint26 text-black font-semibold rounded-full px-4 py-2.5 w-fit text-[14px]">
              Who we are
            </span>
            <p className="font-semibold text-[28px] max-[512px]:text-[22px] text-white leading-tight">
              OpenSourceNest
              <br />a home for foss advocates
            </p>
            <p className="text-white/90 text-[18px] max-w-[420px]">
              We run contribution sprints, mentorship, and events that keep open
              source talents thriving.
            </p>
          </div>

          <div className="flex flex-col gap-5 pb-10 max-[845px]:pl-0 shrink-0 items-stretch">
            <span className="font-pixel! uppercase bg-sprint26 text-black font-semibold rounded-full px-4 py-2.5 w-fit text-[14px]">
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

          <div className="flex flex-col gap-5 pb-10 min-w-[260px] max-[845px]:min-w-0">
            <span className="font-pixel! uppercase bg-sprint26 text-black font-semibold rounded-full px-4 py-2.5 w-fit text-[14px]">
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
                  className="bg-sprint26/10 flex items-center p-2 rounded-lg"
                >
                  <Image src={icon.src} alt={icon.alt} width={28} height={28} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
