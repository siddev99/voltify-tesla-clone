/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export default function page() {
  const [isVisible, setIsVisible] = useState();

  const [currentVideoSet, setCurrentVideoSet] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const videoSets = [
    {
      desktop: "/home/Model-S/Interior-Desktop-Global.webm",
      mobile: "/home/Model-S/Interior-Mobile.webm",
      heading: "Cinematic Experience",
      text: "A 17” touchscreen with left-right tilt offers 2200 x 1300 resolution, true colors and exceptional responsiveness for gaming, movies and more.",
    },
    {
      desktop: "/home/Model-S/Interior-Steering-Desktop.mp4",
      mobile: "/home/Model-S/Interior-Steering-Mobile.mp4",
      heading: "Yoke Steering",
      text: "Perfect Environment Air vents are hidden throughout the cabin, while tri-zone temperature controls, ventilated seats and HEPA filtration deliver the perfect environment.",
    },

    {
      desktop: "/home/Model-S/Video3-Desktop.webm",
      mobile: "/home/Model-S/Video3-Mobile.webm",
      heading: "Perfect Environment",
      text: "Air vents are hidden throughout the cabin, while tri-zone temperature controls, ventilated seats and HEPA filtration deliver the perfect environment.",
    },
    {
      desktop: "/home/Model-S/Video4-Desktop.webm",
      mobile: "/home/Model-S/Video4-Mobile.webm",
      heading: "Redesigned Second Row",
      text: "Seating for three adults, with extra legroom, headroom and a stowable armrest with integrated storage and wireless charging.",
    },
    {
      desktop: "/home/Model-S/Video5-Desktop.webm",
      mobile: "/home/Model-S/Video5-Mobile.webm",
      heading: "Tesla Arcade",
      text: "Play games on your in-car touchscreens.",
    },
  ];

  const handleVideoEnded = () => {
    if (currentVideoSet === videoSets.length - 1) {
      // If the last video ended, reset to the first video
      setCurrentVideoSet(0);
    } else {
      // Otherwise, proceed to the next video
      setCurrentVideoSet((prevSet) => prevSet + 1);
    }
  };
  const handleDotClick = (index: number) => {
    setCurrentVideoSet(index);
  };

  const updateIsMobile = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    // Update isMobile state on mount
    if (typeof window !== "undefined") {
      updateIsMobile();
    }

    // Add resize event listener to update isMobile state
    const handleResize = () => {
      updateIsMobile();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoRef.current?.play();
          } else {
            videoRef.current?.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const currentVideoSrc = isMobile
    ? videoSets[currentVideoSet].mobile
    : videoSets[currentVideoSet].desktop;
  return (
    <div>
      <section className="relative">
        <div>
          <picture className="block w-full h-screen">
            <source
              srcSet="/home/Model-S-Mobile.jpeg"
              media="(max-width: 599px) and (orientation: portrait)"
            />
            <source
              srcSet="/home/Model-S-Desktop.jpeg"
              media="(max-width: 899px) and (orientation: landscape)"
            />
            <source
              srcSet="/home/Model-S-Desktop.jpeg"
              media="(min-width: 900px) and (orientation: landscape)"
            />
            <source
              srcSet="/home/Model-S-Desktop.jpeg"
              media="(min-width: 600px) and (orientation: portrait)"
            />
            <source
              srcSet="/home/Model-S-Desktop.jpeg"
              media="(min-width: 900px)"
            />
            <img
              src="/home/Model-S-Desktop.jpeg"
              alt="Description of the image"
              className="block w-full h-screen object-cover"
            />
          </picture>

          <div className="absolute bottom-[13%] sm:bottom-[15%] md:bottom-[15%] xl:bottom-[13%] 2xl:bottom-[1%] left-0 w-full flex flex-col items-center gap-4">
            <div className="flex flex-wrap justify-center space-x-6 md:space-x-8 w-[80%] sm:w-[60%] md:w-[65%] lg:w-[50%]">
              <ul className="text-center mb-4 md:mb-0">
                <li className="font-gothamSSM text-lg">359mi</li>
                <li className="font-gothamSSM font-thin text-[10px] md:text-[15px]">
                  Range (EPA est.)
                </li>
              </ul>
              <ul className="text-center mb-4 md:mb-0">
                <li className="font-gothamSSM text-lg">1.99s</li>
                <li className="font-gothamSSM font-thin text-[10px] md:text-[15px]">
                  0-60 mph*
                </li>
              </ul>
              <ul className="text-center mb-4 md:mb-0">
                <li className="font-gothamSSM text-lg">200 mph</li>
                <li className="font-gothamSSM font-thin text-[10px] md:text-[15px]">
                  Top Speed
                </li>
              </ul>
              <ul className="hidden md:block text-center">
                <li className="font-gothamSSM text-lg">1,020 hp</li>
                <li className="font-gothamSSM font-thin text-[10px] md:text-[15px]">
                  Peak Power
                </li>
              </ul>
            </div>
            <div className="flex flex-col w-1/2 sm:w-2/3 md:w-1/2 lg:w-[30%] items-center gap-6 md:flex-row">
              <button className="bg-blue-500 w-full hover:bg-blue-700 text-white font-medium py-2 px-4 rounded">
                Order Now
              </button>
              <button className="border-[3px] border-solid border-white w-full text-white font-bold py-[4.8px] px-4 rounded hover:bg-white hover:text-black">
                Demo Drive
              </button>
            </div>
            <div className="text-center px-4">
              <p className="text-sm md:text-base">
                *Price before estimated savings is $72,990, excluding taxes and
                fees. Subject to change.
                <br />
                <Link href="" className="underline">
                  Learn about est. gas savings.
                </Link>
                <br />
                Specs displayed are Model S Plaid values.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        ref={sectionRef}
        className="flex justify-center items-center w-full h-48"
      >
        <h1
          className={`font-gothamSSM font-bold text-2xl transform transition-transform duration-500 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-full opacity-0"
          }`}
        >
          Interior of the Future
        </h1>
      </section>
      <section>
        <div>
          <picture className="block w-full h-screen">
            <source
              srcSet="/home/Model-S/Model-S-Interior-Mobile.jpg"
              media="(max-width: 599px) and (orientation: portrait)"
            />
            <source
              srcSet="/home/Model-S/Model-S-Interior-Desktop.jpg"
              media="(max-width: 899px) and (orientation: landscape)"
            />
            <source
              srcSet="/home/Model-S/Model-S-Interior-Desktop.jpg"
              media="(min-width: 900px) and (orientation: landscape)"
            />
            <source
              srcSet="/home/Model-S/Model-S-Interior-Desktop.jpg"
              media="(min-width: 600px) and (orientation: portrait)"
            />
            <source
              srcSet="/home/Model-S/Model-S-Interior-Desktop.jpg"
              media="(min-width: 900px)"
            />
            <img
              src="/home/Model-S/Model-S-Interior-Desktop.jpg"
              alt="Description of the image"
              className="block w-full h-screen object-cover"
            />
          </picture>
        </div>
      </section>
      <section ref={sectionRef} className="flex flex-col items-center">
        <div className="w-screen h-screen relative">
          <video
            ref={videoRef}
            className="absolute top-0 bottom-0 right-0 left-0 w-[95%] h-[95%] m-auto object-cover"
            autoPlay
            muted
            src={currentVideoSrc}
            onEnded={handleVideoEnded}
          ></video>
        </div>
        <div className="flex flex-col  mt-4  w-[60%]">
          <div className="flex ">
            {videoSets.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full mx-2 ${
                  currentVideoSet === index ? "bg-white" : "bg-gray-500"
                }`}
                onClick={() => handleDotClick(index)}
                style={{
                  transition: "background-color 0.3s ease",
                }}
              ></button>
            ))}
          </div>
          <div className="mt-2 flex items-center  ">
            {videoSets.map((set, index) => (
              <div
                key={index}
                className={`${currentVideoSet === index ? "block" : "hidden"}`}
                style={{
                  transition: "opacity 0.3s ease",
                  opacity: currentVideoSet === index ? 1 : 0,
                }}
              >
                <h1 className="font-gothamSSM font-bold text-xl">
                  {set.heading}
                </h1>
                <p className="font-gothamSSM font-thin">{set.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div>
        <br></br>
        <br></br>
        <br></br>
      </div>
      <section>
        <div className="grid grid-cols-1 sm:grid-rows-2 sm:m-16">
          <div className="flex flex-col  h-fit sm:flex-row  justify-evenly">
            <div className="w-full v sm:w-[40%] lg:w-[40%] xl:w-[40%]">
              <picture className="block w-full">
                <source
                  srcSet="/home/Model-S/Section-4.1.jpg"
                  media="(max-width: 599px) and (orientation: portrait), (max-width: 899px) and (orientation: landscape)"
                />
                <source
                  srcSet="/home/Model-S/Section-4.1.jpg"
                  media="(min-width: 900px) and (orientation: landscape)"
                />
                <source
                  srcSet="/home/Model-S/Section-4.1.jpg"
                  media="(min-width: 600px) and (orientation:portrait)"
                />
                <img
                  src="/home/Model-S/Section-4.1.jpg"
                  alt="Description of the image"
                  className="block w-full object-cover"
                />
              </picture>
            </div>
            <br className="sm:hidden"></br>
            <div className="flex flex-col justify-center   items-start   sm:w-[30%] sm:text-xs ">
              <h1 className="font-gothamSSM lg:text-lg">Stay Connected</h1>
              <br></br>
              <p className="font-gothamSSM font-thin text-sm lg:text-lg ">
                Instantly connect with multi-device Bluetooth, or fast charge
                devices with wireless and 36-watt USB-C charging.
              </p>
            </div>
          </div>
          <br className="sm:hidden"></br>
          <div className="flex flex-col-reverse h-fit   sm:flex-row justify-evenly">
            <div className="flex flex-col justify-center mt-5  items-start   sm:w-[30%] sm:text-xs">
              <h1 className="font-gothamSSM lg:text-lg">Immersive Sound</h1>
              <br></br>
              <p className="font-gothamSSM font-thin text-xs lg:text-lg">
                A 22-speaker, 960-watt audio system with Active Road Noise
                Reduction offers immersive listening and studio-grade sound
                quality.
              </p>
            </div>
            <div className="w-full  sm:w-[40%] lg:w-[40%] xl:w-[40%]">
              <video
                src="/home/Model-S/Section-4.2-Desktop.webm"
                autoPlay
              ></video>
            </div>
          </div>
          <div className="flex flex-col  h-fit sm:flex-row  justify-evenly">
            <div className="w-full v sm:w-[40%] lg:w-[40%] xl:w-[40%]">
              <picture className="block w-full">
                <source
                  srcSet="/home/Model-S/Section-4.3-Desktop.jpeg"
                  media="(max-width: 599px) and (orientation: portrait), (max-width: 899px) and (orientation: landscape)"
                />
                <source
                  srcSet="/home/Model-S/Section-4.3-Desktop.jpeg"
                  media="(min-width: 900px) and (orientation: landscape)"
                />
                <source
                  srcSet="/home/Model-S/Section-4.3-Desktop.jpeg"
                  media="(min-width: 600px) and (orientation:portrait)"
                />
                <img
                  src="/home/Model-S/Section-4.3-Desktop.jpeg"
                  alt="Description of the image"
                  className="block w-full object-cover"
                />
              </picture>
            </div>
            <br className="sm:hidden"></br>
            <div className="flex flex-col justify-center   items-start   sm:w-[30%] sm:text-xs ">
              <h1 className="font-gothamSSM lg:text-lg">Room for Everything</h1>
              <br></br>
              <p className="font-gothamSSM font-thin text-sm lg:text-lg ">
                With front and rear trunks and fold-flat seats you can fit your
                bike without taking the wheel off—and your luggage too.
                <u>Compare Models</u>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
