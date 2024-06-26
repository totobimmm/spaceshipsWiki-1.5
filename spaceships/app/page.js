"use client";
import "./page.css";
import { useEffect, useState } from "react";
import spaceships from "./spaceships";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaRocket, FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import Loading from "./Loading";

const navItemVariants = {
  hover: {
    scale: 1.2,
    transition: {
      type: "spring",
      stiffness: 300,
    },
  },
};

const NAV_LINKS = [
  {
    href: "https://www.cosmikbattle.com/",
    text: "Home",
    icon: "/page-icon.png",
  },
  { href: "https://www.cosmikbattle.com/game", text: "THE GAME" },
  { href: "https://www.cosmikbattle.com/news", text: "NEWS" },
  {
    href: "https://www.cosmikbattle.com/cosmik-academy",
    text: "COSMIK ACADEMY",
  },
  {
    href: "https://www.cosmikbattle.com/hitmans-chest",
    text: "HITMAN'S CHEST",
  },
  { href: "https://marketplace.cosmikbattle.com", text: "MARKETPLACE" },
];

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [innerWidth, setInnerWidth] = useState(0);
  const [loading, setLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showCross, setShowCross] = useState(false);

  useEffect(() => {
    setLoading(false);
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleResize = () => {
      setInnerWidth(window.innerWidth);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  });

  const NavLink = ({ href, text, icon }) => (
    <motion.div
      variants={navItemVariants}
      whileHover="hover"
      className=" h-14 max-sm:hidden flex text-center justify-center items-center hover:text-yellow-100 w-full my-2">
      <Link href={href} py={icon ? 0 : 2}>
        {icon ? (
          <img width={35} height={35} alt="icon" src={icon} />
        ) : (
          <motion.div
            initial={{
              opacity: 0.8,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
            whileHover={{ opacity: 1 }}>
            {innerWidth >= 1200 && <FaRocket />}
            {text}
          </motion.div>
        )}
      </Link>
    </motion.div>
  );

  const categorizedSpaceships = spaceships.reduce((acc, spaceship) => {
    const { manufacturer } = spaceship;
    if (!acc[manufacturer]) {
      acc[manufacturer] = [];
    }
    acc[manufacturer].push(spaceship);
    return acc;
  }, {});

  return showCross ? (
    <div className=" flex flex-col justify-center items-center">
      <RxCross1
        size={80}
        onClick={() => {
          setShowCross(false);
        }}
        className={` absolute top-0 right-0 ${showCross ? "block" : "hidden"} `}
      />
      <h1>Hello</h1>
    </div>
  ) : (
    <>
      {loading && <Loading />}
      <div className={`relative ${loading ? "hidden" : "show-page"}`}>
        <nav
          className={` max-sm:${
            innerWidth < 425 ? "hidden" : "block"
          } w-full flex z-10 text-white items-center justify-center absolute left-0 bg-[#121012] `}>
          {NAV_LINKS.map((link, index) => (
            <NavLink key={index} {...link} />
          ))}
        </nav>
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
