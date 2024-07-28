import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion

const Footer = () => {
  // Define animation variants for links and subscription
  const linkVariants = {
    hidden: { opacity: 0, y: 20 }, // Start with links hidden and slightly below their position
    visible: { opacity: 1, y: 0 }, // Animate links to become visible and move to original position
  };

  const subscriptionVariants = {
    hidden: { opacity: 0, scale: 0.8 }, // Start with subscription section hidden and smaller
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring", // Use spring physics for a bounce effect
        stiffness: 200,
        damping: 20,
      },
    },
  };

  return (
    <>
      <div>
        <footer className="w-full md:h-[330px] bg-black">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 xl:gap-16 pt-4 md:pt-0">
            {/* Links Group 2 */}
            <motion.div
              className="w-[100px] flex flex-col items-center justify-center gap-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={linkVariants}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }} // Add delay for staggered effect
            >
              <a className="text-white" href="">
                Home
              </a>
              <a className="text-white" href="">
                About
              </a>
              <a className="text-white" href="">
                Services
              </a>
              <a className="text-white" href="">
                Result
              </a>
              <a className="text-white" href="">
                Team
              </a>
              <a className="text-white" href="">
                Contact
              </a>
            </motion.div>

            {/* Links Group 3 */}
            <motion.div
              className="w-[100px] flex flex-col items-center justify-center gap-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={linkVariants}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }} // Further delay
            >
              <a className="text-white" href="">
                X
              </a>
              <a className="text-white" href="">
                GitHub
              </a>
              <a className="text-white" href="">
                Email
              </a>
              <a className="text-white" href="">
                Facebook
              </a>
              <a className="text-white" href="">
                Linkedin
              </a>
              <a className="text-white" href="">
                Instagram
              </a>
            </motion.div>

            {/* Subscription Section */}
            <motion.div
              className="flex flex-col items-start justify-center gap-2 w-[300px] h-[220px] bg-white mt-12 rounded-lg p-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={subscriptionVariants} // Apply subscriptionVariants for bounce effect
            >
              <p className="text-sm xl:text-base">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Doloremque, modi fuga voluptate molestias quidem natus velit
                deserunt?
              </p>
              <h1 className="text-base xl:text-lg font-semibold">
                Let's Connect
              </h1>
              <div className="w-[98%] h-12 bg-gray-200 rounded-full flex items-center pr-2 justify-end">
                <button className="px-3 py-1 md:py-0.5 m-1 bg-black text-white font-medium text-md rounded-full">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
          <hr className="w-full h-[1px] bg-white mt-6 mb-2" />
          <p className="tex-md text-white text-center">&copy; Copyright 2024</p>
        </footer>
      </div>
    </>
  );
};

export default Footer;
