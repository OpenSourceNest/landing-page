import NavBar from "@/components/NavBar";
import { Metadata } from "next";
import { sprint26JsonLd } from "@/schema/sprint26Schema";

const title = "Sprint 26 - OpenSourceNest";
const description =
  "Join the 4-Week Open Source Contribution Sprint. Clear your issue backlog or ship your first merged pull request, with zero spam.";
const ogImage = {
  url: "/images/og/sprint26-og.png",
  width: 1200,
  height: 630,
  alt: "Sprint 26 - OpenSourceNest",
};

export const metadata: Metadata = {
  title,
  description,
  authors: [{ name: "Open Source Nest" }],
  keywords: [
    "Sprint 26",
    "open source sprint",
    "OpenSourceNest",
    "open source contribution",
    "maintainer",
    "contributor",
    "good first issue",
    "hacktoberfest alternative",
    "open source mentorship",
    "OSS",
  ],
  alternates: {
    canonical: "/sprint26",
  },
  openGraph: {
    title,
    description,
    type: "website",
    url: "/sprint26",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage],
  },
};

export default function Sprint26Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <script
        id="sprint26-event-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(sprint26JsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <NavBar />
      {children}
    </>
  );
}
