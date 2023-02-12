import Image from "next/legacy/image";
import React from "react";

const CategoryDetails = ({ category, categoryDescription }) => {
  return (
    <div
      className={`max-w-7xl mx-auto mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ${
        category !== "watch" && "lg:grid-cols-4"
      } ${category === "iPad" && "lg:!grid-cols-5"}`}
    >
      {categoryDescription?.map((item, index) => {
        const { image, name, desc, price, details } = item;
        return (
          <div key={index} className="mt-6 mb-6 flex justify-center">
            <div className="w-[230px] text-center r">
              <div className="flex justify-center">
                <div
                  className={`relative w-[180px] h-[140px] ${
                    category === "iPad" && "!h-[270px]"
                  }  ${category === "iPhone" && "!h-[250px]"} ${
                    category === "airPods" && "!w-[120px]"
                  } mb-4`}
                >
                  <Image src={image} alt="itemImage" layout="fill" />
                </div>
              </div>

              <div className="pb-2 border-b-2">
                <div
                  className={`h-[50px] ${category === "iPad" && "!h-[110px]"} ${
                    category === "watch" && "!h-[20px]"
                  }`}
                >
                  <h1 className="text-lg md:text-xl font-bold">{name}</h1>
                  <p className="text-gray-600 mt-1 mb-2">{desc}</p>
                </div>
                <p className="my-4">From ${price}</p>
                <div className="flex justify-center">
                  <button className="flex items-center bg-blue-700 px-3 py-1 text-lg rounded-lg justify-center text-white">
                    Buy
                  </button>
                </div>
              </div>

              {details.map((detail, index) => {
                const { title, img, description } = detail;
                return (
                  <div key={index} className="mt-4">
                    {img ? (
                      <div className="flex flex-col items-center mb-3 h-[130px] text-[11px] gap-2 md:text-[13px]">
                        <div className="relative w-12 h-8">
                          <Image src={img} alt="descImage" layout="fill" />
                        </div>
                        <p>{description}</p>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center mb-3 h-[130px] text-[11px] gap-2 md:text-[13px]">
                        <p className="font-bold">{title}</p>
                        <p>{description}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryDetails;
