'use client'

import { useParams, useRouter, useSearchParams } from 'next/navigation'

import { useProductStore } from '@/store/productStore'

export interface IEditProductFormData {
	title: string
	description: string
	image: string
}

export const useEditProduct = (idFromProps?: string) => {
	const router = useRouter()
	const { id: idFromParams } = useParams()
	// Используем переданный id, если он есть, иначе берем из useParams()
	const id = idFromProps || idFromParams

	if (!id) {
		console.error('No product id provided')
	}

	const searchParams = useSearchParams()
	const page = searchParams.get('page') || '1'
	const filter = searchParams.get('filter') || 'all'

	const { products, updateProduct } = useProductStore()

	const idNumber = id ? Number(id) : NaN
	const product = !isNaN(idNumber)
		? products.find(p => p.id === idNumber)
		: undefined

	const defaultValues = {
		title: product?.title || '',
		description: product?.description || '',
		image: product?.image || ''
	}

	const onSubmit = async (data: IEditProductFormData) => {
		if (!product) {
			console.error('Product not found')
			return
		}
		updateProduct(product.id, data)
		router.push(`/products?page=${page}&filter=${filter}`)
	}

	return { product, defaultValues, onSubmit }
}
