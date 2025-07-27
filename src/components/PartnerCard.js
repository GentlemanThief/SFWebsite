import Image from "next/image";

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
    <div className="flex flex-col-reverse md:grid md:items-center md:grid-cols-2 gap-y-1 gap-x-8 md:gap-x-16 bg-base-100">
      <div
        className={`${order === 2 ? "md:order-2" : ""} px-6 py-8 md:p-10 flex flex-col justify-center h-full`}
      >
        <h2 className={titleClass}>{name}</h2>
          <p className="mb-6 text-xs sm:text-base text-center text-base-content sm:text-left px-2 sm:px-0">
            {description}
          </p>
        <div className="flex justify-center sm:justify-start">
          <a href={href} className={buttonClass}>
            {buttonText}
          </a>
        </div>
      </div>
      <div className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center">
        <a
          href={href}
          aria-label={`Visit ${name} website`}
          className="w-full h-full relative group overflow-hidden"
        >
          <Image
            src={image}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
            className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            alt={alt}
          />
        </a>
      </div>
    </div>
  );
}