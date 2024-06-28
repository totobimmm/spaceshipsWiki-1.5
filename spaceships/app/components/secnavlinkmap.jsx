import React, { useEffect, useState } from "react";
import NAV_LINKS from "./nav_links";
import SecNavLink from "./secnavlink";
import { RxCross1 } from "react-icons/rx";
import Loading from "./Loading";

const SecNavLinkMap = () => {
	const [scrollY, setScrollY] = useState(0);
	const [innerWidth, setInnerWidth] = useState(0);
	const [loading, setLoading] = useState(true);

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

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 500);
	}, []);

	return (
		<>
			{loading && <Loading />}
			<RxCross1
				size={40}
				onClick={() => {
					location.reload();
				}}
				className={`z-20 absolute top-3 right-3 `}
			/>
			<nav
				className={` ${
					innerWidth < 640 ? "block" : "hidden"
				} w-full flex z-10 text-white h-screen items-center flex-col justify-center left-0 bg-[#121012] `}
			>
				{Array.isArray(NAV_LINKS) &&
					NAV_LINKS.map((link, index) => <SecNavLink key={index} {...link} />)}
			</nav>
		</>
	);
};

export default SecNavLinkMap;
