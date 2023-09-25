import { items } from './config'

import styles from './styles.module.scss'

export const InfoList = () => {
	return (
		<ul className={styles.list}>
			{items.map(item => (
				<a key={item.text} href={item.href} className={styles.link}>
					{item.icon}
					<li>{item.text}</li>
				</a>
			))}
		</ul>
	)
}
