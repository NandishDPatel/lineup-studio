import React from "react";

const Header = () => {
  const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 50,
      behavior: 'smooth'
    });
  }
};
  return (
    // if you want to fix the header to the top just add 'sticky' in classname
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

        <nav className="hidden sm:flex items-center space-x-4">
          <a
            href="#aboutSec"
            className="px-4 py-2 text-black hover:text-gray-500 font-normal transition-colors tracking-wide"
            onClick={() => scrollToSection("aboutSec")}
          >
            about us
          </a>
          <a
            href="#achieveSec"
            className="px-4 py-2 text-black hover:text-gray-500 font-normal transition-colors tracking-wide"
            onClick={() => scrollToSection("achieveSec")}
          >
            achievement
          </a>
          <a
            href="#contactSec"
            className="px-4 py-2 text-black hover:text-gray-500 font-normal transition-colors tracking-wide"
            onClick={() => scrollToSection("contactSec")}
          >
            contact us
          </a>
        </nav>

        <div className="flex items-center">
          <span className="tracking-widest">follow us : </span>
          <a
            href="https://www.instagram.com/lineupstudio.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block hover:opacity-80 transition-opacity"
            aria-label="Instagram"
          >
            <img
              src="/download.png"
              alt="Instagram"
              className="h-8 w-8 object-contain"
            />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
