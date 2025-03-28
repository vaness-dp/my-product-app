import { JSX, Suspense } from 'react'

import EditProductClient from './EditProductClient'

export async function generateStaticParams() {
	const res = await fetch('https://fakestoreapi.com/products')
	const products = await res.json()
	return products.map((product: { id: number }) => ({
		id: product.id.toString()
	}))
}

export default async function EditProductPage(
	props: any
): Promise<JSX.Element> {
	const { params } = props
	const resolvedParams = await params // ждём разрешения params
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<EditProductClient id={resolvedParams.id} />
		</Suspense>
	)
}
