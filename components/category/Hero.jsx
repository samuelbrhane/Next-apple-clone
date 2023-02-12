import React from "react";
import Image from "next/legacy/image";
import { useGlobalContextProvider } from "../../contexts/BagContext";

const Hero = ({ data }) => {
  const {
    name,
    desc,
    price,
    image,
    background,
    unique,
    watch,
    decrease,
    direction,
    right,
    size,
  } = data;

  const { dispatch } = useGlobalContextProvider();
  return (
    <div
      className={`w-full  h-[100vh]   px-4 ${
        background ? "text-black" : "text-white"
      } ${background ? "bg-white" : "bg-black"}  ${unique && "watch"} `}
    >
      <div className="shadow-md w-full h-full flex justify-center items-center mb-4 relative">
        <div
          className={`relative ${size && "!h-[50%]"} w-full ${
            decrease && "md:!w-[350px]"
          }  ${watch ? "md:full" : "md:w-[700px]"} h-full`}
        >
          <Image src={image} alt="itemImage" layout="fill" />
        </div>

        <div
          className={`absolute top-4 z-10 ${direction && "!pt-8"} ${
            right && "md:!translate-x-[-30%] md:!top-36"
          } left-[50%] translate-x-[-50%] w-full flex flex-col items-center gap-1 whitespace-nowrap`}
        >
          <p className="font-bold text-yellow-400 text-3xl">New</p>
          <h1 className="font-extrabold text-3xl md:text-4xl lg:text-5xl">
            {name}
          </h1>
          <h1 className="font-semibold text-2xl md:3xl my-3">{desc}</h1>
          <p>From ${price}</p>
          <div className="flex justify-center">
            <button
              className="flex items-center bg-blue-700 px-3 py-1 text-lg rounded-lg justify-center text-white"
              onClick={() => dispatch({ type: "ADD_ITEM", payload: data })}
            >
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
