import React from "react";

const Navbar = () => {
  const openNav = () => {
    const navMenu = document.getElementById("mobile-nav");
    navMenu.classList.toggle("hidden");
  };

  // This function handles smooth scrolling
  const handleScrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="relative container px-4 md:px-12 py-4 flex items-center justify-between">
      <h1 className="text-xl font-medium text-gray-900">LoGo</h1>
      <div className="hidden md:flex items-center gap-8">
        <button
          onClick={() => handleScrollToSection("home")}
          className="text-base hover:text-gray-600"
        >
          Home
        </button>
        <button
          onClick={() => handleScrollToSection("about")}
          className="text-base hover:text-gray-600"
        >
          About
        </button>
        <button
          onClick={() => handleScrollToSection("services")}
          className="text-base hover:text-gray-600"
        >
          Services
        </button>
        <button
          onClick={() => handleScrollToSection("results")}
          className="text-base hover:text-gray-600"
        >
          Results
        </button>
        <button
          onClick={() => handleScrollToSection("team")}
          className="text-base hover:text-gray-600"
        >
          Team
        </button>
        <button
          onClick={() => handleScrollToSection("contact")}
          className="text-base hover:text-gray-600"
        >
          Contact
        </button>
      </div>
      <button className="md:hidden focus:outline-none" onClick={openNav}>
        <svg
          className="w-6 h-6 text-black fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32-14.3 32 32z" />
        </svg>
      </button>
      {/* Mobile Navigation */}
      <div
        id="mobile-nav"
        className="hidden md:hidden absolute top-16 left-0 w-full bg-white shadow-md"
      >
        <div className="flex flex-col items-center py-4 gap-2">
          <button
            onClick={() => handleScrollToSection("home")}
            className="text-base hover:text-gray-600"
          >
            Home
          </button>
          <button
            onClick={() => handleScrollToSection("about")}
            className="text-base hover:text-gray-600"
          >
            About
          </button>
          <button
            onClick={() => handleScrollToSection("services")}
            className="text-base hover:text-gray-600"
          >
            Services
          </button>
          <button
            onClick={() => handleScrollToSection("results")}
            className="text-base hover:text-gray-600"
          >
            Results
          </button>
          <button
            onClick={() => handleScrollToSection("team")}
            className="text-base hover:text-gray-600"
          >
            Team
          </button>
          <button
            onClick={() => handleScrollToSection("contact")}
            className="text-base hover:text-gray-600"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
