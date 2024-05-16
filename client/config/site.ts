export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "ParQR Site",
	description: "",
	navItems: [
		{
			label: "Kamera",
			href: "/",
		},
		{
			label: "Hasil Deteksi",
			href: "/hasil-deteksi",
		},
	],
};
