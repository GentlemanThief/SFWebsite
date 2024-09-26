import Image from "next/image";

import Carousel1 from "public/AboutUsImages/FaOpSSdVUAEV8eE_1512x.webp";
import Carousel2 from "public/AboutUsImages/Carousel1.jpg";
import Carousel3 from "public/AboutUsImages/Carousel2.jpg";
import Carousel4 from "public/AboutUsImages/Carousel3.jpg";

export default function AboutUsCarousel() {
  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <Image src={Carousel1} className="object-cover border" alt="GroupPhoto1"/>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle bg-base-100 hover:bg-base-200">❮</a>
            <a href="#slide2" className="btn btn-circle bg-base-100 hover:bg-base-200">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <Image src={Carousel2} className="object-cover border" alt="GroupPhoto2" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle bg-base-100 hover:bg-base-200">❮</a>
            <a href="#slide3" className="btn btn-circle bg-base-100 hover:bg-base-200">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <Image src={Carousel3} className="object-cover border" alt="GroupPhoto3" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle bg-base-100 hover:bg-base-200">❮</a>
            <a href="#slide4" className="btn btn-circle bg-base-100 hover:bg-base-200">❯</a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full brightness-90">
          <Image src={Carousel4} className="object-cover border" alt="GroupPhoto4" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle bg-base-100 hover:bg-base-200">❮</a>
            <a href="#slide1" className="btn btn-circle bg-base-100 hover:bg-base-200">❯</a>
          </div>
        </div>
      </div>
    </div>
  );
}
