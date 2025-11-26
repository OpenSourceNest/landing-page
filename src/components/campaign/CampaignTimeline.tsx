"use client";

import Image from "next/image";
import { useState } from "react";
import CampaignTimelineCard from "./CampaignTimelineCard";
import { ICampaignTimelineData } from "@/data/campaignTimeline.data";

export default function CampaignTimeline({
  date,
  description,
  topics,
  defaultToggled = false,
}: ICampaignTimelineData) {
  const [campaignDetailIsOpen, setCampaignDetailIsOpen] =
    useState(defaultToggled);

  return (
    <div className="w-full">
      <button
        className=" w-full flex items-center justify-between"
        onClick={() => setCampaignDetailIsOpen((prev) => !prev)}
      >
        <h3 className=" text-[52px] font-medium">
          <span className="text-primary">Campaign</span> Timeline {date}&apos;
        </h3>

        <div className="rounded-full">
          <Image
            src="/images/icons/white-backdrop-arrow-down.svg"
            alt="Down arrow"
            height={50}
            width={50}
            style={{
              transform: !campaignDetailIsOpen
                ? "rotateZ(180deg)"
                : "rotateZ(0)",
            }}
          />
        </div>
      </button>

      <p className="text-[18px] mt-2.5 mb-[100px] text-justify">
        {description}
      </p>

      <div className="flex flex-col gap-2.5">
        {campaignDetailIsOpen &&
          topics?.map((topic) => (
            <CampaignTimelineCard key={topic.title} {...topic} />
          ))}
      </div>
    </div>
  );
}
