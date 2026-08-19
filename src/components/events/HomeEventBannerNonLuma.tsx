import Image from "next/image";
import Link from "next/link";

const HomeEventBannerNonLuma = () => {
  const bannerImage = "/images/Projects/sprint26/sprint26-banner.png";
  const regularImage = "/images/Projects/sprint26/sprint26.png";
  const bannerBackgroundColor = "white";
  const bannerTitle = "Sprint26";

  return (
    <section
      className={`section py-4 flex flex-col items-center mt-[10px]`}
      style={{ backgroundColor: bannerBackgroundColor }}
    >
      <p className="absolute bg-red-500 -mt-[80px] text-[25px] px-4 py-2 font-semibold rounded">
        Coming Up!
      </p>

      <Link
        href={"/sprint26"}
        title={bannerTitle}
        // target="_blank"
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
