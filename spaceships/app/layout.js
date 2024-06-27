import { Advent_Pro } from "next/font/google";
import "./globals.css";

const adventPro = Advent_Pro({ subsets: ["latin"] });

export const metadata = {
	title: "Spaceships wiki",
	description: "https://cosmikbattle.com",
};

export default function RootLayout({ children }) {
	return (
		<html
			style={{ overflowX: "hidden" }}
			className=' bg-[#121012] '
			lang='en'
			suppressHydrationWarning
			suppressContentEditableWarning
		>
			<head>
				<link rel='icon' href='/favicon.jpg' />
			</head>
			<body className={adventPro.className}>{children}</body>
		</html>
	);
}
