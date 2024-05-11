"use client";
import {
  font_Bold_Satoshi,
  font_Regular_MonumentExtended,
  font_Regular_Satoshi,
} from "@/utils/fonts_export";
import * as React from "react";

interface ComingSoonItemProps {
  title: string;
  description: string;
  imageUrl: string;
  altText: string;
  shortDescription?: string;
}

export const ComingSoonItem: React.FC<ComingSoonItemProps> = ({
  title,
  description,
  imageUrl,
  altText,
  shortDescription,
}) => {
  const [isHovered, setIsHovered] = React.useState<boolean>(false);
  return (
    <div
      className="flex flex-col justify-between grow w-[80%] lg:w-fit 
      lg:pb-14   rounded-md lg:rounded-lg
       bg-zinc-900 bg-opacity-60 relative gap mt-2 lg:mt-0 mx-auto  lg:mx-2 py-4 lg:min-h-[50rem] "
      onMouseEnter={() => {
        setIsHovered(true);
        console.log("hovered");
      }}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={
          `justify-center self-end px-1.5 py-1 mr-8 font-bold text-center
          text-xs xl:text-sm xl:text-md
           text-black bg-white rounded-full max-md:mr-2.5 absolute -top-2 ` +
          font_Bold_Satoshi.className
        }
      >
        COMING SOON
      </div>
      {/* title */}
      <div className="flex flex-col px-4 mt-4 xl:px-8 xl:mt-7 max-md:px-5 max-md:max-w-full">
        <h2
          className={
            "text-2xl xl:text-3xl leading-10 text-white uppercase " +
            font_Regular_MonumentExtended.className
          }
        >
          {title}
        </h2>
        {/* short description */}
        <div
          className={
            "xl:mt-9 mt-4 text-lg xl:text-2xl font-bold leading-7 bg-clip-text bg-gradient-to-r from-[#3D8BFF]  to-[#AB23FF]"
          }
          style={{
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          {shortDescription}
        </div>
      </div>
      {/* image */}
      <div
        className="xl:mt-16 mt-8  max-w-full aspect-[1.82] w-[80%] max-md:mt-10"
        style={{
          overflow: "hidden",
        }}
      >
        <img
          src={imageUrl}
          alt={altText}
          className="object-cover w-full h-full transition-transform duration-300 rounded-r-md"
          style={{
            transform: isHovered ? "scale(1.2)" : "none",
          }}
        />
      </div>
      {/* description */}
      <p
        className={
          "mt-8 mr-8 text-sm xl:text-lg leading-6 text-white ml-2 lg:ml-8 " +
          font_Regular_Satoshi.className
        }
        // style={{
        //   display: "-webkit-box",
        //   WebkitLineClamp: 6,
        //   WebkitBoxOrient: "vertical",
        // }}
      >
        {description}
      </p>
    </div>
  );
};
