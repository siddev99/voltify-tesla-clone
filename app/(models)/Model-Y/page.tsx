"use client";
import Topbar from "@/components/topbar";
import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";

export default function ModelY() {
  const [currentVideoSet, setCurrentVideoSet] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  //Functionlity for Video
  const videoSets = [
    {
      desktop: "/home/Model-Y/S3.webm",
      mobile: "/home/Model-Y/S3.webm",
      heading: "The Best Accident is No Accident",
      text: "Active safety features can help reduce impact severity or prevent accidents from happening altogether. Features like Forward Collision Warning, Active Emergency Braking and Lane Departure avoidance all come standard.",
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
      <Topbar />
      <section className="relative">
        <div>
          <picture className="block w-full h-screen">
            <source
              srcSet="/home/Model-Y/S1-Mobile.jpg"
              media="(max-width: 599px) and (orientation: portrait)"
            />
            <source
              srcSet="/home/Model-Y/S1-Desktop.jpg"
              media="(max-width: 899px) and (orientation: landscape)"
            />
            <source
              srcSet="/home/Model-Y/S1-Desktop.jpg"
              media="(min-width: 900px) and (orientation: landscape)"
            />
            <source
              srcSet="/home/Model-Y/S1-Tablet.jpg"
              media="(min-width: 600px) and (orientation: portrait)"
            />
            <img
              src="/home/Model-Y/S1-Desktop.jpg"
              alt="Model Y"
              className="block w-full h-screen object-cover"
            />
          </picture>
          <div className="absolute bottom-10 w-full flex  justify-center items-center flex-col left-0 right-0  sm:flex-col sm:items-center lg:bottom-16 ">
            <div className="flex justify-evenly flex-wrap w-full  text-center mb-5 font-gothamSSM min-[400px]:w-96  sm:justify-between">
              <div>
                <h1 className="text-xl text-justify tracking-tighter lg:text-2xl">
                  76 cu ft
                </h1>
                <p className="text-[10px] font-medium">Cargo Space</p>
              </div>
              <div>
                <h1 className="text-xl lg:text-2xl text-justify tracking-normal">
                  320mi
                </h1>
                <p className="text-[10px] font-medium">Range (est.)</p>
              </div>
              <div>
                <h1 className="text-xl lg:text-2xl text-justify tracking-tighter">
                  AWD
                </h1>
                <p className="text-[10px] font-medium">Dual Motor</p>
              </div>
            </div>
            <div className="flex flex-col  items-center gap-6 w-[80%] min-[400px]:w-72   sm:flex-row sm:w-[470px]">
              <button className="bg-blue-500 w-full hover:bg-blue-700 text-white font-medium py-2 px-4 rounded">
                Order Now
              </button>
              <button className="border-[3px] border-solid w-full border-white  text-white font-bold py-[4.8px] px-4 rounded hover:bg-white hover:text-black">
                Demo Drive
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="relative">
        <div>
          <picture className="block w-full h-screen">
            <source
              srcSet="/home/Model-Y/S2-Mobile.jpg"
              media="(max-width: 599px) and (orientation: portrait), (max-width: 899px) and (orientation: landscape)"
            />
            {/* <source
              srcSet="/home/Model-Y/S1-Desktop.jpg"
              media="(max-width: 899px) and (orientation: landscape)"
            /> */}
            <source
              srcSet="/home/Model-Y/S2-Desktop.jpg"
              media="(min-width: 900px) and (orientation: landscape)"
            />
            <source
              srcSet="/home/Model-Y/S2-Tablet.jpg"
              media="(min-width: 600px) and (orientation: portrait)"
            />
            <img
              src="/home/Model-Y/S2-Desktop.jpg"
              alt="Model Y"
              className="block w-full h-screen object-cover"
            />
          </picture>
          <div className="absolute bottom-10 w-full flex flex-col left-0 justify-center items-center   sm:flex-col sm:items-center lg:bottom-20">
            <div className="flex    flex-wrap w-full gap-4   mb-5 font-gothamSSM min-[400px]:w-[400px] sm:w-[500px] lg:w-[950px] sm:justify-between">
              <h1 className="text-3xl  tracking-tighter lg:text-2xl">
                Engineered for Your Safety
              </h1>
              <p className="text-[15px] font-medium lg:text-sm">
                We engineer our vehicles to be the safest in the world. With an
                extremely low chance of roll-over and<br></br> occupant injury,
                Model Y receives some of the highest possible safety ratings.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        ref={sectionRef}
        className="flex flex-col  w-full h-auto min-[900px]:flex-row"
      >
        <div className="w-full px-5 py-5 min-[900px]:px-10 min-[900px]:py-10 lg:px-20 lg:py-20">
          <video
            ref={videoRef}
            className=" h-auto rounded"
            autoPlay
            muted
            src={currentVideoSrc}
            onEnded={handleVideoEnded}
          ></video>
        </div>
        <div className=" w-full items-start px-5 py-5 flex  min-[900px]:px-10 min-[900px]:py-10 lg:px-20 lg:py-20 lg:items-center">
          {videoSets.map((set, index) => (
            <div
              key={index}
              className="h-auto flex-col flex lg:items-start lg:justify-center lg:h-full  "
            >
              <h1 className="font-gothamSSM font-bold text-lg">
                {set.heading}
              </h1>
              <p className="font-gothamSSM font-thin text-sm">{set.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative">
        <div className="bg-[#ffff] bottom-10 w-full h-auto flex flex-col left-0 justify-center items-center   sm:flex-col sm:items-center">
          <div className="flex  text-black  flex-col w-full gap-4 min-[250px]:px-9 min-[250px]:py-9  mb-5 font-gothamSSM min-[400px]:w-[400px] sm:w-[500px]  sm:py-9 lg:w-[950px]  sm:justify-between">
            <h1 className="text-3xl text-center tracking-tighter lg:text-2xl">
              Do More Than Drive
            </h1>
            <p className="text-[15px] text-center font-thin lg:text-sm">
              Your favorite song, movie or game is just a few taps away. An
              ultra-responsive 15-inch touchscreen sits at the center of your
              driving experience.
            </p>
          </div>
        </div>
        <div>
          <picture className="block w-full h-screen">
            <source
              srcSet="/home/Model-Y/S4-Mobile.jpg"
              media="(max-width: 599px) and (orientation: portrait), (max-width: 899px) and (orientation: landscape)"
            />
            {/* <source
              srcSet="/home/Model-Y/S1-Desktop.jpg"
              media="(max-width: 899px) and (orientation: landscape)"
            /> */}
            <source
              srcSet="/home/Model-Y/S4-Desktop.jpg"
              media="(min-width: 900px) and (orientation: landscape)"
            />
            <source
              srcSet="/home/Model-Y/S4-Tablet.jpg"
              media="(min-width: 600px) and (orientation: portrait)"
            />
            <img
              src="/home/Model-Y/S4-Desktop.jpg"
              alt="Model Y"
              className="block w-full h-screen object-cover"
            />
          </picture>
        </div>
      </section>
      <section className="lg:px-[15%] xl:px-[25%] sm:px-[8%] px-[12%] bg-white space-y-6 pt-[10%] pb-[10%]">
        <div className="flex bg-white items-center gap-5  justify-center">
          <div className="">
            <picture className="block w-full ">
              <source
                srcSet="/home/Model-Y/S5.1-Mobile.jpg"
                media="(max-width: 599px) and (orientation: portrait)"
              />
              <source
                srcSet="/home/Model-Y/S5.1-Mobile.jpg"
                media="(max-height: 599px) and (orientation: landscape)"
              />
              <source
                srcSet="/home/Model-Y/S5.1-Tablet.jpg"
                media="(min-width: 600px) and (orientation: portrait)"
              />
              <source
                srcSet="/home/Model-Y/S5.1-Desktop.jpg"
                media="(min-width: 900px) and (orientation: landscape)"
              />

              <img
                src="/home/Model-Y/S5.1-Desktop.jpg"
                alt="Model Y"
                className="block w-full rounded-lg object-cover"
              />
            </picture>
          </div>
          <div>
            <picture className="block w-full ">
              <source
                srcSet="/home/Model-Y/S5.2-Mobile.jpg"
                media="(max-width: 599px) and (orientation: portrait)"
              />
              <source
                srcSet="/home/Model-Y/S5.2-Mobile.jpg"
                media="(max-height: 599px) and (orientation: landscape)"
              />
              <source
                srcSet="/home/Model-Y/S5.2-Tablet.jpg"
                media="(min-width: 600px) and (orientation: portrait)"
              />
              <source
                srcSet="/home/Model-Y/S5.2-Desktop.jpg"
                media="(min-width: 900px) and (orientation: landscape)"
              />

              <img
                src="/home/Model-Y/S5.2-Desktop.jpg"
                alt="Model Y"
                className="block w-full rounded-lg object-cover"
              />
            </picture>
          </div>
        </div>
        <div className="flex bg-white items-center   justify-center  ">
          <picture className="block w-full">
            <source
              srcSet="/home/Model-Y/S5.3-Mobile.jpg"
              media="(max-width: 599px) and (orientation: portrait)"
            />
            <source
              srcSet="/home/Model-Y/S5.3-Mobile.jpg"
              media="(max-height: 599px) and (orientation: landscape)"
            />
            <source
              srcSet="/home/Model-Y/S5.3-Tablet.jpg"
              media="(min-width: 600px) and (orientation: portrait)"
            />
            <source
              srcSet="/home/Model-Y/S5.3-Desktop.jpg"
              media="(min-width: 900px) and (orientation: landscape)"
            />

            <img
              src="/home/Model-Y/S5.3-Desktop.jpg"
              alt="Model Y"
              className="block w-full rounded-lg object-cover"
            />
          </picture>
        </div>
        <div className="flex bg-white items-center gap-5  justify-center">
          <div className="">
            <picture className="block w-full ">
              <source
                srcSet="/home/Model-Y/S5.5-Mobile.jpg"
                media="(max-width: 599px) and (orientation: portrait)"
              />
              <source
                srcSet="/home/Model-Y/S5.5-Mobile.jpg"
                media="(max-height: 599px) and (orientation: landscape)"
              />
              <source
                srcSet="/home/Model-Y/S5.5-Tablet.jpg"
                media="(min-width: 600px) and (orientation: portrait)"
              />
              <source
                srcSet="/home/Model-Y/S5.5-Desktop.jpg"
                media="(min-width: 900px) and (orientation: landscape)"
              />

              <img
                src="/home/Model-Y/S5.5-Desktop.jpg"
                alt="Model Y"
                className="block w-full rounded-lg object-cover"
              />
            </picture>
          </div>
          <div>
            <picture className="block w-full ">
              <source
                srcSet="/home/Model-Y/S5.4-Mobile.jpg"
                media="(max-width: 599px) and (orientation: portrait)"
              />
              <source
                srcSet="/home/Model-Y/S5.4-Mobile.jpg"
                media="(max-height: 599px) and (orientation: landscape)"
              />
              <source
                srcSet="/home/Model-Y/S5.4-Tablet.jpg"
                media="(min-width: 600px) and (orientation: portrait)"
              />
              <source
                srcSet="/home/Model-Y/S5.4-Desktop.jpg"
                media="(min-width: 900px) and (orientation: landscape)"
              />

              <img
                src="/home/Model-Y/S5.4-Desktop.jpg"
                alt="Model Y"
                className="block w-full rounded-lg object-cover"
              />
            </picture>
          </div>
        </div>
      </section>
    </div>
  );
}
