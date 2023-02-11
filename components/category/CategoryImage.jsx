import React from "react";
import { Hero } from ".";

const CategoryImage = ({ categoryImages }) => {
  return (
    <div>
      {categoryImages?.map((data, index) => (
        <Hero key={index} data={data} />
      ))}
    </div>
  );
};

export default CategoryImage;
