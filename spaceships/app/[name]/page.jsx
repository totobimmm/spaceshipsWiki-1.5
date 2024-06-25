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

  const spaceship = spaceships.find((ship) => ship.name === name);
  const id = spaceship.id;

  if (!spaceship) {
    return <div>Vaisseau non trouvé</div>;
  }

  const updateImageSrc = useCallback(() => {
    const formattedNumber = String(imageNumber - 1).padStart(4, "0");
    setImageUrl(
      `https://images.service.cometh.io/${id}00${formattedNumber}.png`
    );
  }, [imageNumber, id]);

  useEffect(() => {
    updateImageSrc();
  }, [updateImageSrc]);

  return (
    <div className=" min-h-screen flex justify-center items-center flex-col">
      <input
        className=" fixed bottom-0 left-0 w-full p-2"
        type="number"
        value={imageNumber}
        onChange={(e) => setImageNumber(e.target.value)}
      />
      <img className="w-1/2" src={imageUrl} alt={spaceship.name} />
      <p>model: {spaceship.name}</p>
      <p>Couleur principale: {spaceship.primaryColor}</p>
      <p>Couleur secondaire: {spaceship.secondaryColor}</p>
      <p>Propriétaire actuel: {spaceship.currentOwner}</p>
      <p>Statut: {spaceship.status}</p>
      <p>Utilisation principale: {spaceship.primaryUse}</p>
      <p>Longueur: {spaceship.length}</p>
      <p>Largeur: {spaceship.width}</p>
      <p>Hauteur: {spaceship.height}</p>
      <p>Vitesse maximale: {spaceship.topSpeed}</p>
      <p>Équipage: {spaceship.crew}</p>
      <p>Armes: {spaceship.weapons}</p>
    </div>
  );
}
