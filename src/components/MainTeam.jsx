// components/TempTeam.jsx
import React, { useState } from "react";
import { teamMembers1 } from "../data/teamInfo";
import { motion } from "motion/react";

const MemberCard = ({ member, animation }) => {
  const [activeTab, setActiveTab] = useState("bio");

  return (
    <motion.div
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: animation }}
      transition={{ duration: 1.5 }}
      key={member.id}
      className="team-member bg-white shadow-lg rounded-2xl overflow-hidden transition-shadow duration-300"
    >
      <div className="p-2 sm:p-6">
        <img
          src={member.image}  
          alt={member.name}
          className="mx-auto h-40 w-40 md:h-56 md:w-56 object-cover rounded-full border-4 border-white shadow-md"
        />
        <h3 className="mt-2 sm:mt-4 text-xl md:text-2xl font-semibold text-gray-900 text-center">
          {member.name}
        </h3>
        <p className="text-gray-500 font-medium text-center">{member.role}</p>

        {/* Tabs */}
        <div className="grid grid-cols-2 text-center mt-2 sm:mt-4 border-b">
          {["bio", "experience"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 capitalize w-full ${
                activeTab === tab
                  ? "border-b-2 border-black text-black font-semibold"
                  : "text-gray-400 hover:text-black cursor-pointer"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="mt-2 sm:mt-4 text-gray-600 text-sm md:text-base">
          {activeTab === "bio" && <ul className="list-none sm:min-h-36"><li className="text-justify"> {member.bio} </li> </ul>}

          {activeTab === "experience" && (
            <ul className="list-disc pl-5 space-y-1 text-left sm:min-h-36">
              {member.experience.map((exp, i) => (
                <li key={i}>{exp}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const TempTeam = () => {
  return (
    <div className="team py-5 sm:py-12 px-2 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 lg:gap-12">
          <MemberCard member={teamMembers1[0]} animation={-100} />
          <MemberCard member={teamMembers1[1]} animation={100} />
        </div>
      </div>
    </div>
  );
};

export default TempTeam;
