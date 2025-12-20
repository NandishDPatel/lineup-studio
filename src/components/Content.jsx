import React, { Suspense } from "react";
import ProjectSlider from "./Slider";

const About = React.lazy(() => import("./About"));
const Achievement = React.lazy(() => import("./Achievement"));
const TeamInfo = React.lazy(() => import("./TeamInfo"));
const Studio = React.lazy(() => import("./Studio"));

const Content = () => {
  return (
    <>
      <div className="w-full m-auto">
        <ProjectSlider />
        <About />
        <Suspense fallback={null}>
          <TeamInfo />
          <Studio />
          <Achievement />
        </Suspense>
      </div>
    </>
  );
};

export default Content;
