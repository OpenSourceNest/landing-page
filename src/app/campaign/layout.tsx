import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects - OpenSourceNest",
  description:
    "Our projects are designed to empower individuals with the skills \
    and knowledge needed to thrive in the open source ecosystem.",
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
