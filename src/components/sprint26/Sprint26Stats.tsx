import { sprint26Stats } from "@/data/sprint26.data";

const Sprint26Stats = () => {
  return (
    <section className="section bg-black">
      <div className="constraint bg-[#0d0d0d] border border-[#282828] rounded-[20px] flex flex-wrap">
        {sprint26Stats.map((stat, index) => (
          <div
            key={stat.label}
            className={`flex-1 min-w-[160px] flex flex-col gap-3 py-10 px-6 ${
              index !== sprint26Stats.length - 1
                ? "border-r border-[#282828] max-[650px]:border-r-0"
                : ""
            }`}
          >
            <p className="text-primary font-bold text-[50px] leading-none">
              {stat.value}
            </p>
            <p className="text-[#828282] text-[20px] tracking-wide">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sprint26Stats;
