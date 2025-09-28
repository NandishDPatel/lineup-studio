import React from "react";
import TeamInfo from "./TeamInfo";
import About from "./About";
import ProjectSlider from "./Slider";
import Achievement from "./Achievement";

const Content = () => {
  return (
    <>
      <div className="w-full m-auto">
        <ProjectSlider />
        <About />
        <TeamInfo />
        <Achievement/>
      </div>
    </>
  );
};

export default Content;
