"use client";

import React, { useState, useEffect } from "react";
import NavbarDefault from "../NavbarDefault/page";
import NavbarScrolled from "../NavbarScrolled/page";

export default function NavbarSwitch() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight;
      setScrolled(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrolled ? <NavbarScrolled /> : <NavbarDefault />;
}
