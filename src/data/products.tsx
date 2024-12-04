export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'tshirt' | 'mug';
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Classic White T-Shirt',
    description: 'A comfortable, classic white t-shirt.',
    price: 19.99,
    image: '/images/products/1.jpg',
    category: 'tshirt',
  },
  {
    id: '2',
    name: 'Programmer Mug',
    description: 'A mug for those who live on coffee and code.',
    price: 14.99,
    image: '/images/products/2.jpg',
    category: 'mug',
  },
  {
    id: '3',
    name: 'Graphic T-Shirt',
    description: 'A t-shirt with a cool graphic design.',
    price: 24.99,
    image: '/images/products/3.jpg',
    category: 'tshirt',
  },
  {
    id: '4',
    name: 'Travel Mug',
    description: 'A sturdy travel mug for your adventures.',
    price: 19.99,
    image: '/images/products/4.jpg',
    category: 'mug',
  },
]

