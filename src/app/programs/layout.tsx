import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import ClashDisplayFont from "@/font/ClashDisplay.font";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programs - OpenSourceNest",
  description:
    "Our programs are designed to empower individuals with the skills \
    and knowledge needed to thrive in the open source ecosystem.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ClashDisplayFont.className} antialiased`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
