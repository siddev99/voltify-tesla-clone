/* eslint-disable @next/next/no-img-element */
// components/Dropdown.js
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  vehiclesMenu,
  chargingMenu,
  energyMenu,
  solarSideMenu,
  vehiclesSideMenu,
  chargingSideMenu,
  Shop,
} from "@/app/_data/Vehicles-Menu";

interface Props {
  text: string;
}

const Dropdown: React.FC<Props> = (props) => {
  const { text } = props;
  console.log(text);
  let menuData;
  let sideMenuData;

  switch (text) {
    case "Vehicles":
      menuData = vehiclesMenu;
      break;
    case "Energy":
      menuData = energyMenu;
      break;
    case "Charging":
      menuData = chargingMenu;
      break;
    // case "discover":
    //   menuData = discoverMenu;
    //   break;
    case "Shop":
      menuData = Shop;
      break;
    default:
      // Default to vehicles menu if no matching menu found
      menuData = vehiclesMenu;
      break;
  }

  switch (text) {
    case "Vehicles":
      sideMenuData = vehiclesSideMenu;
      break;
    case "Energy":
      sideMenuData = solarSideMenu;
      break;
    case "Charging":
      sideMenuData = chargingSideMenu;
      break;
    // case "discover":
    //   menuData = discoverMenu;
    //   break;
    // case "shop":
    //   menuData = shopMenu;
    //   break;
    default:
      // Default to vehicles menu if no matching menu found
      sideMenuData = vehiclesSideMenu;
      break;
  }

  return (
    <div>
      {text === "Discover" ? (
        <div
          className="h-auto
          left-0
          right-0
          w-full
          bg-white
          flex
          items-center
          justify-center
          shadow-lg
          gap-x-10
          p-24"
        >
          <div className="w-[80%] flex flex-row justify-evenly text-sm font-gothamSSM ">
            <div className="space-y-2">
              <h1 className=" text-customGray font-thin">Resources</h1>
              <ul className="text-black space-y-2">
                <li className="text-black font-normal">Demo Drive</li>
                <li className="text-black font-normal">Insurance</li>
                <li className="text-black font-normal">Video Guides</li>
                <li className="text-black font-normal">Customer Stories</li>
                <li className="text-black font-normal">Events</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h1 className=" text-customGray font-thin">Location Services</h1>
              <ul className="text-black space-y-2">
                <li className="text-black font-normal">Find Us</li>
                <li className="text-black font-normal">
                  Find a Collision Center
                </li>
                <li className="text-black font-normal">
                  Find a Certified Installer
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h1 className="text-customGray font-thin">Company</h1>
              <ul className="text-black space-y-2">
                <li className="text-black font-normal">About</li>
                <li className="text-black font-normal">Careers</li>
                <li className="text-black font-normal">Investor Relations</li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-auto left-0 right-0 w-full bg-white flex justify-evenly  shadow-lg p-24">
          <div className="grid grid-cols-1 w-[70%]   md:grid-cols-2 lg:grid-cols-4">
            {menuData.map((item) => (
              <div
                key={item.id}
                className="flex justify-evenly flex-col  items-center"
              >
                <Link href={item.href1}>
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="h-auto w-full"
                  ></img>
                </Link>
                <p className="font-gothamSSM  font-medium text-black">
                  {item.model}
                </p>
                <div className="flex justify-evenly w-[40%] md:[50%]">
                  <Link
                    href={item.href1}
                    className="font-gothamSSM font-thin underline text-xs text-black"
                  >
                    {item.b1}
                  </Link>
                  <Link
                    href="#"
                    className="font-gothamSSM font-thin underline text-xs text-black"
                  >
                    {item.b2}
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div
            className={`${
              text === "Shop" ? "hidden" : "h-auto w-[1px]  bg-gray-700"
            }`}
          ></div>

          <div
            className={` ${
              text === "Shop"
                ? "hidden"
                : "flex flex-col justify-center gap-y-2 items-start"
            }`}
          >
            {sideMenuData.map((item) => (
              <ul key={item.id} className="text-black  w-full">
                <li>{item.name}</li>
              </ul>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
