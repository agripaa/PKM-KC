import React, { useEffect, useRef } from 'react';
import { dataListPelanggaranLain } from "@/data/pelanggarData";
import { RiArrowRightSLine } from "react-icons/ri";
import { ModalProps } from '@/interface/pelanggarInterface';

const ListPelanggaranLainModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
    const modalRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
            onClose();
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div ref={modalRef} className="bg-white overflow-hidden rounded-2xl shadow-lg w-full max-w-screen-xl mx-6">
                <div className="mb-10 flex justify-between items-center border-b border-gray-300">
                    <h2 className="text-lg font-medium mx-auto">B 1234 MFD</h2>
                    <button onClick={onClose} className="text-3xl mr-4 pb-2">&times;</button>
                </div>
                <div className='bg-white rounded-2xl shadow-lg  m-6'>
                    <div className="flex justify-between text-sm font-medium mx-6 bg-gray-200 p-3 rounded-xl text-gray-500 uppercase">
                        <div className="w-1/4 text-left">Lokasi</div>
                        <div className="w-1/4 text-left">Kamera</div>
                        <div className="w-1/4 text-left">Pukul</div>
                        <div className="w-1/4 text-left">Tanggal</div>
                    </div>
                    <div className="space-y-4 mx-2 my-4 px-6 h-[65vh] pb-4 overflow-y-auto custom-scrollbar">
                        {dataListPelanggaranLain.map((pelanggaran, idx) => {
                            return (
                                <a
                                    key={idx}
                                    href={`/pelanggar/${pelanggaran.platNomor}`}
                                    className="flex flex-col md:flex-row justify-between items-center p-2 hover:cursor-pointer hover:bg-gray-50"
                                >
                                    <div className="flex items-center w-1/4 text-left text-sm font-medium text-gray-900">
                                        {pelanggaran.lokasi}
                                    </div>
                                    <div className="w-1/4 text-left text-sm pl-1 text-gray-900 font-medium">
                                        {pelanggaran.kamera}
                                    </div>
                                    <div className="w-1/4 text-left text-sm pl-3 text-gray-900 font-medium">
                                        {pelanggaran.pukul}
                                    </div>
                                    <div className="w-1/4 text-left text-sm pl-4 text-gray-900 font-medium">
                                        {pelanggaran.tanggal}
                                    </div>
                                    <div className="text-gray-900 font-medium text-xl relative m-0 p-0">
                                        <RiArrowRightSLine />
                                    </div>
                                </a>
                            )
                        })}
                    </div>
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
    )
}

export default ListPelanggaranLainModal;
