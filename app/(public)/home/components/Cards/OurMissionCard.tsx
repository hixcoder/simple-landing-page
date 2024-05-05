import { Span } from "next/dist/trace";
import { OurMissionItem } from "../OurMissionItem";

export function OurMissionCard() {
  const ext2 = "/images/image2.svg";
  const data = [
    {
      img: "/images/mission1-1.svg",
      clickedImg: "/images/mission1-2.svg",
      title: (
        <span>
          Profitability and <br /> Growth
        </span>
      ),
      content: (
        <span>
          At Creon, we handpick cutting-edge AI projects and offer our community
          and token holders early access and investment opportunities. Our
          community actively contributes to the growth and profitability of
          these projects, creating a dynamic ecosystem of innovation and shared
          success.
        </span>
      ),
    },

    {
      img: "/images/mission2-1.svg",
      clickedImg: "/images/mission2-2.svg",
      title: (
        <span>
          Transparent & Fair Decentralized <br /> Earnings
        </span>
      ),
      content: (
        <span>
          We believe that the future of AI blockchain projects lies in the hands
          of the community. By prioritizing our community, we democratize
          profits and empower our members to shape the future of the industry.
        </span>
      ),
    },
    {
      img: "/images/mission3-1.svg",
      clickedImg: "/images/mission3-2.svg",
      title: (
        <span>
          Launching the
          <br /> future
        </span>
      ),
      content: (
        <span>
          Creon is committed to fostering innovation and collaboration in the AI
          blockchain space. By connecting projects with our community, we
          facilitate the exchange of ideas and resources, driving the industry
          forward.
        </span>
      ),
    },

    {
      img: "/images/mission4-1.svg",
      clickedImg: "/images/mission4-2.svg",
      title: (
        <span>
          Limitless Possibilities of AI
          <br /> & Crypto
        </span>
      ),
      content: (
        <span>
          Transparency and trust are at the core of Creon’s values. We are
          committed to providing our community with access to the information
          and resources they need to make informed decisions and build trust in
          the projects we support.
        </span>
      ),
    },
  ];
  return (
    <section className="flex flex-col items-center pt-20 bg-black">
      <div className="flex flex-col mt-9 w-full max-w-[1440px] max-md:max-w-full">
        <div className="z-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[59%] max-md:ml-0 max-md:w-full ">
              <h2 className="w-full text-4xl leading-10 text-white uppercase bg-clip-text bg-[linear-gradient(90deg,#3D8BFF_0%,#AB23FF_100%)] max-md:mt-10 max-md:max-w-full">
                Our vision is to support the innovation of AI blockchain
                projects while prioritizing communities and democratizing
                profits
              </h2>
              <img
                loading="lazy"
                src={ext2}
                alt="ff"
                className="w-full h-auto max-w-[1321px] aspect-w-24 aspect-h-10 max-md:max-w-full"
              />
            </div>
            <div className="flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full">
              {data.map((item, index) => {
                return (
                  <OurMissionItem
                    key={index}
                    title={item.title}
                    content={item.content}
                    img={item.img}
                    clickedImg={item.clickedImg}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
