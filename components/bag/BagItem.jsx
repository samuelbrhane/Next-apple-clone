import Image from "next/legacy/image";
import React from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { FaBoxOpen } from "react-icons/fa";
import { BsBriefcaseFill } from "react-icons/bs";
import { useGlobalContextProvider } from "../../contexts/BagContext";

const BagItem = ({ item }) => {
  const { dispatch } = useGlobalContextProvider();
  const { name, price, image, amount, id } = item;
  return (
    <>
      <div className="flex items-center flex-col sm:flex-row border-b-4 py-3 md:py-5 justify-between">
        <div className="relative w-[80px] h-[80px] md:h-[140px] md:w-[140px]">
          <Image src={image} alt="itemImage" layout="fill" />
        </div>
        <div className="w-[90%] sm:w-[75%]">
          <div className="flex items-center border-b-2 justify-between py-2">
            <p className="flex-grow font-bold text-[14px] sm:text-lg md:text-xl">
              {name}
            </p>
            <div className="flex flex-col items-center mx-8 md:mx-6 lg:mx-10 font-bold text-sm md:text-[16px]">
              <AiOutlineUp
                className="text-sm text-blue-500 cursor-pointer"
                onClick={() => dispatch({ type: "INCREASE_ITEM", payload: id })}
              />
              <p>{amount}</p>
              <AiOutlineDown
                className="text-sm text-blue-500 cursor-pointer"
                onClick={() => dispatch({ type: "DECREASE_ITEM", payload: id })}
              />
            </div>
            <div className="text-sm md:text-[16px]">
              <p>${price}</p>
              <button
                className="text-blue-500 "
                onClick={() => dispatch({ type: "REMOVE_ITEM", payload: id })}
              >
                Remove
              </button>
            </div>
          </div>
          <div className="py-2 text-[13px] md:text-[16px]">
            <p>
              Find out how soon you can get this item.{" "}
              <span className="text-blue-500">Enter zip code</span>{" "}
            </p>
            <div className="flex items-center justify-between mt-2 gap-3">
              <div className="flex md:items-center gap-2">
                <FaBoxOpen className="text-xl text-blue-500" />
                <p>In stock and ready to ship.</p>
              </div>
              <div className="flex md:items-center gap-2">
                <BsBriefcaseFill className="text-xl text-blue-500" />
                <p>Pick up at an Apple Store near you.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BagItem;
