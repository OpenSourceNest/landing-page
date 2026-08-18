import Sprint26Benefits from "@/components/sprint26/Sprint26Benefits";
import Sprint26Footer from "@/components/sprint26/Sprint26Footer";
import Sprint26Hero from "@/components/sprint26/Sprint26Hero";
import Sprint26HowToJoin from "@/components/sprint26/Sprint26HowToJoin";
import Sprint26Partners from "@/components/sprint26/Sprint26Partners";
import Sprint26Projects from "@/components/sprint26/Sprint26Projects";
import Sprint26Share from "@/components/sprint26/Sprint26Share";
import Sprint26Stats from "@/components/sprint26/Sprint26Stats";
import { getSprintProjects } from "@/lib/github";

export default async function Sprint26() {
  const projects = await getSprintProjects();

  console.log({ projects });

  return (
    <>
      <Sprint26Hero />
      <Sprint26Stats />
      <Sprint26HowToJoin />
      <Sprint26Projects projects={projects} />
      <Sprint26Benefits />
      <Sprint26Share />
      <Sprint26Partners />
      <Sprint26Footer />
    </>
  );
}
