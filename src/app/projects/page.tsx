import ProjectBanner from "@/components/projects/ProjectBanner";
import ProjectCard from "@/components/projects/ProjectCard";
import Projects from "@/data/project.data";

export default function Home() {
  const projects = Object.values(Projects);

  return (
    <section className="section pt-[110px]">
      <div className="constraint w-full min-h-screen">
        <ProjectBanner {...projects[2]} className=" max-[600px]:hidden" />

        <div
          className="mt-5 py-[50px] grid grid-cols-3 gap-5
        max-[900px]:grid-cols-2 max-[600px]:grid-cols-1"
        >
          {projects.map((Project) => (
            <ProjectCard key={Project.title} {...Project} />
          ))}
        </div>
      </div>
    </section>
  );
}
