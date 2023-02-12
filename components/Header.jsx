import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { AiFillApple, AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { BsBriefcase } from "react-icons/bs";
import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [showMenuProducts, setShowMenuProducts] = useState(false);
  return (
    <>
      <div className="bg-[#1d1f1d] h-12 sticky top-0 text-gray-200 w-full z-50">
        <div className="px-4 py-2 md:px-12 lg:px-20 flex items-center justify-between h-full w-full text-2xl cursor-pointer">
          <div
            className="md:hidden"
            onClick={() => setShowMenuProducts(!showMenuProducts)}
          >
            {showMenuProducts ? <AiOutlineClose /> : <HiOutlineMenuAlt1 />}
          </div>
          <Link href="/">
            <AiFillApple />
          </Link>

          <div className="hidden md:flex flex-grow items-center gap-6  mx-2 justify-center text-[16px] text-gray-300 font-light">
            <Link href="/mac">Mac</Link>
            <Link href="/iPad">iPad</Link>
            <Link href="/iPhone">iPhone</Link>
            <Link href="/watch">Watch</Link>
            <Link href="/airPods">AirPods</Link>
          </div>
          <div className="flex items-center gap-6 lg:gap-8 text-xl">
            <AiOutlineSearch className="hidden md:inline" />
            <Link href="/bag">
              <BsBriefcase />
            </Link>
          </div>
        </div>
      </div>
      {/* Menu Products */}

      <div
        className={`fixed  w-fill  bg-black text-white md:hidden z-50 ${
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
          <Link href="/mac" className="border-b-2 pb-1 cursor-pointer">
            Mac
          </Link>
          <Link href="/iPad" className="border-b-2 pb-1 cursor-pointer">
            iPad
          </Link>
          <Link href="/iPhone" className="border-b-2 pb-1 cursor-pointer">
            iPhone
          </Link>
          <Link href="/watch" className="border-b-2 pb-1 cursor-pointer">
            Watch
          </Link>
          <Link href="/airPods" className="border-b-2 pb-1 cursor-pointer">
            AirPods
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
