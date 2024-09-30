import Image from "next/image";
import Monome from "public/PartnerImages/MonoMe.jpg";
import ForkingInPublic from "public/PartnerImages/ForkingInPublicA.jpg";
import TitleHeader from "../TitleHeader/page";
import dynamic from "next/dynamic";

const FadeIn = dynamic(() => import("../FadeIn/page"), { ssr: false });

export default function Sponsors() {
  return (
    <div id="partners" className="bg-base-200 pt-20">
      <TitleHeader title="Partners :" />
      <section className="pt-5">
        <div className="w-full p-4 mx-auto text-center max-w-7xl bg-base-100">
          <FadeIn>
            <h1 className="text-sm md:text-lg text-base-content max-w-7xl">
              &ldquo;Explore the incredible products and services offered by our
              valued sponsors in the &lsquo;Product Sponsors&lsquo; section.
              These partners provide exceptional support, helping us achieve new
              heights in the world of esports and competitive gaming.&rdquo;
            </h1>
          </FadeIn>
        </div>
      </section>
      <div className="px-4 pb-7 p-5 mx-auto max-w-8xl bg-base-200">
        <div className="grid items-center grid-cols-1 mb-4 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24 bg-base-100 p-10 border-base-300 border">
          <div>
            <h2 className="text-3xl font-black tracking-tight text-center text-transparent md:leading-tight sm:text-left md:text-6xl bg-clip-text bg-gradient-to-r from-primary-content via-primary to-primary-focus">
              Mono.Me Apparel
            </h2>
            <FadeIn>
              <p className="mb-4 text-base text-center text-base-content sm:text-left md:text-sm">
                Mono.Me Apparel offers a diverse range of stylish t-shirts and
                hoodies designed for men, women, and children, available in an
                extensive array of sizes. Discover comfort that complements your
                unique style – Where Comfort Meets Style, Every Time.
              </p>
            </FadeIn>
            <a
              href="https://mono-me.com/"
              className="w-full btn btn-xl sm:w-auto text-white bg-primary hover:bg-primary-focus"
            >
              Learn More
            </a>
          </div>
          <div className="artboard">
            <a
              href="https://mono-me.com/"
              aria-label="Visit Mono.Me Apparel website"
            >
              <Image
                src={Monome}
                loading="lazy"
                className="border"
                alt="Mono.Me Apparel product showcase"
              />
            </a>
          </div>
        </div>
        <div className="grid flex-col-reverse items-center grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24 bg-base-100 p-10 border-base-300 border">
          <div className="order-none md:order-2">
            <h2 className="text-3xl font-black tracking-tight text-center text-transparent md:leading-tight sm:text-left md:text-6xl bg-clip-text bg-gradient-to-r from-secondary-content via-secondary to-secondary-focus">
              Forking In Public
            </h2>
            <FadeIn>
              <p className="mb-4 text-base text-center text-base-content sm:text-left md:text-sm">
                Forking in Public captures the essence of culinary exploration
                and eSports through the lens of talented food blogger and
                eSports photographer Jermaine Corpuz. Discover a flavorful
                journey as he skillfully captures the taste of eSports through
                Team StrikeFirst.
              </p>
            </FadeIn>
            <a
              href="https://www.instagram.com/forking_in_public/?hl=en"
              className="w-full btn btn-dark btn-xl sm:w-auto text-white bg-secondary hover:bg-secondary-focus"
            >
              Learn More
            </a>
          </div>
          <div className="artboard">
            <a
              href="https://www.instagram.com/forking_in_public/?hl=en"
              aria-label="Visit Forking In Public Instagram"
            >
              <Image
                src={ForkingInPublic}
                loading="lazy"
                className="border"
                alt="Forking In Public food and eSports photography"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
