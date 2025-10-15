import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-6 z-50 backdrop-blur-lg bg-white/15 border border-white/10 rounded-2xl px-6 py-4 flex items-center justify-between max-w-5xl w-[90%] mx-auto text-sm font-light tracking-wide">
      {/* Left: Logo */}
      <div className="logo tracking-wider font-semibold text-2xl">
        ML<span className="font-extralight text-xl">Studio</span>
      </div>

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
      </ul>

      <div className="hidden md:block">
        {/* <button className="px-5 py-2 bg-white text-black rounded hover:bg-gray-200 transition">
          Launch
        </button> */}
        <button className="group relative px-6 py-2 rounded-full overflow-hidden bg-gradient-to-r from-white to-gray-200 text-black font-medium flex items-center gap-2 shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] transition-all duration-300">
          <span className="relative z-10">Join</span>
          <FaArrowRight className="relative z-10 text-black group-hover:translate-x-1 transition-transform duration-300" />

          {/* subtle moving gradient overlay */}
          <span className="absolute inset-0 bg-gradient-to-r from-gray-300 via-white to-gray-300 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300"></span>
        </button>
      </div>

      <div className="md:hidden flex items-center">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white text-2xl focus:outline-none"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Dropdown Menu (mobile) */}
      {menuOpen && (
        <div className="absolute top-full mt-3 left-0 right-0 bg-black/80 border border-white/10 rounded-2xl py-4 flex flex-col items-center space-y-3 text-white text-sm backdrop-blur-lg md:hidden">
          <a href="#models" className="hover:text-gray-300 transition">Models</a>
          <a href="#research" className="hover:text-gray-300 transition">Research</a>
          <a href="#playground" className="hover:text-gray-300 transition">Playground</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
