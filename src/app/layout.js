import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Team StrikeFirst - Home",
  description: 
    "We‘re a dedicated eSports team specializing in fighting games. From local showdowns to global tournaments, we travel the world, ready to conquer the virtual arena. Join us in the quest for victory!",
  icon: ["/favicon.ico"],
  apple: ["/apple-touch-icon.png"],
  shortcut: ["/apple-touch-icon.png"],
  manifest: "site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="StrikeFirstDark">
      <meta name="viewport" content="width=device-width, user-scalable=no"></meta>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
