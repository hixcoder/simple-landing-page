import {
  font_Regular_MonumentExtended,
  font_Regular_Satoshi,
} from "@/assets/fonts/fonts_export";

export function BlogCard() {
  const contentBlockData = [
    {
      title: "AI Prospects, Market Size, and Development Pace",
      content:
        "The AI market is one of the most dynamically growing areas of technology. According to reports, the global AI market is expected to reach $190.61 billion by 2025, with a CAGR (Compound Annual Growth Rate) of 36.6%. The key drivers behind this growth include advancements in machine learning, increasing demand for big data analytics, and growing adoption of AI technology across various sectors such as healthcare, finance, and transportation.",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/6d6338cba53dce5afaf363d672ba9ead3c7a4055e2cc22acd36a571685192dd2?apiKey=15699259d57541149d8b9fecd26f59f3&",
    },
    {
      title: "AI Tools and Market",
      content:
        "AI tools refer to the technologies and software that enable computer systems to perform tasks usually requiring human intellect. The market for these tools is dynamic and diverse, encompassing areas such as Natural Language Processing (NLP), machine learning, computer vision, and robotics. With a wide range of applications, AI tools are becoming increasingly indispensable in many sectors, from healthcare to finance, retail, manufacturing, and many others.",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/6d6338cba53dce5afaf363d672ba9ead3c7a4055e2cc22acd36a571685192dd2?apiKey=15699259d57541149d8b9fecd26f59f3&",
    },
    {
      title: "AI, Crypto, and NFT Market",
      content:
        "Artificial Intelligence and blockchain technology are two groundbreaking areas leading new technological innovations. The combination of these two technologies creates intriguing possibilities. For instance, Non-Fungible Tokens (NFTs) can leverage AI to create unique digital artworks or to provide exclusive AI-based services. Meanwhile, cryptocurrencies can benefit from AI by improving security mechanisms, transaction efficiency, and service personalization. Such combination brings substantial benefits for both developers and users, paving the way for unprecedented possibilities.",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/6d6338cba53dce5afaf363d672ba9ead3c7a4055e2cc22acd36a571685192dd2?apiKey=15699259d57541149d8b9fecd26f59f3&",
    },
  ];

  return (
    <div
      className="flex flex-col md:px-[10%] pb-8 relative min-h-screen"
      // style={{
      //   backgroundImage: `url(/images/blog_bg.webp)`,
      // }}
    >
      <video
        src={"/videos/roadmap-video.mp4"}
        autoPlay
        loop
        muted
        className=" h-full  w-full absolute inset-0 object-cover z-0"
      />
      {/* <div className=" bg-gradient-to-t from-black via-transparent to-transparent absolute inset-0 h-full "></div> */}
      <div className=" bg-gradient-to-t from-transparent via-black to-black absolute inset-0 h-32 top-0"></div>
      <div className="bg-black absolute inset-0 h-full opacity-50"></div>
      <div className="flex flex-col  w-full z-10">
        {contentBlockData.map((block, index) => (
          <div
            key={index}
            className="pl-10 mt-5 justify-center items-center w-[80%] lg:w-full rounded-lg bg-zinc-900 bg-opacity-60 max-md:pl-5 max-md:max-w-full"
          >
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 ">
              <div className="flex flex-col w-[50%] xl:w-[67%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col self-stretch my-auto text-white max-md:mt-10 max-md:max-w-full">
                  <h2
                    className={
                      "text-xl xl:text-4xl  uppercase max-md:max-w-full " +
                      font_Regular_MonumentExtended.className
                    }
                  >
                    {block.title}
                  </h2>
                  <p
                    className={
                      "mt-4 text-lg leading-6 max-md:max-w-full " +
                      font_Regular_Satoshi.className
                    }
                    style={{
                      // max 2lines
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {block.content}
                  </p>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-fit  xl:w-[33%] max-md:ml-0 max-md:w-full">
                {block.imageUrl ? (
                  <img
                    loading="lazy"
                    src={block.imageUrl}
                    alt=""
                    className="grow w-full  max-md:mt-10 max-md:max-w-full rounded-r-lg"
                  />
                ) : (
                  <div className="shrink-0 mx-auto max-w-full mix-blend-overlay h-[302px] w-[453px] max-md:mt-10" />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
