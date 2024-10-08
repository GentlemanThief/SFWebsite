import TitleHeader from "../TitleHeader/page";

import Image from "next/image";
import Tour1 from "public/TourImages/Tour1.png";
import Tour2 from "public/TourImages/Tour2.png";
import Tour3 from "public/TourImages/Tour3.png";
import Tour4 from "public/TourImages/Tour4.png";
import Tour5 from "public/TourImages/Tour5.png";
import FadeIn from "../FadeIn/page";

export default function StageSelect() {
  return (
    <div id="tour" className="bg-base-200 pt-20">
      <TitleHeader title="Tour :" />
      <section className="pt-5">
        <div className="w-full p-4 mx-auto text-center max-w-7xl bg-base-100">
          <FadeIn>
            <h1 className="text-sm md:text-lg text-base-content max-w-7xl">
              &ldquo;Embark on a journey with Team StrikeFirst in our
              &lsquo;Tour&rsquo; section as we travel the globe to compete in
              thrilling fighting game tournaments. Follow our adventures, relive
              the electrifying moments, and witness the dedication and skill that
              make us true contenders in the esports arena.&rdquo;
            </h1>
          </FadeIn>
        </div>
      </section>
      <div className="max-w-screen-7xl p-4 mx-auto bg-base-200 text-base-content">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 md:gap-0 lg:grid-rows-2">
          <div className="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 md:col-span-2 lg:row-span-2 lg:h-full">
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-base-100 border">
              <a href="https://www.youtube.com/watch?v=EK7ObS6yxQc">
                {" "}
                <Image
                  src={Tour1}
                  
                  class="object-cover w-full h-full"
                  alt="Tour1"
                  loading="lazy"
                ></Image>
              </a>
            </div>
            <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
              <a
                rel="noopener noreferrer"
                href="https://www.youtube.com/watch?v=EK7ObS6yxQc"
                class="px-3 py-2 text-5xl font-black group-hover:underline text-white"
              >
                EVO 2023
              </a>
              <div className="flex flex-col justify-start text-center">
                <span className="text-4xl font-black text-white group-hover:underline">
                  Las Vegas,
                </span>
                <span className="text-xl text-white group-hover:underline">
                  Nevada
                </span>
              </div>
            </div>
            <h2 className="z-10 p-6">
              <a
                rel="noopener noreferrer"
                href="https://www.youtube.com/watch?v=EK7ObS6yxQc"
                class="btn text-sm text-white bg-primary p-3 group-hover:underline"
              >
                Watch Now
              </a>
            </h2>
          </div>
          <div className="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 group dark:bg-gray-500 border">
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-base-100">
              <a href="https://www.youtube.com/watch?v=g8xG9ZQJbEY">
                {" "}
                <Image
                  src={Tour2}
                  class="object-cover w-full h-full"
                  alt="Tour2"
                  loading="lazy"
                ></Image>
              </a>
            </div>
            <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
              <a
                rel="noopener noreferrer"
                href="https://www.youtube.com/watch?v=g8xG9ZQJbEY"
                class="py-2 text-sm font-black hover:underline text-white group-hover:underline"
              >
                CEO 2023
              </a>
              <div className="flex flex-col justify-start text-center text-base-content group-hover:underline">
                <span className="text-sm font-black text-white">
                  Daytona Beach,
                </span>
                <span className="text-sm text-white">Florida</span>
              </div>
            </div>
            <h2 className="z-10 p-5">
              <a
                rel="noopener noreferrer"
                href="https://www.youtube.com/watch?v=g8xG9ZQJbEY"
                class="btn font-medium text-md group-hover:underline bg-accent text-white"
              >
                Watch Now
              </a>
            </h2>
          </div>
          <div className="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 group dark:bg-gray-500 border">
            <a href="https://www.youtube.com/watch?v=KvPqSTNXvHc">
              <div className="absolute top-0 bottom-0 left-0 right-0 bg-base-100">
                {" "}
                <Image
                  src={Tour3}
                  class="object-cover w-full h-full"
                  alt="Tour3"
                  loading="lazy"
                ></Image>
              </div>
            </a>
            <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
              <a
                rel="noopener noreferrer"
                href="https://www.youtube.com/watch?v=KvPqSTNXvHc"
                class="py-2 text-sm font-black hover:underline text-white group-hover:underline"
              >
                CB 2023
              </a>
              <div className="flex flex-col justify-start text-center text-white group-hover:underline">
                <span className="text-sm font-black text-white">Schaumburg,</span>
                <span className="text-sm text-white">Illinois</span>
              </div>
            </div>
            <h2 className="z-10 p-5">
              <a
                rel="noopener noreferrer"
                href="https://www.youtube.com/watch?v=KvPqSTNXvHc"
                class="btn font-medium text-md group-hover:underline bg-secondary text-white"
              >
                Watch Now
              </a>
            </h2>
          </div>
          <div className="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 group dark:bg-gray-500 border">
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-base-100">
              <a href="https://www.youtube.com/watch?v=On3fawmAHEc">
                {" "}
                <Image
                  src={Tour4}
                  class="object-cover w-full h-full"
                  alt="Tour4"
                  loading="lazy"
                ></Image>
              </a>
            </div>
            <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
              <a
                rel="noopener noreferrer"
                href="https://www.youtube.com/watch?v=On3fawmAHEc"
                class="py-2 text-sm font-black hover:underline text-white group-hover:underline"
              >
                DTN 2022
              </a>
              <div className="flex flex-col justify-start text-center text-white group-hover:underline">
                <span className="text-sm font-black text-white">Brooklyn,</span>
                <span className="text-sm text-white">New York</span>
              </div>
            </div>
            <h2 className="z-10 p-5">
              <a
                rel="noopener noreferrer"
                href="https://www.youtube.com/watch?v=On3fawmAHEc"
                class="btn font-medium text-md group-hover:underline bg-accent text-white"
              >
                Watch Now
              </a>
            </h2>
          </div>
          <div className="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 group dark:bg-gray-500 border">
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-base-100">
              <a href="https://www.youtube.com/watch?v=Qw2F8GroJlA">
                {" "}
                <Image
                  src={Tour5}
                  class="object-cover w-full h-full"
                  alt="Tour5"
                  loading="lazy"
                ></Image>
              </a>
            </div>
            <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
              <a
                rel="noopener noreferrer"
                href="https://www.youtube.com/watch?v=Qw2F8GroJlA"
                class="py-2 text-sm font-black hover:underline text-white group-hover:underline"
              >
                EVO Japan 2020
              </a>
              <div className="flex flex-col justify-start text-center text-white group-hover:underline">
                <span className="text-sm font-black text-white">Tokyo,</span>
                <span className="text-sm text-white">Japan</span>
              </div>
            </div>
            <h2 className="z-10 p-5">
              <a
                rel="noopener noreferrer"
                href="https://www.youtube.com/watch?v=Qw2F8GroJlA"
                class="btn btn-md font-medium text-md group-hover:underline bg-secondary text-white"
              >
                Watch Now
              </a>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
