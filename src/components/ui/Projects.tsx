import SourceSerifPro from "@/font/SourceSerifPro-Regular.font";

export const Break = () => {
  return <span className="block py-[15px]"></span>;
};

export const Quote = ({ text, center }: { text: string; center?: boolean }) => {
  return (
    <div
      className={`${SourceSerifPro.className} antialiased italic text-2xl/[32px]
        block rounded-xl p-8 bg-white text-black my-8 w-full max-[400px]:p-5 ${
          center ? "text-center" : ""
        }`}
    >
      “ {text} ”
    </div>
  );
};
