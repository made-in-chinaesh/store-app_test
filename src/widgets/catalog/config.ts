import { IProduct } from 'entities/product/ui/product-item'

export const items: IProduct[] = [
	{
		id: 1,
		name: 'Рождение венеры',
		author: 'Сандро Боттичели',
		price: 1000000,
		imageUrl:
			'https://cs11.livemaster.ru/storage/topicavatar/600x450/5a/72/d63392e260f9faa8c4719ec5254c77b78e89i1.jpg?h=j_ifuDem8qSPIN4oS96n9w',
		sold: false,
	},
	{
		id: 2,
		name: 'Тайная вечеря',
		author: 'Леонардо да Винчи',
		price: 3000000,
		imageUrl:
			'https://static.tildacdn.com/tild6266-6134-4835-b738-373335383663/__11.png',
		sold: false,
	},
	{
		id: 3,
		name: 'Сотворение Адама',
		author: 'Микеланджело',
		price: 5000000,
		imageUrl:
			'https://www.gobelen-kartina.ru/wp-content/uploads/2019/03/sotvorenie-adama-full.jpg',
		sold: false,
	},
	{
		id: 4,
		name: 'Урок анатомии',
		author: 'Рембрандт',
		price: 1000000,
		imageUrl:
			'https://avatars.dzeninfra.ru/get-zen_doc/4457333/pub_6252d963ed4f6832b3d4b661_6252d96a78501c7beccd1024/scale_1200',
		sold: false,
	},
]
