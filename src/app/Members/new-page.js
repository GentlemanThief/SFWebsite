import TitleWithDescription from "../../components/TitleWithDescription";
import MemberCard from "../../components/MemberCard";
import { membersData } from "./membersData";
import dynamic from "next/dynamic";
const FadeIn = dynamic(() => import("../../components/FadeIn"), { ssr: false });

export default function Members() {
  return (
    <div id="members" className="bg-base-200 pt-20">
      <TitleWithDescription 
        title="Members :" 
        description="Meet the individuals who form the core of Team StrikeFirst in our 'Members' section. Each member brings their unique talents, passion, and gaming expertise to our diverse family. Discover the faces behind our success and get to know the driving force of our competitive spirit."
      />
      <section className="bg-base-200 px-4 pb-6 mx-auto max-w-8xl">
        <div className="p-2"></div>
        <div className="w-full">
          <div className="grid gap-5 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {membersData.map((member, index) => (
              <MemberCard key={index} member={member} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
