"use client";
import "./page.css";
import { useEffect, useState } from "react";
import spaceships from "./spaceships";
import getSpaceships from "./spaceships";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaRocket, FaBars } from "react-icons/fa";
import Image from "next/image";

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
      className=" h-14 max-sm:hidden flex flex-row text-center justify-center items-center hover:text-yellow-100 w-full my-2">
      <Link href={href} py={icon ? 0 : 2}>
        {icon ? (
          <Image width={35} height={35} alt="icon" src={icon} />
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

  return (
    <div className="relative">
      <nav
        className={` max-sm:${
          innerWidth < 425 ? "hidden" : "block"
        } w-full flex z-10 text-white items-center justify-center absolute left-0 bg-[#121012] `}>
        {NAV_LINKS.map((link, index) => (
          <NavLink key={index} {...link} />
        ))}
      </nav>
      <div className=" bg-[url('https://twist-tales.com/wp-content/uploads/2023/09/Cometh-Cosmik-Battle-Title-16-9.png')] no-repeat bg-cover bg-center h-screen">
        <Image />
      </div>
      <div className=" flex flex-row flex-wrap justify-center items-center">
        {spaceships &&
          spaceships.map((spaceship) => (
            <Link
              className="  bg-[rgba(255, 255, 255, 0.8)] hover:bg-[rgba(120, 120, 120, 0.8)] text-white p-2 rounded-md"
              as={"a"}
              key={spaceship.id}
              href={`/${spaceship.name}`}>
              {spaceship.name}
            </Link>
          ))}
      </div>
    </div>
  );
}
