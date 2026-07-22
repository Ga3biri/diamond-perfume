export interface Product {

  id: number;
  name?: string;
  brand?: string;
  image?: string;
  price?: number;
  oldPrice?: number;
  discount?: number;
  rating?: number;
  reviews?: number;
  inStock?: boolean;
  category?: string;
  description?: string;

  minPrice?: number;
  maxPrice?: number;
  isNew?: boolean;

}
