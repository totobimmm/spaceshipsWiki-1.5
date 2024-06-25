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

  useEffect(() => {
    updateImageSrc();
  }, [updateImageSrc]);

  return (
    <div className=" min-h-screen text-white flex justify-center items-center flex-col">
      <input
        contentEditable
        className=" fixed top-[7rem] left-6 w-[18%] p-2"
        type="number"
        value={imageNumber}
        onChange={(e) => setImageNumber(e.target.value)}
      />
      <img className="w-1/2" src={imageUrl} alt={spaceship.name} />
      <p>model: {spaceship.name}</p>
      <p>Primary Color: {spaceship.primaryColor}</p>
      <p>Secondary Color: {spaceship.secondaryColor}</p>
      <p>Current Owner: {spaceship.currentOwner}</p>
      <p>Status: {spaceship.status}</p>
      <p>Primary Use: {spaceship.primaryUse}</p>
      <p>Length: {spaceship.length}</p>
      <p>Width: {spaceship.width}</p>
      <p>Height: {spaceship.height}</p>
      <p>Top Speed: {spaceship.topSpeed}</p>
      <p>Crew: {spaceship.crew}</p>
      <p>Weapons: {spaceship.weapons}</p>
    </div>
  );
}
