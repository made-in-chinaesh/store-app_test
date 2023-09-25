import { useQuery } from 'shared/hooks'
import { IProduct, ProductItem } from 'entities/product/ui'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { useCatalog } from './hooks'

import styles from './styles.module.scss'

interface CatalogProps {
	title: string
}

export const Catalog = ({ title }: CatalogProps) => {
	const {
		products,
		filteredProducts,
		setFilteredProducts,
		isLoading,
		actions: { addToBusket, filteredAddBusket },
	} = useCatalog()
	const { search } = useLocation()

	const param = useQuery(search)

	const searchParam = param.get('search')

	useEffect(() => {
		if (searchParam) {
			setFilteredProducts(
				products.filter((item: IProduct) => {
					const name = item.name.toUpperCase()
					const author = item.name.toUpperCase()

					if (
						name.includes(searchParam.toUpperCase()) ||
						author.includes(searchParam.toUpperCase())
					) {
						return item
					}
				}),
			)
		}
	}, [searchParam])

	return (
		<section className='container'>
			<h1 className={styles.title}>
				{searchParam ? `Результаты по поиску: ${searchParam}` : title}
			</h1>
			<div className={styles.list}>
				{searchParam ? (
					!filteredProducts.length ? (
						<h2>Ничего не найдено</h2>
					) : (
						filteredProducts.map((item: IProduct) => (
							<ProductItem
								key={item.id}
								item={item}
								onClick={() => filteredAddBusket(item.id)}
								isLoading={isLoading}
							/>
						))
					)
				) : (
					products.map((item: IProduct) => (
						<ProductItem
							key={item.id}
							item={item}
							onClick={() => addToBusket(item.id)}
							isLoading={isLoading}
						/>
					))
				)}
			</div>
		</section>
	)
}
