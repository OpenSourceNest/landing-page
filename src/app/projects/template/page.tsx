import ReadyToTakeFlight from "@/components/home/SectionFour";
import ProjectPostHeader from "@/components/projects/ProjectPostHeader";
import { Break, Quote } from "@/components/ui/Projects";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Template - OpenSourceNest",
  description: "Write a description of the project here",
  authors: [{ name: "Author Name" }],
};

export default function TemplatePage() {
  return (
    <section
      className="pt-[50px] no-padding px-10 max-[500px]:px-5"
      style={{
        background: `linear-gradient(black, #1a1a1a 60vw, #1a1a1a 90%, black)`,
      }}
    >
      <article className="constraint project-blog min-h-screen mt-[120px]">
        <ProjectPostHeader
          title="Project Title"
          type="Workshop"
          avatar="/images/icons/avatar.png"
          author={{ displayText: "Author Name", seoText: "Author SEO Text" }}
          date="January 1st, 2025"
        />
        <Image
          alt=""
          src="/images/projects/itu-utu-2025/itu-utu-2025-web.png"
          className="w-full my-8 rounded-xl overflow-hidden"
          height={350}
          width={800}
        />
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          adipisci earum sit blanditiis, inventore a officiis minima maxime
          aspernatur fugit corporis, qui, voluptas aliquam rem. Rem voluptate
          similique deserunt recusandae possimus aspernatur inventore voluptatem
          cupiditate doloribus ratione, asperiores consequuntur voluptatum
          natus, optio dolor repudiandae excepturi aut hic praesentium
          laboriosam ullam dolorem expedita? Nemo totam quaerat obcaecati ut
          esse asperiores voluptatum molestias soluta molestiae eaque odio
          recusandae accusamus a, iure deleniti aliquam tenetur! Enim iusto
          laborum sed dolor? Magnam incidunt, inventore error atque perferendis
          quis, saepe voluptate numquam, sapiente voluptas veniam. Voluptas
          corporis alias quo quos officiis itaque ad voluptatem voluptatibus.{" "}
          <Link href="">Testing</Link>
        </p>

        <Break />

        <h3 className="sub-title">Sub Title</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
          dolore quis quam fuga perferendis minus incidunt deserunt sed
          adipisci! Numquam vel officia, voluptates rem modi explicabo iusto
          temporibus delectus debitis aperiam unde tempora fugiat quod saepe
          animi eaque ipsum sapiente minus doloribus facilis aliquid provident
          distinctio obcaecati beatae. Error dolores cumque, omnis quia
          provident repudiandae iure, blanditiis corrupti nam ex aut fuga cum
          eligendi labore esse nemo debitis nisi possimus laboriosam aspernatur
          a rem, commodi adipisci deleniti. Architecto asperiores iure, ab
          reiciendis error dolore aspernatur porro hic inventore quis, numquam
          cumque nesciunt a iste provident sed illo sint adipisci! Placeat,
          repellendus voluptatem ullam rem nisi, quas quis labore quaerat vitae
          ipsam vel nobis veniam nihil consectetur beatae animi excepturi quidem
          possimus sed at. Ipsam enim laudantium rerum nam aliquam saepe,
          nostrum mollitia temporibus velit vitae esse fugiat ut! Similique
          commodi maiores quae labore fuga maxime optio dicta suscipit soluta?
          Vel, ducimus. Earum similique cumque consequuntur tempora deserunt
          consequatur eveniet repellendus ad natus possimus, fuga architecto ab
          mollitia laudantium autem quia doloribus labore totam fugiat magni,
          omnis facilis. Magnam labore praesentium quia quidem sapiente dolorum
          voluptates nisi id omnis, error a possimus, similique ut expedita!
          Voluptatum quisquam voluptatem optio quo commodi.
        </p>

        <Quote
          center
          text="To get rid of all the bugs, you must first get rid of all the code"
        />
      </article>

      <ReadyToTakeFlight />
    </section>
  );
}
