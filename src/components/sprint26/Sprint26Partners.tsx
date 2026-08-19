import { sprint26Partners } from "@/data/sprint26.data";
import Link from "next/link";

const Sprint26Partners = () => {
  return (
    <section className="section bg-black pb-[100px]">
      <div className="constraint flex flex-col gap-[30px]">
        <div className="flex flex-col gap-3 py-10">
          <p className="font-pixel! text-sprint26 text-[20px]">
            {">_ PARTNER WITH US"}
          </p>
          <p className="font-pixel! font-bold text-[48px] text-white leading-tight max-[512px]:text-[32px]">
            BRING YOUR PEOPLE IN
          </p>
        </div>

        <div className="flex gap-5 max-[1000px]:flex-col">
          {sprint26Partners.map((partner) => (
            <div
              key={partner.audience}
              className={`flex-1 rounded-[20px] flex flex-col gap-3 p-12 ${
                partner.highlighted
                  ? "bg-sprint26/10 border border-sprint26"
                  : "bg-[#0d0d0d] border border-[#282828]"
              }`}
            >
              <div className="flex flex-col gap-5 pb-5">
                <div className="flex items-center gap-2.5">
                  <span
                    className={`size-4 shrink-0 ${
                      partner.highlighted ? "bg-white" : "bg-sprint26"
                    }`}
                  />
                  <p className="font-pixel! uppercase font-bold text-[22px] text-white">
                    {partner.audience}
                  </p>
                </div>
                <p className="text-[#828282] text-[18px]">
                  {partner.description}
                </p>
                <ul className="flex flex-col gap-2">
                  {partner.perks.map((perk) => (
                    <li key={perk} className="text-white text-[18px]">
                      › {perk}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href={`mailto:hello@opensourcenest.dev?subject=${encodeURIComponent(
                  `Partnering with OSN — ${partner.audience}`,
                )}`}
                className={`font-pixel! uppercase font-semibold px-6 py-4 w-fit ${
                  partner.highlighted
                    ? "bg-sprint26 text-black"
                    : "bg-black border border-[#828282] text-white"
                }`}
              >
                {partner.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sprint26Partners;
