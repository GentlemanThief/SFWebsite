"use client";

import React, { useState, useEffect } from "react";

export default function Hero() {
  const [videoName, setVideoName] = useState("Strikefirsthero1"); // Default fallback

  useEffect(() => {
    // Only run random selection on client side after hydration
    const availableVideos = [1, 2, 3];
    const randomIndex = Math.floor(Math.random() * availableVideos.length);
    const videoNumber = availableVideos[randomIndex];
    setVideoName(`Strikefirsthero${videoNumber}`);
  }, []);

  return (
    <div id="hero" className="hero min-h-screen">
      <div className="hero-overlay">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden brightness-75">
          <video
            key={videoName}
            className="min-w-full min-h-full absolute object-cover"
            autoPlay
            muted
            loop
            playsInline
            aria-label="Background video"
            poster="/Strikefirsthero-poster.png"
          >
            <source src={`/${videoName}.webm`} type="video/webm" />
            <source src={`/${videoName}.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="hero-content text-center text-white">
        <div className="max-w-md">
          <h1 className="xs:text-6xl sm:text-7xl md:text-9xl text-6xl font-black text-white flex justify-center">
            StrikeFirst
          </h1>
          <p className="text-white text-xs sm:text-base">
            We&lsquo;re a dedicated eSports team specializing in fighting games.
            From local showdowns to global tournaments, we travel the world,
            ready to conquer the virtual arena.
          </p>
          <div className="flex justify-center absolute inset-x-0 bottom-0 h-16">
            <a href="#about-us">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                height="58"
                width="58"
                className="hover:animate-subtle-bounce"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
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
