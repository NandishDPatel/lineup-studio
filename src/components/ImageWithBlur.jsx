import React from "react";
import { useState } from "react";

const ImageWithBlur = ({ img, blurredImg, alt }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative h-64 w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-center blur-lg transition-transform duration-300 ease-in-out"
        style={{
          backgroundImage: `url(${blurredImg})`,
        }}
        decoding="async"
      >
        {/* <picture>
          <img src={blurredImg} alt="blurred image" fetchPriority="high" srcset="" />
        </picture> */}
      </div>

      <img
        src={img}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        onError={() => {
          console.error("Image failed to load:", img);
          setIsLoaded(true);
        }}
        className={`absolute h-full w-full object-cover hover:scale-110 duration-300 transition-transform ease-in-out will-change-transform ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        loading="lazy"
        // decoding="async"
      />
    </div>
  );
};

export default ImageWithBlur;
