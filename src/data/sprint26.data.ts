export type Sprint26Stat = {
  value: string;
  label: string;
};

export const sprint26Stats: Sprint26Stat[] = [
  { value: "5", label: "WEEKS OF SPRINT" },
  { value: "1.2K", label: "CONTRIBUTORS WAITING" },
  { value: "68", label: "REPOS ON BOARD" },
  { value: "0", label: "SPAM PRs TOLERATED" },
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
    description: "Public repo, an OSS licence, and a readable README.",
  },
  {
    number: "02",
    title: "Label 5+ good first issues",
    description: "Scope, acceptance criteria, and a rough time estimate each.",
  },
  {
    number: "03",
    title: "Sign the review pledge",
    description: "First response within 72 hours during the five weeks.",
  },
  {
    number: "04",
    title: "Go live on the board",
    description: "Your repo lands in the sprint board with a mentor slot.",
  },
];

export const sprint26ContributorSteps: Sprint26Step[] = [
  {
    number: "01",
    title: "Create your sprint profile",
    description: "Languages, timezone, and hours you can actually commit.",
  },
  {
    number: "02",
    title: "Get matched to two repos",
    description: "Matching runs weekly. You can swap once, no penalty.",
  },
  {
    number: "03",
    title: "Claim an issue, ship a PR",
    description: "One issue at a time. Claims expire after seven quiet days.",
  },
  {
    number: "04",
    title: "Collect your sprint record",
    description: "Merged PRs, mentor notes, and a referral-ready profile.",
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
      "Dev circles, campus clubs, and meetups run the sprint as a local chapter with our board, mentors, and materials.",
    perks: [
      "A chapter page and leaderboard for your members",
      "Kickoff and demo-day run of show, ready to use",
      "Two mentor slots reserved per 50 members",
    ],
    cta: "Apply as a chapter",
  },
  {
    audience: "ORGANISATIONS",
    description:
      "Sponsor a track, put your maintainers on the board, or give your engineers paid sprint hours on the repos you depend on.",
    perks: [
      "Sponsored track with your name on the sprint board",
      "Hiring signal from real merged contributions",
      "End-of-sprint impact report for your OSS program",
    ],
    cta: "Talk to us",
    highlighted: true,
  },
];
