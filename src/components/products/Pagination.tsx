'use client'

import { CreateProductButton } from '@/components/products/CreateProductButton'

interface IPagination {
	currentPage: number
	totalPages: number
	onPageChangeAction: (newPage: number) => void
}

export function Pagination({
	currentPage,
	totalPages,
	onPageChangeAction
}: IPagination) {
	return (
		<div className="mt-4 flex items-center justify-center gap-4">
			<button
				onClick={() => onPageChangeAction(Math.max(currentPage - 1, 1))}
				disabled={currentPage === 1}
				className="rounded border px-4 py-2 disabled:opacity-50"
			>
				Previous
			</button>
			<span>
				Page {currentPage} of {totalPages}
			</span>
			<button
				onClick={() =>
					onPageChangeAction(Math.min(currentPage + 1, totalPages))
				}
				disabled={currentPage === totalPages}
				className="rounded border px-4 py-2 disabled:opacity-50"
			>
				Next
			</button>
			<CreateProductButton />
		</div>
	)
}
