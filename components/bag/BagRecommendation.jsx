import Image from "next/legacy/image";
import React from "react";

const BagRecommendation = ({ item }) => {
  const { name, image, price } = item;
  return (
    <div className="flex justify-center border-b-2 pb-3 pt-2">
      <div className="w-[280px] flex justify-center flex-col items-center">
        <div className="relative w-[200px] h-[180px]">
          <Image src={image} alt="productImage" layout="fill" />
        </div>
        <div className="flex flex-col items-center h-[130px]">
          <div className="flex-grow">
            <p className="text-center font-semibold">{name}</p>
            <p className="font bold text-center">${price}</p>
          </div>
          <div className="flex justify-center">
            <button className="text-white bg-blue-600 py-2 px-6 md:px-10 rounded-md">
              Add to Bag
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BagRecommendation;
