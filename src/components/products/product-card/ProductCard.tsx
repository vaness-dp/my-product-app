'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

import { ActionButtons } from '@/components/products/product-card/ActionButtons'
import { LikeButton } from '@/components/products/product-card/LikeButton'
import { ProductImage } from '@/components/products/product-card/ProductImage'
import { ProductInfo } from '@/components/products/product-card/ProductInfo'
import type { IProductCard } from '@/components/products/product-card/product-card.interface'

import { useProductStore } from '@/store/productStore'

export function ProductCard({ product }: IProductCard) {
	const { removeProduct, toggleLike } = useProductStore()
	const router = useRouter()

	const handleCardClick = (e: React.MouseEvent) => {
		const target = e.target as HTMLElement
		if (target.closest('button')) return
	}

	const handleEdit = () => {
		router.push(`/products/edit/${product.id}`)
	}

	const handleRemove = () => {
		removeProduct(product.id)
	}

	return (
		<div
			className="relative flex w-full flex-col overflow-hidden rounded-xl bg-white shadow-md hover:shadow-lg"
			onClick={handleCardClick}
		>
			<LikeButton
				productId={product.id}
				liked={product.liked}
				onToggle={() => toggleLike(product.id)}
			/>
			<Link
				href={`/products/${product.id}`}
				className="flex-grow p-4"
			>
				<ProductImage
					image={product.image}
					title={product.title}
				/>
				<ProductInfo
					title={product.title}
					description={product.description}
				/>
			</Link>
			<ActionButtons
				productId={product.id}
				onEdit={handleEdit}
				onRemove={handleRemove}
			/>
		</div>
	)
}
