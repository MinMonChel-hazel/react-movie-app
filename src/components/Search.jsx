import React from "react";
import { BiSearch } from "react-icons/bi";

export default function Search() {
  return (
    <div className="relative bg-[#edeaea]">
      <input
        type="text"
        placeholder="Search for a movie..."
        className="w-full px-10 py-3 italic focus:outline-none"
      />
      <BiSearch className="absolute left-4 top-3.5 text-gray-500 w-5 h-5" />
    </div>
  );
}
