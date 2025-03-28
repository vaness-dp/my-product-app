'use client'

interface FilterBarProps {
	filterStatus: 'all' | 'liked' | 'not-liked'
	setFilterStatusAction: (status: 'all' | 'liked' | 'not-liked') => void
	searchQuery: string
	setSearchQueryAction: (query: string) => void
}

export function FilterBar({
	filterStatus,
	setFilterStatusAction,
	searchQuery,
	setSearchQueryAction
}: FilterBarProps) {
	return (
		<div className="mb-4 flex flex-col items-center justify-between gap-2 sm:flex-row">
			<div className="flex gap-2">
				<button
					className={`rounded border px-4 py-2 ${
						filterStatus === 'all' ? 'bg-blue-500 text-white' : ''
					}`}
					onClick={() => setFilterStatusAction('all')}
				>
					All
				</button>
				<button
					className={`rounded border px-4 py-2 ${
						filterStatus === 'liked' ? 'bg-blue-500 text-white' : ''
					}`}
					onClick={() => setFilterStatusAction('liked')}
				>
					Favorites
				</button>
				<button
					className={`rounded border px-4 py-2 ${
						filterStatus === 'not-liked' ? 'bg-blue-500 text-white' : ''
					}`}
					onClick={() => setFilterStatusAction('not-liked')}
				>
					Not Favorites
				</button>
			</div>
			<div>
				<input
					type="text"
					placeholder="Search by name..."
					value={searchQuery}
					onChange={e => setSearchQueryAction(e.target.value)}
					className="rounded border p-2"
				/>
			</div>
		</div>
	)
}
