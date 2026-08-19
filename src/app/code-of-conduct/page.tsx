import ReadyToTakeFlight from "@/components/home/ReadyToTakeFlight";
import ProjectPostHeader from "@/components/projects/ProjectPostHeader";
import { Break } from "@/components/ui/Projects";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Code of Conduct - OpenSourceNest",
  description:
    "Our pledge to keep Open Source Nest a harassment-free, welcoming, and inclusive community for everyone.",
  keywords: ["Code of Conduct", "OpenSourceNest", "Community Guidelines"],
};

export default function CodeOfConductPage() {
  return (
    <section
      className="pt-[50px] no-padding px-10 max-[500px]:px-5"
      style={{
        background: `linear-gradient(black, #1a1a1a 60vw, #1a1a1a 90%, black)`,
      }}
    >
      <article className="constraint project-blog min-h-screen mt-[120px] max-[500px]:mt-[60px]">
        <ProjectPostHeader
          title="Code of Conduct"
          type="Community"
          avatar="/images/icons/avatar.png"
          author={{
            displayText: "OpenSourceNest Team",
            seoText: "OpenSourceNest Team",
          }}
          date={{ displayText: "January 1st, 2025", seoDate: "2025-01-01" }}
        />

        <p className="mt-[60px]">
          We as members, contributors, organizers, and leaders of Open Source
          Nest pledge to make participation in our community a harassment-free
          experience for everyone, regardless of age, body size, visible or
          invisible disability, ethnicity, sex characteristics, gender identity
          and expression, level of experience, education, socio-economic status,
          nationality, personal appearance, race, religion, or sexual identity
          and orientation.
        </p>
        <p>
          We pledge to act and interact in ways that contribute to an open,
          welcoming, diverse, inclusive, and healthy community — one that
          actively lowers barriers for beginners and people from underserved
          communities.
        </p>

        <Break />

        <h3 className="sub-title">Our Standards</h3>
        <p>
          Examples of behavior that contributes to a positive environment
          include:
        </p>
        <ul>
          <li>
            Demonstrating empathy, kindness, and patience toward other people
          </li>
          <li>
            Being respectful of differing opinions, viewpoints, and experiences
          </li>
          <li>Giving and gracefully accepting constructive feedback</li>
          <li>
            Accepting responsibility, apologizing to those affected by our
            mistakes, and learning from the experience
          </li>
          <li>
            Focusing on what is best not just for us as individuals, but for the
            overall community
          </li>
          <li>
            Actively welcoming and supporting beginners, first-time
            contributors, and people contributing in non-code ways
            (documentation, design, community management, translation, data
            collection, etc.)
          </li>
          <li>
            Using inclusive language and avoiding assumptions about others’
            technical knowledge or background
          </li>
          <li>
            Helping create a learning-friendly environment in workshops, events,
            Discord/WhatsApp, GitHub, and other spaces
          </li>
        </ul>

        <p className="mt-5">Examples of unacceptable behavior include:</p>
        <ul>
          <li>
            The use of sexualized language or imagery, and sexual attention or
            advances of any kind
          </li>
          <li>
            Trolling, insulting or derogatory comments, and personal or
            political attacks
          </li>
          <li>Public or private harassment</li>
          <li>
            Publishing others’ private information (such as a physical or email
            address) without their explicit permission
          </li>
          <li>
            Gatekeeping, dismissing beginners, or belittling non-code
            contributions
          </li>
          <li>
            Any other conduct that could reasonably be considered inappropriate
            in a professional or educational community setting
          </li>
        </ul>

        <Break />

        <h3 className="sub-title">Scope</h3>
        <p>
          This Code of Conduct applies within all Open Source Nest community
          spaces (online and offline), including but not limited to:
        </p>
        <ul>
          <li>Discord, WhatsApp, and other chat communities</li>
          <li>GitHub repositories and related discussions</li>
          <li>
            Workshops, AMAs, Contribute-a-thons, TAKEOFF, and other events
          </li>
          <li>Social media when representing or discussing Open Source Nest</li>
          <li>
            Any other spaces where community members interact in the context of
            OSN activities
          </li>
        </ul>
        <p>
          It also applies when an individual is officially representing the
          community in public spaces.
        </p>

        <Break />

        <h3 className="sub-title">Enforcement Responsibilities</h3>
        <p>
          Community leaders (including co-founders and designated moderators)
          are responsible for clarifying and enforcing our standards of
          acceptable behavior. They will take appropriate and fair corrective
          action in response to any behavior they deem inappropriate,
          threatening, offensive, or harmful.
        </p>
        <p>
          Community leaders have the right and responsibility to remove, edit,
          or reject comments, commits, code, wiki edits, issues, and other
          contributions that are not aligned with this Code of Conduct, and will
          communicate reasons for moderation decisions when appropriate.
        </p>

        <Break />

        <h3 className="sub-title">Enforcement Guidelines</h3>
        <p className="mb-5">
          Community leaders will follow these Community Impact Guidelines when
          determining the consequences for any action they deem in violation of
          this Code of Conduct:
        </p>
        <ul>
          <li>
            <strong>1. Correction</strong> — Use of inappropriate language or
            other behavior deemed unprofessional or unwelcome. A private,
            written warning providing clarity around the nature of the violation
            and an explanation of why the behavior was inappropriate. A public
            apology may be requested.
          </li>
          <li>
            <strong>2. Warning</strong> — A violation through a single incident
            or series of actions. A warning with consequences for continued
            behavior. No interaction with the people involved (including
            unsolicited interaction with those enforcing the Code of Conduct)
            for a specified period. This includes avoiding interactions in
            community spaces as well as external channels. Violating these terms
            may lead to a temporary or permanent ban.
          </li>
          <li>
            <strong>3. Temporary Ban</strong> — A serious violation of community
            standards, including sustained inappropriate behavior. A temporary
            ban from any sort of interaction or public communication with the
            community for a specified period. No public or private interaction
            with the people involved is allowed during this period. Violating
            these terms may lead to a permanent ban.
          </li>
          <li>
            <strong>4. Permanent Ban</strong> — Demonstrating a pattern of
            violation of community standards, including sustained inappropriate
            behavior, harassment of an individual, or aggression toward or
            disparagement of classes of individuals. A permanent ban from any
            sort of public interaction within the community.
          </li>
        </ul>

        <Break />

        <h3 className="sub-title">Reporting</h3>
        <p className="mb-3">
          Instances of abusive, harassing, or otherwise unacceptable behavior
          may be reported to the community leaders responsible for enforcement
          at{" "}
          <Link href="mailto:info@opensourcenest.org">
            info@opensourcenest.org
          </Link>
          .
        </p>

        <p>
          All complaints will be reviewed and investigated promptly and fairly.
          All community leaders are obligated to respect the privacy and
          security of the reporter of any incident.
        </p>

        <Break />

        <h3 className="sub-title">Attribution</h3>
        <p>
          This Code of Conduct is adapted from the{" "}
          <Link href="https://www.contributor-covenant.org" target="_blank">
            Contributor Covenant
          </Link>
          , version 2.1, available at{" "}
          <Link
            href="https://www.contributor-covenant.org/version/2/1/code_of_conduct.html"
            target="_blank"
          >
            https://www.contributor-covenant.org/version/2/1/code_of_conduct.html
          </Link>
          .
        </p>
        <p>
          Community Impact Guidelines were inspired by{" "}
          <Link href="https://github.com/mozilla/diversity" target="_blank">
            Mozilla’s code of conduct enforcement ladder
          </Link>
          .
        </p>
      </article>

      <ReadyToTakeFlight />
    </section>
  );
}
