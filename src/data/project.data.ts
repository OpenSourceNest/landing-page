import { ProjectCardProps } from "@/components/projects/ProjectCard";

const Projects: Record<string, ProjectCardProps> = {
  "itu-utu-2025": {
    image: "/images/Projects/itu-utu-2025/itu-utu-2025.png",
    banner: "/images/Projects/itu-utu-2025/itu-utu-2025-banner.png",
    title: "Ịtụ Utụ",
    type: "Event",
    avatar: "",
    author: {
      displayText: "Christabel & Amarachi",
      seoText: "Ezenwata Christabel and Nwoga Amarachi",
    },
    date: { displayText: "October 11th, 2025", seoDate: "2025-10-11" },
    url: "/projects/itu-utu-2025",
    blank: true,
  },

  "how-to-contribute-as-a-writer-2025": {
    image: "/images/Projects/writer-2025/writer-2025.png",
    banner: "/images/Projects/writer-2025/writer-2025-banner.png",
    title: "Contribute As A Writer",
    type: "Workshop",
    avatar: "",
    author: {
      displayText: "Ibekwe O'brien ",
      seoText: "Ibekwe Chinedu O'Brien ",
    },
    date: { displayText: "September 19th, 2025", seoDate: "2025-09-19" },
    url: "/projects/how-to-contribute-as-a-writer-2025",
  },

  "github-workshop-2025": {
    image: "/images/Projects/github-2025/github-2025.png",
    banner: "/images/Projects/github-2025/github-2025-banner.png",
    title: "Github Workshop",
    type: "Workshop",
    avatar: "",
    author: { displayText: "Motunrayo Adeneye", seoText: "Motunrayo Adeneye" },
    date: { displayText: "September 6th, 2025", seoDate: "2025-09-06" },
    url: "/projects/github-workshop-2025",
  },
};

export default Projects;
