import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import Link from "next/link";
import spaceships from "@/app/spaceships";
import { usePathname } from "next/navigation";

const Back = () => {
  const name = usePathname().substring(1);
  const spaceship = spaceships.find((ship) => ship.href === name);

  return (
    <Link
      href={`/${spaceships[spaceship.id - 1].href}`}
      className=" fixed left-8 bottom-8 flex items-start gap-3 drop-shadow-[2.5px_0_60px_rgba(255,255,255,1)] ">
      <FaArrowLeftLong id="arrow-left" className=" duration-300 text-white " />{" "}
      <button
        onMouseEnter={(e) => {
          document.getElementById("arrow-left").style.translate = "-5px";
        }}
        onMouseLeave={(e) => {
          document.getElementById("arrow-left").style.translate = "0px";
        }}
        className={` bg-white text-black p-2 rounded-md `}>
        Previous
      </button>
    </Link>
  );
};

export default Back;
