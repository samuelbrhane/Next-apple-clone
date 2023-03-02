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
    firstMac,
    secondMac,
    firstIpad,
    secondIpad,
    firstIphone,
    secondIphone,
    firstWatch,
    secondWatch,
    firstPad,
    secondPad,
    unique,
  } = data;

  const { dispatch } = useGlobalContextProvider();
  return (
    <div
      className={`w-full flex flex-col items-center justify-between mb-4 overflow-hidden shadow h-[80vh] md:h-[100vh] gap-4 p-4 ${
        unique && "!bg-gray-100 !text-black"
      } ${background ? "text-black bg-white" : "text-white bg-black"}  `}
    >
      <div className="flex flex-col w-full justify-center items-center">
        <p className="font-bold text-yellow-400 text-xl md:2xl">New</p>
        <h1 className="font-extrabold text-xl md:text-2xl lg:text-3xl">
          {name}
        </h1>
        <h1 className="font-semibold text-lg md:xl my-1">{desc}</h1>
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
      <div className="w-full h-[80%] flex justify-center items-center">
        <img
          src={image}
          alt="itemImage"
          className={`w-full h-full ${
            firstMac && "!h-[50%] lg:!h-full lg:w-[80%] xl:!w-[60%]"
          } ${secondMac && "lg:!w-[70%] xl:!w-[50%]"} ${
            firstIpad &&
            "!h-[70%] md:!h-[90%] lg:!h-[80%] lg:w-[40%] xl:!w-[60%] xl:!h-full"
          } ${secondIpad && "h-[90%] lg:!w-[50%] xl:!w-[50%]"}
          
          ${
            firstIphone &&
            "!h-full w-[75%] md:!h-[90%] md:!w-[70%] lg:!h-[90%] lg:w-[35%] xl:!w-[40%] xl:!h-full"
          } ${
            secondIphone && "h-full w-[60%] md:w-[80%] lg:!w-[30%] xl:!w-[40%]"
          }
          ${firstWatch && "!h-full lg:w-[75%] xl:!w-[80%]"} ${
            secondWatch && "h-full w-[60%] md:w-[50%] lg:!w-[30%]"
          }
          ${firstPad && "!h-full lg:w-[55%] xl:!w-[50%]"} ${
            secondPad && "h-full w-[60%] md:w-[80%] lg:!w-[35%]"
          }
          `}
        />
      </div>
    </div>
  );
};

export default Hero;
