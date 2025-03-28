'use client'

import { ProductForm } from '@/components/products/create-product/ProductForm'
import { BackButton } from '@/components/products/edit-product/BackButton'

import { useCreateProduct } from '@/hooks/useCreateProduct'

export default function CreateProductPage() {
	const { onSubmit } = useCreateProduct()

	return (
		<div className="container mx-auto p-4">
			<div className="mb-4 flex items-center justify-between">
				<h1 className="mb-4 text-2xl font-bold">Create a product</h1>
				<BackButton />
			</div>
			<ProductForm onSubmitAction={onSubmit} />
		</div>
	)
}
