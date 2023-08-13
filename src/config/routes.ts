const routes = {
  home: '/',
  authors: '/authors',
  explore: '/explore',
  popularProducts: '/popular-products',
  about: '/about-us',
  contact: '/contact-us',
  purchases: '/purchases',
  wishlists: '/wishlists',
  reports: '/reports',
  questions: '/questions',
  profile: '/profile',
  checkout: '/checkout',
  help: '/help',
  licensing: '/licensing',
  refund: '/refund',
  terms: '/docs/terms.pdf',
  privacy: '/docs/policy.pdf',
  oferta: '/docs/oferta.pdf',
  password: '/password',
  feed: '/feed',
  followedShop: '/followed-authors',
  orderUrl: (tracking_number: string) =>
    `/orders/${encodeURIComponent(tracking_number)}`,
  productUrl: (slug: string) => `/products/${slug}`,
  tagUrl: (slug: string) => `/products/tags/${slug}`,
  shopUrl: (slug: string) => `/authors/${slug}`,
  product: (slug: string) => {
    return `/products/${encodeURIComponent(slug)}`;
  },
  cards: '/cards',
};
export default routes;
