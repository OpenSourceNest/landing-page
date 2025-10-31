"use client";
import Image from "next/image";
import Link from "next/link";

export interface ProjectCardProps {
  image: string;
  banner?: string;
  title: string;
  type: "Workshop" | "Event";
  avatar?: string;
  author: { displayText?: string; seoText: string };
  date: { displayText: string; seoDate: string };
  url: string;
  blank?: boolean;
}

export default function ProjectCard(props: ProjectCardProps) {
  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    if (props.blank) {
      e.preventDefault();
    }
  };

  return (
    <Link
      href={props.blank ? "" : props.url}
      title={props.title}
      className="w-full flex mx-auto bg-black"
      onClick={handleLinkClick}
    >
      <div
        className="w-full min-h-[432px] p-2.5 gradient-border rounded-[8px]
    "
      >
        <Image
          alt=""
          src={props.image}
          className="w-full aspect-square rounded-[6px] 
        object-cover mb-5"
          height={240}
          width={332}
        />

        <div className="px-3.5 pb-[20px]">
          <p className="font-semibold text-sm text-primary">{props.type}</p>
          <p className="mt-2.5 mb-5 font-semibold text-[22px]">{props.title}</p>

          <div
            className="flex items-center text-sm text-secondary400 
          font-medium justify-between flex-wrap gap-3 "
          >
            <div className="flex items-center ">
              <Image
                alt={`Avatar of ${props.author}`}
                src={props.avatar || "/images/icons/avatar.png"}
                className="w-[26px] aspect-square rounded-full"
                width={26}
                height={26}
              />

              <p className="mr-auto ml-[6px]" title={props.author.seoText}>
                {props.author.displayText || props.author.seoText}
              </p>
            </div>

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
