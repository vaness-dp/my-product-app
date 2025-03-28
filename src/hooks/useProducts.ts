import axios from 'axios'
import { useSearchParams } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

import { IProduct, useProductStore } from '@/store/productStore'

export function useProducts(pageSize: number = 6) {
	const { products, setProducts } = useProductStore()
	const searchParams = useSearchParams()

	const initialFilter =
		(searchParams.get('filter') as 'all' | 'liked' | 'not-liked') || 'all'
	const initialPage = Number(searchParams.get('page')) || 1

	const [filterStatus, setFilterStatus] = useState<
		'all' | 'liked' | 'not-liked'
	>(initialFilter)
	const [searchQuery, setSearchQuery] = useState('')
	const [currentPage, setCurrentPage] = useState(initialPage)

	const isFirstRender = useRef(true)
	const isDataLoaded = useRef(false)

	// Сброс текущей страницы при изменении фильтра или поиска
	useEffect(() => {
		if (isFirstRender.current) {
			isFirstRender.current = false
			return
		}
		setCurrentPage(1)
	}, [filterStatus, searchQuery])

	// Получение данных с сервера только при первом рендере
	useEffect(() => {
		if (isDataLoaded.current) return

		axios
			.get<IProduct[]>('https://fakestoreapi.com/products')
			.then(res => {
				const serverProducts = res.data.map(p => ({ ...p, liked: false }))
				const mergedFromServer = serverProducts.map(sp => {
					const localProduct = products.find(lp => lp.id === sp.id)
					return localProduct ? { ...sp, ...localProduct } : sp
				})
				const extraLocalProducts = products.filter(
					lp => !serverProducts.some(sp => sp.id === lp.id)
				)
				const mergedProducts = [...mergedFromServer, ...extraLocalProducts]
				setProducts(mergedProducts)
				isDataLoaded.current = true
			})
			.catch(err => console.error(err))
	}, [products, setProducts])

	const filteredProducts = products.filter(p => {
		if (filterStatus === 'liked' && !p.liked) return false
		if (filterStatus === 'not-liked' && p.liked) return false
		return !(
			searchQuery && !p.title.toLowerCase().includes(searchQuery.toLowerCase())
		)
	})

	const totalPages = Math.max(1, Math.ceil(filteredProducts.length / pageSize))
	const paginatedProducts = filteredProducts.slice(
		(currentPage - 1) * pageSize,
		currentPage * pageSize
	)

	const handlePageChange = (newPage: number) => {
		setCurrentPage(newPage)
	}

	return {
		filterStatus,
		setFilterStatus,
		searchQuery,
		setSearchQuery,
		currentPage,
		totalPages,
		paginatedProducts,
		handlePageChange
	}
}
