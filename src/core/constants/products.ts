import { Product } from "../../app/shared/models/product.model";

export const PRODUCTS: Product[] = [

  {
    id: 1,
    name: 'Dior Sauvage Elixir',
    brand: 'Dior',
    image: 'images/products/1.jpg',
    price: 5200,
    oldPrice: 5800,
    discount: 10,
    rating: 5,
    reviews: 124,
    inStock: true,
    category: 'Men'
  },

  {
    id: 2,
    name: 'Bleu De Chanel',
    brand: 'Chanel',
    image: 'images/products/2.jpg',
    price: 4950,
    rating: 4.8,
    reviews: 91,
    inStock: true,
    category: 'Men'
  },

  {
    id: 3,
    name: 'Tom Ford Ombre Leather',
    brand: 'Tom Ford',
    image: 'images/products/3.jpg',
    price: 6100,
    oldPrice: 6700,
    discount: 9,
    rating: 5,
    reviews: 70,
    inStock: true,
    category: 'Unisex'
  }

];