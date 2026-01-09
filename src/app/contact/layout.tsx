import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - OpenSourceNest",
  description:
    "Get in touch with the OpenSourceNest team to learn more about our projects and how you can contribute.",
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
