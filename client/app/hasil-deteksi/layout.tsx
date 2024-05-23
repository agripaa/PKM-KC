export default function HasilDeteksiLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="flex flex-col items-center justify-center w-full  py-2 md:py-2">
			<div className="inline-block w-full text-center justify-center">
				{children}
			</div>
		</section>
	);
}
