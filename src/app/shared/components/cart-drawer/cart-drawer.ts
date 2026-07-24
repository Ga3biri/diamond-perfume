import { Component, inject } from '@angular/core';
import { LayoutService } from '../../../core/services/layout';
import { CartService } from '../../../core/services/cart.service';

@Component({
  selector: 'app-cart-drawer',
  imports: [],
  templateUrl: './cart-drawer.html',
  styleUrl: './cart-drawer.scss'
})
export class CartDrawer {

  layout = inject(LayoutService);
  cartService = inject(CartService);

}
