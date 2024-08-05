import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/images/R.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openNav = () => setIsOpen(true);
  const closeNav = () => setIsOpen(false);

  return (
    <>
      <nav className="relative container px-4 md:px-12 py-4 flex items-center justify-between">
        <h1 className="text-xl font-medium text-gray-900">LoGo</h1>
        <div className="hidden md:flex items-center gap-8">
          <a href="/#" className="text-base hover:text-gray-600">
            Home
          </a>
          <a href="/#" className="text-base hover:text-gray-600">
            About
          </a>
          <a href="/#" className="text-base hover:text-gray-600">
            Services
          </a>
          <a href="/#" className="text-base hover:text-gray-600">
            Results
          </a>
          <a href="/#" className="text-base hover:text-gray-600">
            Team
          </a>
          <a href="/#" className="text-base hover:text-gray-600">
            Contact
          </a>
        </div>
        <button className="md:hidden focus:outline-none" onClick={openNav}>
          <svg
            className="w-6 h-6 text-black fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
          </svg>
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-0 left-0 z-20 w-full h-full bg-black text-white flex flex-col items-center justify-center"
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <button onClick={closeNav} className="absolute top-4 right-4 p-2">
              <svg
                className="w-6 h-6 text-white fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
              </svg>
            </button>
            <ul className="flex flex-col items-center gap-8">
              <li className="text-base">
                <a href="/#" onClick={closeNav}>
                  Home
                </a>
              </li>
              <li className="text-base">
                <a href="/#" onClick={closeNav}>
                  About
                </a>
              </li>
              <li className="text-base">
                <a href="/#" onClick={closeNav}>
                  Services
                </a>
              </li>
              <li className="text-base">
                <a href="/#" onClick={closeNav}>
                  Results
                </a>
              </li>
              <li className="text-base">
                <a href="/#" onClick={closeNav}>
                  Team
                </a>
              </li>
              <li className="text-base">
                <a href="/#" onClick={closeNav}>
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
