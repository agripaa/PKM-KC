export interface IPelanggaran {
    platNomor: string;
    kamera: string;
    jenisKendaraan: string;
    tanggal: string;
}

export interface IListPelanggaran extends IPelanggaran {
    pukul: string;
    durasiMelanggar: string;
}

export interface PelanggarListModalProps {
    isOpen: boolean;
    onClose: () => void;
}