import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

export interface IProduct {
	id: number
	title: string
	description: string
	image: string
	liked: boolean
}

interface IProductStore {
	products: IProduct[]
	setProducts: (products: IProduct[]) => void
	addProduct: (product: IProduct) => void
	removeProduct: (id: number) => void
	toggleLike: (id: number) => void
	updateProduct: (id: number, updatedFields: Partial<IProduct>) => void
}

export const useProductStore = create<IProductStore>()(
	persist(
		(set, get) => ({
			products: [],
			setProducts: products => set({ products }),
			addProduct: product =>
				set(state => ({ products: [...state.products, product] })),
			removeProduct: id =>
				set(state => ({
					products: state.products.filter(p => p.id !== id)
				})),
			toggleLike: id =>
				set(state => ({
					products: state.products.map(p =>
						p.id === id ? { ...p, liked: !p.liked } : p
					)
				})),
			updateProduct: (id, updatedFields) =>
				set(state => ({
					products: state.products.map(p =>
						p.id === id ? { ...p, ...updatedFields } : p
					)
				}))
		}),
		{
			name: 'product-store',
			storage:
				typeof window !== 'undefined'
					? createJSONStorage(() => localStorage)
					: undefined
		}
	)
)
