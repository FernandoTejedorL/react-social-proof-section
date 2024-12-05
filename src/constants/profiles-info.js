import { v4 } from 'uuid';

export const PROFILES_INFO = [
	{
		id: v4(),
		alignSelf: 'flex-start',
		url: './assets/images/image-colton.jpg',
		name: 'Colton Smith',
		comment:
			'“ We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent! ”'
	},
	{
		id: v4(),
		alignSelf: 'center',
		url: './assets/images/image-irene.jpg',
		name: 'Irene Roberts',
		comment:
			'“ Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery.”'
	},
	{
		id: v4(),
		alignSelf: 'flex-end',
		url: './assets/images/image-anne.jpg',
		name: 'Anne Wallace',
		comment:
			'“ Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone! ”'
	}
];
