import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Spaceships wiki",
	description: "https://cosmikbattle.com",
};

export default function RootLayout({ children }) {
	return (
		<html
			className=' bg-[#121012] '
			lang='en'
			suppressHydrationWarning
			suppressContentEditableWarning
		>
			<head>
				<link rel='icon' href='/favicon.jpg' />
			</head>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
