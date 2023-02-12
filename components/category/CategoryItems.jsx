import React, { useRef, useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const CategoryItems = ({ categoryItems, category }) => {
  const [moving, setMoving] = useState(false);
  const categoryRef = useRef(null);
  const handleScroll = (direction) => {
    setMoving(true);
    if (categoryRef.current) {
      const { scrollLeft, clientWidth } = categoryRef.current;

      const scrollDirection =
        direction === "right"
          ? scrollLeft + clientWidth
          : scrollLeft - clientWidth;

      categoryRef.current.scrollTo({
        left: scrollDirection,
        behavior: "smooth",
      });
    }
  };
  return (
    <div
      className={`relative flex justify-center group ${
        category === "watch" && "bg-black"
      } ${category === "watch" && "text-white"}`}
    >
      {moving && (
        <AiOutlineLeft
          className="absolute cursor-pointer left-0 opacity-0 group-hover:opacity-100  top-[50%] translate-y-[-50%] text-lg bg-[#d6ddf4] h-full z-20"
          onClick={() => handleScroll("left")}
        />
      )}
      <div
        className="flex items-center gap-4 px-4 overflow-y-scroll scrollbar-hide"
        ref={categoryRef}
      >
        {categoryItems?.map((data, index) => {
          return (
            <div key={index}>
              <div
                className={`w-[100px]  
                 h-[70px] mt-2`}
              >
                <img
                  className="w-full h-full"
                  src={data.image}
                  alt="itemImage"
                />
              </div>

              <p className="mt-4 text-center text-[12px]">{data.name}</p>
            </div>
          );
        })}
      </div>
      <AiOutlineRight
        className="absolute cursor-pointer right-0 top-[50%] opacity-0 group-hover:opacity-100  translate-y-[-50%] text-lg bg-[#d6ddf4] h-full z-20"
        onClick={() => handleScroll("right")}
      />
    </div>
  );
};

export default CategoryItems;
