import React from "react";

export default function Hero() {
  return (
    <div class="hero min-h-screen">
      <div class="hero-overlay">
        <div class="absolute top-0 left-0 w-full h-full overflow-hidden brightness-75">
          <video
            class="min-w-full min-h-full absolute object-cover playsinline"
            src="StrikeFirstHero.webm"
            type="video/webm"
            autoPlay
            muted
            loop
            playsInline
          ></video>
        </div>
      </div>
      <div class="hero-content text-center text-white">
        <div class="max-w-md">
          <h1 class="text-7xl md:text-9xl font-black text-white flex justify-center">
            StrikeFirst
          </h1>
          <a class="text-white text-xs md:text-sm">
            We&lsquo;re a dedicated eSports team specializing in fighting games.
            From local showdowns to global tournaments, we travel the world,
            ready to conquer the virtual arena. Join us in the quest for
            victory!
          </a>
          <div class="flex justify-center absolute inset-x-0 bottom-0 h-16">
            <a href="#about us">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                height="58"
                width="58"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
