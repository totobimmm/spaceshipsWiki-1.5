import React, { useState, useEffect } from "react";

const Introduction = () => {
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		setIsLoaded(true);
	}, []);

	return (
		<div className=" flex justify-center items-center bg-[url('https://twist-tales.com/wp-content/uploads/2023/09/Cometh-Cosmik-Battle-Title-16-9.png')] no-repeat bg-cover bg-center h-screen">
			<img
				className={` w-[75%] max-sm:w-[90%] max-w-[540px] min-w-32 ${
					isLoaded ? "slide-in" : "hidden"
				} `}
				src={
					"https://cdn.prod.website-files.com/659d7bdc74363cd63d1a332c/65a55486a34a8c57585cf512_logo-png-cropped-p-1080.png"
				}
				alt='Cosmik Battle Logo'
				width={100}
				height={100}
			/>
		</div>
	);
};

export default Introduction;
