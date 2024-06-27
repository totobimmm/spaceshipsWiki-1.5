"use client";
import "./page.css";
import { useEffect, useState } from "react";
import spaceships from "./spaceships";
import { FaBars } from "react-icons/fa";
import Link from "next/link";
import Loading from "./Loading";
import NavLinkMap from "./components/navlinkmap";
import SecNavLinkMap from "./components/secnavlinkmap";
import Introduction from "./components/introduction";

export default function Home() {
	const [loading, setLoading] = useState(true);
	const [isLoaded, setIsLoaded] = useState(false);
	const [showCross, setShowCross] = useState(false);

	useEffect(() => {
		setLoading(false);
		setIsLoaded(true);
	}, []);

	const categorizedSpaceships = spaceships.reduce((acc, spaceship) => {
		const { manufacturer } = spaceship;
		if (!acc[manufacturer]) {
			acc[manufacturer] = [];
		}
		acc[manufacturer].push(spaceship);
		return acc;
	}, {});

	return showCross ? (
		<div>
			<SecNavLinkMap />
		</div>
	) : (
		<>
			{loading && <Loading />}
			<div className={`relative ${loading ? "hidden" : "show-page"}`}>
				<FaBars
					size={40}
					onClick={() => {
						setShowCross(true);
					}}
					className={` absolute top-3 right-3 ${
						showCross ? "hidden" : "block"
					}`}
				/>
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
