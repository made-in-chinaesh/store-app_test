interface SearchParams {
	search: string
}

export const paths = {
	home: '/',
	delivery: '/delivery',
	payment: '/payment',
	contacts: '/contacts',
	about: '/about',

	catalog: (params: SearchParams): string => {
		const searchParams = new URLSearchParams({ ...params })
		const url = `/?${searchParams}`

		return url
	},
}
