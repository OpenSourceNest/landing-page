import ProgramBanner from "@/components/programs/ProgramBanner";
import ProgramCard from "@/components/programs/ProgramCard";
import programs from "@/data/programs";

export default function Home() {
  return (
    <section className="section pt-[110px]">
      <div className="constraint w-full min-h-screen">
        <ProgramBanner {...programs[0]} />

        <div className="mt-5 py-[50px]">
          {programs.map((program) => (
            <ProgramCard key={program.title} {...program} />
          ))}
        </div>
      </div>
    </section>
  );
}
