import React, { useEffect, useState } from "react";
import { CategoryItems, CategoryImage, CategoryDetails } from ".";
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

import {
  macDescData,
  watchDescData,
  iPadDescData,
  iPhoneDescData,
  airPodsDescData,
} from "../../utils/categoryDesc";
import { AiOutlineRight } from "react-icons/ai";
import Image from "next/legacy/image";

const CategoryContent = ({ category }) => {
  const [categoryItems, setCategoryItems] = useState(null);
  const [categoryImages, setCategoryImages] = useState(null);
  const [categoryDescription, setCategoryDescription] = useState(null);
  const [categoryText, setCategoryText] = useState(null);

  useEffect(() => {
    switch (category) {
      case "mac":
        setCategoryItems(macItems);
        setCategoryImages(macImageData);
        setCategoryDescription(macDescData);
        setCategoryText("Mac");
        break;
      case "iPhone":
        setCategoryItems(iPhoneItems);
        setCategoryImages(iPhoneImageData);
        setCategoryDescription(iPhoneDescData);
        setCategoryText("iPhone");
        break;
      case "iPad":
        setCategoryItems(iPadItems);
        setCategoryImages(iPadImageData);
        setCategoryDescription(iPadDescData);
        setCategoryText("iPad");
        break;
      case "watch":
        setCategoryItems(watchItems);
        setCategoryImages(watchImageData);
        setCategoryDescription(watchDescData);
        setCategoryText("Apple Watch");
        break;
      case "airPods":
        setCategoryItems(airPodsItems);
        setCategoryImages(airPodsImageData);
        setCategoryDescription(airPodsDescData);
        setCategoryText("AirPod");
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
      <h1 className="text-center mt-4 font-bold text-xl md:text-3xl lg:text-5xl mb-3">
        Which {categoryText} is right for you?
      </h1>
      <CategoryDetails
        category={category}
        categoryDescription={categoryDescription}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-4 border-t-2 pt-2">
        <div className="flex items-center  justify-center mb-2">
          <div className="flex flex-col w-[200px] items-center">
            <div className="relative h-12 w-12">
              <Image src="/img/delivery.png" alt="delivery" layout="fill" />
            </div>
            <h1 className="font-bold mt-2 mb-1">Fast delivery or pickup</h1>
            <p className="text-center text-sm">
              Enjoy two&#8211;hour delivery from an Apple Store, free delivery,
              or easy pickup.
            </p>
            <div className="flex items-center mt-1 justify-center text-sm text-blue-500">
              <p className="text-xl ml-2">Learn more</p>
              <AiOutlineRight className="mt-1" />
            </div>
          </div>
        </div>

        <div className="flex items-center  justify-center mb-2">
          <div className="flex flex-col w-[200px] items-center">
            <div className="relative h-12 w-12">
              <Image src="/img/finance.svg" alt="delivery" layout="fill" />
            </div>
            <h1 className="font-bold mt-2 mb-1">Pay monthly at 0% APR</h1>
            <p className="text-center text-sm">
              You can pay over time when you choose to check out with Apple
              Card.
            </p>
            <div className="flex items-center mt-1 justify-center text-sm text-blue-500">
              <p className="text-xl ml-2">Learn more</p>
              <AiOutlineRight className="mt-1" />
            </div>
          </div>
        </div>

        <div className="flex items-center  justify-center mb-2">
          <div className="flex flex-col w-[200px] items-center">
            <div className="relative h-12 w-12">
              <Image src="/img/help.svg" alt="delivery" layout="fill" />
            </div>
            <h1 className="font-bold mt-2 mb-1">Get help buying</h1>
            <p className="text-center text-sm">
              Have a question? Call a Specialist or chat online. Call
              1800&#8211;&#8211;.
            </p>
            <div className="flex items-center mt-1 justify-center text-sm text-blue-500">
              <p className="text-xl ml-2">Learn more</p>
              <AiOutlineRight className="mt-1" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CategoryContent;
