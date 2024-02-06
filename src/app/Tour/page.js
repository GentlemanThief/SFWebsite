import TitleHeader from "../TitleHeader/page";

import Image from "next/image";
import Tour1 from "public/TourImages/Tour1.png";
import Tour2 from "public/TourImages/Tour2.png";
import Tour3 from "public/TourImages/Tour3.png";
import Tour4 from "public/TourImages/Tour4.png";
import Tour5 from "public/TourImages/Tour5.png";

export default function StageSelect() {
  return (
    <div id="tour" class="bg-base-200 pt-20">
      <TitleHeader title="Tour :" />
      <section class="pt-5">
        <div class="w-full p-4 mx-auto text-center max-w-7xl bg-base-100">
          <h1 class="text-sm md:text-lg text-base-content max-w-7xl">
            &ldquo;Embark on a journey with Team StrikeFirst in our
            &lsquo;Tour&lsquo; section as we travel the globe to compete in
            thrilling fighting game tournaments. Follow our adventures, relive
            the electrifying moments, and witness the dedication and skill that
            make us true contenders in the esports arena.&ldquo;
          </h1>
        </div>
      </section>
      <div class="max-w-screen-7xl p-4 mx-auto bg-base-200 text-base-content">
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 md:gap-0 lg:grid-rows-2">
          <div class="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 md:col-span-2 lg:row-span-2 lg:h-full">
            <div class="absolute top-0 bottom-0 left-0 right-0 bg-base-100 border">
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
            <div class="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
              <a
                rel="noopener noreferrer"
                href="https://www.youtube.com/watch?v=EK7ObS6yxQc"
                class="px-3 py-2 text-5xl font-black group-hover:underline text-white"
              >
                EVO 2023
              </a>
              <div class="flex flex-col justify-start text-center">
                <span class="text-4xl font-black text-white group-hover:underline">
                  Las Vegas,
                </span>
                <span class="text-xl text-white group-hover:underline">
                  Nevada
                </span>
              </div>
            </div>
            <h2 class="z-10 p-6">
              <a
                rel="noopener noreferrer"
                href="https://www.youtube.com/watch?v=EK7ObS6yxQc"
                class="btn text-sm text-white bg-primary p-3 group-hover:underline"
              >
                Watch Now
              </a>
            </h2>
          </div>
          <div class="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 group dark:bg-gray-500 border">
            <div class="absolute top-0 bottom-0 left-0 right-0 bg-base-100">
              {" "}
              <Image
                src={Tour2}
                class="object-cover w-full h-full"
                alt="Tour2"
                loading="lazy"
              ></Image>
            </div>
            <div class="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
              <a
                rel="noopener noreferrer"
                href="#"
                class="py-2 text-sm font-black hover:underline text-white group-hover:underline"
              >
                CEO 2023
              </a>
              <div class="flex flex-col justify-start text-center text-base-content group-hover:underline">
                <span class="text-sm font-black text-white">
                  Daytona Beach,
                </span>
                <span class="text-sm text-white">Florida</span>
              </div>
            </div>
            <h2 class="z-10 p-5">
              <a
                rel="noopener noreferrer"
                href="#"
                class="btn font-medium text-md group-hover:underline bg-accent text-white"
              >
                Watch Now
              </a>
            </h2>
          </div>
          <div class="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 group dark:bg-gray-500 border">
            <div class="absolute top-0 bottom-0 left-0 right-0 bg-base-100">
              {" "}
              <Image
                src={Tour3}
                class="object-cover w-full h-full"
                alt="Tour3"
                loading="lazy"
              ></Image>
            </div>
            <div class="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
              <a
                rel="noopener noreferrer"
                href="#"
                class="py-2 text-sm font-black hover:underline text-white group-hover:underline"
              >
                CB 2023
              </a>
              <div class="flex flex-col justify-start text-center text-white group-hover:underline">
                <span class="text-sm font-black text-white">Schaumburg,</span>
                <span class="text-sm text-white">Illinois</span>
              </div>
            </div>
            <h2 class="z-10 p-5">
              <a
                rel="noopener noreferrer"
                href="#"
                class="btn font-medium text-md group-hover:underline bg-secondary text-white"
              >
                Watch Now
              </a>
            </h2>
          </div>
          <div class="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 group dark:bg-gray-500 border">
            <div class="absolute top-0 bottom-0 left-0 right-0 bg-base-100">
              {" "}
              <Image
                src={Tour4}
                class="object-cover w-full h-full"
                alt="Tour4"
                loading="lazy"
              ></Image>
            </div>
            <div class="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
              <a
                rel="noopener noreferrer"
                href="#"
                class="py-2 text-sm font-black hover:underline text-white group-hover:underline"
              >
                DTN 2022
              </a>
              <div class="flex flex-col justify-start text-center text-white group-hover:underline">
                <span class="text-sm font-black text-white">Brooklyn,</span>
                <span class="text-sm text-white">New York</span>
              </div>
            </div>
            <h2 class="z-10 p-5">
              <a
                rel="noopener noreferrer"
                href="#"
                class="btn font-medium text-md group-hover:underline bg-accent text-white"
              >
                Watch Now
              </a>
            </h2>
          </div>
          <div class="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 group dark:bg-gray-500 border">
            <div class="absolute top-0 bottom-0 left-0 right-0 bg-base-100">
              {" "}
              <Image
                src={Tour5}
                class="object-cover w-full h-full"
                alt="Tour5"
                loading="lazy"
              ></Image>
            </div>
            <div class="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
              <a
                rel="noopener noreferrer"
                href="#"
                class="py-2 text-sm font-black hover:underline text-white group-hover:underline"
              >
                EVO Japan 2022
              </a>
              <div class="flex flex-col justify-start text-center text-white group-hover:underline">
                <span class="text-sm font-black text-white">Tokyo,</span>
                <span class="text-sm text-white">Japan</span>
              </div>
            </div>
            <h2 class="z-10 p-5">
              <a
                rel="noopener noreferrer"
                href="#"
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
