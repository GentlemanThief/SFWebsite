"use client";

import TitleHeader from "../../components/TitleHeader";
import AboutUsCarousel from "../AboutUsCarousel/page";
import FadeIn from "../../components/FadeIn";
import SectionDescription from "../../components/SectionDescription";
import AngledSpacer from "../../components/AngledSpacer";
import SocialIcon from "../../components/SocialIcon";
import {
  TwitterIcon,
  YouTubeIcon,
  FacebookIcon,
  InstagramIcon,
  TwitchIcon,
  DiscordIcon,
  TikTokIcon,
} from "../../components/SocialIcons";

const socialLinks = [
  {
    href: "https://twitter.com/teamstrike1st?lang=en",
    icon: TwitterIcon,
    color: "primary",
    ariaLabel: "Follow us on Twitter",
  },
  {
    href: "https://www.youtube.com/@teamstrike1st/videos",
    icon: YouTubeIcon,
    color: "accent",
    ariaLabel: "Follow us on YouTube",
  },
  {
    href: "https://www.facebook.com/teamstrike1st/",
    icon: FacebookIcon,
    color: "secondary",
    ariaLabel: "Follow us on Facebook",
  },
  {
    href: "https://www.instagram.com/teamstrike1st/",
    icon: InstagramIcon,
    color: "accent",
    ariaLabel: "Follow us on Instagram",
  },
  {
    href: "https://www.twitch.tv/teamstrike1st",
    icon: TwitchIcon,
    color: "primary",
    ariaLabel: "Follow us on Twitch",
  },
];

export default function AboutUs() {
  return (
    <section className="bg-base-200">
      <AngledSpacer />
      <div id="about-us">
        <TitleHeader title="About Us :" />
        <article className="pt-4">
          <div className="grid items-center grid-cols-1 md:grid-cols-2 bg-base-100">
            <div className="order-2 md:order-1">
              <AboutUsCarousel className="order-1" />
            </div>
            <div className="order-1 w-full mx-auto md:w-3/4 md:px-0 p-3 order-2">
              <FadeIn>
                <SectionDescription>
                  Cultivating champions and fostering camaraderie, Team
                  StrikeFirst is a dedicated esports squad specializing in
                  competitive fighting games. We are a global family of gamers
                  who live, breathe, and thrive in the world of virtual combat.
                  Join us as we continue to challenge the boundaries of esports
                  and the fighting game community.
                </SectionDescription>
                <div className="text-center">
                  <h3
                    className="text-4xl sm:text-6xl md:text-2xl lg:text-4xl xl:text-5xl 
                 font-black inline-block text-transparent bg-clip-text 
                 bg-gradient-to-r from-primary via-accent to-secondary p-1"
                  >
                    #StrikeFirstGaming
                  </h3>
                </div>
                <p className="text-md text-center text-base-content flex justify-center pb-2">
                  Follow Us On Social Media:
                </p>
                <div className="flex justify-center gap-2">
                  {socialLinks.map((social, index) => (
                    <SocialIcon
                      key={index}
                      href={social.href}
                      icon={social.icon}
                      color={social.color}
                      ariaLabel={social.ariaLabel}
                    />
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
