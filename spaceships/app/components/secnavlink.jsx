"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const navItemVariants = {
	hover: {
		scale: 1.05,
		transition: {
			type: "spring",
			stiffness: 300,
		},
	},
};

const SecNavLink = ({ href, text, icon, className, divClassName }) => {
	return (
		<motion.div
			variants={navItemVariants}
			whileHover='hover'
			className={`${divClassName} h-14 text-2xl flex text-center justify-center items-center hover:text-yellow-100 w-full my-2 `}
		>
			<Link
				href={href}
				py={icon ? 0 : 2}
				className={`${className} flex items-center justify-center`}
			>
				{icon ? (
					<img width={35} height={35} alt='icon' src={icon} />
				) : (
					<motion.div
						initial={{
							opacity: 0.8,
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							flexDirection: "column",
						}}
						whileHover={{ opacity: 1 }}
					>
						{text}
					</motion.div>
				)}
			</Link>
		</motion.div>
	);
};

export default SecNavLink;
