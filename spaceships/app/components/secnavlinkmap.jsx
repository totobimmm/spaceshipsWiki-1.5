import React, { useEffect, useState } from "react";
import NAV_LINKS from "./nav_links";
import SecNavLink from "./secnavlink";

const SecNavLinkMap = ({ className, id }) => {
	return (
		<div id={id} className={`${className} duration-500 fixed w-full`}>
			<nav
				className={` w-full flex z-10 text-white h-screen items-center flex-col justify-center left-0 bg-[#121012] `}
			>
				{Array.isArray(NAV_LINKS) &&
					NAV_LINKS.map((link, index) => (
						<SecNavLink
							divClassName={" max-[400px]:h-7 max-[400px]:my-1 "}
							className={" max-[400px]:text-base "}
							key={index}
							{...link}
						/>
					))}
			</nav>
		</div>
	);
};

export default SecNavLinkMap;
