'use client'

import { useParams } from 'next/navigation'

import { useProductStore } from '@/store/productStore'

export const useProductDetail = () => {
	const { id } = useParams()
	const { products } = useProductStore()
	const product = products.find(p => p.id === Number(id))
	return { product }
}
