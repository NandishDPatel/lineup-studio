import React from "react";
import { teamMembers } from "../data/teamInfo";
import { motion } from "motion/react";
import MainTeam from "./MainTeam";
import StaffTeam from "./StaffTeam";
const TeamInfo = () => {
  return (
    <>
      <div className="container max-w-full lg:px-32 sm:px-12 px-5">
        <div className="p-1 sm:p-3">
          <motion.h2
             whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 2 }}
            className="text-center border-b-2 m-auto max-w-full text-2xl font-bold py-1 sm:py-2"
          >
            Meet Our Team
          </motion.h2>
          <MainTeam/>
        </div>
        <div className="p-1 sm:p-3">
          <motion.h2
             whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 2 }}
            className="text-center border-b-2 m-auto max-w-full text-2xl font-bold py-1 sm:py-2"
          >
            Our Staff
          </motion.h2>
          <StaffTeam/>
        </div>
      </div>
    </>
  );
};
export default TeamInfo;
