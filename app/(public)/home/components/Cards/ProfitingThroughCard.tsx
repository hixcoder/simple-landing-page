import {
  font_Bold_Satoshi,
  font_Regular_MonumentExtended,
  font_Regular_Satoshi,
} from "@/utils/fonts_export";

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
    <div className="flex flex-col justify-around items-center py-6 lg:py-12 bg-black  mt-[3rem] px-8 min-h-screen">
      <div className="w-full">
        <h1
          className={
            "text-white uppercase text-2xl lg:text-4xl xl:text-5xl 2xl:text-7xl " +
            font_Regular_MonumentExtended.className
          }
        >
          {heroSectionData.title}
        </h1>
        <h2
          className={
            "self-end mt-[1.75rem] text-lg md:text-xl lg:text-2xl text-right uppercase max-md:mt-[1.25rem] max-md:max-w-full bg-gradient-to-r from-[#3D8BFF] via-[#AB23FF] to-[#AB23FF] " +
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
      <div className="flex flex-col justify-center lg:flex-row lg:justify-between mt-6 lg:mt-12 text-white ">
        <img
          loading="lazy"
          src={heroSectionData.imageUrl}
          alt={heroSectionData.imageAlt}
          className="w-full lg:w-[60%] h-[20.3125rem]"
        />
        <div className="flex flex-col justify-end my-auto w-[95%] md:w-[80%] lg:w-1/2  border-x-2 border-zinc-700 px-8 py-16 mx-auto lg:mx-0 lg:ml-12 mt-6 lg:mt-0">
          <h3
            className={
              "sm:lg md:xl lg:text-2xl font-bold leading-7 " +
              font_Bold_Satoshi.className
            }
          >
            The dynamic community driven business model of the future.
          </h3>
          <p
            className={
              "mt-[1.75rem] sm:text-sm md:text-md  lg:text-lg leading-6 " +
              font_Regular_Satoshi.className
            }
          >
            {heroSectionData.description}
          </p>
        </div>
      </div>
    </div>
  );
}
