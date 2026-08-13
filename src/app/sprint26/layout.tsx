import NavBar from "@/components/NavBar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sprint 26 - OpenSourceNest",
  description:
    "Join the 5-Week Open Source Contribution Sprint. Clear your issue backlog or ship your first merged pull request, with zero spam.",
};

export default function Sprint26Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
}
