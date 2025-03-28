import { JSX } from 'react'

import { BackButton } from '@/components/products/edit-product/BackButton'

export async function generateStaticParams() {
	const res = await fetch('https://fakestoreapi.com/products')
	const products = await res.json()
	return products.map((product: { id: number }) => ({
		id: product.id.toString()
	}))
}

async function getProduct(id: string) {
	const res = await fetch(`https://fakestoreapi.com/products/${id}`)
	if (!res.ok) throw new Error('Failed to fetch product')
	return res.json()
}

export default async function ProductDetailPage(
	props: any
): Promise<JSX.Element> {
	const resolvedParams = await props.params
	const product = await getProduct(resolvedParams.id)

	if (!product) {
		return <div>Product not found</div>
	}

	return (
		<div className="container mx-auto p-4">
			<BackButton />
			<div className="flex flex-col md:flex-row">
				<img
					src={product.image}
					alt={product.title}
					className="mb-4 w-full object-cover md:mb-0 md:w-1/3"
				/>
				<div className="md:ml-4">
					<h2 className="text-2xl font-bold">{product.title}</h2>
					<p className="mt-2 text-gray-500">{product.description}</p>
				</div>
			</div>
		</div>
	)
}
