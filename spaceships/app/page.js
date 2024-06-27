"use client";
import "./page.css";
import { useEffect, useState } from "react";
import spaceships from "./spaceships";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import Loading from "./Loading";
import NavLinkMap from "./components/navlinkmap";
import SecNavLinkMap from "./components/secnavlinkmap";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showCross, setShowCross] = useState(false);

  useEffect(() => {
    setLoading(false);
    setIsLoaded(true);
  }, []);

  const categorizedSpaceships = spaceships.reduce((acc, spaceship) => {
    const { manufacturer } = spaceship;
    if (!acc[manufacturer]) {
      acc[manufacturer] = [];
    }
    acc[manufacturer].push(spaceship);
    return acc;
  }, {});

  return showCross ? (
    <div>
      <RxCross1
        size={80}
        onClick={() => {
          location.reload();
        }}
        className={`z-20 absolute top-0 right-0 ${
          showCross ? "block" : "hidden"
        } `}
      />
      <SecNavLinkMap />
    </div>
  ) : (
    <>
      {loading && <Loading />}
      <div className={`relative ${loading ? "hidden" : "show-page"}`}>
        <NavLinkMap />
        <div className=" flex justify-center items-center bg-[url('https://twist-tales.com/wp-content/uploads/2023/09/Cometh-Cosmik-Battle-Title-16-9.png')] no-repeat bg-cover bg-center h-screen">
          <FaBars
            size={80}
            onClick={() => {
              setShowCross(true);
            }}
            className={` absolute top-0 right-0 ${
              showCross ? "hidden" : "block"
            }`}
          />
          <img
            className={` w-[75%] max-sm:w-[90%] max-w-[540px] min-w-32 ${
              isLoaded ? "slide-in" : "hidden"
            } `}
            src={
              "https://cdn.prod.website-files.com/659d7bdc74363cd63d1a332c/65a55486a34a8c57585cf512_logo-png-cropped-p-1080.png"
            }
            alt="Cosmik Battle Logo"
            width={100}
            height={100}
          />
        </div>
        <div className=" flex flex-wrap p-1 flex-col justify-center items-center">
          {Object.keys(categorizedSpaceships).map((manufacturer) => (
            <div
              key={manufacturer}
              className=" flex flex-col border w-full manufacturer">
              <h2 className="manufacturer-title text-2xl text-center">
                {manufacturer}
              </h2>
              <div className=" text-center flex py-4  justify-center items-center flex-wrap spaceships">
                {categorizedSpaceships[manufacturer].map((spaceship) => (
                  <Link
                    className=" text-xl px-4 py-2 my-4 mx-2 duration-300 text-black rounded-md"
                    style={{
                      background: "rgba(255, 255, 255, 0.8)",
                      backdropFilter: "blur(10px)",
                    }}
                    onMouseEnter={(e) => {
                      const target = e.target;
                      target.style.background = "rgba(120, 120, 120, 0.8)";
                      target.style.scale = 1.2;
                    }}
                    onMouseLeave={(e) => {
                      const target = e.target;
                      target.style.background = "rgba(255, 255, 255, 0.8)";
                      target.style.scale = 1;
                    }}
                    key={spaceship.id}
                    href={`/${spaceship.href}`}>
                    {spaceship.name}
                  </Link>
                ))}
              </div>
            </div>
          ))} 
        </div>
      </div>
    </>
  );
}
