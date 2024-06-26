import React from "react";
import { VscLoading } from "react-icons/vsc";

const Loading = ({ className }) => {
	return (
		<div
			className={` z-50 flex w-full h-screen justify-center items-center fixed top-0 left-0 bg-[rgba(0,0,0,0.8)] ${className}`}
		>
			<VscLoading className='text-white animate-spin size-[10rem]' />
		</div>
	);
};

export default Loading;
