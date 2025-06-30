import Image from "next/image";
import FadeIn from "../../components/FadeIn";

export default function PartnerCard({ partner }) {
  const {
    name,
    description,
    href,
    image,
    alt,
    buttonText,
    buttonClass,
    titleClass,
    order,
  } = partner;

  return (
    <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-8 md:gap-x-16 bg-base-100 p-0 border-base-300 border p-8">
      <div className={`${order === 2 ? "md:order-2" : ""} p-8 md:p-10 flex flex-col justify-center h-full`}>
        <h2 className={titleClass}>{name}</h2>
        <FadeIn>
          <p className="mb-6 text-base text-center text-base-content sm:text-left md:text-base">
            {description}
          </p>
        </FadeIn>
        <a href={href} className={buttonClass}>
          {buttonText}
        </a>
      </div>
      <div className="relative w-full h-full md:h-[450px] flex items-center justify-center">
        <a href={href} aria-label={`Visit ${name} website`} className="w-full h-full relative">
          <Image 
            src={image} 
            fill 
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
            loading="lazy" 
            className="object-cover border" 
            alt={alt} 
          />
        </a>
      </div>
    </div>
  );
}
