export interface ICampaignTimelineData {
  date: string;
  description: string;
  defaultToggled?: boolean;
  topics: ICampaignTimelineDataTopic[];
}

export interface ICampaignTimelineDataTopic {
  date: string;
  title: string;
  description: string;
  featuring?: string;
  isActive?: boolean;
}

export const campaignTimelineData: ICampaignTimelineData[] = [
  {
    date: "25",
    description: `The 2025 Open Source Contribution Campaign is a series of events and workshops \
    aimed at empowering individuals to contribute to open source projects. \ 
    The campaign focuses on various contribution areas including code, documentation, design, \
    and community management. Through hands-on sessions, participants will gain practical skills \ 
    and knowledge to make meaningful contributions to the open source ecosystem.`,
    topics: [
      {
        date: "1st August, 2025",
        title: "Launch & Run Online Ads & Post on Social Media",
        description:
          "Announcement of the campaign launch along with online ads to create awareness and engagement with local audience",
        featuring: "",
      },
      {
        date: "1st August, 2025",
        title: "Speak during other Tech Events",
        description: "Brief intro to Open Source at external tech events.",
        featuring:
          "Featuring: Eth Enugu, Web3Conf Enugu, Code and Create Bootcamp, DevFest Enugu, Limitless, Buildathon, and more.",
      },
      {
        date: "1st September, 2025",
        title: "GitHub Workshop",
        description: "Teach GitHub basics and contribution workflow.",
        featuring:
          "Featuring: Lucky Joseph, Ndubuisi Mark, Alex Mkwizu, Kato Trevor, Peter Benjamin, Ezeugwu Romanus, Salim Oyinlola, and Nworie Kingsley ",
      },
      {
        date: "10th September, 2025",
        title: "Campaign in Linguistics Dept, University of Nigeria, Nsukka",
        description:
          "Engage the Linguistics department to support the campaign—discuss voice contributions, promote the Contribute-athon event and inform them about open datasets available for research.",
        featuring: "",
      },
      {
        date: "19th September, 2025",
        title: "How to Contribute as Writer Workshop",
        description:
          "Focus on docs, technical writing, creative writing, Wikipedia, etc. ",
        featuring:
          "Featuring: Gordian Etim, Ayanwumi Tunde, and Michael William",
      },
      {
        date: "11th October, 2025",
        title: "Common Voice Contribute-athon event (Ịtụ Utụ)",
        description:
          "Hold an in-person Contribute-athon event at Roar Hub featuring live voice contributions, DPG showcases, and workshops on how to contribute to OSS.",
        featuring: "In collaboration with Mozilla Common Voice",
      },
      {
        date: "14th October, 2025",
        title: "Inform AI/Data Pros of Free Datasets",
        description: "Awareness of public datasets for NLP and research",
        featuring: "In collaboration with Mozilla Common Voice",
      },
      {
        date: "16th October, 2025",
        title: "Village Voice Collection & Digital Access Campaign",
        description:
          "Visit Nsukka villages to collect Igbo voice data (including dialects), talk about DPGs, and promote inclusivity through access to relevant digital tools.",
        featuring: "In collaboration with Mozilla Common Voice",
      },
      {
        date: "28th November, 2025",
        title: "OSS Code Contribution Workshop",
        description:
          "Focus on contributing through code with tracks of Software Development, Cloud, and AI/ML.",
        featuring: "Featuring: Chukwuebuka Ezeokeke, Amber Adamson, and others",
      },
      {
        date: "5th December, 2025",
        title: "How to Contribute as Community Manager Workshop",
        description: "Focus on contributing through community management",
        featuring: "",
      },
      {
        date: "19th December, 2025",
        title: "How to Contribute as Designer Workshop",
        description: "Focus on contributing through design",
        featuring: "",
      },
      {
        date: "31st January, 2026",
        title: "Takeoff by OSN",
        description:
          "Wrap-up event to reinforce open source involvement, inspire open source growth & showcase impact",
        featuring: "",
        isActive: true,
      },
    ],
  },
];
