import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
export function OurMissionCard() {
  const ext0 = "/images/mission1p1.svg";
  const ext1 = "/images/mission1p1.svg";

  const ext2 = "/images/image2.svg";
  return (
    <section className="flex flex-col items-center pt-20 bg-black">
      <div className="flex flex-col mt-9 w-full max-w-[1440px] max-md:max-w-full">
        <div className="z-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[59%] max-md:ml-0 max-md:w-full ">
              <h2 className="w-full text-4xl leading-10 text-white uppercase bg-clip-text bg-[linear-gradient(90deg,#3D8BFF_0%,#AB23FF_100%)] max-md:mt-10 max-md:max-w-full">
                Our vision is to support the innovation of AI blockchain
                projects while prioritizing communities and democratizing
                profits
              </h2>
              <img
                loading="lazy"
                src={ext2}
                alt="ff"
                className="w-full h-auto max-w-[1321px] aspect-w-24 aspect-h-10 max-md:max-w-full"
              />
            </div>
            <div className="flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow pb-20 text-white max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col pb-8 border-b border-solid border-zinc-900 max-md:max-w-full">
                  <div className="flex gap-5 justify-between pr-5 w-full text-2xl font-bold leading-7 max-md:flex-wrap max-md:max-w-full">
                    <div className="flex gap-5 justify-between items-start">
                      <img
                        loading="lazy"
                        src={ext0}
                        alt=""
                        className="shrink-0 max-w-full aspect-[0.88] w-[100px]"
                      />
                      <Accordion
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
                                color: "white",
                                my: 0,
                              }}
                            />
                          }
                          aria-controls="panel1-content"
                          id="panel1-header"
                        >
                          <h3 className="my-auto w-[366px]">
                            Profitability and <br /> Growth
                          </h3>
                        </AccordionSummary>
                        <AccordionDetails>
                          <p className="self-end text-lg leading-6 w-[422px] max-md:max-w-full">
                            At Creon, we handpick cutting-edge AI projects and
                            offer our community and token holders early access
                            and investment opportunities. Our community actively
                            contributes to the growth and profitability of these
                            projects, creating a dynamic ecosystem of innovation
                            and shared success.
                          </p>
                        </AccordionDetails>
                      </Accordion>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
