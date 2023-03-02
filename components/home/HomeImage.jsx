import Image from "next/legacy/image";
import React from "react";
import { useGlobalContextProvider } from "../../contexts/BagContext";

const HomeImage = ({ item }) => {
  const { dispatch } = useGlobalContextProvider();
  const { name, title, image, background, price } = item;

  return (
    <div
      className={`w-full flex justify-center flex-col gap-4 items-center  h-[80vh] ${
        background ? "text-black" : "text-white"
      } ${background ? "bg-white" : "bg-black"}`}
    >
      <div className="w-full flex flex-col items-center gap-1 whitespace-nowrap mt-4">
        <h1 className="font-extrabold text-3xl md:text-4xl lg:text-5xl">
          {name}
        </h1>
        <h1 className="font-semibold text-2xl md:3xl">{title}</h1>

        {price && (
          <p className="text-center text-sm lg:text-lg  mt-1">${price}</p>
        )}

        <div className="flex justify-center">
          <button
            className="flex items-center bg-blue-700 px-3 py-1 text-lg rounded-lg justify-center text-white"
            onClick={() => dispatch({ type: "ADD_ITEM", payload: item })}
          >
            Buy
          </button>
        </div>
      </div>
      <div className="relative w-[70%] h-[50%] md:h-[70%] md:w-[65%]">
        <Image src={image} alt="iPhone14" layout="fill" objectFit="cover" />
      </div>
    </div>
  );
};

export default HomeImage;
