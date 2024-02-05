import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Team StrikeFirst - Home",
  description: "",
  icon: ["/favicon.ico"],
  apple: ["/apple-touch-icon.png"],
  shortcut: ["/apple-touch-icon.png"],
  manifest: "site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="StrikeFirstDark">
      <body className={inter.className}>{children}</body>
    </html>
  );
}