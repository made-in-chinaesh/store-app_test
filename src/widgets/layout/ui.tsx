import { Header } from '../header'
import { PropsWithChildren } from 'react'
import { Footer } from '../footer/ui'

export const Layout = ({ children }: PropsWithChildren<{}>) => {
	return (
		<section className='wrapper'>
			<Header />
			<main>{children}</main>
			<Footer />
		</section>
	)
}
