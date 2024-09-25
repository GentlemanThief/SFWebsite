import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const siteTitle = "Team StrikeFirst - Professional eSports Fighting Game Team";
const siteDescription = "Team StrikeFirst is a dedicated eSports team specializing in fighting games. From local showdowns to global tournaments, we travel the world, ready to conquer the virtual arena. Join us in our quest for victory!";
const siteImage = "/og-image.jpg";

export const metadata = {
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
    description: "Join Team StrikeFirst in our quest for eSports glory in fighting games!",
    images: [
      {
        url: siteImage,
        width: 1200,
        height: 630,
        alt: "Team StrikeFirst logo",
      },
    ],
    site_name: "Team StrikeFirst",
  },
  twitter: {
    card: "summary_large_image",
    site: "@teamstrike1st",
    title: siteTitle,
    description: siteDescription,
    image: siteImage,
  },
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/apple-touch-icon.png"],
    shortcut: ["/apple-touch-icon.png"],
  },
  manifest: "site.webmanifest",
  viewport: "width=device-width, initial-scale=1, user-scalable=no",
  robots: "index, follow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="StrikeFirstDark">
      <head>
        <link
          rel="preload"
          href={inter.src}
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
