"use client";
import "./page.css";
import { useEffect, useState } from "react";
import spaceships from "./spaceships";
import { FaBars } from "react-icons/fa";
import Link from "next/link";
import Loading from "./components/Loading";
import NavLinkMap from "./components/navlinkmap";
import SecNavLinkMap from "./components/secnavlinkmap";
import Introduction from "./components/introduction";
import { RxCross1 } from "react-icons/rx";

export default function Home() {
	const [loading, setLoading] = useState(true);
	const [showCross, setShowCross] = useState(false);

	useEffect(() => {
		setLoading(false);
	}, []);

	useEffect(() => {
		if (showCross) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
	}, [showCross]);

	const categorizedSpaceships = spaceships.reduce((acc, spaceship) => {
		const manufacturer = spaceship.manufacturer;
		if (!acc[manufacturer]) {
			acc[manufacturer] = [];
		}
		acc[manufacturer].push(spaceship);
		return acc;
	}, {});

	return (
		<>
			{!showCross ? (
				<FaBars
					size={40}
					onClick={() => {
						setShowCross(true);
						document
							.getElementById("secNavLinkMap")
							.classList.remove("-translate-y-[100vh]");
					}}
					className={` fixed top-3 z-20 cursor-pointer sm:hidden ${
						showCross ? "hidden" : "block"
					} right-3`}
				/>
			) : (
				<RxCross1
					size={40}
					onClick={() => {
						setShowCross(false);
						document
							.getElementById("secNavLinkMap")
							.classList.add("-translate-y-[100vh]");
					}}
					className={`z-20 fixed top-3 z-20 cursor-pointer sm:hidden ${
						!showCross ? "hidden" : "block"
					} right-3`}
				/>
			)}
			{loading && <Loading />}
			<SecNavLinkMap
				id={"secNavLinkMap"}
				className={` z-10 ${!showCross ? "-translate-y-[100vh]" : ""} `}
			/>
			<div className={`relative ${loading ? "hidden" : "show-page"}`}>
				<NavLinkMap />

				<Introduction />
				<div className=' flex flex-wrap p-1 flex-col justify-center items-center'>
					{Object.keys(categorizedSpaceships).map((manufacturer) => (
						<div
							key={manufacturer}
							className=' flex flex-col border w-full manufacturer'
						>
							<h2 className='manufacturer-title text-2xl text-center'>
								{manufacturer}
							</h2>
							<div className=' text-center flex py-4  justify-center items-center flex-wrap spaceships'>
								{categorizedSpaceships[manufacturer].map((spaceship) => (
									<Link
										className=' text-xl px-4 py-2 my-4 mx-2 duration-300 text-black rounded-md'
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
										href={`/${spaceship.href}`}
									>
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
