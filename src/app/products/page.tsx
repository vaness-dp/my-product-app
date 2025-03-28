import { Suspense } from 'react'

import { ProductsContent } from '@/components/products/ProductsContent'

export default function ProductsPage() {
	return (
		<Suspense fallback={<div>Loading products...</div>}>
			<ProductsContent />
		</Suspense>
	)
}
