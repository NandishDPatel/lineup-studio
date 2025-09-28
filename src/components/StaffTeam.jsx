// components/TempTeam.jsx
import React, { useState } from "react";
import { staffMembers } from "../data/teamInfo";
import { motion } from "motion/react";

const MemberCard = ({ member, animation }) => {
  const [activeTab, setActiveTab] = useState("bio");

  return (
    <motion.div
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: animation }}
      transition={{ duration: 1.5 }}
      key={member.id}
      className="team-member bg-white shadow-lg rounded-2xl overflow-hidden transition-shadow duration-300 w-lg"
    >
      <div className="p-6">
        <img
          src={member.image}
          alt={member.name}
          className="mx-auto h-40 w-40 md:h-56 md:w-56 object-cover rounded-full border-4 border-white shadow-md"
        />
        <h3 className="mt-4 text-xl md:text-2xl font-semibold text-gray-900 text-center">
          {member.name}
        </h3>
        <p className="text-gray-500 font-medium text-center">{member.role}</p>
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
