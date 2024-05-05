import { ComingSoonItem } from "../ComingSoonItem";

export function ComingSoonCard() {
  const tokenCardData = [
    {
      title: "token",
      description:
        "Set to debut in the latter half of 2024, the CREON token serves as the pioneering link between cutting-edge AI initiatives and blockchain technology. This innovative token provides NFT and token holders with unparalleled access to our Launchpad, AI tools, and exclusive pre-launch investment prospects.",
      shortDescription: "The Gateway token to the world of AI",
      imageUrl: "/images/coming1.webp",
      altText: "Token image",
    },
    {
      title: "revenue",
      shortDescription: "Driving income and growth through decentralization",
      description:
        "CREON NFT and token holders are integral participants in the profit-sharing from our launched AI-based enterprises. We support the development of AI tools, ensuring a steady revenue stream, all while allowing early investors to enjoy the benefits of their support.",
      imageUrl: "/images/coming2.webp",
      altText: "Token image",
    },
    {
      title: "launchpad",
      shortDescription: "Driving the future of AI Innovation",
      description:
        "The Creon AI Launchpad, an essential component of our initiative, represents a groundbreaking opportunity in the realm of AI and blockchain. It provides the first known platform for acquiring allocations in tokenized AI projects, offering our community of NFT and CREON token holders early access to innovative and promising AI endeavors.",
      imageUrl: "/images/coming3.webp",
      altText: "Token image",
    },
  ];

  return (
    <div className="flex justify-center items-center  py-20 bg-black ">
      <div className="mt-16 w-full max-w-[1440px] max-md:mt-10 max-md:max-w-full">
        <div className="flex  gap-2 xl:gap-5  max-md:gap-0 justify-center mx-auto ">
          {tokenCardData.map((card, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index > 0 ? "lg:ml-5" : ""
              } w-[20%] lg:w-[33%] max-md:ml-0 max-md:w-full `}
            >
              <ComingSoonItem {...card} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
