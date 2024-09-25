"use client";

import React, { useState, useEffect } from "react";
import NavbarDefault from "../NavbarDefault/page";
import NavbarScrolled from "../NavbarScrolled/page";

export default function NavbarSwitch() {
  const [scrolled, setScrolled] = useState(false);
  const [currentTheme, setCurrentTheme] = useState("theme-dark");

  const themes = {
    "theme-dark": "StrikeFirstDark",
    "theme-light": "StrikeFirstLight",
  };

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

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", themes[currentTheme]);
  }, [currentTheme]);

  const changeTheme = (theme) => {
    setCurrentTheme(theme);
  };

  return scrolled ? <NavbarScrolled changeTheme={changeTheme} /> : <NavbarDefault changeTheme={changeTheme} />;
}
