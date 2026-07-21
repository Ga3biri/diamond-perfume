import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./shared/components/header/header";
import { Footer } from "./shared/components/footer/footer";
import { CartDrawer } from "./shared/components/cart-drawer/cart-drawer";
import { WishlistDrawer } from "./shared/components/wishlist-drawer/wishlist-drawer";
import { MobileMenu } from "./shared/components/mobile-menu/mobile-menu";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, CartDrawer, WishlistDrawer, MobileMenu],
  templateUrl: './app.html',
})
export class App {}