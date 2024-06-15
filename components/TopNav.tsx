"use client";
import React, { useState } from "react";
import { navMenu } from "@/app/_data/Vehicles-Menu";
import Dropdown from "./Dropdown";
import Link from "next/link";

interface Item {
  id: number;
  name: string;
}

interface NavbarProps {
  toggleVisibility: (visibility: boolean) => void;
}
const Navbar: React.FC<NavbarProps> = ({ toggleVisibility }) => {
  const [isHover, setIsHover] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [mobClicked, setIsMobileClick] = useState(false);
  const [cross, showCross] = useState(false);
  const [menu, hideMenu] = useState(true);

  const handleMouseLeave = () => {
    setIsHover(false);
    setHoveredItem(null);
    toggleVisibility(false);
  };

  const handleMouseEnter = (item: Item) => {
    setIsHover(true);
    setHoveredItem(item.name);
    toggleVisibility(true);
  };

  const handleMobileClickEnter = () => {
    setIsMobileClick(true);
    hideMenu(false);
    showCross(true);
  };

  const handleMobileClickLeave = (val: boolean) => {
    setIsMobileClick(false);
    hideMenu(true);
    showCross(false);

    console.log("mobClicked", mobClicked);
  };

  return (
    <nav className="relative">
      <div
        className={`absolute left-0 w-full inset-0 z-10 h-fit shadow-xl transition-opacity duration-1000 ${
          isHover ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onMouseLeave={handleMouseLeave}
      >
        <div className="text-black">{<Dropdown text={hoveredItem!} />}</div>
      </div>
      <div className=" flex justify-center absolute inset-0 z-10 h-auto flex-row w-auto">
        {/* <div className=" inset-0 z-10 text-black">Logo</div> */}
        <div className="max-[1000px]:hidden  text-black  flex h-fit cursor-pointer w-[40%]    inset-0 z-10 ">
          {navMenu.map((item) => (
            <li
              key={item.id}
              onMouseEnter={() => handleMouseEnter(item)}
              className={`flex-row flex justify-evenly w-full `}
            >
              <button
                className={`mt-2 justify-center w-full h-fit py-2 text-sm font-medium rounded-md focus:outline-none  ${
                  hoveredItem === item.name ? "bg-[#000000]/[0.04] " : ""
                }`}
              >
                {item.name}
              </button>
            </li>
          ))}
        </div>
        {mobClicked && (
          <div className=" bg-white w-full text-black  flex-col h-fit cursor-pointer    inset-0 z-10 ">
            {navMenu.map((item) => (
              <li
                key={item.id}
                //onMouseEnter={() => handleMouseEnter(item)}
                className={`flex-row flex justify-evenly w-full mt-[10%]`}
              >
                <button
                  className={`mt-2 justify-center w-full h-fit py-2 text-sm font-medium rounded-md focus:outline-none  ${
                    hoveredItem === item.name ? "bg-[#000000]/[0.04] " : ""
                  }`}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </div>
        )}
        <div className="min-[1000px]:hidden absolute inset-0 z-10">
          {menu && (
            <button
              onClick={handleMobileClickEnter}
              className={`mt-2 justify-center w-full text-black h-fit py-2 text-sm font-medium rounded-md focus:outline-none  
            `}
            >
              Menu
            </button>
          )}

          {cross && (
            <button
              onClick={() => handleMobileClickLeave(false)}
              className={`mt-2 flex justify-end mr-[5%] w-full text-black h-fit py-2 text-sm font-medium rounded-md focus:outline-none  
            `}
            >
              X
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
