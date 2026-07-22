# Fix Tasks

## ✅ Cart Service (Create)
- [ ] Create `src/app/core/services/cart.service.ts` with signals for items, count, total

## ✅ Product Card HTML (Complete rewrite)
- [ ] Fix `src/app/features/shop/components/product-card/product-card.html` - add price, name, rating, add-to-cart button

## ✅ Product Card SCSS (Create styling)
- [ ] Fix `src/app/features/shop/components/product-card/product-card.scss` - add full card styles

## ✅ Product Details SCSS (Create styling)
- [ ] Fix `src/app/features/shop/pages/product-details/product-details.scss` - add full page styles

## ✅ Product Details TS - Add cart integration
- [ ] Update `product-details.ts` - import CartService, wire add-to-cart button

## ✅ Cart Drawer (Make functional)
- [ ] Update `cart-drawer.ts` - use CartService
- [ ] Update `cart-drawer.html` - display cart items with qty, remove, total

## ✅ Navbar - Wire cart badge to CartService
- [ ] Update `navbar.ts` - inject CartService
- [ ] Update `navbar.html` - show real cart count badge

## ✅ Categories (Make clickable - route to /shop)
- [ ] Update `categories.ts` - import RouterLink
- [ ] Update `categories.html` - add routerLink to cards and buttons

## ✅ Hero (Make "Shop Now" clickable)
- [ ] Update `hero.ts` - import RouterLink
- [ ] Update `hero.html` - add routerLink to button

## ✅ Push to GitHub
- [ ] Commit and push all changes
