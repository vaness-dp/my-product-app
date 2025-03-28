'use client'

import { useRouter } from 'next/navigation'

import { IProduct, useProductStore } from '@/store/productStore'

export interface IFormData {
	title: string
	description: string
	image: string
}

export const useCreateProduct = () => {
	const { addProduct } = useProductStore()
	const router = useRouter()

	const onSubmit = async (data: IFormData) => {
		const newProduct: IProduct = {
			id: Date.now(),
			title: data.title,
			description: data.description,
			image: data.image,
			liked: false
		}

		addProduct(newProduct)
		router.push('/products')
	}

	return { onSubmit }
}
