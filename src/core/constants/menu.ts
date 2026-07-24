import { MenuItem } from '../../app/shared/models/menu-item.model';

export const MENU: MenuItem[] = [
  {
    title: 'Home',
    link: '/'
  },
  {
    title: 'Categories',
    link: '/categories',
    children: [
      {
        title: 'Men',
        link: '/categories/men'
      },
      {
        title: 'Women',
        link: '/categories/women'
      },
      {
        title: 'Unisex',
        link: '/categories/unisex'
      },
      {
        title: 'Niche',
        link: '/categories/niche'
      },
      {
        title: 'Gift Sets',
        link: '/categories/gift-sets'
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