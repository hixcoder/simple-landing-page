import {
  font_Bold_Satoshi,
  font_Regular_MonumentExtended,
  font_Regular_Satoshi,
} from "@/assets/fonts/fonts_export";

export function ProfitingThroughCard() {
  interface HeroSectionProps {
    title: string;
    subtitle: string;
    description: string;
    imageUrl: string;
    imageAlt: string;
  }

  const heroSectionData: HeroSectionProps = {
    title: "Profiting Through",
    subtitle: "AI Innovation & Decentralization",
    description:
      "At Creon, we blend the power of AI tools with the dynamic crypto and NFT markets, utilizing an innovative business model to drive profitability. This approach empowers our community, as our NFT and token holders directly benefit from the growth and prosperity of the Creon network, creating a win-win scenario for both our community and for the projects we launch.",
    imageUrl: "/images/image1.webp",
    imageAlt: "Creon network image",
  };
  return (
    <section className="flex flex-col justify-center items-center py-[3.125rem] bg-black  mt-[3rem] ">
      <div className=" w-[60%] md:w-[40%] lg:w-[68%] xl:w-[100%]">
        <h1
          className={
            "text-white uppercase xl:leading-[4.6875rem]  text-lg lg:text-4xl  max-md:max-w-full  xl:text-5xl 2xl:text-7xl max-md:text-4xl " +
            font_Regular_MonumentExtended.className
          }
        >
          {heroSectionData.title}
        </h1>
        <h2
          className={
            "self-end mt-[1.75rem] text-xl lg:text-4xl leading-10 text-right uppercase max-md:mt-[1.25rem] max-md:max-w-full bg-gradient-to-r from-[#3D8BFF] via-[#AB23FF] to-[#AB23FF] " +
            font_Regular_MonumentExtended.className
          }
          style={{
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {heroSectionData.subtitle}
        </h2>
      </div>
      <div className="flex flex-col mt-[3rem]  w-full md:w-[68%] xl:w-[100%] max-w-[90rem] max-md:mt-[1.25rem] max-md:max-w-full">
        <div className="flex flex-col lg:flex-row justify-center gap-[0.3125rem] lg:justify-between mt-[3.75rem] text-white max-md:flex-wrap max-md:mt-[1.25rem] max-md:max-w-full">
          <img
            loading="lazy"
            src={heroSectionData.imageUrl}
            alt={heroSectionData.imageAlt}
            className="w-[80%] lg:w-[70%] h-[20.3125rem]"
          />
          <div className="flex flex-row w-[80%] lg:w-[70%]  justify-around">
            <div className="shrink-0 w-[1px] bg-zinc-900 h-[30.3125rem]" />
            <div className="flex flex-col justify-end my-auto w-[80%] lg:w-[50%]">
              <h3
                className={
                  "text-2xl font-bold leading-7 " + font_Bold_Satoshi.className
                }
              >
                The dynamic community driven business model of the future.
              </h3>
              <p
                className={
                  "mt-[1.75rem] text-lg leading-6 " +
                  font_Regular_Satoshi.className
                }
              >
                {heroSectionData.description}
              </p>
            </div>
            <div className="shrink-0 w-[1px] bg-zinc-900 h-[30.3125rem]" />
          </div>
        </div>
      </div>
    </section>
  );
}
