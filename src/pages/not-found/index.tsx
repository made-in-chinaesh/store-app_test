import styles from './styles.module.scss'
import { Button } from '../../shared/ui'
import { Link } from 'react-router-dom'

export const NotFound = () => {
	return (
		<section className={styles.section}>
			<h1>404</h1>
			<h2>Страницы не существует</h2>
			<Link to='/'>
				<Button>На главную</Button>
			</Link>
		</section>
	)
}
