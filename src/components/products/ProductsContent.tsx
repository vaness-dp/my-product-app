'use client'

import { FilterBar } from '@/components/products/FilterBar'
import { Pagination } from '@/components/products/Pagination'
import { ProductCard } from '@/components/products/product-card/ProductCard'

import { useProducts } from '@/hooks/useProducts'

export function ProductsContent() {
	const {
		filterStatus,
		setFilterStatus,
		searchQuery,
		setSearchQuery,
		currentPage,
		totalPages,
		paginatedProducts,
		handlePageChange
	} = useProducts(6)

	return (
		<div className="container mx-auto p-4">
			<h1 className="mb-4 text-3xl font-bold">Products</h1>
			<FilterBar
				filterStatus={filterStatus}
				setFilterStatusAction={setFilterStatus}
				searchQuery={searchQuery}
				setSearchQueryAction={setSearchQuery}
			/>
			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
				{paginatedProducts.map(product => (
					<ProductCard
						key={product.id}
						product={product}
						currentPage={currentPage}
						filterStatus={filterStatus}
					/>
				))}
			</div>
			<Pagination
				currentPage={currentPage}
				totalPages={totalPages}
				onPageChangeAction={handlePageChange}
			/>
		</div>
	)
}
