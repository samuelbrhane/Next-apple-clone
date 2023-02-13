import Link from "next/link";
import React, { useEffect } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { Header } from "../components";
import { useGlobalContextProvider } from "../contexts/BagContext";

const success = () => {
  const { dispatch } = useGlobalContextProvider();
  useEffect(() => {
    dispatch({ type: "REMOVE_ITEMS" });
  }, []);

  return (
    <div>
      <Header />
      <div className="flex justify-center px-4 md:px-10 lg:px-16">
        <div className="shadow bg-white p-2">
          <div className="flex items-center gap-1">
            <BsCheckCircleFill className="text-green-500" />{" "}
            <h1 className="font-bold text-lg">
              Thank you, your order has been confirmed.
            </h1>
          </div>
          <p className="font-light mt-2 text-sm ">
            Thank you for shopping with us. We will and a confirmation once your
            item has shipped, if your would like to check the status of your
            order, please contact as at working hours.
          </p>
          <div className="w-full  px-4 mt-4 mb-3">
            <Link href="/">
              <button className="bg-blue-400 hover:bg-blue-500 w-full py-1 text-white">
                Back to Homepage
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default success;
