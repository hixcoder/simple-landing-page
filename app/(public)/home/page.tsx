// import videoBg from "@public/videos/main-background-video.mp4";

import { BlogCard } from "./components/Cards/BlogCard";
import { ComingSoonCard } from "./components/Cards/ComingSoonCard";
import { OpeningCard } from "./components/Cards/OpeningCard";
import { CreonPassCard } from "./components/Cards/CreonPassCard";
import { OurMissionCard } from "./components/Cards/OurMissionCard";
import { ProfitingThroughCard } from "./components/Cards/ProfitingThroughCard";

export default function Home() {
  return (
    <div
      className="flex flex-col items-center justify-center 
    "
    >
      <div
        className="min-h-screen w-full
      overflow-hidden relative"
      >
        <video
          src={"/videos/main-background-video.mp4"}
          autoPlay
          loop
          muted
          className="h-screen "
        />
        <OpeningCard />
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen ">
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
