import { Component, input, inject } from '@angular/core';
import { Product } from '../../../shared/models/product.model';
import { RouterLink } from '@angular/router';
import { CartService } from '../../../core/services/cart.service';
import { LayoutService } from '../../../core/services/layout';


@Component({
  selector: 'app-product-card',
  standalone:true,
  templateUrl:'./product-card.html',
  styleUrl:'./product-card.scss',
  imports:[
    RouterLink
  ]
})

export class ProductCard {

  product = input.required<Product>();
  private cartService = inject(CartService);
  private layout = inject(LayoutService);

  addToCart() {
    this.cartService.addItem(this.product(), 1);
    this.layout.openCart();
  }

}
