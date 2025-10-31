import ReadyToTakeFlight from "@/components/home/SectionFour";
import ProjectPostHeader from "@/components/projects/ProjectPostHeader";
import { Break } from "@/components/ui/Projects";
import Projects from "@/data/project.data";
import { Metadata } from "next";
import Image from "next/image";
import OG from "../../../../public/images/og/github-2025-og.png";

export const metadata: Metadata = {
  title: "Github Workshop - OpenSourceNest",
  description:
    "A comprehensive workshop on how to contribute to open source projects on GitHub, hosted by OpenSourceNest.",
  authors: [{ name: "Motunrayo Adeneye" }],

  keywords: [
    "Writer",
    "Contribution",
    "OpenSourceNest",
    "Workshop",
    "Open Source",
    "Open Source Nest",
    "Github",
  ],
  openGraph: {
    publishedTime: "2025-10-31T00:00:00.000Z",
    modifiedTime: "2025-10-31T00:00:00.000Z",
    images: [
      {
        url: OG.src,
        width: OG.width,
        height: OG.height,
      },
    ],
  },
  twitter: {
    images: [
      {
        url: OG.src,
        width: OG.width,
        height: OG.height,
      },
    ],
  },
};

const ProjectInfo = Projects["github-workshop-2025"];

export default function TemplatePage() {
  return (
    <section
      className="pt-[1px] no-padding px-10 max-[500px]:px-5"
      style={{
        background: `linear-gradient(black, #1a1a1a 60vw, #1a1a1a 90%, black)`,
      }}
    >
      <article className="constraint project-blog min-h-screen mt-[120px] max-[500px]:mt-[60px]">
        <ProjectPostHeader
          title={ProjectInfo.title}
          type={ProjectInfo.type}
          avatar={ProjectInfo.avatar}
          author={ProjectInfo.author}
          date={ProjectInfo.date}
        />
        <Image
          alt=""
          src="/images/projects/github-2025/github-2025-banner.png"
          className="w-full my-8 rounded-xl overflow-hidden"
          height={350}
          width={800}
        />
        <h3 className="sub-title">Introduction</h3>
        <p className="">
          The Github Workshop organized by OpenSourceNest, Africa was a 6-days
          program focused on how to use Git and Github. The program taught the
          learner on how to manage code, collaborate and contribute like a pro.
          The program ran from September 1-6, 2025 which included a series of
          sessions led by amazing instructors. The included topics such as
          Introduction to git and github, github basics, branching and merging,
          collaboration and pull requests, advanced git and github and
          automation and best practices. At the final phase of the program, the
          participants are taught how to manage code changes, collaborate with
          others, and contribute to real-world projects using industry-standard
          workflows.
        </p>

        <Break />

        <h3 className="sub-title">Goals and Objectives</h3>
        <ul>
          <li>
            Equip participants, especially beginners with the practical skills
            and confidence to use Git and GitHub effectively for version
            control, collaboration, and open-source contribution.
          </li>

          <li>
            Encourage the participants to actively contribute to projects using
            git and github.
          </li>

          <li>
            Promote collaboration by teaching participants how to work in
            distributed teams through branches, pull requests, and issues.
          </li>

          <li>
            Equip students with access to valuable learning resources through
            the GitHub Student Developer Pack.
          </li>
        </ul>

        <Break />

        <h3 className="sub-title">
          Application and Participation Distribution
        </h3>

        <ul>
          <li>279 applications from Nigeria</li>
          <li>159 participants</li>
          <li>8 instructors</li>
        </ul>

        <Break />

        <h3 className="sub-title">Team and Stakeholders Project team</h3>
        <ul>
          <li>Victoria Ofuasia - Co founder, OpenSourceNest</li>
          <li>Francis Onukwu - Co founder, OpenSourceNest</li>
          <li>Motunrayo Adeneye - Program Manager, OpenSourceNest</li>
        </ul>

        <Break />

        <h3 className="sub-title">Program Overview</h3>
        <p>
          This section provides a detailed breakdown of the program’s structure
          according to the days of the workshop
        </p>

        <div className="w-full overflow-x-auto my-8">
          <table>
            <thead>
              <tr>
                <th>Days</th>
                <th>Topics</th>
                <th>Instructors</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Day 1</td>
                <td>Introduction and Set up of Git and Github</td>
                <td>Lucky Joseph Hassan</td>
              </tr>

              <tr>
                <td>Day 2</td>
                <td>Git Basics</td>
                <td>Ndubuisi Mark Tochukwu</td>
              </tr>

              <tr>
                <td>Day 3</td>
                <td>Branching and merging</td>
                <td>
                  <ul>
                    <li>Alex Mkwizu </li>
                    <li>Kato Trevor Thomas</li>
                  </ul>
                </td>
              </tr>

              <tr>
                <td>Day 4</td>
                <td>Collaboration and pull requests</td>
                <td>Peter Benjamin Ani</td>
              </tr>

              <tr>
                <td>Day 5</td>
                <td>Advanced Git and Github Features</td>
                <td>Ezeugwu Romanus</td>
              </tr>

              <tr>
                <td>Day 6</td>
                <td>Automation and best practices</td>
                <td>Salim Oyinlola</td>
              </tr>

              <tr>
                <td>Day 6</td>
                <td>
                  Github Dev Pack: Unlocking Resources For Student Success
                </td>
                <td>Nworie Kingsley</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Break />

        <h3 className="sub-title">Events and Activities</h3>
        <p>
          The event started September 1st and ended September 6th, 2025. The
          workshop took place on Google Meet.
        </p>

        <Break />

        <div className="mt-[10px] flex flex-col items-center">
          <h3 className="sub-title">Day 1: Introduction to Git and GitHub</h3>

          <Image
            src="/images/projects/github-2025/github-2025-instructors-1.png"
            alt="Example"
            className="mb-[10px] w-64 rounded-md aspect-square"
            width={4000}
            height={4000}
          />

          <p className="">
            This workshop was focused on the This workshop was focused on the
            basics of version control and setting up a GitHub workflow.
            Participants learned the core concepts of Git, including how it
            helps track changes in projects and collaborate effectively with
            others. He also explored the difference between Git and GitHub,
            understanding that Git is a version control system while GitHub is a
            platform for hosting and sharing repositories.
          </p>
        </div>

        <Break />

        <div className="mt-[10px] flex flex-col items-center">
          <h3 className="sub-title">Day 2: Git basics</h3>

          <Image
            src="/images/projects/github-2025/github-2025-instructors-2.png"
            alt="Example"
            className="mb-[10px] w-64 rounded-md aspect-square"
            width={4000}
            height={4000}
          />

          <p className="">
            This session focused on understanding how Git repositories work,
            distinguishing between local and remote repositories. Participants
            learned how to initialize a new repository using git init and
            followed the basic Git workflow, including staging changes with git
            add, saving them with git commit, and checking project status using
            git status. The session also covered how to view commit history with
            git log and connect a local repository to GitHub using git remote
            add and git push commands.
          </p>
        </div>

        <Break />

        <div className="mt-[10px] flex flex-col items-center">
          <h3 className="sub-title">Day 3: Branching and Merging</h3>

          <div className="flex gap-3 flex-wrap justify-center">
            <Image
              src="/images/projects/github-2025/github-2025-instructors-3.png"
              alt="Example"
              className="mb-[10px] w-64 rounded-md aspect-square"
              width={4000}
              height={4000}
            />

            <Image
              src="/images/projects/github-2025/github-2025-instructors-4.png"
              alt="Example"
              className="mb-[10px] w-64 rounded-md aspect-square"
              width={4000}
              height={4000}
            />
          </div>

          <p className="">
            This session focused on mastering branching strategies—a crucial
            part of effective version control and collaborative development.
            Learners explored why branches matter, how they enable parallel
            development, and how to manage them efficiently.
            <Break /> Participants learned how to create and switch branches
            using git branch and git checkout -b, as well as how to merge
            branches with git merge. The session also covered the difference
            between fast-forward and non-fast-forward merges, along with
            techniques for resolving simple merge conflicts that arise during
            collaboration.
          </p>
        </div>

        <Break />

        <div className="mt-[10px] flex flex-col items-center">
          <h3 className="sub-title">Day 4: Collaboration and Pull Requests</h3>

          <Image
            src="/images/projects/github-2025/github-2025-instructors-5.png"
            alt="Example"
            className="mb-[10px] w-64 rounded-md aspect-square"
            width={4000}
            height={4000}
          />

          <p className="">
            This session immersed learners in the essentials of collaborative
            development using GitHub. From forking repositories to raising pull
            requests, participants experienced the true spirit of teamwork and
            open-source contribution. <Break /> Important topics the tutor
            emphasized on is the difference between forks and branches, cloning
            repositories for local development, and exploring pull requests
            (PRs) their purpose, importance, and role in collaboration. Learners
            also practiced reviewing code, leaving feedback, and merging pull
            requests effectively.
          </p>
        </div>

        <Break />

        <div className="mt-[10px] flex flex-col items-center">
          <h3 className="sub-title">Day 5: Advanced Git & GitHub Features</h3>

          <Image
            src="/images/projects/github-2025/github-2025-instructors-6.png"
            alt="Example"
            className="mb-[10px] w-64 rounded-md aspect-square"
            width={4000}
            height={4000}
          />

          <p className="">
            This session explored advanced concepts and tools to enhance
            productivity and collaboration in Git and GitHub. Participants
            learned how to undo mistakes using commands like git reset, git
            revert, and git checkout, as well as the basics of rebasing with git
            rebase to maintain a clean commit history. The session also covered
            how to temporarily save work using git stash. <Break /> On the
            GitHub side, participants were introduced to Issues and Discussions
            for managing tasks and team communication, GitHub Projects for
            visual project management using Kanban boards, and the GitHub Wiki
            for creating and maintaining project documentation.
          </p>
        </div>

        <Break />

        <div className="mt-[10px] flex flex-col items-center">
          <h3 className="sub-title">Day 6: Automation & Best practices</h3>

          <div className="flex gap-3 flex-wrap justify-center">
            <Image
              src="/images/projects/github-2025/github-2025-instructors-8.png"
              alt="Example"
              className="mb-[10px] w-64 rounded-md aspect-square"
              width={4000}
              height={4000}
            />

            <Image
              src="/images/projects/github-2025/github-2025-instructors-7.png"
              alt="Example"
              className="mb-[10px] w-64 rounded-md aspect-square"
              width={4000}
              height={4000}
            />
          </div>

          <p className="">
            The final session emphasized automation, collaboration standards,
            and professional GitHub practices. Learners explored how to write
            clear and meaningful commit messages that improve project history
            readability and team communication. They were introduced to GitHub
            Actions as an entry point to Continuous Integration and Continuous
            Deployment (CI/CD), learning how automation can streamline
            workflows.
            <Break />
            The session also covered essential repository management and
            contribution practices, including setting up branch protection
            rules, defining CODEOWNERS, and writing contributing guidelines to
            maintain code quality and collaboration standards. Participants
            reviewed open-source best practices, such as maintaining a
            comprehensive README, adding a LICENSE, and configuring a proper
            .gitignore file.
            <Break /> In the concluding segment, learners were introduced to the
            GitHub Student Developer Pack, discovering what it is, how to apply,
            and exploring the tools, benefits, and free learning resources it
            offers to support their growth as developers.
          </p>
        </div>

        <Break />

        <h3 className="sub-title">Achievements</h3>
        <p>
          This achievement demonstrates strong foundational skills in version
          control, collaboration, and open-source workflow management which is
          the key competencies for modern software development
        </p>

        <Break />

        <h3 className="sub-title">Conclusion</h3>
        <p>
          The GitHub Workshop was a success and a significant milestone for us.
          The program was well-received by participants and served as a valuable
          learning experience for both the learners and the organizing team.
          <br />
          This achievement has set the foundation for future workshops, and
          we’re excited to build on the lessons learned to create even more
          engaging and impactful learning experiences for our community.
        </p>
      </article>

      <ReadyToTakeFlight />
    </section>
  );
}
