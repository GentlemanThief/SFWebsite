"use client";

import Image from "next/image";
import { useState } from "react";

export default function AboutUsCarousel() {
  // Slide data structure extracted from the existing carousel
  const slides = [
    {
      id: 0,
      src: "/AboutUsImages/FaOpSSdVUAEV8eE_1512x.webp",
      alt: "GroupPhoto1"
    },
    {
      id: 1,
      src: "/AboutUsImages/Carousel1.jpg",
      alt: "GroupPhoto2"
    },
    {
      id: 2,
      src: "/AboutUsImages/Carousel2.jpg",
      alt: "GroupPhoto3"
    },
    {
      id: 3,
      src: "/AboutUsImages/Carousel3.jpg",
      alt: "GroupPhoto4",
      className: "brightness-90"
    }
  ];

  // State management for current active slide
  const [currentSlide, setCurrentSlide] = useState(0);

  // Core navigation functions
  const goToNext = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const goToPrevious = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  const goToSlide = (slideIndex) => {
    if (slideIndex >= 0 && slideIndex < slides.length) {
      setCurrentSlide(slideIndex);
    }
  };

  return (
    <div>
      <div className="w-full h-[700px] relative overflow-hidden">
        <div 
          className="flex transition-transform duration-300 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={slide.id} className={`min-w-full flex-shrink-0 relative ${slide.className || ''}`}>
              <Image
                src={slide.src}
                fill
                className="object-cover block align-bottom"
                alt={slide.alt}
              />
            </div>
          ))}
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <button
            onClick={goToPrevious}
            className="btn btn-square bg-base-100 hover:bg-base-200 shadow-lg border-2 border-base-300"
          >
            ❮
          </button>
          <button
            onClick={goToNext}
            className="btn btn-square bg-base-100 hover:bg-base-200 shadow-lg border-2 border-base-300"
          >
            ❯
          </button>
        </div>
      </div>
    </div>
  );
}
