export type Sprint26Stat = {
  value: number;
  label: string;
};

export const sprint26Stats = (NumberOfProjects: number): Sprint26Stat[] => [
  { value: 4, label: "WEEKS OF SPRINT" },
  { value: 500, label: "EAGER CONTRIBUTORS" },
  { value: 20, label: "ACTIVE MENTORS" },
  { value: NumberOfProjects, label: "MERGED PRs" },
];

export type Sprint26Step = {
  number: string;
  title: string;
  description: string;
};

export const sprint26MaintainerSteps: Sprint26Step[] = [
  {
    number: "01",
    title: "Submit your repository",
    description: "Fill out our quick form with a link to your project.",
  },
  {
    number: "02",
    title: "Check Your Docs",
    description:
      "Ensure your repository has a CONTRIBUTING.md file at its root. Our system requires this to list your project, as it sets the ground rules for our community.",
  },
  {
    number: "03",
    title: "Tag Your Issues",
    description:
      "Go through your issue tracker and apply the osn-sprint-26 label to any tasks you want our contributors to tackle (e.g., bug fixes, UI tweaks, or documentation updates).",
  },
  {
    number: "04",
    title: "Let the Shield Work",
    description:
      "Sit back and relax. Our mentors will triage all incoming Pull Requests. We ensure the code meets your formatting guidelines and passes tests before we request your final review.",
  },
];

export const sprint26ContributorSteps: Sprint26Step[] = [
  {
    number: "01",
    title: "Find Your Project",
    description:
      "Browse the Sprint 26 project board and pick a repository that excites you.",
  },
  {
    number: "02",
    title: "Read and Claim",
    description:
      "Before you write a single line of code, read the project's CONTRIBUTING.md file. Find an open issue tagged with osn-sprint-26 and leave a comment asking to be assigned. Do not open a Pull Request for an unassigned issue.",
  },
  {
    number: "03",
    title: "Build and Connect",
    description:
      "Fork the repository, create a new branch, and start coding! If you get stuck, jump into the OpenSourceNest Whatsapp/Discord to ask our mentors for help instead of pinging the maintainer directly.",
  },
  {
    number: "04",
    title: "Submit for Review",
    description:
      "Open your Pull Request. An OSN mentor will review your code to make sure it is clean and ready. Once a mentor approves it, it gets passed to the maintainer for the final merge!",
  },
];

export type Sprint26Project = {
  name: string;
  description: string;
  language: string;
  openIssues: string;
};

export const sprint26Projects: Sprint26Project[] = [
  {
    name: "nest/parser-core",
    description:
      "Streaming markdown parser used by three docs platforms. Needs test coverage and error messages.",
    language: "Typescript",
    openIssues: "12 open issues",
  },
  {
    name: "hivemail/relay",
    description:
      "Self-hosted transactional mail relay. Good first issues in templating and retries.",
    language: "Go",
    openIssues: "9 open issues",
  },
  {
    name: "plotmoss/charts",
    description:
      "Accessible chart primitives. Looking for keyboard navigation and screen reader labels.",
    language: "Javascript",
    openIssues: "17 open issues",
  },
  {
    name: "ferncli/toolkit",
    description:
      "Command line scaffolding tool. Wants better Windows support and docs examples.",
    language: "Rust",
    openIssues: "6 open issues",
  },
  {
    name: "openledger/api",
    description:
      "Double entry accounting API. Needs fixtures, currency edge cases, and OpenAPI cleanup.",
    language: "Python",
    openIssues: "21 open issues",
  },
];

export type Sprint26Partner = {
  audience: string;
  description: string;
  perks: string[];
  cta: string;
  highlighted?: boolean;
};

export const sprint26Partners: Sprint26Partner[] = [
  {
    audience: "COMMUNITIES",
    description:
      "Are you running a developer community, bootcamp, or university club? Bring your members to Sprint 26 and let's build together.",
    perks: [
      "Co-Branded Certificates & Digital Badges",
      "Exclusive Masterclasses & AMAs",
      "Organizer Swag & Recognition",
      "Community Leaderboard & Bragging Rights",
    ],
    cta: "Become a partner",
  },
  {
    audience: "ORGANISATIONS",
    description:
      "Support the open-source ecosystem while getting your platform, tooling, or APIs in front of thousands of active, engaged developers.",
    perks: [
      "Dedicated Challenge / Tooling Track",
      "Pre-Vetted Hiring Pipeline",
      "Live Product Demo / Workshop Slot",
      "End-of-sprint impact report for your OSS program",
      "Maintainer Grant Funding Attribution",
    ],
    cta: "Talk to us",
    highlighted: true,
  },
];
