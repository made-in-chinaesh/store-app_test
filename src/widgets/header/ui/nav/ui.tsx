import { items } from './config'
import { Link, useLocation } from 'react-router-dom'

import styles from './styles.module.scss'
import cn from 'classnames'

export const Nav = () => {
	const location = useLocation()

	return (
		<nav className={styles.nav}>
			<ul className={styles.list}>
				{items.map(item => {
					const isCurrentPage = item.href === location.pathname
					return (
						<Link
							className={cn(styles.link, {
								[styles.current]: isCurrentPage,
							})}
							key={item.href}
							to={item.href}
						>
							<li>{item.text}</li>
						</Link>
					)
				})}
			</ul>
		</nav>
	)
}
