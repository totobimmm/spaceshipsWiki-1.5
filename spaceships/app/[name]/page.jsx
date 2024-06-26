"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState, useCallback } from "react";
import spaceships from "../spaceships.js";
import Table from "./components/table.jsx";
import DisplayImage from "./components/displayImage.jsx";

export default function SpaceshipPage() {
	const searchParams = useSearchParams();
	const [name, setName] = useState(usePathname().substring(1));

	useEffect(() => {
		const nameParam = searchParams.get("name");
		if (nameParam) {
			setName(nameParam);
		}
	}, [searchParams]);

	const spaceship = spaceships.find((ship) => ship.href === name);

	if (!spaceship) {
		return (
			<div className=' text-white '>
				{usePathname().substring(1)} non trouvé
			</div>
		);
	}

	return (
		<div className=' min-h-screen text-white flex justify-center items-center flex-col gap-8 '>
			<DisplayImage />
			<Table />
		</div>
	);
}
