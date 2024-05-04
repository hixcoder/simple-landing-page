import NavBar from "@/components/header/NavBar";
import Image from "next/image";
import Home from "./(public)/home/page";

export default function Main() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <NavBar />
      <Home />
      {/* <div className="container mx-auto px-12 py-4 mt-24 ">
        <div className="flex flex-auto gap-5 justify-between max-md:flex-wrap max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5ae5dc41a1d58b36c8487a7f0cc6f1f6cdb5fe8815c0b99fba1c40a40d62b9bb?apiKey=15699259d57541149d8b9fecd26f59f3&"
            className="shrink-0 my-auto max-w-full aspect-[3.57] w-[140px] cursor-pointer"
          />
          <div className="flex gap-5 max-md:flex-wrap max-md:max-w-full">
            <div className="flex flex-auto gap-5 my-auto max-md:flex-wrap">
              <div className="text-lg text-white">Creon Pass</div>
              <div className="flex gap-1 text-center whitespace-nowrap">
                <div className="text-lg text-white">Token</div>
                <div className="justify-center self-start px-1 pt-0.5 pb-px text-xs text-purple-600 bg-black rounded-[100px]">
                  SOON
                </div>
              </div>
              <div className="flex gap-1 text-center">
                <div className="text-lg text-white">AI Revenue</div>
                <div className="justify-center self-start px-1 pt-0.5 pb-px text-xs text-purple-600 whitespace-nowrap bg-black rounded-[100px]">
                  SOON
                </div>
              </div>
              <div className="flex gap-1 text-center">
                <div className="text-lg text-white">AI Launchpad</div>
                <div className="justify-center self-start px-1 pt-0.5 pb-px text-xs text-purple-600 whitespace-nowrap bg-black rounded-[100px]">
                  SOON
                </div>
              </div>
            </div>
            <div className="justify-center px-8 py-4 text-lg text-center text-white whitespace-nowrap rounded-md border-2 border-white border-solid max-md:px-5">
              Connect
            </div>
          </div>
        </div>
      </div> */}
    </main>
  );
}
