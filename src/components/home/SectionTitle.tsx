import Image from "next/image";

const SectionTitle = ({ title }: { title: string }) => {
  return (
    <div
      className="flex items-center gap-2.5 py-4 px-10 rounded-full bg-primary3
    font-semibold text-[12px] w-fit mx-auto max-[500px]:px-5"
    >
      <Image src="/images/section-circle.svg" alt="" height={16} width={16} />
      <p className="font-semibold text-[12px]">{title}</p>
    </div>
  );
};

export default SectionTitle;
