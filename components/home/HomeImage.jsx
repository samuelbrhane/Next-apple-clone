import Image from "next/legacy/image";
import React from "react";
import { AiOutlineRight } from "react-icons/ai";

const HomeImage = ({ name, title, image, background }) => {
  return (
    <div
      className={`w-full flex justify-center items-center  h-[80vh] ${
        background ? "text-black" : "text-white"
      } ${background ? "bg-white" : "bg-black"}`}
    >
      <div className="relative w-full h-full md:w-[80%]">
        <Image src={image} alt="iPhone14" layout="fill" objectFit="cover" />

        <div className="absolute z-10  pt-10 lg:pt-6 left-[50%] translate-x-[-50%] w-full flex flex-col items-center gap-1 whitespace-nowrap">
          <h1 className="font-extrabold text-3xl md:text-4xl lg:text-5xl">
            {name}
          </h1>
          <h1 className="font-semibold text-2xl md:3xl">{title}</h1>

          <div className="flex items-center text-sm text-blue-500">
            <p className="text-xl ml-2">Buy</p>
            <AiOutlineRight className="mt-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeImage;
