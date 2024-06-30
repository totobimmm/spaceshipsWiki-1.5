import React, { useEffect, useState } from "react";
import NAV_LINKS from "./nav_links";
import NavLink from "./navlink";

const NavLinkMap = () => {
	return (
		<nav
			className={` max-sm:hidden w-full flex z-10 text-white items-center justify-center absolute left-0 bg-[#121012] `}
		>
			{Array.isArray(NAV_LINKS) &&
				NAV_LINKS.map((link, index) => <NavLink key={index} {...link} />)}
		</nav>
	);
};

export default NavLinkMap;
