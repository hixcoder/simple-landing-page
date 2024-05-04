export function OpeningCard() {
  const title =
    "The world's first platform for Tokenizing AI blockchain projects";
  const subtitle =
    "Hold the Creon Pass NFT and earn passive income from AI Tools";
  return (
    <div className="absolute inset-0 flex flex-col justify-between h-full  ">
      <div className="bg-transparent"></div>
      <div>
        <div className="p-[10%] relative z-10">
          <h1 className="text-7xl text-white uppercase leading-[75px] max-md:max-w-full max-md:text-4xl max-md:leading-[49px]">
            {title}
          </h1>
          <div className="flex justify-center self-start mt-14 max-w-max max-md:mt-10">
            <p className="text-2xl font-bold leading-7 bg-clip-text bg-gradient-to-r from-blue-300 to-purple-800 border-t border-b border-solid border-gradient-r-blue-500 p-4 max-md:max-w-full">
              {subtitle}
            </p>
          </div>
        </div>
        <div className="bg-gradient-to-t from-black via-[#0468ff] to-[#7e06c9] absolute inset-0 h-full opacity-40 "></div>
        <div className=" bg-gradient-to-t from-black via-transparent to-transparent absolute inset-0 h-full "></div>
      </div>
    </div>
  );
}
