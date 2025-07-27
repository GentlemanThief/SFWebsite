"use client";
import { partnersData } from "./partnersData";
import PartnerCard from "../../components/PartnerCard";
import TitleWithDescription from "../../components/TitleWithDescription";
import AngledSpacer from "../../components/AngledSpacer";

export default function Sponsors() {
  return (
    <div id="partners" className="bg-base-200 pt-5">
      <AngledSpacer />
      <TitleWithDescription 
        title="Partners" 
        description="Explore the incredible products and services offered by our valued sponsors in the 'Product Sponsors' section. These partners provide exceptional support, helping us achieve new heights in the world of esports and competitive gaming."
      />
      <div className="px-4 pb-7 pt-6 mx-auto max-w-8xl bg-base-200">
        <div className="grid grid-cols-1 gap-5">
          {partnersData.map((partner, index) => (
            <PartnerCard key={index} partner={partner} />
          ))}
        </div>
      </div>
    </div>
  );
}
