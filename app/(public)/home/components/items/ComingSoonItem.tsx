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
      className="flex flex-col justify-between grow w-[80%] lg:w-fit lg:pb-14 mx-auto  lg:mx-0 2xl:w-full rounded-md
       bg-zinc-900 bg-opacity-60 relative gap mt-6 lg:mt-0"
      onMouseEnter={() => {
        setIsHovered(true);
        console.log("hovered");
      }}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={
          "justify-center self-end px-1.5 py-1 mr-8 text-xs font-bold text-center text-black bg-white rounded-[100px] max-md:mr-2.5 absolute -top-2 " +
          font_Bold_Satoshi.className
        }
      >
        COMING SOON
      </div>
      <div className="flex flex-col px-4 mt-4 xl:px-8 xl:mt-7 max-md:px-5 max-md:max-w-full">
        <h2
          className={
            "text-2xl xl:text-4xl leading-10 text-white uppercase " +
            font_Regular_MonumentExtended.className
          }
        >
          {title}
        </h2>
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
      <div
        className="xl:mt-16 mt-8  max-w-full aspect-[1.82] w-[423px] max-md:mt-10"
        style={{
          overflow: "hidden",
        }}
      >
        <img
          src={imageUrl}
          alt={altText}
          className="object-cover w-full h-full transition-transform duration-300"
          style={{
            transform: isHovered ? "scale(1.2)" : "none",
          }}
        />
      </div>
      <p
        className={
          "mt-8 mr-8 text-lg leading-6 text-white max-md:mr-2.5 max-md:max-w-full ml-2 xl:ml-8 " +
          font_Regular_Satoshi.className
        }
      >
        {description}
      </p>
    </div>
  );
};
