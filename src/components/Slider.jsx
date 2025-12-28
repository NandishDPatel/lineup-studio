import React, { useState, useEffect, forwardRef, lazy, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { projects } from "../data/project.js";
import { motion } from "motion/react";
import "../App.css";
import ImageWithBlur from "./ImageWithBlur.jsx";
import { heroImages } from "../data/heroImages.js";

import BlurImage from "./atoms/BlurImage.jsx";
// const BlurImage = lazy(() => import("./atoms/BlurImage.jsx"));

const projectData = projects;

const Slider = forwardRef((props, ref) => {
  const [selectedProject, setSelectedProject] = useState(null); //object
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  const handleImageClick = (projectId) => {
    setSelectedProject(projects[projectId-1]);
    setIsModalOpen(true);
  };

  return (
    <div className="slideshow bg-white max-w-full" id="slider" ref={ref}>
      <div className="mx-auto bg-black text-center">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          loop={true}
          centeredSlides={true}
          grabCursor={true}
          speed={800}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          className="w-full h-screen"
          lazy={{
            loadPrevNext: true,
          }}
        >
          {heroImages.map((project,index) => (
            <SwiperSlide key={project.id}>
              <div
                className="gallery-cell w-full h-screen relative cursor-pointer text-center text-white"
                onClick={() => handleImageClick(project.id)}
              >
                <BlurImage
                  img={project.image}
                  blurredImg={project.imageBlurred}
                  alt={project.title}
                  priority={index === 0}
                />

                <motion.h1
                  whileInView={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{ duration: 2 }}
                  className="absolute top-15 transform w-full text-lg sm:text-2xl md:text-4xl font-semibold sm:font-medium text-black px-2 py-1 rounded tracking-wider font-extrabold"
                >
                  {project.title}
                </motion.h1>
                <motion.h3
                  whileInView={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{ duration: 3 }}
                  className="absolute top-30 w-full sm:text-sm text-xs text-black w-full tracking-wider font-medium"
                >
                  {project.tagline}
                </motion.h3>
                <motion.h3
                  whileInView={{ opacity: 1, y: -50 }}
                  initial={{ opacity: 0, y: -120 }}
                  transition={{ duration: 2 }}
                  className="absolute bottom-8 w-full sm:text-sm text-xs sm:font-medium font-base tracking-wider text-black tracking-wider"
                >
                  {project.tag}
                </motion.h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {isModalOpen && selectedProject && projectData && (
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

export default Slider;
