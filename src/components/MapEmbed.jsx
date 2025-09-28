import React from "react";
import { motion } from "motion/react";
const MapEmbed = () => {
  return (
    <motion.div
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: 100 }}
      transition={{ duration: 1.5 }}
      className="mx-auto md:px-5 max-w-6xl"
    >
      {/* Map Container with Styled Frame */}
      <div className="relative overflow-hidden shadow-2xl border-2 md:border-4 border-black hover:border-gray-500 transition-all duration-300">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1542.8535993604942!2d72.53857853941668!3d23.113747889322443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e830e4aae983d%3A0xaee8a0cd3e6df8b0!2sMoney%20Plant%20High%20Street!5e0!3m2!1sen!2sin!4v1749040403262!5m2!1sen!2sin"
          className="w-full h-60 md:h-72"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          aria-label="Google Maps Location"
          style={{
            filter: "grayscale(20%) contrast(110%) saturate(120%)",
            border: "none",
          }}
        />

        {/* Floating Info Badge */}
        <div className="absolute bottom-4 left-4 bg-yellow-100 backdrop-blur-sm px-3 py-2 shadow-lg">
          <p className="font-semibold text-gray-800">
            {" "}
            A-1136, Money Plant High Street
          </p>
          <p className="text-sm text-gray-600">
            S.G. Highway, Ahmedabad, Gujarat
          </p>
        </div>
      </div>

      {/* Optional: Directions Button */}
      <div className="mt-3">
        <a
          href="https://maps.google.com?daddr=Money+Plant+High+Street+Ahmedabad"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center px-6 py-3 bg-black text-white hover:bg-gray-500 transition-colors shadow-lg justify-center"
        >
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
          </svg>
          Get Directions
        </a>
      </div>
      
    </motion.div>
  );
};

export default MapEmbed;
