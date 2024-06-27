"use client";
import React, { useEffect, useState } from "react";
import { FaRocket } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

const navItemVariants = {
  hover: {
    scale: 1.2,
    transition: {
      type: "spring",
      stiffness: 300,
    },
  },
};

const NavLink = ({ href, text, icon }) => {
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
  return (
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
};

export default NavLink;
