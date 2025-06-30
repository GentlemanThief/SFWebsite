"use client";

import React from "react";
import dynamic from "next/dynamic";

import "./globals.css";

const NavbarSwitch = dynamic(() => import("./NavbarSwitcher/page"), { ssr: false });
const Hero = dynamic(() => import("./Hero/page"));
const AboutUs = dynamic(() => import("./AboutUs/page"));
const News = dynamic(() => import("./News/page"));
const Partners = dynamic(() => import("./Partners/page"));
const Tour = dynamic(() => import("./Tour/page"));
const Members = dynamic(() => import("./Members/page"));
const Footer = dynamic(() => import("./Footer/page"));

export default function Home() {
  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only">Skip to main content</a>
      <NavbarSwitch />
      <main id="main-content">
        <Hero />
        <AboutUs />
        <News />
        <Partners />
        <Tour />
        <Members />
      </main>
      <Footer />
    </>
  );
}
