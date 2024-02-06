import Image from "next/image";

import Monome from "public/PartnerImages/MonoMe.jpg";
import ForkingInPublic from "public/PartnerImages/ForkingInPublicA.jpg";

import TitleHeader from "../TitleHeader/page";

export default function Sponsors() {
  return (
    <div id="partners" class="bg-base-200 pt-20">
      <TitleHeader title="Partners :" />
      <section class="pt-5">
        <div class="w-full p-4 mx-auto text-center max-w-7xl bg-base-100">
          <h1 class="text-sm md:text-lg text-base-content max-w-7xl">
            &ldquo;Explore the incredible products and services offered by our
            valued sponsors in the &lsquo;`Product Sponsors&lsquo;` section.
            These partners provide exceptional support, helping us achieve new
            heights in the world of esports and competitive gaming.&ldquo;
          </h1>
        </div>
      </section>
      <div class="px-4 pb-7 p-5 mx-auto max-w-8xl bg-base-200">
        <div class="grid items-center grid-cols-1 mb-4 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24 bg-base-100 p-10 border-base-300 border">
          <div class="">
            <h2 class="text-3xl font-black tracking-tight text-center text-transparent md:leading-tight sm:text-left md:text-6xl bg-clip-text bg-gradient-to-r from-primary-content via-primary to-primary-focus">
              Mono.Me Apparel
            </h2>
            <p class="mb-4 text-base text-center text-base-content sm:text-left md:text-sm">
              Mono.Me Apparel offers a diverse range of stylish t-shirts and
              hoodies designed for men, women, and children, available in an
              extensive array of sizes. Discover comfort that complements your
              unique style – Where Comfort Meets Style, Every Time.
            </p>
            <a
              href="https://mono-me.com/"
              class="w-full btn btn-xl sm:w-auto text-white bg-primary hover:bg-primary-focus"
            >
              Learn More
            </a>
          </div>
          <div class="artboard">
            <a href="https://mono-me.com/">
              <Image
                src={Monome}
                loading="lazy"
                class="border"
                alt="MonoMeApparal"
              ></Image>
            </a>
          </div>
        </div>
        <div class="grid flex-col-reverse items-center grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24 bg-base-100 p-10 border-base-300 border">
          <div class="order-none md:order-2">
            <h2 class="text-3xl font-black tracking-tight text-center text-transparent md:leading-tight sm:text-left md:text-6xl bg-clip-text bg-gradient-to-r from-secondary-content via-secondary to-secondary-focus">
              Forking In Public
            </h2>
            <p class="mb-4 text-base text-center text-base-content sm:text-left md:text-sm">
              Forking in Public captures the essence of culinary exploration and
              eSports through the lens of talented food blogger and eSports
              photographer Jermaine Corpuz. Discover a flavorful journey as he
              skillfully captures the taste of eSports through Team StrikeFirst.
            </p>
            <a
              href="https://www.instagram.com/forking_in_public/?hl=en"
              class="w-full btn btn-dark btn-xl sm:w-auto text-white bg-secondary hover:bg-secondary-focus"
            >
              Learn More
            </a>
          </div>
          <div class="artboard">
            <a href="https://www.instagram.com/forking_in_public/?hl=en">
              <Image
                src={ForkingInPublic}
                loading="lazy"
                class="border"
                alt="ForkingInPublicn"
              ></Image>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
