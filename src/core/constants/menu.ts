import { MenuItem } from "../../app/shared/models/menu-item.model";

export const MENU: MenuItem[] = [
  {
    title: 'Home',
    link: '/'
  },
  {
    title: 'Shop',
    link: '/shop',
    children: [
      {
        title: 'Men',
        link: '/shop/men'
      },
      {
        title: 'Women',
        link: '/shop/women'
      },
      {
        title: 'Unisex',
        link: '/shop/unisex'
      },
      {
        title: 'Niche',
        link: '/shop/niche'
      },
      {
        title: 'Gift Sets',
        link: '/shop/gift-sets'
      }
    ]
  },
  {
    title: 'Brands',
    link: '/brands'
  },
  {
    title: 'About',
    link: '/about'
  },
  {
    title: 'Contact',
    link: '/contact'
  }
];