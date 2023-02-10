import Image from "next/legacy/image";
import React from "react";
import { AiOutlineRight } from "react-icons/ai";

const HeroImage = ({ name, title, image, text }) => {
  return (
    <div
      className={`relative w-full h-full ${text ? "text-black" : "text-white"}`}
    >
      <Image src={image} alt="storeImages" objectFit="cover" layout="fill" />
      <div className="absolute top-4 left-[50%] translate-x-[-50%]">
        <p className="text-center font-bold text-[16px] md:text-xl lg:text-2xl">
          {name}
        </p>
        <p className="text-center text-sm lg:text-lg">{title}</p>
        <div className="flex items-center mt-2 justify-center text-sm text-blue-500">
          <p className="text-xl ml-2">Buy</p>
          <AiOutlineRight className="mt-1" />
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
