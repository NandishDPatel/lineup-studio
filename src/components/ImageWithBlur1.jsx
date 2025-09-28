import React from "react";
import { useInView } from "react-intersection-observer";

const ImageWithBlur1 = ({ img, blurredImg, alt }) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div ref={ref} className="relative h-64 w-full overflow-hidden rounded-xl">
      <div
        className="absolute inset-0 bg-cover bg-center blur-lg transition-opacity duration-500"
        style={{
          backgroundImage: `url(${blurredImg})`,
          opacity: inView ? 0 : 1,
        }}
      ></div>

      {inView && (
        <img
          src={img}
          alt={alt}
          className="h-full w-full object-cover transition-opacity duration-500"
        />
      )}
    </div>
  );
};

export default ImageWithBlur1;
