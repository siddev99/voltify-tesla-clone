import React from "react";

interface NavItem {
  id: number;
  name: string;
}

interface MainMenu {
  id: number;
  model: string;
  image: string;
  alt: string;
  b1: string;
  b2: string;
  href1: string;
  href2: string;
}

interface SideMenu {
  id: number;
  name: string;
}

const vehiclesMenu: MainMenu[] = [
  {
    id: 1,
    image: "/home/vehicles-menu/Model-S.png",
    model: "Model S",
    alt: "Model S",
    b1: "Learn",
    b2: "Order",
    href1: "/Model-S",
    href2: "",
  },

  {
    id: 2,
    image: "/home/vehicles-menu/Model-3.png",
    model: "Model 3",
    alt: "Model 3",
    b1: "Learn",
    b2: "Order",
    href1: "/model3-choose",
    href2: "",
  },
  {
    id: 3,
    image: "/home/vehicles-menu/Model-X.png",
    model: "Model X",
    alt: "Model X",
    b1: "Learn",
    b2: "Order",
    href1: "/Model-X",
    href2: "",
  },
  {
    id: 4,
    image: "/home/vehicles-menu/Model-Y.png",
    model: "Model Y",
    alt: "Model Y",
    b1: "Learn",
    b2: "Order",
    href1: "/Model-Y",
    href2: "",
  },
  {
    id: 5,
    image: "/home/vehicles-menu/Cybertruck.png",
    model: "Cybertruck",
    alt: "Cybertruck",
    b1: "Learn",
    b2: "Order",
    href1: "",
    href2: "",
  },
  {
    id: 6,
    image: "/home/vehicles-menu/Mega-RedBlue.png",
    model: "All Models",
    alt: "All Models",
    b1: "Learn",
    b2: "Order",
    href1: "",
    href2: "",
  },
];

const vehiclesSideMenu: SideMenu[] = [
  {
    name: "Inventory",
    id: 1,
  },
  {
    name: "Used Cars",
    id: 2,
  },
  {
    name: "Demo Drive",
    id: 3,
  },
  {
    name: "Trade-in",
    id: 4,
  },
  {
    name: "Compare",
    id: 5,
  },
  {
    name: "Help Me Charge",
    id: 6,
  },
  {
    name: "Fleet",
    id: 7,
  },
  {
    name: "Semi",
    id: 8,
  },
  {
    name: "Roadster",
    id: 9,
  },
];

const energyMenu: MainMenu[] = [
  {
    id: 1,
    image: "/home/energy-menu/Solar-Panels.jpg",
    model: "Solar Panels",
    alt: "Solar Panels",
    b1: "Learn",
    b2: "Order",
    href1: "",
    href2: "",
  },

  {
    id: 2,
    image: "/home/energy-menu/Solar-Roof.png",
    model: "Solar Roof",
    alt: "Solar Roof",
    b1: "Learn",
    b2: "Order",
    href1: "",
    href2: "",
  },
  {
    id: 3,
    image: "/home/energy-menu/Powerwall.png",
    model: "Powerwall",
    alt: "Powerwall",
    b1: "Learn",
    b2: "Order",
    href1: "",
    href2: "",
  },
  {
    id: 4,
    image: "/home/energy-menu/Megapack.png",
    model: "Megapack",
    alt: "Megapack",
    b1: "Learn",
    b2: "Order",
    href1: "",
    href2: "",
  },
];

const solarSideMenu: SideMenu[] = [
  {
    name: "Schedule a Consultation",
    id: 1,
  },
  {
    name: "Why Solar",
    id: 2,
  },
  {
    name: "Incentives",
    id: 3,
  },
  {
    name: "Support",
    id: 4,
  },
  {
    name: "Partner with Tesla",
    id: 5,
  },
  {
    name: "Commercial",
    id: 6,
  },
  {
    name: "Utilities",
    id: 7,
  },
];

const chargingMenu: MainMenu[] = [
  {
    id: 1,
    image: "/home/charging/Charging.jpeg",
    model: "Charging",
    alt: "Charging",
    b1: "Learn",
    b2: "",
    href1: "",
    href2: "",
  },
  {
    id: 2,
    image: "/home/charging/Home-Charging.jpeg",
    model: "Charging",
    alt: "Charging",
    b1: "Learn",
    b2: "Shop",
    href1: "",
    href2: "",
  },
  {
    id: 3,
    image: "/home/charging/Supercharging.png",
    model: "Charging",
    alt: "Charging",
    b1: "Learn",
    b2: "Find",
    href1: "",
    href2: "",
  },
];

const chargingSideMenu: SideMenu[] = [
  {
    id: 1,
    name: "Help me Charge",
  },
  {
    id: 2,
    name: "Charging Calculator",
  },
  {
    id: 3,
    name: "Charging with NACS",
  },
  {
    id: 4,
    name: "Supercharger Voting",
  },
  {
    id: 5,
    name: "Host a Supercharger",
  },
  {
    id: 6,
    name: "Commercial Charging",
  },
  {
    id: 7,
    name: "Host Wall Connectors",
  },
];

const Shop: MainMenu[] = [
  {
    id: 1,
    image: "/home/shop/Charging.jpeg",
    model: "Charging",
    alt: "Charging",
    b1: "",
    b2: "",
    href1: "",
    href2: "",
  },
  {
    id: 2,
    image: "/home/shop/Vehicle-Accessories.jpeg",
    model: "Vehicle Accessories",
    alt: "VehicleAccessories",
    b1: "",
    b2: "",
    href1: "",
    href2: "",
  },
  {
    id: 3,
    image: "/home/shop/Apparel.png",
    model: "Apparel",
    alt: "Apparel",
    b1: "",
    b2: "",
    href1: "",
    href2: "",
  },
  {
    id: 4,
    image: "/home/shop/Lifestyle.jpeg",
    model: "Lifestyle",
    alt: "Lifestyle",
    b1: "",
    b2: "",
    href1: "",
    href2: "",
  },
];

const navMenu: NavItem[] = [
  {
    id: 1,
    name: "Vehicles",
  },
  {
    id: 2,
    name: "Energy",
  },
  {
    id: 3,
    name: "Charging",
  },
  {
    id: 4,
    name: "Discover",
  },
  {
    id: 5,
    name: "Shop",
  },
];

export {
  navMenu,
  vehiclesMenu,
  vehiclesSideMenu,
  energyMenu,
  solarSideMenu,
  chargingMenu,
  chargingSideMenu,
  Shop,
};
