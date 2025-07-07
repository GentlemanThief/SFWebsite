import Image from "next/image";

export default function AboutUsCarousel() {
  return (
    <div>
      <div className="carousel w-full h-[750px]">
        <div id="slide1" className="carousel-item relative w-full">
          <Image
            src="/AboutUsImages/FaOpSSdVUAEV8eE_1512x.webp"
            fill
            className="object-cover"
            alt="GroupPhoto1"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide1"
              className="btn btn-circle bg-base-100 hover:bg-base-200"
            >
              ❮
            </a>
            <a
              href="#slide2"
              className="btn btn-circle bg-base-100 hover:bg-base-200"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <Image
            src="/AboutUsImages/Carousel1.jpg"
            fill
            className="object-cover"
            alt="GroupPhoto2"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide1"
              className="btn btn-circle bg-base-100 hover:bg-base-200"
            >
              ❮
            </a>
            <a
              href="#slide3"
              className="btn btn-circle bg-base-100 hover:bg-base-200"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <Image
            src="/AboutUsImages/Carousel2.jpg"
            fill
            className="object-cover"
            alt="GroupPhoto3"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide2"
              className="btn btn-circle bg-base-100 hover:bg-base-200"
            >
              ❮
            </a>
            <a
              href="#slide4"
              className="btn btn-circle bg-base-100 hover:bg-base-200"
            >
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide4"
          className="carousel-item relative w-full brightness-90"
        >
          <Image
            src="/AboutUsImages/Carousel3.jpg"
            fill
            className="object-cover"
            alt="GroupPhoto4"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide3"
              className="btn btn-circle bg-base-100 hover:bg-base-200"
            >
              ❮
            </a>
            <a
              href="#slide1"
              className="btn btn-circle bg-base-100 hover:bg-base-200"
            >
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
