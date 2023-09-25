import { IProduct } from './types'
import { Button } from 'shared/ui'
import { CheckIcon } from 'shared/ui/icon'

import styles from './styles.module.scss'
import cn from 'classnames'

interface ProductItemProps {
	item: IProduct
	className?: string
	onClick: () => void
	isLoading?: boolean
}

export const ProductItem = ({
	item,
	className,
	onClick,
	isLoading,
}: ProductItemProps) => {
	return (
		<div className={cn(styles.item, className)}>
			<img className={styles.image} src={item.imageUrl} alt={item.name} />
			<section className={styles.section}>
				<h2 className={styles.name}>«{item.name}»</h2>
				<h3 className={styles.author}>{item.author}</h3>
				<div>
					<span className={styles.price}>{item.price}</span>
					<Button
						onClick={onClick}
						className={item.sold ? styles.checkBtn : ''}
						isLoading={isLoading}
					>
						{item.sold && <CheckIcon />}
						{item.sold ? 'В корзине' : 'Купить'}
					</Button>
				</div>
			</section>
		</div>
	)
}
