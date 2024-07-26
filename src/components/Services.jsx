import React from "react";
import first from "../assets/images/1.jpg";
import second from "../assets/images/2.jpg";
import third from "../assets/images/3.jpg";
const Services = () => {
  return (
    <>
      <div className="my-24 grid  md:grid-cols-4 items-start justify-center gap-x-12 pt-12">
        <div className="w-[400px] h-[400px] md:w-[300px] lg:w-[400px] relative col-span-2  md:order-2 lg:mx-24">
          <img
            className="absolute w-[300px] lg:w-[350px] top-0 left-12 md:left-0 "
            src={first}
            alt="Image"
          />
          <img
            className="absolute w-[200px] bottom-0 left-6 md:-left-12  "
            src={second}
            alt="Image"
          />

          <img
            src={third}
            alt="image"
            className="absolute w-[170px] -top-12 right-6 md:-right-12 lg:right-4"
          />
        </div>
        <div className="flex flex-col items-center justify-center col-span-2 text-center md:text-left md:order-1 md:ml-12">
          <div className="w-[300px] md:w-[350px] lg:w-[400px] md:mr-6 lg:mr-24 ">
            <h1 className=" text-3xl md:text-3xl xl:text-5xl font-medium  mt-12 leading-[40px]">
              Our expertise at your service
            </h1>
          </div>
          <div className="w-[350px] md:w-[380px] lg:w-[480px] xl:w-[500px]">
            <p className="text-[8px] xl:text-base mt-2 ">
              This is a simple hero unit, a simple jumbotron-style component for
              calling extra attention to featured content or information.
            </p>
            <button className="px-4 py-1.5 bg-black text-white rounded-full mt-4">
              Start Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
