"use client";
import {
  font_Bold_Satoshi,
  font_Regular_MonumentExtended,
  font_Regular_Satoshi,
} from "@/assets/fonts/fonts_export";
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
      className="flex flex-col grow pb-14 w-full rounded-md bg-zinc-900 bg-opacity-60 max-md:mt-10 relative "
      onMouseEnter={() => {
        setIsHovered(true);
        console.log("hovered");
      }}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={
          "justify-center self-end px-1.5 py-1 mr-8 text-xs font-bold leading-3 text-center text-black bg-white rounded-[100px] max-md:mr-2.5 absolute -top-2 " +
          font_Bold_Satoshi.className
        }
      >
        COMING SOON
      </div>
      <div className="flex flex-col px-8 mt-7 max-md:px-5 max-md:max-w-full">
        <h2
          className={
            "text-4xl leading-10 text-white uppercase " +
            font_Regular_MonumentExtended.className
          }
        >
          {title}
        </h2>
        <div
          className={
            "mt-9 text-2xl font-bold leading-7 bg-clip-text bg-gradient-to-r from-[#3D8BFF]  to-[#AB23FF]"
          }
          style={{
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {shortDescription}
        </div>
      </div>
      <div
        className="mt-16 max-w-full aspect-[1.82] w-[423px] max-md:mt-10"
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
          "mt-8 mr-8 text-lg leading-6 text-white max-md:mr-2.5 max-md:max-w-full ml-4 sm:ml-8 " +
          font_Regular_Satoshi.className
        }
      >
        {description}
      </p>
    </div>
  );
};
