'use client'

import { BackButton } from '@/components/products/edit-product/BackButton'
import { ProductForm } from '@/components/products/edit-product/ProductForm'

import { useEditProduct } from '@/hooks/useEditProduct'

interface EditProductClientProps {
	id?: string
}

export default function EditProductClient({ id }: EditProductClientProps) {
	const { product, defaultValues, onSubmit } = useEditProduct(id)

	if (!product) {
		return <div>Product not found</div>
	}

	return (
		<div className="container mx-auto p-4">
			<div className="flex items-center justify-between">
				<h1 className="mb-4 text-2xl font-bold">Edit product</h1>
				<BackButton />
			</div>
			<ProductForm
				defaultValues={defaultValues}
				onSubmitAction={onSubmit}
			/>
		</div>
	)
}
