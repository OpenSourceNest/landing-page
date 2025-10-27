import Image from "next/image";
import { ProjectCardProps } from "./ProjectCard";
import { HTMLAttributes } from "react";

type ProjectPostHeaderProps = Pick<
  ProjectCardProps,
  "type" | "title" | "avatar" | "author" | "date"
> & { className?: HTMLAttributes<HTMLDivElement>["className"] };

export default function ProjectPostHeader(props: ProjectPostHeaderProps) {
  return (
    <div className={props.className || ""}>
      <p
        className="font-semibold text-sm bg-primary3 w-fit rounded-md
                  py-1 px-2.5 max-[400px]:text-xs"
      >
        {props.type}
      </p>

      <h3 className="mt-4 mb-5 font-semibold text-[36px] text-shadow-lg">
        {props.title}
      </h3>

      <div
        className="flex items-center text-sm text-white 
                  font-medium flex-wrap gap-3 gap-y-2 w-full"
      >
        <Image
          alt={`Avatar of ${props.author}`}
          src={props.avatar || "/images/icons/avatar.png"}
          className="w-[26px] aspect-square rounded-full"
          width={36}
          height={36}
        />
        <p
          className="mr-auto ml-[6px] max-[600px]:mr-auto"
          title={props.author.seoText}
        >
          {props.author.seoText}
        </p>

        <p className="">{props.date}</p>
      </div>
    </div>
  );
}
