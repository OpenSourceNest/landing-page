import { sprint26Stats } from "@/data/sprint26.data";

const Sprint26Stats = ({ NumberOfProjects }: { NumberOfProjects: number }) => {
  return (
    <section className="section bg-black">
      <div className="constraint bg-[#0d0d0d] border border-[#282828] rounded-[20px] flex flex-wrap max-[650px]:flex-col">
        {sprint26Stats(NumberOfProjects).map((stat, index) => (
          <div
            key={stat.label}
            className={`flex-1 min-w-[160px] max-[650px]:min-w-0 flex flex-col gap-3 py-10 px-6 ${
              index !== sprint26Stats.length - 1
                ? "border-r border-[#282828] max-[650px]:border-r-0 max-[650px]:border-b"
                : ""
            }`}
          >
            <p className="font-pixel! text-primary font-bold text-[40px] leading-none max-[650px]:text-[40px] text-center">
              {stat.value}
            </p>

            <p className="text-[#828282] text-[18px] tracking-wide text-center">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sprint26Stats;
