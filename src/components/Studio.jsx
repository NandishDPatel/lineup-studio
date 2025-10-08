import React, { forwardRef, useEffect, useRef, useState } from "react";
import { studioPhotos } from "../data/studio";
import { motion } from "motion/react";
import Flickity from "flickity";
import "flickity/css/flickity.css";
import "../index.css";

const Studio = forwardRef((props, ref) => {
  const [selectedProject, setSelectedProject] = useState(null);

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
    <>
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

        <div className="slideshow w-full overflow-hidden bg-black" ref={ref}>
          <div
            className="gallery js-flickity mx-auto text-center"
            ref={galleryRef}
          >
            {studioPhotos.map((photo) => (
              <div
                key={photo.id}
                className="gallery-cell flex-shrink-0 w-full h-[60vh] sm:h-screen flex items-center justify-center"
              >
                <img
                  src={photo.url}
                  alt="studio image"
                  loading="lazy"
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
});

export default Studio;
