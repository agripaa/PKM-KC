"use client";
import {
  RiSearch2Line,
  RiCarFill,
  RiMotorbikeFill,
  RiTruckFill,
  RiArrowRightSLine,
} from "react-icons/ri";
import { FaChevronDown } from "react-icons/fa";
import { dataPelanggaran } from "@/data/pelanggarData";
import { useState, useEffect, useRef } from "react";

export default function Page() {
  const [selectedKamera, setSelectedKamera] = useState<string>("");
  const [showKameraDropdown, setShowKameraDropdown] = useState(false);
  const [selectedKendaraan, setSelectedKendaraan] = useState<string>("");
  const [showKendaraanDropdown, setShowKendaraanDropdown] = useState(false);

  const kameraDropdownRef = useRef<HTMLDivElement>(null);
  const kendaraanDropdownRef = useRef<HTMLDivElement>(null);

  const handleKameraSelect = (value: string) => {
    setSelectedKamera(value);
    setShowKameraDropdown(false);
  };

  const handleKendaraanSelect = (value: string) => {
    setSelectedKendaraan(value);
    setShowKendaraanDropdown(false);
  };

  const toggleKameraDropdown = () => {
    setShowKameraDropdown((prev) => {
      if (!prev) {
        setShowKendaraanDropdown(false);
      }
      return !prev;
    });
  };

  const toggleKendaraanDropdown = () => {
    setShowKendaraanDropdown((prev) => {
      if (!prev) {
        setShowKameraDropdown(false);
      }
      return !prev;
    });
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      kameraDropdownRef.current &&
      !kameraDropdownRef.current.contains(event.target as Node)
    ) {
      setShowKameraDropdown(false);
    }
    if (
      kendaraanDropdownRef.current &&
      !kendaraanDropdownRef.current.contains(event.target as Node)
    ) {
      setShowKendaraanDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full p-4">
      <div className="flex justify-between items-center space-x-4 mb-4">
        <div className="flex items-center justify-center space-x-2 hover:cursor-pointer font-semibold relative">
          <input type="date" className="bg-gray-100 p-2 rounded-md w-11/12" />
        </div>
        <div className="flex items-center space-x-2 relative w-38" ref={kameraDropdownRef}>
          <div
            className="bg-gray-100 rounded-md p-2 w-full flex justify-between items-center font-semibold cursor-pointer"
            onClick={toggleKameraDropdown}
          >
            <span>{selectedKamera || "Kamera"}</span>
            <FaChevronDown className="text-gray-500 ml-4 text-sm" />
          </div>
          {showKameraDropdown && (
            <div className="absolute top-full left-0 bg-white text-start p-2 shadow-md rounded-md mt-1 w-[128px] z-10">
              <div
                className="p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleKameraSelect("Kamera 1")}
              >
                Kamera 1
              </div>
              <div
                className="p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleKameraSelect("Kamera 2")}
              >
                Kamera 2
              </div>
            </div>
          )}
        </div>
        <div className="flex items-center space-x-2 relative w-42" ref={kendaraanDropdownRef}>
          <div
            className="bg-gray-100 rounded-md p-2 w-full flex text-md justify-between font-semibold items-center cursor-pointer"
            onClick={toggleKendaraanDropdown}
          >
            <span>{selectedKendaraan || "Jenis Kendaraan"}</span>
            <FaChevronDown className="text-gray-500 ml-4 text-sm" />
          </div>
          {showKendaraanDropdown && (
            <div className="absolute top-full left-0 bg-white shadow-md p-2 rounded-md mt-1 w-full z-10 text-start">
              <div
                className="p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleKendaraanSelect("Mobil")}
              >
                Mobil
              </div>
              <div
                className="p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleKendaraanSelect("Motor")}
              >
                Motor
              </div>
              <div
                className="p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleKendaraanSelect("Truk")}
              >
                Truk
              </div>
            </div>
          )}
        </div>
        <div className="flex-grow" />
        <div className="flex items-center w-auto">
          <div className="flex items-center bg-gray-100 px-2 rounded-md">
            <RiSearch2Line className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent p-2 border-none focus:ring-0 focus:border-0"
            />
          </div>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl shadow-lg bg-white">
        <div className="p-4 rounded-t-lg">
          <div className="flex justify-between text-sm font-medium bg-gray-100 p-3 rounded-xl text-gray-500 uppercase">
            <div className="w-1/4 text-left">Plat Nomor</div>
            <div className="w-1/4 text-left">Kamera</div>
            <div className="w-1/4 text-left">Jenis Kendaraan</div>
            <div className="w-1/4 text-left">Tanggal</div>
          </div>
        </div>
        <div className="space-y-4 px-6 h-[65vh] pb-4 overflow-y-auto custom-scrollbar">
          {dataPelanggaran.map((pelanggaran, idx) => (
            <a
              key={idx}
              href={`pelanggar/${pelanggaran.platNomor}`}
              className="flex flex-row justify-between items-center p-2 hover:cursor-pointer hover:bg-gray-50 rounded-lg"
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
            </a>
          ))}
        </div>
      </div>
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 1px;
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
