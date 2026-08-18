import Image from "next/image";
import Link from "next/link";

const socialIcons = [
  { src: "/images/social-x.svg", alt: "X" },
  { src: "/images/social-whatsapp.svg", alt: "WhatsApp" },
  { src: "/images/social-linkedin.svg", alt: "LinkedIn" },
  { src: "/images/social-discord.svg", alt: "Discord" },
];

const exploreLinks = [
  { title: "Campaign", url: "/campaign" },
  { title: "Blog", url: "#" },
  { title: "Events", url: "#" },
  { title: "About us", url: "/contact" },
  { title: "Sprint 26", url: "/sprint26" },
];

const Sprint26Footer = () => {
  return (
    <section className="section bg-black pt-10 pb-10">
      <div className="constraint bg-primary3/10 bg-[url(/images/footer-boxes-bg.svg)] bg-center bg-no-repeat bg-cover rounded-[20px] relative overflow-hidden pt-[80px] px-10 max-[845px]:px-6">
        <div className="flex gap-10 max-[1150px]:flex-col">
          <div className="flex-1 flex flex-col gap-5 pb-10 min-w-[260px]">
            <span className="font-pixel! uppercase bg-primary text-black font-semibold rounded-full px-6 py-3.5 w-fit">
              Who we are
            </span>
            <p className="font-semibold text-[32px] text-white leading-tight">
              OpenSourceNest
              <br />a home for maintainers
            </p>
            <p className="text-white/90 text-[20px] max-w-[420px]">
              We run contribution sprints, mentorship, and events that keep
              open source repos maintained.
            </p>
          </div>

          <div className="flex flex-col gap-5 pb-10 pl-16 max-[845px]:pl-0 shrink-0">
            <span className="font-pixel! uppercase bg-primary text-black font-semibold rounded-full px-6 py-3.5 w-fit">
              Explore
            </span>
            {exploreLinks.map((link) => (
              <Link
                key={link.title}
                href={link.url}
                className="text-white text-[24px] font-medium"
              >
                {link.title}
              </Link>
            ))}
          </div>

          <div className="flex-1 flex flex-col gap-5 pb-10 min-w-[260px]">
            <span className="font-pixel! uppercase bg-primary text-black font-semibold rounded-full px-6 py-3.5 w-fit">
              Contact
            </span>
            <p className="font-semibold text-[32px] max-[512px]:text-[22px] text-white leading-tight break-words">
              hello@opensourcenest.dev
              <br />
              <span className="font-normal underline">
                › open an issue instead
              </span>
              *
            </p>
            <p className="text-white/90 text-[20px]">
              *we are maintainers too: async beats a meeting.
            </p>
            <Link
              href="/contact"
              className="font-semibold text-[26px] text-white underline w-fit"
            >
              › Partner with us*
            </Link>

            <div className="flex items-center gap-3">
              {socialIcons.map((icon) => (
                <div
                  key={icon.alt}
                  className="bg-primary3/10 flex items-center p-4 rounded-lg"
                >
                  <Image src={icon.src} alt={icon.alt} width={36} height={36} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="font-pixel! hidden min-[651px]:block text-center font-bold text-white text-[80px] leading-none tracking-[8px] whitespace-nowrap overflow-hidden translate-y-[35%] max-[845px]:text-[48px]">
          opensourcenest
        </p>

        <p className="font-pixel! block min-[651px]:hidden text-center font-bold text-white text-[48px] leading-[1.1] tracking-[4px] overflow-hidden translate-y-[20%]">
          open
          <br />
          source
          <br />
          nest
        </p>
      </div>
    </section>
  );
};

export default Sprint26Footer;
