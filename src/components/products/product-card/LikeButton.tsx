import clsx from 'clsx'
import { Heart } from 'lucide-react'

export function LikeButton({
	productId,
	liked,
	onToggle
}: {
	productId: number
	liked: boolean
	onToggle: () => void
}) {
	return (
		<button
			onClick={onToggle}
			className="absolute top-3 right-3 z-10 rounded-full bg-gray-100 p-2 shadow hover:bg-gray-200"
		>
			<Heart
				size={24}
				className={clsx(
					'h-6 w-6',
					liked ? 'fill-red-500 text-red-500' : 'text-gray-500'
				)}
			/>
		</button>
	)
}
