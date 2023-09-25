import { Route, Routes } from 'react-router-dom'
import MainPage from './main-page'
import { NotFound } from './not-found'

const Routing = () => {
	return (
		<Routes>
			<Route path='/' element={<MainPage />} />
			<Route path='*' element={<NotFound />} />
		</Routes>
	)
}

export default Routing
