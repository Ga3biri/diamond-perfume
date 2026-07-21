import { Component, input } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { Product } from '../../../../shared/models/product.model';

@Component({
  selector: 'app-products-grid',
  imports: [ProductCard],
  templateUrl: './products-grid.html',
  styleUrl: './products-grid.scss'
})
export class ProductsGrid {

  products = input.required<Product[]>();

}