// import HomeEventBannerLuma from "@/components/events/HomeEventBannerLuma";
import HomeEventBannerNonLuma from "@/components/events/HomeEventBannerNonLuma";
import Footer from "@/components/Footer";
import ReadyToTakeFlight from "@/components/home/ReadyToTakeFlight";
import HomeSectionOne from "@/components/home/SectionOne";
import HomeSectionThree from "@/components/home/SectionThree";
import HomeSectionTwo from "@/components/home/SectionTwo";
import WhatIsOSN from "@/components/home/WhatIsOSN";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div className="w-full">
      <NavBar />
      <HomeSectionOne />

      {/* <HomeEventBannerLuma /> */}
      <HomeEventBannerNonLuma />
      <WhatIsOSN />
      <HomeSectionTwo />
      <HomeSectionThree />
      <ReadyToTakeFlight />
      <Footer />
    </div>
  );
}
