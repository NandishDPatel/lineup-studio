import React, { useState, useEffect } from "react";
import { projects } from "../data/project";


const Layout = ({ project }) => {
  const [projImgLen, setProjImgLen] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  useEffect(() => {
    setProjImgLen(project.image.length);
  }, [project]);

  const getGridLayout = () => {
    switch(projImgLen) {
      case 1:
        return "grid-cols-1";
      case 2:
        return "grid-cols-2";
      case 3:
        return "grid-cols-3";
      case 4:
        return "grid-cols-2 md:grid-cols-4";
      case 5:
        return "grid-cols-2 md:grid-cols-3 lg:grid-cols-5";
      default:
        return "grid-cols-2 md:grid-cols-3 lg:grid-cols-4";
    }
  };

  return (
    <>
      {/* Main container with clickable image */}
      <div className="container cursor-pointer" onClick={() => setIsModalOpen(true)}>
        {/* Your existing slider image would go here */}
        <img 
          src={project.image[0]} 
          alt={`Project ${project.id}`} 
          className="w-full h-auto"
        />
      </div>

      {/* Modal Popup */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 overflow-y-auto p-4">
          <div className="flex justify-end p-4">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="text-white text-2xl hover:text-gray-300"
            >
              ×
            </button>
          </div>
          
          <div className={`grid ${getGridLayout()} gap-4 p-4 max-w-7xl mx-auto`}>
            {project.image.map((img, index) => (
              <div key={index} className="overflow-hidden rounded-lg">
                <img 
                  src={img} 
                  alt={`Project ${project.id} - ${index}`} 
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
          
          <div className="text-center text-white py-4">
            <span className="text-sm text-blue-500 font-medium bg-black/70 px-2 py-1 rounded">
              {project.tag}
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default Layout;