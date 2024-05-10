import { ComingSoonItem } from "../items/ComingSoonItem";

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
    <div className="flex flex-col lg:flex-row gap-2 lg:gap-4 lg:py-20 bg-black">
      {tokenCardData.map((card, index) => (
        <div
          key={index}
          className={`flex flex-col gap-2 lg:gap-4 lg:flex-row justify-center items-centermy-auto  w-[100%] lg:w-[40%]`}
        >
          <ComingSoonItem {...card} />
        </div>
      ))}
    </div>
  );
}
