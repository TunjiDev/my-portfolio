"use client";

import React, { useState } from "react";
import Link from "next/link";

import { useAppContext } from "@/app/context/AppContext";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import HamburgerIcon from "../../../public/icons/hamburger";

function Nav() {
  const { aboutRef, projectsRef, contactRef } = useAppContext();
  const [bgColor, setBgColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setBgColor(true);
    } else {
      setBgColor(false);
    }
  };

  typeof window !== "undefined" && window.addEventListener("scroll", changeColor);

  const aboutClickhandler = () => {
    aboutRef.current?.scrollIntoView();
  };

  const projectsClickhandler = () => {
    projectsRef.current?.scrollIntoView();
  };

  const contactClickhandler = () => {
    contactRef.current?.scrollIntoView();
  };

  return (
    <>
      <nav
        className={
          bgColor
            ? "hidden lg:flex lg:justify-between lg:items-center py-3 font-medium lg:fixed lg:z-10 lg:left-0 lg:right-0 lg:top-0 max-w-[1200px] lg:ml-auto lg:mr-auto lg:bg-black lg:bg-opacity-50 lg:transition-all lg:duration-500"
            : "hidden lg:flex lg:justify-between lg:items-center py-3 font-medium lg:fixed lg:z-10 lg:left-0 lg:right-0 lg:top-0 max-w-[1200px] lg:ml-auto lg:mr-auto"
        }
      >
        <div className="text-2xl hover:text-primary">
          <Link href={"/"}>Portfolio</Link>
        </div>

        <ul className="flex justify-between items-center w-96">
          <li className="hover:text-primary">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-primary cursor-pointer" onClick={aboutClickhandler}>
            About
          </li>
          <li className="hover:text-primary cursor-pointer" onClick={projectsClickhandler}>
            Projects
          </li>
          <li className="hover:text-primary cursor-pointer" onClick={contactClickhandler}>
            Contact
          </li>
        </ul>
      </nav>

      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <HamburgerIcon />
          </SheetTrigger>
          <SheetContent side={"right"} className="w-full sm:w-[540px]">
            <nav className="flex flex-col items-center py-3 font-medium h-full">
              <div className="text-2xl hover:text-primary">
                <SheetClose asChild>
                  <Link href={"/"}>Portfolio</Link>
                </SheetClose>
              </div>

              <ul className="flex flex-col justify-evenly items-center h-full text-2xl">
                <SheetClose asChild>
                  <li className="hover:text-primary">
                    <Link href="/">Home</Link>
                  </li>
                </SheetClose>
                <SheetClose asChild>
                  <li className="hover:text-primary cursor-pointer" onClick={aboutClickhandler}>
                    About
                  </li>
                </SheetClose>
                <SheetClose asChild>
                  <li className="hover:text-primary cursor-pointer" onClick={projectsClickhandler}>
                    Projects
                  </li>
                </SheetClose>
                <SheetClose asChild>
                  <li className="hover:text-primary cursor-pointer" onClick={contactClickhandler}>
                    Contact
                  </li>
                </SheetClose>
              </ul>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}

export default Nav;
