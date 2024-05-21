import * as React from "react";
import { ILogoPng } from "@/interface";
import Image from "next/image";
import { IconSvgProps } from "@/types";

export const Logo: React.FunctionComponent<ILogoPng> = ({
	src,
	size,
	width,
	height,
	className
}) => (
	<Image
		src={src}
		alt="Logo ParQR"
		className={className}
		height={size || height}
		width={size || width}
	/>
);

export const MapPin : React.FC<IconSvgProps> = ({
	size = 22.5,
	width,
	height,
	color,
	...props
}) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg" 
			viewBox="0 0 24 24" 
			fill="currentColor"
			color={color}
			width={size || width}
			height={size || height}
			className="justify-center"
			{...props}
			>
			<path d="M18.364 17.364L12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364ZM12 15C14.2091 15 16 13.2091 16 11C16 8.79086 14.2091 7 12 7C9.79086 7 8 8.79086 8 11C8 13.2091 9.79086 15 12 15ZM12 13C10.8954 13 10 12.1046 10 11C10 9.89543 10.8954 9 12 9C13.1046 9 14 9.89543 14 11C14 12.1046 13.1046 13 12 13Z">
			</path>
		</svg>
	)
}

export const Time: React.FC<IconSvgProps> = ({
	size = 22.5,
	width,
	height,
	color,
	...props
}) => {
	return(
		<svg 
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24" 
			fill="currentColor"
			color={color}
			width={size || width}
			height={size || height}
			className="justify-center"
			{...props}
			>
			<path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM13 12V7H11V14H17V12H13Z">
			</path>
		</svg>
	)
}

export const ArrowRight: React.FC<IconSvgProps> = ({
	size,
	width,
	height,
	color,
	...props
}) => {
	return(
		<svg 
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24" 
			fill="currentColor"
			color={color}
			width={size || width}
			height={size || height}
			className="justify-center"
			{...props}
			>
			<path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
		</svg>
	)
}