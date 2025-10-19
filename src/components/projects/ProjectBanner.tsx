import Image from "next/image";
import Link from "next/link";
import { ProjectCardProps } from "./ProjectCard";

export default function ProjectBanner(props: ProjectCardProps) {
  return (
    <Link href={props.url} title={props.title}>
      <div
        className={`w-full h-[504px] p-2.5 rounded-[12px]
        pb-[30px] relative`}
      >
        <Image
          alt={`Banner image for ${props.title}`}
          src={props.banner || ""}
          height={1616}
          width={4320}
          className="w-full min-h-[240px] rounded-[6px] 
        object-cover mb-5 absolute top-0 left-0 opacity-30"
        />

        <div
          className="absolute bottom-0 left-0 p-10 m-0.5 rounded-2xl w-full
        max-w-[700px]"
        >
          <p
            className="font-semibold text-sm bg-primary3 w-fit rounded-md
          py-1 px-2.5"
          >
            {props.type}
          </p>

          <p className="mt-4 mb-6 font-semibold text-[36px]">{props.title}</p>

          <div
            className="flex items-center text-sm text-secondary400 
          font-medium"
          >
            <Image
              alt={`Avatar of ${props.author}`}
              src={props.avatar || "/images/icons/avatar.png"}
              className="w-[26px] aspect-square rounded-full"
              width={30}
              height={30}
            />

            <p
              className="mr-[50px] ml-[6px] max-[600px]:mr-auto"
              title={props.author.seoText}
            >
              {props.author.displayText || props.author.seoText}
            </p>

            <p className="">{props.date}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
