import React, { forwardRef } from "react";
import { LineupMission } from "../data/teamInfo";
import { motion } from "motion/react";
import { AnimatedText } from "./LandingPage";

const About = forwardRef((props, ref) => {
  return (
    <>
      <div
        ref={ref}
        className="container max-w-full lg:px-32 sm:px-12 px-5 mt-6 bg-gray-200 border-y-2 border-black"
        id="aboutSec"
      >
        <div className="p-1 sm:p-3">
          <motion.h2
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 2 }}
            className="text-center border-b-2 mx-auto text-2xl font-bold py-2 w-auto"
          >
            Our Mission
          </motion.h2>
          <div>
            <AnimatedText
              text={LineupMission}
              once={true}
              staggerSpeed = {0.05}
              animation={{
                hidden: { opacity: 0, x: -2 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.001 } },
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
});

export default About;
