import React, { forwardRef } from "react";
import { LineupMission } from "../data/teamInfo";
import { motion } from "motion/react";
import { AnimatedText } from "./LandingPage";

const About = forwardRef((props, ref) => {
  return (
    <>
      <div
        ref={ref}
        className="container max-w-full lg:px-32 sm:px-12 px-5 mt-6 text-black bg-gray-300"
        id="aboutSec"
      >
        <div className="p-1 sm:p-3 ">
          <motion.h1
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 2 }}
            className="text-center border-b-2 mx-auto text-2xl font-bold py-2 w-auto"
          >
            Our Mission
          </motion.h1>
          <h3>
            <AnimatedText
            className="text-sm sm:text-base"
              text={LineupMission}
              once={true}
              staggerSpeed = {0.05}
              animation={{
                hidden: { opacity: 0, x: -2 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.001 } },
              }}
            />
          </h3>
        </div>
      </div>
    </>
  );
});

export default About;
