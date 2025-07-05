import Image from "next/image";
import FadeIn from "./FadeIn";

export default function MemberCard({ member }) {
  const { name, realName, image, description, gradient } = member;
  
  // Default gradient if none provided in member data
  const nameGradient = gradient || "text-transparent bg-clip-text bg-gradient-to-r from-secondary-content via-secondary to-secondary-focus";

  return (
    <div className="member-card-hover" style={{ boxShadow: 'none' }}>
      <div className="relative overflow-hidden">
        <Image
          src={image}
          className="object-cover w-full h-50 border"
          alt={name}
          loading="lazy"
          width={400}
          height={300}
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-black">
          <a className={`flex justify-center ${nameGradient}`}>
            {name}
          </a>
        </h2>
        {realName && (
          <h3 className="font-bold leading-snug">
            <a className={`text-xs flex justify-center ${nameGradient}`}>
              {realName}
            </a>
          </h3>
        )}
        <FadeIn>
          <p className="text-sm text-center font-normal text-base-content py-2">
            {description}
          </p>
        </FadeIn>
      </div>
    </div>
  );
}
