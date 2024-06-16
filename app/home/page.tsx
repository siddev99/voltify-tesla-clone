"use client";
import Dropdown from "@/components/Dropdown";
import React, { use, useEffect, useState } from "react";
import { navMenu } from "@/app/_data/Vehicles-Menu";

export default function Home() {
  const [menu, showMenu] = useState(true);
  const [deskMenu, hideDeskMenu] = useState(false);
  const [homeContent, showHomeContent] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  function handleshowMenu(val: boolean): void {
    showMenu(false);
    hideDeskMenu(val);
    showHomeContent(false);
  }

  function closeMobileMenu(val: boolean): void {
    hideDeskMenu(val);
    showMenu(true);
  }
  const closeMMenu = (forceClose = false) => {
    if (forceClose || window.innerWidth >= 500) {
      showMenu(false);
      hideDeskMenu(false);
    }
    if (forceClose || window.innerWidth <= 500) {
      showMenu(true);
      hideDeskMenu(false);
    }
  };

  useEffect(() => {
    const handleResize = () => closeMMenu(false);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  function backHandler(): void {
    hideDeskMenu(true);
    showHomeContent(false);
  }

  function mobileView(item: any) {
    showHomeContent(true);
    hideDeskMenu(false);
    setHoveredItem(item.name);
  }

  return (
    <nav
      className={`bg-red-400 relative   flex h-auto justify-center max-[500px]:justify-evenly `}
    >
      <div
        className={`absolute w-full h-auto  bg-purple-400 shadow-xl min-[500px]:transition-opacity min-[500px]:duration-1000 ${
          homeContent ? "opacity-100" : "opacity-0 pointer-events-none hidden"
        }`}
      >
        <div className="min-[500px]:hidden bg-red-600 absolute flex justify-evenly  w-full">
          <button className="text-white" onClick={backHandler}>
            Back
          </button>
          <button
            className="text-white top-0   "
            onClick={() => showHomeContent(false)}
          >
            Close
          </button>
        </div>
        <div className="text-black bg-red-100 ">
          {<Dropdown text={hoveredItem!} />}
        </div>
      </div>
      <div
        className={`absolute min-[500px]:flex bg-yellow-400 w-fit h-auto flex gap-6 p-3  ${
          deskMenu
            ? "max-[500px]:flex max-[500px]:flex-col max-[500px]:w-full p-5 flex items-start"
            : "hidden"
        } `}
      >
        {navMenu.map((item) => (
          <button key={item.id} onClick={() => mobileView(item)}>
            {item.name}
          </button>
        ))}
      </div>

      {menu && (
        <button
          className={`min-[500px]:hidden absolute`}
          onClick={() => handleshowMenu(true)}
        >
          Menu
        </button>
      )}
      {deskMenu && (
        <button
          className={`min-[500px]:hidden absolute`}
          onClick={() => closeMobileMenu(false)}
        >
          X
        </button>
      )}
    </nav>
  );
}
