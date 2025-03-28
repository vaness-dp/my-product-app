import { Edit3, X } from 'lucide-react'

export function ActionButtons({
	productId,
	onEdit,
	onRemove
}: {
	productId: number
	onEdit: () => void
	onRemove: () => void
}) {
	return (
		<div className="flex items-center justify-end gap-2 p-4">
			<button
				onClick={onEdit}
				className="rounded p-2 text-gray-500 transition-colors hover:text-blue-500"
			>
				<Edit3
					size={24}
					className="h-6 w-6"
				/>
			</button>
			<button
				onClick={onRemove}
				className="rounded p-2 text-gray-500 transition-colors hover:text-red-500"
			>
				<X
					size={24}
					className="h-6 w-6"
				/>
			</button>
		</div>
	)
}
