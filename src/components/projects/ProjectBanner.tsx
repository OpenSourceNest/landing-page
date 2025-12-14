import Image from "next/image";
import Link from "next/link";
import { HTMLAttributes } from "react";
import { ProjectCardProps } from "./ProjectCard";

export default function ProjectBanner(
  props: ProjectCardProps & {
    className?: HTMLAttributes<HTMLDivElement>["className"];
  }
) {
  return (
    <Link
      href={props.blank ? "" : props.url}
      title={props.title}
      className={props.className || ""}
    >
      <div
        className={`w-full h-[504px] p-2.5 rounded-[12px]
        pb-[10px] relative flex`}
        style={{
          background: `url('${props.banner}'), ${
            props.bannerBackgroundColor || "white"
          }`,
          backgroundSize: "contain, 10%",
          backgroundRepeat: "no-repeat, repeat",
          backgroundPosition: "center 20%",
        }}
      >
        <div
          className=" bottom-0 left-0 p-10 m-0.5 rounded-2xl w-fit
        max-w-[700px] backdrop-blur py-6 mt-auto bg-black/90 "
        >
          <p
            className="font-semibold text-sm bg-primary3 w-fit rounded-md
          py-1 px-2.5"
          >
            {props.type}
          </p>

          <p className="mt-4 mb-6 font-semibold text-[36px] text-shadow-lg">
            {props.title}
          </p>

          <div
            className="flex items-center text-sm text-white 
          font-medium"
          >
            <Image
              alt={`Avatar of ${props.author}`}
              src={props.avatar || "/images/icons/avatar.png"}
              className="w-[26px] aspect-square rounded-full"
              width={26}
              height={26}
            />
            <p
              className="mr-[0px] ml-[6px] max-[600px]:mr-auto"
              title={props.author.seoText}
            >
              {props.author.seoText}
            </p>

            <span className="block aspect-square h-[3px] bg-white mx-[15px] rounded-full"></span>

            <p className="">
              <time dateTime={props.date.seoDate}>
                {props.date.displayText}
              </time>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
