import { useLocalStorage } from 'shared/hooks'
import { items } from '../config'
import { useState } from 'react'
import { IProduct } from 'entities/product'
import axios from 'axios'

export const useCatalog = () => {
	const [products, setProducts] = useLocalStorage('products', items)
	const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([])
	const [isLoading, setIsLoading] = useState(false)

	const fetchProduct = () => {
		const request = axios.get('https://jsonplaceholder.typicode.com/posts/1')

		setIsLoading(true)
		request
			.then(res => {
				const data = res.data

				return data
			})
			.catch(e => {
				console.log(e)
			})
			.finally(() => setIsLoading(false))

		return request
	}

	const addToBusket = (id: number) => {
		fetchProduct().then(() => {
			setProducts(
				products.map((item: IProduct) => {
					if (item.id === id)
						return {
							...item,
							sold: !item.sold,
						}
					return item
				}),
			)
		})
	}

	const filteredAddBusket = (id: number) => {
		addToBusket(id)
		setFilteredProducts(
			filteredProducts.map((item: IProduct) => {
				if (item.id === id)
					return {
						...item,
						sold: !item.sold,
					}
				return item
			}),
		)
	}

	return {
		products,
		setProducts,
		filteredProducts,
		setFilteredProducts,
		isLoading,
		actions: {
			addToBusket,
			filteredAddBusket,
		},
	}
}
