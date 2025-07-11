import Image from "next/image";

const TourCard = ({ tour }) => {
  const { eventName, location, imageUrl, videoUrl, layout, buttonColor } = tour;

  const isLarge = layout === "large";

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
        isLarge ? "md:col-span-2 lg:row-span-2 lg:h-full" : ""
      }`}
    >
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-base-100 overflow-hidden">
        <a href={videoUrl} target="_blank" rel="noopener noreferrer">
          <Image
            src={imageUrl}
            fill
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
          className={`py-2 font-black text-white group-hover:underline ${isLarge ? "text-5xl" : "text-sm"}`}
        >
          {eventName}
        </a>
        <div className="flex flex-col justify-start text-center text-white group-hover:underline">
          <span className={`font-black ${isLarge ? "text-4xl" : "text-sm"}`}>
            {location.split(",")[0]},
          </span>
          <span className={`text-white ${isLarge ? "text-xl" : "text-sm"}`}>
            {location.split(",")[1]}
          </span>
        </div>
      </div>
      <h2 className="z-10 p-5">
        <a
          rel="noopener noreferrer"
          href={videoUrl}
          target="_blank"
          className={`btn font-medium text-md group-hover:underline ${buttonColor || "bg-primary"} text-white transition-colors ${getHoverClass()}`}
        >
          Watch Now
        </a>
      </h2>
    </div>
  );
};

export default TourCard;