import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  // Define animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2, // Increase stagger to slow down the sequence
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="my-12"
      initial="hidden"
      whileInView="visible" // Trigger the animation when the component is in view
      viewport={{ once: true, amount: 0.1 }} // 10% of the component needs to be in the viewport
      variants={containerVariants}
    >
      <motion.h1
        className="text-2xl font-semibold text-center"
        variants={itemVariants}
        transition={{ duration: 1.0, ease: "easeOut" }} // Slow down the animation
      >
        Contact Us
      </motion.h1>
      <motion.div
        className="mt-12 flex flex-col items-start md:items-center justify-center mx-12 gap-4"
        variants={containerVariants}
      >
        <motion.div
          className="flex flex-col items-start gap-2"
          variants={itemVariants}
          transition={{ duration: 1.0, ease: "easeOut" }} // Slow down the animation
        >
          <h1>Your Name</h1>
          <motion.input
            className="w-[300px] md:w-[500px] lg:w-[700px] p-1 border border-gray-200 focus:outline-1 outline-gray-300"
            type="text"
            variants={itemVariants}
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.0, ease: "easeOut" }} // Slow down the animation
          />
        </motion.div>
        <motion.div
          className="flex flex-col items-start gap-2"
          variants={itemVariants}
          transition={{ duration: 1.0, ease: "easeOut", delay: 0.2 }} // Increase delay for slower sequence
        >
          <h1>Phone Number</h1>
          <motion.input
            className="w-[300px] md:w-[500px] lg:w-[700px] p-1 border border-gray-200 focus:outline-1 outline-gray-300"
            type="number"
            variants={itemVariants}
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.0, ease: "easeOut" }} // Slow down the animation
          />
        </motion.div>
        <motion.div
          className="flex flex-col items-start gap-2"
          variants={itemVariants}
          transition={{ duration: 1.0, ease: "easeOut", delay: 0.4 }} // Increase delay
        >
          <h1>Your Email</h1>
          <motion.input
            className="w-[300px] md:w-[500px] lg:w-[700px] p-1 border border-gray-200 focus:outline-1 outline-gray-300"
            type="email"
            variants={itemVariants}
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.0, ease: "easeOut" }} // Slow down the animation
          />
        </motion.div>
        <motion.div
          className="flex flex-col items-start gap-2"
          variants={itemVariants}
          transition={{ duration: 1.0, ease: "easeOut", delay: 0.6 }} // Increase delay
        >
          <h1>Your Company</h1>
          <motion.input
            className="w-[300px] md:w-[500px] lg:w-[700px] p-1 border border-gray-200 focus:outline-1 outline-gray-300"
            type="text"
            variants={itemVariants}
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.0, ease: "easeOut" }} // Slow down the animation
          />
        </motion.div>
        <motion.div
          className="flex flex-col items-start gap-2"
          variants={itemVariants}
          transition={{ duration: 1.0, ease: "easeOut", delay: 0.8 }} // Increase delay
        >
          <h1>Subject</h1>
          <motion.input
            className="w-[300px] md:w-[500px] lg:w-[700px] p-1 border border-gray-200 focus:outline-1 outline-gray-300"
            type="text"
            variants={itemVariants}
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.0, ease: "easeOut" }} // Slow down the animation
          />
        </motion.div>
        <motion.div
          className="flex flex-col items-start gap-2"
          variants={itemVariants}
          transition={{ duration: 1.0, ease: "easeOut", delay: 1.0 }} // Increase delay
        >
          <h1>Your Question</h1>
          <motion.textarea
            className="w-[300px] md:w-[500px] lg:w-[700px] min-h-12 py-2 px-2 border border-gray-200 focus:outline-1 outline-gray-300"
            name="text"
            id="text1"
            variants={itemVariants}
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.0, ease: "easeOut" }} // Slow down the animation
          ></motion.textarea>
        </motion.div>
        <motion.button
          className="px-6 py-2 mt-2 text-white bg-black rounded-full mx-auto md:mx-[220px]"
          variants={itemVariants}
          transition={{ duration: 1.0, ease: "easeOut", delay: 1.2 }} // Increase delay
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          Submit
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
