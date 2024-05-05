import {
  font_Bold_Satoshi,
  font_Regular_Satoshi,
} from "@/assets/fonts/fonts_export";
import { FaDiscord } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
export default function Footer() {
  const data = [
    {
      href: "https://twitter.com/",
      icon: <FaTwitter className="text-md" />,
    },
    {
      href: "https://discord.gg/",
      icon: <FaDiscord className="text-md" />,
    },
    {
      href: "https://telegram.me/",
      icon: <FaTelegramPlane className="text-md" />,
    },
  ];
  return (
    <footer className="footer border border-t-[#33353F] border-x-transparent text-white flex flex-col justify-center  items-center">
      <div className="container py-12 flex flex-row justify-center xl:justify-between items-center ">
        <div className="flex flex-row justify-between ">
          <p
            className={
              "text-white w-96  font-thin " + font_Regular_Satoshi.className
            }
          >
            © Creon 2023. All rights reserved.
          </p>
          <div className="flex flex-row gap-2 mx-[10%]">
            {data.map((item, index) => {
              return (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" border-white border-2 hover:border-[#3D8BFF] rounded-full p-2 hover:bg-[#3D8BFF] text-white transition-all duration-300 ease-in-out"
                >
                  {item.icon}
                </a>
              );
            })}
          </div>
        </div>
        <p className={"text-white " + font_Regular_Satoshi.className}>
          powered by{" "}
          <span className={"text-lg " + font_Bold_Satoshi.className}>
            niftables
          </span>
        </p>
      </div>
    </footer>
  );
}
