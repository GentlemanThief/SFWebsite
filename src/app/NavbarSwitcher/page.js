"use client";

import React, { useState, useEffect } from "react";
import NavbarDefault from "../NavbarDefault/page";
import NavbarScrolled from "../NavbarScrolled/page";

export default function NavbarSwitch() {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const scrollThreshold = window.innerHeight;

    if (scrollY > scrollThreshold) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <div>{scrolled ? <NavbarScrolled /> : <NavbarDefault />}</div>;
}
