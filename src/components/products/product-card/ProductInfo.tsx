export function ProductInfo({
	title,
	description
}: {
	title: string
	description: string
}) {
	return (
		<>
			<h3 className="mb-1 line-clamp-1 text-lg font-semibold text-[#4A4A4A]">
				{title}
			</h3>
			<p className="line-clamp-3 text-sm text-gray-600">{description}</p>
		</>
	)
}
