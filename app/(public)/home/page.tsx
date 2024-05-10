// import videoBg from "@public/videos/main-background-video.mp4";

import { BlogCard } from "./components/Cards/BlogCard";
import { ComingSoonCard } from "./components/Cards/ComingSoonCard";
import { OpeningCard } from "./components/Cards/OpeningCard";
import { CreonPassCard } from "./components/Cards/CreonPassCard";
import { OurMissionCard } from "./components/Cards/OurMissionCard";
import { ProfitingThroughCard } from "./components/Cards/ProfitingThroughCard";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  w-screen">
      <OpeningCard />
      <div className="flex flex-col items-center justify-center w-full">
        <div className="lg:px-[10%] ">
          <CreonPassCard />
          <ProfitingThroughCard />
          <OurMissionCard />
          <ComingSoonCard />
        </div>
        <BlogCard />
      </div>
    </div>
  );
}
