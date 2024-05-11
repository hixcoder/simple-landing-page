"use client";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ReactNode, useState } from "react";
import { font_Bold_Satoshi, font_Regular_Satoshi } from "@/utils/fonts_export";

export function OurMissionItem(props: {
  img: string;
  clickedImg: string;
  title: ReactNode;
  content: ReactNode;
}) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  return (
    <div
      className={`flex flex-row align-top
       justify-center items-start text-white cursor-pointer w-full  px-4 mx-auto lg:mx-0 lg:px-0   mt-2 lg:mt-4 lg:ml-4 sm:gap-2 xl:gap-5 pb-4`}
      onMouseEnter={() => {
        setIsHovered(true);
        console.log("hovered");
      }}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => {
        setIsExpanded((prev) => !prev);
        console.log("clicked" + isExpanded);
      }}
    >
      <img
        loading="lazy"
        src={isExpanded ? props.clickedImg : props.img}
        alt=""
        className="shrink-0 aspect-[0.88] lg:w-[6rem]  w-[4rem]"
        style={{
          transition: "opacity 0.5s ease-in-out",
        }}
      />
      <Accordion
        expanded={isExpanded}
        sx={{
          backgroundColor: "black",
          color: "white",
          display: "flex",
          justifyItems: "space-between",
          width: "100%",
          // backgroundColor: "red",
          flexDirection: "column",
          justifyContent: "top",
          alignItems: "space-between",
        }}
      >
        <AccordionSummary
          sx={{
            py: 0,
          }}
          expandIcon={
            <ExpandMoreIcon
              sx={{
                my: 0,
                color: isHovered && !isExpanded ? "#3B82F6" : "white",
                transition: "color 0.5s",
              }}
            />
          }
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <h3
            className={`my-auto  ` + font_Bold_Satoshi.className}
            style={{
              color: isHovered && !isExpanded ? "#3B82F6" : "white",
              transition: "color 0.5s",
            }}
          >
            {props.title}
          </h3>
        </AccordionSummary>
        <AccordionDetails>
          <p
            className={
              "self-end text-sm md:text-lg leading-6 font-light cursor-text " +
              font_Regular_Satoshi.className
            }
          >
            {props.content}
          </p>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
