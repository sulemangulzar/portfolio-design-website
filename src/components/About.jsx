import React from "react";
import iphone from "../assets/images/iphone_3d_portrait_01.svg";

const About = () => {
  return (
    <>
      <div className="mt-32 grid md:grid-cols-3 items-start justify-center gap-x-12 pt-12">
        <img
          src={iphone}
          alt="iPhone"
          className="h-[250px] md:h-[300px] lg:h-[350px] xl:h-[450px] mx-20 md:mx-12 lg:mx-20  "
        />
        <div className="flex flex-col items-center justify-center col-span-2 text-center md:text-left">
          <div className="w-[300px] md:w-[350px] lg:w-[400px] md:mr-4 lg:mr-24 ">
            <h1 className=" text-3xl md:text-4xl xl:text-5xl font-bold  mt-12 leading-[40px]">
              A solution for every need
            </h1>
          </div>
          <div className="w-[350px] md:w-[380px] lg:w-[480px] xl:w-[500px]">
            <p className="text-[9px] xl:text-base  mt-2 ">
              We see our role as that of a legal partner responsible for
              constantly finding practical and pragmatic solutions that are
              adapted to our clients' needs.
            </p>
            <button className="px-4 py-1.5 bg-black text-white rounded-full mt-4">
              Discover More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
