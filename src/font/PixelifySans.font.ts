import localFont from "next/font/local";

const PixelifySans = localFont({
  src: [
    {
      path: "../../public/fonts/PixelifySans-Variable.woff2",
    },
  ],
  variable: "--font-pixel-raw",
});

export default PixelifySans;
