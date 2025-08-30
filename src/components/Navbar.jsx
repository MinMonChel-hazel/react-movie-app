import React from "react";
import Popular from "../assets/fire.png";
import Latest from "../assets/partying-face.png";
import TopReated from "../assets/glowing-star.png";
import DarkMode from "./DarkMode/DarkMode";

export default function Navbar() {
  return (
    <div className="nav_bar text-[#43d0ec] px-4 py-3 flex items-center justify-between shadow-lg">
      <a href="/">
        <h1 className="text-3xl font-semibold italic text-transparent bg-clip-text bg-gradient-to-r from-[#88CCA4] to-[#3EBEC8]">
          Movies
        </h1>
      </a>

      <nav className="flex gap-6 nav_items">
        <DarkMode />
        <a href="#" className="flex items-center gap-1.5">
          <span className="text-md">Now Playing</span>
          <img src={Latest} alt="" className="w-5 h-5" />
        </a>
        <a href="#" className="flex items-center gap-1.5">
          <span className="text-md">Popular</span>
          <img src={Popular} alt="" className="w-5 h-5" />
        </a>
        <a href="#" className="flex items-center gap-1.5">
          <span className="text-md">Top Rated</span>
          <img src={TopReated} alt="" className="w-5 h-5" />
        </a>
        <a href="#" className="flex items-center gap-1.5">
          <span className="text-md">Upcoming</span>
          <img src={TopReated} alt="" className="w-5 h-5" />
        </a>
      </nav>
    </div>
  );
}
