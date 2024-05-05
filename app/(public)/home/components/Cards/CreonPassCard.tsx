import {
  font_Regular_MonumentExtended,
  font_Bold_Satoshi,
  font_Regular_Satoshi,
} from "../../../../../assets/fonts/fonts_export";

export function CreonPassCard() {
  const benefits = [
    "Pre-launch investment opportunities for upcoming AI projects",
    "Free and early access to Creon built AI projects",
    "Higher allocation limits on the Creon AI Launchpad",
    "Revenue share distribution from Creon built AI projects",
  ];

  return (
    <div className="max-w-full">
      <div
        className="flex flex-col lg:flex-row lg:justify-center lg:items-center
       lg:w-full lg:max-w-[1440px]
      "
      >
        <div className="p-8 lg:p-0 mx-auto w-[90%] md:w-[40%] lg:w-[30%] xl:w-[50%]">
          <div className="my-auto">
            <h1
              className={
                " text-2xl lg:text-4xl xl:text-5xl 2xl:text-7xl max-lg:text-4xl mt-10 text-white uppercase  " +
                font_Regular_MonumentExtended.className
              }
            >
              Creon Pass NFT
            </h1>
            <div className="mt-10 h-px bg-zinc-900" />
            <p
              className={
                "my-8 text-xl lg:text-2xl font-bold leading-7 bg-gradient-to-r from-[#3D8BFF] to-[#AB23FF] " +
                font_Bold_Satoshi.className
              }
              style={{
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              The Creon NFT pass unlocks access to AI projects, the Creon
              launchpad, and a ticket to generate passive income through
              AI-driven tools
            </p>
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={
                  "px-5 pt-3 pb-3.5 mt-2.5 text-white rounded-lg border border-solid border-zinc-900 " +
                  font_Regular_Satoshi.className
                }
              >
                {benefit}
              </div>
            ))}
            <button
              className={
                "px-16 py-5 mt-20 font-bold text-center text-white rounded-lg bg-gradient-to-r from-[#3D8BFF] to-[#AB23FF] w-full lg:w-auto " +
                font_Bold_Satoshi.className
              }
            >
              Buy Creon Pass
            </button>
          </div>
        </div>
        <div className="ml-0 lg:ml-5 w-full h-fit lg:w-[40%]  xl:w-[50%] relative mt-10  p-0">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e3a6f9c1bd4b83c1acca279ef5db56af18e690b9fea130dde1126bfc999e487f?apiKey=15699259d57541149d8b9fecd26f59f3&"
            alt="Creon Pass NFT"
            className="h-full w-full object-cover rounded-lg shadow-2xl"
          />
          <div className="absolute inset-0 flex flex-col justify-between h-full p-0">
            <div className="h-16 bg-gradient-to-b from-black via-black to-transparent"></div>
            <div className="h-16 bg-gradient-to-t from-black via-black to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
