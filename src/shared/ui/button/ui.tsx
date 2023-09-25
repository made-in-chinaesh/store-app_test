import { ButtonHTMLAttributes, PropsWithChildren } from 'react'

import cn from 'classnames'
import styles from './styles.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string
	isLoading?: boolean
}

export const Button = ({
	children,
	className,
	isLoading = false,
	...props
}: PropsWithChildren<ButtonProps>) => {
	return (
		<button
			disabled={isLoading}
			className={cn(styles.btn, className)}
			{...props}
		>
			{isLoading ? <div className={styles.loader} /> : children}
		</button>
	)
}
