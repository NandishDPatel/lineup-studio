import React from "react";
import { motion } from "motion/react";
import { AchievementDesc } from "../data/teamInfo";

const Achievement = () => {
  return (
    <>
      <div
        className="container max-w-full lg:px-32 sm:px-12 px-5 pt-1 pb-3 sm:py-10"
        id="achieveSec"
      >
        <div className="p-1 sm:p-3">
          <motion.h2
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 2 }}
            className="text-center border-b-2 m-auto max-w-full text-2xl font-bold py-2 mb-3"
          >
            Achievment
          </motion.h2>
          <div className="achv">
            <div className="grid justify-center sm:flex justify-between items-start gap-2">
              <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -50 }}
                transition={{ duration: 1 }}className="image  w-1/2 mx-auto sm:w-1/3 sm:me-2">
                <img
                  src={AchievementDesc.image}
                  alt="Achievement"
                  height={300}
                  width={300}
                  className="object-contain shadow-lg text-center mx-auto"
                />
              </motion.div>
              <motion.div           
              className="sm:w-2/3 sm:ms-2 sm:mt-0 flex flex-col gap-1 sm:gap-2 text-center justify-around items-start">
                <motion.p  whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 50 }}
                transition={{ duration: 1 }} 
                className="text-base sm:text-lg font-bold text-gray-900 py-1 sm:py-2">
                  {AchievementDesc.awardName}
                </motion.p>
                <motion.p  whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 70 }}
                transition={{ duration: 1.5 }}  className="text-base sm:text-lg font-light text-gray-700">
                  {AchievementDesc.awardOrganization}
                </motion.p>
                
                <motion.p  whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 2 }} className="text-base sm:text-md font-normal text-gray-600 mt-2">
                  {AchievementDesc.awardDesc}
                </motion.p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Achievement;
