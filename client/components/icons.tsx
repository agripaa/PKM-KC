import * as React from "react";
import { ILogoPng } from "@/interface";
import Image from "next/image";

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