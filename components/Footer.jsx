import React from "react";
import Collapsible from "react-collapsible";
import footerData from "../footerData";

const Footer = () => {
  return (
    <div className="bg-[#f3f5f1] px-4 py-4 text-sm text-gray-500">
      <div className="flex flex-col gap-1 border-b-2 pb-2 mb-4">
        {" "}
        <p>
          To access and use all the features of Apple Card, you must add Apple
          Card to Wallet on an iPhone or iPad with the latest version of iOS or
          iPadOS. Update to the latest version by going to Settings &gt; General
          &gt; Software Update. Tap Download and Install.
        </p>
        <p>Available for qualifying applicants in the United States.</p>
        <p>
          Apple Card is issued by Goldman Sachs Bank USA, Salt Lake City Branch.
        </p>
        <p>
          Learn more about how Apple Card applications are evaluated at
          support.apple.com/kb/HT209218.
        </p>
      </div>

      <div className="text-black">
        {footerData?.map((data, index) => (
          <Collapsible
            id="1676277221230"
            trigger={data.title}
            key={index}
            className="py-2 border-b-2 text-black font-semibold md:hidden"
          >
            {data.content.map((cont, index) => (
              <p className="text-gray-500 md:hidden" key={index}>
                {cont}
              </p>
            ))}
          </Collapsible>
        ))}
      </div>
      <div className="grid-cols-4 hidden md:grid">
        {footerData?.map((data, index) => (
          <div key={index} className="py-2 font-semibold">
            <h1 className="text-lg">{data.title}</h1>
            {data.content.map((cont, index) => (
              <p className="text-gray-500 font-light" key={index}>
                {cont}
              </p>
            ))}
          </div>
        ))}
      </div>
      <p>
        More ways to shop: Find an Apple Store or other retailer near you. Or
        call 1-800-MY-APPLE.
      </p>
      <p className="mb-4 border-b-2 pb-2">Ethiopia</p>
      <p>Copyright © 2023 Samuel Brhane Apple Inc. All rights reserved.</p>
    </div>
  );
};

export default Footer;
