// import videoBg from "@public/videos/main-background-video.mp4";

import { BlogCard } from "./components/Cards/BlogCard";
import { ComingSoonCard } from "./components/Cards/ComingSoonCard";
import { OpeningCard } from "./components/Cards/OpeningCard";
import { CreonPassCard } from "./components/Cards/CreonPassCard";
import { OurMissionCard } from "./components/Cards/OurMissionCard";
import { ProfitingThroughCard } from "./components/Cards/ProfitingThroughCard";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <video
        src={"/videos/main-background-video.mp4"}
        autoPlay
        loop
        muted
        className="h-screen"
      />
      <div className="flex flex-col items-center justify-center min-h-screen ">
        <div className="px-[10%]">
          <OpeningCard />
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
