import Image from "next/image";
import News1 from "public/NewsImages/News3.png";
import News2 from "public/NewsImages/News1.png";
import News3 from "public/NewsImages/News2.png";
import TitleHeader from "../TitleHeader/page";
import FadeIn from "../FadeIn/page";


export default function News() {
  return (
    <div id="news" className="bg-base-200 pt-20">
      <TitleHeader title="News :" />
      <section className="pt-5">
        <div className="w-full p-4 mx-auto text-center max-w-7xl bg-base-100">
          <FadeIn>
            <h1 className="text-sm md:text-lg text-base-content max-w-7xl">
              &ldquo;Stay updated with the latest in esports and fighting game
              tournaments through Team StrikeFirst&lsquo;s &lsquo;News&lsquo;
              section. Explore game highlights, tournament results, and
              exclusive insights into our journey, all in one place.&ldquo;
            </h1>
          </FadeIn>
        </div>
      </section>
      <section className="bg-base-200">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 bg-base-200 p-4 mx-auto max-w-8xl">
          <div className="p-2 bg-base-100 border">
            <a href="https://www.youtube.com/watch?v=zumPZvp1Hdk&t">
              <Image
                src={News1}
                className="object-cover w-full h-56 mb-1 bg-center border"
                alt="News1"
                loading="lazy"
              ></Image>
            </a>
            <h2 className="text-md font-black text-center">
              <a
                href="https://www.youtube.com/watch?v=zumPZvp1Hdk&t"
                className="text-primary underline"
              >
                Justin Wong TV FT. DR.B - &ldquo;Beat A Boss Challenge&ldquo;
              </a>
            </h2>
            <FadeIn>
              <p className="text-sm font-normal text-base-content">
                Check out this video showcasing our team member Galaxy B as they
                take on the exhilarating &ldquo;Beat A Boss Challenge&ldquo;
                alongside the legendary Justin Wong at EVO 2023! Don&lsquo;t miss
                out on the action – watch the video now!
              </p>
            </FadeIn>
          </div>
          <div className="p-2 bg-base-100 border">
            <a href="https://www.youtube.com/watch?v=J7-SwpBReEg&t">
              <Image
                src={News2}
                className="object-cover w-full h-56 mb-1 bg-center border"
                alt="News2"
                loading="lazy"
              />
            </a>
            <h2 className="text-md font-black text-center">
              <a
                href="https://www.youtube.com/watch?v=J7-SwpBReEg&t"
                className="text-accent underline"
              >
                Evo Japan 2023 interview FT. Dr.B
              </a>
            </h2>
            <FadeIn>
              <p className="text-sm font-normal text-base-content">
                Check out this interview as Galaxy B recounts the thrilling
                journey, offering a glimpse into the challenges faced, victories
                achieved, and the overall excitement of their time at EVO Japan.
              </p>
            </FadeIn>
          </div>
          <div className="p-2 bg-base-100 border">
            <a href="https://www.youtube.com/watch?v=hAjRZM6yGMQ">
              <Image
                src={News3}
                className="object-cover w-full h-56 mb-1 bg-center border"
                alt="News3"
                loading="lazy"
              />
            </a>
            <h2 className="text-md font-black text-center">
              <a
                href="https://www.youtube.com/watch?v=hAjRZM6yGMQ"
                className="text-secondary underline"
              >
                StrikeFirst On Button Check Pt. 2 FT. Cookye
              </a>
            </h2>
            <FadeIn>
              <p className="text-sm font-normal text-base-content">
                Our very own Cookye Fu Sung has been featured on button check.
                Delve into the narrative of Cookye&lsquo;s passion and prowess on
                display at this prestigious event – press play now for an
                exclusive peek into her adventure!
              </p>
            </FadeIn>
          </div>
        </div>
      </section>
      <div className="flex justify-center">
        <FadeIn>
          <button
            type="button"
            className="px-6 py-4 text-sm rounded-sm hover:underline bg-base-100 text-base-content"
          >
            Load more posts...
          </button>
        </FadeIn>
      </div>
    </div>
  );
}
