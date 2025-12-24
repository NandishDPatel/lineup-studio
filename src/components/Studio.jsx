import React, { forwardRef, lazy, Suspense } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { studioPhotos } from "../data/studio";
import { motion } from "motion/react";
import "../App.css";

const BlurImage = lazy(() => import("./atoms/BlurImage.jsx"));

const Studio = forwardRef((props, ref) => {
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
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          speed={600}
          grabCursor={true}
          className="mx-auto text-center"
        >
          {studioPhotos.map((photo) => (
            <SwiperSlide key={photo.id}>
              <div className="gallery-cell flex-shrink-0 w-full h-[60vh] sm:h-screen flex items-center justify-center">
                <Suspense fallback={<div>Office photos loading</div>}>
                  <BlurImage
                    img={photo.url}
                    blurredImg={photo.blurred}
                    alt="Studio Image"
                  />
                </Suspense>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
});

export default Studio;
