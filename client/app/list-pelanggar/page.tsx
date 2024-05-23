import { title } from "@/components/primitives";
import {
  RiCalendarEventFill,
  RiCameraFill,
  RiCarFill,
  RiMotorbikeFill,
  RiTruckFill,
  RiArrowRightSLine,
  RiSearch2Line,
} from "react-icons/ri"; // Import Remix Icons

export default function page() {
  const dataPelanggaran = [
    {
      platNomor: "B 1234 TYL",
      kamera: "Kamera 1",
      jenisKendaraan: "Mobil",
      tanggal: "14 Mei 2024",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className={title()}>Hasil Deteksi</h1>

      {/* Filter Section */}
      <div className="flex items-center space-x-4 mb-4">
        <div className="flex items-center space-x-2">
          <RiCalendarEventFill className="text-gray-500" />
          <input
            type="date"
            className="border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="flex items-center space-x-2">
          <RiCameraFill className="text-gray-500" />
          <select className="border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300">
            <option value="">Semua Kamera</option>
            <option value="kamera1">Kamera 1</option>
            <option value="kamera2">Kamera 2</option>
          </select>
        </div>
        <div className="flex items-center space-x-2">
          <RiCarFill className="text-gray-500" />
          <select className="border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300">
            <option value="">Semua Jenis</option>
            <option value="mobil">Mobil</option>
            <option value="motor">Motor</option>
            <option value="truk">Truk</option>
          </select>
        </div>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
          />
          <RiSearch2Line className="text-gray-500 absolute right-3" />
        </div>
      </div>

      {/* Table Section */}
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Plat Nomor
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Kamera
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Jenis Kendaraan
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Tanggal
            </th>
            <th className="px-6 py-3 bg-gray-50"></th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {dataPelanggaran.map((pelanggaran, idx) => (
            <tr key={idx}>
              <td className="px-6 py-4 whitespace-no-wrap">
                {pelanggaran.jenisKendaraan === "Mobil" && (
                  <RiCarFill className="inline-block mr-2" />
                )}
                {pelanggaran.jenisKendaraan === "Motor" && (
                  <RiMotorbikeFill className="inline-block mr-2" />
                )}
                {pelanggaran.jenisKendaraan === "Truk" && (
                  <RiTruckFill className="inline-block mr-2" />
                )}
                {pelanggaran.platNomor}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap">{pelanggaran.kamera}</td>
              <td className="px-6 py-4 whitespace-no-wrap">
                {pelanggaran.jenisKendaraan}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap">{pelanggaran.tanggal}</td>
              <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
                <RiArrowRightSLine className="text-gray-500" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
