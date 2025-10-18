import ClashDisplayFont from "@/font/ClashDisplay.font";
import type { Metadata } from "next";
import "./globals.css";
import OG from "../../public/images/og/opengraph-image.png";

export const metadata: Metadata = {
  title: "Open Source Nest",
  description:
    "A beginner-friendly open source initiative promoting inclusion, collaboration, and digital empowerment through learning and advocacy.",
  metadataBase: new URL("https://opensourcenest.org"),
  keywords: [
    "Open Source Nest",
    "OSN",
    "open source",
    "osca",
    "technology",
    "local",
    "initiative",
    "oss",
    "OpenSourceNest",
    "opensourcenest",
    "open source community",
    "beginner-friendly",
    "inclusion",
    "collaboration",
    "digital empowerment",
    "learning",
    "advocacy",
    "tech",
  ],
  openGraph: {
    images: [
      {
        url: OG.src,
        width: OG.width,
        height: OG.height,
      },
    ],
  },
  twitter: {
    images: [
      {
        url: OG.src,
        width: OG.width,
        height: OG.height,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ClashDisplayFont.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
