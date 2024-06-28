import React, { useEffect, useState } from "react";
import NAV_LINKS from "./nav_links";
import NavLink from "./navlink";

const NavLinkMap = () => {
	const [scrollY, setScrollY] = useState(0);
	const [innerWidth, setInnerWidth] = useState(0);

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

	return (
		<nav
			className={` max-sm:${
				innerWidth < 425 ? "hidden" : "block"
			} w-full flex z-10 text-white items-center justify-center absolute left-0 bg-[#121012] `}
		>
			{Array.isArray(NAV_LINKS) &&
				NAV_LINKS.map((link, index) => <NavLink key={index} {...link} />)}
		</nav>
	);
};

export default NavLinkMap;
