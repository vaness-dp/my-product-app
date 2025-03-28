import type { IProduct } from '@/store/productStore'

export interface IProductCard {
	product: IProduct
	currentPage: number
	filterStatus: 'all' | 'liked' | 'not-liked'
}
