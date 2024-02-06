import Image from "next/image";
import TitleHeader from "../TitleHeader/page";

import CobraTron from "strikefirstgaming/public/MemberImages/CobraTronA.jpg";
import DRB from "strikefirstgaming/public/MemberImages/DRBA.jpg";
import GentlemanThief from "strikefirstgaming/public/MemberImages/GentlemanThiefA.jpg";
import Cookye from "strikefirstgaming/public/MemberImages/CookyeA.jpg";
import Tek from "strikefirstgaming/public/MemberImages/TekA.jpg";
import CobraKaiTone from "strikefirstgaming/public/MemberImages/CobraKaiToneA.jpg";
import AdamYuki from "strikefirstgaming/public/MemberImages/AdamYukiA.jpg";
import CrazyDrunk from "strikefirstgaming/public/MemberImages/CrazyDrunkA.jpg";

export default function Members() {
  return (
    <div id="members" class="bg-base-200 pt-20">
      <TitleHeader title="Members :" />
      <section class="pt-5">
        <div class="w-full p-4 mx-auto text-center max-w-7xl bg-base-100">
          <h1 class="text-sm md:text-lg text-base-content max-w-7xl">
            &ldquo;Meet the individuals who form the core of Team StrikeFirst in
            our &lsquo;Members&lsquo; section. Each member brings their unique
            talents, passion, and gaming expertise to our diverse family.
            Discover the faces behind our success and get to know the driving
            force of our competitive spirit.&ldquo;
          </h1>
        </div>
      </section>
      <section class="bg-base-200 px-4 pb-6 mx-auto max-w-8xl">
        <div class="p-2"></div>
        <div class="w-full">
          <div class="grid gap-5 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div class="bg-base-100">
              <Image
                src={CobraKaiTone}
                class="object-cover w-full h-50 border"
                alt="Cobra Kai Tone"
                loading="lazy"
              ></Image>
              <div class="">
                <h2 class="text-xl font-black">
                  <a class="text-primary px-4 flex justify-center text-transparent bg-clip-text bg-gradient-to-r from-primary-content via-primary to-primary-focus">
                    Cobra Kai Tone
                  </a>
                </h2>
                <h3 class="font-bold leading-snug">
                  <a class="text-xs px-4 flex justify-center text-transparent bg-clip-text bg-gradient-to-r from-primary-content via-primary to-primary-focus">
                    Anthony Velonza
                  </a>
                </h3>
                <p class="text-xs text-center font-normal text-base-content px-3 py-1">
                  Cobra Kai Tone, visionary founder and CEO of Team StrikeFirst,
                  has devoted himself to building a team that excels not only in
                  the realm of eSports but also serves as a genuine embodiment
                  of the fighting game community. He firmly believes these
                  communities are not solely defined by titles and accolades but
                  also by nurturing a sense of camaraderie through a shared
                  passion for gaming. What truly sets him apart is his steadfast
                  dedication to a greater mission in gaming—an ethos that
                  reaches far beyond the mere pursuit of victory.
                </p>
              </div>
            </div>
            <div class="bg-base-100">
              <Image
                src={AdamYuki}
                class="object-cover w-full h-50 border"
                alt="AdamYuki"
                loading="lazy"
              ></Image>
              <div class="col-span-1 md:col-span-3">
                <h2 class="text-xl font-black">
                  <a class="px-4 flex justify-center text-transparent bg-clip-text bg-gradient-to-r from-accent-content via-accent to-accent-focus">
                    AdamYUKI
                  </a>
                </h2>
                <h3 class="font-bold leading-snug">
                  <a class="text-xs px-4 flex justify-center text-transparent bg-clip-text bg-gradient-to-r from-accent-content via-accent to-accent-focus">
                    Adnan Rana
                  </a>
                </h3>
                <p class="text-xs text-center font-normal text-base-content px-3 py-1">
                  AdamYuki, the embodiment of suavity and intellectual prowess,
                  brings a touch of sophistication to the world of competitive
                  gaming. His refined demeanor and striking appearance are
                  matched only by his razor-sharp skills in the game. With a
                  charming exterior that conceals a ruthless competitive spirit,
                  AdamYuki is a formidable force in the virtual arena. As an
                  integral part of the American VF community, he has not only
                  competed at the highest levels but has also played a pivotal
                  and guiding role in organizing world renowned VF events.
                </p>
              </div>
            </div>
            <div class="bg-base-100">
              <Image
                src={CobraTron}
                class="object-cover w-full h-50 border"
                alt="CobraTron"
                loading="lazy"
              ></Image>
              <div class="col-span-1 md:col-span-3">
                <h2 class=" text-xl font-black">
                  <a class="px-4 flex justify-center text-transparent bg-clip-text bg-gradient-to-r from-secondary-content via-secondary to-secondary-focus">
                    CobraTron
                  </a>
                </h2>
                <h3 class="font-bold leading-snug">
                  <a class="text-xs px-4 flex justify-center text-transparent bg-clip-text bg-gradient-to-r from-secondary-content via-secondary to-secondary-focus">
                    Ramon Velonza
                  </a>
                </h3>
                <p class="text-xs text-center font-normal text-base-content px-3 py-1">
                  Cobratron, a calm, cool, and collected individual both in and
                  out of the gaming arena, embodies a personality marked by
                  composure and an appreciation for the world of gaming. His
                  early immersion in video games cultivated a deep appreciation
                  for their profound impact on the human experience, relishing
                  in the limitless array of choices that gaming provides.
                  Cobratron is an innovator, often seen with his signature
                  leverless controller, making him a trailblazer among the first
                  to succeed with this pioneering input method.
                </p>
              </div>
            </div>
            <div class="bg-base-100">
              <Image
                src={Cookye}
                class="object-cover w-full h-50 border"
                alt="Cookye Fu Sung"
                loading="lazy"
              ></Image>
              <div class="col-span-1 md:col-span-3">
                <h2 class="text-xl font-black">
                  <a class="px-4 flex justify-center text-transparent bg-clip-text bg-gradient-to-r from-primary-content via-primary to-primary-focus">
                    Cookye Fu Sung
                  </a>
                </h2>
                <h3 class="font-bold leading-snug">
                  <a class="text-xs px-4 flex justify-center text-transparent bg-clip-text bg-gradient-to-r from-primary-content via-primary to-primary-focus">
                    Elizabeth Saxton
                  </a>
                </h3>
                <p class="text-xs text-center font-normal text-base-content px-3 py-1">
                  Cookye, an authoritative figure in the world of retro gaming,
                  possesses a distinctive and spiritual connection to gaming
                  that goes beyond the mere act of playing. With a diverse
                  background that includes studies in China, Cookye seamlessly
                  integrates her passion for gaming into her work in the
                  performing arts. As the CEO of &lsquo;Goddesses Media,&lsquo;
                  she leverages her expertise in choreography to create
                  captivating performances that blend dance, martial arts, and
                  acrobatics, inspired by iconic characters in both anime and
                  gaming.
                </p>
              </div>
            </div>
            <div class="bg-base-100">
              <Image
                src={CrazyDrunk}
                class="object-cover w-full h-50 border"
                alt="CrazyDrunk"
                loading="lazy"
              ></Image>
              <div class="col-span-1 md:col-span-3">
                <h2 class="text-xl font-black">
                  <a class="px-4 flex justify-center text-transparent bg-clip-text bg-gradient-to-r from-accent-content via-accent to-accent-focus">
                    CrazyDrunk
                  </a>
                </h2>
                <h3 class="font-bold leading-snug">
                  <a class="text-xs px-4 flex justify-center text-transparent bg-clip-text bg-gradient-to-r from-accent-content via-accent to-accent-focus">
                    Orvenn Lozada
                  </a>
                </h3>
                <p class="text-xs text-center font-normal text-base-content px-3 py-1">
                  CrazyDrunk, known for his silent demeanor and expressive
                  playing style, is a force to be reckoned with in the world of
                  competitive gaming. While he may not be the loudest voice in
                  the room, his gameplay speaks volumes. With an introverted
                  personality that belies his fierce skills, CrazyDrunk has
                  become a respected figure in the Virtua Fighter community. As
                  a proud member of Team StrikeFirst, he continues to make his
                  mark on the global stage, showing that true talent transcends
                  words.
                </p>
              </div>
            </div>
            <div class="bg-base-100">
              <Image
                src={DRB}
                class="object-cover w-full h-50 border"
                alt="Dr. B (Galaxy B)"
                loading="lazy"
              ></Image>
              <div class="col-span-1 md:col-span-3">
                <h2 class=" text-xl font-black">
                  <a class="text-secondary px-4 flex justify-center text-transparent bg-clip-text bg-gradient-to-r from-secondary-content via-secondary to-secondary-focus">
                    Dr. B (Galaxy B)
                  </a>
                </h2>
                <h3 class="font-bold leading-snug">
                  <a class="text-xs px-4 flex justify-center text-transparent bg-clip-text bg-gradient-to-r from-secondary-content via-secondary to-secondary-focus">
                    Brandon Chaney
                  </a>
                </h3>
                <p class="text-xs text-center font-normal text-base-content px-3 py-1">
                  Dr. B, also known as Galaxy B, is celebrated for his creative
                  and distinctive gameplay style, which mirrors the artistic
                  innovation he brings to the music industry. A revered figure
                  in the Capcom vs. SNK 2 community, Dr. B consistently injects
                  excitement into every arena he enters. Furthermore, within
                  StrikeFirst, he stands as a creative powerhouse, utilizing his
                  multifaceted talents beyond gaming to craft engaging social
                  media content, seamlessly blending his passion for music,
                  gaming, and creation into a captivating presence.
                </p>
              </div>
            </div>
            <div class="bg-base-100">
              <Image
                src={GentlemanThief}
                class="object-cover w-full h-50 border"
                alt="GentlemanThief"
                loading="lazy"
              ></Image>
              <div class="col-span-1 md:col-span-3">
                <h2 class="text-xl font-black">
                  <a class="px-4 flex justify-center text-transparent bg-clip-text bg-gradient-to-r from-primary-content via-primary to-primary-focus">
                    GentlemanThief
                  </a>
                </h2>
                <h3 class="font-bold leading-snug">
                  <a class="text-xs px-4 flex justify-center text-transparent bg-clip-text bg-gradient-to-r from-primary-content via-primary to-primary-focus">
                    Avery Carey
                  </a>
                </h3>
                <p class="text-xs text-center font-normal text-base-content px-3 py-1">
                  GentlemanThief, a top-tier player across multiple fighting
                  games, exemplifies a gameplay that reflects and hinges upon an
                  underlying philosophy about fighting games. While initially
                  making a name for himself in the Virtua Fighter series,
                  GentlemanThief has extended his skill and reach to all
                  fighting games within his purview . With a profound
                  understanding of the intricacies of fighting games shaping his
                  play style, GentlemanThief emerges as a formidable force in
                  any game he sets his sights on.
                </p>
              </div>
            </div>
            <div class="bg-base-100">
              <Image
                src={Tek}
                class="object-cover w-full h-50 border"
                alt="Tek S Neo"
                loading="lazy"
              ></Image>
              <div class="col-span-1 md:col-span-3">
                <h2 class="text-xl font-black">
                  <a class="px-4 flex justify-center text-transparent bg-clip-text bg-gradient-to-r from-accent-content via-accent to-accent-focus">
                    Tek S Neo
                  </a>
                </h2>
                <h3 class="font-bold leading-snug">
                  <a class="text-xs px-4 flex justify-center text-transparent bg-clip-text bg-gradient-to-r from-accent-content via-accent to-accent-focus">
                    Antar Brown
                  </a>
                </h3>
                <p class="text-xs text-center font-normal text-base-content px-3 py-1">
                  Tek, a steely-eyed veteran and widely recognized figure in the
                  fighting game community, possesses a network so expansive that
                  even a brief interaction might leave you wondering if
                  there&lsquo;s anyone beyond his reach. With his extensive
                  connections, undeniable skill, and profound understanding of
                  the fighting game landscape, Tek, as well as competing, serves
                  as Team StrikeFirst&lsquo;s coach, steadfastly dedicated to
                  elevating the team&lsquo;s skill level and is poised to propel
                  their capabilities to new heights and beyond.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
