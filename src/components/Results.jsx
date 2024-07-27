import React from "react";
import resultImage from "../assets/images/browser_02.svg";
import { motion } from "framer-motion";

const Results = () => {
  // Animation variants for the image
  const imgVariant = {
    hidden: { opacity: 0, scale: 0.8 }, // Adjust the scale for a more noticeable effect
    visible: { opacity: 1, scale: 1 },
  };

  // Animation variants for the text
  const textVariant = {
    hidden: { opacity: 0, y: 30 }, // Increase the y value for a more noticeable effect
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <div className="my-24 grid md:grid-cols-4 items-start justify-center gap-x-12 pt-12">
        <motion.div
          className="w-full px-4 md:px-8 col-span-2 "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% of the element is in view
          variants={imgVariant}
          transition={{ duration: 1.0, ease: "easeOut" }} // Slow down the animation
        >
          <img
            src={resultImage}
            alt="iPhone"
            className="w-full h-full object-contain"
          />
        </motion.div>
        <motion.div
          className="flex flex-col items-center justify-center col-span-2 text-center md:text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% of the element is in view
          variants={textVariant}
          transition={{ duration: 1.0, ease: "easeOut" }} // Slow down the animation
        >
          <div className="w-[250px] md:w-[300px] lg:w-[370px] md:mr-16 lg:mr-24 xl:mr-28">
            <h1 className="text-3xl md:text-4xl xl:text-5xl font-medium mt-12 leading-[40px]">
              We care about the results
            </h1>
          </div>
          <div className="w-[350px] md:w-[380px] lg:w-[480px] xl:w-[500px]">
            <p className="text-[9px] md:text-xsm md:px-2 xl:text-base mt-2">
              Guided by expertise gained over 20 years of achieving success for
              clients, we practice with passion and strategic focus on the
              future
            </p>
            <button className="px-4 py-1.5 bg-black text-white rounded-full mt-4">
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Results;
