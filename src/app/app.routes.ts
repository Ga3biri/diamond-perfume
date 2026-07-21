import { Shop } from './features/shop/pages/shop/shop';
import { ProductDetails } from './features/shop/pages/product-details/product-details';

export const routes = [

  {
    path:'',
    loadComponent:()=>import('./features/home/pages/home/home').then(c=>c.Home)
  },

  {
    path:'shop',
    component:Shop
  },

  {
    path:'product/:id',
    component:ProductDetails
  }

];