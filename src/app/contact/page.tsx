import ContactForm from "@/components/contact/ContactForm";
import ReadyToTakeFlight from "@/components/home/SectionFour";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="section pt-[70px] mb-24 max-[800px]:!px-5">
        <div className="constraint w-full flex gap-[21px] relative max-[880px]:flex-col">
          <div
            className="flex flex-col gap-7 sticky top-[120px] h-fit py-12 w-full max-w-[400px]
          max-[880px]:relative max-[880px]:top-0 max-[880px]:max-w-full"
          >
            {CallToAction.map((action) => (
              <div
                className="flex flex-col items-start gap-4"
                key={action.title}
              >
                <div className="flex items-center gap-4">
                  <Image
                    src={action.icon}
                    alt={""}
                    height={32}
                    width={32}
                    className="w-[32px] aspect-square"
                  />

                  <p className="font-semibold text-[26px]/[100%]">
                    {action.title}
                  </p>
                </div>

                <div className="">
                  <p className="font-medium text-lg">{action.description}</p>

                  <Link href={action.url} className="font-semibold text-[22px]">
                    {action.urlLabel}
                  </Link>
                </div>
              </div>
            ))}

            <div className="flex flex-wrap">
              {socialMediaLinks.map((social) => (
                <Link
                  href={social.url}
                  key={social.title}
                  className="py-3.5 px-[18px] border border-white/25 rounded-lg mr-4 hover:border-white"
                  title={social.title}
                >
                  <Image
                    src={social.icon}
                    alt={social.title}
                    height={30}
                    width={30}
                    className="w-[30px] aspect-square"
                  />
                </Link>
              ))}
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <ReadyToTakeFlight />
    </>
  );
}

const CallToAction = [
  {
    icon: "/images/icons/inbox.svg",
    title: "Email Us",
    description: "We are one email away. Reach out to us anytime.",
    url: "mailto:info@opensourcenest.org",
    urlLabel: "info@opensourcenest.org",
  },
];

const socialMediaLinks = [
  {
    icon: "/images/icons/linkedin.svg",
    title: "LinkedIn",
    url: "https://www.linkedin.com/company/opensourcenest",
  },
  {
    icon: "/images/icons/x.svg",
    title: "X",
    url: "https://x.com/opensourcenest",
  },
  {
    icon: "/images/icons/discord.svg",
    title: "Discord",
    url: "https://bit.ly/osn-discord",
  },
  {
    icon: "/images/icons/whatsapp.svg",
    title: "WhatsApp",
    url: "https://bit.ly/osn-whatsapp",
  },
];
