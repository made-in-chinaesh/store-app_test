import { Nav } from '../../header/ui/nav'
import { Logo } from '../../header/ui/logo'
import { InfoList } from './info-list'

import cn from 'classnames'
import styles from './styles.module.scss'

export const Footer = () => {
	return (
		<>
			<div className={styles.content}></div>
			<footer className={styles.footer}>
				<section className={cn(styles.container, 'container')}>
					<Logo />
					<Nav />
					<InfoList />
				</section>
			</footer>
		</>
	)
}
