import React from "react";
import macbook from "../assets/images/macbook_front.svg";

const Home = () => {
  return (
    <>
      <div className="container flex flex-col items-center justify-center gap-4 ">
        <div className="w-[300px] md:w-[450px]">
          <h1 className=" text-3xl md:text-5xl font-bold text-center mt-12 leading-[40px]">
            Unleash your growth potential
          </h1>
        </div>
        <div className="w-[350px] md:w-[450px]">
          <p className="text-[9px]  text-center ">
            Ask your questions and discuss your projects with our partners. They
            are here to help you grow your business!
          </p>
        </div>
        <button className="px-3 py-1.5 bg-black text-white rounded-full">
          Contact Us
        </button>
      </div>
      <div className="relative">
        <img
          className="shadow-xl mt-12 px-4 md:px-8"
          src={macbook}
          alt="Front"
        />
      </div>
    </>
  );
};

export default Home;
