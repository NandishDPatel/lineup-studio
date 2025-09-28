import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import { AnimatePresence, motion } from 'framer-motion';

function App() {
  const [showLanding, setShowLanding] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLanding(false);
    }, 3000); // Adjust duration to match landing animation
    return () => clearTimeout(timer);
  }, []);

  return (
    // <AnimatePresence mode="wait">
    //   {showLanding ? (
    //     <motion.div
    //       key="landing"
    //       initial={{ opacity: 1 }}
    //       exit={{ opacity: 0 }}
    //       transition={{ duration: 1 }} // fade-out duration
    //     >
    //       <LandingPage />
    //     </motion.div>
    //   ) : (
    //     <motion.div
    //       key="home"
    //       initial={{ opacity: 0 }}
    //       animate={{ opacity: 1 }}
    //       transition={{ duration: 1 }} // fade-in duration
    //     >
    //       <Header />
    //       <Content />
    //       <Footer />
    //     </motion.div>
    //   )}
    // </AnimatePresence>
    <>
      <Header />
      <Content />
      <Footer />
    </>
  );
}

export default App;
