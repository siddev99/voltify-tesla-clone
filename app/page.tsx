import Link from "next/link";
import Home from "./_data/HomeData";
import Topbar from "@/components/topbar";

export default function Page() {
  return (
    <>
      <Topbar />
      <section className="relative">
        {Home.map((item) => (
          <div key={item.id} className="relative">
            <div
              className={` ${item.className} absolute w-full flex justify-center font-gothamSSM items-center text-center`}
            >
              <div
                className={`${
                  item.className === "T-S" || item.className === "S-P"
                    ? "text-white"
                    : "text-black"
                }`}
              >
                <h1 className=" text-4xl ">{item.content[0].title}</h1>
                <p>{item.content[0].price1}</p>
                <small className="font-thin">{item.content[0].price2}</small>
              </div>
            </div>
            <picture className="block w-full h-screen">
              <source
                srcSet={item.mobileImg}
                media={`${
                  item.className === "T-3"
                    ? "(max-width: 799px) and (orientation: portrait)"
                    : "(max-width: 699px) and (orientation: portrait)"
                }`}
              />
              <source
                srcSet={item.mobileImg}
                media="(max-width: 599px) and (orientation: landscape)"
              />
              <source srcSet={item.desktopImg} media="(min-width: 600px)" />
              <img
                src={item.desktopImg}
                alt="Model Y"
                className="block w-full h-full object-cover "
              />
            </picture>

            <div className="absolute bottom-10 w-full flex  justify-center items-center flex-col left-0 right-0  sm:flex-col sm:items-center lg:bottom-16 ">
              <div
                className={` ${
                  item.className === "A"
                    ? "w-[80%] min-[400px]:w-72 sm:w-[260px]"
                    : "flex flex-col  items-center gap-6 w-[80%] min-[400px]:w-72   sm:flex-row sm:w-[470px]"
                }`}
              >
                <button className="bg-[#eeeeee] w-full hover:bg-[#e2e3e3] text-black font-medium py-2 px-4 rounded">
                  {item.button1}
                </button>
                <button
                  className={`${
                    item.className === "A" ? "hidden" : ""
                  } w-full bg-[#222222] font-medium  text-white  py-2 px-4 rounded hover:bg-[#393c41] hover:text-white `}
                >
                  {item.button2}
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
