import { ICampaignTimelineDataTopic } from "@/data/campaignTimeline.data";
import Divider from "../ui/Divider";

export default function CampaignTimelineCard({
  title,
  date,
  featuring,
  description,
  isActive,
}: ICampaignTimelineDataTopic) {
  const color = isActive ? "white" : "rgba(255, 255, 255, 0.5)";

  return (
    <div
      className="grid grid-cols-[1fr_3px_1fr] gap-4 w-full p-[50px] bg-[#151515] font-medium rounded-[12px]
      sticky top-[90px] border-[7px] border-[black] max-[800px]:p-[30px] max-[700px]:grid-cols-1
      "
      style={{ color }}
    >
      <div
        className="min-w-1/2 flex flex-col gap-0.5 text-base
      max-[800px]:min-w-full"
      >
        <p className="text-[32px] mb-10 max-[800px]:text-[24px]">{title}</p>
        <p>{date}</p>
        <p> {featuring}</p>
      </div>

      <Divider color={color} />

      <p className="py-1 text-lg/[28px]">{description}</p>
    </div>
  );
}
