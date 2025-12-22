import React, { useState, useEffect, forwardRef, lazy, Suspense } from "react";
import Flickity from "flickity";
import "flickity/css/flickity.css";
import { projects } from "../data/project.js";
import { motion } from "motion/react";
import "../App.css";
import ImageWithBlur from "./ImageWithBlur.jsx";
// import { BlurImage } from "./Studio.jsx";
const BlurImage = lazy(() => import("./atoms/BlurImage.jsx"));

const ProjectSlider = forwardRef((props, ref) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden"; // Disable background scroll
    } else {
      document.body.style.overflow = ""; // Restore scroll
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  useEffect(() => {
    const flkty = new Flickity(".gallery", {
      wrapAround: true,
      // autoPlay: 5000,
      prevNextButtons: true,
      pageDots: false,
      cellAlign: "center",
      contain: true,
    });

    return () => {
      flkty.destroy();
    };
  }, []);

  const handleImageClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <div className="slideshow bg-white max-w-full" id="slider" ref={ref}>
      <div className="gallery js-flickity mx-auto bg-black text-center">
        {projects.map((project) => (
          <div
            key={project.id}
            className="gallery-cell w-full h-screen relative cursor-pointer text-center text-white"
            onClick={() => handleImageClick(project)}
          >
            <Suspense fallback={()=><div>Loading office images slider...</div>}>
              <BlurImage
                img={project.image[0]}
                blurredImg={project.imageBlurred[0]}
                alt={project.title}
              
              />
            </Suspense>

            <motion.h1
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 2 }}
              className="absolute top-5 transform w-full text-lg sm:text-2xl md:text-4xl font-semibold sm:font-medium text-black px-2 py-1 rounded tracking-wider font-extrabold"
            >
              {project.title}
            </motion.h1>
            <motion.h3
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 3 }}
              className="absolute top-20 w-full sm:text-sm text-xs text-black w-full tracking-wider font-medium"
            >
              {project.tagline}
            </motion.h3>
            <motion.h3
              whileInView={{ opacity: 1, y: -50 }}
              initial={{ opacity: 0, y: -120 }}
              transition={{ duration: 2 }}
              className="absolute bottom-10 w-full sm:text-sm text-xs sm:font-medium font-base tracking-wider text-black tracking-wider"
            >
              {project.tag}
            </motion.h3>
          </div>
        ))}
      </div>

      {isModalOpen && selectedProject && projects && (
        <div className="fixed inset-0 bg-black text-white bg-opacity-90 z-50 flex flex-col">
          <div className="flex justify-between p-3">
            <div></div>
            <h2 className="tracking-widest text-2xl font-medium">
              {selectedProject.title}
            </h2>
            <button
              onClick={() => setIsModalOpen(false)}
              className="text-2xl hover:text-gray-300 hover:cursor-pointer"
            >
              ×
            </button>
          </div>

          <h2 className="text-center text-sm px-3 pb-1">
            {selectedProject.desc}
          </h2>

          <div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3
             overflow-y-auto
             scrollbar-thin
             scrollbar-thumb-black
             scrollbar-track-transparent
             px-3"
          >
            {selectedProject.image.map((img, index) => (
              <ImageWithBlur
                key={index}
                img={img}
                blurredImg={selectedProject.imageBlurred[index]}
                alt={`Project ${selectedProject.id} - ${index}`}
              />
            ))}
          </div>

          <h5 className="text-base font-medium text-center py-2 tracking-wider ">
            {selectedProject.tag}
          </h5>
        </div>
      )}
    </div>
  );
});

export default ProjectSlider;
