import { Button, Input } from 'shared/ui'
import { useState } from 'react'
import { paths } from 'shared/routing'
import { Link } from 'react-router-dom'

import styles from './styles.module.scss'

export const Search = () => {
	const [value, setValue] = useState<string>('')
	return (
		<div className={styles.search}>
			<Input
				className={styles.input}
				type='text'
				placeholder='Поиск по названию картины'
				value={value}
				onChange={e => setValue(e.target.value)}
			/>
			<Link to={paths.catalog({ search: value })} aria-disabled={!value.length}>
				<Button type='submit' disabled={!value.length}>
					Найти
				</Button>
			</Link>
		</div>
	)
}
