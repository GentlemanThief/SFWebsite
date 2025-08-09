import Image from "next/image";

const TourCard = ({ tour, index }) => {
  const { eventName, location, imageUrl, videoUrl } = tour;

  // Make the first card large
  const isLarge = index === 0;

  // Button colors in specific order: Primary, Secondary, Accent, Accent, Secondary
  const buttonColors = [
    "bg-primary",
    "bg-secondary",
    "bg-accent",
    "bg-accent",
    "bg-secondary",
  ];
  const buttonColor = buttonColors[index % buttonColors.length];

  // Define hover classes based on button color
  const getHoverClass = () => {
    if (buttonColor === "bg-primary") return "group-hover:bg-primary-focus";
    if (buttonColor === "bg-accent") return "group-hover:bg-accent-focus";
    if (buttonColor === "bg-secondary") return "group-hover:bg-secondary-focus";
    return "group-hover:bg-primary-focus";
  };

  return (
    <div
      className={`relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 group border border-2 border-base-100 dark:bg-gray-500 ${
        isLarge ? "md:col-span-2 md:h-full lg:row-span-2 lg:h-full" : ""
      }`}
    >
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-base-100 overflow-hidden">
        <a
          href={videoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative block w-full h-full"
        >
          <Image
            src={imageUrl}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
            alt={eventName}
            loading="lazy"
          />
        </a>
      </div>
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
        <a
          rel="noopener noreferrer"
          href={videoUrl}
          target="_blank"
          className={`py-2 font-black text-white group-hover:underline ${isLarge ? "text-lg md:text-3xl lg:text-5xl" : "text-md"}`}
        >
          {eventName}
        </a>
        <div className="flex flex-col justify-start text-center text-white group-hover:underline">
          <span className={`font-black ${isLarge ? "text-base md:text-2xl lg:text-4xl" : "text-md"}`}>
            {location.split(",")[0]},
          </span>
          <span className={`text-white ${isLarge ? "text-sm md:text-lg lg:text-xl" : "text-md"}`}>
            {location.split(",")[1]}
          </span>
        </div>
      </div>
      <h2 className="z-10 p-5">
        <a
          rel="noopener noreferrer"
          href={videoUrl}
          target="_blank"
          className={`btn font-medium text-md group-hover:underline ${buttonColor} text-white transition-colors ${getHoverClass()}`}
        >
          Watch Now
        </a>
      </h2>
    </div>
  );
};

export default TourCard;
