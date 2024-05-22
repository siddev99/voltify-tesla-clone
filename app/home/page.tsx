import Link from "next/link";
import HomeData from "../_data/HomeData";
import HomeFooter from "@/components/Footer";
import Topbar from "@/components/topbar";
/* eslint-disable @next/next/no-img-element */
export default function Home() {
  return (
    <>
      <Topbar />
      <section>
        {HomeData.map((item) => (
          <div
            key={item.id}
            className="relative w-full h-screen sm:h-[750px] md:h-[850px] lg:h-[900px] xl:h-[100vh] overflow-hidden"
          >
            <div
              className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              {item.content[0].title == "CyberTruck" ? (
                <div className="flex items-center justify-center w-full  mt-36 sm:mt-40 md:mt-40">
                  <img
                    src={`${item.CyberTrucklogo}`}
                    alt="CyberTruck Logo"
                    className="w-[80%] sm:w-3/5 md:w-2/5 lg:w-1/3 xl:w-1/4"
                  ></img>
                </div>
              ) : (
                <div className="absolute h-52 overflow-hidden flex items-center justify-end w-full  flex-col  sm:h-52 md:h-56 ">
                  <h1
                    className={` ${
                      item.content[0].title === "Solar Panels"
                        ? "text-white"
                        : "text-gray-900"
                    } text-4xl font-gothamSSM font-medium`}
                  >
                    {item.content[0].title}
                  </h1>
                  <p
                    className={`${
                      item.content[0].title === "Solar Panels"
                        ? "text-white"
                        : "text-gray-900"
                    }  text-lg font-gothamSSM font-light`}
                  >
                    <span className="underline">{item.content[0].price1} </span>
                  </p>
                  <p className="text-black font-gothamSSM font-light text-xs">
                    {item.content[0].price2}
                  </p>
                </div>
              )}

              {item.content[0].title == "CyberTruck" ? (
                <div className="absolute transform w-full justify-center bottom-[15%] flex flex-col md:flex-row items-center gap-6 self-end">
                  <button
                    className="bg-black bg-opacity-70 font-gothamSSM font-bold py-3 text-xs  cursor-pointer w-4/5 sm:w-60 uppercase border-t-4"
                    style={{ color: "#8e8e8e", borderBlockColor: "#393c41" }}
                  >
                    {item.button1}
                  </button>
                  <button
                    className="bg-black bg-opacity-70 py-3 font-gothamSSM font-bold text-xs cursor-pointer w-4/5 sm:w-60 uppercase"
                    style={{ color: "#8e8e8e" }}
                  >
                    {item.button2}
                  </button>
                </div>
              ) : (
                <div className="absolute transform w-full justify-center bottom-[15%] flex flex-col md:flex-row items-center gap-6 self-end">
                  {item.content[0].title === "Accessories" ? (
                    <>
                      <button className="bg-white bg-opacity-70 text-black py-2 text-base rounded cursor-pointer w-4/5 sm:w-60">
                        {item.button1}
                      </button>
                    </>
                  ) : (
                    <>
                      <button className="bg-white bg-opacity-70 text-black py-2.5 font-gothamSSM font-medium text-sm rounded cursor-pointer w-4/5 sm:w-60">
                        {item.button1}
                      </button>
                      <button className="bg-black bg-opacity-70 text-white py-2.5 font-gothamSSM font-medium  text-sm rounded cursor-pointer w-4/5 sm:w-60">
                        {item.button2}
                      </button>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </section>
      <section className="w-full flex-col mt-10 font-gothamSSM font-light text-xs">
        <p className="text-center">
          ¹ Excludes taxes and fees with price subject to change. Available in
          select states and requires credit approval. Est. gas savings is
          $100/month.
          <br></br>
          <u>
            <Link href="">See Details</Link>
          </u>
        </p>
        <br></br>
        <p className="text-center">
          ² Price before estimated savings is $299/mo, excluding taxes and fees.
          Subject to change.
          <br></br>
          <u>
            <Link href="">Learn about est. gas savings.</Link>
          </u>
        </p>
        <br></br>
        <p className="text-center">
          ³ Price before incentives and savings is $77,990, excluding taxes and
          fees. Subject to change.
          <br></br>
          <u>
            <Link href="">Learn about est. gas savings.</Link>
          </u>
        </p>
        <br></br>
        <p className="text-center">
          ⁴ Price before savings is $72,990, excluding taxes and fees. Subject
          to change.
          <br></br>
          <u>
            <Link href="">Learn about est. gas savings.</Link>
          </u>
        </p>
      </section>
      <HomeFooter />
    </>
  );
}
