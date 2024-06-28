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

export default function Home(): JSX.Element {
	const Header: () => JSX.Element = () => {
		return (
			<NavigationMenu>
				<NavigationMenuList className=' h-20 '>
					<NavigationMenuLink
						href='https://www.cosmikbattle.com/'
						className=' px-2 w-1/6 '
					>
						<img
							src={
								"https://cdn.prod.website-files.com/659d7bdc74363cd63d1a332c/65a79b3795b03a80f4296400_icon-png-cropped-p-500.png"
							}
							alt='logo'
							className=' w-1/4 mx-auto hover:w-[30%] transition-all duration-300 abso '
						/>
					</NavigationMenuLink>
					<NavigationMenuLink
						href='https://www.cosmikbattle.com/game'
						className=' hover:scale-110 transition-all h-fit duration-300 px-2 w-1/5 '
					>
						THE GAME
					</NavigationMenuLink>
					<NavigationMenuLink
						href='https://www.cosmikbattle.com/news'
						className=' hover:scale-110 transition-all h-fit duration-300 px-2 w-1/5 '
					>
						NEWS
					</NavigationMenuLink>
					<NavigationMenuLink
						href='https://www.cosmikbattle.com/cosmik-academy'
						className=' hover:scale-110 transition-all h-fit duration-300 px-2 w-1/5 '
					>
						COSMIK ACADEMY
					</NavigationMenuLink>
					<NavigationMenuLink
						href='https://www.cosmikbattle.com/hitmans-chest'
						className=' hover:scale-110 transition-all h-fit duration-300 px-2 w-1/5 '
					>
						HITMAN'S CHEST
					</NavigationMenuLink>
					<NavigationMenuLink
						href='https://marketplace.cosmikbattle.com/'
						className=' hover:scale-110 transition-all h-fit duration-300 px-2 w-1/5 '
					>
						MARKETPLACE
					</NavigationMenuLink>
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
