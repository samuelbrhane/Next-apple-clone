import Image from "next/legacy/image";
import React from "react";
import { AiOutlineRight } from "react-icons/ai";

const HeroImage = ({ name, title, image, text, background, price }) => {
  return (
    <div
      className={`relative w-full text-white h-full ${text && "text-black"} ${
        background && "bg-white !text-black"
      }`}
    >
      <Image src={image} alt="storeImages" objectFit="cover" layout="fill" />
      <div className="absolute top-4 left-[50%] translate-x-[-50%]">
        <p className="text-center font-bold text-[16px] md:text-xl lg:text-2xl">
          {name}
        </p>
        <p className="text-center text-sm lg:text-lg">{title}</p>
        {price && (
          <p className="text-center text-sm lg:text-lg mb-4 mt-2">${price}</p>
        )}

        {background ? (
          <div className="flex items-center mt-2 justify-center text-sm text-blue-500">
            <p className="text-xl ml-2">Learn more</p>
            <AiOutlineRight className="mt-1" />
          </div>
        ) : (
          <div className="flex justify-center">
            <button className="flex items-center bg-blue-700 px-3 py-1 text-lg rounded-lg justify-center text-white">
              Buy
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroImage;
