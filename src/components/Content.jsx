import React, { Suspense } from "react";
import Slider from "./Slider";
import About from "./About";
const Achievement = React.lazy(() => import("./Achievement"));
const TeamInfo = React.lazy(() => import("./TeamInfo"));
const Studio = React.lazy(() => import("./Studio"));

const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-[200px]">
    <div className="animate-pulse text-gray-500">Loading...</div>
  </div>
);

const Content = () => {
  return (
    <div className="w-full m-auto">
      
      <Slider />
      <About />

      <Suspense fallback={<LoadingFallback />}>
        <TeamInfo />
      </Suspense>

      <Suspense fallback={<LoadingFallback />}>
        <Studio />
      </Suspense>

      <Suspense fallback={<LoadingFallback />}>
        <Achievement />
      </Suspense>
    </div>
  );
};

export default Content;
