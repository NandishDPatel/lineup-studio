import React, { useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const LandingPage = () => {
  return (
    <>
      <div className="relative max-w-full h-screen bg-gray-300 text-center flex flex-col items-center justify-center">
        <div>
          <AnimatedText
            text={["L I N E U P  S T U D I O"]}
            el="h1"
            className="text-3xl tracking-normal sm:tracking-widest sm:text-[50px] lg:text-[100px] font-small text-black text-center"
            once={false}
            repeatDelay={5000}
          />
        </div>
        <div className="flex items-center justify-center mt-10">
          <img
            src="/logo-removebg-preview.png"
            alt="Lineup Studio Logo"
            className="absolute bottom-10 h-24 w-24 sm:h-32 sm:w-32 object-contain rounded-md hover:cursor-pointer"
          />
        </div>
      </div>
    </>
  );
};

export const AnimatedText = ({
  text,
  el: Wrapper = "div",
  className,
  once,
  repeatDelay,
  staggerSpeed = 0.15,
  animation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.05 } },
  },
}) => {
  const controls = useAnimation();
  const textArray = Array.isArray(text) ? text : [text];
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    let timeout;

    if (isInView && !hasAnimated) {
      controls.start("visible");
      setHasAnimated(true);

      if (repeatDelay) {
        timeout = setTimeout(async () => {
          await controls.start("hidden");
          controls.start("visible");
        }, repeatDelay);
      }
    }

    return () => clearTimeout(timeout);
  }, [isInView, hasAnimated, repeatDelay, controls]);

  return (
    <>
      <Wrapper className={className}>
        <span className="sr-only">{textArray.join(" ")}</span>
        <motion.span
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            visible: { transition: { staggerChildren: staggerSpeed } },
            hidden: {},
          }}
          aria-hidden
        >
          {textArray.map((line, lineIndex) => (
            <span
              className={`block ${
                lineIndex === 1 ? "ml-32 mt-10 md:ml-32" : "sm:m-2"
              }`}
              key={`${line}-${lineIndex}`}
            >
              {line.split(" ").map((word, wordIndex) => (
                <span className="inline-block" key={`${word}-${wordIndex}`}>
                  {word.split("").map((char, charIndex) => (
                    <motion.span
                      key={`${char}-${charIndex}`}
                      className="inline-block"
                      variants={animation}
                    >
                      {char}
                    </motion.span>
                  ))}
                  <span className="inline-block">&nbsp;</span>
                </span>
              ))}
            </span>
          ))}
        </motion.span>
      </Wrapper>
    </>
  );
};

export default LandingPage;
