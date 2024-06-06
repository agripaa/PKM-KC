"use client"
import { Img } from "@/components/image";
import cam1 from "@/assets/cam1.png";
import * as React from "react";
import { RadioGroup, Radio } from "@nextui-org/react";
import { ArrowRight, MapPin, Time } from "@/components/icons";
import PelanggarListModal from "@/components/modal/PelanggarListModal";

export default function Home() {
  const [isModalOpen, setModalOpen] = React.useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

  return (
    <section className="flex flex-col items-center justify-between gap-3 md:py-2">
      <div className="flex-grow w-full flex justify-center items-center p-1">
        <Img
          src={cam1}
          alt="cam1"
          className="m-0 p-0 w-9/12 h-auto"
        />
      </div>
      <div className="flex flex-row w-full gap-3 justify-between px-4">
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
        <div className="flex flex-col w-full p-4 items-center">
          <div className="justify-center">
            <div className="flex flex-row w-full mt-2">
              <div className="mr-2">
                <MapPin color="#3b82f6" className="justify-center" />
              </div>
              <p className="font-semibold">
                Jalan Raya Margonda Raya, Depok
              </p>
            </div>
            <div className="flex flex-row w-full mt-2">
              <div className="mr-2">
                <Time color="#3b82f6" className="justify-center" />
              </div>
              <p className="font-semibold">
                12.45 WIB
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row w-full h-full mt-4 justify-end">
          <div className="relative w-7/12 p-2 pl-4 bg-blue-500 h-18 rounded-2xl text-white flex items-center justify-between cursor-pointer" onClick={openModal}>
            <div className="flex flex-col space-y-1 mr-4"> {/* Added space-y-1 */}
              <span className="font-semibold text-large">Kamis, 9 Mei 2024</span> {/* Changed text-base */}
              <span className="text-sm">Pelanggaran hari ini: 7</span>
            </div>
            <div>
              <ArrowRight className="justify-center" color="#FAFAFA" width={30} height={30}/>
            </div>
          </div>
        </div>
      </div>
      <PelanggarListModal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
}
