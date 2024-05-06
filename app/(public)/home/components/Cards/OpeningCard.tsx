import {
  font_Regular_MonumentExtended,
  font_Bold_Satoshi,
} from "../../../../../assets/fonts/fonts_export";

export function OpeningCard() {
  const title =
    "The world's first platform for Tokenizing AI blockchain projects";
  const subtitle =
    "Hold the Creon Pass NFT and earn passive income from AI Tools";
  return (
    <div className=" w-full min-h-screen relative">
      <video
        src={"/videos/main-background-video.mp4"}
        autoPlay
        loop
        muted
        className=" h-full  w-full absolute inset-0 object-cover z-0"
      />
      <div className={`absolute inset-0  h-full  w-full`}>
        <div className="flex flex-col justify-between h-screen ">
          <div className="bg-transparent w-0 h-[20rem]"></div>
          <div>
            <div className="p-[10%] relative z-10">
              <h1
                className={
                  "text-white uppercase text-xl md:text-2xl lg:text-4xl xl:text-5xl 2xl:text-7xl " +
                  font_Regular_MonumentExtended.className
                }
              >
                {title}
              </h1>
              <div className="flex justify-center self-start mt-[2.25rem] max-w-max max-md:mt-[1.25rem]">
                <p
                  className={
                    "text-md md:text-lg lg:text-xl  xl:text-2xl  font-bold p-[1rem] max-md:max-w-full bg-gradient-to-r from-[#3D8BFF] to-[#AB23FF] border-t border-b border-solid border-gradient-r-blue-500 " +
                    font_Bold_Satoshi.className
                  }
                  style={{
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    borderImage: "linear-gradient(to right, #0468ff, #7e06c9)",
                    borderImageSlice: "1",
                  }}
                >
                  {subtitle}
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-t from-black via-[#0468ff] to-[#7e06c9] absolute inset-0 h-full opacity-40 "></div>
            <div className=" bg-gradient-to-t from-black via-transparent to-transparent absolute inset-0 h-full "></div>
            <div className="bg-black absolute inset-0 h-full opacity-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
