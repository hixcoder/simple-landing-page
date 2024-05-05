"use client";
import Link from "next/link";
import NavLink from "./NavLink";
import { useEffect, useState } from "react";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import localFont from "next/font/local";

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
          <img className="h-4 mr-2 sm:h-8" src="/images/Logo.webp" alt="logo" />
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center text-slate-200 px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white"
            >
              {/* <Bars3Icon className="h-5 w-5" /> */}
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center text-slate-200 px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white"
            >
              {/* <XMarkIcon className="h-5 w-5" /> */}
            </button>
          )}
        </div>

        <div className="menu hidden md:block md:w-auto" id="navbar">
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
              <div className="justify-center px-8 py-4 text-lg text-center  cursor-pointer text-white whitespace-nowrap rounded-md border-2 border-white border-solid max-md:px-5">
                Connect
              </div>
            </li>
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay navLinks={navLinks} /> : null}
    </nav>
  );
}
