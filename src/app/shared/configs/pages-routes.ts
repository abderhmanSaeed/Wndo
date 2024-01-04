export const CONFIG = {
  dashboard: { name: 'dashboard', route: '/dashboard' ,
  children: {
    home: { name: 'home', route: '/dashboard/home' },
  }},
  about: { name: 'About', route: '/about', },
  contact: { name: 'contact', route: '/contact', },
  productDetails: { name: 'product-details', route: '/product-details', },
};
