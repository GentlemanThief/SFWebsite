"use client";

import React from "react";

export default function NavbarDefault({ changeTheme }) {
  return (
    <div class="navbar bg-base-100 text-neutral-content w-full fixed z-50 backdrop-filter bg-opacity-0 pr-4">
      <div class="navbar-start">
        <a class="btn btn-ghost btn-xl normal-case font-black sm:text-4xl text-3xl text-base-content">
          <div class="text-white">StrikeFirst</div>
        </a>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal text-white font-black px-1">
          <li class="bg-base-content bg-opacity-10">
            <a href="#" class="text-sm underline">
              Home
            </a>
          </li>
          <li class="text-white">
            <a href="#about us" class="text-sm underline">
              About Us
            </a>
          </li>
          <li class="text-white">
            <a href="#news" class="text-sm underline">
              News
            </a>
          </li>
          <li class="text-white">
            <a href="#partners" class="text-sm underline">
              Partners
            </a>
          </li>
          <li class="text-white">
            <a href="#tour" class="text-sm underline">
              Tour
            </a>
          </li>
          <li class="text-white">
            <a href="#members" class="text-sm underline">
              Members
            </a>
          </li>
        </ul>
      </div>
      <div class="navbar-end">
        <div class="dropdown border">
          <label tabindex="0" class="btn btn-ghost">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                fill="currentColor"
                class="bi bi-menu-down bg-color-white"
                viewBox="0 0 16 16"
              >
                <path d="M7.646.146a.5.5 0 0 1 .708 0L10.207 2H14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h3.793L7.646.146zM1 7v3h14V7H1zm14-1V4a1 1 0 0 0-1-1h-3.793a1 1 0 0 1-.707-.293L8 1.207l-1.5 1.5A1 1 0 0 1 5.793 3H2a1 1 0 0 0-1 1v2h14zm0 5H1v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2zM2 4.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z" />
              </svg>
            </a>
          </label>
          <ul
            tabindex="0"
            class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 bg-opacity-0"
          >
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#about us">About Us</a>
            </li>
            <li>
              <a href="#news">News</a>
            </li>
            <li>
              <a href="#partners">Partners</a>
            </li>
            <li>
              <a href="#tour">Tour</a>
            </li>
            <li>
              <a href="#members">Members</a>
            </li>
          </ul>
        </div>
        <div class="dropdown border">
          <label tabindex="0">
            <a class="btn btn-ghost px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                fill="currentColor"
                class="bi bi-boombox-fill bg-color-white"
                viewBox="0 0 16 16"
              >
                <path d="M14 0a.5.5 0 0 1 .5.5V2h.5a1 1 0 0 1 1 1v2H0V3a1 1 0 0 1 1-1h12.5V.5A.5.5 0 0 1 14 0ZM2 3.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm2 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm7.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm1.5-.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0ZM9.5 3h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1ZM6 10.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-1.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm7 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm.5-1.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" />
                <path d="M0 6h16v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V6Zm2 4.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0Zm7 0a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0Z" />
              </svg>
            </a>
          </label>
          <ul
            tabindex="0"
            class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 bg-opacity-0"
          >
            <li>
              <button onClick={() => changeTheme("theme-dark")}>Dark Theme</button>
            </li>
            <li>
              <button onClick={() => changeTheme("theme-light")}>Light Theme</button>
            </li>
          </ul>
        </div>
        <div class="dropdown border">
          <label tabindex="0">
            <a class="btn btn-ghost px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                fill="currentColor"
                class="bi bi-cart-fill bg-color-white"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
            </a>
          </label>
          <ul
            tabindex="0"
            class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 bg-opacity-0"
          >
            <li>
              <button>Soon...</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
