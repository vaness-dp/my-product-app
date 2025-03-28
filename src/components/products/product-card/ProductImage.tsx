export function ProductImage({
	image,
	title
}: {
	image: string
	title: string
}) {
	return (
		<div className="relative mb-2 aspect-[4/3] w-full rounded-lg">
			<img
				src={image}
				alt={title}
				className="absolute inset-0 h-full w-full rounded-md object-contain"
			/>
		</div>
	)
}
