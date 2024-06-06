export default function PelanggarLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="flex flex-col items-center h-[90vh] justify-center gap-4 py-8 md:py-10">
			<div className="inline-block w-full h-full text-center justify-center">
				{children}
			</div>
		</section>
	);
}
