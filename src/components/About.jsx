import React from "react";
import { motion } from "framer-motion";
import iphone from "../assets/images/iphone_3d_portrait_01.svg";

const About = () => {
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
    <div className="mt-32 grid md:grid-cols-4 items-start justify-center gap-x-12 pt-12">
      <motion.div
        className="h-[250px] col-span-2 md:h-[300px] lg:h-[350px] xl:h-[450px] ml-32 md:mx-12 lg:mx-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% of the element is in view
        variants={imgVariant}
        transition={{ duration: 1.0, ease: "easeOut" }} // Slow down the animation
      >
        <img
          src={iphone}
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
        <div className="w-[250px] md:w-[350px] lg:w-[400px] md:mr-4 lg:mr-16 xl:mr-20">
          <h1 className="text-3xl md:text-4xl xl:text-5xl font-medium mt-12 leading-[40px]">
            A solution for every need
          </h1>
        </div>
        <div className="w-[350px] md:w-[380px] lg:w-[480px] xl:w-[500px]">
          <p className="text-[9px] md:text-xsm md:px-2 xl:text-base mt-2">
            We see our role as that of a legal partner responsible for
            constantly finding practical and pragmatic solutions that are
            adapted to our clients' needs.
          </p>
          <button className="px-4 py-1.5 bg-black text-white rounded-full mt-4">
            Discover More
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
