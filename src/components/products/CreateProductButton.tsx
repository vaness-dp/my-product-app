'use client'

import { useRouter } from 'next/navigation'

export function CreateProductButton() {
	const router = useRouter()
	return (
		<button
			className="rounded border px-4 py-2"
			onClick={() => router.push('/create-product')}
		>
			Create product
		</button>
	)
}
