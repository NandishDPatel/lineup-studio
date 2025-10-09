import React, { forwardRef, useEffect, useRef, useState } from "react";
import { studioPhotos } from "../data/studio";
import { motion } from "motion/react";
import Flickity from "flickity";
import "flickity/css/flickity.css";
import "../index.css";

export const BlurImage = ({ img, blurredImg, alt }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative h-full w-full overflow-hidden">
      <div
        className={`absolute inset-0 bg-cover bg-center blur-lg transition-opacity duration-500 ${
          isLoaded ? "opacity-0" : "opacity-100"
        }`}
        style={{
          backgroundImage: `url(${blurredImg})`,
        }}
      ></div>

      <img
        src={img}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        onError={() => {
          console.error("Image failed to load:", img);
          setIsLoaded(true);
        }}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        loading="lazy"
      />
    </div>
  );
};

const Studio = forwardRef((props, ref) => {
  const galleryRef = useRef(null);

  useEffect(() => {
    if (galleryRef.current) {
      const flkty = new Flickity(galleryRef.current, {
        wrapAround: true,
        autoPlay: 3000,
        prevNextButtons: true,
        pageDots: false,
        cellAlign: "left",
        contain: true,
        adaptiveHeight: true,
      });

      return () => flkty.destroy();
    }
  }, []);

  return (
    <div className="container max-w-full lg:px-32 sm:px-12 px-5 bg-gray-200 py-5">
      <div className="p-1 sm:p-3">
        <motion.h2
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 2 }}
          className="text-center border-b-2 m-auto max-w-full text-2xl font-bold"
        >
          Our Studio
        </motion.h2>
      </div>

      <div className="slideshow w-full overflow-hidden px-2 sm:px-5" ref={ref}>
        <div
          className="gallery js-flickity mx-auto text-center "
          ref={galleryRef}
        >
          {studioPhotos.map((photo) => (
            <div
              key={photo.id}
              className="gallery-cell flex-shrink-0 w-full h-[60vh] sm:h-screen flex items-center justify-center"
            >
              <BlurImage
                img={photo.url}
                blurredImg={photo.blurred}
                alt="Studio Image"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default Studio;