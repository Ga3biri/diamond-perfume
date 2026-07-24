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
    title: 'Categories',
    link: '/categories'
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