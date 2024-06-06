export interface IPelanggaran {
    platNomor?: string | undefined | null;
    kamera: string | undefined | null;
    jenisKendaraan?: string | undefined | null;
    tanggal: string | undefined | null;
}

export interface IListPelanggaran extends IPelanggaran {
    pukul: string;
    durasiMelanggar?: string;
}

export interface IPelanggaranLain extends IListPelanggaran {
    lokasi: string;
}

export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    initialData?: {
        namaLengkap?: string;
        email?: string;
        keterangan?: string;
    };
}