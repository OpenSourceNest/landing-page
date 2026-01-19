import Image from "next/image";
import Link from "next/link";

const HomeEventBannerNonLuma = () => {
  const bannerImage = "/images/Projects/takeoff-2026/takeoff-2026-banner.png";
  const regularImage = "/images/Projects/takeoff-2026/takeoff-2026.png";
  const bannerBackgroundColor = "#4C301B";
  const bannerTitle = "Takeoff 2026";

  return (
    <section
      className={`section py-4`}
      style={{ backgroundColor: bannerBackgroundColor }}
    >
      <Link
        href={"https://takeoff.opensourcenest.org"}
        title={bannerTitle}
        target="_blank"
        className=""
      >
        <Image
          alt={bannerTitle}
          src={bannerImage}
          className="w-full h-auto max-w-[1300px] rounded-[12px] mx-auto max-[650px]:hidden"
          width={1920}
          height={504}
        />

        <Image
          alt={bannerTitle}
          src={regularImage}
          className="w-full h-auto rounded-[12px] mx-auto min-[650px]:hidden"
          width={1920}
          height={504}
        />
      </Link>
    </section>
  );
};

export default HomeEventBannerNonLuma;
