import Image from "next/image";

interface IProp {
  data: {
    icon: string;
    title: string;
    subTitle: string;
  };
}

const HomeCard = ({ data }: IProp) => {
  return (
    <div
      className="flex flex-col w-full gap-3 border border-white rounded-md
    p-[50px]"
    >
      <Image src={data.icon} alt="" height={48} width={48} />
      <p className="font-semibold text-[22px]">{data.title}</p>
      <p className="font-normal text-sm opacity-60">{data.subTitle}</p>
    </div>
  );
};

export default HomeCard;
