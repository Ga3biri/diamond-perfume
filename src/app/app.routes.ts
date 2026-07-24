import { Shop } from './features/shop/pages/shop/shop';
import { ProductDetails } from './features/shop/pages/product-details/product-details';
import { Routes } from '@angular/router';
import { BrandsPage } from './features/brands/pages/brands/brands';
import { AboutPage } from './features/about/about';
import { ContactPage } from './features/contact/contact';

export const routes: Routes = [

  {
    path:'',
    loadComponent:()=>import('./features/home/pages/home/home').then(c=>c.Home)
  },

  {
    path:'categories',
    component:Shop
  },

  // Category sub-routes (redirect to Shop with category filter)
  {
    path:'categories/men',
    component:Shop
  },
  {
    path:'categories/women',
    component:Shop
  },
  {
    path:'categories/unisex',
    component:Shop
  },
  {
    path:'categories/niche',
    component:Shop
  },
  {
    path:'categories/gift-sets',
    component:Shop
  },

  {
    path:'brands',
    component:BrandsPage
  },

  {
    path:'about',
    component:AboutPage
  },

  {
    path:'contact',
    component:ContactPage
  },

  {
    path:'product/:id',
    component:ProductDetails
  }

];
