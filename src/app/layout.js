import "./globals.css";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const siteTitle =
  process.env.NEXT_PUBLIC_SITE_TITLE ||
  "Team StrikeFirst - Professional eSports Fighting Game Team";
const siteDescription =
  process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
  "Team StrikeFirst is a dedicated eSports team specializing in fighting games. From local showdowns to global tournaments, we travel the world, ready to conquer the virtual arena. Join us in our quest for victory!";
const siteImage = process.env.NEXT_PUBLIC_SITE_IMAGE || "/og-image.jpg";
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.teamstrikefirst.com";

export async function generateMetadata({ params, searchParams }, parent) {
  return {
    metadataBase: new URL(siteUrl),
    title: siteTitle,
    description: siteDescription,
    keywords: [
      "eSports",
      "fighting games",
      "Team StrikeFirst",
      "professional gaming",
      "tournaments",
    ],
    openGraph: {
      title: siteTitle,
      description:
        "Join Team StrikeFirst in our quest for eSports glory in fighting games!",
      url: siteUrl,
      siteName: "Team StrikeFirst",
      images: [
        {
          url: siteImage,
          width: 1200,
          height: 630,
          alt: "Team StrikeFirst logo",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: siteImage,
      site: "@teamstrike1st",
      title: siteTitle,
      description: siteDescription,
      image: siteImage,
    },
    facebook: {
      card: siteImage,
      title: siteTitle,
      description: siteDescription,
      image: siteImage,
    },
    icons: {
      icon: ["/favicon.ico"],
      apple: ["/apple-touch-icon.png"],
      shortcut: ["/apple-touch-icon.png"],
    },
    alternates: {
      canonical: siteUrl,
    },
    manifest: "site.webmanifest",
    robots: "index, follow",
  };
}

export function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
    userScalable: false,
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="StrikeFirstDark">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
