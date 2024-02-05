import Image from "next/image";

import Carousel1 from "/Users/averycarey/Documents/Programming/strikefirstgaming/public/AboutUsImages/FaOpSSdVUAEV8eE_1512x.webp";
import Carousel2 from "/Users/averycarey/Documents/Programming/strikefirstgaming/public/AboutUsImages/Carousel1.jpg";
import Carousel3 from "/Users/averycarey/Documents/Programming/strikefirstgaming/public/AboutUsImages/Carousel3.jpg";
import Carousel4 from "/Users/averycarey/Documents/Programming/strikefirstgaming/public/AboutUsImages/Carousel2.jpg";

export default function AboutUsCarousel() {
  return (
    <div>
      <div class="carousel w-full">
        <div id="slide1" class="carousel-item relative w-full">
          <Image src={Carousel1} class="object-cover border" alt="GroupPhoto1"/>
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" class="btn btn-circle bg-base-100 hover:bg-base-200">❮</a>
            <a href="#slide2" class="btn btn-circle bg-base-100 hover:bg-base-200">❯</a>
          </div>
        </div>
        <div id="slide2" class="carousel-item relative w-full">
          <Image src={Carousel2} class="object-cover border" alt="GroupPhoto2" />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" class="btn btn-circle bg-base-100 hover:bg-base-200">❮</a>
            <a href="#slide3" class="btn btn-circle bg-base-100 hover:bg-base-200">❯</a>
          </div>
        </div>
        <div id="slide3" class="carousel-item relative w-full">
          <Image src={Carousel3} class="-object-cover border" alt="GroupPhoto3" />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" class="btn btn-circle bg-base-100 hover:bg-base-200">❮</a>
            <a href="#slide4" class="btn btn-circle bg-base-100 hover:bg-base-200">❯</a>
          </div>
        </div>
        <div id="slide4" class="carousel-item relative w-full brightness-90">
          <Image src={Carousel4} class="object-cover border" alt="GroupPhoto4" />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" class="btn btn-circle bg-base-100 hover:bg-base-200">❮</a>
            <a href="#slide1" class="btn btn-circle bg-base-100 hover:bg-base-200">❯</a>
          </div>
        </div>
      </div>
    </div>
  );
}