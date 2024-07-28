import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import teamImage1 from "../assets/images/s_company_team_image_1.jpg";
import teamImage2 from "../assets/images/s_company_team_image_2.jpg";
import teamImage3 from "../assets/images/s_company_team_image_3.jpg";
import teamImage4 from "../assets/images/s_company_team_image_4.jpg";

const Team = () => {
  // Define animation variants for the container and items
  const containerVariants = {
    hidden: { opacity: 0, y: 50 }, // Initial state: hidden and moved down
    visible: {
      opacity: 1,
      y: 0, // Final state: visible and moved to the original position
      transition: {
        staggerChildren: 0.4, // Stagger the entrance of each child by 0.4 seconds
        delayChildren: 0.2, // Delay the start of stagger by 0.2 seconds
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 }, // Initial state for each item: hidden and slightly moved down
    visible: { opacity: 1, y: 0 }, // Final state for each item: visible and original position
  };

  return (
    <>
      <motion.div
        className="w-full h-auto py-12 flex flex-col md:grid md:grid-cols-2 md:mx-6 lg:mx-[10%] items-center justify-center gap-12"
        initial="hidden"
        whileInView="visible" // Start the animation when the component comes into view
        viewport={{ once: true, amount: 0.1 }} // 10% of the component needs to be in the viewport to trigger the animation
        variants={containerVariants} // Use the containerVariants defined above
      >
        {/* Team Member 1 */}
        <motion.div
          className="w-[310px] flex flex-col items-center justify-center gap-2"
          variants={itemVariants} // Use itemVariants for each individual item
          transition={{ duration: 1.0, ease: "easeOut" }} // Slow down the animation duration
        >
          <img
            className="h-32 rounded-full"
            src={teamImage1}
            alt="Team Image 1"
          />
          <h1 className="text-xl font-semibold">Tony Fred, CEO</h1>
          <p className="text-xs leading-5 text-center">
            Founder and chief visionary, Tony is the driving force behind the
            company. He loves to keep his hands full by participating in the
            development of the software, marketing, and customer experience
            strategies.
          </p>
        </motion.div>
        {/* Team Member 2 */}
        <motion.div
          className="w-[310px] flex flex-col items-center justify-center gap-2"
          variants={itemVariants}
          transition={{ duration: 1.0, ease: "easeOut", delay: 0.2 }} // Increase delay for staggering effect
        >
          <img
            className="h-32 rounded-full"
            src={teamImage2}
            alt="Team Image 2"
          />
          <h1 className="text-xl font-semibold">Mich Stark, COO</h1>
          <p className="text-xs leading-5 text-center">
            Mich loves taking on challenges. With his multi-year experience as
            Commercial Director in the software industry, Mich has helped the
            company to get where it is today. Mich is among the best minds.
          </p>
        </motion.div>
        {/* Team Member 3 */}
        <motion.div
          className="w-[310px] flex flex-col items-center justify-center gap-2"
          variants={itemVariants}
          transition={{ duration: 1.0, ease: "easeOut", delay: 0.4 }} // Increase delay
        >
          <img
            className="h-32 rounded-full"
            src={teamImage3}
            alt="Team Image 3"
          />
          <h1 className="text-xl font-semibold">Aline Turner, CTO</h1>
          <p className="text-xs leading-5 text-center">
            Aline is one of the iconic people in life who can say they love what
            they do. She mentors 100+ in-house developers and looks after the
            community of thousands of developers.
          </p>
        </motion.div>
        {/* Team Member 4 */}
        <motion.div
          className="w-[310px] flex flex-col items-center justify-center gap-2"
          variants={itemVariants}
          transition={{ duration: 1.0, ease: "easeOut", delay: 0.6 }} // Increase delay
        >
          <img
            className="h-32 rounded-full"
            src={teamImage4}
            alt="Team Image 4"
          />
          <h1 className="text-xl font-semibold">Iris Joe, CFO</h1>
          <p className="text-xs leading-5 text-center">
            Iris, with her international experience, helps us easily understand
            the numbers and improves them. She is determined to drive success
            and delivers her professional acumen to bring the company to the
            next level.
          </p>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Team;
