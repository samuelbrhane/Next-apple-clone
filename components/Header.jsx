import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { AiFillApple, AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { BsBriefcase } from "react-icons/bs";
import { useState } from "react";

const Header = () => {
  const [showMenuProducts, setShowMenuProducts] = useState(false);
  return (
    <>
      <div className="bg-black h-12 fixed top-0 text-gray-200 w-full z-50">
        <div className="px-4 py-2 flex items-center justify-between h-full w-full text-2xl cursor-pointer">
          <div
            className="md:hidden"
            onClick={() => setShowMenuProducts(!showMenuProducts)}
          >
            {showMenuProducts ? <AiOutlineClose /> : <HiOutlineMenuAlt1 />}
          </div>

          <AiFillApple />
          <div className="hidden md:flex flex-grow items-center gap-6  mx-2 justify-center text-[16px] text-gray-300 font-light">
            <p>Store</p>
            <p>Mac</p>
            <p>iPad</p>
            <p>iPhone</p>
            <p>Watch</p>
            <p>Airpods</p>
            <p>Accessories</p>
          </div>
          <div className="flex items-center gap-6 lg:gap-8 text-xl">
            <AiOutlineSearch className="hidden md:inline" />
            <BsBriefcase />
          </div>
        </div>
      </div>
      {/* Menu Products */}

      <div
        className={`fixed  w-fill  bg-black text-white md:hidden ${
          showMenuProducts ? "showContents" : "hideContents"
        }`}
      >
        <div className="border-b-2 pb-4 pt-2">
          <div className="px-3 sm:px-5 relative">
            <input
              type="text"
              placeholder="Search apple.com"
              className="outline-none w-full pl-8 pr-2 py-2 bg-gray-500 rounded-md"
            />
            <AiOutlineSearch className="absolute left-5 sm:left-7 top-[50%] translate-y-[-50%] text-xl text-gray-300 cursor-pointer" />
          </div>
        </div>
        <div className="px-10 flex flex-col gap-6 text-xl font-light pt-4 text-gray-300">
          <p className="border-b-2 pb-1 cursor-pointer">Store</p>
          <p className="border-b-2 pb-1 cursor-pointer">Mac</p>
          <p className="border-b-2 pb-1 cursor-pointer">iPad</p>
          <p className="border-b-2 pb-1 cursor-pointer">iPhone</p>
          <p className="border-b-2 pb-1 cursor-pointer">Watch</p>
          <p className="border-b-2 pb-1 cursor-pointer">Airpods</p>
          <p className="border-b-2 pb-1 cursor-pointer">Accessories</p>
        </div>
      </div>
    </>
  );
};

export default Header;
