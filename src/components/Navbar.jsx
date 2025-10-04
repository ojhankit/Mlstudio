import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-6 backdrop-blur-lg bg-white/15 border border-white/10 rounded-2xl px-10 py-4 flex items-center justify-between max-w-5xl w-[90%] mx-auto text-sm font-light tracking-wide">
      {/* Left: Logo */}
      <div className="logo tracking-wider font-semibold text-2xl">
        ML<span className="font-extralight text-xl">Studio</span>
      </div>

      {/* Middle: Centered Links */}
      <ul className="hidden md:flex items-center justify-center gap-8">
        <li>
          <a
            href="#models"
            className="hover:bg-gray-100 transition-colors ease-in duration-300 p-3 rounded hover:text-gray-900"
          >
            Models
          </a>
        </li>
        <li>
          <a
            href="#research"
            className="hover:bg-gray-100 transition-colors ease-in duration-300 p-3 rounded hover:text-gray-900"
          >
            Research
          </a>
        </li>
        <li>
          <a
            href="#playground"
            className="hover:bg-gray-100 transition-colors ease-in duration-300 p-3 rounded hover:text-gray-900"
          >
            Playground
          </a>
        </li>
        <li>
          <a
            href="#docs"
            className="hover:bg-gray-100 transition-colors
            ease-in duration-200 p-3 rounded hover:text-gray-900"
          >
            Docs
          </a>
        </li>
      </ul>

      {/* Right: Button */}
      <div>
        <button className="px-5 py-2 bg-white text-black rounded hover:bg-gray-200 transition">
          Launch
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
