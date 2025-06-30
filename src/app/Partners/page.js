"use client";

import TitleHeader from "../../components/TitleHeader";
import FadeIn from "../../components/FadeIn";
import { partnersData } from "./partnersData";
import PartnerCard from "../PartnerCard/page";

export default function Sponsors() {
  return (
    <div id="partners" className="bg-base-200 pt-20">
      <TitleHeader title="Partners :" />
      <section className="pt-5">
        <div className="w-full p-4 mx-auto text-center max-w-7xl bg-base-100">
          <FadeIn>
            <h1 className="text-sm md:text-lg text-base-content max-w-7xl">
              &ldquo;Explore the incredible products and services offered by our
              valued sponsors in the &lsquo;Product Sponsors&lsquo; section.
              These partners provide exceptional support, helping us achieve new
              heights in the world of esports and competitive gaming.&rdquo;
            </h1>
          </FadeIn>
        </div>
      </section>
      <div className="px-3 pb-10 pt-6 mx-auto max-w-8xl bg-base-200">
        <div className="grid grid-cols-1 gap-10">
          {partnersData.map((partner, index) => (
            <PartnerCard key={index} partner={partner} />
          ))}
        </div>
      </div>
    </div>
  );
}
