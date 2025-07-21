import SocialIcon from "../../components/SocialIcon";
import {
  TwitterIcon,
  YouTubeIcon,
  FacebookIcon,
  InstagramIcon,
  TwitchIcon,
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

export default function Footer() {
  return (
    <footer className="flex justify-center bg-base-100-t-2">
      <div className="footer-center bg-base-100 text-base-content py-1">
        <aside>
          <a
            href="#top"
            className="flex justify-center pt-1"
            aria-label="Scroll to top"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              className="bi bi-chevron-double-up hover:animate-subtle-bounce"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z"
              />
              <path
                fillRule="evenodd"
                d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
              />
            </svg>
          </a>
          <p className="text-4xl font-black tracking-tight md:leading-tight sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary inline-block">
            #StrikeFirstGaming
          </p>
          <div className="text-base-content text-md">
            StrikeFirst Gaming LLC.
            <br />
            Copyright © {new Date().getFullYear()} - All Rights Reserved.
          </div>
        </aside>
        <nav>
          <div className="flex justify-center p-3 gap-2">
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
        </nav>
      </div>
    </footer>
  );
}
