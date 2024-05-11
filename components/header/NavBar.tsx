"use client";
import Link from "next/link";
import NavLink from "./NavLink";
import { useEffect, useState } from "react";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import localFont from "next/font/local";
import { FaDiscord } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { FaTelegramPlane } from "react-icons/fa";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import { Box, Divider, Drawer } from "@mui/material";
export default function NavBar(props: { className?: string }) {
  const navLinks = [
    {
      title: "Creon Pass",
      path: "#",
      isCommingSoon: false,
    },
    {
      title: "Token",
      path: "#",
      isCommingSoon: true,
    },
    {
      title: "AI Revenue",
      path: "#",
      isCommingSoon: true,
    },
    {
      title: "AI Launchpad",
      path: "#",
      isCommingSoon: true,
    },
  ];
  const [navbarOpen, setNavbarOpen] = useState(false);

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      // if scroll down hide the navbar
      setShow(false);
    } else {
      // if scroll up show the navbar
      setShow(true);
    }

    // remember current page location to use in the next move
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    // cleanup function
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  // const myFont2 = localFont({
  //   src: "../fonts/Satoshi-Bold.woff2",
  //   display: "swap",
  // });
  const toggleDrawer = (newOpen: boolean) => () => {
    setNavbarOpen(newOpen);
  };
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
    <nav
      className={`active ${props.className}  ${
        show
          ? "fixed top-0 left-0 right-0 z-50 bg-transparent transition-all duration-300 ease-in-out"
          : "hidden"
      }`}
    >
      <div className="flex flex-wrap items-center justify-between mx-auto p-8">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl text-white font-semibold"
        >
          <img
            className="h-8 mr-2 min-[1024px]:h-10"
            src="/images/Logo.webp"
            alt="logo"
          />
        </Link>
        <div className="mobile-menu block min-[1024px]:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center text-slate-200 px-2 py-1 border rounded border-slate-200 hover:text-white hover:border-white"
            >
              <MenuRoundedIcon className="h-8 w-8" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center text-slate-200 px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white"
            >
              <ClearRoundedIcon className="h-5 w-5" />
            </button>
          )}
        </div>

        <div className="menu hidden min-[1024px]:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 justify-center items-center">
            {navLinks.map((link, index) => (
              <li key={"link-" + index}>
                <NavLink
                  href={link.path}
                  title={link.title}
                  isComingSoon={link.isCommingSoon}
                />
              </li>
            ))}
            <li>
              <div
                className="justify-center px-8 py-2 text-lg text-center 
              hover:bg-blue-600 transition-all duration-300 ease-in-out
              
              cursor-pointer text-white whitespace-nowrap rounded-md border-2 border-white border-solid max-md:px-5"
              >
                Connect
              </div>
            </li>
          </ul>
        </div>
      </div>
      <Drawer
        anchor="right"
        open={navbarOpen}
        onClose={toggleDrawer(false)}
        sx={{
          " & .MuiDrawer-paper": {
            minWidth: "50%",
            width: "fit-content",
            color: "white",
            bgcolor: "black",
          },
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
            py: 4,
          }}
          role="presentation"
          onClick={toggleDrawer(false)}
        >
          <ul className="flex  gap-2 p-0 flex-col space-x-8  justify-end items-end">
            <li className="flex flex-row">
              <div
                className="justify-center items-center px-8 py-2
              hover:bg-blue-600 transition-all duration-300 ease-in-out
               mb-4 text-lg text-center ml-4 cursor-pointer text-white whitespace-nowrap rounded-md border-2 border-white border-solid max-md:px-5"
              >
                Connect
              </div>
              <div
                className="justify-center mx-4 py-1  px-4 mb-4 text-lg text-center  cursor-pointer  whitespace-nowrap
               rounded-md 
                border-solid max-md:px-5 border-4 border-[#3D8BFF] 
                bg-[#3D8BFF] hover:bg-white text-white hover:text-[#3D8BFF] transition-all duration-300 ease-in-out"
              >
                <ClearRoundedIcon className="h-8 w-8 " />
              </div>
            </li>
            {navLinks.map((link, index) => (
              <li className="flex flex-col items-end" key={"link-" + index}>
                <div className="pr-8">
                  <NavLink
                    href={link.path}
                    title={link.title}
                    isComingSoon={link.isCommingSoon}
                  />
                </div>
                <Divider
                  sx={{
                    bgcolor: "white",
                    opacity: 0.2,

                    width: "100%",
                    margin: "0.5rem 0",
                  }}
                />
              </li>
            ))}
          </ul>
          <div className="flex flex-row justify-end gap-2 mx-[10%]">
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
        </Box>
      </Drawer>
      {/* {navbarOpen ? <MenuOverlay navLinks={navLinks} /> : null} */}
    </nav>
  );
}
