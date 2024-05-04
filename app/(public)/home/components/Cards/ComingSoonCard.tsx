import { ComingSoonItem } from "../ComingSoonItem";

export function ComingSoonCard() {
  const tokenCardData = [
    {
      title: "token",
      description: "The Gateway token to the world of AI",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/17dda29d54330e827fc6c94660b6fb478010332b882277e1fc61b0cfd99b5f37?apiKey=15699259d57541149d8b9fecd26f59f3&",
      altText: "Token image",
    },
    {
      title: "revenue",
      description: "Driving income and growth through decentralization",
      imageUrl: "",
      altText: "",
    },
    {
      title: "launchpad",
      description: "Driving the future of AI Innovation",
      imageUrl: "",
      altText: "",
    },
  ];

  return (
    <div className="flex justify-center items-center  py-20 bg-black ">
      <div className="mt-16 w-full max-w-[1439px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          {tokenCardData.map((card, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index > 0 ? "ml-5" : ""
              } w-[33%] max-md:ml-0 max-md:w-full`}
            >
              <ComingSoonItem {...card} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
