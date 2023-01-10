import Image from "next/image";
import { AiOutlineRight } from "react-icons/ai";

const Iphone14Pro = () => {
  return (
    <div className="w-full h-[85vh] md:h-[90vh] lg:h-screen pt-12 relative">
      <Image
        src="/img/iPhone14.jpg"
        alt="iPhone14"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-20 md:top-24 lg:top-16 left-[50%] translate-x-[-50%] text-white  w-full flex flex-col items-center gap-1 whitespace-nowrap">
        <h1 className="font-extrabold text-3xl md:text-4xl lg:text-5xl">
          iPhone 14 Pro
        </h1>
        <h1 className="font-semibold text-2xl md:3xl">Pro. Beyond.</h1>
        <div className="flex items-center gap-4">
          <div className="flex items-center text-blue-400 text-sm">
            <p className="text-xl ml-2">Learn more</p>
            <AiOutlineRight />
          </div>
          <div className="flex items-center text-blue-400 text-sm">
            <p className="text-xl ml-2">Buy</p>
            <AiOutlineRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Iphone14Pro;
