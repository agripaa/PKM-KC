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
	className,
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
			className={className}
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
	className,
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
			className={className}
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
	className,
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
			className={className}
			{...props}
			>
			<path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
		</svg>
	)
}

export const ArrowLeft: React.FC<IconSvgProps> = ({
	size,
	width,
	height,
	color,
	className,
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
			className={className}
			{...props}
			>
			<path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"></path>
		</svg>
	)
}

export const MotorCycleIcon: React.FC<IconSvgProps> = ({
	size,
	width,
	height,
	color,
	className,
	...props
}) => {
	return(
		<svg 
			color={color}
			width={size || width}
			height={size || height}
			className={className}
			{...props}
			xmlns="http://www.w3.org/2000/svg" 
			viewBox="0 0 24 24" 
			fill="currentColor">
			<path d="M8.36547 10L11.2 8H14.6915L13.5996 5H11V3H15L16.0919 6H20V9H17.1838L18.6405 13.0022C21.0608 13.0764 23 15.0617 23 17.5C23 19.9853 20.9853 22 18.5 22C16.0147 22 14 19.9853 14 17.5C14 15.6722 15.0897 14.0989 16.6549 13.3944L15.4194 10H14.4718L12.89 15.87L9.96536 16.9389C9.98822 17.1227 10 17.31 10 17.5C10 19.9853 7.98528 22 5.5 22C3.01472 22 1 19.9853 1 17.5C1 15.5407 2.25221 13.8738 4 13.2561V12H2V10H8.36547ZM5.5 20C6.88071 20 8 18.8807 8 17.5C8 16.1193 6.88071 15 5.5 15C4.11929 15 3 16.1193 3 17.5C3 18.8807 4.11929 20 5.5 20ZM18.5 20C19.8807 20 21 18.8807 21 17.5C21 16.1193 19.8807 15 18.5 15C17.1193 15 16 16.1193 16 17.5C16 18.8807 17.1193 20 18.5 20Z"></path>
		</svg>
	)
}

export const CarIcon: React.FC<IconSvgProps> = ({
	size,
	width,
	height,
	color,
	className,
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
			className={className}
			{...props}
			>
			<path
				d="M19 20H5V21C5 21.5523 4.55228 22 4 22H3C2.44772 22 2 21.5523 2 21V12L4.51334 5.29775C4.80607 4.51715 5.55231 4 6.386 4H17.614C18.4477 4 19.1939 4.51715 19.4867 5.29775L22 12V21C22 21.5523 21.5523 22 21 22H20C19.4477 22 19 21.5523 19 21V20ZM4.136 12H19.864L17.614 6H6.386L4.136 12ZM6.5 17C7.32843 17 8 16.3284 8 15.5C8 14.6716 7.32843 14 6.5 14C5.67157 14 5 14.6716 5 15.5C5 16.3284 5.67157 17 6.5 17ZM17.5 17C18.3284 17 19 16.3284 19 15.5C19 14.6716 18.3284 14 17.5 14C16.6716 14 16 14.6716 16 15.5C16 16.3284 16.6716 17 17.5 17Z">
			</path>
		</svg>
	)
}

export const TruckIcon: React.FC<IconSvgProps> = ({
	size,
	width,
	height,
	color,
	className,
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
			className={className}
			{...props}
			>
				<path
					d="M17 8H20L23 12.0557V18H20.9646C20.7219 19.6961 19.2632 21 17.5 21C15.7368 21 14.2781 19.6961 14.0354 18H8.96456C8.72194 19.6961 7.26324 21 5.5 21C3.73676 21 2.27806 19.6961 2.03544 18H1V6C1 5.44772 1.44772 5 2 5H16C16.5523 5 17 5.44772 17 6V8ZM17 10V13H21V12.715L18.9917 10H17Z">
				</path>
		</svg>
	)
}

export const CheckboxIcon: React.FC<IconSvgProps> = ({
	size,
	width,
	height,
	color,
	className,
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
			className={className}
			{...props}
			>
				<path
					d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z">
				</path>
		</svg>
	)
}