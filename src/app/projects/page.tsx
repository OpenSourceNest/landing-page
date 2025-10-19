import ProjectBanner from "@/components/projects/ProjectBanner";
import ProjectCard from "@/components/projects/ProjectCard";
import Projects from "@/data/project.data";

export default function Home() {
  return (
    <section className="section pt-[110px]">
      <div className="constraint w-full min-h-screen">
        <ProjectBanner {...Projects[0]} />

        <div className="mt-5 py-[50px]">
          {Projects.map((Project) => (
            <ProjectCard key={Project.title} {...Project} />
          ))}
        </div>
      </div>
    </section>
  );
}
