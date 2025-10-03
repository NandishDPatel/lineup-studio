import React, { useState, useEffect, forwardRef } from "react";
import Flickity from "flickity";
import "flickity/css/flickity.css";
import { projects } from "../data/project.js";
import { motion } from "motion/react";
import "../index.css";
import "../App.css";
import ImageWithBlur from "./ImageWithBlur.jsx";

const ProjectSlider = forwardRef((props, ref) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const flkty = new Flickity(".gallery", {
      wrapAround: true,
      autoPlay: 3000,
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
            className="gallery-cell w-full h-screen relative cursor-pointer"
            onClick={() => handleImageClick(project)}
          >
            <img
              src={project.image[0]}
              alt={project.title}
              loading="lazy"
              className="absolute h-full w-full object-cover"
            />

            <motion.span
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 2 }}
              className="absolute top-5 transform -translate-x-1/2 text-lg sm:text-2xl md:text-4xl font-semibold sm:font-medium text-white px-2 py-1 rounded"
            >
              {project.title}
            </motion.span>
            <motion.span
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 3 }}
              className="absolute top-20 transform -translate-x-1/2 text-sm text-white px-2 py-1 rounded w-full"
            >
              {project.tagline}
            </motion.span>
            <motion.span
              whileInView={{ opacity: 1, y: -50 }}
              initial={{ opacity: 0, y: -120 }}
              transition={{ duration: 2 }}
              className="absolute bottom-10 transform -translate-x-1/2 text-sm font-medium text-white px-2 py-1 rounded"
            >
              {project.tag}
            </motion.span>
          </div>
        ))}
      </div>

      {/* Image Grid Modal */}
      {isModalOpen && selectedProject && projects && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 overflow-y-auto p-3 flex flex-col">
          <div className="flex justify-end p-1 text-center relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="text-white text-2xl hover:text-gray-300 hover:cursor-pointer"
            >
              ×
            </button>
          </div>
          <div className="hidden sm:flex text-center text-white text-sm">
            <span className="">{selectedProject.desc}</span>
          </div>

          <div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 flex-grow 
             overflow-y-auto scrollbar-thin scrollbar-thumb-white scrollbar-track-transparent"
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

          <div className="text-center text-white py-4">
            <span className="text-xl font-medium px-2 py-1">
              {selectedProject.title} | {selectedProject.tag}
            </span>
          </div>
        </div>
      )}
    </div>
  );
});

export default ProjectSlider;
