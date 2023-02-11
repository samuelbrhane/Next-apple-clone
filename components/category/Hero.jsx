import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import Image from "next/legacy/image";

const Hero = ({ data }) => {
  const { name, desc, price, image, background, unique, watch, decrease } =
    data;
  return (
    <div
      className={`w-full  h-[100vh]   px-4 ${
        background ? "text-black" : "text-white"
      } ${background ? "bg-white" : "bg-black"}  ${unique && "watch"} `}
    >
      <div className="shadow-md w-full h-full flex justify-center items-center mb-4">
        <div
          className={`relative w-full ${decrease && "md:!w-[350px]"}  ${
            watch ? "md:full" : "md:w-[700px]"
          } h-full`}
        >
          <Image src={image} alt="iPhone14" layout="fill" />

          <div className="absolute z-10  pt-10 lg:pt-6 left-[50%] translate-x-[-50%] w-full flex flex-col items-center gap-1 whitespace-nowrap">
            <p className="font-bold text-yellow-400 text-3xl">New</p>
            <h1 className="font-extrabold text-3xl md:text-4xl lg:text-5xl">
              {name}
            </h1>
            <h1 className="font-semibold text-2xl md:3xl my-3">{desc}</h1>
            <p>From ${price}</p>
            <div className="flex items-center text-sm text-blue-500">
              <p className="text-xl ml-2">Buy</p>
              <AiOutlineRight className="mt-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
