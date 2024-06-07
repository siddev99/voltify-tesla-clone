/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";

const images = [
  {
    mobile: "/home/choose/Model-3-P/Model-3-P-Mobile.jpeg",
    desktop: "/home/choose/Model-3-P/Model-3-P-Desktop.jpeg",
    tablet: "/home/choose/Model-3-P/Model-3-P-Tablet.jpeg",
    mode: "Performance",
  },

  {
    mobile: "/home/choose/Model-3-S/Model-3-S-Mobile.jpeg",
    desktop: "/home/choose/Model-3-S/Model-3-S-Desktop.jpeg",
    tablet: "/home/choose/Model-3-S/Model-3-S-Tablet.jpeg",
    mode: "Standard and Long Range",
  },
];

const ImageSlider: React.FC = () => {
  const [index, setIndex] = useState(0);
  const startY = useRef<number | null>(null);
  const isScrolling = useRef<boolean>(false);

  const [isTall, setIsTall] = useState(false);
  const [isShort, setIsShort] = useState(false);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    startY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (startY.current === null) return;

    const deltaY = e.touches[0].clientY - startY.current;

    if (Math.abs(deltaY) > 50) {
      if (deltaY > 0) {
        // Swipe down
        setIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1));
      } else {
        // Swipe up
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? images.length - 1 : prevIndex + 1
        );
      }
      startY.current = null; // Reset startY after handling the swipe
    }
  };

  const handleWheel = (e: WheelEvent) => {
    if (isScrolling.current) return;
    isScrolling.current = true;

    if (e.deltaY > 0) {
      // Scroll down
      setIndex((prevIndex) =>
        prevIndex === images.length - 1 ? images.length - 1 : prevIndex + 1
      );
    } else {
      // Scroll up
      setIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1));
    }

    setTimeout(() => {
      isScrolling.current = false;
    }, 500); // Debounce time to ensure only one scroll event per image change
  };

  useEffect(() => {
    window.addEventListener("wheel", handleWheel);
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  const handleSwitchPerformance = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
  };

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      className="relative flex items-center justify-center h-screen bg-gray-100 overflow-hidden"
    >
      <div>
        {images.map((src, i) => (
          <picture
            key={i}
            className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <source
              srcSet={src.mobile}
              media="(max-width: 599px) and (orientation: portrait)"
            />
            <source
              srcSet={src.desktop}
              media="(max-width: 599px) and (orientation: landscape)"
            />
            <source
              srcSet={src.tablet}
              media="(min-width: 600px) and (orientation: portrait)"
            />
            <source
              srcSet={src.desktop}
              media="(min-width: 900px) and (orientation: landscape)"
            />
            <img
              src={src.desktop}
              alt={`Slide ${i}`}
              className="block w-full h-full object-cover"
            />
          </picture>
        ))}
      </div>
      {/* <div className="absolute  text-wrap  font-gothamSSM top-40 items-center   flex flex-col    min-[900px]:top-[200px] min-[900px]:w-full  min-[900px]:items-start  min-[900px]:pl-8 xl:pl-52 2xl:pl-80">
        <h1 className="text-4xl xl:text-5xl">Model 3</h1>
        <h4 className="text-base xl:text-xl">{images[index].mode}</h4>
      </div> */}
      <div
        className={
          "absolute bottom-6 w-full flex flex-col gap-6 portrait:items-center landscape:justify-center landscape:h-full landscape:items-start  landscape:pl-[10%] landscape:pr-[90%]"
        }
      >
        <button className="bg-[#3e6ae1] font-gothamSSM font-normal text-sm w-full max-w-xs py-3 hover:bg-[#3457b1] rounded sm:w-64 md:w-96 lg:w-64">
          <Link href="">Order Now</Link>
        </button>
        <button className="bg-[#222222] font-gothamSSM font-normal text-sm w-full max-w-xs py-3 hover:bg-[#393c41] rounded sm:w-64 md:w-96 lg:w-64">
          <Link href="">Learn More</Link>
        </button>
        <p
          style={{
            animation: "blink 2s infinite",
            cursor: "pointer",
          }}
          className="sm:w-64 md:w-96 lg:w-64"
          onClick={handleSwitchPerformance}
        >
          Switch to {`${images[index].mode}`}
        </p>

        <style jsx>{`
          @keyframes blink {
            0% {
              opacity: 1;
            }
            50% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default ImageSlider;
