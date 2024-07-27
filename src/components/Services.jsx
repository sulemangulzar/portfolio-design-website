import React, { useRef } from "react";
import { motion, useInView } from "framer-motion"; // Import useInView
import first from "../assets/images/1.jpg";
import second from "../assets/images/2.jpg";
import third from "../assets/images/3.jpg";

const Services = () => {
  // Create refs for the elements you want to animate
  const imagesRef = useRef(null);
  const textRef = useRef(null);

  // Use useInView to determine if the elements are in view
  const imagesInView = useInView(imagesRef, { once: true, margin: "-50px" });
  const textInView = useInView(textRef, { once: true, margin: "-50px" });

  // Define animation variants
  const imageVariant = {
    hidden: { opacity: 0, y: 20 }, // Initial state
    visible: { opacity: 1, y: 0 }, // Visible state
  };

  const textVariant = {
    hidden: { opacity: 0, x: -20 }, // Initial state
    visible: { opacity: 1, x: 0 }, // Visible state
  };

  const buttonVariant = {
    hidden: { opacity: 0, scale: 0.8 }, // Initial state
    visible: { opacity: 1, scale: 1 }, // Visible state
  };

  return (
    <div className="my-24 grid md:grid-cols-4 items-start justify-center gap-x-12 pt-12">
      <motion.div
        ref={imagesRef}
        className="w-[400px] h-[400px] md:w-[300px] lg:w-[400px] relative col-span-2 md:order-2 lg:mx-24"
        initial="hidden"
        animate={imagesInView ? "visible" : "hidden"} // Trigger animation based on visibility
        variants={imageVariant}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.img
          className="absolute w-[300px] lg:w-[350px] top-0 left-12 md:left-0 rounded"
          src={first}
          alt="Image"
          variants={imageVariant}
          transition={{ duration: 0.5, delay: 0.3 }}
        />
        <motion.img
          className="absolute w-[200px] bottom-0 left-6 md:-left-12 rounded"
          src={second}
          alt="Image"
          variants={imageVariant}
          transition={{ duration: 0.5, delay: 0.4 }}
        />
        <motion.img
          src={third}
          alt="image"
          className="absolute w-[170px] -top-12 right-6 md:-right-12 lg:right-4 rounded"
          variants={imageVariant}
          transition={{ duration: 0.5, delay: 0.5 }}
        />
      </motion.div>
      <motion.div
        ref={textRef}
        className="flex flex-col items-center justify-center col-span-2 text-center md:text-left md:order-1 md:ml-12"
        initial="hidden"
        animate={textInView ? "visible" : "hidden"} // Trigger animation based on visibility
        variants={textVariant}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="w-[300px] md:w-[350px] lg:w-[400px] md:mr-6 lg:mr-24">
          <h1 className="text-3xl md:text-3xl xl:text-5xl font-medium mt-12 leading-[40px]">
            Our expertise at your service
          </h1>
        </div>
        <div className="w-[350px] md:w-[380px] lg:w-[480px] xl:w-[500px]">
          <p className="text-[8px] xl:text-base mt-2">
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <motion.button
            className="px-4 py-1.5 bg-black text-white rounded-full mt-4"
            variants={buttonVariant}
            animate={textInView ? "visible" : "hidden"} // Trigger animation based on visibility
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Start Now
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Services;
