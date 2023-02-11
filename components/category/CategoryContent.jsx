import React, { useEffect, useState } from "react";
import {
  macItems,
  watchItems,
  iPadItems,
  iPhoneItems,
  airPodsItems,
} from "../../utils/categories";

import CategoryItems from "./CategoryItems";

const CategoryContent = ({ category }) => {
  const [categoryData, setCategoryData] = useState(null);

  useEffect(() => {
    switch (category) {
      case "mac":
        setCategoryData(macItems);
        break;
      case "iPhone":
        setCategoryData(iPhoneItems);
        break;
      case "iPad":
        setCategoryData(iPadItems);
        break;
      case "watch":
        setCategoryData(watchItems);
        break;
      case "airPods":
        setCategoryData(airPodsItems);
        break;

      default:
        break;
    }
  }, [category]);

  return (
    <main>
      <CategoryItems categoryData={categoryData} category={category} />
      <div className="flex justify-center px-4 md:px-8 py-2 bg-[#d1d5d3] text-sm font-light">
        <p className="text-center">
          Get 3% Daily Cash back with Apple Card. And pay for your new Apple
          product over 12 months, interest&#8211;free when you choose to check
          out with Apple Card Monthly Installments.
        </p>
      </div>
    </main>
  );
};

export default CategoryContent;
