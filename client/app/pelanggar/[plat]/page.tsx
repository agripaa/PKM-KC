"use client";
import * as React from "react";
import { Img } from "@/components/image";
import { FaInfoCircle } from "react-icons/fa";
import { ArrowLeft } from "@/components/icons";
import pelanggar from "@/assets/pelanggar.png";
import ListPelanggaranLainModal from "@/components/modal/ListPelanggaranLainModal";
import FormReportPelanggaran from "@/components/modal/FormReportPelanggaran";

export default function Pelanggar() {
  const [isModalPelanggaranOpen, setModalPelanggaranOpen] = React.useState(false);
  const [isModalReportOpen, setModalReportOpen] = React.useState(false);

  const openModalPelanggaran = () => setModalPelanggaranOpen(true);
  const closeModalPelanggaran = () => setModalPelanggaranOpen(false);

  const openModalReport = () => setModalReportOpen(true);
  const closeModalReport = () => setModalReportOpen(false);

  const violationData = {
    platNomor: "B 1234 TYL",
    tanggal: "09 Mei 2024",
    pukul: "16:24:14 WIB",
    durasi: "3 jam 18 menit 11 detik",
    warna: "Hitam",
    kategori: "Mobil",
    lokasi: "Jalan Margonda Raya, Depok",
  };

  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="flex justify-center align-center w-full h-full items-start p-6">
      <div className="flex w-full h-full items-center">
        <Img
          src={pelanggar}
          alt="Violation Image"
          className="w-6/12 h-auto object-cover p-4 rounded-md mr-4"
        />
        <div
          onClick={goBack}
          className="flex flex-row items-center absolute z-20 left-[11%] top-[19%] text-sm hover:cursor-pointer"
        >
          <ArrowLeft size={25} color="#3b82f6" className="inline-block" />
          <p className="ml-2 pb-[1px] text-sm text-blue-500">Kembali</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg text-left h-[80%] w-[50%] p-4 relative">
          <h3 className="text-3xl font-bold mb-6">{violationData.platNomor}</h3>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <p className="text-md mb-2 font-bold">Tanggal</p>
            <p className="text-md mb-2 font-semibold">{violationData.tanggal}</p>

            <p className="text-md mb-2 font-bold">Pukul</p>
            <p className="text-md mb-2 font-semibold">{violationData.pukul}</p>

            <p className="text-md mb-2 font-bold col-span-1">Durasi Melanggar</p>
            <p className="text-md mb-2 font-semibold col-span-1">{violationData.durasi}</p>

            <p className="text-md mb-2 font-bold">Warna Kendaraan</p>
            <p className="text-md mb-2 font-semibold">{violationData.warna}</p>

            <p className="text-md mb-2 font-bold">Kategori Kendaraan</p>
            <p className="text-md mb-2 font-semibold">{violationData.kategori}</p>

            <p className="text-md mb-2 font-bold col-span-1">Lokasi</p>
            <p className="text-md mb-2 font-semibold col-span-1">{violationData.lokasi}</p>
          </div>
          <button
            className="bg-blue-500 text-white py-3 rounded-xl text-md hover:bg-blue-600 w-full"
            onClick={openModalPelanggaran}
          >
            Lihat Pelanggaran Lainnya
          </button>
          <button onClick={openModalReport} className="absolute top-4 right-4 bg-red-100 rounded-xl p-2">
            <FaInfoCircle className="text-red-600" />
          </button>
        </div>
      </div>
      <ListPelanggaranLainModal isOpen={isModalPelanggaranOpen} onClose={closeModalPelanggaran} />
      <FormReportPelanggaran isOpen={isModalReportOpen} onClose={closeModalReport} />
    </div>
  );
}
