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
      className={`flex flex-row align-top   sm:gap-2 xl:gap-5 pb-4
       justify-between items-start text-white cursor-pointer w-[60%] lg:w-[100%]`}
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
        className="shrink-0 aspect-[0.88] xl:w-[6.25rem] lg:w-[5rem] sm:w-[6rem] w-[3rem]"
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
          flexDirection: "column",
          justifyContent: "top",
          alignItems: "center",
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
            className={
              `my-auto w-[16rem] lg:w-[18rem] xl:w-[22.875rem] ` +
              font_Bold_Satoshi.className
            }
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
              "self-end text-lg leading-6 font-light w-[18rem] xl:w-[26.375rem] max-md:max-w-full cursor-text " +
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
