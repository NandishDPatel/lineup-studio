import React from "react";

const Header = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
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
            src="/logo-removebg-preview.png"
            alt="Lineup Studio Logo"
            className="h-16 w-auto object-contain rounded-md hover:cursor-pointer"
            onClick={() => scrollToSection("slider")}
          />
        </div>

        <nav className="hidden sm:flex items-center space-x-8">
          <a
            className="relative group text-gray-500 hover:text-black hover:cursor-pointer font-normal transition-colors tracking-wide"
            onClick={() => scrollToSection("aboutSec")}
          >
            about us
            <span className="absolute left-0 bottom-0 h-[1px] w-full bg-black scale-x-0 origin-left transition-transform duration-400 group-hover:scale-x-100
"></span>            
          </a>

          <a  
            className="relative group text-gray-500 hover:text-black hover:cursor-pointer font-normal transition-colors tracking-wide"
            onClick={() => scrollToSection("achieveSec")}
          >
            achievement
            <span className="absolute left-0 bottom-0 h-[1px] w-full bg-black scale-x-0 origin-left transition-transform duration-400 group-hover:scale-x-100
"></span>     
          </a>
          <a
            className="relative group text-gray-500 hover:text-black hover:cursor-pointer font-normal transition-colors tracking-wide"
            onClick={() => scrollToSection("contactSec")}
          >
            contact us
            <span className="absolute left-0 bottom-0 h-[1px] w-full bg-black scale-x-0 origin-left transition-transform duration-400 group-hover:scale-x-100
"></span>     
          </a>
        </nav>

        <div className="relative group flex items-center">
          <span className="tracking-widest">follow us :   
          </span>
          <a
            href="https://www.instagram.com/lineupstudio.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block opacity-60 hover:opacity-100 transition-opacity"
            aria-label="Instagram"
          >
            <img
              src="/download.png"
              alt="Instagram"
              className="h-8 w-8 object-contain"
            />
          </a>
          <span className="absolute left-0 bottom-0 h-[1px] w-full bg-black scale-x-0 origin-left transition-transform duration-400 group-hover:scale-x-100
"></span>     
        </div>
      </div>
    </header>
  );
};

export default Header;
