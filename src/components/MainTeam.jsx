import React, { useState } from "react";
import { teamMembers } from "../data/teamInfo";
import { motion } from "motion/react";

const MemberCard = ({ member, animation }) => {
  const [activeTab, setActiveTab] = useState("bio");

  return (
    <motion.div
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: animation }}
      transition={{ duration: 1.5 }}
      key={member.id}
      className="team-member shadow-2xl overflow-hidden transition-shadow duration-300 border border-0 border-black bg-white bg-gray-300 p-6"
    >
      <div className="">
        <img
          src={member.image}
          alt={member.name}
          className="mx-auto h-40 w-40 md:h-56 md:w-56 object-cover border-1 border-black shadow-lg rounded-full"
        />
        <h3 className="mt-2 sm:mt-4 text-lg md:text-xl sm:font-semibold font-medium text-gray-900 text-center">
          {member.name}
        </h3>
        <p className="font-medium text-center text-gray-500 sm:text-base text-sm">{member.role}</p>

        <div className="grid grid-cols-2 text-center mt-2 sm:mt-4 border-b">
          {["bio", "experience"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 capitalize w-full ${
                activeTab === tab
                  ? "border-b-2 border-black text-black font-semibold sm:text-sm text-xs"
                  : "text-black hover:text-gray-500 cursor-pointer sm:text-base text-xs"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="mt-2 sm:mt-4 text-gray-600 sm:text-sm text-xs text-black min-h-[130px]">
          {activeTab === "bio" && (
            <ul className="list-none">
              <li className="text-justify sm:text-base text-sm text-black"> {member.bio} </li>{" "}
            </ul>
          )}

          {activeTab === "experience" && (
            <ul className="list-disc sm:text-base text-sm pl-5 space-y-1 text-left text-black">
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

const MainTeam = () => {
  return (
    <div className="team py-5 sm:py-12 px-2 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 lg:gap-12">
          <MemberCard member={teamMembers[0]} animation={-100} />
          <MemberCard member={teamMembers[1]} animation={100} />
        </div>
      </div>
    </div>
  );
};

export default MainTeam;
