import { Img } from "@/components/image";
import cam1 from "@/assets/cam1.png";
import React from "react";
import {RadioGroup, Radio} from "@nextui-org/react";

export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 md:py-10">
			<div className="w-10/12">
				<Img 
					src={cam1}
					alt="cam1"
					className="m-0 p-0 w-max h-auto"
				/>
			</div>
			<div className="flex flex-row w-full gap-3 justify-between">
				<div className="w-full h-auto p-4">
					<h5 className="font-semibold text-lg">Pilih Kamera</h5>
					<form action="" method="get">
					<RadioGroup
						orientation="horizontal"
						defaultValue="cam1"
						className="mt-3"
						>
						<Radio value="cam1" className="mr-1">Kamera 1</Radio>
						<Radio value="cam2" className="mr-1">Kamera 2</Radio>
						</RadioGroup>
					</form>
				</div>
				<div className="w-full h-auto p-4">
					<i className="ri-map-pin-fill"></i>
				</div>
				<div className="w-full h-auto p-4">
					tes
				</div>
			</div>
		</section>
	);
}
