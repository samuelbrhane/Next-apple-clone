import React, { useEffect, useState } from "react";
import { CategoryItems, CategoryImage } from ".";
import {
  macImageData,
  watchImageData,
  iPadImageData,
  iPhoneImageData,
  airPodsImageData,
} from "../../utils/categoryImage";
import {
  macItems,
  watchItems,
  iPadItems,
  iPhoneItems,
  airPodsItems,
} from "../../utils/categories";

const CategoryContent = ({ category }) => {
  const [categoryItems, setCategoryItems] = useState(null);
  const [categoryImages, setCategoryImages] = useState(null);

  useEffect(() => {
    switch (category) {
      case "mac":
        setCategoryItems(macItems);
        setCategoryImages(macImageData);
        break;
      case "iPhone":
        setCategoryItems(iPhoneItems);
        setCategoryImages(iPhoneImageData);
        break;
      case "iPad":
        setCategoryItems(iPadItems);
        setCategoryImages(iPadImageData);
        break;
      case "watch":
        setCategoryItems(watchItems);
        setCategoryImages(watchImageData);
        break;
      case "airPods":
        setCategoryItems(airPodsItems);
        setCategoryImages(airPodsImageData);
        break;

      default:
        break;
    }
  }, [category]);

  return (
    <main>
      <CategoryItems categoryItems={categoryItems} category={category} />
      <div className="flex justify-center px-4 md:px-8 py-3 bg-[#d1d5d3] text-[10px] sm:text-sm font-light">
        <p className="text-center">
          Get 3% Daily Cash back with Apple Card. And pay for your new Apple
          product over 12 months, interest&#8211;free when you choose to check
          out with Apple Card Monthly Installments.
        </p>
      </div>
      <CategoryImage categoryImages={categoryImages} category={category} />
    </main>
  );
};

export default CategoryContent;
