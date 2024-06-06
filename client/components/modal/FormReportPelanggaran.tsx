import React, { useEffect, useRef, useState } from 'react';
import { ModalProps } from '@/interface/pelanggarInterface';
import SuccessSubmitFormModal from './SuccessSubmitFormModal';

const FormReportPelanggaran: React.FC<ModalProps> = ({ isOpen, onClose, initialData = {} }) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const [formData, setFormData] = useState({
        namaLengkap: initialData.namaLengkap || '',
        email: initialData.email || '',
        keterangan: initialData.keterangan || ''
    });
    const [isFormValid, setIsFormValid] = useState(false);
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

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

    useEffect(() => {
        setIsFormValid(
            formData.namaLengkap.trim() !== '' &&
            formData.email.trim() !== '' &&
            formData.keterangan.trim() !== ''
        );
    }, [formData]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isFormValid) {
            console.log('Form submitted:', formData);
            setIsSuccessModalOpen(true);
            onClose(); // Close the form modal when submitting
            setFormData({
                namaLengkap: '',
                email: '',
                keterangan: ''
            });
        }
    };

    if (!isOpen && !isSuccessModalOpen) return null;

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div ref={modalRef} className="bg-white overflow-hidden rounded-2xl shadow-lg w-3/12 max-w-screen-xl mx-6">
                        <div className="mb-4 flex justify-between items-center border-b border-gray-300">
                            <h2 className="text-lg font-medium mx-auto">B 1234 MFD</h2>
                            <button onClick={onClose} className="text-3xl mr-4 pb-2">&times;</button>
                        </div>
                        <div className='bg-white m-6'>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label htmlFor="namaLengkap" className="block text-start text-sm font-bold text-gray-900">
                                        Nama Lengkap
                                    </label>
                                    <input
                                        type="text"
                                        name="namaLengkap"
                                        id="namaLengkap"
                                        value={formData.namaLengkap}
                                        placeholder='Masukkan nama pelanggar'
                                        onChange={handleChange}
                                        className="mt-2 p-3 block w-full bg-gray-100 border border-gray-100 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-start text-sm font-bold text-gray-900">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        value={formData.email}
                                        placeholder='Masukkan email pelanggar'
                                        onChange={handleChange}
                                        className="mt-2 p-3 block w-full bg-gray-100 border border-gray-100 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                        required
                                    />
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="keterangan" className="block text-start text-sm font-bold text-gray-900">
                                        Keterangan
                                    </label>
                                    <textarea
                                        name="keterangan"
                                        id="keterangan"
                                        value={formData.keterangan}
                                        placeholder='Masukkan keterangan pelanggar'
                                        onChange={handleChange}
                                        className="mt-2 p-3 block w-full bg-gray-100 border border-gray-100 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                        rows={3}
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className={`w-full py-3 rounded-xl text-md shadow-md shadow-blue-500 bg-blue-500 text-white ${isFormValid ? 'opacity-100 hover:bg-blue-600' : 'opacity-50 cursor-not-allowed'}`}
                                    disabled={!isFormValid}
                                >
                                    Kirim
                                </button>
                            </form>
                        </div>   
                    </div>
                </div>
            )}
            {isSuccessModalOpen && (
                <SuccessSubmitFormModal
                    isOpen={isSuccessModalOpen}
                    onClose={() => setIsSuccessModalOpen(false)}
                />
            )}
        </>
    );
}

export default FormReportPelanggaran;
