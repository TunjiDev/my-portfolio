"use client";

import React, { useState } from "react";

import ToTopIcon from "../../../public/icons/to-top";

function Footer() {
  const [bottom, setBottom] = useState(false);

  const toTop = () => {
    if (window.scrollY >= 150) {
      setBottom(true);
    } else {
      setBottom(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0 });
  };

  typeof window !== "undefined" && window.addEventListener("scroll", toTop);

  return (
    <>
      <div className="bg-[#1a1a1a] py-4 sm:py-8 text-center font-bold text-lg sm:text-xl">
        Created by @TunjiDev. ALL RIGHTS RESERVED.
      </div>

      <div onClick={scrollToTop} className={bottom ? "fixed bottom-0 right-0 cursor-pointer" : "hidden"}>
        <ToTopIcon />
      </div>
    </>
  );
}

export default Footer;
