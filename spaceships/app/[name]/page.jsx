"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState, useCallback } from "react";
import spaceships from "../spaceships.js";

export default function SpaceshipPage() {
  const searchParams = useSearchParams();
  const [name, setName] = useState(usePathname().substring(1));
  const [imageNumber, setImageNumber] = useState(1);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const nameParam = searchParams.get("name");
    if (nameParam) {
      setName(nameParam);
    }
  }, [searchParams]);

  const spaceship = spaceships.find((ship) => ship.href === name);

  if (!spaceship) {
    return (
      <div className=" text-white ">
        {usePathname().substring(1)} non trouvé
      </div>
    );
  }

  const updateImageSrc = useCallback(() => {
    const formattedNumber = String(imageNumber - 1).padStart(4, "0");
    setImageUrl(
      `https://images.service.cometh.io/${spaceship.id}00${formattedNumber}.png` 
    );
  }, [imageNumber, spaceship.id]);
  // apprendre usecallback

  useEffect(() => {
    updateImageSrc();
  }, [updateImageSrc]);

  return (
    <div className=" min-h-screen text-white flex justify-center items-center flex-col gap-8 ">
      <input
        readOnly={spaceship.supply === 1 ? true : false}
        className={` text-center bg-transparent border rounded-md hover:border-[grey] duration-300 fixed top-[7rem] left-6 w-[18%] p-2 `}
        type="number"
        value={imageNumber}
        onChange={(e) => {
          setImageNumber(e.target.value);
          if (e.target.value > spaceship.supply) {
            setImageNumber(spaceship.supply);
          }
        }}
      />
      {imageNumber > spaceship.supply && (
        <h1 className=" text-red-500 ">
          Please set a value between 1 and {spaceship.supply}
        </h1>
      )}
      {imageNumber < 1 && (
        <h1 className=" text-red-500 fixed top-[10rem] text-3xl ">
          Please set a value between 1 and {spaceship.supply}
        </h1>
      )}
      <img
        id="card"
        className={`w-[45%] max-w-[580px] min-w-[150px] ${
          imageNumber > spaceship.supply || imageNumber < 1
            ? "hidden"
            : "visible"
        }`}
        src={imageUrl}
        alt={spaceship.name}
      />
      <div className=" text-center flex flex-col gap-4 ">
        <p className=" text-3xl font-bold ">Specifications</p>
        <p className=" md:text-2xl ">model: {spaceship.name}</p>
        <p className=" md:text-2xl ">Primary Color: {spaceship.primaryColor}</p>
        <p className=" md:text-2xl ">
          Secondary Color: {spaceship.secondaryColor}
        </p>
        <p className=" md:text-2xl ">Current Owner: {spaceship.currentOwner}</p>
        <p className=" md:text-2xl ">Status: {spaceship.status}</p>
        <p className=" md:text-2xl ">Primary Use: {spaceship.primaryUse}</p>
        <p className=" md:text-2xl ">Length: {spaceship.length}</p>
        <p className=" md:text-2xl ">Width: {spaceship.width}</p>
        <p className=" md:text-2xl ">Height: {spaceship.height}</p>
        <p className=" md:text-2xl ">Top Speed: {spaceship.topSpeed}</p>
        <p className=" md:text-2xl ">Crew: {spaceship.crew}</p>
        <p className=" md:text-2xl ">Weapons: {spaceship.weapons}</p>
      </div>
    </div>
  );
}
