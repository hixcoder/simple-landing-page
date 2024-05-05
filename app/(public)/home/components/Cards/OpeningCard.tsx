import localFont from "next/font/local";
import {
  font_Regular_MonumentExtended,
  font_Bold_Satoshi,
} from "../../../../../assets/fonts/fonts_export";

export function OpeningCard() {
  const title =
    "The world's first platform for Tokenizing AI blockchain projects";
  const subtitle =
    "Hold the Creon Pass NFT and earn passive income from AI Tools";
  return (
    <div
      className={`absolute inset-0 flex flex-col justify-between h-full  ${font_Regular_MonumentExtended.className}`}
    >
      <div className="bg-transparent"></div>
      <div>
        <div className="p-[10%] relative z-10 ">
          <h1 className="text-7xl text-white uppercase leading-[75px] max-md:max-w-full max-md:text-4xl max-md:leading-[49px]">
            {title}
          </h1>
          <div className="flex justify-center self-start mt-14 max-w-max max-md:mt-10">
            <p
              className={
                "text-2xl font-bold leading-7 p-4 max-md:max-w-full bg-gradient-to-r from-[#3D8BFF] to-[#AB23FF] border-t border-b border-solid border-gradient-r-blue-500 " +
                font_Bold_Satoshi.className
              }
              style={{
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                borderImage: "linear-gradient(to right, #0468ff, #7e06c9)",
                borderImageSlice: "1",
              }}
            >
              {subtitle}
            </p>
          </div>
        </div>
        <div className="bg-gradient-to-t from-black via-[#0468ff] to-[#7e06c9] absolute inset-0 h-full opacity-40 "></div>
        <div className=" bg-gradient-to-t from-black via-transparent to-transparent absolute inset-0 h-full "></div>
        <div className="bg-black absolute inset-0 h-full opacity-10"></div>
      </div>
    </div>
  );
}
