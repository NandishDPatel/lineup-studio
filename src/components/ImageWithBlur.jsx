import React from "react";
import { useState } from "react";

const ImageWithBlur = ({ img, blurredImg, alt }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative h-64 w-full overflow-hidden">
      {/* Blurred background always visible */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-center blur-lg transition-transform duration-300 ease-in-out"
        style={{
          backgroundImage: `url(${blurredImg})`,
          opacity: isLoaded ? 0 : 1,
        }}
      ></div>

      {/* Real image: only visible after loading */}
      <img
        src={img}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        onError={() => {
          console.error("Image failed to load:", img);
          setIsLoaded(true); // fallback
        }}
        className={`absolute h-full w-full object-cover hover:scale-110 duration-300 transition-transform ease-in-out will-change-transform ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        loading="lazy"
      />
    </div>
  );
};

export default ImageWithBlur;