import React, { useState } from "react";

const BlurImage = ({ imgArr, blurredImg, alt, priority = false }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  if (!imgArr || !Array.isArray(imgArr) || imgArr.length < 3) {
    return (
      <div className="relative h-full w-full overflow-hidden bg-gray-200 animate-pulse">
        Loading project images..
      </div>
    );
  }

  return (
    <div className="relative h-full w-full overflow-hidden">
      <div
        className={`absolute inset-0 bg-cover bg-center blur-lg transition-opacity border border-2 border-black ${
          isLoaded ? "opacity-0" : "opacity-100"
        }`}
        style={{
          backgroundImage: `url(${blurredImg})`,
        }}
      ></div>

      <picture>
        <img
          src={imgArr[0]}
          srcSet={`${imgArr[0]} 1600w, ${imgArr[1]} 960w, ${imgArr[2]} 480w, ${imgArr[3]} 220w`}
          sizes="(min-width: 1024px) 1600px, (min-width: 640px) 960px, 480px, 220px"
          role="presentation"
          alt={alt}
          onLoad={() => setIsLoaded(true)}
          onError={() => {
            console.error("Image failed to load:", imgArr[0]);
            setIsLoaded(true);
          }}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity border border-2 border-black ${
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
