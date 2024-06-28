import { Button } from "@/components/ui/button";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuIndicator,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Image from "next/image";

export default function Home() {
	const Header = () => {
		return (
			<NavigationMenu>
				<NavigationMenuList className=' h-20 '>
					<NavigationMenuLink href='/' className=' px-2 '>
						<img
							src={
								"https://cdn.prod.website-files.com/659d7bdc74363cd63d1a332c/65a79b3795b03a80f4296400_icon-png-cropped-p-500.png"
							}
							alt='logo'
							className=' w-[8%] hover:w-[10%] transition-all duration-300 abso '
						/>
					</NavigationMenuLink>
					<NavigationMenuLink className=' px-2 w-1/5 '>
						THE GAME
					</NavigationMenuLink>
					<NavigationMenuItem className=' px-2 w-1/5 '>
						Item Three
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
		);
	};

	return (
		<div>
			<Header />
		</div>
	);
}
