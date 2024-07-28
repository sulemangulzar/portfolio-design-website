import React from "react";
import resultImage from "../assets/images/browser_02.svg";
import refrenceimage1 from "../assets/images/s_reference_demo_image_1.png";
import refrenceimage2 from "../assets/images/s_reference_demo_image_2.png";
import refrenceimage3 from "../assets/images/s_reference_demo_image_3.png";
import refrenceimage4 from "../assets/images/s_reference_demo_image_4.png";
import refrenceimage5 from "../assets/images/s_reference_demo_image_5.png";
import refrenceimage6 from "../assets/images/s_reference_default_image_6.png";
import { motion } from "framer-motion";

const Results = () => {
  const handleScrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
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

  // Animation variants for gallery images
  const galleryVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  const sectionVariant = {
    hidden: { opacity: 0, y: 20 },
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
            <h1 className="text-3xl md:text-4xl xl:text-5xl font-medium mt-12 md:mt-0 leading-[40px]">
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
      <div>
        <div className="w-full h-auto py-4 bg-gray-200">
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-8 md:gap-x-12 lg:gap-x-32 xl:gap-x-12 px-4 pt-6">
            {/* 1 */}
            <motion.img
              className="h-20 object-cover"
              src={refrenceimage1}
              alt="Reference Image"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% of the element is in view
              variants={galleryVariant}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
            {/* 2 */}
            <motion.img
              className="h-20 object-cover"
              src={refrenceimage2}
              alt="Reference Image"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={galleryVariant}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            />
            {/* 3 */}
            <motion.img
              className="h-20 object-cover"
              src={refrenceimage3}
              alt="Reference Image"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={galleryVariant}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            />
            {/* 4 */}
            <motion.img
              className="h-20 object-cover"
              src={refrenceimage4}
              alt="Reference Image"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={galleryVariant}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
            />
            {/* 5 */}
            <motion.img
              className="h-20 object-cover"
              src={refrenceimage5}
              alt="Reference Image"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={galleryVariant}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
            />
            {/* 6 */}
            <motion.img
              className="h-20 object-cover"
              src={refrenceimage6}
              alt="Reference Image"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={galleryVariant}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
            />
          </div>
        </div>
      </div>
      <motion.div
        className="w-full h-auto text-white bg-[#202022] text-center flex flex-col items-center justify-center gap-4 py-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariant}
        transition={{ duration: 1.0, ease: "easeOut" }}
      >
        <motion.h1
          className="text-xl font-bold px-12"
          variants={textVariant}
          transition={{ duration: 1.0, ease: "easeOut", delay: 0.2 }}
        >
          50,000+ clients trust us to protect their assets
        </motion.h1>
        <motion.p
          className="text-base"
          variants={textVariant}
          transition={{ duration: 1.0, ease: "easeOut", delay: 0.4 }}
        >
          Contact us for a personalized meeting
        </motion.p>
        <motion.button
          className="px-4 py-1.5 bg-white text-black rounded-full mt-4 font-medium"
          variants={textVariant}
          transition={{ duration: 1.0, ease: "easeOut", delay: 0.6 }}
          onClick={() => handleScrollToSection("contact")}
        >
          Contact Us
        </motion.button>
      </motion.div>
    </>
  );
};

export default Results;
