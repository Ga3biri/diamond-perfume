export interface NavigationItem {
  title: string;
  link: string;
}

export const NAVIGATION: NavigationItem[] = [
  {
    title: 'Home',
    link: '/'
  },
  {
    title: 'Shop',
    link: '/shop'
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