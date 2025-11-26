import CampaignTimeline from "@/components/campaign/CampaignTimeline";
import ReadyToTakeFlight from "@/components/home/SectionFour";
import { campaignTimelineData } from "@/data/campaignTimeline.data";

export default function Home() {
  return (
    <>
      <section className="section pt-[70px] mb-24">
        <div className="constraint w-full">
          {campaignTimelineData.map((campaign, index) => (
            <CampaignTimeline
              key={campaign.date}
              {...campaign}
              defaultToggled={index === 0}
            />
          ))}
        </div>
      </section>

      <ReadyToTakeFlight />
    </>
  );
}
