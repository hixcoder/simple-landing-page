"use client";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ReactNode, useState } from "react";

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
      className={`flex flex-col  pb-4 text-white max-md:max-w-full cursor-pointer `}
      onMouseEnter={() => {
        setIsHovered(true);
        console.log("hovered");
      }}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col pb-8 border-b border-solid border-zinc-900 max-md:max-w-full">
        <div className="flex gap-5 justify-between pr-5 w-full text-2xl font-bold leading-7 max-md:flex-wrap max-md:max-w-full">
          <div
            className="flex gap-5 justify-between items-start"
            onClick={() => {
              setIsExpanded((prev) => !prev);
              console.log("clicked" + isExpanded);
            }}
          >
            <img
              loading="lazy"
              src={isExpanded ? props.clickedImg : props.img}
              alt=""
              className="shrink-0 max-w-full aspect-[0.88] w-[100px] "
              style={{
                // opacity: isExpanded ? 0.5 : 1,
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
              // onChange={(e, expanded) => {
              //   setIsExpanded(expanded);
              // }}
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
                  className={`my-auto w-[366px]`}
                  style={{
                    color: isHovered && !isExpanded ? "#3B82F6" : "white",
                    transition: "color 0.5s",
                  }}
                >
                  {props.title}
                </h3>
              </AccordionSummary>
              <AccordionDetails>
                <p className="self-end text-lg leading-6 font-light w-[422px] max-md:max-w-full">
                  {props.content}
                </p>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
