import { Component, input } from '@angular/core';
import { Product } from '../../../shared/models/product.model';
import { RouterLink } from '@angular/router';


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

}