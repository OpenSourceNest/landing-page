import Image from "next/image";
import Link from "next/link";

export interface ProjectCardProps {
  image: string;
  banner?: string;
  title: string;
  type: "Workshop";
  avatar?: string;
  author: { displayText?: string; seoText: string };
  date: string;
  url: string;
}

export default function ProjectCard(props: ProjectCardProps) {
  return (
    <Link href={props.url} title={props.title} className="w-fit flex">
      <div
        className="w-[352] min-h-[432px] p-2.5 gradient-border rounded-[8px]
    "
      >
        <Image
          alt=""
          src={props.image}
          className="w-full min-w-[332px] min-h-[240px] rounded-[6px] 
        object-cover mb-5"
          height={240}
          width={332}
        />

        <div className="px-3.5 pb-[20px]">
          <p className="font-semibold text-sm text-primary">{props.type}</p>
          <p className="mt-2.5 mb-5 font-semibold text-[22px]">{props.title}</p>

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

            <p className="mr-auto ml-[6px]" title={props.author.seoText}>
              {props.author.displayText || props.author.seoText}
            </p>

            <p className="">{props.date}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
