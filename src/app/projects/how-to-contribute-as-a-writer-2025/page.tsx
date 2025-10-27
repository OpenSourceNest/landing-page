import ReadyToTakeFlight from "@/components/home/SectionFour";
import ProjectPostHeader from "@/components/projects/ProjectPostHeader";
import { Break, Quote } from "@/components/ui/Projects";
import Projects from "@/data/project.data";
import { Metadata } from "next";
import Image from "next/image";
import OG from "../../../../public/images/og/writer-2025-og.png";

export const metadata: Metadata = {
  title: "How to Contribute as a Writer - OpenSourceNest",
  description:
    "Learn how to contribute to open source as a writer and make an impact in the open source community.",
  authors: [{ name: "Ibekwe O'brien" }],

  keywords: [
    "Writer",
    "Contribution",
    "OpenSourceNest",
    "Workshop",
    "Open Source",
    "Web3",
    "Blockchain",
    "Technical Writing",
    "Content Creation",
    "Documentation",
    "Open Source Nest",
  ],
  openGraph: {
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

const ProjectInfo = Projects["how-to-contribute-as-a-writer-2025"];

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
          src="/images/projects/writer-2025/writer-2025-banner.png"
          className="w-full my-8 rounded-xl overflow-hidden"
          height={350}
          width={800}
        />
        <h3 className="sub-title">Day 1 Recap</h3>
        <p className="">
          The first day set the tone for the entire workshop. We explored what
          it truly means to contribute as a writer in the blockchain and Web3
          space, starting with the idea of blockchain as an open-source
          ecosystem. It’s not just about developers writing lines of code, it’s
          about a community of builders, creatives, and storytellers who keep
          the space alive. Writers have a unique role here. They translate the
          complex into the relatable, and they turn ideas into narratives people
          can connect with. <Break />
          From there, we dove into the pillars of content creation, showing how
          different forms of writing, whether it’s an explainer, a thought
          piece, or a story, all play a part in shaping how people understand
          Web3. We also drew a line between content writers and content
          developers. While one focuses on creating the words themselves, the
          other looks at strategy and structure, making sure the message fits
          into a bigger picture. Both are crucial, and both have a place in this
          industry. <Break />
          To wrap things up, we touched on the importance of writing styles and
          how the same message needs to shift depending on where it lives. A
          post on X won’t read the same as a deep-dive article or a LinkedIn
          update, and knowing how to adapt makes the difference between being
          heard and being overlooked. <Break />
          Day 1 reminded us of something simple but powerful: Web3 needs writers
          just as much as it needs developers. Code builds the foundation, but
          words give it meaning.
        </p>

        <Break />

        <h3 className="sub-title">Day 2 Recap</h3>
        <p>
          Day two moved us from storytelling to the nuts-and-bolts of
          documentation, showing how technical writing is a powerful way to
          contribute to open source. We began by defining technical writing not
          as dry manuals but as the work that makes software usable: clear
          guides, precise references, helpful examples and onboarding that
          bridge the gap between code and people. From there the conversation
          broadened to the types of technical writing you might do, why it
          matters for product adoption and community growth, and how it can also
          build a career, whether through paid roles, freelance gigs, bounties,
          or creating a visible portfolio that opens doors.
          <Break />
          Practicality was the theme. we talked about concrete steps you can
          take to become a technical writer, learning documentation formats,
          getting comfortable with markdown and version control, reading
          existing docs to see what’s missing, and practicing by rewriting or
          expanding real examples. Finding places to contribute was handled
          practically too. scanning projects for documentation issues, joining
          repo communities, and looking for beginner-friendly labels so your
          first contributions land in the right spot. The day closed with a
          walk-through of a contribution workflow that takes you from spotting
          an issue to submitting a polished pull request and iterating with
          maintainers.
          <Break /> In short, Day 2 turned documentation from an afterthought
          into a clear, actionable path for contribution and income, reminding
          everyone that writing good docs is itself a form of building.
        </p>

        <Break />

        <h3 className="sub-title">Day 3 Recap</h3>
        <p>
          Day three brought us even closer to the heart of technical
          communication writing for developers. We explored what it really means
          to educate through writing, not to persuade. In technical writing, the
          goal isn’t to sell a product; it’s to make people understand it,
          clearly, accurately, and without unnecessary jargon.
          <Break />
          We touched on the difference between SDKs and APIs, clarifying how
          each plays a unique role in helping developers interact with
          technology. It was a reminder that before you can explain something
          well, you need to understand how it works. That’s why technical
          writers are encouraged to learn the basics of markdown, explore
          documentation tools, and get comfortable with the technical side of
          things.
          <Break />A key point that stood out was that technical writing isn’t
          the same as blog writing or ghostwriting. The intent is different.
          While blogs may entertain or persuade, technical documentation is
          about precision and usefulness. A reference that developers can depend
          on. It doesn’t have to sound overly complex or “smart”; in fact, the
          best technical writing is the kind that every developer, anywhere in
          the world, can easily understand. <Break />
          We also touched on the mindset and qualities of a good technical
          writer, adaptability, curiosity, and clarity. And as always, the
          session ended practically, showing where writers can start
          contributing: from GitHub repositories to developer forums and X,
          where the global open-source conversation is constantly happening.
          <Break />
          By the end of the session, it was clear that writing for developers
          isn’t just about documenting code. It’s about creating tools in
          written form. Guides that make building easier, faster, and less
          frustrating
        </p>

        <Quote
          center
          text="Code builds the foundation, but words give it meaning. In Web3, writers don’t 
          just tell stories, they build bridges between people and technology."
        />
      </article>

      <ReadyToTakeFlight />
    </section>
  );
}
