"use client";
import React from "react";
import { useState, useCallback, useEffect } from "react";
import spaceships from "@/app/spaceships.js";
import { usePathname } from "next/navigation";
import Loading from "../../components/Loading.jsx";
import Link from "next/link.js";

const DisplayImage = () => {
	const [loading, setLoading] = useState(true);
	const name = usePathname().substring(1);
	const spaceship = spaceships.find((ship) => ship.href === name);
	const [imageNumber, setImageNumber] = useState(1);
	const [imageUrl, setImageUrl] = useState("");

	const updateImageSrc = useCallback(() => {
		const formattedNumber = String(imageNumber - 1).padStart(4, "0");
		setImageUrl(
			`https://images.service.cometh.io/${spaceship.id}00${formattedNumber}.png`
		);
	}, [imageNumber, spaceship.id]);

	useEffect(() => {
		updateImageSrc();
		setTimeout(() => {
			setLoading(false);
		}, 500);
	}, [updateImageSrc]);

	return (
		<>
			{loading && (
				<Loading className={`${loading ? "show-loading" : "hide-loading"}`} />
			)}
			<input
				readOnly={spaceship.supply === 1 ? true : false}
				className={` text-center bg-transparent border rounded-md hover:border-[grey] focus:border-[gray] focus:drop-shadow-[2.5px_0_5px_grey] duration-300 fixed top-[7rem] left-6 w-[18%] p-2 `}
				type='number'
				placeholder='0'
				value={imageNumber}
				onChange={(e) => {
					setImageNumber(e.target.value);
					if (e.target.value > spaceship.supply) {
						setImageNumber(spaceship.supply);
					}
				}}
			/>
			{imageNumber ? (
				<>
					{imageNumber > spaceship.supply && (
						<h1 className=' text-red-500 fixed top-[10rem] left-6 w-[50%] text-2xl '>
							Please set a value between 1 and {spaceship.supply}
						</h1>
					)}
					{imageNumber < 1 && (
						<h1 className=' text-red-500 fixed top-[10rem] left-6 w-[50%] text-2xl '>
							Please set a value between 1 and {spaceship.supply}
						</h1>
					)}
				</>
			) : (
				<h1 className=' text-red-500 fixed top-[10rem] left-6 text-3xl '>
					Please set a value
				</h1>
			)}
			<div
				id='temp '
				className={`h-[65vw] max-h-[580px] min-h-[240px] flex justify-center items-center ${
					imageNumber > spaceship.supply || imageNumber < 1
						? "visible"
						: "hidden"
				}`}
			></div>
			<Link
				className={`h-[65vw] w-fit max-h-[580px] min-h-[240px] ${
					imageNumber > spaceship.supply || imageNumber < 1
						? "hidden"
						: "visible"
				}`}
				href={imageUrl}
			>
				<img
					id='card'
					className=' h-full mx-auto '
					src={imageUrl}
					alt={spaceship.name}
				/>
			</Link>
		</>
	);
};

export default DisplayImage;
