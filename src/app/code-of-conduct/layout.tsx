import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Code of Conduct - OpenSourceNest",
  description:
    "Our pledge to keep Open Source Nest a harassment-free, welcoming, and inclusive community for everyone.",
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
