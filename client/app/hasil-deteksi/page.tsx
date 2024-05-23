"use client"
import {
  RiSearch2Line,
  RiCarFill,
  RiMotorbikeFill,
  RiTruckFill,
  RiArrowRightSLine,
} from "react-icons/ri";
import { dataPelanggaran } from "@/data/pelanggarData";
import { DatePicker, Select, SelectItem, Input } from "@nextui-org/react";

export default function Page() {
  return (
    <div className="w-full p-4">
      <div className="flex justify-between items-center space-x-4 mb-4">
        <div className="flex items-center space-x-2 hover:cursor-pointer">
          <DatePicker
            style={{
              backgroundColor: "#f2f2f2",
            }}
          />
        </div>
        <div className="flex items-center space-x-2">
          <Select placeholder="Kamera" className="w-auto min-w-[120px]">
            <SelectItem key="kamera1" value="kamera1">
              Kamera 1
            </SelectItem>
            <SelectItem key="kamera2" value="kamera2">
              Kamera 2
            </SelectItem>
          </Select>
        </div>
        <div className="flex items-center space-x-2">
          <Select placeholder="Jenis Kendaraan" className="w-auto min-w-[150px]">
            <SelectItem key="mobil" value="mobil">
              Mobil
            </SelectItem>
            <SelectItem key="motor" value="motor">
              Motor
            </SelectItem>
            <SelectItem key="truk" value="truk">
              Truk
            </SelectItem>
          </Select>
        </div>
        <div className="flex-grow" />
        <div className="flex items-center w-auto">
          <div className="flex items-center bg-gray-100 px-2 rounded-md">
            <RiSearch2Line className="text-gray-500 mr-2" />
            <Input
              isClearable
              placeholder="Search..."
              className="bg-transparent border-none focus:ring-0 focus:border-0"
            />
          </div>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl shadow-lg bg-white">
        <div className="p-4 rounded-t-lg">
          <div className="flex justify-between text-sm font-medium bg-gray-200 p-3 rounded-xl text-gray-500 uppercase">
            <div className="w-1/4 text-left">Plat Nomor</div>
            <div className="w-1/4 text-left">Kamera</div>
            <div className="w-1/4 text-left">Jenis Kendaraan</div>
            <div className="w-1/4 text-left">Tanggal</div>
          </div>
        </div>
        <div className="space-y-4 px-6 h-[65vh] pb-4 overflow-y-auto custom-scrollbar">
          {dataPelanggaran.map((pelanggaran, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row justify-between items-center p-2 hover:cursor-pointer"
            >
              <div className="flex items-center w-1/4 text-left">
                {pelanggaran.jenisKendaraan === "Mobil" && (
                  <RiCarFill className="inline-block mr-2" />
                )}
                {pelanggaran.jenisKendaraan === "Motor" && (
                  <RiMotorbikeFill className="inline-block mr-2" />
                )}
                {pelanggaran.jenisKendaraan === "Truk" && (
                  <RiTruckFill className="inline-block mr-2" />
                )}
                <div className="text-sm font-medium text-gray-900">
                  {pelanggaran.platNomor}
                </div>
              </div>
              <div className="w-1/4 text-left text-sm pl-1 text-gray-900 font-medium">
                {pelanggaran.kamera}
              </div>
              <div className="w-1/4 text-left text-sm pl-3 text-gray-900 font-medium">
                {pelanggaran.jenisKendaraan}
              </div>
              <div className="w-1/4 text-left text-sm pl-4 text-gray-900 font-medium">
                {pelanggaran.tanggal}
              </div>
              <div className="text-gray-900 font-medium text-xl relative m-0 p-0">
                <RiArrowRightSLine />
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 0px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #888;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
      `}</style>
    </div>
  );
}