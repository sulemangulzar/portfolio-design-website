import React from "react";
import logo from "../assets/images/R.jpg";

const Navbar = () => {
  const openNav = () => {
    const nav = document.querySelector(".navmob");
    nav.classList.toggle("hidden");
  };
  const closeNav = () => {
    const nav = document.querySelector(".navmob");
    nav.classList.add("hidden");
  };

  return (
    <>
      <nav className="relative container px-12 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-medium">LoGo</h1>
          <div className="">
            <ul className="hidden md:flex items-center gap-8">
              <li className="text-base ">
                <a href="/#">Home</a>
              </li>
              <li className="text-base ">
                <a href="/#">About</a>
              </li>
              <li className="text-base ">
                <a href="/#">Services</a>
              </li>
              <li className="text-base ">
                <a href="/#">Team</a>
              </li>
              <li className="text-base ">
                <a href="/#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="md:hidden">
            <button className="focus:outline-none">
              <svg
                onClick={openNav}
                className="w-6 h-6 text-black fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <div className="navmob hidden absolute top-0 left-0 w-[100%] h-[500px] bg-black transition-all ease-in-out duration-300">
        <button onClick={closeNav}>
          <svg
            className="w-6 h-6 text-white fill-current absolute right-12 top-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
          </svg>
        </button>
        <ul className="flex flex-col items-center gap-8 py-8">
          <li className="text-base text-white">
            <a href="/#">Home</a>
          </li>
          <li className="text-base text-white">
            <a href="/#">About</a>
          </li>
          <li className="text-base text-white">
            <a href="/#">Services</a>
          </li>
          <li className="text-base text-white">
            <a href="/#">Team</a>
          </li>
          <li className="text-base text-white">
            <a href="/#">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
