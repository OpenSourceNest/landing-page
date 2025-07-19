import ClashDisplayFont from "@/font/ClashDisplay.font";
import type { Metadata } from "next";
import "./globals.css";
import OG from "./opengraph-image.png";

export const metadata: Metadata = {
  title: "Open Source Nest",
  description: "",
  metadataBase: new URL("https://opensourcenest.org"),
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
