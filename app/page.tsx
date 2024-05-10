import { font_Bold_Satoshi } from "@/utils/fonts_export";
import Footer from "@/components/Footer";
import NavBar from "@/components/header/NavBar";
import Home from "./(public)/home/page";

export default function Main() {
  return (
    <main className="flex flex-col bg-black">
      <NavBar className={font_Bold_Satoshi.className} />
      <Home />
      <Footer />
    </main>
  );
}
