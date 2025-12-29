import React, { useState } from "react";
import { staffMembers } from "../../data/teamInfo";
import { motion } from "motion/react";

const MemberCard = ({ member, animation }) => {
  const [activeTab, setActiveTab] = useState("bio");

  return (
    <motion.div
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: animation }}
      transition={{ duration: 1.5 }}
      key={member.id}
      className="team-member shadow-lg overflow-hidden transition-shadow duration-300 p-6"
    >
      <div className="">
        <img
          src={member.image}
          alt={member.name}
          className="mx-auto h-40 w-40 md:h-56 md:w-56 object-cover border-1 border-black shadow-md rounded-full"
        />
        <h1 className="mt-4 text-lg md:text-xl font-semibold text-gray-900 text-center">
          {member.name}
        </h1>
        <h2 className="text-gray-500 font-medium text-center text-black">{member.role}</h2>
      </div>
    </motion.div>
  );
};

const StaffTeam = () => {
  return (
    <div className="team flex justify-center p-5 sm:p-12 ">
      <MemberCard member={staffMembers[0]} animation={-100} />
    </div>
  );
};

export default StaffTeam;
