"use client";

import React, { useState, useEffect } from "react";
import IconEmoji from "./IconEmoji";

export default function NavbarSwitch() {
  const [scrolled, setScrolled] = useState(false);
  const [currentTheme, setCurrentTheme] = useState("theme-dark");
  const [activeSection, setActiveSection] = useState("home");

  const themes = {
    "theme-dark": "StrikeFirstDark",
    "theme-light": "StrikeFirstLight",
  };

  const navItems = [
  { name: "Home", href: "#hero", icon: "🏡" },
  { name: "About Us", href: "#about-us", icon: "🧑‍🤝‍🧑" },
  { name: "News", href: "#news", icon: "📅" },
  { name: "Partners", href: "#partners", icon: "🤝🏻" },
  { name: "Tour", href: "#tour", icon: "✈️" },
  { name: "Members", href: "#members", icon: "⭐" },
];

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight;
      setScrolled(window.scrollY > scrollThreshold);

      // Update active section based on scroll position
      const sections = navItems.map((item) => item.href.substring(1));
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
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

  const smoothScroll = (href) => {
    if (window.location.pathname === "/") {
      const element = document.querySelector(href);
      if (element) {
        const scrollOffset = 100; // Consistent with activeSection logic
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - scrollOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    } else {
      window.location.href = `/${href}`;
    }
  };

  return (
    <nav
      className={`navbar w-full fixed z-50 transition-all duration-500 ease-in-out ${
        scrolled
          ? "bg-base-100/95 backdrop-blur-xl border-b border-primary/20 shadow-xl"
          : "bg-gradient-to-r from-transparent via-black/10 to-transparent backdrop-blur-sm"
      }`}
    >
      {/* Animated background glow */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          scrolled ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 animate-pulse"></div>
      </div>

      <div className="navbar-start relative z-10">
        <a
          href="/"
          className={`btn btn-ghost btn-xl normal-case font-black text-3xl sm:text-4xl transition-all duration-300 hover:scale-105 ${
            scrolled ? "" : "text-white hover:text-primary drop-shadow-lg"
          }`}
        >
          <span className="relative">
            <span className="relative inline-block">
                <span className={`text-3xl sm:text-4xl font-black tracking-tight ${scrolled ? 'text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary' : 'text-white'} inline-block`}>
                  StrikeFirst
                </span>
                <span className="absolute left-1/2 -bottom-1.5 w-3/4 h-0.5 -translate-x-1/2 bg-white rounded-full" />
              </span>
          </span>
        </a>
      </div>

      <div className="navbar-center hidden lg:flex justify-center relative z-10">
        <ul className="menu menu-horizontal font-bold space-x-2">
          {navItems.map((item, idx) => {
            const isActive = activeSection === item.href.substring(1);
            // Hover color mapping per user request
            const hoverColor = (() => {
              switch (item.name) {
                case "Home":
                case "News":
                case "Tour":
                  return "primary";
                case "About Us":
                case "Partners":
                case "Members":
                  return "secondary";
                default:
                  return "primary";
              }
            })();
            return (
              <li key={item.name} className="relative">
                <button
                  onClick={() => smoothScroll(item.href)}
                  className={`relative px-4 py-2 rounded-lg transition-all duration-300 group
  ${
    scrolled
      ? isActive
        ? `bg-${hoverColor}/10 text-${hoverColor} shadow-sm`
        : `hover:bg-${hoverColor}/10 hover:text-${hoverColor}`
      : isActive
        ? "bg-white/10 text-white shadow-sm backdrop-blur-sm"
        : "hover:bg-white/10 hover:text-white text-white/90 hover:bg-secondary/10 hover:text-secondary"
  }
`}
                >
                  <span className="flex items-center space-x-2">
                    <span
                      className={`transition-all duration-300 text-lg md:text-lg ${scrolled ? "" : ""}`}
                    >
                      <IconEmoji>{item.icon}</IconEmoji>
                    </span>
                    <span className="text-sm font-medium">{item.name}</span>
                  </span>

                  {/* Animated underline */}
                  <div
                    className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 transition-all duration-300 ${
                      isActive
                        ? scrolled
                          ? "w-full bg-accent"
                          : "w-full bg-white"
                        : scrolled
                          ? "w-0 group-hover:w-full bg-accent"
                          : "w-0 group-hover:w-full bg-white"
                    }`}
                  ></div>

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/0 via-primary/5 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="navbar-end relative z-10 space-x-2">
        {/* Mobile Menu Dropdown */}
        <div className="dropdown lg:hidden">
          <label
            tabIndex="0"
            className={`btn btn-ghost btn-circle transition-all duration-300 hover:scale-110 ${
              scrolled ? "hover:bg-primary/10" : "hover:bg-white/10"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className={`transition-colors duration-300 ${
                scrolled ? "text-base-content hover:text-primary" : "text-white"
              }`}
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className={`menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow-2xl rounded-2xl w-56 border border-primary/10 dropdown-end ${
              scrolled
                ? "bg-base-100/95 backdrop-blur-xl"
                : "bg-base-100/20 backdrop-blur-md border-white/10"
            }`}
          >
            {navItems.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => smoothScroll(item.href)}
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-primary/10 transition-colors duration-300"
                >
                  <span className="transition-all duration-300 text-lg md:text-lg">
                    <IconEmoji>{item.icon}</IconEmoji>
                  </span>
                  <span>{item.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Theme Dropdown */}
        <div className="dropdown dropdown-end">
          <label
            tabIndex="0"
            className={`btn btn-ghost btn-circle transition-all duration-300 hover:scale-110 group ${
              scrolled ? "hover:bg-accent/10" : "hover:bg-white/10"
            }`}
          >
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className={`transition-all duration-300 group-hover:rotate-180 ${
                  scrolled
                    ? "text-base-content hover:text-accent"
                    : "text-white"
                }`}
                viewBox="0 0 16 16"
              >
                <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
              </svg>
            </div>
          </label>
          <ul
            tabIndex="0"
            className={`menu menu-sm dropdown-content mt-3 z-[1] p-3 rounded-2xl w-48 ${
              scrolled
                ? "shadow-2xl bg-base-100/95 backdrop-blur-xl border border-accent/10"
                : "shadow-xl bg-base-100/20 backdrop-blur-md border border-white/10"
            }`}
          >
            <li>
              <button
                onClick={() => changeTheme("theme-dark")}
                className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 ${
                  currentTheme === "theme-dark"
                    ? "bg-accent/20 text-accent"
                    : "hover:bg-accent/10"
                }`}
              >
                <span>🌙</span>
                <span>Dark Theme</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => changeTheme("theme-light")}
                className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 ${
                  currentTheme === "theme-light"
                    ? "bg-accent/20 text-accent"
                    : "hover:bg-accent/10"
                }`}
              >
                <span>☀️</span>
                <span>Light Theme</span>
              </button>
            </li>
          </ul>
        </div>

        {/* Cart Dropdown */}
        <div className="dropdown dropdown-end">
          <label
            tabIndex="0"
            className={`btn btn-ghost btn-circle transition-all duration-300 hover:scale-110 relative group ${
              scrolled ? "hover:bg-secondary/10" : "hover:bg-white/10"
            }`}
          >
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className={`transition-colors duration-300 ${
                  scrolled
                    ? "text-base-content hover:text-secondary"
                    : "text-white"
                }`}
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
              {/* Notification badge */}
              <div className="absolute -top-2 -right-2 w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                <span className="text-xs text-secondary-content font-bold">
                  0
                </span>
              </div>
            </div>
          </label>
          <ul
            tabIndex="0"
            className={`menu menu-sm dropdown-content mt-3 z-[1] p-4 rounded-2xl w-64 ${
              scrolled
                ? "shadow-2xl bg-base-100/95 backdrop-blur-xl border border-secondary/10"
                : "shadow-xl bg-base-100/20 backdrop-blur-md border border-white/10"
            }`}
          >
            <li>
              <div className="flex flex-col items-center space-y-3 p-4">
                <div className="text-4xl">🛒</div>
                <p className="text-center text-sm opacity-70">
                  Store coming soon...
                </p>
                <div className="w-full h-1 bg-secondary/20 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-secondary to-accent w-3/4 rounded-full animate-pulse"></div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
