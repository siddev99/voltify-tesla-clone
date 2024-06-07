/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/alt-text */
// eslint-disable-next-line @next/next/no-img-element
"use client";
import Image from "next/image";
import Head from "next/head";
import Dropdown from "./Dropdown";
import { useEffect, useState } from "react";
import { navMenu } from "@/app/_data/Vehicles-Menu";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";

interface Item {
  id: number;
  name: string;
}
export default function Topbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hover, setHover] = useState(false);

  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  // const pathname = usePathname();
  // const searchParams = useSearchParams();

  // const url = `${pathname}?${searchParams}`;
  // console.log(url);

  const text = "";
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setHover(false);
  };

  const handleMouseLeave = () => {
    setHover(false);
    setHoveredItem(null);
  };

  const handleMouseEnter = (item: Item) => {
    setHover(true);
    setHoveredItem(item.name);
  };
  return (
    <header className="w-full absolute z-10 flex justify-between space-y-3">
      {hover && (
        <div
          className={`absolute left-0 w-full bg-gray-200  transition-all duration-300 ${
            hover ? " opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
          onMouseLeave={handleMouseLeave}
        >
          <Dropdown text={hoveredItem!} />
        </div>
      )}
      <div className="relative p-3">
        <Link href="/">
          <img
            src="/Tesla_logo.png"
            alt="Tesla logo"
            className="block  h-7 w-7 object-cover cursor-pointer"
          ></img>
        </Link>
      </div>

      {/* Desktop menu */}
      {}
      <div className="hidden xl:flex items-center relative  font-gothamSSM font-medium text-sm">
        {navMenu.map((item) => (
          <li
            className="text-black list-none"
            onMouseEnter={() => handleMouseEnter(item)}
            key={item.id}
          >
            <button
              className={`justify-center w-full px-4 py-2 text-sm font-medium  rounded-md focus:outline-none ${
                hoveredItem === item.name ? "bg-gray-200" : ""
              }`}
            >
              {item.name}
            </button>
          </li>
        ))}
      </div>

      <div className="hidden xl:flex relative items-center justify-around space-x-2 ">
        <li className="list-none text-white">
          <Image
            src="/icons/globe.png"
            alt="Country Language"
            height={20}
            width={20}
            className=""
          />
        </li>
        <li className=" list-none">
          <Image src="/icons/ask.png" alt="Help" height={20} width={20} />
        </li>
        <li className="list-none">
          <Image src="/icons/user.png" alt="User" height={20} width={20} />
        </li>
      </div>

      <div className="xl:hidden item-center">
        <button onClick={toggleMenu} className="text-black focus:outline-none">
          Menu
        </button>
      </div>

      {/* Mobile menu button */}
      {isOpen && (
        <div className="xl:hidden absolute bg-white  left-0 w-full h-auto">
          <div className="flex flex-col font-gothamSSM font-medium text-s  p-5 items-start h-screen">
            {/* <button
              onClick={toggleMenu}
              className="text-black focus:outline-none w-full flex items-end justify-end  "
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                ></path>
              </svg>
            </button> */}

            <div className="h-full flex flex-col w-full items-start gap-16">
              {/* <div className="bg-red-400 absolute h-full w-auto">
                {hover && <Dropdown />}
              </div> */}
              <button className="text-black" onClick={() => setHover(true)}>
                Vehicles
              </button>
              <button className="text-black">Energy</button>
              <button className="text-black">Charging</button>
              <button className="text-black">Discover</button>
              <button className="text-black">Shop</button>
              <button className="text-black">Support</button>
              {/* <Image
                src="/icons/globe.png"
                alt="Country Language"
                height={20}
                width={20}
              />
              <Image src="/icons/user.png" alt="User" height={20} width={20} /> */}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
