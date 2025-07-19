import Link from "next/link";

const HomeSectionFour = () => {
  return (
    <section className="py-[81px] px-[70px]">
      <div
        className="bg-primary3 py-[80px] px-[32px] flex flex-col
      items-center justify-center text-center"
      >
        <h3 className="font-semibold text-[40px]">
          Ready to Take Flight with <span className="text-black">OSN?</span>
        </h3>

        <p className="mt-4 mb-8 text-black text-base font-medium max-w-[511px]">
          Join Africa&rsquo;s most vibrant open source community and start
          making an impact today.
        </p>

        <div className="flex items-center gap-2.5 flex-wrap">
          <button
            className="text-sm font-medium py-4 px-10 rounded-full bg-black
          border border-black"
          >
            JOIN OUT COMMUNITY
          </button>

          <Link
            href=""
            className="text-sm font-medium py-4 px-10 rounded-full border border-white"
          >
            FOLLOW ON X
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeSectionFour;
