import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Campaign - OpenSourceNest",
  description:
    "Join our campaign to contribute to open source projects and make a difference in the developer community.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}
