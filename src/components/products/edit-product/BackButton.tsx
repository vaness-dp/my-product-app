'use client'

import { useRouter } from 'next/navigation'

export function BackButton() {
	const router = useRouter()
	return (
		<button
			className="my-4 rounded border px-4 py-2"
			onClick={() => router.push('/products')}
		>
			Back
		</button>
	)
}
