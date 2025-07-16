import type { Metadata } from "next";
import "./globals.css";
import ClashDisplayFont from "@/font/ClashDisplay.font";

export const metadata: Metadata = {
  title: "Open Source Nest",
  description: "",
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
