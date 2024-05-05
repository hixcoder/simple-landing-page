import NavBar from "@/components/header/NavBar";
import Image from "next/image";
import Home from "./(public)/home/page";
import localFont from "next/font/local";
import { font_Bold_Satoshi } from "@/assets/fonts/fonts_export";
// const myFont1 = localFont({
//   src: "../fonts/MonumentExtended-Regular.woff2",
//   display: "swap",
// });

export default function Main() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <NavBar className={font_Bold_Satoshi.className} />
      <Home />
    </main>
  );
}
