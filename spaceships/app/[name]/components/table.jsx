import React from "react";
import spaceships from "@/app/spaceships.js";
import { usePathname } from "next/navigation";


const Table = () => {
	const name = usePathname().substring(1);
	const spaceship = spaceships.find((ship) => ship.href === name);

	return (
		<div className=' text-center flex flex-col gap-4 '>
			<p className=' text-3xl font-bold '>Specifications</p>
			<p className=' md:text-2xl '>model: {spaceship.name}</p>
			<p className=' md:text-2xl '>Primary Color: {spaceship.primaryColor}</p>
			<p className=' md:text-2xl '>
				Secondary Color: {spaceship.secondaryColor}
			</p>
			<p className=' md:text-2xl '>Current Owner: {spaceship.currentOwner}</p>
			<p className=' md:text-2xl '>Status: {spaceship.status}</p>
			<p className=' md:text-2xl '>Primary Use: {spaceship.primaryUse}</p>
			<p className=' md:text-2xl '>Length: {spaceship.length}</p>
			<p className=' md:text-2xl '>Width: {spaceship.width}</p>
			<p className=' md:text-2xl '>Height: {spaceship.height}</p>
			<p className=' md:text-2xl '>Top Speed: {spaceship.topSpeed}</p>
			<p className=' md:text-2xl '>Crew: {spaceship.crew}</p>
			<p className=' md:text-2xl '>Weapons: {spaceship.weapons}</p>
		</div>
	);
};

export default Table;
