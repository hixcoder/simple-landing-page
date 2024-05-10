import {
  font_Regular_MonumentExtended,
  font_Bold_Satoshi,
  font_Regular_Satoshi,
} from "../../../../../utils/fonts_export";

export function CreonPassCard() {
  const benefits = [
    "Pre-launch investment opportunities for upcoming AI projects",
    "Free and early access to Creon built AI projects",
    "Higher allocation limits on the Creon AI Launchpad",
    "Revenue share distribution from Creon built AI projects",
  ];

  return (
    <div className="flex flex-col lg:flex-row justify-center place-items-start w-full p-8">
      <div className="w-full lg:w-1/2 ">
        <h1
          className={
            " text-2xl lg:text-4xl xl:text-5xl 2xl:text-7xl mt-5 lg:mt-10 text-white uppercase  " +
            font_Regular_MonumentExtended.className
          }
        >
          Creon Pass NFT
        </h1>

        <p
          className={
            "my-8 text-lg md:text-xl lg:text-2xl font-bold  bg-gradient-to-r from-[#3D8BFF] to-[#AB23FF] " +
            font_Bold_Satoshi.className
          }
          style={{
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          The Creon NFT pass unlocks access to AI projects, the Creon launchpad,
          and a ticket to generate passive income through AI-driven tools
        </p>
        <div className="lg:hidden lg:ml-5 w-full lg:w-1/2 relative mt-10  p-0 mx-auto">
          <img
            loading="lazy"
            src="/images/card2_phone.png"
            alt="Creon Pass NFT"
            className="h-full w-full object-cover rounded-lg shadow-2xl md:w-[70%]  lg:w-full mx-auto lg:mx-0"
          />
          <div className="absolute inset-0 flex flex-col justify-between h-full p-0">
            <div className="lg:h-16 h-8 bg-gradient-to-b from-black via-black to-transparent"></div>
            <div className="lg:h-16 h-8 bg-gradient-to-t from-black via-black to-transparent"></div>
          </div>
        </div>
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
            "px-16 py-5 mt-10 lg:mt-20 font-bold text-center text-white rounded-lg bg-gradient-to-r from-[#3D8BFF] to-[#AB23FF] w-full lg:w-auto " +
            font_Bold_Satoshi.className
          }
        >
          Buy Creon Pass
        </button>
      </div>
      <div className="hidden lg:block relative lg:ml-5 w-full lg:w-1/2  mt-10  p-0 mx-auto">
        <img
          loading="lazy"
          src="/images/card2_phone.png"
          alt="Creon Pass NFT"
          className="h-full w-full object-cover rounded-lg shadow-2xl md:w-[70%]  lg:w-full mx-auto lg:mx-0"
        />
        <div className="absolute inset-0 flex flex-col justify-between h-full p-0">
          <div className="lg:h-16 h-8 bg-gradient-to-b from-black via-black to-transparent"></div>
          <div className="lg:h-16 h-8 bg-gradient-to-t from-black via-black to-transparent"></div>
        </div>
      </div>
    </div>
  );
}
