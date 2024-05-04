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
    imageUrl: "/images/image1.svg",
    imageAlt: "Creon network image",
  };
  return (
    <section className="flex justify-center items-center  py-20 bg-black ">
      <div className="flex flex-col mt-12 w-full max-w-[1440px] max-md:mt-10 max-md:max-w-full">
        <h1 className="text-7xl text-white uppercase leading-[74.8px] max-md:max-w-full max-md:text-4xl">
          {heroSectionData.title}
        </h1>
        <h2 className="self-end mt-11 text-4xl leading-10 text-right uppercase bg-clip-text max-md:mt-10 max-md:max-w-full">
          {heroSectionData.subtitle}
        </h2>
        <div className="flex gap-5 justify-between mt-24 text-white max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <img
            loading="lazy"
            src={heroSectionData.imageUrl}
            alt={heroSectionData.imageAlt}
            className="w-full aspect-[5] max-md:max-w-full "
          />
          <div className="shrink-0 w-px bg-zinc-900 h-[485px]" />
          <div className="flex flex-col justify-end my-auto w-[40%]">
            <h3 className="text-2xl font-bold leading-7">
              The dynamic community driven business model of the future.
            </h3>
            <p className="mt-7 text-lg leading-6">
              {heroSectionData.description}
            </p>
          </div>
          <div className="shrink-0 w-px bg-zinc-900 h-[485px]" />
        </div>
      </div>
    </section>
  );
}
