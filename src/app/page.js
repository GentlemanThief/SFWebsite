import NavbarSwitch from "./NavbarSwitcher/page";
import Footer from "./Footer/page";
import Partners from "./Partners/page";
import Tour from "./Tour/page";
import Hero from "./Hero/page";
import News from "./News/page";
import Members from "./Members/page";
import AboutUs2 from "./AboutUs/page";
import "./globals.css";
import React from "react";


export default function Home() {
  return (
    <>
      <NavbarSwitch />
      <Hero />
      <AboutUs2 />
      <News />
      <Partners />
      <Tour />
      <Members />
      <Footer />
    </>
  );
}
