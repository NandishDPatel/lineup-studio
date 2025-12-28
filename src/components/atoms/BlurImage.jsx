import React, { useState } from "react";

const BlurImage = ({ img, blurredImg, alt, priority = false }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative h-full w-full overflow-hidden">
      <div
        className={`absolute inset-0 bg-cover bg-center blur-lg transition-opacity duration-500 border border-2 border-black ${
          isLoaded ? "opacity-0" : "opacity-100"
        }`}
        style={{
          backgroundImage: `url(${blurredImg})`,
        }}
      ></div>

      <picture>
        <img
          src={img}
          role="presentation"
          alt={alt}
          onLoad={() => setIsLoaded(true)}
          onError={() => {
            console.error("Image failed to load:", img);
            setIsLoaded(true);
          }}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 border border-2 border-black ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          fetchPriority={priority ? "high" : "low"}
          loading={priority ? "eager" : "lazy"}
        />
      </picture>
    </div>
  );
};

export default BlurImage;
