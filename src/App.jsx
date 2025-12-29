import React, { useState, useEffect, Suspense, lazy } from "react";
import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import LandingPage from "./components/LandingPage";
import { AnimatePresence, motion } from "framer-motion";

const Footer = React.lazy(() => import("./components/Footer"));

function App() {
  const [showLanding, setShowLanding] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLanding(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {showLanding ? (
        <motion.div
          key="landing"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <LandingPage />
        </motion.div>
      ) : (
        <motion.div
          key="home"
          // initial={{ opacity: 0.5 }}
          // animate={{ opacity: 1 }}
          // transition={{ duration: 0.2 }}
        >
          <Header />
          <Content />
          <Suspense fallback={<div>Loading Footer...</div>}>
            <Footer />
          </Suspense>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;
