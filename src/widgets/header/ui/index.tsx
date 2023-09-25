import { Nav } from './nav'
import { Logo } from './logo'

import styles from './styles.module.scss'
import cn from 'classnames'
import { Search } from './search'

export const Header = () => {
	return (
		<header className={styles.header}>
			<section className={cn(styles.container, 'container')}>
				<Logo />
				<Nav />
				<Search />
			</section>
		</header>
	)
}
