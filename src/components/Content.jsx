import React from "react";
import TeamInfo from "./TeamInfo";
import About from "./About";
import ProjectSlider from "./Slider";
import Achievement from "./Achievement";
import Studio from "./Studio";

const Content = () => {
  return (
    <>
      <div className="w-full m-auto">
        <ProjectSlider />
        <About />
        <TeamInfo />
        <Studio/>
        <Achievement/>
      </div>
    </>
  );
};

export default Content;
