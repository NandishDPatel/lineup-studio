import { px } from "framer-motion";
import React from "react";

const Header = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        top: element.offsetTop - 50,
        behavior: "smooth",
      });
    }
  };
  return (
    <header className="bg-white p-1 top-0 z-50">
      <div className="mx-auto flex items-center justify-between px-4">
        <div className="flex-shrink-0">
          <img
            src="/icons/logo-removebg-preview.webp"
            alt="Lineup Studio Logo"
            className="h-16 object-contain rounded-md hover:cursor-pointer"
            onClick={() => scrollToSection("slider")}
            height="16px"
            width="auto"
          />
        </div>

        <nav className="hidden sm:flex items-center space-x-8">
          <button
            className="relative group text-black hover:text-gray-600 font-normal hover:cursor-pointer transition-colors tracking-wide"
            onClick={() => scrollToSection("aboutSec")}
          >
            about us
            <span
              className="absolute left-0 bottom-0 h-[1px] w-full bg-black scale-x-0 origin-left transition-transform duration-400 group-hover:scale-x-100
"
            ></span>
          </button>

          <button
            className="relative group text-black hover:text-gray-600 font-normal hover:cursor-pointer transition-colors tracking-wide"
            onClick={() => scrollToSection("achieveSec")}
          >
            achievement
            <span
              className="absolute left-0 bottom-0 h-[1px] w-full bg-black scale-x-0 origin-left transition-transform duration-400 group-hover:scale-x-100
"
            ></span>
          </button>
          <button
            className="relative group text-black hover:text-gray-600 font-normal hover:cursor-pointer transition-colors tracking-wide"
            onClick={() => scrollToSection("contactSec")}
          >
            contact us
            <span
              className="absolute left-0 bottom-0 h-[1px] w-full bg-black scale-x-0 origin-left transition-transform duration-400 group-hover:scale-x-100
"
            ></span>
          </button>
        </nav>

        <div className="relative group flex items-center">
          <span className="tracking-widest">follow us :</span>
          <a
            href="https://www.instagram.com/lineupstudio.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block opacity-100 hover:opacity-60 transition-opacity"
            aria-label="Instagram"
          >
            <img
              src="/icons/download.webp"
              alt="Instagram"
              className="h-8 w-8 object-contain"
            />
          </a>
          <span
            className="absolute left-0 bottom-0 h-[1px] w-full bg-black scale-x-0 origin-left transition-transform duration-400 group-hover:scale-x-100
"
          ></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
