import React from "react";
import { motion } from "framer-motion";
import macbook from "../assets/images/macbook_front.svg";

const Home = () => {
  return (
    <>
      <div className="container flex flex-col items-center justify-center gap-4">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-[300px] md:w-[450px]"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-center mt-12 leading-[40px]">
            Unleash your growth potential
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="w-[350px] md:w-[450px]"
        >
          <p className="text-[9px] text-center">
            Ask your questions and discuss your projects with our partners. They
            are here to help you grow your business!
          </p>
        </motion.div>
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
          className="px-3 py-1.5 bg-black text-white rounded-full"
        >
          Contact Us
        </motion.button>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
        className="relative"
      >
        <img
          className="shadow-xl mt-12 px-4 md:px-8"
          src={macbook}
          alt="Front"
        />
      </motion.div>
    </>
  );
};

export default Home;
