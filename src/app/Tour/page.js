"use client";
import tourData from "./tourData";
import TourCard from "../../components/TourCard";
import TitleWithDescription from "../../components/TitleWithDescription";
import AngledSpacer from "../../components/AngledSpacer";

export default function Tour() {
  return (
    <div id="tour" className="bg-base-200">
      <AngledSpacer />
      <TitleWithDescription 
        title="Tour" 
        description="Embark on a journey with Team StrikeFirst in our 'Tour' section as we travel the globe to compete in thrilling fighting game tournaments. Follow our adventures, relive the electrifying moments, and witness the dedication and skill that make us contenders in the esports arena."
      />
      <div className="max-w-screen-7xl p-4 mx-auto bg-base-200 text-base-content">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 md:gap-0 lg:grid-rows-2">
          {tourData.map((tour, index) => (
            <TourCard key={tour.id} tour={tour} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
