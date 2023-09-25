import { InputHTMLAttributes } from 'react'
import cn from 'classnames'

import styles from './styles.module.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	className?: string
}

export const Input = ({ className, ...props }: InputProps) => {
	return (
		<input className={cn(styles.input, className)} type='text' {...props} />
	)
}
