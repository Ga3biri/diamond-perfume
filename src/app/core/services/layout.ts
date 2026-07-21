import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  searchOpened = signal(false);

  cartOpened = signal(false);

  wishlistOpened = signal(false);

  mobileMenuOpened = signal(false);

  openSearch() {
    this.searchOpened.set(true);
  }

  closeSearch() {
    this.searchOpened.set(false);
  }

  openCart() {
    this.cartOpened.set(true);
  }

  closeCart() {
    this.cartOpened.set(false);
  }

  openWishlist() {
    this.wishlistOpened.set(true);
  }

  closeWishlist() {
    this.wishlistOpened.set(false);
  }

  openMobileMenu() {
    this.mobileMenuOpened.set(true);
  }

  closeMobileMenu() {
    this.mobileMenuOpened.set(false);
  }

}