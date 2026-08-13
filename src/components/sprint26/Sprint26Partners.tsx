import { sprint26Partners } from "@/data/sprint26.data";

const Sprint26Partners = () => {
  return (
    <section className="section bg-black pb-[100px]">
      <div className="constraint flex flex-col gap-[30px]">
        <div className="flex flex-col gap-3 py-10">
          <p className="text-primary text-[20px]">{">_PARTNER WITH US"}</p>
          <p className="font-bold text-[48px] text-white leading-tight max-[512px]:text-[32px]">
            BRING YOUR PEOPLE IN
          </p>
        </div>

        <div className="flex gap-5 max-[1000px]:flex-col">
          {sprint26Partners.map((partner) => (
            <div
              key={partner.audience}
              className={`flex-1 rounded-[20px] flex flex-col gap-3 p-12 ${
                partner.highlighted
                  ? "bg-primary3/10 border border-primary3"
                  : "bg-[#0d0d0d] border border-[#282828]"
              }`}
            >
              <div className="flex flex-col gap-5 pb-5">
                <div className="flex items-center gap-2.5">
                  <span
                    className={`size-4 shrink-0 ${
                      partner.highlighted ? "bg-white" : "bg-primary"
                    }`}
                  />
                  <p className="font-bold text-[22px] text-white">
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
              <button
                className={`font-semibold px-6 py-4 w-fit cursor-pointer ${
                  partner.highlighted
                    ? "bg-primary text-black"
                    : "bg-black border border-[#828282] text-white"
                }`}
              >
                {partner.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sprint26Partners;
