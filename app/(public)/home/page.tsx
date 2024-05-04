// import videoBg from "@public/videos/main-background-video.mp4";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <video src={"/videos/main-background-video.mp4"} autoPlay loop muted />
    </div>
  );
}
